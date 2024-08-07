import i18n from "@/i18n";

export const validateLogin = (email: string, password: string) => {
	if (!email) {
		return i18n.t("auth.form.email.validation.empty");
	}
	if (!password) {
		return i18n.t("auth.form.email.validation.password");
	}
	return null;
};
