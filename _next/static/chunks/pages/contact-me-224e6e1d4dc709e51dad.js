_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"1xof":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("nOHt"),i=n("t4Is"),u=n("a6RD"),l=n.n(u),c=n("FGyW"),s=n("eSNR"),f=n("CwrG"),d=n("uFrm"),p=n.n(d),h=o.a.createElement,m=function(e){var t=e.subject,n=Object(r.useState)(t),a=n[0],i=n[1],u=Object(r.useState)(""),l=u[0],d=u[1],m=Object(r.useState)(""),b=m[0],v=m[1],_=Object(r.useState)(""),g=_[0],w=_[1];return h(o.a.Fragment,null,h(s.a,null),h("div",{className:p.a.container},h("div",{className:p.a.header},h("h1",null,"CONTACT ME")),h("p",{className:p.a.subheader},"Send me an email at ",h(y,null),h("br",null),"Alternatively, fill the form below. I will get back to you as soon as possible!"),h("form",{onSubmit:function(e){e.preventDefault(),""!==g?function(e){var t=e.subject,n=e.message,r=e.contact,o=e.name;return fetch("https://discordapp.com/api/webhooks/723286957651657179/ms7g7-Xa3jK9R3ntlI7lCQwPoraXnK6bcbDjbYlNzlKrXfuqenTrSAq9OTscsocnHTmb",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:"Contact from contact form @michaelsalim.co.uk",embeds:[{title:t,description:"*Name*: ".concat(o,"\n            *Contact through*: ").concat(r)+"```"+n+"```",timestamp:(new Date).toISOString(),color:3524959}]})}).then((function(e){if(e.status>=200&&e.status<300)return Promise.resolve();throw new Error}))}({subject:a,contact:b,message:g,name:l}).then((function(){w(""),c.b.success("Thank you for contacting me. I will get back to you as soon as possible.")})).catch((function(){c.b.error("Sorry, the message wasn't sent properly. Please send me an email instead.")})):c.b.error("Please write a message.")}},h("label",{htmlFor:"about"},"About:"),h("input",{type:"text",placeholder:"What do you want to talk about?",value:a,onChange:function(e){return i(e.target.value)}}),h("label",{htmlFor:"name"},"Name:"),h("input",{type:"text",placeholder:"Name (Optional)",value:l,onChange:function(e){return d(e.target.value)}}),h("label",{htmlFor:"contact"},"Contact:"),h("input",{type:"text",placeholder:"How can I cantact you back? (Email, Phone No., Etc.)",value:b,onChange:function(e){return v(e.target.value)}}),h("label",{htmlFor:"body"},"Body:"),h("textarea",{rows:10,value:g,onChange:function(e){return w(e.target.value)}}),h("button",{type:"submit"},"Submit"))),h(f.a,null))},b=function(){var e="contact@michaelsalim.co.uk";return h("a",{href:"mailto:contact@michaelsalim.co.uk",className:p.a.mailLink},e)},y=l()((function(){return Promise.resolve(b)}),{ssr:!1}),v=o.a.createElement;t.default=function(){var e,t,n,r=Object(a.useRouter)();return v(o.a.Fragment,null,v(i.a,{title:"Contact Me"}),v(m,{subject:null!==(e=null===(t=r.query)||void 0===t||null===(n=t.about)||void 0===n?void 0:n.toString())&&void 0!==e?e:""}))}},"2qu3":function(e,t,n){"use strict";var r=n("oI91"),o=n("/GRZ"),a=n("i2R6");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw a}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.__esModule=!0,t.default=void 0;var s,f=(s=n("q1tI"))&&s.__esModule?s:{default:s},d=n("8L3h"),p=n("jwwS");var h=[],m=[],b=!1;function y(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function v(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var o=y(e[r]);o.loading?t.loading=!0:(t.loaded[r]=o.loaded,t.error=o.error),n.push(o.promise),o.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function _(e,t){return f.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function g(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:_,webpack:null,modules:null},t),r=null;function o(){if(!r){var t=new w(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!b&&"function"===typeof n.webpack){var a=n.webpack();m.push((function(e){var t,n=l(a);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(i){n.e(i)}finally{n.f()}}))}var i=function(e,t){o();var a=f.default.useContext(p.LoadableContext),i=(0,d.useSubscription)(r);return f.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),a&&Array.isArray(n.modules)&&n.modules.forEach((function(e){a(e)})),f.default.useMemo((function(){return i.loading||i.error?f.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:r.retry}):i.loaded?n.render(i.loaded,e):null}),[e,i])};return i.preload=function(){return o()},i.displayName="LoadableComponent",f.default.forwardRef(i)}var w=function(){function e(t,n){o(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u(u({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function O(e){return g(y,e)}function k(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return k(e,t)}))}O.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return g(v,e)},O.preloadAll=function(){return new Promise((function(e,t){k(h).then(e,t)}))},O.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return b=!0,t()};k(m,e).then(n,n)}))},window.__NEXT_PRELOADREADY=O.preloadReady;var j=O;t.default=j},"82ab":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact-me",function(){return n("1xof")}])},a6RD:function(e,t,n){"use strict";var r=n("oI91");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.__esModule=!0,t.noSSR=l,t.default=function(e,t){var n=i.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=a(a({},r),e));if(r=a(a({},r),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(r.render=function(t,n){return e.render(n,t)}),e.modules)){n=i.default.Map;var o={},u=e.modules();Object.keys(u).forEach((function(e){var t=u[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),r.loader=o}r.loadableGenerated&&delete(r=a(a({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,l(n,r);delete r.ssr}return n(r)};u(n("q1tI"));var i=u(n("2qu3"));function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}},eSNR:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("YFqc"),i=n.n(a),u=n("f7Kf"),l=n.n(u),c=o.a.createElement,s=function(e){return c("svg",e,c("defs",null,c("path",{d:"M613.23 0C628.01 0 640 11.99 640 26.77v586.75c0 14.79-11.99 26.78-26.77 26.78H26.77C11.99 640.3 0 628.31 0 613.52V26.77C0 11.99 11.99 0 26.77 0h586.46z",id:"a"}),c("path",{d:"M93.84 552.22l15.55-233.81-11.6-182.26 52.57 79.34-16.13 227.1 11.29 109.63H93.84z",id:"b"}),c("path",{d:"M98.1 113.9l39.41-28.58 106.35 180.79 67.37 166.31-44.09-7.17-86.48-197.04L98.1 113.9z",id:"c"}),c("path",{d:"M314.52 477.17l34.12-7.81 37.15-77.98 101.96-159.87 52.92-93.74-26.89-33.57-95.79 176.45-49.61 76.69-48.82 88.3-48.79-7.73 43.75 39.26z",id:"d"}),c("path",{d:"M532.07 272.26v222.85l18 48.86h-52.72l9.68-157.91-9.68-136.52 47.63-90.01-12.91 112.73z",id:"e"})),c("use",{xlinkHref:"#a",fill:"#e60916"}),c("use",{xlinkHref:"#b",fill:"#fff"}),c("use",{xlinkHref:"#b",fillOpacity:"0",stroke:"#000",strokeWidth:"0"}),c("use",{xlinkHref:"#c",fill:"#fff"}),c("use",{xlinkHref:"#c",fillOpacity:"0",stroke:"#000",strokeWidth:"0"}),c("g",null,c("use",{xlinkHref:"#d",fill:"#fff"}),c("use",{xlinkHref:"#d",fillOpacity:"0",stroke:"#000",strokeWidth:"0"})),c("g",null,c("use",{xlinkHref:"#e",fill:"#fff"}),c("use",{xlinkHref:"#e",fillOpacity:"0",stroke:"#000",strokeWidth:"0"})))};s.defaultProps={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 640 640",width:"640",height:"640"},t.a=function(){return c("div",{className:l.a.container},c(i.a,{href:"/"},c("a",null,c(s,null))))}},f7Kf:function(e,t,n){e.exports={container:"StandardHeader_container__1pfxZ"}},jwwS:function(e,t,n){"use strict";var r;t.__esModule=!0,t.LoadableContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},uFrm:function(e,t,n){e.exports={container:"ContactMe_container__2ZeFf",header:"ContactMe_header__3r9dz",subheader:"ContactMe_subheader__1uJvA",mailLink:"ContactMe_mailLink__2UVra"}}},[["82ab",1,0,2,3,4]]]);