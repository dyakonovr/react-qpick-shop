interface IDirtyValuesConfig {
  tryToParseNumbersInArray?: boolean;
}

export const getDirtyValues = <T extends object>(
  data: T,
  config?: IDirtyValuesConfig
) => {
  for (const filterKey in data) {
    const filter = data[filterKey];

    if (Array.isArray(filter)) {
      if (filter.length === 0) {
        delete data[filterKey];
        continue;
      }

      if (config?.tryToParseNumbersInArray) {
        data = {
          ...data,
          [filterKey]: filter.map((el) => (isNaN(+el) ? el : +el))
        };
        continue;
      }
    }

    if (filter instanceof Object) {
      removeInvalidFieldsFromObject(filter as INestedObject);

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

interface INestedObject {
  [key: string]: number | string | number[] | string[] | INestedObject;
}

// Удаляю пустые поля из объекта
function removeInvalidFieldsFromObject(obj: INestedObject) {
  for (const key in obj) {
    if (typeof obj[key] === "object" && !!obj[key]) {
      removeInvalidFieldsFromObject(obj[key] as INestedObject);
      if (Object.keys(obj[key]).length === 0) {
        delete obj[key];
      }
    } else if (!obj[key]) {
      delete obj[key];
    }
  }
}
