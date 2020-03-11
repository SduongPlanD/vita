import React, { Component } from 'react';
import logo from '../logo.svg';
import HomePage from './HomePage/HomePage.js';
import NavBar from './NavBar/NavBar.js';
import SideDrawer from './NavBar/SideDrawer/SideDrawer.js';
import Backdrop from './Backdrop/Backdrop.js';
import MealLibrary from './MealLibrary/MealLibrary.js';

import './App.css';

class App extends Component {
  state = {
    sideDrawerOpen: false,
    currentPage: 'Today',
    responseToPost: '',
  }
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };


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

  navBarClickHandler = (e) => {
    let clicked = e.currentTarget.dataset.id
    this.setState(() => {
      return { currentPage: clicked }
    })
  }

  render() {
    let backDrop, activeTab;

    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backDropClickHandler} />
    }

    //logic for current Page
    activeTab = 'MealLibrary'
    if (this.state.currentPage === 'Today') {
      activeTab = <HomePage />;
    } else if (this.state.currentPage === 'Meal Library') {
      activeTab = <MealLibrary />;
    } else if (this.state.currentPage === 'History') {
      activeTab = 'History'
    }
    return (
      <div className="App" style={{ height: '100%' }}>
        <NavBar drawerClickHandler={this.toggleDrawerClickHandler} currentPage={this.navBarClickHandler}></NavBar>
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        {activeTab}
        <p>{this.state.response}</p>
      </div>
    );
  }
}

export default App;
