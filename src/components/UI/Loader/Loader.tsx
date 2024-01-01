import React from "react";
import classes from "./Loader.module.css";

export default function Loader() {
	return (
		<div className={`${classes.wrap} center`}>
			<div className={classes.boxes}>
				<div className={classes.box}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className={classes.box}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className={classes.box}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className={classes.box}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
}
