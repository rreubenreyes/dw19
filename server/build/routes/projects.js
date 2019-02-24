'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// npm modules
var express = require('express');
var router = new express.Router();
var axios = require('axios');
var formatFenceData = require('../helpers/formatFenceData');
var APIRequest = require('../models/ApiRequest');

var _require = require('../config'),
    API_BASE = _require.API_BASE,
    ADMIN_KEY = _require.ADMIN_KEY,
    API_KEY = _require.API_KEY;

/** Base Route: /projects */

/** GET - /projects
 * @description - get a list of all projects
 * @return {{ projects: [ { id, name }, ... ]}}
 */


router.get('/', function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
		var apiResult;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.prev = 0;
						_context.next = 3;
						return APIRequest.getProjects();

					case 3:
						apiResult = _context.sent;

						console.log(apiResult);
						return _context.abrupt('return', res.json(apiResult));

					case 8:
						_context.prev = 8;
						_context.t0 = _context['catch'](0);
						return _context.abrupt('return', next(_context.t0));

					case 11:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined, [[0, 8]]);
	}));

	return function (_x, _x2, _x3) {
		return _ref.apply(this, arguments);
	};
}());

/** POST - /projects
 * @description - add a project to the tomtom account
 * @param { string } req.body.name - name of the project
 * @return { { id, name } }
 */
router.post('/', function () {
	var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
		var name, apiResponse;
		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.prev = 0;
						name = req.body.name;
						_context2.next = 4;
						return APIRequest.addProject(name);

					case 4:
						apiResponse = _context2.sent;
						return _context2.abrupt('return', res.json(apiResponse));

					case 8:
						_context2.prev = 8;
						_context2.t0 = _context2['catch'](0);
						return _context2.abrupt('return', next(_context2.t0));

					case 11:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined, [[0, 8]]);
	}));

	return function (_x4, _x5, _x6) {
		return _ref2.apply(this, arguments);
	};
}());

/** GET - /projects/:projectId
 * @description - get the details of a specific project including fence detail
 * @param { string } req.params.projectId - project ID
 * @return {{ id, name, fences: [{ fenceDetails }, ...], defaultObjects }}
 */
router.get('/:projectId', function () {
	var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res, next) {
		var projectId, apiResponse;
		return _regenerator2.default.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						_context3.prev = 0;
						projectId = req.params.projectId;
						_context3.next = 4;
						return APIRequest.getProject(projectId);

					case 4:
						apiResponse = _context3.sent;
						return _context3.abrupt('return', res.json(apiResponse));

					case 8:
						_context3.prev = 8;
						_context3.t0 = _context3['catch'](0);
						return _context3.abrupt('return', next(_context3.t0));

					case 11:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, undefined, [[0, 8]]);
	}));

	return function (_x7, _x8, _x9) {
		return _ref3.apply(this, arguments);
	};
}());

/** PUT - /projects/:projectId
 * @description - update the name of a specific Project
 * @param { string } req.params.projectId - project ID
 * @return { { id, name } }
 */
router.put('/:projectId', function () {
	var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res, next) {
		var projectId, name, apiResponse;
		return _regenerator2.default.wrap(function _callee4$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						_context4.prev = 0;
						projectId = req.params.projectId;
						name = req.body.name;
						_context4.next = 5;
						return APIRequest.updateProjectName(projectId, name);

					case 5:
						apiResponse = _context4.sent;
						return _context4.abrupt('return', res.json(apiResponse));

					case 9:
						_context4.prev = 9;
						_context4.t0 = _context4['catch'](0);
						return _context4.abrupt('return', next(_context4.t0));

					case 12:
					case 'end':
						return _context4.stop();
				}
			}
		}, _callee4, undefined, [[0, 9]]);
	}));

	return function (_x10, _x11, _x12) {
		return _ref4.apply(this, arguments);
	};
}());

/** DELETE - /projects/:projectId
 * @description: delete a specific project - cascades with fences
 * @param { string } req.params.projectId - project ID
 * @return {{ id, name, dryRun, deletedFences:Array, ...}}
 */
router.delete('/:projectId', function () {
	var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res, next) {
		var projectId, apiResponse;
		return _regenerator2.default.wrap(function _callee5$(_context5) {
			while (1) {
				switch (_context5.prev = _context5.next) {
					case 0:
						_context5.prev = 0;
						projectId = req.params.projectId;
						_context5.next = 4;
						return APIRequest.deleteProject(projectId);

					case 4:
						apiResponse = _context5.sent;
						return _context5.abrupt('return', res.json(apiResponse));

					case 8:
						_context5.prev = 8;
						_context5.t0 = _context5['catch'](0);
						return _context5.abrupt('return', next(_context5.t0));

					case 11:
					case 'end':
						return _context5.stop();
				}
			}
		}, _callee5, undefined, [[0, 8]]);
	}));

	return function (_x13, _x14, _x15) {
		return _ref5.apply(this, arguments);
	};
}());

/* { // req body data: note coordinates are [long, lat]
      "name": "The Bird",
      "type": "Feature",
      "geometry": {
        "radius": 400,
        "type": "Point",
        "shapeType": "Circle",
        "coordinates": [
          -122.400103,
          37.787246
        ]
      },
      "properties": {    // add custom props as needed
        location: string
        comments: [string]
        pictures: [string]
        votes: interger
      }
    }
 */

/** POST - /projects/:projectId/report
 * @description - add a geofence to a specific project
 * @param { string } req.params.projectId - project ID
 * @param { object } req.body - see example details aboce
 */
router.post('/:projectId/fence', function () {
	var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res, next) {
		var projectId, data, apiResponse;
		return _regenerator2.default.wrap(function _callee6$(_context6) {
			while (1) {
				switch (_context6.prev = _context6.next) {
					case 0:
						_context6.prev = 0;
						projectId = req.params.projectId;
						data = req.body;
						_context6.next = 5;
						return APIRequest.addGeoFenceToProject(projectId, data);

					case 5:
						apiResponse = _context6.sent;
						return _context6.abrupt('return', res.json(apiResponse));

					case 9:
						_context6.prev = 9;
						_context6.t0 = _context6['catch'](0);
						return _context6.abrupt('return', next(_context6.t0));

					case 12:
					case 'end':
						return _context6.stop();
				}
			}
		}, _callee6, undefined, [[0, 9]]);
	}));

	return function (_x16, _x17, _x18) {
		return _ref6.apply(this, arguments);
	};
}());

/** POST - /projects/:projectId/report
 * @description - get a list of fence reports based on user coordinates
 * @param { string } req.params.projectId - project ID
 * @param { float } req.body.longitude - user longitude
 * @param { float } req.body.latitude - user latitude
 * @param { range } integer - range to qualify how far from coordinate to look
 * @return {{ fences: { inside:Array, outside: Array}}}
 */
router.post('/:projectId/report', function () {
	var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(req, res, next) {
		var projectId, _req$body, longitude, latitude, range, apiResponse;

		return _regenerator2.default.wrap(function _callee7$(_context7) {
			while (1) {
				switch (_context7.prev = _context7.next) {
					case 0:
						_context7.prev = 0;
						projectId = req.params.projectId;
						_req$body = req.body, longitude = _req$body.longitude, latitude = _req$body.latitude, range = _req$body.range;
						_context7.next = 5;
						return APIRequest.getFenceReport(projectId, {
							longitude: longitude,
							latitude: latitude,
							range: range
						});

					case 5:
						apiResponse = _context7.sent;
						return _context7.abrupt('return', res.json(apiResponse));

					case 9:
						_context7.prev = 9;
						_context7.t0 = _context7['catch'](0);
						return _context7.abrupt('return', next(_context7.t0));

					case 12:
					case 'end':
						return _context7.stop();
				}
			}
		}, _callee7, undefined, [[0, 9]]);
	}));

	return function (_x19, _x20, _x21) {
		return _ref7.apply(this, arguments);
	};
}());

module.exports = router;