import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CountryItem from 'components/CountryItem/CountryItem';
import CountryDetails from 'components/CountryDetails/CountryDetails';

const API_URL = 'https://restcountries.eu/rest/v2/name/united';

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    axios
      .get(API_URL)
      .then(({ data }) => {
        setLoading(true);
        setCountries(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/:countryId">
            <CountryDetails countries={countries} />
          </Route>
          <Route path="/">
            {isLoading && <p>Loading...</p>}
            {hasError && <p>An error has occurred</p>}
            {countries.length ? (
              countries.map((country) => (
                <CountryItem country={country} key={country.numericCode} />
              ))
            ) : (
              <p>No countries available</p>
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default CountriesList;
