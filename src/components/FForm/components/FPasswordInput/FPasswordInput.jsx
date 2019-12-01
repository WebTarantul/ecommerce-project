import React, { useState } from 'react';
import { useField } from 'formik';
import Icon from 'src/components/Icon/Icon';
import s from './FPasswordInput.module.scss';
import FTextInput from '../FTextInput/FTextInput';
import FPasswordSwitcher from '../FPasswordSwitcher/FPasswordSwitcher';

const FPasswordInput = (props) => {
  const [isClosePassword, setIsClosePassword] = useState(true);
  const passwordType = isClosePassword ? 'password' : 'text';

  return (
    <>
      <FTextInput {...props} type={passwordType} >
        <FPasswordSwitcher  {...{isClosePassword, setIsClosePassword}} />
      </FTextInput>

    </>
  );
};

export default FPasswordInput;
