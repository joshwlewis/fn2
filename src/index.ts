import { invoke } from 'neverred-function';

export const square = (event, context, logger) => {
  const fooVal = context.secrets.getValue('foo', 'id');
  logger.info({ foo: `****${fooVal.substr(fooVal.length - 5)}`});
  const input = event.data.number;
  const result = input ** 2;
  logger.info({ input, result });
  return result;
}

invoke(square);
