import { Dispatch, SetStateAction } from "react";

export type LoginDataType = {
	email: string;
	password: string;
};
export type LoginResponseType = {
	status: string;
	message: string;
	payload: {
		tokens: {
			access: {
				token: string;
				expires: string;
			};
			refresh: {
				token: string;
				expires: string;
			};
		};
	};
};
export type ModalProps = {
	openModal: boolean;
	maskBlured?: boolean;
	showCloseButton?: boolean;
	closeOnOutsideClick?: boolean;
	children?: React.ReactNode;
	onClose: Function;
};
