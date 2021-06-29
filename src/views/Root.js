import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'assets/styles/GlobalStyle';
import CountriesList from 'components/CountriesList/CountriesList';
import Header from 'components/Header/Header';
import { theme } from 'assets/styles/theme';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <CountriesList />
  </ThemeProvider>
);

export default Root;
