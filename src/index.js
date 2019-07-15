import _ from 'lodash';

export function test() { }

export function romanCharToInt(char) {
  switch (_.toLower(char)) {
    case 'i': return 1;
    case 'v': return 5;
    case 'x': return 10;
    case 'l': return 50;
    case 'c': return 100;
    case 'd': return 500;
    case 'm': return 1000;
    default: return 0;
  }
}

export function stripNonRoman(str) {
  return _.replace(str, /[^IVXLCDM]/gi, '');
}

export function extractRoman(str) {
  return _.toUpper(stripNonRoman(str));
}

export function evaluateRoman(str, debug = false) {
  if (!str) return 0;

  const arr = str.split('');
  const numbers = _.map(arr, item => romanCharToInt(item));


  const splitParts = _.reduce(
    numbers,
    (acc, currentItem) => {
      if (acc.length === 0) {
        acc.push([currentItem]);
      } else if (_.last(_.last(acc)) < currentItem) {
        _.last(acc).push(currentItem);
      } else {
        acc.push([currentItem]);
      }
      return acc;
    },
    [],
  );

  const negativesComputed = _.map(splitParts, (part) => {
    let i = 0;
    let value = 0;
    while (i < part.length) {
      value = part[i] - value;
      i += 1;
    }
    return value;
  });

  const evaluatedValue = _.reduce(negativesComputed, (sum, item) => sum + item);

  if (debug) console.log({ str, splitParts, evaluatedValue });

  return evaluatedValue;
}
