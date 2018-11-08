import React, { PureComponent } from 'react';

import markedCars from '../markedCarsArr';
//import cars from '../fixtures';
class Car extends PureComponent {
	constructor(props) {
    super(props)
    this.state = {classMark: "car-button__visible", 
									classCnl: "car-button__hidden"}
		this.pressMark = this.pressMark.bind(this)
		this.pressCnl = this.pressCnl.bind(this)
  }
	pressMark() {
		let {car} = this.props
//		let  = car.id;
		markedCars.push(car)
		
	 	let isHiddenMark = (this.state.classMark === "car-button__hidden")? "car-button__visible": "car-button__hidden"
		
		this.setState({classMark: isHiddenMark})
		this.setState({classCnl: "car-button__visible"})
//		console.log('---', markedCars)
	}
	pressCnl() {
		let {car} = this.props
//		markedCars.pop(car);

		let isHiddenMark = (this.state.classMark === "car-button__hidden")? "car-button__visible": "car-button__hidden"
		this.setState({classCnl: "car-button__hidden"})
		this.setState({classMark: isHiddenMark})
	}
	render() {
		const {car, onButtonClick, isOpen} = this.props
		const carDetails = isOpen && 
					<ul>
						<li>Price: {car.price}</li>
						<li>Color: {car.color}</li>
						<li>Description: {car.description}</li>
					</ul>

		return (
			<div>	
				<h4>
					{car.model}
					<button className = "btn btn-sm btn-info float-right" 
									onClick = {onButtonClick} >
						{isOpen ? "less" : "detail" }
					</button>	
					<span className= {this.state.classMark}>
						<button className = "btn btn-sm btn-secondary float-right"
										onClick = {this.pressMark} >
							mark
						</button>
					</span>
					<span className= {this.state.classCnl}>
						<button className = "btn btn-sm btn-secondary float-right"
										onClick = {this.pressCnl} >
							cancel
						</button>
					</span>
				</h4>
				{carDetails}
			</div>
    );

	}
}

export default Car