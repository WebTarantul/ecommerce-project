import React, { useState } from 'react';
import s from './FormPasswordInput.module.scss';
import Icon from 'src/components/Icon/Icon';

const FormPasswordInput = ({ name, ...props }) => {
  const [isClosePassword, setIsClosePassword] = useState(true);
  const passwordType = isClosePassword ? 'password' : 'text';
  const toggleVisiblePassword = () => {
    setIsClosePassword(!isClosePassword);
  };

  return (
    <>
      <input name={name} {...props} type={passwordType} />
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
  );
};

export default FormPasswordInput;
