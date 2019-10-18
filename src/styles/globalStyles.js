import { createGlobalStyle } from 'styled-components';
import { reset, init, headings, form, link } from './global';

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${init}
  ${headings}
  ${form}
  ${link}
`;

export default GlobalStyles;
