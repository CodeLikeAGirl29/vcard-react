/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

module.exports = nextConfig;
