"use client";
import "../../../i18n";
import dynamic from "next/dynamic";
const LoginController = dynamic(() => import("@/modules/auth/controllers/loginController"), { ssr: false });

export default function Page() {
	return <LoginController />;
}
