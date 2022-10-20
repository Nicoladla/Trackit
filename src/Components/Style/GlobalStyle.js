import { createGlobalStyle } from "styled-components";
import {AZUL_CLARO, AZUL_ESCURO, CINZA} from "../../Constants/Constants"

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    //Estilos globais do site.

    *{
        box-sizing: border-box;
        font-family: 'Lexend Deca';
        color: ${CINZA};
    }

    body{
        font-family: 'Lexend Deca';
    }

    h1{
        color: ${AZUL_ESCURO};
        font-size: 23px;
    }

    input{
        width: 85%;
        height: 45px;
        font-size: 19px;
        font-weight: 400;
        margin-bottom: 7px;
        padding-left: 10px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        outline: none;
    }
    input::placeholder{
        color: #DBDBDB;
    }

    button{
        background-color: ${AZUL_CLARO};
        color: white;
        border: none;
        border-radius: 5px;
    }
`;

export default GlobalStyle;
