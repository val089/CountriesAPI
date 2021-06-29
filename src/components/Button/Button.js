import styled from 'styled-components';

const Button = styled.a`
  font-size: ${({ theme }) => theme.fontSize.m};
  background: ${({ theme }) => theme.colors.lightBlue};
  color: ${({ theme }) => theme.colors.darkBlue};
  padding: 10px 20px;
  border-radius: 6px;
  transition: 0.4s;

  &:hover {
    background: ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default Button;
