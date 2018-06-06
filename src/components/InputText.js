import React,{Component} from 'react';

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
		const style={
			'position':'relative',
			'width':'100%',
			'height': '32px',
			'borderBottom': '1px solid #D6D6D6',
			'fontFamily': 'sans-serif',
			'paddingTop': '4px',
			'paddingLeft': '2px',
			'paddingRight': '2px'
		};
		
		const label={
			'position':'relative',
			'float':'left',
			'paddingTop': '5px',
			'paddingLeft':'4px',
			'fontWeight': '100'	,
			'fontSize':'12px',
			'color':'#779BFF'
		};
		
		const input={
			'position':'relative',
			'float':'right',
			'height':'22px',
			'marginRight':'4px',		
			'borderRadius': '3px',	
			'background':'rgb(253, 253, 253)',
			'border':'1px solid #E5E5E5',
			'outline': 'none',
			'color':'#779BFF',
			'paddingLeft': '5px',
			'fontWeight': '500'
			
		};
		return(
			<div id='input-text' style={style}>
				<div style={label}>Message</div>
				<input type='text' style={input} value={this.state.val} onChange={this.handleChange} />
			</div>
		);
	}
}

export default InputText;
