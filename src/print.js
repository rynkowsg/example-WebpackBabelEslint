const logger = require('./logger');

export default function printMe() {
  logger.log('I get called from print.js!');
}
