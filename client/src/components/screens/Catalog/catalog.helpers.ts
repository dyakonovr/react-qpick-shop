import { FormValuesObject } from './catalog.types';

export function configurateUrlWithFilters(
  obj: FormValuesObject,
  isInnerObject: boolean = false
) {
  try {
    if (Object.keys(obj).length === 0) return '';

    let key: keyof typeof obj;
    let result = '';

    for (key in obj) {
      const value = obj[key];

      if ((Array.isArray(value) || value instanceof Object) && isInnerObject) {
        throw new Error(
          'Некорректный объект фильтров. Обработка 3 и более уровней вложенности объекта невозможна'
        );
      }

      if (Array.isArray(value)) {
        result += `${key}[]=${value.join(',')}&`;
        continue;
      }

      if (value instanceof Object) {
        // Только один уровень вложенности
        result += `${key}{}=${configurateUrlWithFilters(value, true)}&`;
        continue;
      }

      if (isInnerObject) result += `${key}:${value},`;
      else result += `${key}=${value}&`;
    }

    return result.slice(0, result.length - 1);
  } catch (error) {
    console.log(error);
    return '';
  }
}

export function parseUrlWithFilters(url: string): FormValuesObject {
  if (!url) return {};

  try {
    const array = getNormalStringFromUrl(url).split('&');
    let result = {};

    for (let i = 0; i < array.length; i++) {
      const [filterKey, filterString] = array[i].split('=');

      if (filterKey.includes('[]')) {
        result = {
          ...result,
          [filterKey.slice(0, filterKey.length - 2)]: filterString.split(','),
        };
        continue;
      }

      if (filterKey.includes('{}')) {
        const keysAndValues = filterString.split(',');
        let obj = {};

        for (let j = 0; j < keysAndValues.length; j++) {
          const [key, value] = keysAndValues[j].split(':');
          obj = {
            ...obj,
            [key]: value,
          };
        }

        result = {
          ...result,
          [filterKey.slice(0, filterKey.length - 2)]: obj,
        };
        continue;
      }

      result = {
        ...result,
        [filterKey]: filterString,
      };
    }

    return result;
  } catch (error) {
    console.log(error);
    return {};
  }
}

function getNormalStringFromUrl(url: string) {
  return url
    .replace(/%5B/g, '[')
    .replace(/%5D/g, ']')
    .replace(/%7B/g, '{')
    .replace(/%7D/g, '}')
    .replace(/%3A/g, ':')
    .replace(/%2C/g, ',')
    .slice(1); // delete "?"
}
