import React, { Component } from 'react';
import logo from '../logo.svg';
import HomePage from './HomePage/HomePage.js';
import NavBar from './NavBar/NavBar.js';
import SideDrawer from './NavBar/SideDrawer/SideDrawer.js';
import Backdrop from './Backdrop/Backdrop.js';

import './App.css';


class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  toggleDrawerClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState(() => {
      return { sideDrawerOpen: false }
    });
  };

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backDropClickHandler} />
    }
    return (
      <div className="App" style={{ height: '100%' }}>
        <NavBar drawerClickHandler={this.toggleDrawerClickHandler}></NavBar>
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        < HomePage ></HomePage>
        <p>the is the info on current page</p>
      </div>
    );
  }
}

export default App;
