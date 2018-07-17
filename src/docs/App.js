import React, { Component } from 'react';
import Example1 from './components/Example1/Example1';
import Nav from './components/Nav';

class App extends Component {
	render() {
		return (
			<div>
				<Nav />
				<Example1 />
			</div>
		);
	}
}

export default App;
