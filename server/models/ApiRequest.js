const axios = require('axios');

const { API_BASE, ADMIN_KEY, API_KEY } = require('../config');

class APIRequest {
	static async getProjects() {
		try {
			const apiResult = await axios({
				url: `${API_BASE}/projects?key=${API_KEY}`,
				method: 'get',
			});
			return apiResult.data;
		} catch (error) {
			console.log(error.response.data.message);
			throw error;
		}
	}

	static async addProject(name) {
		try {
			const apiResult = await axios({
				url: `${API_BASE}/projects/project?key=${API_KEY}&adminKey=${ADMIN_KEY}`,
				method: 'post',
				data: {
					name,
				},
			});
			return apiResult.data;
		} catch (error) {
			console.log(error.response.data.message);
			throw error;
		}
	}

	static async getProject(projectId) {
		try {
			const apiResult = await axios({
				url: `${API_BASE}/projects/${projectId}?key=${API_KEY}`,
				method: 'get',
			});

			// get individual fence data and append to final json results
			const { fences } = apiResult.data;
			const fenceIds = fences.map(fenceObj => fenceObj.id);

			// build fenceIdPromise Array
			const fenceIdsPromises = fenceIds.map(fenceId => {
				const apiResultPromise = axios({
					url: `${API_BASE}/fences/${fenceId}?key=${API_KEY}`,
					method: 'get',
				});
				return apiResultPromise;
			});

			// obtain fenceResult Details and parse into clean data
			const fenceResults = await Promise.all(fenceIdsPromises);
			const fenceCleanData = fenceResults.map(
				fenceData => fenceData.data
			);

			const { id, name, defaultObjects } = apiResult.data;
			return { id, name, fences: fenceCleanData, defaultObjects };
		} catch (error) {
			console.log(error.response.data.message);
			throw error;
		}
	}

	static async updateProjectName(projectId, name) {
		try {
			const apiResult = await axios({
				url: `${API_BASE}/projects/${projectId}?key=${API_KEY}&adminKey=${ADMIN_KEY}`,
				method: 'put',
				data: {
					name,
				},
			});
			return apiResult.data;
		} catch (error) {
			console.log(error.response.data.message);
			throw error;
		}
	}

	static async deleteProject(projectId) {
		try {
			const apiResult = await axios({
				url: `${API_BASE}/projects/${projectId}?key=${API_KEY}&adminKey=${ADMIN_KEY}&dryRun=false`,
				method: 'delete',
			});
			return apiResult.data;
		} catch (error) {
			console.log(error.response.data.message);
			throw error;
		}
	}
}

module.exports = APIRequest;
