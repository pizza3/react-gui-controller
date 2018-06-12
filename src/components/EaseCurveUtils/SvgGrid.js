import React from 'react';

const SvgGrid = props => {
	let xAxis = [],
		yAxis = [],
		offsetY = 50,
		offsetX = 45;
	let { theme } = props;
	for (let i = 0; i < 180; i += 18) {
		xAxis.push(
			<line
				key={i}
				x1={18 + offsetX}
				y1={i + 18 + offsetY}
				x2={180 + offsetX}
				y2={i + 18 + offsetY}
				stroke={theme ? '#5a5a5a' : '#dedede'}
				strokeWidth="0.5"
			/>
		);
		yAxis.push(
			<line
				key={i}
				x1={i + 18 + offsetX}
				y1={18 + offsetY}
				x2={i + 18 + offsetX}
				y2={180 + offsetY}
				stroke={theme ? '#5a5a5a' : '#dedede'}
				strokeWidth="0.5"
			/>
		);
	}
	return [xAxis, yAxis];
};

export default SvgGrid;
