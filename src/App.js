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
			easing2: 'cubic-bezier(1, 0, 0, 1)',
			easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
			color: '#000'
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
			<ReactController data={data} onUpdate={this.update}>
				<EaseCurve path="easing2" label="SkewXEasing" />
				<EaseCurve path="easing" label="SkewYEasing" />
				<Color path="color" label="Background" />
			</ReactController>
		);
	}
}

export default App;
