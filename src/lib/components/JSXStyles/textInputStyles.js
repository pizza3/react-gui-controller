import css from 'styled-jsx/css';

export const textInput = css`
	.inputText {
      position: relative;
      margin:0;
      padding:0;
      box-sizing:border-box;
		float: right;
		height: 22px;
		margin-right: 4px;
		border-radius: 3px;
		background: rgb(253, 253, 253);
		border: 1px solid rgb(229, 229, 229);
		outline: none;
		color: rgb(119, 155, 255);
		padding-left: 5px;
		font-weight: 500;
	}

	.inputText-dark {
		background: #212121;
		border: 1px solid #424242;
	}
`;
