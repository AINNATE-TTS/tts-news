import{_ as C}from"./rZjLKIk3.js";import{d as B,at as S,S as w,U as D,r as I,D as b,c as l,e as p,f as y,F as N,K as $,n as m,a9 as a,i as A,t as F,L as G,bf as L,N as P}from"./DpEKSsG3.js";const U=["onClick"],E=B({inheritAttrs:!1,__name:"CodeGroup",props:{class:{type:[String,Object,Array],default:void 0}},setup(g,{expose:v}){const _={wrapper:"relative [&>div:last-child]:!my-0 [&>div:last-child]:!static my-5",header:"flex items-center gap-1 border border-gray-200 dark:border-gray-700 border-b-0 rounded-t-md overflow-hidden p-2",tab:{base:"px-2 py-1.5 focus:outline-none text-gray-700 dark:text-gray-200 text-sm rounded-md flex items-center gap-1.5",active:"bg-gray-100 dark:bg-gray-800",inactive:"hover:bg-gray-50 dark:hover:bg-gray-800/50",icon:{base:""}}},h=g,d=S(),{ui:r,attrs:k}=w("content.codeGroup",void 0,_,D(h,"class"),!0),s=I(0);v({selectedIndex:s});function u(e,t){var i,c,o,n;return typeof e.type=="symbol"?(i=e.children)==null?void 0:i.map(u):{label:((c=e.props)==null?void 0:c.filename)||((o=e.props)==null?void 0:o.label)||`${t}`,icon:(n=e.props)==null?void 0:n.icon,component:e}}const f=b(()=>{var e,t;return((t=(e=d.default)==null?void 0:e.call(d))==null?void 0:t.flatMap(u).filter(Boolean))||[]}),x=b(()=>f.value.find((e,t)=>t===s.value));return(e,t)=>{var c;const i=C;return l(),p("div",P({class:a(r).wrapper},a(k)),[y("div",{class:m(a(r).header)},[(l(!0),p(N,null,$(a(f),(o,n)=>(l(),p("button",{key:n,tabindex:"-1",class:m([a(r).tab.base,a(s)===n?a(r).tab.active:a(r).tab.inactive]),onClick:V=>s.value=n},[A(i,{icon:o.icon,filename:o.label,class:m(a(r).tab.icon.base)},null,8,["icon","filename","class"]),y("span",null,F(o.label),1)],10,U))),128))],2),(l(),G(L((c=a(x))==null?void 0:c.component),{key:a(s),"hide-header":""}))],16)}}});export{E as default};
