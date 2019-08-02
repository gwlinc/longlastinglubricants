/*
 * AboutUs Messages
 *
 * This contains all the text for the AboutUs component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.AboutUs';

export default defineMessages({
  message: {
    id: `${scope.message}`,
    defaultMessage: `Prolong Super Lubricants, a brand of GoldenWest Lubricants Inc., is the perfect example of an American success story. In the early 1990's, the founders started in the back of a small shop, packing the product themselves. Today, millions of bottles of Prolong products have been sold all over the world.`
  },
  signUp: {
    id: `${scope.signUp}`,
    defaultMessage: 'SIGN UP FOR NEWS & SPECIAL OFFERS',
  }
});
