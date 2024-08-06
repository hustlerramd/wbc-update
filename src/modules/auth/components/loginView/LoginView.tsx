"use client";
import * as React from "react";
import { authenticate } from "@/app/lib/action";
import { useFormState, useFormStatus } from "react-dom";
import WbcButton from "@/modules/core/components/WbcButton";
import WbcImage from "@/modules/core/components/WbcImage";
import EmailFormWBC from "@/modules/core/components/forms/EmailFormWBC";
import { useTranslation } from "react-i18next";
import PasswordFormWBC from "@/modules/core/components/forms/PasswordFormWBC";
import { LoginFormNames } from "../../model/constants/login.form";
type LoginViewProps = {
	handleLoginClick: React.MouseEventHandler<HTMLButtonElement>;
};

const LoginView: React.FC<LoginViewProps> = (props: LoginViewProps) => {
	const [errorMessage, dispatch] = useFormState(authenticate, undefined);
	const { t } = useTranslation();
	const { pending } = useFormStatus();
	const { handleLoginClick } = props;
	return (
		<div className="basis-full md:basis-3/4 lg:basis-1/2 !w-full !min-w-full content-center	">
			<div className="items-center max-w-[28.75rem] w-full flex justify-center flex-col gap-5 p-5 mx-auto">
				<WbcImage src="/img/header-logo.svg" alt="logo" height={130} width={130} />
				<form action={dispatch} className="w-full flex flex-col gap-5 p-5 text-black ">
					{/* <input type="email" name="email" placeholder="Email" required /> */}
					<EmailFormWBC
						label={t("auth.form.email.label")}
						name={LoginFormNames.Email}
						placeholder={t("auth.form.email.placeholder")}
						required
						inputProps={{
							className: "border !border-gray-500 !outline-gray-500	block rounded-[0.625rem] w-full h-12 px-4 py-3 text-sm !decoration-gray-500 !text-gray-500 ",
						}}
					/>
					<PasswordFormWBC showEye={true} label={t("auth.form.password.label")} name={LoginFormNames.Password} placeholder={t("auth.form.password.placeholder")} required />
					{/* <input type="password" name="password" placeholder="Password" required /> */}
					<div>{errorMessage && <p>{errorMessage}</p>}</div>
					<WbcButton aria-disabled={pending} type="submit" onClick={handleLoginClick}>
						{t("auth.action.login")}
					</WbcButton>
				</form>
			</div>
		</div>
	);
};

export default LoginView;
