import { WBCPassportInputType } from "@/model/DVM/components.dvm";
import React, { useState } from "react";
import EyeCutPinkOutline from "../../WbcSvg/eye-cut-pink-outline";

const PassportInputWBC: React.FC<WBCPassportInputType> = (props) => {
	const { showEye, ...restPassportProps } = props;
	const [IsPasswordVisible, setIsPasswordVisible] = useState(false);
	const handleEyeClick = () => {};
	return showEye ? (
		<div>
			<input className="text-sm text-gray-500 py-2 px-4 w-full !h-12" type="password" {...restPassportProps} />
			<EyeCutPinkOutline />
		</div>
	) : (
		<input className="text-sm text-gray-500 py-2 px-4 w-full !h-12" type="password" {...restPassportProps} />
	);
};

export default PassportInputWBC;
