import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';
import { lineHight } from './theme';

const GlobalStyle = createGlobalStyle`
    ${normalize()}
    html {
        box-sizing: border-box;
        font-size: ${p => p.theme.fontSizes.init};
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        background-color: ${({ theme }) => theme.colors.dark};
        color: ${({ theme }) => theme.colors.light};
        font-size: ${({ theme }) => theme.fontSizes.base};
        font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir, helvetica, 'helvetica neue', ubuntu, roboto, noto, 'segoe ui', arial, sans-serif;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        font-feature-settings: "liga", "tnum", "case", "calt", "zero", "ss01", "locl";
        text-align: center;
        transition: background-color 0.5s;
        line-height: ${lineHight}
    }
    h1 {
        font-size: ${p => p.theme.fontSizes.h1};
    }
    h2 {
        font-size: ${p => p.theme.fontSizes.h2};
    }
    h3 {
        font-size: ${p => p.theme.fontSizes.h3};
    }
    h4 {
        font-size: ${p => p.theme.fontSizes.h4};
    }
    h5 {
        font-size: ${p => p.theme.fontSizes.h5};
    }
    h6 {
        font-size: ${p => p.theme.fontSizes.h6};
    }
    h1, h2, h3, h4, h5, h6 {
      margin-block-start: 0;
      margin-block-end: 0;
    }
    a, a:link, a:visited, a:focus, a:hover, a:active {
        color: ${p => p.theme.colors.light};
        text-decoration:none;
        cursor: pointer;
    }
    img {
        width: 100%;
        vertical-align: bottom;
    }
`;

export default GlobalStyle;
