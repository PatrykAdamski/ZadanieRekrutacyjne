import React from 'react';
import { searchLinkToBook } from '../../utilities/searchLinkToBook';
import { searchImageBook } from '../../utilities/searchImageBook';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { addBookToFavorites } from '../../utilities/addBookToFavorites';
import { removeBookFromFavorites } from '../../utilities/removeBookFromFavorites';
import { IBookProps } from '../../type/IBookProps';

export const Book: React.FC<IBookProps> = ({
  id,
  title,
  languages,
  authors,
  resources,
  imageBook,
}) => {
  const linkToBook = resources && searchLinkToBook(resources);
  const image = resources && searchImageBook(resources);

  const auth = useAuth();

  return (
    <div className="book">
      <img alt="book" src={imageBook || image}></img>
      <h2 className="book__title">{title}</h2>
      <div className="book__author">
        {authors?.map((author) => (
          <p key={author.id}>{author.person}</p>
        ))}
      </div>
      <p className="book__language">{languages}</p>
      {auth.user && !id ? (
        <button
          onClick={() =>
            addBookToFavorites(
              title,
              languages,
              authors,
              linkToBook,
              image,
              auth.userId
            )
          }
          className="book__btn-favorites base__btn"
        >
          Add to favorites
        </button>
      ) : null}
      {id && (
        <button
          onClick={() => removeBookFromFavorites(id)}
          className="book__btn-favorites base__btn"
        >
          Unfollow
        </button>
      )}

      {!auth.user && (
        <Link to="/signIn" className="book__btn-favorites base__btn">
          Add to favorites
        </Link>
      )}

      <a href={`${linkToBook}`} className="book__btn base__btn">
        Read
      </a>
    </div>
  );
};
