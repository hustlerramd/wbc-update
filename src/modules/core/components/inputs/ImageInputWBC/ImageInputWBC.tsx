import { AllowedFileTypes, ImageAllowedFileTypeString, ImageSize, ImageSizeErrorMessage, ImageTypeErrorMessage } from "@/model/constants/files";
import { INPUT_TYPE } from "@/modules/core/models/constants/constants";
import React from "react";
import { WBCFileInputType } from "@/model/DVM/components.dvm";
import { ImageInputWBCChangeHelper } from "@/helper/view/view.helper";

type ImageInputWBCProps = {
	//
};

const ImageInputWBC: React.FC<WBCFileInputType> = (props: WBCFileInputType) => {
	const { inputRefUploadFile, setImgProfileTmp, setImgFileTmp } = props;
	return (
		<input
			hidden
			type={INPUT_TYPE.FILE}
			accept={ImageAllowedFileTypeString}
			ref={inputRefUploadFile}
			onChange={(e) => ImageInputWBCChangeHelper(e, setImgFileTmp, setImgProfileTmp)(e)}
		/>
	);
};

export default ImageInputWBC;
