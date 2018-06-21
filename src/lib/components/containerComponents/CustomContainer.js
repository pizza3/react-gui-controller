import React from 'react';
import PropTypes from 'prop-types';
import { container } from '../JSXStyles/customCommonStyles';
import { label } from '../JSXStyles/commonStyles';
const CustomContainer = props => {
	return (
		<div className={props.hide ? props.themeName : `${props.themeName} hide`}>
			<div className={props.theme === 'dark' ? 'label label-dark' : 'label'}>
				{props.label}
			</div>
			{props.children}
			<style jsx>{container}</style>
			<style jsx>{label}</style>
		</div>
	);
};

export default CustomContainer;

CustomContainer.propTypes = {
	children: PropTypes.arrayOf(PropTypes.node),
	hide: PropTypes.bool,
	theme: PropTypes.string,
	label: PropTypes.string
};

CustomContainer.defaultProps = {
	label: '',
	theme: 'light'
};
