"use client";
import ProjectDetail from "@/components/Project/ProjectDetail/ProjectDetail";
import { useFetch } from "@/hook/useFetch";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { HouseInfo } from "@/utils/type";

const ProjectDetailPage = () => {
	const pathname = useParams();
	const { data, loading, error, fetchData } = useFetch<HouseInfo>();
	useEffect(() => {
		fetchData({ method: "GET", link: `house/id/${pathname.id}` });
	}, [pathname.id]);
	return (
		<>
			{data && (
				<section>
					<ProjectDetail data={data} />
				</section>
			)}
		</>
	);
};

export default ProjectDetailPage;
