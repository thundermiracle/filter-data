/* eslint-disable @web-configs/typescript/prefer-pascal-case-enums */
enum SearchType {
  EQ = 'equal',
  GT = 'greater',
  GTE = 'greaterorequal',
  LT = 'less',
  LTE = 'lessorequal',
  LK = 'like',
  NE = 'notequal',
  NLK = 'notlike',
}

export default SearchType;
