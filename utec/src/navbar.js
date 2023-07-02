import React from 'react';
import './css/navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-title">UTEC</div>
        <div className="navbar-buttons">
          <button className="navbar-button"><a href="#"> Login </a></button>
          <button className="navbar-button" > <a href> Sign Up</a></button>
          
        </div>
      </nav>
    );
  }
}

export default Navbar;