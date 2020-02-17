import cn from 'classnames/bind';
import { observer } from 'mobx-react';
import { getSnapshot } from 'mobx-state-tree';
import React, { useEffect, useRef, useState } from 'react';
import {
  generatePath,
  Link,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { routes } from 'src/scenes/routes';
import { useStore } from 'src/stores/createStore';
import * as Yup from 'yup';
import CenteringOfForm from '../CenteringOfForm/CenteringOfForm';
import ErrorBar from '../ErrorBar/ErrorBar';
import FormButton from '../Form/components/FormButton/FormButton';
import FormInput from '../Form/components/FormInput/FormInput';
import Form from '../Form/Form';
import FormFooter from '../FormFooter/FormFooter';
import s from './Login.module.scss';

const cx = cn.bind(s);

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Password is required'),
  password: Yup.string()
    .min(6, 'Password has to be longer than 6 characters')
    .required('Password is required'),
});

const Login = () => {
  const [error, setError] = useState(null);
  const store = useStore();
  const history = useHistory();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const location = useLocation();
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
    try {
      evt.preventDefault();
      const savedProductsIds = getSnapshot(store.savedProducts.items);
      await store.auth.login.run({ email, password });

      if (location.state && !!location.state.fromInboxButton) {
        history.push(routes.inbox);
      } else if (location.state && !!location.state.fromChatButton) {
        history.push(
          generatePath(routes.product, {
            id: location.state.fromProductId,
          }),
          {
            fromChatButton: location.state.fromChatButton,
          },
        );
      } else {
        history.push(routes.home);
      }

      await Promise.all([
        store.savedProducts.postSavedProducts.run(savedProductsIds),
        store.savedProducts.fetchSavedProducts.run(),
      ]);
    } catch (error) {
      setError(error.response && error.response.data.error);
      console.error(error);
    }
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
          className={cx({ error: store.auth.login.isError })}
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
          <Link
            to={{ pathname: routes.register, state: location.state }}
          >
            register now
          </Link>
        </FormFooter>
      </CenteringOfForm>
      {store.auth.login.isError && (
        <ErrorBar
          text={`We are sorry but an error occurred: ${error}`}
        />
      )}
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
