import * as React from "react";
import LoginView from "../../components/loginView";
import { useFormState, useFormStatus } from "react-dom";
import { PureComponentType } from "@/model/DVM/components.dvm";
import { LoginDataType, LoginResponseType } from "@/modules/core/models/DVM";
import { authenticate } from "@/app/lib/action";
import WBC_HOOKS from "@/helper/hooks";
import WBC_API from "@/api";
import API_ROUTES from "../../model/constants/constants";
import { validateLogin } from "../../helper/login.helper";

const LoginController: React.FC<PureComponentType> = () => {
	const { pending } = useFormStatus();

	const [loginData, setLoginData] = React.useState<LoginDataType>({
		email: "",
		password: "",
	});
	// const [errorMessage, dispatch] = useFormState(authenticate, loginData);
	const { state, isLoading, error, fieldErrors, execute, clearFieldError } = WBC_HOOKS.useActionState<LoginDataType, LoginResponseType>(
		{
			email: "",
			password: "",
		},
		null
	);
	const handleOnchange = (name: string, value: any) => {
		console.log("handleOnchange", name);
		clearFieldError(name);
		setLoginData((data) => {
			return { ...data, [name]: value };
		});
	};
	const serverLogin = async () => {
		// server login
		const response = await WBC_API.post(API_ROUTES.LOGIN, loginData);
		if (!response.status || response.status > 300) {
			throw new Error("Failed to fetch data");
		}
		return response.data as LoginResponseType;
	};
	const handleLoginClick = (event: any) => {
		if (pending) {
			event.preventDefault();
		} else {
			execute(loginData, validateLogin, serverLogin);
		}
	};
	const handlefORGOTClick = () => {};
	return (
		<LoginView
			handleLoginClick={handleLoginClick}
			isLoading={isLoading}
			error={error}
			handlefORGOTClick={handlefORGOTClick}
			errorMessage={fieldErrors}
			handleOnchange={handleOnchange}
			loginData={state}
		/>
	);
};

export default LoginController;
