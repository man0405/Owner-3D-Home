"use client";
import ProjectDetail from "@/components/Project/ProjectDetail/ProjectDetail";
import { useFetch } from "@/hook/useFetch";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { HouseInfo } from "@/utils/type";
import Card from "@/components/UI/Card/Card";
import { padding } from "polished";

const ProjectDetailPage = () => {
	const pathname = useParams();
	console.log("file: page.tsx:10 ~ ProjectDetailPage ~ pathname:", pathname);
	const { data, loading, error, fetchData } = useFetch<HouseInfo>();
	useEffect(() => {
		fetchData({ method: "GET", link: `house/owner/id/${pathname.id}` });
	}, [pathname.id]);
	return (
		<main style={{ gridArea: "main", marginRight: "3rem" }}>
			{data && (
				<Card style={{ padding: "1.2rem 2rem" }}>
					<ProjectDetail data={data} />
				</Card>
			)}
		</main>
	);
};

export default ProjectDetailPage;
