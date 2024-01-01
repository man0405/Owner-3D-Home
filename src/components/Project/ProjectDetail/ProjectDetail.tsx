"use client";
import React, { useEffect } from "react";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classes from "./ProjectDetail.module.css";
import { BiArea } from "react-icons/bi";
import { GrDirections } from "react-icons/gr";
import { MdOutlineBedroomParent } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import { BsBuilding } from "react-icons/bs";
import { TbToiletPaper } from "react-icons/tb";

import HeadingProject from "@/components/UI/type/HeadingProject";
import Interior from "./Interior";
import ReportChart from "@/components/Chart/ReportChart";

import { HouseInfo } from "@/utils/type";
import { useFetch } from "@/hook/useFetch";

const DUMMY_DATA = {
	owner: "Thinh Mai",
	avatar: "/assets/images/photo-1493606371202-6275828f90f3.webp",
	phone: "0339228240",
	email: "man@gmail.com",
	name: "DUMMY Project",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
	src: "/assets/images/photo-1493606371202-6275828f90f3.webp",
	"process-1":
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus minima voluptates, error nobis cumque voluptatem magni harum. Sed ipsum perferendis similique esse vel in reiciendis earum obcaecati ullam. Ullam, quam.",
	"process-2":
		"Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.",
	interior: [
		{
			id: 1,
			img: "/assets/images/photo-1545324418-cc1a3fa10c00.webp",
			category: "Modern",
			name: "Attack My Project",
			link: "/....",
		},
		{
			id: 2,
			img: "/assets/images/photo-1493606371202-6275828f90f3.webp",
			category: "Traditional",
			name: "Attack My Team",
			link: "/....",
		},
		{
			id: 3,
			img: "/assets/images/photo-1515263487990-61b07816b324.webp",
			category: "Japadi",
			name: "Attack My Japadi",
			link: "/....",
		},
		{
			id: 4,
			category: "Industrial",
			img: "/assets/images/photo-1579632652768-6cb9dcf85912.webp",

			name: "Attack My Industrial",
			link: "/....",
		},
		{
			id: 5,
			category: "Contemporary",
			img: "/assets/images/photo-1580216643062-cf460548a66a.webp",

			name: "Attack My Contemporary",
			link: "/....",
		},
	],
};

export default function ProjectDetail(props: { data: HouseInfo }) {
	const settings = {
		classesName: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "180px",
		slidesToShow: 1,
		speed: 500,
	};

	const { data: res, loading, error, fetchData } = useFetch<number[]>();
	useEffect(() => {
		fetchData({
			method: "GET",
			link: "house/visitPerMonth/1",
		});
	}, []);

	const first = props.data.name.split(" ")[0].toUpperCase();
	const second = props.data.name
		.slice(first.length + 1, props.data.name.length)
		.toUpperCase();

	return (
		<>
			<div className={classes.left}>
				<HeadingProject
					first={first}
					second={second}
					desc={
						props.data.name.toUpperCase() +
						" " +
						props.data.information.street.toUpperCase() +
						" " +
						props.data.information.district?.toUpperCase() +
						" " +
						props.data.information.city.toUpperCase() +
						" " +
						props.data.information.country.toUpperCase()
					}
				/>
				<div className={`${classes.image} container`}>
					<Image
						src={
							props.data.images[0]?.getPath ??
							process.env.NEXT_PUBLIC_ERROR_IMAGE
						}
						alt="Hellos"
						width={1000}
						height={500}
					></Image>
				</div>
				<div className={`${classes["working-process"]} container`}>
					<div className={classes.subtile}>Working Process</div>
					<div className={classes.description}>
						<p>{props.data.description}</p>
					</div>
				</div>
			</div>

			<div className={classes.right}>
				{res ? (
					<ReportChart style={{ height: "20rem" }} chartData={res} />
				) : (
					<></>
				)}

				<div className={classes.interior}>
					<div className={`${classes.subtile} container`}>Interior Service</div>

					<Slider {...settings}>
						{/* {DUMMY_DATA.interior.map((item) => (
							<Interior {...item} key={item.id} />
						))} */}
						{props.data.images.map((item, index) => {
							if (index != 0) {
								const temp = {
									category: DUMMY_DATA.interior[index - 1]?.category,
									img: item.getPath,
									name: DUMMY_DATA.interior[index - 1]?.name,
									src: item.src,
								};

								return <Interior {...temp} key={item.id} />;
							}
						})}
					</Slider>
				</div>
				<div className={`container ${classes.price}`}>
					<div className={classes.subtile}>Price Detail</div>
					<div className={classes["more-inf"]}>
						<table className={classes.table}>
							<tbody>
								<tr>
									<td>
										<BiArea /> Land Size
									</td>
									<td>
										{props.data.information.landSize} m<sup>2</sup>
									</td>
								</tr>
								<tr>
									<td>
										<GrDirections /> Facing Direction
									</td>
									<td>{props.data.information.direction}</td>
								</tr>
								<tr>
									<td>
										<MdOutlineBedroomParent /> Bedrooms
									</td>
									<td>{props.data.information.bedrooms}</td>
								</tr>
							</tbody>
						</table>
						<table className={classes.table}>
							<tbody>
								<tr>
									<td>
										<IoPricetagOutline /> Price
									</td>
									<td>
										$ {props.data.price} - $ {props.data.price + 5000}
									</td>
								</tr>

								<tr>
									<td>
										<BsBuilding /> Floor
									</td>
									<td>{props.data.information.numberOfFloor}</td>
								</tr>
								<tr>
									<td>
										<TbToiletPaper /> Toilet
									</td>
									<td>{props.data.information.toilets}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
}
