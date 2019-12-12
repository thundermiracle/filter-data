import greater from './greater';
import equal from './equal';
import { complement, allPass } from '../lib/utils';
import targetValueArray from '../prefilters/targetValueArray';

/**
 * less check for data
 *
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} caseSensitive: false
 * @param {*DataObject} data
 */
const less = targetValueArray(
  allPass([complement(greater), complement(equal)]),
);

export default less;
