import { WBCEmailInputType } from "@/model/DVM/components.dvm";
import { INPUT_TYPE } from "@/modules/core/models/constants/constants";
import * as React from "react";

const EmailInputWBC: React.FC<WBCEmailInputType> = (props: WBCEmailInputType) => {
	return <input className="text-sm text-gray-500 py-2 px-4 w-full !h-12" type={INPUT_TYPE.EMAIL} {...props} />;
};

export default EmailInputWBC;
