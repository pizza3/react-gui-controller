import React, { Component } from 'react';
import Gui, { GuiString, GuiNumber, GuiColor } from './components/Gui';
class App extends Component {
	state = {
		data: {
			text: 'Some Awesome Val',
			noise: 0.4,
			background: '#dc6900',
			foreground: '#b7c485'
		}
	};

	update = data => {
		this.setState({
			data
		});
	};

	render() {
		const { data } = this.state;
		return (
			<Gui data={data} theme="dark" onUpdate={this.update}>
				<GuiString path="text" label="Head" />
				<GuiNumber path="noise" label="Noise" min={0} max={1} step={0.1} />
				<GuiColor path="background" label="Background" type="hex" />
				<GuiColor path="foreground" label="Foreground" type="hex" />
			</Gui>
		);
	}
}

export default App;
