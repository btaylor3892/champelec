import React, { useState } from 'react';
import { Link } from 'gatsby';
// import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'
import logo from '../img/champ-logo.svg';

const Navbar = () => {
  const [state, setState] = useState({
    active: false,
    navBarActiveClass: '',
  });

  const toggleHamburger = () => {
    // toggle the active boolean in the state
    setState((prevState) => ({
      active: !prevState.active,
      navBarActiveClass: !prevState.active ? 'is-active' : '',
    }));
  };
  return (
    <nav
      className='navbar is-transparent'
      // className="navbar is-transparent is-fixed-top"
      role='navigation'
      aria-label='main-navigation'
    >
      <div className='container'>
        <div className='navbar-brand'>
          <Link to='/' className='has-text-centered' title='Logo'>
            <img src={logo} alt='Champion Logo' style={{ width: '300px' }} />
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${state.navBarActiveClass}`}
            data-target='navMenu'
            onClick={() => toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id='navMenu' className={`navbar-menu ${state.navBarActiveClass}`}>
          <div className='navbar-start has-text-centered'>
            <Link className='navbar-item is-bold' to='/about'>
              About
            </Link>
            <Link className='navbar-item is-bold' to='/services'>
              Services
            </Link>
            <Link className='navbar-item is-bold' to='/projects'>
              Projects
            </Link>
            <Link className='navbar-item is-bold' to='/contact'>
              Contact
            </Link>
            <Link className='navbar-item is-bold' to='/careers'>
              Careers
            </Link>
          </div>
          <br />
          <br />
          <div className='navbar-end has-text-centered'>
            <a
              className='navbar-item is-bold'
              title='phone'
              href='tel:561-296-4144'
            >
              561-296-4144
            </a>
            <span className='navbar-item is-bold'>LIC#: EC13005014</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
