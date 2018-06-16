import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from './containerComponents/Container';
import { selectStyle } from './JSXStyles/selectStyles';
class GuiSelect extends Component {
	constructor(props) {
		super(props);
		this.state = {
			val: props.data[props.path]
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState(
			{
				val: e.target.value
			},
			() => {
				this.props.updateData(this.props.path, this.state.val);
			}
		);
	}

	render() {
		const options = this.props.options.map((val, i) => {
			return (
				<option key={i} value={val}>
					{val}
				</option>
			);
		});
		return (
			<Container {...this.props} label={this.props.label}>
				<div
					className={
						this.props.theme === 'dark'
							? 'dropdown dropdown-dark'
							: 'dropdown'
					}
				>
					<select
						value={this.state.val}
						onChange={this.handleChange}
						className={
							this.props.theme === 'dark'
								? 'dropdown-select dropdown-select-dark '
								: 'dropdown-select'
						}
					>
						{options}
					</select>
				</div>
				<style jsx>{selectStyle}</style>
			</Container>
		);
	}
}

export default GuiSelect;

GuiSelect.propTypes = {
	path: PropTypes.string.isRequired,
	theme: PropTypes.oneOf(['light', 'dark']),
	data: PropTypes.object,
	updateData: PropTypes.func,
	label: PropTypes.string,
	options: PropTypes.array
};

GuiSelect.defaultProps = {
	label: '',
	theme: 'light'
};
