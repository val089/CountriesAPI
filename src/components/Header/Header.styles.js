import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 30px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  flex-direction: column;
  @media (min-width: 550px) {
    flex-direction: row;
  }
`;

export default StyledHeader;
