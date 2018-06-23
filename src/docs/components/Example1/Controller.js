import React, { Component } from 'react';
import Gui, {
	GuiString,
	GuiColor,
	GuiNumber,
	GuiSelect
} from '../../../lib/index';
class Example1 extends Component {
	state = {
		data: {
			text: 'Some Awesome Val',
			background: '#ffaf87',
			strength: 6,
			type: 'square'
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
					<GuiNumber
						path="strength"
						min={2}
						max={60}
						step={1}
						label="Strength"
					/>
					<GuiSelect
						path="type"
						label="Type"
						options={['square', 'circle']}
					/>
				</Gui>
				{this.props.render(this.state)}
			</div>
		);
	}
}

export default Example1;
