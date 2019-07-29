/* eslint-disable no-unused-vars */
import styled, { keyframes } from 'styled-components';

const blink = props => keyframes`
  0% {background: transparent}
  50% {background: var(--color-foregroundAccent)}
  100% {background: transparent}
`;

const Cursor = styled.span`
  background: var(--color-foregroundAccent);
  margin-left: ${({ theme }) => theme.space[2]};
  width: ${({ theme }) => theme.space[3]};
  height: ${({ theme }) => theme.space[4]};
  animation: ${props => blink} 1.5s infinite;
`;

export default Cursor;
