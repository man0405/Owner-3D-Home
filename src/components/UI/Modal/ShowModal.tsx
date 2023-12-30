import React, { ReactElement } from "react";
import ReactDOM from "react-dom";

import Backdrop from "./Backdrop";
import FinishForm from "./FinishForm";

export default function ShowModal(props: { onConfirm: () => void }) {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={props.onConfirm} />,
				document.getElementById("backdrop")!
			)}
			{ReactDOM.createPortal(
				<FinishForm onConfirm={props.onConfirm} />,
				document.getElementById("modal")!
			)}
		</>
	);
}

export function ShowModalDemo(props: {
	onConfirm: () => void;
	element: ReactElement;
}) {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={props.onConfirm} />,
				document.getElementById("backdrop")!
			)}
			{ReactDOM.createPortal(
				React.cloneElement(props.element, { onConfirm: props.onConfirm }),
				document.getElementById("modal")!
			)}
		</>
	);
}
