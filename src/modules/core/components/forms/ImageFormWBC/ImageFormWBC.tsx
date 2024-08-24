import React, { useEffect } from "react";
import ImageInputWBC from "../../inputs/ImageInputWBC";
import WbcImage from "../../WbcImage";
import { WBCImageFormInputType, WBCImageInputType } from "@/model/DVM/components.dvm";
import { WBC_THEME } from "@/model/constants/theme";

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
				className="flex flex-col w-36 h-36 border rounded-lg justify-center border-gray-500 border-solid hover:bg-gray-100 hover:border-gray-500 hover:cursor-pointer"
				onClick={() => inputRefUploadFile?.current?.click()}
			>
				{imageProfileTmp ? (
					<WbcImage src={imageProfileTmp} alt="angela" width={300} height={300} className="rounded-lg w-30 h-30 " />
				) : (
					<div className="flex flex-col items-center justify-center">
						<svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M4.97222 38.5625C3.81111 38.5625 2.81713 38.1491 1.99028 37.3222C1.16343 36.4954 0.75 35.5014 0.75 34.3403V4.78472C0.75 3.62361 1.16343 2.62963 1.99028 1.80278C2.81713 0.975926 3.81111 0.5625 4.97222 0.5625H34.5278C35.6889 0.5625 36.6829 0.975926 37.5097 1.80278C38.3366 2.62963 38.75 3.62361 38.75 4.78472V34.3403C38.75 35.5014 38.3366 36.4954 37.5097 37.3222C36.6829 38.1491 35.6889 38.5625 34.5278 38.5625H4.97222ZM4.97222 34.3403H34.5278V4.78472H4.97222V34.3403ZM7.08333 30.1181H32.4167L24.5 19.5625L18.1667 28.0069L13.4167 21.6736L7.08333 30.1181Z"
								fill={WBC_THEME.primary}
							/>
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
