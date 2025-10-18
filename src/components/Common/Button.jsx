import React from 'react';
import './Common.css';

const Button = ({ children, onClick, disabled = false, variant = 'primary', type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant} ${className} ${disabled ? 'btn-disabled' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
