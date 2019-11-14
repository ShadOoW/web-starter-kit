import styled from 'styled-components';

// Import Theme
import { cssVarColorsNames } from 'styles/theme';

// Import Layout
import { Flex } from 'layout';

const Commit = styled(Flex)`
  border: 1px solid ${cssVarColorsNames.foregroundAccent};
  background: ${cssVarColorsNames.backgroundAccent};

  a > span {
    display: block;
  }
`;

export default Commit;
