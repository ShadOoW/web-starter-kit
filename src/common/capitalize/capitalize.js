import styled from 'styled-components';
import { display } from 'styled-system';

const Capitalize = styled.span`
  text-transform: capitalize;
  ${display}
`;

Capitalize.propTypes = {
  ...display.propTypes,
};

export default Capitalize;
