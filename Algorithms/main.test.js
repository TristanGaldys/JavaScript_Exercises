import { expect, test } from 'vitest';
import {sum} from './Cumulative_Sum';
import { search } from './Binary_Search';
import { LRU } from './LRU';

test('Sum of array', () =>{
    expect(sum([1,3,5,7])).toBe(16);
    expect(sum([-1,-5,-9])).toBe(-15);
});

test('Binary Search', () => {
    const arr = Array(50).fill(0).map((_, i) => i+1, 0)
    expect(search(arr, 25)).toBe(24)
    expect(search(arr, 60)).toBe(-1)
});

test('LRU cache', () => {
    let cache = new LRU(3);
    cache.putItem('a', 1);
    cache.putItem('b', 2);
    cache.putItem('c', 3);
    cache.putItem('d', 4);
    expect(cache.getItem('a')).toBe(1);
    expect(cache.getItem('b')).toBe(2);
    expect(cache.getItem('c')).toBe(3);
    expect(cache.getItem('d')).toBe(4);
});