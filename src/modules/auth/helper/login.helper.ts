import i18n from "@/i18n";
import { FieldErrors } from "@/model/DVM/core.dvm";
import { LoginFormNames } from "../model/constants/login.form";
import { ForgotPasswordDataType, LoginDataType } from "@/modules/core/models/DVM";

export const validateLogin = (data: LoginDataType) => {
	// email: string, password: string
	const errors: FieldErrors = {};
	if (!data || !data.email || data.email.trim() === "") {
		errors[LoginFormNames.Email] = i18n.t("auth.form.email.validation.empty");
	}
	if (!data || !data.password || data.password.trim() === "") {
		errors[LoginFormNames.Password] = i18n.t("auth.form.password.validation.empty");
	}
	return errors;
};
export const validateForgotPassword = (data: ForgotPasswordDataType) => {
	// email: string, password: string
	const errors: FieldErrors = {};
	if (!data || !data.email || data.email.trim() === "") {
		errors[LoginFormNames.Email] = i18n.t("auth.form.email.validation.empty");
	}
	return errors;
};
