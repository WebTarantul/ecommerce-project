import { Formik } from 'formik';
import { observer } from 'mobx-react';
import { getSnapshot } from 'mobx-state-tree';
import React, { useEffect, useRef, useState } from 'react';
import {
  useHistory,
  useLocation,
  generatePath,
} from 'react-router-dom';
import { routes } from 'src/scenes/routes';
import { useStore } from 'src/stores/createStore';
import * as Yup from 'yup';
import FErrorMessage from '../FForm/components/FErrorMessage/FErrorMessage';
import FFormButton from '../FForm/components/FFormButton/FFormButton';
import FInput from '../FForm/components/FInput/FInput';
import FForm from '../FForm/FForm';
import Spinner from '../Spinner';
import s from './AddForm.module.scss';

const validationSchema = Yup.object({
  title: Yup.string()
    .min(15, 'Title has to be longer than 15 characters')
    .required('Title is required'),
  location: Yup.string(),
  description: Yup.string()
    .min(10, 'Description has to be longer than 10 characters')
    .required('Description is required'),
  price: Yup.number()
    .min(1, 'Price must be greater than zero')
    .required('Price is required'),
});

const AddForm = () => {
  const location = useLocation();
  const history = useHistory();
  const store = useStore();
  const [photos, setPhotos] = useState([]);
  const refTitle = useRef(null);

  const addFormClazz =
    location.state && location.state.modal
      ? `${s.addForm} ${s.modal}`
      : `${s.addForm}`;

  const formikProps = {
    initialValues: {
      title: '',
      location: '',
      description: '',
      photos: '',
      price: '',
    },

    onSubmit: async (values, { resetForm }) => {
      resetForm();
      const asyncUploadImages = async () => {
        const promises = photos.map(async (foto) => {
          const formData = new FormData();
          formData.append('image', foto);
          await store.productAdd.fetchUploadImage.run(formData);
        });
        await Promise.all(promises);
        values.photos = getSnapshot(store.productAdd.imageURLs);
        const res = await store.productAdd.addProduct.run(values);
        history.push(
          generatePath(routes.product, { id: res.data.id }),
        );
      };
      asyncUploadImages();
    },
    validationSchema,
  };

  useEffect(() => {
    refTitle.current.focus();
  }, []);

  return (
    <div className={addFormClazz}>
      <div className={s.inner}>
        <Formik {...formikProps}>
          <FForm classNameWrapper={s.form} title="Add product">
            <FInput
              label="Title"
              name="title"
              type="text"
              ref={refTitle}
              placeholder="For example: Iron man suit"
            />
            <FErrorMessage name="title" />

            <FInput
              label="Location"
              name="location"
              type="text"
              placeholder="For example: Los Angeles, CA"
            />
            <FErrorMessage name="location" />

            <FInput
              label="Description"
              name="description"
              type="textarea"
              placeholder="For example: Los Angeles, CA"
            />
            <FErrorMessage name="description" />

            <FInput
              label="Photos"
              name="photos"
              type="file"
              setPhotos={setPhotos}
            />

            <FInput
              label="Price"
              name="price"
              type="number"
              placeholder="For example: 100"
            />
            <FErrorMessage name="price" />
            {store.productAdd.addProduct.isLoading ? (
              <Spinner />
            ) : (
              <FFormButton className={s.submit}>Submit</FFormButton>
            )}
          </FForm>
        </Formik>
      </div>
    </div>
  );
};

export default observer(AddForm);
