import { describe, test, expect } from 'vitest';
import { getValidNumbers, valudateInput } from './app';

describe('valudateInput function', () => {
    const message = 'Invalid input. You must enter valid numbers.';
    test(`should return ${message}, if argument equil invalid`, () => {
        expect(valudateInput('invalid')).toBe(message);
    });
    test('should return 7, if argument equils 7', () => {
        expect(valudateInput('7')).toBe('Result: 7');
    });
    test('should return 1, if argument equils 1', () => {
        expect(valudateInput(1)).toBe('Result: 1');
    });
})

describe('valudateInput function', () => {
    const message = 'Invalid input. You must enter valid numbers.'
    test(`should return ${message}, if arguments equil invalid`, () => {
        expect(valudateInput('invalid')).toBe(message);
    });
})

describe('getValidNumbers function', () => {
    test('should return 6, if argument equils [2, 4]', () => {
        expect(getValidNumbers(['2', '4'])).toBe('6');
    });
    test('should return 10, if argument equils [3, 7]', () => {
        expect(getValidNumbers(['3', '7'])).toEqual('10');
    });
})