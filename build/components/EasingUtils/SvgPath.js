"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgPath = function SvgPath(props) {
	var ac1 = props.ac1,
	    ac2 = props.ac2;

	return _react2.default.createElement(
		_react2.default.Fragment,
		null,
		_react2.default.createElement("path", {
			d: "M63 230 C " + ac1.x + " " + ac1.y + ", " + ac2.x + " " + ac2.y + ", 225 68",
			stroke: "rgb(119,155,255)",
			fill: "none"
		}),
		_react2.default.createElement("line", {
			x1: "63",
			y1: "230",
			x2: ac1.x,
			y2: ac1.y,
			stroke: "#a7adba",
			strokeWidth: "0.5",
			strokeDasharray: "3px"
		}),
		_react2.default.createElement("line", {
			x1: "225",
			y1: "68",
			x2: ac2.x,
			y2: ac2.y,
			stroke: "#a7adba",
			strokeWidth: "0.5",
			strokeDasharray: "3px"
		})
	);
};

exports.default = SvgPath;