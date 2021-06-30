import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CountryItem from 'components/CountryItem/CountryItem';
import CountryDetails from 'components/CountryDetails/CountryDetails';
import SearchBar from 'components/SearchBar/SearchBar';
import Button from 'components/Button/Button';
import { StyledList, Wrapper } from './CountriesList.styles';
import addId from 'helpers.js';

const API_URL = 'https://restcountries.eu/rest/v2/all?fields=name;capital;currencies';

const CountriesList = () => {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);
  // const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [orderSort, setOrderSort] = useState(false);

  useEffect(() => {
    axios
      .get(API_URL)
      .then(({ data }) => {
        setLoading(true);
        setCountries(addId(data));
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);

  const searchCountry = (e) => {
    e.preventDefault();
    // setFilteredCountries(
    //   countries.filter((country) => {
    //     return country.name.toLowerCase().includes(search.toLocaleLowerCase());
    //   })
    // );
    const filteredCountries = countries.filter((country) => {
      return country.name.toLowerCase().includes(search.toLocaleLowerCase());
    });
    setCountries(filteredCountries);
    setSearch('');
  };

  const sortByName = () => {
    setOrderSort(!orderSort);
    // filteredCountries.sort((a, b) =>
    //   orderSort ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
    // );
    countries.sort((a, b) =>
      orderSort ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
    );
  };

  return (
    <Wrapper id="countries">
      <Router>
        <Switch>
          <Route path="/:countryId">
            <CountryDetails countries={countries} />
          </Route>
          <Route path="/">
            <SearchBar
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClick={searchCountry}
            />
            <Button onClick={sortByName} margin="30px 0">
              SORT BY NAME
            </Button>
            <StyledList>
              {isLoading && <p>Loading...</p>}
              {hasError && <p>An error has occurred</p>}
              {/* {filteredCountries &&
                filteredCountries.map((country) => (
                  <CountryItem country={country} key={country.id} />
                ))} */}
              {countries &&
                countries.map((country) => <CountryItem country={country} key={country.id} />)}
            </StyledList>
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
};

export default CountriesList;
