import { describe, test, expect } from 'vitest';
import { transformToNumber } from './numbers';

const three = 3;
const fifteen = 15;

describe('transformToNumber function', () => {
    test('shoukd be equils 15, if argument is 15', () => {
        expect(transformToNumber('15')).toEqual(fifteen);
    });
    test('shoukd be equils 1, if argument is true', () => {
        expect(transformToNumber(true)).toEqual(1);
    });
    test('shoukd be equils -15, if argument is -15', () => {
        expect(transformToNumber(-three)).toEqual(-three);
    });
    test('shoukd be equils NaN, if argument is not a number', () => {
        expect(transformToNumber('NaN')).toBeNaN();
    });

})
