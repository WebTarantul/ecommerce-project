import React, { useState } from 'react';
import CenteringOfForm from '../CenteringOfForm/CenteringOfForm';
import Form from '../Form/Form';
import FormButton from '../Form/components/FormButton/FormButton';
import FormInput from '../Form/components/FormInput/FormInput';
import { Link } from 'react-router-dom';
import s from './Login.module.scss';
import FormFooter from '../FormFooter/FormFooter';
import { routes } from 'src/scenes/routes';

const Login = (props) => {
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

  const submitHandler = (evt) => {
    evt.preventDefault();
    console.log('submit');
  };

  return (
    <div className={s.wrapper}>
      <CenteringOfForm>
        <Form title="Login" onSubmit={submitHandler}>
          <FormInput
            label="Email"
            placeholder="Example@gmail.com"
            type="email"
            required
            value={values.email}
            onChange={(evt) => changeHandler('email', evt)}
            autoComplete="username"
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
          <Link className={s.resetPassword} to={routes.resetPassword} >Don’t remember password?</Link>
          <FormButton>Continue</FormButton>
        </Form>

        <FormFooter>
          I have no account,{' '}
          <Link to={routes.register}>register now</Link>
        </FormFooter>
      </CenteringOfForm>
    </div>
  );
};

export default Login;
