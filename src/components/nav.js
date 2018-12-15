import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

// Nav component
const Nav = () => {
    return (
      <nav className="main-nav">
        <ul>
          <li class="animation"><NavLink to='/cats'>Cats</NavLink></li>
          <li class="animation"><NavLink to='/dogs'>Dogs</NavLink></li>
          <li class="animation"><NavLink to='/coffee'>Coffee</NavLink></li>
        </ul>
      </nav>
  );
}


export default Nav;
