import{a1 as i,a2 as l,a as c,e as r,a3 as u,b as d,m,a4 as p}from"./index-dd9fff36.js";function f(){const e=l({show:!1}),o=s=>{e.show=s},t=s=>{r(e,s,{transitionAppear:!0}),o(!0)},a=()=>o(!1);return c({open:t,close:a,toggle:o}),{open:t,close:a,state:e,toggle:o}}function v(e){const o=i(e),t=document.createElement("div");return document.body.appendChild(t),{instance:o.mount(t),unmount(){o.unmount(),document.body.removeChild(t)}}}let n;const g={loop:!0,images:[],maxZoom:3,minZoom:1/3,onScale:void 0,onClose:void 0,onChange:void 0,vertical:!1,teleport:"body",className:"",showIndex:!0,closeable:!1,closeIcon:"clear",transition:void 0,beforeClose:void 0,doubleScale:!0,overlayStyle:void 0,overlayClass:void 0,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeOnClickOverlay:!0,closeIconPosition:"top-right"};function C(){({instance:n}=v({setup(){const{state:e,toggle:o}=f(),t=()=>{e.images=[]};return()=>d(p,m(e,{onClosed:t,"onUpdate:show":o}),null)}}))}const w=(e,o=0)=>{if(u)return n||C(),e=Array.isArray(e)?{images:e,startPosition:o}:e,n.open(r({},g,e)),n};export{w as s};
