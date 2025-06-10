const { greet } = require('../greet');

test('greet returns correct greeting', () => {
  expect(greet('Alice')).toBe('Hello, Alice!');
});