import like from './like';
import { complement } from '../lib/utils';

/**
 * not like check for data
 *
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} caseSensitive: false
 * @param {*DataObject} data
 */
const notLike = complement(like);

export default notLike;
