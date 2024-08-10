import React, { ChangeEvent, useState } from "react";
import API_ROUTES, { RegisterDataEmpty } from "../../model/constants/constants";
import WBC_HOOKS from "@/helper/hooks";
import RegisterView from "../../components/registerView";
import { RegisterDataType, RegisterResponseType } from "@/modules/core/models/DVM";
import { PureComponentType } from "@/model/DVM/components.dvm";
import ViewHelper from "@/helper/view";
import { validateRegisteration } from "../../helper/login.helper";
import { s3upload } from "@/helper/S3/aws_s3";
import siteConstants from "@/model/constants";
import { useRouter } from "next/navigation";

const RegisterController: React.FC<PureComponentType> = () => {
	const router = useRouter();
	const [registerationData, setRegisterationData] = useState<RegisterDataType>(RegisterDataEmpty);
	const { state, isLoading, error, fieldErrors, execute, clearFieldError } = WBC_HOOKS.useActionState<RegisterDataType, RegisterResponseType>(RegisterDataEmpty, null);
	const [imageProfileTmp, setImgProfileTmp] = useState<string>("");
	const [imageFileTmp, setImgFileTmp] = useState<ChangeEvent<HTMLInputElement>>();
	const handleOnchange = (name: string, value: any) => ViewHelper.handleChangeHelper<RegisterDataType>(name, value, clearFieldError, setRegisterationData);
	const moveToLogin = () => router.push(siteConstants.RoutesConst.loginPage);
	const handleRegisterationClick = (event: any) => {
		if (isLoading) {
			event.preventDefault();
		} else {
			checkFileUpload();
		}
	};

	const checkFileUpload = () => {
		if (imageFileTmp?.bubbles && imageFileTmp.target.files) {
			const file = imageFileTmp.target.files[0];
			s3upload(file, (url: string) => execute({ ...registerationData, img_profile: url }, validateRegisteration, API_ROUTES.REGISTER));
		} else {
			return execute(registerationData, validateRegisteration, API_ROUTES.REGISTER);
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
			moveToLogin={moveToLogin}
		/>
	);
};

export default RegisterController;
