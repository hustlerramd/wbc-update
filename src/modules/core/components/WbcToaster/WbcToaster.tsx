import { TOAST_POSITION } from "@/model/constants/Wbc";
import * as React from "react";
import Swal, { SweetAlertIcon } from "sweetalert2";

type WbcToasterProps = {
	timer?: number;
	title?: string;
	html?: string;
	message?: string;
	icon?: SweetAlertIcon;
};

const WbcToaster = (WbcToasterProps: WbcToasterProps) => {
	const { timer = 2000, icon, title = "", message = "", html = "" } = WbcToasterProps;
	Swal.mixin({
		toast: true,
		position: TOAST_POSITION.TOP_END,
		showConfirmButton: false,
		timer: timer ?? 2000,
		timerProgressBar: false,
	}).fire({
		title: title,
		html: html,
		icon: icon,
		text: message,
	});
};

export default WbcToaster;
