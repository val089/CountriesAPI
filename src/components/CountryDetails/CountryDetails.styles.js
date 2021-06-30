import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.lightBlue};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 300px;
  margin: 0 auto;

  span {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const StyledLink = styled(Link)`
  background: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  border-radius: 6px;
`;
