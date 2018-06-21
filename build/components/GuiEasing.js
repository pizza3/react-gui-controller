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

var _CustomContainer = require('./containerComponents/CustomContainer');

var _CustomContainer2 = _interopRequireDefault(_CustomContainer);

var _SvgGrid = require('./EasingUtils/SvgGrid');

var _SvgGrid2 = _interopRequireDefault(_SvgGrid);

var _SvgPath = require('./EasingUtils/SvgPath');

var _SvgPath2 = _interopRequireDefault(_SvgPath);

var _easeCurveStyles = require('./JSXStyles/easeCurveStyles');

var _Indicator = require('./EasingUtils/Indicator');

var _Indicator2 = _interopRequireDefault(_Indicator);

var _EaseSetting = require('./EasingUtils/EaseSetting');

var _EaseSetting2 = _interopRequireDefault(_EaseSetting);

var _SvgText = require('./EasingUtils/SvgText');

var _SvgText2 = _interopRequireDefault(_SvgText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//map function is used to naomalise the values
var MapRange = function MapRange(value, low1, high1, low2, high2) {
	return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
};

var GuiEasing = function (_Component) {
	_inherits(GuiEasing, _Component);

	function GuiEasing() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, GuiEasing);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GuiEasing.__proto__ || Object.getPrototypeOf(GuiEasing)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
		}, _this.setPointer = function () {
			_this.setState({
				c1: {
					x: Math.round(MapRange(_this.state.anchor1.x, 63, 225, 0, 1) * 100) / 100,
					y: Math.round(MapRange(_this.state.anchor1.y, 68, 230, 1, 0) * 100) / 100
				},
				c2: {
					x: Math.round(MapRange(_this.state.anchor2.x, 63, 225, 0, 1) * 100) / 100,
					y: Math.round(MapRange(_this.state.anchor2.y, 68, 230, 1, 0) * 100) / 100
				}
			}, function () {
				var _this$state = _this.state,
				    c1 = _this$state.c1,
				    c2 = _this$state.c2;

				var val = 'cubic-bezier(' + c1.x + ',' + c1.y + ',' + c2.x + ',' + c2.y + ')';
				_this.props.updateData(_this.props.path, val);
			});
		}, _this.handleDown = function (e) {
			//select the particular anchor and update it with its
			//corresponding state
			_this.el = e.target.getAttribute('id');
			_this.isMove = true;
			_this.x = _this.state[_this.el].x;
			_this.element = document.getElementById('svg' + _this.props.num).getBoundingClientRect();
		}, _this.handleMove = function (e) {
			if (_this.isMove) {
				//check if anchor is leaving the grid from the right on x-axis
				if (e.clientX - _this.element.x >= 225) {
					_this.setState(_defineProperty({}, _this.el, {
						x: 225,
						y: e.clientY - _this.element.y
					}));
				}
				//check if anchor is leaving the grid from the left on x-axis
				else if (e.clientX - _this.element.x <= 63) {
						_this.setState(_defineProperty({}, _this.el, {
							x: 63,
							y: e.clientY - _this.element.y
						}));
					} else {
						_this.setState(_defineProperty({}, _this.el, {
							x: e.clientX - _this.element.x,
							y: e.clientY - _this.element.y
						}));
					}
				//normalise the values
				_this.setPointer();
			}
		}, _this.handleUp = function () {
			_this.isMove = false;
			//normalise the values
			_this.setPointer();
		}, _this.handleHide = function () {
			_this.setState({
				hide: !_this.state.hide
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(GuiEasing, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var _props = this.props,
			    data = _props.data,
			    path = _props.path;

			this.isMove = false;
			var val = data[path],
			    val2 = void 0,
			    re = /\s*,\s*/;
			val2 = val.replace(/ /g, '');
			var l = val2.length;
			val2 = val2.slice(13, l - 1);
			val2 = val2.split(re);
			this.setState({
				anchor1: {
					x: MapRange(val2[0], 0, 1, 63, 225),
					y: MapRange(val2[1], 0, 1, 230, 68)
				},
				anchor2: {
					x: MapRange(val2[2], 0, 1, 63, 225),
					y: MapRange(val2[3], 0, 1, 230, 68)
				}
			}, function () {
				_this2.setPointer();
			});
			this.element = document.getElementById('svg' + this.props.num).getBoundingClientRect();
		}
	}, {
		key: 'render',
		value: function render() {
			var themeName = this.props.theme === 'dark' ? 'container dark' : 'container';
			var _state = this.state,
			    c1 = _state.c1,
			    c2 = _state.c2,
			    anchor1 = _state.anchor1,
			    anchor2 = _state.anchor2;
			var _props2 = this.props,
			    data = _props2.data,
			    path = _props2.path;

			return _react2.default.createElement(
				_CustomContainer2.default,
				_extends({}, this.props, {
					themeName: themeName,
					hide: this.state.hide
				}),
				_react2.default.createElement(
					'div',
					{
						onClick: this.handleHide,
						className: 'jsx-' + _easeCurveStyles.easeCurveStyle.__scopedHash + ' ' + ((this.props.theme === 'dark' ? 'text text-dark' : 'text') || '')
					},
					data[path]
				),
				_react2.default.createElement(_EaseSetting2.default, null),
				_react2.default.createElement(_Indicator2.default, { ease: 'cubic-bezier(' + c1.x + ',' + c1.y + ',' + c2.x + ',' + c2.y + ')' }),
				_react2.default.createElement(
					'svg',
					{
						id: 'svg' + this.props.num,
						width: '100%',
						height: '300',
						xmlns: 'http://www.w3.org/2000/svg',
						onMouseMove: this.handleMove,
						onMouseUp: this.handleUp,
						onMouseLeave: this.handleUp,
						className: 'jsx-' + _easeCurveStyles.easeCurveStyle.__scopedHash
					},
					_react2.default.createElement(_SvgGrid2.default, this.props),
					_react2.default.createElement(_SvgText2.default, null),
					_react2.default.createElement(_SvgPath2.default, { ac1: anchor1, ac2: anchor2 }),
					_react2.default.createElement('circle', {
						id: 'anchor1',
						onMouseDown: this.handleDown,
						onMouseUp: this.handleUp,
						cx: anchor1.x,
						cy: anchor1.y,
						r: '4',
						strokeWidth: '1',
						fill: '#5f7ccc',
						stroke: '#adc3ff',
						className: 'jsx-' + _easeCurveStyles.easeCurveStyle.__scopedHash
					}),
					_react2.default.createElement('circle', {
						id: 'anchor2',
						onMouseDown: this.handleDown,
						onMouseUp: this.handleUp,
						cx: anchor2.x,
						cy: anchor2.y,
						r: '4',
						strokeWidth: '1',
						fill: '#5f7ccc',
						stroke: '#adc3ff',
						className: 'jsx-' + _easeCurveStyles.easeCurveStyle.__scopedHash
					})
				),
				_react2.default.createElement(_style2.default, {
					styleId: _easeCurveStyles.easeCurveStyle.__scopedHash,
					css: _easeCurveStyles.easeCurveStyle.__scoped
				})
			);
		}
	}]);

	return GuiEasing;
}(_react.Component);

exports.default = GuiEasing;


GuiEasing.propTypes = {
	path: _propTypes2.default.string.isRequired,
	theme: _propTypes2.default.oneOf(['light', 'dark']),
	data: _propTypes2.default.object,
	updateData: _propTypes2.default.func,
	label: _propTypes2.default.string,
	num: _propTypes2.default.number
};

GuiEasing.defaultProps = {
	label: '',
	theme: 'light'
};