import React, { Component } from 'react';
import CustomContainer from './CustomContainer';
import SvgGrid from './EaseCurveUtils/SvgGrid';
import SvgPath from './EaseCurveUtils/SvgPath';
import { easeCurveStyle } from './JSXStyles/easeCurveStyles';
import { selectStyle } from './JSXStyles/selectStyles';

//map function is used to naomalise the values
const MapRange = (value, low1, high1, low2, high2) => {
	return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
};

class EaseCurve extends Component {
	state = {
		hide: false,
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
		this.isMove = false;
		console.log(
			document.getElementById(`svg${this.props.num}`).getBoundingClientRect()
		);
		this.element = document
			.getElementById(`svg${this.props.num}`)
			.getBoundingClientRect();
	}

	setPointer = () => {
		this.setState({
			c1: {
				x:
					Math.round(MapRange(this.state.anchor1.x, 63, 225, 0, 1) * 100) /
					100,
				y:
					Math.round(MapRange(this.state.anchor1.y, 68, 230, 1, 0) * 100) /
					100
			},
			c2: {
				x:
					Math.round(MapRange(this.state.anchor2.x, 63, 225, 0, 1) * 100) /
					100,
				y:
					Math.round(MapRange(this.state.anchor2.y, 68, 230, 1, 0) * 100) /
					100
			}
		});
	};

	handleDown = e => {
		//select the particular anchor and update it with its
		//corresponding state
		this.el = e.target.getAttribute('id');
		this.isMove = true;
		this.x = this.state[this.el].x;
		this.element = document
			.getElementById(`svg${this.props.num}`)
			.getBoundingClientRect();
		console.log(this.x);
	};

	handleMove = e => {
		if (this.isMove) {
			console.log(this.element.x + this.x + ',' + e.clientX);
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

	render() {
		const theme = this.props.theme ? 'container dark' : 'container';
		const { anchor1, anchor2 } = this.state;
		return (
			<CustomContainer {...this.props} theme={theme} hide={this.state.hide}>
				<div
					className={
						this.props.theme ? 'dropdown dropdown-dark' : 'dropdown'
					}
				>
					<select
						className={
							this.props.theme
								? 'dropdown-select dropdown-select-dark '
								: 'dropdown-select'
						}
					>
						<option value={'linear'}>Linear</option>
					</select>
				</div>
				<style jsx>{selectStyle}</style>
				<svg
					id={`svg${this.props.num}`}
					width="250"
					height="300"
					xmlns="http://www.w3.org/2000/svg"
					onMouseMove={this.handleMove}
					onMouseUp={this.handleUp}
					onMouseLeave={this.handleUp}
				>
					<SvgGrid {...this.props} />
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
				<style jsx>{selectStyle}</style>
				<style jsx>
					{`
						.pallete {
							position: relative;
							float: right;
							height: 23px;
							width: 132px;
							border-radius: 3px;
							background: #fdfdfd;
							border: 1px solid
								${this.props.theme ? '#424242' : 'rgb(229, 229, 229)'};
							margin-right: 4px;
							cursor: pointer;
							color: #7599ff;
							font-size: 11px;
							font-weight: 500;
							padding-top: 5px;
							padding-left: 7px;
						}
					`}
				</style>
			</CustomContainer>
		);
	}
}

export default EaseCurve;
