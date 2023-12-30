import React from "react";
import Image from "next/image";
import Link from "next/link";

import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import Card from "../UI/Card/Card";

import classes from "./SignIn.module.css";

export default function SignIn() {
	return (
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
					<div className={classes.input}>
						<HiOutlineMail />
						<input type="text" id="email" placeholder="Email" />
					</div>
					<div className={classes.input}>
						<HiOutlineLockClosed />
						<input type="password" id="password" placeholder="Password" />
					</div>
					<Link className={classes.forgot} href={"/forgot"}>
						Forgot password
					</Link>
					<button className={classes.btn}>Login</button>
				</form>
			</div>
		</Card>
	);
}
