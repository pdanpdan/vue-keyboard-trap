import{V as r}from"./index.5d11d841.js";import{_ as v,h,am as p,o as c,c as i,k as t,t as _,a6 as a,p as b,m as u}from"./framework.cd9b17ac.js";const f={directives:{KbdTrap:r().directive},setup(){const e=h(!1);return{rtl:e,toggleRtl:()=>{e.value=e.value!==!0}}}},s=e=>(b("data-v-f6b7493f"),e=e(),u(),e),R=["dir"],g={class:"test row",dir:"rtl"},x=s(()=>t("legend",null,"RTL Always",-1)),T=s(()=>t("div",{class:"test col",tabindex:"0"},"1",-1)),w=s(()=>t("div",{class:"test col",tabindex:"0"},"2",-1)),m=s(()=>t("div",{class:"test col",tabindex:"0"},"3",-1)),L=[x,T,w,m],y={class:"test row",dir:"ltr"},k=s(()=>t("legend",null,"LTR Always",-1)),D=s(()=>t("div",{class:"test col",tabindex:"0"},"1",-1)),I=s(()=>t("div",{class:"test col",tabindex:"0"},"2",-1)),S=s(()=>t("div",{class:"test col",tabindex:"0"},"3",-1)),B=[k,D,I,S],V={class:"test row"},A=s(()=>t("div",{class:"test col",tabindex:"0"},"1",-1)),K=s(()=>t("div",{class:"test col",tabindex:"0"},"2",-1)),C=s(()=>t("div",{class:"test col",tabindex:"0"},"3",-1));function E(e,d,F,o,N,j){const l=p("kbd-trap");return c(),i("div",null,[t("button",{onClick:d[0]||(d[0]=(...n)=>o.toggleRtl&&o.toggleRtl(...n))},_(o.rtl===!0?"RTL - switch to LTR":"LTR - switch to RTL"),1),t("div",{class:"test",dir:o.rtl===!0?"rtl":"ltr"},[a((c(),i("div",g,L)),[[l]]),a((c(),i("div",y,B)),[[l]]),a((c(),i("div",V,[t("legend",null,_(o.rtl===!0?"RTL":"LTR"),1),A,K,C])),[[l]])],8,R)])}const G=v(f,[["render",E],["__scopeId","data-v-f6b7493f"]]);export{G as default};
