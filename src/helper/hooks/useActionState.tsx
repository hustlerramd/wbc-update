import { FieldErrors, UseActionStateResult } from "@/model/DVM/core.dvm";
import { useCallback, useState } from "react";

const useActionState = <T, R>(initialState: T, InitialResonse: R | null): UseActionStateResult<T, R> => {
	const [state, setState] = useState<T>(initialState);
	const [response, setResponse] = useState<R | null>(InitialResonse);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

	const execute = useCallback(async (formData: T, validate: (formData: T) => FieldErrors, action: () => Promise<R>) => {
		if (validate) {
			const errors = validate(formData);
			const hasErrors = Object.values(errors).some((error) => error !== null);
			setFieldErrors(errors);
			if (hasErrors) {
				setError(new Error("Validation failed"));
				return;
			}
		}

		setIsLoading(true);
		setError(null);
		try {
			const result = await action();
			setResponse(result);
		} catch (err) {
			setError(err as Error);
		} finally {
			setIsLoading(false);
		}
	}, []);
	const clearFieldError = (field: string) => {
		setError(null);
		setFieldErrors((prevErrors) => ({
			...prevErrors,
			[field]: null,
		}));
	};
	return { state, isLoading, error, fieldErrors, execute, response, clearFieldError };
};

export default useActionState;
