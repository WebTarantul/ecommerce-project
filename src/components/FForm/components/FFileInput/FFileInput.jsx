/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-for */
import { useFormikContext } from 'formik';
import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { removeItemWithIndex } from 'src/utils';
import Icon from 'src/components/Icon/Icon';
import { readFileAsync, removeItemWithIndex } from 'src/utils';
import Spinner from 'src/components/Spinner';
import { useStore } from 'src/stores/createStore';
import s from './FFileInput.module.scss';

const FFileInput = ({ name, setPhotos, ...props }) => {
  const [photosSrc, setPhotosSrc] = useState([]);
  const [photoFilesArray, setPhotoFilesArray] = useState([]);
  const store = useStore();
  const formik = useFormikContext();

  const removeImageHandler = (index) => {
    setPhotosSrc(removeItemWithIndex(photosSrc, index));
    setPhotoFilesArray(removeItemWithIndex(photoFilesArray, index));
  };

  const photosReader = async (photos) => {
    return Promise.all(
      photos.map((item) => {
        return readFileAsync(item);
      }),
    );
  };

  const handlerChange = (evt) => {
    const imagesArray = Array.from(evt.currentTarget.files);
    photosReader(imagesArray).then((res) => {
      setPhotosSrc([...photosSrc, ...res]);
    });
    const arrFiles = Array.from(evt.currentTarget.files);
    setPhotoFilesArray(arrFiles);
  };

  useEffect(() => {
    setPhotos(photoFilesArray);
  });

  return (
    <div className={s.field}>
      <figure className={s.images}>
        {photosSrc.map((item, i) => {
          return (
            <button
              className={s.imageBtn}
              key={i}
              onClick={() => removeImageHandler(i)}
            >
              <i />
              <img src={item} alt={formik.values.title} />
            </button>
          );
        })}
        <label htmlFor={name}>
          <Icon name="plus" />
        </label>
        {store.productAdd.fetchUploadImage.isLoading && (
          <Spinner className={s.spinner} />
        )}
      </figure>

      <input
        type="file"
        name="photos"
        className="FFileInputWrapper"
        multiple
        {...props}
        onChange={handlerChange}
      />
    </div>
  );
};
export default observer(FFileInput);
