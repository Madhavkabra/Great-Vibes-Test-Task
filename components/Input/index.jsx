'use client';

import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '../InputLabel';
import FormHelperText from '../FormHelperText';

export default function Input({
  onChange,
  label = '',
  error = '',
  required = false,
  ...props
}) {
  return (
    <div className='flex flex-col gap-1'>
      {label && (
        <InputLabel
          label={label}
          required={required}
        />
      )}

      <input
        onChange={onChange}
        className='py-2 px-3 rounded-1x border border-card focus:outline-primary text-sm text-dark placeholder:text-placeholder'
        {...props}
      />

      {error && <FormHelperText error={error} />}
    </div>
  );
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
};
