import React,{Component} from 'react';
import {buttonStyle} from './JSXStyles/buttonStyles';
class Button extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<button onClick={this.props.onClick} className={this.props.theme?'buttonStyle dark':'buttonStyle'}>{this.props.label}</button>
				<style jsx>{buttonStyle}</style>							
			</div>
		);
	}
}

export default Button;