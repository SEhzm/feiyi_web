/* empty css             *//* empty css             */import{c as B,d as P,u as S,a as $,b as t,B as T,t as k,w as N,e as I,f as z,n as L,r as g,g as O,h as M,i as j,j as A,k as H,p as V,m as U,C as q,l as F,v as G,o as K,q as Y,_ as J,s as Q,x as W,y as X,z as e,A as n,E as Z,D as ee,F as te,G as oe,H as ne,I as ae}from"./index-1b5e1336.js";const[D,le]=B("collapse"),R=Symbol(D),se={border:k,accordion:Boolean,modelValue:{type:[String,Number,Array],default:""}};var ie=P({name:D,props:se,emits:["change","update:modelValue"],setup(l,{emit:i,slots:c}){const{linkChildren:r,children:x}=S(R),m=o=>{i("change",o),i("update:modelValue",o)},s=(o,u)=>{const{accordion:_,modelValue:h}=l;m(_?o===h?"":o:u?h.concat(o):h.filter(v=>v!==o))},d=(o={})=>{if(l.accordion)return;typeof o=="boolean"&&(o={expanded:o});const{expanded:u,skipDisabled:_}=o,v=x.filter(p=>p.disabled&&_?p.expanded.value:u??!p.expanded.value).map(p=>p.itemName.value);m(v)},f=o=>{const{accordion:u,modelValue:_}=l;return u?_===o:_.includes(o)};return $({toggleAll:d}),r({toggle:s,isExpanded:f}),()=>{var o;return t("div",{class:[le(),{[T]:l.border}]},[(o=c.default)==null?void 0:o.call(c)])}}});const ce=N(ie),[de,w]=B("collapse-item"),re=["icon","title","value","label","right-icon"],ue=I({},z,{name:L,isLink:k,disabled:Boolean,readonly:Boolean,lazyRender:k});var _e=P({name:de,props:ue,setup(l,{slots:i}){const c=g(),r=g(),{parent:x,index:m}=O(R);if(!x)return;const s=M(()=>{var a;return(a=l.name)!=null?a:m.value}),d=M(()=>x.isExpanded(s.value)),f=g(d.value),o=j(()=>f.value||!l.lazyRender),u=()=>{d.value?c.value&&(c.value.style.height=""):f.value=!1};A(d,(a,b)=>{if(b===null)return;a&&(f.value=!0),(a?K:Y)(()=>{if(!r.value||!c.value)return;const{offsetHeight:y}=r.value;if(y){const E=`${y}px`;c.value.style.height=a?"0":E,H(()=>{c.value&&(c.value.style.height=a?E:"0")})}else u()})});const _=(a=!d.value)=>{x.toggle(s.value,a)},h=()=>{!l.disabled&&!l.readonly&&_()},v=()=>{const{border:a,disabled:b,readonly:C}=l,y=V(l,Object.keys(z));return C&&(y.isLink=!1),(b||C)&&(y.clickable=!1),t(q,U({role:"button",class:w("title",{disabled:b,expanded:d.value,borderless:!a}),"aria-expanded":String(d.value),onClick:h},y),V(i,re))},p=o(()=>{var a;return F(t("div",{ref:c,class:w("wrapper"),onTransitionend:u},[t("div",{ref:r,class:w("content")},[(a=i.default)==null?void 0:a.call(i)])]),[[G,f.value]])});return $({toggle:_,expanded:d,itemName:s}),()=>t("div",{class:[w({border:m.value&&l.border})]},[v(),p()])}});const pe=N(_e);const me={setup(){const l=g(["1"]);return{value1:g(0),option1:[],activeNames:l}}},fe={class:"PC_Manager"},he=e("img",{style:{width:"50px"},src:"https://www.ihchina.cn/Uploads/Picture/2018/11/20/s5bf3825b320ab.png",alt:"logo"},null,-1),ve=e("div",{class:"flex-grow"},null,-1),xe=e("span",{style:{color:"white"}},"首页",-1),ye=e("span",{style:{color:"white"}},"测试",-1),ge=e("span",{style:{color:"white"}},"介绍",-1),be=e("span",null,"介绍1",-1),we=e("span",null,"介绍2",-1),Ce=e("span",{style:{color:"white"}},"分类1",-1),ke=e("span",{style:{color:"white"}},"分类2",-1),Ee=e("span",{style:{color:"white"}},"欣赏",-1),Me=e("span",null,"3D模型Demo",-1),Ve=e("span",null,"欣赏2",-1),Be=e("span",null,"欣赏3",-1),Pe={class:"MB_Manager"},$e=e("a",{href:"http://localhost:5173/feiyi_web/home"},[e("p",{style:{"font-size":"14px",color:"#323233","margin-left":"15px"}},"首页")],-1),Ne=e("a",{href:"http://localhost:5173/feiyi_web/introduce1"},[e("p",{style:{"margin-top":"0","margin-bottom":"0",color:"#323233"}},"介绍1")],-1),ze=e("a",{href:"http://localhost:5173/feiyi_web/introduce2"},[e("p",{style:{"margin-top":"10px","margin-bottom":"0",color:"#323233"}},"介绍2")],-1),De=e("a",{href:"http://localhost:5173/feiyi_web/classify1"},[e("p",{style:{"margin-top":"0","margin-bottom":"0",color:"#323233"}},"分类1")],-1),Re=e("a",{href:"http://localhost:5173/feiyi_web/classify2"},[e("p",{style:{"margin-top":"10px","margin-bottom":"0",color:"#323233"}},"分类2")],-1),Se=e("a",{href:"http://localhost:5173/feiyi_web/enjoy1"},[e("p",{style:{"margin-top":"0","margin-bottom":"0",color:"#323233"}},"欣赏1")],-1),Te=e("a",{href:"http://localhost:5173/feiyi_web/enjoy2"},[e("p",{style:{"margin-top":"10px","margin-bottom":"0",color:"#323233"}},"欣赏2")],-1),Ie={style:{flex:"1",padding:"0px"}};function Le(l,i,c,r,x,m){const s=te,d=oe,f=Z,o=pe,u=ce,_=ne,h=ae,v=ee,p=Q("router-view");return W(),X("div",null,[e("div",fe,[t(f,{router:"",class:"el-menu-demo",mode:"horizontal","active-text-color":"rgba(0,0,0,0.5)","background-color":"rgba(0,255,0,0)",ellipsis:!1,"default-active":l.$route.path,"default-openeds":["/home","2"]},{default:n(()=>[t(s,{index:"/home"},{default:n(()=>[he]),_:1}),ve,t(s,{index:"/home"},{default:n(()=>[xe]),_:1}),t(s,{index:"/test"},{default:n(()=>[ye]),_:1}),t(d,{index:"1"},{title:n(()=>[ge]),default:n(()=>[t(s,{index:"/introduce1"},{default:n(()=>[be]),_:1}),t(s,{index:"/introduce2"},{default:n(()=>[we]),_:1})]),_:1}),t(s,{index:"/classify1"},{default:n(()=>[Ce]),_:1}),t(s,{index:"/classify2"},{default:n(()=>[ke]),_:1}),t(d,{index:"1-1",class:"zla"},{title:n(()=>[Ee]),default:n(()=>[t(s,{index:"/Model_3D"},{default:n(()=>[Me]),_:1}),t(s,{index:"/enjoy1"},{default:n(()=>[Ve]),_:1}),t(s,{index:"/enjoy2"},{default:n(()=>[Be]),_:1})]),_:1})]),_:1},8,["default-active"])]),e("div",Pe,[e("div",null,[t(v,{class:"MB-menu"},{default:n(()=>[t(_,{modelValue:r.value1,"onUpdate:modelValue":i[1]||(i[1]=a=>r.value1=a),options:r.option1},{default:n(()=>[$e,t(u,{modelValue:r.activeNames,"onUpdate:modelValue":i[0]||(i[0]=a=>r.activeNames=a),accordion:""},{default:n(()=>[t(o,{title:"介绍",name:"1"},{default:n(()=>[Ne,ze]),_:1}),t(o,{title:"分类",name:"2"},{default:n(()=>[De,Re]),_:1}),t(o,{title:"欣赏",name:"3"},{default:n(()=>[Se,Te]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue","options"]),e("div",null,[t(h,{name:"wap-nav",size:"40",class:"menu-icon"})])]),_:1})])]),e("div",Ie,[t(p)])])}const He=J(me,[["render",Le]]);export{He as default};
