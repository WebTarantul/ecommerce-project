import React, { useState } from 'react';
import { useField } from 'formik';
import Icon from 'src/components/Icon/Icon';
import s from './FTextInput.module.scss';

const FTextInput = ({ label, labelClassName = '',children, ...props }) => {
  const [field, mete] = useField(props);

  return (
    <div className={s.wrapper}>
      <label htmlFor={props.name}>
        {label && <span className={s.labelText}>{label}</span>}
        <span className={s.inputInner}>
          <input type="text" {...field} {...props} />
          {children}
        </span>
      </label>
    </div>
  );
};

export default FTextInput;
