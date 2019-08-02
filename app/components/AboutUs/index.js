/**
 *
 * AboutUs
 *
 */

import React from 'react';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import { FormattedMessage } from 'react-intl';
import Img from './Img';
import HQ from './HQ.jpg';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import messages from './messages';

const Input = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

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
  messageText: {
    textAlign: 'justify',
    justifyContent: 'center',
    color: 'white',
    margin: 40,
    textJustify: 'interword',
  },
  signUpMessage: {
    textAlign: 'center',
    padding: 12,
    color: '#1a237e',
    paddingLeft: 30,
    fontWeight: 'bold',
  },
  input: {
    padding: 6,
    paddingLeft: 30,
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: 35,
  },
}));

function AboutUs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.box} style={{ backgroundColor: '#ffb300' }}>
        <Grid
          container
          className={classes.grid}
          spacing={0}
          style={{ backgroundColor: '#1a237e' }}
        >
          <Grid item xs={5}>
            <Img src={HQ} />
          </Grid>
          <Grid item xs={7}>
            <Typography
              className={classes.messageText}
              variant="body2"
              component="p"
            >
              <FormattedMessage {...messages.message} />
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={7}>
            <Typography className={classes.signUpMessage} variant="h6">
              <FormattedMessage {...messages.signUp} />
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <FormControl className={classes.input}>
              <Input defaultValue="YOUR EMAIL" />
            </FormControl>
          </Grid>
          {/* <Button item xs={3} variant="contained" color="primary" className={classes.button}>
            <Icon className={classes.rightIcon} > </Icon>
          </Button> */}
        </Grid>
      </Box>
    </div>
  );
}

AboutUs.propTypes = {};

export default AboutUs;
