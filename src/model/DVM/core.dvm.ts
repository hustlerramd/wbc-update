export interface FieldErrors {
	[key: string]: string | null;
}

export interface UseActionStateResult<T, R> {
	state: T;
	isLoading: boolean;
	error: Error | null;
	fieldErrors: FieldErrors;
	execute: (formData: T, validate: (formData: T) => FieldErrors, action: () => Promise<R>) => void;
	clearFieldError: (field: string) => void;
	response: R | null;
}
