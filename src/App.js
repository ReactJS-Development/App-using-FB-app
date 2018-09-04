import React, { Component } from 'react';
import './App.css';
import MainNav from './MainNav';
import NavBar from './NavBar';
import Slide from './Slide';

class App extends Component {
  render() {
    return (
      <div>
        
      <MainNav />
      <NavBar />
      <Slide />
      </div>
    );
  }
}

export default App;
