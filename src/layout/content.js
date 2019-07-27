import styled from 'styled-components';

const Content = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1 auto;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.space.quadruple};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    margin: 50px 0;
  }
`;

export default Content;
