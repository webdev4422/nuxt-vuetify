(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{336:function(t,e,n){"use strict";var r=n(337),o=n(338);t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},337:function(t,e,n){"use strict";var r=n(4),o=n(11),c=n(105),l=n(32),f=n(223),d=n(222),v=n(136),y=n(23),h=n(8),O=n(167),j=n(74),w=n(168);t.exports=function(t,e,n){var S=-1!==t.indexOf("Map"),x=-1!==t.indexOf("Weak"),m=S?"set":"add",k=o[t],P=k&&k.prototype,C=k,E={},z=function(t){var e=P[t];l(P,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(x&&!y(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return x&&!y(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(x&&!y(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(c(t,"function"!=typeof k||!(x||P.forEach&&!h((function(){(new k).entries().next()})))))C=n.getConstructor(e,t,S,m),f.REQUIRED=!0;else if(c(t,!0)){var D=new C,N=D[m](x?{}:-0,1)!=D,_=h((function(){D.has(1)})),R=O((function(t){new k(t)})),B=!x&&h((function(){for(var t=new k,e=5;e--;)t[m](e,e);return!t.has(-0)}));R||((C=e((function(e,n){v(e,C,t);var r=w(new k,e,C);return null!=n&&d(n,r[m],{that:r,AS_ENTRIES:S}),r}))).prototype=P,P.constructor=C),(_||B)&&(z("delete"),z("has"),S&&z("get")),(B||N)&&z(m),x&&P.clear&&delete P.clear}return E[t]=C,r({global:!0,forced:C!=k},E),j(C,t),x||n.setStrong(C,t,S),C}},338:function(t,e,n){"use strict";var r=n(29).f,o=n(86),c=n(165),l=n(73),f=n(136),d=n(222),v=n(164),y=n(166),h=n(28),O=n(223).fastKey,j=n(54),w=j.set,S=j.getterFor;t.exports={getConstructor:function(t,e,n,v){var y=t((function(t,r){f(t,y,e),w(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),h||(t.size=0),null!=r&&d(r,t[v],{that:t,AS_ENTRIES:n})})),j=S(e),x=function(t,e,n){var r,o,c=j(t),l=m(t,e);return l?l.value=n:(c.last=l={index:o=O(e,!0),key:e,value:n,previous:r=c.last,next:void 0,removed:!1},c.first||(c.first=l),r&&(r.next=l),h?c.size++:t.size++,"F"!==o&&(c.index[o]=l)),t},m=function(t,e){var n,r=j(t),o=O(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return c(y.prototype,{clear:function(){for(var t=j(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,h?t.size=0:this.size=0},delete:function(t){var e=j(this),n=m(this,t);if(n){var r=n.next,o=n.previous;delete e.index[n.index],n.removed=!0,o&&(o.next=r),r&&(r.previous=o),e.first==n&&(e.first=r),e.last==n&&(e.last=o),h?e.size--:this.size--}return!!n},forEach:function(t){for(var e,n=j(this),r=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!m(this,t)}}),c(y.prototype,n?{get:function(t){var e=m(this,t);return e&&e.value},set:function(t,e){return x(this,0===t?0:t,e)}}:{add:function(t){return x(this,t=0===t?0:t,t)}}),h&&r(y.prototype,"size",{get:function(){return j(this).size}}),y},setStrong:function(t,e,n){var r=e+" Iterator",o=S(e),c=S(r);v(t,e,(function(t,e){w(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),y(e)}}},339:function(t,e,n){"use strict";n(46),n(38),n(137),n(87),n(336),n(15),n(53),n(19),n(22),n(72),n(47),n(41),n(64),n(85);var r=n(2),o=(n(224),n(1)),c=n(65),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=v.reduce((function(t,e){return t["offset"+Object(l.r)(e)]={type:[String,Number],default:null},t}),{}),O=v.reduce((function(t,e){return t["order"+Object(l.r)(e)]={type:[String,Number],default:null},t}),{}),j={col:Object.keys(y),offset:Object.keys(h),order:Object.keys(O)};function w(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var S=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},O),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=S.get(l);return d||function(){var t,e;for(e in d=[],j)j[e].forEach((function(t){var r=n[t],o=w(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),S.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},340:function(t,e,n){"use strict";n(20),n(46),n(38),n(137),n(336),n(53),n(19),n(22),n(48),n(72),n(47),n(64),n(85);var r=n(2),o=(n(224),n(1)),c=n(65),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=["start","end","center"];function h(t,e){return v.reduce((function(n,r){return n[t+Object(l.r)(r)]=e(),n}),{})}var O=function(t){return[].concat(y,["baseline","stretch"]).includes(t)},j=h("align",(function(){return{type:String,default:null,validator:O}})),w=function(t){return[].concat(y,["space-between","space-around"]).includes(t)},S=h("justify",(function(){return{type:String,default:null,validator:w}})),x=function(t){return[].concat(y,["space-between","space-around","stretch"]).includes(t)},m=h("alignContent",(function(){return{type:String,default:null,validator:x}})),k={align:Object.keys(j),justify:Object.keys(S),alignContent:Object.keys(m)},P={align:"align",justify:"justify",alignContent:"align-content"};function C(t,e,n){var r=P[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var E=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O}},j),{},{justify:{type:String,default:null,validator:w}},S),{},{alignContent:{type:String,default:null,validator:x}},m),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=E.get(l);return d||function(){var t,e;for(e in d=[],k)k[e].forEach((function(t){var r=n[t],o=C(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),E.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},357:function(t,e,n){"use strict";n.r(e);var r=n(75),o=n(106),c=n.n(o),l=n(339),f=n(340),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",[e("v-col",{staticClass:"text-center"},[e("blockquote",{staticClass:"blockquote"},[this._v("\n      “First, solve the problem. Then, write the code.”\n      "),e("footer",[e("small",[e("em",[this._v("—John Johnson")])])])])])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:l.a,VRow:f.a})}}]);