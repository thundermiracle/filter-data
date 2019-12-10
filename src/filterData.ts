import { listCombiner, compose, transduce, filter } from './utils/utils';
import filterMakerMap from './filters/filterMakerMap';
import { DataObject, SearchCondition } from './constant/types';

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
    const filterMaker = filterMakerMap[searchCondition.type];

    return filter(
      filterMaker(searchCondition, options.includeNull, options.caseSensitive),
    );
  });

  const filtersTrans = compose(...dataFilters);

  return transduce(filtersTrans, listCombiner as any, [], allData);
}

export default filterData;
