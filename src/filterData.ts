import { listCombiner, compose, transduce, filter, curry } from './lib/utils';
import { DataObject, SearchCondition } from './lib/types';
import { filtersMap, nullable } from './filters';

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

    // normal predicator
    // as any to prevent type check error
    const curriedFilterPredicator = curry(normalFilter)(
      searchCondition,
      options.caseSensitive,
    ) as any;

    // operate before normal predicator if targetValue is null
    const curriedIncludeNull = curry(nullable);

    const predicator = curriedIncludeNull(
      searchCondition,
      options.includeNull,
      curriedFilterPredicator,
    );

    return filter(predicator);
  });

  const filtersTrans = compose(...dataFilters);

  return transduce(filtersTrans, listCombiner as any, [], allData);
}

export default filterData;
