import styled from 'styled-components';

const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSize.m};
  background: ${({ theme }) => theme.colors.lightBlue};
  color: ${({ theme }) => theme.colors.darkBlue};
  padding: 5px 10px;
  margin: ${(props) => props.margin};
  cursor: pointer;
  border-radius: 6px;
  transition: 0.4s;
  border: none;

  &:hover {
    background: ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default Button;
