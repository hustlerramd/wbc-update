import { SvgWBCType } from "@/model/DVM/components.dvm";
import React from "react";

const Arrow: React.FC<SvgWBCType> = () => {
	return (
		<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
			<path d="M5 12h14M12 5l7 7-7 7"></path>
		</svg>
	);
};

export default Arrow;
