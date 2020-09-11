(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{134:function(e,n,i){"use strict";i.r(n);var a=i(0),t=Object(a.a)({},function(){var e=this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"content"},[i("p",[e._v("Webpack 4 虽然发布了，但没有文档，只能看源代码\nWebpack 4 相关插件没有及时适配, 需要提issue，让作者适配，需要等待\n配置适配兼容，包括 mode, commonsChunk, 默认插件\n骨架升级测试, 会遇到一些奇怪问题，然后去升级对应的插件")]),i("h2",{attrs:{id:"webpack-4-最新问题"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#webpack-4-最新问题","aria-hidden":"true"}},[e._v("#")]),e._v(" Webpack 4 最新问题")]),i("p",[e._v("目前 extract-text-webpack-plugin 最新版本不支持 Webpack 4.3.0 版本. webpack 4.2.0 以下可用。\n目前从 "),i("code",[e._v("extract-text-webpack-plugin")]),e._v(" issues 了解， 未来 "),i("code",[e._v("extract-text-webpack-plugin")]),e._v(" 将废弃，作者建议使用 "),i("code",[e._v("mini-css-extract-plugin")]),e._v(" 插件。")]),i("h2",{attrs:{id:"webpack-4-版本特性"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#webpack-4-版本特性","aria-hidden":"true"}},[e._v("#")]),e._v(" Webpack 4 版本特性")]),i("ul",[i("li",[e._v("配置默认初始化一些配置, 比如 entry 默认 './src'")]),i("li",[e._v("开发模式和发布模式, 插件默认内置")]),i("li",[e._v("CommonsChunk 配置简化")]),i("li",[e._v("使用 ES6 语法，比如 Map, Set, includes")]),i("li",[e._v("新增 WebAssembly 构建支持")]),i("li",[e._v("如果要使用 webpack cli 命令，需要单独再安装 webpack-cli")])]),i("p",[e._v("默认配置\n在 Webpack 4 中，不再强制要求指定 entry 和 output 路径。webpack 4 会默认 entry 为 ./src，output 为 ./dist")]),i("p",[e._v("构建模式 mode:\nWebpack 4 配置, 必须配置 mode 属性， 可选值有 development,production,none")]),i("p",[e._v("development 默认开启插件(无需配置):\nNamedModulesPlugin->optimization.namedModules\ndevelopment 模式 使用 eval 构建 module，用来提升构建速度\nwebpack.DefinePlugin 插件的 process.env.NODE_ENV 的值不需要再定义，默认是 development\nproduction 默认开启插件(无需配置):\nNoEmitOnErrorsPlugin->optimization.noEmitOnErrors\nModuleConcatenationPlugin->optimization.concatenateModules\nwebpack.DefinePlugin 插件的 process.env.NODE_ENV 的值不需要再定义，默认是 production\n公共代码提取\nWebpack3的commonschunk hash问题非常的不雅，使用复杂, Webpack 4 直接将\nCommonsChunkPlugin 插件直接改为 optimization.splitChunks\n和 optimization.runtimeChunk 两个配置")]),i("p",[e._v("Webpack 3\nplugins:[\nnew webpack.optimize.CommonsChunkPlugin({ names: 'common'}),\nnew webpack.optimize.CommonsChunkPlugin({ name: 'runtime', chunks:['common']})\n]\nWebpack 4\noptimization: {\nsplitChunks: {\nchunks: 'all',\nname: 'common',\n},\nruntimeChunk: {\nname: 'runtime',\n}\n}\n压缩\n压缩插件更新到 uglifyjs-webpack-plugin 1.0 版本，支持多进程压缩，缓存以及es6语法，无需单独安装转换器。当 mode='production' 默认开启压缩，无需配置。可以通过 optimization.minimize 和 optimization.minimizer 自定义配置。测试发现,第二次打包时间是第一次打包的一半左右。")]),i("p",[e._v("optimization.minimize 是否启用压缩\noptimization.minimizer 制定压缩库, 默认 uglifyjs-webpack-plugin 1.0\noptimization: {\nminimize:true\n}\nWebpack4 代码： WebpackOptionsDefaulte.js#L261")]),i("p",[e._v("优化配置\nWebpack 4 默认内置了一些配置, 但额外又增加了一些配置，比如 optimization 配置属性，差不多 20 各左右的属性配置, 具体看webpack/schemas/WebpackOptions.json")]),i("p",[e._v("sideEffects 构建大小优化\nWebpack 4 提供了 sideEffects 的配置，引入的第三方插件在 package.json 里面配置 sideEffects:false 后，据说是可以大幅度地减小打包出的文件的体积，具体待验证。")]),i("p",[e._v("目前初步了解 sideEffects 的信息：sideEffects:false 表示该模块无副作用。当你需要导入，但不需要导出任何东西时，但需要在导入时做其他事情(必然初始化，pollyfill等)，这就是导入模块的副作用. 目前对这个理解的不多，具体在第三方库的构建上面没有一个直观的感受，需要继续深入了解。")]),i("p",[e._v("目前查到的资料：https://stackoverflow.com/questions/41127479/es6-import-for-side-effects-meaning")]),i("p",[e._v("插件事件注册与调用\nWebpack4 代码层面最大的变化是整个Plugin的事件注册和事件触发机制完全重写了，导致大部分第三方插件都要修改才能用，有些插件作者一两年都没有更新，提了issue只能耐心等待，如果要用只能自己硬着头皮去翻源码然后PR了。 到目前为止, 常用的插件都已经适配。")]),i("p",[e._v("Webpack3:\n注册：")]),i("p",[e._v("compiler.plugin(‘done’,callback)\n触发：")]),i("p",[e._v("compilitation.applyPlugins(‘done’,params)\nWebpack4:\n注册：\ncompiler.hooks.done.tap(‘mypluinname’,callback)\n触发：\ncompiler.hooks.done.call()\n常用插件版本升级\neslint-loader: ^ 2.0.0\nfile-loader:^1.1.10\nvue-loader: ^14.1.1\nwebpack-hot-middleware\nextract-text-webpack-plugin: ^4.0.0-beta.0\nhtml-webpack-plugin : ^3.0.6")]),i("p",[e._v("工程化支持\neasywebpack 前端工程化方案已经支持 Webpack4 配置, 对应方案是 ^4.x.x 版本。\n如果你之前已经使用 easywebpack(webpack3)工程化方案, 你只需要按照版本发布指引升级或删除 package.json 对应插件依赖即可。 webpack.config.js 无需修改，easywebpack 4 已经向下兼容了。已经适配 Webpack4 的骨架项目代码在对应的 webpack4 分支，有需要可以玩玩。详细版本请见：easywebpack 版本发布历史")]),i("p",[e._v("egg-vue-webpack-boilerplate 基于 Egg + Vue + Webpack4 多页面SSR项目\negg-react-webpack-boilerplate 基于 Egg + React + Webpack4 多页面SSR项目\nwebpack-static-html HTML静态多页面 Webpack 构建工程化解决方案骨架")])])}],!1,null,null,null);n.default=t.exports}}]);