node.js---webpack---react
from	https://www.jianshu.com/p/42e11515c10f

初始化项目工程
	--npm init

初始化目录，配置webpack
	配置source-map，便于调试是错误定位
		devtool选项	配置结果
			source-map	在一个单独的文件中产生一个完整且功能完全的文件。这个文件具有最好的source map，但是它会减慢打包速度；
			cheap-module-source-map	在一个单独的文件中生成一个不带列映射的map，不带列映射提高了打包速度，但是也使得浏览器开发者工具只能对应到具体的行，不能对应到具体的列（符号），会对调试造成不便；
			eval-source-map	使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。这个选项可以在不影响构建速度的前提下生成完整的sourcemap，但是对打包后输出的JS文件的执行具有性能和安全的隐患。在开发阶段这是一个非常好的选项，在生产阶段则一定不要启用这个选项；
			cheap-module-eval-source-map	这是在打包文件时最快的生成source map的方法，生成的Source Map 会和打包后的JavaScript文件同行显示，没有列映射，和eval-source-map选项具有相似的缺点；
	配置webpack-dev-server
		devserver的配置选项	功能描述
			contentBase	默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）
			port	设置默认监听端口，如果省略，默认为”8080“
			inline	设置为true，当源文件改变时会自动刷新页面
			historyApiFallback	在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
	配置webpack loader
		test：一个用以匹配loaders所处理文件的拓展名的正则表达式（必须）
		loader：loader的名称（必须）
		include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
		query：为loaders提供额外的设置选项（可选）
		配置Babel(支持最新js;支持js拓展语言)
			npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react
		配置css loader style loader
			css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能,style-loader将所有的计算后的样式加入页面
			css模块化
				options: {
                            modules: true, // 指定启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
			使用 className = class.atrr
		使用PostCSS来为CSS代码自动添加适应不同浏览器的CSS前缀
			npm install --save-dev postcss-loader autoprefixer
	配置插件plugins
		HtmlWebpackPlugin	依据一个简单的index.html模板，生成一个自动引用你打包后的JS文件的新index.html
		Hot Module Replacement	许你在修改组件代码后，自动刷新实时预览修改后的效果。
			npm install --save-dev babel-plugin-react-transform react-transform-hmr
产品阶段项目构建
	webpack.production.config.js
	package.json script配置属性build	"set NODE_ENV=production && webpack --config ./webpack.production.config.js --progress"	(windows)
	发布阶段优化插件
		OccurenceOrderPlugin :为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
		UglifyJsPlugin：压缩JS代码；
		ExtractTextPlugin：分离CSS和JS文件
缓存
	 output: {
        path: __dirname + "/build",
        filename: "bundle-[hash].js"
    }
	清理缓存插件
	cnpm install clean-webpack-plugin --save-dev

	
	
移动端页面兼容
	react-responsive 
		设置MediaQuery