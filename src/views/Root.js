import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'assets/styles/GlobalStyle';
import Countries from './Countries';
import Header from 'components/Header/Header';
import { theme } from 'assets/styles/theme';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Countries />
    </ThemeProvider>
  );
};

export default Root;
