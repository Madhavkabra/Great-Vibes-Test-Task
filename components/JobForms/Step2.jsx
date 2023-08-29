import React from 'react';
import Input from '../Input';
import Field from '../Field';
import InputLabel from '../InputLabel';
import RadioInput from '../RadioInput';

export default function JobFormStep2() {
  return (
    <div className='flex flex-col gap-6'>
      <Field>
        <InputLabel label='Experience' />
        <div className='grid grid-cols-2 gap-6'>
          <Input
            placeholder='Minimum'
            onChange={() => {}}
          />

          <Input
            placeholder='Maximum'
            onChange={() => {}}
          />
        </div>
      </Field>

      <Field>
        <InputLabel label='Salary' />
        <div className='grid grid-cols-2 gap-6'>
          <Input
            placeholder='Minimum'
            onChange={() => {}}
          />

          <Input
            placeholder='Maximum'
            onChange={() => {}}
          />
        </div>
      </Field>

      <Input
        label='Total employee'
        placeholder='ex. 100'
        onChange={() => {}}
      />

      <RadioInput
        value='external'
        label='Apply type'
        options={[
          { id: '2323', label: 'Quick apply', value: 'quick' },
          { id: '2323232', label: 'External apply', value: 'external' },
        ]}
      />
    </div>
  );
}
