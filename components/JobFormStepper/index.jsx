'use client';

import { createJob } from '@/apis/job/create';
import React, { useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import JobFormStep1 from '../JobForms/Step1';
import JobFormStep2 from '../JobForms/Step2';
import Button from '../Button';
import Typography from '../Typography';

export default function JobFormStepper({ onSave }) {
  const {
    watch,
    trigger,
    formState: { errors },
  } = useFormContext();
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = watch();

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);

    try {
      const body = Object.values(formData).reduce(
        (acc, curr) => ({
          ...acc,
          ...curr,
        }),
        {}
      );

      const res = await createJob(body);
      onSave(res);
    } catch (error) {
      console.error({ error });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClickNextButton = async () => {
    await trigger();
    const isError = !!Object.keys(errors).length;

    switch (activeStep) {
      case 0:
        !isError && setActiveStep(1),
          setFormValues({ ...formValues, one: form });
        break;

      default:
        !isError && handleSubmit({ ...formValues, two: form });
        break;
    }
  };

  const getStepContent = useMemo(() => {
    switch (activeStep) {
      case 0:
        return <JobFormStep1 />;
      case 1:
        return <JobFormStep2 />;
    }
  }, [activeStep]);

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex justify-between items-center'>
        <Typography variant='h2'>Create a job</Typography>
        <Typography className='font-medium'>Step {activeStep + 1}</Typography>
      </div>

      <div className='flex flex-col gap-24'>
        {getStepContent}

        <Button
          label={activeStep === 0 ? 'Next' : 'Save'}
          className='self-end'
          onClick={handleClickNextButton}
          disabled={isSubmitting}
        />
      </div>
    </div>
  );
}

JobFormStepper.propTypes = {
  onSave: PropTypes.func,
};
