import React, { Component } from 'react';
import snowman from '../../src/images/snowman.png';
import '../../src/App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <img src={snowman} className="snowman" alt="snowman icon" />
        <div className="melt">Wanna know if you'll melt outside?</div>
        <div className="weather-text">Start getting some weather.</div>
      </div>
    );
  }
}

export default App;
