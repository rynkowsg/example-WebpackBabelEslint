import log from './logger';

export default function printMe() {
  log('I get called from print.js!');

  const s = new Set();
  s.add('hello').add('goodbye').add('hello');

  const x = 2 ** 8;
  log(x);

  log('it has it:');
  log(s.has('hello') === true ? 'yes' : 'no');

  log(process.env);
}
