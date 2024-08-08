import { REGX_CONST } from "../models/constants/regex.const";

const textValidation = (text: string) => {
	if (!text || text.trim() === "") {
		return "empty";
	}
	return null;
};
const numberValidation = (number: number) => {
	if (!number) {
		return "empty";
	}
	return null;
};
const intergerValidation = (number: number) => {
	if (!number) {
		return "empty";
	}
	return null;
};
export const password_Validate = (value: string): boolean => {
	if (value) {
		if (REGX_CONST.PASSWORD.test(value)) {
			return true;
		} else {
			return false;
		}
	} else {
		return true;
	}
};

export const validPhoneNumber = (inputNumber: string) => {
	let maxOf15Digits = 999999999999999;
	let MaxStringLength = 16; //15 digit and a plus symbol
	return (
		inputNumber === "+" || inputNumber === "" || (inputNumber.length <= MaxStringLength && REGX_CONST.MOBILE.test(inputNumber) && Number.parseInt(inputNumber) <= maxOf15Digits)
	);
};

export const verifyUserPhoneNumber = (inputNumber: string) => {
	if (inputNumber.charAt(0) !== "+") {
		if (inputNumber.length === 10) {
			return "+1" + inputNumber;
		} else if (inputNumber.length === 11 && inputNumber.charAt(0) === "0") {
			return "+1" + inputNumber.slice(1);
		}
		return "+" + inputNumber;
	}
	return inputNumber;
};

export { textValidation, numberValidation, intergerValidation };
