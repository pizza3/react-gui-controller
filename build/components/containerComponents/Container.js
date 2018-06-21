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

var _commonStyles = require('../JSXStyles/commonStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(props) {
	return _react2.default.createElement(
		'div',
		{
			className: 'jsx-' + _commonStyles.label.__scopedHash + ' jsx-' + _commonStyles.container.__scopedHash + ' ' + ((props.theme === 'dark' ? 'container dark' : 'container') || '')
		},
		_react2.default.createElement(
			'div',
			{
				className: 'jsx-' + _commonStyles.label.__scopedHash + ' jsx-' + _commonStyles.container.__scopedHash + ' ' + ((props.theme === 'dark' ? 'label label-dark' : 'label') || '')
			},
			props.label
		),
		props.children,
		_react2.default.createElement(_style2.default, {
			styleId: _commonStyles.label.__scopedHash,
			css: _commonStyles.label.__scoped
		}),
		_react2.default.createElement(_style2.default, {
			styleId: _commonStyles.container.__scopedHash,
			css: _commonStyles.container.__scoped
		})
	);
};

exports.default = Container;

Container.propTypes = {
	children: _propTypes2.default.arrayOf(_propTypes2.default.node),
	theme: _propTypes2.default.string,
	label: _propTypes2.default.string
};

Container.defaultProps = {
	label: '',
	theme: 'light'
};