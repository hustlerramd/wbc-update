import { WBCEmailInputType } from "@/model/DVM/components.dvm";
import { INPUT_TYPE } from "@/modules/core/models/constants/constants";
import * as React from "react";

const EmailInputWBC: React.FC<WBCEmailInputType> = (props: WBCEmailInputType) => {
	return (
		<input
			className="border !border-gray-500 !outline-gray-500	block rounded-[0.625rem] w-full h-12 px-4 py-3 text-sm !decoration-gray-500 !text-gray-500 "
			type={INPUT_TYPE.EMAIL}
			{...props}
		/>
	);
};

export default EmailInputWBC;
