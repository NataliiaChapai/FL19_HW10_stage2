import { describe, test, expect } from 'vitest';
import { User } from './hooks';

describe('Class User', () => {
    test('has a updateEmail property', async () => {
        expect(await new User()).toHaveProperty('updateEmail');
    })
    test('updateEmail is a metod', async () => {
        const user = await new User()
        expect(typeof user.updateEmail).toBe('function');
    })
    test('updateEmail metod should return "undefined"', async () => {
        const user = await new User()
        expect(user.updateEmail('email')).toBeUndefined();
    })
    test('has a removeEmail property', async () => {
        expect(await new User()).toHaveProperty('removeEmail');
    })
    test('removeEmail is a metod', async () => {
        const user = await new User()
        expect(typeof user.removeEmail).toBe('function');
    })
    test('removeEmail metod should return "undefined"', async () => {
        const user = await new User()
        expect(user.removeEmail('email')).toBeUndefined();
    })
})