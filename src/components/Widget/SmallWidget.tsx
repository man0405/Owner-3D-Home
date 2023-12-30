import React from "react";
import colorToRGB from "@/utils/parseColor";

import Card from "../UI/Card/Card";
import classes from "./SmallWidget.module.css";

export default function SmallWidget({
	icon,
	result,
	field,
	color,
}: {
	icon: React.ReactElement;
	result: string;
	field: string;
	color: string;
}) {
	const rgbColor = colorToRGB(color);
	return (
		<Card className={classes.widget}>
			<div
				className={classes.icon}
				style={{ "--color": rgbColor } as React.CSSProperties}
			>
				{icon}
			</div>
			<div className={classes.info}>
				<h3>{result}</h3>
				<h5>{field}</h5>
			</div>
		</Card>
	);
}
