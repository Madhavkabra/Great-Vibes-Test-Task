'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import Input from '../Input';

export default function JobFormStep1() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='flex flex-col gap-6'>
      <Input
        label='Job title'
        required
        placeholder='ex. UX UI Designer'
        error={errors.title?.message}
        {...register('title', { required: 'Job title is required' })}
      />

      <Input
        label='Company name'
        required
        placeholder='ex. Google'
        error={errors.companyName?.message}
        {...register('companyName', { required: 'Company name is required' })}
      />

      <Input
        label='Industry'
        required
        placeholder='ex. Information Technology '
        error={errors.industry?.message}
        {...register('industry', { required: 'Industry is required' })}
      />

      <div className='grid grid-cols-2 gap-6'>
        <Input
          label='Location'
          required
          placeholder='ex. Chennai'
          error={errors.location?.message}
          {...register('location', { required: 'Location is required' })}
        />

        <Input
          label='Remote type'
          required
          placeholder='ex. In-office'
          error={errors.remoteType?.message}
          {...register('remoteType', { required: 'Remote type is required' })}
        />
      </div>
    </div>
  );
}
