/*
 * EmailSignUp Messages
 *
 * This contains all the text for the EmailSignUp component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.EmailSignUp';

export default defineMessages({
  textFieldMessage: {
    id: `${scope}.textFieldMessage.message`,
    defaultMessage: 'SIGN UP FOR NEWS AND SPECIAL OFFERS',
  },
  // emailFieldDefaultMessage: {
  //   id: `${scope}.emailFieldDefaultMessage.message`,
  //   defaultMessage: 'YOUR EMAIL',
  // }
});
