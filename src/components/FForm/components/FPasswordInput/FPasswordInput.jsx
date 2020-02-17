import React, { useState } from 'react';
import FPasswordSwitcher from '../FPasswordSwitcher/FPasswordSwitcher';
import FTextInput from '../FTextInput/FTextInput';

const FPasswordInput = (props) => {
  const [isClosePassword, setIsClosePassword] = useState(true);
  const passwordType = isClosePassword ? 'password' : 'text';

  return (
    <>
      <FTextInput {...props} type={passwordType}>
        <FPasswordSwitcher
          {...{ isClosePassword, setIsClosePassword }}
        />
      </FTextInput>
    </>
  );
};
export default FPasswordInput;
