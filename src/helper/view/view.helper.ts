export const handleChangeHelper = <T>(name: string, value: any, clearFieldError: (field: string) => void, setLoginData: (value: React.SetStateAction<T>) => void) => {
	clearFieldError(name);
	setLoginData((data: T) => {
		return { ...data, [name]: value };
	});
};
