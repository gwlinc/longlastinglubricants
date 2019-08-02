/**
 *
 * AboutUs
 *
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Img from './Img';
import HQ from './HQ.jpg';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 275,
  },
  box: {
    maxHeight: 275,
    height: '100%',
    paddingTop: 10,
  },
  grid: {
  }
}));

function AboutUs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.box} style={{ backgroundColor: '#ffb300' }}>
          <Grid container className={classes.grid} spacing={0} style={{ backgroundColor: '#1a237e'}}>
            <Grid item xs={5}>
              <Img src={HQ} />
            </Grid>
            <Grid item xs={7}>
              
            </Grid>
          </Grid>
      </Box>
    </div>
  );
}

AboutUs.propTypes = {};

export default AboutUs;
