var g4=Object.defineProperty,C4=Object.defineProperties;var f4=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var B4=Object.prototype.hasOwnProperty,b4=Object.prototype.propertyIsEnumerable;var u4=(u,e,t)=>e in u?g4(u,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[e]=t,v=(u,e)=>{for(var t in e||(e={}))B4.call(e,t)&&u4(u,t,e[t]);if(Q)for(var t of Q(e))b4.call(e,t)&&u4(u,t,e[t]);return u},T=(u,e)=>C4(u,f4(e));import{R as e4,j as K,r as l,o as x4,h as F4,J as k4,p as A4,B as w4,a as y4,b as v4,c as S4}from "./vendor.b090e38c.js";const z4=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}};z4();const G=e4.createContext({visibility:!1,setVisibility: u=>{}}),i=K.exports.jsx,_=K.exports.jsxs,H=K.exports.Fragment,I4=()=>{const{visibility:u,setVisibility:e}=l.exports.useContext(G);return _("div",{children:[i("label",{htmlFor:"visibility",children:"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438"}),i("input",{id:"visibility",type:"checkbox",checked:u,onChange: t=>{e(t.target.checked)}})]})};let L;async function O4(){L=await x4("my-db",1,{upgrade(u){u.createObjectStore("images")}})}var W;(function(u){u.images="images"})(W||(W={}));var $;(function(u){u.first="first",u.second="second"})($||($={}));const N4=(u, e)=>{const[t,o]=l.exports.useState(),[s,a]=l.exports.useState();return l.exports.useEffect(()=>{async function n(){if(!u)return;const r=Object.keys(u.files).filter(m=>u.files[m].dir?!1:m.includes(e)),[d,...c]=await Promise.all([u.files["index.html"].async("text"),...r.map(m=>u.files[m].async("text"))]);o(d),a(c.join(""))}n()},[o,a,u]),{html:t,css:s}},N=(u, e, t)=>`${u}-${e}-${t}`;var g;(function(u){u[u.min=1100]="min",u[u.max=1600]="max"})(g||(g={}));const R4=(u, e, t)=>{const[o,s]=l.exports.useState(!0),[a,n]=l.exports.useState(!1);return l.exports.useEffect(()=>{async function r(){const d=await L.getAllKeys(W.images);n(e.every(c=>d.includes(N(u,c,g.min))&&d.includes(N(u,c,g.max)))),s(!1)}r()},[t,e,u]),{contains:a,loading:o}},Y=l.exports.memo(l.exports.forwardRef(({html:u,onLoad:e,width:t}, o)=>i("iframe",{ref:o,style:{width:`${t}px`,minHeight:"100vh",border:"none"},id:"myiframe",srcDoc:u,onLoad:e}))),M=(u=100)=>new Promise((e, t)=>{setTimeout(()=>{e()},u)});async function P(u, e, t){return u?await Promise.all(t.map(async o=>{const s=u.querySelector(`.${o}`),a=await F4(s,{useCORS:!0,scale:1});return{className:o,image:a,targetWidth:e}})):[]}const T4=({html:u,classList:e,title:t,workKey:o,onComplete:s})=>{const a=l.exports.useRef(null),[n,r]=l.exports.useState(g.min),[d,c]=l.exports.useState(!1);return _("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",maxWidth:"300px"},children:[i("h1",{children:t}),i("button",{onClick:async()=>{var b,E,p,A;c(!0),r(g.min),await M();const f=await P((E=(b=a.current)==null?void 0:b.contentWindow)==null?void 0:E.document,g.min,e);r(g.max),await M();const B=await P((A=(p=a.current)==null?void 0:p.contentWindow)==null?void 0:A.document,g.max,e);await Promise.all([...f,...B].map(({className:x,image:F,targetWidth:y})=>{L.put("images",F.toDataURL("image/png"),N(o,x,y))})),c(!1),s()},children:"Get images"}),d&&i("div",{children:"\u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435 \u{1F570}"}),d&&i(Y,{ref:a,html:u,width:n})]})},L4=({onWorkLoad:u})=>i("div",{children:i("input",{type:"file",name:"file",onChange:async t=>{const o=await k4.loadAsync(t.target.files[0],{createFolders:!0}),s=Object.keys(o.files);if(o.files[s[0]].dir){const a=o.files[s[0]].name;o.files=s.slice(1).reduce((n, r)=>(n[r.replace(a,"")]=o.files[r],n),{})}u(o)}})}),W4=`
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

 html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`,V=(u="",e="",t="")=>{const o=new DOMParser().parseFromString(u,"text/html"),s=o.createElement("style");return s.innerHTML=`${W4} ${e} ${t}`,o.head.appendChild(s),Array.from(o.head.querySelectorAll("link")).forEach(n=>n.remove()),o.documentElement.outerHTML.replaceAll(/\.{0,2}\/?images/g,"/work-parser-vite/images")},M4=()=>"\u2705",j4=()=>"\u274C",Z=u=>u?M4():j4(),w=({title:u,children:e,valid:t,size:o=2,initialCollapsed:s=!0})=>{const{visibility:a}=l.exports.useContext(G),n=`h${o}`,[r,d]=l.exports.useState(s),c=t===void 0?null:Z(t);return _("section",{style:{opacity:t?.5:1,display:!a&&t?"none":"block"},children:[_(n,{onClick:()=>{d(m=>!m)},style:{cursor:e?"pointer":"default"},children:[u," ",c]}),!r&&i("div",{children:e})]})},q4=Object.keys,t4=u=>{const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(u);if(!e)return"";const{r:t,g:o,b:s}={r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)};return`rgb(${t}, ${o}, ${s})`};let o4=0;const S=(u="id")=>(o4++,`${u}${o4}`),U=`
* {
    animation: none !important;
    transform: none !important;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

.video__iframe {
  background-color: black;
}

*::-webkit-scrollbar {
  display: none;
}

`,H4=g.max,$4=({html:u,css:e,conditions:t})=>{const[o,s]=l.exports.useState([]),[a,n]=l.exports.useState(!1),r=l.exports.useRef(null);l.exports.useEffect(()=>{async function c(){if(await M(1e3),!u||!e||!r.current||a)return;const m=t.map(B=>{var I;const{selector:b,css:E={},count:p}=B,A=(I=r.current)==null?void 0:I.contentWindow,x=A.document.querySelector(b);if(!x)return T(v({},B),{errors:[i("div",{children:"\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"},S())]});const F=[];if(p){const k=A.document.querySelectorAll(b);k.length!==p&&F.push(_("div",{children:["\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 (",k.length,") \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443 (",p,")"]},S()))}const y=A.getComputedStyle(x);return q4(E).forEach((k,J)=>{const D=y[k],h=E[k];switch(k){case"top":case"bottom":case"left":case"right":f(D,h)||F.push(_("div",{children:["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 ",i("b",{children:k})," \u0440\u0430\u0432\u043D\u043E\u0435"," ",i("u",{children:D})," \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443 ",i("u",{children:h})]},S()));break;case"lineHeight":const R=h.includes("px")?h:`${parseInt(String(E.fontSize),10)*parseFloat(h)}px`;f(D,R)||F.push(_("div",{children:["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 ",i("b",{children:k})," \u0440\u0430\u0432\u043D\u043E\u0435"," ",i("u",{children:D})," \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443 ",i("u",{children:h})]},S()));break;case"width":if(h.includes("%")){const O=parseInt(h,10)*H4/100;f(O,D)||F.push(_("div",{children:["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 ",i("b",{children:k})," ","\u0440\u0430\u0432\u043D\u043E\u0435 ",i("u",{children:D})," \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443"," ",i("u",{children:h})," \u0432 \u043F\u0435\u0440\u0435\u0441\u0447\u0451\u0442\u0435 \u0438\u0437 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043E\u0432 ($",O,")"]},S()));return}f(D,h)||F.push(_("div",{children:["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 ",i("b",{children:k})," \u0440\u0430\u0432\u043D\u043E\u0435"," ",i("u",{children:D})," \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443 ",i("u",{children:h})]},S()));return;case"color":case"backgroundColor":t4(h)!==D&&F.push(_("div",{children:["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 ",i("b",{children:k})," \u0440\u0430\u0432\u043D\u043E\u0435"," ",i("u",{children:D})," \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443 ",i("u",{children:h})," (",t4(h),")"]},S()));return;default:D!==h&&F.push(_("div",{children:["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 ",i("b",{children:k})," \u0440\u0430\u0432\u043D\u043E\u0435"," ",i("u",{children:D})," \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443 ",i("u",{children:h})]},S()))}}),T(v({},B),{errors:F})});s(m),n(!0);function f(B,b){return parseInt(String(B),10)===parseInt(String(b),10)}}c()},[u,e,t,r.current,a]);const d=o.filter(({errors:c})=>!!c.length);return!u||!e?null:_(H,{children:[i(w,{title:"\u0411\u0440\u0438\u0444",valid:!d.length,children:o.map(({errors:c,selector:m,css:f},B)=>_(w,{title:m,valid:!c.length,size:4,initialCollapsed:!1,children:[c,f&&i(w,{title:"\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 css",size:5,valid:!c.length,children:Object.entries(f).map(([b,E],p)=>_("div",{children:[i("b",{children:b}),": ",i("u",{children:E})]},`${m}-${b}-${p}`))})]},m))}),!a&&i(Y,{width:g.max,html:V(u,e,U),ref:r})]})},P4=({html:u})=>{const[e,t]=l.exports.useState([]);return l.exports.useEffect(()=>{async function o(){if(!u)return;const s=new FormData;s.append("out","json"),s.append("content",u);const n=await(await fetch("https://html5.validator.nu/",{method:"POST",body:s})).json();t(n.messages)}o()},[u]),i(w,{title:"\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0442\u043E\u0440\u043E\u043C W3C",valid:!e.length,children:e.map(({message:o,extract:s,lastLine:a})=>_("div",{children:["line ",a,": ",i("b",{children:s}),", ",o]},o))})};var C;(function(u){u.NO_PARENT_BLOCK="NO_PARENT_BLOCK",u.RECURSIVE_ELEMENT="RECURSIVE_ELEMENT",u.ONLY_MODIFIER="ONLY_MODIFIER",u.RECURSIVE_BLOCK="RECURSIVE_BLOCK",u.ELEMENT_OF_ELEMENT="ELEMENT_OF_ELEMENT"})(C||(C={}));const V4={ru:{[C.ELEMENT_OF_ELEMENT]:"\u041D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",[C.RECURSIVE_BLOCK]:"\u0411\u043B\u043E\u043A \u0432\u043B\u043E\u0436\u0435\u043D \u0432 \u0431\u043B\u043E\u043A \u0441 \u0442\u0430\u043A\u0438\u043C \u0436\u0435 \u0438\u043C\u0435\u043D\u0435\u043C",[C.RECURSIVE_ELEMENT]:"\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432\u043B\u043E\u0436\u0435\u043D \u0432 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0441 \u0442\u0430\u043A\u0438\u043C \u0436\u0435 \u0438\u043C\u0435\u043D\u0435\u043C",[C.NO_PARENT_BLOCK]:"\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0431\u0435\u0437 \u0431\u043B\u043E\u043A\u0430 \u0432 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F\u0445",[C.ONLY_MODIFIER]:"\u041C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0431\u0435\u0437 \u0431\u043B\u043E\u043A\u0430 \u0438\u043B\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430"},en:{[C.ELEMENT_OF_ELEMENT]:"It could not be element of element",[C.RECURSIVE_BLOCK]:"Block is in block with same name",[C.RECURSIVE_ELEMENT]:"Element is in element with same name",[C.NO_PARENT_BLOCK]:"Element was used without block as parent",[C.ONLY_MODIFIER]:"Modifier was used without block or element"}};function i4(u,e=[]){const t=[],o=[...u.classList],s=[...e,o];return o.forEach(a=>{const{blockName:n,elementName:r,modifierName:d}=K4(a);r&&!e.flat().find(c=>c===n)&&t.push({code:C.NO_PARENT_BLOCK,className:a,parentArray:e}),r&&e.flat().find(c=>c===`${n}__${r}`)&&t.push({code:C.RECURSIVE_ELEMENT,className:a,parentArray:e}),d&&!o.find(c=>r?c===`${n}__${r}`:n===c)&&t.push({code:C.ONLY_MODIFIER,className:a,parentArray:e}),!r&&!d&&e.flat().some(c=>c===n)&&t.push({code:C.RECURSIVE_BLOCK,className:a,parentArray:e}),a.split("__").length>2&&t.push({code:C.ELEMENT_OF_ELEMENT,className:a,parentArray:e})}),u.children&&[...u.children].forEach(a=>{const n=i4(a,s);t.push(...n)}),t}function U4(u){return u.filter(e=>e.length>0).map(e=>Array.isArray(e)?e.join("."):e).join(" > ")}function K4(u){const e=/^([a-z-0-9]*)(__)?([a-z-0-9]*)(_)?([a-z-0-9]*)?(_)?([a-z-0-9])?/i,[,t,,o,,s,,a]=e.exec(u);return{blockName:t,elementName:o,modifierName:s,modifierValue:a}}const G4=({html:u})=>{if(!u)return null;const e=new DOMParser().parseFromString(u,"text/html"),t=i4(e.body);return i(w,{title:"\u0411\u042D\u041C",valid:!t.length,children:t.map(({code:o,className:s,parentArray:a},n)=>_("div",{children:[i("b",{children:V4.ru[o]})," \u042D\u043B\u0435\u043C\u0435\u043D\u0442:"," ",i("u",{children:s})," \u043F\u0443\u0442\u044C \u0434\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430"," ",i("u",{children:U4(a)})]},n))})},Y4=({zip:u,fileList:e})=>{const t=e.every(o=>u.files[o]);return i(w,{title:"\u0424\u0430\u0439\u043B\u044B",valid:t,children:e.map(o=>_("div",{children:[Z(!!u.files[o])," ",o]},o))})},Z4=({html:u,sectionList:e})=>{const[t,o]=l.exports.useState(null);return l.exports.useEffect(()=>{if(!u)return;const n=new DOMParser().parseFromString(u,"text/html").querySelectorAll(`${e.map(r=>`.${r}`).join(",")}`);o(Array.from(n))},[u]),t?i(w,{title:"\u0412\u0441\u0435 \u0441\u0435\u043A\u0446\u0438\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u044B \u0438 \u0432 \u043D\u0443\u0436\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435",valid:(t==null?void 0:t.length)===e.length,children:e.map((s,a)=>_("div",{children:[Z(t==null?void 0:t[a].className.includes(s))," ",s]},s))}):null},J4=({imageData:u,pixelCount:e})=>{const t=l.exports.useRef(null);return l.exports.useEffect(()=>{if(!t.current)return;const o=document.createElement("canvas"),s=o.getContext("2d");o.width=u.width,o.height=u.height,s.putImageData(u,0,0),t.current.src=o.toDataURL("image/png")},[u,t.current]),_("div",{children:[_("div",{children:["\u0420\u0430\u0437\u043D\u0438\u0446\u0430 \u043F\u0438\u043A\u0441\u0435\u043B\u0435\u0439: ",e]}),i("img",{ref:t})]})};async function X4(u){return new Promise((e,t)=>{const o=new Image;o.crossOrigin="anonymous",o.src=u,o.onload=()=>{e(o)},o.onerror=t})}const Q4=({html:u,classNames:e,workKey:t})=>{const o=l.exports.useRef(null),[s,a]=l.exports.useState(!1),[n,r]=l.exports.useState(null),[d,c]=l.exports.useState([]),[m,f]=l.exports.useState(g.min),[B,b]=l.exports.useState([]);return l.exports.useEffect(()=>{async function E(){var x,F,y,I;if(!s)return;f(g.min),await M();const p=await P((F=(x=o.current)==null?void 0:x.contentWindow)==null?void 0:F.document,g.min,e);f(g.max),await M();const A=await P((I=(y=o.current)==null?void 0:y.contentWindow)==null?void 0:I.document,g.max,e);r([...p,...A])}setTimeout(()=>E(),1e3)},[s]),l.exports.useEffect(()=>{async function E(){if(!n)return;const p=await Promise.all(n.map(async({targetWidth:A,className:x,image:F})=>{const y=N(t,x,A),I=await L.get(W.images,y),k=await X4(I),J=F,{width:D,height:h}=k,R=document.createElement("canvas");R.width=D,R.height=h;const O=R.getContext("2d"),X=O.createImageData(D,h);O.drawImage(k,0,0);const p4=O.getImageData(0,0,D,h).data,D4=A4(p4,J.getContext("2d").getImageData(0,0,D,h).data,X.data,D,h,{threshold:.1,includeAA:!0,diffColorAlt:[0,0,255]});return{key:`${A}-${x}`,pixelCount:D4,imageData:X}}));c(p)}E()},[n]),l.exports.useEffect(()=>{var E;!s||b(u0((E=o.current)==null?void 0:E.contentDocument))},[s,b,o.current]),_("div",{children:[!n&&i(Y,{ref:o,html:u,onLoad:()=>a(!0),width:m}),i(w,{title:"\u041D\u0435 \u0441\u043A\u0440\u043E\u043B\u0438\u0442\u044C\u0441\u044F \u043F\u043E \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u0438",valid:!B.length,children:B.length?i("div",{children:B.map((E,p)=>i("div",{children:E},p))}):i("div",{children:"\u0412\u0441\u0451 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0445\u043E\u0440\u043E\u0448\u043E"})}),i(w,{title:"\u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442\u044B",valid:d.reduce((E,{pixelCount:p})=>E+p,0)<3e4,children:d.map(E=>i(w,{title:`${E.key}`,valid:E.pixelCount<E.imageData.height*E.imageData.width*.1,size:4,children:i(J4,v({},E))},E.key))})]})};function u0(u){if(!u)return[];const e=document.documentElement.offsetWidth;return Array.from(u.querySelectorAll("*")).reduce((o,s)=>{const a=s.getBoundingClientRect();return(a.right>e||a.left<0)&&window.getComputedStyle(s).position!=="absolute"&&o.push(s.className),o},[])}const s4=({workKey:u,classList:e,fileList:t,cssFileMask:o,template:s,brief:a,title:n})=>{const[r,d]=l.exports.useState(null),{html:c,css:m}=N4(r,o),[f,B]=l.exports.useState(0),{contains:b,loading:E}=R4(u,e,f),p=async()=>{await Promise.all(e.map(x=>[N(u,x,g.min),N(u,x,g.max)]).flat().map(x=>L.delete(W.images,x))),B(Date.now())};if(!E&&!b)return i(T4,{title:`\u0413\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043E\u043A ${n}`,html:s,classList:e,workKey:u,onComplete:()=>B(Date.now())});const A=r?_(H,{children:[i($4,{html:c,css:m,conditions:a}),i(P4,{html:c}),i(G4,{html:c}),i(Y4,{zip:r,fileList:t}),i(Z4,{html:c,sectionList:e}),i(Q4,{html:V(c,m,U),classNames:e,workKey:u})]}):_(H,{children:[i(L4,{onWorkLoad:d}),i("button",{onClick:p,style:{fontSize:"10px",marginTop:"10px"},children:"\u267B\uFE0F \u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438"})]});return _("section",{children:[_("h1",{children:[n," ",r&&i("span",{style:{cursor:"pointer"},onClick:()=>d(null),children:"\u{1FAA3}"})]}),A]})},e0=["page","header","description","digits","feynman","kaufman","footer"],t0=[".editorconfig","images/","images/facebook_color_white.svg","images/feynman.png","images/header-image.png","images/instagram_color_white.svg","images/kaufman-triangle.svg","images/logo_place_footer.svg","images/logo_place_header.svg","images/vk_color_white.svg","index.html","styles/","styles/normalize.css","styles/style.css","texts.md"];var z;(function(u){u.blue="#2f80ed",u.darkGray="#1f1f1f",u.lightGray="#f2f2f2",u.black="#000000",u.white="#FFFFFF"})(z||(z={}));const j={width:"960px",textAlign:"center",lineHeight:"1.15",fontSize:"60px",fontWeight:"700"},q={width:"960px",textAlign:"center",lineHeight:"34px",fontSize:"24px",fontWeight:"400"},a4={width:"1280px",display:"flex",flexDirection:"row",justifyContent:"space-between"},n4={width:"175px",lineHeight:"1.2",fontSize:"18px",fontWeight:"400",color:z.blue},l4={width:"1024px",minWidth:"784px"},c4={lineHeight:"34px",fontSize:"24px",fontWeight:"400"},r4=[{selector:".header",css:{minHeight:"600px",maxHeight:"756px"}},{selector:".header .logo.logo_place_header",css:{position:"absolute",left:"64px",top:"30px",width:"183px",height:"32px"}},{selector:".header .header__title",css:{marginLeft:"64px",maxWidth:"730px",lineHeight:"96px",fontSize:"102px",fontWeight:"700"}},{selector:".header .header__subtitle",css:{position:"absolute",bottom:"30px",left:"64px",width:"388px",lineHeight:"25px",fontSize:"18px",fontWeight:"400"}},{selector:".header .header__subtitle a.header__link"},{selector:".header .header__main-illustration",css:{position:"absolute",right:"0",bottom:"0",width:"765px",height:"608px"}},{selector:".header .header__square-pic",css:{width:"568px",height:"568px",top:"64px",position:"absolute",right:"0"}}],E4=[{selector:".description .two-columns",css:a4},{selector:".description .two-columns .two-columns__brief",css:n4},{selector:".description .two-columns .two-columns__main-text",css:l4},{selector:".description .two-columns .two-columns__main-text .two-columns__paragraph",count:3,css:v({marginBottom:"30px"},c4)},{selector:".description .two-columns .two-columns__main-text .two-columns__paragraph:nth-of-type(2) .two-columns__span-accent",css:{lineHeight:"34px",fontSize:"24px",fontWeight:"700"}}],_4=[{selector:".digits",css:{marginTop:"100px",marginBottom:"100px"}},{selector:".digits .section-title",css:j},{selector:".digits .section-subtitle",css:q},{selector:".digits  .table",css:{width:"1100px"}},{selector:".digits  .table .table__cell",count:8,css:{width:"250px",marginTop:"60px"}},{selector:".digits  .table .table__cell .table__heading",count:8,css:{lineHeight:"1.15",fontSize:"24px",fontWeight:"700"}},{selector:".digits  .table .table__cell .table__text",count:10,css:{marginTop:"20px",lineHeight:"1.2",fontSize:"18px"}}],h4=[{selector:".feynman",css:{minHeight:"890px"}},{selector:".feynman .feynman__title",css:{width:"648px",lineHeight:"1.15",fontSize:"120px",fontWeight:"700"}},{selector:".feynman .feynman__subtitle",css:{lineHeight:"51px",fontSize:"36px",fontWeight:"400"}},{selector:".feynman .feynman__link",css:{position:"absolute",right:"48px",top:"445px",lineHeight:"51px",fontSize:"36px",fontWeight:"400",color:z.blue}}],d4=[{selector:".kaufman",css:{overflow:"hidden"}},{selector:".kaufman .section-title.section-title_theme_dark",css:T(v({},j),{color:z.white})},{selector:".kaufman .section-subtitle.section-subtitle_theme_dark",css:T(v({},q),{color:z.white})},{selector:".kaufman .table.table_theme_dark",css:{width:"1100px"}},{selector:".kaufman .table.table_theme_dark .table__cell.table__cell_theme_dark",count:10,css:{width:"200px",marginTop:"80px"}},{selector:".kaufman .table.table_theme_dark .table__cell.table__cell_theme_dark .table__heading.table__heading_theme_dark",count:10,css:{lineHeight:"1.15",fontSize:"24px",fontWeight:"700"}},{selector:".kaufman .table.table_theme_dark .table__cell.table__cell_theme_dark .table__text.table__text_theme_dark",count:10,css:{marginTop:"20px",lineHeight:"1.2",fontSize:"18px",color:z.white}},{selector:".kaufman .kaufman__triangle",css:{width:"877px",height:"877px",position:"absolute",right:"-210px"}}],m4=[{selector:".footer",css:{backgroundColor:z.darkGray,minHeight:"350px",paddingTop:"60px",paddingBottom:"40px"}},{selector:".footer .footer__columns",css:{width:"1440px",display:"flex",flexDirection:"row",justifyContent:"space-between"}},{selector:".footer__columns .footer__column.footer__column_content_copyright",css:{flexBasis:"711px"}},{selector:".footer__columns .footer__column.footer__column_content_info"},{selector:".footer__columns .footer__column.footer__column_content_social"},{selector:".footer .footer__author",css:{marginTop:"18px",marginBottom:"18px",lineHeight:"25px",fontSize:"18px",fontWeight:"400"}},{selector:".footer .footer__column.footer__column_content_info .footer__column-heading",css:{lineHeight:"30px",fontSize:"18px",fontWeight:"700"}},{selector:".footer .footer__column.footer__column_content_social .footer__column-heading",css:{lineHeight:"30px",fontSize:"18px",fontWeight:"700"}},{selector:".footer .footer__column.footer__column_content_info .footer__column-links",css:{marginBottom:"16px"}},{selector:".footer .footer__column.footer__column_content_info .footer__column-links .footer__column-link",count:3,css:{lineHeight:"30px",fontSize:"18px",fontWeight:"400"}},{selector:".footer .footer__column.footer__column_content_social .footer__column-links",css:{marginBottom:"16px"}},{selector:".footer .footer__column.footer__column_content_social .footer__column-links .footer__column-link",count:3,css:{lineHeight:"30px",fontSize:"18px",fontWeight:"400"}},{selector:".footer .footer__column.footer__column_content_social .footer__column-links .footer__column-link .footer__social-icon",count:3,css:{width:"16px",height:"16px"}},{selector:".footer .logo.logo_place_footer",css:{width:"183px",height:"35px"}}],o0=[...r4,...E4,..._4,...h4,...d4,...m4],i0=`
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex">
    <title>\u041D\u0430\u0443\u0447\u0438\u0442\u044C\u0441\u044F \u0443\u0447\u0438\u0442\u044C\u0441\u044F</title>
    <link rel="stylesheet" href="./styles/normalize.css">
    <link rel="stylesheet" href="./styles/style.css">
  </head>
  <body>
    <div class="page">
      <header class="header">
        <div class="logo logo_place_header"></div>
        <!--\u041E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E: <a class="logo logo_place_header"></a> -->
        <h1 class="header__title">
          \u041D\u0430\u0443\u0447\u0438\u0442\u044C\u0441\u044F \u0443\u0447\u0438\u0442\u044C\u0441\u044F
        </h1>
        <p class="header__subtitle">
          \u041A\u0430\u043A\u0438\u0435 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0438 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044B \u043A \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044E \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432 \u0441\u0432\u043E\u0435\u0439 \u0436\u0438\u0437\u043D\u0438?
          <a href="#" target="_blank" class="header__link">\u0423\u0437\u043D\u0430\u0442\u044C &rarr;</a>
        </p>
        <img src="./images/header-image.png" alt="\u041A\u0430\u0440\u0442\u0438\u043D\u0430 '\u041E\u043F\u044F\u0442\u044C \u0414\u0432\u043E\u0439\u043A\u0430'" class="header__main-illustration">
        <!--\u041E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E: "\u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435" \u0435\u0441\u043B\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0432\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E \u043A\u0430\u043A div - \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u0440\u043E \u0432\u0430\u0436\u043D\u043E\u0441\u0442\u044C \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u043D\u044B\u0445 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439 \u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0445 \u0430\u043B\u044C\u0442\u043E\u0432. -->
        <div class="header__square-pic"></div>
        <!--\u041E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E: "\u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435" \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u043A \u043F\u0441\u0435\u0432\u0434\u043E\u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0431\u043B\u043E\u043A\u0430 header. \u041F\u043E \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044E \u0432\u0442\u043E\u0440\u043E\u0433\u043E \u0441\u043F\u0440\u0438\u043D\u0442\u0430.-->
      </header>
      <main class="content">
        <section class="description">
          <div class="two-columns">
            <!--\u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435: \u0432\u0437\u044F\u0442\u044C article-->
            <h2 class="two-columns__brief">
              \u0413\u043B\u0430\u0432\u043D\u044B\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0432 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0438
            </h2>
            <!-- \u041D\u0435 \u0441\u043C\u043E\u0442\u0440\u044F \u043D\u0430 \u0440\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430 - \u044D\u0442\u043E \u0432\u0430\u0436\u043D\u044B\u0439 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0443\u0440\u043E\u0432\u043D\u044F h2 -->
            <div class="two-columns__main-text">
              <!--\u042D\u0442\u043E \u043D\u0435 \u0441\u043F\u0438\u0441\u043E\u043A, \u0430 \u043E\u0431\u0435\u0440\u0442\u043A\u0430 \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u043E\u0433\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0433\u043E. \u0417\u0434\u0435\u0441\u044C \u0443\u043C\u0435\u0441\u0442\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C DIV.-->
              <p class="two-columns__paragraph">
                \u041D\u0438 \u0432 \u0448\u043A\u043E\u043B\u0435, \u043D\u0438 \u0432 \u0438\u043D\u0441\u0442\u0438\u0442\u0443\u0442\u0435 \u043D\u0430\u0441 \u043D\u0435 \u0443\u0447\u0430\u0442 \u0442\u043E\u043C\u0443, \u043A\u0430\u043A \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0438\u0437\u0443\u0447\u0430\u0442\u044C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B. \u041C\u044B \u0433\u043E\u0442\u043E\u0432\u0438\u043C\u0441\u044F \u043A \u044D\u043A\u0437\u0430\u043C\u0435\u043D\u0430\u043C \u0438 \u0443\u0447\u0438\u043C \u0431\u0438\u043B\u0435\u0442\u044B. \u041C\u044B \u0442\u0440\u0435\u043D\u0438\u0440\u0443\u0435\u043C\u0441\u044F \u0440\u0435\u0448\u0430\u0442\u044C \u043E\u0434\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438, \u0447\u0442\u043E\u0431\u044B \u043B\u0443\u0447\u0448\u0435 \u0441\u0434\u0430\u0442\u044C \u0442\u0435\u0441\u0442, \u043D\u043E \u0447\u0430\u0441\u0442\u043E \u0432 \u0438\u0442\u043E\u0433\u0435 \u044D\u0442\u043E \u043D\u0435 \u0434\u0430\u0435\u0442 \u043D\u0430\u043C \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0437\u043D\u0430\u043D\u0438\u044F. \u0417\u0443\u0431\u0440\u0435\u0436\u043A\u0430 \u0431\u044B\u0441\u0442\u0440\u043E
                \u0432\u044B\u0432\u0435\u0442\u0440\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0438 \u043D\u0435 \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442 \u043F\u043E\u043B\u044C\u0437\u044B.
              </p>
              <p class="two-columns__paragraph">
                <span class="two-columns__span-accent">\u0412\u044B\u0432\u043E\u0434:</span> \u0443\u0447\u0438\u0442\u044C\u0441\u044F \u0442\u043E\u0436\u0435 \u043D\u0443\u0436\u043D\u043E \u0443\u043C\u0435\u0442\u044C, \u043D\u043E \u043F\u043E\u0447\u0435\u043C\u0443-\u0442\u043E \u044D\u0442\u043E\u043C\u0443 \u043C\u0430\u043B\u043E \u0433\u0434\u0435 \u0443\u0447\u0430\u0442. \u0427\u0442\u043E \u0441 \u044D\u0442\u0438\u043C \u0434\u0435\u043B\u0430\u0442\u044C?
                <!--<b> <strong> \u0437\u0434\u0435\u0441\u044C \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F. <b> \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0442\u0435\u0433, <strong> \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043D\u0435\u0443\u043C\u0435\u0441\u0442\u0435\u043D. -->
              </p>
              <p class="two-columns__paragraph">
                \u041A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u0438\u043A\u0438 \u0438 \u0443\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u044F \u043F\u043E\u043C\u043E\u0433\u0430\u044E\u0442 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0434\u0445\u043E\u0434 \u043A \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044E, \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0435\u0433\u043E \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u043C \u0438 \u0437\u0430\u0445\u0432\u0430\u0442\u044B\u0432\u0430\u044E\u0449\u0438\u043C. \u042D\u0442\u0438 \u0436\u0435 \u0442\u0435\u0445\u043D\u0438\u043A\u0438 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F \u043D\u0430 \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u0432 \u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0443\u043C\u0435.
              </p>
            </div>
          </div>
        </section>

        <section class="digits">
          <h2 class="section-title">
            \u0426\u0438\u0444\u0440\u044B \u0438 \u0444\u0430\u043A\u0442\u044B
          </h2>
          <p class="section-subtitle">
            \u041F\u0440\u043E \u0443\u0447\u0435\u0431\u0443 \u0438 \u043C\u043E\u0437\u0433
          </p>
          <!--\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0434\u043B\u044F section-subtitle-->
          <ul class="table">
            <!--\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F table \u0447\u0435\u0440\u0435\u0437 div \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u0430, \u043D\u043E \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0441\u043E\u0432\u0435\u0442\u043E\u0432\u0430\u0442\u044C ul-->
            <li class="table__cell">
              <!--\u0427\u0442\u043E\u0431\u044B \u043E\u0442\u0441\u0442\u0443\u043F\u044B \u043D\u0435 \u0441\u0442\u0430\u043A\u0430\u043B\u0438\u0442\u044C - \u0432 table__cell \u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0444\u043B\u0435\u043A\u0441. -->
              <h3 class="table__heading">
                86 \u043C\u0438\u043B\u043B\u0438\u0430\u0440\u0434\u043E\u0432
              </h3>
              <p class="table__text">
                \u0427\u0438\u0441\u043B\u043E \u043D\u0435\u0439\u0440\u043E\u043D\u043E\u0432 \u0432 \u043C\u043E\u0437\u0433\u0435 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430
              </p>
              <!--\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A.-->
            </li>
            <li class="table__cell">
              <h3 class="table__heading">
                2.1 \u043C\u0438\u043B\u043B\u0438\u0430\u0440\u0434\u0430
              </h3>
              <p class="table__text">
                \u0427\u0438\u0441\u043B\u043E \u043D\u0443\u0436\u0434\u0430\u044E\u0449\u0438\u0445\u0441\u044F \u0432 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0438 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438
              </p>
              <p class="table__text">
                \u0412\u0441\u0435\u043C\u0438\u0440\u043D\u044B\u0439 \u0411\u0430\u043D\u043A, 2017
              </p>
            </li>
            <li class="table__cell">
              <h3 class="table__heading">
                1000 \u0442\u0435\u0440\u0430\u0431\u0430\u0439\u0442
              </h3>
              <p class="table__text">
                \u041E\u0431\u044A\u0451\u043C \u043F\u0430\u043C\u044F\u0442\u0438 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430
              </p>
            </li>
            <li class="table__cell">
              <h3 class="table__heading">
                500 \u0442\u0440\u0438\u043B\u043B\u0438\u043E\u043D\u043E\u0432
              </h3>
              <p class="table__text">
                \u0427\u0438\u0441\u043B\u043E \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0437\u0430 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u043D\u0435\u0440\u0432\u043D\u044B\u0445 \u0441\u0438\u043D\u0430\u043F\u0441\u043E\u0432 \u0443 \u0432\u0437\u0440\u043E\u0441\u043B\u043E\u0433\u043E \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430
              </p>
            </li>
            <li class="table__cell">
              <h3 class="table__heading">
                420 \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u043E\u0432
              </h3>
              <p class="table__text">
                \u0427\u0438\u0441\u043B\u043E \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0445 \u043B\u044E\u0434\u0435\u0439 \u043C\u043E\u043B\u043E\u0436\u0435 25 \u043B\u0435\u0442, \u043D\u0435 \u0438\u043C\u0435\u044E\u0449\u0438\u0445 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u043B\u044F \u0442\u0440\u0443\u0434\u043E\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430
              </p>
              <p class="table__text">
                \u0412\u0441\u0435\u043C\u0438\u0440\u043D\u044B\u0439 \u0411\u0430\u043D\u043A, 2017
              </p>
            </li>
            <li class="table__cell">
              <h3 class="table__heading">
                17\u201320 \u043B\u0435\u0442
              </h3>
              <p class="table__text">
                \u041F\u0438\u043A \u043E\u0431\u0443\u0447\u0430\u0435\u043C\u043E\u0441\u0442\u0438
              </p>
            </li>
            <li class="table__cell">
              <h3 class="table__heading">
                1885 \u0433\u043E\u0434
              </h3>
              <p class="table__text">
                \u041E\u0442\u043A\u0440\u044B\u0442\u0438\u0435 \u043A\u0440\u0438\u0432\u043E\u0439 \u0437\u0430\u0431\u044B\u0432\u0430\u043D\u0438\u044F
              </p>
            </li>
            <li class="table__cell">
              <h3 class="table__heading">
                1889 \u0433\u043E\u0434
              </h3>
              <p class="table__text">
                \u041E\u0442\u043A\u0440\u044B\u0442\u0438\u0435 \u0443\u0441\u043B\u043E\u0432\u043D\u043E\u0433\u043E \u0440\u0435\u0444\u043B\u0435\u043A\u0441\u0430
              </p>
            </li>
          </ul>
        </section>

        <section class="feynman">
          <h2 class="feynman__title">
            \u041C\u0435\u0442\u043E\u0434 \u0424\u0435\u0439\u043D\u043C\u0430\u043D\u0430
          </h2>
          <p class="feynman__subtitle">
            \u0412\u044B\u0443\u0447\u0438\u0442\u044C \u0438 \u043D\u0435 \u0437\u0430\u0431\u044B\u0442\u044C
          </p>
          <a href="#" class="feynman__link">
            \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 &rarr;
          </a>
          <!--\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E \u043F\u043E \u0431\u0440\u0438\u0444\u0443 \u0437\u0430\u0432\u0435\u0441\u0442\u0438 img.feynman__image. \u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0443 \u0432 "\u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435" \u043E \u0442\u043E\u043C, \u043A\u0430\u043A\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u043D\u044B\u0435, \u0430 \u043A\u0430\u043A\u0438\u0435 - \u0434\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0435-->
        </section>

        <section class="kaufman">
          <h2 class="section-title section-title_theme_dark">
            \u041F\u0440\u0438\u043D\u0446\u0438\u043F\u044B \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F
          </h2>
          <p class="section-subtitle section-subtitle_theme_dark">
            \u043E\u0442 \u0414\u0436\u043E\u0448\u0430 \u041A\u0430\u0443\u0444\u043C\u0430\u043D\u0430
          </p>
          <ul class="table table_theme_dark">
          <!--
            \u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u0430\u044F \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0434\u043B\u044F \u0431\u043B\u043E\u043A\u0430 \u0441 \u043C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u043E\u043C _theme_dark - \u0443\u043F\u043E\u0440\u044F\u0434\u043E\u0447\u0435\u043D\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A <ol>.
            \u041E\u0431 \u044D\u0442\u043E\u043C \u043C\u043E\u0436\u043D\u043E \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430\u043C \u043F\u043E\u0441\u043B\u0435 \u0441\u0434\u0430\u0447\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B.

            \u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0447\u0438\u0441\u0435\u043B \u0443\u0431\u0440\u0430\u0442\u044C \u0447\u0435\u0440\u0435\u0437 lst: none;

            \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C counter-reset \u0443 table_theme_dark
            \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C counter-increment \u0443 table__cell_theme_dark
            \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u0441\u0435\u0432\u0434\u043E\u044D\u043B\u0435\u043C\u0435\u043D\u0442 table__cell_theme_dark::before \u0441\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C content: counter
          -->
            <!--\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F table \u0447\u0435\u0440\u0435\u0437 div \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u0430, \u043D\u043E \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0441\u043E\u0432\u0435\u0442\u043E\u0432\u0430\u0442\u044C ul-->
            <li class="table__cell table__cell_theme_dark">
              <!--\u0427\u0442\u043E\u0431\u044B \u043E\u0442\u0441\u0442\u0443\u043F\u044B \u043D\u0435 \u0441\u0442\u0430\u043A\u0430\u043B\u0438\u0442\u044C - \u0432 table__cell \u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0444\u043B\u0435\u043A\u0441. -->
              <h3 class="table__heading table__heading_theme_dark">
                1
              </h3>
              <p class="table__text table__text_theme_dark">
                \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u0438\u0432\u043B\u0435\u043A\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442.
              </p>
              <!--\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A.-->
            </li>
            <li class="table__cell table__cell_theme_dark">
              <h3 class="table__heading table__heading_theme_dark">
                2
              </h3>
              <p class="table__text table__text_theme_dark">
                \u0421\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u044C\u0442\u0435\u0441\u044C \u043D\u0430 \u043A\u0430\u043A\u043E\u043C-\u0442\u043E \u043E\u0434\u043D\u043E\u043C \u043D\u0430\u0432\u044B\u043A\u0435.
              </p>
            </li>
            <li class="table__cell table__cell_theme_dark">
              <h3 class="table__heading table__heading_theme_dark">
                3
              </h3>
              <p class="table__text table__text_theme_dark">
                \u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u0435 \u0446\u0435\u043B\u0435\u0432\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430.
              </p>
            </li>
            <li class="table__cell table__cell_theme_dark">
              <h3 class="table__heading table__heading_theme_dark">
                4
              </h3>
              <p class="table__text table__text_theme_dark">
                \u0420\u0430\u0437\u0431\u0435\u0439\u0442\u0435 \u043D\u0430\u0432\u044B\u043A \u043D\u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B.
              </p>
            </li>
            <li class="table__cell table__cell_theme_dark">
              <h3 class="table__heading table__heading_theme_dark">
                5
              </h3>
              <p class="table__text table__text_theme_dark">
                \u041F\u0440\u0438\u0433\u043E\u0442\u043E\u0432\u044C\u0442\u0435 \u0432\u0441\u0451 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0435 \u0434\u043B\u044F \u0437\u0430\u043D\u044F\u0442\u0438\u0439.
              </p>
            </li>
            <li class="table__cell table__cell_theme_dark">
              <h3 class="table__heading table__heading_theme_dark">
                6
              </h3>
              <p class="table__text table__text_theme_dark">
                \u0423\u0441\u0442\u0440\u0430\u043D\u0438\u0442\u0435 \u043F\u0440\u0435\u043F\u044F\u0442\u0441\u0442\u0432\u0438\u044F \u0434\u043B\u044F \u0437\u0430\u043D\u044F\u0442\u0438\u0439.
              </p>
            </li>
            <li class="table__cell table__cell_theme_dark">
              <h3 class="table__heading table__heading_theme_dark">
                7
              </h3>
              <p class="table__text table__text_theme_dark">
                \u0412\u044B\u0434\u0435\u043B\u0438\u0442\u0435 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0434\u043B\u044F \u0437\u0430\u043D\u044F\u0442\u0438\u0439.
              </p>
            </li>
            <li class="table__cell table__cell_theme_dark">
              <h3 class="table__heading table__heading_theme_dark">
                8
              </h3>
              <p class="table__text table__text_theme_dark">
                \u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0431\u044B\u0441\u0442\u0440\u044B\u0435 \u043F\u0435\u0442\u043B\u0438 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438.
              </p>
            </li>
            <li class="table__cell table__cell_theme_dark">
              <h3 class="table__heading table__heading_theme_dark">
                9
              </h3>
              <p class="table__text table__text_theme_dark">
                \u0417\u0430\u043D\u0438\u043C\u0430\u0439\u0442\u0435\u0441\u044C \u043F\u043E \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u044E, \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u043C\u0438 \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u044B\u043C\u0438 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u0430\u043C\u0438.
              </p>
            </li>
            <li class="table__cell table__cell_theme_dark">
              <h3 class="table__heading table__heading_theme_dark">
                10
              </h3>
              <p class="table__text table__text_theme_dark">
                \u0423\u0434\u0435\u043B\u044F\u0439\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u0438 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438.
              </p>
            </li>
          </ul>
          <div class="kaufman__triangle"></div>
          <!-- \u0422\u043E\u043B\u044C\u043A\u043E \u0444\u043E\u043D\u043E\u0432\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435. \u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u043A \u043F\u0441\u0435\u0432\u0434\u043E\u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0443 \u0431\u043B\u043E\u043A\u0430 kaufman -->
        </section>
      </main>
      <footer class="footer">
        <div class="footer__columns">
          <!-- \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u0430\u044F \u043E\u0431\u0435\u0440\u0442\u043A\u0430 \u0434\u043B\u044F \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u043A\u043E\u043B\u043E\u043D\u043E\u043A -->
          <div class="footer__column footer__column_content_copyright">
            <div class="logo logo_place_footer"></div>
            <p class="footer__author">
              &copy; 2021
            </p>
          </div>
          <div class="footer__column footer__column_content_info">
            <h4 class="footer__column-heading">
              \u041E \u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0443\u043C\u0435
            </h4>
            <nav class="footer__column-links">
              <ul class="footer__list">
                <!-- \u041E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043B\u0430\u0441\u0441\u0430 -->
                <li>
                  <a href="#" class="footer__column-link">
                \u0413\u043B\u0430\u0432\u043D\u0430\u044F
              </a>
                </li>
                <li>
                  <a href="#" class="footer__column-link">
                \u041A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u044F
              </a>
                </li>
                <li>
                  <a href="#" class="footer__column-link">
                \u041D\u0430\u0441\u0442\u0430\u0432\u043D\u0438\u043A\u0438
              </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="footer__column footer__column_content_social">
            <h4 class="footer__column-heading">
              \u0421\u043E\u0446\u0441\u0435\u0442\u0438
            </h4>
            <nav class="footer__column-links">
              <ul class="footer__list">
                <!-- \u041E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043B\u0430\u0441\u0441\u0430 -->
                <li>
                  <a href="#" class="footer__column-link">
                    <img src="./images/facebook_color_white.svg" alt="\u0418\u043A\u043E\u043D\u043A\u0430 Facebook" class="footer__social-icon"> Facebook
                  </a>
                </li>
                <li>
                  <a href="#" class="footer__column-link">
                    <img src="./images/vk_color_white.svg" alt="\u0418\u043A\u043E\u043D\u043A\u0430 \u0412\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0435" class="footer__social-icon"> \u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435
                  </a>
                </li>
                <li>
                  <a href="#" class="footer__column-link">
                    <img src="./images/instagram_color_white.svg" alt="\u0418\u043A\u043E\u043D\u043A\u0430 Instagram" class="footer__social-icon"> Instagram
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  </body>
</html>
`,s0=`
.page {
  min-width: 1100px;
  /* \u043C\u044B \u0435\u0449\u0451 \u043D\u0435 \u0443\u043C\u0435\u0435\u043C \u0434\u0435\u043B\u0430\u0442\u044C \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E \u0441\u0430\u0439\u0442\u0430, */
  /* \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0432\u044B\u0448\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0448\u0438\u0440\u0438\u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B */
  max-width: 1600px;
  /* \u0432\u044B\u0448\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0438 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435 \u043F\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0448\u0438\u0440\u0438\u043D\u0435 */
  margin: 0 auto;
  /* \u0432\u044B\u0448\u0435 \u0434\u043B\u044F \u044D\u043A\u0440\u0430\u043D\u043E\u0432 \u0431\u043E\u043B\u044C\u0448\u0435 1600px \u043E\u0442\u0446\u0435\u043D\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043B\u0438 \u0432\u0435\u0441\u044C \u043A\u043E\u043D\u0442\u0435\u043D\u0442 */
  font-family: "Helvetica Neue", Arial, sans-serif;
}

.header {
  height: 100vh;
  min-height: 600px;
  max-height: 756px;
  /* \u0432\u044B\u0448\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0438 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0441\u0435\u043A\u0446\u0438\u0438 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f2f2f2;
  position: relative;
  /* \u0420\u0435\u043B\u0430\u0442\u0438\u0432\u043D\u043E\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0438\u043C\u0435\u043D\u043D\u043E \u0443 \u0448\u0430\u043F\u043A\u0438 */
  z-index: 1;
  /* \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C z-index \u043D\u0430 \u0448\u0430\u043F\u043A\u0435 \u0441\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C 1, \u0447\u0442\u043E\u0431\u044B \u043A\u0432\u0430\u0434\u0440\u0430\u0442 \u043D\u0435 \u043F\u0430\u0434\u0430\u043B \u043F\u043E\u0434 \u0444\u043E\u043D. */
}

.header__title {
  /* \u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435: \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E max-width \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432, \u0430 \u043D\u0435 width */
  max-width: 730px;
  font-size: 102px;
  line-height: 96px;
  margin-left: 64px;
}

.header__subtitle {
  width: 388px;
  /* \u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435: \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E max-width \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 */
  line-height: 25px;
  font-size: 18px;
  position: absolute;
  bottom: 30px;
  left: 64px;
}

.header__link {
  color: #2f80ed;
  text-decoration: none;
}

/* \u043D\u0438\u0436\u0435 \u043C\u044B \u043F\u0440\u0438\u0432\u0435\u043B\u0438 \u043F\u0440\u0438\u043C\u0435\u0440 \u0434\u0432\u0443\u0445 \u0441\u0435\u043B\u0435\u043A\u0442\u043E\u0440\u043E\u0432, \u0447\u0442\u043E\u0431\u044B \u0432\u044B \u0432\u0441\u043F\u043E\u043C\u043D\u0438\u043B\u0438 \u0437\u0430\u043F\u0438\u0441\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 */
.header__square-pic {
  height: 568px;
  width: 568px;
  background: #2f80ed;
  position: absolute;
  top: 64px;
  right: 0;
  z-index: -1;
  /* \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u043F\u043E\u043D\u0438\u0436\u0435\u043D\u0438\u0435 z-index \u0437\u0434\u0435\u0441\u044C \u0434\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B  */
}

.header__main-illustration {
  width: 765px;
  height: 608px;
  object-fit: cover;
  /*
  \u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435: \u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043C\u043E\u0433\u0443\u0442 \u0438\u0441\u043A\u0430\u0436\u0430\u0442\u044C\u0441\u044F \u0432 \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u044F\u0445. \u041D\u0430 \u0432\u0441\u044F\u043A\u0438\u0439 \u0441\u043B\u0443\u0447\u0430\u0439, \u0445\u043E\u0440\u043E\u0448\u043E \u0431\u044B \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044C \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0444\u043E\u043D\u043E\u0432\u043E\u0433\u043E \u0438\u043B\u0438 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u043D\u043E\u0433\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F.
  \u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 object-fit;
  */
  position: absolute;
  right: 0;
  bottom: 0;
  /* \u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435: \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u044F \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 0 \u0434\u043B\u044F margin/padding/top/left \u043D\u0435 \u0441\u0442\u043E\u0438\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0435\u0434\u0438\u043D\u0438\u0446\u0443 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F */
}

.logo {
  width: 183px;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  /* \u0412 \u0431\u043B\u043E\u043A \u0432\u044B\u043D\u043E\u0441\u0438\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0431\u0449\u0438\u0435 \u043E\u043F\u0438\u0441\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0441\u0442\u0438\u043B\u0438, \u043D\u0435 \u0432\u043B\u0438\u044F\u044E\u0449\u0438\u0435 \u043D\u0430 \u0432\u043D\u0435\u0448\u043D\u044E\u044E \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u044E \u0438 \u043F\u043E\u0437\u0438\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 */
}

.logo_place_header {
  height: 32px;
  background-image: url("../images/logo_place_header.svg");
  position: absolute;
  top: 30px;
  left: 64px;
  /* \u0418\u0437\u043C\u0435\u043D\u044F\u044E\u0449\u0438\u0435\u0441\u044F \u0441\u0442\u0438\u043B\u0438 \u0438 \u043F\u043E\u0437\u0438\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 */
}

.logo_place_footer {
  height: 35px;
  /* \u0415\u0441\u043B\u0438 \u0441\u043B\u0435\u0433\u043A\u0430 \u043E\u0431\u0440\u0435\u0437\u0430\u0435\u0442\u0441\u044F - \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E, \u043D\u0438\u0447\u0435\u0433\u043E \u043A\u0440\u0438\u0442\u0438\u0447\u043D\u043E\u0433\u043E. */
  background-image: url("../images/logo_place_footer.svg");
}

.description {
  margin: 100px 0;
  /*
  \u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E, \u0435\u0441\u043B\u0438 \u0441\u0442\u0443\u0434\u0435\u043D\u0442 \u0437\u0430\u043C\u0438\u043A\u0441\u0443\u0435\u0442 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E two-columns \u043E\u0442 description \u0438 \u0442\u0430\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 margin.
  \u041D\u0430 \u0434\u0430\u043D\u043D\u043E\u043C \u044D\u0442\u0430\u043F\u0435 \u043D\u0435 \u043E\u0441\u043E\u0431\u043E \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0438\u0430\u043B\u044C\u043D\u043E, \u043E\u0442\u043A\u0443\u0434\u0430 \u0434\u0430\u044E\u0442\u0441\u044F \u043E\u0442\u0441\u0442\u0443\u043F\u044B.  \u041D\u043E \u043A\u0430\u043A "\u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435" - \u043F\u0438\u0441\u0430\u0442\u044C \u043C\u043E\u0436\u043D\u043E
  */
}

.two-columns {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
}

.two-columns__brief {
  max-width: 175px;
  font-size: 18px;
  line-height: 1.2;
  font-weight: normal;
  color: #2f80ed;
  margin: 0;
}

.two-columns__main-text {
  min-width: 784px;
  width: 80%;
  line-height: 34px;
  font-size: 24px;
}

.two-columns__paragraph {
  margin-top: 0;
  margin-bottom: 30px;
}

.two-columns__paragraph:last-child {
  margin-bottom: 0;
}

.two-columns__span-accent {
  /* \u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435: \u0432 \u0434\u0430\u043D\u043D\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u043C\u043E\u0436\u043D\u043E \u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u0448\u0440\u0438\u0444\u0442\u0430 \u0438 \u0438\u043D\u0442\u0435\u0440\u043B\u0438\u043D\u044C\u044F\u0436, \u043E\u043D\u0438 \u043D\u0430\u0441\u043B\u0435\u0434\u0443\u044E\u0442\u0441\u044F. \u041D\u043E \u0432 \u0446\u0435\u043B\u043E\u043C, \u0442\u0430\u043A \u0434\u0435\u043B\u0430\u0442\u044C - \u043D\u0435 \u043B\u0443\u0447\u0448\u0430\u044F \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430 \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0411\u042D\u041C */
  font-weight: bold;
}

.digits {
  max-width: 1100px;
  /*
  \u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0437\u0434\u0435\u0441\u044C flex \u0437\u0430\u043C\u0435\u0441\u0442\u043E margin: auto. \u042D\u0442\u043E \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u043B\u0438\u0448\u043D\u0438\u043C, \u043D\u043E \u0432\u044B\u0433\u043B\u044F\u0434\u0438\u0442 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E
  \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u0431\u043B\u043E\u043A\u043E\u043C kaufman. \u041D\u0438 \u043E\u0434\u0438\u043D \u0438\u0437 \u043F\u043E\u0434\u0445\u043E\u0434\u043E\u0432 \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0448\u0438\u0431\u043E\u0447\u043D\u044B\u0439.
  */
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 100px auto;
}

.section-title {
  width: 60%;
  font-size: 60px;
  line-height: 1.15;
  text-align: center;
  margin: 0 auto;
}

.section-title_theme_dark {
  color: white;
  /* "\u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435": \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044C \u0446\u0432\u0435\u0442\u0430 \u0432 \u0435\u0434\u0438\u043D\u043E\u043C \u0444\u043E\u0440\u043C\u0430\u0442\u0435. */
}

.section-subtitle {
  width: 60%;
  line-height: 34px;
  font-size: 24px;
  text-align: center;
  margin: 20px auto 0;
  /* \u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E \u043C\u0438\u043A\u0441\u043E\u0432\u0430\u0442\u044C \u043E\u0442 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043E\u0442\u0441\u0442\u0443\u043F\u043E\u0432. \u041A\u0430\u043A "\u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435" */
}

.section-subtitle_theme_dark {
  color: white;
}

.table {
  width: 1100px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}

.table__cell {
  width: 250px;
  margin: 60px 0 0;
}

/*
\u0421\u043E\u0432\u0435\u0442\u0443\u0439\u0442\u0435 \u0432 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 "\u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435"
.table {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
  padding: 0;
}

.table__cell {
  width: calc(100% / 4 - 40px)
  margin: 60px 20px 0;
}

*/

.table__cell_theme_dark {
  width: 200px;
  color: white;
  margin-right: 0;
  margin-top: 80px;
}

.table__heading {
  font-size: 24px;
  line-height: 1.15;
  margin: 0 0 20px;
  /*
  \u041E\u0442\u0441\u0442\u0443\u043F\u044B \u0441\u0445\u043B\u043E\u043F\u043D\u0443\u0442\u044C\u0441\u044F. \u042D\u0442\u043E "\u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435" - \u0435\u0441\u043B\u0438 \u0442\u0435\u043A\u0441\u0442\u0430 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442, \u0430 \u0431\u0443\u0434\u0435\u0442 \u0434\u0440\u0443\u0433\u043E\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 - \u0443 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430 \u0431\u0443\u0434\u0443\u0442 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u043E\u0442\u0441\u0442\u0443\u043F\u044B, \u0441\u043E\u0437\u0434\u0430\u044E\u0449\u0438\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E
  \u043C\u0435\u0436\u0434\u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438.
   */
}

.table__heading_theme_dark {
  color: white;
}

.table__text {
  line-height: 1.2;
  font-size: 18px;
  margin: 20px 0;
}

.table__text_theme_dark {
  color: white;
}

.table__text:last-of-type {
  margin-bottom: 0;
}

.feynman {
  box-sizing: border-box;
  min-height: 890px;
  /* \u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435: \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C flex-column \u0441 \u0446\u0435\u043D\u0442\u0440\u043E\u0432\u043A\u043E\u0439. */
  /*
  \u041D\u0435 \u0445\u043E\u0440\u043E\u0448\u043E \u0434\u0435\u043B\u0430\u0442\u044C \u0432\u044B\u0441\u043E\u0442\u0443 \u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439. \u0424\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043C\u043E\u0433\u0443\u0442 \u043F\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043A \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u0439 \u0441 \u0432\u0435\u0440\u0441\u0442\u043A\u043E\u0439 \u043F\u0440\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0438
  \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430
  */
  background: #f2f2f2;
  background-image: url("../images/feynman.png");
  background-repeat: no-repeat;
  background-size: 867px 637px;
  background-position: left bottom;
  /*
  \u041C\u043E\u0436\u043D\u043E \u043F\u043E\u0441\u043E\u0432\u0435\u0442\u043E\u0432\u0430\u0442\u044C shorthand:
  background: no-repeat left bottom url('../images/feynman.png'),
  #F2F2F2;
  background-size: 867px 637px;
  */
  position: relative;
  padding-top: 100px;
  /*\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C padding, \u0447\u0442\u043E\u0431\u044B \u043D\u0435 \u0442\u0435\u0440\u044F\u0442\u044C \u0446\u0432\u0435\u0442 \u0444\u043E\u043D\u0430*/
}

.feynman__title {
  max-width: 648px;
  font-size: 120px;
  line-height: 1.15;
  text-align: center;
  margin: 0 auto 0;
}

.feynman__subtitle {
  /* \u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u0442\u044C \u0448\u0438\u0440\u0438\u043D\u0443. */
  text-align: center;
  font-size: 36px;
  line-height: 51px;
  margin: 70px 0;
}

.feynman__link {
  line-height: 51px;
  font-size: 36px;
  color: #2f80ed;
  text-decoration: none;
  position: absolute;
  top: 50%;
  right: 48px;
}

.kaufman {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1f1f1f;
  position: relative;
  overflow: hidden;
  padding: 90px 0;
  z-index: 1;
}

.kaufman__triangle {
  width: 877px;
  height: 877px;
  background: no-repeat url("../images/kaufman-triangle.svg");
  background-size: cover;
  position: absolute;
  top: 0;
  right: -210px;
  z-index: -1;
}

.footer {
  min-height: 350px;
  display: flex;
  /* \u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0437\u0434\u0435\u0441\u044C \u0444\u043B\u0435\u043A\u0441 \u0434\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0441\u043F\u0440\u0430\u0432\u0438\u0442\u044C footer__columns. \u0410\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u0430 height: 100% */
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  /* \u0418\u0437\u043C\u0435\u043D\u044F\u0435\u043C box-sizing, \u0432\u0441\u0435 \u0432\u043B\u0435\u0437\u043B\u043E \u0432 min-height, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u0438 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 \u043E\u0442\u0441\u0442\u0443\u043F\u044B */
  background: #1f1f1f;
  padding: 60px 0 40px;
}

.footer__columns {
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.footer__column {
  display: flex;
  flex-direction: column;
}

.footer__column_content_copyright {
  justify-content: space-between;
  flex-basis: 711px;
}

.footer__author {
  color: white;
  /* \u0426\u0432\u0435\u0442\u0430\u043C\u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C \u0438\u043C\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E, \u0431\u0435\u0437 \u043D\u0430\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F. \u041D\u043E \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E \u043D\u0430\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u044C. \u042D\u0442\u043E \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043E\u0448\u0438\u0431\u043A\u043E\u0439 */
  font-size: 18px;
  line-height: 25px;
  margin: 18px 0;
}

.footer__column-heading {
  color: white;
  font-size: 18px;
  line-height: 30px;

  margin: 0;
}

.footer__column-links {
  margin: 20px 0 16px;
}

.footer__column-link {
  color: white;
  font-size: 18px;
  line-height: 30px;
  /* \u0421\u043E\u0437\u0434\u0430\u0435\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0439 \u043E\u0442\u0441\u0442\u0443\u043F \u043C\u0435\u0436\u0434\u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438. \u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0442\u0441\u0442\u0443\u043F\u0430 - "\u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435". */
  text-decoration: none;
}

.footer__list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.footer__social-icon {
  margin-right: 10px;
}

`,a0=V(i0,s0,U),n0=["page","header","description","techniques","video","oakley","feynman","digits","khan","kaufman","resources","footer"],l0=["blocks/cards/__description/cards__description.css","blocks/cards/__image/cards__image.css","blocks/cards/__item/cards__item.css","blocks/cards/__title/cards__title.css","blocks/cards/cards.css","blocks/description/description.css","blocks/digits/digits.css","blocks/feynman/__link/feynman__link.css","blocks/feynman/__subtitle/feynman__subtitle.css","blocks/feynman/__title/feynman__title.css","blocks/feynman/feynman.css","blocks/footer/__author/footer__author.css","blocks/footer/__column-heading/footer__column-heading.css","blocks/footer/__column-link/footer__column-link.css","blocks/footer/__column-links/footer__column-links.css","blocks/footer/__column/_content/footer__column_content_copyright.css","blocks/footer/__column/footer__column.css","blocks/footer/__columns/footer__columns.css","blocks/footer/__social-icon/footer__social-icon.css","blocks/footer/footer.css","blocks/header/__link/header__link.css","blocks/header/__main-illustration/header__main-illustration.css","blocks/header/__square-pic/header__square-pic.css","blocks/header/__subtitle/header__subtitle.css","blocks/header/__title/header__title.css","blocks/header/header.css","blocks/kaufman/__triangle/kaufman__triangle.css","blocks/kaufman/kaufman.css","blocks/khan/__author/khan__author.css","blocks/khan/__book-container/khan__book-container.css","blocks/khan/__book-pic/khan__book-pic.css","blocks/khan/__buy-link/khan__buy-link.css","blocks/khan/__container/khan__container.css","blocks/khan/__quote-author-subline/khan__quote-author-subline.css","blocks/khan/__quote-author/khan__quote-author.css","blocks/khan/__quote/khan__quote.css","blocks/khan/__title/khan__title.css","blocks/khan/khan.css","blocks/link/link.css","blocks/logo/_place/logo_place_footer.css","blocks/logo/_place/logo_place_header.css","blocks/logo/logo.css","blocks/oakley/oakley.css","blocks/page/page.css","blocks/resources/__logo-zone/resources__logo-zone.css","blocks/resources/__logo/resources__logo.css","blocks/resources/resources.css","blocks/rotation/rotation.css","blocks/section-subtitle/_theme/section-subtitle_theme_dark.css","blocks/section-subtitle/section-subtitle.css","blocks/section-title/_theme/section-title_theme_dark.css","blocks/section-title/section-title.css","blocks/table/__cell/_theme/table__cell_theme_dark.css","blocks/table/__cell/table__cell.css","blocks/table/__heading/_theme/table__heading_theme_dark.css","blocks/table/__heading/table__heading.css","blocks/table/__text/_theme/table__text_theme_dark.css","blocks/table/__text/table__text.css","blocks/table/_theme/table_theme_dark.css","blocks/table/table.css","blocks/techniques/__cards/techniques__cards.css","blocks/techniques/techniques.css","blocks/two-colomns/__brief/two-colomns__brief.css","blocks/two-colomns/__main-text/two-colomns__main-text.css","blocks/two-colomns/__paragraph/two-colomns__paragraph.css","blocks/two-colomns/__span-accent/two-colomns__span-accent.css","blocks/two-colomns/two-colomns.css","blocks/video/__iframe/video__iframe.css","blocks/video/__iframes/video__iframes.css","blocks/video/video.css"],c0=[".editorconfig","README.MD",...l0,"images/cards-attention.png","images/cards-competence.png","images/cards-interliving.png","images/cards-question.png","images/cards-recall.png","images/facebook_color_white.svg","images/feynman.png","images/header-image.png","images/instagram_color_white.svg","images/kaufman-triangle.svg","images/khan-book.jpg","images/logo/resources-arzamas.svg","images/logo/resources-n1.svg","images/logo/resources-polka.svg","images/logo/resources-strelka.svg","images/logo_place_footer.svg","images/logo_place_header.svg","images/vk_color_white.svg","index.html","pages/index.css","texts.md","vendor/normalize.css"],r0=[...r4,{selector:".header .rotation",css:{animationDuration:"20s",animationTimingFunction:"linear"}},{selector:".header",css:{overflow:"hidden"}}],E0=[{selector:".techniques"},{selector:".techniques .section-title",css:j},{selector:".techniques .section-subtitle",css:q},{selector:".techniques .cards",css:{width:"920px",marginLeft:"auto",marginRight:"auto"}},{selector:".techniques .cards .cards__item",count:5,css:{marginTop:"60px",width:"240px"}},{selector:".techniques .cards .cards__item .cards__image",css:{borderRadius:"50%",width:"160px",height:"160px"}},{selector:".techniques .cards .cards__item .cards__title",css:{fontWeight:"700",fontSize:"24px",lineHeight:"1.15"}},{selector:".techniques .cards .cards__item .cards__description",css:{lineHeight:"23px",fontSize:"18px",fontWeight:"400"}}],_0=[{selector:".video"},{selector:".video .section-title",css:j},{selector:".video .section-subtitle",css:q},{selector:".video .video__iframes",css:{width:"1050px"}},{selector:".video .video__iframes .video__iframe",count:2,css:{width:"515px",height:"316px"}}],h0=[{selector:".oakley"},{selector:".oakley .two-columns",css:a4},{selector:".oakley .two-columns .two-columns__brief",css:n4},{selector:".oakley .two-columns .two-columns__main-text",css:l4},{selector:".oakley .two-columns .two-columns__main-text .two-columns__paragraph",css:v({marginBottom:"30px"},c4)}],d0=[{selector:".khan"},{selector:".khan .khan__container",css:{width:"1280px"}},{selector:".khan .khan__author",css:{lineHeight:"42px",fontSize:"30px",fontWeight:"400"}},{selector:".khan .khan__title",css:{lineHeight:"1.15",fontSize:"60px",fontWeight:"700"}},{selector:".khan .khan__quote",css:{width:"790px",lineHeight:"34px",fontSize:"24px",fontWeight:"400"}},{selector:".khan .khan__quote-author",css:{lineHeight:"1.15",fontSize:"24px",fontWeight:"700"}},{selector:".khan .khan__quote-author-subline",css:{lineHeight:"1.15",fontSize:"24px",fontWeight:"400"}},{selector:".khan .khan__book-container",css:{display:"flex",flexDirection:"row",justifyContent:"flex-start"}},{selector:".khan .khan__book-container .khan__book-pic",css:{width:"620px",height:"608px"}},{selector:".khan .khan__book-container .khan__buy-link",css:{lineHeight:"42px",fontSize:"30px",fontWeight:"400"}}],m0=[...d4,{selector:".kaufman .kaufman__triangle.rotation",css:{animationDuration:"20s",animationTimingFunction:"linear"}}],p0=[{selector:".resources"},{selector:".resources .section-title",css:j},{selector:".resources .section-subtitle",css:q},{selector:".resources .resources__logo-zone",css:{display:"flex",flexDirection:"row",width:"1100px"}},{selector:".resources .resources__logo",count:4,css:{width:"270px",height:"38px"}}],D0=[...r0,...E4,...E0,..._0,...h0,...h4,..._4,...d0,...m0,...p0,...m4],g0=`
<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex">
  <title>\u041D\u0430\u0443\u0447\u0438\u0442\u044C\u0441\u044F \u0443\u0447\u0438\u0442\u044C\u0441\u044F</title>
  <link rel="stylesheet" href="./vendor/normalize.css">
  <link rel="stylesheet" href="./pages/index.css">
</head>

<body>
  <div class="page">

    <header class="header">
      <div class="logo logo_place_header"></div>
      <!--\u041E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E: <a class="logo logo_place_header"></a> -->
      <h1 class="header__title">
        \u041D\u0430\u0443\u0447\u0438\u0442\u044C\u0441\u044F \u0443\u0447\u0438\u0442\u044C\u0441\u044F
      </h1>
      <p class="header__subtitle">
        \u041A\u0430\u043A\u0438\u0435 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0438 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044B \u043A \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044E \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432 \u0441\u0432\u043E\u0435\u0439 \u0436\u0438\u0437\u043D\u0438?
        <a href="#" target="_blank" class="header__link">
          \u0423\u0437\u043D\u0430\u0442\u044C &rarr;
        </a>
        <!--
        \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0447\u0442\u043E \u043C\u044B \u043D\u0435 \u043F\u043E\u0434\u043C\u0438\u043A\u0441\u043E\u0432\u044B\u0432\u0430\u0435\u043C \u043A header__link \u043E\u0431\u0449\u0438\u0439 \u0431\u043B\u043E\u043A \u0442\u0438\u043F\u0430 link,
        \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u044F.
       -->
      </p>
      <img src="./images/header-image.png" alt="\u041A\u0430\u0440\u0442\u0438\u043D\u0430 '\u041E\u043F\u044F\u0442\u044C \u0414\u0432\u043E\u0439\u043A\u0430'" class="header__main-illustration">
      <!--\u041E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E: "\u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435" -- \u0415\u0441\u043B\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0432\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E \u043A\u0430\u043A div - \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u0440\u043E \u0432\u0430\u0436\u043D\u043E\u0441\u0442\u044C \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u043D\u044B\u0445 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439 \u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0445 \u0430\u043B\u044C\u0442\u043E\u0432. -->
      <div class="header__square-pic rotation"></div>
      <!--\u041E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E: "\u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435" -- \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u043A \u043F\u0441\u0435\u0432\u0434\u043E\u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0431\u043B\u043E\u043A\u0430 header. \u041F\u043E \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044E \u0432\u0442\u043E\u0440\u043E\u0433\u043E \u0441\u043F\u0440\u0438\u043D\u0442\u0430.-->
    </header>

    <main class="content">
      <section class="description">
        <div class="two-columns">
          <!--\u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435: \u0432\u0437\u044F\u0442\u044C article-->
          <h2 class="two-columns__brief">
            \u0413\u043B\u0430\u0432\u043D\u044B\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0432 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0438
          </h2>
          <!-- \u041D\u0435 \u0441\u043C\u043E\u0442\u0440\u044F \u043D\u0430 \u0440\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430 - \u044D\u0442\u043E \u0432\u0430\u0436\u043D\u044B\u0439 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0443\u0440\u043E\u0432\u043D\u044F h2 -->
          <div class="two-columns__main-text">
            <!--\u042D\u0442\u043E \u043D\u0435 \u0441\u043F\u0438\u0441\u043E\u043A, \u0430 \u043E\u0431\u0435\u0440\u0442\u043A\u0430 \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u043E\u0433\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0433\u043E. \u0417\u0434\u0435\u0441\u044C \u0443\u043C\u0435\u0441\u0442\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C DIV.-->
            <p class="two-columns__paragraph">
              \u041D\u0438 \u0432 \u0448\u043A\u043E\u043B\u0435, \u043D\u0438 \u0432 \u0438\u043D\u0441\u0442\u0438\u0442\u0443\u0442\u0435 \u043D\u0430\u0441 \u043D\u0435 \u0443\u0447\u0430\u0442 \u0442\u043E\u043C\u0443, \u043A\u0430\u043A \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0438\u0437\u0443\u0447\u0430\u0442\u044C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B. \u041C\u044B \u0433\u043E\u0442\u043E\u0432\u0438\u043C\u0441\u044F \u043A \u044D\u043A\u0437\u0430\u043C\u0435\u043D\u0430\u043C \u0438
              \u0443\u0447\u0438\u043C \u0431\u0438\u043B\u0435\u0442\u044B. \u041C\u044B \u0442\u0440\u0435\u043D\u0438\u0440\u0443\u0435\u043C\u0441\u044F \u0440\u0435\u0448\u0430\u0442\u044C \u043E\u0434\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438, \u0447\u0442\u043E\u0431\u044B \u043B\u0443\u0447\u0448\u0435 \u0441\u0434\u0430\u0442\u044C \u0442\u0435\u0441\u0442, \u043D\u043E \u0447\u0430\u0441\u0442\u043E \u0432 \u0438\u0442\u043E\u0433\u0435 \u044D\u0442\u043E \u043D\u0435
              \u0434\u0430\u0435\u0442 \u043D\u0430\u043C \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0437\u043D\u0430\u043D\u0438\u044F. \u0417\u0443\u0431\u0440\u0435\u0436\u043A\u0430 \u0431\u044B\u0441\u0442\u0440\u043E \u0432\u044B\u0432\u0435\u0442\u0440\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0438 \u043D\u0435 \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442 \u043F\u043E\u043B\u044C\u0437\u044B.
            </p>
            <p class="two-columns__paragraph">
              <span class="two-columns__span-accent">\u0412\u044B\u0432\u043E\u0434:</span> \u0443\u0447\u0438\u0442\u044C\u0441\u044F \u0442\u043E\u0436\u0435 \u043D\u0443\u0436\u043D\u043E \u0443\u043C\u0435\u0442\u044C, \u043D\u043E \u043F\u043E\u0447\u0435\u043C\u0443-\u0442\u043E \u044D\u0442\u043E\u043C\u0443 \u043C\u0430\u043B\u043E \u0433\u0434\u0435
              \u0443\u0447\u0430\u0442. \u0427\u0442\u043E \u0441 \u044D\u0442\u0438\u043C \u0434\u0435\u043B\u0430\u0442\u044C?
              <!--\u041D\u0438\u043A\u0430\u043A\u0438\u0445 <b> <strong> -- \u044D\u0442\u043E \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0442\u0435\u0433\u0438. -->
            </p>
            <p class="two-columns__paragraph">
              \u041A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u0438\u043A\u0438 \u0438 \u0443\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u044F \u043F\u043E\u043C\u043E\u0433\u0430\u044E\u0442 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0434\u0445\u043E\u0434 \u043A \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044E, \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0435\u0433\u043E \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u043C \u0438
              \u0437\u0430\u0445\u0432\u0430\u0442\u044B\u0432\u0430\u044E\u0449\u0438\u043C. \u042D\u0442\u0438 \u0436\u0435 \u0442\u0435\u0445\u043D\u0438\u043A\u0438 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F \u043D\u0430 \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u0432 \u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0443\u043C\u0435.
            </p>
          </div>
        </div>
      </section>

      <section class="techniques">
        <h2 class="section-title">
          \u0422\u0435\u0445\u043D\u0438\u043A\u0438 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F
        </h2>
        <p class="section-subtitle">
          \u041F\u044F\u0442\u044C \u043F\u0440\u0430\u043A\u0442\u0438\u043A \u043E\u0442 \u0411\u0430\u0440\u0431\u0430\u0440\u044B \u041E\u0430\u043A\u043B\u0438
        </p>
        <ul class="cards">
          <li class="cards__item">
            <img src="./images/cards-attention.png" alt="\u041A\u043D\u0438\u0433\u0430 \u0432 \u0440\u0443\u043A\u0430\u0445" class="cards__image">
            <h3 class="cards__title">
              \u0414\u0432\u0430 \u0432\u0438\u0434\u0430 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u044F
            </h3>
            <p class="cards__description">
              \u0413\u043B\u0443\u0431\u043E\u043A\u0438\u0435 \u0437\u043D\u0430\u043D\u0438\u044F \u0432\u043E\u0437\u043D\u0438\u043A\u0430\u044E\u0442, \u0435\u0441\u043B\u0438 \u0447\u0435\u0440\u0435\u0434\u043E\u0432\u0430\u0442\u044C \u0441\u0444\u043E\u043A\u0443\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0438 \u0440\u0430\u0441\u0441\u0435\u044F\u043D\u043D\u043E\u0435 \u043C\u044B\u0448\u043B\u0435\u043D\u0438\u0435.
            </p>
          </li>
          <li class="cards__item">
            <img src="./images/cards-recall.png" alt="\u0421\u0442\u0430\u0442\u0443\u044F" class="cards__image">
            <h3 class="cards__title">
              Recall
            </h3>
            <p class="cards__description">
              \u0412\u0441\u043F\u043E\u043C\u0438\u043D\u0430\u0439\u0442\u0435 \u0438\u0437\u0443\u0447\u0435\u043D\u043D\u043E\u0435 \u2013 \u044D\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C \u0440\u0430\u0437\u0440\u043E\u0437\u043D\u0435\u043D\u043D\u044B\u0435 \u043F\u043E\u0440\u0446\u0438\u0438 \u043F\u0430\u043C\u044F\u0442\u0438.
            </p>
          </li>
          <li class="cards__item">
            <img src="./images/cards-interliving.png" alt="\u0417\u0430\u043B" class="cards__image">
            <h3 class="cards__title">
              \u0418\u043D\u0442\u0435\u0440\u043B\u0438\u0432\u0438\u043D\u0433
            </h3>
            <p class="cards__description">
              \u0418\u0437\u0443\u0447\u0430\u0439\u0442\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u0432\u044B\u043A\u043E\u0432 \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E, \u043E\u043D\u0438 \u043E\u0431\u043E\u0433\u0430\u0449\u0430\u044E\u0442 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430.
            </p>
          </li>
          <li class="cards__item">
            <img src="./images/cards-question.png" alt="\u0411\u0435\u043B\u0430\u044F \u043A\u043E\u043C\u043D\u0430\u0442\u0430" class="cards__image">
            <h3 class="cards__title">
              \u0412\u043E\u043F\u0440\u043E\u0441\u044B
            </h3>
            <p class="cards__description">
              \u0413\u043B\u0443\u0431\u043E\u043A\u0438\u0435 \u0437\u043D\u0430\u043D\u0438\u044F \u0432\u043E\u0437\u043D\u0438\u043A\u0430\u044E\u0442, \u0435\u0441\u043B\u0438 \u0447\u0435\u0440\u0435\u0434\u043E\u0432\u0430\u0442\u044C \u0441\u0444\u043E\u043A\u0443\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0438 \u0440\u0430\u0441\u0441\u0435\u044F\u043D\u043D\u043E\u0435 \u043C\u044B\u0448\u043B\u0435\u043D\u0438\u0435.
            </p>
          </li>
          <li class="cards__item">
            <img src="./images/cards-competence.png" alt="\u0421\u0442\u043E\u043F\u043A\u0430 \u043A\u043D\u0438\u0433" class="cards__image">
            <h3 class="cards__title">
              \u0418\u043B\u043B\u044E\u0437\u0438\u044F \u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0442\u043D\u043E\u0441\u0442\u0438
            </h3>
            <p class="cards__description">
              \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0440\u043E \u0441\u0435\u0431\u044F, \u0437\u0430\u043F\u0438\u0448\u0438\u0442\u0435, \u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u0443: \u0432\u0430\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u0430\u0436\u0435\u0442\u0441\u044F, \u0447\u0442\u043E \u0432\u044B \u0432\u043B\u0430\u0434\u0435\u0435\u0442\u0435 \u043D\u043E\u0432\u043E\u0439 \u0442\u0435\u043C\u043E\u0439.
            </p>
          </li>
        </ul>
      </section>

      <section class="video">
        <h2 class="section-title">\u0412\u0438\u0434\u0435\u043E \u043D\u0430 TED</h2>
        <p class="section-subtitle">\u0414\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u043B\u044E\u0431\u0438\u0442 \u043F\u0440\u043E\u043A\u0440\u0430\u0441\u0442\u0438\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C</p>
        <ul class="video__iframes">
          <!-- \u042D\u0442\u043E\u0442 \u0441\u043F\u0438\u0441\u043E\u043A \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u044E \u0432\u044B\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C \u043A\u0430\u043A "\u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435" -->
          <li>
            <iframe class="video__iframe" allowfullscreen src="https://www.youtube.com/embed/5MgBikgcWnY"></iframe>
          </li>
          <li>
            <iframe class="video__iframe" allowfullscreen src="https://www.youtube.com/embed/arj7oStGLkU"></iframe>
          </li>
        </ul>
      </section>

      <section class="oakley">
        <div class="two-columns">
          <h2 class="two-columns__brief">
            \u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0411\u0430\u0440\u0431\u0430\u0440\u044B \u041E\u0430\u043A\u043B\u0438
          </h2>
          <div class="two-columns__main-text">
            <p class="two-columns__paragraph">
              \u0421 \u0434\u0435\u0442\u0441\u0442\u0432\u0430 \u0411\u0430\u0440\u0431\u0430\u0440\u0435 \u043D\u0435 \u0434\u0430\u0432\u0430\u043B\u0430\u0441\u044C \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430. \u041E\u043D\u0430 \u0441\u0447\u0438\u0442\u0430\u043B\u0430 \u0441\u0435\u0431\u044F \u0437\u0430\u043A\u043E\u043D\u0447\u0435\u043D\u043D\u044B\u043C \u0433\u0443\u043C\u0430\u043D\u0438\u0442\u0430\u0440\u0438\u0435\u043C, \u043F\u0440\u0438\u0447\u0451\u043C \u0434\u0430\u043B\u0435\u043A\u043E \u043D\u0435
              \u0441\u0430\u043C\u044B\u043C \u0443\u043C\u043D\u044B\u043C. \u0412 \u0430\u0440\u043C\u0438\u0438 \u043E\u043D\u0430 \u0438\u0437\u0443\u0447\u0430\u043B\u0430 \u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u044F\u0437\u044B\u043A, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043D\u0430\u0434\u0431\u0430\u0432\u043A\u0443, \u0434\u0430 \u0442\u0430\u043A \u0443\u0441\u043F\u0435\u0448\u043D\u043E, \u0447\u0442\u043E \u0435\u0451 \u0432\u044B\u0434\u0432\u0438\u043D\u0443\u043B\u0438
              \u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u0438\u0440\u044B. \u041D\u043E \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u043F\u043E \u0441\u043B\u0443\u0436\u0431\u0435 \u043D\u0443\u0436\u043D\u043E \u0431\u044B\u043B\u043E \u0441\u0434\u0430\u0432\u0430\u0442\u044C \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0443. \u0418 \u0442\u043E\u0433\u0434\u0430 \u0411\u0430\u0440\u0431\u0430\u0440\u0430 \u043F\u0440\u0438\u0434\u0443\u043C\u0430\u043B\u0430 \u0441\u0432\u043E\u0439
              \u043F\u043E\u0434\u0445\u043E\u0434 \u043A \u0442\u043E\u0447\u043D\u044B\u043C \u043D\u0430\u0443\u043A\u0430\u043C. \u041E\u043A\u0430\u0437\u0430\u043B\u043E\u0441\u044C, \u0435\u0441\u043B\u0438 \u0432\u0430\u043C \u0447\u0442\u043E-\u0442\u043E \xAB\u043F\u043B\u043E\u0445\u043E \u0434\u0430\u0451\u0442\u0441\u044F\xBB, \u0432\u0430\u0448\u0438 \u0434\u043E\u0431\u044B\u0442\u044B\u0435 \u0442\u0440\u0443\u0434\u043E\u043C \u0437\u043D\u0430\u043D\u0438\u044F \u0433\u043E\u0440\u0430\u0437\u0434\u043E
              \u0433\u043B\u0443\u0431\u0436\u0435, \u0447\u0435\u043C \u0443 \u0442\u0435\u0445, \u043A\u043E\u043C\u0443 \u0432\u0441\u0451 \u044F\u0441\u043D\u043E \u0441 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0432\u0437\u0433\u043B\u044F\u0434\u0430.
            </p>
          </div>
        </div>
      </section>

      <section class="feynman">
        <h2 class="feynman__title">
          \u041C\u0435\u0442\u043E\u0434 \u0424\u0435\u0439\u043D\u043C\u0430\u043D\u0430
        </h2>
        <p class="feynman__subtitle">
          \u0412\u044B\u0443\u0447\u0438\u0442\u044C \u0438 \u043D\u0435 \u0437\u0430\u0431\u044B\u0442\u044C
        </p>
        <a href="#" class="feynman__link">
          \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 &rarr;
        </a>
        <!--\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E \u043F\u043E \u0431\u0440\u0438\u0444\u0443 \u0437\u0430\u0432\u0435\u0441\u0442\u0438 img.feynman__image. \u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0443 \u0432 "\u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435" \u043E \u0442\u043E\u043C, \u043A\u0430\u043A\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u043D\u044B\u0435, \u0430 \u043A\u0430\u043A\u0438\u0435 - \u0434\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0435-->
      </section>

      <section class="digits">
        <h2 class="section-title">
          \u0426\u0438\u0444\u0440\u044B \u0438 \u0444\u0430\u043A\u0442\u044B
        </h2>
        <p class="section-subtitle">
          \u041F\u0440\u043E \u0443\u0447\u0435\u0431\u0443 \u0438 \u043C\u043E\u0437\u0433
        </p>
        <!--\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0434\u043B\u044F section-subtitle-->
        <ul class="table">
          <!--\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F table \u0447\u0435\u0440\u0435\u0437 div \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u0430, \u043D\u043E \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0441\u043E\u0432\u0435\u0442\u043E\u0432\u0430\u0442\u044C ul-->
          <li class="table__cell">
            <!--\u0427\u0442\u043E\u0431\u044B \u043E\u0442\u0441\u0442\u0443\u043F\u044B \u043D\u0435 \u0441\u0442\u0430\u043A\u0430\u043B\u0438\u0442\u044C - \u0432 table__cell \u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0444\u043B\u0435\u043A\u0441. -->
            <h3 class="table__heading">
              86 \u043C\u0438\u043B\u043B\u0438\u0430\u0440\u0434\u043E\u0432
            </h3>
            <p class="table__text">
              \u0427\u0438\u0441\u043B\u043E \u043D\u0435\u0439\u0440\u043E\u043D\u043E\u0432 \u0432 \u043C\u043E\u0437\u0433\u0435 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430
            </p>
            <!--\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A.-->
          </li>
          <li class="table__cell">
            <h3 class="table__heading">
              2.1 \u043C\u0438\u043B\u043B\u0438\u0430\u0440\u0434\u0430
            </h3>
            <p class="table__text">
              \u0427\u0438\u0441\u043B\u043E \u043D\u0443\u0436\u0434\u0430\u044E\u0449\u0438\u0445\u0441\u044F \u0432 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0438 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438
            </p>
            <p class="table__text">
              \u0412\u0441\u0435\u043C\u0438\u0440\u043D\u044B\u0439 \u0411\u0430\u043D\u043A, 2017
            </p>
          </li>
          <li class="table__cell">
            <h3 class="table__heading">
              1000 \u0442\u0435\u0440\u0430\u0431\u0430\u0439\u0442
            </h3>
            <p class="table__text">
              \u041E\u0431\u044A\u0451\u043C \u043F\u0430\u043C\u044F\u0442\u0438 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430
            </p>
          </li>
          <li class="table__cell">
            <h3 class="table__heading">
              500 \u0442\u0440\u0438\u043B\u043B\u0438\u043E\u043D\u043E\u0432
            </h3>
            <p class="table__text">
              \u0427\u0438\u0441\u043B\u043E \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0437\u0430 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u043D\u0435\u0440\u0432\u043D\u044B\u0445 \u0441\u0438\u043D\u0430\u043F\u0441\u043E\u0432 \u0443 \u0432\u0437\u0440\u043E\u0441\u043B\u043E\u0433\u043E \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430
            </p>
          </li>
          <li class="table__cell">
            <h3 class="table__heading">
              420 \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u043E\u0432
            </h3>
            <p class="table__text">
              \u0427\u0438\u0441\u043B\u043E \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0445 \u043B\u044E\u0434\u0435\u0439 \u043C\u043E\u043B\u043E\u0436\u0435 25 \u043B\u0435\u0442, \u043D\u0435 \u0438\u043C\u0435\u044E\u0449\u0438\u0445 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u043B\u044F \u0442\u0440\u0443\u0434\u043E\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430
            </p>
            <p class="table__text">
              \u0412\u0441\u0435\u043C\u0438\u0440\u043D\u044B\u0439 \u0411\u0430\u043D\u043A, 2017
            </p>
          </li>
          <li class="table__cell">
            <h3 class="table__heading">
              17\u201320 \u043B\u0435\u0442
            </h3>
            <p class="table__text">
              \u041F\u0438\u043A \u043E\u0431\u0443\u0447\u0430\u0435\u043C\u043E\u0441\u0442\u0438
            </p>
          </li>
          <li class="table__cell">
            <h3 class="table__heading">
              1885 \u0433\u043E\u0434
            </h3>
            <p class="table__text">
              \u041E\u0442\u043A\u0440\u044B\u0442\u0438\u0435 \u043A\u0440\u0438\u0432\u043E\u0439 \u0437\u0430\u0431\u044B\u0432\u0430\u043D\u0438\u044F
            </p>
          </li>
          <li class="table__cell">
            <h3 class="table__heading">
              1889 \u0433\u043E\u0434
            </h3>
            <p class="table__text">
              \u041E\u0442\u043A\u0440\u044B\u0442\u0438\u0435 \u0443\u0441\u043B\u043E\u0432\u043D\u043E\u0433\u043E \u0440\u0435\u0444\u043B\u0435\u043A\u0441\u0430
            </p>
          </li>
        </ul>
      </section>

      <section class="khan">
        <div class="khan__container">
          <p class="khan__author">
            \u0421\u0430\u043B\u043C\u0430\u043D \u0425\u0430\u043D
          </p>
          <h2 class="khan__title">
            \u0412\u0435\u0441\u044C \u043C\u0438\u0440 \u2013 \u0448\u043A\u043E\u043B\u0430
          </h2>
          <blockquote class="khan__quote">
            \u0421\u0442\u0440\u0430\u0441\u0442\u044C \u0438 \u043D\u043E\u0432\u0430\u0442\u043E\u0440\u0441\u0442\u0432\u043E \u0421\u0430\u043B\u0430 \u0425\u0430\u043D\u0430 \u043C\u0435\u043D\u044F\u044E\u0442 \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u043E\u0432 \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u043E\u0432 \u043F\u043E \u0432\u0441\u0435\u043C\u0443 \u043C\u0438\u0440\u0443. \u041A\u043D\u0438\u0433\u0443 \xAB\u0412\u0435\u0441\u044C \u043C\u0438\u0440 \u2014
            \u0448\u043A\u043E\u043B\u0430\xBB \u043D\u0443\u0436\u043D\u043E \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0432\u0441\u0435\u043C, \u043A\u0442\u043E \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u2014 \u0442\u0430\u043A \u0443\u0447\u0430\u0449\u0438\u0435\u0441\u044F \u043F\u043E\u0432\u0441\u044E\u0434\u0443 \u0441\u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043D\u0430\u0432\u044B\u043A\u0438 \u0438
            \u0437\u043D\u0430\u043D\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u0438\u043D\u043E\u0441\u044F\u0442 \u0443\u0441\u043F\u0435\u0445 \u0432 \u0448\u043A\u043E\u043B\u0435, \u043A\u0430\u0440\u044C\u0435\u0440\u0435 \u0438 \u0436\u0438\u0437\u043D\u0438.
          </blockquote>
          <h3 class="khan__quote-author">
            \u0414\u0436\u043E\u0440\u0434\u0436 \u041B\u0443\u043A\u0430\u0441
          </h3>
          <!-- address \u0442\u0443\u0442 \u043D\u0435 \u0441\u043E\u0432\u0441\u0435\u043C \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u043C. \u0421\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043E\u043D \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0441\u044F \u043A \u0434\u0440\u0443\u0433\u0438\u043C \u0441\u0443\u0449\u043D\u043E\u0441\u0442\u044F\u043C. -->
          <p class="khan__quote-author-subline">
            \u041A\u0438\u043D\u043E\u0440\u0435\u0436\u0438\u0441\u0441\u0435\u0440, \u043F\u0440\u043E\u0434\u044E\u0441\u0435\u0440
          </p>
          <div class="khan__book-container">
            <img class="khan__book-pic" src="./images/khan-book.jpg" alt="\u041E\u0431\u043B\u043E\u0436\u043A\u0430 \u043A\u043D\u0438\u0433\u0438 \u0421\u0430\u043B\u043C\u0430\u043D \u0425\u0430\u043D">
            <a href="#" class="khan__buy-link" target="_blank" rel="noopener noreferrer">
              \u041A\u0443\u043F\u0438\u0442\u044C \u043A\u043D\u0438\u0433\u0443 &rarr;
            </a>
          </div>
        </div>
      </section>

      <section class="kaufman">
        <h2 class="section-title section-title_theme_dark">
          \u041F\u0440\u0438\u043D\u0446\u0438\u043F\u044B \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F
        </h2>
        <p class="section-subtitle section-subtitle_theme_dark">
          \u043E\u0442 \u0414\u0436\u043E\u0448\u0430 \u041A\u0430\u0443\u0444\u043C\u0430\u043D\u0430
        </p>
        <ul class="table table_theme_dark">
          <!--
          \u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u0430\u044F \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0434\u043B\u044F \u0431\u043B\u043E\u043A\u0430 \u0441 \u043C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u043E\u043C _theme_dark - \u0443\u043F\u043E\u0440\u044F\u0434\u043E\u0447\u0435\u043D\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A <ol>.
          \u041E\u0431 \u044D\u0442\u043E\u043C \u043C\u043E\u0436\u043D\u043E \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430\u043C \u043F\u043E\u0441\u043B\u0435 \u0441\u0434\u0430\u0447\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B.

          \u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0447\u0438\u0441\u0435\u043B \u0443\u0431\u0440\u0430\u0442\u044C \u0447\u0435\u0440\u0435\u0437 lst: none;

          \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C counter-reset \u0443 table_theme_dark
          \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C counter-increment \u0443 table__cell_theme_dark
          \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u0441\u0435\u0432\u0434\u043E\u044D\u043B\u0435\u043C\u0435\u043D\u0442 table__cell_theme_dark::before \u0441\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C content: counter
        -->
          <!--\u0420\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F table \u0447\u0435\u0440\u0435\u0437 div \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u0430, \u043D\u043E \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0441\u043E\u0432\u0435\u0442\u043E\u0432\u0430\u0442\u044C ul-->
          <li class="table__cell table__cell_theme_dark">
            <!--\u0427\u0442\u043E\u0431\u044B \u043E\u0442\u0441\u0442\u0443\u043F\u044B \u043D\u0435 \u0441\u0442\u0430\u043A\u0430\u043B\u0438\u0442\u044C - \u0432 table__cell \u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0444\u043B\u0435\u043A\u0441. -->
            <h3 class="table__heading table__heading_theme_dark">
              1
            </h3>
            <p class="table__text table__text_theme_dark">
              \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u0438\u0432\u043B\u0435\u043A\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442.
            </p>
            <!--\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A.-->
          </li>
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">
              2
            </h3>
            <p class="table__text table__text_theme_dark">
              \u0421\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u044C\u0442\u0435\u0441\u044C \u043D\u0430 \u043A\u0430\u043A\u043E\u043C-\u0442\u043E \u043E\u0434\u043D\u043E\u043C \u043D\u0430\u0432\u044B\u043A\u0435.
            </p>
          </li>
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">
              3
            </h3>
            <p class="table__text table__text_theme_dark">
              \u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u0435 \u0446\u0435\u043B\u0435\u0432\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430.
            </p>
          </li>
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">
              4
            </h3>
            <p class="table__text table__text_theme_dark">
              \u0420\u0430\u0437\u0431\u0435\u0439\u0442\u0435 \u043D\u0430\u0432\u044B\u043A \u043D\u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B.
            </p>
          </li>
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">
              5
            </h3>
            <p class="table__text table__text_theme_dark">
              \u041F\u0440\u0438\u0433\u043E\u0442\u043E\u0432\u044C\u0442\u0435 \u0432\u0441\u0451 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0435 \u0434\u043B\u044F \u0437\u0430\u043D\u044F\u0442\u0438\u0439.
            </p>
          </li>
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">
              6
            </h3>
            <p class="table__text table__text_theme_dark">
              \u0423\u0441\u0442\u0440\u0430\u043D\u0438\u0442\u0435 \u043F\u0440\u0435\u043F\u044F\u0442\u0441\u0442\u0432\u0438\u044F \u0434\u043B\u044F \u0437\u0430\u043D\u044F\u0442\u0438\u0439.
            </p>
          </li>
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">
              7
            </h3>
            <p class="table__text table__text_theme_dark">
              \u0412\u044B\u0434\u0435\u043B\u0438\u0442\u0435 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0434\u043B\u044F \u0437\u0430\u043D\u044F\u0442\u0438\u0439.
            </p>
          </li>
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">
              8
            </h3>
            <p class="table__text table__text_theme_dark">
              \u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0431\u044B\u0441\u0442\u0440\u044B\u0435 \u043F\u0435\u0442\u043B\u0438 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438.
            </p>
          </li>
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">
              9
            </h3>
            <p class="table__text table__text_theme_dark">
              \u0417\u0430\u043D\u0438\u043C\u0430\u0439\u0442\u0435\u0441\u044C \u043F\u043E \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u044E, \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u043C\u0438 \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u044B\u043C\u0438 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u0430\u043C\u0438.
            </p>
          </li>
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">
              10
            </h3>
            <p class="table__text table__text_theme_dark">
              \u0423\u0434\u0435\u043B\u044F\u0439\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u0438 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438.
            </p>
          </li>
        </ul>
        <div class="kaufman__triangle rotation"></div>
        <!-- \u0422\u043E\u043B\u044C\u043A\u043E \u0444\u043E\u043D\u043E\u0432\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435. \u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u043A \u043F\u0441\u0435\u0432\u0434\u043E\u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0443 \u0431\u043B\u043E\u043A\u0430 kaufman -->
      </section>

      <section class="resources">
        <h2 class="section-title">
          \u041F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044B
        </h2>
        <p class="section-subtitle">
          \u0411\u043E\u043B\u044C\u0448\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u043E \u0442\u0435\u0445\u043D\u0438\u043A\u0430\u0445 \u0438 \u043B\u0430\u0439\u0444\u0445\u0430\u043A\u0430\u0445 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F
        </p>
        <ul class="resources__logo-zone">
          <li>
            <a href="https://arzamas.academy/" target="_blank" rel="noopener noreferrer">
              <img src="./images/logo/resources-arzamas.svg" alt="\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u043F\u043E\u0440\u0442\u0430\u043B\u0430 \u0410\u0440\u0437\u0430\u043C\u0430\u0441" class="resources__logo">
            </a>
          </li>
          <li>
            <a href="https://nplus1.ru/" target="_blank" rel="noopener noreferrer">
              <img src="./images/logo/resources-n1.svg" alt="\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u043F\u043E\u0440\u0442\u0430\u043B\u0430 N+1" class="resources__logo">
            </a>
          </li>
          <li>
            <a href="https://strelka.com/" target="_blank" rel="noopener noreferrer">
              <img src="./images/logo/resources-strelka.svg" alt="\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u043F\u043E\u0440\u0442\u0430\u043B\u0430 \u0421\u0442\u0440\u0435\u043B\u043A\u0430" class="resources__logo">
            </a>
          </li>
          <li>
            <a href="https://polka.academy/" target="_blank" rel="noopener noreferrer">
              <img src="./images/logo/resources-polka.svg" alt="\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u043F\u043E\u0440\u0442\u0430\u043B\u0430 \u041F\u043E\u043B\u043A\u0430" class="resources__logo">
            </a>
          </li>
        </ul>
      </section>

    </main>

    <footer class="footer">
      <div class="footer__columns">
        <!-- \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u0430\u044F \u043E\u0431\u0435\u0440\u0442\u043A\u0430 \u0434\u043B\u044F \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u043A\u043E\u043B\u043E\u043D\u043E\u043A -->
        <div class="footer__column footer__column_content_copyright">
          <div class="logo logo_place_footer"></div>
          <p class="footer__author">
            &copy; 2020
          </p>
        </div>
        <div class="footer__column footer__column_content_info">
          <h4 class="footer__column-heading">
            \u041E \u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0443\u043C\u0435
          </h4>
          <nav class="footer__column-links">
            <ul class="footer__list">
              <!-- \u041E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043B\u0430\u0441\u0441\u0430 -->
              <li>
                <a href="#" class="footer__column-link">
                  \u0413\u043B\u0430\u0432\u043D\u0430\u044F
                </a>
              </li>
              <li>
                <a href="#" class="footer__column-link">
                  \u041A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u044F
                </a>
              </li>
              <li>
                <a href="#" class="footer__column-link">
                  \u041D\u0430\u0441\u0442\u0430\u0432\u043D\u0438\u043A\u0438
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="footer__column footer__column_content_social">
          <h4 class="footer__column-heading">
            \u0421\u043E\u0446\u0441\u0435\u0442\u0438
          </h4>
          <nav class="footer__column-links">
            <ul class="footer__list">
              <!-- \u041E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043B\u0430\u0441\u0441\u0430 -->
              <li>
                <a href="#" class="footer__column-link">
                  <img src="./images/facebook_color_white.svg" alt="\u0418\u043A\u043E\u043D\u043A\u0430 Facebook" class="footer__social-icon">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" class="footer__column-link">
                  <img src="./images/vk_color_white.svg" alt="\u0418\u043A\u043E\u043D\u043A\u0430 \u0412\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0435" class="footer__social-icon">
                  \u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435
                </a>
              </li>
              <li>
                <a href="#" class="footer__column-link">
                  <img src="./images/instagram_color_white.svg" alt="\u0418\u043A\u043E\u043D\u043A\u0430 Instagram" class="footer__social-icon">
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  </div>
</body>

</html>
`,C0=`
.page {
    min-width: 1100px;
    /* \u043C\u044B \u0435\u0449\u0451 \u043D\u0435 \u0443\u043C\u0435\u0435\u043C \u0434\u0435\u043B\u0430\u0442\u044C \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E \u0441\u0430\u0439\u0442\u0430, */
    /* \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0432\u044B\u0448\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0448\u0438\u0440\u0438\u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B */
    max-width: 1600px;
    /* \u0432\u044B\u0448\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0438 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435 \u043F\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0448\u0438\u0440\u0438\u043D\u0435 */
    margin: 0 auto;
    /* \u0432\u044B\u0448\u0435 \u0434\u043B\u044F \u044D\u043A\u0440\u0430\u043D\u043E\u0432 \u0431\u043E\u043B\u044C\u0448\u0435 1600px \u043E\u0442\u0446\u0435\u043D\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043B\u0438 \u0432\u0435\u0441\u044C \u043A\u043E\u043D\u0442\u0435\u043D\u0442 */
    font-family: 'Helvetica Neue', Arial, sans-serif;
}

.logo {
    width: 183px;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    /* \u0412 \u0431\u043B\u043E\u043A \u0432\u044B\u043D\u043E\u0441\u0438\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0431\u0449\u0438\u0435 \u043E\u043F\u0438\u0441\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0441\u0442\u0438\u043B\u0438, \u043D\u0435 \u0432\u043B\u0438\u044F\u044E\u0449\u0438\u0435 \u043D\u0430 \u0432\u043D\u0435\u0448\u043D\u044E\u044E \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u044E \u0438 \u043F\u043E\u0437\u0438\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 */
}

.logo_place_header {
    height: 32px;
    background-image: url('../../../images/logo_place_header.svg');
    position: absolute;
    top: 30px;
    left: 64px;
    /* \u0418\u0437\u043C\u0435\u043D\u044F\u044E\u0449\u0438\u0435\u0441\u044F \u0441\u0442\u0438\u043B\u0438 \u0438 \u043F\u043E\u0437\u0438\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 */
}

.logo_place_footer {
    height: 35px;
    /* \u0415\u0441\u043B\u0438 \u0441\u043B\u0435\u0433\u043A\u0430 \u043E\u0431\u0440\u0435\u0437\u0430\u0435\u0442\u0441\u044F - \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E, \u043D\u0438\u0447\u0435\u0433\u043E \u043A\u0440\u0438\u0442\u0438\u0447\u043D\u043E\u0433\u043E. */
    background-image: url('../../../images/logo_place_footer.svg');
}

@keyframes rotation {
    from {
        -webkit-transform: rotate(-15deg);
        transform: rotate(-15deg);
    }
    to {
        -webkit-transform: rotate(345deg);
        transform: rotate(345deg);
    }
}

.rotation {
    animation: rotation linear infinite 20s;
}

.section-title {
    max-width: 60%;
    font-size: 60px;
    line-height: 1.15;
    text-align: center;
    margin: 0 auto;
    /* \u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435: \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 margin-top 100 \u0434\u043B\u044F \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430, \u0443\u0431\u0440\u0430\u0432 \u0435\u0433\u043E \u0443 \u0441\u0435\u043A\u0446\u0438\u0439, \u0433\u0434\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u0430\u043D\u043D\u044B\u0439 \u0431\u043B\u043E\u043A */
}

.section-title_theme_dark {
    color: white;
    /* "\u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435": \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044C \u0446\u0432\u0435\u0442\u0430 \u0432 \u0435\u0434\u0438\u043D\u043E\u043C \u0444\u043E\u0440\u043C\u0430\u0442\u0435. */
}

.section-subtitle {
    max-width: 60%;
    line-height: 34px;
    font-size: 24px;
    text-align: center;
    margin: 20px auto 0;
    /* \u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E \u043C\u0438\u043A\u0441\u043E\u0432\u0430\u0442\u044C \u043E\u0442 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043E\u0442\u0441\u0442\u0443\u043F\u043E\u0432. \u041A\u0430\u043A "\u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435" */
}

.section-subtitle_theme_dark {
    color: white;
}

.table {
    width: 1100px;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0;
    padding: 0;
}

.table__cell {
    width: 250px;
    margin: 60px 0 0;
}

.table__cell_theme_dark {
    width: 200px;
    color: white;
    margin-right: 0;
    margin-top: 80px;
}

.table__heading {
    font-size: 24px;
    line-height: 1.15;
    margin: 0 0 20px;
    /*
    \u041E\u0442\u0441\u0442\u0443\u043F\u044B \u0441\u0445\u043B\u043E\u043F\u043D\u0443\u0442\u044C\u0441\u044F. \u042D\u0442\u043E "\u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435" - \u0435\u0441\u043B\u0438 \u0442\u0435\u043A\u0441\u0442\u0430 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442, \u0430 \u0431\u0443\u0434\u0435\u0442 \u0434\u0440\u0443\u0433\u043E\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 - \u0443 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430 \u0431\u0443\u0434\u0443\u0442 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u043E\u0442\u0441\u0442\u0443\u043F\u044B, \u0441\u043E\u0437\u0434\u0430\u044E\u0449\u0438\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E
    \u043C\u0435\u0436\u0434\u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438.
     */
}

.table__heading_theme_dark {
    color: white;
}

.table__text {
    line-height: 1.2;
    font-size: 18px;
    margin: 20px 0;
}

.table__text:last-of-type {
    margin-bottom: 0;
}

.table__text_theme_dark {
    color: white;
}

.header {
    height: 100vh;
    min-height: 600px;
    max-height: 756px;
    /* \u0432\u044B\u0448\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0438 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0441\u0435\u043A\u0446\u0438\u0438 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #f2f2f2;
    position: relative;
    /* \u0420\u0435\u043B\u0430\u0442\u0438\u0432\u043D\u043E\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0438\u043C\u0435\u043D\u043D\u043E \u0443 \u0448\u0430\u043F\u043A\u0438 */
    z-index: 1;
    /* \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C z-index \u043D\u0430 \u0448\u0430\u043F\u043A\u0435 \u0441\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\u043C 1, \u0447\u0442\u043E\u0431\u044B \u043A\u0432\u0430\u0434\u0440\u0430\u0442 \u043D\u0435 \u043F\u0430\u0434\u0430\u043B \u043F\u043E\u0434 \u0444\u043E\u043D. */
    overflow: hidden;
    /* \u0434\u043B\u044F \u0431\u043B\u043E\u043A\u0430 rotation */
}

.header__link {
    color: #2f80ed;
    text-decoration: none;
    transition: opacity 1s ease-out;
    /* \u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C transition */
}

.header__link:hover {
    opacity: 0.3;
}

.header__main-illustration {
    width: 765px;
    height: 608px;
    object-fit: cover;
    /*
    \u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435: \u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043C\u043E\u0433\u0443\u0442 \u0438\u0441\u043A\u0430\u0436\u0430\u0442\u044C\u0441\u044F \u0432 \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u044F\u0445. \u041D\u0430 \u0432\u0441\u044F\u043A\u0438\u0439 \u0441\u043B\u0443\u0447\u0430\u0439, \u0445\u043E\u0440\u043E\u0448\u043E \u0431\u044B \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044C \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0444\u043E\u043D\u043E\u0432\u043E\u0433\u043E \u0438\u043B\u0438 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u043D\u043E\u0433\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F.
    \u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 object-fit;
    */
    position: absolute;
    right: 0;
    bottom: 0;
    /* \u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435: \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u044F \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 0 \u0434\u043B\u044F margin/padding/top/left \u043D\u0435 \u0441\u0442\u043E\u0438\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0435\u0434\u0438\u043D\u0438\u0446\u0443 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F */
}

.header__square-pic {
    height: 568px;
    width: 568px;
    background: #2f80ed;
    position: absolute;
    top: 64px;
    right: 0;
    z-index: -1;
    /* \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u043F\u043E\u043D\u0438\u0436\u0435\u043D\u0438\u0435 z-index \u0437\u0434\u0435\u0441\u044C \u0434\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B  */
}

.header__subtitle {
    width: 388px;
    /* \u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435: \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E max-width \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 */
    line-height: 25px;
    font-size: 18px;
    position: absolute;
    bottom: 30px;
    left: 64px;
}

.header__title {
    width: 730px;
    /* \u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435: \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E max-width \u0434\u043B\u044F \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 */
    font-size: 102px;
    line-height: 96px;
    margin-left: 64px;
}

.description {
    margin: 100px 0;
    /*
    \u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E, \u0435\u0441\u043B\u0438 \u0441\u0442\u0443\u0434\u0435\u043D\u0442 \u0437\u0430\u043C\u0438\u043A\u0441\u0443\u0435\u0442 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E two-columns \u043E\u0442 description \u0438 \u0442\u0430\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 margin. \u041D\u0430 \u0434\u0430\u043D\u043D\u043E\u043C \u044D\u0442\u0430\u043F\u0435 \u043D\u0435 \u043E\u0441\u043E\u0431\u043E \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0438\u0430\u043B\u044C\u043D\u043E, \u043E\u0442\u043A\u0443\u0434\u0430 \u0434\u0430\u044E\u0442\u0441\u044F \u043E\u0442\u0441\u0442\u0443\u043F\u044B.
    \u041D\u043E \u043A\u0430\u043A "\u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435" - \u043F\u0438\u0441\u0430\u0442\u044C \u043C\u043E\u0436\u043D\u043E
    */
}

.digits {
    max-width: 1100px;
    /*
    \u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0437\u0434\u0435\u0441\u044C flex \u0437\u0430\u043C\u0435\u0441\u0442\u043E margin: auto. \u042D\u0442\u043E \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u043B\u0438\u0448\u043D\u0438\u043C, \u043D\u043E \u0432\u044B\u0433\u043B\u044F\u0434\u0438\u0442 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E
    \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u0431\u043B\u043E\u043A\u043E\u043C kaufman. \u041D\u0438 \u043E\u0434\u0438\u043D \u0438\u0437 \u043F\u043E\u0434\u0445\u043E\u0434\u043E\u0432 \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0448\u0438\u0431\u043E\u0447\u043D\u044B\u0439.
    */
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 100px auto;
}

.feynman {
    min-height: 790px;
    /* \u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435: \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C flex-column \u0441 \u0446\u0435\u043D\u0442\u0440\u043E\u0432\u043A\u043E\u0439. */
    /*
  \u041D\u0435 \u0445\u043E\u0440\u043E\u0448\u043E \u0434\u0435\u043B\u0430\u0442\u044C \u0432\u044B\u0441\u043E\u0442\u0443 \u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439. \u0424\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043C\u043E\u0433\u0443\u0442 \u043F\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043A \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u0439 \u0441 \u0432\u0435\u0440\u0441\u0442\u043A\u043E\u0439 \u043F\u0440\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0438
  \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430
  */
    background: #f2f2f2;
    background-image: url('../../images/feynman.png');
    background-repeat: no-repeat;
    background-size: 867px 637px;
    background-position: left bottom;
    /*
  \u041C\u043E\u0436\u043D\u043E \u043F\u043E\u0441\u043E\u0432\u0435\u0442\u043E\u0432\u0430\u0442\u044C shorthand:
  background: no-repeat left bottom url('../images/feynman.png'),
  #F2F2F2;
  background-size: 867px 637px;
  */
    position: relative;
    /* \u0425\u043E\u0440\u043E\u0448\u0438\u0439 \u043F\u043E\u0432\u043E\u0434 \u043F\u043E\u0431\u0438\u0442\u044C \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430, \u0435\u0441\u043B\u0438 \u043E\u043D \u0431\u0443\u0434\u0435\u0442 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u043E \u0432\u0435\u0448\u0430\u0442\u044C bxbb. \u0418\u0437-\u0437\u0430 \u044D\u0442\u043E\u0433\u043E \u0434\u0430\u043D\u043D\u044B\u0439 \u0431\u043B\u043E\u043A \u0441\u043B\u043E\u043C\u0430\u0435\u0442\u0441\u044F. */
    /*\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C padding, \u0447\u0442\u043E\u0431\u044B \u043D\u0435 \u0442\u0435\u0440\u044F\u0442\u044C \u0446\u0432\u0435\u0442 \u0444\u043E\u043D\u0430*/
}

.feynman__link {
    line-height: 51px;
    font-size: 36px;
    color: #000;
    text-decoration: none;
    position: absolute;
    top: 50%;
    right: 48px;
    transition: opacity 1s ease-out;
    /* \u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C transition */
}

.feynman__link:hover {
    opacity: 0.3;
}

.feynman__title {
    max-width: 648px;
    font-size: 120px;
    line-height: 1.15;
    text-align: center;
    margin: 0 auto;
}

.feynman__subtitle {
    /* \u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u0442\u044C \u0448\u0438\u0440\u0438\u043D\u0443. */
    text-align: center;
    font-size: 36px;
    line-height: 51px;
    margin: 70px 0;
}

.footer {
    min-height: 350px;
    display: flex;
    /* \u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0437\u0434\u0435\u0441\u044C \u0444\u043B\u0435\u043A\u0441 \u0434\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0441\u043F\u0440\u0430\u0432\u0438\u0442\u044C footer__columns. \u0410\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u0430 height: 100% */
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    /* \u0418\u0437\u043C\u0435\u043D\u044F\u0435\u043C box-sizing, \u0432\u0441\u0435 \u0432\u043B\u0435\u0437\u043B\u043E \u0432 min-height, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u0438 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 \u043E\u0442\u0441\u0442\u0443\u043F\u044B */
    background: #1f1f1f;
    padding: 60px 0 40px;
}

.footer__author {
    color: white;
    /* \u0426\u0432\u0435\u0442\u0430\u043C\u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C \u0438\u043C\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E, \u0431\u0435\u0437 \u043D\u0430\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F. \u041D\u043E \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E \u043D\u0430\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u044C. \u042D\u0442\u043E \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043E\u0448\u0438\u0431\u043A\u043E\u0439 */
    font-size: 18px;
    line-height: 25px;
    margin: 18px 0;
}

.footer__column {
    display: flex;
    flex-direction: column;
}

.footer__column_content_copyright {
    justify-content: space-between;
    flex-basis: 711px;
}

.footer__column-heading {
    color: white;
    font-size: 18px;
    line-height: 30px;

    margin: 0;
}

.footer__column-link {
    color: white;
    font-size: 18px;
    line-height: 30px;
    /* \u0421\u043E\u0437\u0434\u0430\u0435\u0442 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0439 \u043E\u0442\u0441\u0442\u0443\u043F \u043C\u0435\u0436\u0434\u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438. \u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0442\u0441\u0442\u0443\u043F\u0430 - "\u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435". */
    text-decoration: none;
    transition: opacity 1s ease-out;
    /* \u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C transition */
}

.footer__column-link:hover {
    opacity: 0.3;
}

.footer__column-links {
    margin: 20px 0 16px;
}

.footer__columns {
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
}

.footer__list {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.footer__social-icon {
    margin-right: 10px;
}

.kaufman {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #1f1f1f;
    position: relative;
    overflow: hidden;
    padding: 90px 0;
    z-index: 1;
}

.kaufman__triangle {
    width: 877px;
    height: 877px;
    background: no-repeat url('../../../images/kaufman-triangle.svg');
    background-size: cover;
    position: absolute;
    top: 0;
    right: -210px;
    z-index: -1;
}

.two-columns {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 auto;
}

.two-columns__brief {
    max-width: 175px;
    font-size: 18px;
    line-height: 1.2;
    font-weight: normal;
    color: #2f80ed;
    margin: 0;
}

.two-columns__main-text {
    min-width: 784px;
    max-width: 80%;
    line-height: 34px;
    font-size: 24px;
}

.two-columns__paragraph:first-child {
    margin-top: 0;
}

.two-columns__paragraph:last-child {
    margin-bottom: 0;
}

.two-columns__span-accent {
    /* \u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435: \u0432 \u0434\u0430\u043D\u043D\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u043C\u043E\u0436\u043D\u043E \u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u0448\u0440\u0438\u0444\u0442\u0430 \u0438 \u0438\u043D\u0442\u0435\u0440\u043B\u0438\u043D\u044C\u044F\u0436, \u043E\u043D\u0438 \u043D\u0430\u0441\u043B\u0435\u0434\u0443\u044E\u0442\u0441\u044F. \u041D\u043E \u0432 \u0446\u0435\u043B\u043E\u043C, \u0442\u0430\u043A \u0434\u0435\u043B\u0430\u0442\u044C - \u043D\u0435 \u043B\u0443\u0447\u0448\u0430\u044F \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430 \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0411\u042D\u041C */
    font-weight: bold;
}

.techniques {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
}

.cards {
    width: 920px;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
}

.cards__item {
    width: 240px;
    text-align: center;
    /* \u041C\u043E\u0436\u043D\u043E \u0442\u043E\u0447\u0435\u0447\u043D\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044C \u0443 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px 100px 0 0;
}

.cards__item:nth-child(3n + 3) {
    margin-right: 0;
}

.cards__image {
    width: 160px;
    height: 160px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
}

.cards__title {
    line-height: 1.15;
    font-size: 24px;
    margin: 43px 0 16px;
}

.cards__description {
    line-height: 23px;
    font-size: 18px;
    margin: 0;
}

.video {
    margin: 100px 0 -50px;
    /*
    \u042D\u0442\u043E \u0441\u043F\u043E\u0440\u043D\u0430\u044F \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430. \u0412\u043E-\u043F\u0435\u0440\u0432\u044B\u0445, \u043C\u044B, \u043A\u0430\u043A \u043E\u0431\u044B\u0447\u043D\u043E, \u043F\u0438\u0448\u0435\u043C \u043C\u0430\u0440\u0434\u0436\u0438\u043D\u044B \u0431\u043B\u043E\u043A\u0443.
    \u0412\u043E-\u0432\u0442\u043E\u0440\u044B\u0445, \u043E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043C\u0430\u0440\u0434\u0436\u0438\u043D \u0443 \u0442\u0430\u043A\u043E\u0433\u043E \u0431\u043B\u043E\u043A\u0430 \u043C\u043E\u0436\u0435\u0442 "\u0441\u043E\u0436\u0440\u0430\u0442\u044C" \u0447\u0430\u0441\u0442\u044C \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u043F\u0440\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0438 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F.
    \u041A\u043E\u043D\u0435\u0447\u043D\u043E, \u0433\u0434\u0435-\u0442\u043E \u0432 \u0434\u0440\u0443\u0433\u043E\u043C \u043C\u0438\u0440\u0435 \u0445\u043E\u0440\u043E\u0448\u043E \u0431\u044B \u043F\u043E\u0434\u043D\u044F\u0442\u044C \u043E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u043C\u0430\u0440\u0434\u0436\u0438\u043D\u043E\u043C "\u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u044B\u0439" \u0431\u043B\u043E\u043A oakley \u043F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u043C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0430.
    */
}

.video__iframe {
    width: 515px;
    height: 316px;
    border: none;
    position: relative;
    z-index: 1;
    margin-right: 20px;
    /*
    \u0415\u0441\u043B\u0438 \u0441\u0442\u0443\u0434\u0435\u043D\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 top, \u043A\u0430\u043A \u043C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0435\u0433\u043E \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0430 \u043F\u043E\u043B\u0443\u0447\u0438\u0432\u0448\u0438\u0435\u0441\u044F \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u0431\u043B\u043E\u043A\u0430 li.
    */
}

.video__iframe:nth-child(2n + 2) {
    margin-right: 0;
}

.video__iframes {
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 50px 0 0;
    padding: 0;
    /*
    \u041F\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044C \u043C\u043E\u0436\u043D\u043E \u0438 \u044D\u0442\u043E\u0442 \u0431\u043B\u043E\u043A
    */
}

.khan {
    background: #f2f2f2;
    padding-top: 105px;
}

.khan__author {
    line-height: 42px;
    font-size: 30px;
    margin: 0;
}

.khan__book-container {
    display: flex;
    margin: 68px 0 0;
}

.khan__buy-link {
    line-height: 42px;
    font-size: 30px;
    text-decoration: none;
    color: #2f80ed;
    align-self: flex-start;
    /* \u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u043D\u0430 \u0432\u0435\u0441\u044C \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440, \u0442.\u043A. \u043C\u043E\u0436\u0435\u0442 \u043F\u0435\u0440\u0435\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0435 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u043D\u044B\u0435 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 */
    transition: opacity 1s ease-out;
    /* \u041C\u043E\u0436\u043D\u043E \u043B\u0443\u0447\u0448\u0435 \u0434\u043B\u044F transition \u0441 \u0434\u043E\u043A\u043E\u0439 */
}

.khan__buy-link:hover {
    opacity: 0.3;
}

.khan__book-pic {
    width: 620px;
    height: 608px;
    object-fit: cover;
    object-position: top;
    /* \u0421\u043E\u0432\u0435\u0442\u0443\u0439\u0442\u0435 \u0442\u0430\u043A\u0443\u044E \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044E \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 object-fit&-position. \u0421\u0441\u044B\u043B\u0430\u0439\u0442\u0435\u0441\u044C \u043D\u0430 \u0434\u043E\u043A\u0443.
       \u0422.\u043A. \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u044B \u043D\u0435 \u0437\u043D\u0430\u044E\u0442 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430
     */
    margin-right: 48px;
}

.khan__container {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}

.khan__quote {
    width: 790px;
    font-size: 24px;
    line-height: 34px;
    margin: 26px 0;
}

.khan__quote-author {
    font-size: 24px;
    line-height: 1.15;
    margin: 10px 0;
}

.khan__quote-author-subline {
    line-height: 1.15;
    font-size: 24px;
    margin: 0;
}

.khan__title {
    line-height: 1.15;
    font-size: 60px;
    margin: 0 0 24px;
}

.oakley {
    background-color: #f2f2f2;
    padding: 160px 0 80px;
}

.resources {
    margin-top: 100px;
}

.resources__logo-zone {
    max-width: 1100px;
    list-style-type: none;
    display: flex;
    margin: 80px auto 217px;
}

.resources__logo {
    padding: 0;
    width: 270px;
    height: 38px;
    object-fit: contain;
    transition: opacity 0.5s ease-out, transform 0.5s ease-in-out;
}

.resources__logo:hover {
    opacity: 0.3;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
}

`,f0=V(g0,C0,U);function B0(){const[u,e]=l.exports.useState(!1);l.exports.useEffect(()=>{O4().then(()=>{e(!0)})});const[t,o]=l.exports.useState(!1);return u?i("div",{className:"App",children:i(w4,{basename:"/work-parser-vite/",children:_(G.Provider,{value:{visibility:t,setVisibility:o},children:[i(I4,{}),i(y4,{children:i(v4,{path:"/",element:_(H,{children:[i(s4,{workKey:$.first,classList:e0,fileList:t0,brief:o0,cssFileMask:"styles/style.css",template:a0,title:"1 \u0440\u0430\u0431\u043E\u0442\u0430"}),i(s4,{workKey:$.second,classList:n0,fileList:c0,brief:D0,cssFileMask:"blocks/",template:f0,title:"2 \u0440\u0430\u0431\u043E\u0442\u0430"})]})})})]})})}):i("div",{children:"\u041F\u0440\u043E\u0433\u0440\u0435\u0432\u0430\u0435\u043C\u0441\u044F"})}S4.render(i(e4.StrictMode,{children:i(B0,{})}),document.getElementById("root"));
