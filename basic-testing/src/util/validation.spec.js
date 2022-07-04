import { describe, test, expect } from 'vitest';
import { validateStringNotEmpty, validateNumber } from './validation'


describe('validateStringNotEmpty', () => {
    test('should throw error, if argument equil empty string', () => {
    expect(() => validateStringNotEmpty('')).toThrow();
    });
    test('should throw error, if argument is not a number', () => {
        expect(() => validateNumber('NaN')).toThrow();
    });
})
