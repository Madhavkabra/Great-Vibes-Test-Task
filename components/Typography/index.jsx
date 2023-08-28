import React from 'react';

const variantsMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
};

const stylesByVariant = {
  h1: 'text-2xl',
  h2: 'text-xl',
  h3: 'text-xl',
  h4: 'text-lg',
  h5: 'text-lg',
  h6: 'text-lg',
  body1: 'text-base',
  body2: 'text-sm',
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
