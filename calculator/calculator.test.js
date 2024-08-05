import { expect, test } from 'vitest';
import {calculate} from './calculator.js';

test("calculator test", () => {
    expect(calculate('+', 9, 10)).toBe(19);
    expect(calculate('+', 4, 6)).toBe(10);
    expect(calculate('-', 4, 6)).toBe(-5);
});

test("subtract test", () => {
    expect(calculate('-', 9, 10)).toBe(-1);
    // expect(calculate('-', 4, 6)).toBe(10);
    // expect(calculate('-', 4, 6)).toBe(-2);
});


test("add test", () => {
    expect(calculate('+', 5, 10)).toBe(15);
    // expect(calculate('-', 4, 6)).toBe(10);
    // expect(calculate('-', 4, 6)).toBe(-2);
});

test("multiply test", () => {
    expect(calculate('*', 9, 10)).toBe(90);
    // expect(calculate('-', 4, 6)).toBe(10);
    // expect(calculate('-', 4, 6)).toBe(-2);
});

test("divide test", () => {
    expect(calculate('/', 9, 10)).toBe(0.9);
    // expect(calculate('-', 4, 6)).toBe(10);
    // expect(calculate('-', 4, 6)).toBe(-2);
});

// * calculate('+', 9, 10); // should return 19
// * calculate('-', 4, 6); // should return -2
// * calculate('*', -6, -8); // should return 48
// * calculate('/', 121, 11); // should return 11
// * calculate('sq', 5); // should return 25
// * calculate('sq', 3, 44); // should return 9, as the 44 is ignored
// * calculate('%', 124, 56); // should throw an error since '%' is not a supported operator
// * calculate('🍕', -41414, 2); // should throw an error since '🍕' is not a supported operator
// * ```
// */