import EmailFormWBC from "@/modules/core/components/forms/EmailFormWBC";
import { t } from "i18next";
import * as React from "react";
import { LoginFormNames } from "../../model/constants/login.form";

type ForgotPasswordViewProps = {
	email: string;
	handleOnchange: Function;
};

const ForgotPasswordView: React.FC<ForgotPasswordViewProps> = (props: ForgotPasswordViewProps) => {
	return (
		<div className="text-black">
			<div className="text-4xl font-bold ">Forgot Password</div>
			<div className="text-gray-500">Reset Password in two quick steps</div>
			<div className=" w-full">
				<EmailFormWBC
					label={t("auth.form.email.label")}
					name={LoginFormNames.Email}
					placeholder={t("auth.form.email.placeholder")}
					required
					value={props.email}
					handleChange={handleOnchange}
					inputProps={{
						className: "border !border-gray-500 !outline-gray-500	block rounded-[0.625rem] w-full h-12 px-4 py-3 text-sm !decoration-gray-500 !text-gray-500 ",
					}}
				/>
			</div>
		</div>
	);
};

export default ForgotPasswordView;
