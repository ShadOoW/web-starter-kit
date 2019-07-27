import styled from 'styled-components';
import { space } from 'styled-system';

const H1 = styled.h1`
  ${space}
`;

H1.propTypes = {
  ...space.propTypes,
};

H1.defaultProps = {
  py: 3,
};

export default H1;
