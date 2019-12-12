import { useFormikContext } from 'formik';
import React from 'react';
import s from './FFormButton.module.scss';

const FFormButton = ({ children, className, ...props }) => {
  const formikContext = useFormikContext();

  const isDisable = !(formikContext.dirty && formikContext.isValid);

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
