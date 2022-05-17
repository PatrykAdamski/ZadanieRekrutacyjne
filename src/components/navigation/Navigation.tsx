import React, { useState } from 'react';
import { ButtonHamburger } from '../buttonHamburger/ButtonHamburger';

export const Navigation = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  return (
    <nav
      className={`nav
    ${isMenuActive ? 'nav--active' : ''}`}
    >
      <p className="nav__logo">
        <span>E</span>-book
      </p>
      <ButtonHamburger
        isMenuActive={isMenuActive}
        setMenuActive={setMenuActive}
      />
      <ul className="nav__list">
        <a href="/#" className="nav__item">
          Homepage
        </a>
        <a href="/#" className="nav__item">
          Favorites
        </a>
      </ul>
    </nav>
  );
};
