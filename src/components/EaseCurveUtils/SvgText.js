import React from 'react';

const SvgText = () => {
	return (
		<React.Fragment>
			<text x="63" y="240" className="time">
				TIME
			</text>
			<text x="60" y="230" className="progress">
				PROGRESS
			</text>
			<style jsx>
				{`
					.time {
						font-size: 9px;
						margin-top: 50px;
						fill: #46516f;
						-webkit-touch-callout: none;
						-webkit-user-select: none;
						-khtml-user-select: none;
						-moz-user-select: none;
						-ms-user-select: none;
						user-select: none;
					}

					.progress {
						font-size: 9px;
						margin-top: 50px;
						fill: #46516f;
						-webkit-touch-callout: none;
						-webkit-user-select: none;
						-khtml-user-select: none;
						-moz-user-select: none;
						-ms-user-select: none;
						user-select: none;
						transform-origin: 60px 230px;
						transform: rotate(-90deg);
					}
				`}
			</style>
		</React.Fragment>
	);
};

export default SvgText;
