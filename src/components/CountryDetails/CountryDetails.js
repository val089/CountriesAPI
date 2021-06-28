import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const CountryDetails = ({ countries }) => {
  const [country, setCountry] = useState();
  const { countryId } = useParams();

  useEffect(() => {
    if (countries) {
      setCountry(...countries.filter((item) => item.numericCode === countryId));
    }
  }, [countries, countryId]);

  if (country) {
    return (
      <div>
        <p>{countries.name}</p>
        <p>{countries.capital}</p>
        <div>
          {countries.currencies.map((currency) => (
            <div>
              <p>{currency.symbol}</p>
              <p>{currency.code}</p>
              <p>{currency.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return <Link to="/">Back</Link>;
};

CountryDetails.defaultProps = {
  countries: PropTypes.shape({
    name: 'Country Name',
    capital: 'Country Capital',
    currencies: PropTypes.shape({
      symbol: 'Currency Symbol',
      code: 'Currency Code',
      name: 'Currency Name',
    }),
  }),
};

CountryDetails.propTypes = {
  countries: PropTypes.shape({
    name: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
    currencies: PropTypes.shape({
      symbol: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }),
};

export default CountryDetails;
