import{d as _,$ as u,y as h,b as a,e as t,x as s,H as c,F as f,Z as v,o as n,a0 as g,l as x,g as b}from"../modules/vue-BLmQdX0u.js";import{u as y,d as N,_ as k}from"../index-ck-gFd08.js";import{a as p}from"../monaco/bundled-types-B35DGJl9.js";import{N as T}from"./NoteDisplay-BvRC9nlo.js";import"../modules/shiki-vbwtq7uO.js";import"../modules/file-saver-DY7lxZlc.js";const w={id:"page-root"},D={class:"m-4"},H={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},V={class:"opacity-50"},B={class:"text-lg"},C={class:"font-bold flex gap-2"},P={class:"opacity-50"},S=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-main mb-8"},M=_({__name:"print",setup($){const{slides:m,total:d}=y();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),N({title:`Notes - ${p.title}`});const i=h(()=>m.value.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(n(),a("div",w,[t("div",D,[t("div",H,[t("h1",L,s(c(p).title),1),t("div",V,s(new Date().toLocaleString()),1)]),(n(!0),a(f,null,v(i.value,(e,l)=>(n(),a("div",{key:l,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",C,[t("div",P,s(e==null?void 0:e.no)+"/"+s(c(d)),1),g(" "+s(e==null?void 0:e.title)+" ",1),S])]),x(T,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),l<i.value.length-1?(n(),a("hr",F)):b("v-if",!0)]))),128))])]))}}),Z=k(M,[["__file","C:/Users/yidia/Desktop/preparedppt/PreparedPPT/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{Z as default};
