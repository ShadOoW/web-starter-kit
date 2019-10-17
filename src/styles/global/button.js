import { css } from 'styled-components';
import { cssVarColorsNames } from 'styles/theme';

const button = css`
  button {
    cursor: pointer;
    outline: none;
    color: var(--color-foregroundAccent);
    background-color: ${cssVarColorsNames.backgroundAccent};
    border: solid 2px ${cssVarColorsNames.foregroundAccent};
    border-radius: 10px;
    padding: ${(props) => props.theme.space[2]};

    &:hover,
    &.active {
      background-color: ${cssVarColorsNames.foregroundAccent};
      color: #fff;
    }
  }
`;

export default button;
