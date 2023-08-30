import React from 'react';

const variantsMapping = {
  h1: 'h1',
  h2: 'h2',
  body1: 'p',
};

const stylesByVariant = {
  h1: 'text-2xl',
  h2: 'text-xl',
  body1: 'text-base',
};

export default function Typography({
  children,
  variant = 'body1',
  className,
  ...props
}) {
  const Component = variantsMapping[variant];

  return (
    <Component
      className={
        className || `font-normal text-dark ${stylesByVariant[variant]}`
      }
      {...props}
    >
      {children}
    </Component>
  );
}
