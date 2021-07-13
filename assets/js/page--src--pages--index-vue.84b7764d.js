(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{aK7f:function(e,t,n){},gEGz:function(e,t,n){"use strict";n("aK7f")},hBbZ:function(e,t,n){"use strict";var i=new Map;var s="undefined"==typeof window;function r(e,t){return Object.assign({mixins:[{beforeCreate:function(){this.cleanupHandlers=[];var t=function(){var e=function(){},t=new Promise((function(t){e=t}));return{hydrate:e,hydrationPromise:t}}(),n=t.hydrate,i=t.hydrationPromise;this.Nonce=function(e){var t=e.component,n=e.hydrationPromise;return s?t:function(){return n.then((function(){return function(e){return"function"==typeof e}(e=t)?e().then((function(e){return e.default})):e;var e}))}}({component:e,hydrationPromise:i}),this.hydrate=n,this.hydrationPromise=i},beforeDestroy:function(){this.cleanup()},mounted:function(){var e=this;if(this.$el.nodeType!==Node.COMMENT_NODE){if(!this.never){if(this.whenVisible){var t=function(e){if("undefined"==typeof IntersectionObserver)return null;var t=JSON.stringify(e);if(i.has(t))return i.get(t);var n=new IntersectionObserver((function(e){e.forEach((function(e){(e.isIntersecting||e.intersectionRatio>0)&&e.target.hydrate&&e.target.hydrate()}))}),e);return i.set(t,n),n}(!0!==this.whenVisible?this.whenVisible:void 0);if(!t)return void this.hydrate();this.$el.hydrate=this.hydrate;var n=function(){return t.unobserve(e.$el)};return this.cleanupHandlers.push(n),this.hydrationPromise.then(n),void t.observe(this.$el)}if(this.whenIdle){if(!("requestIdleCallback"in window)||!("requestAnimationFrame"in window))return void this.hydrate();var s=requestIdleCallback((function(){requestAnimationFrame(e.hydrate)}),{timeout:this.idleTimeout}),r=function(){return cancelIdleCallback(s)};this.cleanupHandlers.push(r),this.hydrationPromise.then(r)}if(this.interactionEvents&&this.interactionEvents.length){var o={capture:!0,once:!0,passive:!0};this.interactionEvents.forEach((function(t){e.$el.addEventListener(t,e.hydrate,o);e.cleanupHandlers.push((function(){e.$el.removeEventListener(t,e.hydrate,o)}))}))}}}else this.hydrate()},methods:{cleanup:function(){this.cleanupHandlers.forEach((function(e){return e()}))}},render:function(e){return e(this.Nonce,{attrs:this.$attrs,on:this.$listeners,scopedSlots:this.$scopedSlots},this.$slots.default)}}]},t)}var o=r({render:function(){return this.$slots.default}},{props:{idleTimeout:{default:2e3,type:Number},never:{type:Boolean},onInteraction:{type:[Array,Boolean,String]},triggerHydration:{default:!1,type:Boolean},whenIdle:{type:Boolean},whenVisible:{type:[Boolean,Object]}},computed:{interactionEvents:function(){return this.onInteraction?!0===this.onInteraction?["focus"]:Array.isArray(this.onInteraction)?this.onInteraction:[this.onInteraction]:[]}},watch:{triggerHydration:{immediate:!0,handler:function(e){e&&this.hydrate()}}}});t.a=o},iyQ6:function(e,t,n){"use strict";n.r(t);var i={name:"Callout",props:["title"]},s=n("KHd+"),r={metaInfo:{title:"Espia Só"},components:{Callout:Object(s.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"relative w-full border border-black border-opacity-100 rounded-md"},[t("div",{staticClass:"-mt-4 text-center text-white"},[t("span",{staticClass:"inline-block px-12 pt-2 pb-4 text-base font-medium tracking-wider bg-blue-800 rounded"},[this._v(this._s(this.title))])]),t("div",{staticClass:"relative p-6 overflow-hidden"},[this._t("default")],2)])}),[],!1,null,null,null).exports,LazyHydrate:n("hBbZ").a}},o=(n("gEGz"),Object(s.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",[n("div",{staticClass:"flex flex-col items-center m-10"},[n("p",{staticClass:"text-xl text-center"},[e._v("\n    O Espia Só é sua wikipédia das matérias da UFV. É um espaço onde os próprios alunos colaboram com diversas informações, como: links úteis, resumos, materiais de anos anteriores e dicas.\n  ")]),n("g-link",{staticClass:"mt-8",attrs:{to:"/courses"}},[n("b-button",{staticClass:"px-3 py-2 m-1 text-white bg-blue-800 border-b-4 border-l-2 border-blue-900 rounded shadow-lg hover:shadow-md"},[e._v("\n      Acessar Cursos\n    ")])],1),n("LazyHydrate",{attrs:{"when-visible":""}},[n("div",{staticClass:"grid grid-flow-row mt-24 lg:grid-flow-col gap-y-6 lg:gap-x-4 auto-cols-auto"},[n("Callout",{attrs:{title:"Como Funciona?"}},[n("p",[e._v("Bem vindo! Esse site é uma enciclopédia online das matérias da UFV. Os próprios alunos da universidade colaboram com informações e conteúdos que eles têm. Todos os alunos podem contribuir! Então, se você tem interesse em ajudar, confira nosso "),n("strong",[n("a",{attrs:{href:"https://github.com/OpenSourceLabUFV/espia-so/wiki"}},[e._v("Guia de Contribuição.")])])])]),n("Callout",{attrs:{title:"Regras Gerais"}},[n("p",[e._v("Para a contribuição no Espia Só, algumas regras devem ser seguidas: ")]),n("ul",{staticClass:"mt-4 list-disc list-inside"},[n("li",[e._v("O "),n("strong",[n("g-link",{attrs:{to:"/code-of-conduct"}},[e._v("Código de Conduta")])],1),e._v(" deve ser seguido.")]),n("li",[e._v("Opiniões pessoais sobre os professores devem ser evitadas.")]),n("li",[e._v("Tente não publicar conteúdos que repetem todo semestre das disciplinas. Os professores sempre podem pedir para retirarmos conteúdo.")])])])],1)])],1)])}),[],!1,null,null,null));t.default=o.exports}}]);