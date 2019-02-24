// npm modules
const express = require('express');
const router = new express.Router();
const axios = require('axios');
const formatFenceData = require('../helpers/formatFenceData');
const APIRequest = require('../models/ApiRequest');

const { API_BASE, ADMIN_KEY, API_KEY } = require('../config');

/** Base Route: /projects */

/** GET - /projects
 * @description - get a list of all projects
 * @return {{ projects: [ { id, name }, ... ]}}
 */
router.get('/', async (req, res, next) => {
	try {
		const apiResult = await APIRequest.getProjects();
		return res.json(apiResult);
	} catch (error) {
		return next(error);
	}
});

/** POST - /projects
 * @description - add a project to the tomtom account
 * @param { string } req.body.name - name of the project
 * @return { { id, name } }
 */
router.post('/', async (req, res, next) => {
	try {
		const { name } = req.body;
		const apiResponse = await APIRequest.addProject(name);
		return res.json(apiResponse);
	} catch (error) {
		return next(error);
	}
});

/** GET - /projects/:projectId
 * @description - get the details of a specific project including fence detail
 * @param { string } req.params.projectId - project ID
 * @return {{ id, name, fences: [{ fenceDetails }, ...], defaultObjects }}
 */
router.get('/:projectId', async (req, res, next) => {
	try {
		const { projectId } = req.params;
		const apiResponse = await APIRequest.getProject(projectId);
		return res.json(apiResponse);
	} catch (error) {
		return next(error);
	}
});

/** PUT - /projects/:projectId
 * @description - update the name of a specific Project
 * @param { string } req.params.projectId - project ID
 * @return { { id, name } }
 */
router.put('/:projectId', async (req, res, next) => {
	try {
		const { projectId } = req.params;
		const { name } = req.body;
		const apiResponse = await APIRequest.updateProjectName(projectId, name);
		return res.json(apiResponse);
	} catch (error) {
		return next(error);
	}
});

/** DELETE - /projects/:projectId
 * @description: delete a specific project - cascades with fences
 * @param { string } req.params.projectId - project ID
 * @return {{ id, name, dryRun, deletedFences:Array, ...}}
 */
router.delete('/:projectId', async (req, res, next) => {
	try {
		const { projectId } = req.params;
		const apiResult = await axios({
			url: `${API_BASE}/projects/${projectId}?key=${API_KEY}&adminKey=${ADMIN_KEY}&dryRun=false`,
			method: 'delete',
		});

		return res.json(apiResult.data);
	} catch (error) {
		return next(error);
	}
});

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
router.post('/:projectId/fence', async (req, res, next) => {
	try {
		const { projectId } = req.params;
		const data = req.body;

		const apiResult = await axios({
			url: `${API_BASE}/projects/${projectId}/fence?key=${API_KEY}&adminKey=${ADMIN_KEY}`,
			method: 'post',
			data,
		});

		return res.json(apiResult.data);
	} catch (error) {
		console.log(error.response.data.message);
		return next(error);
	}
});

/** POST - /projects/:projectId/report
 * @description - get a list of fence reports based on user coordinates
 * @param { string } req.params.projectId - project ID
 * @param { float } req.body.longitude - user longitude
 * @param { float } req.body.latitude - user latitude
 * @param { range } integer - range to qualify how far from coordinate to look
 * @return {{ fences: { inside:Array, outside: Array}}}
 */
router.post('/:projectId/report', async (req, res, next) => {
	try {
		const { projectId } = req.params;
		const { longitude, latitude, range } = req.body;

		const apiResult = await axios({
			url: `${API_BASE}/report/${projectId}?key=${API_KEY}&point=${longitude},${latitude}&range=${range ||
				100}`,
			method: 'get',
		});

		const inside = formatFenceData(apiResult.data.inside.features);
		const outside = formatFenceData(apiResult.data.outside.features);

		return res.json({
			fences: {
				inside,
				outside,
			},
		});
	} catch (error) {
		console.log(error.response.data.message);
		return next(error);
	}
});

module.exports = router;
