import React, { Component } from 'react';
import '../../src/App.css';
import axios from 'axios';

class InputForm extends Component {
    constructor() {
        super();
        this.state = {
        address: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleChange = (event) => {
        this.setState({ address: event.target.value });
    }

  render() {
    return (
        <div>
            <div className="row address-input">
                <form   className="col s12"
                        onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons search">search</i>
                            <input  placeholder="Where are you?" 
                                    id="address" 
                                    type="text" 
                                    className="validate" 
                                    onChange={this.handleChange}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
  }
}

export default InputForm;