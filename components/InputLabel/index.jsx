import React from 'react';
import PropTypes from 'prop-types';

export default function InputLabel({ label, required }) {
  return (
    <label className='text-sm font-medium text-dark'>
      {label}

      {required && <span className='text-error'>*</span>}
    </label>
  );
}

InputLabel.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
};
