import React from "react";
import classes from "./Backdrop.module.css";
export default function Backdrop(props: { onConfirm: () => void }) {
	return <div className={classes["back-drop"]} onClick={props.onConfirm}></div>;
}
