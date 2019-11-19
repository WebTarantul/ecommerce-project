import React, {useState} from 'react';
import PropTypes from 'prop-types';
import s from './FormInput.module.scss';
import Icon from 'src/components/Icon/Icon';

const FormInput = ({
  children,
  label,
  labelClassName = '',
  name,
  ...props
}) => {
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
              <input name={name} {...props} type={passwordType} />
              <button
                type="button"
                className={s.eyeButton}
                onClick={toggleVisiblePassword}
              >
                {isClosePassword ? (
                  <Icon className={s.icon} name="eye" />

                ):(
                  <Icon className={s.icon} fillBody="#000" fillCenter="#fff" name="eye" />

                )}
              </button>
            </>
          ) : (
            <input type="text" name={name} {...props} />
          )}

          {children}
        </span>
      </label>
    </div>
  );
};

FormInput.propTypes = {
  // bla: PropTypes.string,
};

FormInput.defaultProps = {
  // bla: 'test',
};

export default FormInput;
