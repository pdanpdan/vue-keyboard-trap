import{V as r}from"./index.8ace3468.js";import{_,h as u,am as l,o as a,c,C as o,t as p,a6 as v,G as f,S as h,U as S}from"./framework.cf912ad7.js";const g={directives:{KbdTrap:r().directive},setup(){const t=u(!1);return{showContent:t,toggleShowContent:()=>{t.value=t.value!==!0}}}},n=t=>(h("data-v-96dcef55"),t=t(),S(),t),w={key:0,class:"test"},C=n(()=>o("div",{class:"test",tabindex:"0"},"First",-1)),m=n(()=>o("div",{class:"test",tabindex:"0"},"Second",-1)),b=n(()=>o("div",{class:"test",tabindex:"0","data-autofocus":""},"Autofocus",-1)),x=[C,m,b];function k(t,s,y,e,D,I){const d=l("kbd-trap");return a(),c("div",null,[o("button",{onClick:s[0]||(s[0]=(...i)=>e.toggleShowContent&&e.toggleShowContent(...i))},p(e.showContent===!0?"Hide content":"Show content"),1),e.showContent?v((a(),c("div",w,x)),[[d,void 0,void 0,{autofocus:!0}]]):f("",!0)])}const F=_(g,[["render",k],["__scopeId","data-v-96dcef55"]]);export{F as default};
