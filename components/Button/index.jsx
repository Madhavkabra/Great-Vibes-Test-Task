'use client';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { BUTTON_VARIANT } from '@/constants/button';
import Loader from '../Loader';

const stylesByVariant = {
  [BUTTON_VARIANT.PRIMARY]:
    'shadow-sm bg-primary text-white rounded-md disabled:opacity-80',
  [BUTTON_VARIANT.SECONDARY]:
    'bg-white border border-primary text-primary rounded-1x',
};

export default function Button({
  label,
  className,
  variant = BUTTON_VARIANT.PRIMARY,
  fullWidth = false,
  height = 'h-10',
  loading = false,
  ...props
}) {
  return (
    <button
      className={cx(
        `flex justify-center items-center capitalize py-2 px-4 text-base font-medium hover:opacity-80 focus:outline-transparent ${height} ${stylesByVariant[variant]}`,
        {
          'w-full': fullWidth,
          'w-fit': !fullWidth,
          [className]: className,
        }
      )}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <Loader
          height='h-4'
          width='w-4'
        />
      ) : (
        label
      )}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([BUTTON_VARIANT.PRIMARY, BUTTON_VARIANT.SECONDARY]),
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  height: PropTypes.string,
};
