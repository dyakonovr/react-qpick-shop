import { FormValuesObject } from "../../catalog.types";

export const getDirtyValues = (data: FormValuesObject) => {
  let filterKey: keyof FormValuesObject;
  for (filterKey in data) {
    const filter = data[filterKey];

    if (Array.isArray(filter) && filter.length === 0) {
      delete data[filterKey];
      continue;
    }

    if (filter instanceof Object) {
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
    if (typeof obj[key] === 'number' && obj[key] === 0) {
      delete obj[key];
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      removeInvalidFieldsFromObject(obj[key] as NestedObject);
      if (Object.keys(obj[key]).length === 0) {
        delete obj[key];
      }
    }
  }
}
