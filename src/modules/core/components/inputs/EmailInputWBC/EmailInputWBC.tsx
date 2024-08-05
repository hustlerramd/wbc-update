import { WBCEmailInputType } from "@/model/DVM/components.dvm";
import * as React from "react";

const EmailInputWBC: React.FC<WBCEmailInputType> = (props: WBCEmailInputType) => {
	return <input className="text-sm text-gray-500 py-2 px-4 w-full !h-12" type="email" {...props} />;
};

export default EmailInputWBC;
