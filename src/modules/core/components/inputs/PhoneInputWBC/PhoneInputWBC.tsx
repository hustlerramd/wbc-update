import { WBCPhoneInputType } from "@/model/DVM/components.dvm";
import "react-phone-number-input/style.css";
import React, { FC, memo } from "react";
import PhoneInput from "react-phone-number-input";

const PhoneInputWBC: FC<WBCPhoneInputType> = (props: WBCPhoneInputType) => {
	const { onChange, className, ...rest } = props;
	return <PhoneInput className={"PhoneInputInput-force-custom " + className} onChange={onChange} {...rest} />;
};

export default memo(PhoneInputWBC);
