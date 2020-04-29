import { square } from '../src/index';

test('squares the thing', () => {
  const event = { data: { number: 3 } }
  const context = { secrets: { getValue: function() { return 'blah'; } } };
  const logger = { info: function() { return } };
  const result = square(event, context, logger);
  expect(result).toBe(9)
});

