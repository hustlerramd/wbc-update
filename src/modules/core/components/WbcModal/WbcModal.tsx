"use client";
import React, { Dispatch, Fragment, SetStateAction } from "react";
import WbcMask from "../WbcMask";
import WbcTileCard from "../WbcTileCard";
import { ModalProps } from "../../models/DVM";

const WBCModalWBC = (props: ModalProps) => {
	const { openModal, onClose, maskBlured = false, children, showCloseButton = true, closeOnOutsideClick = true } = props ?? {};
	return openModal ? (
		<WbcMask onClick={closeOnOutsideClick ? onClose : () => {}} isFullScreen={true} isblured={maskBlured}>
			<WbcTileCard>
				{showCloseButton ? (
					<button
						className="absolute text-2xl hover:bold outline-0 hover:outline-red-500 hover:outline rounded-full aspect-square line hover:outline-2 top-2 right-3 text-gray-500 hover:text-gray-700 leading-5 px-1"
						onClick={() => onClose()}
					>
						&times;
					</button>
				) : null}
				{children}
			</WbcTileCard>
		</WbcMask>
	) : null;
};

export default WBCModalWBC;
