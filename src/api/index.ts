import apiClient, { del, get, post, put } from "./apiService";

const API = {
	apiClient: apiClient,
	get: get,
	post: post,
	put: put,
	del: del,
};
export default API;
