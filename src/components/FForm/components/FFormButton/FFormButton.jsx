import React, { useState, useEffect } from 'react';
import s from './FFormButton.module.scss';
import { useField, useFormik, useFormikContext } from 'formik';

const FFormButton = ({ children, className, ...props }) => {
  const formikContext = useFormikContext();
  const [isDisable, setIsDisable] = useState(true);
  useEffect(() => {
    setIsDisable(!(formikContext.dirty && formikContext.isValid));
  }, [formikContext]);
  return (
    <button
      type="submit"
      className={`${s.button} ${className}`}
      disabled={isDisable}
      {...props}
    >
      {children}
    </button>
  );
};

export default FFormButton;