/* eslint-disable jsx-a11y/label-has-for */
import { useField } from 'formik';
import React, { forwardRef } from 'react';
import FPasswordInput from '../FPasswordInput/FPasswordInput';
import FTextInput from '../FTextInput/FTextInput';
import s from './FInput.module.scss';

const FInput = ({ label, type, children, ...props }, ref) => {
  const [field] = useField(props);

  let Input;

  switch (type) {
    case 'email':
      Input = FTextInput;
      break;
    case 'password':
      Input = FPasswordInput;
      break;
    case 'textarea':
      break;
    case 'file':
      break;

    default:
      Input = FTextInput;
      break;
  }

  return (
    <div className={s.wrapper}>
      <label htmlFor={props.name}>
        {label && <span className={s.labelText}>{label}</span>}
        <span className={s.inputInner}>
          <Input type={type} {...field} ref={ref} {...props} />
        </span>
      </label>
    </div>
  );
};

export default forwardRef(FInput);
