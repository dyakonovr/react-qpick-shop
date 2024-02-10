import qs from 'qs';

export function configurateUrlParams<T extends Object>(object: T) {
  return qs.stringify(object, {
    skipNulls: true
  });
}

interface IConfig {
  tryToParseNumbersInArray?: true;
  tryToParseNumbersInObject?: true;
  tryToParsePrimitive?: true;
};

export function parseParamsFromUrl<T extends Object>(
  params: string,
  config: IConfig = {}
) {
  const result = qs.parse(params, { allowDots: true }) as unknown as T; // ¯\_(ツ)_/¯
  if (Object.keys(config).length === 0) return result;
  return getParamsWithConfig<T>(result, config);
}

function getParamsWithConfig<T extends Object>(object: T, config?: IConfig) {
  let key: keyof T;

  for (key in object) {
    const value = object[key];

    if (Array.isArray(value) && config?.tryToParseNumbersInArray) {
      object = {
        ...object,
        [key]: value.map((el) => tryToParseValueInNumber(el)),
      };
      continue;
    } else if (value instanceof Object && config?.tryToParseNumbersInObject) {
      object = {
        ...object,
        [key]: getParamsWithConfig(value, config),
      };
      continue;
    } else if (typeof value === 'string' && config?.tryToParsePrimitive) {
      object = {
        ...object,
        [key]: tryToParseValueInNumber(value),
      };
    }
  }

  return object;
}

function tryToParseValueInNumber(value: string) {
  return isNaN(+value) ? value : +value;
}
