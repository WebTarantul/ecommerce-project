import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react';
import { Link, useHistory } from 'react-router-dom';
import { routes } from 'src/scenes/routes';
import { useStore } from 'src/stores/createStore';
import CenteringOfForm from '../CenteringOfForm/CenteringOfForm';
import FormButton from '../Form/components/FormButton/FormButton';
import FormInput from '../Form/components/FormInput/FormInput';
import Form from '../Form/Form';
import FormFooter from '../FormFooter/FormFooter';
import s from './Login.module.scss';
import Spinner from '../Spinner';

const Login = () => {
  const store = useStore();
  const history = useHistory();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (name, evt) => {
    setValues({
      ...values,
      [name]: evt.target.value,
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
          <Link to={routes.register}>register now</Link>
        </FormFooter>
      </CenteringOfForm>
    </div>
  );
};

export default observer(Login);
