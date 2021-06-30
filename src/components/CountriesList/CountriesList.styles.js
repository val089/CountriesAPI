import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const StyledList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 40px auto;
  text-align: center;

  &.page-enter {
    animation: ${fadeIn} 0.2s forwards;
  }
  &.page-exit {
    animation: ${fadeOut} 0.2s forwards;
  }
`;
