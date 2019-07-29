import styled from 'styled-components';
import { space, typography } from 'styled-system';

const H3 = styled.h3`
  ${space}
  ${typography}
`;

H3.propTypes = {
  ...space.propTypes,
  ...typography.propTypes,
};

H3.defaultProps = {
  py: 1,
};

export default H3;
