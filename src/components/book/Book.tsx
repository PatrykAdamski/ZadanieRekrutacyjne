import React from 'react';

export const Book = () => {
  return (
    <div className="book">
      <img
        alt="sadas"
        src="https://www.gutenberg.org/cache/epub/68101/pg68101.cover.medium.jpg"
      ></img>
      <h2 className="book__title">Title</h2>
      <p className="book__author"> Author</p>
      <p className="book__language">en</p>
      <button className="book__btn-favorites basic__btn">
        Add to favorites
      </button>
      <a href="/#" className="book__btn basic__btn">
        Read
      </a>
    </div>
  );
};
