import React, { useRef, useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { useStore } from 'src/stores/createStore';
import { routes } from 'src/scenes/routes';
import { observer } from 'mobx-react';
import CenteringOfForm from '../CenteringOfForm/CenteringOfForm';
import FTextInput from '../FForm/components/FTextInput/FTextInput';
import FForm from '../FForm/FForm';
import FormButton from '../Form/components/FormButton/FormButton';
import FormFooter from '../FormFooter/FormFooter';
import FErrorMessage from '../FForm/components/FErrorMessage/FErrorMessage';
import Spinner from '../Spinner';
import s from './Register.module.scss';

const Register = () => {
  const {
    auth: { register },
  } = useStore();
  const history = useHistory();

  const formikProps = {
    initialValues: {
      email: '',
      fullName: '',
      password: '',
      confirmPassword: '',
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      fullName: Yup.string(),
      password: Yup.string()
        .min(6, 'Password has to be longer than 6 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords are not the same!')
        .required('Password confirmation is required!'),
    }),
    onSubmit: async (values, { resetForm }) => {
      await register.run(values);
      resetForm();
      history.push(routes.home);
    },
  };

  const refEmail = useRef(null);
  useEffect(() => {
    refEmail.current.focus();
  }, []);

  return (
    <>
      <CenteringOfForm>
        <Formik {...formikProps}>
          <FForm title="Register">
            <FTextInput
              name="email"
              type="email"
              label="Email"
              placeholder="Example@gmail.com"
              ref={refEmail}
            />
            <FErrorMessage name="email" />
            <FTextInput
              name="fullName"
              type="text"
              label="Full name"
              placeholder="Tony Stark"
              autoComplete="username"
            />
            <FErrorMessage name="fullName" />
            <FTextInput
              name="password"
              type="password"
              label="Password"
              autoComplete="new-password"
            />
            <FErrorMessage name="password" />
            <FTextInput
              name="confirmPassword"
              type="password"
              label="Password again"
              autoComplete="new-password"
            />
            <FErrorMessage name="confirmPassword" />
            {register.isLoading ? (
              <Spinner className={s.spinner} />
            ) : (
              <FormButton>Register</FormButton>
            )}
          </FForm>
        </Formik>
        <FormFooter>
          I already have an account,
          <Link to={routes.login}>LOG IN</Link>
        </FormFooter>
      </CenteringOfForm>
    </>
  );
};

export default observer(Register);
