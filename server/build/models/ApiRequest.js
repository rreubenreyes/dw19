'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var axios = require('axios');
var formatFenceData = require('../helpers/formatFenceData');

var _require = require('../config'),
    API_BASE = _require.API_BASE,
    ADMIN_KEY = _require.ADMIN_KEY,
    API_KEY = _require.API_KEY;

var APIRequest = function () {
	function APIRequest() {
		(0, _classCallCheck3.default)(this, APIRequest);
	}

	(0, _createClass3.default)(APIRequest, null, [{
		key: 'getProjects',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var apiResult;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.prev = 0;
								_context.next = 3;
								return axios({
									url: API_BASE + '/projects?key=' + API_KEY,
									method: 'get'
								});

							case 3:
								apiResult = _context.sent;
								return _context.abrupt('return', apiResult.data);

							case 7:
								_context.prev = 7;
								_context.t0 = _context['catch'](0);

								console.log(_context.t0.response.data.message);
								throw _context.t0;

							case 11:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this, [[0, 7]]);
			}));

			function getProjects() {
				return _ref.apply(this, arguments);
			}

			return getProjects;
		}()
	}, {
		key: 'addProject',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(name) {
				var apiResult;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.prev = 0;
								_context2.next = 3;
								return axios({
									url: API_BASE + '/projects/project?key=' + API_KEY + '&adminKey=' + ADMIN_KEY,
									method: 'post',
									data: {
										name: name
									}
								});

							case 3:
								apiResult = _context2.sent;
								return _context2.abrupt('return', apiResult.data);

							case 7:
								_context2.prev = 7;
								_context2.t0 = _context2['catch'](0);

								console.log(_context2.t0.response.data.message);
								throw _context2.t0;

							case 11:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this, [[0, 7]]);
			}));

			function addProject(_x) {
				return _ref2.apply(this, arguments);
			}

			return addProject;
		}()
	}, {
		key: 'getProject',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(projectId) {
				var apiResult, fences, fenceIds, fenceIdsPromises, fenceResults, fenceCleanData, _apiResult$data, id, name, defaultObjects;

				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								_context3.prev = 0;
								_context3.next = 3;
								return axios({
									url: API_BASE + '/projects/' + projectId + '?key=' + API_KEY,
									method: 'get'
								});

							case 3:
								apiResult = _context3.sent;


								// get individual fence data and append to final json results
								fences = apiResult.data.fences;
								fenceIds = fences.map(function (fenceObj) {
									return fenceObj.id;
								});

								// build fenceIdPromise Array

								fenceIdsPromises = fenceIds.map(function (fenceId) {
									var apiResultPromise = axios({
										url: API_BASE + '/fences/' + fenceId + '?key=' + API_KEY,
										method: 'get'
									});
									return apiResultPromise;
								});

								// obtain fenceResult Details and parse into clean data

								_context3.next = 9;
								return _promise2.default.all(fenceIdsPromises);

							case 9:
								fenceResults = _context3.sent;
								fenceCleanData = fenceResults.map(function (fenceData) {
									return fenceData.data;
								});
								_apiResult$data = apiResult.data, id = _apiResult$data.id, name = _apiResult$data.name, defaultObjects = _apiResult$data.defaultObjects;
								return _context3.abrupt('return', { id: id, name: name, fences: fenceCleanData, defaultObjects: defaultObjects });

							case 15:
								_context3.prev = 15;
								_context3.t0 = _context3['catch'](0);

								console.log(_context3.t0.response.data.message);
								throw _context3.t0;

							case 19:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this, [[0, 15]]);
			}));

			function getProject(_x2) {
				return _ref3.apply(this, arguments);
			}

			return getProject;
		}()
	}, {
		key: 'updateProjectName',
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(projectId, name) {
				var apiResult;
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								_context4.prev = 0;
								_context4.next = 3;
								return axios({
									url: API_BASE + '/projects/' + projectId + '?key=' + API_KEY + '&adminKey=' + ADMIN_KEY,
									method: 'put',
									data: {
										name: name
									}
								});

							case 3:
								apiResult = _context4.sent;
								return _context4.abrupt('return', apiResult.data);

							case 7:
								_context4.prev = 7;
								_context4.t0 = _context4['catch'](0);

								console.log(_context4.t0.response.data.message);
								throw _context4.t0;

							case 11:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, this, [[0, 7]]);
			}));

			function updateProjectName(_x3, _x4) {
				return _ref4.apply(this, arguments);
			}

			return updateProjectName;
		}()
	}, {
		key: 'deleteProject',
		value: function () {
			var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(projectId) {
				var apiResult;
				return _regenerator2.default.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								_context5.prev = 0;
								_context5.next = 3;
								return axios({
									url: API_BASE + '/projects/' + projectId + '?key=' + API_KEY + '&adminKey=' + ADMIN_KEY + '&dryRun=false',
									method: 'delete'
								});

							case 3:
								apiResult = _context5.sent;
								return _context5.abrupt('return', apiResult.data);

							case 7:
								_context5.prev = 7;
								_context5.t0 = _context5['catch'](0);

								console.log(_context5.t0.response.data.message);
								throw _context5.t0;

							case 11:
							case 'end':
								return _context5.stop();
						}
					}
				}, _callee5, this, [[0, 7]]);
			}));

			function deleteProject(_x5) {
				return _ref5.apply(this, arguments);
			}

			return deleteProject;
		}()
	}, {
		key: 'addGeoFenceToProject',
		value: function () {
			var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(projectId, data) {
				var apiResult;
				return _regenerator2.default.wrap(function _callee6$(_context6) {
					while (1) {
						switch (_context6.prev = _context6.next) {
							case 0:
								_context6.prev = 0;
								_context6.next = 3;
								return axios({
									url: API_BASE + '/projects/' + projectId + '/fence?key=' + API_KEY + '&adminKey=' + ADMIN_KEY,
									method: 'post',
									data: data
								});

							case 3:
								apiResult = _context6.sent;
								return _context6.abrupt('return', apiResult.data);

							case 7:
								_context6.prev = 7;
								_context6.t0 = _context6['catch'](0);

								console.log(_context6.t0.response.data.message);
								throw _context6.t0;

							case 11:
							case 'end':
								return _context6.stop();
						}
					}
				}, _callee6, this, [[0, 7]]);
			}));

			function addGeoFenceToProject(_x6, _x7) {
				return _ref6.apply(this, arguments);
			}

			return addGeoFenceToProject;
		}()
	}, {
		key: 'getFenceReport',
		value: function () {
			var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(projectId, _ref7) {
				var longitude = _ref7.longitude,
				    latitude = _ref7.latitude,
				    range = _ref7.range;
				var apiResult, inside, outside;
				return _regenerator2.default.wrap(function _callee7$(_context7) {
					while (1) {
						switch (_context7.prev = _context7.next) {
							case 0:
								_context7.prev = 0;
								_context7.next = 3;
								return axios({
									url: API_BASE + '/report/' + projectId + '?key=' + API_KEY + '&point=' + longitude + ',' + latitude + '&range=' + (range || 100),
									method: 'get'
								});

							case 3:
								apiResult = _context7.sent;
								inside = formatFenceData(apiResult.data.inside.features);
								outside = formatFenceData(apiResult.data.outside.features);
								return _context7.abrupt('return', {
									fences: {
										inside: inside,
										outside: outside
									}
								});

							case 9:
								_context7.prev = 9;
								_context7.t0 = _context7['catch'](0);

								console.log(_context7.t0.response.data.message);
								throw _context7.t0;

							case 13:
							case 'end':
								return _context7.stop();
						}
					}
				}, _callee7, this, [[0, 9]]);
			}));

			function getFenceReport(_x8, _x9) {
				return _ref8.apply(this, arguments);
			}

			return getFenceReport;
		}()
	}]);
	return APIRequest;
}();

module.exports = APIRequest;