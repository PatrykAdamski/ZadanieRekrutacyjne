import React, { useState, useContext } from 'react';
import { InputForm } from '../inputform/InputForm';
import { BooksContext } from '../../providers/BooksProvider';

import { IBooksContextType } from '../../type/IBooksContextType';
import { getBooksByFilters } from '../../api/apiBooks';

const initialFormValues = {
  type: '',
  languages: '',
  titleContains: '',
  descriptionContains: '',
  downloadsRangeMin: '',
  downloadsRangeMax: '',
  bookshelvesName: '',
  resourcesType: '',
  agentsType: '',
  agentsPersonNameContains: '',
  agentsPersonAliasContains: '',
  agentsPersonWebpageContains: '',
  agentsPersonBirthDateMin: '',
  agentsPersonBirthDateMax: '',
  agentsPersonDeathDateMax: '',
  agentsPersonDeathDateMin: '',
};

export const FiltersForm = ({ handleClose }: { handleClose: () => void }) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { setBooks } = useContext(BooksContext) as IBooksContextType;

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const clearInputs = () => {
    setFormValues(initialFormValues);
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getBooksByFilters(setBooks, formValues);
    handleClose();
    clearInputs();
  };

  return (
    <form onSubmit={(e) => handleSubmitForm(e)} className="form">
      <InputForm
        name="type"
        placeholder="Type"
        type="text"
        onAction={(e) => handleChangeInput(e)}
      />
      <InputForm
        name="languages"
        placeholder="Languages"
        type="text"
        onAction={(e) => handleChangeInput(e)}
      />
      <InputForm
        name="titleContains"
        placeholder="Title contains"
        type="text"
        onAction={(e) => handleChangeInput(e)}
      />
      <InputForm
        name="descriptionContains"
        placeholder="Description contains"
        type="text"
        onAction={(e) => handleChangeInput(e)}
      />
      <InputForm
        name="downloadsRangeMin"
        placeholder="Downloads is in range"
        type="text"
        onAction={(e) => handleChangeInput(e)}
      />
      <InputForm
        name="downloadsRangeMax"
        placeholder="Downloads is in range"
        type="text"
        onAction={(e) => handleChangeInput(e)}
      />
      <InputForm
        name="bookshelvesName"
        placeholder="Bookshelves name"
        type="text"
        onAction={(e) => handleChangeInput(e)}
      />
      <InputForm
        name="resourcesType"
        placeholder="Resources type"
        type="text"
        onAction={(e) => handleChangeInput(e)}
      />
      <InputForm
        name="agentsType"
        placeholder="Agents type"
        type="text"
        onAction={(e) => handleChangeInput(e)}
      />
      <InputForm
        name="agentsPersonNameContains"
        placeholder="Agents person name contains"
        type="text"
        onAction={(e) => handleChangeInput(e)}
      />
      <InputForm
        name="agentsPersonAliasContains"
        placeholder="Agents person alias contains"
        type="text"
        onAction={(e) => handleChangeInput(e)}
      />
      <InputForm
        name="agentsPersonWebpageContains"
        placeholder="Agents person webpage contains"
        type="text"
        onAction={(e) => handleChangeInput(e)}
      />
      <InputForm
        name="agentsPersonBirthDateMin"
        placeholder="Agents person birth date is in range"
        type="text"
        onAction={(e) => handleChangeInput(e)}
      />
      <InputForm
        name="agentsPersonBirthDateMax"
        placeholder="Agents person birth date is in range"
        type="text"
        onAction={(e) => handleChangeInput(e)}
      />
      <InputForm
        name="agentsPersonDeathDateMax"
        placeholder="Agents person death date is in range"
        type="text"
        onAction={(e) => handleChangeInput(e)}
      />
      <InputForm
        name="agentsPersonDeathDateMin"
        placeholder="Agents person death date is in range"
        type="text"
        onAction={(e) => handleChangeInput(e)}
      />

      <button type="submit" className="filters__btn">
        Submit
      </button>
    </form>
  );
};
