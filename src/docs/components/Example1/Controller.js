import React, { Component } from 'react';
import Gui, { GuiString, GuiColor } from '../../../lib/index';
class Example1 extends Component {
	state = {
		data: {
			text: 'Some Awesome Val',
			background: '#ffaf87'
		}
	};
	update = data => {
		this.setState({
			data
		});
	};
	render() {
		return (
			<div>
				<Gui data={this.state.data} theme="dark" onUpdate={this.update}>
					<GuiString path="text" label="Head" />
					<GuiColor path="background" type="hex" label="Background" />
				</Gui>
				{this.props.render(this.state)}
			</div>
		);
	}
}

export default Example1;
