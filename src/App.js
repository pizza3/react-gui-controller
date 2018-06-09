import React, {Component} from 'react';
import ReactController from './components/ReactController';
import InputText from './components/InputText';
import CheckBox from './components/CheckBox';
import Button from './components/Button';
import Color from './components/Color';
import ProgessSlider from './components/ProgressSlider';
class App extends Component{

	constructor(props){
		super(props);
		this.state={
			data:{
				'message':'some awesome shit',
				'message2':'some awesome shitzooooo!',
				'gravity':true,
				'noise':0.4,
				'color':'#ffbdbd'		
			}            
		};
		this.update=this.update.bind(this); 		      
	}


	update(data){
		this.setState({
			data
		});
	}

	handleClick(){
		console.log('click');
	}

	render(){
		const { data } = this.state;
		return(
			<ReactController data={data} onUpdate={this.update}>
				<InputText path='message' label='Message' />
				<InputText path='message2' label='Message' />				
				<CheckBox path='gravity' label='Gravity' />
				<ProgessSlider path='noise' label='Noise' min={0} max={1} step={0.05}/>
				<Button label='Click' onClick={this.handleClick}/>
				<Color path='color' label='Color'/>
			</ReactController>
		);
	}
}

export default App;