/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState, forwardRef } from 'react';
import Icon from 'src/components/Icon/Icon';
import s from './FormInput.module.scss';

const FormInput = ({ children, label, name, ...props }, ref) => {
  const [isClosePassword, setIsClosePassword] = useState(true);
  const passwordType = isClosePassword ? 'password' : 'text';
  const toggleVisiblePassword = () => {
    setIsClosePassword(!isClosePassword);
  };

  return (
    <div className={s.wrapper}>
      <label htmlFor={name}>
        <span className={s.labelText}>{label}</span>
        <span className={s.inputInner}>
          {props.type === 'password' ? (
            <>
              <input
                name={name}
                id={name}
                {...props}
                type={passwordType}
              />
              <button
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
            <input type="text" name={name} {...props} ref={ref} />
          )}

          {children}
        </span>
      </label>
    </div>
  );
};

export default forwardRef(FormInput);
