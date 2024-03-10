/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState, useContext } from 'react';
import './nav.css'
// import { AuthContext } from '../context/auth.context'


const Nav = () => {
  const [activeItem, setActiveItem] = useState('');

  // To be used later when authentication is done;
  // const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  function toggleBurgerMenu() {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  }


  return (
    <nav className="navbar nav-menu" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-item is-size-4">Audio Book</NavLink>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic"
          onClick={toggleBurgerMenu}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasic" className="navbar-menu">
        <div className="navbar-end">
          <>
            <NavLink  className = 'navbar-item' onClick={toggleBurgerMenu}>My Library</NavLink>
            <NavLink to = '/' className = 'navbar-item'>Log out</NavLink>
          </>
          <NavLink to="/login"  className="navbar-item" onClick={toggleBurgerMenu}>Login</NavLink>
        </div>
      </div>
    </nav>
  )

}


export default Nav;
