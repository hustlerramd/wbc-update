"use client";
import React, { Dispatch, Fragment, SetStateAction } from "react";

interface WBCModalProps {
	setOpenModal: Dispatch<SetStateAction<boolean>>;
	openModal: boolean;
	maskBlured?: boolean;
	children?: React.ReactNode;
}

const WBCModalWBC = (props: WBCModalProps) => {
	const { setOpenModal, openModal, maskBlured, children } = props ?? {};
	return (
		<div>
			{/* <Dialog
                as="div"
                className="relative  z-10"
                onClose={() => setOpenModal(false)}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div
                        className={`fixed inset-0 bg-black bg-opacity-25 ${
                            maskBlured ? " backdrop-blur-md " : " "
                        }`}
                    />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-2 md:p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            {children}
                        </Transition.Child>
                    </div>
                </div>
            </Dialog> */}
		</div>
	);
};

export default WBCModalWBC;
