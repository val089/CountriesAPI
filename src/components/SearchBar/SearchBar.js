import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledLabel, StyledInput } from './SearchBar.styles';
import Button from 'components/Button/Button';

const SearchBar = ({ value, onChange, onClick }) => {
  return (
    <Wrapper>
      <StyledLabel>Search:</StyledLabel>
      <StyledInput type="text" value={value} onChange={onChange} />
      <Button type="submit" onClick={onClick} margin="5px">
        Search
      </Button>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default SearchBar;
