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

  return (
    <>
      {country ? (
        <div>
          <p>{country.name}</p>
          <p>{country.capital}</p>
          <div>
            {country.currencies.map((currency) => (
              <div key={currency.code}>
                <p>{currency.symbol}</p>
                <p>{currency.code}</p>
                <p>{currency.name}</p>
              </div>
            ))}
          </div>
          <Link to="/">Back</Link>
        </div>
      ) : (
        <Link to="/">Back</Link>
      )}
    </>
  );
};

CountryDetails.defaultProps = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      name: 'Country Name',
      capital: 'Country Capital',
      currencies: PropTypes.shape({
        symbol: 'Currency Symbol',
        code: 'Currency Code',
        name: 'Currency Name',
      }),
    })
  ),
};

CountryDetails.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      capital: PropTypes.string.isRequired,
      currencies: PropTypes.arrayOf(
        PropTypes.shape({
          symbol: PropTypes.string.isRequired,
          code: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        })
      ),
    })
  ),
};

export default CountryDetails;
