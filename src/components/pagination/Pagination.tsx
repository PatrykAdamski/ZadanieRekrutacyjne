import React, { useState, useEffect } from 'react';
import { getAllBooks } from '../../api/apiBooks';
import { IBook } from '../../type/IBook';

interface IPagination {
  count: number;
  setBooks: React.Dispatch<React.SetStateAction<IBook>>;
}

export const Pagination: React.FC<IPagination> = ({ count, setBooks }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = Math.ceil(count / 10);
  const firstPage = 1;

  const handleNextPage = () => {
    setCurrentPage((prev) => ++prev);
  };
  const handlePreviousPage = () => {
    setCurrentPage((prev) => --prev);
  };

  useEffect(() => {
    getAllBooks(setBooks, currentPage);
  }, [currentPage]);

  return (
    <div className="pagination">
      {currentPage === firstPage || currentPage === firstPage + 1 ? null : (
        <>
          <div
            onClick={() => setCurrentPage(firstPage)}
            className="pagination__item"
          >
            {firstPage}
          </div>
          <div className="pagination__item">...</div>
        </>
      )}
      {currentPage === firstPage ? null : (
        <div onClick={handlePreviousPage} className="pagination__item">
          {currentPage - 1}
        </div>
      )}
      <div className="pagination__item pagination__item--current">
        {currentPage}
      </div>
      {currentPage === lastPage ? null : (
        <div onClick={handleNextPage} className="pagination__item">
          {currentPage + 1}
        </div>
      )}
      {currentPage === lastPage || currentPage === lastPage - 1 ? null : (
        <>
          <div className="pagination__item">...</div>
          <div
            onClick={() => setCurrentPage(lastPage)}
            className="pagination__item"
          >
            {lastPage}
          </div>
        </>
      )}
    </div>
  );
};
