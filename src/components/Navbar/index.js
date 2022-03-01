import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/logo.svg')} />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/progress' style>
            Progress
          </NavLink>
          <NavLink to='/services' style>
            Services
          </NavLink>
          <NavLink to='/contact-us' style>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' style>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
