import React, { useState } from 'react';
import { ButtonHamburger } from '../buttonHamburger/ButtonHamburger';
import { Link } from 'react-router-dom';

export const Navigation = ({
  user,
  handleLogout,
}: {
  user: {};
  handleLogout: () => void;
}) => {
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
        <Link to="/" className="nav__item">
          Homepage
        </Link>
        {user ? (
          <>
            <Link to="/signUp" className="nav__item">
              Favorites
            </Link>
            <Link to="/" onClick={handleLogout} className="nav__item">
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/signIn" className="nav__item">
              Sign In
            </Link>
            <Link to="/signUp" className="nav__item">
              Sign Up
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
};
