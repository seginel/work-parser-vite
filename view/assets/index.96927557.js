var ke=Object.defineProperty,we=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var ye=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable;var ee=(e,t,o)=>t in e?ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,R=(e,t)=>{for(var o in t||(t={}))ye.call(t,o)&&ee(e,o,t[o]);if(Q)for(var o of Q(t))Se.call(t,o)&&ee(e,o,t[o]);return e},W=(e,t)=>we(e,Ce(t));import{R as te,j as G,r as c,o as ve,h as De,J as Ie,p as Oe,B as Fe,a as Ne,b as Re,c as Te}from"./vendor.00c31da2.js";const Ae=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}};Ae();const Y=te.createContext({visibility:!1,setVisibility:e=>{}}),u=G.exports.jsx,h=G.exports.jsxs,P=G.exports.Fragment,Be=()=>{const{visibility:e,setVisibility:t}=c.exports.useContext(Y);return h("div",{children:[u("label",{htmlFor:"visibility",children:"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438"}),u("input",{id:"visibility",type:"checkbox",checked:e,onChange:o=>{t(o.target.checked)}})]})};let L;async function ze(){L=await ve("my-db",1,{upgrade(e){e.createObjectStore("images")}})}var M;(function(e){e.images="images"})(M||(M={}));var U;(function(e){e.first="first",e.second="second"})(U||(U={}));const oe=(e,t)=>{const[o,n]=c.exports.useState(),[s,i]=c.exports.useState();return c.exports.useEffect(()=>{async function r(){if(!e)return;const l=Object.keys(e.files).filter(p=>e.files[p].dir?!1:p.includes(t)),[f,...a]=await Promise.all([e.files["index.html"].async("text"),...l.map(p=>e.files[p].async("text"))]);n(f),i(a.join(""))}r()},[n,i,e]),{html:o,css:s}},B=(e,t,o)=>`${e}-${t}-${o}`;var g;(function(e){e[e.min=1100]="min",e[e.max=1600]="max"})(g||(g={}));const We=(e,t,o)=>{const[n,s]=c.exports.useState(!0),[i,r]=c.exports.useState(!1);return c.exports.useEffect(()=>{async function l(){const f=await L.getAllKeys(M.images);r(t.every(a=>f.includes(B(e,a,g.min))&&f.includes(B(e,a,g.max)))),s(!1)}l()},[o,t,e]),{contains:i,loading:n}},H=c.exports.memo(c.exports.forwardRef(({html:e,onLoad:t,width:o,idValue:n},s)=>u("iframe",{ref:s,style:{width:`${o}px`,minHeight:"100vh",border:"none"},id:n,srcDoc:e,onLoad:t}))),$=(e=100)=>new Promise((t,o)=>{setTimeout(()=>{t()},e)});async function K(e,t,o){return e?await Promise.all(o.map(async n=>{const s=e.querySelector(`.${n}`),i=await De(s,{useCORS:!0,scale:1});return{className:n,image:i,targetWidth:t}})):[]}const Le=`
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
`,q=(e="",t="",o="")=>{const n=new DOMParser().parseFromString(e,"text/html"),s=n.createElement("style");return s.innerHTML=`${Le} ${t} ${o}`,n.head.appendChild(s),Array.from(n.head.querySelectorAll("link")).forEach(r=>r.remove()),n.documentElement.outerHTML.replaceAll(/\.{0,2}\/?images/g,"/work-parser-vite/images")},ne=`
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

`,Z=`
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
`,ue=async e=>{const t=await Ie.loadAsync(e,{createFolders:!0}),o=Object.keys(t.files);if(t.files[o[0]].dir){const n=t.files[o[0]].name;t.files=o.slice(1).reduce((s,i)=>(s[i.replace(n,"")]=t.files[i],s),{})}return t},Me=({classList:e,title:t,workKey:o,onComplete:n,templateFileName:s,cssFileMask:i})=>{const r=c.exports.useRef(null),[l,f]=c.exports.useState(g.min),[a,p]=c.exports.useState(!1),[k,w]=c.exports.useState(null),{html:S,css:d}=oe(k,i);return h("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",maxWidth:"300px"},children:[u("h1",{children:t}),u("button",{onClick:async()=>{var O,b,z,m;const v=await fetch(`/work-parser-vite/templates/${s}.zip`).then(_=>_.blob()),C=await ue(v);w(C),p(!0),f(g.min),await $();const y=await K((b=(O=r.current)==null?void 0:O.contentWindow)==null?void 0:b.document,g.min,e);f(g.max),await $();const F=await K((m=(z=r.current)==null?void 0:z.contentWindow)==null?void 0:m.document,g.max,e);await Promise.all([...y,...F].map(({className:_,image:A,targetWidth:N})=>{L.put("images",A.toDataURL("image/png"),B(o,_,N))})),p(!1),n()},children:"Get images"}),a&&u("div",{children:"\u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435 \u{1F570}"}),a&&u(H,{ref:r,html:q(S,d,ne),width:l,idValue:"myiframe"})]})},He=({onWorkLoad:e})=>u("div",{children:u("input",{type:"file",name:"file",onChange:async o=>{const n=await ue(o.target.files[0]);e(n)}})}),$e=()=>"\u2705",qe=()=>"\u274C",X=e=>e?$e():qe(),D=({title:e,children:t,valid:o,size:n=2,initialCollapsed:s=!0})=>{const{visibility:i}=c.exports.useContext(Y),r=`h${n}`,[l,f]=c.exports.useState(s),a=o===void 0?null:X(o);return h("section",{style:{opacity:o?.5:1,display:!i&&o?"none":"block",borderBottom:"1px solid gray"},children:[h(r,{onClick:()=>{f(p=>!p)},style:{cursor:t?"pointer":"default"},children:[e," ",a]}),!l&&u("div",{children:t})]})},Ve=Object.keys,se=e=>{const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);if(!t)return"";const{r:o,g:n,b:s}={r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)};return`rgb(${o}, ${n}, ${s})`};let ie=0;const T=(e="id")=>(ie++,`${e}${ie}`),je=g.max,Pe=({html:e,css:t,conditions:o})=>{const[n,s]=c.exports.useState([]),[i,r]=c.exports.useState(!1),l=c.exports.useRef(null);c.exports.useEffect(()=>{async function a(){if(await $(1e3),!e||!t||!l.current||i)return;const p=o.map(w=>{var O;const{selector:S,css:d={},count:E}=w,v=(O=l.current)==null?void 0:O.contentWindow,C=v.document.querySelector(S);if(!C)return W(R({},w),{errors:[u("div",{className:"errorText",children:"\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D. \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043E\u0448\u0438\u0431\u043A\u0430 \u0432 \u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u043A\u043B\u0430\u0441\u0441\u043E\u0432"},T())]});const y=[];if(E){const b=v.document.querySelectorAll(S);b.length!==E&&y.push(h("div",{children:["\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 (",b.length,") \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443 (",E,")"]},T()))}const F=v.getComputedStyle(C);return Ve(d).forEach((b,z)=>{const m=F[b],_=d[b];switch(b){case"top":case"bottom":case"left":case"right":k(m,_)||y.push(h("div",{children:["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 ",u("b",{children:b})," \u0440\u0430\u0432\u043D\u043E\u0435"," ",u("u",{children:m})," \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443 ",u("u",{children:_})]},T()));break;case"lineHeight":const A=_.includes("px")?_:`${parseInt(String(d.fontSize),10)*parseFloat(_)}px`;k(m,A)||y.push(h("div",{children:["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 ",u("b",{children:b})," \u0440\u0430\u0432\u043D\u043E\u0435"," ",u("u",{children:m})," \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443 ",u("u",{children:_})]},T()));break;case"width":if(_.includes("%")){const N=parseInt(_,10)*je/100;k(N,m)||y.push(h("div",{children:["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 ",u("b",{children:b})," ","\u0440\u0430\u0432\u043D\u043E\u0435 ",u("u",{children:m})," \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443"," ",u("u",{children:_})," \u0432 \u043F\u0435\u0440\u0435\u0441\u0447\u0451\u0442\u0435 \u0438\u0437 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043E\u0432 ($",N,")"]},T()));return}k(m,_)||y.push(h("div",{children:["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 ",u("b",{children:b})," \u0440\u0430\u0432\u043D\u043E\u0435"," ",u("u",{children:m})," \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443 ",u("u",{children:_})]},T()));return;case"color":case"backgroundColor":se(_)!==m&&y.push(h("div",{children:["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 ",u("b",{children:b})," \u0440\u0430\u0432\u043D\u043E\u0435"," ",u("u",{children:m})," \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443 ",u("u",{children:_})," (",se(_),")"]},T()));return;default:m!==_&&y.push(h("div",{children:["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 ",u("b",{children:b})," \u0440\u0430\u0432\u043D\u043E\u0435"," ",u("u",{children:m})," \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u043C\u0443 ",u("u",{children:_})]},T()))}}),W(R({},w),{errors:y})});s(p),r(!0);function k(w,S){return parseInt(String(w),10)===parseInt(String(S),10)}}a()},[e,t,o,l.current,i]);const f=n.filter(({errors:a})=>!!a.length);return!e||!t?null:h(P,{children:[u(D,{title:"\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043F\u043E \u0431\u0440\u0438\u0444\u0443",valid:!f.length,children:n.map(({errors:a,selector:p,css:k},w)=>h(D,{title:p,valid:!a.length,size:4,initialCollapsed:!1,children:[a,k&&u(D,{title:"\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 css",size:5,valid:!a.length,children:Object.entries(k).map(([S,d],E)=>h("div",{children:[u("b",{children:S}),": ",u("u",{children:d})]},`${p}-${S}-${E}`))})]},p))}),!i&&u(H,{idValue:"myiframe",width:g.max,html:q(e,t,Z),ref:l}),u(D,{title:"\u041F\u0440\u043E\u0435\u043A\u0442 \u0432 \u0438\u0444\u0440\u0435\u0439\u043C\u0435 (\u0440\u0430\u0437\u043C\u0435\u0440 1100)",initialCollapsed:!0,children:u(H,{idValue:"narrowIframe",width:g.min,html:q(e,t,Z)})}),u(D,{title:"\u041F\u0440\u043E\u0435\u043A\u0442 \u0432 \u0438\u0444\u0440\u0435\u0439\u043C\u0435 (\u0440\u0430\u0437\u043C\u0435\u0440 1600)",initialCollapsed:!0,children:u(H,{idValue:"wideIframe",width:g.max,html:q(e,t,Z)})})]})},Ue=({html:e})=>{const[t,o]=c.exports.useState([]);return c.exports.useEffect(()=>{async function n(){if(!e)return;const s=new FormData;s.append("out","json"),s.append("content",e);const r=await(await fetch("https://html5.validator.nu/",{method:"POST",body:s})).json();o(r.messages)}n()},[e]),u(D,{title:"\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0442\u043E\u0440\u043E\u043C W3C",valid:!t.length,children:t.map(({message:n,extract:s,lastLine:i})=>h("div",{children:["line ",i,": ",u("b",{children:s}),", ",n]},n))})};var x;(function(e){e.NO_PARENT_BLOCK="NO_PARENT_BLOCK",e.RECURSIVE_ELEMENT="RECURSIVE_ELEMENT",e.ONLY_MODIFIER="ONLY_MODIFIER",e.RECURSIVE_BLOCK="RECURSIVE_BLOCK",e.ELEMENT_OF_ELEMENT="ELEMENT_OF_ELEMENT"})(x||(x={}));const Ke={ru:{[x.ELEMENT_OF_ELEMENT]:"\u041D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0443 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",[x.RECURSIVE_BLOCK]:"\u0411\u043B\u043E\u043A \u0432\u043B\u043E\u0436\u0435\u043D \u0432 \u0431\u043B\u043E\u043A \u0441 \u0442\u0430\u043A\u0438\u043C \u0436\u0435 \u0438\u043C\u0435\u043D\u0435\u043C",[x.RECURSIVE_ELEMENT]:"\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432\u043B\u043E\u0436\u0435\u043D \u0432 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0441 \u0442\u0430\u043A\u0438\u043C \u0436\u0435 \u0438\u043C\u0435\u043D\u0435\u043C",[x.NO_PARENT_BLOCK]:"\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0431\u0435\u0437 \u0431\u043B\u043E\u043A\u0430 \u0432 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F\u0445",[x.ONLY_MODIFIER]:"\u041C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0431\u0435\u0437 \u0431\u043B\u043E\u043A\u0430 \u0438\u043B\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430"},en:{[x.ELEMENT_OF_ELEMENT]:"It could not be element of element",[x.RECURSIVE_BLOCK]:"Block is in block with same name",[x.RECURSIVE_ELEMENT]:"Element is in element with same name",[x.NO_PARENT_BLOCK]:"Element was used without block as parent",[x.ONLY_MODIFIER]:"Modifier was used without block or element"}};function re(e,t=[]){const o=[],n=[...e.classList],s=[...t,n];return n.forEach(i=>{const{blockName:r,elementName:l,modifierName:f}=Ye(i);l&&!t.flat().find(a=>a===r)&&o.push({code:x.NO_PARENT_BLOCK,className:i,parentArray:t}),l&&t.flat().find(a=>a===`${r}__${l}`)&&o.push({code:x.RECURSIVE_ELEMENT,className:i,parentArray:t}),f&&!n.find(a=>l?a===`${r}__${l}`:r===a)&&o.push({code:x.ONLY_MODIFIER,className:i,parentArray:t}),!l&&!f&&t.flat().some(a=>a===r)&&o.push({code:x.RECURSIVE_BLOCK,className:i,parentArray:t}),i.split("__").length>2&&o.push({code:x.ELEMENT_OF_ELEMENT,className:i,parentArray:t})}),e.children&&[...e.children].forEach(i=>{const r=re(i,s);o.push(...r)}),o}function Ge(e){return e.filter(t=>t.length>0).map(t=>Array.isArray(t)?t.join("."):t).join(" > ")}function Ye(e){const t=/^([a-z-0-9]*)(__)?([a-z-0-9]*)(_)?([a-z-0-9]*)?(_)?([a-z-0-9])?/i,[,o,,n,,s,,i]=t.exec(e);return{blockName:o,elementName:n,modifierName:s,modifierValue:i}}const Ze=({html:e})=>{if(!e)return null;const t=new DOMParser().parseFromString(e,"text/html"),o=re(t.body);return u(D,{title:"\u0411\u042D\u041C",valid:!o.length,children:o.map(({code:n,className:s,parentArray:i},r)=>h("div",{children:[u("b",{children:Ke.ru[n]})," \u042D\u043B\u0435\u043C\u0435\u043D\u0442:"," ",u("u",{children:s})," \u043F\u0443\u0442\u044C \u0434\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430"," ",u("u",{children:Ge(i)})]},r))})},Xe=({zip:e,fileList:t})=>{const o=t.every(n=>n.split("|").some(s=>e.files[s]));return u(D,{title:"\u0424\u0430\u0439\u043B\u044B",valid:o,children:t.map(n=>h("div",{children:[X(!!e.files[n])," ",n]},n))})},Je=({html:e,sectionList:t})=>{const[o,n]=c.exports.useState(null);return c.exports.useEffect(()=>{if(!e)return;const r=new DOMParser().parseFromString(e,"text/html").querySelectorAll(`${t.map(l=>`.${l}`).join(",")}`);n(Array.from(r))},[e]),o?u(D,{title:"\u0412\u0441\u0435 \u0441\u0435\u043A\u0446\u0438\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u044B \u0438 \u0432 \u043D\u0443\u0436\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435",valid:(o==null?void 0:o.length)===t.length,children:t.map((s,i)=>{var r,l;return h("div",{children:[X((l=(r=o==null?void 0:o[i])==null?void 0:r.className)==null?void 0:l.includes(s))," ",s]},s)})}):null},Qe=({imageData:e,pixelCount:t})=>{const o=c.exports.useRef(null);return c.exports.useEffect(()=>{if(!o.current)return;const n=document.createElement("canvas"),s=n.getContext("2d");n.width=e.width,n.height=e.height,s.putImageData(e,0,0),o.current.src=n.toDataURL("image/png")},[e,o.current]),h("div",{children:[h("div",{children:["\u0420\u0430\u0437\u043D\u0438\u0446\u0430 \u043F\u0438\u043A\u0441\u0435\u043B\u0435\u0439: ",t]}),u("img",{ref:o})]})};async function et(e){return new Promise((t,o)=>{const n=new Image;n.crossOrigin="anonymous",n.src=e,n.onload=()=>{t(n)},n.onerror=o})}const tt=({html:e,classNames:t,workKey:o})=>{const n=c.exports.useRef(null),[s,i]=c.exports.useState(!1),[r,l]=c.exports.useState(null),[f,a]=c.exports.useState([]),[p,k]=c.exports.useState(g.min),[w,S]=c.exports.useState([]);return c.exports.useEffect(()=>{async function d(){var C,y,F,O;if(!s)return;k(g.min),await $();const E=await K((y=(C=n.current)==null?void 0:C.contentWindow)==null?void 0:y.document,g.min,t);k(g.max),await $();const v=await K((O=(F=n.current)==null?void 0:F.contentWindow)==null?void 0:O.document,g.max,t);l([...E,...v])}setTimeout(()=>d(),1e3)},[s]),c.exports.useEffect(()=>{async function d(){if(!r)return;const E=await Promise.all(r.map(async({targetWidth:v,className:C,image:y})=>{const F=B(o,C,v),O=await L.get(M.images,F),b=await et(O),z=y,{width:m,height:_}=b,A=document.createElement("canvas");A.width=m,A.height=_;const N=A.getContext("2d"),J=N.createImageData(m,_);N.drawImage(b,0,0);const xe=N.getImageData(0,0,m,_).data,Ee=Oe(xe,z.getContext("2d").getImageData(0,0,m,_).data,J.data,m,_,{threshold:.1,includeAA:!0,diffColorAlt:[0,0,255]});return{key:`${v}-${C}`,pixelCount:Ee,imageData:J}}));a(E)}d()},[r]),c.exports.useEffect(()=>{var d;!s||S(ot((d=n.current)==null?void 0:d.contentDocument))},[s,S,n.current]),h("div",{children:[!r&&u(H,{ref:n,html:e,onLoad:()=>i(!0),width:p,idValue:"myiframe"}),u(D,{title:"\u041D\u0435 \u0441\u043A\u0440\u043E\u043B\u0438\u0442\u044C\u0441\u044F \u043F\u043E \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u0438",valid:!w.length,children:w.length?u("div",{children:w.map((d,E)=>u("div",{children:d},E))}):u("div",{children:"\u0412\u0441\u0451 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0445\u043E\u0440\u043E\u0448\u043E"})}),u(D,{title:"\u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442\u044B",valid:f.reduce((d,{pixelCount:E})=>d+E,0)<3e4,children:f.map(d=>u(D,{title:`${d.key}`,valid:d.pixelCount<d.imageData.height*d.imageData.width*.1,size:4,children:u(Qe,R({},d))},d.key))})]})};function ot(e){if(!e)return[];const t=document.documentElement.offsetWidth;return Array.from(e.querySelectorAll("*")).reduce((n,s)=>{const i=s.getBoundingClientRect();return(i.right>t||i.left<0)&&window.getComputedStyle(s).position!=="absolute"&&n.push(s.className),n},[])}const ce=({workKey:e,classList:t,fileList:o,cssFileMask:n,templateFileName:s,brief:i,title:r})=>{const[l,f]=c.exports.useState(null),{html:a,css:p}=oe(l,n),[k,w]=c.exports.useState(0),{contains:S,loading:d}=We(e,t,k),E=async()=>{await Promise.all(t.map(C=>[B(e,C,g.min),B(e,C,g.max)]).flat().map(C=>L.delete(M.images,C))),w(Date.now())};if(!d&&!S)return u(Me,{title:`\u0413\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043E\u043A ${r}`,classList:t,workKey:e,onComplete:()=>w(Date.now()),cssFileMask:n,templateFileName:s});const v=l?h(P,{children:[u(Pe,{html:a,css:p,conditions:i}),u(Ue,{html:a}),u(Ze,{html:a}),u(Xe,{zip:l,fileList:o}),u(Je,{html:a,sectionList:t}),u(tt,{html:q(a,p,ne),classNames:t,workKey:e})]}):h(P,{children:[u("div",{className:"steps",children:"\u0414\u043B\u044F \u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C zip-\u0444\u0430\u0439\u043B \u0441 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u043C"}),u(He,{onWorkLoad:f}),u("button",{onClick:E,style:{fontSize:"10px",marginTop:"10px"},children:"\u267B\uFE0F \u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438"})]});return h("section",{children:[h("h1",{children:[r," ",l&&u("button",{style:{cursor:"pointer"},onClick:()=>f(null),children:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C"})]}),v]})},nt=["page","header","description","digits","feynman","kaufman","footer"],ut=[".editorconfig","images/","images/facebook_color_white.svg","images/feynman.png","images/header-image.png","images/instagram_color_white.svg","images/kaufman-triangle.svg","images/logo_place_footer.svg","images/logo_place_header.svg","images/vk_color_white.svg","index.html","styles/","styles/normalize.css","styles/style.css"];var I;(function(e){e.blue="#2f80ed",e.darkGray="#1f1f1f",e.lightGray="#f2f2f2",e.black="#000000",e.white="#FFFFFF"})(I||(I={}));const V={width:"960px",textAlign:"center",lineHeight:"1.15",fontSize:"60px",fontWeight:"600"},j={width:"960px",textAlign:"center",lineHeight:"34px",fontSize:"24px",fontWeight:"400"},ae={width:"1280px",display:"flex",flexDirection:"row",justifyContent:"space-between"},le={maxWidth:"175px",lineHeight:"1.2",fontSize:"18px",fontWeight:"400",color:I.blue,marginTop:"0",marginBottom:"0"},de={width:"1024px",minWidth:"784px"},he={lineHeight:"34px",fontSize:"24px",fontWeight:"400"},_e=[{selector:".header",css:{minHeight:"600px",maxHeight:"756px",overflow:"hidden"}},{selector:".header .logo",css:{width:"228px",height:"32px"}},{selector:".header .logo.logo_place_header",css:{position:"absolute",left:"64px",top:"30px",width:"228px",height:"32px"}},{selector:".header .header__title",css:{marginLeft:"64px",maxWidth:"730px",lineHeight:"96px",fontSize:"102px",fontWeight:"600",marginTop:"0",marginBottom:"0"}},{selector:".header .header__subtitle",css:{position:"absolute",bottom:"30px",left:"64px",maxWidth:"388px",lineHeight:"25px",fontSize:"18px",fontWeight:"400",marginTop:"0",marginBottom:"0"}},{selector:".header .header__subtitle a.header__link",css:{color:I.blue,textDecorationLine:"none"}},{selector:".header .header__main-illustration",css:{position:"absolute",right:"0",bottom:"0",width:"765px",height:"608px",objectFit:"cover"}},{selector:".header .header__square-pic",css:{width:"568px",height:"568px",top:"64px",position:"absolute",right:"0",backgroundColor:I.blue}}],me=[{selector:".description .two-columns",css:ae},{selector:".description .two-columns .two-columns__brief",css:le},{selector:".description .two-columns .two-columns__main-text",css:de},{selector:".description .two-columns .two-columns__main-text .two-columns__paragraph",count:3,css:R({marginBottom:"30px"},he)},{selector:".description .two-columns .two-columns__main-text .two-columns__paragraph:last-child",css:{marginBottom:"0"}},{selector:".description .two-columns .two-columns__main-text .two-columns__paragraph:nth-of-type(2) .two-columns__span-accent",css:{lineHeight:"34px",fontSize:"24px",fontWeight:"600"}}],fe=[{selector:".digits",css:{marginTop:"100px",marginBottom:"100px"}},{selector:".digits .section-title",css:V},{selector:".digits .section-subtitle",css:j},{selector:".digits  .table",css:{width:"1100px"}},{selector:".digits  .table .table__cell",count:8,css:{width:"250px",marginTop:"60px"}},{selector:".digits  .table .table__cell .table__heading",count:8,css:{lineHeight:"1.15",fontSize:"24px",fontWeight:"600"}},{selector:".digits  .table .table__cell .table__text",count:10,css:{marginTop:"20px",lineHeight:"1.2",fontSize:"18px"}}],pe=[{selector:".feynman",css:{minHeight:"890px",backgroundColor:I.lightGray}},{selector:".feynman .feynman__title",css:{maxWidth:"648px",lineHeight:"1.15",fontSize:"120px",fontWeight:"600",marginLeft:"auto",marginRight:"auto"}},{selector:".feynman .feynman__subtitle",css:{lineHeight:"51px",fontSize:"36px",fontWeight:"400",textAlign:"center",marginTop:"70px",marginBottom:"0"}},{selector:".feynman .feynman__link",css:{position:"absolute",right:"48px",top:"445px",lineHeight:"51px",fontSize:"36px",fontWeight:"400",color:I.blue,textDecorationLine:"none"}}],ge=[{selector:".kaufman",css:{overflow:"hidden",backgroundColor:I.darkGray}},{selector:".kaufman .section-title.section-title_theme_dark",css:W(R({},V),{color:I.white})},{selector:".kaufman .section-subtitle.section-subtitle_theme_dark",css:W(R({},j),{color:I.white})},{selector:".kaufman .table.table_theme_dark",css:{width:"1100px"}},{selector:".kaufman .table.table_theme_dark .table__cell.table__cell_theme_dark",count:10,css:{width:"200px",marginTop:"80px"}},{selector:".kaufman .table.table_theme_dark .table__cell.table__cell_theme_dark .table__heading.table__heading_theme_dark",count:10,css:{lineHeight:"1.15",fontSize:"24px",fontWeight:"600"}},{selector:".kaufman .table.table_theme_dark .table__cell.table__cell_theme_dark .table__text.table__text_theme_dark",count:10,css:{marginTop:"20px",lineHeight:"1.2",fontSize:"18px",color:I.white}},{selector:".kaufman .kaufman__triangle",css:{width:"877px",height:"877px",position:"absolute",right:"-210px",top:"0"}}],be=[{selector:".footer",css:{backgroundColor:I.darkGray,minHeight:"350px",display:"flex",paddingTop:"60px",paddingBottom:"40px"}},{selector:".footer .footer__columns",css:{width:"1440px",display:"flex",flexDirection:"row",justifyContent:"space-between"}},{selector:".footer__columns .footer__column.footer__column_content_copyright",css:{flexBasis:"711px"}},{selector:".footer__columns .footer__column.footer__column_content_info"},{selector:".footer__columns .footer__column.footer__column_content_social"},{selector:".footer .footer__author",css:{marginTop:"18px",marginBottom:"18px",lineHeight:"25px",fontSize:"18px",fontWeight:"400",position:"static"}},{selector:".footer .footer__column.footer__column_content_info .footer__column-heading",css:{lineHeight:"30px",fontSize:"18px",fontWeight:"600"}},{selector:".footer .footer__column.footer__column_content_social .footer__column-heading",css:{lineHeight:"30px",fontSize:"18px",fontWeight:"600"}},{selector:".footer .footer__column.footer__column_content_info .footer__column-links",css:{marginBottom:"16px"}},{selector:".footer .footer__column.footer__column_content_info .footer__column-links .footer__column-link",count:3,css:{lineHeight:"30px",fontSize:"18px",fontWeight:"400"}},{selector:".footer .footer__column.footer__column_content_social .footer__column-links",css:{marginBottom:"16px"}},{selector:".footer .footer__column.footer__column_content_social .footer__column-links .footer__column-link",count:3,css:{lineHeight:"30px",fontSize:"18px",fontWeight:"400"}},{selector:".footer .footer__column.footer__column_content_social .footer__column-links .footer__column-link .footer__social-icon",count:3,css:{width:"16px",height:"16px",marginRight:"10px"}},{selector:".footer .logo.logo_place_footer",css:{width:"228px",height:"32px"}}],st=[..._e,...me,...fe,...pe,...ge,...be],it=["page","header","description","techniques","video","oakley","feynman","digits","khan","kaufman","resources","footer"],rt=["blocks/cards/__description/cards__description.css","blocks/cards/__image/cards__image.css","blocks/cards/__item/cards__item.css","blocks/cards/__title/cards__title.css","blocks/cards/cards.css","blocks/description/description.css","blocks/digits/digits.css","blocks/feynman/__link/feynman__link.css","blocks/feynman/__subtitle/feynman__subtitle.css","blocks/feynman/__title/feynman__title.css","blocks/feynman/feynman.css","blocks/footer/__author/footer__author.css","blocks/footer/__column-heading/footer__column-heading.css","blocks/footer/__column-link/footer__column-link.css","blocks/footer/__column-links/footer__column-links.css","blocks/footer/__column/_content/footer__column_content_copyright.css","blocks/footer/__column/footer__column.css","blocks/footer/__columns/footer__columns.css","blocks/footer/__social-icon/footer__social-icon.css","blocks/footer/footer.css","blocks/header/__link/header__link.css","blocks/header/__main-illustration/header__main-illustration.css","blocks/header/__square-pic/header__square-pic.css","blocks/header/__subtitle/header__subtitle.css","blocks/header/__title/header__title.css","blocks/header/header.css","blocks/kaufman/__triangle/kaufman__triangle.css","blocks/kaufman/kaufman.css","blocks/khan/__author/khan__author.css","blocks/khan/__book-container/khan__book-container.css","blocks/khan/__book-pic/khan__book-pic.css","blocks/khan/__buy-link/khan__buy-link.css","blocks/khan/__container/khan__container.css","blocks/khan/__quote-author-subline/khan__quote-author-subline.css","blocks/khan/__quote-author/khan__quote-author.css","blocks/khan/__quote/khan__quote.css","blocks/khan/__title/khan__title.css","blocks/khan/khan.css","blocks/logo/_place/logo_place_footer.css","blocks/logo/_place/logo_place_header.css","blocks/logo/logo.css","blocks/oakley/oakley.css","blocks/page/page.css","blocks/resources/__logo-zone/resources__logo-zone.css","blocks/resources/__logo/resources__logo.css","blocks/resources/resources.css","blocks/rotation/rotation.css","blocks/section-subtitle/_theme/section-subtitle_theme_dark.css","blocks/section-subtitle/section-subtitle.css","blocks/section-title/_theme/section-title_theme_dark.css","blocks/section-title/section-title.css","blocks/table/__cell/_theme/table__cell_theme_dark.css","blocks/table/__cell/table__cell.css","blocks/table/__heading/_theme/table__heading_theme_dark.css","blocks/table/__heading/table__heading.css","blocks/table/__text/_theme/table__text_theme_dark.css","blocks/table/__text/table__text.css","blocks/table/_theme/table_theme_dark.css|blocks/table/__text/_theme/table__text_theme_dark.css","blocks/table/table.css","blocks/techniques/techniques.css","blocks/two-columns/__brief/two-columns__brief.css","blocks/two-columns/__main-text/two-columns__main-text.css","blocks/two-columns/__paragraph/two-columns__paragraph.css","blocks/two-columns/__span-accent/two-columns__span-accent.css","blocks/two-columns/two-columns.css","blocks/video/__iframe/video__iframe.css","blocks/video/__iframes/video__iframes.css","blocks/video/video.css"],ct=[".editorconfig","README.MD|README.md",...rt,"images/cards-attention.png","images/cards-competence.png","images/cards-interliving.png","images/cards-question.png","images/cards-recall.png","images/facebook_color_white.svg","images/feynman.png","images/header-image.png","images/instagram_color_white.svg","images/kaufman-triangle.svg","images/khan-book.jpg","images/logo/resources-arzamas.svg","images/logo/resources-n1.svg","images/logo/resources-polka.svg","images/logo/resources-strelka.svg","images/logo_place_footer.svg","images/logo_place_header.svg","images/vk_color_white.svg","index.html","pages/index.css","vendor/normalize.css"],at=[..._e,{selector:".header .rotation",css:{animationDuration:"20s",animationTimingFunction:"linear"}},{selector:".header",css:{overflow:"hidden"}}],lt=[{selector:".techniques"},{selector:".techniques .section-title",css:V},{selector:".techniques .section-subtitle",css:j},{selector:".techniques .cards",css:{width:"920px",marginLeft:"auto",marginRight:"auto"}},{selector:".techniques .cards .cards__item",count:5,css:{marginTop:"60px",width:"240px"}},{selector:".techniques .cards .cards__item .cards__image",css:{borderRadius:"50%",width:"160px",height:"160px"}},{selector:".techniques .cards .cards__item .cards__title",css:{fontWeight:"700",fontSize:"24px",lineHeight:"1.15"}},{selector:".techniques .cards .cards__item .cards__description",css:{lineHeight:"23px",fontSize:"18px",fontWeight:"400"}}],dt=[{selector:".video"},{selector:".video .section-title",css:V},{selector:".video .section-subtitle",css:j},{selector:".video .video__iframes",css:{width:"1050px"}},{selector:".video .video__iframes .video__iframe",count:2,css:{width:"515px",height:"316px"}}],ht=[{selector:".oakley"},{selector:".oakley .two-columns",css:ae},{selector:".oakley .two-columns .two-columns__brief",css:le},{selector:".oakley .two-columns .two-columns__main-text",css:de},{selector:".oakley .two-columns .two-columns__main-text .two-columns__paragraph",css:R({},he)}],_t=[{selector:".khan"},{selector:".khan .khan__container",css:{width:"1280px"}},{selector:".khan .khan__author",css:{lineHeight:"42px",fontSize:"30px",fontWeight:"400"}},{selector:".khan .khan__title",css:{lineHeight:"1.15",fontSize:"60px",fontWeight:"700"}},{selector:".khan .khan__quote",css:{width:"790px",lineHeight:"34px",fontSize:"24px",fontWeight:"400"}},{selector:".khan .khan__quote-author",css:{lineHeight:"1.15",fontSize:"24px",fontWeight:"700"}},{selector:".khan .khan__quote-author-subline",css:{lineHeight:"1.15",fontSize:"24px",fontWeight:"400"}},{selector:".khan .khan__book-container",css:{display:"flex",flexDirection:"row"}},{selector:".khan .khan__book-container .khan__book-pic",css:{width:"620px",height:"608px"}},{selector:".khan .khan__book-container .khan__buy-link",css:{lineHeight:"42px",fontSize:"30px",fontWeight:"400"}}],mt=[...ge,{selector:".kaufman .kaufman__triangle.rotation",css:{animationDuration:"20s",animationTimingFunction:"linear"}}],ft=[{selector:".resources"},{selector:".resources .section-title",css:V},{selector:".resources .section-subtitle",css:j},{selector:".resources .resources__logo-zone",css:{display:"flex",flexDirection:"row",width:"1100px"}},{selector:".resources .resources__logo",count:4,css:{width:"270px",height:"38px"}}],pt=[...at,...me,...lt,...dt,...ht,...pe,...fe,..._t,...mt,...ft,...be];function gt(){const[e,t]=c.exports.useState(!1);c.exports.useEffect(()=>{ze().then(()=>{t(!0)})});const[o,n]=c.exports.useState(!1);return e?u("div",{className:"App",children:u(Fe,{basename:"/work-parser-vite/",children:h(Y.Provider,{value:{visibility:o,setVisibility:n},children:[u(Be,{}),u(Ne,{children:u(Re,{path:"/",element:h(P,{children:[u(ce,{workKey:U.first,classList:nt,fileList:ut,brief:st,cssFileMask:"styles/style.css",templateFileName:"template1",title:"1 \u0440\u0430\u0431\u043E\u0442\u0430"}),u(ce,{workKey:U.second,classList:it,fileList:ct,brief:pt,cssFileMask:"blocks/",templateFileName:"template2",title:"2 \u0440\u0430\u0431\u043E\u0442\u0430"})]})})})]})})}):u("div",{children:"\u041F\u0440\u043E\u0433\u0440\u0435\u0432\u0430\u0435\u043C\u0441\u044F"})}Te.render(u(te.StrictMode,{children:u(gt,{})}),document.getElementById("root"));
