import { ur } from "@faker-js/faker";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
	const url = request.nextUrl.clone();
	let cookie = request.cookies.get("uss");
	console.log("file: middleware.ts:8 ~ middleware ~ cookie:", cookie);
	// if (url.pathname === "/") {
	// 	if (cookie) {
	// 		console.log(cookie);
	// 		const response = await fetch(
	// 			// process.env.NEXT_PUBLIC_API_URL + "/api/test/v1/verify",
	// 			"http://localhost:8080/api/v1/verify/owner",
	// 			{
	// 				method: "GET",
	// 				headers: {
	// 					Authorization: "Bearer " + cookie.value,
	// 				},
	// 			}
	// 		);
	// 		if (response.status === 200) {
	// 			url.pathname = "/";
	// 			return NextResponse.redirect(url);
	// 		}
	// 		if (response.status === 403) {
	// 			return NextResponse.next();
	// 		}
	// 	}
	// 	return;
	// }

	url.pathname = "/signin";

	if (!cookie) {
		return NextResponse.redirect(url);
	} else {
		const response = await fetch("http://localhost:8080/api/v1/verify/owner", {
			method: "GET",
			headers: {
				Authorization: "Bearer " + cookie.value,
			},
		});
		console.log(response.status);
		if (response.status === 200) {
			return NextResponse.next();
		}
		if (response.status === 403) {
			return NextResponse.redirect(url);
		}
	}
}

export const config = {
	matcher: ["/", "/upload", "/project", "/project/[id]", "/customer"],
};
