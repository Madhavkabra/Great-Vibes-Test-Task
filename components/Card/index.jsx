import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ children, className = '' }) {
  return (
    <div className={`rounded-lg border border-card bg-white p-8 ${className}`}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
