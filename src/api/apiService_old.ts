import siteConstants from "@/model/constants";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const apiClient: AxiosInstance = axios.create({
	baseURL: siteConstants.ENV.OLD_SERVER_API_URL,
	headers: {
		"Content-Type": siteConstants.fileTypes.applicationJson,
	},
	timeout: siteConstants.server.API_TIMEOUT,
});

apiClient.interceptors.request.use(
	(config: InternalAxiosRequestConfig<any>): InternalAxiosRequestConfig<any> => {
		const token = localStorage.getItem(siteConstants.LocalStore.token);
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
	(response: AxiosResponse): AxiosResponse => response,
	(error) => {
		if (error.response && error.response.status === 401) {
			//TODO Handle unauthorized errors (e.g., redirect to login)
		}
		return Promise.reject(error);
	}
);

const get = <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => apiClient.get<T>(url, config);
const post = <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => apiClient.post<T>(url, data, config);
const put = <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => apiClient.put<T>(url, data, config);
const del = <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => apiClient.delete<T>(url, config);

const WBC_OLD_API = {
	get: get,
	post: post,
	put: put,
	del: del,
	apiClient: apiClient,
};

export default WBC_OLD_API;
