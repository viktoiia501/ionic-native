'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.instancePropertySet = exports.instancePropertyGet = void 0;
function instancePropertyGet(pluginObj, key) {
  if (pluginObj._objectInstance && pluginObj._objectInstance[key]) {
    return pluginObj._objectInstance[key];
  }
  return null;
}
exports.instancePropertyGet = instancePropertyGet;
function instancePropertySet(pluginObj, key, value) {
  if (pluginObj._objectInstance) {
    pluginObj._objectInstance[key] = value;
  }
}
exports.instancePropertySet = instancePropertySet;
