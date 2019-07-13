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

export function evaluateRoman(str) {
  if (!str) return 0;

  const arr = str.split('');
  const numbers = _.map(arr, item => romanCharToInt(item));
  return _.reduce(numbers, (sum, item) => sum + item);
}
