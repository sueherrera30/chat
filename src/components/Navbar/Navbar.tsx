import React, { FC } from 'react';
import './Navbar.less'

interface NavbarProps {
  title: string;
  elements: JSX.Element;
}

const Navbar: FC<NavbarProps> = ({ title, elements }) => {
  return (
    <div className="navbar">
      <p className='title'>{title}</p>
      <div className='elements'>{elements}</div>
    </div>
  );
};

export default Navbar;
