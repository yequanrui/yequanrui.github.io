(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{91:function(s,t,a){"use strict";a.r(t);var p=a(0),e=Object(p.a)({},function(){var s=this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"_3-15-搭配-npm-script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-15-搭配-npm-script","aria-hidden":"true"}},[s._v("#")]),s._v(" 3-15 搭配 Npm Script")]),a("h2",{attrs:{id:"认识-npm-script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#认识-npm-script","aria-hidden":"true"}},[s._v("#")]),s._v(" 认识 Npm Script")]),a("p",[s._v("Npm Script 是一个任务执行者。 Npm 是在安装 Node.js 时附带的包管理器，Npm Script 则是 Npm 内置的一个功能，允许在 package.json 文件里面使用 "),a("code",[s._v("scripts")]),s._v(" 字段定义任务：")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node dev.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pub"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node build.js"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("里面的 "),a("code",[s._v("scripts")]),s._v(" 字段是一个对象，每一个属性对应一段脚本，以上定义了两个任务 "),a("code",[s._v("dev")]),s._v(" 和 "),a("code",[s._v("pub")]),s._v("。 Npm Script 底层实现原理是通过调用 Shell 去运行脚本命令，例如执行 "),a("code",[s._v("npm run pub")]),s._v(" 命令等同于执行命令 "),a("code",[s._v("node build.js")]),s._v("。")]),a("p",[s._v("Npm Script 还有一个重要的功能是能运行安装到项目目录里的 "),a("code",[s._v("node_modules")]),s._v(" 里的可执行模块，例如在通过命令")]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -D webpack\n")])])]),a("p",[s._v("将 Webpack 安装到项目中后，是无法直接在项目根目录下通过命令 webpack 去执行 Webpack 构建的，而是要通过命令 "),a("code",[s._v("./node_modules/.bin/webpack")]),s._v(" 去执行。")]),a("p",[s._v("Npm Script 能方便的解决这个问题，只需要在 "),a("code",[s._v("scripts")]),s._v(" 字段里定义一个任务，例如：")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("Npm Script 会先去项目目录下的 "),a("code",[s._v("node_modules")]),s._v(" 中寻找有没有可执行的 webpack 文件，如果有就使用本地的，如果没有就使用全局的。 所以现在执行 Webpack 构建只需要通过执行 "),a("code",[s._v("npm run build")]),s._v(" 去实现。")]),a("h2",{attrs:{id:"webpack-为什么需要-npm-script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-为什么需要-npm-script","aria-hidden":"true"}},[s._v("#")]),s._v(" Webpack 为什么需要 Npm Script")]),a("p",[s._v("Webpack 只是一个打包模块化代码的工具，并没有提供任何任务管理相关的功能。 但在实际场景中通常不会是只通过执行 webpack 就能完成所有任务的，而是需要多个任务才能完成。")]),a("p",[s._v("举一个常见的例子，要求如下：")]),a("ul",[a("li",[s._v("在开发阶段为了提高开发体验，使用 DevServer 做开发，并且需要输出 Source Map 以方便调试，同时还需要开启自动刷新功能。")]),a("li",[s._v("为了减小发布到线上的代码尺寸，在构建出发布到线上的代码时，需要压缩输出的代码。")]),a("li",[s._v("在构建完发布到线上的代码后，需要把构建出的代码提交给发布系统。")])]),a("p",[s._v("可以看出要求 1 和要求 2 是相互冲突的，其中任务 3 又依赖任务 2。要满足以上三个要求，需要定义三个不同的任务。")]),a("p",[s._v("接下来通过 Npm Script 来定义上面的 3 个任务：")]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack-dev-server --open"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dist"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NODE_ENV=production webpack --config webpack_dist.config.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pub"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run dist && rsync dist"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("含义分别是：")]),a("ul",[a("li",[a("code",[s._v("dev")]),s._v(" 代表用于开发时执行的任务，通过 DevServer 去启动构建。所以在开发项目时只需执行 "),a("code",[s._v("npm run dev")]),s._v("。")]),a("li",[a("code",[s._v("dist")]),s._v(" 代表构建出用于发布到线上去的代码，输出到 dist 目录中。其中的 "),a("code",[s._v("NODE_ENV=production")]),s._v(" 是为了在运行任务时注入环境变量。")]),a("li",[a("code",[s._v("pub")]),s._v(" 代表先构建出用于发布到线上去的代码，再同步 dist 目录中的文件到发布系统(如何同步文件需根据你所使用的发布系统而定)。所以在开发完后需要发布时只需执行 "),a("code",[s._v("npm run pub")]),s._v("。")])]),a("p",[s._v("使用 Npm Script 的好处是把一连串复杂的流程简化成了一个简单的命令，需要时只需要执行对应的那个简短的命令，而不用去手动的重复整个流程。 这会大大的提高我们的效率和降低出错率。")])])}],!1,null,null,null);t.default=e.exports}}]);