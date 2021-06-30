import React from 'react';
import PropTypes from 'prop-types';
import StyledLink from './CountryItem.styles';

const CountryItem = ({ country: { name, id } }) => {
  return <StyledLink to={`/${id}`}>{name}</StyledLink>;
};

CountryItem.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default CountryItem;
