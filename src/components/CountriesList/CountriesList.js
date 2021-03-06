import React, { useEffect, useState } from 'react';
import CountryItem from 'components/CountryItem/CountryItem';
import SearchBar from 'components/SearchBar/SearchBar';
import Button from 'components/Button/Button';
import { StyledList, Wrapper } from './CountriesList.styles';

const CountriesList = ({ countries, isLoading, hasError }) => {
  const [newCountries, setNewCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [orderSort, setOrderSort] = useState(false);

  useEffect(() => {
    if (countries) {
      setNewCountries(countries);
    }
  }, [countries]);

  const searchCountry = (e) => {
    e.preventDefault();
    const filteredCountries = newCountries.filter((country) => {
      return country.name.toLowerCase().includes(search.toLocaleLowerCase());
    });
    setNewCountries(filteredCountries);
    setSearch('');
  };

  const sortByName = () => {
    setOrderSort(!orderSort);
    const sortedCountries = newCountries.sort((a, b) =>
      orderSort ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setNewCountries(sortedCountries);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Wrapper id="countries">
      <SearchBar value={search} onChange={handleChange} onClick={searchCountry} />
      <Button onClick={sortByName} margin="30px 0">
        SORT BY NAME
      </Button>
      <StyledList>
        {newCountries.length === 0 && <p>No results. Please refresh the page.</p>}
        {isLoading && <p>Loading...</p>}
        {hasError && <p>An error has occurred</p>}
        {newCountries &&
          newCountries.map((country) => <CountryItem country={country} key={country.id} />)}
      </StyledList>
    </Wrapper>
  );
};

export default CountriesList;
