import React from 'react';
import Title from 'components/Title/Title';
import CtaButton from 'components/CtaButton/CtaButton';
import StyledInfo from './HeaderTitle.styles';

const HeaderTitle = () => {
  return (
    <div>
      <Title>Countries of The World</Title>
      <StyledInfo>Find your favourite country.</StyledInfo>
      <div>
        <CtaButton href="#countries">Let's start</CtaButton>
      </div>
    </div>
  );
};

export default HeaderTitle;
