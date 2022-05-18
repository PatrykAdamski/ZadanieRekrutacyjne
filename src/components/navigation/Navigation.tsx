import React, { useEffect, useState } from 'react';
import { ButtonHamburger } from '../buttonHamburger/ButtonHamburger';
import { Link } from 'react-router-dom';
import { ILogin } from '../../type/ILogin';
import { useAuth } from '../../hooks/useAuth';

export const Navigation = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const auth: ILogin = useAuth();

  useEffect(() => {
    auth.authListener();
  }, []);

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
        {auth.user ? (
          <>
            <Link to="/favorites" className="nav__item">
              Favorites
            </Link>
            <Link to="/" onClick={auth.handleLogout} className="nav__item">
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
