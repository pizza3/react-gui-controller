import React, { Component } from 'react';
import Gui, {
	GuiString,
	GuiNumber,
	GuiColor,
	GuiSelect
} from './components/Gui';
class App extends Component {
	state = {
		data: {
			text: 'Some Awesome Val',
			noise: 0.4,
			foreground: '#C1FFCA',
			background: '#60efb8',
			framerate: '30fps'
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
				<GuiSelect
					path="framerate"
					options={['25fps', '30fps', '40fps', '60fps']}
					label="Framerate"
				/>
				<GuiColor path="foreground" label="Foreground" type="hex" />
				<GuiColor path="background" label="Background" type="hex" />
			</Gui>
		);
	}
}

export default App;
