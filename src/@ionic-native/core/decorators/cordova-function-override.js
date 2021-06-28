'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.cordovaFunctionOverride = void 0;
var rxjs_1 = require('rxjs');
var common_1 = require('./common');
function overrideFunction(pluginObj, methodName) {
  return new rxjs_1.Observable(function (observer) {
    var availabilityCheck = common_1.checkAvailability(pluginObj, methodName);
    if (availabilityCheck === true) {
      var pluginInstance_1 = common_1.getPlugin(pluginObj.constructor.getPluginRef());
      pluginInstance_1[methodName] = observer.next.bind(observer);
      return function () {
        return (pluginInstance_1[methodName] = function () {});
      };
    } else {
      observer.error(availabilityCheck);
      observer.complete();
    }
  });
}
function cordovaFunctionOverride(pluginObj, methodName, args) {
  if (args === void 0) {
    args = [];
  }
  return overrideFunction(pluginObj, methodName);
}
exports.cordovaFunctionOverride = cordovaFunctionOverride;
