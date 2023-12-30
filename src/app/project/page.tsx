"use client";
import React from "react";
import Header from "@/components/Layout/Header/Header";

import Function from "@/components/Function/Function";
import { Suspense, useEffect } from "react";
import ProjectList from "@/components/Project/ProjectList";

import { useFetch } from "@/hook/useFetch";
import { useSearchParams } from "next/navigation";
import { RootObject } from "@/utils/type";

export default function page() {
	const { data, loading, error, fetchData } = useFetch<RootObject>();
	const searchParams = useSearchParams();
	const search = searchParams.get("page");
	const page = search ? parseInt(search) : 1;
	useEffect(() => {
		console.log("file: page.tsx:56 ~ ProjectPage ~ page:", page);
		fetchData({ method: "GET", link: `house/pagination/${page}/6/id` });
	}, [page]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	return (
		<>
			<Header name="My Project"></Header>
			<main style={{ gridArea: "main", marginRight: "3rem" }}>
				{data && (
					<section className="container">
						<Suspense fallback={<>loading</>}>
							{/* <ProjectList data={DUMMY_DATA.data} /> */}
							<ProjectList data={data.response.content} />
						</Suspense>
						<Function
							page={data.response.pageable.pageNumber + 1}
							total={data.response.totalPages}
						/>
					</section>
				)}
			</main>
		</>
	);
}
