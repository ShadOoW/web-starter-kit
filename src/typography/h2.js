import styled from 'styled-components';
import { space, typography } from 'styled-system';

const H2 = styled.h2`
  ${space}
  ${typography}
`;

H2.propTypes = {
  ...space.propTypes,
  ...typography.propTypes,
};

H2.defaultProps = {
  py: 3,
};

export default H2;
