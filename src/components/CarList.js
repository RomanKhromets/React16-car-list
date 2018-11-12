import React, { PureComponent } from 'react';
import Car from './Car';
import { Link } from 'react-router-dom';
import markedCars from '../markedCarsArr';

export default class CarList extends PureComponent {
	constructor(props) {
    super(props)
    this.state = {openCarId: null, isMarked: null}
		this.setIsMarked = this.setIsMarked.bind(this)
  }
	setIsMarked(newVal) { 
		this.setState({isMarked: newVal});
	}
	render(){
		let marked = isEmptyList()
		const hidden = <button disabled className = "btn btn-sm btn-secondary" >
										Please mark any car
									</button>
		const butShowCars = <Link to="/marked_list"> 
													<button className = "btn btn-sm btn-primary" >
														Show cars
													</button>
												</Link>
		const carElements = this.props.cars.map((car) => 
			<li key = {car.id} className = "list-group-item list-group-item-light"> 
				<Car car = {car}
						isOpen = {this.state.openCarId === car.id}
						onButtonClick = {this.handleClick.bind(this, car.id)}
						setIsMarked= {this.setIsMarked}
				/>
			</li>
		)
		function isEmptyList(){
			return (markedCars.length === 0)? marked = false: marked = true;
		}												
		return (
			<div>
				<ul className = "list-group list-group-flush "> {carElements}	</ul>	
				<br/>
				{(marked)? butShowCars : hidden}
			</div>
		)
	}
	handleClick = openCarId => this.setState({
	openCarId: (this.state.openCarId === openCarId) ? null : openCarId
});
}