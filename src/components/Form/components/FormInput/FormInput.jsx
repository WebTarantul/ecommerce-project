import React from 'react';
import s from './FormInput.module.scss';
import FormPasswordInput from '../FormPasswordInput/FormPasswordInput';
import FormTextInput from '../FormTextInput/FormTextInput';

const FormInput = ({
  children,
  label,
  labelClassName = '',
  name,
  ...props
}) => {
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
          <Input {...{ name, ...props }} />
          {children}
        </span>
      </label>
    </div>
  );
};

export default FormInput;
