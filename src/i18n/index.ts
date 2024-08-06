import i18n from "i18next";
import ns1 from "../locales/en/translation.json";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export const defaultNS = "ns1";
export const resources = {
	en: { ns1 },
} as const;

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		interpolation: {
			escapeValue: false,
		},
		lng: "en",
		ns: ["ns1"],
		defaultNS,
		resources,
	});
export default i18n;
