import { css } from 'styled-components';
import { normalize } from 'polished';

const reset = css`
  ${normalize()}

  /* Revert selector from polished normalize */
  button, html [type="button"], [type="reset"], [type="submit"] {
    -webkit-appearance: none;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  ul {
    list-style: none;
  }

  img {
    width: 100%;
    vertical-align: bottom;
  }

  svg {
    pointer-events: none;
  }
`;

export default reset;
