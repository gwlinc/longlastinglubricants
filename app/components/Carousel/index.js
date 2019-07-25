/**
 *
 * Carousel
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Carousel() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Carousel.propTypes = {};

export default Carousel;
