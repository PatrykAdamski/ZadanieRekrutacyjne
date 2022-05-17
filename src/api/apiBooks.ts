import React from 'react';

import { api, endpoints } from '../api/index';

import { IBook } from '../type/IBook';

export const getAllBooks = (
  setBooks: React.Dispatch<React.SetStateAction<IBook>>
) => {
  api
    .get<IBook>(`${endpoints.books}`)
    .then(({ data }) => {
      setBooks(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
