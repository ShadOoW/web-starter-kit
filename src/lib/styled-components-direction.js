// RTL Dir is a work in progress
// Follow up this discussion here:
// https://github.com/styled-components/styled-components/issues/2703
// Things may improve with V5:
// https://medium.com/styled-components/announcing-styled-components-v5-beast-mode-389747abd987

import { css } from 'styled-components';
import { transform } from 'cssjanus';

function cssToString(cssStyles, props) {
  return cssStyles.reduce((result, v) => {
    let addition = v;
    if (typeof v === 'function') {
      const vResult = v(props);
      addition = typeof vResult === 'string' ? vResult : cssToString(vResult, props);
    }
    return result + addition;
  }, '');
}

const dir = (...styles) => (props) => {
  const cssStyles = cssToString(css(...styles), props);

  return `
    [dir=ltr] & {
      ${cssStyles}
    }
    [dir=rtl] & {
      ${transform(cssStyles)}
    }
  `;
};

const dirLocal = (...styles) => (props) => {
  const cssStyles = cssToString(css(...styles), props);

  return `
    &.ltr, .ltr & {
      ${cssStyles}
    }
    &.rtl, .rtl & {
      ${transform(cssStyles)}
    }
  `;
};

export { dir, dirLocal };
