import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface IModalProps {
  children: React.ReactNode;
  handleClose: () => void;
}

const modalContainer = document.getElementById('modal-container');

export const Modal: React.FC<IModalProps> = ({ handleClose, children }) => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer?.appendChild(modalNode);

    return () => {
      modalContainer?.removeChild(modalNode);
    };
  }, [modalNode]);

  return ReactDOM.createPortal(
    <div className="modal">
      {children}
      <div onClick={handleClose} className="modal__close-button">
        X
      </div>
    </div>,
    modalNode
  );
};
