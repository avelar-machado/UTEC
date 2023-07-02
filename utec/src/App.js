import React from 'react';
import './css/App.css';
import Navbar from './navbar';
import Form from './form';
import Login from './login';
import Veiculo from './formveiculo';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="app">
          <Navbar />

          <div className="content">
            <h1 className="big-letters">Viaje<br />
              Connosco</h1>
            <button className="centered-button">Vamos!</button>

          </div>
          
        </div>
        <Form />
        <br/>
        <br/>
        <Login/>
        <br></br>
        <Veiculo/>
      </div>
    );
  }
}

export default App;