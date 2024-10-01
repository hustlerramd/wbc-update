import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import siteConstants from "@/model/constants";

const inter = Inter({ subsets: ["latin"] });
// export async function generateMetadata(): Promise<Metadata> {
//   try {
//     const res = await fetch(siteConstants.ENV.SERVER_META_URL + "meta/lending");
//     return res.json();
//   } catch (error) {
//     return new Promise<Metadata>(() => ({}));
//   }
// }

export const metadata: Metadata = {
  title: "Women's Business Club",
  description:
    "Women's Business Club, Empowering ambitious women to succeed. We offer mentoring, networking, and training to businesswomen across the world. We meet for business events in person worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
