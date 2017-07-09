import React, { Component } from 'react';
import snowman from '../../src/images/snowman.png';
import '../../src/App.css';
import axios from 'axios';
import AddButton from './AddButton';
import InputForm from './InputForm';

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="snow-contain">
          <img src={snowman} className="snowman" alt="snowman icon" />
          <div className="melt">Wanna know if you'll melt outside?</div>
          <div className="weather-text">Start getting some weather.</div>
        </div>
        <AddButton/>
        <InputForm/>
      </div>
    );
  }
}

export default App;
