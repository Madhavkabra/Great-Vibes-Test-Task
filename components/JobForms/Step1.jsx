import React from 'react';
import Input from '../Input';

export default function JobFormStep1() {
  return (
    <div className='flex flex-col gap-6'>
      <Input
        label='Job title'
        required
        placeholder='ex. UX UI Designer'
        onChange={() => {}}
      />
      <Input
        label='Company name'
        required
        placeholder='ex. Google'
        onChange={() => {}}
      />
      <Input
        label='Industry'
        required
        placeholder='ex. Information Technology '
        onChange={() => {}}
      />

      <div className='grid grid-cols-2 gap-6'>
        <Input
          label='Location'
          required
          placeholder='ex. Chennai'
          onChange={() => {}}
        />

        <Input
          label='Remote type'
          required
          placeholder='ex. In-office'
          onChange={() => {}}
        />
      </div>
    </div>
  );
}
