import React from 'react';
import PropTypes from 'prop-types';

export default function FormHelperText({ error }) {
  return <label className='text-xs font-medium text-error'>{error}</label>;
}

FormHelperText.propTypes = {
  error: PropTypes.string.isRequired,
};
