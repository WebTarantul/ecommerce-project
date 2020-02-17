import React from 'react';
import Modal from 'src/components/Modal/Modal';
import FForm from 'src/components/FForm/FForm';
import FFormButton from 'src/components/FForm/components/FFormButton/FFormButton';
import { Formik } from 'formik';
import Avatar from 'src/components/Avatar/Avatar';
import FInput from 'src/components/FForm/components/FInput/FInput';
import FErrorMessage from 'src/components/FForm/components/FErrorMessage/FErrorMessage';
import * as Yup from 'yup';
import { observer } from 'mobx-react';
import { useHistory, generatePath } from 'react-router-dom';
import { routes } from 'src/scenes/routes';
import Spinner from 'src/components/Spinner';
import s from './ChatWithSellerModal.module.scss';

const validationSchema = Yup.object({
  message: Yup.string()
    .required('Field is required')
    .min(10, 'Minimum number of characters is 10'),
});

const ChatWithSellerModal = ({ user, product, ...props }) => {
  const history = useHistory();
  const formikProps = {
    initialValues: {
      message: '',
    },
    validationSchema,
    async onSubmit(values) {
      try {
        const chatId = await product.createChat.run(values.message);
        history.push(generatePath(routes.inbox, { chatId }));
      } catch (error) {
        console.error(error);
      }
    },
  };

  return (
    <Modal className={s.modal} {...props}>
      <Formik {...formikProps}>
        <FForm
          title="Contact seller"
          classNameWrapper={s.formWrapper}
          className={s.form}
        >
          <h2 className={s.header}>
            Subject: <span>{product.title}</span>
          </h2>
          <UserInfo {...{ user }} />
          <FInput
            name="message"
            type="textarea"
            label="Message"
            className={s.message}
          />
          <FErrorMessage name="message" />
          {product.createChat.isLoading ? (
            <Spinner />
          ) : (
            <FFormButton>Submit</FFormButton>
          )}
        </FForm>
      </Formik>
    </Modal>
  );
};

export default observer(ChatWithSellerModal);

function UserInfo({ user }) {
  return (
    <div className={s.userInfo}>
      <div className={s.left}>
        <Avatar size="72px" {...{ user }} />
      </div>
      <div className={s.right}>
        <p className={s.name}>
          <b>{user.fullName}</b>
        </p>
        <address className={s.location}>{user.location}</address>
      </div>
    </div>
  );
}
