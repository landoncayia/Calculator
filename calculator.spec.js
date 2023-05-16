const calculator = require('./calculator');

test('add function works', () => {
  expect(calculator.add(3, 3)).toBe(6);
});

test('subtract function works', () => {
  expect(calculator.subtract(10, 7)).toBe(3);
});

test('multiply function works', () => {
  expect(calculator.multiply(10, 20)).toBe(200);
});

test('divide function works', () => {
  expect(calculator.divide(444, 4)).toBe(111);
});

test('divide by zero caught', () => {
  expect(calculator.divide(1, 0)).toBe(undefined);
});

test('operate function -> add works', () => {
  expect(calculator.operate('+', 10, 10)).toBe(20);
});

test('operate function -> subtract works', () => {
  expect(calculator.operate('-', 10, 100)).toBe(-90);
});

test('operate function -> multiply works', () => {
  expect(calculator.operate('*', -24, 5)).toBe(-120);
});

test('operate function -> divide works', () => {
  expect(calculator.operate('/', 99, -3)).toBe(-33);
});

test('operate function handles bad input', () => {
  expect(calculator.operate('zzz', 'a', undefined)).toBe(undefined);
})
