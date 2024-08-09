import React, { useState } from "react";
import ForgotPasswordView from "../../components/forgotPasswordView";
import ViewHelper from "@/helper/view";
import { ForgotPasswordDataType, ForgotPasswordResponseType } from "@/modules/core/models/DVM";
import WBC_HOOKS from "@/helper/hooks";
import WBC_API from "@/api";
import API_ROUTES from "../../model/constants/constants";
import { validateForgotPassword } from "../../helper/login.helper";

type ForgotPasswordControllerProps = {
	onClose: Function;
};

const ForgotPasswordController: React.FC<ForgotPasswordControllerProps> = (props: ForgotPasswordControllerProps) => {
	const { onClose } = props;
	const [forgotPasswordData, setForgotPasswordData] = useState<ForgotPasswordDataType>({ email: "" });
	const { state, isLoading, error, fieldErrors, execute, clearFieldError } = WBC_HOOKS.useActionState<ForgotPasswordDataType, ForgotPasswordResponseType>({ email: "" }, null);
	const serverLogin = async () => {
		const response = await WBC_API.post(API_ROUTES.LOGIN, forgotPasswordData);
		if (!response.status || response.status > 300) {
			throw new Error("Failed to fetch data");
		}
		return response.data as ForgotPasswordResponseType;
	};
	const handleOnchange = (name: string, value: string) => ViewHelper.handleChangeHelper<ForgotPasswordDataType>(name, value, clearFieldError, setForgotPasswordData);

	const handleForgotPasswordClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (isLoading) {
			event.preventDefault();
		} else {
			execute(forgotPasswordData, validateForgotPassword, serverLogin);
		}
	};
	return (
		<ForgotPasswordView
			forgotPasswordData={state}
			isLoading={isLoading}
			error={error}
			errorMessage={fieldErrors}
			handleOnchange={handleOnchange}
			handleForgotPasswordClick={handleForgotPasswordClick}
			onClose={onClose}
		/>
	);
};

export default ForgotPasswordController;
