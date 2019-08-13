import styled from 'styled-components';
import {
  layout, color, space, position,
} from 'styled-system';

const Block = styled.div`
  ${layout}
  ${color}
  ${space}
  ${position}
`;

Block.propTypes = {
  ...layout.propTypes,
  ...color.propTypes,
  ...space.propTypes,
  ...position.propTypes,
};

Block.defaultProps = {
};

export default Block;
