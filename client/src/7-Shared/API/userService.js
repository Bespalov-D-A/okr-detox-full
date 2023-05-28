import { api } from "../config/forms/validationSchemes/network";
import { randomString } from "../lib/RandomPassword";

const server = process.env.REACT_APP_SERVER;

export class userService {
	static async createUser(data) {
		const response = await api.post(`/api/auth/local/register/`, {
			username: data.email,
			email: data.email,
			password: data.password
				? data.password
				: randomString(),
		});
		return response;
	}

	static async authUser(data) {
		const response = await api.post(`/api/auth/local`, {
			identifier: data.authLogin,
			password: data.authPassword,
		});
		return response;
	}

	static async getGoogleUserData(access_token) {
		const response = await api.get(
			`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`,
			{
				headers: {
					Authorization: `Bearer ${access_token}`,
					Accept: "application/json",
				},
			}
		);
		return response;
	}

	static async recoveryPassword(data) {
		const response = await api.post(`/api/auth/forgot-password`, {
			email: data.email,
		});
		return response;
	}

	static async googleOAuth() {
		const response = await api.get(
			process.env.REACT_APP_OAUTH_LINK
		);
		return response;
	}

	static async getUserDataWithGoogleAuth(code) {
		const response = await api.post(
			`/fix-version-strapi-google-auth/user-profile`,
			{
				code,
			}
		);
		return response;
	}

	static async getUserProfile(token) {
		const response = await api.get(`/api/users/me`, {
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: "application/json",
			},
		});
		return response;
	}
}
