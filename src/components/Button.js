import React,{Component} from 'react';
import {buttonStyle} from './Styles/buttonStyles';
class Button extends Component{
	constructor(props){
		super(props);
		this.state={

		};
	}

	render(){
		return(
			<div>
				<button className={this.props.theme?'buttonStyle dark':'buttonStyle'}>{this.props.label}</button>
				<style jsx>{buttonStyle}</style>							
			</div>
		);
	}
}

export default Button;