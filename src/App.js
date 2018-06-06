import React, {Component} from 'react';
import ReactController from './components/ReactController';
import InputText from './components/InputText';
import CheckBox from './components/CheckBox';
class App extends Component{

	constructor(props){
		super(props);
		this.state={
			val:'some shit',
			val2:'some shit'            
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
				<InputText val={this.state.val2} onChange={this.handleInput2}/>    
			</ReactController>
		);
	}
}

export default App;