/* empty css             *//* empty css              *//* empty css             */import{c as $,d as B,u as S,a as P,b as o,B as I,t as T,w as N,e as L,f as z,n as O,r as b,g as j,h as E,i as A,j as H,k as U,p as V,m as q,C as F,l as G,v as J,o as K,q as Y,_ as Q,s as W,x as X,y as Z,z as e,A as s,E as ee,D as te,F as g,G as ne,H as oe,I as ae,J as se}from"./index-2fb5c1f0.js";const[D,le]=$("collapse"),R=Symbol(D),ie={border:T,accordion:Boolean,modelValue:{type:[String,Number,Array],default:""}};var de=B({name:D,props:ie,emits:["change","update:modelValue"],setup(l,{emit:t,slots:r}){const{linkChildren:u,children:x}=S(R),i=a=>{t("change",a),t("update:modelValue",a)},d=(a,_)=>{const{accordion:p,modelValue:f}=l;i(p?a===f?"":a:_?f.concat(a):f.filter(h=>h!==a))},c=(a={})=>{if(l.accordion)return;typeof a=="boolean"&&(a={expanded:a});const{expanded:_,skipDisabled:p}=a,h=x.filter(m=>m.disabled&&p?m.expanded.value:_??!m.expanded.value).map(m=>m.itemName.value);i(h)},v=a=>{const{accordion:_,modelValue:p}=l;return _?p===a:p.includes(a)};return P({toggleAll:c}),u({toggle:d,isExpanded:v}),()=>{var a;return o("div",{class:[le(),{[I]:l.border}]},[(a=r.default)==null?void 0:a.call(r)])}}});const re=N(de),[ce,C]=$("collapse-item"),ue=["icon","title","value","label","right-icon"],_e=L({},z,{name:O,isLink:T,disabled:Boolean,readonly:Boolean,lazyRender:T});var pe=B({name:ce,props:_e,setup(l,{slots:t}){const r=b(),u=b(),{parent:x,index:i}=j(R);if(!x)return;const d=E(()=>{var n;return(n=l.name)!=null?n:i.value}),c=E(()=>x.isExpanded(d.value)),v=b(c.value),a=A(()=>v.value||!l.lazyRender),_=()=>{c.value?r.value&&(r.value.style.height=""):v.value=!1};H(c,(n,w)=>{if(w===null)return;n&&(v.value=!0),(n?K:Y)(()=>{if(!u.value||!r.value)return;const{offsetHeight:y}=u.value;if(y){const M=`${y}px`;r.value.style.height=n?"0":M,U(()=>{r.value&&(r.value.style.height=n?M:"0")})}else _()})});const p=(n=!c.value)=>{x.toggle(d.value,n)},f=()=>{!l.disabled&&!l.readonly&&p()},h=()=>{const{border:n,disabled:w,readonly:k}=l,y=V(l,Object.keys(z));return k&&(y.isLink=!1),(w||k)&&(y.clickable=!1),o(F,q({role:"button",class:C("title",{disabled:w,expanded:c.value,borderless:!n}),"aria-expanded":String(c.value),onClick:f},y),V(t,ue))},m=a(()=>{var n;return G(o("div",{ref:r,class:C("wrapper"),onTransitionend:_},[o("div",{ref:u,class:C("content")},[(n=t.default)==null?void 0:n.call(t)])]),[[J,v.value]])});return P({toggle:p,expanded:c,itemName:d}),()=>o("div",{class:[C({border:i.value&&l.border})]},[h(),m()])}});const me=N(pe);const ve={setup(){const l=b(["1"]);return{value1:b(0),option1:[],activeNames:l}},methods:{navigateTo(l){this.$router.push(`/${l}`),this.$refs.item.toggle(!1)}}},fe={class:"PC_Manager"},ge=e("img",{style:{width:"50px"},src:"https://www.ihchina.cn/Uploads/Picture/2018/11/20/s5bf3825b320ab.png",alt:"logo"},null,-1),he=e("div",{class:"flex-grow"},null,-1),xe=e("span",{style:{color:"white"}},"首页",-1),ye=e("span",{style:{color:"white"}},"测试",-1),be=e("span",{style:{color:"white"}},"介绍",-1),we=e("span",null,"介绍1",-1),Ce=e("span",null,"介绍2",-1),ke=e("span",{style:{color:"white"}},"分类1",-1),Te=e("span",{style:{color:"white"}},"分类2",-1),Me=e("span",{style:{color:"white"}},"欣赏",-1),Ee=e("span",null,"3D模型Demo",-1),Ve=e("span",null,"欣赏2",-1),$e=e("span",null,"欣赏3",-1),Be={class:"MB_Manager"},Pe=e("p",{style:{"font-size":"14px",color:"#323233","margin-left":"15px"}},"首页",-1),Ne=[Pe],ze=e("p",{style:{"margin-top":"0","margin-bottom":"0",color:"#323233"}},"介绍1",-1),De=[ze],Re=e("p",{style:{"margin-top":"10px","margin-bottom":"0",color:"#323233"}},"介绍2",-1),Se=[Re],Ie=e("p",{style:{"margin-top":"0","margin-bottom":"0",color:"#323233"}},"分类1",-1),Le=[Ie],Oe=e("p",{style:{"margin-top":"10px","margin-bottom":"0",color:"#323233"}},"分类2",-1),je=[Oe],Ae=e("p",{style:{"margin-top":"0","margin-bottom":"0",color:"#323233"}},"欣赏1",-1),He=[Ae],Ue=e("p",{style:{"margin-top":"10px","margin-bottom":"0",color:"#323233"}},"欣赏2",-1),qe=[Ue],Fe=e("p",{style:{"margin-top":"10px","margin-bottom":"0",color:"#323233"}},"test",-1),Ge=[Fe],Je={style:{flex:"1",padding:"0px"}};function Ke(l,t,r,u,x,i){const d=ne,c=oe,v=ee,a=me,_=re,p=ae,f=se,h=te,m=W("router-view");return X(),Z("div",null,[e("div",fe,[o(v,{router:"",class:"el-menu-demo",mode:"horizontal","active-text-color":"rgba(0,0,0,0.5)","background-color":"rgba(0,255,0,0)",ellipsis:!1,"default-active":l.$route.path,"default-openeds":["/home","2"]},{default:s(()=>[o(d,{index:"/home"},{default:s(()=>[ge]),_:1}),he,o(d,{index:"/home"},{default:s(()=>[xe]),_:1}),o(d,{index:"/test"},{default:s(()=>[ye]),_:1}),o(c,{index:"1"},{title:s(()=>[be]),default:s(()=>[o(d,{index:"/introduce1"},{default:s(()=>[we]),_:1}),o(d,{index:"/introduce2"},{default:s(()=>[Ce]),_:1})]),_:1}),o(d,{index:"/classify1"},{default:s(()=>[ke]),_:1}),o(d,{index:"/classify2"},{default:s(()=>[Te]),_:1}),o(c,{index:"1-1",class:"zla"},{title:s(()=>[Me]),default:s(()=>[o(d,{index:"/Model_3D"},{default:s(()=>[Ee]),_:1}),o(d,{index:"/enjoy1"},{default:s(()=>[Ve]),_:1}),o(d,{index:"/enjoy2"},{default:s(()=>[$e]),_:1})]),_:1})]),_:1},8,["default-active"])]),e("div",Be,[e("div",null,[o(h,{class:"MB-menu"},{default:s(()=>[o(p,{modelValue:u.value1,"onUpdate:modelValue":t[9]||(t[9]=n=>u.value1=n),options:u.option1,ref:"item"},{default:s(()=>[e("a",{onClick:t[0]||(t[0]=g(n=>i.navigateTo("home"),["prevent"]))},Ne),o(_,{modelValue:u.activeNames,"onUpdate:modelValue":t[8]||(t[8]=n=>u.activeNames=n),accordion:""},{default:s(()=>[o(a,{title:"介绍",name:"1"},{default:s(()=>[e("a",{onClick:t[1]||(t[1]=g(n=>i.navigateTo("introduce1"),["prevent"]))},De),e("a",{onClick:t[2]||(t[2]=g(n=>i.navigateTo("introduce2"),["prevent"]))},Se)]),_:1}),o(a,{title:"分类",name:"2"},{default:s(()=>[e("a",{onClick:t[3]||(t[3]=g(n=>i.navigateTo("classify1"),["prevent"]))},Le),e("a",{onClick:t[4]||(t[4]=g(n=>i.navigateTo("classify2"),["prevent"]))},je)]),_:1}),o(a,{title:"欣赏",name:"3"},{default:s(()=>[e("a",{onClick:t[5]||(t[5]=g(n=>i.navigateTo("enjoy1"),["prevent"]))},He),e("a",{onClick:t[6]||(t[6]=g(n=>i.navigateTo("enjoy2"),["prevent"]))},qe),e("a",{onClick:t[7]||(t[7]=g(n=>i.navigateTo("test"),["prevent"]))},Ge)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue","options"]),e("div",null,[o(f,{name:"wap-nav",size:"40",class:"menu-icon"})])]),_:1})])]),e("div",Je,[o(m)])])}const Ze=Q(ve,[["render",Ke]]);export{Ze as default};
