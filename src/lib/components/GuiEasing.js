import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomContainer from './containerComponents/CustomContainer';
import SvgGrid from './EasingUtils/SvgGrid';
import SvgPath from './EasingUtils/SvgPath';
import { easeCurveStyle } from './JSXStyles/easeCurveStyles';
import Indicator from './EasingUtils/Indicator';
import SvgText from './EasingUtils/SvgText';
//map function is used to naomalise the values
const MapRange = (value, low1, high1, low2, high2) => {
	return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
};

class GuiEasing extends Component {
	state = {
		hide: true,
		anchor1: {
			x: 63,
			y: 230
		},
		anchor2: {
			x: 225,
			y: 68
		},
		c1: {
			x: null,
			y: null
		},
		c2: {
			x: null,
			y: null
		}
	};

	componentDidMount() {
		const { data, path } = this.props;
		this.isMove = false;
		let val = data[path],
			val2,
			re = /\s*,\s*/;
		val2 = val.replace(/ /g, '');
		var l = val2.length;
		val2 = val2.slice(13, l - 1);
		val2 = val2.split(re);
		this.setState(
			{
				anchor1: {
					x: MapRange(val2[0], 0, 1, 63, 225),
					y: MapRange(val2[1], 0, 1, 230, 68)
				},
				anchor2: {
					x: MapRange(val2[2], 0, 1, 63, 225),
					y: MapRange(val2[3], 0, 1, 230, 68)
				}
			},
			() => {
				this.setPointer();
			}
		);
		this.element = document
			.getElementById(`svg${this.props.num}`)
			.getBoundingClientRect();
	}

	setPointer = () => {
		this.setState(
			{
				c1: {
					x:
						Math.round(
							MapRange(this.state.anchor1.x, 63, 225, 0, 1) * 100
						) / 100,
					y:
						Math.round(
							MapRange(this.state.anchor1.y, 68, 230, 1, 0) * 100
						) / 100
				},
				c2: {
					x:
						Math.round(
							MapRange(this.state.anchor2.x, 63, 225, 0, 1) * 100
						) / 100,
					y:
						Math.round(
							MapRange(this.state.anchor2.y, 68, 230, 1, 0) * 100
						) / 100
				}
			},
			() => {
				const { c1, c2 } = this.state;
				const val = `cubic-bezier(${c1.x},${c1.y},${c2.x},${c2.y})`;
				this.props.updateData(this.props.path, val);
			}
		);
	};

	handleDown = e => {
			e.preventDefault();		

		//select the particular anchor and update it with its
		//corresponding state
		this.el = e.target.getAttribute('id');
		this.isMove = true;
		this.x = this.state[this.el].x;
		this.element = document
			.getElementById(`svg${this.props.num}`)
			.getBoundingClientRect();
	};

	handleMove = e => {
			e.preventDefault();		

		if (this.isMove) {
			//check if anchor is leaving the grid from the right on x-axis
			if (e.clientX - this.element.x >= 225) {
				this.setState({
					[this.el]: {
						x: 225,
						y: e.clientY - this.element.y
					}
				});
			}
			//check if anchor is leaving the grid from the left on x-axis
			else if (e.clientX - this.element.x <= 63) {
				this.setState({
					[this.el]: {
						x: 63,
						y: e.clientY - this.element.y
					}
				});
			} else {
				this.setState({
					[this.el]: {
						x: e.clientX - this.element.x,
						y: e.clientY - this.element.y
					}
				});
			}
			//normalise the values
			this.setPointer();
		}
	};

	handleUp = () => {
		this.isMove = false;
		//normalise the values
		this.setPointer();
	};

	handleHide = () => {
		this.setState({
			hide: !this.state.hide
		});
	};

	render() {
		const themeName =
			this.props.theme === 'dark' ? 'container dark' : 'container';
		const { c1, c2, anchor1, anchor2 } = this.state;
		const { data, path } = this.props;
		return (
			<CustomContainer
				{...this.props}
				themeName={themeName}
				hide={this.state.hide}
			>
				<div
					className={
						this.props.theme === 'dark' ? 'text text-dark' : 'text'
					}
					onClick={this.handleHide}
				>
					{data[path]}
				</div>
				<Indicator ease={`cubic-bezier(${c1.x},${c1.y},${c2.x},${c2.y})`} />
				<svg
					id={`svg${this.props.num}`}
					width="100%"
					height="300"
					xmlns="http://www.w3.org/2000/svg"
					onMouseMove={this.handleMove}
					onMouseUp={this.handleUp}
					onMouseLeave={this.handleUp}
				>
					<SvgGrid {...this.props} />
					<SvgText />
					<SvgPath ac1={anchor1} ac2={anchor2} />
					<circle
						id="anchor1"
						onMouseDown={this.handleDown}
						onMouseUp={this.handleUp}
						cx={anchor1.x}
						cy={anchor1.y}
						r="4"
						strokeWidth="1"
						fill="#5f7ccc"
						stroke="#adc3ff"
					/>
					<circle
						id="anchor2"
						onMouseDown={this.handleDown}
						onMouseUp={this.handleUp}
						cx={anchor2.x}
						cy={anchor2.y}
						r="4"
						strokeWidth="1"
						fill="#5f7ccc"
						stroke="#adc3ff"
					/>
				</svg>
				<style jsx>{easeCurveStyle}</style>
			</CustomContainer>
		);
	}
}

export default GuiEasing;

GuiEasing.propTypes = {
	path: PropTypes.string.isRequired,
	theme: PropTypes.oneOf(['light', 'dark']),
	data: PropTypes.object,
	updateData: PropTypes.func,
	label: PropTypes.string,
	num: PropTypes.number
};

GuiEasing.defaultProps = {
	label: '',
	theme: 'light'
};
