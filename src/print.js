const logger = require('./logger');

export default function printMe() {
  logger.log('I get called from print.js!');

  const s = new Set();
  s.add('hello').add('goodbye').add('hello');

  const x = 2 ** 8;
  logger.log(x);

  logger.log('it has it:');
  logger.log(s.has('hello') === true ? 'yes' : 'no');
}
