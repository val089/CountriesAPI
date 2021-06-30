import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Wrapper from './Countries.styles';
import addId from 'helpers.js';
import CountryDetails from 'components/CountryDetails/CountryDetails';
import CountriesList from 'components/CountriesList/CountriesList';

const API_URL = 'https://restcountries.eu/rest/v2/all?fields=name;capital;currencies';

const Countries = () => {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);
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
    const filteredCountries = countries.filter((country) => {
      return country.name.toLowerCase().includes(search.toLocaleLowerCase());
    });
    setCountries(filteredCountries);
    setSearch('');
  };

  const sortByName = () => {
    setOrderSort(!orderSort);
    const sortedCountries = countries.sort((a, b) =>
      orderSort ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
    );
    setCountries(sortedCountries);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Wrapper id="countries">
      <Router>
        <Switch>
          <Route path="/:countryId">
            <CountryDetails countries={countries} />
          </Route>
          <Route path="/">
            <CountriesList
              countries={countries}
              value={search}
              searchCountry={searchCountry}
              onChange={handleChange}
              sortByName={sortByName}
              isLoading={isLoading}
              hasError={hasError}
            />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
};

export default Countries;
