import Project from "./Project";
import classes from "./ProjectList.module.css";
import { HouseInfo } from "@/utils/type";
const ProjectList = (props: { data: HouseInfo[] }) => {
	console.log(props.data);
	return (
		<div className={classes.list}>
			<ul>
				{props.data.map((item) => (
					<Project
						key={item.id}
						id={item.id}
						name={item.name}
						desc={item.description}
						image={
							item.images[0]
								? item.images[0].getPath
								: (process.env.NEXT_PUBLIC_ERROR_IMAGE as string)
						}
					/>
				))}
			</ul>
		</div>
	);
};

export default ProjectList;
