import React from "react";
import Modal from "@/components/UI/Card/Modal";

export default function Modal3D(props: { src: string }) {
	return (
		<Modal
			style={{
				padding: "0",
				width: "70vw",
				height: "70vh",
				top: "50%",
				transform: "translate(-50%,-50%)",
			}}
		>
			<iframe
				src={props.src + "?autospin=1&autostart=1&preload=1"}
				allowFullScreen
				height="100%"
				width="100%"
				allow="autoplay; fullscreen; xr-spatial-tracking"
				xr-spatial-tracking
				execution-while-out-of-viewport
				execution-while-not-rendered
				web-share
			></iframe>
		</Modal>
	);
}
