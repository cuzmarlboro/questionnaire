module.exports = {
	env: {
		browser: true, // 浏览器环境
		commonjs: true, // CommonJS 环境可用
		es2021: true, // ES2021 环境可用
	},
	extends: [
		"eslint-config-prettier", // 关闭 ESLint 中与 Prettier 重复的规则
		// "plugin:react/recommended", // react标准配置
		// "standard-with-typescript", // typescript标准配置
	],
	overrides: [], // 这个数组表示覆盖某些文件的配置
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest", // 使用最新的 ECMAScript 版本
		sourceType: "module",
		parser: "babel-eslint",
	},
	plugins: ["react"],
	rules: {},
};
