import { listCombiner, compose, transduce, filter, curry } from './lib/utils';
import { DataObject, SearchCondition } from './lib/types';
import filterMakerMap from './filters/filterMakerMap';

const optionsDefault = { caseSensitive: false, includeNull: false };

/**
 *
 * @param {*array} allData: Array of object
 * @param {*array} searchConditions
 */
function filterData(
  allData: DataObject[],
  searchConditions: SearchCondition[],
  optionsIn = {},
): DataObject[] {
  const options = { ...optionsDefault, ...optionsIn };

  const dataFilters = searchConditions.map(searchCondition => {
    // get partial function
    const filterMaker = filterMakerMap[searchCondition.type];

    // as any to prevent type check error
    const curriedFilterMaker = curry(filterMaker) as any;

    return filter(
      curriedFilterMaker(
        searchCondition,
        options.includeNull,
        options.caseSensitive,
      ),
    );
  });

  const filtersTrans = compose(...dataFilters);

  return transduce(filtersTrans, listCombiner as any, [], allData);
}

export default filterData;
