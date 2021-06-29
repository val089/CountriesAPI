import React from 'react';
import Title from 'components/Title/Title';
import Button from 'components/Button/Button';
import StyledInfo from './HeaderTitle.styles';

const HeaderTitle = () => {
  return (
    <div>
      <Title>Countries of The World</Title>
      <StyledInfo>Find your favourite country.</StyledInfo>
      <div>
        <Button href="#planets">Let's start</Button>
      </div>
    </div>
  );
};

export default HeaderTitle;
