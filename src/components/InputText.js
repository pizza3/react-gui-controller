import React,{Component} from 'react';
import {label, container} from './Styles/commonStyles';
import {textInput} from './Styles/textInput';
import Container from './Container';

class InputText extends Component{
	constructor(props){
		super(props);
		this.state={
			val:''	
		};
		this.handleChange=this.handleChange.bind(this);
	}

	componentWillReceiveProps(newProps){
		this.setState({
			val:newProps.val
		});
	}

	handleChange(e){
		this.setState({
			val:e.target.value
		});
	}

	render(){
		return(
			<Container {...this.props} label={this.props.label}>

				<input type='text' className='inputText' value={this.state.val} onChange={this.handleChange} />
				<style jsx>{label}</style>
				<style jsx>{container}</style>	
				<style jsx>{textInput}</style>							
			</Container>
		);
	}
}

export default InputText;
