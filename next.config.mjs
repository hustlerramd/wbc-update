/** @type {import('next').NextConfig} */
const nextConfig = {
	i18n: {
		locales: ["default", "en", "de", "fr"],
		defaultLocale: "default",
		localeDetection: false,
	},
	trailingSlash: true,
};

export default nextConfig;
