import React from 'react';

const style={
	'position':'relative',
	'width':'100%',
	'height':'20px',
};

const label={
	'position':'relative',
	'float':'left',
};

const input={
	'position':'relative',
	'float':'right',
};

const InputText =(props)=>{
	return(
		<div id='input-text' style={style}>
			<div style={label}>Text</div>
			<input type='text' style={input} value={props.val} onChange={props.onChange} />
		</div>
	);
};

export default InputText;
