import { useFormikContext } from 'formik';
import React from 'react';
import s from './FFormButton.module.scss';
import cn from 'classnames/bind';

const cx = cn.bind(s);

const FFormButton = ({ children, className, ...props }) => {
  const formikContext = useFormikContext();

  const isDisable = !(formikContext.dirty && formikContext.isValid);

  return (
    <button
      type="submit"
      className={cx('button', className)}
      disabled={isDisable}
      {...props}
    >
      {children}
    </button>
  );
};

export default FFormButton;
