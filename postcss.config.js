module.exports = {
	plugins: [
		require("autoprefixer"),
		require("cssnano"),
		require("postcss-combine-media-query"),
		require("postcss-combine-duplicated-selectors")({
			removeDuplicatedProperties: true,
		}),
	],
};
