import { ImageLoader, OnLoadingComplete, PlaceholderValue, StaticImport } from "next/dist/shared/lib/get-img-props";
import React, {
	ButtonHTMLAttributes,
	ChangeEvent,
	DetailedHTMLProps,
	Dispatch,
	ImgHTMLAttributes,
	InputHTMLAttributes,
	MutableRefObject,
	OptionHTMLAttributes,
	ReactNode,
	RefAttributes,
	SetStateAction,
} from "react";
import { btnEnum } from "../enum/component.enum";
import { LinkProps } from "next/link";
import { DefaultInputComponentProps } from "react-phone-number-input";
export type PureComponentType = {
	children?: ReactNode;
};
export type NextJSImageType = Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "height" | "width" | "loading" | "ref" | "alt" | "src" | "srcSet"> & {
	src: string | StaticImport;
	alt: string;
	width?: number | `${number}` | undefined;
	height?: number | `${number}` | undefined;
	fill?: boolean | undefined;
	loader?: ImageLoader | undefined;
	quality?: number | `${number}` | undefined;
	priority?: boolean | undefined;
	loading?: "eager" | "lazy" | undefined;
	placeholder?: PlaceholderValue | undefined;
	blurDataURL?: string | undefined;
	unoptimized?: boolean | undefined;
	overrideSrc?: string | undefined;
	onLoadingComplete?: OnLoadingComplete | undefined;
	layout?: string | undefined;
	objectFit?: string | undefined;
	objectPosition?: string | undefined;
	lazyBoundary?: string | undefined;
	lazyRoot?: string | undefined;
} & RefAttributes<HTMLImageElement | null>;
export type NextLink = LinkProps;
export type stringKeyValuePair = {
	key: number;
	value: string;
};
export type numberKeyValuePair = {
	key: number;
	value: string;
};
export type KeyValuePair = stringKeyValuePair | numberKeyValuePair;

export type NextInput = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export type NextButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export type NextSelectInputType = InputHTMLAttributes<HTMLSelectElement>;
export type NextSelectOptionInputType = OptionHTMLAttributes<HTMLOptionElement>;

export type WBCImageType = NextJSImageType & {
	parentClass?: string;
	src: string | StaticImport;
	defSrc?: string | StaticImport;
	alt: string;
	width?: number | `${number}` | undefined;
	height?: number | `${number}` | undefined;
	fill?: boolean | undefined;
	priority?: boolean | undefined;
};
export type WBCTextInputType = InputHTMLAttributes<HTMLInputElement>;
export type WBCEmailInputType = WBCTextInputType;
export type WBCDateInputType = WBCTextInputType;
export type WBCPhoneInputType = DefaultInputComponentProps & {};
export type AutoCompleteInputType<T> = {
	items: T[];
	name: string;
	onSelect: (name: string, value: string) => void;
	itemToString: (item: T) => string;
	inputProps: WBCTextInputType;
};
export type WBCImageInputType = WBCTextInputType & {
	inputRefUploadFile: MutableRefObject<HTMLInputElement | null>;
	setImgProfileTmp: Dispatch<SetStateAction<string>>;
	setImgFileTmp: Dispatch<SetStateAction<ChangeEvent<HTMLInputElement> | undefined>>;
};
export type WBCSelectdefaultOptionType = NextSelectOptionInputType & {
	hasDefault?: boolean;
};
export type WBCSelectOptionType = NextSelectOptionInputType & {};
export type WBCSelectInputType = {
	selectProps: NextSelectInputType;
	defaultOptionProps: WBCSelectdefaultOptionType;
	selectOptions: WBCSelectOptionType[];
};

export type WBCPasswordInputType = InputHTMLAttributes<HTMLInputElement> & {
	showEye?: boolean;
};
export type WbcButtonProps = NextButtonProps & {
	btnType?: btnEnum;
	openInNewTab?: boolean;
};

export type WBCLinkType = LinkProps & {
	openInNewTab?: boolean;
	children?: ReactNode;
};
export type SvgWBCType = {
	color?: string;
	width?: number;
	height?: number;
};

export type WbcMaskType = {
	onClick: Function;
	isblured?: boolean;
	isFullScreen?: boolean;
	children?: ReactNode;
};
export type WBCEmailFormInputType = {
	inputProps?: WBCEmailInputType;
	name?: string;
	label?: ReactNode;
	placeholder?: string;
	required?: boolean;
	value?: string;
	handleChange: (name: string, value: string) => void;
};
export type WBCDateFormInputType = {
	inputProps?: WBCDateInputType;
	name?: string;
	label?: ReactNode;
	placeholder?: string;
	required?: boolean;
	value?: string;
	handleChange: (name: string, value: string) => void;
};
export type WBCTextFormInputType = {
	inputProps?: WBCTextInputType;
	name?: string;
	label?: ReactNode;
	placeholder?: string;
	required?: boolean;
	value?: string;
	handleChange?: (name: string, value: string) => void;
};
export type WBCPhoneFormInputType = {
	inputProps?: WBCPhoneInputType;
	name?: string;
	label?: ReactNode;
	subLabel?: ReactNode;
	placeholder?: string;
	required?: boolean;
	value?: string;
	handleChange?: (name: string, value: string) => void;
};
export type WBCImageFormInputType = WBCImageInputType & {
	inputProps?: WBCImageInputType;
	imageProfileTmp: string;
	name?: string;
	label?: ReactNode;
	placeholder?: string;
	required?: boolean;
	value?: string;
	handleChange?: (name: string, value: string) => void;
};
export type WBCPasswordFormInputType = {
	inputProps?: WBCPasswordInputType;
	name?: string;
	label?: ReactNode;
	placeholder?: string;
	required?: boolean;
	showEye?: boolean;
	value?: string;
	handleChange?: (name: string, value: string) => void;
};
export type WBCSelectFormType = {
	SelectInputProps: WBCSelectInputType;
	name: string;
	label?: ReactNode;
	placeholder?: string;
	required?: boolean;
	value?: string;
	handleChange: (name: string, value: string) => void;
};
