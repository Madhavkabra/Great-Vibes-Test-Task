'use client';

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import InputLabel from '../InputLabel';
import FormHelperText from '../FormHelperText';

const Input = forwardRef(function Input(
  { label = '', error = '', required = false, ...props },
  ref
) {
  return (
    <div className='flex flex-col gap-1'>
      {label && (
        <InputLabel
          label={label}
          required={required}
        />
      )}

      <input
        ref={ref}
        className='py-2 px-3 rounded-1x border border-card focus:outline-primary text-sm text-dark placeholder:text-placeholder'
        {...props}
      />

      {error && <FormHelperText error={error} />}
    </div>
  );
});

Input.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
};

export default Input;
