import Image from "next/image";
import Link from "next/link";
import classes from "./Project.module.css";
import { IoArrowForwardOutline } from "react-icons/io5";

const Project = (props: {
	id: number;
	name: string;
	desc: string;
	image: string;
}) => {
	return (
		<li className={classes.item}>
			<div className={classes.image}>
				<Image src={props.image} alt="" width={300} height={300} />
			</div>
			<div className={classes.content}>
				<h3>{props.name}</h3>
				<p>{props.desc}</p>
				<div className="button">
					<Link href={`/project/${props.id}`}>
						VIEW MORE <IoArrowForwardOutline />{" "}
					</Link>
				</div>
			</div>
		</li>
	);
};

export default Project;
