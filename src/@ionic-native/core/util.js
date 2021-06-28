'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getPromise = exports.get = void 0;
/**
 * @private
 */
function get(element, path) {
  var paths = path.split('.');
  var obj = element;
  for (var i = 0; i < paths.length; i++) {
    if (!obj) {
      return null;
    }
    obj = obj[paths[i]];
  }
  return obj;
}
exports.get = get;
/**
 * @private
 */
function getPromise(callback) {
  if (callback === void 0) {
    callback = function () {};
  }
  var tryNativePromise = function () {
    if (typeof Promise === 'function' || (typeof window !== 'undefined' && window.Promise)) {
      return new Promise(function (resolve, reject) {
        callback(resolve, reject);
      });
    } else {
      console.error(
        'No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.'
      );
    }
  };
  return tryNativePromise();
}
exports.getPromise = getPromise;
