import React, { useState, forwardRef } from 'react';
import { useField } from 'formik';
import Icon from 'src/components/Icon/Icon';
import s from './FTextInput.module.scss';

const FTextInput = forwardRef(
  ({ label, labelClassName = '', ...props },ref) => {
    const [field, meta] = useField(props);
    const [isClosePassword, setIsClosePassword] = useState(true);
    const passwordType = isClosePassword ? 'password' : 'text';
    const toggleVisiblePassword = () => {
      setIsClosePassword(!isClosePassword);
    };

    return (
      <div className={s.wrapper}>
        <label htmlFor={props.name}>
          {label && <span className={s.labelText}>{label}</span>}
          <span className={s.inputInner}>
            {props.type === 'password' ? (
              <>
                <input {...field} {...props} type={passwordType} />
                <button
                  tabIndex="-1"
                  type="button"
                  className={s.eyeButton}
                  onClick={toggleVisiblePassword}
                >
                  {isClosePassword ? (
                    <Icon className={s.icon} name="eye" />
                  ) : (
                    <Icon
                      className={s.icon}
                      fillBody="#000"
                      fillCenter="#fff"
                      name="eye"
                    />
                  )}
                </button>
              </>
            ) : (
              <input type="text" {...field} {...props} ref={ref} />
            )}
            {props.children}
          </span>
        </label>
      </div>
    );
  },
);

export default FTextInput;
