/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { useHistory, useLocation } from 'react-router-dom';
import AddForm from 'src/components/AddForm/AddForm';
import Header from 'src/components/Header/Header';
import { routes } from '../routes';
import s from './ProductAdd.module.scss';

const ProductAdd = () => {
  const location = useLocation();
  return (
    <div className="ProductAddWrapper">
      <Header />
      {location.state && location.state.modal ? (
        <AddModal>
          <AddForm />
        </AddModal>
      ) : (
        <AddForm />
      )}
    </div>
  );
};

export default ProductAdd;

function AddModal({ children }) {
  const [modalIsOpen, setIsOpen] = useState(true);
  const history = useHistory();

  function closeModal() {
    history.push(routes.home);
  }

  return (
    <div>
      <ReactModal
        className={s.modalContent}
        overlayClassName={s.modalOverlay}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Modal"
      >
        {children}
      </ReactModal>
    </div>
  );
}
