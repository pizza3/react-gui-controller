import React from 'react';
import PropTypes from 'prop-types';
import { label, container } from './JSXStyles/commonStyles';

const Container = props => {
	return (
		<div className={props.theme === 'dark' ? 'container dark' : 'container'}>
			<div className={props.theme === 'dark' ? 'label label-dark' : 'label'}>
				{props.label}
			</div>
			{props.children}
			<style jsx>{label}</style>
			<style jsx>{container}</style>
		</div>
	);
};

export default Container;
Container.propTypes = {
	children: PropTypes.arrayOf(PropTypes.node),
	theme: PropTypes.string,
	label: PropTypes.string
};

Container.defaultProps = {
	label: '',
	theme: 'light'
};
