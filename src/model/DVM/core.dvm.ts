export type UseActionStateResult<T> = {
	state: T;
	isLoading: boolean;
	error: T | null;
	execute: (action: () => Promise<T>) => void;
};
