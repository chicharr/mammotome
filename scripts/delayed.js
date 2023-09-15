// eslint-disable-next-line import/no-cycle
import { sampleRUM, fetchPlaceholders, toCamelCase } from './lib-franklin.js';

import { loadMartechDelayed, loadMartechLazy } from './neutrino.js';

document.dispatchEvent(new Event('franklin.delayed_begin'));

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
try {
  await fetchPlaceholders();
} catch (error) { /* empty */ }

await loadMartechDelayed({sampleRUM, toCamelCase});
document.dispatchEvent(new Event('franklin.delayed_completed'));
