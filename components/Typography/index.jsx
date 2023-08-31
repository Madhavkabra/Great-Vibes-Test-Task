import React from 'react';
import PropTypes from 'prop-types';

const variantsMapping = {
  h1: 'h1',
  h2: 'h2',
  body1: 'p',
};

export default function Typography({
  children,
  variant = 'body1',
  fontWeight = 'font-normal',
  color = 'text-dark',
  fontSize = 'text-base',
  className = '',
  ...props
}) {
  const Component = variantsMapping[variant];

  return (
    <Component
      className={`${fontWeight} ${color} ${fontSize} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['h1', 'h2', 'body1']),
  fontWeight: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  className: PropTypes.string,
};
