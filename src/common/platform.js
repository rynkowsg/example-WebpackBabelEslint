import Enum from 'enumify-x';
import log from './logger';

const Platform = Enum.create('Platform', ['NODE', 'BROWSER', 'UNKNOWN']);


function getPlatform() {
  const platform = process.env.PLATFORM;
  if (platform === 'browser') {
    log('PLATFORM detected, it is "browser"');
    return Platform.BROWSER;
  }
  if (platform === 'node') {
    log('PLATFORM detected, it is "node"');
    return Platform.NODE;
  }
  log('PLATFORM not found');
  return Platform.UNKNOWN;
}


module.exports = {
  Platform,
  getPlatform,
};
