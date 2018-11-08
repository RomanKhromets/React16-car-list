import React, { PureComponent } from 'react';
import Car from './Car';

export default class CarList extends PureComponent {
	constructor(props) {
    super(props)
    this.state = {openCarId: null}
  }

	render(){
		const carElements = this.props.cars.map((car) => 
			<li key = {car.id} className = "list-group-item list-group-item-light"> 
				<Car car = {car}
					isOpen = {this.state.openCarId === car.id}
					onButtonClick = {this.handleClick.bind(this, car.id)}
				/>
			</li>
		)
														
		return (
				<ul className = "list-group list-group-flush "> {carElements}	</ul>	
		)
	}

handleClick = openCarId => this.setState({
	openCarId: (this.state.openCarId === openCarId) ? null : openCarId
});
}