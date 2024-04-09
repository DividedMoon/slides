function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingPreview-BZqtZ2p7.js","assets/modules/vue-BLmQdX0u.js","assets/index-ck-gFd08.js","assets/monaco/bundled-types-B35DGJl9.js","assets/modules/file-saver-DY7lxZlc.js","assets/monaco/bundled-types-GNDtLKYz.css","assets/modules/shiki-vbwtq7uO.js","assets/modules/shiki-BSchMNmt.css","assets/index-DBKKC_5w.css","assets/slidev/index-C9yiuOZM.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as m,y as l,Q as R,Y as L,N as A,o as s,b as o,l as d,H as e,i as T,c as f,g as _,h as q,F as p,Z as B,e as S,f as F,E as M,_ as U}from"../modules/vue-BLmQdX0u.js";import{t as V}from"../modules/shiki-vbwtq7uO.js";import{w as j}from"./index-C9yiuOZM.js";import{i as z,_ as h,u as y,c as N,C as G,a as $,p as W,b as H}from"../index-ck-gFd08.js";import{d as I,e as g,_ as O,a as P,f as k}from"../monaco/bundled-types-B35DGJl9.js";import{G as K,g as Q,S as X,a as Y}from"./bottom-BSmK_Nrh.js";import{P as Z}from"./PrintStyle-D_Fx9i60.js";import"../modules/file-saver-DY7lxZlc.js";const J=["id"],ee=m({__name:"PrintSlideClick",props:{nav:{type:Object,required:!0}},setup(c){const{nav:t}=c,a=l(()=>t.currentSlideRoute.value),n=l(()=>({height:`${I.value}px`,width:`${g.value}px`})),r=R();O(()=>import("./DrawingPreview-BZqtZ2p7.js").then(i=>i.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(i=>r.value=i.default);const u=l(()=>`${a.value.no.toString().padStart(3,"0")}-${(t.clicks.value+1).toString().padStart(2,"0")}`);return L(z,A({nav:t,configs:P,themeConfigs:l(()=>P.themeConfig)})),(i,C)=>(s(),o("div",{id:u.value,class:"print-slide-container",style:q(n.value)},[d(e(K)),d(X,{is:a.value.component,"clicks-context":i.nav.clicksContext.value,class:T(e(Q)(a.value)),route:a.value},null,8,["is","clicks-context","class","route"]),r.value?(s(),f(e(r),{key:0,page:a.value.no},null,8,["page"])):_("v-if",!0),d(e(Y))],12,J))}}),D=h(ee,[["__file","C:/Users/yidia/Desktop/preparedppt/PreparedPPT/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),te=m({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(c){const{route:t}=c,{isPrintWithClicks:a}=y(),n=N(t,a.value?0:G);return(r,u)=>(s(),o(p,null,[d(D,{"clicks-context":e(n),nav:e($)(r.route,e(n))},null,8,["clicks-context","nav"]),e(a)?(s(),o(p,{key:0},[_(`
      clicks0.total can be any number >=0 when rendering.
      So total-clicksStart can be negative in intermediate states.
    `),(s(!0),o(p,null,B(Math.max(0,e(n).total-e(n).clicksStart),i=>(s(),f(D,{key:i,nav:e($)(r.route,e(N)(r.route,i+e(n).clicksStart))},null,8,["nav"]))),128))],64)):_("v-if",!0)],64))}}),ae=h(te,[["__file","C:/Users/yidia/Desktop/preparedppt/PreparedPPT/node_modules/@slidev/client/internals/PrintSlide.vue"]]),ne={id:"print-content"},se=m({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(c){const t=c,{slides:a,currentRoute:n}=y(),r=l(()=>t.width),u=l(()=>t.width/k.value),i=l(()=>r.value/u.value),C=l(()=>i.value<k.value?r.value/g.value:u.value*k.value/g.value);let v=a.value;n.value.query.range&&(v=W(v.length,n.value.query.range).map(b=>v[b-1]));const E=l(()=>({"select-none":!P.selectable}));return L(H,C),(w,b)=>(s(),o("div",{id:"print-container",class:T(E.value)},[S("div",ne,[(s(!0),o(p,null,B(e(v),x=>(s(),f(ae,{key:x.no,route:x},null,8,["route"]))),128))]),F(w.$slots,"controls")],2))}}),re=h(se,[["__file","C:/Users/yidia/Desktop/preparedppt/PreparedPPT/node_modules/@slidev/client/internals/PrintContainer.vue"]]),ie={id:"page-root",class:"grid grid-cols-[1fr_max-content]"},le=S("div",{id:"twoslash-container"},null,-1),oe=m({__name:"print",setup(c){const{isPrintMode:t}=y();return M(()=>{t?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),U(()=>{V()}),(a,n)=>(s(),o(p,null,[e(t)?(s(),f(Z,{key:0})):_("v-if",!0),S("div",ie,[d(re,{class:"w-full h-full",style:q({background:"var(--slidev-slide-container-background, black)"}),width:e(j).width.value},null,8,["style","width"]),le])],64))}}),he=h(oe,[["__file","C:/Users/yidia/Desktop/preparedppt/PreparedPPT/node_modules/@slidev/client/pages/print.vue"]]);export{he as default};
