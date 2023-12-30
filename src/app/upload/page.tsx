import React from "react";
import Header from "@/components/Layout/Header/Header";
import Upload from "@/components/Upload/Upload";

export default function page() {
	return (
		<>
			<Header name="Create New Project"></Header>
			<main style={{ gridArea: "main", marginRight: "3rem" }}>
				<Upload />
			</main>
		</>
	);
}
