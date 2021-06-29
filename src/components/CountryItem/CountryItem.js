import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CountryItem = ({ country: { name, numericCode } }) => (
  <div>
    <Link to={`/${numericCode}`}>{name}</Link>
  </div>
);

CountryItem.defaultProps = {
  country: PropTypes.shape({
    name: 'Country Name',
  }),
};

CountryItem.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

export default CountryItem;
