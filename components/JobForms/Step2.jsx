'use client';

import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { APPLY_TYPE } from '@/constants/jobForm';
import Input from '../Input';
import Field from '../Field';
import InputLabel from '../InputLabel';
import RadioInput from '../RadioInput';
import { checkNumber } from '@/functions/checkNumber';

export default function JobFormStep2() {
  const {
    register,
    getValues,
    control,
    formState: { errors },
  } = useFormContext();

  const minExperience = getValues('experience.min');
  const maxExperience = getValues('experience.max');
  const minSalary = getValues('salary.min');
  const maxSalary = getValues('salary.max');

  return (
    <div className='flex flex-col gap-6'>
      <Field>
        <InputLabel label='Experience' />
        <div className='grid grid-cols-2 gap-6 max-md:grid-cols-1 max-md:gap-4'>
          <Input
            placeholder='Minimum'
            type='number'
            error={errors.experience?.min?.message}
            {...register('experience.min', {
              valueAsNumber: true,
              validate: (value) =>
                checkNumber(maxExperience)
                  ? !!value || 'Minimum experience is required'
                  : true,
            })}
          />

          <Input
            placeholder='Maximum'
            type='number'
            error={errors.experience?.max?.message}
            {...register('experience.max', {
              valueAsNumber: true,
              validate: (value) =>
                checkNumber(minExperience)
                  ? value > minExperience ||
                    'Should be greater than minimum experience'
                  : true,
            })}
          />
        </div>
      </Field>

      <Field>
        <InputLabel label='Salary' />
        <div className='grid grid-cols-2 gap-6 max-md:grid-cols-1 max-md:gap-4'>
          <Input
            placeholder='Minimum'
            type='number'
            error={errors.salary?.min?.message}
            {...register('salary.min', {
              valueAsNumber: true,
              validate: (value) =>
                checkNumber(maxSalary)
                  ? !!value || 'Minimum salary is required'
                  : true,
            })}
          />

          <Input
            placeholder='Maximum'
            type='number'
            error={errors.salary?.max?.message}
            {...register('salary.max', {
              valueAsNumber: true,
              validate: (value) =>
                checkNumber(minSalary)
                  ? value > minSalary || 'Should be greater than minimum salary'
                  : true,
            })}
          />
        </div>
      </Field>

      <Input
        label='Total employee'
        placeholder='ex. 100'
        {...register('totalEmployee')}
      />

      <Controller
        name='applyType'
        control={control}
        render={({ field: { value, onChange } }) => (
          <RadioInput
            value={value || ''}
            label='Apply type'
            onChange={onChange}
            options={[
              { id: '01', label: 'Quick apply', value: APPLY_TYPE.QUICK },
              { id: '02', label: 'External apply', value: APPLY_TYPE.EXTERNAL },
            ]}
          />
        )}
      />
    </div>
  );
}
