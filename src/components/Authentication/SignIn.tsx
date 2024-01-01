"use client";
import React, { ChangeEvent, MouseEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import Card from "../UI/Card/Card";

import classes from "./SignIn.module.css";

import { UserLoginDTO, login } from "@/dto/auth.dto";
import { useRouter } from "next/navigation";
import Loader from "../UI/Loader/Loader";

export default function SignIn() {
	const [formData, setFormData] = useState<UserLoginDTO>({
		email: "",
		password: "",
	});
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const [error, setError] = useState<null | {
		message: string;
		type: string;
		code: string;
	}>();

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({ ...prev, [event.target.id]: event.target.value }));
	};

	const onClickHandler = async (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();

		const { email, password } = formData;
		const validation = login({ email, password });
		if (validation) {
			setError(validation);
		} else {
			setError(null);
			try {
				setLoading(true);
				const res = await fetch(
					`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/signin`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						credentials: "include",
						body: JSON.stringify({
							email: email,
							password: password,
						}),
					}
				);
				if (!res.ok) {
					throw new Error("Something went wrong");
				}
				const data = await res.json();
				console.log("file: SignIn.tsx:56 ~ submitHandler ~ data:", data);

				if (data.result === "true") {
					router.push("/");
				} else {
					setError({ message: data.message, code: data.code, type: "all" });
					console.log({
						message: data.message,
						code: data.code,
						type: "all",
					});
				}
			} catch (error: any) {
				setError({ message: error.message, type: "", code: "499" });
			}
			setLoading(false);
		}
	};

	return (
		<>
			{loading && <Loader></Loader>}

			<Card className={`${classes.main} center`}>
				<div className={classes.left}>
					<Image
						src={"/assets/image/photo-1515263487990-61b07816b324.webp"}
						alt="Image"
						width={500}
						height={500}
					></Image>
				</div>
				<div className={classes.right}>
					<form>
						<h1>Welcome, Owner</h1>
						{error && (
							<p style={{ marginBottom: "1rem" }} className="error">
								{error.message}
							</p>
						)}
						<div className={classes.input}>
							<HiOutlineMail />
							<input
								type="text"
								id="email"
								placeholder="Email"
								className={`${
									error?.type === "email" || error?.type === "all"
										? "error"
										: ""
								}`}
								onChange={onChangeHandler}
							/>
						</div>
						<div className={classes.input}>
							<HiOutlineLockClosed />
							<input
								className={
									error?.type === "password" || error?.type === "all"
										? "error"
										: ""
								}
								type="password"
								id="password"
								placeholder="Password"
								onChange={onChangeHandler}
							/>
						</div>
						<Link className={classes.forgot} href={"/forgot"}>
							Forgot password
						</Link>
						<button className={classes.btn} onClick={onClickHandler}>
							Login
						</button>
					</form>
				</div>
			</Card>
		</>
	);
}
