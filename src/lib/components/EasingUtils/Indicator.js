import React from 'react';
import PropTypes from 'prop-types';

const Indicator = props => {
	let style = {
		position: 'absolute',
		width: '10px',
		height: '10px',
		background: '#a0b7f7',
		borderRadius: '50%',
		marginLeft: '28px',
		animation: 'anim 3s infinite',
		animationTimingFunction: `${props.ease}`
	};
	return (
		<div className="indicator">
			<div className="indicator-bob" />
			<style jsx>
				{`
					.indicator {
						position: absolute;
						width: 62px;
						height: 90%;
						margin-top: 27px;
						margin-left: 77%;
					}

					.indicator::before {
						content: '';
						position: absolute;
						width: 3px;
						height: 162px;
						background: #4b4b4b;
						margin-top: 64px;
						margin-left: 31px;
						border-radius: 6px;
					}

					.indicator-bob {
						position: absolute;
						width: 10px;
						height: 10px;
						background: #a0b7f7;
						border-radius: 50%;
						margin-left: 28px;
						animation: anim 3s infinite;
						animation-timing-function: ${props.ease};
					}

					@keyframes anim {
						0% {
							top: 221px;
						}

						10% {
							top: 221px;
						}

						100% {
							top: 60px;
						}
					}
				`}
			</style>
		</div>
	);
};

export default Indicator;

Indicator.propTypes = {
	ease: PropTypes.string.isRequired
};

Indicator.defaultProps = {
	ease: 'linear'
};
