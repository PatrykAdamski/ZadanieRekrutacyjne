import React from 'react';
import { BooksList } from '../components/booksList/BooksList';
import { Navigation } from '../components/navigation/Navigation';
import { Filters } from '../components/filters/Filters';
import { BooksProvider } from '../providers/BooksProvider';

export const Root = () => {
  return (
    <>
      <BooksProvider>
        <Navigation />
        <Filters />
        <BooksList />
      </BooksProvider>
    </>
  );
};
