'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.cordovaInstance = void 0;
var common_1 = require('./common');
function cordovaInstance(pluginObj, methodName, config, args) {
  args = Array.from(args);
  return common_1.wrapInstance(pluginObj, methodName, config).apply(this, args);
}
exports.cordovaInstance = cordovaInstance;
