import type { F } from 'ts-toolbelt';
import type { SearchCondition, DataObject } from '../lib/types';
type PredicatorWithOptions = (searchCondition: SearchCondition, caseSensitive: boolean, data: DataObject) => boolean;
/**
 * exclude data if targetValue is an array
 *
 * @param {*function} filterCallback
 * @param {*object} searchCondition: { name, value }
 * @param {*boolean} caseSensitive: false
 * @param {*DataObject} data
 */
declare const excludeIfTargetValueIsArray: (predicator: PredicatorWithOptions, searchCondition: SearchCondition, caseSensitive: boolean, data: DataObject) => boolean;
declare const targetValueArray: F.Curry<typeof excludeIfTargetValueIsArray>;
export default targetValueArray;
