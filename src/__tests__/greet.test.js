const { greet } = require('../greet');

test('greet returns correct greeting', () => {
  expect(greet('Alice')).toBe('Hello, Alice!');
});

test('greet with default name', () => {
  expect(greet()).toBe('Hello, stranger!');
});