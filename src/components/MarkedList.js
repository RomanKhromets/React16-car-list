import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import markedCarsArr from '../markedCarsArr';

class MarkedList extends PureComponent {

	render() {
		let markedCars = markedCarsArr.map((car) => 
				<li key = {car.id} className = "list-group-item list-group-item-light"> 
						{car.model}
				</li>
		)
		return (
			<div className="container">
				<h1>Marked List</h1>
				<ul className = "list-group list-group-flush" >{markedCars}</ul>
				<Link to="/"> 
					<button className = "btn btn-sm btn-secondary" >
						Back to App cars list
					</button>
				</Link>
			</div>
    );
	}
}

export default MarkedList