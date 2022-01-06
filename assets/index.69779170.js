var S4=Object.defineProperty,z4=Object.defineProperties;var I4=Object.getOwnPropertyDescriptors;var J=Object.getOwnPropertySymbols;var O4=Object.prototype.hasOwnProperty,R4=Object.prototype.propertyIsEnumerable;var X=(u,e,t)=>e in u?S4(u,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[e]=t,S=(u,e)=>{for(var t in e||(e={}))O4.call(e,t)&&X(u,t,e[t]);if(J)for(var t of J(e))R4.call(e,t)&&X(u,t,e[t]);return u},N=(u,e)=>z4(u,I4(e));import{j as P,r as l,h as T4,d as V,J as Q,a as N4,R as u4,p as L4,u as e4,B as W4,b as M4,c as t4,e as q4}from"./vendor.c00f7920.js";const j4=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}};j4();const i=P.exports.jsx,c=P.exports.jsxs,O=P.exports.Fragment,U=l.exports.memo(l.exports.forwardRef(({html:u,onLoad:e,width:t},o)=>i("iframe",{ref:o,style:{width:`${t}px`,minHeight:"100vh",border:"none"},id:"myiframe",srcDoc:u,onLoad:e}))),L=(u=100)=>new Promise((e,t)=>{setTimeout(()=>{e()},u)});async function $(u,e,t){return u?await Promise.all(t.map(async o=>{const s=u.querySelector(`.${o}`),n=await T4(s,{useCORS:!0,scale:1});return{className:o,image:n,targetWidth:e}})):[]}var b;(function(u){u[u.min=1100]="min",u[u.max=1600]="max"})(b||(b={}));const o4=({html:u,classList:e,title:t})=>{const o=l.exports.useRef(null),[s,n]=l.exports.useState(b.min),[a,_]=l.exports.useState(!1);return c("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",maxWidth:"300px"},children:[i("h1",{children:t}),i("button",{onClick:async()=>{var C,h,p,k;const r=V();_(!0),n(b.min),await L();const F=await $((h=(C=o.current)==null?void 0:C.contentWindow)==null?void 0:h.document,b.min,e);n(b.max),await L();const x=await $((k=(p=o.current)==null?void 0:p.contentWindow)==null?void 0:k.document,b.max,e),B=[...F,...x].reduce((A,{className:f,image:y,targetWidth:v})=>{const E=y.toDataURL("image/png");return A.file(`${r==null?void 0:r.name}/${v}/${f}.png`,E.split("base64,")[1],{base64:!0}),A},new Q);N4(await B.generateAsync({type:"blob"}),`${r==null?void 0:r.name}.zip`),_(!1)},children:"Get images"}),a&&i(U,{ref:o,html:u,width:s})]})},i4=({onWorkLoad:u})=>i("div",{children:i("input",{type:"file",name:"file",onChange:async t=>{const o=await Q.loadAsync(t.target.files[0],{createFolders:!0}),s=Object.keys(o.files);if(o.files[s[0]].dir){const n=o.files[s[0]].name;o.files=s.slice(1).reduce((a,_)=>(a[_.replace(n,"")]=o.files[_],a),{})}u(o)}})}),H4=()=>"\u2705",$4=()=>"\u274C",K=u=>u?H4():$4(),G=u4.createContext({visibility:!1,setVisibility:u=>{}}),w=({title:u,children:e,valid:t,size:o=2,initialCollapsed:s=!0})=>{const{visibility:n}=l.exports.useContext(G),a=`h${o}`,[_,D]=l.exports.useState(s),r=t===void 0?null:K(t);return c("section",{style:{opacity:t?.5:1,display:!n&&t?"none":"block"},children:[c(a,{onClick:()=>{D(F=>!F)},style:{cursor:e?"pointer":"default"},children:[u," ",r]}),!_&&i("div",{children:e})]})},s4=({zip:u,fileList:e})=>{const t=e.every(o=>u.files[o]);return i(w,{title:"\u0424\u0430\u0439\u043B\u044B",valid:t,children:e.map(o=>c("div",{children:[K(!!u.files[o])," ",o]},o))})},P4=[".editorconfig","images/","images/facebook_color_white.svg","images/feynman.png","images/header-image.png","images/instagram_color_white.svg","images/kaufman-triangle.svg","images/logo_place_footer.svg","images/logo_place_header.svg","images/vk_color_white.svg","index.html","styles/","styles/normalize.css","styles/style.css","texts.md"],n4=({html:u,sectionList:e})=>{const[t,o]=l.exports.useState(null);return l.exports.useEffect(()=>{if(!u)return;const a=new DOMParser().parseFromString(u,"text/html").querySelectorAll(`${e.map(_=>`.${_}`).join(",")}`);o(Array.from(a))},[u]),t?i(w,{title:"\u0412\u0441\u0435 \u0441\u0435\u043A\u0446\u0438\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u044B \u0438 \u0432 \u043D\u0443\u0436\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435",valid:(t==null?void 0:t.length)===e.length,children:e.map((s,n)=>c("div",{children:[K(t==null?void 0:t[n].className.includes(s))," ",s]},s))}):null},Y=["page","header","description","digits","feynman","kaufman","footer"],a4=({html:u})=>{const[e,t]=l.exports.useState([]);return l.exports.useEffect(()=>{async function o(){if(!u)return;const s=new FormData;s.append("out","json"),s.append("content",u);const a=await(await fetch("https://html5.validator.nu/",{method:"POST",body:s})).json();t(a.messages)}o()},[u]),i(w,{title:"\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0442\u043E\u0440\u043E\u043C W3C",valid:!e.length,children:e.map(({message:o,extract:s,lastLine:n})=>c("div",{children:["line ",n,": ",i("b",{children:s}),", ",o]},o))})};var m;(function(u){u.NO_PARENT_BLOCK="NO_PARENT_BLOCK",u.RECURSIVE_ELEMENT="RECURSIVE_ELEMENT",u.ONLY_MODIFIER="ONLY_MODIFIER",u.RECURSIVE_BLOCK="RECURSIVE_BLOCK",u.ELEMENT_OF_ELEMENT="ELEMENT_OF_ELEMENT"})(m||(m={}));const V4={ru:{[m.ELEMENT_OF_ELEMENT]:"\u041D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",[m.RECURSIVE_BLOCK]:"\u0411\u043B\u043E\u043A \u0432\u043B\u043E\u0436\u0435\u043D \u0432 \u0431\u043B\u043E\u043A \u0441 \u0442\u0430\u043A\u0438\u043C \u0436\u0435 \u0438\u043C\u0435\u043D\u0435\u043C",[m.RECURSIVE_ELEMENT]:"\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432\u043B\u043E\u0436\u0435\u043D \u0432 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0441 \u0442\u0430\u043A\u0438\u043C \u0436\u0435 \u0438\u043C\u0435\u043D\u0435\u043C",[m.NO_PARENT_BLOCK]:"\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0431\u0435\u0437 \u0431\u043B\u043E\u043A\u0430 \u0432 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F\u0445",[m.ONLY_MODIFIER]:"\u041C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0431\u0435\u0437 \u0431\u043B\u043E\u043A\u0430 \u0438\u043B\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430"},en:{[m.ELEMENT_OF_ELEMENT]:"It could not be element of element",[m.RECURSIVE_BLOCK]:"Block is in block with same name",[m.RECURSIVE_ELEMENT]:"Element is in element with same name",[m.NO_PARENT_BLOCK]:"Element was used without block as parent",[m.ONLY_MODIFIER]:"Modifier was used without block or element"}};function l4(u,e=[]){const t=[],o=[...u.classList],s=[...e,o];return o.forEach(n=>{const{blockName:a,elementName:_,modifierName:D}=K4(n);_&&!e.flat().find(r=>r===a)&&t.push({code:m.NO_PARENT_BLOCK,className:n,parentArray:e}),_&&e.flat().find(r=>r===`${a}__${_}`)&&t.push({code:m.RECURSIVE_ELEMENT,className:n,parentArray:e}),D&&!o.find(r=>_?r===`${a}__${_}`:a===r)&&t.push({code:m.ONLY_MODIFIER,className:n,parentArray:e}),!_&&!D&&e.flat().some(r=>r===a)&&t.push({code:m.RECURSIVE_BLOCK,className:n,parentArray:e}),n.split("__").length>2&&t.push({code:m.ELEMENT_OF_ELEMENT,className:n,parentArray:e})}),u.children&&[...u.children].forEach(n=>{const a=l4(n,s);t.push(...a)}),t}function U4(u){return u.filter(e=>e.length>0).map(e=>Array.isArray(e)?e.join("."):e).join(" > ")}function K4(u){const e=/^([a-z-0-9]*)(__)?([a-z-0-9]*)(_)?([a-z-0-9]*)?(_)?([a-z-0-9])?/i,[,t,,o,,s,,n]=e.exec(u);return{blockName:t,elementName:o,modifierName:s,modifierValue:n}}const r4=({html:u})=>{if(!u)return null;const e=new DOMParser().parseFromString(u,"text/html"),t=l4(e.body);return i(w,{title:"\u0411\u042D\u041C",valid:!t.length,children:t.map(({code:o,className:s,parentArray:n},a)=>c("div",{children:[i("b",{children:V4.ru[o]})," \u042D\u043B\u0435\u043C\u0435\u043D\u0442:"," ",i("u",{children:s})," \u043F\u0443\u0442\u044C \u0434\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430"," ",i("u",{children:U4(n)})]},a))})},G4="modulepreload",c4={},Y4="/work-parser-vite/",T=function(e,t){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=`${Y4}${o}`,o in c4)return;c4[o]=!0;const s=o.endsWith(".css"),n=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":G4,s||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),s)return new Promise((_,D)=>{a.addEventListener("load",_),a.addEventListener("error",D)})})).then(()=>e())};async function Z4(u){return new Promise((e,t)=>{const o=new Image;o.crossOrigin="anonymous",o.src=u,o.onload=()=>{e(o)},o.onerror=t})}const J4=({imageData:u,pixelCount:e})=>{const t=l.exports.useRef(null);return l.exports.useEffect(()=>{if(!t.current)return;const o=document.createElement("canvas"),s=o.getContext("2d");o.width=u.width,o.height=u.height,s.putImageData(u,0,0),t.current.src=o.toDataURL("image/png")},[u,t.current]),c("div",{children:[c("div",{children:["\u0420\u0430\u0437\u043D\u0438\u0446\u0430 \u043F\u0438\u043A\u0441\u0435\u043B\u0435\u0439: ",e]}),i("img",{ref:t})]})},_4=({html:u,classNames:e,templates:t})=>{const o=l.exports.useRef(null),[s,n]=l.exports.useState(!1),[a,_]=l.exports.useState(null),[D,r]=l.exports.useState([]),[F,x]=l.exports.useState(b.min),[B,C]=l.exports.useState([]);return l.exports.useEffect(()=>{async function h(){var A,f,y,v;x(b.min),await L();const p=await $((f=(A=o.current)==null?void 0:A.contentWindow)==null?void 0:f.document,b.min,e);x(b.max),await L();const k=await $((v=(y=o.current)==null?void 0:y.contentWindow)==null?void 0:v.document,b.max,e);_([...p,...k])}setTimeout(()=>h(),1e3)},[s]),l.exports.useEffect(()=>{async function h(){if(!a)return;const p=await Promise.all(a.map(async({targetWidth:k,className:A,image:f})=>{const y=await Z4(t[k][A]),v=f,{width:E,height:R}=y,g=document.createElement("canvas");g.width=E,g.height=R;const d=g.getContext("2d"),j=d.createImageData(E,R);d.drawImage(y,0,0);const H=d.getImageData(0,0,E,R).data,v4=L4(H,v.getContext("2d").getImageData(0,0,E,R).data,j.data,E,R,{threshold:.1,includeAA:!0,diffColorAlt:[0,0,255]});return{key:`${k}-${A}`,pixelCount:v4,imageData:j}}));r(p)}h()},[a]),l.exports.useEffect(()=>{var h;!s||C(X4((h=o.current)==null?void 0:h.contentDocument))},[s,C,o.current]),c("div",{children:[!a&&i(U,{ref:o,html:u,onLoad:()=>n(!0),width:F}),i(w,{title:"\u041D\u0435 \u0441\u043A\u0440\u043E\u043B\u0438\u0442\u044C\u0441\u044F \u043F\u043E \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u0438",valid:!B.length,children:B.length?i("div",{children:B.map((h,p)=>i("div",{children:h},p))}):i("div",{children:"\u0412\u0441\u0451 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0445\u043E\u0440\u043E\u0448\u043E"})}),i(w,{title:"\u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442\u044B",valid:D.reduce((h,{pixelCount:p})=>h+p,0)<3e4,children:D.map(h=>i(w,{title:`${h.key}`,valid:h.pixelCount<h.imageData.height*h.imageData.width*.1,size:4,children:i(J4,S({},h))},h.key))})]})};function X4(u){if(!u)return[];const e=document.documentElement.offsetWidth;return Array.from(u.querySelectorAll("*")).reduce((o,s)=>{const n=s.getBoundingClientRect();return(n.right>e||n.left<0)&&window.getComputedStyle(s).position!=="absolute"&&o.push(s.className),o},[])}const Q4=`
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
`,W=(u,e,t="")=>{const o=new DOMParser().parseFromString(u,"text/html"),s=o.createElement("style");return s.innerHTML=`${Q4} ${e} ${t}`,o.head.appendChild(s),Array.from(o.head.querySelectorAll("link")).forEach(a=>a.remove()),o.documentElement.outerHTML.replaceAll(/\.{0,2}\/?images/g,"/work-parser-vite/images")};function u0(u){switch(u){case"./chrome/images.ts":return T(()=>import("./images.fc1253ea.js"),[]);case"./edge-chromium/images.ts":return T(()=>import("./images.2fdce438.js"),[]);case"./firefox/images.ts":return T(()=>import("./images.5e8f99fc.js"),[]);default:return new Promise(function(e,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+u)))})}}const e0=({html:u,css:e})=>{const{value:t,loading:o}=e4(async()=>{const s=V(),{images:n}=await u0(`./${s.name}/images.ts`);return n});return!u||!e||o?null:i(_4,{html:W(u,e),classNames:Y,templates:t})},h4=(u,e)=>{const[t,o]=l.exports.useState(),[s,n]=l.exports.useState();return l.exports.useEffect(()=>{async function a(){if(!u)return;const[_,...D]=await Promise.all([u.files["index.html"].async("text"),...e.map(r=>u.files[r].async("text"))]);o(_),n(D.join(""))}a()},[o,n,u]),{html:t,css:s}},t0=Object.keys,E4=u=>{const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(u);if(!e)return"";const{r:t,g:o,b:s}={r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)};return`rgb(${t}, ${o}, ${s})`};let d4=0;const z=(u="id")=>(d4++,`${u}${d4}`),o0=b.max,m4=({html:u,css:e,conditions:t})=>{const[o,s]=l.exports.useState([]),[n,a]=l.exports.useState(!1),_=l.exports.useRef(null);l.exports.useEffect(()=>{async function r(){if(await L(1e3),!u||!e||!_.current||n)return;const F=t.map(B=>{var v;const{selector:C,css:h={},count:p}=B,k=(v=_.current)==null?void 0:v.contentWindow,A=k.document.querySelector(C);if(!A)return N(S({},B),{errors:[i("div",{children:"\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"},z())]});const f=[];if(p){const E=k.document.querySelectorAll(C);E.length!==p&&f.push(c("div",{children:["\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 (",E.length,") \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443 (",p,")"]},z()))}const y=k.getComputedStyle(A);return t0(h).forEach((E,R)=>{const g=y[E],d=h[E];switch(E){case"top":case"bottom":case"left":case"right":x(g,d)||f.push(c("div",{children:["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 ",i("b",{children:E})," \u0440\u0430\u0432\u043D\u043E\u0435"," ",i("u",{children:g})," \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443 ",i("u",{children:d})]},z()));break;case"lineHeight":const j=d.includes("px")?d:`${parseInt(String(h.fontSize),10)*parseFloat(d)}px`;x(g,j)||f.push(c("div",{children:["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 ",i("b",{children:E})," \u0440\u0430\u0432\u043D\u043E\u0435"," ",i("u",{children:g})," \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443 ",i("u",{children:d})]},z()));break;case"width":if(d.includes("%")){const H=parseInt(d,10)*o0/100;x(H,g)||f.push(c("div",{children:["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 ",i("b",{children:E})," ","\u0440\u0430\u0432\u043D\u043E\u0435 ",i("u",{children:g})," \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443"," ",i("u",{children:d})," \u0432 \u043F\u0435\u0440\u0435\u0441\u0447\u0451\u0442\u0435 \u0438\u0437 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043E\u0432 ($",H,")"]},z()));return}x(g,d)||f.push(c("div",{children:["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 ",i("b",{children:E})," \u0440\u0430\u0432\u043D\u043E\u0435"," ",i("u",{children:g})," \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443 ",i("u",{children:d})]},z()));return;case"color":case"backgroundColor":E4(d)!==g&&f.push(c("div",{children:["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 ",i("b",{children:E})," \u0440\u0430\u0432\u043D\u043E\u0435"," ",i("u",{children:g})," \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443 ",i("u",{children:d})," (",E4(d),")"]},z()));return;default:g!==d&&f.push(c("div",{children:["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 ",i("b",{children:E})," \u0440\u0430\u0432\u043D\u043E\u0435"," ",i("u",{children:g})," \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443 ",i("u",{children:d})]},z()))}}),N(S({},B),{errors:f})});s(F),a(!0);function x(B,C){return parseInt(String(B),10)===parseInt(String(C),10)}}r()},[u,e,t,_.current,n]);const D=o.filter(({errors:r})=>!!r.length);return!u||!e?null:c(O,{children:[i(w,{title:"\u0411\u0440\u0438\u0444",valid:!D.length,children:o.map(({errors:r,selector:F,css:x},B)=>c(w,{title:F,valid:!r.length,size:4,initialCollapsed:!1,children:[r,x&&i(w,{title:"\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 css",size:5,valid:!r.length,children:Object.entries(x).map(([C,h],p)=>c("div",{children:[i("b",{children:C}),": ",i("u",{children:h})]},`${F}-${C}-${p}`))})]},F))}),!n&&i(U,{width:b.max,html:W(u,e),ref:_})]})};var I;(function(u){u.blue="#2f80ed",u.darkGray="#1f1f1f",u.lightGray="#f2f2f2",u.black="#000000",u.white="#FFFFFF"})(I||(I={}));const M={width:"960px",textAlign:"center",lineHeight:"1.15",fontSize:"60px",fontWeight:"700"},q={width:"960px",textAlign:"center",lineHeight:"34px",fontSize:"24px",fontWeight:"400"},p4={marginTop:"100px",marginBottom:"100px",width:"1280px",display:"flex",flexDirection:"row",justifyContent:"space-between"},g4={width:"175px",lineHeight:"1.2",fontSize:"18px",fontWeight:"400",color:I.blue},f4={width:"1024px",minWidth:"784px"},D4={lineHeight:"34px",fontSize:"24px",fontWeight:"400"},b4=[{selector:".header",css:{minHeight:"600px",maxHeight:"756px"}},{selector:".header .logo.logo_place_header",css:{position:"absolute",left:"64px",top:"30px",width:"183px",height:"32px"}},{selector:".header .header__title",css:{marginLeft:"64px",maxWidth:"730px",lineHeight:"96px",fontSize:"102px",fontWeight:"700"}},{selector:".header .header__subtitle",css:{position:"absolute",bottom:"30px",left:"64px",width:"388px",lineHeight:"25px",fontSize:"18px",fontWeight:"400"}},{selector:".header .header__subtitle a.header__link"},{selector:".header .header__main-illustration",css:{position:"absolute",right:"0",bottom:"0",width:"765px",height:"608px"}},{selector:".header .header__square-pic",css:{width:"568px",height:"568px",top:"64px",position:"absolute",right:"0"}}],C4=[{selector:".description .two-columns",css:p4},{selector:".description .two-columns .two-columns__brief",css:g4},{selector:".description .two-columns .two-columns__main-text",css:f4},{selector:".description .two-columns .two-columns__main-text .two-columns__paragraph",count:3,css:S({marginBottom:"30px"},D4)},{selector:".description .two-columns .two-columns__main-text .two-columns__paragraph:nth-of-type(2) .two-columns__span-accent",css:{lineHeight:"34px",fontSize:"24px",fontWeight:"700"}}],x4=[{selector:".digits",css:{marginTop:"100px",marginBottom:"100px"}},{selector:".digits .section-title",css:M},{selector:".digits .section-subtitle",css:q},{selector:".digits  .table",css:{width:"1100px"}},{selector:".digits  .table .table__cell",count:8,css:{width:"250px",marginTop:"60px"}},{selector:".digits  .table .table__cell .table__heading",count:8,css:{lineHeight:"1.15",fontSize:"24px",fontWeight:"700"}},{selector:".digits  .table .table__cell .table__text",count:10,css:{marginTop:"20px",lineHeight:"1.2",fontSize:"18px"}}],B4=[{selector:".feynman",css:{minHeight:"890px"}},{selector:".feynman .feynman__title",css:{width:"648px",lineHeight:"1.15",fontSize:"120px",fontWeight:"700"}},{selector:".feynman .feynman__subtitle",css:{lineHeight:"51px",fontSize:"36px",fontWeight:"400"}},{selector:".feynman .feynman__link",css:{position:"absolute",right:"48px",top:"445px",lineHeight:"51px",fontSize:"36px",fontWeight:"400",color:I.blue}}],F4=[{selector:".kaufman",css:{overflow:"hidden"}},{selector:".kaufman .section-title.section-title_theme_dark",css:N(S({},M),{color:I.white})},{selector:".kaufman .section-subtitle.section-subtitle_theme_dark",css:N(S({},q),{color:I.white})},{selector:".kaufman .table.table_theme_dark",css:{width:"1100px"}},{selector:".kaufman .table.table_theme_dark .table__cell.table__cell_theme_dark",count:10,css:{width:"200px",marginTop:"80px"}},{selector:".kaufman .table.table_theme_dark .table__cell.table__cell_theme_dark .table__heading.table__heading_theme_dark",count:10,css:{lineHeight:"1.15",fontSize:"24px",fontWeight:"700"}},{selector:".kaufman .table.table_theme_dark .table__cell.table__cell_theme_dark .table__text.table__text_theme_dark",count:10,css:{marginTop:"20px",lineHeight:"1.2",fontSize:"18px",color:I.white}},{selector:".kaufman .kaufman__triangle",css:{width:"877px",height:"877px",position:"absolute",right:"-210px"}}],k4=[{selector:".footer",css:{backgroundColor:I.darkGray,minHeight:"350px",paddingTop:"60px",paddingBottom:"40px"}},{selector:".footer .footer__columns",css:{width:"1440px",display:"flex",flexDirection:"row",justifyContent:"space-between"}},{selector:".footer__columns .footer__column.footer__column_content_copyright",css:{flexBasis:"711px"}},{selector:".footer__columns .footer__column.footer__column_content_info"},{selector:".footer__columns .footer__column.footer__column_content_social"},{selector:".footer .footer__author",css:{marginTop:"18px",marginBottom:"18px",lineHeight:"25px",fontSize:"18px",fontWeight:"400"}},{selector:".footer .footer__column.footer__column_content_info .footer__column-heading",css:{lineHeight:"30px",fontSize:"18px",fontWeight:"600"}},{selector:".footer .footer__column.footer__column_content_social .footer__column-heading",css:{lineHeight:"30px",fontSize:"18px",fontWeight:"600"}},{selector:".footer .footer__column.footer__column_content_info .footer__column-links",css:{marginBottom:"16px"}},{selector:".footer .footer__column.footer__column_content_info .footer__column-links .footer__column-link",count:3,css:{lineHeight:"30px",fontSize:"18px",fontWeight:"400"}},{selector:".footer .footer__column.footer__column_content_social .footer__column-links",css:{marginBottom:"16px"}},{selector:".footer .footer__column.footer__column_content_social .footer__column-links .footer__column-link",count:3,css:{lineHeight:"30px",fontSize:"18px",fontWeight:"400"}},{selector:".footer .footer__column.footer__column_content_social .footer__column-links .footer__column-link .footer__social-icon",count:3,css:{width:"16px",height:"16px"}},{selector:".footer .logo.logo_place_footer",css:{width:"183px",height:"35px"}}],i0=[...b4,...C4,...x4,...B4,...F4,...k4],s0=()=>{const[u,e]=l.exports.useState(null),{html:t,css:o}=h4(u,["styles/style.css"]);return u?c(O,{children:[i(m4,{html:t,css:o,conditions:i0}),i(a4,{html:t}),i(r4,{html:t}),i(s4,{zip:u,fileList:P4}),i(n4,{html:t,sectionList:Y}),i(e0,{html:t,css:o})]}):i(O,{children:i(i4,{onWorkLoad:e})})},n0=`
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

`,a0=`
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

`,l0=W(n0,a0),r0=`
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
`,c0=`
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

`,A4=`
* {
    animation: none !important;
    transform: none !important;
}

.video__iframe {
  background-color: black;
}
`,_0=W(r0,c0,A4),Z=["page","header","description","techniques","video","oakley","feynman","digits","khan","kaufman","resources","footer"],w4=["blocks/cards/__description/cards__description.css","blocks/cards/__image/cards__image.css","blocks/cards/__item/cards__item.css","blocks/cards/__title/cards__title.css","blocks/cards/cards.css","blocks/description/description.css","blocks/digits/digits.css","blocks/feynman/__link/feynman__link.css","blocks/feynman/__subtitle/feynman__subtitle.css","blocks/feynman/__title/feynman__title.css","blocks/feynman/feynman.css","blocks/footer/__author/footer__author.css","blocks/footer/__column-heading/footer__column-heading.css","blocks/footer/__column-link/footer__column-link.css","blocks/footer/__column-links/footer__column-links.css","blocks/footer/__column/_content/footer__column_content_copyright.css","blocks/footer/__column/footer__column.css","blocks/footer/__columns/footer__columns.css","blocks/footer/__social-icon/footer__social-icon.css","blocks/footer/footer.css","blocks/header/__link/header__link.css","blocks/header/__main-illustration/header__main-illustration.css","blocks/header/__square-pic/header__square-pic.css","blocks/header/__subtitle/header__subtitle.css","blocks/header/__title/header__title.css","blocks/header/header.css","blocks/kaufman/__triangle/kaufman__triangle.css","blocks/kaufman/kaufman.css","blocks/khan/__author/khan__author.css","blocks/khan/__book-container/khan__book-container.css","blocks/khan/__book-pic/khan__book-pic.css","blocks/khan/__buy-link/khan__buy-link.css","blocks/khan/__container/khan__container.css","blocks/khan/__quote-author-subline/khan__quote-author-subline.css","blocks/khan/__quote-author/khan__quote-author.css","blocks/khan/__quote/khan__quote.css","blocks/khan/__title/khan__title.css","blocks/khan/khan.css","blocks/link/link.css","blocks/logo/_place/logo_place_footer.css","blocks/logo/_place/logo_place_header.css","blocks/logo/logo.css","blocks/oakley/oakley.css","blocks/page/page.css","blocks/resources/__logo-zone/resources__logo-zone.css","blocks/resources/__logo/resources__logo.css","blocks/resources/resources.css","blocks/rotation/rotation.css","blocks/section-subtitle/_theme/section-subtitle_theme_dark.css","blocks/section-subtitle/section-subtitle.css","blocks/section-title/_theme/section-title_theme_dark.css","blocks/section-title/section-title.css","blocks/table/__cell/_theme/table__cell_theme_dark.css","blocks/table/__cell/table__cell.css","blocks/table/__heading/_theme/table__heading_theme_dark.css","blocks/table/__heading/table__heading.css","blocks/table/__text/_theme/table__text_theme_dark.css","blocks/table/__text/table__text.css","blocks/table/_theme/table_theme_dark.css","blocks/table/table.css","blocks/techniques/__cards/techniques__cards.css","blocks/techniques/techniques.css","blocks/two-colomns/__brief/two-colomns__brief.css","blocks/two-colomns/__main-text/two-colomns__main-text.css","blocks/two-colomns/__paragraph/two-colomns__paragraph.css","blocks/two-colomns/__span-accent/two-colomns__span-accent.css","blocks/two-colomns/two-colomns.css","blocks/video/__iframe/video__iframe.css","blocks/video/__iframes/video__iframes.css","blocks/video/video.css"],h0=[".editorconfig","README.MD",...w4,"images/cards-attention.png","images/cards-competence.png","images/cards-interliving.png","images/cards-question.png","images/cards-recall.png","images/facebook_color_white.svg","images/feynman.png","images/header-image.png","images/instagram_color_white.svg","images/kaufman-triangle.svg","images/khan-book.jpg","images/logo/resources-arzamas.svg","images/logo/resources-n1.svg","images/logo/resources-polka.svg","images/logo/resources-strelka.svg","images/logo_place_footer.svg","images/logo_place_header.svg","images/vk_color_white.svg","index.html","pages/index.css","texts.md","vendor/normalize.css"];function E0(u){switch(u){case"./chrome/images.ts":return T(()=>import("./images.9272b6da.js"),[]);case"./edge-chromium/images.ts":return T(()=>import("./images.165be2b6.js"),[]);case"./firefox/images.ts":return T(()=>import("./images.b8a3cb2c.js"),[]);default:return new Promise(function(e,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+u)))})}}const d0=({html:u,css:e})=>{const{value:t,loading:o}=e4(async()=>{const s=V(),{images:n}=await E0(`./${s.name}/images.ts`);return n});return!u||!e||o?null:i(_4,{html:W(u,e,A4),classNames:Z,templates:t})},m0=[...b4,{selector:".header .rotation",css:{animationDuration:"20s",animationTimingFunction:"linear"}},{selector:".header",css:{overflow:"hidden"}}],p0=[{selector:".techniques"},{selector:".techniques .section-title",css:M},{selector:".techniques .section-subtitle",css:q},{selector:".techniques .cards",css:{width:"920px",marginLeft:"auto",marginRight:"auto"}},{selector:".techniques .cards .cards__item",count:5,css:{marginTop:"60px",width:"240px"}},{selector:".techniques .cards .cards__item .cards__image",css:{borderRadius:"50%",width:"160px",height:"160px"}},{selector:".techniques .cards .cards__item .cards__title",css:{fontWeight:"700",fontSize:"24px",lineHeight:"1.15"}},{selector:".techniques .cards .cards__item .cards__description",css:{lineHeight:"23px",fontSize:"18px",fontWeight:"23px"}}],g0=[{selector:".video"},{selector:".video .section-title",css:M},{selector:".video .section-subtitle",css:q},{selector:".video .video__iframes",css:{width:"1050px"}},{selector:".video .video__iframes .video__iframe",count:2,css:{width:"515px",height:"316px"}}],f0=[{selector:".oakley"},{selector:".oakley .two-columns",css:p4},{selector:".oakley .two-columns .two-columns__brief",css:g4},{selector:".oakley .two-columns .two-columns__main-text",css:f4},{selector:".oakley .two-columns .two-columns__main-text .two-columns__paragraph",css:S({marginBottom:"30px"},D4)}],D0=[{selector:".khan"},{selector:".khan .khan__container",css:{width:"1280px"}},{selector:".khan .khan__author",css:{lineHeight:"42px",fontSize:"30px",fontWeight:"400"}},{selector:".khan .khan__title",css:{lineHeight:"1.15",fontSize:"60px",fontWeight:"700"}},{selector:".khan .khan__quote",css:{width:"790px",lineHeight:"34px",fontSize:"24px",fontWeight:"400"}},{selector:".khan .khan__quote-author",css:{lineHeight:"1.15",fontSize:"24px",fontWeight:"700"}},{selector:".khan .khan__quote-author-subline",css:{lineHeight:"1.15",fontSize:"24px",fontWeight:"400"}},{selector:".khan .khan__book-container",css:{display:"flex",flexDirection:"row",justifyContent:"flex-start"}},{selector:".khan .khan__book-container .khan__book-pic",css:{width:"620px",height:"608px"}},{selector:".khan .khan__book-container .khan__buy-link",css:{lineHeight:"42px",fontSize:"30px",fontWeight:"400"}}],b0=[...F4,{selector:".kaufman .kaufman__triangle.rotation",css:{animationDuration:"20s",animationTimingFunction:"linear"}}],C0=[{selector:".resources"},{selector:".resources .section-title",css:M},{selector:".resources .section-subtitle",css:q},{selector:".resources .resources__logo-zone",css:{display:"flex",flexDirection:"row",width:"1100px"}},{selector:".resources .resources__logo",count:4,css:{width:"270px",height:"38px"}}],x0=[...m0,...C4,...p0,...g0,...f0,...B4,...x4,...D0,...b0,...C0,...k4],B0=()=>{const[u,e]=l.exports.useState(null),{html:t,css:o}=h4(u,w4);return u?c(O,{children:[i(m4,{conditions:x0,html:t,css:o}),i(a4,{html:t}),i(r4,{html:t}),i(s4,{zip:u,fileList:h0}),i(n4,{html:t,sectionList:Z}),i(d0,{html:t,css:o})]}):i(O,{children:i(i4,{onWorkLoad:e})})},F0=()=>{const{visibility:u,setVisibility:e}=l.exports.useContext(G);return c("div",{children:[i("label",{htmlFor:"visibility",children:"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438"}),i("input",{id:"visibility",type:"checkbox",checked:u,onChange:t=>{e(t.target.checked)}})]})},y4=({title:u,children:e})=>c("section",{children:[i("h1",{children:u}),e]});function k0(){const[u,e]=l.exports.useState(!1);return i("div",{className:"App",children:i(W4,{basename:"/work-parser-vite/",children:c(G.Provider,{value:{visibility:u,setVisibility:e},children:[i(F0,{}),c(M4,{children:[i(t4,{path:"/",element:c(O,{children:[i(y4,{title:"1 \u0440\u0430\u0431\u043E\u0442\u0430",children:i(s0,{})}),i(y4,{title:"2 \u0440\u0430\u0431\u043E\u0442\u0430",children:i(B0,{})})]})}),i(t4,{path:"/generator",element:c(O,{children:[i(o4,{title:"\u0413\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043E\u043A \u043F\u0435\u0440\u0432\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B",html:l0,classList:Y}),i(o4,{title:"\u0413\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043E\u043A \u0432\u0442\u043E\u0440\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B",html:_0,classList:Z})]})})]})]})})})}q4.render(i(u4.StrictMode,{children:i(k0,{})}),document.getElementById("root"));
