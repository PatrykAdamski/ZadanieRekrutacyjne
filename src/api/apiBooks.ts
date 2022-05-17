import React from 'react';

import { api, endpoints } from '../api/index';

import { IBook } from '../type/IBook';
import { IFormValues } from '../type/IFormValues';

export const getAllBooks = (
  setBooks: React.Dispatch<React.SetStateAction<IBook>>,
  page = 1
) => {
  api
    .get<IBook>(`${endpoints.books}/${page > 1 ? `?page=${page}` : ''}`)
    .then(({ data }) => {
      setBooks(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getSearchedBooks = (
  setBooks: React.Dispatch<React.SetStateAction<IBook>>,
  searchValue: string
) => {
  api
    .get<IBook>(`${endpoints.books}/?search=${searchValue}`)
    .then(({ data }) => {
      setBooks(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getBooksByFilters = (
  setBooks: React.Dispatch<React.SetStateAction<IBook>>,
  formValues: IFormValues
) => {
  api
    .get<IBook>(
      `${endpoints.books}/?type=${formValues.type}&languages=${formValues.languages}&title_contains=${formValues.titleContains}&description_contains=${formValues.descriptionContains}&downloads_range_min=${formValues.downloadsRangeMin}&downloads_range_max=${formValues.downloadsRangeMax}&has_bookshelf=${formValues.bookshelvesName}&has_resource_type=${formValues.resourcesType}&has_agent_type=${formValues.agentsType}&agent_name_contains=${formValues.agentsPersonNameContains}&agent_alias_contains=${formValues.agentsPersonAliasContains}&agent_webpage_contains=${formValues.agentsPersonWebpageContains}&agent_birth_date_range_min=${formValues.agentsPersonBirthDateMin}&agent_birth_date_range_max=${formValues.agentsPersonBirthDateMax}&agent_death_date_range_min=${formValues.agentsPersonDeathDateMin}&agent_death_date_range_max=${formValues.agentsPersonDeathDateMax}`
    )
    .then(({ data }) => {
      setBooks(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
