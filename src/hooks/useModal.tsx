import { useState } from 'react';
import { Modal } from '../components/modal/Modal';

const mainContainer = document.getElementById('root');

export const useModal = () => {
  const [isOpen, setModalState] = useState(false);

  const handleOpenModal = () => {
    setModalState(true);
    mainContainer?.classList.add('root__modal--active');
  };
  const handleCloseModal = () => {
    setModalState(false);
    mainContainer?.classList.remove('root__modal--active');
  };

  return {
    Modal,
    isOpen,
    handleOpenModal,
    handleCloseModal,
  };
};
