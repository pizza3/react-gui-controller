import React from 'react';

const CheckBoxStyles = props => {
	return (
		<div>
			<input
				id={'switch' + props.num}
				name="view"
				type="checkbox"
				hidden
				checked={props.val}
				onChange={props.handleChange}
			/>
			<label
				htmlFor={'switch' + props.num}
				className={'switch' + props.num}
			/>
			<style jsx>
				{`
					.switch${props.num} {
						display: inline-block;
						float: right;
						width: 42px;
						height: 22px;
						padding: 4px;
						border-radius: 20px;
						background: ${props.theme === 'dark' ? '#212121' : '#fafafa'};
						vertical-align: middle;
						position: relative;
						cursor: pointer;
						user-select: none;
						transition: background 350ms ease;
						margin-right: 4px;
						margin-top: 1px;
						border: 1px solid
							${props.theme === 'dark' ? '#585858' : '#e5e5e5'};
					}

					.switch${props.num}:before, .switch${props.num}:after {
						content: '';
						display: block;
						width: 13px;
						height: 13px;
						border-radius: 50%;
						position: absolute;
						top: 50%;
						transition: all 350ms cubic-bezier(0, 0.95, 0.38, 0.98),
							background 150ms ease;
					}

					.switch${props.num}:before {
						background: rgba(128, 128, 128, 0.075);
						transform: translate3d(0, -50%, 0) scale(0);
					}

					.switch${props.num}:after {
						background: ${props.theme === 'dark' ? '#585858' : '#d8d8d8'};
						border: 1px solid
							${props.theme === 'dark' ? '#585858' : '#d6d6d6'};
						transform: translate3d(-2px, -50%, 0);
					}

					.switch${props.num}:active:before {
						transform: translate3d(0, -50%, 0) scale(3);
					}

					input:checked + .switch${props.num} {
						background: #769aff;
					}

					input:checked + .switch${props.num}:before {
						background: rgba(131, 177, 84, 0.075);
						transform: translate3d(100%, -50%, 0) scale(1);
					}

					input:checked + .switch${props.num}:after {
						background: ${props.theme === 'dark' ? '#313131' : '#fff'};
						border: 1px solid
							${props.theme === 'dark' ? '#313131' : '#fff'};
						transform: translate3d(124%, -50%, 0);
					}

					input:checked + .switch${props.num}:active:before {
						background: rgba(131, 177, 84, 0.075);
						transform: translate3d(100%, -50%, 0) scale(3);
					}
				`}
			</style>
		</div>
	);
};

export default CheckBoxStyles;
