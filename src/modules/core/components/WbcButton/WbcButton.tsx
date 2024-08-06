import { WbcButtonProps } from "@/model/DVM/components.dvm";
import { btnEnum } from "@/model/enum/component.enum";
import React from "react";
import WbcLink from "../WbcLink";
import { WBC_THEME } from "@/model/constants/theme";
import { INPUT_TYPE } from "../../models/constants/constants";

const WbcButton: React.FC<WbcButtonProps> = (props) => {
	const { children, openInNewTab = true, btnType = btnEnum.action, ...restProps } = props;
	return btnType === btnEnum.submit ? (
		<button type="submit" className={"bg-[#F8408C] border block rounded-[0.625rem] w-full h-12 px-4 py-3 text-sm !decoration-white !text-white "} {...restProps}>
			{children}
		</button>
	) : btnType === btnEnum.link ? (
		<WbcLink href={""} openInNewTab={openInNewTab}>
			<button type="button" className={"bg-[#F8408C] border block rounded-[0.625rem] w-full h-12 px-4 py-3 text-sm !decoration-white !text-white "} {...restProps}>
				{children}
			</button>
		</WbcLink>
	) : (
		<button type="button" className={"bg-[#F8408C] border block rounded-[0.625rem] w-full h-12 px-4 py-3 text-sm !decoration-white !text-white "} {...restProps}>
			{children}
		</button>
	);
};

export default WbcButton;
