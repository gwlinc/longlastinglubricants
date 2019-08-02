/**
 *
 * CommercialCard
 *
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';
import Commercial from './ag.png';
import Img from './Img';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import messages from './messages';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '24px',
  },
  card: {
    display: 'grid',
    gridTemplateRows: '1fr auto',
    gridGap: '8px',
    height: 400,
    maxWidth: 370,
  },
  body: {
    alignSelf: 'end',
    textAlign: 'center',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop: '30',
  },
});

function CommercialCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia>
          <Img src={Commercial} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            <FormattedMessage {...messages.commercial} />
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <FormattedMessage {...messages.body} />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{ backgroundColor: '#ffb300', justifyContent: 'center' }}
      >
        <Button size="small" color="primary">
          <FormattedMessage {...messages.shop} />
        </Button>
      </CardActions>
    </Card>
  );
}

CommercialCard.propTypes = {};

export default CommercialCard;
