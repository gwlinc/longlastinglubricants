/**
 *
 * Asynchronously loads the component for RacingCard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
