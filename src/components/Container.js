import React from 'react';
import {label, container} from './Styles/commonStyles';

const Container=(props)=>{
	return(
		<div className={props.theme?'container dark':'container'}>
			<div className='label'>{props.label}</div>
			{props.children}
			<style jsx>{label}</style>
			<style jsx>{container}</style>	
		</div>
	);
};


export default Container;