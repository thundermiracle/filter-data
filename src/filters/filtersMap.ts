import SearchType from '../lib/SearchType';

import equal from './equal';
import greater from './greater';
import greaterOrEqual from './greaterOrEqual';
import less from './less';
import lessOrEqual from './lessOrEqual';
import like from './like';
import notEqual from './notEqual';
import notLike from './notLike';

import type { FilterFunction } from '../lib/types';

const filtersMap: Record<SearchType, FilterFunction> = {
  [SearchType.EQ]: equal,
  [SearchType.GT]: greater,
  [SearchType.GTE]: greaterOrEqual,
  [SearchType.LT]: less,
  [SearchType.LTE]: lessOrEqual,
  [SearchType.LK]: like,
  [SearchType.NE]: notEqual,
  [SearchType.NLK]: notLike,
};

export default filtersMap;
