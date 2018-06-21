'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _customCommonStyles = require('../JSXStyles/customCommonStyles');

var _commonStyles = require('../JSXStyles/commonStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomContainer = function CustomContainer(props) {
	return _react2.default.createElement(
		'div',
		{
			className: 'jsx-' + _customCommonStyles.container.__scopedHash + ' jsx-' + _commonStyles.label.__scopedHash + ' ' + ((props.hide ? props.themeName : props.themeName + ' hide') || '')
		},
		_react2.default.createElement(
			'div',
			{
				className: 'jsx-' + _customCommonStyles.container.__scopedHash + ' jsx-' + _commonStyles.label.__scopedHash + ' ' + ((props.theme === 'dark' ? 'label label-dark' : 'label') || '')
			},
			props.label
		),
		props.children,
		_react2.default.createElement(_style2.default, {
			styleId: _customCommonStyles.container.__scopedHash,
			css: _customCommonStyles.container.__scoped
		}),
		_react2.default.createElement(_style2.default, {
			styleId: _commonStyles.label.__scopedHash,
			css: _commonStyles.label.__scoped
		})
	);
};

exports.default = CustomContainer;


CustomContainer.propTypes = {
	children: _propTypes2.default.arrayOf(_propTypes2.default.node),
	hide: _propTypes2.default.bool,
	theme: _propTypes2.default.string,
	label: _propTypes2.default.string
};

CustomContainer.defaultProps = {
	label: '',
	theme: 'light'
};