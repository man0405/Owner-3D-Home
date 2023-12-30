"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/UI/Card/Card";
import classes from "./NavBar.module.css";

import {
	MdDashboard,
	MdOutlineFileUpload,
	MdGrain,
	MdOutlineStreetview,
	MdLogout,
} from "react-icons/md";
import { usePathname } from "next/navigation";

export default function NavBar() {
	const pathname = usePathname();
	return (
		<nav style={{ gridArea: "nav" }}>
			<Card className={classes.nav}>
				<div>
					<div className={classes.logo}>
						<Link href="/">
							<Image
								src={"/assets/image/Bank.png"}
								alt="Main Logo"
								width={50}
								height={50}
							></Image>
							<h3>3D Home</h3>
						</Link>
					</div>
					<ul className={classes.func}>
						<li>
							<Link
								href={"/"}
								className={`${pathname === "/" ? "active" : " "}`}
							>
								<MdDashboard />
								<h5>Dashboard</h5>
							</Link>
						</li>
						<li>
							<Link
								href={"/upload"}
								className={`${pathname === "/upload" ? "active" : " "}`}
							>
								<MdOutlineFileUpload />
								<h5>Upload</h5>
							</Link>
						</li>
						<li>
							<Link
								href={"/project"}
								className={`${pathname === "/project" ? "active" : " "}`}
							>
								<MdGrain />
								<h5>Project</h5>
							</Link>
						</li>
						<li>
							<Link
								href={"/customer"}
								className={`${pathname === "/customer" ? "active" : " "}`}
							>
								<MdOutlineStreetview />
								<h5>Customer</h5>
							</Link>
						</li>
					</ul>
				</div>
				<div className={classes.user}>
					<Image
						src={"/assets/image/avatar9.png"}
						alt="Main Logo"
						width={50}
						height={50}
					></Image>
					<h5>John Doe</h5>
					<MdLogout />
				</div>
			</Card>
		</nav>
	);
}
