"use client";
import "../../../i18n";
import dynamic from "next/dynamic";
import LoginController from "@/modules/auth/controllers/loginController";
const WbcButton = dynamic(() => import("@/modules/core/components/WbcButton"), { ssr: false });

export default function Page() {
	return <LoginController />;
}
