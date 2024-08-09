import React, { useEffect } from "react";
import TextInputWBC from "../../inputs/TextInputWBC";
import { WBCTextFormInputType, WBCTextInputType } from "@/model/DVM/components.dvm";

type TextFormWBCProps = {
	//
};

const TextFormWBC: React.FC<WBCTextFormInputType> = (props: WBCTextFormInputType) => {
	const [emailInputWBCProps, setEmailInputWBCProps] = React.useState<WBCTextInputType>({});
	const { label, name, handleChange, value, placeholder, inputProps, required } = props;
	useEffect(() => {
		let emailInputProps: WBCTextInputType = {};
		emailInputProps = { ...inputProps };
		emailInputProps.name = name;
		emailInputProps.placeholder = placeholder;
		emailInputProps.required = required;
		if (value) {
			emailInputProps.value = value;
		}
		setEmailInputWBCProps(emailInputProps);
	}, [props]);
	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (handleChange !== undefined) {
			handleChange(name as string, event.target.value);
		}
	};

	return (
		<div className="flex flex-col">
			<label className="text-sm font-semibold text-gray-500 pb-1">{label}</label>
			<TextInputWBC onChange={handleOnChange} {...emailInputWBCProps} />
		</div>
	);
};

export default TextFormWBC;
