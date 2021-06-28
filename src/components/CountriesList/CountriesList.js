import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'https://restcountries.eu/rest/v2/name/united';

const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then(({ data }) => {
      setCountries(data);
    });
  }, []);

  return (
    <div>
      {countries.length ? (
        countries.map((country) => <p>{country.name}</p>)
      ) : (
        <p>No countries available</p>
      )}
    </div>
  );
};

export default CountriesList;
