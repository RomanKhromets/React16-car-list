import React, { PureComponent } from 'react';

import markedCars from '../markedCarsArr';


class Car extends PureComponent {
	constructor(props) {
    super(props)
    this.state = {isMarked: null}
		this.pressMark = this.pressMark.bind(this)
  }
	pressMark(){
		let {car} = this.props
		this.setState({isMarked : buttMark()})
		
		function isItemInArr(){
			return markedCars.some( function(val,ind,arr){ return markedCars[ind].id === car.id } );
		}
		function buttMark(){
			if(!isItemInArr())	markedCars.push(car);
			return true;
		}
	}
	render() {
		const {car, onButtonClick, isOpen} = this.props
		let marked = markedCars.some( function(val,ind,arr){ return markedCars[ind].id === car.id } );
		const carDetails = isOpen && 
					<ul>
						<li>Price: {car.price}</li>
						<li>Color: {car.color}</li>
						<li>Description: {car.description}</li>
					</ul>
		const markBut = <button className = "btn btn-sm btn-secondary float-right"
															onClick = {this.pressMark} >
												mark
											</button>
		const doneBut = <button className = "btn btn-sm btn-danger float-right" >
												done
										</button>

		return (
			<div>	
				<h4>
					{car.model}
					<button className = "btn btn-sm btn-info float-right" 
									onClick = {onButtonClick} >
						{isOpen ? "less" : "detail" }
					</button>	
							{marked ? doneBut : markBut}
				</h4>
				{carDetails}
			</div>
    );
	}
}

export default Car