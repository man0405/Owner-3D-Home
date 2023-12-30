"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useCreateQuery from "@/hook/useCreateQuery";
import { IoArrowForwardOutline, IoArrowBackOutline } from "react-icons/io5";

import classes from "./Function.module.css";

const Function = (props: { page: number; total: number }) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams()!;
	const createQueryString = useCreateQuery(searchParams);
	const prevHandler = () => {
		router.push(
			pathname +
				"?" +
				createQueryString(
					"page",
					props.page - 1 === 0 ? props.total : props.page - 1
				)
		);
	};
	const nextHandler = () => {
		router.push(
			pathname +
				"?" +
				createQueryString(
					"page",
					props.page + 1 > props.total ? 1 : props.page + 1
				)
		);
	};

	return (
		<div className={classes.function}>
			<div className={classes.number}>
				<div className={classes.current}>
					{props.page < 10 ? (
						<>
							0
							<br />
							<span>{props.page}</span>{" "}
						</>
					) : (
						<>
							<span>{Math.floor(props.page / 10)}</span>
							<br />
							<span>{props.page % 10}</span>
						</>
					)}
				</div>
				<div className={classes.total}>
					{props.total < 10 ? (
						<>
							0
							<br />
							<span>{props.total}</span>{" "}
						</>
					) : (
						<>
							<span>{Math.floor(props.total / 10)}</span>
							<br />
							<span>{props.total % 10}</span>
						</>
					)}
				</div>
			</div>
			<div className={`${classes.prev} button`} onClick={prevHandler}>
				<IoArrowBackOutline />
			</div>
			<div className={`${classes.next} button`} onClick={nextHandler}>
				<IoArrowForwardOutline />
			</div>
		</div>
	);
};

export default Function;
