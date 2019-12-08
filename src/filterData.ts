import * as R from 'ramda';

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

  const filters = searchConditions.map(searchCondition => {
    const filterMaker = filterMakerMap[searchCondition.type];

    return R.filter(
      filterMaker(searchCondition, options.includeNull, options.caseSensitive),
    );
  });

  const filtersTrans = R.compose(...filters);

  return R.transduce(filtersTrans, R.flip(R.append), [])(allData);
}

export default filterData;
