import React ,{Component} from 'react';
import Container from './Container';
import {selectStyle} from './JSXStyles/selectStyles';
class Select extends Component{
	constructor(props){
		super(props);
		this.state={
			val:props.data[props.path]	
		};
		this.handleChange=this.handleChange.bind(this);        
	}
    
	handleChange(e){
		this.setState({
			val:e.target.value
		},()=>{
			this.props.updateData(this.props.path,this.state.val);
		});
	}
    

	render(){
		const options=this.props.options.map((val,i)=>{
			return(
				<option key={i} value={val}>{val}</option>
			);
		});
		return(
			<Container {...this.props} label={this.props.label}>
				<div className={this.props.theme?'dropdown dropdown-dark':'dropdown'}>
					<select value={this.state.val} onChange={this.handleChange} className={this.props.theme?'dropdown-select dropdown-select-dark ':'dropdown-select'}>
						{options}
					</select>
				</div>
				<style jsx>
					{selectStyle}
				</style>
			</Container>
		);
	}
}


export default Select;