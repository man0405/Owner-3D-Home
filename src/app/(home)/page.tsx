"use client";
import classes from "./page.module.css";

import Header from "@/components/Layout/Header/Header";
import SmallWidget from "@/components/Widget/SmallWidget";
import ReportChart from "@/components/Chart/ReportChart";
import AnalyticsChart from "@/components/Chart/AnalyticsChart";

import { GrFormView, GrProjects } from "react-icons/gr";
import { FaAddressBook, FaClipboardCheck } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { useEffect, useState } from "react";
import { useFetch } from "@/hook/useFetch";

const rewriteDataWidget = (data: number[]) => {
	const widgetData = [
		{
			icon: <GrFormView />,
			result: data[0],
			field: "View Project",
			color: "#5B93FF",
		},
		{
			icon: <FaAddressBook />,
			result: data[1],
			field: "Leave Information",
			color: "#FFC327",
		},
		{
			icon: <FaClipboardCheck />,
			result: "1",
			field: "Purchased Project ",
			color: "#FF8F6B",
		},
		{
			icon: <GrProjects />,
			result: data[2],
			field: "Projects",
			color: "#605bff",
		},
	];
	return widgetData;
};
let test = [0, 2, 3];
console.log(test.splice(1 + 1, 0, 0));

export default function Home() {
	const {
		data: dataWidget,
		loading: loadingWidget,
		error: errorWidget,
		fetchData: fetchDataWidget,
	} = useFetch<number[]>();

	useEffect(() => {
		fetchDataWidget({ method: "GET", link: "api/owners/statistic" });
	}, []);

	return (
		<>
			<Header name="Dashboard"></Header>
			<main
				style={{ gridArea: "main", marginRight: "3rem", marginTop: "2rem" }}
			>
				<div className={classes.widget}>
					{dataWidget ? (
						rewriteDataWidget(dataWidget).map((item, index) => (
							<SmallWidget
								key={index}
								icon={item.icon}
								result={item.result + ""}
								field={item.field}
								color={item.color}
							/>
						))
					) : (
						<>Loading........</>
					)}
				</div>
				<div className={classes.chart}>
					<ReportChart />
					{dataWidget && (
						<AnalyticsChart
							requestData={[dataWidget[0], dataWidget[1], 1, dataWidget[2]]}
						/>
					)}
				</div>
			</main>
		</>
	);
}
