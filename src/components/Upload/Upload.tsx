"use client";
import React, { useState, ChangeEvent, CSSProperties } from "react";
import classes from "./Upload.module.css";
import Card from "../UI/Card/Card";
import { Information } from "@/utils/type";
import { useRouter } from "next/navigation";

export default function Upload() {
	const router = useRouter();
	const [mainImage, setMainImage] = useState<File | undefined>();
	const [interiorImage, setInteriorImage] = useState<File[]>([]);
	const [firstData, setFirstData] = useState<{
		name: string;
		price: number;
		description: string;
	}>({ name: "", price: 0, description: "" });
	const [secondData, setSecondData] = useState<Information>({
		number: 32,
		street: "Baker Street",
		district: "Southern Province",
		city: "Helsinki",
		country: "Finland",
		landSize: 28890.58,
		numberOfFloor: 2,
		direction: "EAST",
		bedrooms: 5,
		toilets: 3,
	});

	const getInterior = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			Array.from(e.target.files).map((file) =>
				setInteriorImage((prev) => [...prev, file])
			);
		}
	};
	const getFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			setMainImage(e.target.files[0]);
		}
	};
	const getFirstData = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFirstData((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
	};
	const getSecondData = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setSecondData((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
	};
	const submitHandler = async (e: React.FormEvent) => {
		e.preventDefault();
		console.log({
			name: firstData.name,
			price: firstData.price,
			description: firstData.description,
			information: secondData,
		});
		const response = await fetch("http://localhost:8080/api/add-house", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: firstData.name,
				price: firstData.price,
				description: firstData.description,
				information: secondData,
			}),
			credentials: "include",
		});
		if (!response.ok) throw new Error("Something went wrong");
		const data = await response.json();
		const formData = new FormData();
		formData.append(`image`, mainImage as Blob);
		[...interiorImage].map((file, index) => formData.append(`image`, file));
		const response2 = await fetch(
			`http://localhost:8080/house/add-image/${data}`,
			{
				method: "PUT",
				body: formData,
				credentials: "include",
			}
		);
		if (!response2.ok) throw new Error("Something went wrong");
		const data2 = await response2.json();
		if (data2.id) {
			// router.push(`/project/${data2.id}`);
		}
	};

	return (
		<Card className={classes.wrap}>
			<form onSubmit={submitHandler}>
				<div className="left">
					<label htmlFor="main-image" className={classes["drop-container"]}>
						<span className={classes["drop-title"]}>Drop main image here</span>
						or
						<input
							type="file"
							id="main-image"
							accept="image/*"
							onChange={getFile}
							required
						/>
						{mainImage && (
							<img src={URL.createObjectURL(mainImage)} alt="main" />
						)}
					</label>
					<div className={classes["list"]}>
						<label htmlFor="name">
							<span>Name</span>
							<input type="text" required id="name" onChange={getFirstData} />
						</label>
						<label htmlFor="price">
							<span>Price</span>
							<input type="text" required id="price" onChange={getFirstData} />
						</label>
					</div>
					<label htmlFor="description" className={classes.desc}>
						<span>Description</span>
						<textarea
							name=""
							id="description"
							cols={30}
							rows={10}
							onChange={getFirstData}
						></textarea>
					</label>
				</div>
				<div className={classes.right}>
					<div className={classes["list"]}>
						<label htmlFor="number">
							<span>Number</span>
							<input type="text" id="number" onChange={getSecondData} />
						</label>
						<label htmlFor="street">
							<span>Street</span>
							<input type="text" id="street" onChange={getSecondData} />
						</label>
						<label htmlFor="district">
							<span>District</span>
							<input type="text" id="district" onChange={getSecondData} />
						</label>
					</div>
					<div className={classes["list"]}>
						<label htmlFor="city">
							<span>City</span>
							<input type="text" id="city" onChange={getSecondData} />
						</label>
						<label htmlFor="country">
							<span>Country</span>
							<input type="text" id="country" onChange={getSecondData} />
						</label>
						<label htmlFor="direction">
							<span>Direction</span>
							<input type="text" id="direction" onChange={getSecondData} />
						</label>
					</div>
					<div className={classes.list}>
						<label htmlFor="landSize">
							<span>Land Size</span>
							<input type="text" id="landSize" onChange={getSecondData} />
						</label>
						<label htmlFor="bedrooms">
							<span>Bedroom</span>
							<input type="text" id="bedrooms" onChange={getSecondData} />
						</label>
						<label htmlFor="toilets">
							<span>Bathroom</span>
							<input type="text" id="toilets" onChange={getSecondData} />
						</label>
					</div>
					<label htmlFor="interior" className={classes.interior}>
						<span>Interior</span>
						<div>
							<input
								type="file"
								onChange={getInterior}
								multiple
								style={
									interiorImage[0] ? ({ "--opacity": 0 } as CSSProperties) : {}
								}
								className={`${classes["drop-container"]}
                        ${classes.small}
                        `}
							/>
							<div className={classes["interior-image"]}>
								{interiorImage &&
									interiorImage.map((img, index) => (
										<img
											src={URL.createObjectURL(img)}
											alt="interior"
											key={index}
										/>
									))}
							</div>
						</div>
					</label>
					<button type="submit" className={`btn ${classes.btn}`}>
						Create Project
					</button>
				</div>
			</form>
		</Card>
	);
}
