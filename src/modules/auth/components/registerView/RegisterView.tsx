import { btnEnum } from "@/model/enum/component.enum";
import EmailFormWBC from "@/modules/core/components/forms/EmailFormWBC";
import PasswordFormWBC from "@/modules/core/components/forms/PasswordFormWBC";
import WbcButton from "@/modules/core/components/WbcButton";
import WbcImage from "@/modules/core/components/WbcImage";
import { t } from "i18next";
import React, { ChangeEvent, LegacyRef, MutableRefObject, useRef } from "react";
import { RegisterationFormNames } from "../../model/constants/login.form";
import { RegisterDataType } from "@/modules/core/models/DVM";
import { FieldErrors } from "@/model/DVM/core.dvm";
import { AllowedFileTypes, ImageSize, ImageSizeErrorMessage, ImageTypeErrorMessage } from "@/model/constants/files";
import WbcToaster from "@/modules/core/components/WbcToaster";
import TextFormWBC from "@/modules/core/components/forms/TextFormWBC";
import ImageInputWBC from "@/modules/core/components/inputs/ImageInputWBC";
import ImageFormWBC from "@/modules/core/components/forms/ImageFormWBC";

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
};

const RegisterView: React.FC<RegisterViewProps> = (props: RegisterViewProps) => {
	const { handleRegisterationClick, errorMessage, handleOnchange, registerationData, isLoading, error, imageProfileTmp, setImgProfileTmp, setImgFileTmp } = props;

	const inputRefUploadFile = useRef<HTMLInputElement | null>(null);
	return (
		<div className="basis-full md:basis-3/4 lg:basis-1/2 !w-full !min-w-full content-center select-none	">
			<div className="items-center max-w-[38rem] w-full flex justify-center flex-col gap-5 p-5 mx-auto">
				<WbcImage src="/img/header-logo.svg" alt="logo" height={130} width={130} />
				<div className="w-full flex flex-col gap-3 p-4 text-black ">
					<div className="w-full text-lg font-semibold">{t("auth.text.Create_an_account")}</div>
					<div className="flex flex-col max-h-screen mb-5">
						<div className="grid grid-cols-2 gap-2">
							<div className="flex items-center justify-center w-full">
								<ImageFormWBC
									imageProfileTmp={imageProfileTmp}
									inputRefUploadFile={inputRefUploadFile}
									setImgFileTmp={setImgFileTmp}
									setImgProfileTmp={setImgProfileTmp}
									label={"Upload profile"}
								/>
								{/* <label
									className="flex flex-col w-full h-32 border rounded-lg border-gray-500 border-solid hover:bg-gray-100 hover:border-gray-500 hover:cursor-pointer"
									onClick={() => inputRefUploadFile?.current?.click()}
								>
									{imageProfileTmp ? (
										<WbcImage src={imageProfileTmp} alt="angela" width={300} height={300} className="rounded-lg h-full w-full " />
									) : (
										<div className="flex flex-col items-center justify-center pt-7">
											<svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-brand-pink group-hover:text-gray-600" viewBox="0 0 20 20" fill="currentColor">
												<path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
											</svg>
											<p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">Upload profile</p>
										</div>
									)}
								</label>
								<ImageInputWBC inputRefUploadFile={inputRefUploadFile} setImgProfileTmp={setImgProfileTmp} setImgFileTmp={setImgFileTmp} /> */}
							</div>

							<div className="flex flex-col px-1.5">
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
							name={RegisterationFormNames.Email}
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
								name={RegisterationFormNames.Password}
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
							{t("auth.action.register")}
						</WbcButton>
						<div className="text-md">
							{t("auth.text.Dont_have_an_account")}
							<span className="text-primary">
								<WbcButton
									btnType={btnEnum.action}
									onClick={handleRegisterationClick}
									className={"inline text-left text-md brightness-100 hover:brightness-125 hover:underline !decoration-[#F8408C] text-primary "}
								>
									{t("auth.action.Register")}
								</WbcButton>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterView;
