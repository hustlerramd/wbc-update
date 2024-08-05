import { ImageLoader, OnLoadingComplete, PlaceholderValue, StaticImport } from "next/dist/shared/lib/get-img-props";
export type PureComponentType = {};
export type NextJSImageType = React.ForwardRefExoticComponent<
	Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "height" | "width" | "loading" | "ref" | "alt" | "src" | "srcSet"> & {
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
	} & React.RefAttributes<HTMLImageElement | null>
>;
export type WBCImageType = NextJSImageType & {
	parentClass?: string;
	src: string | StaticImport;
	alt: string;
	width?: number | `${number}` | undefined;
	height?: number | `${number}` | undefined;
	fill?: boolean | undefined;
};
