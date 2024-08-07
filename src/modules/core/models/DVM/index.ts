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
