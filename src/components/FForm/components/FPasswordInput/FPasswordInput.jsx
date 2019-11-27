import React, { useState } from 'react';
import { useField } from 'formik';
import Icon from 'src/components/Icon/Icon';
import s from './FPasswordInput.module.scss';
import FTextInput from '../FTextInput/FTextInput';

const FPasswordInput = (props) => {
  const [field, meta] = useField(props);
  const [isClosePassword, setIsClosePassword] = useState(true);
  const passwordType = isClosePassword ? 'password' : 'text';
  const toggleVisiblePassword = () => {
    setIsClosePassword(!isClosePassword);
  };
  return (
    <>
      <FTextInput {...field} {...props} type={passwordType}>
        <button
          type="button"
          className={s.eyeButton}
          onClick={toggleVisiblePassword}
          tabIndex="-1"
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
      </FTextInput>
    </>
  );
};

export default FPasswordInput;
