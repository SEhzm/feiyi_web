/* empty css             *//* empty css               *//* empty css             */import{_ as T,s as y,x as r,y as u,z as t,b as a,A as s,K as d,L as S,S as B,M as E,N as A,O as _,P as p,Q as m,R as h,T as F,U as k,V as N,W as P}from"./index-09206e27.js";const Y={name:"Home",data(){return{isMobile:!1,fullpage:{current:1,isScrolling:!1,deltaY:0},startTime:void 0,startX:void 0,startY:void 0,carouselData:[{url:"https://pic.imgdb.cn/item/661353f168eb935713534edc.jpg"},{url:"https://pic.imgdb.cn/item/661353f068eb935713534dff.jpg"},{url:"https://pic.imgdb.cn/item/661353f068eb935713534e23.jpg"},{url:"https://pic.imgdb.cn/item/661353f168eb935713534eb7.jpg"}],Data:[{name:"莫高窟",url:"https://www.dha.ac.cn/__local/6/52/4A/D4EEB43CBB1869777A5FE6721B5_EEFFAC9C_1D157.jpg",text:"西千佛洞位于今甘肃省敦煌市城西南约35千米党河北岸的断崖上。1961年3月西千佛洞附属于莫高窟被国务院列为第一批全国重点文...",src:"1"},{name:"莫低窟",url:"https://www.dha.ac.cn/__local/9/A1/96/69E14BEC5C4843F7861F616D931_E0CD378F_169FD.jpg",text:"麦积山石窟艺术研究所是麦积山石窟的保护管理机构，其前身是1953年9月1日成立的 “天水麦积山文物保管所”，隶属于天水县文教...",src:"2"},{name:"莫中窟",url:"https://www.dha.ac.cn/__local/7/E0/7C/F520F2680229D9CAF7136A6F7CA_A0BF5B4E_6B983.jpg",text:"敦煌研究院是负责世界文化遗产敦煌莫高窟、天水麦积山石窟、永靖炳灵寺石窟，全国重点文物保护单位瓜州榆林窟、敦煌西千佛洞...",src:"3"},{name:"榆林窟",url:"https://www.dha.ac.cn/__local/E/5B/9A/49C0CBBFC7B75FD011087122CB5_78E97453_259E8.jpg",text:"榆林窟，亦名榆林寺、万佛峡，位于甘肃省瓜州县城南约70千米处的榆林河峡谷中，被称为莫高窟的“姊妹窟”。20世纪50年代，榆...",src:"4"}],currentIndex:0,currentItemName:"",Data_3:[{name:"莫高窟",url:"https://www.papercutspace.cn/Uploads/water/39d369c716bdaa9b9f20c4460e0db172.jpg",text:"20世纪40年代，常书鸿、段文杰、欧阳琳、孙儒僩、史苇湘等一批前辈专家，满怀对敦煌艺术的向往来到莫高窟。伴着大漠戈壁，土屋油灯，在这里扎下根来，开创了敦煌石窟保护、临摹和研究的基业。 中华人民共和国成立后，又有李其琼、李贞伯、万庚育、李云鹤、关友惠、刘玉权、贺世哲、施萍婷、李永宁、孙修身、樊锦诗等一批专家学者响应祖国号召，从四面八方来到莫高窟。与常书鸿、段文杰等先生一样，他们来到莫高窟后就再也没有离...",src:"1"},{name:"莫低窟",url:"https://www.papercutspace.cn/Uploads/water/5ba1e8a626add0d7de198301e3760d67.jpg",text:"敦煌研究院是负责世界文化遗产敦煌莫高窟、天水麦积山石窟、永靖炳灵寺石窟，全国重点文物保护单位瓜州榆林窟、敦煌西千佛洞、庆阳北石窟寺管理的综合性研究型事业单位。院本部位于敦煌市东南25千米处的莫高窟，分院位于兰州市城关区。...",src:"2"},{name:"莫中窟",url:"https://www.papercutspace.cn/Uploads/water/39d369c716bdaa9b9f20c4460e0db172.jpg",text:"1984年扩建为敦煌研究院。2017年，敦煌研究院形成了“一院六地”的管理和运行格局。敦煌研究院设党委、院务委员会、纪律检查委员会、学术委员会和工会委员会。设保护研究部、人文研究部、艺术研究部、文化弘扬部四大部统筹协调和管理14个业务部门...",src:"3"},{name:"榆林窟",url:"https://www.papercutspace.cn/Uploads/water/5ba1e8a626add0d7de198301e3760d67.jpg",text:"榆林窟，亦名榆林寺、万佛峡，位于甘肃省瓜州县城南约70千米处的榆林河峡谷中，被称为莫高窟的“姊妹窟”。20世纪50年代，榆...",src:"4"}],currentIndex_3:0,currentItemName_3:""}},methods:{detectDeviceType(){const e=navigator.userAgent||navigator.vendor||window.opera;/windows phone/i.test(e)&&(this.isMobile=!0),/iPad|iPod|iPhone/i.test(e)&&!window.MSStream&&(this.isMobile=!0),/Android/i.test(e)&&(this.isMobile=!0),/OS X/i.test(e)&&(this.isMobile=!1),/Linux/i.test(e)&&(this.isMobile=!1),/Mobile/i.test(e)&&!this.isMobile&&(this.isMobile=!0),this.isMobile||(this.isMobile=!1)},next(){let e=3;this.fullpage.current+1<=e&&(this.fullpage.current+=1,this.move(this.fullpage.current))},pre(){this.fullpage.current-1>0&&(this.fullpage.current-=1,this.move(this.fullpage.current))},move(e){this.fullpage.isScrolling=!0,this.directToMove(e),setTimeout(()=>{this.fullpage.isScrolling=!1},1010)},directToMove(e){let n=this.$refs.fullPage.clientHeight,i=this.$refs.fullPageContainer,c;c=-(e-1)*n+"px",i.style.transform=`translateY(${c})`,this.fullpage.current=e},mouseWheelHandle(e){let n=e||window.event;if(n.stopPropagation?n.stopPropagation():n.returnValue=!1,this.fullpage.isScrolling)return!1;let i=e.originalEvent||e;this.fullpage.deltaY=i.deltaY||i.detail,this.fullpage.deltaY>0?this.next():this.fullpage.deltaY<0&&this.pre()},handleTouchmove(e){e.preventDefault()},handleTouchstart(e){this.startTime=Date.now(),this.startX=e.changedTouches[0].clientX,this.startY=e.changedTouches[0].clientY},handleTouchend(e){const n=Date.now();e.changedTouches[0].clientX;const i=e.changedTouches[0].clientY;if(n-this.startTime>2e3)return;let c="";if(Math.abs(i-this.startY)>10)c=i-this.startY>0?"down":"up";else return;c==="up"&&this.next(),c==="down"&&this.pre()},prevCarousel(){this.$refs.myCarousel.prev()},nextCarousel(){this.$refs.myCarousel.next()},handleCarouselChange(e){this.currentIndex=e,this.currentItemName=this.Data[e].name,this.currentItemText=this.Data[e].text,this.currentItemSrc=this.Data[e].src},handleCarouselChange_3(e){this.currentIndex_3=e,this.currentItemName_3=this.Data_3[e].name,this.currentItemText_3=this.Data_3[e].text,this.currentItemSrc_3=this.Data_3[e].src}},created(){this.detectDeviceType(),this.isMobile==!0&&(this.fullpage.isScrolling=1)},mounted(){this.currentItemName=this.Data[this.currentIndex].name,this.currentItemText=this.Data[this.currentIndex].text,this.currentItemSrc=this.Data[this.currentIndex].src,this.currentItemName_3=this.Data_3[this.currentIndex_3].name,this.currentItemText_3=this.Data_3[this.currentIndex_3].text,this.currentItemSrc_3=this.Data_3[this.currentIndex_3].src}};const w=e=>(F("data-v-c1e5cda3"),e=e(),k(),e),j={class:"fullPage",ref:"fullPage",style:{overflow:"hidden"}},H={class:"carousel-1"},$=["src"],X={class:"carousel-1-M"},W=["src"],L={class:"carousel-2"},U=w(()=>t("span",{class:"title-2"},[h("非"),t("br"),h("遗"),t("br"),h("介"),t("br"),h("绍")],-1)),V=w(()=>t("div",{class:"title-2-M"},"非遗介绍",-1)),O={class:"text-2-1"},R={class:"text-2-2"},z={class:"text-2-3"},K=["href"],Q={class:"text-button-2"},q={class:"pc-car2"},G=["href"],J=["src"],Z={class:"MB-car2"},ee=["href"],te=["src"],se={class:"pc-3"},ae=w(()=>t("p",{class:"title-3-pc"},"XX介绍",-1)),le={class:"text-3-1"},re={class:"text-3-2"},ne={class:"text-3-3"},oe=["href"],ie={class:"text-button-3"},ce={class:"pc-car3"},ue=["href"],he=["src"],de={class:"carousel-2"},_e=w(()=>t("div",{class:"title-2-M"},"XX介绍",-1)),pe={class:"text-2-1"},me={class:"text-2-2"},fe={class:"text-2-3"},ge=["href"],we={class:"text-button-3"},Ce={class:"MB-car2"},ve=["href"],Ie=["src"];function be(e,n,i,c,De,ye){const C=N,v=S,I=P,b=B,D=y("Minus"),f=E,g=A,x=y("ArrowLeft"),M=y("ArrowRight");return r(),u("div",j,[t("div",{class:"fullPageContainer",ref:"fullPageContainer",onMousewheel:n[0]||(n[0]=(...l)=>e.mouseWheelHandle&&e.mouseWheelHandle(...l)),"on:DOMMouseScroll":n[1]||(n[1]=(...l)=>e.mouseWheelHandle&&e.mouseWheelHandle(...l))},[t("div",H,[a(v,{interval:3e8,arrow:"always",height:"100vh",autoplay:"","indicator-position":""},{default:s(()=>[(r(!0),u(_,null,p(e.carouselData,(l,o)=>(r(),m(C,{key:o},{default:s(()=>[t("img",{src:l.url,alt:"carousel image",class:"carousel-image"},null,8,$)]),_:2},1024))),128))]),_:1})]),t("div",X,[a(b,{class:"my-swipe",autoplay:3e3,"indicator-color":"red"},{default:s(()=>[(r(!0),u(_,null,p(e.carouselData,(l,o)=>(r(),m(I,{key:o},{default:s(()=>[t("img",{src:l.url,alt:"carousel image",class:"carousel-image"},null,8,W)]),_:2},1024))),128))]),_:1})]),t("div",L,[t("div",null,[U,V,t("span",O,d(e.currentItemName),1),t("span",R,[a(f,null,{default:s(()=>[a(D)]),_:1})]),t("span",z,d(e.currentItemText),1),t("a",{href:e.currentItemSrc},[t("span",Q,[a(g,{plain:""},{default:s(()=>[h("更多 >")]),_:1})])],8,K)]),t("div",null,[t("div",q,[a(v,{interval:3e5,arrow:"always",ref:"myCarousel","indicator-position":"none",onChange:e.handleCarouselChange,class:"carousel-container2"},{default:s(()=>[(r(!0),u(_,null,p(e.Data,(l,o)=>(r(),m(C,{key:o,class:"carousel-item-2"},{default:s(()=>[t("a",{href:l.src},[t("img",{src:l.url,alt:"carousel image"},null,8,J)],8,G)]),_:2},1024))),128))]),_:1},8,["onChange"])]),t("div",Z,[a(b,{autoplay:3e3,"indicator-color":"white",class:"carousel-container2",onChange:e.handleCarouselChange},{default:s(()=>[(r(!0),u(_,null,p(e.Data,(l,o)=>(r(),m(I,{key:o,class:"carousel-item-2"},{default:s(()=>[t("a",{href:l.src},[t("img",{src:l.url,alt:"carousel image"},null,8,te)],8,ee)]),_:2},1024))),128))]),_:1},8,["onChange"])]),a(g,{type:"primary",onClick:e.prevCarousel,class:"prevButton"},{default:s(()=>[a(f,null,{default:s(()=>[a(x)]),_:1})]),_:1},8,["onClick"]),a(g,{type:"primary",onClick:e.nextCarousel,class:"nextButton"},{default:s(()=>[a(f,null,{default:s(()=>[a(M)]),_:1})]),_:1},8,["onClick"])])]),t("div",se,[t("div",null,[ae,t("span",le,d(e.currentItemName_3),1),t("span",re,[a(f,null,{default:s(()=>[a(D)]),_:1})]),t("span",ne,d(e.currentItemText_3),1),t("a",{href:e.currentItemSrc_3},[t("span",ie,[a(g,{plain:""},{default:s(()=>[h("更多 >")]),_:1})])],8,oe)]),t("div",null,[t("div",ce,[a(v,{interval:3e3,height:"auto",arrow:"always",width:"100px",onChange:e.handleCarouselChange_3,class:"carousel-container3"},{default:s(()=>[(r(!0),u(_,null,p(e.Data_3,(l,o)=>(r(),m(C,{key:o,style:{height:"100vh",width:"100%"},class:"carousel-item-3"},{default:s(()=>[t("a",{href:l.src},[t("img",{src:l.url,alt:"carousel image-3",class:"carousel-image-3"},null,8,he)],8,ue)]),_:2},1024))),128))]),_:1},8,["onChange"])])])]),t("div",de,[t("div",null,[_e,t("span",pe,d(e.currentItemName_3),1),t("span",me,[a(f,null,{default:s(()=>[a(D)]),_:1})]),t("span",fe,d(e.currentItemText_3),1),t("a",{href:e.currentItemSrc_3},[t("span",we,[a(g,{plain:""},{default:s(()=>[h("更多 >")]),_:1})])],8,ge)]),t("div",null,[t("div",Ce,[a(b,{autoplay:3e3,"indicator-color":"white",class:"carousel-container2",onChange:e.handleCarouselChange_3},{default:s(()=>[(r(!0),u(_,null,p(e.Data_3,(l,o)=>(r(),m(I,{key:o,class:"carousel-item-2"},{default:s(()=>[t("a",{href:l.src},[t("img",{src:l.url,alt:"carousel image"},null,8,Ie)],8,ve)]),_:2},1024))),128))]),_:1},8,["onChange"])])])])],544)],512)}const Be=T(Y,[["render",be],["__scopeId","data-v-c1e5cda3"]]);export{Be as default};
