import React, { useState, useContext } from 'react';
import { BooksContext } from '../../providers/BooksProvider';
import { IBooksContextType } from '../../type/IBooksContextType';
import { getSearchedBooks } from '../../api/apiBooks';
import { useModal } from '../../hooks/useModal';
import { FiltersForm } from '../filtersForm/FiltersForm';
import { InputForm } from '../inputform/InputForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Filters = () => {
  const [searchValue, setSearchValue] = useState('');
  const { setBooks } = useContext(BooksContext) as IBooksContextType;
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal();

  const changeInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="filters">
      <div className="filters__container">
        <InputForm
          name="search"
          type="search"
          placeholder="search..."
          value={searchValue}
          onAction={changeInputSearch}
        ></InputForm>
        <div
          onClick={() => getSearchedBooks(setBooks, searchValue)}
          className="filters__loupe"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      <button onClick={handleOpenModal} className="filters__btn">
        Filters
      </button>

      {isOpen ? (
        <Modal handleClose={handleCloseModal}>
          <FiltersForm handleClose={handleCloseModal} />
        </Modal>
      ) : null}
    </div>
  );
};
