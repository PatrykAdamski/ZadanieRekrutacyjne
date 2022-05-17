import React from 'react';

import { api, endpoints } from '../api/index';

import { IBook } from '../type/IBook';

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
