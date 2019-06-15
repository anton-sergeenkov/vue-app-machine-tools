module.exports = {
	presets: [
		// ['@vue/app', {
		// 	polyfills: [
		// 		'es6.array.iterator', 
		// 		'es6.promise', 
		// 		'es6.object.assign', 
		// 		'es7.promise.finally',
		// 		'es6.symbol'
		// 	]
		// }]
		['@babel/preset-env', {
			useBuiltIns: 'entry',
		}],
	]
}
