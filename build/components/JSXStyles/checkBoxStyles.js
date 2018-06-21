'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckBoxStyles = function CheckBoxStyles(props) {
	return _react2.default.createElement(
		'div',
		{
			className: _style2.default.dynamic([['3246508906', [props.num, props.theme === 'dark' ? '#212121' : '#fafafa', props.theme === 'dark' ? '#585858' : '#e5e5e5', props.num, props.num, props.num, props.num, props.theme === 'dark' ? '#585858' : '#d8d8d8', props.theme === 'dark' ? '#585858' : '#d6d6d6', props.num, props.num, props.num, props.num, props.theme === 'dark' ? '#313131' : '#fff', props.theme === 'dark' ? '#313131' : '#fff', props.num]]])
		},
		_react2.default.createElement('input', {
			id: 'switch' + props.num,
			name: 'view',
			type: 'checkbox',
			hidden: true,
			checked: props.val,
			onChange: props.handleChange,
			className: _style2.default.dynamic([['3246508906', [props.num, props.theme === 'dark' ? '#212121' : '#fafafa', props.theme === 'dark' ? '#585858' : '#e5e5e5', props.num, props.num, props.num, props.num, props.theme === 'dark' ? '#585858' : '#d8d8d8', props.theme === 'dark' ? '#585858' : '#d6d6d6', props.num, props.num, props.num, props.num, props.theme === 'dark' ? '#313131' : '#fff', props.theme === 'dark' ? '#313131' : '#fff', props.num]]])
		}),
		_react2.default.createElement('label', {
			htmlFor: 'switch' + props.num,
			className: _style2.default.dynamic([['3246508906', [props.num, props.theme === 'dark' ? '#212121' : '#fafafa', props.theme === 'dark' ? '#585858' : '#e5e5e5', props.num, props.num, props.num, props.num, props.theme === 'dark' ? '#585858' : '#d8d8d8', props.theme === 'dark' ? '#585858' : '#d6d6d6', props.num, props.num, props.num, props.num, props.theme === 'dark' ? '#313131' : '#fff', props.theme === 'dark' ? '#313131' : '#fff', props.num]]]) + ' ' + ('switch' + props.num || '')
		}),
		_react2.default.createElement(_style2.default, {
			styleId: '3246508906',
			css: '.switch' + props.num + '.__jsx-style-dynamic-selector{display:inline-block;float:right;width:42px;height:22px;padding:4px;border-radius:20px;background:' + (props.theme === 'dark' ? '#212121' : '#fafafa') + ';vertical-align:middle;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:background 350ms ease;transition:background 350ms ease;margin-right:4px;margin-top:1px;border:1px solid ' + (props.theme === 'dark' ? '#585858' : '#e5e5e5') + ';}.switch' + props.num + '.__jsx-style-dynamic-selector:before,.switch' + props.num + '.__jsx-style-dynamic-selector:after{content:\'\';display:block;width:13px;height:13px;border-radius:50%;position:absolute;top:50%;-webkit-transition:all 350ms cubic-bezier(0,0.95,0.38,0.98), background 150ms ease;transition:all 350ms cubic-bezier(0,0.95,0.38,0.98), background 150ms ease;}.switch' + props.num + '.__jsx-style-dynamic-selector:before{background:rgba(128,128,128,0.075);-webkit-transform:translate3d(0,-50%,0) scale(0);-ms-transform:translate3d(0,-50%,0) scale(0);transform:translate3d(0,-50%,0) scale(0);}.switch' + props.num + '.__jsx-style-dynamic-selector:after{background:' + (props.theme === 'dark' ? '#585858' : '#d8d8d8') + ';border:1px solid ' + (props.theme === 'dark' ? '#585858' : '#d6d6d6') + ';-webkit-transform:translate3d(-2px,-50%,0);-ms-transform:translate3d(-2px,-50%,0);transform:translate3d(-2px,-50%,0);}.switch' + props.num + '.__jsx-style-dynamic-selector:active.__jsx-style-dynamic-selector:before{-webkit-transform:translate3d(0,-50%,0) scale(3);-ms-transform:translate3d(0,-50%,0) scale(3);transform:translate3d(0,-50%,0) scale(3);}input.__jsx-style-dynamic-selector:checked+.switch' + props.num + '.__jsx-style-dynamic-selector{background:#769aff;}input.__jsx-style-dynamic-selector:checked+.switch' + props.num + '.__jsx-style-dynamic-selector:before{background:rgba(131,177,84,0.075);-webkit-transform:translate3d(100%,-50%,0) scale(1);-ms-transform:translate3d(100%,-50%,0) scale(1);transform:translate3d(100%,-50%,0) scale(1);}input.__jsx-style-dynamic-selector:checked+.switch' + props.num + '.__jsx-style-dynamic-selector:after{background:' + (props.theme === 'dark' ? '#313131' : '#fff') + ';border:1px solid ' + (props.theme === 'dark' ? '#313131' : '#fff') + ';-webkit-transform:translate3d(124%,-50%,0);-ms-transform:translate3d(124%,-50%,0);transform:translate3d(124%,-50%,0);}input.__jsx-style-dynamic-selector:checked+.switch' + props.num + '.__jsx-style-dynamic-selector:active.__jsx-style-dynamic-selector:before{background:rgba(131,177,84,0.075);-webkit-transform:translate3d(100%,-50%,0) scale(3);-ms-transform:translate3d(100%,-50%,0) scale(3);transform:translate3d(100%,-50%,0) scale(3);}',
			dynamic: [props.num, props.theme === 'dark' ? '#212121' : '#fafafa', props.theme === 'dark' ? '#585858' : '#e5e5e5', props.num, props.num, props.num, props.num, props.theme === 'dark' ? '#585858' : '#d8d8d8', props.theme === 'dark' ? '#585858' : '#d6d6d6', props.num, props.num, props.num, props.num, props.theme === 'dark' ? '#313131' : '#fff', props.theme === 'dark' ? '#313131' : '#fff', props.num]
		})
	);
};

exports.default = CheckBoxStyles;