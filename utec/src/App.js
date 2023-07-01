import React from 'react';
import './css/App.css';
import Navbar from './navbar';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar />
    
        <div className="content">
        <h1 className="big-letters">Viaje<br/>
        Connosco</h1>
        <button className="centered-button">Vamos!</button>
          
        </div>
      </div>
    );
  }
}

export default App;