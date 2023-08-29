import { RadioGroup } from '@headlessui/react';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default function RadioInput({
  label,
  value,
  onChange,
  options,
  direction = 'row',
}) {
  const isRowDirection = direction === 'row';

  return (
    <RadioGroup
      value={value}
      onChange={onChange}
    >
      <RadioGroup.Label className='font-medium text-sm'>
        {label}
      </RadioGroup.Label>

      <div
        className={cx('gap-4 flex', {
          'py-2': isRowDirection,
          'flex-col': !isRowDirection,
        })}
      >
        {options.map((option) => (
          <RadioGroup.Option
            key={option.id}
            value={option.value}
            className={
              'relative flex cursor-pointer focus:outline-none gap-1 items-center text-sm font-normal text-placeholder'
            }
          >
            {({ checked }) => (
              <>
                <div
                  className={cx(
                    'h-5 w-5 rounded-full flex justify-center items-center',
                    {
                      'border-[6px] border-primary': checked,
                      'border-2 border-card': !checked,
                    }
                  )}
                />
                {option.label}
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}

RadioInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['row', 'column']),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};
