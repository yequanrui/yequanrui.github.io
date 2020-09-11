(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{108:function(t,a,s){"use strict";s.r(a);var n=s(0),p=Object(n.a)({},function(){var t=this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"_4-3-使用-happypack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-使用-happypack","aria-hidden":"true"}},[t._v("#")]),t._v(" 4-3 使用 HappyPack")]),s("p",[t._v("由于有大量文件需要解析和处理，构建是文件读写和计算密集型的操作，特别是当文件数量变多后，Webpack 构建慢的问题会显得严重。 运行在 Node.js 之上的 Webpack 是单线程模型的，也就是说 Webpack 需要处理的任务需要一件件挨着做，不能多个事情一起做。")]),s("p",[t._v("文件读写和计算操作是无法避免的，那能不能让 Webpack 同一时刻处理多个任务，发挥多核 CPU 电脑的威力，以提升构建速度呢？")]),s("p",[t._v("HappyPack 就能让 Webpack 做到这点，它把任务分解给多个子进程去并发的执行，子进程处理完后再把结果发送给主进程。")]),s("blockquote",[s("p",[t._v("由于 JavaScript 是单线程模型，要想发挥多核 CPU 的能力，只能通过 "),s("strong",[t._v("多进程")]),t._v("去实现，而无法通过多线程实现。")])]),s("h2",{attrs:{id:"使用-happypack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-happypack","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 HappyPack")]),s("p",[t._v("分解任务和管理线程的事情 "),s("code",[t._v("HappyPack")]),t._v(" 都会帮你做好，你所需要做的只是接入 HappyPack。 接入 HappyPack 的相关代码如下：")]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ExtractTextPlugin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"extract-text-webpack-plugin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HappyPack "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"happypack"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.js$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把对 .js 文件的处理转交给 id 为 babel 的 HappyPack 实例")]),t._v("\n        use"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"happypack/loader?id=babel"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 排除 node_modules 目录下的文件，node_modules 目录下的文件都是采用的 ES5 语法，没必要再通过 Babel 去转换")]),t._v("\n        exclude"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node_modules"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把对 .css 文件的处理转交给 id 为 css 的 HappyPack 实例")]),t._v("\n        test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.css$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ExtractTextPlugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("extract")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          use"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"happypack/loader?id=css"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HappyPack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用唯一的标识符 id 来代表当前的 HappyPack 是用来处理一类特定的文件")]),t._v("\n      id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如何处理 .js 文件，用法和 Loader 配置中一样")]),t._v("\n      loaders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-loader?cacheDirectory"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... 其它配置项")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HappyPack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"css"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如何处理 .css 文件，用法和 Loader 配置中一样")]),t._v("\n      loaders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"css-loader"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExtractTextPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("[name].css")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("以上代码有两点重要的修改：")]),s("ul",[s("li",[t._v("在 Loader 配置中，所有文件的处理都交给了 "),s("code",[t._v("happypack/loader")]),t._v(" 去处理，使用紧跟其后的 "),s("code",[t._v("querystring ?id=babel")]),t._v(" 去告诉 "),s("code",[t._v("happypack/loader")]),t._v(" 去选择哪个 HappyPack 实例去处理文件。")]),s("li",[t._v("在 Plugin 配置中，新增了两个 HappyPack 实例分别用于告诉 "),s("code",[t._v("happypack/loader")]),t._v(" 去如何处理 "),s("code",[t._v(".js")]),t._v(" 和 "),s("code",[t._v(".css")]),t._v(" 文件。选项中的 id 属性的值和上面 querystring 中的 "),s("code",[t._v("?id=babel")]),t._v(" 相对应，选项中的 loaders 属性和 Loader 配置中一样。")])]),s("p",[t._v("在实例化 HappyPack 插件的时候，除了可以传入 "),s("code",[t._v("id")]),t._v(" 和 "),s("code",[t._v("loaders")]),t._v(" 两个参数外，HappyPack 还支持如下参数：")]),s("ul",[s("li",[s("code",[t._v("threads")]),t._v(" 代表开启几个子进程去处理这一类型的文件，默认是 3 个，类型必须是整数。")]),s("li",[s("code",[t._v("verbose")]),t._v(" 是否允许 HappyPack 输出日志，默认是 "),s("code",[t._v("true")]),t._v("。")]),s("li",[s("code",[t._v("threadPool")]),t._v(" 代表共享进程池，即多个 HappyPack 实例都使用同一个共享进程池中的子进程去处理任务，以防止资源占用过多，相关代码如下：")])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HappyPack "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"happypack"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 构造出共享进程池，进程池中包含5个子进程")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" happyThreadPool "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HappyPack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ThreadPool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HappyPack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用唯一的标识符 id 来代表当前的 HappyPack 是用来处理一类特定的文件")]),t._v("\n      id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如何处理 .js 文件，用法和 Loader 配置中一样")]),t._v("\n      loaders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-loader?cacheDirectory"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用共享进程池中的子进程去处理任务")]),t._v("\n      threadPool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" happyThreadPool\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HappyPack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"css"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如何处理 .css 文件，用法和 Loader 配置中一样")]),t._v("\n      loaders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"css-loader"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用共享进程池中的子进程去处理任务")]),t._v("\n      threadPool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" happyThreadPool\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExtractTextPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("[name].css")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("接入 HappyPack 后，你需要给项目安装新的依赖：")]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -D happypack\n")])])]),s("p",[t._v("安装成功后重新执行构建你就会看到以下由 HappyPack 输出的日志：")]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Happy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("babel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": Version: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.0")]),t._v(".0-beta.5. Threads: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nHappy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("babel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": All "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" signaling webpack to proceed.\nHappy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": Version: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.0")]),t._v(".0-beta.5. Threads: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nHappy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": All "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" signaling webpack to proceed.\n")])])]),s("p",[t._v("说明你的 HappyPack 配置生效了，并且可以得知 HappyPack 分别启动了 3 个子进程去并行的处理任务。")]),s("h2",{attrs:{id:"happypack-原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#happypack-原理","aria-hidden":"true"}},[t._v("#")]),t._v(" HappyPack 原理")]),s("p",[t._v("在整个 Webpack 构建流程中，最耗时的流程可能就是 Loader 对文件的转换操作了，因为要转换的文件数据巨多，而且这些转换操作都只能一个个挨着处理。 HappyPack 的核心原理就是把这部分任务分解到多个进程去并行处理，从而减少了总的构建时间。")]),s("p",[t._v("从前面的使用中可以看出所有需要通过 Loader 处理的文件都先交给了 "),s("code",[t._v("happypack/loader")]),t._v(" 去处理，收集到了这些文件的处理权后 HappyPack 就好统一分配了。")]),s("p",[t._v("每通过 "),s("code",[t._v("new HappyPack()")]),t._v(" 实例化一个 HappyPack 其实就是告诉 HappyPack 核心调度器如何通过一系列 Loader 去转换一类文件，并且可以指定如何给这类转换操作分配子进程。")]),s("p",[t._v("核心调度器的逻辑代码在主进程中，也就是运行着 Webpack 的进程中，核心调度器会把一个个任务分配给当前空闲的[子进程]，子进程处理完毕后把结果发送给核心调度器，它们之间的数据交换是通过进程间通信 API 实现的。")]),s("p",[t._v("核心调度器收到来自子进程处理完毕的结果后会通知 Webpack 该文件处理完毕。")])])}],!1,null,null,null);a.default=p.exports}}]);