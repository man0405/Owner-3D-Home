import React from "react";

import { FaRegCheckCircle } from "react-icons/fa";
import classes from "./FinshForm.module.css";
import Modal from "../Card/Modal";

export default function FinishForm(props: { onConfirm: () => void }) {
	return (
		<Modal>
			<div className={classes.icon}>
				<FaRegCheckCircle />
			</div>
			<div className={classes.desc}>
				Reservation completed. Will contact you at the earliest time.
			</div>
			<button className={`button ${classes.btn}`} onClick={props.onConfirm}>
				OK
			</button>
		</Modal>
	);
}
