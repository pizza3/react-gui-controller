import css from 'styled-jsx/css';

export const colorStyle = css`
	.block-parent {
		position: relative;
		float: right;
		margin-top: 4px;
		margin-right: 4px;
		width: 82%;
		height: 150px;
		border: 1px solid rgb(212, 211, 211);
	}

	.block-parent-dark {
		border: 1px solid rgb(88, 88, 88);
	}

	.strip-parent {
		position: relative;
		float: left;
		margin-top: 4px;
		margin-left: 19px;
		width: 2%;
		height: 150px;
	}

	.color-block {
		position: absolute;
		float: right;
		width: 100%;
		height: 100%;
	}

	.color-strip {
		position: absolute;
		float: right;
		width: 100%;
		height: 100%;
		border-radius: 8px;
	}

	.contain {
		position: relative;
		width: 100%;
		height: auto;
		float: left;
		margin-top: 9px;
	}
`;
