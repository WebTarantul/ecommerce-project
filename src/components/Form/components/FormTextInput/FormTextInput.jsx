import React from 'react';
import s from './FormTextInput.module.scss';

const FormTextInput = ({ name, ...props }) => (
  <input type="text" name={name} {...props} />
);

export default FormTextInput;
