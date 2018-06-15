import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { textInput } from './JSXStyles/textInputStyles';
import Container from './Container';

class InputText extends Component {
	state = { val: this.props.data[this.props.path] };

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
						this.props.theme === 'dark'
							? 'inputText inputText-dark'
							: 'inputText'
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

InputText.propTypes = {
	path: PropTypes.string.isRequired,
	theme: PropTypes.oneOf(['light', 'dark']),
	data: PropTypes.object,
	updateData: PropTypes.func,
	label: PropTypes.string
};

InputText.defaultProps = {
	label: '',
	theme: 'light'
};
