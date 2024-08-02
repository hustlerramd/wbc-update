"use client";
import Image from "next/image";
import React from "react";

const HOCLoading = () => {
	return (
		<div className="flex h-screen w-full justify-center items-center z-50 absolute top-0 left-0 bg-white">
			<div className="flex flex-col justify-center items-center gap-1">
				<Image src="/img/header-logo.svg" alt="logo" height={100} width={100} className="animate-pulse" priority={false} />
				<div>Loading...</div>
			</div>
		</div>
	);
};

export default HOCLoading;
