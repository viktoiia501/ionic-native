'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __exportStar =
  (this && this.__exportStar) ||
  function (m, exports) {
    for (var p in m)
      if (p !== 'default' && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.getPromise =
  exports.wrap =
  exports.instanceAvailability =
  exports.checkAvailability =
  exports.IonicNativePlugin =
    void 0;
var bootstrap_1 = require('./bootstrap');
var ionic_native_plugin_1 = require('./ionic-native-plugin');
Object.defineProperty(exports, 'IonicNativePlugin', {
  enumerable: true,
  get: function () {
    return ionic_native_plugin_1.IonicNativePlugin;
  },
});
// Decorators
var common_1 = require('./decorators/common');
Object.defineProperty(exports, 'checkAvailability', {
  enumerable: true,
  get: function () {
    return common_1.checkAvailability;
  },
});
Object.defineProperty(exports, 'instanceAvailability', {
  enumerable: true,
  get: function () {
    return common_1.instanceAvailability;
  },
});
Object.defineProperty(exports, 'wrap', {
  enumerable: true,
  get: function () {
    return common_1.wrap;
  },
});
Object.defineProperty(exports, 'getPromise', {
  enumerable: true,
  get: function () {
    return common_1.getPromise;
  },
});
__exportStar(require('./decorators/cordova'), exports);
__exportStar(require('./decorators/cordova-function-override'), exports);
__exportStar(require('./decorators/cordova-instance'), exports);
__exportStar(require('./decorators/cordova-property'), exports);
__exportStar(require('./decorators/instance-property'), exports);
__exportStar(require('./decorators/interfaces'), exports);
bootstrap_1.checkReady();
