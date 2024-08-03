"use client";
import dynamic from "next/dynamic";

const LoginView = dynamic(() => import("./LoginView"), {
	ssr: false,
});
export default LoginView;
