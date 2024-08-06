import { WBCPasswordInputType } from "@/model/DVM/components.dvm";
import React, { useState } from "react";
import EyeCutPinkOutline from "../../WbcSvg/eye-cut-pink-outline";
import { INPUT_TYPE } from "@/modules/core/models/constants/constants";
import { WBC_THEME } from "@/model/constants/theme";
import EyePinkOutline from "../../WbcSvg/eye-pink-outline";

const PasswordInputWBC: React.FC<WBCPasswordInputType> = (props) => {
	const { showEye, ...restPasswordProps } = props;
	const [IsPasswordVisible, setIsPasswordVisible] = useState(false);
	const handleEyeClick = () => {
		setIsPasswordVisible((state) => !state);
	};
	return showEye ? (
		IsPasswordVisible ? (
			<div className="relative">
				<input className="text-sm text-gray-500 py-2 px-4 w-full !h-12" type={INPUT_TYPE.TEXT} {...restPasswordProps} />
				<span className="absolute !h-6 !w-6 right-2 top-4" onClick={handleEyeClick}>
					<EyePinkOutline color={WBC_THEME.primary} />
				</span>
			</div>
		) : (
			<div className="relative">
				<input className="text-sm text-gray-500 py-2 px-4 w-full !h-12" type={INPUT_TYPE.PASSWORD} {...restPasswordProps} />
				<span className="absolute !h-6 !w-6 right-2 top-4" onClick={handleEyeClick}>
					<EyeCutPinkOutline color={WBC_THEME.primary} />
				</span>
			</div>
		)
	) : (
		<input className="text-sm text-gray-500 py-2 px-4 w-full !h-12" type={INPUT_TYPE.PASSWORD} {...restPasswordProps} />
	);
};

export default PasswordInputWBC;
