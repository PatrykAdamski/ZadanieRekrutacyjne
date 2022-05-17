import React, { useContext, useEffect } from 'react';

import { getAllBooks } from '../../api/apiBooks';
import { IBooksContextType } from '../../type/IBooksContextType';
import { BooksContext } from '../../providers/BooksProvider';

import { Book } from '../book/Book';
import { Pagination } from '../pagination/Pagination';

export const BooksList = () => {
  const { books, setBooks } = useContext(BooksContext) as IBooksContextType;

  useEffect(() => {
    getAllBooks(setBooks);
  }, []);

  return (
    <>
      {books.count !== 0 ? (
        <section className="books">
          {books.results.map((book) => {
            return (
              <Book
                key={book.id}
                title={book.title}
                authors={book.agents}
                languages={book.languages}
                resources={book.resources}
              />
            );
          })}
          <Pagination count={books.count} setBooks={setBooks} />
        </section>
      ) : (
        <h2 className="base__loading">
          {books.results.length === 0 ? 'Brak' : '...Loading'}
        </h2>
      )}
    </>
  );
};
