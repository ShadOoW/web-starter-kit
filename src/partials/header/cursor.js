/* eslint-disable no-unused-vars */
import styled, { keyframes } from 'styled-components';

const blink = props => keyframes`
  0% {background: ${props.theme.colors.darker}}
  50% {background: ${props.theme.colors.accent}}
  100% {background: ${props.theme.colors.darker}}
`;

const Cursor = styled.span`
  background: ${({ theme }) => theme.colors.accent};
  margin-left: ${({ theme }) => theme.space[2]};
  width: ${({ theme }) => theme.space[3]};
  height: ${({ theme }) => theme.space[4]};
  animation: ${props => blink} 1.5s infinite;
`;

export default Cursor;
