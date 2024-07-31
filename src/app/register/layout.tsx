import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { server } from "@/model/constants/server";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
	const res = await fetch(server + "meta/register");
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
