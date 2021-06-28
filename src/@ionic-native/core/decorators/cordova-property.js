'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.cordovaPropertySet = exports.cordovaPropertyGet = void 0;
var common_1 = require('./common');
function cordovaPropertyGet(pluginObj, key) {
  if (common_1.checkAvailability(pluginObj, key) === true) {
    return common_1.getPlugin(pluginObj.constructor.getPluginRef())[key];
  }
  return null;
}
exports.cordovaPropertyGet = cordovaPropertyGet;
function cordovaPropertySet(pluginObj, key, value) {
  if (common_1.checkAvailability(pluginObj, key) === true) {
    common_1.getPlugin(pluginObj.constructor.getPluginRef())[key] = value;
  }
}
exports.cordovaPropertySet = cordovaPropertySet;
