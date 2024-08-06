"use client";
import React, { useEffect } from "react";
import { WBCEmailFormInputType, WBCEmailInputType } from "@/model/DVM/components.dvm";
import dynamic from "next/dynamic";
const EmailInputWBC = dynamic(() => import("../../inputs/EmailInputWBC"), { ssr: false });

const EmailFormWBC: React.FC<WBCEmailFormInputType> = (props: WBCEmailFormInputType) => {
	const [emailInputWBCProps, setEmailInputWBCProps] = React.useState<WBCEmailInputType>({});
	const { label, name, placeholder, inputProps, required } = props;
	useEffect(() => {
		let emailInputProps: WBCEmailInputType = {};
		emailInputProps = { ...inputProps };
		emailInputProps.name = name;
		emailInputProps.placeholder = placeholder;
		emailInputProps.required = required;
		setEmailInputWBCProps(emailInputProps);
	}, [props]);

	return (
		<div className="flex flex-col">
			<label className="text-sm font-semibold text-gray-500 pb-1">{label}</label>
			<EmailInputWBC {...emailInputWBCProps} />
		</div>
	);
};

export default EmailFormWBC;
