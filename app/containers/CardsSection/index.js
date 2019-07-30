/**
 *
 * CardsSection
 *
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AutoCard from '../../components/AutomotiveCard/index';
import IndustrialCard from '../../components/IndustrialCard/index';
import CommercialCard from '../../components/CommercialCard/index';
import RacingCard from '../../components/RacingCard/index';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 25,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function CardsSection() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={5}>
          <Grid item md={3}>
            <AutoCard />
          </Grid>
          <Grid item md={3}>
            <CommercialCard />
          </Grid>
          <Grid item md={3}>
            <IndustrialCard />
          </Grid>
          <Grid item md={3}>
            <RacingCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

CardsSection.propTypes = {};

export default CardsSection;
