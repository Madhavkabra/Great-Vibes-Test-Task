'use client';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { BUTTON_VARIANT } from '@/constants/button';

const stylesByVariant = {
  [BUTTON_VARIANT.PRIMARY]:
    'shadow-sm bg-primary text-white rounded-md disabled:opacity-40',
  [BUTTON_VARIANT.SECONDARY]:
    'bg-white border border-primary text-primary rounded-1x',
};

export default function Button({
  label,
  className,
  variant = BUTTON_VARIANT.PRIMARY,
  fullWidth = false,
  height = 'h-10',
  ...props
}) {
  return (
    <button
      className={cx(
        `capitalize py-2 px-4 text-base font-medium hover:opacity-80 focus:outline-transparent ${height} ${stylesByVariant[variant]}`,
        {
          'w-full': fullWidth,
          'w-fit': !fullWidth,
          [className]: className,
        }
      )}
      {...props}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([BUTTON_VARIANT.PRIMARY, BUTTON_VARIANT.SECONDARY]),
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  height: PropTypes.string,
};
