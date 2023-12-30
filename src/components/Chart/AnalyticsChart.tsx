"use client";
import React from "react";
import classes from "./AnalyticsChart.module.css";
import Card from "../UI/Card/Card";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Chart, Registry } from "chart.js";
import { before } from "node:test";
import { borderRadius, padding } from "polished";

ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
	labels: ["View", "Leave", "Purchase", "Warning"],
	datasets: [
		{
			label: "# of Votes",
			data: [12, 19, 3, 2],
			backgroundColor: [
				"rgb(91, 147, 255)",
				"rgb(255, 214, 107)",
				"rgb(255, 143, 107)",
				"rgb(96, 91, 255)",
			],
			borderColor: [
				"rgb(91, 147, 255)",
				"rgb(255, 214, 107)",
				"rgb(255, 143, 107)",
				"rgb(96, 91, 255)",
			],
			borderWidth: 1,
			cutout: "80%",
			borderRadius: 20,
		},
	],
};

const option = {
	maintainAspectRatio: false,
	responsive: true,
	plugins: {
		legend: {
			display: true,
			labels: {
				usePointStyle: true,
				pointStyle: "rectRounded",
			},
			position: "bottom" as const,
		},
		title: {
			display: true,
			position: "top" as const,
			align: "start" as const,
			text: "Analytics",
			font: {
				size: 18,
			},
			padding: 32,
		},
	},
};

const plugins = [
	{
		id: "increase-legend-spacing",
		beforeInit(chart: any) {
			const originalFit = (chart.legend as any).fit;
			(chart.legend as any).fit = function fit() {
				originalFit.bind(chart.legend)();
				this.height += 0;
			};
		},
	},
];

export default function AnalyticsChart() {
	return (
		<Card className={classes.chart}>
			<Doughnut plugins={plugins} data={data} options={option} />
		</Card>
	);
}
