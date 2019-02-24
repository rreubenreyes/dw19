/** formats tomtom report data into clean object output */
function formatFenceData(rawFenceData) {
	return rawFenceData.map(fence => {
		const { id, name, distance, properties } = fence;
		return { id, name, distance, ...properties };
	});
}

module.exports = formatFenceData;
