import React, { FC, useState } from "react";
import LoginView from "../../components/loginView";
import { PureComponentType } from "@/model/DVM/components.dvm";
import { LoginDataType, LoginResponseType } from "@/modules/core/models/DVM";
import WBC_HOOKS from "@/helper/hooks";
import API_ROUTES from "../../model/constants/constants";
import { validateLogin } from "../../helper/login.helper";
import ViewHelper from "@/helper/view";
import { useRouter } from "next/navigation";
import siteConstants from "@/model/constants";

const LoginController: FC<PureComponentType> = () => {
	const router = useRouter();
	const [loginData, setLoginData] = useState<LoginDataType>({ email: "", password: "" });
	const [showForgotPasswordModal, setShowForgotPasswordModal] = useState<boolean>(false);
	const { state, isLoading, error, fieldErrors, execute, clearFieldError } = WBC_HOOKS.useActionState<LoginDataType, LoginResponseType>({ email: "", password: "" }, null);
	const handleOnchange = (name: string, value: any) => ViewHelper.handleChangeHelper<LoginDataType>(name, value, clearFieldError, setLoginData);
	const moveToRegistration = () => router.push(siteConstants.RoutesConst.registrationPage);
	const handleLoginClick = (event: any) => {
		if (isLoading) {
			event.preventDefault();
		} else {
			execute(loginData, validateLogin, API_ROUTES.LOGIN);
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
			moveToRegistration={moveToRegistration}
		/>
	);
};

export default LoginController;
