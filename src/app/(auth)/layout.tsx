import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import siteConstants from "@/model/constants";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
	const res = await fetch(siteConstants.ENV.SERVER_URL + "meta/register");
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}
export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
