import React, { Fragment } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import PrimaryAppBar from './PrimaryAppBar';
import SecondAppBar from './SecondAppBar';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#ffb300',
    },
  },
});

const AppWrapper = () => (
  <MuiThemeProvider theme={theme}>
    <Fragment>
      <PrimaryAppBar />
    </Fragment>
    <Fragment>
      <SecondAppBar />
    </Fragment>
  </MuiThemeProvider>
);

export default AppWrapper;
