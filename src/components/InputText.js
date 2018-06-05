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
			val:newProps.val;
		})
	}

	handleChange(e){
		this.setState({
			val:e.target.value
		})
	}

	render(){
		const style={
			'position':'relative',
			'width':'100%',
			'height': '25px',
			'borderBottom': '1px solid #a0a0a0',
			'fontFamily': 'sans-serif',
			'paddingTop': '4px',
			'paddingLeft': '2px',
			'paddingRight': '2px'
		};
		
		const label={
			'position':'relative',
			'float':'left',
			'paddingTop': '3px',
			'fontWeight': '100'	
		};
		
		const input={
			'position':'relative',
			'float':'right',
		};
		return(
			<div id='input-text' style={style}>
				<div style={label}>Text</div>
				<input type='text' style={input} value={this.state.val} onChange={this.state.handleChange} />
			</div>
		);
	}
}

export default InputText;
