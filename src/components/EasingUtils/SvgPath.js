import React from 'react';

const SvgPath = props => {
	const { ac1, ac2 } = props;
	return (
		<React.Fragment>
			<path
				d={`M63 230 C ${ac1.x} ${ac1.y}, ${ac2.x} ${ac2.y}, 225 68`}
				stroke="rgb(119,155,255)"
				fill="none"
			/>
			<line
				x1="63"
				y1="230"
				x2={ac1.x}
				y2={ac1.y}
				stroke="#a7adba"
				strokeWidth="0.5"
				strokeDasharray="3px"
			/>
			<line
				x1="225"
				y1="68"
				x2={ac2.x}
				y2={ac2.y}
				stroke="#a7adba"
				strokeWidth="0.5"
				strokeDasharray="3px"
			/>
		</React.Fragment>
	);
};

export default SvgPath;
