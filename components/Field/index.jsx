import React from 'react';
import PropTypes from 'prop-types';

export default function Field({ children }) {
  return <div className='flex flex-col gap-1'>{children}</div>;
}

Field.propTypes = {
  children: PropTypes.node.isRequired,
};
