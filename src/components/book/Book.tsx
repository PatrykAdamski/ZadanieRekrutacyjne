import React from 'react';
import { searchLinkToBook } from '../../utilities/searchLinkToBook';
import { searchImageBook } from '../../utilities/searchImageBook';

interface IBookProps {
  title: string;
  languages: string;
  authors: { id: number; person: string }[];
  resources: { uri: string }[];
}

export const Book: React.FC<IBookProps> = ({
  title,
  languages,
  authors,
  resources,
}) => {
  const linkToBook = searchLinkToBook(resources);
  const imageBook = searchImageBook(resources);

  return (
    <div className="book">
      <img alt="book" src={imageBook}></img>
      <h2 className="book__title">{title}</h2>
      <div className="book__author">
        {authors.map((author) => (
          <p key={author.id}>{author.person}</p>
        ))}
      </div>
      <p className="book__language">{languages}</p>
      <button className="book__btn-favorites base__btn">
        Add to favorites
      </button>
      <a href={`${linkToBook}`} className="book__btn base__btn">
        Read
      </a>
    </div>
  );
};
