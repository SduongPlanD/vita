import React from 'react';

import ToggleDrawerButton from './SideDrawer/ToggleDrawerButton.js';
import './NavBar.css';

function NavBar(props) {
  return (
    <header className="navbar">
      <nav className="navbar_navigation">
        <div>
          <ToggleDrawerButton click={props.drawerClickHandler}></ToggleDrawerButton>
        </div>
        <div className="navbar_logo"><a href="/">Vita</a></div>
        <div className="spacer"></div>
        <div className="navbar_items">
          <ul>
            <li><a href="/">Home Page</a></li>
            <li><a href="/">Meals</a></li>
            <li><a href="/">Cook Book</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default NavBar;