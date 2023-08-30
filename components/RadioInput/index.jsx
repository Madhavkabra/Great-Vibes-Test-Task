import { RadioGroup } from '@headlessui/react';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import FormHelperText from '../FormHelperText';
import Field from '../Field';
import InputLabel from '../InputLabel';

export default function RadioInput({
  label,
  value,
  onChange,
  options,
  direction = 'row',
  error = '',
  required = false,
  ...props
}) {
  const isRowDirection = direction === 'row';

  return (
    <Field>
      <RadioGroup
        value={value}
        onChange={onChange}
        {...props}
      >
        <InputLabel
          label={label}
          required={required}
        />

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

      {error && <FormHelperText error={error} />}
    </Field>
  );
}

RadioInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  direction: PropTypes.oneOf(['row', 'column']),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};
