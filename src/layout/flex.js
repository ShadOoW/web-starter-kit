import styled from 'styled-components';
import {
  layout, flexbox, color, space, position, border,
} from 'styled-system';

const Flex = styled.div`
  display: flex;
  ${layout}
  ${flexbox}
  ${color}
  ${space}
  ${position}
  ${border}
`;

Flex.propTypes = {
  ...layout.propTypes,
  ...flexbox.propTypes,
  ...color.propTypes,
  ...space.propTypes,
  ...position.propTypes,
  ...border.propTypes,
};

Flex.defaultProps = {
};

export default Flex;
