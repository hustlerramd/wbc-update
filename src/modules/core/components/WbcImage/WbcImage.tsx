import { NextJSImageType, WBCImageType } from "@/model/DVM/components.dvm";
import Image from "next/image";
import * as React from "react";

const WbcImage: React.FC<WBCImageType> = (props: WBCImageType) => {
	const { parentClass, src, alt, height, width, fill, ...imageProps } = props;
	return fill ? (
		<div className={parentClass}>
			<Image src={src} alt={alt} fill={fill} priority={false} {...imageProps} />;
		</div>
	) : (
		<div className={parentClass}>
			<Image src={src} alt={alt} height={height} width={width} priority={false} {...imageProps} />;
		</div>
	);
};

export default WbcImage;
