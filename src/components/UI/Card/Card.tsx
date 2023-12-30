import React from "react";
import classes from "./Card.module.css";

export default function Card({
	children,
	style,
	className,
}: {
	children: React.ReactNode;
	style?: {};
	className?: string;
}) {
	return (
		<div className={`${classes.card} ${className}`} style={style}>
			{children}
		</div>
	);
}
