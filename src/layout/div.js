import styled from 'styled-components';
import {
  layout, color, space, position,
} from 'styled-system';

const Div = styled.div`
  ${layout}
  ${color}
  ${space}
  ${position}
`;

Div.propTypes = {
  ...layout.propTypes,
  ...color.propTypes,
  ...space.propTypes,
  ...position.propTypes,
};

Div.defaultProps = {
};

export default Div;
