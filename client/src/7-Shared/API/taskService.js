import {api} from "../config/forms/validationSchemes/network";

export class taskService {
	static async getTaskLists(token) {
		const response = await api.get(`/api/task-lists`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response;
	}

	static async deleteTaskList(token, listId) {
		const response = await api.delete(
			`/api/task-lists/${listId}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response;
	}

	static async deleteTaskType(token, listId) {
		const response = await api.delete(
			`/api/task-types/${listId}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response;
	}

	static async getTaskTypes(token) {
		const response = await api.get(`/api/task-types`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response;
	}

	static async createTaskList(token, data) {
		const response = await api.post(
			`/api/task-lists`,
			{
				data,
			},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response;
	}

	static async createTaskType(token, data) {
		const response = await api.post(
			`/api/task-types`,
			{
				data,
			},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response;
	}

	static async createTask(token, data) {
		const response = await api.post(
			`/api/tasks`,
			{
				data,
			},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response;
	}

	static async getTasks(token, query) {
		const response = await api.get(
			`/api/tasks${query ? "?" + query : ""}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response;
	}

	static async updateTask(token, taskId, data) {
		const response = await api.put(
			`/api/tasks/${taskId}`,
			{
				data,
			},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response;
	}

	static async deleteTask(token, taskId) {
		const response = await api.delete(`/api/tasks/${taskId}`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});
		return response;
	}
}
