import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

function Header() {
  return (
    <>
      <div className="navbar">
        <div className="logoDescript">
          <img className="logo" src={logo} alt="logo" />
          <h2>Space Travelers Hub</h2>
        </div>
        <nav>
          <div className="navItems">
            <div><NavLink to="/rockets">Rocket</NavLink></div>
            <div><NavLink to="/missions">Mission</NavLink></div>
            <div className="divider" />
            <div><NavLink to="/profile">My Profile</NavLink></div>
          </div>
        </nav>
      </div>
      <hr />
    </>
  );
}

export default Header;
