"use client";
import React from "react";
import Header from "@/components/Layout/Header/Header";

import Function from "@/components/Function/Function";
import { Suspense, useEffect } from "react";
import ProjectList from "@/components/Project/ProjectList";

import { useFetch } from "@/hook/useFetch";
import { useSearchParams } from "next/navigation";
import { HouseInfo, customPage } from "@/utils/type";

export default function page() {
	const { data, loading, error, fetchData } = useFetch<customPage<HouseInfo>>();
	const searchParams = useSearchParams();
	const search = searchParams.get("page");
	const page = search ? parseInt(search) : 1;
	useEffect(() => {
		console.log("file: page.tsx:56 ~ ProjectPage ~ page:", page);
		fetchData({ method: "GET", link: `house/owner-houses/${page}/6/id` });
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
							<ProjectList data={data.content} />
						</Suspense>
						<Function
							page={data.pageable.pageNumber}
							total={data.pageable.totalPages - 1}
						/>
					</section>
				)}
			</main>
		</>
	);
}
