import React from 'react';
import s from './FormButton.module.scss';

const FormButton = ({ children, ...props }) => (
  <button type="submit" className={s.button} {...props}>
    {children}
  </button>
);

export default FormButton;
