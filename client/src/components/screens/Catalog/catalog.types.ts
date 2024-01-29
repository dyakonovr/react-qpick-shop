export type FormValuesType = number | string | number[] | string[];

export type FormValuesObject = {
  [key: string]: FormValuesType | { [key: string]: FormValuesType };
};
