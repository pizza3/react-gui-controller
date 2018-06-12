import css from 'styled-jsx/css';

export const controllerStyle = css`
	.controller-body {
		position: fixed;
		width: 300px;
		height: auto;
		background: rgb(250, 250, 250);
		border: 1px solid rgb(214, 214, 214);
		border-radius: 4px;
		overflow: hidden;
		top: 50px;
		left: 50px;
	}

	.dark {
		background: #212121;
		border: 1px solid #313131;
	}

	.container {
		position: relative;
		width: 100%;
		transition: 0.4s;
		max-height: calc(100vh - 54px);
		overflow: scroll;
	}

	.hide {
		max-height: 0px;
	}

	.drag {
		position: relative;
		width: 100%;
		height: 24px;
	}

	.control-button {
		position: relative;
		width: 100%;
		height: 30px;
		text-align: center;
		color: rgb(119, 155, 255);
		font-family: sans-serif;
		font-size: 12px;
		padding-top: 8px;
		font-weight: 100;
		cursor: pointer;
		border-top: 1px solid rgb(214, 214, 214);
	}

	.control-button-dark {
		border-top: 1px solid #313131;
	}
`;
