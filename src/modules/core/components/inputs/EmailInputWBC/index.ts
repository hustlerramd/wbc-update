"use client";
import dynamic from "next/dynamic";
const EmailInputWBC = dynamic(() => import("./EmailInputWBC"), { ssr: false });
export default EmailInputWBC;
