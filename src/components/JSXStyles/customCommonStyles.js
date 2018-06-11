import css from 'styled-jsx/css';

//the custom common style provide the custom properties for the
//custom container eg. color selector and easeCurve selector will
//be having varraying height's

export const container = css`
	.container {
		position: relative;
		width: 100%;
		max-height: 32px;
		border-top: 1px solid rgb(214, 214, 214);
		font-family: sans-serif;
		padding-top: 4px;
		padding-left: 2px;
		padding-right: 2px;
		overflow: hidden;
		transition: 0.4s;
	}

	.dark {
		border-top: 1px solid #313131;
	}

	.hide {
		max-height: 100vh;
	}
`;
