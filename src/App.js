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
			easing2: 'linear',
			easing: 'cubic-bezier(0.65, 0.05, 0.36, 3)'
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
			</ReactController>
		);
	}
}

export default App;
