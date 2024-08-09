import React, { FC, useState } from "react";
import LoginView from "../../components/loginView";
import { PureComponentType } from "@/model/DVM/components.dvm";
import { LoginDataType, LoginResponseType } from "@/modules/core/models/DVM";
import WBC_HOOKS from "@/helper/hooks";
import WBC_API from "@/api";
import API_ROUTES from "../../model/constants/constants";
import { validateLogin } from "../../helper/login.helper";
import ViewHelper from "@/helper/view";

const LoginController: FC<PureComponentType> = () => {
	const [loginData, setLoginData] = useState<LoginDataType>({ email: "", password: "" });
	const [showForgotPasswordModal, setShowForgotPasswordModal] = useState<boolean>(false);
	const { state, isLoading, error, fieldErrors, execute, clearFieldError } = WBC_HOOKS.useActionState<LoginDataType, LoginResponseType>({ email: "", password: "" }, null);
	const handleOnchange = (name: string, value: any) => ViewHelper.handleChangeHelper<LoginDataType>(name, value, clearFieldError, setLoginData);
	const serverLogin = async () => {
		const response = await WBC_API.post(API_ROUTES.LOGIN, loginData);
		if (!response.status || response.status > 300) {
			throw new Error("Failed to fetch data");
		}
		return response.data as LoginResponseType;
	};
	const handleLoginClick = (event: any) => {
		if (isLoading) {
			event.preventDefault();
		} else {
			execute(loginData, validateLogin, serverLogin);
		}
	};
	const handleForgotLinkClick = () => {
		setShowForgotPasswordModal(true);
	};
	const closeForgotPasswordModal = () => {
		setShowForgotPasswordModal(false);
	};
	return (
		<LoginView
			loginData={state}
			isLoading={isLoading}
			error={error}
			errorMessage={fieldErrors}
			handleOnchange={handleOnchange}
			handleLoginClick={handleLoginClick}
			showForgotPasswordModal={showForgotPasswordModal}
			handleForgotLinkClick={handleForgotLinkClick}
			closeForgotPasswordModal={closeForgotPasswordModal}
		/>
	);
};

export default LoginController;
