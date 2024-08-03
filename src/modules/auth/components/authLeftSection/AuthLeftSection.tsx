"use client";
import { PureComponent } from "@/model/DVM/components.dvm";
import * as React from "react";

const AuthLeftSection: React.FC<PureComponent> = () => {
	return (
		<div className="h-full w-full max-h-full max-w-full bg-[url('/img/awards/awards-hero.png')] bg-cover bg-gray-600 bg-lighter-dark-blue bg-blend-soft-light ">
			<div className="flex justify-center h-full items-end max-h-full max-w-full">
				<div className="flex flex-col p-5 lg:p-0 text-3xl h-[35%]  items-start justify-centerw-1/2">
					<div className="text-white">Welcome to</div>
					<div className="text-white text-5xl font-bold">Women&apos;s Business Club</div>
					<div className="text-white">Empowering ambitious women to succeed</div>
				</div>
			</div>
		</div>
	);
};

export default AuthLeftSection;
