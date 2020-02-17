import React from 'react';
import ReactModal from 'react-modal';
import cn from 'classnames/bind';
import s from './Modal.module.scss';
import CloseButton from './components/CloseButton/CloseButton';

const cx = cn.bind(s);

const Modal = ({
  children,
  className,
  closeButton: Button = CloseButton,
  ...props
}) => (
  <ReactModal
    {...props}
    className={cx('contentWrapper', className)}
    overlayClassName={cx('overlay', props.overlayClassName)}
    bodyOpenClassName={cx('body', props.bodyOpenClassName)}
    closeTimeoutMS={300}
  >
    {children}
    <Button onClick={props.onRequestClose} className={s.close} />
  </ReactModal>
);

export default Modal;
