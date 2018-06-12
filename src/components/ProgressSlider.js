import React , {Component} from 'react';
import {label, container} from './JSXStyles/commonStyles';
import Container from './Container';

class ProgessSlider extends Component{
	state = { 
			val:this.props.data[this.props.path]
		};
	

	handleRange = e =>{
		this.setState({
			val:e.target.value
		},()=>{
			this.props.updateData(this.props.path,this.state.val);
		});
	}

	render(){
		const {min, max, step}=this.props;
		return(
			<Container {...this.props} label={this.props.label}>
				<input type='text' value={this.state.val} onChange={this.handleRange}/>												 
				<input
					type="range"
					min={min}
					max={max}
					step={step}
					value={this.state.val}
					onChange={this.handleRange}
				/> 
				<style jsx>{label}</style>
				<style jsx>{container}</style>				
				<style jsx>
					{` 

					input[type="range"] {
						position:relative;
						float:right;
						-moz-appearance:none;						
						-webkit-appearance: none;
						background-color: ${this.props.theme?'#424242':'#E5E5E5'};
						width: 117px;
						height: 2px;
						border-radius: 5px;
						margin: 0 auto;
						margin-top: 10px;
						margin-right:5px;
						outline: 0;
						
					}
					
					input[type="range"]::-webkit-slider-thumb {
						-webkit-appearance: none;
						appearance:none;
						background-color: ${this.props.theme?'#313131':'#FFFFFF'};
						width: 10px;
						height: 10px;
						border-radius: 50%;
						border: 1px solid #779BFF;
						cursor: pointer;
						transition: 0.3s ease-in-out;
					}
					
					input[type="range"]::-webkit-slider-thumb:active {
						transform: scale(1.8);
					}

					input[type='text']{
						position: relative;
						float: right;
						width: 30px;
						height: 22px;
						border-radius: 3px;
						border: 1px solid ${this.props.theme?'#424242':'#e5e5e5'};
						outline: none;
						background: ${this.props.theme?'#212121':'#fafafa'};
						margin-right: 4px;
						color:#779BFF;
					}
					
                `}
				</style>              
			</Container>

		);
	}
}

export default ProgessSlider;