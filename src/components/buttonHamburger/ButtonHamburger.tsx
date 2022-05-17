import React from 'react';

interface IButtonHamburgerProps {
  isMenuActive: boolean;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ButtonHamburger: React.FC<IButtonHamburgerProps> = ({
  isMenuActive,
  setMenuActive,
}) => {
  return (
    <button
      className={`hamburger ${isMenuActive ? 'hamburger--active' : ''}`}
      onClick={() => setMenuActive(!isMenuActive)}
    >
      <span className="hamburger__bars"></span>
      <span className="hamburger__bars"></span>
      <span className="hamburger__bars"></span>
    </button>
  );
};
