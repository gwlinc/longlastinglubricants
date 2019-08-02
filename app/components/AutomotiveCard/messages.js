/*
 * AutomotiveCard Messages
 *
 * This contains all the text for the AutomotiveCard component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.AutomotiveCard';

export default defineMessages({
  auto: {
    id: `${scope}.auto`,
    defaultMessage: 'Automotive',
  },
  body: {
    id: `${scope}.body`,
    defaultMessage: `Formulated with Prolong's AFMT advanced technology`,
  },
  shop: {
    id: `${scope}.shop`,
    defaultMessage: 'SHOP NOW',
  },
});
