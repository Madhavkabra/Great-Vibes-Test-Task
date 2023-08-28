'use client';

import React from 'react';
import PropTypes from 'prop-types';

const stylesByVariant = {
  primary: 'shadow-sm bg-primary text-white  ',
  secondary: 'bg-white border border-primary text-primary',
};

export default function Button({ label, variant = 'primary', ...props }) {
  return (
    <button
      className={`capitalize py-2 px-4 rounded-md text-base font-medium ${stylesByVariant[variant]}`}
      {...props}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
};
