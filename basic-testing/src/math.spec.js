import { describe, test, expect } from 'vitest';
import { add } from './math';

describe('add function', () => {
    const fifteen = 15;
    const tf = 25;
    const ten = 10;

    test('should be equil 1, if additions equil 0 and 1', () => {
        expect(add([0, 1])).toBe(1);
    })
    test('should be equil 0, if additions equil -15 and 15', () => {
        expect(add([-fifteen, fifteen])).toBe(0);
    })
    test('should be equil -10, if additions equil -25 and 15', () => {
        expect(add([-tf, fifteen])).toBe(-ten);
    })
})
