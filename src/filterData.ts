import {
  listCombiner,
  compose,
  transduce,
  filter,
  curry,
  anyPass,
  drop,
  take,
} from './lib/utils';
import filtersMap from './filters';
import targetValueNull from './prefilters/targetValueNull';

import type {
  SearchCondition,
  FilterDataOption,
  SearchConditionMultiple,
  Predicator,
} from './lib/types';

const optionsDefault: FilterDataOption = {
  caseSensitive: false,
  includeNull: false,
};

function makeSinglePredicator(
  searchCondition: SearchCondition,
  options: FilterDataOption,
  curriedFilter: (
    searchCondition: SearchCondition,
    caseSensitive: boolean,
  ) => Predicator,
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
 * @param {*object} optionsIn: { caseSensitive: false, includeNull: false, offset: undefined, limit: undefined }
 */
function filterData<T>(
  allData: ReadonlyArray<T>,
  searchConditions: SearchConditionMultiple[],
  optionsIn: FilterDataOption = {},
): T[] {
  const searchConditionsValNotEmpty = searchConditions.filter(
    ({ value }: SearchConditionMultiple) => value !== '' && value != null,
  );

  // return directly when no conditions available
  if (searchConditionsValNotEmpty.length === 0) {
    return [...allData];
  }

  const options = { ...optionsDefault, ...optionsIn };

  const dataFilters = searchConditionsValNotEmpty.map((searchCondition) => {
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
        key.map((oneKey) =>
          makeSinglePredicator(
            {
              key: oneKey,
              value: searchCondition.value!,
              type: searchCondition.type,
            },
            options,
            curriedFilter,
          ),
        ),
      );
    }

    return filter(predicator);
  });

  // pagination
  if (options.offset != null && options.limit != null) {
    dataFilters.push(drop(options.offset));
    dataFilters.push(take(options.limit));
  }

  const filtersTrans = compose(...dataFilters);

  return transduce(filtersTrans, listCombiner as any, [], allData);
}

export default filterData;
