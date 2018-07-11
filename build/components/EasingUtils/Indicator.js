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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Indicator = function Indicator(props) {
	var style = {
		position: 'absolute',
		width: '10px',
		height: '10px',
		background: '#a0b7f7',
		borderRadius: '50%',
		marginLeft: '28px',
		animation: 'anim 3s infinite',
		animationTimingFunction: '' + props.ease
	};
	return _react2.default.createElement(
		'div',
		{
			className: _style2.default.dynamic([['2769266493', [props.ease]]]) + ' ' + 'indicator'
		},
		_react2.default.createElement('div', {
			className: _style2.default.dynamic([['2769266493', [props.ease]]]) + ' ' + 'indicator-bob'
		}),
		_react2.default.createElement(_style2.default, {
			styleId: '2769266493',
			css: '.indicator.__jsx-style-dynamic-selector{position:absolute;width:62px;height:90%;margin-top:27px;margin-left:77%;}.indicator.__jsx-style-dynamic-selector::before{content:\'\';position:absolute;width:3px;height:162px;background:#4b4b4b;margin-top:64px;margin-left:31px;border-radius:6px;}.indicator-bob.__jsx-style-dynamic-selector{position:absolute;width:10px;height:10px;background:#a0b7f7;border-radius:50%;margin-left:28px;-webkit-animation:anim-__jsx-style-dynamic-selector 3s infinite;animation:anim-__jsx-style-dynamic-selector 3s infinite;-webkit-animation-timing-function:' + props.ease + ';animation-timing-function:' + props.ease + ';}@-webkit-keyframes anim-__jsx-style-dynamic-selector{0%{top:221px;}10%{top:221px;}100%{top:60px;}}@keyframes anim-__jsx-style-dynamic-selector{0%{top:221px;}10%{top:221px;}100%{top:60px;}}',
			dynamic: [props.ease]
		})
	);
};

exports.default = Indicator;


Indicator.propTypes = {
	ease: _propTypes2.default.string.isRequired
};

Indicator.defaultProps = {
	ease: 'linear'
};