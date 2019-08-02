/*
 * CommercialCard Messages
 *
 * This contains all the text for the CommercialCard component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.CommercialCard';

export default defineMessages({
  commercial: {
    id: `${scope}.commercial`,
    defaultMessage: 'Commercial',
  },
  body: {
    id: `${scope}.body`,
    defaultMessage: 'Check out our commercial fleet family of products',
  },
  shop: {
    id: `${scope}.shop`,
    defaultMessage: 'SHOP NOW',
  },
});
