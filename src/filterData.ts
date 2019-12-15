import {
  listCombiner,
  compose,
  transduce,
  filter,
  curry,
  anyPass,
} from './lib/utils';
import {
  DataObject,
  SearchCondition,
  FilterDataOption,
  SearchConditionMultiple,
  Predicator,
} from './lib/types';
import filtersMap from './filters';
import targetValueNull from './prefilters/targetValueNull';

const optionsDefault: FilterDataOption = {
  caseSensitive: false,
  includeNull: false,
};

function makeSinglePredicator(
  searchCondition: SearchCondition,
  options: FilterDataOption,
  curriedFilter: Function,
): Predicator {
  const partialPredicator = curriedFilter(
    searchCondition,
    options.caseSensitive!,
  );

  const predicator = targetValueNull(
    options.includeNull!,
    searchCondition,
    partialPredicator,
  );

  return predicator;
}

/**
 *
 * @param {*array} allData: Array of object
 * @param {*array} searchConditions
 * @param {*object} optionsIn: { caseSensitive: false, includeNull: false }
 */
function filterData(
  allData: DataObject[],
  searchConditions: SearchConditionMultiple[],
  optionsIn: FilterDataOption = {},
): DataObject[] {
  const options = { ...optionsDefault, ...optionsIn };

  const dataFilters = searchConditions.map(searchCondition => {
    const { key, type } = searchCondition;

    // get partial function
    const curriedFilter = curry(filtersMap[type]);

    // target key is one
    let predicator;
    if (typeof key === 'string') {
      predicator = makeSinglePredicator(
        searchCondition as SearchCondition,
        options,
        curriedFilter,
      );
    } else {
      // or search for multiple keys
      predicator = anyPass(
        key.map(oneKey =>
          makeSinglePredicator(
            {
              ...searchCondition,
              key: oneKey,
            },
            options,
            curriedFilter,
          ),
        ),
      );
    }

    return filter(predicator);
  });

  const filtersTrans = compose(...dataFilters);

  return transduce(filtersTrans, listCombiner as any, [], allData);
}

export default filterData;
