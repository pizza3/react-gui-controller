import React, {Component} from 'react';
import ReactController from './components/ReactController';
import InputText from './components/InputText';
import CheckBox from './components/CheckBox';
import Button from './components/Button';
import Color from './components/Color';
import ProgressSlider from './components/ProgressSlider';
import ProgessSlider from './components/ProgressSlider';
class App extends Component{

	constructor(props){
		super(props);
		this.state={
			val:'some shit',
			val2:'some shit',
			data:{

			}            
		};
		this.handleInput=this.handleInput.bind(this);
		this.handleInput2=this.handleInput2.bind(this);        
	}

	handleInput(e){
		this.setState({
			val:e.target.value
		});
	}

	handleInput2(e){
		this.setState({
			val2:e.target.value
		});
	}

	render(){
		return(
			<ReactController>
				<InputText val={this.state.val} lable='message' onChange={this.handleInput}/>
				<Color label='Color2'/>								
				<InputText val={this.state.val2} onChange={this.handleInput2}/>   
				<CheckBox label='Gravity' />
				<Color label='Color'/>				
				<Button label='Button'/> 
				<ProgessSlider/>
				
			</ReactController>
		);
	}
}

export default App;