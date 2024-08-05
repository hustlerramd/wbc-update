import { SvgWBCType } from "@/model/DVM/components.dvm";
import React from "react";

const EyeCutPinkOutline: React.FC<SvgWBCType> = (props: SvgWBCType) => {
	const { height, width, color } = props;
	return (
		<svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 7H11V13H13V7ZM13 15H11V17H13V15Z"
				fill={color}
			/>
		</svg>
	);
};

export default EyeCutPinkOutline;
