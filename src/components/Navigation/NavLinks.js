import React from 'react';
import { Link } from 'gatsby';

const NavLinks = ({ extraClassName }) => {
  return (
    <ul className={`main-menu__list ${extraClassName}`}>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/news'>News</Link>
      </li>
      <li>
        <Link to='/events'>Events</Link>
      </li>
      <li>
        <Link to='/donation'>Support SAAS</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
