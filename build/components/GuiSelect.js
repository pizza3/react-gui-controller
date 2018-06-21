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

var _Container = require('./containerComponents/Container');

var _Container2 = _interopRequireDefault(_Container);

var _selectStyles = require('./JSXStyles/selectStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GuiSelect = function (_Component) {
	_inherits(GuiSelect, _Component);

	function GuiSelect(props) {
		_classCallCheck(this, GuiSelect);

		var _this = _possibleConstructorReturn(this, (GuiSelect.__proto__ || Object.getPrototypeOf(GuiSelect)).call(this, props));

		_this.state = {
			val: props.data[props.path]
		};
		_this.handleChange = _this.handleChange.bind(_this);
		return _this;
	}

	_createClass(GuiSelect, [{
		key: 'handleChange',
		value: function handleChange(e) {
			var _this2 = this;

			this.setState({
				val: e.target.value
			}, function () {
				_this2.props.updateData(_this2.props.path, _this2.state.val);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var options = this.props.options.map(function (val, i) {
				return _react2.default.createElement(
					'option',
					{ key: i, value: val },
					val
				);
			});
			return _react2.default.createElement(
				_Container2.default,
				_extends({}, this.props, { label: this.props.label }),
				_react2.default.createElement(
					'div',
					{
						className: 'jsx-' + _selectStyles.selectStyle.__scopedHash + ' ' + ((this.props.theme === 'dark' ? 'dropdown dropdown-dark' : 'dropdown') || '')
					},
					_react2.default.createElement(
						'select',
						{
							value: this.state.val,
							onChange: this.handleChange,
							className: 'jsx-' + _selectStyles.selectStyle.__scopedHash + ' ' + ((this.props.theme === 'dark' ? 'dropdown-select dropdown-select-dark ' : 'dropdown-select') || '')
						},
						options
					)
				),
				_react2.default.createElement(_style2.default, {
					styleId: _selectStyles.selectStyle.__scopedHash,
					css: _selectStyles.selectStyle.__scoped
				})
			);
		}
	}]);

	return GuiSelect;
}(_react.Component);

exports.default = GuiSelect;


GuiSelect.propTypes = {
	path: _propTypes2.default.string.isRequired,
	theme: _propTypes2.default.oneOf(['light', 'dark']),
	data: _propTypes2.default.object,
	updateData: _propTypes2.default.func,
	label: _propTypes2.default.string,
	options: _propTypes2.default.array
};

GuiSelect.defaultProps = {
	label: '',
	theme: 'light'
};