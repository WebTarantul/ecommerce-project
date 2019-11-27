import React, { useState } from 'react';
import { useField } from 'formik';
import Icon from 'src/components/Icon/Icon';
import s from './FTextInput.module.scss';

const FTextInput = ({ children, ...props }) => {

  return (
    <span className={s.inputInner}>
      <input type="text" {...props} />
      {children}
    </span>
  );
};

export default FTextInput;
