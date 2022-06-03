import SearchType from './SearchType';

export interface FilterDataOption {
  caseSensitive?: boolean;
  includeNull?: boolean;
  offset?: number;
  limit?: number;
}

export interface SearchCondition {
  key: string | string[];
  value: string | number;
  type: SearchType;
}

export interface SearchConditionMultiple {
  key: string | string[] | string[][];
  value?: string | number;
  type: SearchType;
}

export type DataObjectValues = string | number | (string | number)[];
export interface DataObject {
  [key: string]: DataObjectValues;
}

export type DataObjectWithNullValues =
  | string
  | number
  | (string | number)[]
  | undefined
  | null;

export interface DataObjectWithNull {
  [key: string]: DataObjectWithNullValues;
}

export type Predicator = (data: DataObject) => boolean;
