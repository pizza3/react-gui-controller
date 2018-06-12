import React, { Component } from 'react';
import { textInput } from './JSXStyles/textInputStyles';
import Container from './Container';

class InputText extends Component {
	state = { val:this.props.data[this.props.path] };

	handleChange = e => {
		this.setState(
			{
				val: e.target.value
			},
			() => {
				this.props.updateData(this.props.path, this.state.val);
			}
		);
	};

	render() {
		return (
			<Container {...this.props} label={this.props.label}>
				<input
					type="text"
					className={
						this.props.theme ? 'inputText inputText-dark' : 'inputText'
					}
					value={this.state.val}
					onChange={this.handleChange}
				/>
				<style jsx>{textInput}</style>
			</Container>
		);
	}
}

export default InputText;
