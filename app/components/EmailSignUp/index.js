/**
 *
 * EmailSignUp
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Form from './Form';
import Input from './Input';

const EmailWrapper = styled.div`
  background-color: goldenrod;
  display: flex;
  flex-direction: row;
  postion: absolute;
  text-align: center;
  width: 100%;
`;

function EmailSignUp() {
  return (
    <EmailWrapper>
      <section>
        <FormattedMessage {...messages.textFieldMessage} />
      </section>
      <Form>
        <label htmlFor="email">
          {/* <FormattedMessage {...messages.emailFieldDefaultMessage} /> */}
          <Input
            id="email"
            type="text"
            placeholder="YOUR EMAIL"
            // value={username}
            // onChange={onChangeUsername}
          />
        </label>
      </Form>
    </EmailWrapper>
  );
}

EmailSignUp.propTypes = {};

export default EmailSignUp;
