import { SweetAlertPosition } from "sweetalert2";

export const TOAST_POSITION = {
	TOP: "top" as SweetAlertPosition,
	TOP_START: "top-start" as SweetAlertPosition,
	TOP_END: "top-end" as SweetAlertPosition,
	TOP_LEFT: "top-left" as SweetAlertPosition,
	TOP_RIGHT: "top-right" as SweetAlertPosition,
	CENTER: "center" as SweetAlertPosition,
	CENTER_START: "center-start" as SweetAlertPosition,
	CENTER_END: "center-end" as SweetAlertPosition,
	CENTER_LEFT: "center-left" as SweetAlertPosition,
	CENTER_RIGHT: "center-right" as SweetAlertPosition,
	BOTTOM: "bottom" as SweetAlertPosition,
	BOTTOM_START: "bottom-start" as SweetAlertPosition,
	BOTTOM_END: "bottom-end" as SweetAlertPosition,
	BOTTOM_LEFT: "bottom-left" as SweetAlertPosition,
	BOTTOM_RIGHT: "bottom-right" as SweetAlertPosition,
};
export type SweetAlertIcon = "success" | "error" | "warning" | "info" | "question";
