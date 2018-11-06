import React, { Component } from 'react';

import CarList from './CarList';

import cars from '../fixtures';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="container">
				<h1>App cars list:</h1>
				<br/>
				<CarList cars = {cars} />
      </div>
    );
  } 
}

export default App;