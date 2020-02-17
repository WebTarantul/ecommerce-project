import React from 'react';
import s from './FormButton.module.scss';

const FormButton = ({ children, className, ...props }) => (
  <button type="submit" className={`${s.button} ${className}`} {...props}>
    {children}
  </button>
);

export default FormButton;
