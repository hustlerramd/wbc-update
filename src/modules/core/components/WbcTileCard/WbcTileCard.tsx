import { PureComponentType } from "@/model/DVM/components.dvm";
import React from "react";

const WbcTileCard: React.FC<PureComponentType> = (props: PureComponentType) => {
	return (
		<div className="bg-white rounded-2xl shadow-lg p-6 max-w-lg relative  z-40 mx-auto" onClick={(e) => e.stopPropagation()}>
			{props.children}
		</div>
	);
};

export default WbcTileCard;
