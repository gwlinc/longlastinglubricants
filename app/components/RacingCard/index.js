/**
 *
 * RacingCard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function RacingCard() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

RacingCard.propTypes = {};

export default RacingCard;
