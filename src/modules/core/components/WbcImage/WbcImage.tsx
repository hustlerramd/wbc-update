import { WBCImageType } from "@/model/DVM/components.dvm";
import Image from "next/image";
import * as React from "react";

const WbcImage: React.FC<WBCImageType> = (props: WBCImageType) => {
	const {} = props;
	return (
		<div>
			<Image src="/img/header-logo.svg" alt="logo" height={130} width={130} priority={false} />;
		</div>
	);
};

export default WbcImage;
