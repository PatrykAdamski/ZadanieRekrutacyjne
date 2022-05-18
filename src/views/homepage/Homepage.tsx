import React from 'react';
import { BooksList } from '../../components/booksList/BooksList';
import { Filters } from '../../components/filters/Filters';

export const Homepage = () => {
  return (
    <>
      <Filters />
      <BooksList />
    </>
  );
};
