import { invoke } from 'neverred-function';

invoke((event, context, logger) => {
  const input = event.data.number;
  const result = input ** 2;
  const fooVal = context.secrets.getValue('foo', 'id');
  logger.info({ foo: `...${fooVal.substr(fooVal.length - 5).replace(/\s/, '')}`});
  logger.info({ input, result });
  return {result};
});
