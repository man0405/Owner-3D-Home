import React from "react";
import classes from "./Header.module.css";

export default function Header({ name }: { name: string }) {
	return (
		<header style={{ gridArea: "header" }}>
			<h1 className={classes.header}>{name}</h1>
		</header>
	);
}
