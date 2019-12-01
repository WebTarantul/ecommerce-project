import React, { useState, useEffect } from 'react';
import { useField } from 'formik';
import s from './FInput.module.scss';
import FPasswordInput from '../FPasswordInput/FPasswordInput';
import FTextInput from '../FTextInput/FTextInput';

const FInput = ({
  label,
  labelClassName = '',
  type,
  children,
  ...props
}) => {
  const [field, mete] = useField(props);

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
          <Input type={type} {...field} {...props} />
        </span>
      </label>
    </div>
  );
};

export default FInput;
