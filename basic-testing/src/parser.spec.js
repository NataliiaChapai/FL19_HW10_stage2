import { describe, test, expect } from 'vitest';
import { extractNumbers } from './parser';

const seven = 7;
const three = 3;
    
describe('ExtractNumbers function', () => {
    test('should be return array [7, 3]', () => { 
    const formData = {
        get(value) {
            if (value === 'num1') {
                return seven;
            } 
            if (value === 'num2') {
                return three;
            }
        }
    }   
    expect(extractNumbers(formData)).toEqual([seven, three]);
    })
    test('should be return array [0, 1]', () => { 
        const formData = {
            get(value) {
                if (value === 'num1') {
                    return '0';
                } 
                if (value === 'num2') {
                    return '1';
                }
            }
        }   
        expect(extractNumbers(formData)).toEqual(['0', '1']);
        })
})
