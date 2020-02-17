/* eslint-disable jsx-a11y/anchor-is-valid */
import { Formik } from 'formik';
import { observer } from 'mobx-react';
import React, { useEffect, useRef, useState } from 'react';
import {
  Link,
  useHistory,
  useLocation,
  generatePath,
} from 'react-router-dom';
import { routes } from 'src/scenes/routes';
import { useStore } from 'src/stores/createStore';
import cn from 'classnames/bind';
import * as Yup from 'yup';
import CenteringOfForm from '../CenteringOfForm/CenteringOfForm';
import FErrorMessage from '../FForm/components/FErrorMessage/FErrorMessage';
import FFormButton from '../FForm/components/FFormButton/FFormButton';
import FInput from '../FForm/components/FInput/FInput';
import FForm from '../FForm/FForm';
import FormFooter from '../FormFooter/FormFooter';
import s from './Register.module.scss';
import ErrorBar from '../ErrorBar/ErrorBar';

const cx = cn.bind(s);
const validationSchema = Yup.object({
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
});

const Register = () => {
  const [error, setError] = useState(null);
  const location = useLocation();
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

    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await register.run(values);
        resetForm();
        if (location.state && !!location.state.fromInboxButton) {
          history.push(routes.inbox);
        } else if (
          location.state &&
          !!location.state.fromChatButton
        ) {
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
      } catch (err) {
        setError(err.response.data.error);
      }
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
          <FForm
            title="Register"
            classNameWrapper={cx({ error: register.isError })}
          >
            <FInput
              name="email"
              type="email"
              label="Email"
              placeholder="Example@gmail.com"
              ref={refEmail}
            />
            <FErrorMessage name="email" />
            <FInput
              name="fullName"
              type="text"
              label="Full name"
              placeholder="Tony Stark"
              autoComplete="username"
            />
            <FErrorMessage name="fullName" />
            <FInput
              name="password"
              type="password"
              label="Password"
              autoComplete="new-password"
            />
            <FErrorMessage name="password" />
            <FInput
              name="confirmPassword"
              type="password"
              label="Password again"
              autoComplete="new-password"
            />
            <FErrorMessage name="confirmPassword" />
            <FFormButton>Register</FFormButton>
          </FForm>
        </Formik>
        <FormFooter>
          I already have an account,
          <Link to={routes.login}>LOG IN</Link>
        </FormFooter>
        {register.isError && (
          <ErrorBar
            text={`We are sorry but an error occurred: ${error}`}
          />
        )}
      </CenteringOfForm>
    </>
  );
};

export default observer(Register);
