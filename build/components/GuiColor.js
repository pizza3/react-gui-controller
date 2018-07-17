'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _colorStyles = require('./JSXStyles/colorStyles');

var _CustomContainer = require('./containerComponents/CustomContainer');

var _CustomContainer2 = _interopRequireDefault(_CustomContainer);

var _Conversion = require('./ColorUtils/Conversion');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//a simple map methos to normalize any values
var MapRange = function MapRange(value, low1, high1, low2, high2) {
	return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
};

var GuiColor = function (_Component) {
	_inherits(GuiColor, _Component);

	function GuiColor() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, GuiColor);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GuiColor.__proto__ || Object.getPrototypeOf(GuiColor)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
		}, _this.handleHide = function () {
			_this.setState({
				hide: !_this.state.hide
			});
		}, _this.fillGradient = function () {
			_this.ctx1.fillStyle = _this.rgbaColor;
			_this.ctx1.fillRect(0, 0, _this.width1, _this.height1);

			var grdWhite = _this.ctx2.createLinearGradient(0, 0, _this.width1, 0);
			grdWhite.addColorStop(0, 'rgba(255,255,255,1)');
			grdWhite.addColorStop(1, 'rgba(255,255,255,0)');
			_this.ctx1.fillStyle = grdWhite;
			_this.ctx1.fillRect(0, 0, _this.width1, _this.height1);

			var grdBlack = _this.ctx2.createLinearGradient(0, 0, 0, _this.height1);
			grdBlack.addColorStop(0, 'rgba(0,0,0,0)');
			grdBlack.addColorStop(1, 'rgba(0,0,0,1)');
			_this.ctx1.fillStyle = grdBlack;
			_this.ctx1.fillRect(0, 0, _this.width1, _this.height1);

			var imageData = _this.ctx1.getImageData(_this.state.pos.y, _this.state.pos.x, _this.width1, _this.height1).data;

			if (_this.props.type === 'hex') {
				_this.setState({
					color: (0, _Conversion.RgbToHex)(imageData[0], imageData[1], imageData[2])
				});
			} else if (_this.props.type === 'rgb') {
				_this.setState({
					color: 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)',
					rgb: {
						r: imageData[0],
						g: imageData[1],
						b: imageData[2]
					}
				});
			}
		}, _this.fillStrip = function () {
			var _this2 = _this,
			    ctx2 = _this2.ctx2,
			    width2 = _this2.width2,
			    height2 = _this2.height2,
			    height1 = _this2.height1;

			ctx2.rect(0, 0, width2, height2);
			var grd1 = ctx2.createLinearGradient(0, 0, 0, height1);
			grd1.addColorStop(0, 'rgba(255, 0, 0, 1)');
			grd1.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
			grd1.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
			grd1.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
			grd1.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
			grd1.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
			grd1.addColorStop(1, 'rgba(255, 0, 0, 1)');
			ctx2.fillStyle = grd1;
			ctx2.fill();
		}, _this.changeColorBlock = function (e) {
			//don't use offset.X
			//https://github.com/facebook/react/issues/4431
			e.preventDefault();
			var x = e.clientX - document.getElementById('color-block' + _this.props.num).getBoundingClientRect().left,
			    y = e.clientY - document.getElementById('color-block' + _this.props.num).getBoundingClientRect().top;

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

			var imageData = _this.ctx1.getImageData(x, y, _this.width1, _this.height1).data;

			_this.rgbaColor = 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)';
			if (_this.props.type === 'hex') {
				_this.setState({
					color: (0, _Conversion.RgbToHex)(imageData[0], imageData[1], imageData[2]),
					pos: {
						x: y,
						y: x
					}
				});
			} else if (_this.props.type === 'rgb') {
				_this.setState({
					color: _this.rgbaColor,
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
		}, _this.changeColorStrip = function (e) {
			//don't use offset.X
			//https://github.com/facebook/react/issues/4431
			var posStrip = _this.state.posStrip;
			var num = _this.props.num;
			var _this3 = _this,
			    ctx2 = _this3.ctx2,
			    rgbaColor = _this3.rgbaColor;

			e.preventDefault();
			var y = e.clientY - document.getElementById('color-strip' + num).getBoundingClientRect().top;
			if (y <= 0) {
				y = 0;
			} else if (y >= 149) {
				y = 149;
			}
			_this.setState({
				color: rgbaColor,
				posStrip: {
					x: 0,
					y: y
				}
			});
			var imageData = ctx2.getImageData(posStrip.x, posStrip.y, 1, 1).data;
			rgbaColor = 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)';
			_this.setState({
				hueNob: rgbaColor
			});
			_this.fillGradient();
		}, _this.handleDown = function (e) {
			e.preventDefault();
			_this.setState({
				drag: true
			});
			e.target.getAttribute('name') === 'strip' ? _this.changeColorStrip(e) : _this.changeColorBlock(e);
		}, _this.handleMove = function (e) {
			var path = _this.props.path;
			var _this$state = _this.state,
			    color = _this$state.color,
			    rgb = _this$state.rgb;

			e.preventDefault();
			if (_this.state.drag) {
				e.target.getAttribute('name') === 'strip' ? _this.changeColorStrip(e) : _this.changeColorBlock(e);
				if (_this.props.type === 'hex') {
					_this.props.updateData(path, color);
				} else if (_this.props.type === 'rgb') {
					_this.props.updateData(path, rgb);
				}
			}
		}, _this.handleUp = function () {
			_this.setState({
				drag: false
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(GuiColor, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this4 = this;

			//after the component has been mounted create canvas context and also apply setting's.
			var a = void 0;
			var col = void 0,
			    val = void 0;
			if (this.props.type === 'hex') {
				val = this.props.data[this.props.path];
				col = (0, _Conversion.HexToRgb)(val);
				a = (0, _Conversion.RgbToHsl)(col[0], col[1], col[2]);
			} else if (this.props.type === 'rgb') {
				val = this.props.data[this.props.path];
				a = (0, _Conversion.RgbToHsl)(val.r, val.g, val.b);
			} else {
				a = (0, _Conversion.RgbToHsl)(198, 110, 108);
			}
			var colorBlock = document.getElementById('color-block' + this.props.num);
			this.ctx1 = colorBlock.getContext('2d');
			colorBlock.width = this.width1 = 239.08;
			colorBlock.height = this.height1 = 148;
			this.rgbaColor = '#f76262';

			var colorStrip = document.getElementById('color-strip' + this.props.num);
			this.ctx2 = colorStrip.getContext('2d');
			colorStrip.width = this.width2 = 5.88;
			colorStrip.height = this.height2 = 150;
			this.ctx1.rect(0, 0, this.width1, this.height1);
			this.fillGradient();
			this.fillStrip();
			//position pointer indicator
			var val2 = MapRange(a[0], 0, 1, 0, 150);
			this.setState({
				posStrip: {
					x: 0,
					y: val2
				}
			}, function () {
				var imageData = _this4.ctx2.getImageData(0, _this4.state.posStrip.y, 1, 1).data;
				_this4.rgbaColor = 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)';
				_this4.fillGradient();

				//the positioning implementation with help of hsv was taken from
				//the react-color library
				var hsv = void 0;
				var color = void 0;
				if (_this4.props.type === 'hex') {
					hsv = (0, _Conversion.RgbToHsv)(col[0], col[1], col[2]);
					color = _this4.props.data[_this4.props.path];
				} else if (_this4.props.type === 'rgb') {
					hsv = (0, _Conversion.RgbToHsv)(val.r, val.g, val.b);
					color = 'rgba(' + val.r + ',' + val.g + ',' + val.b + ',1)';
				}

				_this4.setState({
					color: color,
					pos: {
						x: '' + _this4.height1 * (-(hsv[2] * 100) + 100) / 100,
						y: '' + _this4.width1 * (hsv[1] * 100) / 100
					},
					rpos: {
						x: 0,
						y: 0
					},

					hueNob: _this4.rgbaColor
				});
			});
		}

		//this applies the white, black and golor gradient to the canvas


		//this applies color to the hue strip of the color selector


		//this method is used to select color from the gradient block
		//and stores the value in the color state


		//this function is for the hue scale color selection,
		//when the nob is bieng clicked and updates the color gradient


		//event down function when any of the color nob is being pressed down with mouse


		//event move function when any of the color nob is being moved with mouse

	}, {
		key: 'render',
		value: function render() {
			var themeName = this.props.theme === 'dark' ? 'container dark' : 'container';
			return _react2.default.createElement(
				_CustomContainer2.default,
				_extends({}, this.props, {
					themeName: themeName,
					hide: this.state.hide
				}),
				_react2.default.createElement('div', { onClick: this.handleHide, className: 'jsx-' + _colorStyles.colorStyle.__scopedHash + ' ' + _style2.default.dynamic([['957223759', [this.state.color, this.state.pos.x - 5, this.state.pos.y - 5, this.props.theme === 'dark' ? '#fff' : '#ccc', this.state.hueNob, -2, this.state.posStrip.y - 5, this.state.color, this.props.theme === 'dark' ? '#424242' : 'rgb(229, 229, 229)']]]) + ' ' + 'pallete'
				}),
				_react2.default.createElement(
					'div',
					{ onMouseLeave: this.handleUp, className: 'jsx-' + _colorStyles.colorStyle.__scopedHash + ' ' + _style2.default.dynamic([['957223759', [this.state.color, this.state.pos.x - 5, this.state.pos.y - 5, this.props.theme === 'dark' ? '#fff' : '#ccc', this.state.hueNob, -2, this.state.posStrip.y - 5, this.state.color, this.props.theme === 'dark' ? '#424242' : 'rgb(229, 229, 229)']]]) + ' ' + 'contain'
					},
					_react2.default.createElement(
						'div',
						{
							className: 'jsx-' + _colorStyles.colorStyle.__scopedHash + ' ' + _style2.default.dynamic([['957223759', [this.state.color, this.state.pos.x - 5, this.state.pos.y - 5, this.props.theme === 'dark' ? '#fff' : '#ccc', this.state.hueNob, -2, this.state.posStrip.y - 5, this.state.color, this.props.theme === 'dark' ? '#424242' : 'rgb(229, 229, 229)']]]) + ' ' + ((this.props.theme === 'dark' ? 'block-parent block-parent-dark' : 'block-parent') || '')
						},
						_react2.default.createElement('canvas', {
							id: 'color-block' + this.props.num,

							onMouseDown: this.handleDown,
							onMouseMove: this.handleMove,
							onMouseUp: this.handleUp,
							className: 'jsx-' + _colorStyles.colorStyle.__scopedHash + ' ' + _style2.default.dynamic([['957223759', [this.state.color, this.state.pos.x - 5, this.state.pos.y - 5, this.props.theme === 'dark' ? '#fff' : '#ccc', this.state.hueNob, -2, this.state.posStrip.y - 5, this.state.color, this.props.theme === 'dark' ? '#424242' : 'rgb(229, 229, 229)']]]) + ' ' + 'color-block'
						}),
						_react2.default.createElement('div', {
							id: 'block' + this.props.num,

							onMouseDown: this.handleDown,
							onMouseMove: this.handleMove,
							onMouseUp: this.handleUp,
							className: 'jsx-' + _colorStyles.colorStyle.__scopedHash + ' ' + _style2.default.dynamic([['957223759', [this.state.color, this.state.pos.x - 5, this.state.pos.y - 5, this.props.theme === 'dark' ? '#fff' : '#ccc', this.state.hueNob, -2, this.state.posStrip.y - 5, this.state.color, this.props.theme === 'dark' ? '#424242' : 'rgb(229, 229, 229)']]]) + ' ' + 'block'
						})
					),
					_react2.default.createElement(
						'div',
						{
							className: 'jsx-' + _colorStyles.colorStyle.__scopedHash + ' ' + _style2.default.dynamic([['957223759', [this.state.color, this.state.pos.x - 5, this.state.pos.y - 5, this.props.theme === 'dark' ? '#fff' : '#ccc', this.state.hueNob, -2, this.state.posStrip.y - 5, this.state.color, this.props.theme === 'dark' ? '#424242' : 'rgb(229, 229, 229)']]]) + ' ' + 'strip-parent'
						},
						_react2.default.createElement('canvas', {
							id: 'color-strip' + this.props.num,

							name: 'strip',
							onMouseDown: this.handleDown,
							onMouseMove: this.handleMove,
							onMouseUp: this.handleUp,
							className: 'jsx-' + _colorStyles.colorStyle.__scopedHash + ' ' + _style2.default.dynamic([['957223759', [this.state.color, this.state.pos.x - 5, this.state.pos.y - 5, this.props.theme === 'dark' ? '#fff' : '#ccc', this.state.hueNob, -2, this.state.posStrip.y - 5, this.state.color, this.props.theme === 'dark' ? '#424242' : 'rgb(229, 229, 229)']]]) + ' ' + 'color-strip'
						}),
						_react2.default.createElement('div', {
							name: 'strip',
							onMouseDown: this.handleDown,
							onMouseMove: this.handleMove,
							onMouseUp: this.handleUp,
							className: 'jsx-' + _colorStyles.colorStyle.__scopedHash + ' ' + _style2.default.dynamic([['957223759', [this.state.color, this.state.pos.x - 5, this.state.pos.y - 5, this.props.theme === 'dark' ? '#fff' : '#ccc', this.state.hueNob, -2, this.state.posStrip.y - 5, this.state.color, this.props.theme === 'dark' ? '#424242' : 'rgb(229, 229, 229)']]]) + ' ' + 'block-strip'
						})
					)
				),
				_react2.default.createElement(_style2.default, {
					styleId: _colorStyles.colorStyle.__scopedHash,
					css: _colorStyles.colorStyle.__scoped
				}),
				_react2.default.createElement(_style2.default, {
					styleId: '957223759',
					css: '.block.__jsx-style-dynamic-selector{position:absolute;margin:0;padding:0;box-sizing:border-box;width:10px;height:10px;border:1px solid #fff;border-radius:50%;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;background:' + this.state.color + ';top:' + (this.state.pos.x - 5) + 'px;left:' + (this.state.pos.y - 5) + 'px;}.block-strip.__jsx-style-dynamic-selector{position:absolute;margin:0;padding:0;box-sizing:border-box;width:10px;height:10px;border:1px solid ' + (this.props.theme === 'dark' ? '#fff' : '#ccc') + ';border-radius:50%;background:' + this.state.hueNob + ';-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-transform:translate( ' + -2 + 'px, ' + (this.state.posStrip.y - 5) + 'px );-ms-transform:translate( ' + -2 + 'px, ' + (this.state.posStrip.y - 5) + 'px );transform:translate( ' + -2 + 'px, ' + (this.state.posStrip.y - 5) + 'px );}.pallete.__jsx-style-dynamic-selector{position:relative;margin:0;padding:0;box-sizing:border-box;float:right;height:23px;width:132px;border-radius:3px;background:' + this.state.color + ';border:1px solid ' + (this.props.theme === 'dark' ? '#424242' : 'rgb(229, 229, 229)') + ';margin-right:4px;cursor:pointer;}',
					dynamic: [this.state.color, this.state.pos.x - 5, this.state.pos.y - 5, this.props.theme === 'dark' ? '#fff' : '#ccc', this.state.hueNob, -2, this.state.posStrip.y - 5, this.state.color, this.props.theme === 'dark' ? '#424242' : 'rgb(229, 229, 229)']
				})
			);
		}
	}]);

	return GuiColor;
}(_react.Component);

GuiColor.propTypes = {
	theme: _propTypes2.default.oneOf(['light', 'dark']),
	label: _propTypes2.default.string,
	num: _propTypes2.default.number,
	updateData: _propTypes2.default.func
};

GuiColor.defaultProps = {
	label: '',
	theme: 'light'
};
exports.default = GuiColor;