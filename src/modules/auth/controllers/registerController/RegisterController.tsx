"use client";
import React, { ChangeEvent, useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import WBC_HOOKS from "@/helper/hooks";
import { RegisterDataType, RegisterResponseType } from "@/modules/core/models/DVM";
import { PureComponentType } from "@/model/DVM/components.dvm";
import siteConstants from "@/model/constants";
import API_ROUTES, { RegisterDataEmpty } from "../../model/constants/constants";
import { s3upload } from "@/helper/S3/aws_s3";
import { validateRegisteration } from "../../helper/login.helper";
import ViewHelper from "@/helper/view";
import RegisterView from "../../components/registerView";
import { addressStore } from "@/modules/core/store/addressStore";
import { shallow } from "zustand/shallow";

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
	const { countryList, cityList, stateList, fetchCity, fetchCountry, fetchState, updateCityList } = addressStore((state) => state, shallow);
	const checkFileUpload = () => {
		if (imageFileTmp?.bubbles && imageFileTmp.target.files) {
			const file = imageFileTmp.target.files[0];
			s3upload(file, (url: string) => execute({ ...registerationData, img_profile: url }, validateRegisteration, API_ROUTES.REGISTER));
		} else {
			return execute(registerationData, validateRegisteration, API_ROUTES.REGISTER);
		}
	};
	useLayoutEffect(() => {
		fetchCountry();
	}, []);

	return (
		<RegisterView
			registerationData={registerationData}
			isLoading={isLoading}
			error={error}
			errorMessage={fieldErrors}
			handleOnchange={handleOnchange}
			handleRegisterationClick={handleRegisterationClick}
			imageProfileTmp={imageProfileTmp}
			setImgProfileTmp={setImgProfileTmp}
			setImgFileTmp={setImgFileTmp}
			moveToLogin={moveToLogin}
			countryList={countryList}
			cityList={cityList}
			stateList={stateList}
		/>
	);
};

export default RegisterController;
