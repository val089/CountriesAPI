import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './CurrencyItem.styles';

const CurrencyItem = ({ currency: { symbol, code, name } }) => {
  return (
    <Wrapper>
      <div>
        <p>Name:</p>
        <span>{name ? name : 'Missing currency name'}</span>
      </div>
      <div>
        <p>Code:</p>
        <span>{code ? code : 'Missing currency code'}</span>
      </div>
      <div>
        <p>Symbol:</p>
        <span>{symbol ? symbol : 'Missing currency symbol'}</span>
      </div>
    </Wrapper>
  );
};

CurrencyItem.propTypes = {
  currency: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default CurrencyItem;
