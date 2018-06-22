import React, { Component } from 'react';
import Controller from './Controller';
import Canvas from './Canvas';
class Example1 extends Component {
	render() {
		return (
			<div>
				<Controller render={data => <Canvas data={data} />} />
			</div>
		);
	}
}

export default Example1;
