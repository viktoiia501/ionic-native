/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { CordovaCheck, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name cordova-plugin-twiliovoicesdk
 * @description
 * This plugin loads the cordova-plugin-twiliovoicesdk in your phonegap app(android/ios)
 *
 * @usage
 * ```typescript
 * import { CordovaPluginTwilioVoiceSdk } from '@ionic-native/cordova-plugin-twiliovoicesdk';*
 * ...
 *
 * //...
 * await this.CordovaPluginTwilioVoiceSdk.load();
 * ```
 */
@Plugin({
  pluginName: 'cordova-plugin-twiliovoicesdk',
  plugin: 'cordova-plugin-twiliovoicesdk', // npm package name, example: cordova-plugin-camera
  pluginRef: 'twiliovoicesdk', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/jefflinwood/cordova-plugin-twiliovoicesdk.git', // the github repository URL for the plugin
  platforms: ['Android', 'iOS'], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class CordovaPluginTwilioVoiceSdk extends IonicNativePlugin {
  /**
   * This function waits for the plugin to load and eventually adds window.Twilio to the global window object
   * It does NOT do any additional steps needed to configure the plugin vars. refer plugin docs to follow platform
   * specific configurations
   * @return {Promise<any>} Returns a promise that resolves when plugin loads and we have a window.Twilio
   */
  @CordovaCheck()
  load(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
}
