import React, { useState } from 'react';
import Icon from 'src/components/Icon/Icon';
import s from './FPasswordSwitcher.module.scss';

const FPasswordSwitcher = ({
  isClosePassword,
  setIsClosePassword,
}) => {
  const toggleVisiblePassword = () => {
    setIsClosePassword(!isClosePassword);
  };
  return (
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
  );
};

export default FPasswordSwitcher;
