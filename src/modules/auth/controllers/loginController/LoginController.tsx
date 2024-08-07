import * as React from "react";
import LoginView from "../../components/loginView";
import { useFormState, useFormStatus } from "react-dom";
import { PureComponentType } from "@/model/DVM/components.dvm";
import { LoginDataType, LoginResponseType } from "@/modules/core/models/DVM";
import { authenticate } from "@/app/lib/action";
import WBC_HOOKS from "@/helper/hooks";
import WBC_API from "@/api";
import API_ROUTES from "../../model/constants/constants";

const LoginController: React.FC<PureComponentType> = () => {
	const { pending } = useFormStatus();

	const [loginData, setLoginData] = React.useState<LoginDataType>({
		email: "",
		password: "",
	});
	// const [errorMessage, dispatch] = useFormState(authenticate, loginData);
	const { state, isLoading, error, execute } = WBC_HOOKS.useActionState<LoginDataType, LoginResponseType>({
		email: "",
		password: "",
	});
	const handleOnchange = (name: string, value: any) => {
		setLoginData((data) => {
			return { ...data, [name]: value };
		});
	};
	const serverLogin = async () => {
		await WBC_API.post(API_ROUTES.LOGIN, loginData); // server login
	};
	const handleLoginClick = (event: any) => {
		if (pending) {
			event.preventDefault();
		} else {
			execute(serverLogin);
		}
	};
	const handlefORGOTClick = () => {};
	return <LoginView handleLoginClick={handleLoginClick} handlefORGOTClick={handlefORGOTClick} errorMessage={error} handleOnchange={handleOnchange} loginData={state} />;
};

export default LoginController;
