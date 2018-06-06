import React from 'react';

const style={
	'position':'relative',
	'width':'100%',
	'height': '32px',
	'borderBottom': '1px solid #D6D6D6',
	'fontFamily': 'sans-serif',
	'paddingTop': '4px',
	'paddingLeft': '2px',
	'paddingRight': '2px'
};
const label={
	'position':'relative',
	'float':'left',
	'paddingTop': '5px',
	'paddingLeft':'4px',
	'fontWeight': '100'	,
	'fontSize':'12px',
	'color':'#779BFF'
};
const input={
	'position':'relative',
	'float':'right',
	'width': '15px',
	'height': '15px',
	'marginRight':'4px',				
	'outline': 'rgb(229, 229, 229) solid 1px'
};

const CheckBox = (props)=>{
	return(
		<div id='input-text' style={style}>
			<div style={label}>{props.label}</div>
			<input type='checkbox' style={input} value={true} onChange={props.onChange} />
		</div>
	);
};

export default CheckBox;