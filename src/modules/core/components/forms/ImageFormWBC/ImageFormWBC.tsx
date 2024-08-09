import React, { useEffect } from "react";
import ImageInputWBC from "../../inputs/ImageInputWBC";
import WbcImage from "../../WbcImage";
import { WBCImageFormInputType, WBCImageInputType } from "@/model/DVM/components.dvm";

const ImageFormWBC: React.FC<WBCImageFormInputType> = (props: WBCImageFormInputType) => {
	const { label, name, handleChange, value, placeholder, inputProps, required, imageProfileTmp, inputRefUploadFile, setImgFileTmp, setImgProfileTmp } = props;
	const [imageInputWBCProps, setImageInputWBCProps] = React.useState<WBCImageInputType>({
		inputRefUploadFile: inputRefUploadFile,
		setImgFileTmp: setImgFileTmp,
		setImgProfileTmp: setImgProfileTmp,
	});
	useEffect(() => {
		let imageInputProps: WBCImageInputType = {
			inputRefUploadFile: inputRefUploadFile,
			setImgFileTmp: setImgFileTmp,
			setImgProfileTmp: setImgProfileTmp,
		};
		imageInputProps = { ...imageInputProps, ...inputProps };
		imageInputProps.name = name;
		imageInputProps.placeholder = placeholder;
		imageInputProps.required = required;
		if (value) {
			imageInputProps.value = value;
		}
		setImageInputWBCProps(imageInputProps);
	}, [props]);
	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (handleChange !== undefined) {
			handleChange(name as string, event.target.value);
		}
	};

	return (
		<div className="flex items-center justify-center w-full">
			<label
				className="flex flex-col w-full h-32 border rounded-lg border-gray-500 border-solid hover:bg-gray-100 hover:border-gray-500 hover:cursor-pointer"
				onClick={() => inputRefUploadFile?.current?.click()}
			>
				{imageProfileTmp ? (
					<WbcImage src={imageProfileTmp} alt="angela" width={300} height={300} className="rounded-lg h-full w-full " />
				) : (
					<div className="flex flex-col items-center justify-center pt-7">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-brand-pink group-hover:text-gray-600" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
						</svg>
						<p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">{label}</p>
					</div>
				)}
			</label>
			<ImageInputWBC {...imageInputWBCProps} />
		</div>
	);
};

export default ImageFormWBC;
