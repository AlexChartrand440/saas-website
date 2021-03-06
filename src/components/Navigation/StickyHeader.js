import React, { useState, useEffect } from 'react';

import { Link } from 'gatsby';
import NavLinks from './NavLinks';
import logoLight from '../../assets/images/saas.png';

const StickyHeader = ({ extraClassName }) => {
  const [sticky, setSticky] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 130) {
      setSticky(true);
    } else if (window.scrollY < 130) {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sticky]);
  return (
    <div
      className={`stricky-header stricked-menu ${extraClassName} ${
        sticky === true ? 'stricky-fixed' : ' '
      }`}>
      <div className='container'>
        <div className='logo-box'>
          <Link to='/'>
            <img src={logoLight} width='130' alt='SAAS Logo' />
          </Link>
        </div>
        <div className='sticky-header__content'>
          <NavLinks />
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
