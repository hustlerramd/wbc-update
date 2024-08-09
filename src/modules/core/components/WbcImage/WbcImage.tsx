import { WBCImageType } from "@/model/DVM/components.dvm";
import Image from "next/image";
import * as React from "react";
import favicon from "../../../../../public/img/favicon.svg";

const WbcImage: React.FC<WBCImageType> = (props: WBCImageType) => {
	const { parentClass, defSrc, src, alt, height, width, fill, priority = false, ...imageProps } = props;
	const [imageSrc, setImageSrc] = React.useState(src);
	const updateImage = (imgSrc: any) => {
		if (imgSrc === null || imgSrc === undefined || imgSrc.trim() === "") {
			if (defSrc) {
				setImageSrc(favicon);
			} else {
				setImageSrc(favicon);
			}
		} else {
			setImageSrc(imgSrc);
		}
	};
	React.useEffect(() => {
		updateImage(src);
	}, [src]);

	return fill ? (
		<div className={parentClass}>
			<Image src={imageSrc} alt={alt} fill={true} priority={priority} {...imageProps} />
		</div>
	) : (
		<div className={parentClass}>
			<Image src={imageSrc} alt={alt} height={height} width={width} priority={priority} {...imageProps} />
		</div>
	);
};

export default WbcImage;
