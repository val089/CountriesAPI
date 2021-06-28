import React from 'react';
import PropTypes from 'prop-types';

const CountryItem = ({ country: { name } }) => (
  <div>
    <p>{name}</p>
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
