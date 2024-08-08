import * as React from "react";

type WbcTileCardProps = {
	//
};

const WbcTileCard: React.FC<any> = (props) => {
	return (
		<div className="bg-white rounded-2xl shadow-lg p-6 max-w-lg relative  z-40 mx-auto" onClick={(e) => e.stopPropagation()}>
			{props.children}
		</div>
	);
};

export default WbcTileCard;
