import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";
import plugin from "tailwindcss/plugin";

const config: Config = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/modules/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			screens: {
				xs: "320px",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities, theme, e }: PluginAPI) {
			const colors = theme("colors") as Record<string, any>;
			const textFillColorUtilities = Object.keys(colors).reduce((acc, colorKey) => {
				const colorValues = colors[colorKey];
				if (typeof colorValues === "string") {
					acc[`.${e(`text-${colorKey}`)}`] = {
						"-webkit-text-fill-color": colorValues,
					};
				} else {
					Object.keys(colorValues).forEach((shade) => {
						acc[`.${e(`text-${colorKey}-${shade}`)}`] = {
							"-webkit-text-fill-color": colorValues[shade],
						};
					});
				}
				return acc;
			}, {} as Record<string, any>);
			addUtilities(textFillColorUtilities);
		}),
	],
};
export default config;
