import{V as _}from"./index.BOU6c9Wr.js";import{_ as p,al as v,a5 as c,o as s,c as i,F as r,E as n,k as e,t as l,p as u,q as h}from"./framework.r8duXwgR.js";const k={directives:{KbdTrap:_().directive}},o=a=>(u("data-v-ae17e076"),a=a(),h(),a),x={class:"test"},f=o(()=>e("legend",null,"Outside trap",-1)),m=o(()=>e("div",{class:"test",tabindex:"0"},"Before",-1)),b={class:"test"},y=o(()=>e("legend",null,"Inside trap 1 - clik one element inside, then use Esc key",-1)),I={class:"test"},g=o(()=>e("legend",null,"Inside trap 2 - click one element inside, then use Esc key",-1)),E=o(()=>e("div",{class:"test",tabindex:"0"},"After",-1));function B(a,D,S,$,F,V){const d=v("kbd-trap");return c((s(),i("div",x,[f,m,c((s(),i("div",b,[y,(s(),i(r,null,n(2,t=>e("div",{class:"test",key:t,tabindex:"0"}," Group 1 / "+l(t),1)),64))])),[[d,void 0,void 0,{escexits:!0}]]),c((s(),i("div",I,[g,(s(),i(r,null,n(2,t=>e("div",{class:"test",key:t,tabindex:"0"}," Group 2 / "+l(t),1)),64))])),[[d,void 0,void 0,{escexits:!0}]]),E])),[[d,void 0,void 0,{escexits:!0}]])}const K=p(k,[["render",B],["__scopeId","data-v-ae17e076"]]);export{K as default};