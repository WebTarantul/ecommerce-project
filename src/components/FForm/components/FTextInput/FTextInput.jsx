import React, { forwardRef } from 'react';
import s from './FTextInput.module.scss';

const FTextInput = forwardRef(
  ({ children, ...props }, ref = null) => {
    return (
      <span className={s.inputInner}>
        <input type="text" ref={ref} {...props} />
        {children}
      </span>
    );
  },
);

export default FTextInput;
