import React, { ChangeEvent, useState } from "react";
import API_ROUTES from "../../model/constants/constants";
import WBC_API from "@/api";
import WBC_HOOKS from "@/helper/hooks";
import RegisterView from "../../components/registerView";
import { RegisterDataType, RegisterResponseType } from "@/modules/core/models/DVM";
import { PureComponentType } from "@/model/DVM/components.dvm";
import ViewHelper from "@/helper/view";
import { validateRegisteration } from "../../helper/login.helper";

const RegisterDataEmpty: RegisterDataType = {
	birthDay: "",
	city: "",
	country: "",
	email: "",
	firstName: "",
	gender: "",
	lastName: "",
	mobileNumber: "",
	password: "",
	profilePic: "",
	state: "",
	userName: "",
};

const RegisterController: React.FC<PureComponentType> = () => {
	const [registerationData, setRegisterationData] = useState<RegisterDataType>(RegisterDataEmpty);
	const { state, isLoading, error, fieldErrors, execute, clearFieldError } = WBC_HOOKS.useActionState<RegisterDataType, RegisterResponseType>(RegisterDataEmpty, null);
	const [imageProfileTmp, setImgProfileTmp] = useState<string>("");
	const [imageFileTmp, setImgFileTmp] = useState<ChangeEvent<HTMLInputElement>>();
	const handleOnchange = (name: string, value: any) => ViewHelper.handleChangeHelper<RegisterDataType>(name, value, clearFieldError, setRegisterationData);
	const serverRegisteration = async () => {
		const response = await WBC_API.post(API_ROUTES.LOGIN, registerationData);
		if (!response.status || response.status > 300) {
			throw new Error("Failed to fetch data");
		}
		return response.data as RegisterResponseType;
	};
	const handleRegisterationClick = (event: any) => {
		if (isLoading) {
			event.preventDefault();
		} else {
			execute(registerationData, validateRegisteration, serverRegisteration);
		}
	};
	return (
		<RegisterView
			registerationData={state}
			isLoading={isLoading}
			error={error}
			errorMessage={fieldErrors}
			handleOnchange={handleOnchange}
			handleRegisterationClick={handleRegisterationClick}
			imageProfileTmp={imageProfileTmp}
			setImgProfileTmp={setImgProfileTmp}
			setImgFileTmp={setImgFileTmp}
		/>
	);
};

export default RegisterController;
