import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  position: relative;
  margin: 30px 0;
  padding: 10px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &::before {
    content: 'Currency';
    position: absolute;
    left: 10px;
    top: -17px;
    padding: 5px;
    background: ${({ theme }) => theme.colors.lightBlue};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  p {
    padding-right: 30px;
  }
`;

export default Wrapper;
