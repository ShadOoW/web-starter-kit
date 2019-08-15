import styled from 'styled-components';
import {
  layout, color, space, position,
} from 'styled-system';

const Inline = styled.div`
  display: inline;
  ${layout}
  ${color}
  ${space}
  ${position}
`;

Inline.propTypes = {
  ...layout.propTypes,
  ...color.propTypes,
  ...space.propTypes,
  ...position.propTypes,
};

Inline.defaultProps = {
};

export default Inline;
