import { describe, expect, it, test } from '@jest/globals';
import { multiply, sum } from '../index';

// describe -> group tests together for a specific functionality

describe('Testing sum function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('adds 5 + 2 to equal 7', () => {
    expect(sum(5, 2)).toBe(7);
  })
});




describe('multiply functioality test ', () => {
  it('multiplication of 3 and 4 should be 12', () => {
    expect(multiply(3, 4)).toBe(12);
  })
})





