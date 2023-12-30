import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};
import NavBar from "@/components/Layout/NavBar/NavBar";
import Footer from "@/components/Layout/Footer/Footer";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<div id="backdrop"></div>
			<div id="modal"></div>
			<body className={inter.className}>
				{children}
				<NavBar />
				<Footer />
			</body>
		</html>
	);
}
