import React, { Component } from 'react';

import CarList from './CarList';

import cars from '../fixtures';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
	 render() {
    return (
      <div className="container">
				<h1 className='display-3'>List of cars</h1>
				<br/>
				<CarList cars = {cars} />
      </div>
    );
  } 
}

export default App;