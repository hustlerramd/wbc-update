"use client";
import dynamic from "next/dynamic";
const EmailFormWBC = dynamic(() => import("./EmailFormWBC"), { ssr: false });
export default EmailFormWBC;
