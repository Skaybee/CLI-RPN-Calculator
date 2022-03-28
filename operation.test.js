const { operation } = require('./index.js');

describe('RPN calculator two-operand and four-basic-arithmetic-operation test', () => {
  it('Should be able to add numbers', () => {
    expect(operation('+', 1, 2)).toBe(3);
    expect(operation('+', -1, -2)).toBe(-3);
    expect(operation('+', 1.5, 2.7)).toBe(4.2);
  });
  it('Should be able to subtract numbers', () => {
    expect(operation('-', 1, 2)).toBe(-1);
    expect(operation('-', -1, -2)).toBe(1);
    expect(operation('-', 1.5, 2.5)).toBe(-1);
  });
  it('Should be able to multiply numbers', () => {
    expect(operation('*', 1, 2)).toBe(2);
    expect(operation('*', -1, -2)).toBe(2);
    expect(operation('*', 1.5, 2)).toBe(3);
  });
  it('Should be able to divide numbers', () => {
    expect(operation('/', 1, 2)).toBe(0.5);
    expect(operation('/', -1, -2)).toBe(0.5);
    expect(operation('/', 1.5, 3)).toBe(0.5);
  });
})

