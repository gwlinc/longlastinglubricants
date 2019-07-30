/**
 *
 * AutomotiveCard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function AutomotiveCard() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

AutomotiveCard.propTypes = {};

export default AutomotiveCard;
