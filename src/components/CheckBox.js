import React from 'react';

const style={
	'position':'relative',
	'width':'100%',
	'height': '25px',
	'borderBottom': '1px solid #a0a0a0',
	'fontFamily': 'sans-serif',
	'paddingTop': '4px',
	'paddingLeft': '2px',
	'paddingRight': '2px'
};
const label={
	'position':'relative',
	'float':'left',
	'paddingTop': '3px',
	'fontWeight': '100'	
};

const input={
	'position':'relative',
	'float':'right',
};

const CheckBox = (props)=>{
	return(
		<div id='input-text' style={style}>
			<div style={label}>Text</div>
			<input type='checkbox' style={input} value={true} onChange={props.onChange} />
		</div>
	);
};

export default CheckBox;