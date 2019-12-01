import React, { forwardRef } from 'react';
import FormPasswordInput from '../FormPasswordInput/FormPasswordInput';
import FormTextInput from '../FormTextInput/FormTextInput';
import s from './FormInput.module.scss';

const FormInput = ({ children, label, name, ...props }, ref) => {
  let Input;

  switch (props.type) {
    case 'text':
      Input = FormTextInput;
      break;
    case 'password':
      Input = FormPasswordInput;
      break;
    default:
      Input = FormTextInput;
      break;
  }
  return (
    <div className={s.wrapper}>
      <label htmlFor={name}>
        <span className={s.labelText}>{label}</span>
        <span className={s.inputInner}>
          <Input {...{ ref, name, ...props }} />
          {children}
        </span>
      </label>
    </div>
  );
};

export default forwardRef(FormInput);
