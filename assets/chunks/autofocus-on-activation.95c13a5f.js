import{V as n}from"./index.8ace3468.js";import{_,h as v,am as p,o as c,c as i,C as a,t as u,a6 as l,S as f,U as A}from"./framework.cf912ad7.js";const g={directives:{KbdTrap:n().directive},setup(){const t=v(!1);return{trapActive:t,toggleTrapActive:()=>{t.value=t.value!==!0}}}},s=t=>(f("data-v-6e744aaa"),t=t(),A(),t),b={class:"test"},h=s(()=>a("div",{class:"test",tabindex:"0"},"First",-1)),m=s(()=>a("div",{class:"test",tabindex:"0"},"Second",-1)),x=s(()=>a("div",{class:"test",tabindex:"0","data-autofocus":""},"Autofocus",-1)),S=[h,m,x];function T(t,o,k,e,y,D){const r=p("kbd-trap");return c(),i("div",null,[a("button",{onClick:o[0]||(o[0]=(...d)=>e.toggleTrapActive&&e.toggleTrapActive(...d))},u(e.trapActive===!0?"Deactivate trap":"Activate trap"),1),l((c(),i("div",b,S)),[[r,e.trapActive,void 0,{autofocus:!0}]])])}const V=_(g,[["render",T],["__scopeId","data-v-6e744aaa"]]);export{V as default};
