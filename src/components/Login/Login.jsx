import { observer } from 'mobx-react';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { routes } from 'src/scenes/routes';
import { useStore } from 'src/stores/createStore';
import * as Yup from 'yup';
import CenteringOfForm from '../CenteringOfForm/CenteringOfForm';
import FormButton from '../Form/components/FormButton/FormButton';
import FormInput from '../Form/components/FormInput/FormInput';
import Form from '../Form/Form';
import FormFooter from '../FormFooter/FormFooter';
import s from './Login.module.scss';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Password is required'),
  password: Yup.string()
    .min(6, 'Password has to be longer than 6 characters')
    .required('Password is required'),
});

const Login = () => {
  const store = useStore();
  const history = useHistory();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [showError, setShowError] = useState({});
  const [isValid, setIsValid] = useState(false);

  const changeHandler = (name, evt) => {
    setValues({
      ...values,
      [name]: evt.target.value,
    });

    validation(values, setErrors, setIsValid);
  };

  const blurHandler = (name) => {
    setShowError({
      ...showError,
      [name]: !!errors[name],
    });
  };

  const submitHandler = async (evt, { email, password }) => {
    evt.preventDefault();
    await store.auth.login.run({ email, password });
    history.push(routes.home);
  };

  const refEmail = useRef(null);
  useEffect(() => {
    refEmail.current.focus();
  }, []);

  return (
    <div className={s.wrapper}>
      <CenteringOfForm>
        <Form
          title="Login"
          onSubmit={(evt) => submitHandler(evt, values)}
        >
          <FormInput
            label="Email"
            placeholder="Example@gmail.com"
            type="email"
            required
            value={values.email}
            onChange={(evt) => changeHandler('email', evt)}
            onBlur={() => blurHandler('email')}
            autoComplete="username"
            ref={refEmail}
          />
          {errors.email && showError.email && (
            <p className={s.error}>{errors.email}</p>
          )}
          <FormInput
            className={s.password}
            label="Password"
            type="password"
            required
            autoComplete="current-password"
            value={values.password}
            onChange={(evt) => changeHandler('password', evt)}
            onBlur={() => blurHandler('password')}
          />
          {errors.password && showError.password && (
            <p className={s.error}>{errors.password}</p>
          )}
          <Link className={s.resetPassword} to={routes.resetPassword}>
            Don’t remember password?
          </Link>
          <FormButton disabled={!isValid}>Continue</FormButton>
        </Form>

        <FormFooter>
          I have no account,{' '}
          <Link to={routes.register}>register now</Link>
        </FormFooter>
      </CenteringOfForm>
    </div>
  );
};

export default observer(Login);

function validation(values, setErrors, setIsValid) {
  schema.isValid(values).then((valid) => {
    setIsValid(valid);
  });

  schema
    .validate(values, {
      abortEarly: false,
    })
    .then((fieldsValidated) => {
      setErrors({});
    })
    .catch((errors) => {
      const allErrors = {};
      errors.inner.map((error) => {
        allErrors[error.path] = error.message;
        return null;
      });
      setErrors(allErrors);
    });
}
