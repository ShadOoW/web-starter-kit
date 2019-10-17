import styled, { css } from 'styled-components';
import {
  layout,
  flexbox,
  color,
  space,
  position,
  border,
  typography,
  shadow,
} from 'styled-system';

const styles = css`
  ${layout}
  ${flexbox}
  ${color}
  ${space}
  ${position}
  ${border}
  ${typography}
  ${shadow}
`;

export const Flex = styled.div`
  display: flex;
  ${styles}
`;

export const Block = styled.div`
  display: block;
  ${styles}
`;

Block.propTypes = {
  ...layout.propTypes,
  ...flexbox.propTypes,
  ...color.propTypes,
  ...space.propTypes,
  ...position.propTypes,
  ...border.propTypes,
  ...typography.propTypes,
  ...shadow.propTypes,
};

Flex.propTypes = {
  ...layout.propTypes,
  ...flexbox.propTypes,
  ...color.propTypes,
  ...space.propTypes,
  ...position.propTypes,
  ...border.propTypes,
  ...typography.propTypes,
  ...shadow.propTypes,
};
