import React, { Component } from 'react';
import Gui, {
	GuiString,
	GuiColor,
	GuiNumber,
	GuiSelect,
	GuiEasing
} from '../../../lib/index';
class Controller extends Component {
	state = {
		data: {
			text: 'Some Awesome Text!!',
			background: '#dbfdfe',
			ease: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
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
					<GuiEasing path="ease" label="Easing" />
				</Gui>
			</div>
		);
	}
}

export default Controller;
