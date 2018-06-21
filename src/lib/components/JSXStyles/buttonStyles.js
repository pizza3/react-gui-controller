import css from 'styled-jsx/css';

export const buttonStyle = css`
	.buttonStyle {
		position: relative;
		width: 100%;
		height: 32px;
		background: rgb(250, 250, 250);
		border-top: 1px solid rgb(214, 214, 214);
		border-right: none;
		border-bottom: none;
		border-left: none;
		border-image: initial;
		font-size: 12px;
		font-weight: 100;
		cursor: pointer;
		color: rgb(117, 153, 255);
		outline: none;
	}

	.buttonStyle:hover {
		background: rgb(245, 245, 245);
	}

	.dark {
		background: rgb(33, 33, 33);
		border-top: 1px solid #313131;
	}

	.dark:hover {
		background: rgb(21, 21, 21);
	}
`;
