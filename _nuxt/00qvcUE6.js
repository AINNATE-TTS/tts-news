import{d as C,D as S,Y as m,U as _,V as f,c as o,e as l,N as n,i as j,w as B,f as y,n as r,ab as e,h as d,O as k,aj as N,g as h,t as v,F as U,L as V,M as L,S as O}from"./DjqeAeer.js";const A=C({inheritAttrs:!1,__name:"LandingHero",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},links:{type:Array,default:()=>[]},orientation:{type:String,default:"vertical"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(a){const i=a,x=S(()=>{const t=m("gap-16 sm:gap-y-24",i.orientation==="vertical"&&"flex flex-col",i.orientation==="horizontal"&&"grid lg:grid-cols-2 lg:items-center"),p=i.orientation==="vertical"?"text-center":"",c=m("mt-10 flex flex-wrap gap-x-6 gap-y-3",i.orientation==="vertical"&&"justify-center");return{wrapper:"py-24 sm:py-32 md:py-40 relative",container:t,base:p,headline:"mb-10",title:"text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl",description:"mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300",links:c}}),{ui:s,attrs:$}=_("landing.hero",f(i,"ui"),x,f(i,"class"),!0);return(t,p)=>{const c=O,b=N;return o(),l("div",k({class:e(s).wrapper},e($)),[n(t.$slots,"top"),j(b,{class:r(e(s).container)},{default:B(()=>{var u;return[y("div",{class:r(e(s).base)},[t.$slots.headline?(o(),l("div",{key:0,class:r(e(s).headline)},[n(t.$slots,"headline")],2)):d("",!0),y("h1",{class:r(e(s).title)},[n(t.$slots,"title",{},()=>[h(v(a.title),1)])],2),a.description||t.$slots.description?(o(),l("div",{key:1,class:r(e(s).description)},[n(t.$slots,"description",{},()=>[h(v(a.description),1)])],2)):d("",!0),(u=a.links)!=null&&u.length||t.$slots.links?(o(),l("div",{key:2,class:r(e(s).links)},[n(t.$slots,"links",{},()=>[(o(!0),l(U,null,V(a.links,(g,w)=>(o(),L(c,k({key:w,ref_for:!0},g,{onClick:g.click}),null,16,["onClick"]))),128))])],2)):d("",!0)],2),n(t.$slots,"default")]}),_:3},8,["class"]),n(t.$slots,"bottom")],16)}}}),D=Object.assign(A,{__name:"ULandingHero"});export{D as _};