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
			return next(error);
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
			return next(error);
		}
	}

	static async getProject(projectId) {}
}

module.exports = APIRequest;
