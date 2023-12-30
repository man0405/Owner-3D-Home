import { useEffect, useState } from "react";

export const useFetch = <T>() => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const fetchData = async ({
		method,
		body,
		link,
	}: {
		method: string;
		body?: {};
		link: string;
	}) => {
		setLoading(true);
		setError(null);
		try {
			const options: {
				method: string;
				credentials: RequestCredentials;
				headers: { "Content-Type": string };
				body?: string;
			} = {
				method: method,
				credentials: "include" as const,
				headers: {
					"Content-Type": "application/json",
				},
			};
			if (body) {
				options.body = JSON.stringify(body);
			}

			const response = await fetch(
				process.env.NEXT_PUBLIC_API_URL + "/" + link,
				{
					...options,
				}
			);
			if (response.ok) {
				const data = await response.json();
				console.log("file: useFetch.ts:37 ~ useFetch ~ data:", data);
				setData(data);
			} else {
				throw new Error("Request failed");
			}
		} catch (error: any) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	return { data, loading, error, fetchData };
};
