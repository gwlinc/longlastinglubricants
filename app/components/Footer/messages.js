/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Footer';

export default defineMessages({
  addressMessage: {
    id: `${scope}.address.message`,
    defaultMessage: '1937 Mount Vernon Avenue, CA 91768',
  },
  phoneNumberTollFreeMessage: {
    id: `${scope}.phoneNumberTollFree.message`,
    defaultMessage: `
      Toll Free: {tollFreeNumber} Fax: 1-(800)-966-5823
    `,
  },
  phoneNumberInternationalMessage: {
    id: `${scope}.phoneNumberInternational.message`,
    defaultMessage: `
      International: {internationalNumber} Fax: 1-(909)-865-4467
    `,
  },
  hoursMessage: {
    id: `${scope}.hours.message`,
    defaultMessage: 'Hours of Operation: 8:00 am - 5:00 pm PDT/PST',
  },
  copyRightsMessage: {
    id: `${scope}.copyRights.message`,
    defaultMessage: `	© 2019 {goldenWestLink}`,
  },
});
