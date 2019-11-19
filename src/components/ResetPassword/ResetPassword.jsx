import React from 'react';
import s from './ResetPassword.module.scss';
import Form from '../Form/Form';
import FormInput from '../Form/components/FormInput/FormInput';
import FormButton from '../Form/components/FormButton/FormButton';
import CenteringOfForm from '../CenteringOfForm/CenteringOfForm';

const ResetPassword = () => (
  <div className={s.wrapper}>
    <CenteringOfForm>
      <Form title="Restore Password">
        <FormInput
          label="email"
          name="password"
          placeholder="Example@gmail.com"
        />
        <FormButton type="submit">Continue</FormButton>
      </Form>
    </CenteringOfForm>
  </div>
);

export default ResetPassword;
