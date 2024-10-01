import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import siteConstants from "@/model/constants";
import dynamic from "next/dynamic";

const AuthLeftSection = dynamic(
  () => import("@/modules/auth/components/authLeftSection"),
  { ssr: false }
);
const inter = Inter({ subsets: ["latin"] });

// export async function generateMetadata(): Promise<Metadata> {
//   try {
//     const res = await fetch(
//       siteConstants.ENV.SERVER_META_URL + "meta/register"
//     );
//     return res.json();
//   } catch (error) {
//     return new Promise<Metadata>(() => ({}));
//   }
// }

export const metadata: Metadata = {
  title: "Register | Womens Business Club",
  description: "Womens Business Club registration page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row w-screen h-screen m-0 p-0">
          <div className="flex flex-row w-full">
            <section className="hidden max-w-[50%] md:w-[50%] md:flex flex-auto ">
              <AuthLeftSection />
            </section>
            <section className="flex flex-auto bg-white w-[100%] md:w-[50%]">
              {children}
            </section>
          </div>
        </div>
      </body>
    </html>
  );
}
