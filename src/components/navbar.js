import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState} from "react";
import { ReactComponent as MenuIcon } from './../assets/icons/images/system-uicons-menu-hamburger.svg';
import { ReactComponent as LogoIcon } from './../assets/icons/images/logo-kjd.svg'
import './navbar.css';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }
  
    return (
      <nav className="navbar">
        <div className="content">
          <div className="logo">
            <LogoIcon />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <MenuIcon />
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <NavLink to="/">KJ Accenture</NavLink>
              </li>
              <li>
                <NavLink to="/addbrand">Add brand</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar;
