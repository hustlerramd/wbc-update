"use client";
import { PureComponentType } from "@/model/DVM/components.dvm";
import * as React from "react";
import { useTranslation } from "react-i18next";

const AuthLeftSection: React.FC<PureComponentType> = () => {
	const { t } = useTranslation();
	return (
		<div className="h-full w-full max-w-full bg-[url('/img/authImage.png')] bg-black/20 bg-cover bg-gray-600 bg-lighter-dark-blue bg-blend-soft-light ">
			<div className="flex justify-center p-2 h-full items-end max-w-full bg-black/20	">
				<div className="flex flex-col p-5 lg:p-0 h-[35%]  items-start justify-centerw-1/2 ">
					<div className="text-white text-3xl font-bold">{t("auth.text.Welcome_to")}</div>
					<div className="text-white text-4xl font-bold">{t("auth.text.Womens_Business_Club")}</div>
					<div className="text-white text-2xl">{t("auth.text.Empowering_ambitious_women_to_succeed")}</div>
				</div>
			</div>
		</div>
	);
};

export default AuthLeftSection;
