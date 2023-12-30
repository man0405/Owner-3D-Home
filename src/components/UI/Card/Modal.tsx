import React from "react";
import classes from "./Modal.module.css";

export default function Modal({
	children,
	style,
}: {
	children: React.ReactNode;
	style?: {};
}) {
	return (
		<div className={classes.modal} style={style}>
			{children}
		</div>
	);
}
