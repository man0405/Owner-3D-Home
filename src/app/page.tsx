import classes from "./page.module.css";

import Header from "@/components/Layout/Header/Header";
import SmallWidget from "@/components/Widget/SmallWidget";
import ReportChart from "@/components/Chart/ReportChart";
import AnalyticsChart from "@/components/Chart/AnalyticsChart";

import { GrFormView, GrProjects } from "react-icons/gr";
import { FaAddressBook, FaClipboardCheck } from "react-icons/fa";
import { MdError } from "react-icons/md";

const widgetData = [
	{
		icon: <GrFormView />,
		result: "178",
		field: "View Project",
		color: "#5B93FF",
	},
	{
		icon: <FaAddressBook />,
		result: "200",
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
		result: "1",
		field: "Projects",
		color: "#605bff",
	},
];

export default function Home() {
	return (
		<>
			<Header name="Dashboard"></Header>
			<main style={{ gridArea: "main", marginRight: "3rem" }}>
				<div className={classes.widget}>
					{widgetData.map((item, index) => (
						<SmallWidget
							key={index}
							icon={item.icon}
							result={item.result}
							field={item.field}
							color={item.color}
						/>
					))}
				</div>
				<div className={classes.chart}>
					<ReportChart />
					<AnalyticsChart />
				</div>
			</main>
		</>
	);
}
