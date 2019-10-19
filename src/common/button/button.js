import styled from 'styled-components';
import Proptypes from 'prop-types';
import { variant, flexbox, space, display } from 'styled-system';
import { cssVarColorsNames } from 'styles/theme';

const FlexButton = styled.button`
  display: flex;
  ${flexbox}
  ${display}
  ${space}

  cursor: pointer;
  outline: none;
  border: 3px solid #fff;
  color: ${cssVarColorsNames.foregroundAccent};
  border: solid 2px ${cssVarColorsNames.foregroundAccent};
  background: none;

  &:hover:enabled,
  &.active:enabled {
    background-color: ${cssVarColorsNames.foregroundAccent};
    color: ${cssVarColorsNames.background};
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const Button = styled(FlexButton)(
  {
    display: 'flex',
  },
  variant({
    prop: 'size',
    variants: {
      normal: {
        padding: '1rem',
      },
      small: {
        padding: '0.5rem',
      },
    },
  }),
);

Button.defaultProps = {
  size: 'normal',
};

Button.propTypes = {
  size: Proptypes.oneOf(['normal', 'small']),
  ...flexbox.propTypes,
  ...space.propTypes,
};

export default Button;
