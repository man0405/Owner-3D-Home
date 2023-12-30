"use client";
import React, { useState, ChangeEvent, CSSProperties } from "react";
import classes from "./Upload.module.css";
import Card from "../UI/Card/Card";

export default function Upload() {
	const [mainImage, setMainImage] = useState<string | undefined>();
	const [interiorImage, setInteriorImage] = useState<string[] | undefined>();

	const getInterior = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			const files = Array.from(e.target.files).map((file) =>
				URL.createObjectURL(file)
			);
			setInteriorImage(files);
		}
	};

	const getFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			setMainImage(URL.createObjectURL(e.target.files[0]));
		}
	};

	return (
		<Card className={classes.wrap}>
			<form action="">
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
						{mainImage && <img src={mainImage} alt="main" />}
					</label>
					<div className={classes["list"]}>
						<label htmlFor="name">
							<span>Name</span>
							<input type="text" required id="name" />
						</label>
						<label htmlFor="price">
							<span>Price</span>
							<input type="text" required id="price" />
						</label>
					</div>
					<label htmlFor="description" className={classes.desc}>
						<span>Description</span>
						<textarea name="" id="description" cols={30} rows={10}></textarea>
					</label>
				</div>
				<div className={classes.right}>
					<div className={classes["list"]}>
						<label htmlFor="number">
							<span>Number</span>
							<input type="text" id="number" />
						</label>
						<label htmlFor="street">
							<span>Street</span>
							<input type="text" id="street" />
						</label>
						<label htmlFor="district">
							<span>District</span>
							<input type="text" id="district" />
						</label>
					</div>
					<div className={classes["list"]}>
						<label htmlFor="city">
							<span>City</span>
							<input type="text" id="city" />
						</label>
						<label htmlFor="country">
							<span>Country</span>
							<input type="text" id="country" />
						</label>
						<label htmlFor="direction">
							<span>Direction</span>
							<input type="text" id="direction" />
						</label>
					</div>
					<div className={classes.list}>
						<label htmlFor="landSize">
							<span>Land Size</span>
							<input type="text" id="area" />
						</label>
						<label htmlFor="bedroom">
							<span>Bedroom</span>
							<input type="text" id="bedroom" />
						</label>
						<label htmlFor="bathroom">
							<span>Bathroom</span>
							<input type="text" id="bathroom" />
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
									interiorImage ? ({ "--opacity": 0 } as CSSProperties) : {}
								}
								className={`${classes["drop-container"]}
                        ${classes.small}
                        `}
							/>
							<div className={classes["interior-image"]}>
								{interiorImage &&
									interiorImage.map((img, index) => (
										<img src={img} alt="interior" key={index} />
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
