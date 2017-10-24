import React, { Component } from "react";
import "./App.css";
import Navbar from './navbar/navbar'
import Content from './Content/Content'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav >
          <div className='title'>Start Bootstrap</div>
          <button type="" className="menu-button">MENU =</button>
          <div className='links'>
            <div >SERVICES</div>
            <div>PORTFOLIO</div>
            <div>ABOUT</div>
            <div>TEAM</div>
            <div>CONTACT</div>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
