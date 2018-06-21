"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = require("styled-jsx/style");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgText = function SvgText() {
	return _react2.default.createElement(
		_react2.default.Fragment,
		null,
		_react2.default.createElement(
			"text",
			{ x: "63", y: "240", className: "jsx-883548935" + " " + "time"
			},
			"TIME"
		),
		_react2.default.createElement(
			"text",
			{ x: "60", y: "230", className: "jsx-883548935" + " " + "progress"
			},
			"PROGRESS"
		),
		_react2.default.createElement(_style2.default, {
			styleId: "883548935",
			css: ".time.jsx-883548935{font-size:9px;margin-top:50px;fill:#46516f;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.progress.jsx-883548935{font-size:9px;margin-top:50px;fill:#46516f;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform-origin:60px 230px;-ms-transform-origin:60px 230px;transform-origin:60px 230px;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}"
		})
	);
};

exports.default = SvgText;