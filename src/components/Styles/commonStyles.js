import css from 'styled-jsx/css';

export const label =css`
        .label{
        position: relative;
        float: left;
        padding-top: 5px;
        padding-left: 4px;
        font-weight: 100;
        font-size: 12px;
        color: rgb(119, 155, 255);
        -webkit-touch-callout: none;
        -webkit-user-select: none; 
        -khtml-user-select: none; 
        -moz-user-select: none; 
        -ms-user-select: none; 
        user-select: none;
    }
`;

export const container= css`
    .container{
        position: relative;
        width: 100%;
        height: 32px;
        border-top: 1px solid rgb(214, 214, 214);
        font-family: sans-serif;
        padding-top: 4px;
        padding-left: 2px;
        padding-right: 2px;
    }
    
    .dark{
        border-top: 1px solid #313131;
    }
    `;
