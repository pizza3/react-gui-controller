import React, { Component } from 'react';
import Example2 from './components/Example2/Example2';
import Nav from './components/Nav';

class App extends Component {
	render() {
		return (
			<div>
				<Nav />
				<Example2 />
			</div>
		);
	}
}

export default App;
