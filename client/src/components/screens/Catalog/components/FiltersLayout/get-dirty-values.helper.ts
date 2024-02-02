import { FormValuesObject } from '../../types/catalog.types';

type DirtyValuesConfig = {
  tryToParseNumbersInArray?: boolean;
};

export const getDirtyValues = (
  data: FormValuesObject,
  config?: DirtyValuesConfig
) => {
  for (let filterKey in data) {
    const filter = data[filterKey];

    if (Array.isArray(filter)) {
      if (filter.length === 0) {
        delete data[filterKey];
        continue;
      }

      if (config?.tryToParseNumbersInArray) {
        data = {
          ...data,
          [filterKey]: filter.map((el) => (isNaN(+el) ? el : +el)),
        };
        continue;
      }
    }

    if (filter instanceof Object) {
      // @ts-ignore
      removeInvalidFieldsFromObject(filter);

      if (Object.keys(filter).length === 0) {
        delete data[filterKey];
        continue;
      }
    }

    if (!filter) {
      delete data[filterKey];
      continue;
    }
  }

  return data;
};

type NestedObject = {
  [key: string]: number | NestedObject;
};

// Удаляю пустые поля из объекта
function removeInvalidFieldsFromObject(obj: NestedObject): void {
  for (const key in obj) {
    if (typeof obj[key] === 'object' && !!obj[key]) {
      removeInvalidFieldsFromObject(obj[key] as NestedObject);
      if (Object.keys(obj[key]).length === 0) {
        delete obj[key];
      }
    } else if (!obj[key]) {
      delete obj[key];
    }
  }
}
