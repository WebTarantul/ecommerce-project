/* eslint-disable jsx-a11y/label-has-for */
import { useField } from 'formik';
import React, { forwardRef } from 'react';
import FFileInput from '../FFileInput/FFileInput';
import FPasswordInput from '../FPasswordInput/FPasswordInput';
import FTextarea from '../FTextarea/FTextarea';
import FTextInput from '../FTextInput/FTextInput';
import s from './FInput.module.scss';

const FInput = forwardRef(
  ({ label, type, children, ...props }, ref = null) => {
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
        Input = FTextarea;
        break;
      case 'file':
        Input = FFileInput;
        break;

      default:
        Input = FTextInput;
        break;
    }

    return (
      <div className={s.wrapper}>
        <label htmlFor={props.name}>
          {label && <span className={s.labelText}>{label}</span>}
        </label>
        <span className={s.inputInner}>
          <Input
            type={type}
            ref={ref}
            id={props.name}
            {...field}
            {...props}
          />
        </span>
      </div>
    );
  },
);

export default FInput;
