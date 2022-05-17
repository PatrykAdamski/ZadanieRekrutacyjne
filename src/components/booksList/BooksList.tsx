import React, { useState, useEffect } from 'react';

import { getAllBooks } from '../../api/apiBooks';
import { IBook } from '../../type/IBook';
import { Book } from '../book/Book';

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

export const BooksList = () => {
  const [books, setBooks] = useState<IBook>(initialStateBooks);

  useEffect(() => {
    getAllBooks(setBooks);
  }, []);

  return (
    <section className="books">
      {books !== initialStateBooks ? (
        books.results.map((book) => {
          return (
            <Book
              key={book.id}
              title={book.title}
              authors={book.agents}
              languages={book.languages}
              resources={book.resources}
            />
          );
        })
      ) : (
        <h2 className="base__loading">...Loading</h2>
      )}
    </section>
  );
};
