import SearchType from './SearchType';

export interface SearchCondition {
  name: string;
  value: string | number;
  type: SearchType;
}

export interface DataObject {
  [key: string]: string | number | (string | number)[];
}

export interface DataObjectWithNull {
  [key: string]: string | number | (string | number)[] | undefined | null;
}

export type Predicator = (
  searchConditon: SearchCondition,
  caseSensitive: boolean,
  data: DataObject,
) => boolean;
