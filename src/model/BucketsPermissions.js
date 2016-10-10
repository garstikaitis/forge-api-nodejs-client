/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. From visualizing data to 3D printing, take advantage of Autodesk’s expertise in design and engineering.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = (function() {
  'use strict';

  var ApiClient = require('../ApiClient');



  /**
   * The BucketsPermissions model module.
   * @module model/BucketsPermissions
   * @version 0.1.8
   */

   /**
    * Constructs a <code>BucketsPermissions</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BucketsPermissions} obj Optional instance to populate.
    * @return {module:model/BucketsPermissions} The populated <code>BucketsPermissions</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('authId')) {
        obj['authId'] = ApiClient.convertToType(data['authId'], 'String');
      }
      if (data.hasOwnProperty('access')) {
        obj['access'] = ApiClient.convertToType(data['access'], 'String');
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>BucketsPermissions</code>.
   * @alias module:model/BucketsPermissions
   * @class
   * @param authId {String} The application to grant access to
   * @param access {module:model/BucketsPermissions.AccessEnum} Acceptable values: `full` or `read` 
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/BucketsPermissions} obj Optional instance to populate.
   */
  var exports = function(authId, access, theData, obj) {
    var _this = this;

    _this['authId'] = authId;
    _this['access'] = access;

    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>BucketsPermissions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BucketsPermissions} obj Optional instance to populate.
   * @return {module:model/BucketsPermissions} The populated <code>BucketsPermissions</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * The application to grant access to
   * @member {String} authId
   */
  exports.prototype['authId'] = undefined;
  /**
   * Acceptable values: `full` or `read` 
   * @member {module:model/BucketsPermissions.AccessEnum} access
   */
  exports.prototype['access'] = undefined;


  /**
   * Allowed values for the <code>access</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AccessEnum = {
    /**
     * value: "full"
     * @const
     */
    "full": "full",
    /**
     * value: "read"
     * @const
     */
    "read": "read"  };


  return exports;
}());

