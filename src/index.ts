import { invoke } from 'neverred-function';

invoke((event, context, logger) => {
  const input = event.data.number;
  const result = input ** 2;
  const fooVal = context.secrets.getValue('foo', 'id');
  if (fooVal) {
    logger.info({ foo: `****${fooVal.substr(fooVal.length - 5)}`});
  }
  logger.info({ input, result });
  return {result};
});
