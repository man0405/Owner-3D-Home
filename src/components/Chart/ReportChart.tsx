"use client";
import React from "react";
import Card from "../UI/Card/Card";
import classes from "./ReportChart.module.css";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { options } from "./Option";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);
const TEMP_MONTH = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November ",
	"December",
];

export default function ReportChart({
	style,
	chartData,
}: {
	style?: {};
	chartData: number[];
}) {
	const length = chartData?.length;
	console.log("file: ReportChart.tsx:56 ~ length", length);
	let month = new Date().getMonth();
	console.log("file: ReportChart.tsx:40 ~ month:", month);

	const labels = [];
	for (let i = 0; i < length; i++) {
		if (month === 0) {
			labels.unshift(TEMP_MONTH[0]);
			month = 11;
		} else {
			labels.unshift(TEMP_MONTH[month]);
			month--;
		}
	}
	console.log(labels);

	const data = {
		labels: labels,
		datasets: [
			{
				label: "View",
				data: chartData,
				fill: true,
				backgroundColor: "rgba(75, 192, 192, 0.2)",
				borderColor: "rgb(75, 192, 192)",
				tension: 0.2,
			},
		],
	};
	return (
		<Card className={classes.chart} style={style}>
			<Line data={data} options={options} />
		</Card>
	);
}
