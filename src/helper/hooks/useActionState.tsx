import { UseActionStateResult } from "@/model/DVM/core.dvm";
import { useCallback, useState } from "react";

const useActionState = <D, R>(initialState: D, InitialResponse: R): UseActionStateResult<D> => {
	const [state, setState] = useState<D>(initialState);
	const [response, setResponse] = useState<R>(InitialResponse);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<D | null>(null);

	const execute = useCallback(async (action: () => R) => {
		setIsLoading(true);
		setError(null);
		try {
			const result = await action();
			setResponse(result);
		} catch (err) {
			setError(err as D);
		} finally {
			setIsLoading(false);
		}
	}, []);

	return { state, isLoading, error, execute };
};

export default useActionState;
