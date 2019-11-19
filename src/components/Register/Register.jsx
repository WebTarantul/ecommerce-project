/* eslint-disable jsx-a11y/anchor-is-valid */
import { Formik, ErrorMessage } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'src/scenes/routes';
import CenteringOfForm from '../CenteringOfForm/CenteringOfForm';
import FTextInput from '../FForm/components/FTextInput/FTextInput';
import FForm from '../FForm/FForm';
import FormButton from '../Form/components/FormButton/FormButton';
import FormFooter from '../FormFooter/FormFooter';
import * as Yup from 'yup';
import FErrorMessage from '../FForm/components/FErrorMessage/FErrorMessage';

const Register = () => {
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
    onSubmit: (values, {setSubmitting, setErrors, setStatus, resetForm}) => {
      console.log({values})
      resetForm();
    }
  };

  return (
    <>
      <CenteringOfForm>
        <Formik {...formikProps}>
          {(formik) => (
            <FForm title="Register" >
              <FTextInput
                name="email"
                type="email"
                label="Email"
                placeholder="Example@gmail.com"
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
              <FormButton>Register</FormButton>
            </FForm>
          )}
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
