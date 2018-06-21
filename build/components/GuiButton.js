'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _buttonStyles = require('./JSXStyles/buttonStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GuiButton = function (_Component) {
	_inherits(GuiButton, _Component);

	function GuiButton(props) {
		_classCallCheck(this, GuiButton);

		return _possibleConstructorReturn(this, (GuiButton.__proto__ || Object.getPrototypeOf(GuiButton)).call(this, props));
	}

	_createClass(GuiButton, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{
					className: 'jsx-' + _buttonStyles.buttonStyle.__scopedHash
				},
				_react2.default.createElement(
					'button',
					{
						onClick: this.props.onClick,
						className: 'jsx-' + _buttonStyles.buttonStyle.__scopedHash + ' ' + ((this.props.theme === 'dark' ? 'buttonStyle dark' : 'buttonStyle') || '')
					},
					this.props.label
				),
				_react2.default.createElement(_style2.default, {
					styleId: _buttonStyles.buttonStyle.__scopedHash,
					css: _buttonStyles.buttonStyle.__scoped
				})
			);
		}
	}]);

	return GuiButton;
}(_react.Component);

exports.default = GuiButton;


GuiButton.propTypes = {
	label: _propTypes2.default.string,
	theme: _propTypes2.default.oneOf(['light', 'dark']),
	onClick: _propTypes2.default.func.isRequired
};

GuiButton.defaultProps = {
	label: '',
	theme: 'light'
};