import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Wrapper from './Countries.styles';
import addId from 'helpers.js';
import CountryDetails from 'components/CountryDetails/CountryDetails';
import CountriesList from 'components/CountriesList/CountriesList';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const API_URL = 'https://restcountries.eu/rest/v2/all?fields=name;capital;currencies';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

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

  return (
    <Wrapper id="countries">
      <Router>
        <Route
          render={({ location }) => {
            return (
              <TransitionGroup>
                <CSSTransition timeout={300} classNames="page" key={location.key}>
                  <Switch location={location}>
                    <Route path="/:countryId">
                      <CountryDetails countries={countries} />
                    </Route>
                    <Route path="/">
                      <CountriesList
                        countries={countries}
                        isLoading={isLoading}
                        hasError={hasError}
                      />
                    </Route>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        />
      </Router>
    </Wrapper>
  );
};

export default Countries;
