import css from 'styled-jsx/css';

export const easeCurveStyle = css`
	.dark {
		border-top: 1px solid #313131;
	}

	svg {
		position: relative;
		background: none;
	}

	.text {
		height: 23px;
		width: 132px;
		float: right;
		margin-right: 4px;
		position: relative;
		overflow: hidden;
		background: #fafafa;
		border: 1px solid;
		border-color: #e5e5e5;
		border-radius: 3px;
		color: #7499fb;
		font-size: 10px;
		padding-top: 4px;
		padding-left: 3px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		cursor: pointer;
	}

	.text-dark {
		background: #212121;
		border-color: #585858;
	}
`;
