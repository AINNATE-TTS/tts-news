import{d as w,x as S,D as s,U,V as p,bo as l,c as n,M as i,w as f,ab as e,f as y,h as c,n as d,t as A,e as D,O as E,aE as I,E as B}from"./dE8o5x0o.js";import{_ as L}from"./C7ujJPIn.js";import{r as O}from"./D7p4jpr7.js";import"./CxYJgpPD.js";const $=w({inheritAttrs:!1,__name:"Card",props:{icon:{type:String,default:void 0},color:{type:String,default:"primary"},to:{type:String,default:void 0},target:{type:String,default:void 0},title:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(o){const x=S(),b=s(()=>({wrapper:"relative group overflow-hidden flex items-center rounded-lg",to:"hover:ring-1 hover:ring-[--color-light] dark:hover:ring-[--color-dark] hover:bg-gray-100/50 dark:hover:bg-gray-800/50",icon:{base:"w-6 h-6 mb-4 inline-flex items-center text-[--color-light] dark:text-[--color-dark] pointer-events-none"},body:{base:"flex-1"},externalIcon:{name:x.ui.icons.external,base:"w-4 h-4 absolute right-2 top-2 text-gray-400 dark:text-gray-500 group-hover:text-[--color-light] dark:group-hover:text-[--color-dark]"},title:"text-gray-900 dark:text-white font-semibold text-base my-0",description:"text-[15px] text-gray-500 dark:text-gray-400 mt-1 mb-0"})),t=o,{ui:r,attrs:h}=U("content.card",p(t,"ui"),b,p(t,"class"),!0),k=s(()=>{var a;return t.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((a=l[t.color])==null?void 0:a["500"])||l[t.color]||t.color}),v=s(()=>{var a;return t.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((a=l[t.color])==null?void 0:a["400"])||l[t.color]||t.color}),u=s(()=>t.target||(t.to&&t.to.startsWith("http")?"_blank":void 0));return(a,g)=>{const _=I,m=B,C=L;return n(),i(C,E({class:[e(r).wrapper,o.to&&e(r).to]},e(h),{ui:e(r),style:{"--color-light":e(k),"--color-dark":e(v)}}),{default:f(()=>[o.to?(n(),i(_,{key:0,to:o.to,target:e(u),class:"focus:outline-none",tabindex:"-1"},{default:f(()=>g[0]||(g[0]=[y("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)])),_:1},8,["to","target"])):c("",!0),o.icon?(n(),i(m,{key:1,name:o.icon,class:d(e(r).icon.base)},null,8,["name","class"])):c("",!0),o.to&&e(u)==="_blank"?(n(),i(m,{key:2,name:e(r).externalIcon.name,class:d(e(r).externalIcon.base)},null,8,["name","class"])):c("",!0),y("p",{class:d(e(r).title)},A(o.title),3),a.$slots.default?(n(),D("p",{key:3,class:d(e(r).description)},[O(a.$slots,"default",{unwrap:"p"})],2)):c("",!0)]),_:3},16,["class","ui","style"])}}}),T=Object.assign($,{__name:"Card"});export{T as default};
