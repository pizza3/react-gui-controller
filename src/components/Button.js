import React,{Component} from 'react';

class Button extends Component{
	constructor(props){
		super(props);
		this.state={

		};
	}

	render(){
		const style={
			'position':'relative',
			'width':'100%',
			'height':'32px',
			'background':'#779BFF',
			'border':'none',
			'borderTop': '1px solid #D6D6D6',
			'fontSize':'12px',      
			'fontWeight': '100'	,
			'cursor':'pointer',                  
			'color':'rgb(250, 250, 250)',
			'outline': 'none'                
		};
		return(
			<button style={style}>{this.props.label}</button>
		);
	}
}

export default Button;