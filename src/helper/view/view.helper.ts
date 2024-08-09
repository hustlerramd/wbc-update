import { AllowedFileTypes, ImageSize, ImageSizeErrorMessage, ImageTypeErrorMessage } from "@/model/constants/files";
import WbcToaster from "@/modules/core/components/WbcToaster";
import { ChangeEvent } from "react";

export const handleChangeHelper = <T>(name: string, value: any, clearFieldError: (field: string) => void, setLoginData: (value: React.SetStateAction<T>) => void) => {
	clearFieldError(name);
	setLoginData((data: T) => {
		return { ...data, [name]: value };
	});
};
export const ImageInputWBCChangeHelper = (
	e: React.ChangeEvent<HTMLInputElement>,
	setImgFileTmp: React.Dispatch<React.SetStateAction<ChangeEvent<HTMLInputElement> | undefined>>,
	setImgProfileTmp: React.Dispatch<React.SetStateAction<string>>
) => {
	return (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target && e.target.files) {
			const file = e.target.files[0];
			if (file) {
				if (ImageSize < file?.size) {
					e.target.value = "";
					WbcToaster({ title: "info", message: `${ImageSizeErrorMessage}` });
					return;
				}
				if (!AllowedFileTypes.includes(file.type)) {
					e.target.value = "";
					WbcToaster({ title: "info", message: ImageTypeErrorMessage });
					return;
				}
				setImgFileTmp(e);
				setImgProfileTmp(URL.createObjectURL(e.target.files[0]));
			}
		}
	};
};
