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

var _commonStyles = require('./JSXStyles/commonStyles');

var _Container = require('./containerComponents/Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GuiNumber = function (_Component) {
	_inherits(GuiNumber, _Component);

	function GuiNumber() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, GuiNumber);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GuiNumber.__proto__ || Object.getPrototypeOf(GuiNumber)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			val: _this.props.data[_this.props.path]
		}, _this.handleRange = function (e) {
			_this.setState({
				val: e.target.value
			}, function () {
				_this.props.updateData(_this.props.path, _this.state.val);
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(GuiNumber, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    min = _props.min,
			    max = _props.max,
			    step = _props.step;

			return _react2.default.createElement(
				_Container2.default,
				_extends({}, this.props, { label: this.props.label }),
				_react2.default.createElement('input', {
					type: 'text',
					value: this.state.val,
					onChange: this.handleRange,
					className: 'jsx-' + _commonStyles.label.__scopedHash + ' jsx-' + _commonStyles.container.__scopedHash + ' ' + _style2.default.dynamic([['1894748264', [this.props.theme === 'dark' ? '#424242' : '#E5E5E5', this.props.theme === 'dark' ? '#313131' : '#FFFFFF', this.props.theme === 'dark' ? '#424242' : '#e5e5e5', this.props.theme === 'dark' ? '#212121' : '#fafafa']]])
				}),
				_react2.default.createElement('input', {
					type: 'range',
					min: min,
					max: max,
					step: step,
					value: this.state.val,
					onChange: this.handleRange,
					className: 'jsx-' + _commonStyles.label.__scopedHash + ' jsx-' + _commonStyles.container.__scopedHash + ' ' + _style2.default.dynamic([['1894748264', [this.props.theme === 'dark' ? '#424242' : '#E5E5E5', this.props.theme === 'dark' ? '#313131' : '#FFFFFF', this.props.theme === 'dark' ? '#424242' : '#e5e5e5', this.props.theme === 'dark' ? '#212121' : '#fafafa']]])
				}),
				_react2.default.createElement(_style2.default, {
					styleId: _commonStyles.label.__scopedHash,
					css: _commonStyles.label.__scoped
				}),
				_react2.default.createElement(_style2.default, {
					styleId: _commonStyles.container.__scopedHash,
					css: _commonStyles.container.__scoped
				}),
				_react2.default.createElement(_style2.default, {
					styleId: '1894748264',
					css: 'input[type=\'range\'].__jsx-style-dynamic-selector{position:relative;float:right;-moz-appearance:none;-webkit-appearance:none;background-color:' + (this.props.theme === 'dark' ? '#424242' : '#E5E5E5') + ';width:117px;height:2px;border-radius:5px;margin:0 auto;margin-top:10px;margin-right:5px;outline:0;}input[type=\'range\'].__jsx-style-dynamic-selector::-webkit-slider-thumb{-webkit-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:' + (this.props.theme === 'dark' ? '#313131' : '#FFFFFF') + ';width:10px;height:10px;border-radius:50%;border:1px solid #779bff;cursor:pointer;-webkit-transition:0.3s ease-in-out;transition:0.3s ease-in-out;}input[type=\'range\'].__jsx-style-dynamic-selector::-webkit-slider-thumb.__jsx-style-dynamic-selector:active{-webkit-transform:scale(1.8);-ms-transform:scale(1.8);transform:scale(1.8);}input[type=\'text\'].__jsx-style-dynamic-selector{position:relative;float:right;width:30px;height:22px;border-radius:3px;border:1px solid ' + (this.props.theme === 'dark' ? '#424242' : '#e5e5e5') + ';outline:none;background:' + (this.props.theme === 'dark' ? '#212121' : '#fafafa') + ';margin-right:4px;color:#779bff;font-weight:500;}',
					dynamic: [this.props.theme === 'dark' ? '#424242' : '#E5E5E5', this.props.theme === 'dark' ? '#313131' : '#FFFFFF', this.props.theme === 'dark' ? '#424242' : '#e5e5e5', this.props.theme === 'dark' ? '#212121' : '#fafafa']
				})
			);
		}
	}]);

	return GuiNumber;
}(_react.Component);

GuiNumber.propTypes = {
	path: _propTypes2.default.string.isRequired,
	theme: _propTypes2.default.oneOf(['light', 'dark']),
	data: _propTypes2.default.object,
	min: _propTypes2.default.number,
	max: _propTypes2.default.number,
	step: _propTypes2.default.number,
	updateData: _propTypes2.default.func,
	label: _propTypes2.default.string
};

GuiNumber.defaultProps = {
	label: '',
	theme: 'light',
	min: 0,
	max: 0,
	step: 0
};

exports.default = GuiNumber;