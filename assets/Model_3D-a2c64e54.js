/* empty css             *//* empty css               */import{_ as m,x as r,y as i,b as a,A as c,W as l,z as p,X as h,M as _,Q as u}from"./index-630bca0e.js";const f={data(){return{showModel:!1,modelUrl_1:"https://3dconvert.nsdt.cloud/conv/share?uid=frame-6a3261e02c-1712411603712&hideTitle=1&hideFooter=1&hideOperator=0&hideInfo=0"}},mounted(){document.addEventListener("click",this.handleDocumentClick)},beforeDestroy(){document.removeEventListener("click",this.handleDocumentClick)},methods:{handlePopupClick(o){o.stopPropagation()},handleDocumentClick(o){!this.$refs.popup.contains(o.target)&&this.showModel&&(this.showModel=!1)}}},k=["src"];function v(o,e,C,M,t,n){const d=_;return r(),i("div",null,[a(d,{link:"",type:"primary",onClick:e[0]||(e[0]=l(s=>t.showModel=!0,["stop"])),style:{"margin-top":"10%","font-size":"20px",color:"blue"}},{default:c(()=>[u("查看3D模型")]),_:1}),t.showModel?(r(),i("div",{key:0,class:"model-popup",onClick:e[3]||(e[3]=l((...s)=>n.handlePopupClick&&n.handlePopupClick(...s),["stop"]))},[p("div",{onClick:e[2]||(e[2]=l(()=>{},["stop"]))},[p("iframe",{src:t.modelUrl_1,width:"800",height:"600",frameborder:"0",class:"model-container"},null,8,k),a(d,{class:"close-button",onClick:e[1]||(e[1]=s=>t.showModel=!1)},{default:c(()=>[u("关闭")]),_:1})])])):h("",!0)])}const D=m(f,[["render",v],["__scopeId","data-v-749555fd"]]);export{D as default};
