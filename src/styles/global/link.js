import { css } from 'styled-components';
import { cssVarColorsNames } from 'styles/theme';

const link = css`
  a,
  a:link,
  a:visited,
  a:focus,
  a:hover,
  a:active {
    color: ${cssVarColorsNames.foregroundAccent};
    text-decoration: none;
    cursor: pointer;
  }
`;

export default link;
