import { btnEnum } from "@/model/enum/component.enum";
import EmailFormWBC from "@/modules/core/components/forms/EmailFormWBC";
import PasswordFormWBC from "@/modules/core/components/forms/PasswordFormWBC";
import WbcButton from "@/modules/core/components/WbcButton";
import WbcImage from "@/modules/core/components/WbcImage";
import { t } from "i18next";
import React, { ChangeEvent, memo, useRef } from "react";
import { RegisterationFormNames } from "../../model/constants/login.form";
import { RegisterDataType } from "@/modules/core/models/DVM";
import { FieldErrors } from "@/model/DVM/core.dvm";
import TextFormWBC from "@/modules/core/components/forms/TextFormWBC";
import ImageFormWBC from "@/modules/core/components/forms/ImageFormWBC";
import SelectFormWBC from "@/modules/core/components/forms/SelectFormWBC";
import PhoneFormWBC from "@/modules/core/components/forms/PhoneFormWBC";
import DateFormWBC from "@/modules/core/components/forms/DateFormWBC";
import AutoCompleteInputWBC from "@/modules/core/components/inputs/AutoCompleteInputWBC";
import AutoCompleteFormWBC from "@/modules/core/components/forms/AutoCompleteFormWBC";
import { stateListTransform } from "@/helper/view/view.helper";

type RegisterViewProps = {
	handleRegisterationClick: React.MouseEventHandler<HTMLButtonElement>;
	setImgProfileTmp: React.Dispatch<React.SetStateAction<string>>;
	setImgFileTmp: React.Dispatch<React.SetStateAction<ChangeEvent<HTMLInputElement> | undefined>>;
	handleOnchange: (name: string, value: string) => void;
	registerationData: RegisterDataType;
	errorMessage: FieldErrors;
	isLoading: boolean;
	error: Error | null;
	imageProfileTmp: string;
	moveToLogin: Function;
	countryList: Array<any>;
	cityList: Array<any>;
	stateList: Array<any>;
};

const RegisterView: React.FC<RegisterViewProps> = (props: RegisterViewProps) => {
	const {
		handleRegisterationClick,
		errorMessage,
		handleOnchange,
		registerationData,
		isLoading,
		error,
		imageProfileTmp,
		setImgProfileTmp,
		setImgFileTmp,
		moveToLogin,
		countryList,
		cityList,
		stateList,
	} = props;

	const inputRefUploadFile = useRef<HTMLInputElement | null>(null);
	return (
		<div className="basis-full md:basis-3/4 lg:basis-1/2 !w-full !min-w-full content-center select-none overflow-y-auto	">
			<div className="items-center max-w-[38rem] w-full flex justify-center flex-col gap-5 p-5 mx-auto">
				<WbcImage src="/img/header-logo.svg" alt="logo" height={130} width={130} />
				<div className="w-full flex flex-col gap-3 p-4 text-black ">
					<div className="w-full text-lg font-semibold">{t("auth.text.Create_an_account")}</div>
					<div className="flex flex-col max-h-screen ">
						<div className="flex flex-row ">
							<div className="flex items-center justify-center h-40 w-40">
								<ImageFormWBC
									imageProfileTmp={imageProfileTmp}
									inputRefUploadFile={inputRefUploadFile}
									setImgFileTmp={setImgFileTmp}
									setImgProfileTmp={setImgProfileTmp}
									label={"Upload profile"}
								/>
							</div>
							<div className="flex flex-grow flex-col px-1.5">
								<div className="mb-2">
									<TextFormWBC
										handleChange={handleOnchange}
										label="First name"
										name="firstName"
										value={registerationData.firstName}
										placeholder="First name"
										inputProps={{
											className: "border !border-gray-500 !outline-gray-500	block rounded-[0.625rem] w-full h-12 px-4 py-3 text-sm !decoration-gray-500 !text-gray-500 ",
										}}
									/>
									<div className="text-red-500">{errorMessage && errorMessage.firstName && <p>{errorMessage.firstName}</p>}</div>
								</div>
								<div className="mb-2">
									<TextFormWBC
										handleChange={handleOnchange}
										label="Last name"
										name="lastName"
										value={registerationData.lastName}
										placeholder="Last name"
										inputProps={{
											className: "border !border-gray-500 !outline-gray-500	block rounded-[0.625rem] w-full h-12 px-4 py-3 text-sm !decoration-gray-500 !text-gray-500 ",
										}}
									/>
									<div className="text-red-500">{errorMessage && errorMessage.lastName && <p>{errorMessage.lastName}</p>}</div>
								</div>
							</div>
						</div>
					</div>
					<div className=" w-full">
						<EmailFormWBC
							label={t("auth.form.email.label")}
							name={RegisterationFormNames.EMAIL}
							placeholder={t("auth.form.email.placeholder")}
							required
							value={registerationData.email}
							handleChange={handleOnchange}
							inputProps={{
								className: "border !border-gray-500 !outline-gray-500	block rounded-[0.625rem] w-full h-12 px-4 py-3 text-sm !decoration-gray-500 !text-gray-500 ",
							}}
						/>
						<div className="text-red-500">{errorMessage && errorMessage.email && <p>{errorMessage.email}</p>}</div>
					</div>
					<div className=" w-full">
						<div>
							<PasswordFormWBC
								showEye={true}
								label={t("auth.form.password.label")}
								name={RegisterationFormNames.PASSWORD}
								placeholder={t("auth.form.password.placeholder")}
								required
								handleChange={handleOnchange}
								value={registerationData.password}
								inputProps={{
									className: "border !border-gray-500 !outline-gray-500	block rounded-[0.625rem] w-full h-12 px-4 py-3 text-sm !decoration-gray-500 !text-gray-500 ",
								}}
							/>
							<div className="text-red-500">{errorMessage && errorMessage.password && <p>{errorMessage.password}</p>}</div>
						</div>
					</div>
					<div className="flex flex-row ">
						<div className="flex flex-col w-1/2 pr-1">
							<SelectFormWBC
								name="gender"
								label="Gender"
								value={registerationData.gender}
								required={true}
								placeholder="Select"
								handleChange={handleOnchange}
								SelectInputProps={{
									defaultOptionProps: {},
									selectOptions: [
										{ value: "Male", children: "Male" },
										{ value: "Female", children: "Female" },
									],
									selectProps: {
										id: "gender",
										className: "border !border-gray-500 !outline-gray-500	block rounded-[0.625rem] w-full h-12 px-4 py-3 text-sm !decoration-gray-500 !text-gray-500",
									},
								}}
							/>
						</div>
						<div className="flex flex-col w-1/2 pl-1">
							<AutoCompleteFormWBC
								inputProps={{
									inputProps: {
										autoComplete: "new-off",
										className: "border !border-gray-500 !outline-gray-500	block rounded-[0.625rem] w-full h-12 px-4 py-3 text-sm !decoration-gray-500 !text-gray-500 ",
									},
									itemToString: (item) => (item ? item.name : ""),
									items: countryList,
									name: "country",
									onSelect: handleOnchange,
								}}
								label="Country"
							/>
						</div>
					</div>
					<div className="flex flex-row ">
						<div className="flex flex-col w-1/2 pr-1">
							<SelectFormWBC
								name="state"
								label="State"
								value={registerationData.state}
								required={true}
								placeholder="State"
								handleChange={handleOnchange}
								SelectInputProps={{
									defaultOptionProps: {},
									selectOptions: stateListTransform(stateList),
									selectProps: {
										id: "state",
										className: "border !border-gray-500 !outline-gray-500	block rounded-[0.625rem] w-full h-12 px-4 py-3 text-sm !decoration-gray-500 !text-gray-500",
									},
								}}
							/>
						</div>
						<div className="flex flex-col w-1/2 pl-1">
							<TextFormWBC
								handleChange={handleOnchange}
								label="City"
								name="city"
								value={registerationData.city}
								placeholder="City"
								inputProps={{
									className: "border !border-gray-500 !outline-gray-500	block rounded-[0.625rem] w-full h-12 px-4 py-3 text-sm !decoration-gray-500 !text-gray-500 ",
								}}
							/>
						</div>
					</div>
					<div className=" w-full">
						<PhoneFormWBC
							handleChange={handleOnchange}
							label="Mobile No."
							subLabel="(Please select country code)"
							name="contactNo"
							value={registerationData.contactNo}
							placeholder="Enter Mobile number"
							inputProps={{
								id: "PhoneInputInput",
								international: true,
								countryCallingCodeEditable: false,
								className: "border !border-gray-500 !outline-gray-500	block rounded-[0.625rem] w-full h-12 px-4 py-3 text-sm !decoration-gray-500 !text-gray-500 ",
							}}
						/>
					</div>
					<div className=" w-full">
						<DateFormWBC
							handleChange={handleOnchange}
							label="Birthdate"
							name="birthDate"
							value={registerationData.birthDate}
							inputProps={{
								className: "border !border-gray-500 !outline-gray-500	block rounded-[0.625rem] w-full h-12 px-4 py-3 text-sm !decoration-gray-500 !text-gray-500 ",
							}}
						/>
					</div>
					<div className=" w-full">
						<TextFormWBC
							handleChange={handleOnchange}
							label="UserName"
							name="userName"
							value={registerationData.userName}
							placeholder="UserName"
							inputProps={{
								className: "border !border-gray-500 !outline-gray-500	block rounded-[0.625rem] w-full h-12 px-4 py-3 text-sm !decoration-gray-500 !text-gray-500 ",
							}}
						/>
					</div>
					<div className=" w-full">
						{error ? <span className="w-full text-center flex flex-row justify-center flex-auto ">{error.message}</span> : null}
						<WbcButton
							aria-disabled={isLoading}
							btnType={btnEnum.action}
							onClick={handleRegisterationClick}
							className={
								"bg-primary brightness-100 hover:brightness-110 hover:shadow-2xl border block rounded-[0.625rem] w-full h-12 px-4 py-3 text-sm !decoration-white !text-white "
							}
						>
							{t("auth.action.Register")}
						</WbcButton>
						<div className="text-md">
							{t("auth.text.Dont_have_an_account")}
							<span className="text-primary">
								<WbcButton
									btnType={btnEnum.action}
									onClick={() => moveToLogin()}
									className={"inline text-left text-md brightness-100 hover:brightness-125 hover:underline !decoration-[#F8408C] text-primary "}
								>
									{t("auth.action.login")}
								</WbcButton>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(RegisterView);
