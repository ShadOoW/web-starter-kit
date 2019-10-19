import styled, { keyframes } from 'styled-components';

import { cssVarColorsNames } from 'styles/theme';

const blink = keyframes`
  0% {background: transparent}
  50% {background: ${cssVarColorsNames.foregroundAccent}}
  100% {background: transparent}
`;

const Cursor = styled.div`
  background: var(--color-foregroundAccent);
  margin-bottom: ${(props) => props.theme.space[2]};
  width: ${(props) => props.theme.space[3]};
  height: ${(props) => props.theme.space[4]};
  animation: 1.5s ${blink} infinite;
`;

export default Cursor;
