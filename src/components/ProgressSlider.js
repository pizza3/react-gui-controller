import React , {Component} from 'react';
import './GlobalStyle';
class ProgessSlider extends Component{
	constructor(props){
		super(props);
		this.state={
			value:0
		};
		this.handleRange=this.handleRange.bind(this);
	}


	handleRange(e){
		this.setState({
			value:e.target.value
		});
	}

	render(){
		return(
			<div className='container'>
				<div className='label'>Noise</div>
				<input type='text' value={this.state.value}/>												 
				<input
					type="range"
					min="0.05"
					max="1"
					step="0.05"
					value={this.state.value}
					onChange={this.handleRange}
				/> 
				<style jsx>
					{` 
                    .container{
                        position: relative;
                        width: 100%;
                        height: 32px;
                        border-top: 1px solid rgb(214, 214, 214);
                        font-family: sans-serif;
                        padding-top: 4px;
                        padding-left: 2px;
                        padding-right: 2px;
					}
					
					.label{
						position: relative;
    					float: left;
    					padding-top: 5px;
    					padding-left: 4px;
    					font-weight: 100;
    					font-size: 12px;
    					color: rgb(119, 155, 255);
					}

					input[type="range"] {
						position:relative;
						float:right;
						-moz-appearance:none;						
						-webkit-appearance: none;
						background-color: #E5E5E5;
						width: 117px;
						height: 1px;
						border-radius: 5px;
						margin: 0 auto;
						margin-top: 11px;
						margin-right:5px;
						outline: 0;
						
					}
					
					input[type="range"]::-webkit-slider-thumb {
						-webkit-appearance: none;
						appearance:none;
						background-color: #FFFFFF;
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
						border: 1px solid #e5e5e5;
						outline: none;
						background: #fafafa;
						margin-right: 4px;
						color:#779BFF;
					}
					
                `}
				</style>              
			</div>
		);
	}
}

export default ProgessSlider;