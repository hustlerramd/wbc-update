import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
// import dynamic from "next/dynamic";
import siteConstants from "@/model/constants";
import Image from "next/image";
// const HOCLoading = dynamic(() => import("@/components/HOCLoading/"), {
// 	ssr: false,
// });
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
			<body className={inter.className}>
				<div className="flex h-screen w-full justify-center">
					<div className="hidden  basis-3/5 bg-[url('/img/awards/awards-hero.png')] bg-cover xbg-gray-600 bg-lighter-dark-blue bg-blend-soft-light md:block">
						<div className="flex justify-center h-full items-end">
							<div className="flex flex-col p-5 lg:p-0 text-3xl h-[35%]  items-start justify-centerw-1/2">
								<div className="text-white">Welcome to</div>
								<div className="text-white text-5xl font-bold">Women&apos;s Business Club</div>
								<div className="text-white">Empowering ambitious women to succeed</div>
							</div>
						</div>
					</div>
					<div className=" basis-2/2 md:basis-3/5 lg:basis-2/5 flex justify-center w-full items-center overflow-y-auto">
						<div className="max-w-md items-center w-full flex justify-center  flex-col gap-5 p-5">
							<Image src="/img/header-logo.svg" alt="logo" height={130} width={130} priority={false} />

							<div className="flex flex-col gap-2 w-full">
								<div className="text-lg font-semibold">Login</div>
								<div className="grid grid-cols-2 gap-2">
									<div className="flex flex-col col-span-2">
										<label className="text-sm text-gray-500">Email</label>
										<input
											type="text"
											// onChange={() => {}}
											name="email"
											// value={""}
											placeholder="janedoe@mail.com"
											className={`border border-gray-500 focus:outline-none rounded-md`}
											// className={`border ${/* errors?.email ? "border-red-500" : */ "border-gray-500"} focus:outline-none rounded-md`}
											// onKeyDown={handleKeyPress}
										/>
										<p className="text-red-500 text-sm">{/* errors?.email */}</p>
									</div>
									<div className="flex flex-col col-span-2">
										<label className="text-sm text-gray-500">Password</label>
										<div className="w-full relative">
											<input
												type="password" /* {viewPassword ? "text" : "password"} */
												// onChange={() => {}}
												name="password"
												// value={"formValues.password"}
												placeholder="•••••••"
												className={`border w-full border-gray-500 focus:outline-none rounded-md`}
												// className={`border w-full $/* {errors?.password ? "border-red-500" : "border-gray-500" */} focus:outline-none rounded-md`}
												// onKeyDown={handleKeyPress}
											/>
											<button
												className="absolute right-3 top-2.5  w-5"
												// onClick={() => {}}
											>
												{/* {viewPassword ? (
														<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-500">
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
															/>
															<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
														</svg>
													) : ( */}
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-500">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
													/>
												</svg>
												{/* )} */}
											</button>
										</div>
										<p className="text-red-500 text-sm">{"errors?.password"}</p>
									</div>
									<div className="col-span-2">
										<button
											className="text-sm w-full text-right  text-gray-600"
											// onClick={() => {}}
										>
											Forgot password
										</button>
									</div>
									<div className="col-span-2 pt-3">
										<button
											className="bg-brand-dark-pink hover:bg-brand-dark-pink/70 p-2 w-full rounded-md text-white"
											// onClick={() => {}}
										>
											Login
										</button>
									</div>

									<div className="pt-2 col-span-2 text-sm">
										<div>
											{" Don't have an account? "}
											<span
												className="text-brand-dark-pink cursor-pointer"
												// onClick={() => {}}
											>
												Register
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
