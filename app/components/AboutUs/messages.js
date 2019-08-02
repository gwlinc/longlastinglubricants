/*
 * AboutUs Messages
 *
 * This contains all the text for the AboutUs component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.AboutUs';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the AboutUs component!',
  },
});
