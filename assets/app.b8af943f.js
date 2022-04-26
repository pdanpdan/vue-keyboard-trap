var Kl=Object.defineProperty,Vl=Object.defineProperties;var Ul=Object.getOwnPropertyDescriptors;var Jr=Object.getOwnPropertySymbols;var Wl=Object.prototype.hasOwnProperty,ql=Object.prototype.propertyIsEnumerable;var Yr=(e,t,n)=>t in e?Kl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xr=(e,t)=>{for(var n in t||(t={}))Wl.call(t,n)&&Yr(e,n,t[n]);if(Jr)for(var n of Jr(t))ql.call(t,n)&&Yr(e,n,t[n]);return e},Gr=(e,t)=>Vl(e,Ul(t));function us(e,t){const n=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const zl="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",Jl=us(zl),Yl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xl=us(Yl);function zo(e){return!!e||e===""}function $n(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=ce(s)?Ql(s):$n(s);if(r)for(const o in r)t[o]=r[o]}return t}else{if(ce(e))return e;if(pe(e))return e}}const Gl=/;(?![^(]*\))/g,Zl=/:(.+)/;function Ql(e){const t={};return e.split(Gl).forEach(n=>{if(n){const s=n.split(Zl);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function tt(e){let t="";if(ce(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const s=tt(e[n]);s&&(t+=s+" ")}else if(pe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function ea(e){if(!e)return null;let{class:t,style:n}=e;return t&&!ce(t)&&(e.class=tt(t)),n&&(e.style=$n(n)),e}function ta(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=ht(e[s],t[s]);return n}function ht(e,t){if(e===t)return!0;let n=Zr(e),s=Zr(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=D(e),s=D(t),n||s)return n&&s?ta(e,t):!1;if(n=pe(e),s=pe(t),n||s){if(!n||!s)return!1;const r=Object.keys(e).length,o=Object.keys(t).length;if(r!==o)return!1;for(const i in e){const l=e.hasOwnProperty(i),a=t.hasOwnProperty(i);if(l&&!a||!l&&a||!ht(e[i],t[i]))return!1}}return String(e)===String(t)}function ds(e,t){return e.findIndex(n=>ht(n,t))}const be=e=>ce(e)?e:e==null?"":D(e)||pe(e)&&(e.toString===Yo||!q(e.toString))?JSON.stringify(e,Jo,2):String(e),Jo=(e,t)=>t&&t.__v_isRef?Jo(e,t.value):qt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:It(t)?{[`Set(${t.size})`]:[...t.values()]}:pe(t)&&!D(t)&&!Xo(t)?String(t):t,ne={},Wt=[],Be=()=>{},na=()=>!1,sa=/^on[^a-z]/,An=e=>sa.test(e),or=e=>e.startsWith("onUpdate:"),fe=Object.assign,ir=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ra=Object.prototype.hasOwnProperty,Q=(e,t)=>ra.call(e,t),D=Array.isArray,qt=e=>fs(e)==="[object Map]",It=e=>fs(e)==="[object Set]",Zr=e=>e instanceof Date,q=e=>typeof e=="function",ce=e=>typeof e=="string",lr=e=>typeof e=="symbol",pe=e=>e!==null&&typeof e=="object",ar=e=>pe(e)&&q(e.then)&&q(e.catch),Yo=Object.prototype.toString,fs=e=>Yo.call(e),oa=e=>fs(e).slice(8,-1),Xo=e=>fs(e)==="[object Object]",cr=e=>ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,hn=us(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ps=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ia=/-(\w)/g,Fe=ps(e=>e.replace(ia,(t,n)=>n?n.toUpperCase():"")),la=/\B([A-Z])/g,We=ps(e=>e.replace(la,"-$1").toLowerCase()),Sn=ps(e=>e.charAt(0).toUpperCase()+e.slice(1)),gn=ps(e=>e?`on${Sn(e)}`:""),kn=(e,t)=>!Object.is(e,t),zt=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Zn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},gt=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Qr;const aa=()=>Qr||(Qr=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Se;class ur{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Se&&(this.parent=Se,this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function ca(e){return new ur(e)}function Go(e,t=Se){t&&t.active&&t.effects.push(e)}function ua(){return Se}function da(e){Se&&Se.cleanups.push(e)}const dr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Zo=e=>(e.w&mt)>0,Qo=e=>(e.n&mt)>0,fa=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=mt},pa=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];Zo(r)&&!Qo(r)?r.delete(e):t[n++]=r,r.w&=~mt,r.n&=~mt}t.length=n}},Ns=new WeakMap;let dn=0,mt=1;const Hs=30;let He;const At=Symbol(""),Bs=Symbol("");class Rn{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Go(this,s)}run(){if(!this.active)return this.fn();let t=He,n=ft;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=He,He=this,ft=!0,mt=1<<++dn,dn<=Hs?fa(this):eo(this),this.fn()}finally{dn<=Hs&&pa(this),mt=1<<--dn,He=this.parent,ft=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){He===this?this.deferStop=!0:this.active&&(eo(this),this.onStop&&this.onStop(),this.active=!1)}}function eo(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function ha(e,t){e.effect&&(e=e.effect.fn);const n=new Rn(e);t&&(fe(n,t),t.scope&&Go(n,t.scope)),(!t||!t.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function ga(e){e.effect.stop()}let ft=!0;const ei=[];function Mt(){ei.push(ft),ft=!1}function Ot(){const e=ei.pop();ft=e===void 0?!0:e}function Ie(e,t,n){if(ft&&He){let s=Ns.get(e);s||Ns.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=dr()),ti(r)}}function ti(e,t){let n=!1;dn<=Hs?Qo(e)||(e.n|=mt,n=!Zo(e)):n=!e.has(He),n&&(e.add(He),He.deps.push(e))}function nt(e,t,n,s,r,o){const i=Ns.get(e);if(!i)return;let l=[];if(t==="clear")l=[...i.values()];else if(n==="length"&&D(e))i.forEach((a,c)=>{(c==="length"||c>=s)&&l.push(a)});else switch(n!==void 0&&l.push(i.get(n)),t){case"add":D(e)?cr(n)&&l.push(i.get("length")):(l.push(i.get(At)),qt(e)&&l.push(i.get(Bs)));break;case"delete":D(e)||(l.push(i.get(At)),qt(e)&&l.push(i.get(Bs)));break;case"set":qt(e)&&l.push(i.get(At));break}if(l.length===1)l[0]&&Ks(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Ks(dr(a))}}function Ks(e,t){for(const n of D(e)?e:[...e])(n!==He||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ma=us("__proto__,__v_isRef,__isVue"),ni=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(lr)),_a=hs(),va=hs(!1,!0),ba=hs(!0),ya=hs(!0,!0),to=xa();function xa(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=Z(this);for(let o=0,i=this.length;o<i;o++)Ie(s,"get",o+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(Z)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Mt();const s=Z(this)[t].apply(this,n);return Ot(),s}}),e}function hs(e=!1,t=!1){return function(s,r,o){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&o===(e?t?ci:ai:t?li:ii).get(s))return s;const i=D(s);if(!e&&i&&Q(to,r))return Reflect.get(to,r,o);const l=Reflect.get(s,r,o);return(lr(r)?ni.has(r):ma(r))||(e||Ie(s,"get",r),t)?l:ge(l)?!i||!cr(r)?l.value:l:pe(l)?e?pr(l):Ln(l):l}}const ka=si(),wa=si(!0);function si(e=!1){return function(n,s,r,o){let i=n[s];if(Yt(i)&&ge(i)&&!ge(r))return!1;if(!e&&!Yt(r)&&(hr(r)||(r=Z(r),i=Z(i)),!D(n)&&ge(i)&&!ge(r)))return i.value=r,!0;const l=D(n)&&cr(s)?Number(s)<n.length:Q(n,s),a=Reflect.set(n,s,r,o);return n===Z(o)&&(l?kn(r,i)&&nt(n,"set",s,r):nt(n,"add",s,r)),a}}function Ca(e,t){const n=Q(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&nt(e,"delete",t,void 0),s}function Ta(e,t){const n=Reflect.has(e,t);return(!lr(t)||!ni.has(t))&&Ie(e,"has",t),n}function Ea(e){return Ie(e,"iterate",D(e)?"length":At),Reflect.ownKeys(e)}const ri={get:_a,set:ka,deleteProperty:Ca,has:Ta,ownKeys:Ea},oi={get:ba,set(e,t){return!0},deleteProperty(e,t){return!0}},$a=fe({},ri,{get:va,set:wa}),Aa=fe({},oi,{get:ya}),fr=e=>e,gs=e=>Reflect.getPrototypeOf(e);function Hn(e,t,n=!1,s=!1){e=e.__v_raw;const r=Z(e),o=Z(t);t!==o&&!n&&Ie(r,"get",t),!n&&Ie(r,"get",o);const{has:i}=gs(r),l=s?fr:n?mr:wn;if(i.call(r,t))return l(e.get(t));if(i.call(r,o))return l(e.get(o));e!==r&&e.get(t)}function Bn(e,t=!1){const n=this.__v_raw,s=Z(n),r=Z(e);return e!==r&&!t&&Ie(s,"has",e),!t&&Ie(s,"has",r),e===r?n.has(e):n.has(e)||n.has(r)}function Kn(e,t=!1){return e=e.__v_raw,!t&&Ie(Z(e),"iterate",At),Reflect.get(e,"size",e)}function no(e){e=Z(e);const t=Z(this);return gs(t).has.call(t,e)||(t.add(e),nt(t,"add",e,e)),this}function so(e,t){t=Z(t);const n=Z(this),{has:s,get:r}=gs(n);let o=s.call(n,e);o||(e=Z(e),o=s.call(n,e));const i=r.call(n,e);return n.set(e,t),o?kn(t,i)&&nt(n,"set",e,t):nt(n,"add",e,t),this}function ro(e){const t=Z(this),{has:n,get:s}=gs(t);let r=n.call(t,e);r||(e=Z(e),r=n.call(t,e)),s&&s.call(t,e);const o=t.delete(e);return r&&nt(t,"delete",e,void 0),o}function oo(){const e=Z(this),t=e.size!==0,n=e.clear();return t&&nt(e,"clear",void 0,void 0),n}function Vn(e,t){return function(s,r){const o=this,i=o.__v_raw,l=Z(i),a=t?fr:e?mr:wn;return!e&&Ie(l,"iterate",At),i.forEach((c,d)=>s.call(r,a(c),a(d),o))}}function Un(e,t,n){return function(...s){const r=this.__v_raw,o=Z(r),i=qt(o),l=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,c=r[e](...s),d=n?fr:t?mr:wn;return!t&&Ie(o,"iterate",a?Bs:At),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:l?[d(f[0]),d(f[1])]:d(f),done:h}},[Symbol.iterator](){return this}}}}function lt(e){return function(...t){return e==="delete"?!1:this}}function Sa(){const e={get(o){return Hn(this,o)},get size(){return Kn(this)},has:Bn,add:no,set:so,delete:ro,clear:oo,forEach:Vn(!1,!1)},t={get(o){return Hn(this,o,!1,!0)},get size(){return Kn(this)},has:Bn,add:no,set:so,delete:ro,clear:oo,forEach:Vn(!1,!0)},n={get(o){return Hn(this,o,!0)},get size(){return Kn(this,!0)},has(o){return Bn.call(this,o,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:Vn(!0,!1)},s={get(o){return Hn(this,o,!0,!0)},get size(){return Kn(this,!0)},has(o){return Bn.call(this,o,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:Vn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Un(o,!1,!1),n[o]=Un(o,!0,!1),t[o]=Un(o,!1,!0),s[o]=Un(o,!0,!0)}),[e,n,t,s]}const[Ra,La,Pa,Fa]=Sa();function ms(e,t){const n=t?e?Fa:Pa:e?La:Ra;return(s,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(Q(n,r)&&r in s?n:s,r,o)}const Ia={get:ms(!1,!1)},Ma={get:ms(!1,!0)},Oa={get:ms(!0,!1)},ja={get:ms(!0,!0)},ii=new WeakMap,li=new WeakMap,ai=new WeakMap,ci=new WeakMap;function Da(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Na(e){return e.__v_skip||!Object.isExtensible(e)?0:Da(oa(e))}function Ln(e){return Yt(e)?e:_s(e,!1,ri,Ia,ii)}function ui(e){return _s(e,!1,$a,Ma,li)}function pr(e){return _s(e,!0,oi,Oa,ai)}function Ha(e){return _s(e,!0,Aa,ja,ci)}function _s(e,t,n,s,r){if(!pe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=r.get(e);if(o)return o;const i=Na(e);if(i===0)return e;const l=new Proxy(e,i===2?s:n);return r.set(e,l),l}function St(e){return Yt(e)?St(e.__v_raw):!!(e&&e.__v_isReactive)}function Yt(e){return!!(e&&e.__v_isReadonly)}function hr(e){return!!(e&&e.__v_isShallow)}function gr(e){return St(e)||Yt(e)}function Z(e){const t=e&&e.__v_raw;return t?Z(t):e}function Rt(e){return Zn(e,"__v_skip",!0),e}const wn=e=>pe(e)?Ln(e):e,mr=e=>pe(e)?pr(e):e;function _r(e){ft&&He&&(e=Z(e),ti(e.dep||(e.dep=dr())))}function vs(e,t){e=Z(e),e.dep&&Ks(e.dep)}function ge(e){return!!(e&&e.__v_isRef===!0)}function $e(e){return fi(e,!1)}function di(e){return fi(e,!0)}function fi(e,t){return ge(e)?e:new Ba(e,t)}class Ba{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Z(t),this._value=n?t:wn(t)}get value(){return _r(this),this._value}set value(t){t=this.__v_isShallow?t:Z(t),kn(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:wn(t),vs(this))}}function Ka(e){vs(e)}function L(e){return ge(e)?e.value:e}const Va={get:(e,t,n)=>L(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return ge(r)&&!ge(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function vr(e){return St(e)?e:new Proxy(e,Va)}class Ua{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=t(()=>_r(this),()=>vs(this));this._get=n,this._set=s}get value(){return this._get()}set value(t){this._set(t)}}function Wa(e){return new Ua(e)}function br(e){const t=D(e)?new Array(e.length):{};for(const n in e)t[n]=pi(e,n);return t}class qa{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function pi(e,t,n){const s=e[t];return ge(s)?s:new qa(e,t,n)}class za{constructor(t,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Rn(t,()=>{this._dirty||(this._dirty=!0,vs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=Z(this);return _r(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ja(e,t,n=!1){let s,r;const o=q(e);return o?(s=e,r=Be):(s=e.get,r=e.set),new za(s,r,o||!r,n)}const mn=[];function hi(e,...t){Mt();const n=mn.length?mn[mn.length-1].component:null,s=n&&n.appContext.config.warnHandler,r=Ya();if(s)qe(s,n,11,[e+t.join(""),n&&n.proxy,r.map(({vnode:o})=>`at <${ol(n,o.type)}>`).join(`
`),r]);else{const o=[`[Vue warn]: ${e}`,...t];r.length&&o.push(`
`,...Xa(r)),console.warn(...o)}Ot()}function Ya(){let e=mn[mn.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const s=e.component&&e.component.parent;e=s&&s.vnode}return t}function Xa(e){const t=[];return e.forEach((n,s)=>{t.push(...s===0?[]:[`
`],...Ga(n))}),t}function Ga({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",s=e.component?e.component.parent==null:!1,r=` at <${ol(e.component,e.type,s)}`,o=">"+n;return e.props?[r,...Za(e.props),o]:[r+o]}function Za(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(s=>{t.push(...gi(s,e[s]))}),n.length>3&&t.push(" ..."),t}function gi(e,t,n){return ce(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:ge(t)?(t=gi(e,Z(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):q(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=Z(t),n?t:[`${e}=`,t])}function qe(e,t,n,s){let r;try{r=s?e(...s):e()}catch(o){jt(o,t,n)}return r}function Pe(e,t,n,s){if(q(e)){const o=qe(e,t,n,s);return o&&ar(o)&&o.catch(i=>{jt(i,t,n)}),o}const r=[];for(let o=0;o<e.length;o++)r.push(Pe(e[o],t,n,s));return r}function jt(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let o=t.parent;const i=t.proxy,l=n;for(;o;){const c=o.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,i,l)===!1)return}o=o.parent}const a=t.appContext.config.errorHandler;if(a){qe(a,null,10,[e,i,l]);return}}Qa(e,n,r,s)}function Qa(e,t,n,s=!0){console.error(e)}let Qn=!1,Vs=!1;const Le=[];let Ze=0;const _n=[];let fn=null,Kt=0;const vn=[];let ut=null,Vt=0;const mi=Promise.resolve();let yr=null,Us=null;function Pn(e){const t=yr||mi;return e?t.then(this?e.bind(this):e):t}function ec(e){let t=Ze+1,n=Le.length;for(;t<n;){const s=t+n>>>1;Cn(Le[s])<e?t=s+1:n=s}return t}function xr(e){(!Le.length||!Le.includes(e,Qn&&e.allowRecurse?Ze+1:Ze))&&e!==Us&&(e.id==null?Le.push(e):Le.splice(ec(e.id),0,e),_i())}function _i(){!Qn&&!Vs&&(Vs=!0,yr=mi.then(bi))}function tc(e){const t=Le.indexOf(e);t>Ze&&Le.splice(t,1)}function vi(e,t,n,s){D(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?s+1:s))&&n.push(e),_i()}function nc(e){vi(e,fn,_n,Kt)}function kr(e){vi(e,ut,vn,Vt)}function wr(e,t=null){if(_n.length){for(Us=t,fn=[...new Set(_n)],_n.length=0,Kt=0;Kt<fn.length;Kt++)fn[Kt]();fn=null,Kt=0,Us=null,wr(e,t)}}function es(e){if(vn.length){const t=[...new Set(vn)];if(vn.length=0,ut){ut.push(...t);return}for(ut=t,ut.sort((n,s)=>Cn(n)-Cn(s)),Vt=0;Vt<ut.length;Vt++)ut[Vt]();ut=null,Vt=0}}const Cn=e=>e.id==null?1/0:e.id;function bi(e){Vs=!1,Qn=!0,wr(e),Le.sort((n,s)=>Cn(n)-Cn(s));const t=Be;try{for(Ze=0;Ze<Le.length;Ze++){const n=Le[Ze];n&&n.active!==!1&&qe(n,null,14)}}finally{Ze=0,Le.length=0,es(),Qn=!1,yr=null,(Le.length||_n.length||vn.length)&&bi(e)}}let Ut,Wn=[];function yi(e,t){var n,s;Ut=e,Ut?(Ut.enabled=!0,Wn.forEach(({event:r,args:o})=>Ut.emit(r,...o)),Wn=[]):typeof window!="undefined"&&window.HTMLElement&&!(!((s=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||s===void 0)&&s.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(o=>{yi(o,t)}),setTimeout(()=>{Ut||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Wn=[])},3e3)):Wn=[]}function sc(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ne;let r=n;const o=t.startsWith("update:"),i=o&&t.slice(7);if(i&&i in s){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:f,trim:h}=s[d]||ne;h?r=n.map(y=>y.trim()):f&&(r=n.map(gt))}let l,a=s[l=gn(t)]||s[l=gn(Fe(t))];!a&&o&&(a=s[l=gn(We(t))]),a&&Pe(a,e,6,r);const c=s[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Pe(c,e,6,r)}}function xi(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const o=e.emits;let i={},l=!1;if(!q(e)){const a=c=>{const d=xi(c,t,!0);d&&(l=!0,fe(i,d))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!o&&!l?(s.set(e,null),null):(D(o)?o.forEach(a=>i[a]=null):fe(i,o),s.set(e,i),i)}function bs(e,t){return!e||!An(t)?!1:(t=t.slice(2).replace(/Once$/,""),Q(e,t[0].toLowerCase()+t.slice(1))||Q(e,We(t))||Q(e,t))}let ke=null,ys=null;function Tn(e){const t=ke;return ke=e,ys=e&&e.type.__scopeId||null,t}function Cr(e){ys=e}function Tr(){ys=null}const rc=e=>Oe;function Oe(e,t=ke,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&Ys(-1);const o=Tn(t),i=e(...r);return Tn(o),s._d&&Ys(1),i};return s._n=!0,s._c=!0,s._d=!0,s}function Xn(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:o,propsOptions:[i],slots:l,attrs:a,emit:c,render:d,renderCache:f,data:h,setupState:y,ctx:b,inheritAttrs:P}=e;let g,x;const m=Tn(e);try{if(n.shapeFlag&4){const T=r||s;g=Re(d.call(T,T,f,o,y,h,b)),x=a}else{const T=t;g=Re(T.length>1?T(o,{attrs:a,slots:l,emit:c}):T(o,null)),x=t.props?a:ic(a)}}catch(T){yn.length=0,jt(T,e,1),g=U(we)}let v=g;if(x&&P!==!1){const T=Object.keys(x),{shapeFlag:I}=v;T.length&&I&7&&(i&&T.some(or)&&(x=lc(x,i)),v=st(v,x))}return n.dirs&&(v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),g=v,Tn(m),g}function oc(e){let t;for(let n=0;n<e.length;n++){const s=e[n];if(_t(s)){if(s.type!==we||s.children==="v-if"){if(t)return;t=s}}else return}return t}const ic=e=>{let t;for(const n in e)(n==="class"||n==="style"||An(n))&&((t||(t={}))[n]=e[n]);return t},lc=(e,t)=>{const n={};for(const s in e)(!or(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function ac(e,t,n){const{props:s,children:r,component:o}=e,{props:i,children:l,patchFlag:a}=t,c=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?io(s,i,c):!!i;if(a&8){const d=t.dynamicProps;for(let f=0;f<d.length;f++){const h=d[f];if(i[h]!==s[h]&&!bs(c,h))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===i?!1:s?i?io(s,i,c):!0:!!i;return!1}function io(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(t[o]!==e[o]&&!bs(n,o))return!0}return!1}function Er({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const cc=e=>e.__isSuspense,uc={name:"Suspense",__isSuspense:!0,process(e,t,n,s,r,o,i,l,a,c){e==null?fc(t,n,s,r,o,i,l,a,c):pc(e,t,n,s,r,i,l,a,c)},hydrate:hc,create:$r,normalize:gc},dc=uc;function En(e,t){const n=e.props&&e.props[t];q(n)&&n()}function fc(e,t,n,s,r,o,i,l,a){const{p:c,o:{createElement:d}}=a,f=d("div"),h=e.suspense=$r(e,r,s,t,f,n,o,i,l,a);c(null,h.pendingBranch=e.ssContent,f,null,s,h,o,i),h.deps>0?(En(e,"onPending"),En(e,"onFallback"),c(null,e.ssFallback,t,n,s,null,o,i),Jt(h,e.ssFallback)):h.resolve()}function pc(e,t,n,s,r,o,i,l,{p:a,um:c,o:{createElement:d}}){const f=t.suspense=e.suspense;f.vnode=t,t.el=e.el;const h=t.ssContent,y=t.ssFallback,{activeBranch:b,pendingBranch:P,isInFallback:g,isHydrating:x}=f;if(P)f.pendingBranch=h,Ue(h,P)?(a(P,h,f.hiddenContainer,null,r,f,o,i,l),f.deps<=0?f.resolve():g&&(a(b,y,n,s,r,null,o,i,l),Jt(f,y))):(f.pendingId++,x?(f.isHydrating=!1,f.activeBranch=P):c(P,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=d("div"),g?(a(null,h,f.hiddenContainer,null,r,f,o,i,l),f.deps<=0?f.resolve():(a(b,y,n,s,r,null,o,i,l),Jt(f,y))):b&&Ue(h,b)?(a(b,h,n,s,r,f,o,i,l),f.resolve(!0)):(a(null,h,f.hiddenContainer,null,r,f,o,i,l),f.deps<=0&&f.resolve()));else if(b&&Ue(h,b))a(b,h,n,s,r,f,o,i,l),Jt(f,h);else if(En(t,"onPending"),f.pendingBranch=h,f.pendingId++,a(null,h,f.hiddenContainer,null,r,f,o,i,l),f.deps<=0)f.resolve();else{const{timeout:m,pendingId:v}=f;m>0?setTimeout(()=>{f.pendingId===v&&f.fallback(y)},m):m===0&&f.fallback(y)}}function $r(e,t,n,s,r,o,i,l,a,c,d=!1){const{p:f,m:h,um:y,n:b,o:{parentNode:P,remove:g}}=c,x=gt(e.props&&e.props.timeout),m={vnode:e,parent:t,parentComponent:n,isSVG:i,container:s,hiddenContainer:r,anchor:o,deps:0,pendingId:0,timeout:typeof x=="number"?x:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:d,isUnmounted:!1,effects:[],resolve(v=!1){const{vnode:T,activeBranch:I,pendingBranch:O,pendingId:E,effects:N,parentComponent:H,container:W}=m;if(m.isHydrating)m.isHydrating=!1;else if(!v){const X=I&&O.transition&&O.transition.mode==="out-in";X&&(I.transition.afterLeave=()=>{E===m.pendingId&&h(O,W,re,0)});let{anchor:re}=m;I&&(re=b(I),y(I,H,m,!0)),X||h(O,W,re,0)}Jt(m,O),m.pendingBranch=null,m.isInFallback=!1;let J=m.parent,A=!1;for(;J;){if(J.pendingBranch){J.effects.push(...N),A=!0;break}J=J.parent}A||kr(N),m.effects=[],En(T,"onResolve")},fallback(v){if(!m.pendingBranch)return;const{vnode:T,activeBranch:I,parentComponent:O,container:E,isSVG:N}=m;En(T,"onFallback");const H=b(I),W=()=>{!m.isInFallback||(f(null,v,E,H,O,null,N,l,a),Jt(m,v))},J=v.transition&&v.transition.mode==="out-in";J&&(I.transition.afterLeave=W),m.isInFallback=!0,y(I,O,null,!0),J||W()},move(v,T,I){m.activeBranch&&h(m.activeBranch,v,T,I),m.container=v},next(){return m.activeBranch&&b(m.activeBranch)},registerDep(v,T){const I=!!m.pendingBranch;I&&m.deps++;const O=v.vnode.el;v.asyncDep.catch(E=>{jt(E,v,0)}).then(E=>{if(v.isUnmounted||m.isUnmounted||m.pendingId!==v.suspenseId)return;v.asyncResolved=!0;const{vnode:N}=v;Zs(v,E,!1),O&&(N.el=O);const H=!O&&v.subTree.el;T(v,N,P(O||v.subTree.el),O?null:b(v.subTree),m,i,a),H&&g(H),Er(v,N.el),I&&--m.deps===0&&m.resolve()})},unmount(v,T){m.isUnmounted=!0,m.activeBranch&&y(m.activeBranch,n,v,T),m.pendingBranch&&y(m.pendingBranch,n,v,T)}};return m}function hc(e,t,n,s,r,o,i,l,a){const c=t.suspense=$r(t,s,n,e.parentNode,document.createElement("div"),null,r,o,i,l,!0),d=a(e,c.pendingBranch=t.ssContent,n,c,o,i);return c.deps===0&&c.resolve(),d}function gc(e){const{shapeFlag:t,children:n}=e,s=t&32;e.ssContent=lo(s?n.default:n),e.ssFallback=s?lo(n.fallback):U(we)}function lo(e){let t;if(q(e)){const n=en&&e._c;n&&(e._d=!1,M()),e=e(),n&&(e._d=!0,t=ze,Yi())}return D(e)&&(e=oc(e)),e=Re(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function ki(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):kr(e)}function Jt(e,t){e.activeBranch=t;const{vnode:n,parentComponent:s}=e,r=n.el=t.el;s&&s.subTree===n&&(s.vnode.el=r,Er(s,r))}function wi(e,t){if(ve){let n=ve.provides;const s=ve.parent&&ve.parent.provides;s===n&&(n=ve.provides=Object.create(s)),n[e]=t}}function Lt(e,t,n=!1){const s=ve||ke;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&q(t)?t.call(s.proxy):t}}function Ar(e,t){return Fn(e,null,t)}function Ci(e,t){return Fn(e,null,{flush:"post"})}function mc(e,t){return Fn(e,null,{flush:"sync"})}const ao={};function et(e,t,n){return Fn(e,t,n)}function Fn(e,t,{immediate:n,deep:s,flush:r,onTrack:o,onTrigger:i}=ne){const l=ve;let a,c=!1,d=!1;if(ge(e)?(a=()=>e.value,c=hr(e)):St(e)?(a=()=>e,s=!0):D(e)?(d=!0,c=e.some(St),a=()=>e.map(x=>{if(ge(x))return x.value;if(St(x))return $t(x);if(q(x))return qe(x,l,2)})):q(e)?t?a=()=>qe(e,l,2):a=()=>{if(!(l&&l.isUnmounted))return f&&f(),Pe(e,l,3,[h])}:a=Be,t&&s){const x=a;a=()=>$t(x())}let f,h=x=>{f=g.onStop=()=>{qe(x,l,4)}};if(tn)return h=Be,t?n&&Pe(t,l,3,[a(),d?[]:void 0,h]):a(),Be;let y=d?[]:ao;const b=()=>{if(!!g.active)if(t){const x=g.run();(s||c||(d?x.some((m,v)=>kn(m,y[v])):kn(x,y)))&&(f&&f(),Pe(t,l,3,[x,y===ao?void 0:y,h]),y=x)}else g.run()};b.allowRecurse=!!t;let P;r==="sync"?P=b:r==="post"?P=()=>xe(b,l&&l.suspense):P=()=>{!l||l.isMounted?nc(b):b()};const g=new Rn(a,P);return t?n?b():y=g.run():r==="post"?xe(g.run.bind(g),l&&l.suspense):g.run(),()=>{g.stop(),l&&l.scope&&ir(l.scope.effects,g)}}function _c(e,t,n){const s=this.proxy,r=ce(e)?e.includes(".")?Ti(s,e):()=>s[e]:e.bind(s,s);let o;q(t)?o=t:(o=t.handler,n=t);const i=ve;vt(this);const l=Fn(r,o.bind(s),n);return i?vt(i):pt(),l}function Ti(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function $t(e,t){if(!pe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ge(e))$t(e.value,t);else if(D(e))for(let n=0;n<e.length;n++)$t(e[n],t);else if(It(e)||qt(e))e.forEach(n=>{$t(n,t)});else if(Xo(e))for(const n in e)$t(e[n],t);return e}function Sr(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Je(()=>{e.isMounted=!0}),ws(()=>{e.isUnmounting=!0}),e}const Me=[Function,Array],vc={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Me,onEnter:Me,onAfterEnter:Me,onEnterCancelled:Me,onBeforeLeave:Me,onLeave:Me,onAfterLeave:Me,onLeaveCancelled:Me,onBeforeAppear:Me,onAppear:Me,onAfterAppear:Me,onAppearCancelled:Me},setup(e,{slots:t}){const n=yt(),s=Sr();let r;return()=>{const o=t.default&&xs(t.default(),!0);if(!o||!o.length)return;let i=o[0];if(o.length>1){for(const P of o)if(P.type!==we){i=P;break}}const l=Z(e),{mode:a}=l;if(s.isLeaving)return Rs(i);const c=co(i);if(!c)return Rs(i);const d=Xt(c,l,s,n);Ft(c,d);const f=n.subTree,h=f&&co(f);let y=!1;const{getTransitionKey:b}=c.type;if(b){const P=b();r===void 0?r=P:P!==r&&(r=P,y=!0)}if(h&&h.type!==we&&(!Ue(c,h)||y)){const P=Xt(h,l,s,n);if(Ft(h,P),a==="out-in")return s.isLeaving=!0,P.afterLeave=()=>{s.isLeaving=!1,n.update()},Rs(i);a==="in-out"&&c.type!==we&&(P.delayLeave=(g,x,m)=>{const v=Ei(s,h);v[String(h.key)]=h,g._leaveCb=()=>{x(),g._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=m})}return i}}},Rr=vc;function Ei(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Xt(e,t,n,s){const{appear:r,mode:o,persisted:i=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:y,onLeaveCancelled:b,onBeforeAppear:P,onAppear:g,onAfterAppear:x,onAppearCancelled:m}=t,v=String(e.key),T=Ei(n,e),I=(E,N)=>{E&&Pe(E,s,9,N)},O={mode:o,persisted:i,beforeEnter(E){let N=l;if(!n.isMounted)if(r)N=P||l;else return;E._leaveCb&&E._leaveCb(!0);const H=T[v];H&&Ue(e,H)&&H.el._leaveCb&&H.el._leaveCb(),I(N,[E])},enter(E){let N=a,H=c,W=d;if(!n.isMounted)if(r)N=g||a,H=x||c,W=m||d;else return;let J=!1;const A=E._enterCb=X=>{J||(J=!0,X?I(W,[E]):I(H,[E]),O.delayedLeave&&O.delayedLeave(),E._enterCb=void 0)};N?(N(E,A),N.length<=1&&A()):A()},leave(E,N){const H=String(e.key);if(E._enterCb&&E._enterCb(!0),n.isUnmounting)return N();I(f,[E]);let W=!1;const J=E._leaveCb=A=>{W||(W=!0,N(),A?I(b,[E]):I(y,[E]),E._leaveCb=void 0,T[H]===e&&delete T[H])};T[H]=e,h?(h(E,J),h.length<=1&&J()):J()},clone(E){return Xt(E,t,n,s)}};return O}function Rs(e){if(In(e))return e=st(e),e.children=null,e}function co(e){return In(e)?e.children?e.children[0]:void 0:e}function Ft(e,t){e.shapeFlag&6&&e.component?Ft(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function xs(e,t=!1,n){let s=[],r=0;for(let o=0;o<e.length;o++){let i=e[o];const l=n==null?i.key:String(n)+String(i.key!=null?i.key:o);i.type===de?(i.patchFlag&128&&r++,s=s.concat(xs(i.children,t,l))):(t||i.type!==we)&&s.push(l!=null?st(i,{key:l}):i)}if(r>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}function ae(e){return q(e)?{setup:e,name:e.name}:e}const Gt=e=>!!e.type.__asyncLoader;function bc(e){q(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:s,delay:r=200,timeout:o,suspensible:i=!0,onError:l}=e;let a=null,c,d=0;const f=()=>(d++,a=null,h()),h=()=>{let y;return a||(y=a=t().catch(b=>{if(b=b instanceof Error?b:new Error(String(b)),l)return new Promise((P,g)=>{l(b,()=>P(f()),()=>g(b),d+1)});throw b}).then(b=>y!==a&&a?a:(b&&(b.__esModule||b[Symbol.toStringTag]==="Module")&&(b=b.default),c=b,b)))};return ae({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return c},setup(){const y=ve;if(c)return()=>Ls(c,y);const b=m=>{a=null,jt(m,y,13,!s)};if(i&&y.suspense||tn)return h().then(m=>()=>Ls(m,y)).catch(m=>(b(m),()=>s?U(s,{error:m}):null));const P=$e(!1),g=$e(),x=$e(!!r);return r&&setTimeout(()=>{x.value=!1},r),o!=null&&setTimeout(()=>{if(!P.value&&!g.value){const m=new Error(`Async component timed out after ${o}ms.`);b(m),g.value=m}},o),h().then(()=>{P.value=!0,y.parent&&In(y.parent.vnode)&&xr(y.parent.update)}).catch(m=>{b(m),g.value=m}),()=>{if(P.value&&c)return Ls(c,y);if(g.value&&s)return U(s,{error:g.value});if(n&&!x.value)return U(n)}}})}function Ls(e,{vnode:{ref:t,props:n,children:s}}){const r=U(e,n,s);return r.ref=t,r}const In=e=>e.type.__isKeepAlive,yc={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=yt(),s=n.ctx;if(!s.renderer)return t.default;const r=new Map,o=new Set;let i=null;const l=n.suspense,{renderer:{p:a,m:c,um:d,o:{createElement:f}}}=s,h=f("div");s.activate=(m,v,T,I,O)=>{const E=m.component;c(m,v,T,0,l),a(E.vnode,m,v,T,E,l,I,m.slotScopeIds,O),xe(()=>{E.isDeactivated=!1,E.a&&zt(E.a);const N=m.props&&m.props.onVnodeMounted;N&&Ee(N,E.parent,m)},l)},s.deactivate=m=>{const v=m.component;c(m,h,null,1,l),xe(()=>{v.da&&zt(v.da);const T=m.props&&m.props.onVnodeUnmounted;T&&Ee(T,v.parent,m),v.isDeactivated=!0},l)};function y(m){Ps(m),d(m,n,l,!0)}function b(m){r.forEach((v,T)=>{const I=os(v.type);I&&(!m||!m(I))&&P(T)})}function P(m){const v=r.get(m);!i||v.type!==i.type?y(v):i&&Ps(i),r.delete(m),o.delete(m)}et(()=>[e.include,e.exclude],([m,v])=>{m&&b(T=>pn(m,T)),v&&b(T=>!pn(v,T))},{flush:"post",deep:!0});let g=null;const x=()=>{g!=null&&r.set(g,Fs(n.subTree))};return Je(x),Mn(x),ws(()=>{r.forEach(m=>{const{subTree:v,suspense:T}=n,I=Fs(v);if(m.type===I.type){Ps(I);const O=I.component.da;O&&xe(O,T);return}y(m)})}),()=>{if(g=null,!t.default)return null;const m=t.default(),v=m[0];if(m.length>1)return i=null,m;if(!_t(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return i=null,v;let T=Fs(v);const I=T.type,O=os(Gt(T)?T.type.__asyncResolved||{}:I),{include:E,exclude:N,max:H}=e;if(E&&(!O||!pn(E,O))||N&&O&&pn(N,O))return i=T,v;const W=T.key==null?I:T.key,J=r.get(W);return T.el&&(T=st(T),v.shapeFlag&128&&(v.ssContent=T)),g=W,J?(T.el=J.el,T.component=J.component,T.transition&&Ft(T,T.transition),T.shapeFlag|=512,o.delete(W),o.add(W)):(o.add(W),H&&o.size>parseInt(H,10)&&P(o.values().next().value)),T.shapeFlag|=256,i=T,v}}},xc=yc;function pn(e,t){return D(e)?e.some(n=>pn(n,t)):ce(e)?e.split(",").includes(t):e.test?e.test(t):!1}function $i(e,t){Si(e,"a",t)}function Ai(e,t){Si(e,"da",t)}function Si(e,t,n=ve){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(ks(t,s,n),n){let r=n.parent;for(;r&&r.parent;)In(r.parent.vnode)&&kc(s,t,n,r),r=r.parent}}function kc(e,t,n,s){const r=ks(t,e,s,!0);rn(()=>{ir(s[t],r)},n)}function Ps(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function Fs(e){return e.shapeFlag&128?e.ssContent:e}function ks(e,t,n=ve,s=!1){if(n){const r=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;Mt(),vt(n);const l=Pe(t,n,e,i);return pt(),Ot(),l});return s?r.unshift(o):r.push(o),o}}const ot=e=>(t,n=ve)=>(!tn||e==="sp")&&ks(e,t,n),Ri=ot("bm"),Je=ot("m"),Li=ot("bu"),Mn=ot("u"),ws=ot("bum"),rn=ot("um"),Pi=ot("sp"),Fi=ot("rtg"),Ii=ot("rtc");function Mi(e,t=ve){ks("ec",e,t)}let Ws=!0;function wc(e){const t=ji(e),n=e.proxy,s=e.ctx;Ws=!1,t.beforeCreate&&uo(t.beforeCreate,e,"bc");const{data:r,computed:o,methods:i,watch:l,provide:a,inject:c,created:d,beforeMount:f,mounted:h,beforeUpdate:y,updated:b,activated:P,deactivated:g,beforeDestroy:x,beforeUnmount:m,destroyed:v,unmounted:T,render:I,renderTracked:O,renderTriggered:E,errorCaptured:N,serverPrefetch:H,expose:W,inheritAttrs:J,components:A,directives:X,filters:re}=t;if(c&&Cc(c,s,null,e.appContext.config.unwrapInjectedRef),i)for(const ue in i){const oe=i[ue];q(oe)&&(s[ue]=oe.bind(n))}if(r){const ue=r.call(n,n);pe(ue)&&(e.data=Ln(ue))}if(Ws=!0,o)for(const ue in o){const oe=o[ue],Ye=q(oe)?oe.bind(n,n):q(oe.get)?oe.get.bind(n,n):Be,$s=!q(oe)&&q(oe.set)?oe.set.bind(n):Be,ln=G({get:Ye,set:$s});Object.defineProperty(s,ue,{enumerable:!0,configurable:!0,get:()=>ln.value,set:Nt=>ln.value=Nt})}if(l)for(const ue in l)Oi(l[ue],s,n,ue);if(a){const ue=q(a)?a.call(n):a;Reflect.ownKeys(ue).forEach(oe=>{wi(oe,ue[oe])})}d&&uo(d,e,"c");function ye(ue,oe){D(oe)?oe.forEach(Ye=>ue(Ye.bind(n))):oe&&ue(oe.bind(n))}if(ye(Ri,f),ye(Je,h),ye(Li,y),ye(Mn,b),ye($i,P),ye(Ai,g),ye(Mi,N),ye(Ii,O),ye(Fi,E),ye(ws,m),ye(rn,T),ye(Pi,H),D(W))if(W.length){const ue=e.exposed||(e.exposed={});W.forEach(oe=>{Object.defineProperty(ue,oe,{get:()=>n[oe],set:Ye=>n[oe]=Ye})})}else e.exposed||(e.exposed={});I&&e.render===Be&&(e.render=I),J!=null&&(e.inheritAttrs=J),A&&(e.components=A),X&&(e.directives=X)}function Cc(e,t,n=Be,s=!1){D(e)&&(e=qs(e));for(const r in e){const o=e[r];let i;pe(o)?"default"in o?i=Lt(o.from||r,o.default,!0):i=Lt(o.from||r):i=Lt(o),ge(i)&&s?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):t[r]=i}}function uo(e,t,n){Pe(D(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Oi(e,t,n,s){const r=s.includes(".")?Ti(n,s):()=>n[s];if(ce(e)){const o=t[e];q(o)&&et(r,o)}else if(q(e))et(r,e.bind(n));else if(pe(e))if(D(e))e.forEach(o=>Oi(o,t,n,s));else{const o=q(e.handler)?e.handler.bind(n):t[e.handler];q(o)&&et(r,o,e)}}function ji(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,l=o.get(t);let a;return l?a=l:!r.length&&!n&&!s?a=t:(a={},r.length&&r.forEach(c=>ts(a,c,i,!0)),ts(a,t,i)),o.set(t,a),a}function ts(e,t,n,s=!1){const{mixins:r,extends:o}=t;o&&ts(e,o,n,!0),r&&r.forEach(i=>ts(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const l=Tc[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const Tc={data:fo,props:Ct,emits:Ct,methods:Ct,computed:Ct,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:Ct,directives:Ct,watch:$c,provide:fo,inject:Ec};function fo(e,t){return t?e?function(){return fe(q(e)?e.call(this,this):e,q(t)?t.call(this,this):t)}:t:e}function Ec(e,t){return Ct(qs(e),qs(t))}function qs(e){if(D(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Te(e,t){return e?[...new Set([].concat(e,t))]:t}function Ct(e,t){return e?fe(fe(Object.create(null),e),t):t}function $c(e,t){if(!e)return t;if(!t)return e;const n=fe(Object.create(null),e);for(const s in t)n[s]=Te(e[s],t[s]);return n}function Ac(e,t,n,s=!1){const r={},o={};Zn(o,Cs,1),e.propsDefaults=Object.create(null),Di(e,t,r,o);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);n?e.props=s?r:ui(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function Sc(e,t,n,s){const{props:r,attrs:o,vnode:{patchFlag:i}}=e,l=Z(r),[a]=e.propsOptions;let c=!1;if((s||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let h=d[f];if(bs(e.emitsOptions,h))continue;const y=t[h];if(a)if(Q(o,h))y!==o[h]&&(o[h]=y,c=!0);else{const b=Fe(h);r[b]=zs(a,l,b,y,e,!1)}else y!==o[h]&&(o[h]=y,c=!0)}}}else{Di(e,t,r,o)&&(c=!0);let d;for(const f in l)(!t||!Q(t,f)&&((d=We(f))===f||!Q(t,d)))&&(a?n&&(n[f]!==void 0||n[d]!==void 0)&&(r[f]=zs(a,l,f,void 0,e,!0)):delete r[f]);if(o!==l)for(const f in o)(!t||!Q(t,f)&&!0)&&(delete o[f],c=!0)}c&&nt(e,"set","$attrs")}function Di(e,t,n,s){const[r,o]=e.propsOptions;let i=!1,l;if(t)for(let a in t){if(hn(a))continue;const c=t[a];let d;r&&Q(r,d=Fe(a))?!o||!o.includes(d)?n[d]=c:(l||(l={}))[d]=c:bs(e.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,i=!0)}if(o){const a=Z(n),c=l||ne;for(let d=0;d<o.length;d++){const f=o[d];n[f]=zs(r,a,f,c[f],e,!Q(c,f))}}return i}function zs(e,t,n,s,r,o){const i=e[n];if(i!=null){const l=Q(i,"default");if(l&&s===void 0){const a=i.default;if(i.type!==Function&&q(a)){const{propsDefaults:c}=r;n in c?s=c[n]:(vt(r),s=c[n]=a.call(null,t),pt())}else s=a}i[0]&&(o&&!l?s=!1:i[1]&&(s===""||s===We(n))&&(s=!0))}return s}function Ni(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const o=e.props,i={},l=[];let a=!1;if(!q(e)){const d=f=>{a=!0;const[h,y]=Ni(f,t,!0);fe(i,h),y&&l.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!o&&!a)return s.set(e,Wt),Wt;if(D(o))for(let d=0;d<o.length;d++){const f=Fe(o[d]);po(f)&&(i[f]=ne)}else if(o)for(const d in o){const f=Fe(d);if(po(f)){const h=o[d],y=i[f]=D(h)||q(h)?{type:h}:h;if(y){const b=mo(Boolean,y.type),P=mo(String,y.type);y[0]=b>-1,y[1]=P<0||b<P,(b>-1||Q(y,"default"))&&l.push(f)}}}const c=[i,l];return s.set(e,c),c}function po(e){return e[0]!=="$"}function ho(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function go(e,t){return ho(e)===ho(t)}function mo(e,t){return D(t)?t.findIndex(n=>go(n,e)):q(t)&&go(t,e)?0:-1}const Hi=e=>e[0]==="_"||e==="$stable",Lr=e=>D(e)?e.map(Re):[Re(e)],Rc=(e,t,n)=>{const s=Oe((...r)=>Lr(t(...r)),n);return s._c=!1,s},Bi=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Hi(r))continue;const o=e[r];if(q(o))t[r]=Rc(r,o,s);else if(o!=null){const i=Lr(o);t[r]=()=>i}}},Ki=(e,t)=>{const n=Lr(t);e.slots.default=()=>n},Lc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Z(t),Zn(t,"_",n)):Bi(t,e.slots={})}else e.slots={},t&&Ki(e,t);Zn(e.slots,Cs,1)},Pc=(e,t,n)=>{const{vnode:s,slots:r}=e;let o=!0,i=ne;if(s.shapeFlag&32){const l=t._;l?n&&l===1?o=!1:(fe(r,t),!n&&l===1&&delete r._):(o=!t.$stable,Bi(t,r)),i=t}else t&&(Ki(e,t),i={default:1});if(o)for(const l in r)!Hi(l)&&!(l in i)&&delete r[l]};function Fc(e,t){const n=ke;if(n===null)return e;const s=Ts(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[i,l,a,c=ne]=t[o];q(i)&&(i={mounted:i,updated:i}),i.deep&&$t(l),r.push({dir:i,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c})}return e}function Ve(e,t,n,s){const r=e.dirs,o=t&&t.dirs;for(let i=0;i<r.length;i++){const l=r[i];o&&(l.oldValue=o[i].value);let a=l.dir[s];a&&(Mt(),Pe(a,n,8,[e.el,l,e,t]),Ot())}}function Vi(){return{app:null,config:{isNativeTag:na,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ic=0;function Mc(e,t){return function(s,r=null){q(s)||(s=Object.assign({},s)),r!=null&&!pe(r)&&(r=null);const o=Vi(),i=new Set;let l=!1;const a=o.app={_uid:Ic++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:cl,get config(){return o.config},set config(c){},use(c,...d){return i.has(c)||(c&&q(c.install)?(i.add(c),c.install(a,...d)):q(c)&&(i.add(c),c(a,...d))),a},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),a},component(c,d){return d?(o.components[c]=d,a):o.components[c]},directive(c,d){return d?(o.directives[c]=d,a):o.directives[c]},mount(c,d,f){if(!l){const h=U(s,r);return h.appContext=o,d&&t?t(h,c):e(h,c,f),l=!0,a._container=c,c.__vue_app__=a,Ts(h.component)||h.component.proxy}},unmount(){l&&(e(null,a._container),delete a._container.__vue_app__)},provide(c,d){return o.provides[c]=d,a}};return a}}function ns(e,t,n,s,r=!1){if(D(e)){e.forEach((h,y)=>ns(h,t&&(D(t)?t[y]:t),n,s,r));return}if(Gt(s)&&!r)return;const o=s.shapeFlag&4?Ts(s.component)||s.component.proxy:s.el,i=r?null:o,{i:l,r:a}=e,c=t&&t.r,d=l.refs===ne?l.refs={}:l.refs,f=l.setupState;if(c!=null&&c!==a&&(ce(c)?(d[c]=null,Q(f,c)&&(f[c]=null)):ge(c)&&(c.value=null)),q(a))qe(a,l,12,[i,d]);else{const h=ce(a),y=ge(a);if(h||y){const b=()=>{if(e.f){const P=h?d[a]:a.value;r?D(P)&&ir(P,o):D(P)?P.includes(o)||P.push(o):h?(d[a]=[o],Q(f,a)&&(f[a]=d[a])):(a.value=[o],e.k&&(d[e.k]=a.value))}else h?(d[a]=i,Q(f,a)&&(f[a]=i)):ge(a)&&(a.value=i,e.k&&(d[e.k]=i))};i?(b.id=-1,xe(b,n)):b()}}}let at=!1;const qn=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",Is=e=>e.nodeType===8;function Oc(e){const{mt:t,p:n,o:{patchProp:s,nextSibling:r,parentNode:o,remove:i,insert:l,createComment:a}}=e,c=(g,x)=>{if(!x.hasChildNodes()){n(null,g,x),es();return}at=!1,d(x.firstChild,g,null,null,null),es(),at&&console.error("Hydration completed but contains mismatches.")},d=(g,x,m,v,T,I=!1)=>{const O=Is(g)&&g.data==="[",E=()=>b(g,x,m,v,T,O),{type:N,ref:H,shapeFlag:W}=x,J=g.nodeType;x.el=g;let A=null;switch(N){case Qt:J!==3?A=E():(g.data!==x.children&&(at=!0,g.data=x.children),A=r(g));break;case we:J!==8||O?A=E():A=r(g);break;case Pt:if(J!==1)A=E();else{A=g;const X=!x.children.length;for(let re=0;re<x.staticCount;re++)X&&(x.children+=A.outerHTML),re===x.staticCount-1&&(x.anchor=A),A=r(A);return A}break;case de:O?A=y(g,x,m,v,T,I):A=E();break;default:if(W&1)J!==1||x.type.toLowerCase()!==g.tagName.toLowerCase()?A=E():A=f(g,x,m,v,T,I);else if(W&6){x.slotScopeIds=T;const X=o(g);if(t(x,X,null,m,v,qn(X),I),A=O?P(g):r(g),Gt(x)){let re;O?(re=U(de),re.anchor=A?A.previousSibling:X.lastChild):re=g.nodeType===3?on(""):U("div"),re.el=g,x.component.subTree=re}}else W&64?J!==8?A=E():A=x.type.hydrate(g,x,m,v,T,I,e,h):W&128&&(A=x.type.hydrate(g,x,m,v,qn(o(g)),T,I,e,d))}return H!=null&&ns(H,null,v,x),A},f=(g,x,m,v,T,I)=>{I=I||!!x.dynamicChildren;const{type:O,props:E,patchFlag:N,shapeFlag:H,dirs:W}=x,J=O==="input"&&W||O==="option";if(J||N!==-1){if(W&&Ve(x,null,m,"created"),E)if(J||!I||N&48)for(const X in E)(J&&X.endsWith("value")||An(X)&&!hn(X))&&s(g,X,null,E[X],!1,void 0,m);else E.onClick&&s(g,"onClick",null,E.onClick,!1,void 0,m);let A;if((A=E&&E.onVnodeBeforeMount)&&Ee(A,m,x),W&&Ve(x,null,m,"beforeMount"),((A=E&&E.onVnodeMounted)||W)&&ki(()=>{A&&Ee(A,m,x),W&&Ve(x,null,m,"mounted")},v),H&16&&!(E&&(E.innerHTML||E.textContent))){let X=h(g.firstChild,x,g,m,v,T,I);for(;X;){at=!0;const re=X;X=X.nextSibling,i(re)}}else H&8&&g.textContent!==x.children&&(at=!0,g.textContent=x.children)}return g.nextSibling},h=(g,x,m,v,T,I,O)=>{O=O||!!x.dynamicChildren;const E=x.children,N=E.length;for(let H=0;H<N;H++){const W=O?E[H]:E[H]=Re(E[H]);if(g)g=d(g,W,v,T,I,O);else{if(W.type===Qt&&!W.children)continue;at=!0,n(null,W,m,null,v,T,qn(m),I)}}return g},y=(g,x,m,v,T,I)=>{const{slotScopeIds:O}=x;O&&(T=T?T.concat(O):O);const E=o(g),N=h(r(g),x,E,m,v,T,I);return N&&Is(N)&&N.data==="]"?r(x.anchor=N):(at=!0,l(x.anchor=a("]"),E,N),N)},b=(g,x,m,v,T,I)=>{if(at=!0,x.el=null,I){const N=P(g);for(;;){const H=r(g);if(H&&H!==N)i(H);else break}}const O=r(g),E=o(g);return i(g),n(null,x,E,O,m,v,qn(E),T),O},P=g=>{let x=0;for(;g;)if(g=r(g),g&&Is(g)&&(g.data==="["&&x++,g.data==="]")){if(x===0)return r(g);x--}return g};return[c,d]}const xe=ki;function Ui(e){return qi(e)}function Wi(e){return qi(e,Oc)}function qi(e,t){const n=aa();n.__VUE__=!0;const{insert:s,remove:r,patchProp:o,createElement:i,createText:l,createComment:a,setText:c,setElementText:d,parentNode:f,nextSibling:h,setScopeId:y=Be,cloneNode:b,insertStaticContent:P}=e,g=(u,p,_,w=null,k=null,S=null,F=!1,$=null,R=!!p.dynamicChildren)=>{if(u===p)return;u&&!Ue(u,p)&&(w=Nn(u),it(u,k,S,!0),u=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:C,ref:B,shapeFlag:j}=p;switch(C){case Qt:x(u,p,_,w);break;case we:m(u,p,_,w);break;case Pt:u==null&&v(p,_,w,F);break;case de:X(u,p,_,w,k,S,F,$,R);break;default:j&1?O(u,p,_,w,k,S,F,$,R):j&6?re(u,p,_,w,k,S,F,$,R):(j&64||j&128)&&C.process(u,p,_,w,k,S,F,$,R,Ht)}B!=null&&k&&ns(B,u&&u.ref,S,p||u,!p)},x=(u,p,_,w)=>{if(u==null)s(p.el=l(p.children),_,w);else{const k=p.el=u.el;p.children!==u.children&&c(k,p.children)}},m=(u,p,_,w)=>{u==null?s(p.el=a(p.children||""),_,w):p.el=u.el},v=(u,p,_,w)=>{[u.el,u.anchor]=P(u.children,p,_,w,u.el,u.anchor)},T=({el:u,anchor:p},_,w)=>{let k;for(;u&&u!==p;)k=h(u),s(u,_,w),u=k;s(p,_,w)},I=({el:u,anchor:p})=>{let _;for(;u&&u!==p;)_=h(u),r(u),u=_;r(p)},O=(u,p,_,w,k,S,F,$,R)=>{F=F||p.type==="svg",u==null?E(p,_,w,k,S,F,$,R):W(u,p,k,S,F,$,R)},E=(u,p,_,w,k,S,F,$)=>{let R,C;const{type:B,props:j,shapeFlag:K,transition:Y,patchFlag:ee,dirs:le}=u;if(u.el&&b!==void 0&&ee===-1)R=u.el=b(u.el);else{if(R=u.el=i(u.type,S,j&&j.is,j),K&8?d(R,u.children):K&16&&H(u.children,R,null,w,k,S&&B!=="foreignObject",F,$),le&&Ve(u,null,w,"created"),j){for(const ie in j)ie!=="value"&&!hn(ie)&&o(R,ie,null,j[ie],S,u.children,w,k,Xe);"value"in j&&o(R,"value",null,j.value),(C=j.onVnodeBeforeMount)&&Ee(C,w,u)}N(R,u,u.scopeId,F,w)}le&&Ve(u,null,w,"beforeMount");const se=(!k||k&&!k.pendingBranch)&&Y&&!Y.persisted;se&&Y.beforeEnter(R),s(R,p,_),((C=j&&j.onVnodeMounted)||se||le)&&xe(()=>{C&&Ee(C,w,u),se&&Y.enter(R),le&&Ve(u,null,w,"mounted")},k)},N=(u,p,_,w,k)=>{if(_&&y(u,_),w)for(let S=0;S<w.length;S++)y(u,w[S]);if(k){let S=k.subTree;if(p===S){const F=k.vnode;N(u,F,F.scopeId,F.slotScopeIds,k.parent)}}},H=(u,p,_,w,k,S,F,$,R=0)=>{for(let C=R;C<u.length;C++){const B=u[C]=$?dt(u[C]):Re(u[C]);g(null,B,p,_,w,k,S,F,$)}},W=(u,p,_,w,k,S,F)=>{const $=p.el=u.el;let{patchFlag:R,dynamicChildren:C,dirs:B}=p;R|=u.patchFlag&16;const j=u.props||ne,K=p.props||ne;let Y;_&&kt(_,!1),(Y=K.onVnodeBeforeUpdate)&&Ee(Y,_,p,u),B&&Ve(p,u,_,"beforeUpdate"),_&&kt(_,!0);const ee=k&&p.type!=="foreignObject";if(C?J(u.dynamicChildren,C,$,_,w,ee,S):F||Ye(u,p,$,null,_,w,ee,S,!1),R>0){if(R&16)A($,p,j,K,_,w,k);else if(R&2&&j.class!==K.class&&o($,"class",null,K.class,k),R&4&&o($,"style",j.style,K.style,k),R&8){const le=p.dynamicProps;for(let se=0;se<le.length;se++){const ie=le[se],De=j[ie],Bt=K[ie];(Bt!==De||ie==="value")&&o($,ie,De,Bt,k,u.children,_,w,Xe)}}R&1&&u.children!==p.children&&d($,p.children)}else!F&&C==null&&A($,p,j,K,_,w,k);((Y=K.onVnodeUpdated)||B)&&xe(()=>{Y&&Ee(Y,_,p,u),B&&Ve(p,u,_,"updated")},w)},J=(u,p,_,w,k,S,F)=>{for(let $=0;$<p.length;$++){const R=u[$],C=p[$],B=R.el&&(R.type===de||!Ue(R,C)||R.shapeFlag&70)?f(R.el):_;g(R,C,B,null,w,k,S,F,!0)}},A=(u,p,_,w,k,S,F)=>{if(_!==w){for(const $ in w){if(hn($))continue;const R=w[$],C=_[$];R!==C&&$!=="value"&&o(u,$,C,R,F,p.children,k,S,Xe)}if(_!==ne)for(const $ in _)!hn($)&&!($ in w)&&o(u,$,_[$],null,F,p.children,k,S,Xe);"value"in w&&o(u,"value",_.value,w.value)}},X=(u,p,_,w,k,S,F,$,R)=>{const C=p.el=u?u.el:l(""),B=p.anchor=u?u.anchor:l("");let{patchFlag:j,dynamicChildren:K,slotScopeIds:Y}=p;Y&&($=$?$.concat(Y):Y),u==null?(s(C,_,w),s(B,_,w),H(p.children,_,B,k,S,F,$,R)):j>0&&j&64&&K&&u.dynamicChildren?(J(u.dynamicChildren,K,_,k,S,F,$),(p.key!=null||k&&p===k.subTree)&&Pr(u,p,!0)):Ye(u,p,_,B,k,S,F,$,R)},re=(u,p,_,w,k,S,F,$,R)=>{p.slotScopeIds=$,u==null?p.shapeFlag&512?k.ctx.activate(p,_,w,F,R):Dt(p,_,w,k,S,F,R):ye(u,p,R)},Dt=(u,p,_,w,k,S,F)=>{const $=u.component=el(u,w,k);if(In(u)&&($.ctx.renderer=Ht),nl($),$.asyncDep){if(k&&k.registerDep($,ue),!u.el){const R=$.subTree=U(we);m(null,R,p,_)}return}ue($,u,p,_,k,S,F)},ye=(u,p,_)=>{const w=p.component=u.component;if(ac(u,p,_))if(w.asyncDep&&!w.asyncResolved){oe(w,p,_);return}else w.next=p,tc(w.update),w.update();else p.component=u.component,p.el=u.el,w.vnode=p},ue=(u,p,_,w,k,S,F)=>{const $=()=>{if(u.isMounted){let{next:B,bu:j,u:K,parent:Y,vnode:ee}=u,le=B,se;kt(u,!1),B?(B.el=ee.el,oe(u,B,F)):B=ee,j&&zt(j),(se=B.props&&B.props.onVnodeBeforeUpdate)&&Ee(se,Y,B,ee),kt(u,!0);const ie=Xn(u),De=u.subTree;u.subTree=ie,g(De,ie,f(De.el),Nn(De),u,k,S),B.el=ie.el,le===null&&Er(u,ie.el),K&&xe(K,k),(se=B.props&&B.props.onVnodeUpdated)&&xe(()=>Ee(se,Y,B,ee),k)}else{let B;const{el:j,props:K}=p,{bm:Y,m:ee,parent:le}=u,se=Gt(p);if(kt(u,!1),Y&&zt(Y),!se&&(B=K&&K.onVnodeBeforeMount)&&Ee(B,le,p),kt(u,!0),j&&Ss){const ie=()=>{u.subTree=Xn(u),Ss(j,u.subTree,u,k,null)};se?p.type.__asyncLoader().then(()=>!u.isUnmounted&&ie()):ie()}else{const ie=u.subTree=Xn(u);g(null,ie,_,w,u,k,S),p.el=ie.el}if(ee&&xe(ee,k),!se&&(B=K&&K.onVnodeMounted)){const ie=p;xe(()=>Ee(B,le,ie),k)}p.shapeFlag&256&&u.a&&xe(u.a,k),u.isMounted=!0,p=_=w=null}},R=u.effect=new Rn($,()=>xr(u.update),u.scope),C=u.update=R.run.bind(R);C.id=u.uid,kt(u,!0),C()},oe=(u,p,_)=>{p.component=u;const w=u.vnode.props;u.vnode=p,u.next=null,Sc(u,p.props,w,_),Pc(u,p.children,_),Mt(),wr(void 0,u.update),Ot()},Ye=(u,p,_,w,k,S,F,$,R=!1)=>{const C=u&&u.children,B=u?u.shapeFlag:0,j=p.children,{patchFlag:K,shapeFlag:Y}=p;if(K>0){if(K&128){ln(C,j,_,w,k,S,F,$,R);return}else if(K&256){$s(C,j,_,w,k,S,F,$,R);return}}Y&8?(B&16&&Xe(C,k,S),j!==C&&d(_,j)):B&16?Y&16?ln(C,j,_,w,k,S,F,$,R):Xe(C,k,S,!0):(B&8&&d(_,""),Y&16&&H(j,_,w,k,S,F,$,R))},$s=(u,p,_,w,k,S,F,$,R)=>{u=u||Wt,p=p||Wt;const C=u.length,B=p.length,j=Math.min(C,B);let K;for(K=0;K<j;K++){const Y=p[K]=R?dt(p[K]):Re(p[K]);g(u[K],Y,_,null,k,S,F,$,R)}C>B?Xe(u,k,S,!0,!1,j):H(p,_,w,k,S,F,$,R,j)},ln=(u,p,_,w,k,S,F,$,R)=>{let C=0;const B=p.length;let j=u.length-1,K=B-1;for(;C<=j&&C<=K;){const Y=u[C],ee=p[C]=R?dt(p[C]):Re(p[C]);if(Ue(Y,ee))g(Y,ee,_,null,k,S,F,$,R);else break;C++}for(;C<=j&&C<=K;){const Y=u[j],ee=p[K]=R?dt(p[K]):Re(p[K]);if(Ue(Y,ee))g(Y,ee,_,null,k,S,F,$,R);else break;j--,K--}if(C>j){if(C<=K){const Y=K+1,ee=Y<B?p[Y].el:w;for(;C<=K;)g(null,p[C]=R?dt(p[C]):Re(p[C]),_,ee,k,S,F,$,R),C++}}else if(C>K)for(;C<=j;)it(u[C],k,S,!0),C++;else{const Y=C,ee=C,le=new Map;for(C=ee;C<=K;C++){const Ae=p[C]=R?dt(p[C]):Re(p[C]);Ae.key!=null&&le.set(Ae.key,C)}let se,ie=0;const De=K-ee+1;let Bt=!1,Wr=0;const an=new Array(De);for(C=0;C<De;C++)an[C]=0;for(C=Y;C<=j;C++){const Ae=u[C];if(ie>=De){it(Ae,k,S,!0);continue}let Ke;if(Ae.key!=null)Ke=le.get(Ae.key);else for(se=ee;se<=K;se++)if(an[se-ee]===0&&Ue(Ae,p[se])){Ke=se;break}Ke===void 0?it(Ae,k,S,!0):(an[Ke-ee]=C+1,Ke>=Wr?Wr=Ke:Bt=!0,g(Ae,p[Ke],_,null,k,S,F,$,R),ie++)}const qr=Bt?jc(an):Wt;for(se=qr.length-1,C=De-1;C>=0;C--){const Ae=ee+C,Ke=p[Ae],zr=Ae+1<B?p[Ae+1].el:w;an[C]===0?g(null,Ke,_,zr,k,S,F,$,R):Bt&&(se<0||C!==qr[se]?Nt(Ke,_,zr,2):se--)}}},Nt=(u,p,_,w,k=null)=>{const{el:S,type:F,transition:$,children:R,shapeFlag:C}=u;if(C&6){Nt(u.component.subTree,p,_,w);return}if(C&128){u.suspense.move(p,_,w);return}if(C&64){F.move(u,p,_,Ht);return}if(F===de){s(S,p,_);for(let j=0;j<R.length;j++)Nt(R[j],p,_,w);s(u.anchor,p,_);return}if(F===Pt){T(u,p,_);return}if(w!==2&&C&1&&$)if(w===0)$.beforeEnter(S),s(S,p,_),xe(()=>$.enter(S),k);else{const{leave:j,delayLeave:K,afterLeave:Y}=$,ee=()=>s(S,p,_),le=()=>{j(S,()=>{ee(),Y&&Y()})};K?K(S,ee,le):le()}else s(S,p,_)},it=(u,p,_,w=!1,k=!1)=>{const{type:S,props:F,ref:$,children:R,dynamicChildren:C,shapeFlag:B,patchFlag:j,dirs:K}=u;if($!=null&&ns($,null,_,u,!0),B&256){p.ctx.deactivate(u);return}const Y=B&1&&K,ee=!Gt(u);let le;if(ee&&(le=F&&F.onVnodeBeforeUnmount)&&Ee(le,p,u),B&6)Bl(u.component,_,w);else{if(B&128){u.suspense.unmount(_,w);return}Y&&Ve(u,null,p,"beforeUnmount"),B&64?u.type.remove(u,p,_,k,Ht,w):C&&(S!==de||j>0&&j&64)?Xe(C,p,_,!1,!0):(S===de&&j&384||!k&&B&16)&&Xe(R,p,_),w&&Vr(u)}(ee&&(le=F&&F.onVnodeUnmounted)||Y)&&xe(()=>{le&&Ee(le,p,u),Y&&Ve(u,null,p,"unmounted")},_)},Vr=u=>{const{type:p,el:_,anchor:w,transition:k}=u;if(p===de){Hl(_,w);return}if(p===Pt){I(u);return}const S=()=>{r(_),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(u.shapeFlag&1&&k&&!k.persisted){const{leave:F,delayLeave:$}=k,R=()=>F(_,S);$?$(u.el,S,R):R()}else S()},Hl=(u,p)=>{let _;for(;u!==p;)_=h(u),r(u),u=_;r(p)},Bl=(u,p,_)=>{const{bum:w,scope:k,update:S,subTree:F,um:$}=u;w&&zt(w),k.stop(),S&&(S.active=!1,it(F,u,p,_)),$&&xe($,p),xe(()=>{u.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Xe=(u,p,_,w=!1,k=!1,S=0)=>{for(let F=S;F<u.length;F++)it(u[F],p,_,w,k)},Nn=u=>u.shapeFlag&6?Nn(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el),Ur=(u,p,_)=>{u==null?p._vnode&&it(p._vnode,null,null,!0):g(p._vnode||null,u,p,null,null,null,_),es(),p._vnode=u},Ht={p:g,um:it,m:Nt,r:Vr,mt:Dt,mc:H,pc:Ye,pbc:J,n:Nn,o:e};let As,Ss;return t&&([As,Ss]=t(Ht)),{render:Ur,hydrate:As,createApp:Mc(Ur,As)}}function kt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Pr(e,t,n=!1){const s=e.children,r=t.children;if(D(s)&&D(r))for(let o=0;o<s.length;o++){const i=s[o];let l=r[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[o]=dt(r[o]),l.el=i.el),n||Pr(i,l))}}function jc(e){const t=e.slice(),n=[0];let s,r,o,i,l;const a=e.length;for(s=0;s<a;s++){const c=e[s];if(c!==0){if(r=n[n.length-1],e[r]<c){t[s]=r,n.push(s);continue}for(o=0,i=n.length-1;o<i;)l=o+i>>1,e[n[l]]<c?o=l+1:i=l;c<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}const Dc=e=>e.__isTeleport,bn=e=>e&&(e.disabled||e.disabled===""),_o=e=>typeof SVGElement!="undefined"&&e instanceof SVGElement,Js=(e,t)=>{const n=e&&e.to;return ce(n)?t?t(n):null:n},Nc={__isTeleport:!0,process(e,t,n,s,r,o,i,l,a,c){const{mc:d,pc:f,pbc:h,o:{insert:y,querySelector:b,createText:P,createComment:g}}=c,x=bn(t.props);let{shapeFlag:m,children:v,dynamicChildren:T}=t;if(e==null){const I=t.el=P(""),O=t.anchor=P("");y(I,n,s),y(O,n,s);const E=t.target=Js(t.props,b),N=t.targetAnchor=P("");E&&(y(N,E),i=i||_o(E));const H=(W,J)=>{m&16&&d(v,W,J,r,o,i,l,a)};x?H(n,O):E&&H(E,N)}else{t.el=e.el;const I=t.anchor=e.anchor,O=t.target=e.target,E=t.targetAnchor=e.targetAnchor,N=bn(e.props),H=N?n:O,W=N?I:E;if(i=i||_o(O),T?(h(e.dynamicChildren,T,H,r,o,i,l),Pr(e,t,!0)):a||f(e,t,H,W,r,o,i,l,!1),x)N||zn(t,n,I,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const J=t.target=Js(t.props,b);J&&zn(t,J,null,c,0)}else N&&zn(t,O,E,c,1)}},remove(e,t,n,s,{um:r,o:{remove:o}},i){const{shapeFlag:l,children:a,anchor:c,targetAnchor:d,target:f,props:h}=e;if(f&&o(d),(i||!bn(h))&&(o(c),l&16))for(let y=0;y<a.length;y++){const b=a[y];r(b,t,n,!0,!!b.dynamicChildren)}},move:zn,hydrate:Hc};function zn(e,t,n,{o:{insert:s},m:r},o=2){o===0&&s(e.targetAnchor,t,n);const{el:i,anchor:l,shapeFlag:a,children:c,props:d}=e,f=o===2;if(f&&s(i,t,n),(!f||bn(d))&&a&16)for(let h=0;h<c.length;h++)r(c[h],t,n,2);f&&s(l,t,n)}function Hc(e,t,n,s,r,o,{o:{nextSibling:i,parentNode:l,querySelector:a}},c){const d=t.target=Js(t.props,a);if(d){const f=d._lpa||d.firstChild;t.shapeFlag&16&&(bn(t.props)?(t.anchor=c(i(e),t,l(e),n,s,r,o),t.targetAnchor=f):(t.anchor=i(e),t.targetAnchor=c(f,t,d,n,s,r,o)),d._lpa=t.targetAnchor&&i(t.targetAnchor))}return t.anchor&&i(t.anchor)}const Bc=Nc,Fr="components",Kc="directives";function Zt(e,t){return Ir(Fr,e,!0,t)||e}const zi=Symbol();function Ji(e){return ce(e)?Ir(Fr,e,!1)||e:e||zi}function Vc(e){return Ir(Kc,e)}function Ir(e,t,n=!0,s=!1){const r=ke||ve;if(r){const o=r.type;if(e===Fr){const l=os(o);if(l&&(l===t||l===Fe(t)||l===Sn(Fe(t))))return o}const i=vo(r[e]||o[e],t)||vo(r.appContext[e],t);return!i&&s?o:i}}function vo(e,t){return e&&(e[t]||e[Fe(t)]||e[Sn(Fe(t))])}const de=Symbol(void 0),Qt=Symbol(void 0),we=Symbol(void 0),Pt=Symbol(void 0),yn=[];let ze=null;function M(e=!1){yn.push(ze=e?null:[])}function Yi(){yn.pop(),ze=yn[yn.length-1]||null}let en=1;function Ys(e){en+=e}function Xi(e){return e.dynamicChildren=en>0?ze||Wt:null,Yi(),en>0&&ze&&ze.push(e),e}function z(e,t,n,s,r,o){return Xi(V(e,t,n,s,r,o,!0))}function _e(e,t,n,s,r){return Xi(U(e,t,n,s,r,!0))}function _t(e){return e?e.__v_isVNode===!0:!1}function Ue(e,t){return e.type===t.type&&e.key===t.key}function Uc(e){}const Cs="__vInternal",Gi=({key:e})=>e!=null?e:null,Gn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ce(e)||ge(e)||q(e)?{i:ke,r:e,k:t,f:!!n}:e:null;function V(e,t=null,n=null,s=0,r=null,o=e===de?0:1,i=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Gi(t),ref:t&&Gn(t),scopeId:ys,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return l?(Mr(a,n),o&128&&e.normalize(a)):n&&(a.shapeFlag|=ce(n)?8:16),en>0&&!i&&ze&&(a.patchFlag>0||o&6)&&a.patchFlag!==32&&ze.push(a),a}const U=Wc;function Wc(e,t=null,n=null,s=0,r=null,o=!1){if((!e||e===zi)&&(e=we),_t(e)){const l=st(e,t,!0);return n&&Mr(l,n),l}if(ru(e)&&(e=e.__vccOpts),t){t=Zi(t);let{class:l,style:a}=t;l&&!ce(l)&&(t.class=tt(l)),pe(a)&&(gr(a)&&!D(a)&&(a=fe({},a)),t.style=$n(a))}const i=ce(e)?1:cc(e)?128:Dc(e)?64:pe(e)?4:q(e)?2:0;return V(e,t,n,s,r,i,o,!0)}function Zi(e){return e?gr(e)||Cs in e?fe({},e):e:null}function st(e,t,n=!1){const{props:s,ref:r,patchFlag:o,children:i}=e,l=t?On(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Gi(l),ref:t&&t.ref?n&&r?D(r)?r.concat(Gn(t)):[r,Gn(t)]:Gn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==de?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&st(e.ssContent),ssFallback:e.ssFallback&&st(e.ssFallback),el:e.el,anchor:e.anchor}}function on(e=" ",t=0){return U(Qt,null,e,t)}function qc(e,t){const n=U(Pt,null,e);return n.staticCount=t,n}function te(e="",t=!1){return t?(M(),_e(we,null,e)):U(we,null,e)}function Re(e){return e==null||typeof e=="boolean"?U(we):D(e)?U(de,null,e.slice()):typeof e=="object"?dt(e):U(Qt,null,String(e))}function dt(e){return e.el===null||e.memo?e:st(e)}function Mr(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(D(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Mr(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(Cs in t)?t._ctx=ke:r===3&&ke&&(ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else q(t)?(t={default:t,_ctx:ke},n=32):(t=String(t),s&64?(n=16,t=[on(t)]):n=8);e.children=t,e.shapeFlag|=n}function On(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=tt([t.class,s.class]));else if(r==="style")t.style=$n([t.style,s.style]);else if(An(r)){const o=t[r],i=s[r];i&&o!==i&&!(D(o)&&o.includes(i))&&(t[r]=o?[].concat(o,i):i)}else r!==""&&(t[r]=s[r])}return t}function Ee(e,t,n,s=null){Pe(e,t,7,[n,s])}function jn(e,t,n,s){let r;const o=n&&n[s];if(D(e)||ce(e)){r=new Array(e.length);for(let i=0,l=e.length;i<l;i++)r[i]=t(e[i],i,void 0,o&&o[i])}else if(typeof e=="number"){r=new Array(e);for(let i=0;i<e;i++)r[i]=t(i+1,i,void 0,o&&o[i])}else if(pe(e))if(e[Symbol.iterator])r=Array.from(e,(i,l)=>t(i,l,void 0,o&&o[l]));else{const i=Object.keys(e);r=new Array(i.length);for(let l=0,a=i.length;l<a;l++){const c=i[l];r[l]=t(e[c],c,l,o&&o[l])}}else r=[];return n&&(n[s]=r),r}function zc(e,t){for(let n=0;n<t.length;n++){const s=t[n];if(D(s))for(let r=0;r<s.length;r++)e[s[r].name]=s[r].fn;else s&&(e[s.name]=s.fn)}return e}function he(e,t,n={},s,r){if(ke.isCE||ke.parent&&Gt(ke.parent)&&ke.parent.isCE)return U("slot",t==="default"?null:{name:t},s&&s());let o=e[t];o&&o._c&&(o._d=!1),M();const i=o&&Qi(o(n)),l=_e(de,{key:n.key||`_${t}`},i||(s?s():[]),i&&e._===1?64:-2);return!r&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function Qi(e){return e.some(t=>_t(t)?!(t.type===we||t.type===de&&!Qi(t.children)):!0)?e:null}function Jc(e){const t={};for(const n in e)t[gn(n)]=e[n];return t}const Xs=e=>e?tl(e)?Ts(e)||e.proxy:Xs(e.parent):null,ss=fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Xs(e.parent),$root:e=>Xs(e.root),$emit:e=>e.emit,$options:e=>ji(e),$forceUpdate:e=>()=>xr(e.update),$nextTick:e=>Pn.bind(e.proxy),$watch:e=>_c.bind(e)}),Gs={get({_:e},t){const{ctx:n,setupState:s,data:r,props:o,accessCache:i,type:l,appContext:a}=e;let c;if(t[0]!=="$"){const y=i[t];if(y!==void 0)switch(y){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return o[t]}else{if(s!==ne&&Q(s,t))return i[t]=1,s[t];if(r!==ne&&Q(r,t))return i[t]=2,r[t];if((c=e.propsOptions[0])&&Q(c,t))return i[t]=3,o[t];if(n!==ne&&Q(n,t))return i[t]=4,n[t];Ws&&(i[t]=0)}}const d=ss[t];let f,h;if(d)return t==="$attrs"&&Ie(e,"get",t),d(e);if((f=l.__cssModules)&&(f=f[t]))return f;if(n!==ne&&Q(n,t))return i[t]=4,n[t];if(h=a.config.globalProperties,Q(h,t))return h[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:o}=e;return r!==ne&&Q(r,t)?(r[t]=n,!0):s!==ne&&Q(s,t)?(s[t]=n,!0):Q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:o}},i){let l;return!!n[i]||e!==ne&&Q(e,i)||t!==ne&&Q(t,i)||(l=o[0])&&Q(l,i)||Q(s,i)||Q(ss,i)||Q(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},Yc=fe({},Gs,{get(e,t){if(t!==Symbol.unscopables)return Gs.get(e,t,e)},has(e,t){return t[0]!=="_"&&!Jl(t)}}),Xc=Vi();let Gc=0;function el(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Xc,o={uid:Gc++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ur(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ni(s,r),emitsOptions:xi(s,r),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:s.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=sc.bind(null,o),e.ce&&e.ce(o),o}let ve=null;const yt=()=>ve||ke,vt=e=>{ve=e,e.scope.on()},pt=()=>{ve&&ve.scope.off(),ve=null};function tl(e){return e.vnode.shapeFlag&4}let tn=!1;function nl(e,t=!1){tn=t;const{props:n,children:s}=e.vnode,r=tl(e);Ac(e,n,r,t),Lc(e,s);const o=r?Zc(e,t):void 0;return tn=!1,o}function Zc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Rt(new Proxy(e.ctx,Gs));const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?rl(e):null;vt(e),Mt();const o=qe(s,e,0,[e.props,r]);if(Ot(),pt(),ar(o)){if(o.then(pt,pt),t)return o.then(i=>{Zs(e,i,t)}).catch(i=>{jt(i,e,0)});e.asyncDep=o}else Zs(e,o,t)}else sl(e,t)}function Zs(e,t,n){q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:pe(t)&&(e.setupState=vr(t)),sl(e,n)}let rs,Qs;function Qc(e){rs=e,Qs=t=>{t.render._rc&&(t.withProxy=new Proxy(t.ctx,Yc))}}const eu=()=>!rs;function sl(e,t,n){const s=e.type;if(!e.render){if(!t&&rs&&!s.render){const r=s.template;if(r){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:a}=s,c=fe(fe({isCustomElement:o,delimiters:l},i),a);s.render=rs(r,c)}}e.render=s.render||Be,Qs&&Qs(e)}vt(e),Mt(),wc(e),Ot(),pt()}function tu(e){return new Proxy(e.attrs,{get(t,n){return Ie(e,"get","$attrs"),t[n]}})}function rl(e){const t=s=>{e.exposed=s||{}};let n;return{get attrs(){return n||(n=tu(e))},slots:e.slots,emit:e.emit,expose:t}}function Ts(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(vr(Rt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ss)return ss[n](e)}}))}const nu=/(?:^|[-_])(\w)/g,su=e=>e.replace(nu,t=>t.toUpperCase()).replace(/[-_]/g,"");function os(e){return q(e)&&e.displayName||e.name}function ol(e,t,n=!1){let s=os(t);if(!s&&t.__file){const r=t.__file.match(/([^/\\]+)\.\w+$/);r&&(s=r[1])}if(!s&&e&&e.parent){const r=o=>{for(const i in o)if(o[i]===t)return i};s=r(e.components||e.parent.type.components)||r(e.appContext.components)}return s?su(s):n?"App":"Anonymous"}function ru(e){return q(e)&&"__vccOpts"in e}const G=(e,t)=>Ja(e,t,tn);function ou(){return null}function iu(){return null}function lu(e){}function au(e,t){return null}function cu(){return il().slots}function uu(){return il().attrs}function il(){const e=yt();return e.setupContext||(e.setupContext=rl(e))}function du(e,t){const n=D(e)?e.reduce((s,r)=>(s[r]={},s),{}):e;for(const s in t){const r=n[s];r?D(r)||q(r)?n[s]={type:r,default:t[s]}:r.default=t[s]:r===null&&(n[s]={default:t[s]})}return n}function fu(e,t){const n={};for(const s in e)t.includes(s)||Object.defineProperty(n,s,{enumerable:!0,get:()=>e[s]});return n}function pu(e){const t=yt();let n=e();return pt(),ar(n)&&(n=n.catch(s=>{throw vt(t),s})),[n,()=>vt(t)]}function rt(e,t,n){const s=arguments.length;return s===2?pe(t)&&!D(t)?_t(t)?U(e,null,[t]):U(e,t):U(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&_t(n)&&(n=[n]),U(e,t,n))}const ll=Symbol(""),hu=()=>{{const e=Lt(ll);return e||hi("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function gu(){}function mu(e,t,n,s){const r=n[s];if(r&&al(r,e))return r;const o=t();return o.memo=e.slice(),n[s]=o}function al(e,t){const n=e.memo;if(n.length!=t.length)return!1;for(let s=0;s<n.length;s++)if(n[s]!==t[s])return!1;return en>0&&ze&&ze.push(e),!0}const cl="3.2.33",_u={createComponentInstance:el,setupComponent:nl,renderComponentRoot:Xn,setCurrentRenderingInstance:Tn,isVNode:_t,normalizeVNode:Re},vu=_u,bu=null,yu=null,xu="http://www.w3.org/2000/svg",Et=typeof document!="undefined"?document:null,bo=Et&&Et.createElement("template"),ku={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?Et.createElementNS(xu,e):Et.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Et.createTextNode(e),createComment:e=>Et.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Et.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,s,r,o){const i=n?n.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{bo.innerHTML=s?`<svg>${e}</svg>`:e;const l=bo.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function wu(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Cu(e,t,n){const s=e.style,r=ce(n);if(n&&!r){for(const o in n)er(s,o,n[o]);if(t&&!ce(t))for(const o in t)n[o]==null&&er(s,o,"")}else{const o=s.display;r?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=o)}}const yo=/\s*!important$/;function er(e,t,n){if(D(n))n.forEach(s=>er(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Tu(e,t);yo.test(n)?e.setProperty(We(s),n.replace(yo,""),"important"):e[s]=n}}const xo=["Webkit","Moz","ms"],Ms={};function Tu(e,t){const n=Ms[t];if(n)return n;let s=Fe(t);if(s!=="filter"&&s in e)return Ms[t]=s;s=Sn(s);for(let r=0;r<xo.length;r++){const o=xo[r]+s;if(o in e)return Ms[t]=o}return t}const ko="http://www.w3.org/1999/xlink";function Eu(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ko,t.slice(6,t.length)):e.setAttributeNS(ko,t,n);else{const o=Xl(t);n==null||o&&!zo(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function $u(e,t,n,s,r,o,i){if(t==="innerHTML"||t==="textContent"){s&&i(s,r,o),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const a=n==null?"":n;(e.value!==a||e.tagName==="OPTION")&&(e.value=a),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=zo(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}const[ul,Au]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let tr=0;const Su=Promise.resolve(),Ru=()=>{tr=0},Lu=()=>tr||(Su.then(Ru),tr=ul());function Qe(e,t,n,s){e.addEventListener(t,n,s)}function Pu(e,t,n,s){e.removeEventListener(t,n,s)}function Fu(e,t,n,s,r=null){const o=e._vei||(e._vei={}),i=o[t];if(s&&i)i.value=s;else{const[l,a]=Iu(t);if(s){const c=o[t]=Mu(s,r);Qe(e,l,c,a)}else i&&(Pu(e,l,i,a),o[t]=void 0)}}const wo=/(?:Once|Passive|Capture)$/;function Iu(e){let t;if(wo.test(e)){t={};let n;for(;n=e.match(wo);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[We(e.slice(2)),t]}function Mu(e,t){const n=s=>{const r=s.timeStamp||ul();(Au||r>=n.attached-1)&&Pe(Ou(s,n.value),t,5,[s])};return n.value=e,n.attached=Lu(),n}function Ou(e,t){if(D(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Co=/^on[a-z]/,ju=(e,t,n,s,r=!1,o,i,l,a)=>{t==="class"?wu(e,s,r):t==="style"?Cu(e,n,s):An(t)?or(t)||Fu(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Du(e,t,s,r))?$u(e,t,s,o,i,l,a):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Eu(e,t,s,r))};function Du(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Co.test(t)&&q(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Co.test(t)&&ce(n)?!1:t in e}function dl(e,t){const n=ae(e);class s extends Es{constructor(o){super(n,o,t)}}return s.def=n,s}const Nu=e=>dl(e,Cl),Hu=typeof HTMLElement!="undefined"?HTMLElement:class{};class Es extends Hu{constructor(t,n={},s){super(),this._def=t,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"})}connectedCallback(){this._connected=!0,this._instance||this._resolveDef()}disconnectedCallback(){this._connected=!1,Pn(()=>{this._connected||(sr(null,this.shadowRoot),this._instance=null)})}_resolveDef(){if(this._resolved)return;this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);new MutationObserver(s=>{for(const r of s)this._setAttr(r.attributeName)}).observe(this,{attributes:!0});const t=s=>{const{props:r,styles:o}=s,i=!D(r),l=r?i?Object.keys(r):r:[];let a;if(i)for(const c in this._props){const d=r[c];(d===Number||d&&d.type===Number)&&(this._props[c]=gt(this._props[c]),(a||(a=Object.create(null)))[c]=!0)}this._numberProps=a;for(const c of Object.keys(this))c[0]!=="_"&&this._setProp(c,this[c],!0,!1);for(const c of l.map(Fe))Object.defineProperty(this,c,{get(){return this._getProp(c)},set(d){this._setProp(c,d)}});this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(t):t(this._def)}_setAttr(t){let n=this.getAttribute(t);this._numberProps&&this._numberProps[t]&&(n=gt(n)),this._setProp(Fe(t),n,!1)}_getProp(t){return this._props[t]}_setProp(t,n,s=!0,r=!0){n!==this._props[t]&&(this._props[t]=n,r&&this._instance&&this._update(),s&&(n===!0?this.setAttribute(We(t),""):typeof n=="string"||typeof n=="number"?this.setAttribute(We(t),n+""):n||this.removeAttribute(We(t))))}_update(){sr(this._createVNode(),this.shadowRoot)}_createVNode(){const t=U(this._def,fe({},this._props));return this._instance||(t.ce=n=>{this._instance=n,n.isCE=!0,n.emit=(r,...o)=>{this.dispatchEvent(new CustomEvent(r,{detail:o}))};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof Es){n.parent=s._instance;break}}),t}_applyStyles(t){t&&t.forEach(n=>{const s=document.createElement("style");s.textContent=n,this.shadowRoot.appendChild(s)})}}function Bu(e="$style"){{const t=yt();if(!t)return ne;const n=t.type.__cssModules;if(!n)return ne;const s=n[e];return s||ne}}function Ku(e){const t=yt();if(!t)return;const n=()=>nr(t.subTree,e(t.proxy));Ci(n),Je(()=>{const s=new MutationObserver(n);s.observe(t.subTree.el.parentNode,{childList:!0}),rn(()=>s.disconnect())})}function nr(e,t){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{nr(n.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)To(e.el,t);else if(e.type===de)e.children.forEach(n=>nr(n,t));else if(e.type===Pt){let{el:n,anchor:s}=e;for(;n&&(To(n,t),n!==s);)n=n.nextSibling}}function To(e,t){if(e.nodeType===1){const n=e.style;for(const s in t)n.setProperty(`--${s}`,t[s])}}const ct="transition",cn="animation",Or=(e,{slots:t})=>rt(Rr,pl(e),t);Or.displayName="Transition";const fl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Vu=Or.props=fe({},Rr.props,fl),wt=(e,t=[])=>{D(e)?e.forEach(n=>n(...t)):e&&e(...t)},Eo=e=>e?D(e)?e.some(t=>t.length>1):e.length>1:!1;function pl(e){const t={};for(const A in e)A in fl||(t[A]=e[A]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=o,appearActiveClass:c=i,appearToClass:d=l,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=e,b=Uu(r),P=b&&b[0],g=b&&b[1],{onBeforeEnter:x,onEnter:m,onEnterCancelled:v,onLeave:T,onLeaveCancelled:I,onBeforeAppear:O=x,onAppear:E=m,onAppearCancelled:N=v}=t,H=(A,X,re)=>{Tt(A,X?d:l),Tt(A,X?c:i),re&&re()},W=(A,X)=>{Tt(A,y),Tt(A,h),X&&X()},J=A=>(X,re)=>{const Dt=A?E:m,ye=()=>H(X,A,re);wt(Dt,[X,ye]),$o(()=>{Tt(X,A?a:o),Ge(X,A?d:l),Eo(Dt)||Ao(X,s,P,ye)})};return fe(t,{onBeforeEnter(A){wt(x,[A]),Ge(A,o),Ge(A,i)},onBeforeAppear(A){wt(O,[A]),Ge(A,a),Ge(A,c)},onEnter:J(!1),onAppear:J(!0),onLeave(A,X){const re=()=>W(A,X);Ge(A,f),gl(),Ge(A,h),$o(()=>{Tt(A,f),Ge(A,y),Eo(T)||Ao(A,s,g,re)}),wt(T,[A,re])},onEnterCancelled(A){H(A,!1),wt(v,[A])},onAppearCancelled(A){H(A,!0),wt(N,[A])},onLeaveCancelled(A){W(A),wt(I,[A])}})}function Uu(e){if(e==null)return null;if(pe(e))return[Os(e.enter),Os(e.leave)];{const t=Os(e);return[t,t]}}function Os(e){return gt(e)}function Ge(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Tt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function $o(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Wu=0;function Ao(e,t,n,s){const r=e._endId=++Wu,o=()=>{r===e._endId&&s()};if(n)return setTimeout(o,n);const{type:i,timeout:l,propCount:a}=hl(e,t);if(!i)return s();const c=i+"end";let d=0;const f=()=>{e.removeEventListener(c,h),o()},h=y=>{y.target===e&&++d>=a&&f()};setTimeout(()=>{d<a&&f()},l+1),e.addEventListener(c,h)}function hl(e,t){const n=window.getComputedStyle(e),s=b=>(n[b]||"").split(", "),r=s(ct+"Delay"),o=s(ct+"Duration"),i=So(r,o),l=s(cn+"Delay"),a=s(cn+"Duration"),c=So(l,a);let d=null,f=0,h=0;t===ct?i>0&&(d=ct,f=i,h=o.length):t===cn?c>0&&(d=cn,f=c,h=a.length):(f=Math.max(i,c),d=f>0?i>c?ct:cn:null,h=d?d===ct?o.length:a.length:0);const y=d===ct&&/\b(transform|all)(,|$)/.test(n[ct+"Property"]);return{type:d,timeout:f,propCount:h,hasTransform:y}}function So(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Ro(n)+Ro(e[s])))}function Ro(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function gl(){return document.body.offsetHeight}const ml=new WeakMap,_l=new WeakMap,qu={name:"TransitionGroup",props:fe({},Vu,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=yt(),s=Sr();let r,o;return Mn(()=>{if(!r.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!Gu(r[0].el,n.vnode.el,i))return;r.forEach(Ju),r.forEach(Yu);const l=r.filter(Xu);gl(),l.forEach(a=>{const c=a.el,d=c.style;Ge(c,i),d.transform=d.webkitTransform=d.transitionDuration="";const f=c._moveCb=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",f),c._moveCb=null,Tt(c,i))};c.addEventListener("transitionend",f)})}),()=>{const i=Z(e),l=pl(i);let a=i.tag||de;r=o,o=t.default?xs(t.default()):[];for(let c=0;c<o.length;c++){const d=o[c];d.key!=null&&Ft(d,Xt(d,l,s,n))}if(r)for(let c=0;c<r.length;c++){const d=r[c];Ft(d,Xt(d,l,s,n)),ml.set(d,d.el.getBoundingClientRect())}return U(a,null,o)}}},zu=qu;function Ju(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function Yu(e){_l.set(e,e.el.getBoundingClientRect())}function Xu(e){const t=ml.get(e),n=_l.get(e),s=t.left-n.left,r=t.top-n.top;if(s||r){const o=e.el.style;return o.transform=o.webkitTransform=`translate(${s}px,${r}px)`,o.transitionDuration="0s",e}}function Gu(e,t,n){const s=e.cloneNode();e._vtc&&e._vtc.forEach(i=>{i.split(/\s+/).forEach(l=>l&&s.classList.remove(l))}),n.split(/\s+/).forEach(i=>i&&s.classList.add(i)),s.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(s);const{hasTransform:o}=hl(s);return r.removeChild(s),o}const bt=e=>{const t=e.props["onUpdate:modelValue"];return D(t)?n=>zt(t,n):t};function Zu(e){e.target.composing=!0}function Lo(e){const t=e.target;t.composing&&(t.composing=!1,Qu(t,"input"))}function Qu(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const is={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e._assign=bt(r);const o=s||r.props&&r.props.type==="number";Qe(e,t?"change":"input",i=>{if(i.target.composing)return;let l=e.value;n?l=l.trim():o&&(l=gt(l)),e._assign(l)}),n&&Qe(e,"change",()=>{e.value=e.value.trim()}),t||(Qe(e,"compositionstart",Zu),Qe(e,"compositionend",Lo),Qe(e,"change",Lo))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:r}},o){if(e._assign=bt(o),e.composing||document.activeElement===e&&(n||s&&e.value.trim()===t||(r||e.type==="number")&&gt(e.value)===t))return;const i=t==null?"":t;e.value!==i&&(e.value=i)}},jr={deep:!0,created(e,t,n){e._assign=bt(n),Qe(e,"change",()=>{const s=e._modelValue,r=nn(e),o=e.checked,i=e._assign;if(D(s)){const l=ds(s,r),a=l!==-1;if(o&&!a)i(s.concat(r));else if(!o&&a){const c=[...s];c.splice(l,1),i(c)}}else if(It(s)){const l=new Set(s);o?l.add(r):l.delete(r),i(l)}else i(bl(e,o))})},mounted:Po,beforeUpdate(e,t,n){e._assign=bt(n),Po(e,t,n)}};function Po(e,{value:t,oldValue:n},s){e._modelValue=t,D(t)?e.checked=ds(t,s.props.value)>-1:It(t)?e.checked=t.has(s.props.value):t!==n&&(e.checked=ht(t,bl(e,!0)))}const Dr={created(e,{value:t},n){e.checked=ht(t,n.props.value),e._assign=bt(n),Qe(e,"change",()=>{e._assign(nn(e))})},beforeUpdate(e,{value:t,oldValue:n},s){e._assign=bt(s),t!==n&&(e.checked=ht(t,s.props.value))}},vl={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const r=It(t);Qe(e,"change",()=>{const o=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>n?gt(nn(i)):nn(i));e._assign(e.multiple?r?new Set(o):o:o[0])}),e._assign=bt(s)},mounted(e,{value:t}){Fo(e,t)},beforeUpdate(e,t,n){e._assign=bt(n)},updated(e,{value:t}){Fo(e,t)}};function Fo(e,t){const n=e.multiple;if(!(n&&!D(t)&&!It(t))){for(let s=0,r=e.options.length;s<r;s++){const o=e.options[s],i=nn(o);if(n)D(t)?o.selected=ds(t,i)>-1:o.selected=t.has(i);else if(ht(nn(o),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function nn(e){return"_value"in e?e._value:e.value}function bl(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const ed={created(e,t,n){Jn(e,t,n,null,"created")},mounted(e,t,n){Jn(e,t,n,null,"mounted")},beforeUpdate(e,t,n,s){Jn(e,t,n,s,"beforeUpdate")},updated(e,t,n,s){Jn(e,t,n,s,"updated")}};function Jn(e,t,n,s,r){let o;switch(e.tagName){case"SELECT":o=vl;break;case"TEXTAREA":o=is;break;default:switch(n.props&&n.props.type){case"checkbox":o=jr;break;case"radio":o=Dr;break;default:o=is}}const i=o[r];i&&i(e,t,n,s)}function td(){is.getSSRProps=({value:e})=>({value:e}),Dr.getSSRProps=({value:e},t)=>{if(t.props&&ht(t.props.value,e))return{checked:!0}},jr.getSSRProps=({value:e},t)=>{if(D(e)){if(t.props&&ds(e,t.props.value)>-1)return{checked:!0}}else if(It(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}}}const nd=["ctrl","shift","alt","meta"],sd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>nd.some(n=>e[`${n}Key`]&&!t.includes(n))},rd=(e,t)=>(n,...s)=>{for(let r=0;r<t.length;r++){const o=sd[t[r]];if(o&&o(n,t))return}return e(n,...s)},od={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},id=(e,t)=>n=>{if(!("key"in n))return;const s=We(n.key);if(t.some(r=>r===s||od[r]===s))return e(n)},yl={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):un(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),un(e,!0),s.enter(e)):s.leave(e,()=>{un(e,!1)}):un(e,t))},beforeUnmount(e,{value:t}){un(e,t)}};function un(e,t){e.style.display=t?e._vod:"none"}function ld(){yl.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const xl=fe({patchProp:ju},ku);let xn,Io=!1;function kl(){return xn||(xn=Ui(xl))}function wl(){return xn=Io?xn:Wi(xl),Io=!0,xn}const sr=(...e)=>{kl().render(...e)},Cl=(...e)=>{wl().hydrate(...e)},ad=(...e)=>{const t=kl().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=El(s);if(!r)return;const o=t._component;!q(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const i=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t},Tl=(...e)=>{const t=wl().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=El(s);if(r)return n(r,!0,r instanceof SVGElement)},t};function El(e){return ce(e)?document.querySelector(e):e}let Mo=!1;const cd=()=>{Mo||(Mo=!0,td(),ld())},ud=()=>{};var Oh=Object.freeze(Object.defineProperty({__proto__:null,compile:ud,EffectScope:ur,ReactiveEffect:Rn,customRef:Wa,effect:ha,effectScope:ca,getCurrentScope:ua,isProxy:gr,isReactive:St,isReadonly:Yt,isRef:ge,isShallow:hr,markRaw:Rt,onScopeDispose:da,proxyRefs:vr,reactive:Ln,readonly:pr,ref:$e,shallowReactive:ui,shallowReadonly:Ha,shallowRef:di,stop:ga,toRaw:Z,toRef:pi,toRefs:br,triggerRef:Ka,unref:L,camelize:Fe,capitalize:Sn,normalizeClass:tt,normalizeProps:ea,normalizeStyle:$n,toDisplayString:be,toHandlerKey:gn,BaseTransition:Rr,Comment:we,Fragment:de,KeepAlive:xc,Static:Pt,Suspense:dc,Teleport:Bc,Text:Qt,callWithAsyncErrorHandling:Pe,callWithErrorHandling:qe,cloneVNode:st,compatUtils:yu,computed:G,createBlock:_e,createCommentVNode:te,createElementBlock:z,createElementVNode:V,createHydrationRenderer:Wi,createPropsRestProxy:fu,createRenderer:Ui,createSlots:zc,createStaticVNode:qc,createTextVNode:on,createVNode:U,defineAsyncComponent:bc,defineComponent:ae,defineEmits:iu,defineExpose:lu,defineProps:ou,get devtools(){return Ut},getCurrentInstance:yt,getTransitionRawChildren:xs,guardReactiveProps:Zi,h:rt,handleError:jt,initCustomFormatter:gu,inject:Lt,isMemoSame:al,isRuntimeOnly:eu,isVNode:_t,mergeDefaults:du,mergeProps:On,nextTick:Pn,onActivated:$i,onBeforeMount:Ri,onBeforeUnmount:ws,onBeforeUpdate:Li,onDeactivated:Ai,onErrorCaptured:Mi,onMounted:Je,onRenderTracked:Ii,onRenderTriggered:Fi,onServerPrefetch:Pi,onUnmounted:rn,onUpdated:Mn,openBlock:M,popScopeId:Tr,provide:wi,pushScopeId:Cr,queuePostFlushCb:kr,registerRuntimeCompiler:Qc,renderList:jn,renderSlot:he,resolveComponent:Zt,resolveDirective:Vc,resolveDynamicComponent:Ji,resolveFilter:bu,resolveTransitionHooks:Xt,setBlockTracking:Ys,setDevtoolsHook:yi,setTransitionHooks:Ft,ssrContextKey:ll,ssrUtils:vu,toHandlers:Jc,transformVNodeArgs:Uc,useAttrs:uu,useSSRContext:hu,useSlots:cu,useTransitionState:Sr,version:cl,warn:hi,watch:et,watchEffect:Ar,watchPostEffect:Ci,watchSyncEffect:mc,withAsyncContext:pu,withCtx:Oe,withDefaults:au,withDirectives:Fc,withMemo:mu,withScopeId:rc,Transition:Or,TransitionGroup:zu,VueElement:Es,createApp:ad,createSSRApp:Tl,defineCustomElement:dl,defineSSRCustomElement:Nu,hydrate:Cl,initDirectivesForSSR:cd,render:sr,useCssModule:Bu,useCssVars:Ku,vModelCheckbox:jr,vModelDynamic:ed,vModelRadio:Dr,vModelSelect:vl,vModelText:is,vShow:yl,withKeys:id,withModifiers:rd},Symbol.toStringTag,{value:"Module"})),dd='{"lang":"en","title":"Vue Keyboard Trap","description":"Vue3 and Vue2 directive for keyboard navigation - roving movement and trapping inside container","base":"/vue-keyboard-trap/","head":[],"themeConfig":{"editLinks":true,"editLinkText":"Edit on GitHub","repo":"pdanpdan/vue-keyboard-trap","docsDir":"docs","docsBranch":"main","logo":"/logo.png","lastUpdated":true,"nav":[{"text":"Guide","link":"/guide/"},{"text":"Examples","link":"/examples/"},{"text":"Links","link":"/links/"}]},"locales":{},"langs":{},"scrollOffset":90}';const $l=/^https?:/i,je=typeof window!="undefined";function fd(e,t){t.sort((n,s)=>{const r=s.split("/").length-n.split("/").length;return r!==0?r:s.length-n.length});for(const n of t)if(e.startsWith(n))return n}function Oo(e,t){const n=fd(t,Object.keys(e));return n?e[n]:void 0}function pd(e){const{locales:t}=e.themeConfig||{},n=e.locales;return t&&n?Object.keys(t).reduce((s,r)=>(s[r]={label:t[r].label,lang:n[r].lang},s),{}):{}}function hd(e,t){t=gd(e,t);const n=Oo(e.locales||{},t),s=Oo(e.themeConfig.locales||{},t);return Object.assign({},e,n,{themeConfig:Object.assign({},e.themeConfig,s,{locales:{}}),lang:(n||e).lang,locales:{},langs:pd(e)})}function gd(e,t){if(!je)return t;const n=e.base,s=n.endsWith("/")?n.slice(0,-1):n;return t.slice(s.length)}const Al=Symbol(),Dn=di(md(dd));function md(e){return JSON.parse(e)}function _d(e){const t=G(()=>hd(Dn.value,e.path));return{site:t,theme:G(()=>t.value.themeConfig),page:G(()=>e.data),frontmatter:G(()=>e.data.frontmatter),lang:G(()=>t.value.lang),localePath:G(()=>{const{langs:n,lang:s}=t.value,r=Object.keys(n).find(o=>n[o].lang===s);return sn(r||"/")}),title:G(()=>e.data.title?e.data.title+" | "+t.value.title:t.value.title),description:G(()=>e.data.description||t.value.description)}}function Ce(){const e=Lt(Al);if(!e)throw new Error("vitepress data not properly injected in app");return e}function vd(e,t){return`${e}${t}`.replace(/\/+/g,"/")}function sn(e){return $l.test(e)?e:vd(Dn.value.base,e)}function Sl(e){let t=e.replace(/\.html$/,"");if(t=decodeURIComponent(t),t.endsWith("/")&&(t+="index"),je){const n="/vue-keyboard-trap/";t=t.slice(n.length).replace(/\//g,"_")+".md";const s=__VP_HASH_MAP__[t.toLowerCase()];t=`${n}assets/${t}.${s}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const Rl=Symbol(),jo="http://a.com",Ll={relativePath:"",title:"404",description:"Not Found",headers:[],frontmatter:{},lastUpdated:0},bd=()=>({path:"/",component:null,data:Ll});function yd(e,t){const n=Ln(bd());function s(i=je?location.href:"/"){const l=new URL(i,jo);return!l.pathname.endsWith("/")&&!l.pathname.endsWith(".html")&&(l.pathname+=".html",i=l.pathname+l.search+l.hash),je&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",i)),o(i)}let r=null;async function o(i,l=0,a=!1){const c=new URL(i,jo),d=r=c.pathname;try{let f=e(d);if("then"in f&&typeof f.then=="function"&&(f=await f),r===d){r=null;const{default:h,__pageData:y}=f;if(!h)throw new Error(`Invalid route component: ${h}`);n.path=d,n.component=Rt(h),n.data=Rt(JSON.parse(y)),je&&Pn(()=>{if(c.hash&&!l){let b=null;try{b=document.querySelector(decodeURIComponent(c.hash))}catch(P){console.warn(P)}if(b){Do(b,c.hash);return}}window.scrollTo(0,l)})}}catch(f){if(f.message.match(/fetch/)||console.error(f),!a)try{const h=await fetch(Dn.value.base+"hashmap.json");window.__VP_HASH_MAP__=await h.json(),await o(i,l,!0);return}catch{}r===d&&(r=null,n.path=d,n.component=t?Rt(t):null,n.data=Ll)}}return je&&(window.addEventListener("click",i=>{const l=i.target.closest("a");if(l){const{href:a,protocol:c,hostname:d,pathname:f,hash:h,target:y}=l,b=window.location,P=f.match(/\.\w+$/);!i.ctrlKey&&!i.shiftKey&&!i.altKey&&!i.metaKey&&y!=="_blank"&&c===b.protocol&&d===b.hostname&&!(P&&P[0]!==".html")&&(i.preventDefault(),f===b.pathname?h&&h!==b.hash&&(history.pushState(null,"",h),window.dispatchEvent(new Event("hashchange")),Do(l,h,l.classList.contains("header-anchor"))):s(a))}},{capture:!0}),window.addEventListener("popstate",i=>{o(location.href,i.state&&i.state.scrollPosition||0)}),window.addEventListener("hashchange",i=>{i.preventDefault()})),{route:n,go:s}}function xd(){const e=Lt(Rl);if(!e)throw new Error("useRouter() is called without provider.");return e}function xt(){return xd().route}function Do(e,t,n=!1){let s=null;try{s=e.classList.contains("header-anchor")?e:document.querySelector(decodeURIComponent(t))}catch(r){console.warn(r)}if(s){let r=Dn.value.scrollOffset;typeof r=="string"&&(r=document.querySelector(r).getBoundingClientRect().bottom+24);const o=parseInt(window.getComputedStyle(s).paddingTop,10),i=window.scrollY+s.getBoundingClientRect().top-r+o;!n||Math.abs(i-window.scrollY)>window.innerHeight?window.scrollTo(0,i):window.scrollTo({left:0,top:i,behavior:"smooth"})}}function kd(e,t){let n=[],s=!0;const r=o=>{if(s){s=!1;return}const i=[],l=Math.min(n.length,o.length);for(let a=0;a<l;a++){let c=n[a];const[d,f,h=""]=o[a];if(c.tagName.toLocaleLowerCase()===d){for(const y in f)c.getAttribute(y)!==f[y]&&c.setAttribute(y,f[y]);for(let y=0;y<c.attributes.length;y++){const b=c.attributes[y].name;b in f||c.removeAttribute(b)}c.innerHTML!==h&&(c.innerHTML=h)}else document.head.removeChild(c),c=No(o[a]),document.head.append(c);i.push(c)}n.slice(l).forEach(a=>document.head.removeChild(a)),o.slice(l).forEach(a=>{const c=No(a);document.head.appendChild(c),i.push(c)}),n=i};Ar(()=>{const o=e.data,i=t.value,l=o&&o.title,a=o&&o.description,c=o&&o.frontmatter.head;document.title=(l?l+" | ":"")+i.title,document.querySelector("meta[name=description]").setAttribute("content",a||i.description),r([...c?Cd(c):[]])})}function No([e,t,n]){const s=document.createElement(e);for(const r in t)s.setAttribute(r,t[r]);return n&&(s.innerHTML=n),s}function wd(e){return e[0]==="meta"&&e[1]&&e[1].name==="description"}function Cd(e){return e.filter(t=>!wd(t))}const Td=ae({name:"VitePressContent",setup(){const e=xt();return()=>rt("div",{style:{position:"relative"}},[e.component?rt(e.component):null])}});var me=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n};const Ed=/#.*$/,$d=/(index)?\.(md|html)$/,ls=/\/$/,Ad=/^[a-z]+:/i;function Nr(e){return Array.isArray(e)}function Hr(e){return Ad.test(e)}function Sd(e,t){if(t===void 0)return!1;const n=Ho(`/${e.data.relativePath}`),s=Ho(t);return n===s}function Ho(e){return decodeURI(e).replace(Ed,"").replace($d,"")}function Rd(e,t){const n=e.endsWith("/"),s=t.startsWith("/");return n&&s?e.slice(0,-1)+t:!n&&!s?`${e}/${t}`:e+t}function rr(e){return/^\//.test(e)?e:`/${e}`}function Pl(e){return e.replace(/(index)?(\.(md|html))?$/,"")||"/"}function Ld(e){return e===!1||e==="auto"||Nr(e)}function Pd(e){return e.children!==void 0}function Fd(e){return Nr(e)?e.length===0:!e}function Br(e,t){if(Ld(e))return e;t=rr(t);for(const n in e)if(t.startsWith(rr(n)))return e[n];return"auto"}function Fl(e){return e.reduce((t,n)=>(n.link&&t.push({text:n.text,link:Pl(n.link)}),Pd(n)&&(t=[...t,...Fl(n.children)]),t),[])}function Il(e){const t=xt(),n=Hr(e.value.link);return{props:G(()=>{const r=Bo(`/${t.data.relativePath}`);let o=!1;if(e.value.activeMatch)o=new RegExp(e.value.activeMatch).test(r);else{const i=Bo(e.value.link);o=i==="/"?i===r:r.startsWith(i)}return{class:{active:o,isExternal:n},href:n?e.value.link:sn(e.value.link),target:e.value.target||(n?"_blank":null),rel:e.value.rel||(n?"noopener noreferrer":null),"aria-label":e.value.ariaLabel}}),isExternal:n}}function Bo(e){return e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const Id={},Md={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},Od=V("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),jd=V("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1),Dd=[Od,jd];function Nd(e,t){return M(),z("svg",Md,Dd)}var Kr=me(Id,[["render",Nd]]);const Hd={class:"nav-link"},Bd=ae({props:{item:null},setup(e){const n=br(e),{props:s,isExternal:r}=Il(n.item);return(o,i)=>(M(),z("div",Hd,[V("a",On({class:"item"},L(s)),[on(be(e.item.text)+" ",1),L(r)?(M(),_e(Kr,{key:0})):te("",!0)],16)]))}});var as=me(Bd,[["__scopeId","data-v-b8818f8c"]]);const Kd={key:0,class:"home-hero"},Vd={key:0,class:"figure"},Ud=["src","alt"],Wd={key:1,id:"main-title",class:"title"},qd={key:2,class:"tagline"},zd=ae({setup(e){const{site:t,frontmatter:n}=Ce(),s=G(()=>{const{heroImage:i,heroText:l,tagline:a,actionLink:c,actionText:d}=n.value;return i||l||a||c&&d}),r=G(()=>n.value.heroText||t.value.title),o=G(()=>n.value.tagline||t.value.description);return(i,l)=>L(s)?(M(),z("header",Kd,[L(n).heroImage?(M(),z("figure",Vd,[V("img",{class:"image",src:L(sn)(L(n).heroImage),alt:L(n).heroAlt},null,8,Ud)])):te("",!0),L(r)?(M(),z("h1",Wd,be(L(r)),1)):te("",!0),L(o)?(M(),z("p",qd,be(L(o)),1)):te("",!0),L(n).actionLink&&L(n).actionText?(M(),_e(as,{key:3,item:{link:L(n).actionLink,text:L(n).actionText},class:"action"},null,8,["item"])):te("",!0),L(n).altActionLink&&L(n).altActionText?(M(),_e(as,{key:4,item:{link:L(n).altActionLink,text:L(n).altActionText},class:"action alt"},null,8,["item"])):te("",!0)])):te("",!0)}});var Jd=me(zd,[["__scopeId","data-v-370f18c0"]]);const Yd={key:0,class:"home-features"},Xd={class:"wrapper"},Gd={class:"container"},Zd={class:"features"},Qd={key:0,class:"title"},ef={key:1,class:"details"},tf=ae({setup(e){const{frontmatter:t}=Ce(),n=G(()=>t.value.features&&t.value.features.length>0),s=G(()=>t.value.features?t.value.features:[]);return(r,o)=>L(n)?(M(),z("div",Yd,[V("div",Xd,[V("div",Gd,[V("div",Zd,[(M(!0),z(de,null,jn(L(s),(i,l)=>(M(),z("section",{key:l,class:"feature"},[i.title?(M(),z("h2",Qd,be(i.title),1)):te("",!0),i.details?(M(),z("p",ef,be(i.details),1)):te("",!0)]))),128))])])])])):te("",!0)}});var nf=me(tf,[["__scopeId","data-v-e39c13e0"]]);const sf={key:0,class:"footer"},rf={class:"container"},of={class:"text"},lf=ae({setup(e){const{frontmatter:t}=Ce();return(n,s)=>L(t).footer?(M(),z("footer",sf,[V("div",rf,[V("p",of,be(L(t).footer),1)])])):te("",!0)}});var af=me(lf,[["__scopeId","data-v-30918238"]]);const cf={class:"home","aria-labelledby":"main-title"},uf={class:"home-content"},df=ae({setup(e){return(t,n)=>{const s=Zt("Content");return M(),z("main",cf,[U(Jd),he(t.$slots,"hero",{},void 0,!0),U(nf),V("div",uf,[U(s)]),he(t.$slots,"features",{},void 0,!0),U(af),he(t.$slots,"footer",{},void 0,!0)])}}});var ff=me(df,[["__scopeId","data-v-10122c92"]]);const pf=["href","aria-label"],hf=["src"],gf=ae({setup(e){const{site:t,theme:n,localePath:s}=Ce();return(r,o)=>(M(),z("a",{class:"nav-bar-title",href:L(s),"aria-label":`${L(t).title}, back to home`},[L(n).logo?(M(),z("img",{key:0,class:"logo",src:L(sn)(L(n).logo),alt:"Logo"},null,8,hf)):te("",!0),on(" "+be(L(t).title),1)],8,pf))}});var mf=me(gf,[["__scopeId","data-v-cc01ef16"]]);function _f(){const{site:e,localePath:t,theme:n}=Ce();return G(()=>{const s=e.value.langs,r=Object.keys(s);if(r.length<2)return null;const i=xt().path.replace(t.value,""),l=r.map(c=>({text:s[c].label,link:`${c}${i}`}));return{text:n.value.selectText||"Languages",items:l}})}const vf=["GitHub","GitLab","Bitbucket"].map(e=>[e,new RegExp(e,"i")]);function bf(){const{site:e}=Ce();return G(()=>{const t=e.value.themeConfig,n=t.docsRepo||t.repo;if(!n)return null;const s=yf(n);return{text:xf(s,t.repoLabel),link:s}})}function yf(e){return $l.test(e)?e:`https://github.com/${e}`}function xf(e,t){if(t)return t;const n=e.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const s=vf.find(([r,o])=>o.test(n[0]));return s&&s[0]?s[0]:"Source"}const kf=e=>(Cr("data-v-bbc27490"),e=e(),Tr(),e),wf={class:"nav-dropdown-link-item"},Cf=kf(()=>V("span",{class:"arrow"},null,-1)),Tf={class:"text"},Ef={class:"icon"},$f=ae({props:{item:null},setup(e){const n=br(e),{props:s,isExternal:r}=Il(n.item);return(o,i)=>(M(),z("div",wf,[V("a",On({class:"item"},L(s)),[Cf,V("span",Tf,be(e.item.text),1),V("span",Ef,[L(r)?(M(),_e(Kr,{key:0})):te("",!0)])],16)]))}});var Af=me($f,[["__scopeId","data-v-bbc27490"]]);const Sf=["aria-label"],Rf={class:"button-text"},Lf={class:"dialog"},Pf=ae({props:{item:null},setup(e){const t=xt(),n=$e(!1);et(()=>t.path,()=>{n.value=!1});function s(){n.value=!n.value}return(r,o)=>(M(),z("div",{class:tt(["nav-dropdown-link",{open:n.value}])},[V("button",{class:"button","aria-label":e.item.ariaLabel,onClick:s},[V("span",Rf,be(e.item.text),1),V("span",{class:tt(["button-arrow",n.value?"down":"right"])},null,2)],8,Sf),V("ul",Lf,[(M(!0),z(de,null,jn(e.item.items,i=>(M(),z("li",{key:i.text,class:"dialog-item"},[U(Af,{item:i},null,8,["item"])]))),128))])],2))}});var Ko=me(Pf,[["__scopeId","data-v-56bf3a3f"]]);const Ff={key:0,class:"nav-links"},If={key:1,class:"item"},Mf={key:2,class:"item"},Of=ae({setup(e){const{theme:t}=Ce(),n=_f(),s=bf(),r=G(()=>t.value.nav||s.value||n.value);return(o,i)=>L(r)?(M(),z("nav",Ff,[L(t).nav?(M(!0),z(de,{key:0},jn(L(t).nav,l=>(M(),z("div",{key:l.text,class:"item"},[l.items?(M(),_e(Ko,{key:0,item:l},null,8,["item"])):(M(),_e(as,{key:1,item:l},null,8,["item"]))]))),128)):te("",!0),L(n)?(M(),z("div",If,[U(Ko,{item:L(n)},null,8,["item"])])):te("",!0),L(s)?(M(),z("div",Mf,[U(as,{item:L(s)},null,8,["item"])])):te("",!0)])):te("",!0)}});var Ml=me(Of,[["__scopeId","data-v-eab3edfe"]]);const jf={emits:["toggle"]},Df=V("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[V("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),Nf=[Df];function Hf(e,t,n,s,r,o){return M(),z("div",{class:"sidebar-button",onClick:t[0]||(t[0]=i=>e.$emit("toggle"))},Nf)}var Bf=me(jf,[["render",Hf]]);const Kf=e=>(Cr("data-v-675d8756"),e=e(),Tr(),e),Vf={class:"nav-bar"},Uf=Kf(()=>V("div",{class:"flex-grow"},null,-1)),Wf={class:"nav"},qf=ae({emits:["toggle"],setup(e){return(t,n)=>(M(),z("header",Vf,[U(Bf,{onToggle:n[0]||(n[0]=s=>t.$emit("toggle"))}),U(mf),Uf,V("div",Wf,[U(Ml)]),he(t.$slots,"search",{},void 0,!0)]))}});var zf=me(qf,[["__scopeId","data-v-675d8756"]]);function Jf(){let e=null,t=null;const n=Qf(s,300);function s(){const i=Yf(),l=Xf(i);for(let a=0;a<l.length;a++){const c=l[a],d=l[a+1],[f,h]=Zf(a,c,d);if(f){history.replaceState(null,document.title,h||" "),r(h);return}}}function r(i){if(o(t),o(e),t=document.querySelector(`.sidebar a[href="${i}"]`),!t)return;t.classList.add("active");const l=t.closest(".sidebar-links > ul > li");l&&l!==t.parentElement?(e=l.querySelector("a"),e&&e.classList.add("active")):e=null}function o(i){i&&i.classList.remove("active")}Je(()=>{s(),window.addEventListener("scroll",n)}),Mn(()=>{r(decodeURIComponent(location.hash))}),rn(()=>{window.removeEventListener("scroll",n)})}function Yf(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function Xf(e){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(t=>e.some(n=>n.hash===t.hash))}function Gf(){return document.querySelector(".nav-bar").offsetHeight}function Vo(e){const t=Gf();return e.parentElement.offsetTop-t-15}function Zf(e,t,n){const s=window.scrollY;return e===0&&s===0?[!0,null]:s<Vo(t)?[!1,null]:!n||s<Vo(n)?[!0,decodeURIComponent(t.hash)]:[!1,null]}function Qf(e,t){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(e,t):(e(),s=!0,setTimeout(()=>{s=!1},t))}}function ep(){const e=xt(),{site:t}=Ce();return Jf(),G(()=>{const n=e.data.headers,s=e.data.frontmatter.sidebar,r=e.data.frontmatter.sidebarDepth;if(s===!1)return[];if(s==="auto")return Uo(n,r);const o=Br(t.value.themeConfig.sidebar,e.data.relativePath);return o===!1?[]:o==="auto"?Uo(n,r):o})}function Uo(e,t){const n=[];if(e===void 0)return[];let s;return e.forEach(({level:r,title:o,slug:i})=>{if(r-1>t)return;const l={text:o,link:`#${i}`};r===2?(s=l,n.push(l)):s&&(s.children||(s.children=[])).push(l)}),n}const Ol=e=>{const t=xt(),{site:n,frontmatter:s}=Ce(),r=e.depth||1,o=s.value.sidebarDepth||1/0,i=t.data.headers,l=e.item.text,a=tp(n.value.base,e.item.link),c=e.item.children,d=Sd(t,e.item.link),f=r<o?jl(d,c,i,r+1):null;return rt("li",{class:"sidebar-link"},[rt(a?"a":"p",{class:{"sidebar-link-item":!0,active:d},href:a},l),f])};function tp(e,t){return t===void 0||t.startsWith("#")?t:Rd(e,t)}function jl(e,t,n,s=1){return t&&t.length>0?rt("ul",{class:"sidebar-links"},t.map(r=>rt(Ol,{item:r,depth:s}))):e&&n?jl(!1,np(n),void 0,s):null}function np(e){return Dl(sp(e))}function sp(e){e=e.map(n=>Object.assign({},n));let t;return e.forEach(n=>{n.level===2?t=n:t&&(t.children||(t.children=[])).push(n)}),e.filter(n=>n.level===2)}function Dl(e){return e.map(t=>({text:t.title,link:`#${t.slug}`,children:t.children?Dl(t.children):void 0}))}const rp={key:0,class:"sidebar-links"},op=ae({setup(e){const t=ep();return(n,s)=>L(t).length>0?(M(),z("ul",rp,[(M(!0),z(de,null,jn(L(t),r=>(M(),_e(L(Ol),{item:r},null,8,["item"]))),256))])):te("",!0)}});const ip=ae({props:{open:{type:Boolean}},setup(e){return(t,n)=>(M(),z("aside",{class:tt(["sidebar",{open:e.open}])},[U(Ml,{class:"nav"}),he(t.$slots,"sidebar-top",{},void 0,!0),U(op),he(t.$slots,"sidebar-bottom",{},void 0,!0)],2))}});var lp=me(ip,[["__scopeId","data-v-83e92a68"]]);const ap=/bitbucket.org/;function cp(){const{page:e,theme:t,frontmatter:n}=Ce(),s=G(()=>{const{repo:o,docsDir:i="",docsBranch:l="master",docsRepo:a=o,editLinks:c}=t.value,d=n.value.editLink!=null?n.value.editLink:c,{relativePath:f}=e.value;return!d||!f||!o?null:up(o,a,i,l,f)}),r=G(()=>t.value.editLinkText||"Edit this page");return{url:s,text:r}}function up(e,t,n,s,r){return ap.test(e)?fp(e,t,n,s,r):dp(e,t,n,s,r)}function dp(e,t,n,s,r){return(Hr(t)?t:`https://github.com/${t}`).replace(ls,"")+`/edit/${s}/`+(n?n.replace(ls,"")+"/":"")+r}function fp(e,t,n,s,r){return(Hr(t)?t:e).replace(ls,"")+`/src/${s}/`+(n?n.replace(ls,"")+"/":"")+r+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}const pp={class:"edit-link"},hp=["href"],gp=ae({setup(e){const{url:t,text:n}=cp();return(s,r)=>(M(),z("div",pp,[L(t)?(M(),z("a",{key:0,class:"link",href:L(t),target:"_blank",rel:"noopener noreferrer"},[on(be(L(n))+" ",1),U(Kr,{class:"icon"})],8,hp)):te("",!0)]))}});var mp=me(gp,[["__scopeId","data-v-1ed99556"]]);const _p={key:0,class:"last-updated"},vp={class:"prefix"},bp={class:"datetime"},yp=ae({setup(e){const{theme:t,page:n}=Ce(),s=G(()=>{const i=t.value.lastUpdated;return i!==void 0&&i!==!1&&n.value.lastUpdated!==0}),r=G(()=>{const i=t.value.lastUpdated;return i===!0?"Last Updated":i}),o=$e("");return Je(()=>{Ar(()=>{o.value=new Date(n.value.lastUpdated).toLocaleString("en-US")})}),(i,l)=>L(s)?(M(),z("p",_p,[V("span",vp,be(L(r))+":",1),V("span",bp,be(o.value),1)])):te("",!0)}});var xp=me(yp,[["__scopeId","data-v-abce3432"]]);const kp={class:"page-footer"},wp={class:"edit"},Cp={class:"updated"},Tp=ae({setup(e){const{page:t}=Ce();return(n,s)=>(M(),z("footer",kp,[V("div",wp,[U(mp)]),V("div",Cp,[L(t).lastUpdated?(M(),_e(xp,{key:0})):te("",!0)])]))}});var Ep=me(Tp,[["__scopeId","data-v-07c132fc"]]);function $p(){const{page:e,theme:t}=Ce(),n=G(()=>Pl(rr(e.value.relativePath))),s=G(()=>{const a=Br(t.value.sidebar,n.value);return Nr(a)?Fl(a):[]}),r=G(()=>s.value.findIndex(a=>a.link===n.value)),o=G(()=>{if(t.value.nextLinks!==!1&&r.value>-1&&r.value<s.value.length-1)return s.value[r.value+1]}),i=G(()=>{if(t.value.prevLinks!==!1&&r.value>0)return s.value[r.value-1]}),l=G(()=>!!o.value||!!i.value);return{next:o,prev:i,hasLinks:l}}const Ap={},Sp={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Rp=V("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1),Lp=[Rp];function Pp(e,t){return M(),z("svg",Sp,Lp)}var Fp=me(Ap,[["render",Pp]]);const Ip={},Mp={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Op=V("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),jp=[Op];function Dp(e,t){return M(),z("svg",Mp,jp)}var Np=me(Ip,[["render",Dp]]);const Hp={key:0,class:"next-and-prev-link"},Bp={class:"container"},Kp={class:"prev"},Vp=["href"],Up={class:"text"},Wp={class:"next"},qp=["href"],zp={class:"text"},Jp=ae({setup(e){const{hasLinks:t,prev:n,next:s}=$p();return(r,o)=>L(t)?(M(),z("div",Hp,[V("div",Bp,[V("div",Kp,[L(n)?(M(),z("a",{key:0,class:"link",href:L(sn)(L(n).link)},[U(Fp,{class:"icon icon-prev"}),V("span",Up,be(L(n).text),1)],8,Vp)):te("",!0)]),V("div",Wp,[L(s)?(M(),z("a",{key:0,class:"link",href:L(sn)(L(s).link)},[V("span",zp,be(L(s).text),1),U(Np,{class:"icon icon-next"})],8,qp)):te("",!0)])])])):te("",!0)}});var Yp=me(Jp,[["__scopeId","data-v-38ede35f"]]);const Xp={class:"page"},Gp={class:"container"},Zp=ae({setup(e){return(t,n)=>{const s=Zt("Content");return M(),z("main",Xp,[V("div",Gp,[he(t.$slots,"top",{},void 0,!0),U(s,{class:"content"}),U(Ep),U(Yp),he(t.$slots,"bottom",{},void 0,!0)])])}}});var Qp=me(Zp,[["__scopeId","data-v-7eddb2c4"]]);const eh={key:0,id:"ads-container"},th=ae({setup(e){const t=()=>null,n=t,s=t,r=t,o=xt(),{site:i,page:l,theme:a,frontmatter:c}=Ce(),d=G(()=>!!c.value.customLayout),f=G(()=>!!c.value.home),h=G(()=>Object.keys(i.value.langs).length>1),y=G(()=>{const v=a.value;return c.value.navbar===!1||v.navbar===!1?!1:i.value.title||v.logo||v.repo||v.nav}),b=$e(!1),P=G(()=>c.value.home||c.value.sidebar===!1?!1:!Fd(Br(a.value.sidebar,o.data.relativePath))),g=v=>{b.value=typeof v=="boolean"?v:!b.value},x=g.bind(null,!1);et(o,x);const m=G(()=>[{"no-navbar":!y.value,"sidebar-open":b.value,"no-sidebar":!P.value}]);return(v,T)=>{const I=Zt("Content"),O=Zt("Debug");return M(),z(de,null,[V("div",{class:tt(["theme",L(m)])},[L(y)?(M(),_e(zf,{key:0,onToggle:g},{search:Oe(()=>[he(v.$slots,"navbar-search",{},()=>[L(a).algolia?(M(),_e(L(r),{key:0,options:L(a).algolia,multilang:L(h)},null,8,["options","multilang"])):te("",!0)])]),_:3})):te("",!0),U(lp,{open:b.value},{"sidebar-top":Oe(()=>[he(v.$slots,"sidebar-top")]),"sidebar-bottom":Oe(()=>[he(v.$slots,"sidebar-bottom")]),_:3},8,["open"]),V("div",{class:"sidebar-mask",onClick:T[0]||(T[0]=E=>g(!1))}),L(d)?(M(),_e(I,{key:1})):L(f)?he(v.$slots,"home",{key:2},()=>[U(ff,null,{hero:Oe(()=>[he(v.$slots,"home-hero")]),features:Oe(()=>[he(v.$slots,"home-features")]),footer:Oe(()=>[he(v.$slots,"home-footer")]),_:3})]):(M(),_e(Qp,{key:3},{top:Oe(()=>[he(v.$slots,"page-top-ads",{},()=>[L(a).carbonAds&&L(a).carbonAds.carbon?(M(),z("div",eh,[(M(),_e(L(n),{key:"carbon"+L(l).relativePath,code:L(a).carbonAds.carbon,placement:L(a).carbonAds.placement},null,8,["code","placement"]))])):te("",!0)]),he(v.$slots,"page-top")]),bottom:Oe(()=>[he(v.$slots,"page-bottom"),he(v.$slots,"page-bottom-ads",{},()=>[L(a).carbonAds&&L(a).carbonAds.custom?(M(),_e(L(s),{key:"custom"+L(l).relativePath,code:L(a).carbonAds.custom,placement:L(a).carbonAds.placement},null,8,["code","placement"])):te("",!0)])]),_:3}))],2),U(O)],64)}}}),nh={class:"theme"},sh=V("h1",null,"404",-1),rh=["href"],oh=ae({setup(e){const{site:t}=Ce(),n=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function s(){return n[Math.floor(Math.random()*n.length)]}return(r,o)=>(M(),z("div",nh,[sh,V("blockquote",null,be(s()),1),V("a",{href:L(t).base,"aria-label":"go to home"},"Take me home.",8,rh)]))}}),ih={Layout:th,NotFound:oh};const lh="modulepreload",Wo={},ah="/vue-keyboard-trap/",Ne=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${ah}${s}`,s in Wo)return;Wo[s]=!0;const r=s.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":lh,r||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),r)return new Promise((l,a)=>{i.addEventListener("load",l),i.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},ch=/(?:^|[\n\r]+)<template[^>]*?(?:\s+lang="([^"]+)")?[^>]*?>[\r\n]*(.*?)[\r\n]*<\/template>/is,uh=/(?:^|[\n\r]+)<style[^>]*?(?:\s+lang="([^"]+)")?[^>]*?>[\r\n](.*?)[\r\n]<\/style>/is,dh=/(?:^|[\n\r]+)<script[^>]*?(?:\s+lang="([^"]+)")?[^>]*?>[\r\n](.*?)[\r\n]<\/script>/is,fh=/(^|[\n\r]+)import(?:\s+(.*?)\s+from)?\s+(['"])(.+?)\3(;)?(?:\s*\/\/\s*asGlobal=(['"])(.+?)\6)?/isg,ph=/(?:^|[\n\r]+)\s*\/\/\s*external(js|css)=(['"])(.+?)\2/isg,qo="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.prod.js";function js(e,t){const n=t.exec(e);return n===null?{type:"none",code:""}:{type:n[1]||"none",code:n[2]||""}}function hh(e,t,n,s,r,o,i,l){if(typeof n!="string"||n.length===0)return"";if(typeof l=="string"&&l.length>0)return`${t}const ${n} = ${l}${o}`;const a=/^(?:@[^/]+\/)?([^@]+)$/i.exec(r);if(a===null)return"";const c=a[1].split("/").map(d=>d.split(/[^a-z0-9]+/i).filter(f=>f.length>0).map(f=>`${f[0].toLocaleUpperCase()}${f.slice(1).toLocaleLowerCase()}`).join("")).join(".");return`${t}const ${n} = ${c}${o||""}`}function gh({title:e,text:t,externalCss:n,externalJs:s}){const r=js(t,ch),o=js(t,uh),i=js(t,dh),l=Array.isArray(n)===!0?n:typeof n=="string"&&n.length>0?[n]:[],a=Array.isArray(s)===!0?s:typeof s=="string"&&s.length>0?[s]:[];a.indexOf(qo)===-1&&a.unshift(qo),i.code=i.code.replace(ph,(y,b,P,g)=>(b.toLowerCase()==="js"?a.indexOf(g)===-1&&a.push(g):l.indexOf(g)===-1&&l.push(g),"")),i.code=i.code.replaceAll(fh,hh);let c=r.code.replace(/(<template>|<\/template>$)/g,"").replace(/\n/g,`
  `).replace(/([\w]+=")([^"]*?)(")/g,(y,b,P,g)=>b+P.replace(/>/g,"___TEMP_REPLACEMENT___")+g).replace(/<(q-[\w-]+|div)([^>]*?)\s*?([\n\r][\t ]+)?\/>/gs,"<$1$2$3></$1>").replace(/(<template[^>]*>)(\s*?(?:[\n\r][\t ]+)?)<(thead|tbody|tfoot)/gs,"$1$2<___PREVENT_TEMPLATE___$3").replace(/<(thead|tbody|tfoot)(.*?)[\n\r]?(\s*)<\/\1>/gs,(y,b,P,g)=>`<template>
${g}  <${b}${P.split(/[\n\r]+/g).join(`
  `)}
${g}  </${b}>
${g}</template>`).replace(/___PREVENT_TEMPLATE___/g,"").replace(/___TEMP_REPLACEMENT___/g,">").replace(/^\s{2}/gm,"").trim();c=`
<div id="app">
  ${c}
</div>`;let d=/export default {([\s\S]*)}/g.exec(i.code);d=(d&&d[1]||"").trim(),d.length>0&&(d=`
  ${d}
`);let f=/^([\s\S]*)export default {/g.exec(i.code);f=(f&&f[1]||"").trim(),f+=f?`

`:"",f+=`const app = Vue.createApp({${d}});

app.mount('#app');
`;const h={title:e,head:"",editors:(c&&4)|(o.code&&2)|(f&&1).toString(2),html:c,html_pre_processor:r.type,css:o.code,css_pre_processor:o.type,css_external:l,js:f,js_pre_processor:i.type==="none"?"babel":i.type,js_external:a};return JSON.stringify(h)}const mh={key:0,class:"interactive-code__header"},_h={class:"interactive-code__header-title"},vh=["innerHTML"],bh={class:"interactive-code__actions"},yh=V("span",{class:"spacer"},null,-1),xh=V("span",{class:"separator"},null,-1),kh={key:2,class:"interactive-code__source"},wh=["value"],Ch={props:{example:String,title:{type:String,default:""},desc:{type:String,default:""},sourceExpanded:Boolean,externalCss:[Array,String],externalJs:[Array,String]},setup(e){const t=e,n=`../../../${t.example}`,s=$e(null);({"../../../examples/autofocus-on-activation.vue":()=>Ne(()=>import("./chunks/autofocus-on-activation.552fce59.js"),["assets/chunks/autofocus-on-activation.552fce59.js","assets/chunks/index.c9d19996.js"]),"../../../examples/autofocus-on-mount.vue":()=>Ne(()=>import("./chunks/autofocus-on-mount.4514b5c9.js"),["assets/chunks/autofocus-on-mount.4514b5c9.js","assets/chunks/index.c9d19996.js"]),"../../../examples/roving-grid.vue":()=>Ne(()=>import("./chunks/roving-grid.e7074b41.js"),["assets/chunks/roving-grid.e7074b41.js","assets/chunks/index.c9d19996.js"]),"../../../examples/roving-gridcell.vue":()=>Ne(()=>import("./chunks/roving-gridcell.5141b06a.js"),["assets/chunks/roving-gridcell.5141b06a.js","assets/chunks/index.c9d19996.js"]),"../../../examples/roving-nested.vue":()=>Ne(()=>import("./chunks/roving-nested.56874c37.js"),["assets/chunks/roving-nested.56874c37.js","assets/chunks/index.c9d19996.js"]),"../../../examples/roving-rtl.vue":()=>Ne(()=>import("./chunks/roving-rtl.b233a7d4.js"),["assets/chunks/roving-rtl.b233a7d4.js","assets/chunks/index.c9d19996.js"]),"../../../examples/roving-simple.vue":()=>Ne(()=>import("./chunks/roving-simple.2e8a8e62.js"),["assets/chunks/roving-simple.2e8a8e62.js","assets/chunks/index.c9d19996.js"]),"../../../examples/trap-escexits.vue":()=>Ne(()=>import("./chunks/trap-escexits.bf6372f0.js"),["assets/chunks/trap-escexits.bf6372f0.js","assets/chunks/index.c9d19996.js"]),"../../../examples/trap-escrefocus.vue":()=>Ne(()=>import("./chunks/trap-escrefocus.fd69a608.js"),["assets/chunks/trap-escrefocus.fd69a608.js","assets/chunks/index.c9d19996.js"]),"../../../examples/trap-rtl.vue":()=>Ne(()=>import("./chunks/trap-rtl.d3dfc27e.js"),["assets/chunks/trap-rtl.d3dfc27e.js","assets/chunks/index.c9d19996.js"]),"../../../examples/trap-simple.vue":()=>Ne(()=>import("./chunks/trap-simple.ebbfa1fd.js"),["assets/chunks/trap-simple.ebbfa1fd.js","assets/chunks/index.c9d19996.js"])})[n]().then(b=>{s.value=Rt(b.default)});const o=$e(null),i={"../../../examples/autofocus-on-activation.vue":`<template>
  <!-- Check Vue Keyboard Trap at https://pdanpdan.github.io/vue-keyboard-trap/ -->
  <div>
    <button @click="toggleTrapActive">{{ trapActive === true ? 'Deactivate trap' : 'Activate trap' }}</button>

    <div class="test" v-kbd-trap.autofocus="trapActive">
      <div class="test" tabindex="0">First</div>
      <div class="test" tabindex="0">Second</div>
      <div class="test" tabindex="0" data-autofocus>Autofocus</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
// externalJs="https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/index.umd.js"
// externalCss="https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/styles/index.sass"
import { VueKeyboardTrapDirectiveFactory } from '@pdanpdan/vue-keyboard-trap'; // asGlobal="VueKeyboardTrap"
import '@pdanpdan/vue-keyboard-trap/styles';

export default {
  directives: {
    KbdTrap: VueKeyboardTrapDirectiveFactory().directive,
  },

  setup() {
    const trapActive = ref(false);
    const toggleTrapActive = () => {
      trapActive.value = trapActive.value !== true;
    };

    return {
      trapActive,
      toggleTrapActive,
    };
  },
};
<\/script>

<style lang="sass" scoped>
button
  font-size: 16px
  padding: .5em 1em

.test
  position: relative
  padding: 4px 8px
  margin: 24px 8px
  border: 1px solid #ccc
  text-align: center
  font-weight: bold
  font-size: 18px

  &[tabindex]
    border: 1px solid #333

  &[tabindex="-1"]
    border: 1px dashed #333

  &[tabindex="-9999"]
    border: 1px dashed #c33

  &[data-autofocus]
    box-shadow: 0 0 2px 3px #f99

  &:focus
    background-color: #6e66
</style>
`,"../../../examples/autofocus-on-mount.vue":`<template>
  <!-- Check Vue Keyboard Trap at https://pdanpdan.github.io/vue-keyboard-trap/ -->
  <div>
    <button @click="toggleShowContent">{{ showContent === true ? 'Hide content' : 'Show content' }}</button>

    <div v-if="showContent" class="test" v-kbd-trap.autofocus>
      <div class="test" tabindex="0">First</div>
      <div class="test" tabindex="0">Second</div>
      <div class="test" tabindex="0" data-autofocus>Autofocus</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
// externalJs="https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/index.umd.js"
// externalCss="https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/styles/index.sass"
import { VueKeyboardTrapDirectiveFactory } from '@pdanpdan/vue-keyboard-trap'; // asGlobal="VueKeyboardTrap"
import '@pdanpdan/vue-keyboard-trap/styles';

export default {
  directives: {
    KbdTrap: VueKeyboardTrapDirectiveFactory().directive,
  },

  setup() {
    const showContent = ref(false);
    const toggleShowContent = () => {
      showContent.value = showContent.value !== true;
    };

    return {
      showContent,
      toggleShowContent,
    };
  },
};
<\/script>

<style lang="sass" scoped>
button
  font-size: 16px
  padding: .5em 1em

.test
  position: relative
  padding: 4px 8px
  margin: 24px 8px
  border: 1px solid #ccc
  text-align: center
  font-weight: bold
  font-size: 18px

  &[tabindex]
    border: 1px solid #333

  &[tabindex="-1"]
    border: 1px dashed #333

  &[tabindex="-9999"]
    border: 1px dashed #c33

  &[data-autofocus]
    box-shadow: 0 0 2px 3px #f99

  &:focus
    background-color: #6e66
</style>
`,"../../../examples/roving-grid.vue":`<template>
  <!-- Check Vue Keyboard Trap at https://pdanpdan.github.io/vue-keyboard-trap/ -->
  <div class="test" v-kbd-trap>
    <div class="test" tabindex="0">Before</div>

    <div class="test" v-kbd-trap.roving.grid>
      <div v-for="i in 5" :key="i" class="row">
        <div
          v-for="j in 5"
          :key="i * 100 + j"
          class="test col"
          :data-v-kbd-trap-row="j === 3 ? i : \`\${ i } *\`"
          :data-v-kbd-trap-col="i === 3 ? j : \`\${ j } *\`"
          :tabindex="i !== 3 && j !== 3
            ? ((i + j) % 2 === 0 ? null : -1)
            : 0
          "
        >
          R:{{ i + 1 }}/C:{{ j + 1 }}
        </div>
      </div>
    </div>

    <div class="test" tabindex="0">After</div>
  </div>
</template>

<script>
// externalJs="https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/index.umd.js"
// externalCss="https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/styles/index.sass"
import { VueKeyboardTrapDirectiveFactory } from '@pdanpdan/vue-keyboard-trap'; // asGlobal="VueKeyboardTrap"
import '@pdanpdan/vue-keyboard-trap/styles';

export default {
  directives: {
    KbdTrap: VueKeyboardTrapDirectiveFactory().directive,
  },
};
<\/script>

<style lang="sass" scoped>
.test
  position: relative
  padding: 4px 8px
  margin: 24px 8px
  border: 1px solid #ccc
  text-align: center
  font-weight: bold
  font-size: 18px

  &[tabindex]
    border: 1px solid #333

  &[tabindex="-1"]
    border: 1px dashed #333

  &[tabindex="-9999"]
    border: 1px dashed #c33

  &:focus
    background-color: #6e66

.row
  display: flex

  .col
    flex: 1 1 auto
    max-width: 100%
</style>
`,"../../../examples/roving-gridcell.vue":`<template>
  <!-- Check Vue Keyboard Trap at https://pdanpdan.github.io/vue-keyboard-trap/ -->
  <div class="test" v-kbd-trap>
    <div class="test" tabindex="0">Before</div>

    <div class="test">
      <table
        class="calendar"
        role="grid"
        aria-labelledby="calendarheader"
        v-kbd-trap.roving
      >
        <caption id="calendarheader">April 2022</caption>

        <thead role="rowgroup">
          <tr role="row">
            <th role="columnheader" aria-label="Week">Wk.</th>
            <th role="columnheader" aria-label="Sunday">Su</th>
            <th role="columnheader" aria-label="Monday">Mo</th>
            <th role="columnheader" aria-label="Tuesday">Tu</th>
            <th role="columnheader" aria-label="Wednesday">We</th>
            <th role="columnheader" aria-label="Thursday">Th</th>
            <th role="columnheader" aria-label="Friday">Fr</th>
            <th role="columnheader" aria-label="Saturday">Sa</th>
          </tr>
        </thead>

        <tbody role="rowgroup">
          <tr role="row">
            <th scope="row" role="rowheader">13</th>
            <td role="gridcell" tabindex="-1">27</td>
            <td role="gridcell">28</td>
            <td role="gridcell">29</td>
            <td role="gridcell">30</td>
            <td role="gridcell">31</td>
            <td role="gridcell" tabindex="0">1</td>
            <td role="gridcell" tabindex="0">2</td>
          </tr>

          <tr v-for="m in 4" :key="m" role="row">
            <th scope="row" role="rowheader">{{ 13 + m}}</th>
            <td
              v-for="d in 7"
              :key="d"
              role="gridcell"
              tabindex="0"
            >{{ 2 + (m - 1) * 7 + d }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="test" tabindex="0">After</div>
  </div>
</template>

<script>
// externalJs="https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/index.umd.js"
// externalCss="https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/styles/index.sass"
import { VueKeyboardTrapDirectiveFactory } from '@pdanpdan/vue-keyboard-trap'; // asGlobal="VueKeyboardTrap"
import '@pdanpdan/vue-keyboard-trap/styles';

export default {
  directives: {
    KbdTrap: VueKeyboardTrapDirectiveFactory().directive,
  },
};
<\/script>

<style lang="sass" scoped>
.test
  position: relative
  padding: 4px 8px
  margin: 24px 8px
  border: 1px solid #ccc
  text-align: center
  font-weight: bold
  font-size: 18px

  &[tabindex]
    border: 1px solid #333

  &[tabindex="-1"]
    border: 1px dashed #333

  &[tabindex="-9999"]
    border: 1px dashed #c33

  &:focus
    background-color: #6e66

table.calendar
  margin: 32px 16px
  border-collapse: collapse

  [role="columnheader"],
  [role="rowheader"]
    color: #eee
    background-color: #333
    font-style: italic

  [role="rowheader"]
    font-size: .8em

  tbody
    th,
    td
      padding: 12px

    td
      border: 1px solid #ccc
      text-align: center
      color: #ccc

      &[tabindex]:not([tabindex^="-"])
        color: #000

      &:focus
        background-color: #6e66
</style>
`,"../../../examples/roving-nested.vue":`<template>
  <!-- Check Vue Keyboard Trap at https://pdanpdan.github.io/vue-keyboard-trap/ -->
  <div class="test" v-kbd-trap>
    <div class="test" tabindex="0">Before</div>

    <div class="test" v-kbd-trap.roving.vertical>
      <div
        class="test"
        v-for="i in 2"
        :key="i"
        tabindex="0"
      >
        Group 1 / {{ i }}
      </div>

      <div class="test row" v-kbd-trap.roving.horizontal>
        <div
          class="test col"
          v-for="i in 3"
          :key="i"
          tabindex="0"
        >
          Group 2 / {{ i }}
        </div>
      </div>

      <div
        class="test"
        v-for="i in 2"
        :key="i"
        tabindex="0"
      >
        Group 1 / {{ i + 2 }}
      </div>
    </div>

    <div class="test" tabindex="0">After</div>
  </div>
</template>

<script>
// externalJs="https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/index.umd.js"
// externalCss="https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/styles/index.sass"
import { VueKeyboardTrapDirectiveFactory } from '@pdanpdan/vue-keyboard-trap'; // asGlobal="VueKeyboardTrap"
import '@pdanpdan/vue-keyboard-trap/styles';

export default {
  directives: {
    KbdTrap: VueKeyboardTrapDirectiveFactory().directive,
  },
};
<\/script>

<style lang="sass" scoped>
.test
  position: relative
  padding: 4px 8px
  margin: 24px 8px
  border: 1px solid #ccc
  text-align: center
  font-weight: bold
  font-size: 18px

  &[tabindex]
    border: 1px solid #333

  &[tabindex="-1"]
    border: 1px dashed #333

  &[tabindex="-9999"]
    border: 1px dashed #c33

  &:focus
    background-color: #6e66

.row
  display: flex

  .col
    flex: 1 1 auto
    max-width: 100%
</style>
`,"../../../examples/roving-rtl.vue":`<template>
  <!-- Check Vue Keyboard Trap at https://pdanpdan.github.io/vue-keyboard-trap/ -->
  <div>
    <button @click="toggleRtl">{{ rtl === true ? 'RTL - switch to LTR' : 'LTR - switch to RTL' }}</button>

    <div class="test" v-kbd-trap.roving.vertical :dir="rtl === true ? 'rtl' : 'ltr'">
      <div class="test row" dir="rtl" v-kbd-trap.roving.horizontal>
        <legend>RTL Always</legend>

        <div class="test col" tabindex="0">1</div>
        <div class="test col" tabindex="0">2</div>
        <div class="test col" tabindex="0">3</div>
      </div>

      <div class="test row" dir="ltr" v-kbd-trap.roving.horizontal>
        <legend>LTR Always</legend>

        <div class="test col" tabindex="0">1</div>
        <div class="test col" tabindex="0">2</div>
        <div class="test col" tabindex="0">3</div>
      </div>

      <div class="test row" v-kbd-trap.roving.horizontal>
        <legend>{{ rtl === true ? 'RTL' : 'LTR' }}</legend>

        <div class="test col" tabindex="0">1</div>
        <div class="test col" tabindex="0">2</div>
        <div class="test col" tabindex="0">3</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
// externalJs="https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/index.umd.js"
// externalCss="https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/styles/index.sass"
import { VueKeyboardTrapDirectiveFactory } from '@pdanpdan/vue-keyboard-trap'; // asGlobal="VueKeyboardTrap"
import '@pdanpdan/vue-keyboard-trap/styles';

export default {
  directives: {
    KbdTrap: VueKeyboardTrapDirectiveFactory().directive,
  },

  setup() {
    const rtl = ref(false);
    const toggleRtl = () => {
      rtl.value = rtl.value !== true;
    };

    return {
      rtl,
      toggleRtl,
    };
  },
};
<\/script>

<style lang="sass" scoped>
button
  font-size: 16px
  padding: .5em 1em

legend
  position: absolute
  inset-inline-start: 1px
  inset-block-end: 1px
  font-weight: bold
  font-variant: small-caps
  color: #36f
  pointer-events: none

.row
  display: flex

  .col
    flex: 1 1 auto
    max-width: 100%

.test
  position: relative
  padding: 4px 8px
  margin: 24px 8px
  border: 1px solid #ccc
  text-align: center
  font-weight: bold
  font-size: 18px

  &[tabindex]
    border: 1px solid #333

  &[tabindex="-1"]
    border: 1px dashed #333

  &[tabindex="-9999"]
    border: 1px dashed #c33

  &:focus
    background-color: #6e66
</style>
`,"../../../examples/roving-simple.vue":`<template>
  <!-- Check Vue Keyboard Trap at https://pdanpdan.github.io/vue-keyboard-trap/ -->
  <div class="test" v-kbd-trap>
    <div class="test" tabindex="0">Before</div>

    <div class="test" v-kbd-trap.roving>
      <div
        class="test"
        v-for="i in 3"
        :key="i"
        tabindex="0"
      >
        Group 1 / {{ i }}
      </div>
    </div>

    <div class="test row" v-kbd-trap.roving>
      <div
        class="test col"
        v-for="i in 3"
        :key="i"
        tabindex="0"
      >
        Group 2 / {{ i }}
      </div>
    </div>

    <div class="test" tabindex="0">After</div>
  </div>
</template>

<script>
// externalJs="https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/index.umd.js"
// externalCss="https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/styles/index.sass"
import { VueKeyboardTrapDirectiveFactory } from '@pdanpdan/vue-keyboard-trap'; // asGlobal="VueKeyboardTrap"
import '@pdanpdan/vue-keyboard-trap/styles';

export default {
  directives: {
    KbdTrap: VueKeyboardTrapDirectiveFactory().directive,
  },
};
<\/script>

<style lang="sass" scoped>
.test
  position: relative
  padding: 4px 8px
  margin: 24px 8px
  border: 1px solid #ccc
  text-align: center
  font-weight: bold
  font-size: 18px

  &[tabindex]
    border: 1px solid #333

  &[tabindex="-1"]
    border: 1px dashed #333

  &[tabindex="-9999"]
    border: 1px dashed #c33

  &:focus
    background-color: #6e66

.row
  display: flex

  .col
    flex: 1 1 auto
    max-width: 100%
</style>
`,"../../../examples/trap-escexits.vue":`<template>
  <!-- Check Vue Keyboard Trap at https://pdanpdan.github.io/vue-keyboard-trap/ -->
  <div class="test" v-kbd-trap.escexits>
    <legend>Outside trap</legend>

    <div class="test" tabindex="0">Before</div>

    <div class="test" v-kbd-trap.escexits>
      <legend>Inside trap 1 - clik one element inside, then use Esc key</legend>

      <div
        class="test"
        v-for="i in 2"
        :key="i"
        tabindex="0"
      >
        Group 1 / {{ i }}
      </div>
    </div>

    <div class="test" v-kbd-trap.escexits>
      <legend>Inside trap 2 - click one element inside, then use Esc key</legend>

      <div
        class="test"
        v-for="i in 2"
        :key="i"
        tabindex="0"
      >
        Group 2 / {{ i }}
      </div>
    </div>

    <div class="test" tabindex="0">After</div>
  </div>
</template>

<script>
// externalJs="https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/index.umd.js"
// externalCss="https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/styles/index.sass"
import { VueKeyboardTrapDirectiveFactory } from '@pdanpdan/vue-keyboard-trap'; // asGlobal="VueKeyboardTrap"
import '@pdanpdan/vue-keyboard-trap/styles';

export default {
  directives: {
    KbdTrap: VueKeyboardTrapDirectiveFactory().directive,
  },
};
<\/script>

<style lang="sass" scoped>
legend
  position: absolute
  inset-inline-start: 1px
  inset-block-end: 1px
  font-weight: bold
  font-variant: small-caps
  color: #36f
  pointer-events: none

.test
  position: relative
  padding: 4px 8px
  margin: 24px 8px
  border: 1px solid #ccc
  text-align: center
  font-weight: bold
  font-size: 18px

  &[tabindex]
    border: 1px solid #333

  &[tabindex="-1"]
    border: 1px dashed #333

  &[tabindex="-9999"]
    border: 1px dashed #c33

  &:focus
    background-color: #6e66
</style>
`,"../../../examples/trap-escrefocus.vue":`<template>
  <!-- Check Vue Keyboard Trap at https://pdanpdan.github.io/vue-keyboard-trap/ -->
  <div class="test" v-kbd-trap.escrefocus>
    <legend>Outside trap</legend>

    <div class="test" tabindex="0">Before</div>

    <div class="test" v-kbd-trap.escrefocus.roving.vertical>
      <legend>Inside trap 1 - clik one element inside, then use Esc key</legend>

      <div
        class="test"
        v-for="i in 2"
        :key="i"
        tabindex="0"
      >
        Group 1 / {{ i }}
      </div>
    </div>

    <div class="test" v-kbd-trap.escrefocus.roving.vertical>
      <legend>Inside trap 2 - click one element inside, then use Esc key</legend>

      <div
        class="test"
        v-for="i in 2"
        :key="i"
        tabindex="0"
      >
        Group 2 / {{ i }}
      </div>
    </div>

    <div class="test" tabindex="0">After</div>
  </div>
</template>

<script>
// externalJs="https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/index.umd.js"
// externalCss="https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/styles/index.sass"
import { VueKeyboardTrapDirectiveFactory } from '@pdanpdan/vue-keyboard-trap'; // asGlobal="VueKeyboardTrap"
import '@pdanpdan/vue-keyboard-trap/styles';

export default {
  directives: {
    KbdTrap: VueKeyboardTrapDirectiveFactory().directive,
  },
};
<\/script>

<style lang="sass" scoped>
legend
  position: absolute
  inset-inline-start: 1px
  inset-block-end: 1px
  font-weight: bold
  font-variant: small-caps
  color: #36f
  pointer-events: none

.test
  position: relative
  padding: 4px 8px
  margin: 24px 8px
  border: 1px solid #ccc
  text-align: center
  font-weight: bold
  font-size: 18px

  &[tabindex]
    border: 1px solid #333

  &[tabindex="-1"]
    border: 1px dashed #333

  &[tabindex="-9999"]
    border: 1px dashed #c33

  &:focus
    background-color: #6e66
</style>
`,"../../../examples/trap-rtl.vue":`<template>
  <!-- Check Vue Keyboard Trap at https://pdanpdan.github.io/vue-keyboard-trap/ -->
  <div>
    <button @click="toggleRtl">{{ rtl === true ? 'RTL - switch to LTR' : 'LTR - switch to RTL' }}</button>

    <div class="test" v-kbd-trap :dir="rtl === true ? 'rtl' : 'ltr'">
      <div class="test row" dir="rtl" v-kbd-trap>
        <legend>RTL Always</legend>

        <div class="test col" tabindex="0">1</div>
        <div class="test col" tabindex="0">2</div>
        <div class="test col" tabindex="0">3</div>
      </div>

      <div class="test row" dir="ltr" v-kbd-trap>
        <legend>LTR Always</legend>

        <div class="test col" tabindex="0">1</div>
        <div class="test col" tabindex="0">2</div>
        <div class="test col" tabindex="0">3</div>
      </div>

      <div class="test row" v-kbd-trap>
        <legend>{{ rtl === true ? 'RTL' : 'LTR' }}</legend>

        <div class="test col" tabindex="0">1</div>
        <div class="test col" tabindex="0">2</div>
        <div class="test col" tabindex="0">3</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
// externalJs="https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/index.umd.js"
// externalCss="https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/styles/index.sass"
import { VueKeyboardTrapDirectiveFactory } from '@pdanpdan/vue-keyboard-trap'; // asGlobal="VueKeyboardTrap"
import '@pdanpdan/vue-keyboard-trap/styles';

export default {
  directives: {
    KbdTrap: VueKeyboardTrapDirectiveFactory().directive,
  },

  setup() {
    const rtl = ref(false);
    const toggleRtl = () => {
      rtl.value = rtl.value !== true;
    };

    return {
      rtl,
      toggleRtl,
    };
  },
};
<\/script>

<style lang="sass" scoped>
button
  font-size: 16px
  padding: .5em 1em

legend
  position: absolute
  inset-inline-start: 1px
  inset-block-end: 1px
  font-weight: bold
  font-variant: small-caps
  color: #36f
  pointer-events: none

.row
  display: flex

  .col
    flex: 1 1 auto
    max-width: 100%

.test
  position: relative
  padding: 4px 8px
  margin: 24px 8px
  border: 1px solid #ccc
  text-align: center
  font-weight: bold
  font-size: 18px

  &[tabindex]
    border: 1px solid #333

  &[tabindex="-1"]
    border: 1px dashed #333

  &[tabindex="-9999"]
    border: 1px dashed #c33

  &:focus
    background-color: #6e66
</style>
`,"../../../examples/trap-simple.vue":`<template>
  <!-- Check Vue Keyboard Trap at https://pdanpdan.github.io/vue-keyboard-trap/ -->
  <div class="test" v-kbd-trap>
    <div class="test" tabindex="0">First</div>
    <div class="test" tabindex="0">Second</div>
    <div class="test" tabindex="-1">Third (tabindex="-1")</div>
    <div class="test" tabindex="0">Fourth</div>
  </div>
</template>

<script>
// externalJs="https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/index.umd.js"
// externalCss="https://cdn.jsdelivr.net/gh/pdanpdan/vue-keyboard-trap/dist/styles/index.sass"
import { VueKeyboardTrapDirectiveFactory } from '@pdanpdan/vue-keyboard-trap'; // asGlobal="VueKeyboardTrap"
import '@pdanpdan/vue-keyboard-trap/styles';

export default {
  directives: {
    KbdTrap: VueKeyboardTrapDirectiveFactory().directive,
  },
};
<\/script>

<style lang="sass" scoped>
.test
  position: relative
  padding: 4px 8px
  margin: 24px 8px
  border: 1px solid #ccc
  text-align: center
  font-weight: bold
  font-size: 18px

  &[tabindex]
    border: 1px solid #333

  &[tabindex="-1"]
    border: 1px dashed #333

  &[tabindex="-9999"]
    border: 1px dashed #c33

  &:focus
    background-color: #6e66
</style>
`};o.value=i[n];const l=$e(t.sourceExpanded===!0),a=()=>{l.value=l.value!==!0},c=$e(null),d=$e(null),f=()=>{d.value=gh({title:t.title||t.desc,text:o.value,externalCss:t.externalCss,externalJs:t.externalJs}),Pn(()=>{c.value!==null&&c.value.submit()})},h=$e(!1),y=()=>{navigator.clipboard.writeText(o.value),h.value=!0,setTimeout(()=>{h.value=!1},5*1e3)};return(b,P)=>{const g=Zt("client-only");return M(),_e(g,null,{default:Oe(()=>[V("article",On(b.$attrs,{class:"interactive-code"}),[e.title||e.desc?(M(),z("div",mh,[V("div",_h,be(e.title),1),V("div",{class:"interactive-code__header-desc",innerHTML:e.desc.split(/\\n/).join("<br/>").split(/\n/).join("<br/>")},null,8,vh)])):te("",!0),s.value!==null?(M(),_e(Ji(s.value),{key:1,class:"interactive-code__component"})):te("",!0),V("div",bh,[V("button",{onClick:f},"Open in CodePen"),yh,V("button",{onClick:y},be(h.value===!0?"Copied!":"Copy code"),1),xh,V("button",{onClick:a},"</>")]),l.value?(M(),z("div",kh,[he(b.$slots,"default")])):te("",!0),V("form",{ref_key:"formRef",ref:c,method:"post",action:"https://codepen.io/pen/define/",target:"_blank",rel:"noopener"},[d.value!==null?(M(),z("input",{key:0,type:"hidden",name:"data",value:d.value},null,8,wh)):te("",!0)],512)],16)]),_:3})}}};var cs=Gr(Xr({},ih),{enhanceApp({app:e}){e.component("InteractiveCode",Ch)}});const Ds=new Set,Nl=()=>document.createElement("link"),Th=e=>{const t=Nl();t.rel="prefetch",t.href=e,document.head.appendChild(t)},Eh=e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};let Yn;const $h=je&&(Yn=Nl())&&Yn.relList&&Yn.relList.supports&&Yn.relList.supports("prefetch")?Th:Eh;function Ah(){if(!je||!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const s=()=>{n&&n.disconnect(),n=new IntersectionObserver(o=>{o.forEach(i=>{if(i.isIntersecting){const l=i.target;n.unobserve(l);const{pathname:a}=l;if(!Ds.has(a)){Ds.add(a);const c=Sl(a);$h(c)}}})}),t(()=>{document.querySelectorAll("#app a").forEach(o=>{const{target:i,hostname:l,pathname:a}=o,c=a.match(/\.\w+$/);c&&c[0]!==".html"||i!=="_blank"&&l===location.hostname&&(a!==location.pathname?n.observe(o):Ds.add(a))})})};Je(s);const r=xt();et(()=>r.path,s),rn(()=>{n&&n.disconnect()})}const Sh=ae({setup(e,{slots:t}){const n=$e(!1);return Je(()=>{n.value=!0}),()=>n.value&&t.default?t.default():null}}),Rh=cs.NotFound||(()=>"404 Not Found"),Lh={name:"VitePressApp",setup(){const{site:e}=Ce();return Je(()=>{et(()=>e.value.lang,t=>{document.documentElement.lang=t},{immediate:!0})}),Ah(),()=>rt(cs.Layout)}};function Ph(){const e=Ih(),t=Fh();t.provide(Rl,e);const n=_d(e.route);return t.provide(Al,n),je&&kd(e.route,n.site),t.component("Content",Td),t.component("ClientOnly",Sh),t.component("Debug",()=>null),Object.defineProperty(t.config.globalProperties,"$frontmatter",{get(){return n.frontmatter.value}}),cs.enhanceApp&&cs.enhanceApp({app:t,router:e,siteData:Dn}),{app:t,router:e}}function Fh(){return Tl(Lh)}function Ih(){let e=je,t;return yd(n=>{let s=Sl(n);return e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),je?(e=!1,import(s)):require(s)},Rh)}if(je){const{app:e,router:t}=Ph();t.go().then(()=>{e.mount("#app")})}export{de as F,Oh as V,me as _,U as a,qc as b,z as c,Ph as createApp,V as d,on as e,$e as f,Vc as g,Fc as h,Tr as i,te as j,jn as k,M as o,Cr as p,Zt as r,be as t,Oe as w};
