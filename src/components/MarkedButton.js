import React, { PureComponent } from 'react';

import { Link } from 'react-router-dom';


class MarkedButton extends PureComponent {
	render() {
		return (
			<div>
					<br/>
					<Link to="/marked_list"> 
						<button className = "btn btn-sm btn-primary" >
							show marked cars
						</button>
					</Link>
			</div>
    );
	}
}

export default MarkedButton