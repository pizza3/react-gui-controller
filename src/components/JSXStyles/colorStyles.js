import css from 'styled-jsx/css';

export const colorStyle = css`

    .block-parent{
        position: relative;
        float: right;
        margin-top: 4px;
        margin-right: 4px;
        width: 82%;
        height: 150px;
        border: 1px solid rgb(212, 211, 211);
    }

    .block-parent-dark{
        border: 1px solid rgb(88, 88, 88);
    }

    .color-block{
        position: absolute;
        float: right;
        width: 100%;
        height: 100%;
    }

    .color-strip{
        position:relative;
        float:left;
        margin-top: 4px;
        margin-right: 4px;
        width: 4%;
        height: 150px;
        cursor: crosshair;
    }


    
`;