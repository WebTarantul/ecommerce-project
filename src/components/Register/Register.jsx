/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'src/scenes/routes';
import * as Yup from 'yup';
import CenteringOfForm from '../CenteringOfForm/CenteringOfForm';
import FErrorMessage from '../FForm/components/FErrorMessage/FErrorMessage';
import FFormButton from '../FForm/components/FFormButton/FFormButton';
import FPasswordInput from '../FForm/components/FPasswordInput/FPasswordInput';
import FTextInput from '../FForm/components/FTextInput/FTextInput';
import FInput from '../FForm/components/FInput/FInput';
import FForm from '../FForm/FForm';
import FormFooter from '../FormFooter/FormFooter';

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
  const formikProps = {
    initialValues: {
      email: '',
      fullName: '',
      password: '',
      confirmPassword: '',
    },

    validationSchema,
    onSubmit: (values, { resetForm }) => {
      resetForm();
    },
  };

  return (
    <>
      <CenteringOfForm>
        <Formik {...formikProps}>
          <FForm title="Register">
            <FInput
              name="email"
              type="email"
              label="Email"
              placeholder="Example@gmail.com"
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
      </CenteringOfForm>
    </>
  );
};

export default Register;
