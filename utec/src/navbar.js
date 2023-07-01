import React from 'react';
import './css/navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-title">UTEC</div>
        <div className="navbar-buttons">
          <button className="navbar-button">Login</button>
          <button className="navbar-button">Sign Up</button>
          
        </div>
      </nav>
    );
  }
}

export default Navbar;