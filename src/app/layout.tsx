import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import siteConstants from "@/model/constants";

const inter = Inter({ subsets: ["latin"] });
export async function generateMetadata(): Promise<Metadata> {
	try {
		const res = await fetch(siteConstants.ENV.SERVER_URL + "meta/lending");
		return res.json();
	} catch (error) {
		return new Promise<Metadata>(() => ({}));
	}
}

export default async function RootLayout({
	getSSideProps,
	children,
}: Readonly<{
	getSSideProps: Metadata;
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
