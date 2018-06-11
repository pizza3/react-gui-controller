import React, { Component } from 'react';
import { label } from './JSXStyles/commonStyles';
import { container } from './JSXStyles/customCommonStyles';

//creates the 2d square grid on the svg
const Grid = () => {
	let xAxis = [];
	let yAxis = [];
	for (let i = 0; i < 140; i += 14) {
		xAxis.push(
			<line
				key={i}
				x1="14"
				y1={i + 14}
				x2="140"
				y2={i + 14}
				stroke="#404b69"
				strokeWidth="0.5"
			/>
		);
		yAxis.push(
			<line
				key={i}
				x1={i + 14}
				y1="15"
				x2={i + 14}
				y2="150"
				stroke="#404b69"
				strokeWidth="0.5"
			/>
		);
	}
	return [xAxis, yAxis];
};

class EaseCurve extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const theme = this.props.theme ? 'container dark' : 'container';
		let grid = Grid();

		return (
			<div className={this.state.hide ? theme : `${theme} hide`}>
				<div className="label">{this.props.label}</div>
				<div className="pallete">Ease-In-Out</div>
				<svg width="250" height="250" xmlns="http://www.w3.org/2000/svg">
					{grid[0]}
					{grid[1]}
				</svg>
				<style jsx>{label}</style>
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
							background: #535d78;
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
			</div>
		);
	}
}

export default EaseCurve;
