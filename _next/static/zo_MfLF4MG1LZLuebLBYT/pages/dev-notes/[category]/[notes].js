(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"7oys":function(e,n){e.exports=function(e){var n={begin:/(?:[A-Z\_\.\-]+|--[a-zA-Z0-9_-]+)\s*:/,returnBegin:!0,end:";",endsWithParent:!0,contains:[{className:"attribute",begin:/\S/,end:":",excludeEnd:!0,starts:{endsWithParent:!0,excludeEnd:!0,contains:[{begin:/[\w-]+\(/,returnBegin:!0,contains:[{className:"built_in",begin:/[\w-]+/},{begin:/\(/,end:/\)/,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]}]},e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE,{className:"number",begin:"#[0-9A-Fa-f]+"},{className:"meta",begin:"!important"}]}}]};return{name:"CSS",case_insensitive:!0,illegal:/[=\/|'\$]/,contains:[e.C_BLOCK_COMMENT_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/},{className:"selector-class",begin:/\.[A-Za-z0-9_-]+/},{className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},{className:"selector-pseudo",begin:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{begin:"@(page|font-face)",lexemes:"@[a-z-]+",keywords:"@page @font-face"},{begin:"@",end:"[{;]",illegal:/:/,returnBegin:!0,contains:[{className:"keyword",begin:/@\-?\w[\w]*(\-\w+)*/},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:"and or not only",contains:[{begin:/[a-z-]+:/,className:"attribute"},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0},{begin:"{",end:"}",illegal:/\S/,contains:[e.C_BLOCK_COMMENT_MODE,n]}]}}},"8Pgg":function(e,n){e.exports=function(e){const n={},t={begin:/\$\{/,end:/\}/,contains:[{begin:/:-/,contains:[n]}]};Object.assign(n,{className:"variable",variants:[{begin:/\$[\w\d#@][\w\d_]*/},t]});const a={className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},r={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n,a]};a.contains.push(r);const s={begin:/\$\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,n]},i=e.SHEBANG({binary:`(${["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"].join("|")})`,relevance:10}),o={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b-?[a-z\._-]+\b/,keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},contains:[i,e.SHEBANG(),o,s,e.HASH_COMMENT_MODE,r,{className:"",begin:/\\"/},{className:"string",begin:/'/,end:/'/},n]}}},ADmU:function(e,n,t){e.exports={container:"EntryComponent_container__23Rj0",header:"EntryComponent_header__16KhM",sectionContainer:"EntryComponent_sectionContainer__mhIdS",sectionHeader:"EntryComponent_sectionHeader__ZzWRM",empty:"EntryComponent_empty__34RUu"}},DDPb:function(e,n,t){"use strict";t.r(n),t.d(n,"__N_SSG",(function(){return R}));var a=t("q1tI"),r=t.n(a),s=t("ECCn"),i=t.n(s),o=t("t4Is"),l=t("YFqc"),c=t.n(l),u=t("eSNR"),d=t("CwrG"),g=t("ADmU"),h=t.n(g),f=t("L8Z/"),b=t.n(f),m=r.a.createElement,p=function(e){var n=e.category,t=e.notes,a=e.sectionsData;return m(r.a.Fragment,null,m(u.a,null),m("div",{className:h.a.container},m(c.a,{href:"/dev-notes"},m("a",null,"< Back to list")),m("div",{className:h.a.header},m("h1",null,t),m("h2",null,n)),m("div",{className:h.a.sectionContainer},a.map((function(e){return m("div",null,m("div",{className:h.a.sectionHeader},e.sectionName),m("div",{className:b.a.markdown,dangerouslySetInnerHTML:{__html:e.content}}))}))),0===a.length&&m("div",{className:h.a.empty},m("h2",null,"Whoops, nothing here yet!"))),m(d.a,null))},E=t("TdF3"),_=t.n(E),N=t("r0Rl"),v=t.n(N),y=t("8Pgg"),w=t.n(y),x=t("7oys"),O=t.n(x),M=r.a.createElement;i.a.registerLanguage("javascript",_.a),i.a.registerLanguage("typescript",v.a),i.a.registerLanguage("bash",w.a),i.a.registerLanguage("css",O.a);var R=!0;n.default=function(e){var n=e.category,t=e.notes,a=e.sectionsData;return M(r.a.Fragment,null,M(o.a,{title:"".concat(t," - ").concat(n," | Dev Notes")}),M(p,{category:n,notes:t,sectionsData:a}))}},ECCn:function(e,n){function t(e){Object.freeze(e);var n="function"===typeof e;return Object.getOwnPropertyNames(e).forEach((function(a){!Object.hasOwnProperty.call(e,a)||null===e[a]||"object"!==typeof e[a]&&"function"!==typeof e[a]||n&&("caller"===a||"callee"===a||"arguments"===a)||Object.isFrozen(e[a])||t(e[a])})),e}class a{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}ignoreMatch(){this.ignore=!0}}function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function s(e,...n){var t={};for(const a in e)t[a]=e[a];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}function i(e){return e.nodeName.toLowerCase()}var o=Object.freeze({__proto__:null,escapeHTML:r,inherit:s,nodeStream:function(e){var n=[];return function e(t,a){for(var r=t.firstChild;r;r=r.nextSibling)3===r.nodeType?a+=r.nodeValue.length:1===r.nodeType&&(n.push({event:"start",offset:a,node:r}),a=e(r,a),i(r).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:r}));return a}(e,0),n},mergeStreams:function(e,n,t){var a=0,s="",o=[];function l(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function c(e){s+="<"+i(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+r(e.value)+'"'})).join("")+">"}function u(e){s+="</"+i(e)+">"}function d(e){("start"===e.event?c:u)(e.node)}for(;e.length||n.length;){var g=l();if(s+=r(t.substring(a,g[0].offset)),a=g[0].offset,g===e){o.reverse().forEach(u);do{d(g.splice(0,1)[0]),g=l()}while(g===e&&g.length&&g[0].offset===a);o.reverse().forEach(c)}else"start"===g[0].event?o.push(g[0].node):o.pop(),d(g.splice(0,1)[0])}return s+r(t.substr(a))}});const l="</span>",c=e=>!!e.kind;class u{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=r(e)}openNode(e){if(!c(e))return;let n=e.kind;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){c(e)&&(this.buffer+=l)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class d{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"===typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach(n=>this._walk(e,n)),e.closeNode(n)),e}static _collapse(e){"string"!==typeof e&&e.children&&(e.children.every(e=>"string"===typeof e)?e.children=[e.children.join("")]:e.children.forEach(e=>{d._collapse(e)}))}}class g extends d{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new u(this,this.options).value()}finalize(){return!0}}function h(e){return e?"string"===typeof e?e:e.source:null}const f="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",b={begin:"\\\\[\\s\\S]",relevance:0},m={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[b]},p={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[b]},E={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},_=function(e,n,t={}){var a=s({className:"comment",begin:e,end:n,contains:[]},t);return a.contains.push(E),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),a},N=_("//","$"),v=_("/\\*","\\*/"),y=_("#","$"),w={className:"number",begin:"\\b\\d+(\\.\\d+)?",relevance:0},x={className:"number",begin:f,relevance:0},O={className:"number",begin:"\\b(0b[01]+)",relevance:0},M={className:"number",begin:"\\b\\d+(\\.\\d+)?(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},R={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[b,{begin:/\[/,end:/\]/,relevance:0,contains:[b]}]}]},S={className:"title",begin:"[a-zA-Z]\\w*",relevance:0},A={className:"title",begin:"[a-zA-Z_]\\w*",relevance:0},T={begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0};var k=Object.freeze({__proto__:null,IDENT_RE:"[a-zA-Z]\\w*",UNDERSCORE_IDENT_RE:"[a-zA-Z_]\\w*",NUMBER_RE:"\\b\\d+(\\.\\d+)?",C_NUMBER_RE:f,BINARY_NUMBER_RE:"\\b(0b[01]+)",RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map(e=>h(e)).join("")}(n,/.*\b/,e.binary,/\b.*/)),s({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:b,APOS_STRING_MODE:m,QUOTE_STRING_MODE:p,PHRASAL_WORDS_MODE:E,COMMENT:_,C_LINE_COMMENT_MODE:N,C_BLOCK_COMMENT_MODE:v,HASH_COMMENT_MODE:y,NUMBER_MODE:w,C_NUMBER_MODE:x,BINARY_NUMBER_MODE:O,CSS_NUMBER_MODE:M,REGEXP_MODE:R,TITLE_MODE:S,UNDERSCORE_TITLE_MODE:A,METHOD_GUARD:T,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}}),C="of and for in not or if then".split(" ");function I(e){function n(n,t){return new RegExp(h(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map(e=>e[1]);this.matcherRe=n(function(e,n="|"){for(var t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,a=0,r="",s=0;s<e.length;s++){var i=a+=1,o=h(e[s]);for(s>0&&(r+=n),r+="(";o.length>0;){var l=t.exec(o);if(null==l){r+=o;break}r+=o.substring(0,l.index),o=o.substring(l.index+l[0].length),"\\"===l[0][0]&&l[1]?r+="\\"+String(Number(l[1])+i):(r+=l[0],"("===l[0]&&a++)}r+=")"}return r}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex((e,n)=>n>0&&void 0!==e),a=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,a)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach(([e,t])=>n.addRule(e,t)),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}function r(e,n){const t=e.input[e.index-1],a=e.input[e.index+e[0].length];"."!==t&&"."!==a||n.ignoreMatch()}if(e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return function t(i,o){const l=i;if(i.compiled)return l;i.compiled=!0,i.__beforeBegin=null,i.keywords=i.keywords||i.beginKeywords;let c=null;if("object"===typeof i.keywords&&(c=i.keywords.$pattern,delete i.keywords.$pattern),i.keywords&&(i.keywords=function(e,n){var t={};"string"===typeof e?a("keyword",e):Object.keys(e).forEach((function(n){a(n,e[n])}));return t;function a(e,a){n&&(a=a.toLowerCase()),a.split(" ").forEach((function(n){var a=n.split("|");t[a[0]]=[e,D(a[0],a[1])]}))}}(i.keywords,e.case_insensitive)),i.lexemes&&c)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return l.keywordPatternRe=n(i.lexemes||c||/\w+/,!0),o&&(i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")(?=\\b|\\s)",i.__beforeBegin=r),i.begin||(i.begin=/\B|\b/),l.beginRe=n(i.begin),i.endSameAsBegin&&(i.end=i.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),i.end&&(l.endRe=n(i.end)),l.terminator_end=h(i.end)||"",i.endsWithParent&&o.terminator_end&&(l.terminator_end+=(i.end?"|":"")+o.terminator_end)),i.illegal&&(l.illegalRe=n(i.illegal)),void 0===i.relevance&&(i.relevance=1),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map((function(e){return function(e){e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){return s(e,{variants:null},n)})));if(e.cached_variants)return e.cached_variants;if(function e(n){return!!n&&(n.endsWithParent||e(n.starts))}(e))return s(e,{starts:e.starts?s(e.starts):null});if(Object.isFrozen(e))return s(e);return e}("self"===e?i:e)}))),i.contains.forEach((function(e){t(e,l)})),i.starts&&t(i.starts,o),l.matcher=function(e){const n=new a;return e.contains.forEach(e=>n.addRule(e.begin,{rule:e,type:"begin"})),e.terminator_end&&n.addRule(e.terminator_end,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(l),l}(e)}function D(e,n){return n?Number(n):function(e){return C.includes(e.toLowerCase())}(e)?0:1}const L={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!hljs.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,r(this.code);let e;return this.autoDetect?(e=hljs.highlightAuto(this.code),this.detectedLanguage=e.language):(e=hljs.highlight(this.language,this.code,this.ignoreIllegals),this.detectectLanguage=this.language),e.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}},B={install(e){e.component("highlightjs",L)}},P=r,j=s,{nodeStream:U,mergeStreams:H}=o,z=Symbol("nomatch");var K=function(e){var n=[],r=Object.create(null),s=Object.create(null),i=[],o=!0,l=/(^(<[^>]+>|\t|)+|\n)/gm,c="Could not find the language '{}', did you forget to load/include a language module?";const u={disableAutodetect:!0,name:"Plain text",contains:[]};var d={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:g};function h(e){return d.noHighlightRe.test(e)}function f(e,n,t,a){var r={code:n,language:e};w("before:highlight",r);var s=r.result?r.result:b(r.language,r.code,t,a);return s.code=r.code,w("after:highlight",s),s}function b(e,n,t,s){var i=n;function l(e,n){var t=v.case_insensitive?n[0].toLowerCase():n[0];return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}function u(){null!=x.subLanguage?function(){if(""!==R){var e=null;if("string"===typeof x.subLanguage){if(!r[x.subLanguage])return void M.addText(R);e=b(x.subLanguage,R,!0,O[x.subLanguage]),O[x.subLanguage]=e.top}else e=m(R,x.subLanguage.length?x.subLanguage:null);x.relevance>0&&(S+=e.relevance),M.addSublanguage(e.emitter,e.language)}}():function(){if(!x.keywords)return void M.addText(R);let e=0;x.keywordPatternRe.lastIndex=0;let n=x.keywordPatternRe.exec(R),t="";for(;n;){t+=R.substring(e,n.index);const a=l(x,n);if(a){const[e,r]=a;M.addText(t),t="",S+=r,M.addKeyword(n[0],e)}else t+=n[0];e=x.keywordPatternRe.lastIndex,n=x.keywordPatternRe.exec(R)}t+=R.substr(e),M.addText(t)}(),R=""}function g(e){return e.className&&M.openNode(e.className),x=Object.create(e,{parent:{value:x}})}function h(e){return 0===x.matcher.regexIndex?(R+=e[0],1):(k=!0,0)}function f(e){var n=e[0],t=e.rule;const r=new a(t),s=[t.__beforeBegin,t["on:begin"]];for(const a of s)if(a&&(a(e,r),r.ignore))return h(n);return t&&t.endSameAsBegin&&(t.endRe=new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),t.skip?R+=n:(t.excludeBegin&&(R+=n),u(),t.returnBegin||t.excludeBegin||(R=n)),g(t),t.returnBegin?0:n.length}function p(e){var n=e[0],t=i.substr(e.index),r=function e(n,t,r){let s=function(e,n){var t=e&&e.exec(n);return t&&0===t.index}(n.endRe,r);if(s){if(n["on:end"]){const e=new a(n);n["on:end"](t,e),e.ignore&&(s=!1)}if(s){for(;n.endsParent&&n.parent;)n=n.parent;return n}}if(n.endsWithParent)return e(n.parent,t,r)}(x,e,t);if(!r)return z;var s=x;s.skip?R+=n:(s.returnEnd||s.excludeEnd||(R+=n),u(),s.excludeEnd&&(R=n));do{x.className&&M.closeNode(),x.skip||x.subLanguage||(S+=x.relevance),x=x.parent}while(x!==r.parent);return r.starts&&(r.endSameAsBegin&&(r.starts.endRe=r.endRe),g(r.starts)),s.returnEnd?0:n.length}var E={};function _(n,a){var r=a&&a[0];if(R+=n,null==r)return u(),0;if("begin"===E.type&&"end"===a.type&&E.index===a.index&&""===r){if(R+=i.slice(a.index,a.index+1),!o){const n=new Error("0 width match regex");throw n.languageName=e,n.badRule=E.rule,n}return 1}if(E=a,"begin"===a.type)return f(a);if("illegal"===a.type&&!t){const e=new Error('Illegal lexeme "'+r+'" for mode "'+(x.className||"<unnamed>")+'"');throw e.mode=x,e}if("end"===a.type){var s=p(a);if(s!==z)return s}if("illegal"===a.type&&""===r)return 1;if(T>1e5&&T>3*a.index){throw new Error("potential infinite loop, way more iterations than matches")}return R+=r,r.length}var v=N(e);if(!v)throw console.error(c.replace("{}",e)),new Error('Unknown language: "'+e+'"');var y=I(v),w="",x=s||y,O={},M=new d.__emitter(d);!function(){for(var e=[],n=x;n!==v;n=n.parent)n.className&&e.unshift(n.className);e.forEach(e=>M.openNode(e))}();var R="",S=0,A=0,T=0,k=!1;try{for(x.matcher.considerAll();;){T++,k?k=!1:x.matcher.considerAll(),x.matcher.lastIndex=A;const e=x.matcher.exec(i);if(!e)break;const n=_(i.substring(A,e.index),e);A=e.index+n}return _(i.substr(A)),M.closeAllNodes(),M.finalize(),w=M.toHTML(),{relevance:S,value:w,language:e,illegal:!1,emitter:M,top:x}}catch(C){if(C.message&&C.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:C.message,context:i.slice(A-100,A+100),mode:C.mode},sofar:w,relevance:0,value:P(i),emitter:M};if(o)return{illegal:!1,relevance:0,value:P(i),emitter:M,language:e,top:x,errorRaised:C};throw C}}function m(e,n){n=n||d.languages||Object.keys(r);var t=function(e){const n={relevance:0,emitter:new d.__emitter(d),value:P(e),illegal:!1,top:u};return n.emitter.addText(e),n}(e),a=t;return n.filter(N).filter(y).forEach((function(n){var r=b(n,e,!1);r.language=n,r.relevance>a.relevance&&(a=r),r.relevance>t.relevance&&(a=t,t=r)})),a.language&&(t.second_best=a),t}function p(e){return d.tabReplace||d.useBR?e.replace(l,e=>"\n"===e?d.useBR?"<br>":e:d.tabReplace?e.replace(/\t/g,d.tabReplace):e):e}function E(e){let n=null;const t=function(e){var n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=d.languageDetectRe.exec(n);if(t){var a=N(t[1]);return a||(console.warn(c.replace("{}",t[1])),console.warn("Falling back to no-highlight mode for this block.",e)),a?t[1]:"no-highlight"}return n.split(/\s+/).find(e=>h(e)||N(e))}(e);if(h(t))return;w("before:highlightBlock",{block:e,language:t}),d.useBR?(n=document.createElement("div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n")):n=e;const a=n.textContent,r=t?f(t,a,!0):m(a),i=U(n);if(i.length){const e=document.createElement("div");e.innerHTML=r.value,r.value=H(i,U(e),a)}r.value=p(r.value),w("after:highlightBlock",{block:e,result:r}),e.innerHTML=r.value,e.className=function(e,n,t){var a=n?s[n]:t,r=[e.trim()];return e.match(/\bhljs\b/)||r.push("hljs"),e.includes(a)||r.push(a),r.join(" ").trim()}(e.className,t,r.language),e.result={language:r.language,re:r.relevance,relavance:r.relevance},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.relevance,relavance:r.second_best.relevance})}const _=()=>{if(!_.called){_.called=!0;var e=document.querySelectorAll("pre code");n.forEach.call(e,E)}};function N(e){return e=(e||"").toLowerCase(),r[e]||r[s[e]]}function v(e,{languageName:n}){"string"===typeof e&&(e=[e]),e.forEach(e=>{s[e]=n})}function y(e){var n=N(e);return n&&!n.disableAutodetect}function w(e,n){var t=e;i.forEach((function(e){e[t]&&e[t](n)}))}Object.assign(e,{highlight:f,highlightAuto:m,fixMarkup:function(e){return console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"),p(e)},highlightBlock:E,configure:function(e){d=j(d,e)},initHighlighting:_,initHighlightingOnLoad:function(){window.addEventListener("DOMContentLoaded",_,!1)},registerLanguage:function(n,t){var a=null;try{a=t(e)}catch(s){if(console.error("Language definition for '{}' could not be registered.".replace("{}",n)),!o)throw s;console.error(s),a=u}a.name||(a.name=n),r[n]=a,a.rawDefinition=t.bind(null,e),a.aliases&&v(a.aliases,{languageName:n})},listLanguages:function(){return Object.keys(r)},getLanguage:N,registerAliases:v,requireLanguage:function(e){var n=N(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:y,inherit:j,addPlugin:function(e){i.push(e)},vuePlugin:B}),e.debugMode=function(){o=!1},e.safeMode=function(){o=!0},e.versionString="10.2.1";for(const a in k)"object"===typeof k[a]&&t(k[a]);return Object.assign(e,k),e}({});e.exports=K},"L8Z/":function(e,n,t){e.exports={markdown:"markdown_markdown__2Vuuh"}},TdF3:function(e,n){const t="[A-Za-z$_][0-9A-Za-z$_]*",a=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],r=["true","false","null","undefined","NaN","Infinity"],s=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);function i(e){return o("(?=",e,")")}function o(...e){return e.map(e=>(function(e){return e?"string"===typeof e?e:e.source:null})(e)).join("")}e.exports=function(e){var n=t,l="<>",c="</>",u={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/},d={$pattern:t,keyword:a.join(" "),literal:r.join(" "),built_in:s.join(" ")},g={className:"number",variants:[{begin:"\\b(0[bB][01]+)n?"},{begin:"\\b(0[oO][0-7]+)n?"},{begin:e.C_NUMBER_RE+"n?"}],relevance:0},h={className:"subst",begin:"\\$\\{",end:"\\}",keywords:d,contains:[]},f={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"xml"}},b={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"css"}},m={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,h]};h.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,f,b,m,g,e.REGEXP_MODE];var p=h.contains.concat([{begin:/\(/,end:/\)/,contains:["self"].concat(h.contains,[e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE])},e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]),E={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:p};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:d,contains:[e.SHEBANG({binary:"node",relevance:5}),{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,f,b,m,e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,g,{begin:o(/[{,\n]\s*/,i(o(/(((\/\/.*$)|(\/\*(.|\n)*\*\/))\s*)*/,n+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:n+i("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\([^(]*(\\([^(]*(\\([^(]*\\))?\\))?\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:d,contains:p}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:l,end:c},{begin:u.begin,end:u.end}],subLanguage:"xml",contains:[{begin:u.begin,end:u.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),E],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor",end:/\{/,excludeEnd:!0},{begin:"(get|set)\\s+(?="+n+"\\()",end:/{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:n}),{begin:/\(\)/},E]}],illegal:/#(?!!)/}}},eSNR:function(e,n,t){"use strict";var a=t("q1tI"),r=t.n(a),s=t("YFqc"),i=t.n(s),o=t("f7Kf"),l=t.n(o),c=r.a.createElement,u=function(e){return c("svg",e,c("defs",null,c("path",{d:"M613.23 0C628.01 0 640 11.99 640 26.77v586.75c0 14.79-11.99 26.78-26.77 26.78H26.77C11.99 640.3 0 628.31 0 613.52V26.77C0 11.99 11.99 0 26.77 0h586.46z",id:"a"}),c("path",{d:"M93.84 552.22l15.55-233.81-11.6-182.26 52.57 79.34-16.13 227.1 11.29 109.63H93.84z",id:"b"}),c("path",{d:"M98.1 113.9l39.41-28.58 106.35 180.79 67.37 166.31-44.09-7.17-86.48-197.04L98.1 113.9z",id:"c"}),c("path",{d:"M314.52 477.17l34.12-7.81 37.15-77.98 101.96-159.87 52.92-93.74-26.89-33.57-95.79 176.45-49.61 76.69-48.82 88.3-48.79-7.73 43.75 39.26z",id:"d"}),c("path",{d:"M532.07 272.26v222.85l18 48.86h-52.72l9.68-157.91-9.68-136.52 47.63-90.01-12.91 112.73z",id:"e"})),c("use",{xlinkHref:"#a",fill:"#e60916"}),c("use",{xlinkHref:"#b",fill:"#fff"}),c("use",{xlinkHref:"#b",fillOpacity:"0",stroke:"#000",strokeWidth:"0"}),c("use",{xlinkHref:"#c",fill:"#fff"}),c("use",{xlinkHref:"#c",fillOpacity:"0",stroke:"#000",strokeWidth:"0"}),c("g",null,c("use",{xlinkHref:"#d",fill:"#fff"}),c("use",{xlinkHref:"#d",fillOpacity:"0",stroke:"#000",strokeWidth:"0"})),c("g",null,c("use",{xlinkHref:"#e",fill:"#fff"}),c("use",{xlinkHref:"#e",fillOpacity:"0",stroke:"#000",strokeWidth:"0"})))};u.defaultProps={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 640 640",width:"640",height:"640"},n.a=function(){return c("div",{className:l.a.container},c(i.a,{href:"/"},c("a",null,c(u,null))))}},f7Kf:function(e,n,t){e.exports={container:"StandardHeader_container__1pfxZ"}},r0Rl:function(e,n){const t="[A-Za-z$_][0-9A-Za-z$_]*",a=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],r=["true","false","null","undefined","NaN","Infinity"],s=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);e.exports=function(e){var n=t,i={$pattern:t,keyword:a.concat(["type","namespace","typedef","interface","public","private","protected","implements","declare","abstract","readonly"]).join(" "),literal:r.join(" "),built_in:s.concat(["any","void","number","boolean","string","object","never","enum"]).join(" ")},o={className:"meta",begin:"@"+n},l={className:"number",variants:[{begin:"\\b(0[bB][01]+)n?"},{begin:"\\b(0[oO][0-7]+)n?"},{begin:e.C_NUMBER_RE+"n?"}],relevance:0},c={className:"subst",begin:"\\$\\{",end:"\\}",keywords:i,contains:[]},u={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,c],subLanguage:"xml"}},d={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,c],subLanguage:"css"}},g={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,c]};c.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,u,d,g,l,e.REGEXP_MODE];var h={begin:"\\(",end:/\)/,keywords:i,contains:["self",e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.NUMBER_MODE]},f={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,o,h]};return{name:"TypeScript",aliases:["ts"],keywords:i,contains:[e.SHEBANG(),{className:"meta",begin:/^\s*['"]use strict['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,u,d,g,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,l,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\([^(]*(\\([^(]*(\\([^(]*\\))?\\))?\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:h.contains}]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[\{;]/,excludeEnd:!0,keywords:i,contains:["self",e.inherit(e.TITLE_MODE,{begin:n}),f],illegal:/%/,relevance:0},{beginKeywords:"constructor",end:/[\{;]/,excludeEnd:!0,contains:["self",f]},{begin:/module\./,keywords:{built_in:"module"},relevance:0},{beginKeywords:"module",end:/\{/,excludeEnd:!0},{beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:"interface extends"},{begin:/\$[(.]/},{begin:"\\."+e.IDENT_RE,relevance:0},o,h]}}},unfT:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dev-notes/[category]/[notes]",function(){return t("DDPb")}])}},[["unfT",1,0,2,3]]]);