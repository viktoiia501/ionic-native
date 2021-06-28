'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.cordova = void 0;
var common_1 = require('./common');
function cordova(pluginObj, methodName, config, args) {
  return common_1.wrap(pluginObj, methodName, config).apply(this, args);
}
exports.cordova = cordova;
