import React from 'react';
import PropTypes from 'prop-types';

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
        <label className='text-sm font-medium text-dark'>
          {label}

          {required && <span className='text-error'>*</span>}
        </label>
      )}

      <input
        onChange={onChange}
        className='py-2 px-3 rounded-1x border border-card focus:outline-primary text-sm text-dark placeholder:text-placeholder'
        {...props}
      />

      {error && (
        <label className='text-xs font-medium text-error'>{error}</label>
      )}
    </div>
  );
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
};
