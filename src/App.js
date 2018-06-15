import React, { Component } from 'react';
import ReactController from './components/ReactController';
import InputText from './components/InputText';
import CheckBox from './components/CheckBox';
import Button from './components/Button';
import Color from './components/Color';
import ProgessSlider from './components/ProgressSlider';
import Select from './components/Select';
import EaseCurve from './components/EaseCurve';
class App extends Component {
	state = {
		data: {
			text: 'Some Awesome Val',
			gravity: false,
			easing2: 'cubic-bezier(1, 0, 0, 1)',
			easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
			color: '#000',
			preset: 'value3',
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
			<ReactController data={data} theme="dark" onUpdate={this.update}>
				<InputText path="text" label="Head" />
				<EaseCurve path="easing2" label="SkewXEasing" />
				<EaseCurve path="easing" label="SkewYEasing" />
				<CheckBox path="gravity" label="Gravity" />
				<Color path="color" type="hex" label="Background" />
				<Select
					path="preset"
					options={['value1', 'value2', 'value3', 'value4']}
					label="Preset"
				/>
				<ProgessSlider
					path="noise"
					label="Noise"
					min={0}
					max={1}
					step={0.01}
				/>
			</ReactController>
		);
	}
}

export default App;
