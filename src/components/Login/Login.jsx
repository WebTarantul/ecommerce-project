import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
import { getSnapshot } from 'mobx-state-tree';
import {
  Link,
  useHistory,
  useLocation,
  generatePath,
} from 'react-router-dom';
import cn from 'classnames/bind';
import { routes } from 'src/scenes/routes';
import { useStore } from 'src/stores/createStore';
import CenteringOfForm from '../CenteringOfForm/CenteringOfForm';
import FormButton from '../Form/components/FormButton/FormButton';
import FormInput from '../Form/components/FormInput/FormInput';
import Form from '../Form/Form';
import FormFooter from '../FormFooter/FormFooter';
import s from './Login.module.scss';
import Spinner from '../Spinner';
import ErrorBar from '../ErrorBar/ErrorBar';

const cx = cn.bind(s);

const Login = () => {
  const [error, setError] = useState(null);
  const store = useStore();
  const history = useHistory();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const location = useLocation();

  const changeHandler = (name, evt) => {
    setValues({
      ...values,
      [name]: evt.target.value,
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
            autoComplete="username"
            ref={refEmail}
          />
          <FormInput
            className={s.password}
            label="Password"
            type="password"
            required
            autoComplete="current-password"
            value={values.password}
            onChange={(evt) => changeHandler('password', evt)}
          />
          <Link className={s.resetPassword} to={routes.resetPassword}>
            Don’t remember password?
          </Link>
          {store.auth.login.isLoading ? (
            <Spinner className={s.spinner} />
          ) : (
            <FormButton>Continue</FormButton>
          )}
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
