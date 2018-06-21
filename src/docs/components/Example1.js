import React, { Component } from 'react';
import Gui, { GuiString, GuiColor } from '../../lib/index';
class Example1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				text: 'Some Awesome Val',
				background: '#b7c485'
			}
		};
		this.update = this.update.bind(this);
	}

	update(data) {
		this.setState({
			data
		});
	}
	render() {
		return (
			<div>
				<Gui data={this.state.data} onUpdate={this.update}>
					<GuiString path="text" label="Head" />
					<GuiColor path="background" type="hex" label="Background" />
				</Gui>
			</div>
		);
	}
}

export default Example1;
