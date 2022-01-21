var Ee=Object.defineProperty,ke=Object.defineProperties;var we=Object.getOwnPropertyDescriptors;var J=Object.getOwnPropertySymbols;var Ce=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var Q=(e,t,o)=>t in e?Ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,R=(e,t)=>{for(var o in t||(t={}))Ce.call(t,o)&&Q(e,o,t[o]);if(J)for(var o of J(t))ye.call(t,o)&&Q(e,o,t[o]);return e},W=(e,t)=>ke(e,we(t));import{R as ee,j as K,r as c,o as Se,h as ve,J as De,p as Ie,B as Oe,a as Ne,b as Fe,c as Re}from"./vendor.b090e38c.js";const Te=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))n(u);new MutationObserver(u=>{for(const i of u)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(u){const i={};return u.integrity&&(i.integrity=u.integrity),u.referrerpolicy&&(i.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?i.credentials="include":u.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(u){if(u.ep)return;u.ep=!0;const i=o(u);fetch(u.href,i)}};Te();const G=ee.createContext({visibility:!1,setVisibility:e=>{}}),s=K.exports.jsx,h=K.exports.jsxs,P=K.exports.Fragment,Ae=()=>{const{visibility:e,setVisibility:t}=c.exports.useContext(G);return h("div",{children:[s("label",{htmlFor:"visibility",children:"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438"}),s("input",{id:"visibility",type:"checkbox",checked:e,onChange:o=>{t(o.target.checked)}})]})};let L;async function ze(){L=await Se("my-db",1,{upgrade(e){e.createObjectStore("images")}})}var M;(function(e){e.images="images"})(M||(M={}));var V;(function(e){e.first="first",e.second="second"})(V||(V={}));const te=(e,t)=>{const[o,n]=c.exports.useState(),[u,i]=c.exports.useState();return c.exports.useEffect(()=>{async function r(){if(!e)return;const a=Object.keys(e.files).filter(m=>e.files[m].dir?!1:m.includes(t)&&m.endsWith(".css")),[p,...l]=await Promise.all([e.files["index.html"].async("text"),...a.map(m=>e.files[m].async("text"))]);n(p),i(l.join(""))}r()},[n,i,e]),{html:o,css:u}},z=(e,t,o)=>`${e}-${t}-${o}`;var x;(function(e){e[e.min=1100]="min",e[e.max=1600]="max"})(x||(x={}));const Be=(e,t,o)=>{const[n,u]=c.exports.useState(!0),[i,r]=c.exports.useState(!1);return c.exports.useEffect(()=>{async function a(){const p=await L.getAllKeys(M.images);r(t.every(l=>p.includes(z(e,l,x.min))&&p.includes(z(e,l,x.max)))),u(!1)}a()},[o,t,e]),{contains:i,loading:n}},Y=c.exports.memo(c.exports.forwardRef(({html:e,onLoad:t,width:o},n)=>s("iframe",{ref:n,style:{width:`${o}px`,minHeight:"100vh",border:"none"},id:"myiframe",srcDoc:e,onLoad:t}))),H=(e=100)=>new Promise((t,o)=>{setTimeout(()=>{t()},e)});async function U(e,t,o){return e?await Promise.all(o.map(async n=>{const u=e.querySelector(`.${n}`),i=await ve(u,{useCORS:!0,scale:1});return{className:n,image:i,targetWidth:t}})):[]}const We=`
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
`,Z=(e="",t="",o="")=>{const n=new DOMParser().parseFromString(e,"text/html"),u=n.createElement("style");return u.innerHTML=`${We} ${t} ${o}`,n.head.appendChild(u),Array.from(n.head.querySelectorAll("link")).forEach(a=>a.remove()),Array.from(n.body.querySelectorAll("iframe")).forEach(a=>{a.src=""}),n.documentElement.outerHTML.replaceAll(/\.{0,2}\/?images/g,"/work-parser-vite/images")},oe=`
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

`,Le=`
* {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

.video__iframe {
  background-color: black;
}

*::-webkit-scrollbar {
  display: none;
}
`,ne=async e=>{const t=await De.loadAsync(e,{createFolders:!0}),o=Object.keys(t.files);if(t.files[o[0]].dir){const n=t.files[o[0]].name;t.files=o.slice(1).reduce((u,i)=>(u[i.replace(n,"")]=t.files[i],u),{})}return t},Me=({classList:e,title:t,workKey:o,onComplete:n,templateFileName:u,cssFileMask:i})=>{const r=c.exports.useRef(null),[a,p]=c.exports.useState(x.min),[l,m]=c.exports.useState(!1),[w,C]=c.exports.useState(null),{html:y,css:d}=te(w,i);return h("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",maxWidth:"300px"},children:[s("h1",{children:t}),s("button",{onClick:()=>{async function S(){var b,B,f,_;const v=await fetch(`/work-parser-vite/templates/${u}.zip`).then(O=>O.blob()),g=await ne(v);C(g),m(!0),p(x.min),await H();const N=await U((B=(b=r.current)==null?void 0:b.contentWindow)==null?void 0:B.document,x.min,e);p(x.max),await H();const I=await U((_=(f=r.current)==null?void 0:f.contentWindow)==null?void 0:_.document,x.max,e);[...N,...I].map(({className:O,image:F,targetWidth:j})=>{L.put("images",F.toDataURL("image/png"),z(o,O,j))}),m(!1),n()}S()},children:"Get images"}),l&&s("div",{children:"\u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435 \u{1F570}"}),l&&s(Y,{ref:r,html:Z(y,d,oe),width:a})]})},He=({onWorkLoad:e})=>s("div",{children:s("input",{type:"file",name:"file",onChange:async o=>{const n=await ne(o.target.files[0]);e(n)}})}),$e=()=>"\u2705",qe=()=>"\u274C",X=e=>e?$e():qe(),D=({title:e,children:t,valid:o,size:n=2,initialCollapsed:u=!0})=>{const{visibility:i}=c.exports.useContext(G),r=`h${n}`,[a,p]=c.exports.useState(u),l=o===void 0?null:X(o);return h("section",{style:{opacity:o?.5:1,display:!i&&o?"none":"block"},children:[h(r,{onClick:()=>{p(m=>!m)},style:{cursor:t?"pointer":"default"},children:[e," ",l]}),!a&&s("div",{children:t})]})},je=Object.keys,se=e=>{const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);if(!t)return"";const{r:o,g:n,b:u}={r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)};return`rgb(${o}, ${n}, ${u})`};let ue=0;const T=(e="id")=>(ue++,`${e}${ue}`),Pe=x.max,Ve=({html:e,css:t,conditions:o})=>{const[n,u]=c.exports.useState([]),[i,r]=c.exports.useState(!1),a=c.exports.useRef(null);c.exports.useEffect(()=>{async function l(){if(await H(1e3),!e||!t||!a.current||i)return;const m=o.map(C=>{var I;const{selector:y,css:d={},count:k}=C,S=(I=a.current)==null?void 0:I.contentWindow,v=S.document.querySelector(y);if(!v)return W(R({},C),{errors:[s("div",{children:"\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"},T())]});const g=[];if(k){const b=S.document.querySelectorAll(y);b.length!==k&&g.push(h("div",{children:["\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 (",b.length,") \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443 (",k,")"]},T()))}const N=S.getComputedStyle(v);return je(d).forEach((b,B)=>{const f=N[b],_=d[b];switch(b){case"top":case"bottom":case"left":case"right":w(f,_)||g.push(h("div",{children:["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 ",s("b",{children:b})," \u0440\u0430\u0432\u043D\u043E\u0435"," ",s("u",{children:f})," \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443 ",s("u",{children:_})]},T()));break;case"lineHeight":const O=_.includes("px")?_:`${parseInt(String(d.fontSize),10)*parseFloat(_)}px`;w(f,O)||g.push(h("div",{children:["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 ",s("b",{children:b})," \u0440\u0430\u0432\u043D\u043E\u0435"," ",s("u",{children:f})," \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443 ",s("u",{children:_})]},T()));break;case"width":if(_.includes("%")){const F=parseInt(_,10)*Pe/100;w(F,f)||g.push(h("div",{children:["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 ",s("b",{children:b})," ","\u0440\u0430\u0432\u043D\u043E\u0435 ",s("u",{children:f})," \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443"," ",s("u",{children:_})," \u0432 \u043F\u0435\u0440\u0435\u0441\u0447\u0451\u0442\u0435 \u0438\u0437 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043E\u0432 ($",F,")"]},T()));return}w(f,_)||g.push(h("div",{children:["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 ",s("b",{children:b})," \u0440\u0430\u0432\u043D\u043E\u0435"," ",s("u",{children:f})," \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443 ",s("u",{children:_})]},T()));return;case"color":case"backgroundColor":se(_)!==f&&g.push(h("div",{children:["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 ",s("b",{children:b})," \u0440\u0430\u0432\u043D\u043E\u0435"," ",s("u",{children:f})," \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443 ",s("u",{children:_})," (",se(_),")"]},T()));return;default:f!==_&&g.push(h("div",{children:["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 ",s("b",{children:b})," \u0440\u0430\u0432\u043D\u043E\u0435"," ",s("u",{children:f})," \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443 ",s("u",{children:_})]},T()))}}),W(R({},C),{errors:g})});u(m),r(!0);function w(C,y){return parseInt(String(C),10)===parseInt(String(y),10)}}l()},[e,t,o,a.current,i]);const p=n.filter(({errors:l})=>!!l.length);return!e||!t?null:h(P,{children:[s(D,{title:"\u0411\u0440\u0438\u0444",valid:!p.length,children:n.map(({errors:l,selector:m,css:w},C)=>h(D,{title:m,valid:!l.length,size:4,initialCollapsed:!1,children:[l,w&&s(D,{title:"\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 css",size:5,valid:!l.length,children:Object.entries(w).map(([y,d],k)=>h("div",{children:[s("b",{children:y}),": ",s("u",{children:d})]},`${m}-${y}-${k}`))})]},m))}),!i&&s(Y,{width:x.max,html:Z(e,t,Le),ref:a})]})},Ue=({html:e})=>{const[t,o]=c.exports.useState([]);return c.exports.useEffect(()=>{async function n(){if(!e)return;const u=new FormData;u.append("out","json"),u.append("content",e);const r=await(await fetch("https://html5.validator.nu/",{method:"POST",body:u})).json();o(r.messages)}n()},[e]),s(D,{title:"\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0442\u043E\u0440\u043E\u043C W3C",valid:!t.length,children:t.map(({message:n,extract:u,lastLine:i})=>h("div",{children:["line ",i,": ",s("b",{children:u}),", ",n]},n))})};var E;(function(e){e.NO_PARENT_BLOCK="NO_PARENT_BLOCK",e.RECURSIVE_ELEMENT="RECURSIVE_ELEMENT",e.ONLY_MODIFIER="ONLY_MODIFIER",e.RECURSIVE_BLOCK="RECURSIVE_BLOCK",e.ELEMENT_OF_ELEMENT="ELEMENT_OF_ELEMENT"})(E||(E={}));const Ke={ru:{[E.ELEMENT_OF_ELEMENT]:"\u041D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",[E.RECURSIVE_BLOCK]:"\u0411\u043B\u043E\u043A \u0432\u043B\u043E\u0436\u0435\u043D \u0432 \u0431\u043B\u043E\u043A \u0441 \u0442\u0430\u043A\u0438\u043C \u0436\u0435 \u0438\u043C\u0435\u043D\u0435\u043C",[E.RECURSIVE_ELEMENT]:"\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432\u043B\u043E\u0436\u0435\u043D \u0432 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0441 \u0442\u0430\u043A\u0438\u043C \u0436\u0435 \u0438\u043C\u0435\u043D\u0435\u043C",[E.NO_PARENT_BLOCK]:"\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0431\u0435\u0437 \u0431\u043B\u043E\u043A\u0430 \u0432 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F\u0445",[E.ONLY_MODIFIER]:"\u041C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0431\u0435\u0437 \u0431\u043B\u043E\u043A\u0430 \u0438\u043B\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430"},en:{[E.ELEMENT_OF_ELEMENT]:"It could not be element of element",[E.RECURSIVE_BLOCK]:"Block is in block with same name",[E.RECURSIVE_ELEMENT]:"Element is in element with same name",[E.NO_PARENT_BLOCK]:"Element was used without block as parent",[E.ONLY_MODIFIER]:"Modifier was used without block or element"}};function ie(e,t=[]){const o=[],n=[...e.classList],u=[...t,n];return n.forEach(i=>{const{blockName:r,elementName:a,modifierName:p}=Ye(i);a&&!t.flat().find(l=>l===r)&&o.push({code:E.NO_PARENT_BLOCK,className:i,parentArray:t}),a&&t.flat().find(l=>l===`${r}__${a}`)&&o.push({code:E.RECURSIVE_ELEMENT,className:i,parentArray:t}),p&&!n.find(l=>a?l===`${r}__${a}`:r===l)&&o.push({code:E.ONLY_MODIFIER,className:i,parentArray:t}),!a&&!p&&t.flat().some(l=>l===r)&&o.push({code:E.RECURSIVE_BLOCK,className:i,parentArray:t}),i.split("__").length>2&&o.push({code:E.ELEMENT_OF_ELEMENT,className:i,parentArray:t})}),e.children&&[...e.children].forEach(i=>{const r=ie(i,u);o.push(...r)}),o}function Ge(e){return e.filter(t=>t.length>0).map(t=>Array.isArray(t)?t.join("."):t).join(" > ")}function Ye(e){const t=/^([a-z-0-9]*)(__)?([a-z-0-9]*)(_)?([a-z-0-9]*)?(_)?([a-z-0-9])?/i,[,o,,n,,u,,i]=t.exec(e);return{blockName:o,elementName:n,modifierName:u,modifierValue:i}}const Ze=({html:e})=>{if(!e)return null;const t=new DOMParser().parseFromString(e,"text/html"),o=ie(t.body);return s(D,{title:"\u0411\u042D\u041C",valid:!o.length,children:o.map(({code:n,className:u,parentArray:i},r)=>h("div",{children:[s("b",{children:Ke.ru[n]})," \u042D\u043B\u0435\u043C\u0435\u043D\u0442:"," ",s("u",{children:u})," \u043F\u0443\u0442\u044C \u0434\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430"," ",s("u",{children:Ge(i)})]},r))})},Xe=({zip:e,fileList:t})=>{const o=t.every(n=>n.split("|").some(u=>e.files[u]));return s(D,{title:"\u0424\u0430\u0439\u043B\u044B",valid:o,children:t.map(n=>h("div",{children:[X(!!e.files[n])," ",n]},n))})},Je=({html:e,sectionList:t})=>{const[o,n]=c.exports.useState(null);return c.exports.useEffect(()=>{if(!e)return;const r=new DOMParser().parseFromString(e,"text/html").querySelectorAll(`${t.map(a=>`.${a}`).join(",")}`);n(Array.from(r))},[e]),o?s(D,{title:"\u0412\u0441\u0435 \u0441\u0435\u043A\u0446\u0438\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u044B \u0438 \u0432 \u043D\u0443\u0436\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435",valid:(o==null?void 0:o.length)===t.length,children:t.map((u,i)=>{var r,a;return h("div",{children:[X((a=(r=o==null?void 0:o[i])==null?void 0:r.className)==null?void 0:a.includes(u))," ",u]},u)})}):null},Qe=({imageData:e,pixelCount:t})=>{const o=c.exports.useRef(null);return c.exports.useEffect(()=>{if(!o.current)return;const n=document.createElement("canvas"),u=n.getContext("2d");n.width=e.width,n.height=e.height,u.putImageData(e,0,0),o.current.src=n.toDataURL("image/png")},[e,o.current]),h("div",{children:[h("div",{children:["\u0420\u0430\u0437\u043D\u0438\u0446\u0430 \u043F\u0438\u043A\u0441\u0435\u043B\u0435\u0439: ",t]}),s("img",{ref:o})]})};async function et(e){return new Promise((t,o)=>{const n=new Image;n.crossOrigin="anonymous",n.src=e,n.onload=()=>{t(n)},n.onerror=o})}const tt=({html:e,classNames:t,workKey:o})=>{const n=c.exports.useRef(null),[u,i]=c.exports.useState(!1),[r,a]=c.exports.useState(null),[p,l]=c.exports.useState([]),[m,w]=c.exports.useState(x.min),[C,y]=c.exports.useState([]);return c.exports.useEffect(()=>{async function d(){var v,g,N,I;if(!u)return;w(x.min),await H();const k=await U((g=(v=n.current)==null?void 0:v.contentWindow)==null?void 0:g.document,x.min,t);w(x.max),await H();const S=await U((I=(N=n.current)==null?void 0:N.contentWindow)==null?void 0:I.document,x.max,t);a([...k,...S])}setTimeout(()=>d(),1e3)},[u]),c.exports.useEffect(()=>{async function d(){if(!r)return;const k=await Promise.all(r.map(async({targetWidth:S,className:v,image:g})=>{const N=z(o,v,S),I=await L.get(M.images,N),b=await et(I),B=g,{width:f,height:_}=b,O=document.createElement("canvas");O.width=f,O.height=_;const F=O.getContext("2d"),j=F.createImageData(f,_);F.drawImage(b,0,0);const be=F.getImageData(0,0,f,_).data,xe=Ie(be,B.getContext("2d").getImageData(0,0,f,_).data,j.data,f,_,{threshold:.1,includeAA:!0,diffColorAlt:[0,0,255]});return{key:`${S}-${v}`,pixelCount:xe,imageData:j}}));l(k)}d()},[r]),c.exports.useEffect(()=>{var d;!u||y(ot((d=n.current)==null?void 0:d.contentDocument))},[u,y,n.current]),h("div",{children:[!r&&s(Y,{ref:n,html:e,onLoad:()=>i(!0),width:m}),s(D,{title:"\u041D\u0435 \u0441\u043A\u0440\u043E\u043B\u0438\u0442\u044C\u0441\u044F \u043F\u043E \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u0438",valid:!C.length,children:C.length?s("div",{children:C.map((d,k)=>s("div",{children:d},k))}):s("div",{children:"\u0412\u0441\u0451 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0445\u043E\u0440\u043E\u0448\u043E"})}),s(D,{title:"\u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442\u044B",valid:p.reduce((d,{pixelCount:k})=>d+k,0)<3e4,children:p.map(d=>s(D,{title:`${d.key}`,valid:d.pixelCount<d.imageData.height*d.imageData.width*.1,size:4,children:s(Qe,R({},d))},d.key))})]})};function ot(e){if(!e)return[];const t=document.documentElement.offsetWidth;return Array.from(e.querySelectorAll("*")).reduce((n,u)=>{const i=u.getBoundingClientRect();return(i.right>t||i.left<0)&&window.getComputedStyle(u).position!=="absolute"&&n.push(u.className),n},[])}const re=({workKey:e,classList:t,fileList:o,cssFileMask:n,templateFileName:u,brief:i,title:r})=>{const[a,p]=c.exports.useState(null),{html:l,css:m}=te(a,n),[w,C]=c.exports.useState(0),{contains:y,loading:d}=Be(e,t,w),k=()=>{async function v(){await Promise.all(t.map(g=>[z(e,g,x.min),z(e,g,x.max)]).flat().map(g=>L.delete(M.images,g))),C(Date.now())}v()};if(!d&&!y)return s(Me,{title:`\u0413\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043E\u043A ${r}`,classList:t,workKey:e,onComplete:()=>{C(Date.now())},cssFileMask:n,templateFileName:u});const S=a?h(P,{children:[s(Ve,{html:l,css:m,conditions:i}),s(Ue,{html:l}),s(Ze,{html:l}),s(Xe,{zip:a,fileList:o}),s(Je,{html:l,sectionList:t}),s(tt,{html:Z(l,m,oe),classNames:t,workKey:e})]}):h(P,{children:[s(He,{onWorkLoad:p}),s("button",{onClick:k,style:{fontSize:"10px",marginTop:"10px"},children:"\u267B\uFE0F \u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438"})]});return h("section",{children:[h("h1",{children:[r," ",a&&s("span",{style:{cursor:"pointer"},onClick:()=>p(null),children:"\u{1FAA3}"})]}),S]})},nt=["page","header","description","digits","feynman","kaufman","footer"],st=[".editorconfig","images/","images/facebook_color_white.svg","images/feynman.png","images/header-image.png","images/instagram_color_white.svg","images/kaufman-triangle.svg","images/logo_place_footer.svg","images/logo_place_header.svg","images/vk_color_white.svg","index.html","styles/","styles/normalize.css","styles/style.css"];var A;(function(e){e.blue="#2f80ed",e.darkGray="#1f1f1f",e.lightGray="#f2f2f2",e.black="#000000",e.white="#FFFFFF"})(A||(A={}));const $={width:"960px",textAlign:"center",lineHeight:"1.15",fontSize:"60px",fontWeight:"700"},q={width:"960px",textAlign:"center",lineHeight:"34px",fontSize:"24px",fontWeight:"400"},ce={width:"1280px",display:"flex",flexDirection:"row",justifyContent:"space-between"},ae={width:"175px",lineHeight:"1.2",fontSize:"18px",fontWeight:"400",color:A.blue},le={width:"1024px",minWidth:"784px"},de={lineHeight:"34px",fontSize:"24px",fontWeight:"400"},he=[{selector:".header",css:{minHeight:"600px",maxHeight:"756px"}},{selector:".header .logo.logo_place_header",css:{position:"absolute",left:"64px",top:"30px",width:"183px",height:"32px"}},{selector:".header .header__title",css:{marginLeft:"64px",maxWidth:"730px",lineHeight:"96px",fontSize:"102px",fontWeight:"700"}},{selector:".header .header__subtitle",css:{position:"absolute",bottom:"30px",left:"64px",width:"388px",lineHeight:"25px",fontSize:"18px",fontWeight:"400"}},{selector:".header .header__subtitle a.header__link"},{selector:".header .header__main-illustration",css:{position:"absolute",right:"0",bottom:"0",width:"765px",height:"608px"}},{selector:".header .header__square-pic",css:{width:"568px",height:"568px",top:"64px",position:"absolute",right:"0"}}],_e=[{selector:".description .two-columns",css:ce},{selector:".description .two-columns .two-columns__brief",css:ae},{selector:".description .two-columns .two-columns__main-text",css:le},{selector:".description .two-columns .two-columns__main-text .two-columns__paragraph",count:3,css:R({marginBottom:"30px"},de)},{selector:".description .two-columns .two-columns__main-text .two-columns__paragraph:nth-of-type(2) .two-columns__span-accent",css:{lineHeight:"34px",fontSize:"24px",fontWeight:"700"}}],me=[{selector:".digits",css:{marginTop:"100px",marginBottom:"100px"}},{selector:".digits .section-title",css:$},{selector:".digits .section-subtitle",css:q},{selector:".digits  .table",css:{width:"1100px"}},{selector:".digits  .table .table__cell",count:8,css:{width:"250px",marginTop:"60px"}},{selector:".digits  .table .table__cell .table__heading",count:8,css:{lineHeight:"1.15",fontSize:"24px",fontWeight:"700"}},{selector:".digits  .table .table__cell .table__text",count:10,css:{marginTop:"20px",lineHeight:"1.2",fontSize:"18px"}}],fe=[{selector:".feynman",css:{minHeight:"890px"}},{selector:".feynman .feynman__title",css:{width:"648px",lineHeight:"1.15",fontSize:"120px",fontWeight:"700"}},{selector:".feynman .feynman__subtitle",css:{lineHeight:"51px",fontSize:"36px",fontWeight:"400"}},{selector:".feynman .feynman__link",css:{position:"absolute",right:"48px",top:"445px",lineHeight:"51px",fontSize:"36px",fontWeight:"400",color:A.blue}}],pe=[{selector:".kaufman",css:{overflow:"hidden"}},{selector:".kaufman .section-title.section-title_theme_dark",css:W(R({},$),{color:A.white})},{selector:".kaufman .section-subtitle.section-subtitle_theme_dark",css:W(R({},q),{color:A.white})},{selector:".kaufman .table.table_theme_dark",css:{width:"1100px"}},{selector:".kaufman .table.table_theme_dark .table__cell.table__cell_theme_dark",count:10,css:{width:"200px",marginTop:"80px"}},{selector:".kaufman .table.table_theme_dark .table__cell.table__cell_theme_dark .table__heading.table__heading_theme_dark",count:10,css:{lineHeight:"1.15",fontSize:"24px",fontWeight:"700"}},{selector:".kaufman .table.table_theme_dark .table__cell.table__cell_theme_dark .table__text.table__text_theme_dark",count:10,css:{marginTop:"20px",lineHeight:"1.2",fontSize:"18px",color:A.white}},{selector:".kaufman .kaufman__triangle",css:{width:"877px",height:"877px",position:"absolute",right:"-210px"}}],ge=[{selector:".footer",css:{backgroundColor:A.darkGray,minHeight:"350px",paddingTop:"60px",paddingBottom:"40px"}},{selector:".footer .footer__columns",css:{width:"1440px",display:"flex",flexDirection:"row",justifyContent:"space-between"}},{selector:".footer__columns .footer__column.footer__column_content_copyright",css:{flexBasis:"711px"}},{selector:".footer__columns .footer__column.footer__column_content_info"},{selector:".footer__columns .footer__column.footer__column_content_social"},{selector:".footer .footer__author",css:{marginTop:"18px",marginBottom:"18px",lineHeight:"25px",fontSize:"18px",fontWeight:"400"}},{selector:".footer .footer__column.footer__column_content_info .footer__column-heading",css:{lineHeight:"30px",fontSize:"18px",fontWeight:"700"}},{selector:".footer .footer__column.footer__column_content_social .footer__column-heading",css:{lineHeight:"30px",fontSize:"18px",fontWeight:"700"}},{selector:".footer .footer__column.footer__column_content_info .footer__column-links",css:{marginBottom:"16px"}},{selector:".footer .footer__column.footer__column_content_info .footer__column-links .footer__column-link",count:3,css:{lineHeight:"30px",fontSize:"18px",fontWeight:"400"}},{selector:".footer .footer__column.footer__column_content_social .footer__column-links",css:{marginBottom:"16px"}},{selector:".footer .footer__column.footer__column_content_social .footer__column-links .footer__column-link",count:3,css:{lineHeight:"30px",fontSize:"18px",fontWeight:"400"}},{selector:".footer .footer__column.footer__column_content_social .footer__column-links .footer__column-link .footer__social-icon",count:3,css:{width:"16px",height:"16px"}},{selector:".footer .logo.logo_place_footer",css:{width:"183px",height:"35px"}}],ut=[...he,..._e,...me,...fe,...pe,...ge],it=["page","header","description","techniques","video","oakley","feynman","digits","khan","kaufman","resources","footer"],rt=["blocks/cards/__description/cards__description.css","blocks/cards/__image/cards__image.css","blocks/cards/__item/cards__item.css","blocks/cards/__title/cards__title.css","blocks/cards/cards.css","blocks/description/description.css","blocks/digits/digits.css","blocks/feynman/__link/feynman__link.css","blocks/feynman/__subtitle/feynman__subtitle.css","blocks/feynman/__title/feynman__title.css","blocks/feynman/feynman.css","blocks/footer/__author/footer__author.css","blocks/footer/__column-heading/footer__column-heading.css","blocks/footer/__column-link/footer__column-link.css","blocks/footer/__column-links/footer__column-links.css","blocks/footer/__column/_content/footer__column_content_copyright.css","blocks/footer/__column/footer__column.css","blocks/footer/__columns/footer__columns.css","blocks/footer/__social-icon/footer__social-icon.css","blocks/footer/footer.css","blocks/header/__link/header__link.css","blocks/header/__main-illustration/header__main-illustration.css","blocks/header/__square-pic/header__square-pic.css","blocks/header/__subtitle/header__subtitle.css","blocks/header/__title/header__title.css","blocks/header/header.css","blocks/kaufman/__triangle/kaufman__triangle.css","blocks/kaufman/kaufman.css","blocks/khan/__author/khan__author.css","blocks/khan/__book-container/khan__book-container.css","blocks/khan/__book-pic/khan__book-pic.css","blocks/khan/__buy-link/khan__buy-link.css","blocks/khan/__container/khan__container.css","blocks/khan/__quote-author-subline/khan__quote-author-subline.css","blocks/khan/__quote-author/khan__quote-author.css","blocks/khan/__quote/khan__quote.css","blocks/khan/__title/khan__title.css","blocks/khan/khan.css","blocks/logo/_place/logo_place_footer.css","blocks/logo/_place/logo_place_header.css","blocks/logo/logo.css","blocks/oakley/oakley.css","blocks/page/page.css","blocks/resources/__logo-zone/resources__logo-zone.css","blocks/resources/__logo/resources__logo.css","blocks/resources/resources.css","blocks/rotation/rotation.css","blocks/section-subtitle/_theme/section-subtitle_theme_dark.css","blocks/section-subtitle/section-subtitle.css","blocks/section-title/_theme/section-title_theme_dark.css","blocks/section-title/section-title.css","blocks/table/__cell/_theme/table__cell_theme_dark.css","blocks/table/__cell/table__cell.css","blocks/table/__heading/_theme/table__heading_theme_dark.css","blocks/table/__heading/table__heading.css","blocks/table/__text/_theme/table__text_theme_dark.css","blocks/table/__text/table__text.css","blocks/table/_theme/table_theme_dark.css|blocks/table/__text/_theme/table__text_theme_dark.css","blocks/table/table.css","blocks/techniques/techniques.css","blocks/two-columns/__brief/two-columns__brief.css","blocks/two-columns/__main-text/two-columns__main-text.css","blocks/two-columns/__paragraph/two-columns__paragraph.css","blocks/two-columns/__span-accent/two-columns__span-accent.css","blocks/two-columns/two-columns.css","blocks/video/__iframe/video__iframe.css","blocks/video/__iframes/video__iframes.css","blocks/video/video.css"],ct=[".editorconfig","README.MD|README.md",...rt,"images/cards-attention.png","images/cards-competence.png","images/cards-interliving.png","images/cards-question.png","images/cards-recall.png","images/facebook_color_white.svg","images/feynman.png","images/header-image.png","images/instagram_color_white.svg","images/kaufman-triangle.svg","images/khan-book.jpg","images/logo/resources-arzamas.svg","images/logo/resources-n1.svg","images/logo/resources-polka.svg","images/logo/resources-strelka.svg","images/logo_place_footer.svg","images/logo_place_header.svg","images/vk_color_white.svg","index.html","pages/index.css","vendor/normalize.css"],at=[...he,{selector:".header .rotation",css:{animationDuration:"20s",animationTimingFunction:"linear"}},{selector:".header",css:{overflow:"hidden"}}],lt=[{selector:".techniques"},{selector:".techniques .section-title",css:$},{selector:".techniques .section-subtitle",css:q},{selector:".techniques .cards",css:{width:"920px",marginLeft:"auto",marginRight:"auto"}},{selector:".techniques .cards .cards__item",count:5,css:{marginTop:"60px",width:"240px"}},{selector:".techniques .cards .cards__item .cards__image",css:{borderRadius:"50%",width:"160px",height:"160px"}},{selector:".techniques .cards .cards__item .cards__title",css:{fontWeight:"700",fontSize:"24px",lineHeight:"1.15"}},{selector:".techniques .cards .cards__item .cards__description",css:{lineHeight:"23px",fontSize:"18px",fontWeight:"400"}}],dt=[{selector:".video"},{selector:".video .section-title",css:$},{selector:".video .section-subtitle",css:q},{selector:".video .video__iframes",css:{width:"1050px"}},{selector:".video .video__iframes .video__iframe",count:2,css:{width:"515px",height:"316px"}}],ht=[{selector:".oakley"},{selector:".oakley .two-columns",css:ce},{selector:".oakley .two-columns .two-columns__brief",css:ae},{selector:".oakley .two-columns .two-columns__main-text",css:le},{selector:".oakley .two-columns .two-columns__main-text .two-columns__paragraph",css:R({},de)}],_t=[{selector:".khan"},{selector:".khan .khan__container",css:{width:"1280px"}},{selector:".khan .khan__author",css:{lineHeight:"42px",fontSize:"30px",fontWeight:"400"}},{selector:".khan .khan__title",css:{lineHeight:"1.15",fontSize:"60px",fontWeight:"700"}},{selector:".khan .khan__quote",css:{width:"790px",lineHeight:"34px",fontSize:"24px",fontWeight:"400"}},{selector:".khan .khan__quote-author",css:{lineHeight:"1.15",fontSize:"24px",fontWeight:"700"}},{selector:".khan .khan__quote-author-subline",css:{lineHeight:"1.15",fontSize:"24px",fontWeight:"400"}},{selector:".khan .khan__book-container",css:{display:"flex",flexDirection:"row"}},{selector:".khan .khan__book-container .khan__book-pic",css:{width:"620px",height:"608px"}},{selector:".khan .khan__book-container .khan__buy-link",css:{lineHeight:"42px",fontSize:"30px",fontWeight:"400"}}],mt=[...pe,{selector:".kaufman .kaufman__triangle.rotation",css:{animationDuration:"20s",animationTimingFunction:"linear"}}],ft=[{selector:".resources"},{selector:".resources .section-title",css:$},{selector:".resources .section-subtitle",css:q},{selector:".resources .resources__logo-zone",css:{display:"flex",flexDirection:"row",width:"1100px"}},{selector:".resources .resources__logo",count:4,css:{width:"270px",height:"38px"}}],pt=[...at,..._e,...lt,...dt,...ht,...fe,...me,..._t,...mt,...ft,...ge];function gt(){const[e,t]=c.exports.useState(!1);c.exports.useEffect(()=>{ze().then(()=>{t(!0)})});const[o,n]=c.exports.useState(!1);return e?s("div",{className:"App",children:s(Oe,{basename:"/work-parser-vite/",children:h(G.Provider,{value:{visibility:o,setVisibility:n},children:[s(Ae,{}),s(Ne,{children:s(Fe,{path:"/",element:h(P,{children:[s(re,{workKey:V.first,classList:nt,fileList:st,brief:ut,cssFileMask:"styles/style.css",templateFileName:"template1",title:"1 \u0440\u0430\u0431\u043E\u0442\u0430"}),s(re,{workKey:V.second,classList:it,fileList:ct,brief:pt,cssFileMask:"blocks/",templateFileName:"template2",title:"2 \u0440\u0430\u0431\u043E\u0442\u0430"})]})})})]})})}):s("div",{children:"\u041F\u0440\u043E\u0433\u0440\u0435\u0432\u0430\u0435\u043C\u0441\u044F"})}Re.render(s(ee.StrictMode,{children:s(gt,{})}),document.getElementById("root"));
