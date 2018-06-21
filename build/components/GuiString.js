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

var _textInputStyles = require('./JSXStyles/textInputStyles');

var _Container = require('./containerComponents/Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GuiString = function (_Component) {
	_inherits(GuiString, _Component);

	function GuiString() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, GuiString);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GuiString.__proto__ || Object.getPrototypeOf(GuiString)).call.apply(_ref, [this].concat(args))), _this), _this.state = { val: _this.props.data[_this.props.path] }, _this.handleChange = function (e) {
			_this.setState({
				val: e.target.value
			}, function () {
				_this.props.updateData(_this.props.path, _this.state.val);
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(GuiString, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_Container2.default,
				_extends({}, this.props, { label: this.props.label }),
				_react2.default.createElement('input', {
					type: 'text',

					value: this.state.val,
					onChange: this.handleChange,
					className: 'jsx-' + _textInputStyles.textInput.__scopedHash + ' ' + ((this.props.theme === 'dark' ? 'inputText inputText-dark' : 'inputText') || '')
				}),
				_react2.default.createElement(_style2.default, {
					styleId: _textInputStyles.textInput.__scopedHash,
					css: _textInputStyles.textInput.__scoped
				})
			);
		}
	}]);

	return GuiString;
}(_react.Component);

exports.default = GuiString;


GuiString.propTypes = {
	path: _propTypes2.default.string.isRequired,
	theme: _propTypes2.default.oneOf(['light', 'dark']),
	data: _propTypes2.default.object,
	updateData: _propTypes2.default.func,
	label: _propTypes2.default.string
};

GuiString.defaultProps = {
	label: '',
	theme: 'light'
};