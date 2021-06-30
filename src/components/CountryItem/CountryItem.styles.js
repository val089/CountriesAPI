import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  background: ${({ theme }) => theme.colors.lightBlue};
  color: ${({ theme }) => theme.colors.white};
  padding: 30px;
  margin: 10px;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.darkBlue};
  }
`;

export default StyledLink;
