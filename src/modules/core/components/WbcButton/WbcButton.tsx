import { WbcButtonProps } from "@/model/DVM/components.dvm";
import { btnEnum } from "@/model/enum/component.enum";
import React from "react";

const WbcButton: React.FC<WbcButtonProps> = (props) => {
	const { children, btnType = btnEnum.action, ...restProps } = props;
	return <button {...restProps}>{children}</button>;
};

export default WbcButton;
