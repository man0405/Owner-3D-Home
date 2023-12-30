import React, { useState } from "react";

import { BsArrowRight } from "react-icons/bs";

import classes from "./Interior.module.css";
import { ShowModalDemo } from "@/components/ui/Modal/ShowModal";
import Modal3D from "@/components/ui/Modal/Modal3D";

export default function Interior(props: {
	img: string;
	category: string;
	name: string;
	src: string;
}) {
	const [modal, setModal] = useState(false);
	const clickHandler = () => {
		setModal(true);
	};
	const onConfirm = () => {
		setModal(false);
	};

	return (
		<>
			{modal && (
				<ShowModalDemo
					onConfirm={onConfirm}
					element={<Modal3D src={props.src} />}
				/>
			)}
			<div className={`${classes.item} interior`}>
				<img
					src={props.img ? props.img : process.env.NEXT_PUBLIC_ERROR_IMAGE}
					alt=""
				/>
				<div className={classes.det}>
					<div className={classes.category}>
						<span>{props.category?.toUpperCase()}</span>
						<span>INTERIOR</span>
					</div>
					<div className={classes.more}>
						<span>{props.name}</span>
						<div className={classes.btn} onClick={clickHandler}>
							<BsArrowRight />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
