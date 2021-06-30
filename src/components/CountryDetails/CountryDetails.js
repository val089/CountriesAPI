import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { Animation, Wrapper, StyledLink } from './CountryDetails.styles';
import CurrencyItem from 'components/CurrencyItem/CurrencyItem';

const CountryDetails = ({ countries }) => {
  const [country, setCountry] = useState();
  const { countryId } = useParams();

  useEffect(() => {
    if (countries) {
      setCountry(...countries.filter((item) => item.id === countryId));
    }
  }, [countries, countryId]);

  return (
    <Animation>
      {country ? (
        <Wrapper>
          <p>
            Country: <span>{country.name ? country.name : 'Missing country name'}</span>
          </p>
          <p>
            Capital: <span>{country.capital ? country.capital : 'Missing country capital'}</span>
          </p>
          {country.currencies.map((currency) => (
            <CurrencyItem key={uuidv4()} currency={currency} />
          ))}
          <StyledLink to="/">Back</StyledLink>
        </Wrapper>
      ) : (
        <StyledLink to="/">Back</StyledLink>
      )}
    </Animation>
  );
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
