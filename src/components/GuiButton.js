import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { buttonStyle } from './JSXStyles/buttonStyles';
class GuiButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<button
					onClick={this.props.onClick}
					className={
						this.props.theme === 'dark'
							? 'buttonStyle dark'
							: 'buttonStyle'
					}
				>
					{this.props.label}
				</button>
				<style jsx>{buttonStyle}</style>
			</div>
		);
	}
}

export default GuiButton;

GuiButton.propTypes = {
	label: PropTypes.string,
	theme: PropTypes.oneOf(['light', 'dark']),
	onClick: PropTypes.func.isRequired
};

GuiButton.defaultProps = {
	label: '',
	theme: 'light'
};
