import React, { Component } from 'react';
import CustomContainer from './CustomContainer';
//creates the 2d square grid on the svg
const Grid = () => {
	let xAxis = [];
	let yAxis = [];
	let offsetY = 50;
	let offsetX = 45;
	for (let i = 0; i < 180; i += 18) {
		xAxis.push(
			<line
				key={i}
				x1={18 + offsetX}
				y1={i + 18 + offsetY}
				x2={180 + offsetX}
				y2={i + 18 + offsetY}
				stroke="#2a3251"
				strokeWidth="0.5"
			/>
		);
		yAxis.push(
			<line
				key={i}
				x1={i + 18 + offsetX}
				y1={18 + offsetY}
				x2={i + 18 + offsetX}
				y2={180 + offsetY}
				stroke="#2a3251"
				strokeWidth="0.5"
			/>
		);
	}
	return [xAxis, yAxis];
};

const path = (ac1, ac2) => {
	return `M63 230 C ${ac1.x} ${ac1.y}, ${ac2.x} ${ac2.y}, 225 68`;
};

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
		console.log(document.getElementById('svg1').getBoundingClientRect());
		this.element = document.getElementById('svg1').getBoundingClientRect();
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
		this.element = document.getElementById('svg1').getBoundingClientRect();
		console.log(this.x);
	};

	handleMove = e => {
		if (this.isMove) {
			console.log(this.element.x + this.x + ',' + e.clientX);
			//check if anchor is leaving the grid from the right on x-axis
			if (e.clientX - this.element.x >= 235) {
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
		let grid = Grid();
		let ac1 = this.state.anchor1;
		let ac2 = this.state.anchor2;
		return (
			<CustomContainer {...this.props} theme={theme} hide={this.state.hide}>
				<div className="pallete">Ease-In-Out</div>
				<svg
					id="svg1"
					width="250"
					height="300"
					xmlns="http://www.w3.org/2000/svg"
					onMouseMove={this.handleMove}
					onMouseUp={this.handleUp}
					onMouseLeave={this.handleUp}
				>
					{grid[0]}
					{grid[1]}
					<path
						id="wire"
						d={path(ac1, ac2)}
						stroke="rgb(119,155,255)"
						fill="none"
					/>
					<line
						id="dotted-line-1"
						x1="63"
						y1="230"
						x2={ac1.x}
						y2={ac1.y}
						stroke="#a7adba"
						strokeWidth="0.5"
						strokeDasharray="3px"
					/>
					<line
						id="dotted-line-2"
						x1="225"
						y1="68"
						x2={ac2.x}
						y2={ac2.y}
						stroke="#a7adba"
						strokeWidth="0.5"
						strokeDasharray="3px"
					/>
					<circle
						id="anchor1"
						onMouseDown={this.handleDown}
						onMouseUp={this.handleUp}
						cx={ac1.x}
						cy={ac1.y}
						r="4"
						strokeWidth="1"
						fill="#5f7ccc"
						stroke="#adc3ff"
					/>
					<circle
						id="anchor2"
						onMouseDown={this.handleDown}
						onMouseUp={this.handleUp}
						cx={ac2.x}
						cy={ac2.y}
						r="4"
						strokeWidth="1"
						fill="#5f7ccc"
						stroke="#adc3ff"
					/>
				</svg>
				<style jsx>
					{`
						.container {
							position: relative;
							width: 100%;
							height: 280px;
							border-top: 1px solid rgb(214, 214, 214);
							font-family: sans-serif;
							padding-top: 4px;
							padding-left: 2px;
							padding-right: 2px;
							overflow: hidden;
							transition: 0.4s;
						}

						.dark {
							border-top: 1px solid #313131;
						}

						svg {
							position: relative;
							background: none;
						}

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
