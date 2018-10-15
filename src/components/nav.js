import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

// Nav component
const Nav = () => {
    return (
      <nav className="main-nav">
        <ul>
          <li><NavLink to='/cats'   className="hoverAnimation">Cats</NavLink></li>
          <li><NavLink to='/dogs'   className="hoverAnimation">Dogs</NavLink></li>
          <li><NavLink to='/coffee' className="hoverAnimation">Coffee</NavLink></li>
        </ul>
      </nav>
  );
}


export default Nav;
