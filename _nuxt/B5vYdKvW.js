import{f as i}from"./CxYJgpPD.js";import{d as u,aC as f,D as c,aA as r,bv as d}from"./DdII4wio.js";const p=u({name:"MDCSlot",functional:!0,props:{name:{type:String,default:"default"},unwrap:{type:[Boolean,String],default:!1},use:{type:Function,default:void 0}},setup(t){const{parent:s}=d(),{default:e}=f(),a=c(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:e,tags:a,parent:s}},render({use:t,unwrap:s,fallbackSlot:e,tags:a,parent:n}){var l;try{let o=t;return typeof t=="string"&&(o=(n==null?void 0:n.slots[t])||((l=n==null?void 0:n.parent)==null?void 0:l.slots[t]),console.warn(`Please set :use="$slots.${t}" in <MDCSlot> component to enable reactivity`)),o?s?i(o(),a):[o()]:e?e():r("div")}catch{return r("div")}}}),m=Object.assign(p,{__name:"MDCSlot"}),_=u({props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},render(t){return r(m,t)}}),S=Object.assign(_,{__name:"ContentSlot"});export{S as default};
