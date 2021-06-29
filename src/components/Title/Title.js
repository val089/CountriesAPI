import styled from 'styled-components';

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.darkBlue};
  margin: 10px 0;
  line-height: 40px;
`;

export default Title;
