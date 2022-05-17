import React from 'react';
import { BooksList } from '../components/booksList/BooksList';
import { Navigation } from '../components/navigation/Navigation';

export const Root = () => {
  return (
    <>
      <Navigation />
      <BooksList />
    </>
  );
};
