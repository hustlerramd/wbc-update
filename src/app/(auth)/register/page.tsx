"use client";
import "../../../i18n";
import dynamic from "next/dynamic";
const RegisterController = dynamic(() => import("@/modules/auth/controllers/registerController"), { ssr: false });

export default function Home() {
	return <RegisterController />;
}
