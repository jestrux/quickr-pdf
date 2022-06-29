import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";
import css from "rollup-plugin-import-css";

import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import path from 'path';

import pkg from './package.json';

const isProduction = process.env.NODE_ENV === "production";

const plugins = [
	babel({
		exclude: 'node_modules/**'
	}),
	resolve(), // so Rollup can find `ms`
	commonjs(),
	css(),
	isProduction && terser(),
	!isProduction && serve(),
	!isProduction && livereload({
		watch: [
			path.resolve(__dirname, 'dist'),
			path.resolve(__dirname, 'src'),
			path.resolve(__dirname, 'index.html')
		],
		exts: ['html', 'js', 'scss', 'sass', 'css']
	}),
];

function output(file, dir){
	if(dir)
		return [
			{ dir: "dist/cjs/", format: 'cjs' },
			{ dir: "dist/es/", format: 'es' }
		];

	return [
		{ file: "dist/cjs/"+file, format: 'cjs' },
		{ file: "dist/es/"+file, format: 'es' }
	];
};

export default [
	{
		input: 'src/main.js',
		output: {
			name: 'ContractPdf',
			file: pkg.browser,
			format: 'umd'
		},
		plugins
	},
	{
		input: 'src/main.js',
		output: output("contract-pdf.js"),
		plugins
	},
];
