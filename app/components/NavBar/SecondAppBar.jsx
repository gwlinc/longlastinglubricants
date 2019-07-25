import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
    height: 45,
  },
  grow: {
    flexGrow: 1,
    textAlign: 'center',
  },
};

const SecondAppBar = props => {
  const { classes } = props;
  const products = [
    'PRODUCTS',
    'WARRANTY',
    'REGISTER WARRANTY',
    'GOLDENWEST',
    'ABOUT',
  ];
  return (
    <AppBar position="static" color="secondary" className={classes.root}>
      <Toolbar variant="dense">
        {products.map(product => (
          <Button className={classes.grow}>{product}</Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

SecondAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SecondAppBar);
