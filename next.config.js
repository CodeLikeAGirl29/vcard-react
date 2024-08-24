/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: function (config) {
		config.module.rules.push({
			test: /\.md$/,
			use: 'raw-loader',
		});
		return config;
	},
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

module.exports = nextConfig;
