"use server";

import { signIn } from "@/auth";
import VALIDATE_AUTH from "@/modules/auth/helper";
import { LoginDataType } from "@/modules/core/models/DVM";

export async function authenticate(_currentState: LoginDataType, formData: LoginDataType) {
	let invputValidation = VALIDATE_AUTH.login(formData);
	console.log("formData", formData);
	console.log("invputValidation", invputValidation);
	if (invputValidation !== null) {
		return invputValidation;
	} else {
		try {
			await signIn(formData);
		} catch (error: any) {
			return error;
		}
	}
	return formData;
}
