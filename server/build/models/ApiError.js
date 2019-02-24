'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APIError = function (_Error) {
  (0, _inherits3.default)(APIError, _Error);

  function APIError() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Internal Server Error';
    var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    (0, _classCallCheck3.default)(this, APIError);

    var _this = (0, _possibleConstructorReturn3.default)(this, (APIError.__proto__ || (0, _getPrototypeOf2.default)(APIError)).call(this, message));

    _this.status = status;
    return _this;
  }

  /*
    Defines the JSON representation of this class
  Automatically invoked when you pass an API Error to res.json
   */


  (0, _createClass3.default)(APIError, [{
    key: 'toJSON',
    value: function toJSON() {
      return {
        error: {
          status: this.status,
          message: this.message
        }
      };
    }
  }]);
  return APIError;
}(Error);

module.exports = APIError;