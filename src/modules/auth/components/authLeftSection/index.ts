"use client";
import dynamic from "next/dynamic";

const AuthLeftSection = dynamic(() => import("./AuthLeftSection"), {
	ssr: false,
});

export default AuthLeftSection;
