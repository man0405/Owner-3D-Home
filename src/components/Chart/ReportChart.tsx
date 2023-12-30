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

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
	labels: labels,
	datasets: [
		{
			label: "View",
			data: [65, 59, 80, 81, 56, 55, 40],
			fill: true,
			backgroundColor: "rgba(75, 192, 192, 0.2)",
			borderColor: "rgb(75, 192, 192)",
			tension: 0.2,
		},
	],
};

export default function ReportChart() {
	return (
		<Card className={classes.chart}>
			<Line data={data} options={options} />
		</Card>
	);
}
