import React from 'react';
import CountryItem from 'components/CountryItem/CountryItem';
import SearchBar from 'components/SearchBar/SearchBar';
import Button from 'components/Button/Button';
import { StyledList, Wrapper } from './CountriesList.styles';

const CountriesList = ({
  countries,
  value,
  searchCountry,
  onChange,
  isLoading,
  hasError,
  sortByName,
}) => {
  return (
    <Wrapper id="countries">
      <SearchBar value={value} onChange={onChange} onClick={searchCountry} />
      <Button onClick={sortByName} margin="30px 0">
        SORT BY NAME
      </Button>
      <StyledList>
        {isLoading && <p>Loading...</p>}
        {hasError && <p>An error has occurred</p>}
        {countries &&
          countries.map((country) => <CountryItem country={country} key={country.id} />)}
      </StyledList>
    </Wrapper>
  );
};

export default CountriesList;
