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
import { WBC_THEME } from "@/model/constants/theme";
import { btnEnum } from "@/model/enum/component.enum";
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
			<div className="items-center max-w-[38rem] w-full flex justify-center flex-col gap-5 p-5 mx-auto">
				<WbcImage src="/img/header-logo.svg" alt="logo" height={130} width={130} />
				<form action={dispatch} className="w-full flex flex-col gap-3 p-4 text-black ">
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
					<div>
						<PasswordFormWBC
							showEye={true}
							label={t("auth.form.password.label")}
							name={LoginFormNames.Password}
							placeholder={t("auth.form.password.placeholder")}
							required
							inputProps={{
								className: "border !border-gray-500 !outline-gray-500	block rounded-[0.625rem] w-full h-12 px-4 py-3 text-sm !decoration-gray-500 !text-gray-500 ",
							}}
						/>
						<div>{errorMessage && <p>{errorMessage}</p>}</div>
					</div>
					<div className=" w-full">
						<span className="w-full text-right flex flex-row justify-end	flex-end ">
							<WbcButton
								btnType={btnEnum.action}
								onClick={handleLoginClick}
								className={"block h-8 brightness-100 hover:brightness-125 text-right text-sm hover:underline !decoration-[#F8408C] text-primary "}
							>
								{t("auth.action.ForgotPassword")}
							</WbcButton>
						</span>
						<WbcButton
							aria-disabled={pending}
							btnType={btnEnum.submit}
							onClick={handleLoginClick}
							className={
								"bg-primary brightness-100 hover:brightness-110 hover:shadow-2xl border block rounded-[0.625rem] w-full h-12 px-4 py-3 text-sm !decoration-white !text-white "
							}
						>
							{t("auth.action.login")}
						</WbcButton>
						<div className="text-md">
							{t("auth.text.Dont_have_an_account")}
							<span className="text-primary">
								<WbcButton
									btnType={btnEnum.action}
									onClick={handleLoginClick}
									className={"inline text-left text-md brightness-100 hover:brightness-125 hover:underline !decoration-[#F8408C] text-primary "}
								>
									{t("auth.action.Register")}
								</WbcButton>
							</span>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginView;
