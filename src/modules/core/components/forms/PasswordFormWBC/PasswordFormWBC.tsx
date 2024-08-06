import React, { useEffect } from "react";
import PasswordInputWBC from "../../inputs/PasswordInputWBC";
import { WBCPasswordInputType } from "@/model/DVM/components.dvm";

const PasswordFormWBC: React.FC<any> = (props) => {
	const [emailInputWBCProps, setEmailInputWBCProps] = React.useState<WBCPasswordInputType>({});
	const { label, name, placeholder, inputProps, required, showEye } = props;
	useEffect(() => {
		let emailInputProps: WBCPasswordInputType = {};
		emailInputProps = { ...inputProps };
		emailInputProps.name = name;
		emailInputProps.showEye = showEye;
		emailInputProps.placeholder = placeholder;
		emailInputProps.required = required;
		setEmailInputWBCProps(emailInputProps);
	}, [props]);
	return (
		<div>
			<label className="text-sm font-semibold text-gray-500">{label}</label>
			<PasswordInputWBC {...emailInputWBCProps} />
		</div>
	);
};

export default PasswordFormWBC;
