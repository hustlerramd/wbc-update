import { RegisterDataType } from "@/modules/core/models/DVM";

const API_ROUTES = {
	LOGIN: "/auth/login",
	REGISTER: "/auth/register",
	PROTECTED_TOKEN: "/auth/protectedtoken",
};

export default API_ROUTES;
export const RegisterDataEmpty: RegisterDataType = {
	birthDay: "",
	city: "",
	country: "",
	email: "",
	firstName: "",
	gender: "",
	lastName: "",
	mobileNumber: "",
	password: "",
	img_profile: "",
	state: "",
	userName: "",
};
