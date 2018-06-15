import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from './Container';
import CheckBoxStyles from './JSXStyles/checkBoxStyles';
class CheckBox extends Component {
	state = {
		val: this.props.data[this.props.path]
	};

	handleInputChange = e => {
		this.setState(
			{
				val: e.target.checked
			},
			() => {
				this.props.updateData(this.props.path, this.state.val);
			}
		);
	};

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

CheckBox.propTypes = {
	path: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	data: PropTypes.object,
	updateData: PropTypes.func
};

CheckBox.defaultProps = {
	label: ''
};
