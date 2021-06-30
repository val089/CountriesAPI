import styled, { keyframes } from 'styled-components';
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

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 0;
  }

  to {
    transform: scale(.25);
    opacity: 1;
  }
`;

export const Animation = styled.div`
  &.page-enter {
    animation: ${fadeIn} 0.2s;
  }
  &.page-exit {
    animation: ${fadeOut} 0.2s;
  }
`;
