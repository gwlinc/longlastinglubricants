/**
 *
 * AutomotiveCard
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
import AutoImage from './automotive.png';
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
    height: 378,
    maxWidth: 370,
  },
  body: {
    alignSelf: 'end',
    textAlign: 'center',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#ffb300',
    justifyContent: 'center'
  },
  media: {
    overflow: 'visable',
  },
});

function AutomotiveCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} >
          <Img src={AutoImage} />
        </CardMedia>
        <CardContent className={classes.body} >
          <Typography justify="center" gutterBottom variant="h6" component="h2">
            <FormattedMessage {...messages.auto} />
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <FormattedMessage {...messages.body} />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions} >
        <Button size="small" color="primary">
          <FormattedMessage {...messages.shop} />
        </Button>
      </CardActions>
    </Card>
  );
}

AutomotiveCard.propTypes = {};

export default AutomotiveCard;
