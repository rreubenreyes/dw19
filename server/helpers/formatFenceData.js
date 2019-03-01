/** formats tomtom report data into clean object output */
function formatFenceData(rawFenceData) {
	return rawFenceData.map(fence => {
		const { id, name, distance, geometry, properties } = fence;
		return {
			id,
			title: name,
			distance,
			location: {
				lat: geometry.coordinates[1],
				lng: geometry.coordinates[0],
				radius: 200,
			},
			...properties,
		};

		// return {
		// 	id,
		// 	distance,
		// };
	});
}

module.exports = formatFenceData;
