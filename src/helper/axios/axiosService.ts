import { server } from "@/model/constants/server";
import axios from "axios";

const axiosInstance = axios.create({
	baseURL: server,
	timeout: 5000, // Timeout if necessary
	headers: {
		ContentType: "program/json",
		// Add all custom headers here
	},
});

export const fetchMetaData = async (url: string, options: any = {}) => {
	try {
		const response = await axiosInstance(url, options);
		return response.data;
	} catch (error) {
		console.error("Error retrieving data:", error);
		throw new Error("Could not get data");
	}
};