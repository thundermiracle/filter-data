import SearchType from '../constant/SearchType';

import equalMaker from './equal';
import greaterMaker from './greater';
import greaterEqualMaker from './greaterequal';
import lessMaker from './less';
import lessEqualMaker from './lessequal';
import likeMaker from './like';
import notEqualMaker from './notequal';
import notLikeMaker from './notlike';

export default {
  [SearchType.EQ]: equalMaker,
  [SearchType.GT]: greaterMaker,
  [SearchType.GTE]: greaterEqualMaker,
  [SearchType.LT]: lessMaker,
  [SearchType.LTE]: lessEqualMaker,
  [SearchType.LK]: likeMaker,
  [SearchType.NE]: notEqualMaker,
  [SearchType.NLK]: notLikeMaker,
};
