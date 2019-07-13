import _ from 'lodash';
import {
  romanCharToInt,
  stripNonRoman,
  extractRoman,
  evaluateRoman,
} from '../index';

function testRepetitionsOfNumeralByAddition(char, charValue, debug = false) {
  for (let len = 0; len <= 100; len += 1) {
    const str = _.repeat(char, len);
    const expectedValue = len * charValue;

    if (debug) console.log(`String: ${str}\nValue:${expectedValue}`);

    expect(evaluateRoman(str)).toEqual(expectedValue);
  }
}

describe('index.js', () => {
  describe('romanCharToInt', () => {
    it('should evauluate an invalid input to 0', async () => {
      expect(romanCharToInt()).toEqual(0);
      expect(romanCharToInt(null)).toEqual(0);
      expect(romanCharToInt('asdf')).toEqual(0);
    });
    it('should evauluate a non roman to 0', async () => {
      expect(romanCharToInt('K')).toEqual(0);
    });
    it('should evauluate I or i to 1', async () => {
      expect(romanCharToInt('I')).toEqual(1);
      expect(romanCharToInt('i')).toEqual(1);
    });
    it('should evauluate V or v to 5', async () => {
      expect(romanCharToInt('V')).toEqual(5);
      expect(romanCharToInt('v')).toEqual(5);
    });
    it('should evauluate X or x to 10', async () => {
      expect(romanCharToInt('X')).toEqual(10);
      expect(romanCharToInt('x')).toEqual(10);
    });
    it('should evauluate L or l to 50', async () => {
      expect(romanCharToInt('L')).toEqual(50);
      expect(romanCharToInt('l')).toEqual(50);
    });
    it('should evauluate C or c to 100', async () => {
      expect(romanCharToInt('C')).toEqual(100);
      expect(romanCharToInt('c')).toEqual(100);
    });
    it('should evauluate D or d to 500', async () => {
      expect(romanCharToInt('D')).toEqual(500);
      expect(romanCharToInt('d')).toEqual(500);
    });
    it('should evauluate M or m to 1000', async () => {
      expect(romanCharToInt('M')).toEqual(1000);
      expect(romanCharToInt('m')).toEqual(1000);
    });
  });

  describe('stripNonRoman', () => {
    it('should return the string if it is all roman', async () => {
      expect(stripNonRoman('IVXLCDM')).toEqual('IVXLCDM');
    });

    it('should remove all non roman chars from string', async () => {
      expect(stripNonRoman('IVXLCDMK')).toEqual('IVXLCDM');
    });
  });

  describe('extractRoman', () => {
    it('lower case romans are returned as upper case', async () => {
      expect(extractRoman('ivxlcdmk')).toEqual('IVXLCDM');
      expect(extractRoman('ivxlcdmkivxlcdmkivxlcdmkivxlcdmkivxlcdmkivxlcdmk')).toEqual('IVXLCDMIVXLCDMIVXLCDMIVXLCDMIVXLCDMIVXLCDM');
    });
  });

  describe('evaluateRoman', () => {
    describe('invalid', () => {
      it('should return 0 for a non roman', async () => {
        expect(evaluateRoman('a')).toEqual(0);
      });
      it('should return 0 for an empty string', async () => {
        expect(evaluateRoman('')).toEqual(0);
      });
      it('should return 0 for an undefined string', async () => {
        expect(evaluateRoman(undefined)).toEqual(0);
      });
    });

    describe('Repetitions of: I', () => {
      it('should return 2 for II or ii', async () => {
        expect(evaluateRoman('II')).toEqual(2);
        expect(evaluateRoman('ii')).toEqual(2);
      });

      it('should add the number of i to 100 length and return the correct value', async () => {
        testRepetitionsOfNumeralByAddition('i', 1, false);
      });
    });

    describe('Repetitions of: V', () => {
      it('should return 10 for VV or vv', async () => {
        expect(evaluateRoman('VV')).toEqual(10);
        expect(evaluateRoman('vv')).toEqual(10);
      });

      it('should add the number of V to 100 length and return the correct value', async () => {
        testRepetitionsOfNumeralByAddition('V', 5);
      });
    });

    describe('Repetitions of: X', () => {
      it('should return 20 for XX or xx', async () => {
        expect(evaluateRoman('XX')).toEqual(20);
        expect(evaluateRoman('xx')).toEqual(20);
      });
      it('should add the number of X to 100 length and return the correct value', async () => {
        testRepetitionsOfNumeralByAddition('X', 10);
      });
    });

    describe('Repetitions of: L', () => {
      it('should return 100 for LL or ll', async () => {
        expect(evaluateRoman('LL')).toEqual(100);
        expect(evaluateRoman('ll')).toEqual(100);
      });
      it('should add the number of L to 100 length and return the correct value', async () => {
        testRepetitionsOfNumeralByAddition('L', 50);
      });
    });

    describe('Repetitions of: C', () => {
      it('should return 200 for CC or cc', async () => {
        expect(evaluateRoman('CC')).toEqual(200);
        expect(evaluateRoman('cc')).toEqual(200);
      });
      it('should add the number of C to 100 length and return the correct value', async () => {
        testRepetitionsOfNumeralByAddition('C', 100);
      });
    });

    describe('Repetitions of: D', () => {
      it('should return 1000 for DD or dd', async () => {
        expect(evaluateRoman('DD')).toEqual(1000);
        expect(evaluateRoman('dd')).toEqual(1000);
      });
      it('should add the number of D to 100 length and return the correct value', async () => {
        testRepetitionsOfNumeralByAddition('D', 500);
      });
    });

    describe('Repetitions of: M', () => {
      it('should return 2000 for MM or mm', async () => {
        expect(evaluateRoman('MM')).toEqual(2000);
        expect(evaluateRoman('mm')).toEqual(2000);
      });
      it('should add the number of M to 100 length and return the correct value', async () => {
        testRepetitionsOfNumeralByAddition('M', 1000);
      });
    });
  });
});
