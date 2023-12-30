import Header from "@/components/Layout/Header/Header";
import React from "react";
import CustomerTable from "@/components/Table/CustomerTable";

export default function page() {
	return (
		<>
			<Header name="List Customer"></Header>
			<main style={{ gridArea: "main", marginRight: "3rem" }}>
				<CustomerTable />
			</main>
		</>
	);
}
