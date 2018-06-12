import React, { Component } from 'react';
import Container from './Container';
import CheckBoxStyles from './JSXStyles/checkBoxStyles';
class CheckBox extends Component {
	
		state = {
			val: this.props.data[this.props.path]
		};
		
	handleInputChange=(e)=> {
		this.setState(
			{
				val: e.target.checked
			},
			() => {
				this.props.updateData(this.props.path, this.state.val);
			}
		);
	}

	render() {
		return (
			<Container {...this.props} label={this.props.label}>
				<CheckBoxStyles
					{...this.props}
					val={this.state.val}
					handleChange={this.handleInputChange}
				/>
			</Container>
		);
	}
}

export default CheckBox;
