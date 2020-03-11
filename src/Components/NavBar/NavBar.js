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
            <li><a data-id="Today" onClick={props.currentPage}>Today</a></li>
            <li><a data-id="Meal Library" onClick={props.currentPage}>Meal Library</a></li>
            <li><a data-id="History" onClick={props.currentPage}>History</a></li>
          </ul>
        </div>
      </nav>
    </header >
  )
}

export default NavBar;