import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import markedCarsArr from '../markedCarsArr';

class MarkedList extends PureComponent {

	render() {
		let count = 1;
		let markedCars = markedCarsArr.map((car) => 
			<tr key = {car.id}>
				<td> {count++} </td>
				<td className='text-uppercase font-weight-bold'> {car.model} </td>
				<td className='text-capitalize'> {car.color} </td>
				<td> {car.price} </td>
			</tr>
		)
		return (
			<div className="container">
				<h1 className = 'display-3'>Marked List</h1>
				<br/>
				<table className = 'table'>
					<thead className = "thead-light">
						<tr>
							<th scope="col">#</th>
							<th scope="col">Model</th>
							<th scope="col">Color</th>
							<th scope="col">Price ($)</th>
						</tr>
					</thead>
					<tbody>
							{markedCars}
					</tbody>
				</table>
				<Link to="/"> 
					<button className = "btn btn-sm btn-primary" >
						Back to list
					</button>
				</Link>
			</div>
    );
	}
}

export default MarkedList