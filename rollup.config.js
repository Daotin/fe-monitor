const path = require('path')
const json = require('@rollup/plugin-json')
const { babel } = require('@rollup/plugin-babel')
const resolveFile = function (filePath) {
	return path.join(__dirname, filePath)
}
const plugins = [
	json({
		compact: true, // 输出压缩版
	}),
	babel({
		extensions: ['.js', '.ts'], // 只转换扩展名为 .js 和 .ts 的文件
		babelHelpers: 'bundled',
		presets: [
			[
				'@babel/env',
				{
					targets: {
						browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
					},
				},
			],
		],
	}),
]
module.exports = [
	{
		plugins,
		input: resolveFile('../src/webEyeSDK.js'),
		output: {
			file: resolveFile('../dist/monitor.js'),
			format: 'iife',
			name: 'monitor',
			sourcemap: true,
		},
	},
	{
		plugins,
		input: resolveFile('../src/webEyeSDK.js'),
		output: {
			file: resolveFile('../dist/monitor.esm.js'),
			format: 'esm',
			name: 'monitor',
			sourcemap: true,
		},
	},
	{
		plugins,
		input: resolveFile('../src/webEyeSDK.js'),
		output: {
			file: resolveFile('../dist/monitor.cjs.js'),
			format: 'cjs',
			name: 'monitor',
			sourcemap: true,
		},
	},
]
