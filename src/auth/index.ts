import API from "@/api";
import { AxiosResponse } from "axios";

// Define User interface
export interface User {
	id: number;
	name: string;
	email: string;
}

export const signIn = (formData: FormData): Promise<AxiosResponse<User[]>> => API.get<User[]>("/users");
export const fetchUsers = (): Promise<AxiosResponse<User[]>> => API.get<User[]>("/users");
export const fetchUserById = (id: number): Promise<AxiosResponse<User>> => API.get<User>(`/users/${id}`);
export const createUser = (userData: User): Promise<AxiosResponse<User>> => API.post<User>("/users", userData);
export const updateUser = (id: number, userData: User): Promise<AxiosResponse<User>> => API.put<User>(`/users/${id}`, userData);
export const deleteUser = (id: number): Promise<AxiosResponse<void>> => API.del<void>(`/users/${id}`);
