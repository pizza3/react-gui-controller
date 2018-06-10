import css from 'styled-jsx/css';

export const buttonStyle = css`
    .buttonStyle{
        position: relative;
        width: 100%;
        height: 32px;
        background: rgb(119, 155, 255);
        border-top: 1px solid rgb(214, 214, 214);
        border-right: none;
        border-bottom: none;
        border-left: none;
        border-image: initial;
        font-size: 12px;
        font-weight: 100;
        cursor: pointer;
        color: rgb(250, 250, 250);
        outline: none;
    }
    
    .dark{
        border-top: 1px solid #313131;
    }
    `;