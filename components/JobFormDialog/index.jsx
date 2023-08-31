'use client';

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm, FormProvider } from 'react-hook-form';
import { Dialog } from '@headlessui/react';
import JobFormStepper from '../JobFormStepper';
import Card from '../Card';

export default function JobFormDialog({
  open,
  onClose,
  onSave,
  isEdit,
  jobDetail,
}) {
  const methods = useForm({ mode: 'onBlur', defaultValues: {} });

  useEffect(() => {
    if (isEdit) {
      methods.reset({ ...jobDetail });
    } else {
      methods.unregister();
      methods.reset({});
    }
  }, [isEdit, jobDetail, open]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className='relative z-50'
    >
      <div className='fixed inset-0 flex items-center justify-center p-4 backdrop-blur-sm bg-black/50'>
        <Dialog.Panel>
          <Card className='w-[577px] relative max-sm:w-[310px] max-sm:p-4'>
            <FormProvider {...methods}>
              <JobFormStepper
                onSave={onSave}
                isEdit={isEdit}
              />
            </FormProvider>
          </Card>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

JobFormDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func,
  isEdit: PropTypes.bool,
  jobDetail: PropTypes.shape({
    companyName: PropTypes.string,
    companyLogo: PropTypes.string,
    title: PropTypes.string,
    industry: PropTypes.string,
    location: PropTypes.string,
    remoteType: PropTypes.string,
    experience: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }),
    salary: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }),
    totalEmployee: PropTypes.string,
    applyType: PropTypes.oneOf(['quick', 'external']),
  }),
};
