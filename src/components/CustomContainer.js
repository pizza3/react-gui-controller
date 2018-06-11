import React from 'react';
import { container } from './JSXStyles/customCommonStyles';
import { label } from './JSXStyles/commonStyles';
const CustomContainer = props => {
	return (
		<div className={props.hide ? props.theme : `${props.theme} hide`}>
			<div className="label">{props.label}</div>
			{props.children}
			<style jsx>{container}</style>
			<style jsx>{label}</style>
		</div>
	);
};

export default CustomContainer;
