import React from 'react';
import StyledHeader from './Header.styles';
import HeaderTitle from 'components/HeaderTitle/HeaderTitle';
import HeaderImage from 'components/HeaderImage/HeaderImage';

const Header = () => (
  <StyledHeader>
    <HeaderTitle />
    <HeaderImage />
  </StyledHeader>
);

export default Header;
