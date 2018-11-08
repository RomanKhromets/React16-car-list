import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import App from './components/App';
import MarkedList from './components/MarkedList';

import './index.css';

ReactDOM.render(
<Router>
	<Switch>
		<Route exact path="/" component={App} />
		<Route exact path="/marked_list" component={MarkedList} />
	</Switch>
</Router> , 
document.getElementById('root'));
