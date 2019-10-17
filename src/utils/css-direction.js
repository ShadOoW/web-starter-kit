// RTL Dir is a work in progress
// Follow up this discussion here:
// https://github.com/styled-components/styled-components/issues/2703
// Things may improve with V5:
// https://medium.com/styled-components/announcing-styled-components-v5-beast-mode-389747abd987
// Update: https://github.com/styled-system/styled-system/issues/704

import styled from 'styled-components';
import rtlCSSJS from 'rtl-css-js';

// Extend as needed
const CSS_SCHEMA = {
  dirRight: 'right',
  dirLeft: 'left',
  dirBorderRight: 'border-right',
  dirMarginRight: 'margin-right',
  dirMarginLeft: 'margin-left',
  dirPaddingRight: 'padding-right',
  dirPaddingLeft: 'padding-left',
};

const ALLOWED_PROPS = [
  'dirRight',
  'dirLeft',
  'dirBorderRight',
  'dirMarginRight',
  'dirPaddingLeft',
  'dirPaddingRight',
];

const filterProps = (props) =>
  Object.keys(props)
    .filter((key) => ALLOWED_PROPS.includes(key))
    .reduce((obj, key) => {
      // eslint-disable-next-line no-param-reassign
      obj[CSS_SCHEMA[key]] = props[key];
      return obj;
    }, {});

const proccess = (props) => {
  const filtered = filterProps(props);

  return {
    '[dir="ltr"] &': {
      ...filtered,
    },
    '[dir="rtl"] &': {
      ...rtlCSSJS(filtered),
    },
  };
};

const Direction = styled('div')(proccess);

export default Direction;
