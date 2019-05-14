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
import SignUpMessage from './SignUpMessage';
import Button from './Button';

const EmailWrapper = styled.div`
  background-color: goldenrod;
  display: flex;
  flex-direction: row;
  postion: absolute;
  text-align: center;
  width: 100%;
  padding: 5px;
`;

function EmailSignUp() {
  return (
    <EmailWrapper>
      <SignUpMessage>
        <b>
          <FormattedMessage {...messages.textFieldMessage} />
        </b>
      </SignUpMessage>
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
        <Button>
          <input type="submit" value=">" />
        </Button>
      </Form>
    </EmailWrapper>
  );
}

EmailSignUp.propTypes = {};

export default EmailSignUp;
