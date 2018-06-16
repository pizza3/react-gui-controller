import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { colorStyle } from './JSXStyles/colorStyles';
import CustomContainer from './containerComponents/CustomContainer';

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
		let col;
		if (this.props.type === 'hex') {
			let val = this.props.data[this.props.path];
			console.log(val);
			col = this.hexToRgb(val);

			console.log(col);
			a = this.rgbToHsl(col[0], col[1], col[2]);
		} else {
			a = this.rgbToHsl(198, 110, 108);
		}
		let colorBlock = document.getElementById('color-block' + this.props.num);
		this.ctx1 = colorBlock.getContext('2d');
		this.width1 = colorBlock.width;
		this.height1 = colorBlock.height;
		this.rgbaColor = '#f76262';

		let colorStrip = document.getElementById('color-strip' + this.props.num);
		this.ctx2 = colorStrip.getContext('2d');
		this.width2 = colorStrip.width;
		this.height2 = colorStrip.height;
		this.ctx1.rect(0, 0, this.width1, this.height1);
		this.fillGradient();
		this.fillStrip();
		// console.log(this.hexToRgbA(this.rgbaColor));
		//position pointer indicator
		// console(a[0]);
		let val = MapRange(a[0], 0, 1, 0, 150);
		this.setState(
			{
				posStrip: {
					x: 0,
					y: val
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

				//these two loops check for the pixel position of the color in gradient block
				//and sets the nob of the gradient color block to that position
				for (let i = 0; i < this.width1; i++) {
					for (let j = 0; j < this.height1; j++) {
						let imageData = this.ctx1.getImageData(i, j, 1, 1).data;
						if (
							'rgba(' + col[0] + ',' + col[1] + ',' + col[2] + ',1)' ===
							'rgba(' +
								imageData[0] +
								',' +
								imageData[1] +
								',' +
								imageData[2] +
								',1)'
						) {
							this.setState({
								color:
									'rgba(' +
									imageData[0] +
									',' +
									imageData[1] +
									',' +
									imageData[2] +
									',1)',
								pos: {
									x: i,
									y: j
								},
								hueNob: this.rgbaColor
							});
						}
					}
				}
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
			this.state.pos.x,
			this.state.pos.y,
			1,
			1
		).data;
		this.setState({
			color:
				'rgba(' +
				imageData[0] +
				',' +
				imageData[1] +
				',' +
				imageData[2] +
				',1)'
		});
	};

	//this applies color to the hue strip of the color selector
	fillStrip = () => {
		this.ctx2.rect(0, 0, this.width2, this.height2);
		let grd1 = this.ctx2.createLinearGradient(0, 0, 0, this.height1);
		grd1.addColorStop(0, 'rgba(255, 0, 0, 1)');
		grd1.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
		grd1.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
		grd1.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
		grd1.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
		grd1.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
		grd1.addColorStop(1, 'rgba(255, 0, 0, 1)');
		this.ctx2.fillStyle = grd1;
		this.ctx2.fill();
	};

	//this method is used to select color from the gradient block
	//and stores the value in the color state
	changeColorBlock = e => {
		//don't use offset.X
		//https://github.com/facebook/react/issues/4431
		let x =
				e.clientX -
				document
					.getElementById('color-block' + this.props.num)
					.getBoundingClientRect().left,
			y =
				e.clientY -
				document
					.getElementById('color-block' + this.props.num)
					.getBoundingClientRect().top,
			imageData = this.ctx1.getImageData(x, y, 1, 1).data;
		this.rgbaColor =
			'rgba(' +
			imageData[0] +
			',' +
			imageData[1] +
			',' +
			imageData[2] +
			',1)';
		this.setState({
			color: this.rgbaColor,
			pos: {
				x: x,
				y: y
			}
		});
	};

	//this function is for the hue scale color selection,
	//when the nob is bieng clicked and updates the color gradient
	changeColorStrip = e => {
		//don't use offset.X
		//https://github.com/facebook/react/issues/4431
		let x =
				e.clientX -
				document
					.getElementById('color-strip' + this.props.num)
					.getBoundingClientRect().left,
			y =
				e.clientY -
				document
					.getElementById('color-strip' + this.props.num)
					.getBoundingClientRect().top;
		if (y <= 0) {
			y = 0;
		} else if (y >= 149) {
			y = 149;
		}
		this.setState({
			color: this.rgbaColor,
			posStrip: {
				x: 0,
				y: y
			}
		});
		let imageData = this.ctx2.getImageData(x, y, 1, 1).data;
		this.rgbaColor =
			'rgba(' +
			imageData[0] +
			',' +
			imageData[1] +
			',' +
			imageData[2] +
			',1)';
		this.setState({
			hueNob: this.rgbaColor
		});
		this.fillGradient();
	};

	//event down function when any of the color nob is being pressed down with mouse
	handleDown = e => {
		this.setState({
			drag: true
		});
		e.target.getAttribute('name') === 'strip'
			? this.changeColorStrip(e)
			: this.changeColorBlock(e);
	};

	//event move function when any of the color nob is being moved with mouse
	handleMove = e => {
		if (this.state.drag) {
			e.target.getAttribute('name') === 'strip'
				? this.changeColorStrip(e)
				: this.changeColorBlock(e);
		}
	};

	// this implementation was taken from stackoverflow
	//used to convert any hex to rgba
	hexToRgb(hex) {
		// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
		var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
		hex = hex.replace(shorthandRegex, function(m, r, g, b) {
			return r + r + g + g + b + b;
		});

		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result
			? [
				parseInt(result[1], 16),
				parseInt(result[2], 16),
				parseInt(result[3], 16)
			  ]
			: null;
	}
	// this implementation was taken from stackoverflow
	//used to covert any rgb  to hsl
	rgbToHsl = (r, g, b) => {
		(r /= 255), (g /= 255), (b /= 255);
		var max = Math.max(r, g, b),
			min = Math.min(r, g, b);
		var h,
			s,
			l = (max + min) / 2;

		if (max == min) {
			h = s = 0; // achromatic
		} else {
			var d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
			switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
			}
			h /= 6;
		}

		return [h, s, l];
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
							width: 10px;
							height: 10px;
							border: 1px solid #fff;
							border-radius: 50%;
							transform-origin: center;
							background: ${this.state.color};
							transform: translate(
								${this.state.pos.x}px,
								${this.state.pos.y}px
							);
						}

						.block-strip {
							position: absolute;
							width: 10px;
							height: 10px;
							border: 1px solid #fff;
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
	num: PropTypes.number
};

GuiColor.defaultProps = {
	label: '',
	theme: 'light'
};
export default GuiColor;
