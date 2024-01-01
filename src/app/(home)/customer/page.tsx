"use client";
import Header from "@/components/Layout/Header/Header";
import React, { useEffect } from "react";
import CustomerTable from "@/components/Table/CustomerTable";
import { useFetch } from "@/hook/useFetch";
import { Person } from "@/utils/type";

export default function page() {
	const { data, loading, error, fetchData } = useFetch<Person>();

	useEffect(() => {
		fetchData({ method: "GET", link: "api/visitCustomerInfo" });
	}, []);
	return (
		<>
			<Header name="List Customer"></Header>
			<main style={{ gridArea: "main", marginRight: "3rem" }}>
				{data && <CustomerTable data={data} />}
			</main>
		</>
	);
}
