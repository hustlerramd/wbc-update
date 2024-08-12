import React, { memo, useEffect } from "react";
import PhoneInputWBC from "../../inputs/PhoneInputWBC";
import { WBCPhoneFormInputType, WBCPhoneInputType } from "@/model/DVM/components.dvm";
import { Value } from "react-phone-number-input";

const PhoneFormWBC: React.FC<WBCPhoneFormInputType> = (props: WBCPhoneFormInputType) => {
	const [phoneInputWBCProps, setPhoneInputWBCProps] = React.useState<WBCPhoneInputType>({});
	const { label, subLabel, name, handleChange, value, placeholder, inputProps, required } = props;
	useEffect(() => {
		let phoneInputProps: WBCPhoneInputType = {};
		phoneInputProps = { ...inputProps };
		phoneInputProps.name = name;
		phoneInputProps.placeholder = placeholder;
		if (value) {
			phoneInputProps.value = value;
		}
		setPhoneInputWBCProps(phoneInputProps);
	}, [props]);
	const handleOnChange = (value: Value) => {
		if (handleChange !== undefined) {
			handleChange(name as string, value);
		}
	};
	return (
		<div className="flex flex-col w-full">
			<label className="text-sm font-semibold text-gray-500 pb-1 w-full">
				{label}
				<span className="text-xs ml-1 font-normal">{subLabel}</span>
			</label>
			<PhoneInputWBC onChange={handleOnChange} {...phoneInputWBCProps} />
			{/* <p className="text-red-500 text-sm">{errors?.gender}</p> */}
		</div>
	);
};

export default memo(PhoneFormWBC);
