import { WbcMaskType } from "@/model/DVM/components.dvm";
import React, { useEffect, useState } from "react";

const WbcMask: React.FC<WbcMaskType> = (props: WbcMaskType) => {
	const { onClick, isFullScreen = true, isblured = false } = props;
	let maskStyle = "z-30 fixed inset-0 bg-black bg-opacity-50 content-center content-center ";
	const [maskClass, setMaskClass] = useState(maskStyle);
	useEffect(() => {
		if (isblured === true) {
			maskStyle += " backdrop-blur-md ";
		}
		if (isFullScreen) {
			setMaskClass(maskStyle + "h-screen w-screen");
		} else {
			setMaskClass(maskStyle);
		}
	}, [isFullScreen, isblured]);

	return (
		<div onClick={() => props.onClick()} className={maskClass}>
			{props.children}
		</div>
	);
};

export default WbcMask;
