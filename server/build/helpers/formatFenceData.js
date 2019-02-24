"use strict";

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** formats tomtom report data into clean object output */
function formatFenceData(rawFenceData) {
	return rawFenceData.map(function (fence) {
		var id = fence.id,
		    name = fence.name,
		    distance = fence.distance,
		    properties = fence.properties;

		return (0, _extends3.default)({ id: id, name: name, distance: distance }, properties);
	});
}

module.exports = formatFenceData;