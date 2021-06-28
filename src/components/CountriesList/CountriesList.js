import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import CountryItem from 'components/CountryItem/CountryItem';

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
      {isLoading && <p>Loading...</p>}
      {hasError && <p>An error has occurred</p>}
      {countries.length ? (
        countries.map((country) => <CountryItem country={country} key={uuidv4()} />)
      ) : (
        <p>No countries available</p>
      )}
    </div>
  );
};

export default CountriesList;
