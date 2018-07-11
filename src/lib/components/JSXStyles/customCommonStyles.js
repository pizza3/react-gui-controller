import css from 'styled-jsx/css';

//the custom common style provide the custom properties for the
//custom container eg. color selector and easeCurve selector will
//be having varraying height's

export const container = css`
	.container {
      position: relative;
      margin:0;
      padding:0;
      box-sizing:border-box;
		width: 100%;
		max-height: 32px;
		border-top: 1px solid rgb(214, 214, 214);
		font-family: sans-serif;
		padding-top: 4px;
		padding-left: 2px;
		padding-right: 2px;
		padding-bottom: 10px;
		overflow: hidden;
		transition: 0.4s;
	}

	.container:hover {
		background: rgb(245, 245, 245);
	}

	.dark {
		border-top: 1px solid #313131;
	}

	.dark:hover {
		background: rgb(21, 21, 21);
	}

	.hide {
		max-height: 100vh;
	}
`;
