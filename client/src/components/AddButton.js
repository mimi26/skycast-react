import React, { Component } from 'react';
import '../../src/App.css';
import axios from 'axios';

class AddButton extends Component {

handleClick = () => {
    
}

  render() {
    return (
        <div className="add">
            <a className="btn-floating btn-large waves-effect waves-light teal" 
               onClick={this.handleClick}>
                    <i className="material-icons">add</i>
            </a>
        </div>
    );
  }
}

export default AddButton;