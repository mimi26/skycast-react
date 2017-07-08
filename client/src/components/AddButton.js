import React, { Component } from 'react';
import '../../src/App.css';
import axios from 'axios';

class AddButton extends Component {


  render() {
    return (
      <div className="add">
       <i className="fa fa-plus-circle fa-4x" aria-hidden="true"></i>
      </div>
    );
  }
}

export default AddButton;