import React, { PureComponent } from 'react';

class Car extends PureComponent {
	constructor(props) {
    super(props)
    this.state = {class: "hidden"}
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
				</h4>
				{carDetails}
			</div>
    );

	}
}

export default Car