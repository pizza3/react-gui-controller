'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgGrid = function SvgGrid(props) {
	var xAxis = [],
	    yAxis = [],
	    offsetY = 50,
	    offsetX = 45;
	var theme = props.theme;

	for (var i = 0; i < 180; i += 18) {
		xAxis.push(_react2.default.createElement('line', {
			key: i,
			x1: 18 + offsetX,
			y1: i + 18 + offsetY,
			x2: 180 + offsetX,
			y2: i + 18 + offsetY,
			stroke: theme ? '#5a5a5a' : '#dedede',
			strokeWidth: '0.5'
		}));
		yAxis.push(_react2.default.createElement('line', {
			key: i,
			x1: i + 18 + offsetX,
			y1: 18 + offsetY,
			x2: i + 18 + offsetX,
			y2: 180 + offsetY,
			stroke: theme ? '#5a5a5a' : '#dedede',
			strokeWidth: '0.5'
		}));
	}
	return [xAxis, yAxis];
};

exports.default = SvgGrid;