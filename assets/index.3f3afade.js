var _4=Object.defineProperty;var W=Object.getOwnPropertySymbols;var E4=Object.prototype.hasOwnProperty,h4=Object.prototype.propertyIsEnumerable;var $=(u,t,e)=>t in u?_4(u,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[t]=e,V=(u,t)=>{for(var e in t||(t={}))E4.call(t,e)&&$(u,e,t[e]);if(W)for(var e of W(t))h4.call(t,e)&&$(u,e,t[e]);return u};import{j as T,r as l,h as d4,d as N,J as U,a as m4,p as p4,u as K,B as g4,L as H,R as D4,b as Y,c as f4,e as b4}from"./vendor.3f213b8a.js";const C4=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}};C4();const o=T.exports.jsx,E=T.exports.jsxs,F=T.exports.Fragment,G=l.exports.memo(l.exports.forwardRef(({html:u,onLoad:t,width:e},a)=>o("iframe",{ref:a,style:{width:`${e}px`,minHeight:"100vh",border:"none"},id:"myiframe",srcDoc:u,onLoad:t}))),z=(u=100)=>new Promise((t,e)=>{setTimeout(()=>{t()},u)});async function S(u,t,e){return u?await Promise.all(e.map(async a=>{const s=u.querySelector(`.${a}`),i=await d4(s,{useCORS:!0,scale:1});return{className:a,image:i,targetWidth:t}})):[]}var m;(function(u){u[u.min=1100]="min",u[u.max=1600]="max"})(m||(m={}));const Z=({html:u,classList:t,title:e})=>{const a=l.exports.useRef(null),[s,i]=l.exports.useState(m.min),[n,c]=l.exports.useState(!1);return E("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",maxWidth:"300px"},children:[o("h1",{children:e}),o("button",{onClick:async()=>{var w,_,p,D;const r=N();c(!0),i(m.min),await z();const I=await S((_=(w=a.current)==null?void 0:w.contentWindow)==null?void 0:_.document,m.min,t);i(m.max),await z();const v=await S((D=(p=a.current)==null?void 0:p.contentWindow)==null?void 0:D.document,m.max,t),A=[...I,...v].reduce((g,{className:B,image:f,targetWidth:x})=>{const b=f.toDataURL("image/png");return g.file(`${r==null?void 0:r.name}/${x}/${B}.png`,b.split("base64,")[1],{base64:!0}),g},new U);m4(await A.generateAsync({type:"blob"}),`${r==null?void 0:r.name}.zip`),c(!1)},children:"Get images"}),n&&o(G,{ref:a,html:u,width:s})]})};let J=0;const B4=(u="id")=>(J++,`${u}${J}`),X=({onWorkLoad:u,title:t})=>{const[e]=l.exports.useState(B4()),a=async s=>{const i=await U.loadAsync(s.target.files[0]),n=Object.keys(i.files);if(i.files[n[0]].dir){const c=i.files[n[0]].name;i.files=n.slice(1).reduce((d,r)=>(d[r.replace(c,"")]=i.files[r],d),{})}u(i)};return console.log(e),E("div",{children:[o("label",{htmlFor:e,children:t}),o("input",{id:e,type:"file",name:"file",onChange:a})]})},x4=()=>"\u2705",F4=()=>"\u274C",j=u=>u?x4():F4(),C=({title:u,children:t,valid:e,size:a=2})=>{const s=`h${a}`,[i,n]=l.exports.useState(!0),c=e===void 0?null:j(e);return E("section",{children:[E(s,{onClick:()=>{n(d=>!d)},children:[u," ",c]}),!i&&o("div",{children:t})]})},Q=({zip:u,fileList:t})=>{const e=t.every(a=>u.files[a]);return o(C,{title:"\u0424\u0430\u0439\u043B\u044B",valid:e,children:t.map(a=>E("div",{children:[j(!!u.files[a])," ",a]},a))})},k4=[".editorconfig","images/","images/facebook_color_white.svg","images/feynman.png","images/header-image.png","images/instagram_color_white.svg","images/kaufman-triangle.svg","images/logo_place_footer.svg","images/logo_place_header.svg","images/vk_color_white.svg","index.html","styles/","styles/normalize.css","styles/style.css","texts.md"],u4=({html:u,sectionList:t})=>{const[e,a]=l.exports.useState(null);return l.exports.useEffect(()=>{if(!u)return;const n=new DOMParser().parseFromString(u,"text/html").querySelectorAll(`${t.map(c=>`.${c}`).join(",")}`);a(Array.from(n))},[u]),e?o(C,{title:"\u0412\u0441\u0435 \u0441\u0435\u043A\u0446\u0438\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u044B \u0438 \u0432 \u043D\u0443\u0436\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435",valid:(e==null?void 0:e.length)===t.length,children:t.map((s,i)=>E("div",{children:[j(e==null?void 0:e[i].className.includes(s))," ",s]},s))}):null},M=["page","header","description","digits","feynman","kaufman","footer"],e4=({html:u})=>{const[t,e]=l.exports.useState([]);return l.exports.useEffect(()=>{async function a(){if(!u)return;const s=new FormData;s.append("out","json"),s.append("content",u);const n=await(await fetch("https://html5.validator.nu/",{method:"POST",body:s})).json();e(n.messages)}a()},[u]),o(C,{title:"\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0442\u043E\u0440\u043E\u043C W3C",valid:!t.length,children:t.map(({message:a,extract:s,lastLine:i})=>E("div",{children:["line ",i,": ",o("b",{children:s}),", ",a]},a))})};var h;(function(u){u.NO_PARENT_BLOCK="NO_PARENT_BLOCK",u.RECURSIVE_ELEMENT="RECURSIVE_ELEMENT",u.ONLY_MODIFIER="ONLY_MODIFIER",u.RECURSIVE_BLOCK="RECURSIVE_BLOCK",u.ELEMENT_OF_ELEMENT="ELEMENT_OF_ELEMENT"})(h||(h={}));const A4={ru:{[h.ELEMENT_OF_ELEMENT]:"\u041D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",[h.RECURSIVE_BLOCK]:"\u0411\u043B\u043E\u043A \u0432\u043B\u043E\u0436\u0435\u043D \u0432 \u0431\u043B\u043E\u043A \u0441 \u0442\u0430\u043A\u0438\u043C \u0436\u0435 \u0438\u043C\u0435\u043D\u0435\u043C",[h.RECURSIVE_ELEMENT]:"\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432\u043B\u043E\u0436\u0435\u043D \u0432 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0441 \u0442\u0430\u043A\u0438\u043C \u0436\u0435 \u0438\u043C\u0435\u043D\u0435\u043C",[h.NO_PARENT_BLOCK]:"\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0431\u0435\u0437 \u0431\u043B\u043E\u043A\u0430 \u0432 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F\u0445",[h.ONLY_MODIFIER]:"\u041C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0431\u0435\u0437 \u0431\u043B\u043E\u043A\u0430 \u0438\u043B\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430"},en:{[h.ELEMENT_OF_ELEMENT]:"It could not be element of element",[h.RECURSIVE_BLOCK]:"Block is in block with same name",[h.RECURSIVE_ELEMENT]:"Element is in element with same name",[h.NO_PARENT_BLOCK]:"Element was used without block as parent",[h.ONLY_MODIFIER]:"Modifier was used without block or element"}};function t4(u,t=[]){const e=[],a=[...u.classList],s=[...t,a];return a.forEach(i=>{const{blockName:n,elementName:c,modifierName:d}=y4(i);c&&!t.flat().find(r=>r===n)&&e.push({code:h.NO_PARENT_BLOCK,className:i,parentArray:t}),c&&t.flat().find(r=>r===`${n}__${c}`)&&e.push({code:h.RECURSIVE_ELEMENT,className:i,parentArray:t}),d&&!a.find(r=>c?r===`${n}__${c}`:n===r)&&e.push({code:h.ONLY_MODIFIER,className:i,parentArray:t}),!c&&!d&&t.flat().some(r=>r===n)&&e.push({code:h.RECURSIVE_BLOCK,className:i,parentArray:t}),i.split("__").length>2&&e.push({code:h.ELEMENT_OF_ELEMENT,className:i,parentArray:t})}),u.children&&[...u.children].forEach(i=>{const n=t4(i,s);e.push(...n)}),e}function w4(u){return u.filter(t=>t.length>0).map(t=>Array.isArray(t)?t.join("."):t).join(" > ")}function y4(u){const t=/^([a-z-0-9]*)(__)?([a-z-0-9]*)(_)?([a-z-0-9]*)?(_)?([a-z-0-9])?/i,[,e,,a,,s,,i]=t.exec(u);return{blockName:e,elementName:a,modifierName:s,modifierValue:i}}const a4=({html:u})=>{if(!u)return null;const t=new DOMParser().parseFromString(u,"text/html"),e=t4(t.body);return o(C,{title:"\u0411\u042D\u041C",valid:!e.length,children:e.map(({code:a,className:s,parentArray:i},n)=>E("div",{children:[o("b",{children:A4.ru[a]})," \u042D\u043B\u0435\u043C\u0435\u043D\u0442:"," ",o("u",{children:s})," \u043F\u0443\u0442\u044C \u0434\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430"," ",o("u",{children:w4(i)})]},n))})},v4="modulepreload",s4={},z4="/work-parser-vite/",k=function(t,e){return!e||e.length===0?t():Promise.all(e.map(a=>{if(a=`${z4}${a}`,a in s4)return;s4[a]=!0;const s=a.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${i}`))return;const n=document.createElement("link");if(n.rel=s?"stylesheet":v4,s||(n.as="script",n.crossOrigin=""),n.href=a,document.head.appendChild(n),s)return new Promise((c,d)=>{n.addEventListener("load",c),n.addEventListener("error",d)})})).then(()=>t())};async function S4(u){return new Promise((t,e)=>{const a=new Image;a.crossOrigin="anonymous",a.src=u,a.onload=()=>{t(a)},a.onerror=e})}const R4=({imageData:u,pixelCount:t})=>{const e=l.exports.useRef(null);return l.exports.useEffect(()=>{if(!e.current)return;const a=document.createElement("canvas"),s=a.getContext("2d");a.width=u.width,a.height=u.height,s.putImageData(u,0,0),e.current.src=a.toDataURL("image/png")},[u,e.current]),E("div",{children:[E("div",{children:["\u0420\u0430\u0437\u043D\u0438\u0446\u0430 \u043F\u0438\u043A\u0441\u0435\u043B\u0435\u0439: ",t]}),o("img",{ref:e})]})},i4=({html:u,classNames:t,templates:e})=>{const a=l.exports.useRef(null),[s,i]=l.exports.useState(!1),[n,c]=l.exports.useState(null),[d,r]=l.exports.useState([]),[I,v]=l.exports.useState(m.min),[A,w]=l.exports.useState([]);return l.exports.useEffect(()=>{async function _(){var g,B,f,x;v(m.min),await z();const p=await S((B=(g=a.current)==null?void 0:g.contentWindow)==null?void 0:B.document,m.min,t);v(m.max),await z();const D=await S((x=(f=a.current)==null?void 0:f.contentWindow)==null?void 0:x.document,m.max,t);c([...p,...D])}setTimeout(()=>_(),1e3)},[s]),l.exports.useEffect(()=>{async function _(){if(!n)return;const p=await Promise.all(n.map(async({targetWidth:D,className:g,image:B})=>{const f=await S4(e[D][g]),x=B,{width:b,height:y}=f,L=document.createElement("canvas");L.width=b,L.height=y;const O=L.getContext("2d"),P=O.createImageData(b,y);O.drawImage(f,0,0);const r4=O.getImageData(0,0,b,y).data,c4=p4(r4,x.getContext("2d").getImageData(0,0,b,y).data,P.data,b,y,{threshold:.1,includeAA:!0,diffColorAlt:[0,0,255]});return{key:`${D}-${g}`,pixelCount:c4,imageData:P}}));r(p)}_()},[n]),l.exports.useEffect(()=>{var _;!s||w(I4((_=a.current)==null?void 0:_.contentDocument))},[s,w,a.current]),E("div",{children:[!n&&o(G,{ref:a,html:u,onLoad:()=>i(!0),width:I}),o(C,{title:"\u041D\u0435 \u0441\u043A\u0440\u043E\u043B\u0438\u0442\u044C\u0441\u044F \u043F\u043E \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u0438",valid:!A.length,children:A.length?o("div",{children:A.map(_=>o("div",{children:_}))}):o("div",{children:"\u0412\u0441\u0451 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0445\u043E\u0440\u043E\u0448\u043E"})}),o(C,{title:"\u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442\u044B",valid:d.reduce((_,{pixelCount:p})=>_+p,0)<3e4,children:d.map(_=>o(C,{title:`${_.key}`,valid:_.pixelCount<1e4,size:3,children:o(R4,V({},_))},_.key))})]})};function I4(u){if(!u)return[];const t=document.documentElement.offsetWidth;return Array.from(u.querySelectorAll("*")).reduce((a,s)=>{const i=s.getBoundingClientRect();return(i.right>t||i.left<0)&&window.getComputedStyle(s).position!=="absolute"&&a.push(s.className),a},[])}const L4=`
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
`,R=(u,t,e="")=>{const a=new DOMParser().parseFromString(u,"text/html"),s=a.createElement("style");return s.innerHTML=`${L4} ${t} ${e}`,a.head.appendChild(s),Array.from(a.head.querySelectorAll("link")).forEach(n=>n.remove()),a.documentElement.outerHTML.replaceAll(/\.{0,2}\/?images/g,"/work-parser-vite/images")};function O4(u){switch(u){case"./chrome/images.ts":return k(()=>import("./images.fc1253ea.js"),[]);case"./edge-chromium/images.ts":return k(()=>import("./images.2fdce438.js"),[]);case"./firefox/images.ts":return k(()=>import("./images.5e8f99fc.js"),[]);default:return new Promise(function(t,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+u)))})}}const T4=({html:u,css:t})=>{const{value:e,loading:a}=K(async()=>{const s=N(),{images:i}=await O4(`./${s.name}/images.ts`);return i});return!u||!t||a?null:o(i4,{html:R(u,t),classNames:M,templates:e})},o4=(u,t)=>{const[e,a]=l.exports.useState(),[s,i]=l.exports.useState();return l.exports.useEffect(()=>{async function n(){if(!u)return;const[c,...d]=await Promise.all([u.files["index.html"].async("text"),...t.map(r=>u.files[r].async("text"))]);a(c),i(d.join(""))}n()},[a,i,u]),{html:e,css:s}},N4=()=>{const[u,t]=l.exports.useState(null),{html:e,css:a}=o4(u,["styles/style.css"]);return u?E(F,{children:[o(e4,{html:e}),o(a4,{html:e}),o(Q,{zip:u,fileList:k4}),o(u4,{html:e,sectionList:M}),o(T4,{html:e,css:a})]}):o(F,{children:o(X,{onWorkLoad:t,title:"1 \u0440\u0430\u0431\u043E\u0442\u0430"})})},j4=`
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>\u041D\u0430\u0443\u0447\u0438\u0442\u044C\u0441\u044F \u0443\u0447\u0438\u0442\u044C\u0441\u044F</title>
  <link rel="stylesheet" href="styles/normalize.css">
  <link rel="stylesheet" href="styles/style.css">
</head>
<body>
  <div class="page">
    <header class="header">
      <img src="images/logo_place_header.svg" alt="\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u042F\u043D\u0434\u0435\u043A\u0441.\u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0443\u043C" class="logo logo_place_header">
      <h1 class="header__title">\u041D\u0430\u0443\u0447\u0438\u0442\u044C\u0441\u044F \u0443\u0447\u0438\u0442\u044C\u0441\u044F</h1>
      <p class="header__subtitle">\u041A\u0430\u043A\u0438\u0435 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0438 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044B \u043A \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044E \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432 \u0441\u0432\u043E\u0435\u0439 \u0436\u0438\u0437\u043D\u0438? <a href="#" class="header__link">\u0423\u0437\u043D\u0430\u0442\u044C &rarr;</a>
      </p>
      <img src="images/header-image.png" alt="\u0424\u0440\u0430\u0433\u043C\u0435\u043D\u0442 \u043A\u0430\u0440\u0442\u0438\u043D\u044B \u0421\u043D\u043E\u0432\u0430 \u0434\u0432\u043E\u0439\u043A\u0430" class="header__main-illustration">
      <div class="header__square-pic"></div>
    </header>
    <main class="content">
      <section class="description">
       <article class="two-columns">
          <h2 class="two-columns__brief">\u0413\u043B\u0430\u0432\u043D\u044B\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0432 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0438</h2>
          <div class="two-columns__main-text">
            <p class="two-columns__paragraph">
              \u041D\u0438 \u0432 \u0448\u043A\u043E\u043B\u0435, \u043D\u0438 \u0432 \u0438\u043D\u0441\u0442\u0438\u0442\u0443\u0442\u0435 \u043D\u0430\u0441 \u043D\u0435 \u0443\u0447\u0430\u0442 \u0442\u043E\u043C\u0443, \u043A\u0430\u043A \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0438\u0437\u0443\u0447\u0430\u0442\u044C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B. \u041C\u044B \u0433\u043E\u0442\u043E\u0432\u0438\u043C\u0441\u044F \u043A \u044D\u043A\u0437\u0430\u043C\u0435\u043D\u0430\u043C \u0438 \u0443\u0447\u0438\u043C \u0431\u0438\u043B\u0435\u0442\u044B. \u041C\u044B \u0442\u0440\u0435\u043D\u0438\u0440\u0443\u0435\u043C\u0441\u044F \u0440\u0435\u0448\u0430\u0442\u044C \u043E\u0434\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438, \u0447\u0442\u043E\u0431\u044B \u043B\u0443\u0447\u0448\u0435 \u0441\u0434\u0430\u0442\u044C \u0442\u0435\u0441\u0442, \u043D\u043E \u0447\u0430\u0441\u0442\u043E \u0432 \u0438\u0442\u043E\u0433\u0435 \u044D\u0442\u043E \u043D\u0435 \u0434\u0430\u0435\u0442 \u043D\u0430\u043C \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0437\u043D\u0430\u043D\u0438\u044F. \u0417\u0443\u0431\u0440\u0435\u0436\u043A\u0430 \u0431\u044B\u0441\u0442\u0440\u043E \u0432\u044B\u0432\u0435\u0442\u0440\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0438 \u043D\u0435 \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442 \u043F\u043E\u043B\u044C\u0437\u044B.
            </p>
            <p class="two-columns__paragraph"><span class="two-columns__span-accent">\u0412\u044B\u0432\u043E\u0434:</span> \u0443\u0447\u0438\u0442\u044C\u0441\u044F \u0442\u043E\u0436\u0435 \u043D\u0443\u0436\u043D\u043E \u0443\u043C\u0435\u0442\u044C, \u043D\u043E \u043F\u043E\u0447\u0435\u043C\u0443-\u0442\u043E \u044D\u0442\u043E\u043C\u0443 \u043C\u0430\u043B\u043E \u0433\u0434\u0435 \u0443\u0447\u0430\u0442. \u0427\u0442\u043E \u0441 \u044D\u0442\u0438\u043C \u0434\u0435\u043B\u0430\u0442\u044C?</p>
            <p class="two-columns__paragraph">\u041A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u0438\u043A\u0438 \u0438 \u0443\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u044F \u043F\u043E\u043C\u043E\u0433\u0430\u044E\u0442 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0434\u0445\u043E\u0434 \u043A \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044E, \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0435\u0433\u043E \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u043C \u0438 \u0437\u0430\u0445\u0432\u0430\u0442\u044B\u0432\u0430\u044E\u0449\u0438\u043C. \u042D\u0442\u0438 \u0436\u0435 \u0442\u0435\u0445\u043D\u0438\u043A\u0438 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F \u043D\u0430 \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u0432 \u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0443\u043C\u0435.
            </p>
          </div>
        </article>
      </section>

      <section class="digits">
        <h2 class="section-title">\u0426\u0438\u0444\u0440\u044B \u0438 \u0444\u0430\u043A\u0442\u044B</h2>
        <p class="section-subtitle">\u041F\u0440\u043E \u0443\u0447\u0451\u0431\u0443 \u0438 \u043C\u043E\u0437\u0433</p>
        <ul class="table">
          <li class="table__cell">
            <h3 class="table__heading">86 \u043C\u0438\u043B\u043B\u0438\u0430\u0440\u0434\u043E\u0432</h3>
            <p class="table__text">\u0427\u0438\u0441\u043B\u043E \u043D\u0435\u0439\u0440\u043E\u043D\u043E\u0432 \u0432 \u043C\u043E\u0437\u0433\u0435 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430</p>
          </li>
          <li class="table__cell">
            <h3 class="table__heading">2,1 \u043C\u0438\u043B\u043B\u0438\u0430\u0440\u0434\u0430</h3>
            <p class="table__text">\u0427\u0438\u0441\u043B\u043E \u043D\u0443\u0436\u0434\u0430\u044E\u0449\u0438\u0445\u0441\u044F \u0432 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0438 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438</p>
            <p class="table__text">\u0412\u0441\u0435\u043C\u0438\u0440\u043D\u044B\u0439 \u0411\u0430\u043D\u043A, 2017</p>
          </li>
          <li class="table__cell">
            <h3 class="table__heading">1000 \u0442\u0435\u0440\u0430\u0431\u0430\u0439\u0442</h3>
            <p class="table__text">\u041E\u0431\u044A\u0451\u043C \u043F\u0430\u043C\u044F\u0442\u0438 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430</p>
          </li>
          <li class="table__cell">
            <h3 class="table__heading">500 \u0442\u0440\u0438\u043B\u043B\u0438\u043E\u043D\u043E\u0432</h3>
            <p class="table__text">\u0427\u0438\u0441\u043B\u043E \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0437\u0430 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u043D\u0435\u0440\u0432\u043D\u044B\u0445 \u0441\u0438\u043D\u0430\u043F\u0441\u043E\u0432 \u0443 \u0432\u0437\u0440\u043E\u0441\u043B\u043E\u0433\u043E \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430</p>
          </li>
          <li class="table__cell">
            <h3 class="table__heading">420 \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u043E\u0432</h3>
            <p class="table__text">\u0427\u0438\u0441\u043B\u043E \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0445 \u043B\u044E\u0434\u0435\u0439 \u043C\u043E\u043B\u043E\u0436\u0435 25 \u043B\u0435\u0442, \u043D\u0435 \u0438\u043C\u0435\u044E\u0449\u0438\u0445 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u043B\u044F \u0442\u0440\u0443\u0434\u043E\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430</p>
            <p class="table__text">\u0412\u0441\u0435\u043C\u0438\u0440\u043D\u044B\u0439 \u0411\u0430\u043D\u043A, 2017</p>
          </li>
          <li class="table__cell">
            <h3 class="table__heading">17\u201320 \u043B\u0435\u0442</h3>
            <p class="table__text">\u041F\u0438\u043A \u043E\u0431\u0443\u0447\u0430\u0435\u043C\u043E\u0441\u0442\u0438</p>
          </li>
          <li class="table__cell">
            <h3 class="table__heading">1885 \u0433\u043E\u0434</h3>
            <p class="table__text">\u041E\u0442\u043A\u0440\u044B\u0442\u0438\u0435 \u043A\u0440\u0438\u0432\u043E\u0439 \u0437\u0430\u0431\u044B\u0432\u0430\u043D\u0438\u044F</p>
          </li>
          <li class="table__cell">
            <h3 class="table__heading">1889 \u0433\u043E\u0434</h3>
            <p class="table__text">\u041E\u0442\u043A\u0440\u044B\u0442\u0438\u0435 \u0443\u0441\u043B\u043E\u0432\u043D\u043E\u0433\u043E \u0440\u0435\u0444\u043B\u0435\u043A\u0441\u0430</p>
          </li>
        </ul>
      </section>

      <section class="feynman">
        <h2 class="feynman__title">\u041C\u0435\u0442\u043E\u0434 \u0424\u0435\u0439\u043D\u043C\u0430\u043D\u0430</h2>
        <p class="feynman__subtitle">\u0412\u044B\u0443\u0447\u0438\u0442\u044C \u0438 \u043D\u0435 \u0437\u0430\u0431\u044B\u0442\u044C.</p>
        <a href="#" class="feynman__link">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 &rarr;</a>
      </section>

      <section class="kaufman">
        <h2 class="section-title section-title_theme_dark">\u041F\u0440\u0438\u043D\u0446\u0438\u043F\u044B \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F</h2>
        <p class="section-subtitle section-subtitle_theme_dark">\u043E\u0442 \u0414\u0436\u043E\u0448\u0430 \u041A\u0430\u0443\u0444\u043C\u0430\u043D\u0430</p>
        <ul class="table table_theme_dark">
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">1</h3>
            <p class="table__text table__text_theme_dark">\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u0438\u0432\u043B\u0435\u043A\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442.</p>
          </li>
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">2</h3>
            <p class="table__text table__text_theme_dark">\u0421\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u044C\u0442\u0435\u0441\u044C \u043D\u0430 \u043A\u0430\u043A\u043E\u043C-\u0442\u043E \u043E\u0434\u043D\u043E\u043C \u043D\u0430\u0432\u044B\u043A\u0435.</p>
          </li>
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">3</h3>
            <p class="table__text table__text_theme_dark">\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u0435 \u0446\u0435\u043B\u0435\u0432\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430.</p>
          </li>
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">4</h3>
            <p class="table__text table__text_theme_dark">\u0420\u0430\u0437\u0431\u0435\u0439\u0442\u0435 \u043D\u0430\u0432\u044B\u043A \u043D\u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B.</p>
          </li>
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">5</h3>
            <p class="table__text table__text_theme_dark">\u041F\u0440\u0438\u0433\u043E\u0442\u043E\u0432\u044C\u0442\u0435 \u0432\u0441\u0451 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0435 \u0434\u043B\u044F \u0437\u0430\u043D\u044F\u0442\u0438\u0439.</p>
          </li>
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">6</h3>
            <p class="table__text table__text_theme_dark">\u0423\u0441\u0442\u0440\u0430\u043D\u0438\u0442\u0435 \u043F\u0440\u0435\u043F\u044F\u0442\u0441\u0442\u0432\u0438\u044F \u0434\u043B\u044F \u0437\u0430\u043D\u044F\u0442\u0438\u0439.</p>
          </li>
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">7</h3>
            <p class="table__text table__text_theme_dark">\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u0435 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0434\u043B\u044F \u0437\u0430\u043D\u044F\u0442\u0438\u0439.</p>
          </li>
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">8</h3>
            <p class="table__text table__text_theme_dark">\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0431\u044B\u0441\u0442\u0440\u044B\u0435 \u043F\u0435\u0442\u043B\u0438 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438.</p>
          </li>
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">9</h3>
            <p class="table__text table__text_theme_dark">\u0417\u0430\u043D\u0438\u043C\u0430\u0439\u0442\u0435\u0441\u044C \u043F\u043E \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u044E, \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u043C\u0438 \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u044B\u043C\u0438 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u0430\u043C\u0438.</p>
          </li>
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">10</h3>
            <p class="table__text table__text_theme_dark">\u0423\u0434\u0435\u043B\u044F\u0439\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u0438 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438.</p>
          </li>
        </ul>
        <div class="kaufman__triangle"></div>
      </section>
    </main>
    <footer class="footer">
      <div class="footer__columns">
        <div class="footer__column footer__column_content_copyright">
          <img src="images/logo_place_footer.svg" alt="\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u042F\u043D\u0434\u0435\u043A\u0441.\u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0443\u043C \u0432 \u043F\u043E\u0434\u0432\u0430\u043B\u0435 \u0441\u0430\u0439\u0442\u0430" class="logo logo_place_footer">
          <p class="footer__author">&copy; 2019. \u0412\u0438\u043A\u0442\u043E\u0440 \u0410\u0431\u0430\u043D\u044C\u043A\u0438\u043D</p>
        </div>
        <div class="footer__column footer__column_content_info">
          <h4 class="footer__column-heading">\u041E \u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0443\u043C\u0435</h4>
          <nav>
            <ul class="footer__column-links">
              <li>
                <a href="#" class="footer__column-link">\u0413\u043B\u0430\u0432\u043D\u0430\u044F</a>
              </li>
              <li>
                <a href="#" class="footer__column-link">\u041A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u044F</a>
              </li>
              <li>
                <a href="#" class="footer__column-link">\u041D\u0430\u0441\u0442\u0430\u0432\u043D\u0438\u043A\u0438</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="footer__column footer__column_content_social">
          <h4 class="footer__column-heading">\u0421\u043E\u0446\u0441\u0435\u0442\u0438</h4>
          <ul class="footer__column-links">
            <li>
              <a href="#" class="footer__column-link">
                <img src="images/facebook_color_white.svg" alt="\u0418\u043A\u043E\u043D\u043A\u0430 Facebook" class="footer__social-icon">Facebook
              </a>
            </li>
            <li>
              <a href="#" class="footer__column-link">
                <img src="images/vk_color_white.svg" alt="\u0418\u043A\u043E\u043D\u043A\u0430 \u0412\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0435" class="footer__social-icon">\u0412\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0435
              </a>
            </li>
            <li>
              <a href="#" class="footer__column-link">
                <img src="images/instagram_color_white.svg" alt="\u0418\u043A\u043E\u043D\u043A\u0430 Instagram" class="footer__social-icon">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</body>
</html>

`,M4=`
.page {
  min-width: 1100px;
  max-width: 1600px;
  margin: 0 auto;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.header {
  height: 100vh;
  min-height: 600px;
  max-height: 756px;
  background-color: #f2f2f2;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 100px;
}

.logo_place_header {
  position: absolute;
  z-index: 5;
  top: 30px;
  left: 64px;
}

.header__title {
  padding-left: 64px;
  max-width: 730px;
  line-height: 96px;
  font-size: 102px;
  font-weight: bold;
  margin: 0;
  z-index: 2;
}

.header__subtitle {
  max-width: 388px;
  position: absolute;
  left: 64px;
  bottom: 30px;
  margin: 0;
  line-height: 25px;
  font-size: 18px;
  font-weight: normal;
  z-index: 2;
}

.header__link {
  color: #2f80ed;
  text-decoration: none;
}

.header__main-illustration {
  width: 765px;
  height: 608px;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.header__square-pic {
  min-height: 568px;
  min-width: 568px;
  background-color: #2f80ed;
  position: absolute;
  top: 64px;
  right: 0;
}

.description {
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
}

.two-columns {
  width: 80%;
  display: flex;
  justify-content: space-between;
}

.two-columns__brief {
  max-width: 175px;
  color: #2f80ed;
  margin: 0;
  line-height: 1.2;
  font-size: 18px;
  font-weight: normal;
}

.two-columns__main-text {
  width: 80%;
  min-width: 784px;
}

.two-columns__paragraph {
  margin: 0 0 30px;
  line-height: 34px;
  font-size: 24px;
  font-weight: normal;
}

.two-columns__span-accent {
  font-weight: bold;
}

.two-columns__paragraph:last-of-type {
  margin-bottom: 0;
}

.digits {
  max-width: 1100px;
  margin: 0 auto 100px;
}

.section-title {
  width: 60%;
  line-height: 1.15;
  font-size: 60px;
  font-weight: bold;
  margin: 0 auto 20px;
  text-align: center;
}

.section-subtitle {
  width: 60%;
  line-height: 34px;
  font-size: 24px;
  font-weight: normal;
  margin: 0 auto;
  text-align: center;
}

.table {
  max-width: 1100px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  justify-content: space-between;
}

.table__cell {
  width: 250px;
  margin-top: 60px;
}

.table__heading {
  line-height: 1.15;
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 20px;
}

.table__text {
  line-height: 1.2;
  font-size: 18px;
  font-weight: normal;
  margin: 0;
}

.table__text:first-of-type:not(:only-of-type) {
  margin-bottom: 20px;
}

.feynman {
  min-height: 890px;
  background-color: #f2f2f2;
  background-image: url(../images/feynman.png);
  background-repeat: no-repeat;
  background-position: left bottom;
  position: relative;
}

.feynman__title {
  max-width: 648px;
  line-height: 1.15;
  font-size: 120px;
  font-weight: bold;
  margin: 0 auto;
  text-align: center;
  padding-top: 100px;
  margin-bottom: 70px;
}

.feynman__subtitle {
  margin: 0 auto;
  text-align: center;
  line-height: 51px;
  font-size: 36px;
  font-weight: normal;
}

.feynman__link {
  line-height: 51px;
  font-size: 36px;
  font-weight: normal;
  color: #2f80ed;
  position: absolute;
  top: 50%;
  right: 48px;
  text-decoration: none;
}

.kaufman {
  background-color: #1f1f1f;
  position: relative;
  overflow: hidden;
  padding: 90px 0;
}

.section-title_theme_dark {
  color: white;
  position: relative;
  z-index: 2;
}

.section-subtitle_theme_dark {
  color: white;
  position: relative;
  z-index: 2;
}

.table_theme_dark {
  margin: 0 auto;
  justify-content: space-between;
}

.table__cell_theme_dark {
  max-width: 200px;
  color: white;
  margin-right: 0;
  margin-top: 80px;
  z-index: 2;
}

.table__text_theme_dark {
  margin-bottom: 0;
}

.kaufman__triangle {
  background-image: url(../images/kaufman-triangle.svg);
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: 0;
  right: -210px;
  min-width: 877px;
  min-height: 877px;
}

.footer {
  min-height: 350px;
  box-sizing: border-box;
  display: flex;
  background-color: #1f1f1f;
  padding: 60px 0 40px;
}

.footer__columns {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
}

.footer__column_content_copyright {
  flex-basis: 711px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.logo_place_footer {
  max-width: 183px;
}

.footer__author {
  margin: 18px 0;
  line-height: 25px;
  font-size: 18px;
  font-weight: normal;
  color: white;
}

.footer__column-heading {
  margin:  0 0 20px;
  line-height: 30px;
  font-size: 18px;
  font-weight: bold;
  color: white;
}

.footer__column-links {
  list-style: none;
  margin: 0 0 16px;
  padding: 0;
}

.footer__column-link {
  text-decoration: none;
  line-height: 30px;
  font-size: 18px;
  font-weight: normal;
  color: white;
}

.footer__social-icon {
  margin-right: 10px;
  width: 16px;
  height: 16px;
}

`,q4=R(j4,M4),P4=`
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
`,W4=`
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

`,n4=`
* {
    animation: none !important;
    transform: none !important;
}

.video__iframe {
  background-color: black;
}
`,$4=R(P4,W4,n4),q=["page","header","description","techniques","video","oakley","feynman","digits","khan","kaufman","resources","footer"],l4=["blocks/cards/__description/cards__description.css","blocks/cards/__image/cards__image.css","blocks/cards/__item/cards__item.css","blocks/cards/__title/cards__title.css","blocks/cards/cards.css","blocks/description/description.css","blocks/digits/digits.css","blocks/feynman/__link/feynman__link.css","blocks/feynman/__subtitle/feynman__subtitle.css","blocks/feynman/__title/feynman__title.css","blocks/feynman/feynman.css","blocks/footer/__author/footer__author.css","blocks/footer/__column-heading/footer__column-heading.css","blocks/footer/__column-link/footer__column-link.css","blocks/footer/__column-links/footer__column-links.css","blocks/footer/__column/_content/footer__column_content_copyright.css","blocks/footer/__column/footer__column.css","blocks/footer/__columns/footer__columns.css","blocks/footer/__social-icon/footer__social-icon.css","blocks/footer/footer.css","blocks/header/__link/header__link.css","blocks/header/__main-illustration/header__main-illustration.css","blocks/header/__square-pic/header__square-pic.css","blocks/header/__subtitle/header__subtitle.css","blocks/header/__title/header__title.css","blocks/header/header.css","blocks/kaufman/__triangle/kaufman__triangle.css","blocks/kaufman/kaufman.css","blocks/khan/__author/khan__author.css","blocks/khan/__book-container/khan__book-container.css","blocks/khan/__book-pic/khan__book-pic.css","blocks/khan/__buy-link/khan__buy-link.css","blocks/khan/__container/khan__container.css","blocks/khan/__quote-author-subline/khan__quote-author-subline.css","blocks/khan/__quote-author/khan__quote-author.css","blocks/khan/__quote/khan__quote.css","blocks/khan/__title/khan__title.css","blocks/khan/khan.css","blocks/link/link.css","blocks/logo/_place/logo_place_footer.css","blocks/logo/_place/logo_place_header.css","blocks/logo/logo.css","blocks/oakley/oakley.css","blocks/page/page.css","blocks/resources/__logo-zone/resources__logo-zone.css","blocks/resources/__logo/resources__logo.css","blocks/resources/resources.css","blocks/rotation/rotation.css","blocks/section-subtitle/_theme/section-subtitle_theme_dark.css","blocks/section-subtitle/section-subtitle.css","blocks/section-title/_theme/section-title_theme_dark.css","blocks/section-title/section-title.css","blocks/table/__cell/_theme/table__cell_theme_dark.css","blocks/table/__cell/table__cell.css","blocks/table/__heading/_theme/table__heading_theme_dark.css","blocks/table/__heading/table__heading.css","blocks/table/__text/_theme/table__text_theme_dark.css","blocks/table/__text/table__text.css","blocks/table/_theme/table_theme_dark.css","blocks/table/table.css","blocks/techniques/__cards/techniques__cards.css","blocks/techniques/techniques.css","blocks/two-colomns/__brief/two-colomns__brief.css","blocks/two-colomns/__main-text/two-colomns__main-text.css","blocks/two-colomns/__paragraph/two-colomns__paragraph.css","blocks/two-colomns/__span-accent/two-colomns__span-accent.css","blocks/two-colomns/two-colomns.css","blocks/video/__iframe/video__iframe.css","blocks/video/__iframes/video__iframes.css","blocks/video/video.css"],V4=[".editorconfig","README.MD",...l4,"images/cards-attention.png","images/cards-competence.png","images/cards-interliving.png","images/cards-question.png","images/cards-recall.png","images/facebook_color_white.svg","images/feynman.png","images/header-image.png","images/instagram_color_white.svg","images/kaufman-triangle.svg","images/khan-book.jpg","images/logo/resources-arzamas.svg","images/logo/resources-n1.svg","images/logo/resources-polka.svg","images/logo/resources-strelka.svg","images/logo_place_footer.svg","images/logo_place_header.svg","images/vk_color_white.svg","index.html","pages/index.css","texts.md","vendor/normalize.css"];function U4(u){switch(u){case"./chrome/images.ts":return k(()=>import("./images.9272b6da.js"),[]);case"./edge-chromium/images.ts":return k(()=>import("./images.165be2b6.js"),[]);case"./firefox/images.ts":return k(()=>import("./images.b8a3cb2c.js"),[]);default:return new Promise(function(t,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+u)))})}}const K4=({html:u,css:t})=>{const{value:e,loading:a}=K(async()=>{const s=N(),{images:i}=await U4(`./${s.name}/images.ts`);return i});return!u||!t||a?null:o(i4,{html:R(u,t,n4),classNames:q,templates:e})},H4=()=>{const[u,t]=l.exports.useState(null),{html:e,css:a}=o4(u,l4);return u?E(F,{children:[o(e4,{html:e}),o(a4,{html:e}),o(Q,{zip:u,fileList:V4}),o(u4,{html:e,sectionList:q}),o(K4,{html:e,css:a})]}):o(F,{children:o(X,{onWorkLoad:t,title:"2 \u0440\u0430\u0431\u043E\u0442\u0430"})})};function Y4(){return o("div",{className:"App",children:E(g4,{basename:"/work-parser-vite/",children:[E("nav",{children:[o(H,{to:"/",className:"link",children:"home"}),o(H,{className:"link",to:"/generator",children:"generator"})]}),E(D4,{children:[o(Y,{path:"/",element:E(F,{children:[o(N4,{}),o(H4,{})]})}),o(Y,{path:"/generator",element:E(F,{children:[o(Z,{title:"\u0413\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043E\u043A \u043F\u0435\u0440\u0432\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B",html:q4,classList:M}),o(Z,{title:"\u0413\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043E\u043A \u0432\u0442\u043E\u0440\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B",html:$4,classList:q})]})})]})]})})}f4.render(o(b4.StrictMode,{children:o(Y4,{})}),document.getElementById("root"));
