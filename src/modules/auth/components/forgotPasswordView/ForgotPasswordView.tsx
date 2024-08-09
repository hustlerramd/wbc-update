import EmailFormWBC from "@/modules/core/components/forms/EmailFormWBC";
import { t } from "i18next";
import * as React from "react";
import { LoginFormNames } from "../../model/constants/login.form";
import WbcButton from "@/modules/core/components/WbcButton";
import { ForgotPasswordDataType } from "@/modules/core/models/DVM";
import { FieldErrors } from "@/model/DVM/core.dvm";
import { btnEnum } from "@/model/enum/component.enum";

type ForgotPasswordViewProps = {
	forgotPasswordData: ForgotPasswordDataType;
	handleForgotPasswordClick: React.MouseEventHandler<HTMLButtonElement>;
	handleOnchange: (name: string, value: string) => void;
	errorMessage: FieldErrors;
	isLoading: boolean;
	error: Error | null;
	onClose: Function;
};

const ForgotPasswordView: React.FC<ForgotPasswordViewProps> = (props: ForgotPasswordViewProps) => {
	const { forgotPasswordData, handleForgotPasswordClick, handleOnchange, errorMessage, isLoading, error, onClose } = props;
	return (
		<div className="text-black">
			<div className="text-4xl font-bold ">{t("auth.text.Forgot_Password")}</div>
			<div className="text-gray-500">{t("auth.text.Reset_Password_in_two_quick_steps")}</div>
			<div className=" w-full pt-6">
				<EmailFormWBC
					label={t("auth.form.email.label")}
					name={LoginFormNames.Email}
					placeholder={t("auth.form.email.placeholder")}
					required
					value={forgotPasswordData.email}
					handleChange={handleOnchange}
					inputProps={{
						className: "border !border-gray-500 !outline-gray-500	block rounded-[0.625rem] w-full h-12 px-4 py-3 text-sm !decoration-gray-500 !text-gray-500 ",
					}}
				/>
			</div>
			<div className=" w-full pt-6">
				<WbcButton
					aria-disabled={isLoading}
					btnType={btnEnum.action}
					onClick={handleForgotPasswordClick}
					className={"bg-primary brightness-100 hover:brightness-110 hover:shadow-2xl border block rounded-[0.625rem] w-full h-12 px-4 py-3 text-sm !decoration-white !text-white "}
				>
					{t("auth.action.ResetPassword")}
				</WbcButton>
			</div>
			<div className=" w-full pt-6">
				<WbcButton
					aria-disabled={isLoading}
					btnType={btnEnum.action}
					onClick={() => onClose()}
					className={
						"bg-gray-300 hover:bg-gray-400 brightness-100 hover:brightness-110 hover:shadow-2xl border block rounded-[0.625rem] w-full h-12 px-4 py-3 text-sm !decoration-gray-500 !text-gray-500 hover:!text-gray-700 "
					}
				>
					{t("auth.action.Back")}
				</WbcButton>
			</div>
		</div>
	);
};

export default ForgotPasswordView;
