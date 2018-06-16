import React, { Component } from 'react';
import Gui, { GuiString, GuiNumber } from './components/Gui';
class App extends Component {
	state = {
		data: {
			text: 'Some Awesome Val',
			noise: 0.4
		}
	};

	update = data => {
		this.setState({
			data
		});
	};

	handleClick() {
		console.log('click');
	}

	render() {
		const { data } = this.state;
		return (
			<Gui data={data} theme="dark" onUpdate={this.update}>
				<GuiString path="text" label="Head" />
				<GuiNumber path="noise" label="Noise" min={0} max={1} step={0.1} />
			</Gui>
		);
	}
}

export default App;
