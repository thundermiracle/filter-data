import { FilterDataOption, SearchConditionMultiple } from './lib/types';
/**
 *
 * @param {*array} allData: Array of object
 * @param {*array} searchConditions
 * @param {*object} optionsIn: { caseSensitive: false, includeNull: false, offset: undefined, limit: undefined }
 */
declare function filterData<T>(allData: ReadonlyArray<T>, searchConditions: SearchConditionMultiple[], optionsIn?: FilterDataOption): T[];
export default filterData;
