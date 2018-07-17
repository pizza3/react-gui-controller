import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { colorStyle } from './JSXStyles/colorStyles';
import CustomContainer from './containerComponents/CustomContainer';
import {
	HexToRgb,
	RgbToHex,
	RgbToHsl,
	RgbToHsv
} from './ColorUtils/Conversion';
//a simple map methos to normalize any values
const MapRange = (value, low1, high1, low2, high2) => {
	return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
};

class GuiColor extends Component {
	state = {
		hide: true,
		drag: false,
		color: 'rgba(0,0,0,1)',
		hueNob: null,
		rgb: null,
		hsl: null,
		rpos: {
			x: 0,
			y: 0
		},
		pos: {
			x: 0,
			y: 0
		},
		posStrip: {
			x: 0,
			y: 0
		}
	};

	componentDidMount() {
		//after the component has been mounted create canvas context and also apply setting's.
		let a;
		let col, val;
		if (this.props.type === 'hex') {
			val = this.props.data[this.props.path];
			col = HexToRgb(val);
			a = RgbToHsl(col[0], col[1], col[2]);
		} else if (this.props.type === 'rgb') {
			val = this.props.data[this.props.path];
			a = RgbToHsl(val.r, val.g, val.b);
		} else {
			a = RgbToHsl(198, 110, 108);
		}
		let colorBlock = document.getElementById('color-block' + this.props.num);
		this.ctx1 = colorBlock.getContext('2d');
		colorBlock.width = this.width1 = 239.08;
		colorBlock.height = this.height1 = 148;
		this.rgbaColor = '#f76262';

		let colorStrip = document.getElementById('color-strip' + this.props.num);
		this.ctx2 = colorStrip.getContext('2d');
		colorStrip.width = this.width2 = 5.88;
		colorStrip.height = this.height2 = 150;
		this.ctx1.rect(0, 0, this.width1, this.height1);
		this.fillGradient();
		this.fillStrip();
		//position pointer indicator
		let val2 = MapRange(a[0], 0, 1, 0, 150);
		this.setState(
			{
				posStrip: {
					x: 0,
					y: val2
				}
			},
			() => {
				let imageData = this.ctx2.getImageData(
					0,
					this.state.posStrip.y,
					1,
					1
				).data;
				this.rgbaColor =
					'rgba(' +
					imageData[0] +
					',' +
					imageData[1] +
					',' +
					imageData[2] +
					',1)';
				this.fillGradient();

				//the positioning implementation with help of hsv was taken from
				//the react-color library
				let hsv;
				let color;
				if (this.props.type === 'hex') {
					hsv = RgbToHsv(col[0], col[1], col[2]);
					color = this.props.data[this.props.path];
				} else if (this.props.type === 'rgb') {
					hsv = RgbToHsv(val.r, val.g, val.b);
					color = 'rgba(' + val.r + ',' + val.g + ',' + val.b + ',1)';
				}

				this.setState({
					color: color,
					pos: {
						x: `${(this.height1 * (-(hsv[2] * 100) + 100)) / 100}`,
						y: `${(this.width1 * (hsv[1] * 100)) / 100}`
					},
					rpos: {
						x: 0,
						y: 0
					},

					hueNob: this.rgbaColor
				});
			}
		);
	}

	handleHide = () => {
		this.setState({
			hide: !this.state.hide
		});
	};

	//this applies the white, black and golor gradient to the canvas
	fillGradient = () => {
		this.ctx1.fillStyle = this.rgbaColor;
		this.ctx1.fillRect(0, 0, this.width1, this.height1);

		let grdWhite = this.ctx2.createLinearGradient(0, 0, this.width1, 0);
		grdWhite.addColorStop(0, 'rgba(255,255,255,1)');
		grdWhite.addColorStop(1, 'rgba(255,255,255,0)');
		this.ctx1.fillStyle = grdWhite;
		this.ctx1.fillRect(0, 0, this.width1, this.height1);

		let grdBlack = this.ctx2.createLinearGradient(0, 0, 0, this.height1);
		grdBlack.addColorStop(0, 'rgba(0,0,0,0)');
		grdBlack.addColorStop(1, 'rgba(0,0,0,1)');
		this.ctx1.fillStyle = grdBlack;
		this.ctx1.fillRect(0, 0, this.width1, this.height1);

		let imageData = this.ctx1.getImageData(
			this.state.pos.y,
			this.state.pos.x,
			this.width1,
			this.height1
		).data;

		if (this.props.type === 'hex') {
			this.setState({
				color: RgbToHex(imageData[0], imageData[1], imageData[2])
			});
		} else if (this.props.type === 'rgb') {
			this.setState({
				color:
					'rgba(' +
					imageData[0] +
					',' +
					imageData[1] +
					',' +
					imageData[2] +
					',1)',
				rgb: {
					r: imageData[0],
					g: imageData[1],
					b: imageData[2]
				}
			});
		}
	};

	//this applies color to the hue strip of the color selector
	fillStrip = () => {
		let { ctx2, width2, height2, height1 } = this;
		ctx2.rect(0, 0, width2, height2);
		let grd1 = ctx2.createLinearGradient(0, 0, 0, height1);
		grd1.addColorStop(0, 'rgba(255, 0, 0, 1)');
		grd1.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
		grd1.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
		grd1.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
		grd1.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
		grd1.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
		grd1.addColorStop(1, 'rgba(255, 0, 0, 1)');
		ctx2.fillStyle = grd1;
		ctx2.fill();
	};

	//this method is used to select color from the gradient block
	//and stores the value in the color state
	changeColorBlock = e => {
		//don't use offset.X
		//https://github.com/facebook/react/issues/4431
		e.preventDefault();
		let x =
				e.clientX -
				document
					.getElementById('color-block' + this.props.num)
					.getBoundingClientRect().left,
			y =
				e.clientY -
				document
					.getElementById('color-block' + this.props.num)
					.getBoundingClientRect().top;

		if (x >= 238) {
			x = 237;
		} else if (x <= 0) {
			x = 0;
		}
		if (y <= 0) {
			y = 0;
		} else if (y >= 148) {
			y = 148;
		}

		let imageData = this.ctx1.getImageData(x, y, this.width1, this.height1)
			.data;

		this.rgbaColor =
			'rgba(' +
			imageData[0] +
			',' +
			imageData[1] +
			',' +
			imageData[2] +
			',1)';
		if (this.props.type === 'hex') {
			this.setState({
				color: RgbToHex(imageData[0], imageData[1], imageData[2]),
				pos: {
					x: y,
					y: x
				}
			});
		} else if (this.props.type === 'rgb') {
			this.setState({
				color: this.rgbaColor,
				rgb: {
					r: imageData[0],
					g: imageData[1],
					b: imageData[2]
				},
				pos: {
					x: y,
					y: x
				}
			});
		}
	};

	//this function is for the hue scale color selection,
	//when the nob is bieng clicked and updates the color gradient
	changeColorStrip = e => {
		//don't use offset.X
		//https://github.com/facebook/react/issues/4431
		const { posStrip } = this.state;
		const { num } = this.props;

		let { ctx2, rgbaColor } = this;
		e.preventDefault();
		let y =
			e.clientY -
			document.getElementById('color-strip' + num).getBoundingClientRect()
				.top;
		if (y <= 0) {
			y = 0;
		} else if (y >= 149) {
			y = 149;
		}
		this.setState({
			color: rgbaColor,
			posStrip: {
				x: 0,
				y: y
			}
		});
		let imageData = ctx2.getImageData(posStrip.x, posStrip.y, 1, 1).data;
		rgbaColor =
			'rgba(' +
			imageData[0] +
			',' +
			imageData[1] +
			',' +
			imageData[2] +
			',1)';
		this.setState({
			hueNob: rgbaColor
		});
		this.fillGradient();
	};

	//event down function when any of the color nob is being pressed down with mouse
	handleDown = e => {
		e.preventDefault();
		this.setState({
			drag: true
		});
		e.target.getAttribute('name') === 'strip'
			? this.changeColorStrip(e)
			: this.changeColorBlock(e);
	};

	//event move function when any of the color nob is being moved with mouse
	handleMove = e => {
		const { path } = this.props;
		const { color, rgb } = this.state;
		e.preventDefault();
		if (this.state.drag) {
			e.target.getAttribute('name') === 'strip'
				? this.changeColorStrip(e)
				: this.changeColorBlock(e);
			if (this.props.type === 'hex') {
				this.props.updateData(path, color);
			} else if (this.props.type === 'rgb') {
				this.props.updateData(path, rgb);
			}
		}
	};

	handleUp = () => {
		this.setState({
			drag: false
		});
	};

	render() {
		const themeName =
			this.props.theme === 'dark' ? 'container dark' : 'container';
		return (
			<CustomContainer
				{...this.props}
				themeName={themeName}
				hide={this.state.hide}
			>
				<div className="pallete" onClick={this.handleHide} />
				<div className="contain" onMouseLeave={this.handleUp}>
					<div
						className={
							this.props.theme === 'dark'
								? 'block-parent block-parent-dark'
								: 'block-parent'
						}
					>
						<canvas
							id={'color-block' + this.props.num}
							className="color-block"
							onMouseDown={this.handleDown}
							onMouseMove={this.handleMove}
							onMouseUp={this.handleUp}
						/>
						<div
							id={'block' + this.props.num}
							className="block"
							onMouseDown={this.handleDown}
							onMouseMove={this.handleMove}
							onMouseUp={this.handleUp}
						/>
					</div>
					<div className="strip-parent">
						<canvas
							id={'color-strip' + this.props.num}
							className="color-strip"
							name="strip"
							onMouseDown={this.handleDown}
							onMouseMove={this.handleMove}
							onMouseUp={this.handleUp}
						/>
						<div
							className="block-strip"
							name="strip"
							onMouseDown={this.handleDown}
							onMouseMove={this.handleMove}
							onMouseUp={this.handleUp}
						/>
					</div>
				</div>

				<style jsx>{colorStyle}</style>
				<style jsx>
					{`
						.block {
							position: absolute;
							margin: 0;
							padding: 0;
							box-sizing: border-box;
							width: 10px;
							height: 10px;
							border: 1px solid #fff;
							border-radius: 50%;
							transform-origin: center;
							background: ${this.state.color};
							top: ${this.state.pos.x - 5}px;
							left: ${this.state.pos.y - 5}px;
						}

						.block-strip {
							position: absolute;
							margin: 0;
							padding: 0;
							box-sizing: border-box;
							width: 10px;
							height: 10px;
							border: 1px solid
								${this.props.theme === 'dark' ? '#fff' : '#ccc'};
							border-radius: 50%;
							background: ${this.state.hueNob};
							transform-origin: center;
							transform: translate(
								${-2}px,
								${this.state.posStrip.y - 5}px
							);
						}

						.pallete {
							position: relative;
							margin: 0;
							padding: 0;
							box-sizing: border-box;
							float: right;
							height: 23px;
							width: 132px;
							border-radius: 3px;
							background: ${this.state.color};
							border: 1px solid
								${this.props.theme === 'dark'
				? '#424242'
				: 'rgb(229, 229, 229)'};
							margin-right: 4px;
							cursor: pointer;
						}
					`}
				</style>
			</CustomContainer>
		);
	}
}

GuiColor.propTypes = {
	theme: PropTypes.oneOf(['light', 'dark']),
	label: PropTypes.string,
	num: PropTypes.number,
	updateData: PropTypes.func
};

GuiColor.defaultProps = {
	label: '',
	theme: 'light'
};
export default GuiColor;
