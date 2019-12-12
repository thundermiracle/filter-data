import { listCombiner, compose, transduce, filter } from './lib/utils';
import { DataObject, SearchCondition } from './lib/types';
import filtersMap from './filters';
import targetValueNull from './prefilters/targetValueNull';

const optionsDefault = { caseSensitive: false, includeNull: false };

/**
 *
 * @param {*array} allData: Array of object
 * @param {*array} searchConditions
 * @param {*object} optionsIn: { caseSensitive: false, includeNull: false }
 */
function filterData(
  allData: DataObject[],
  searchConditions: SearchCondition[],
  optionsIn = {},
): DataObject[] {
  const options = { ...optionsDefault, ...optionsIn };

  const dataFilters = searchConditions.map(searchCondition => {
    // get partial function
    const normalFilter = filtersMap[searchCondition.type];

    // operate before normal predicator if targetValue is null
    const predicator = targetValueNull(
      options.includeNull,
      normalFilter,
      searchCondition,
      options.caseSensitive,
    );

    return filter(predicator);
  });

  const filtersTrans = compose(...dataFilters);

  return transduce(filtersTrans, listCombiner as any, [], allData);
}

export default filterData;
