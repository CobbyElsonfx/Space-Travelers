import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

function Header() {
  return (
    <>
      <div className="navbar">
        <div>
          <img src={logo} alt="logo" />
          <h2>Space Traveler's Hub</h2>
        </div>
        <nav>
          <NavLink to="/rockets">Rocket</NavLink>
          <NavLink to="/missions">Mission</NavLink>
          <NavLink to="/profile">My Profile</NavLink>
        </nav>
      </div>
    </>
  );
}

export default Header;
