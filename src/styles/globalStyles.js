import { createGlobalStyle } from 'styled-components';
import { reset, init, headings, button, form, link } from './global';

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${init}
  ${headings}
  ${button}
  ${form}
  ${link}
`;

export default GlobalStyles;
