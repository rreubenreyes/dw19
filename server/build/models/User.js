'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const db = require('../db');

// class models
var APIError = require('./ApiError');

/** User on the site */

var User = function () {
  function User(_ref) {
    var name = _ref.name,
        username = _ref.username,
        friends = _ref.friends,
        songlist = _ref.songlist;
    (0, _classCallCheck3.default)(this, User);

    this.username = username;
    this.name = name;
    this.friends = friends;
    this.songlist = songlist;
  }

  /** @description addUser - adds a user to the database
   * @property {object} user
   * @property {string} user.username
   * @property {string} user.name
   * @property {array} user.friends
   * @property {array} user.songlist
   * @return {Promise <User ({ name, username, friends, songlist })>}
   */


  (0, _createClass3.default)(User, null, [{
    key: 'addUser',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
        var name = _ref2.name,
            username = _ref2.username,
            friends = _ref2.friends,
            _ref2$songlist = _ref2.songlist,
            songlist = _ref2$songlist === undefined ? [] : _ref2$songlist;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', new User({ name: name, username: username, friends: friends, songlist: songlist }));

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function addUser(_x) {
        return _ref3.apply(this, arguments);
      }

      return addUser;
    }()
  }]);
  return User;
}();

module.exports = User;