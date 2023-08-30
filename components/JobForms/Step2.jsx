import React from 'react';
import Input from '../Input';
import Field from '../Field';
import InputLabel from '../InputLabel';
import RadioInput from '../RadioInput';
import { useFormContext, Controller } from 'react-hook-form';

export default function JobFormStep2() {
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='flex flex-col gap-6'>
      <Field>
        <InputLabel
          label='Experience'
          required
        />
        <div className='grid grid-cols-2 gap-6'>
          <Input
            placeholder='Minimum'
            type='number'
            error={errors.experience?.min?.message}
            {...register('experience.min', {
              required: 'Experience is required',
              valueAsNumber: true,
            })}
          />

          <Input
            placeholder='Maximum'
            type='number'
            error={errors.experience?.max?.message}
            {...register('experience.max', {
              required: 'Experience is required',
              valueAsNumber: true,
              validate: (value) =>
                value > getValues('experience.min') ||
                'Should be greater than minimum experience',
            })}
          />
        </div>
      </Field>

      <Field>
        <InputLabel
          label='Salary'
          required
        />
        <div className='grid grid-cols-2 gap-6'>
          <Input
            placeholder='Minimum'
            type='number'
            error={errors.salary?.min?.message}
            {...register('salary.min', {
              required: 'Salary is required',
              valueAsNumber: true,
            })}
          />

          <Input
            placeholder='Maximum'
            type='number'
            error={errors.salary?.max?.message}
            {...register('salary.max', {
              required: 'Salary is required',
              valueAsNumber: true,
              validate: (value) =>
                value > getValues('salary.min') ||
                'Should be greater than minimum salary',
            })}
          />
        </div>
      </Field>

      <Input
        required
        label='Total employee'
        placeholder='ex. 100'
        error={errors.totalEmployee?.message}
        {...register('totalEmployee', {
          required: 'Total employee is required',
        })}
      />

      <Controller
        name='applyType'
        rules={{ required: 'Apply type is required' }}
        render={({ field: { value, onChange } }) => (
          <RadioInput
            value={value}
            label='Apply type'
            onChange={onChange}
            error={errors.applyType?.message}
            required
            options={[
              { id: '01', label: 'Quick apply', value: 'quick' },
              { id: '02', label: 'External apply', value: 'external' },
            ]}
          />
        )}
      />
    </div>
  );
}
