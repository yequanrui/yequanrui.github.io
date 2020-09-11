(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{112:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("p",[t._v("#4-14 开启 Scope Hoisting")]),t._m(0),t._m(1),n("p",[t._v("让我们先来看看在没有 Scope Hoisting 之前 Webpack 的打包方式。")]),t._m(2),t._m(3),t._m(4),t._m(5),n("p",[t._v("以上源码用 Webpack 打包后输出中的部分代码如下：")]),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),n("p",[t._v("由于 "),n("code",[t._v("Scope Hoisting")]),t._v(" 需要分析出模块之间的依赖关系，因此源码 "),n("strong",[t._v("必须采用 ES6 模块化")]),t._v("语句，不然它将无法生效。 原因和"),n("router-link",{attrs:{to:"./optimize-10.html"}},[t._v("使用 TreeShaking")]),t._v(" 中介绍的类似。")],1),t._m(12),t._m(13),t._m(14),n("p",[t._v("同时，考虑到 Scope Hoisting 依赖源码需采用 ES6 模块化语法，还需要配置 "),n("code",[t._v("mainFields")]),t._v("。 原因在 "),n("router-link",{attrs:{to:"./optimize-10.html"}},[t._v("使用 TreeShaking")]),t._v(" 中提到过：因为大部分 Npm 中的第三方库采用了 "),n("code",[t._v("CommonJS")]),t._v(" 语法，但部分库会同时提供 ES6 模块化的代码，为了充分发挥 Scope Hoisting 的作用，需要增加以下配置：")],1),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Hoisting 可以让 Webpack 打包出来的代码文件更小、运行的更快， 它又译作 "),s("strong",[this._v("作用域提升")]),this._v("，是在 Webpack3 中新推出的功能。 单从名字上看不出 Scope Hoisting 到底做了什么，下面来详细介绍它。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"认识-scope-hoisting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#认识-scope-hoisting","aria-hidden":"true"}},[this._v("#")]),this._v(" 认识 Scope Hoisting")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("假如现在有两个文件分别是 "),s("code",[this._v("util.js")]),this._v(":")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("export")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("default")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[this._v('"Hello,Webpack"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("和入口文件 "),s("code",[this._v("main.js")]),this._v(":")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" str "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./util.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __webpack_exports__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __webpack_require__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" __WEBPACK_IMPORTED_MODULE_0__util_js__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("__webpack_require__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__WEBPACK_IMPORTED_MODULE_0__util_js__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __webpack_exports__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __webpack_require__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    __webpack_exports__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello,Webpack"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在开启 "),s("code",[this._v("Scope Hoisting")]),this._v(" 后，同样的源码输出的部分代码如下：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __webpack_exports__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __webpack_require__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" util "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello,Webpack"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("util"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("从中可以看出开启 "),n("code",[t._v("Scope Hoisting")]),t._v(" 后，函数申明由 "),n("strong",[t._v("两个变成了一个")]),t._v("，"),n("code",[t._v("util.js")]),t._v(" 中定义的内容被直接注入到了 "),n("code",[t._v("main.js")]),t._v(" 对应的模块中。 这样做的好处是：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("代码体积更小，因为函数申明语句会产生大量代码；")]),s("li",[this._v("代码在运行时因为创建的函数作用域更少了，内存开销也随之变小。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Scope Hoisting 的实现原理其实很简单："),s("strong",[this._v("分析出模块之间的依赖关系，尽可能的把打散的模块合并到一个函数中去，但前提是不能造成代码冗余")]),this._v("。 因此只有那些被引用了一次的模块才能被合并。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用-scope-hoisting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-scope-hoisting","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 Scope Hoisting")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("要在 Webpack 中使用 "),s("code",[this._v("Scope Hoisting")]),this._v(" 非常简单，因为这是 Webpack 内置的功能，只需要配置一个插件，相关代码如下：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ModuleConcatenationPlugin "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack/lib/optimize/ModuleConcatenationPlugin"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开启 Scope Hoisting")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModuleConcatenationPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  resolve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 针对 Npm 中的第三方模块优先采用 `jsnext:main`中指向的 ES6 模块化语法的文件")]),t._v("\n    mainFields"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jsnext:main"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"browser"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("对于采用了 "),s("strong",[this._v("非 ES6")]),this._v("模块化语法的代码，Webpack 会降级处理不使用 "),s("code",[this._v("Scope Hoisting")]),this._v(" 优化，为了知道 Webpack 对哪些代码做了降级处理， 你可以在启动 Webpack 时带上 "),s("code",[this._v("--display-optimization-bailout")]),this._v(" 参数，这样在输出日志中就会包含类似如下的日志：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("main"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" modules "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" bytes "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("built"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    ModuleConcatenation bailout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Module is not an ECMAScript module\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("其中的 "),s("code",[this._v("ModuleConcatenation bailout")]),this._v(" 告诉了你哪个文件因为什么原因导致了降级处理。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("也就是说要开启 "),s("code",[this._v("Scope Hoisting")]),this._v(" 并发挥最大作用的配置如下：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ModuleConcatenationPlugin "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack/lib/optimize/ModuleConcatenationPlugin"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  resolve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 针对 Npm 中的第三方模块优先采用 jsnext:main 中指向的 ES6 模块化语法的文件")]),t._v("\n    mainFields"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jsnext:main"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"browser"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开启 Scope Hoisting")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModuleConcatenationPlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);