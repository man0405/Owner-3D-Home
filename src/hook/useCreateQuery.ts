import { useCallback } from "react";

const useCreateQuery = (searchParams: URLSearchParams) => {
	const createQueryString = useCallback(
		(name: string, value: number) => {
			const params = new URLSearchParams(searchParams);
			params.set(name, value + "");
			return params.toString();
		},
		[searchParams]
	);

	return createQueryString;
};

export default useCreateQuery;
