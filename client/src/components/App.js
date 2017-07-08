import React, { Component } from 'react';
import snowman from '../../src/images/snowman.png';
import '../../src/App.css';
import axios from 'axios';
import AddButton from './AddButton';

class App extends Component {

// geocodeCall = () => {
//   const address = 
//   axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.MAP_KEY}`)
//   .then((info) => {
//      console.log(info.data.results[0].geometry.location.lat);
//     console.log(info.data.results[0].geometry.location.lng);
//     console.log(info.data.results[0].formatted_address);
//   }).catch((err) => {
//     console.log(err);
//   });
// }

  render() {
    return (
      <div>
        <div className="container">
          <img src={snowman} className="snowman" alt="snowman icon" />
          <div className="melt">Wanna know if you'll melt outside?</div>
          <div className="weather-text">Start getting some weather.</div>
        </div>
        <AddButton/>
      </div>
    );
  }
}

export default App;
