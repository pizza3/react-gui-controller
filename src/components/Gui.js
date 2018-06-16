import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { controllerStyle } from './JSXStyles/controllerStyles';

class Gui extends Component {
	state = {
		hide: this.props.hide,
		drag: false,
		pos: {
			x: 100,
			y: 50
		}
	};

	handleHide = () => {
		this.setState({
			hide: !this.state.hide
		});
	};

	handleData = (path, val) => {
		let data = this.props.data;
		data[path] = val;
		this.props.onUpdate(data);
	};

	renderChildren = () => {
		const { children, data } = this.props;
		return React.Children.toArray(children).map((child, i) => {
			return React.cloneElement(child, {
				key: i,
				num: i,
				theme: this.props.theme,
				updateData: this.handleData,
				data: data
			});
		});
	};

	render() {
		return (
			<div
				id="controller-body"
				className={
					this.props.theme === 'dark'
						? 'controller-body dark'
						: 'controller-body'
				}
				onMouseMove={this.handleDragMove}
			>
				<div className="drag" />
				<div className={this.state.hide ? 'container hide' : 'container'}>
					{this.renderChildren()}
				</div>
				<div
					onClick={this.handleHide}
					className={
						this.props.theme === 'dark'
							? 'control-button control-button-dark'
							: 'control-button'
					}
				>
					{this.state.hide ? 'Open Controls' : 'Close Controls'}
				</div>
				<style jsx>{controllerStyle}</style>
			</div>
		);
	}
}
export default Gui;

Gui.propTypes = {
	children: PropTypes.arrayOf(PropTypes.node),
	data: PropTypes.object,
	theme: PropTypes.oneOf(['light', 'dark']),
	hide: PropTypes.bool,
	onUpdate: PropTypes.func.isRequired
};

Gui.defaultProps = {
	theme: 'light',
	hide: false
};

export { default as GuiString } from './GuiString';
export { default as GuiNumber } from './GuiNumber';
export { default as GuiSelect } from './GuiSelect';
export { default as GuiEasing } from './GuiEasing';
export { default as GuiColor } from './GuiColor';
export { default as GuiBool } from './GuiBool';
export { default as GuiButton } from './GuiButton';
