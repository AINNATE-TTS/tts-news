import{d as q,s as z,ao as y,ap as L,aq as M,ab as e,c as s,M as c,w as o,h as i,ar as k,aj as j,i as r,O as v,f as l,t as w,e as b,L as E,F,q as C,at as G,au as H,an as O,g as J,G as I,S as K}from"./DdII4wio.js";import{_ as Q,a as W,b as X}from"./DYAhP9FM.js";import Y from"./Dha4cKqk.js";import{_ as Z}from"./C0dKEAXV.js";import"./B5mFpgwH.js";import"./CxYJgpPD.js";const tt={class:"text-gray-500 dark:text-gray-400"},et={class:"flex flex-wrap items-center gap-3 mt-4"},nt={key:1},lt=q({__name:"[slug]",async setup(ot){var f,g,h;let n,_;const u=z(),{data:t}=([n,_]=y(()=>k(u.path,()=>C(u.path).findOne(),"$jRumGH1Jzu")),n=await n,_(),n);if(!t.value)throw L({statusCode:404,statusMessage:"Post not found",fatal:!0});const{data:d}=([n,_]=y(()=>k(`${u.path}-surround`,()=>C("/blog").where({_extension:"md"}).without(["body","excerpt"]).sort({date:-1}).findSurround(G(u.path)),{default:()=>[]})),n=await n,_(),n),p=((f=t.value.head)==null?void 0:f.title)||t.value.title,m=((g=t.value.head)==null?void 0:g.description)||t.value.description;return M({title:p,ogTitle:p,description:m,ogDescription:m}),(h=t.value.image)!=null&&h.src,(at,x)=>{const U=H,B=I,S=K,D=Q,P=Y,A=W,N=Z,R=X,T=O,V=j;return e(t)?(s(),c(V,{key:0},{default:o(()=>[r(D,{title:e(t).title,description:e(t).description},{headline:o(()=>[r(U,v(e(t).badge,{variant:"subtle"}),null,16),x[0]||(x[0]=l("span",{class:"text-gray-500 dark:text-gray-400"},"·",-1)),l("time",tt,w(new Date(e(t).date).toLocaleDateString("en",{year:"numeric",month:"short",day:"numeric"})),1)]),default:o(()=>[l("div",et,[(s(!0),b(F,null,E(e(t).authors,(a,$)=>(s(),c(S,{key:$,to:a.to,color:"white",target:"_blank",size:"sm"},{default:o(()=>[r(B,v({ref_for:!0},a.avatar,{alt:"Author avatar",size:"2xs"}),null,16),J(" "+w(a.name),1)]),_:2},1032,["to"]))),128))])]),_:1},8,["title","description"]),r(T,null,{right:o(()=>[e(t).body&&e(t).body.toc?(s(),c(R,{key:0,links:e(t).body.toc.links},null,8,["links"])):i("",!0)]),default:o(()=>[r(N,{prose:""},{default:o(()=>{var a;return[e(t)&&e(t).body?(s(),c(P,{key:0,value:e(t)},null,8,["value"])):i("",!0),(a=e(d))!=null&&a.length?(s(),b("hr",nt)):i("",!0),r(A,{surround:e(d)},null,8,["surround"])]}),_:1})]),_:1})]),_:1})):i("",!0)}}});export{lt as default};
