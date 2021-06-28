'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.IonicNativePlugin = void 0;
var common_1 = require('./decorators/common');
var util_1 = require('./util');
var IonicNativePlugin = /** @class */ (function () {
  function IonicNativePlugin() {}
  /**
   * Returns a boolean that indicates whether the plugin is installed
   * @return {boolean}
   */
  IonicNativePlugin.installed = function () {
    var isAvailable = common_1.checkAvailability(this.pluginRef) === true;
    return isAvailable;
  };
  /**
   * Returns the original plugin object
   */
  IonicNativePlugin.getPlugin = function () {
    if (typeof window !== 'undefined') {
      return util_1.get(window, this.pluginRef);
    }
    return null;
  };
  /**
   * Returns the plugin's name
   */
  IonicNativePlugin.getPluginName = function () {
    var pluginName = this.pluginName;
    return pluginName;
  };
  /**
   * Returns the plugin's reference
   */
  IonicNativePlugin.getPluginRef = function () {
    var pluginRef = this.pluginRef;
    return pluginRef;
  };
  /**
   * Returns the plugin's install name
   */
  IonicNativePlugin.getPluginInstallName = function () {
    var plugin = this.plugin;
    return plugin;
  };
  /**
   * Returns the plugin's supported platforms
   */
  IonicNativePlugin.getSupportedPlatforms = function () {
    var platform = this.platforms;
    return platform;
  };
  IonicNativePlugin.pluginName = '';
  IonicNativePlugin.pluginRef = '';
  IonicNativePlugin.plugin = '';
  IonicNativePlugin.repo = '';
  IonicNativePlugin.platforms = [];
  IonicNativePlugin.install = '';
  return IonicNativePlugin;
})();
exports.IonicNativePlugin = IonicNativePlugin;
