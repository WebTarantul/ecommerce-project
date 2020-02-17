import React, { forwardRef } from 'react';
import s from './FormTextInput.module.scss';

const FormTextInput = ({ name, ...props }, ref) => (
  <input type="text" name={name} ref={ref} {...props} />
);

export default forwardRef(FormTextInput);
