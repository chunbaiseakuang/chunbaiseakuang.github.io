(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{378:function(t,e,r){"use strict";r.r(e);var a=r(45),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"响应式原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#响应式原理"}},[t._v("#")]),t._v(" 响应式原理")]),t._v(" "),r("h2",{attrs:{id:"如何追踪变化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何追踪变化"}},[t._v("#")]),t._v(" 如何追踪变化")]),t._v(" "),r("ul",[r("li",[t._v("当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的 property，并使用 Object.defineProperty 把这些 property 全部转为 getter/setter。Object.defineProperty 是 ES5 中一个无法 shim(替代) 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。")]),t._v(" "),r("li",[t._v("这些 getter/setter 对用户来说是不可见的，但是在内部它们让 Vue 能够追踪依赖，在 property 被访问和修改时通知变更")]),t._v(" "),r("li",[t._v("每个组件实例都对应一个 watcher 实例，它会在组件渲染的过程中把“接触”过的数据 property 记录为依赖。之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。\n"),r("img",{attrs:{src:"https://cn.vuejs.org/images/data.png",alt:"vue"}})])])])}),[],!1,null,null,null);e.default=s.exports}}]);