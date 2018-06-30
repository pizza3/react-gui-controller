import React, { Component } from 'react';
import Example1 from './components/Example1/Example1';
import Example2 from './components/Example2/Example2';
import { Route, withRouter, Switch } from 'react-router-dom';
import Nav from './components/Nav';

class App extends Component {
	render() {
		return (
			<div>
				<Nav />
				<Example1/>
			</div>
		);
	}
}

export default App;
