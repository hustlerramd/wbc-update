import { WbcMaskType } from "@/model/DVM/components.dvm";
import React, { useEffect, useState } from "react";

const WbcMask: React.FC<WbcMaskType> = (props: WbcMaskType) => {
	let maskStyle = "z-30 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md";
	const { isFullScreen } = props;
	const [maskClass, setMaskClass] = useState(maskStyle);
	useEffect(() => {
		if (isFullScreen) {
			setMaskClass(maskStyle + "h-screen w-screen");
		} else {
			setMaskClass(maskStyle);
		}
	}, [isFullScreen]);

	return <div className={maskClass}></div>;
};

export default WbcMask;
