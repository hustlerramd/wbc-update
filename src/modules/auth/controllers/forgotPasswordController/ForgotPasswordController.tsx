import React, { useState } from "react";
import ForgotPasswordView from "../../components/forgotPasswordView";
import ViewHelper from "@/helper/view";
import { ForgotPasswordDataType, ForgotPasswordResponseType } from "@/modules/core/models/DVM";
import WBC_HOOKS from "@/helper/hooks";

type ForgotPasswordControllerProps = {
	//
};

const ForgotPasswordController: React.FC<ForgotPasswordControllerProps> = (props: ForgotPasswordControllerProps) => {
	const [forgotPasswordData, setForgotPasswordData] = useState<LoginDataType>({ email: "" });
	const { state, isLoading, error, fieldErrors, execute, clearFieldError } = WBC_HOOKS.useActionState<ForgotPasswordDataType, ForgotPasswordResponseType>({ email: "" }, null);
	const handleOnchange = (name: string, value: any) => ViewHelper.handleChangeHelper<ForgotPasswordDataType>(name, value, clearFieldError, setForgotPasswordData);
	return <ForgotPasswordView email={forgotPasswordData.email} setEmail={handleOnchange} />;
};

export default ForgotPasswordController;
