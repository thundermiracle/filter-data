import SearchType from './SearchType';

export interface SearchCondition {
  name: string;
  value: string | number;
  type: SearchType;
}

export interface DataObject {
  [key: string]: string | number | (string | number)[] | undefined;
}

export type DataPredicator = (data: DataObject) => boolean;
