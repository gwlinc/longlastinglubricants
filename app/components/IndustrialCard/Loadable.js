/**
 *
 * Asynchronously loads the component for IndustrialCard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
