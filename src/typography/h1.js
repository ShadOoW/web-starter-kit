import styled from 'styled-components';
import { space, typography } from 'styled-system';

const H1 = styled.h1`
  ${space}
  ${typography}
`;

H1.propTypes = {
  ...space.propTypes,
  ...typography.propTypes,
};

H1.defaultProps = {
  py: 3,
};

export default H1;
