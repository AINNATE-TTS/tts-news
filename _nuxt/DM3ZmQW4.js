import m from"./CfDZ5AKW.js";import{d as c,aC as l,aA as r}from"./DdII4wio.js";const n=(u,t)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:u,data:t},null,2)),y=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(u){const t=l(),{path:f,query:a}=u,p={...a||{},path:f||(a==null?void 0:a.path)||"/"};return r(m,p,{default:t!=null&&t.default?({data:e,refresh:o,isPartial:d})=>t.default({list:e,refresh:o,isPartial:d,...this.$attrs}):e=>n("default",e.data),empty:e=>t!=null&&t.empty?t.empty(e):n("default",e==null?void 0:e.data),"not-found":e=>{var o;return t!=null&&t["not-found"]?(o=t==null?void 0:t["not-found"])==null?void 0:o.call(t,e):n("not-found",e==null?void 0:e.data)}})}}),h=y,L=Object.assign(h,{__name:"ContentList"});export{L as default};
