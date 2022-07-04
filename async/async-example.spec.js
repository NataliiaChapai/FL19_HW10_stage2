import { describe, test, expect } from 'vitest';
import {generateToken, generateTokenPromise} from './async-example';
import { User } from './hooks/hooks'

describe('GenerateToken function', () => {
    test('shoul return undefined', async () => {
    const result = await generateToken('nata@mail', email => email)
    expect(result).toBeUndefined();
    })
    test('shoul return undefined (use hooks)', async () => {
        const user = new User();
        const result = await generateToken('nata@mail', user.updateEmail('nata@mail'))
        expect(result).toBeUndefined();
    })
    test('shoul return not null', async () => {
        const result = await generateToken('nata@mail', email => email)
        expect(result).not.toBeNull();
    })
    test('shoul return not null (use hooks)', async () => {
        const user = new User();
        const result = await generateToken('nata@mail', user.updateEmail())
        expect(result).not.toBeNull();
    })
})

describe('GenerateTokenPromise', () => {
    test('should return not undefined token', () => {
        return generateTokenPromise('nata@mail').then(data => {
            expect(data).not.toBeUndefined();    
        })
    })
    test('should return not undefined token (use hooks)', () => {
        const user = new User();
        return generateTokenPromise(user.email).then(data => {
            expect(data).not.toBeUndefined();    
        })
    })
    test('should return not null token', () => {
        return generateTokenPromise('nata@mail').then(data => {
            expect(data).not.toBeNull();    
        })
    })
    test('should return not empty token', () => {
        return generateTokenPromise('nata@mail').then(data => {
            expect(data).not.toBe('');    
        })
    })
    test('should return token, which length is equil or greater than 132 charapters', () => {
        const tokenLength = 132;
        return generateTokenPromise('nata@mail').then(data => {
            expect(data.length).toBeGreaterThanOrEqual(tokenLength);    
        })    
    })
})