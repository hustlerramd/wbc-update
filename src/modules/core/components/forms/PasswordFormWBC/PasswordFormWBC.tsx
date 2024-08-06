import React, { useEffect } from "react";
import PasswordInputWBC from "../../inputs/PasswordInputWBC";
import { WBCPasswordFormInputType, WBCPasswordInputType } from "@/model/DVM/components.dvm";

const PasswordFormWBC: React.FC<WBCPasswordFormInputType> = (props: WBCPasswordFormInputType) => {
	const [passwordInputWBCProps, setPasswordInputWBCProps] = React.useState<WBCPasswordInputType>({});
	const { label, name, placeholder, inputProps, required, showEye } = props;
	useEffect(() => {
		let passwordInputProps: WBCPasswordInputType = {};
		passwordInputProps = { ...inputProps };
		passwordInputProps.name = name;
		passwordInputProps.showEye = showEye;
		passwordInputProps.placeholder = placeholder;
		passwordInputProps.required = required;
		setPasswordInputWBCProps(passwordInputProps);
	}, [props]);
	return (
		<div className="flex flex-col gap-1">
			<label className="text-sm font-semibold text-gray-500 !leading-5">{label}</label>
			<PasswordInputWBC {...passwordInputWBCProps} />
		</div>
	);
};

export default PasswordFormWBC;
