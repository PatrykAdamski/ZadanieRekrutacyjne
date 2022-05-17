import React, { ReactNode, useState } from 'react';
import { IBook } from '../type/IBook';
import { IBooksContextType } from '../type/IBooksContextType';

const initialStateBooks = {
  count: 0,
  next: '',
  previous: null,
  results: [
    {
      id: 0,
      type: '',
      title: '',
      description: '',
      languages: '',
      agents: [{ id: 0, person: '' }],
      resources: [{ id: 0, uri: '' }],
    },
  ],
};

export const BooksContext = React.createContext<IBooksContextType | null>(null);

export const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [books, setBooks] = useState<IBook>(initialStateBooks);

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
};
