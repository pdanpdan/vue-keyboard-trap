var Kl=Object.defineProperty,Ul=Object.defineProperties;var Vl=Object.getOwnPropertyDescriptors;var Jr=Object.getOwnPropertySymbols;var Wl=Object.prototype.hasOwnProperty,ql=Object.prototype.propertyIsEnumerable;var Yr=(e,t,n)=>t in e?Kl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xr=(e,t)=>{for(var n in t||(t={}))Wl.call(t,n)&&Yr(e,n,t[n]);if(Jr)for(var n of Jr(t))ql.call(t,n)&&Yr(e,n,t[n]);return e},Zr=(e,t)=>Ul(e,Vl(t));function us(e,t){const n=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const zl="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",Jl=us(zl),Yl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xl=us(Yl);function zo(e){return!!e||e===""}function $n(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=ce(s)?Gl(s):$n(s);if(r)for(const o in r)t[o]=r[o]}return t}else{if(ce(e))return e;if(pe(e))return e}}const Zl=/;(?![^(]*\))/g,Ql=/:(.+)/;function Gl(e){const t={};return e.split(Zl).forEach(n=>{if(n){const s=n.split(Ql);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function tt(e){let t="";if(ce(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const s=tt(e[n]);s&&(t+=s+" ")}else if(pe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function ea(e){if(!e)return null;let{class:t,style:n}=e;return t&&!ce(t)&&(e.class=tt(t)),n&&(e.style=$n(n)),e}function ta(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=ht(e[s],t[s]);return n}function ht(e,t){if(e===t)return!0;let n=Qr(e),s=Qr(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=D(e),s=D(t),n||s)return n&&s?ta(e,t):!1;if(n=pe(e),s=pe(t),n||s){if(!n||!s)return!1;const r=Object.keys(e).length,o=Object.keys(t).length;if(r!==o)return!1;for(const i in e){const l=e.hasOwnProperty(i),a=t.hasOwnProperty(i);if(l&&!a||!l&&a||!ht(e[i],t[i]))return!1}}return String(e)===String(t)}function fs(e,t){return e.findIndex(n=>ht(n,t))}const be=e=>ce(e)?e:e==null?"":D(e)||pe(e)&&(e.toString===Yo||!q(e.toString))?JSON.stringify(e,Jo,2):String(e),Jo=(e,t)=>t&&t.__v_isRef?Jo(e,t.value):qt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:It(t)?{[`Set(${t.size})`]:[...t.values()]}:pe(t)&&!D(t)&&!Xo(t)?String(t):t,ne={},Wt=[],je=()=>{},na=()=>!1,sa=/^on[^a-z]/,An=e=>sa.test(e),or=e=>e.startsWith("onUpdate:"),de=Object.assign,ir=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ra=Object.prototype.hasOwnProperty,G=(e,t)=>ra.call(e,t),D=Array.isArray,qt=e=>ds(e)==="[object Map]",It=e=>ds(e)==="[object Set]",Qr=e=>e instanceof Date,q=e=>typeof e=="function",ce=e=>typeof e=="string",lr=e=>typeof e=="symbol",pe=e=>e!==null&&typeof e=="object",ar=e=>pe(e)&&q(e.then)&&q(e.catch),Yo=Object.prototype.toString,ds=e=>Yo.call(e),oa=e=>ds(e).slice(8,-1),Xo=e=>ds(e)==="[object Object]",cr=e=>ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,hn=us(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ps=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ia=/-(\w)/g,Fe=ps(e=>e.replace(ia,(t,n)=>n?n.toUpperCase():"")),la=/\B([A-Z])/g,Ve=ps(e=>e.replace(la,"-$1").toLowerCase()),Sn=ps(e=>e.charAt(0).toUpperCase()+e.slice(1)),gn=ps(e=>e?`on${Sn(e)}`:""),wn=(e,t)=>!Object.is(e,t),zt=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Qn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},gt=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Gr;const aa=()=>Gr||(Gr=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Se;class ur{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Se&&(this.parent=Se,this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function ca(e){return new ur(e)}function Zo(e,t=Se){t&&t.active&&t.effects.push(e)}function ua(){return Se}function fa(e){Se&&Se.cleanups.push(e)}const fr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Qo=e=>(e.w&mt)>0,Go=e=>(e.n&mt)>0,da=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=mt},pa=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];Qo(r)&&!Go(r)?r.delete(e):t[n++]=r,r.w&=~mt,r.n&=~mt}t.length=n}},Hs=new WeakMap;let fn=0,mt=1;const js=30;let He;const At=Symbol(""),Bs=Symbol("");class Rn{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Zo(this,s)}run(){if(!this.active)return this.fn();let t=He,n=dt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=He,He=this,dt=!0,mt=1<<++fn,fn<=js?da(this):eo(this),this.fn()}finally{fn<=js&&pa(this),mt=1<<--fn,He=this.parent,dt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){He===this?this.deferStop=!0:this.active&&(eo(this),this.onStop&&this.onStop(),this.active=!1)}}function eo(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}function ha(e,t){e.effect&&(e=e.effect.fn);const n=new Rn(e);t&&(de(n,t),t.scope&&Zo(n,t.scope)),(!t||!t.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function ga(e){e.effect.stop()}let dt=!0;const ei=[];function Mt(){ei.push(dt),dt=!1}function Ot(){const e=ei.pop();dt=e===void 0?!0:e}function Ie(e,t,n){if(dt&&He){let s=Hs.get(e);s||Hs.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=fr()),ti(r)}}function ti(e,t){let n=!1;fn<=js?Go(e)||(e.n|=mt,n=!Qo(e)):n=!e.has(He),n&&(e.add(He),He.deps.push(e))}function nt(e,t,n,s,r,o){const i=Hs.get(e);if(!i)return;let l=[];if(t==="clear")l=[...i.values()];else if(n==="length"&&D(e))i.forEach((a,c)=>{(c==="length"||c>=s)&&l.push(a)});else switch(n!==void 0&&l.push(i.get(n)),t){case"add":D(e)?cr(n)&&l.push(i.get("length")):(l.push(i.get(At)),qt(e)&&l.push(i.get(Bs)));break;case"delete":D(e)||(l.push(i.get(At)),qt(e)&&l.push(i.get(Bs)));break;case"set":qt(e)&&l.push(i.get(At));break}if(l.length===1)l[0]&&Ks(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Ks(fr(a))}}function Ks(e,t){for(const n of D(e)?e:[...e])(n!==He||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ma=us("__proto__,__v_isRef,__isVue"),ni=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(lr)),_a=hs(),va=hs(!1,!0),ba=hs(!0),ya=hs(!0,!0),to=xa();function xa(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=Q(this);for(let o=0,i=this.length;o<i;o++)Ie(s,"get",o+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(Q)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Mt();const s=Q(this)[t].apply(this,n);return Ot(),s}}),e}function hs(e=!1,t=!1){return function(s,r,o){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&o===(e?t?ci:ai:t?li:ii).get(s))return s;const i=D(s);if(!e&&i&&G(to,r))return Reflect.get(to,r,o);const l=Reflect.get(s,r,o);return(lr(r)?ni.has(r):ma(r))||(e||Ie(s,"get",r),t)?l:ge(l)?!i||!cr(r)?l.value:l:pe(l)?e?pr(l):Ln(l):l}}const wa=si(),ka=si(!0);function si(e=!1){return function(n,s,r,o){let i=n[s];if(Yt(i)&&ge(i)&&!ge(r))return!1;if(!e&&!Yt(r)&&(hr(r)||(r=Q(r),i=Q(i)),!D(n)&&ge(i)&&!ge(r)))return i.value=r,!0;const l=D(n)&&cr(s)?Number(s)<n.length:G(n,s),a=Reflect.set(n,s,r,o);return n===Q(o)&&(l?wn(r,i)&&nt(n,"set",s,r):nt(n,"add",s,r)),a}}function Ca(e,t){const n=G(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&nt(e,"delete",t,void 0),s}function Ta(e,t){const n=Reflect.has(e,t);return(!lr(t)||!ni.has(t))&&Ie(e,"has",t),n}function Ea(e){return Ie(e,"iterate",D(e)?"length":At),Reflect.ownKeys(e)}const ri={get:_a,set:wa,deleteProperty:Ca,has:Ta,ownKeys:Ea},oi={get:ba,set(e,t){return!0},deleteProperty(e,t){return!0}},$a=de({},ri,{get:va,set:ka}),Aa=de({},oi,{get:ya}),dr=e=>e,gs=e=>Reflect.getPrototypeOf(e);function jn(e,t,n=!1,s=!1){e=e.__v_raw;const r=Q(e),o=Q(t);t!==o&&!n&&Ie(r,"get",t),!n&&Ie(r,"get",o);const{has:i}=gs(r),l=s?dr:n?mr:kn;if(i.call(r,t))return l(e.get(t));if(i.call(r,o))return l(e.get(o));e!==r&&e.get(t)}function Bn(e,t=!1){const n=this.__v_raw,s=Q(n),r=Q(e);return e!==r&&!t&&Ie(s,"has",e),!t&&Ie(s,"has",r),e===r?n.has(e):n.has(e)||n.has(r)}function Kn(e,t=!1){return e=e.__v_raw,!t&&Ie(Q(e),"iterate",At),Reflect.get(e,"size",e)}function no(e){e=Q(e);const t=Q(this);return gs(t).has.call(t,e)||(t.add(e),nt(t,"add",e,e)),this}function so(e,t){t=Q(t);const n=Q(this),{has:s,get:r}=gs(n);let o=s.call(n,e);o||(e=Q(e),o=s.call(n,e));const i=r.call(n,e);return n.set(e,t),o?wn(t,i)&&nt(n,"set",e,t):nt(n,"add",e,t),this}function ro(e){const t=Q(this),{has:n,get:s}=gs(t);let r=n.call(t,e);r||(e=Q(e),r=n.call(t,e)),s&&s.call(t,e);const o=t.delete(e);return r&&nt(t,"delete",e,void 0),o}function oo(){const e=Q(this),t=e.size!==0,n=e.clear();return t&&nt(e,"clear",void 0,void 0),n}function Un(e,t){return function(s,r){const o=this,i=o.__v_raw,l=Q(i),a=t?dr:e?mr:kn;return!e&&Ie(l,"iterate",At),i.forEach((c,f)=>s.call(r,a(c),a(f),o))}}function Vn(e,t,n){return function(...s){const r=this.__v_raw,o=Q(r),i=qt(o),l=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,c=r[e](...s),f=n?dr:t?mr:kn;return!t&&Ie(o,"iterate",a?Bs:At),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:l?[f(d[0]),f(d[1])]:f(d),done:h}},[Symbol.iterator](){return this}}}}function lt(e){return function(...t){return e==="delete"?!1:this}}function Sa(){const e={get(o){return jn(this,o)},get size(){return Kn(this)},has:Bn,add:no,set:so,delete:ro,clear:oo,forEach:Un(!1,!1)},t={get(o){return jn(this,o,!1,!0)},get size(){return Kn(this)},has:Bn,add:no,set:so,delete:ro,clear:oo,forEach:Un(!1,!0)},n={get(o){return jn(this,o,!0)},get size(){return Kn(this,!0)},has(o){return Bn.call(this,o,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:Un(!0,!1)},s={get(o){return jn(this,o,!0,!0)},get size(){return Kn(this,!0)},has(o){return Bn.call(this,o,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:Un(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Vn(o,!1,!1),n[o]=Vn(o,!0,!1),t[o]=Vn(o,!1,!0),s[o]=Vn(o,!0,!0)}),[e,n,t,s]}const[Ra,La,Pa,Fa]=Sa();function ms(e,t){const n=t?e?Fa:Pa:e?La:Ra;return(s,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(G(n,r)&&r in s?n:s,r,o)}const Ia={get:ms(!1,!1)},Ma={get:ms(!1,!0)},Oa={get:ms(!0,!1)},Na={get:ms(!0,!0)},ii=new WeakMap,li=new WeakMap,ai=new WeakMap,ci=new WeakMap;function Da(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ha(e){return e.__v_skip||!Object.isExtensible(e)?0:Da(oa(e))}function Ln(e){return Yt(e)?e:_s(e,!1,ri,Ia,ii)}function ui(e){return _s(e,!1,$a,Ma,li)}function pr(e){return _s(e,!0,oi,Oa,ai)}function ja(e){return _s(e,!0,Aa,Na,ci)}function _s(e,t,n,s,r){if(!pe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=r.get(e);if(o)return o;const i=Ha(e);if(i===0)return e;const l=new Proxy(e,i===2?s:n);return r.set(e,l),l}function St(e){return Yt(e)?St(e.__v_raw):!!(e&&e.__v_isReactive)}function Yt(e){return!!(e&&e.__v_isReadonly)}function hr(e){return!!(e&&e.__v_isShallow)}function gr(e){return St(e)||Yt(e)}function Q(e){const t=e&&e.__v_raw;return t?Q(t):e}function Rt(e){return Qn(e,"__v_skip",!0),e}const kn=e=>pe(e)?Ln(e):e,mr=e=>pe(e)?pr(e):e;function _r(e){dt&&He&&(e=Q(e),ti(e.dep||(e.dep=fr())))}function vs(e,t){e=Q(e),e.dep&&Ks(e.dep)}function ge(e){return!!(e&&e.__v_isRef===!0)}function $e(e){return di(e,!1)}function fi(e){return di(e,!0)}function di(e,t){return ge(e)?e:new Ba(e,t)}class Ba{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Q(t),this._value=n?t:kn(t)}get value(){return _r(this),this._value}set value(t){t=this.__v_isShallow?t:Q(t),wn(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:kn(t),vs(this))}}function Ka(e){vs(e)}function L(e){return ge(e)?e.value:e}const Ua={get:(e,t,n)=>L(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return ge(r)&&!ge(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function vr(e){return St(e)?e:new Proxy(e,Ua)}class Va{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=t(()=>_r(this),()=>vs(this));this._get=n,this._set=s}get value(){return this._get()}set value(t){this._set(t)}}function Wa(e){return new Va(e)}function br(e){const t=D(e)?new Array(e.length):{};for(const n in e)t[n]=pi(e,n);return t}class qa{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function pi(e,t,n){const s=e[t];return ge(s)?s:new qa(e,t,n)}class za{constructor(t,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Rn(t,()=>{this._dirty||(this._dirty=!0,vs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=Q(this);return _r(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ja(e,t,n=!1){let s,r;const o=q(e);return o?(s=e,r=je):(s=e.get,r=e.set),new za(s,r,o||!r,n)}const mn=[];function hi(e,...t){Mt();const n=mn.length?mn[mn.length-1].component:null,s=n&&n.appContext.config.warnHandler,r=Ya();if(s)We(s,n,11,[e+t.join(""),n&&n.proxy,r.map(({vnode:o})=>`at <${ol(n,o.type)}>`).join(`
`),r]);else{const o=[`[Vue warn]: ${e}`,...t];r.length&&o.push(`
`,...Xa(r)),console.warn(...o)}Ot()}function Ya(){let e=mn[mn.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const s=e.component&&e.component.parent;e=s&&s.vnode}return t}function Xa(e){const t=[];return e.forEach((n,s)=>{t.push(...s===0?[]:[`
`],...Za(n))}),t}function Za({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",s=e.component?e.component.parent==null:!1,r=` at <${ol(e.component,e.type,s)}`,o=">"+n;return e.props?[r,...Qa(e.props),o]:[r+o]}function Qa(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(s=>{t.push(...gi(s,e[s]))}),n.length>3&&t.push(" ..."),t}function gi(e,t,n){return ce(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:ge(t)?(t=gi(e,Q(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):q(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=Q(t),n?t:[`${e}=`,t])}function We(e,t,n,s){let r;try{r=s?e(...s):e()}catch(o){Nt(o,t,n)}return r}function Pe(e,t,n,s){if(q(e)){const o=We(e,t,n,s);return o&&ar(o)&&o.catch(i=>{Nt(i,t,n)}),o}const r=[];for(let o=0;o<e.length;o++)r.push(Pe(e[o],t,n,s));return r}function Nt(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let o=t.parent;const i=t.proxy,l=n;for(;o;){const c=o.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,i,l)===!1)return}o=o.parent}const a=t.appContext.config.errorHandler;if(a){We(a,null,10,[e,i,l]);return}}Ga(e,n,r,s)}function Ga(e,t,n,s=!0){console.error(e)}let Gn=!1,Us=!1;const Le=[];let Qe=0;const _n=[];let dn=null,Kt=0;const vn=[];let ut=null,Ut=0;const mi=Promise.resolve();let yr=null,Vs=null;function Pn(e){const t=yr||mi;return e?t.then(this?e.bind(this):e):t}function ec(e){let t=Qe+1,n=Le.length;for(;t<n;){const s=t+n>>>1;Cn(Le[s])<e?t=s+1:n=s}return t}function xr(e){(!Le.length||!Le.includes(e,Gn&&e.allowRecurse?Qe+1:Qe))&&e!==Vs&&(e.id==null?Le.push(e):Le.splice(ec(e.id),0,e),_i())}function _i(){!Gn&&!Us&&(Us=!0,yr=mi.then(bi))}function tc(e){const t=Le.indexOf(e);t>Qe&&Le.splice(t,1)}function vi(e,t,n,s){D(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?s+1:s))&&n.push(e),_i()}function nc(e){vi(e,dn,_n,Kt)}function wr(e){vi(e,ut,vn,Ut)}function kr(e,t=null){if(_n.length){for(Vs=t,dn=[...new Set(_n)],_n.length=0,Kt=0;Kt<dn.length;Kt++)dn[Kt]();dn=null,Kt=0,Vs=null,kr(e,t)}}function es(e){if(vn.length){const t=[...new Set(vn)];if(vn.length=0,ut){ut.push(...t);return}for(ut=t,ut.sort((n,s)=>Cn(n)-Cn(s)),Ut=0;Ut<ut.length;Ut++)ut[Ut]();ut=null,Ut=0}}const Cn=e=>e.id==null?1/0:e.id;function bi(e){Us=!1,Gn=!0,kr(e),Le.sort((n,s)=>Cn(n)-Cn(s));const t=je;try{for(Qe=0;Qe<Le.length;Qe++){const n=Le[Qe];n&&n.active!==!1&&We(n,null,14)}}finally{Qe=0,Le.length=0,es(),Gn=!1,yr=null,(Le.length||_n.length||vn.length)&&bi(e)}}let Vt,Wn=[];function yi(e,t){var n,s;Vt=e,Vt?(Vt.enabled=!0,Wn.forEach(({event:r,args:o})=>Vt.emit(r,...o)),Wn=[]):typeof window!="undefined"&&window.HTMLElement&&!(!((s=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||s===void 0)&&s.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(o=>{yi(o,t)}),setTimeout(()=>{Vt||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Wn=[])},3e3)):Wn=[]}function sc(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ne;let r=n;const o=t.startsWith("update:"),i=o&&t.slice(7);if(i&&i in s){const f=`${i==="modelValue"?"model":i}Modifiers`,{number:d,trim:h}=s[f]||ne;h?r=n.map(y=>y.trim()):d&&(r=n.map(gt))}let l,a=s[l=gn(t)]||s[l=gn(Fe(t))];!a&&o&&(a=s[l=gn(Ve(t))]),a&&Pe(a,e,6,r);const c=s[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Pe(c,e,6,r)}}function xi(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const o=e.emits;let i={},l=!1;if(!q(e)){const a=c=>{const f=xi(c,t,!0);f&&(l=!0,de(i,f))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!o&&!l?(s.set(e,null),null):(D(o)?o.forEach(a=>i[a]=null):de(i,o),s.set(e,i),i)}function bs(e,t){return!e||!An(t)?!1:(t=t.slice(2).replace(/Once$/,""),G(e,t[0].toLowerCase()+t.slice(1))||G(e,Ve(t))||G(e,t))}let we=null,ys=null;function Tn(e){const t=we;return we=e,ys=e&&e.type.__scopeId||null,t}function Cr(e){ys=e}function Tr(){ys=null}const rc=e=>Oe;function Oe(e,t=we,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&Ys(-1);const o=Tn(t),i=e(...r);return Tn(o),s._d&&Ys(1),i};return s._n=!0,s._c=!0,s._d=!0,s}function Xn(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:o,propsOptions:[i],slots:l,attrs:a,emit:c,render:f,renderCache:d,data:h,setupState:y,ctx:b,inheritAttrs:P}=e;let g,x;const m=Tn(e);try{if(n.shapeFlag&4){const T=r||s;g=Re(f.call(T,T,d,o,y,h,b)),x=a}else{const T=t;g=Re(T.length>1?T(o,{attrs:a,slots:l,emit:c}):T(o,null)),x=t.props?a:ic(a)}}catch(T){yn.length=0,Nt(T,e,1),g=V(ke)}let v=g;if(x&&P!==!1){const T=Object.keys(x),{shapeFlag:I}=v;T.length&&I&7&&(i&&T.some(or)&&(x=lc(x,i)),v=st(v,x))}return n.dirs&&(v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),g=v,Tn(m),g}function oc(e){let t;for(let n=0;n<e.length;n++){const s=e[n];if(_t(s)){if(s.type!==ke||s.children==="v-if"){if(t)return;t=s}}else return}return t}const ic=e=>{let t;for(const n in e)(n==="class"||n==="style"||An(n))&&((t||(t={}))[n]=e[n]);return t},lc=(e,t)=>{const n={};for(const s in e)(!or(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function ac(e,t,n){const{props:s,children:r,component:o}=e,{props:i,children:l,patchFlag:a}=t,c=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?io(s,i,c):!!i;if(a&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const h=f[d];if(i[h]!==s[h]&&!bs(c,h))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===i?!1:s?i?io(s,i,c):!0:!!i;return!1}function io(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(t[o]!==e[o]&&!bs(n,o))return!0}return!1}function Er({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const cc=e=>e.__isSuspense,uc={name:"Suspense",__isSuspense:!0,process(e,t,n,s,r,o,i,l,a,c){e==null?dc(t,n,s,r,o,i,l,a,c):pc(e,t,n,s,r,i,l,a,c)},hydrate:hc,create:$r,normalize:gc},fc=uc;function En(e,t){const n=e.props&&e.props[t];q(n)&&n()}function dc(e,t,n,s,r,o,i,l,a){const{p:c,o:{createElement:f}}=a,d=f("div"),h=e.suspense=$r(e,r,s,t,d,n,o,i,l,a);c(null,h.pendingBranch=e.ssContent,d,null,s,h,o,i),h.deps>0?(En(e,"onPending"),En(e,"onFallback"),c(null,e.ssFallback,t,n,s,null,o,i),Jt(h,e.ssFallback)):h.resolve()}function pc(e,t,n,s,r,o,i,l,{p:a,um:c,o:{createElement:f}}){const d=t.suspense=e.suspense;d.vnode=t,t.el=e.el;const h=t.ssContent,y=t.ssFallback,{activeBranch:b,pendingBranch:P,isInFallback:g,isHydrating:x}=d;if(P)d.pendingBranch=h,Ue(h,P)?(a(P,h,d.hiddenContainer,null,r,d,o,i,l),d.deps<=0?d.resolve():g&&(a(b,y,n,s,r,null,o,i,l),Jt(d,y))):(d.pendingId++,x?(d.isHydrating=!1,d.activeBranch=P):c(P,r,d),d.deps=0,d.effects.length=0,d.hiddenContainer=f("div"),g?(a(null,h,d.hiddenContainer,null,r,d,o,i,l),d.deps<=0?d.resolve():(a(b,y,n,s,r,null,o,i,l),Jt(d,y))):b&&Ue(h,b)?(a(b,h,n,s,r,d,o,i,l),d.resolve(!0)):(a(null,h,d.hiddenContainer,null,r,d,o,i,l),d.deps<=0&&d.resolve()));else if(b&&Ue(h,b))a(b,h,n,s,r,d,o,i,l),Jt(d,h);else if(En(t,"onPending"),d.pendingBranch=h,d.pendingId++,a(null,h,d.hiddenContainer,null,r,d,o,i,l),d.deps<=0)d.resolve();else{const{timeout:m,pendingId:v}=d;m>0?setTimeout(()=>{d.pendingId===v&&d.fallback(y)},m):m===0&&d.fallback(y)}}function $r(e,t,n,s,r,o,i,l,a,c,f=!1){const{p:d,m:h,um:y,n:b,o:{parentNode:P,remove:g}}=c,x=gt(e.props&&e.props.timeout),m={vnode:e,parent:t,parentComponent:n,isSVG:i,container:s,hiddenContainer:r,anchor:o,deps:0,pendingId:0,timeout:typeof x=="number"?x:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:f,isUnmounted:!1,effects:[],resolve(v=!1){const{vnode:T,activeBranch:I,pendingBranch:O,pendingId:E,effects:H,parentComponent:j,container:W}=m;if(m.isHydrating)m.isHydrating=!1;else if(!v){const X=I&&O.transition&&O.transition.mode==="out-in";X&&(I.transition.afterLeave=()=>{E===m.pendingId&&h(O,W,re,0)});let{anchor:re}=m;I&&(re=b(I),y(I,j,m,!0)),X||h(O,W,re,0)}Jt(m,O),m.pendingBranch=null,m.isInFallback=!1;let J=m.parent,A=!1;for(;J;){if(J.pendingBranch){J.effects.push(...H),A=!0;break}J=J.parent}A||wr(H),m.effects=[],En(T,"onResolve")},fallback(v){if(!m.pendingBranch)return;const{vnode:T,activeBranch:I,parentComponent:O,container:E,isSVG:H}=m;En(T,"onFallback");const j=b(I),W=()=>{!m.isInFallback||(d(null,v,E,j,O,null,H,l,a),Jt(m,v))},J=v.transition&&v.transition.mode==="out-in";J&&(I.transition.afterLeave=W),m.isInFallback=!0,y(I,O,null,!0),J||W()},move(v,T,I){m.activeBranch&&h(m.activeBranch,v,T,I),m.container=v},next(){return m.activeBranch&&b(m.activeBranch)},registerDep(v,T){const I=!!m.pendingBranch;I&&m.deps++;const O=v.vnode.el;v.asyncDep.catch(E=>{Nt(E,v,0)}).then(E=>{if(v.isUnmounted||m.isUnmounted||m.pendingId!==v.suspenseId)return;v.asyncResolved=!0;const{vnode:H}=v;Qs(v,E,!1),O&&(H.el=O);const j=!O&&v.subTree.el;T(v,H,P(O||v.subTree.el),O?null:b(v.subTree),m,i,a),j&&g(j),Er(v,H.el),I&&--m.deps===0&&m.resolve()})},unmount(v,T){m.isUnmounted=!0,m.activeBranch&&y(m.activeBranch,n,v,T),m.pendingBranch&&y(m.pendingBranch,n,v,T)}};return m}function hc(e,t,n,s,r,o,i,l,a){const c=t.suspense=$r(t,s,n,e.parentNode,document.createElement("div"),null,r,o,i,l,!0),f=a(e,c.pendingBranch=t.ssContent,n,c,o,i);return c.deps===0&&c.resolve(),f}function gc(e){const{shapeFlag:t,children:n}=e,s=t&32;e.ssContent=lo(s?n.default:n),e.ssFallback=s?lo(n.fallback):V(ke)}function lo(e){let t;if(q(e)){const n=en&&e._c;n&&(e._d=!1,M()),e=e(),n&&(e._d=!0,t=qe,Yi())}return D(e)&&(e=oc(e)),e=Re(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function wi(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):wr(e)}function Jt(e,t){e.activeBranch=t;const{vnode:n,parentComponent:s}=e,r=n.el=t.el;s&&s.subTree===n&&(s.vnode.el=r,Er(s,r))}function ki(e,t){if(ve){let n=ve.provides;const s=ve.parent&&ve.parent.provides;s===n&&(n=ve.provides=Object.create(s)),n[e]=t}}function Lt(e,t,n=!1){const s=ve||we;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&q(t)?t.call(s.proxy):t}}function Ar(e,t){return Fn(e,null,t)}function Ci(e,t){return Fn(e,null,{flush:"post"})}function mc(e,t){return Fn(e,null,{flush:"sync"})}const ao={};function et(e,t,n){return Fn(e,t,n)}function Fn(e,t,{immediate:n,deep:s,flush:r,onTrack:o,onTrigger:i}=ne){const l=ve;let a,c=!1,f=!1;if(ge(e)?(a=()=>e.value,c=hr(e)):St(e)?(a=()=>e,s=!0):D(e)?(f=!0,c=e.some(St),a=()=>e.map(x=>{if(ge(x))return x.value;if(St(x))return $t(x);if(q(x))return We(x,l,2)})):q(e)?t?a=()=>We(e,l,2):a=()=>{if(!(l&&l.isUnmounted))return d&&d(),Pe(e,l,3,[h])}:a=je,t&&s){const x=a;a=()=>$t(x())}let d,h=x=>{d=g.onStop=()=>{We(x,l,4)}};if(tn)return h=je,t?n&&Pe(t,l,3,[a(),f?[]:void 0,h]):a(),je;let y=f?[]:ao;const b=()=>{if(!!g.active)if(t){const x=g.run();(s||c||(f?x.some((m,v)=>wn(m,y[v])):wn(x,y)))&&(d&&d(),Pe(t,l,3,[x,y===ao?void 0:y,h]),y=x)}else g.run()};b.allowRecurse=!!t;let P;r==="sync"?P=b:r==="post"?P=()=>xe(b,l&&l.suspense):P=()=>{!l||l.isMounted?nc(b):b()};const g=new Rn(a,P);return t?n?b():y=g.run():r==="post"?xe(g.run.bind(g),l&&l.suspense):g.run(),()=>{g.stop(),l&&l.scope&&ir(l.scope.effects,g)}}function _c(e,t,n){const s=this.proxy,r=ce(e)?e.includes(".")?Ti(s,e):()=>s[e]:e.bind(s,s);let o;q(t)?o=t:(o=t.handler,n=t);const i=ve;vt(this);const l=Fn(r,o.bind(s),n);return i?vt(i):pt(),l}function Ti(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function $t(e,t){if(!pe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ge(e))$t(e.value,t);else if(D(e))for(let n=0;n<e.length;n++)$t(e[n],t);else if(It(e)||qt(e))e.forEach(n=>{$t(n,t)});else if(Xo(e))for(const n in e)$t(e[n],t);return e}function Sr(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ze(()=>{e.isMounted=!0}),ks(()=>{e.isUnmounting=!0}),e}const Me=[Function,Array],vc={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Me,onEnter:Me,onAfterEnter:Me,onEnterCancelled:Me,onBeforeLeave:Me,onLeave:Me,onAfterLeave:Me,onLeaveCancelled:Me,onBeforeAppear:Me,onAppear:Me,onAfterAppear:Me,onAppearCancelled:Me},setup(e,{slots:t}){const n=yt(),s=Sr();let r;return()=>{const o=t.default&&xs(t.default(),!0);if(!o||!o.length)return;let i=o[0];if(o.length>1){for(const P of o)if(P.type!==ke){i=P;break}}const l=Q(e),{mode:a}=l;if(s.isLeaving)return Rs(i);const c=co(i);if(!c)return Rs(i);const f=Xt(c,l,s,n);Ft(c,f);const d=n.subTree,h=d&&co(d);let y=!1;const{getTransitionKey:b}=c.type;if(b){const P=b();r===void 0?r=P:P!==r&&(r=P,y=!0)}if(h&&h.type!==ke&&(!Ue(c,h)||y)){const P=Xt(h,l,s,n);if(Ft(h,P),a==="out-in")return s.isLeaving=!0,P.afterLeave=()=>{s.isLeaving=!1,n.update()},Rs(i);a==="in-out"&&c.type!==ke&&(P.delayLeave=(g,x,m)=>{const v=Ei(s,h);v[String(h.key)]=h,g._leaveCb=()=>{x(),g._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=m})}return i}}},Rr=vc;function Ei(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Xt(e,t,n,s){const{appear:r,mode:o,persisted:i=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:y,onLeaveCancelled:b,onBeforeAppear:P,onAppear:g,onAfterAppear:x,onAppearCancelled:m}=t,v=String(e.key),T=Ei(n,e),I=(E,H)=>{E&&Pe(E,s,9,H)},O={mode:o,persisted:i,beforeEnter(E){let H=l;if(!n.isMounted)if(r)H=P||l;else return;E._leaveCb&&E._leaveCb(!0);const j=T[v];j&&Ue(e,j)&&j.el._leaveCb&&j.el._leaveCb(),I(H,[E])},enter(E){let H=a,j=c,W=f;if(!n.isMounted)if(r)H=g||a,j=x||c,W=m||f;else return;let J=!1;const A=E._enterCb=X=>{J||(J=!0,X?I(W,[E]):I(j,[E]),O.delayedLeave&&O.delayedLeave(),E._enterCb=void 0)};H?(H(E,A),H.length<=1&&A()):A()},leave(E,H){const j=String(e.key);if(E._enterCb&&E._enterCb(!0),n.isUnmounting)return H();I(d,[E]);let W=!1;const J=E._leaveCb=A=>{W||(W=!0,H(),A?I(b,[E]):I(y,[E]),E._leaveCb=void 0,T[j]===e&&delete T[j])};T[j]=e,h?(h(E,J),h.length<=1&&J()):J()},clone(E){return Xt(E,t,n,s)}};return O}function Rs(e){if(In(e))return e=st(e),e.children=null,e}function co(e){return In(e)?e.children?e.children[0]:void 0:e}function Ft(e,t){e.shapeFlag&6&&e.component?Ft(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function xs(e,t=!1,n){let s=[],r=0;for(let o=0;o<e.length;o++){let i=e[o];const l=n==null?i.key:String(n)+String(i.key!=null?i.key:o);i.type===fe?(i.patchFlag&128&&r++,s=s.concat(xs(i.children,t,l))):(t||i.type!==ke)&&s.push(l!=null?st(i,{key:l}):i)}if(r>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}function ae(e){return q(e)?{setup:e,name:e.name}:e}const Zt=e=>!!e.type.__asyncLoader;function bc(e){q(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:s,delay:r=200,timeout:o,suspensible:i=!0,onError:l}=e;let a=null,c,f=0;const d=()=>(f++,a=null,h()),h=()=>{let y;return a||(y=a=t().catch(b=>{if(b=b instanceof Error?b:new Error(String(b)),l)return new Promise((P,g)=>{l(b,()=>P(d()),()=>g(b),f+1)});throw b}).then(b=>y!==a&&a?a:(b&&(b.__esModule||b[Symbol.toStringTag]==="Module")&&(b=b.default),c=b,b)))};return ae({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return c},setup(){const y=ve;if(c)return()=>Ls(c,y);const b=m=>{a=null,Nt(m,y,13,!s)};if(i&&y.suspense||tn)return h().then(m=>()=>Ls(m,y)).catch(m=>(b(m),()=>s?V(s,{error:m}):null));const P=$e(!1),g=$e(),x=$e(!!r);return r&&setTimeout(()=>{x.value=!1},r),o!=null&&setTimeout(()=>{if(!P.value&&!g.value){const m=new Error(`Async component timed out after ${o}ms.`);b(m),g.value=m}},o),h().then(()=>{P.value=!0,y.parent&&In(y.parent.vnode)&&xr(y.parent.update)}).catch(m=>{b(m),g.value=m}),()=>{if(P.value&&c)return Ls(c,y);if(g.value&&s)return V(s,{error:g.value});if(n&&!x.value)return V(n)}}})}function Ls(e,{vnode:{ref:t,props:n,children:s}}){const r=V(e,n,s);return r.ref=t,r}const In=e=>e.type.__isKeepAlive,yc={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=yt(),s=n.ctx;if(!s.renderer)return t.default;const r=new Map,o=new Set;let i=null;const l=n.suspense,{renderer:{p:a,m:c,um:f,o:{createElement:d}}}=s,h=d("div");s.activate=(m,v,T,I,O)=>{const E=m.component;c(m,v,T,0,l),a(E.vnode,m,v,T,E,l,I,m.slotScopeIds,O),xe(()=>{E.isDeactivated=!1,E.a&&zt(E.a);const H=m.props&&m.props.onVnodeMounted;H&&Ee(H,E.parent,m)},l)},s.deactivate=m=>{const v=m.component;c(m,h,null,1,l),xe(()=>{v.da&&zt(v.da);const T=m.props&&m.props.onVnodeUnmounted;T&&Ee(T,v.parent,m),v.isDeactivated=!0},l)};function y(m){Ps(m),f(m,n,l,!0)}function b(m){r.forEach((v,T)=>{const I=os(v.type);I&&(!m||!m(I))&&P(T)})}function P(m){const v=r.get(m);!i||v.type!==i.type?y(v):i&&Ps(i),r.delete(m),o.delete(m)}et(()=>[e.include,e.exclude],([m,v])=>{m&&b(T=>pn(m,T)),v&&b(T=>!pn(v,T))},{flush:"post",deep:!0});let g=null;const x=()=>{g!=null&&r.set(g,Fs(n.subTree))};return ze(x),Mn(x),ks(()=>{r.forEach(m=>{const{subTree:v,suspense:T}=n,I=Fs(v);if(m.type===I.type){Ps(I);const O=I.component.da;O&&xe(O,T);return}y(m)})}),()=>{if(g=null,!t.default)return null;const m=t.default(),v=m[0];if(m.length>1)return i=null,m;if(!_t(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return i=null,v;let T=Fs(v);const I=T.type,O=os(Zt(T)?T.type.__asyncResolved||{}:I),{include:E,exclude:H,max:j}=e;if(E&&(!O||!pn(E,O))||H&&O&&pn(H,O))return i=T,v;const W=T.key==null?I:T.key,J=r.get(W);return T.el&&(T=st(T),v.shapeFlag&128&&(v.ssContent=T)),g=W,J?(T.el=J.el,T.component=J.component,T.transition&&Ft(T,T.transition),T.shapeFlag|=512,o.delete(W),o.add(W)):(o.add(W),j&&o.size>parseInt(j,10)&&P(o.values().next().value)),T.shapeFlag|=256,i=T,v}}},xc=yc;function pn(e,t){return D(e)?e.some(n=>pn(n,t)):ce(e)?e.split(",").includes(t):e.test?e.test(t):!1}function $i(e,t){Si(e,"a",t)}function Ai(e,t){Si(e,"da",t)}function Si(e,t,n=ve){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(ws(t,s,n),n){let r=n.parent;for(;r&&r.parent;)In(r.parent.vnode)&&wc(s,t,n,r),r=r.parent}}function wc(e,t,n,s){const r=ws(t,e,s,!0);rn(()=>{ir(s[t],r)},n)}function Ps(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function Fs(e){return e.shapeFlag&128?e.ssContent:e}function ws(e,t,n=ve,s=!1){if(n){const r=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;Mt(),vt(n);const l=Pe(t,n,e,i);return pt(),Ot(),l});return s?r.unshift(o):r.push(o),o}}const ot=e=>(t,n=ve)=>(!tn||e==="sp")&&ws(e,t,n),Ri=ot("bm"),ze=ot("m"),Li=ot("bu"),Mn=ot("u"),ks=ot("bum"),rn=ot("um"),Pi=ot("sp"),Fi=ot("rtg"),Ii=ot("rtc");function Mi(e,t=ve){ws("ec",e,t)}let Ws=!0;function kc(e){const t=Ni(e),n=e.proxy,s=e.ctx;Ws=!1,t.beforeCreate&&uo(t.beforeCreate,e,"bc");const{data:r,computed:o,methods:i,watch:l,provide:a,inject:c,created:f,beforeMount:d,mounted:h,beforeUpdate:y,updated:b,activated:P,deactivated:g,beforeDestroy:x,beforeUnmount:m,destroyed:v,unmounted:T,render:I,renderTracked:O,renderTriggered:E,errorCaptured:H,serverPrefetch:j,expose:W,inheritAttrs:J,components:A,directives:X,filters:re}=t;if(c&&Cc(c,s,null,e.appContext.config.unwrapInjectedRef),i)for(const ue in i){const oe=i[ue];q(oe)&&(s[ue]=oe.bind(n))}if(r){const ue=r.call(n,n);pe(ue)&&(e.data=Ln(ue))}if(Ws=!0,o)for(const ue in o){const oe=o[ue],Je=q(oe)?oe.bind(n,n):q(oe.get)?oe.get.bind(n,n):je,$s=!q(oe)&&q(oe.set)?oe.set.bind(n):je,ln=Z({get:Je,set:$s});Object.defineProperty(s,ue,{enumerable:!0,configurable:!0,get:()=>ln.value,set:Ht=>ln.value=Ht})}if(l)for(const ue in l)Oi(l[ue],s,n,ue);if(a){const ue=q(a)?a.call(n):a;Reflect.ownKeys(ue).forEach(oe=>{ki(oe,ue[oe])})}f&&uo(f,e,"c");function ye(ue,oe){D(oe)?oe.forEach(Je=>ue(Je.bind(n))):oe&&ue(oe.bind(n))}if(ye(Ri,d),ye(ze,h),ye(Li,y),ye(Mn,b),ye($i,P),ye(Ai,g),ye(Mi,H),ye(Ii,O),ye(Fi,E),ye(ks,m),ye(rn,T),ye(Pi,j),D(W))if(W.length){const ue=e.exposed||(e.exposed={});W.forEach(oe=>{Object.defineProperty(ue,oe,{get:()=>n[oe],set:Je=>n[oe]=Je})})}else e.exposed||(e.exposed={});I&&e.render===je&&(e.render=I),J!=null&&(e.inheritAttrs=J),A&&(e.components=A),X&&(e.directives=X)}function Cc(e,t,n=je,s=!1){D(e)&&(e=qs(e));for(const r in e){const o=e[r];let i;pe(o)?"default"in o?i=Lt(o.from||r,o.default,!0):i=Lt(o.from||r):i=Lt(o),ge(i)&&s?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):t[r]=i}}function uo(e,t,n){Pe(D(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Oi(e,t,n,s){const r=s.includes(".")?Ti(n,s):()=>n[s];if(ce(e)){const o=t[e];q(o)&&et(r,o)}else if(q(e))et(r,e.bind(n));else if(pe(e))if(D(e))e.forEach(o=>Oi(o,t,n,s));else{const o=q(e.handler)?e.handler.bind(n):t[e.handler];q(o)&&et(r,o,e)}}function Ni(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,l=o.get(t);let a;return l?a=l:!r.length&&!n&&!s?a=t:(a={},r.length&&r.forEach(c=>ts(a,c,i,!0)),ts(a,t,i)),o.set(t,a),a}function ts(e,t,n,s=!1){const{mixins:r,extends:o}=t;o&&ts(e,o,n,!0),r&&r.forEach(i=>ts(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const l=Tc[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const Tc={data:fo,props:Ct,emits:Ct,methods:Ct,computed:Ct,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:Ct,directives:Ct,watch:$c,provide:fo,inject:Ec};function fo(e,t){return t?e?function(){return de(q(e)?e.call(this,this):e,q(t)?t.call(this,this):t)}:t:e}function Ec(e,t){return Ct(qs(e),qs(t))}function qs(e){if(D(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Te(e,t){return e?[...new Set([].concat(e,t))]:t}function Ct(e,t){return e?de(de(Object.create(null),e),t):t}function $c(e,t){if(!e)return t;if(!t)return e;const n=de(Object.create(null),e);for(const s in t)n[s]=Te(e[s],t[s]);return n}function Ac(e,t,n,s=!1){const r={},o={};Qn(o,Cs,1),e.propsDefaults=Object.create(null),Di(e,t,r,o);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);n?e.props=s?r:ui(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function Sc(e,t,n,s){const{props:r,attrs:o,vnode:{patchFlag:i}}=e,l=Q(r),[a]=e.propsOptions;let c=!1;if((s||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let h=f[d];if(bs(e.emitsOptions,h))continue;const y=t[h];if(a)if(G(o,h))y!==o[h]&&(o[h]=y,c=!0);else{const b=Fe(h);r[b]=zs(a,l,b,y,e,!1)}else y!==o[h]&&(o[h]=y,c=!0)}}}else{Di(e,t,r,o)&&(c=!0);let f;for(const d in l)(!t||!G(t,d)&&((f=Ve(d))===d||!G(t,f)))&&(a?n&&(n[d]!==void 0||n[f]!==void 0)&&(r[d]=zs(a,l,d,void 0,e,!0)):delete r[d]);if(o!==l)for(const d in o)(!t||!G(t,d)&&!0)&&(delete o[d],c=!0)}c&&nt(e,"set","$attrs")}function Di(e,t,n,s){const[r,o]=e.propsOptions;let i=!1,l;if(t)for(let a in t){if(hn(a))continue;const c=t[a];let f;r&&G(r,f=Fe(a))?!o||!o.includes(f)?n[f]=c:(l||(l={}))[f]=c:bs(e.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,i=!0)}if(o){const a=Q(n),c=l||ne;for(let f=0;f<o.length;f++){const d=o[f];n[d]=zs(r,a,d,c[d],e,!G(c,d))}}return i}function zs(e,t,n,s,r,o){const i=e[n];if(i!=null){const l=G(i,"default");if(l&&s===void 0){const a=i.default;if(i.type!==Function&&q(a)){const{propsDefaults:c}=r;n in c?s=c[n]:(vt(r),s=c[n]=a.call(null,t),pt())}else s=a}i[0]&&(o&&!l?s=!1:i[1]&&(s===""||s===Ve(n))&&(s=!0))}return s}function Hi(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const o=e.props,i={},l=[];let a=!1;if(!q(e)){const f=d=>{a=!0;const[h,y]=Hi(d,t,!0);de(i,h),y&&l.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!o&&!a)return s.set(e,Wt),Wt;if(D(o))for(let f=0;f<o.length;f++){const d=Fe(o[f]);po(d)&&(i[d]=ne)}else if(o)for(const f in o){const d=Fe(f);if(po(d)){const h=o[f],y=i[d]=D(h)||q(h)?{type:h}:h;if(y){const b=mo(Boolean,y.type),P=mo(String,y.type);y[0]=b>-1,y[1]=P<0||b<P,(b>-1||G(y,"default"))&&l.push(d)}}}const c=[i,l];return s.set(e,c),c}function po(e){return e[0]!=="$"}function ho(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function go(e,t){return ho(e)===ho(t)}function mo(e,t){return D(t)?t.findIndex(n=>go(n,e)):q(t)&&go(t,e)?0:-1}const ji=e=>e[0]==="_"||e==="$stable",Lr=e=>D(e)?e.map(Re):[Re(e)],Rc=(e,t,n)=>{const s=Oe((...r)=>Lr(t(...r)),n);return s._c=!1,s},Bi=(e,t,n)=>{const s=e._ctx;for(const r in e){if(ji(r))continue;const o=e[r];if(q(o))t[r]=Rc(r,o,s);else if(o!=null){const i=Lr(o);t[r]=()=>i}}},Ki=(e,t)=>{const n=Lr(t);e.slots.default=()=>n},Lc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Q(t),Qn(t,"_",n)):Bi(t,e.slots={})}else e.slots={},t&&Ki(e,t);Qn(e.slots,Cs,1)},Pc=(e,t,n)=>{const{vnode:s,slots:r}=e;let o=!0,i=ne;if(s.shapeFlag&32){const l=t._;l?n&&l===1?o=!1:(de(r,t),!n&&l===1&&delete r._):(o=!t.$stable,Bi(t,r)),i=t}else t&&(Ki(e,t),i={default:1});if(o)for(const l in r)!ji(l)&&!(l in i)&&delete r[l]};function Fc(e,t){const n=we;if(n===null)return e;const s=Ts(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[i,l,a,c=ne]=t[o];q(i)&&(i={mounted:i,updated:i}),i.deep&&$t(l),r.push({dir:i,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c})}return e}function Ke(e,t,n,s){const r=e.dirs,o=t&&t.dirs;for(let i=0;i<r.length;i++){const l=r[i];o&&(l.oldValue=o[i].value);let a=l.dir[s];a&&(Mt(),Pe(a,n,8,[e.el,l,e,t]),Ot())}}function Ui(){return{app:null,config:{isNativeTag:na,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ic=0;function Mc(e,t){return function(s,r=null){q(s)||(s=Object.assign({},s)),r!=null&&!pe(r)&&(r=null);const o=Ui(),i=new Set;let l=!1;const a=o.app={_uid:Ic++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:cl,get config(){return o.config},set config(c){},use(c,...f){return i.has(c)||(c&&q(c.install)?(i.add(c),c.install(a,...f)):q(c)&&(i.add(c),c(a,...f))),a},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),a},component(c,f){return f?(o.components[c]=f,a):o.components[c]},directive(c,f){return f?(o.directives[c]=f,a):o.directives[c]},mount(c,f,d){if(!l){const h=V(s,r);return h.appContext=o,f&&t?t(h,c):e(h,c,d),l=!0,a._container=c,c.__vue_app__=a,Ts(h.component)||h.component.proxy}},unmount(){l&&(e(null,a._container),delete a._container.__vue_app__)},provide(c,f){return o.provides[c]=f,a}};return a}}function ns(e,t,n,s,r=!1){if(D(e)){e.forEach((h,y)=>ns(h,t&&(D(t)?t[y]:t),n,s,r));return}if(Zt(s)&&!r)return;const o=s.shapeFlag&4?Ts(s.component)||s.component.proxy:s.el,i=r?null:o,{i:l,r:a}=e,c=t&&t.r,f=l.refs===ne?l.refs={}:l.refs,d=l.setupState;if(c!=null&&c!==a&&(ce(c)?(f[c]=null,G(d,c)&&(d[c]=null)):ge(c)&&(c.value=null)),q(a))We(a,l,12,[i,f]);else{const h=ce(a),y=ge(a);if(h||y){const b=()=>{if(e.f){const P=h?f[a]:a.value;r?D(P)&&ir(P,o):D(P)?P.includes(o)||P.push(o):h?(f[a]=[o],G(d,a)&&(d[a]=f[a])):(a.value=[o],e.k&&(f[e.k]=a.value))}else h?(f[a]=i,G(d,a)&&(d[a]=i)):ge(a)&&(a.value=i,e.k&&(f[e.k]=i))};i?(b.id=-1,xe(b,n)):b()}}}let at=!1;const qn=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",Is=e=>e.nodeType===8;function Oc(e){const{mt:t,p:n,o:{patchProp:s,nextSibling:r,parentNode:o,remove:i,insert:l,createComment:a}}=e,c=(g,x)=>{if(!x.hasChildNodes()){n(null,g,x),es();return}at=!1,f(x.firstChild,g,null,null,null),es(),at&&console.error("Hydration completed but contains mismatches.")},f=(g,x,m,v,T,I=!1)=>{const O=Is(g)&&g.data==="[",E=()=>b(g,x,m,v,T,O),{type:H,ref:j,shapeFlag:W}=x,J=g.nodeType;x.el=g;let A=null;switch(H){case Gt:J!==3?A=E():(g.data!==x.children&&(at=!0,g.data=x.children),A=r(g));break;case ke:J!==8||O?A=E():A=r(g);break;case Pt:if(J!==1)A=E();else{A=g;const X=!x.children.length;for(let re=0;re<x.staticCount;re++)X&&(x.children+=A.outerHTML),re===x.staticCount-1&&(x.anchor=A),A=r(A);return A}break;case fe:O?A=y(g,x,m,v,T,I):A=E();break;default:if(W&1)J!==1||x.type.toLowerCase()!==g.tagName.toLowerCase()?A=E():A=d(g,x,m,v,T,I);else if(W&6){x.slotScopeIds=T;const X=o(g);if(t(x,X,null,m,v,qn(X),I),A=O?P(g):r(g),Zt(x)){let re;O?(re=V(fe),re.anchor=A?A.previousSibling:X.lastChild):re=g.nodeType===3?on(""):V("div"),re.el=g,x.component.subTree=re}}else W&64?J!==8?A=E():A=x.type.hydrate(g,x,m,v,T,I,e,h):W&128&&(A=x.type.hydrate(g,x,m,v,qn(o(g)),T,I,e,f))}return j!=null&&ns(j,null,v,x),A},d=(g,x,m,v,T,I)=>{I=I||!!x.dynamicChildren;const{type:O,props:E,patchFlag:H,shapeFlag:j,dirs:W}=x,J=O==="input"&&W||O==="option";if(J||H!==-1){if(W&&Ke(x,null,m,"created"),E)if(J||!I||H&48)for(const X in E)(J&&X.endsWith("value")||An(X)&&!hn(X))&&s(g,X,null,E[X],!1,void 0,m);else E.onClick&&s(g,"onClick",null,E.onClick,!1,void 0,m);let A;if((A=E&&E.onVnodeBeforeMount)&&Ee(A,m,x),W&&Ke(x,null,m,"beforeMount"),((A=E&&E.onVnodeMounted)||W)&&wi(()=>{A&&Ee(A,m,x),W&&Ke(x,null,m,"mounted")},v),j&16&&!(E&&(E.innerHTML||E.textContent))){let X=h(g.firstChild,x,g,m,v,T,I);for(;X;){at=!0;const re=X;X=X.nextSibling,i(re)}}else j&8&&g.textContent!==x.children&&(at=!0,g.textContent=x.children)}return g.nextSibling},h=(g,x,m,v,T,I,O)=>{O=O||!!x.dynamicChildren;const E=x.children,H=E.length;for(let j=0;j<H;j++){const W=O?E[j]:E[j]=Re(E[j]);if(g)g=f(g,W,v,T,I,O);else{if(W.type===Gt&&!W.children)continue;at=!0,n(null,W,m,null,v,T,qn(m),I)}}return g},y=(g,x,m,v,T,I)=>{const{slotScopeIds:O}=x;O&&(T=T?T.concat(O):O);const E=o(g),H=h(r(g),x,E,m,v,T,I);return H&&Is(H)&&H.data==="]"?r(x.anchor=H):(at=!0,l(x.anchor=a("]"),E,H),H)},b=(g,x,m,v,T,I)=>{if(at=!0,x.el=null,I){const H=P(g);for(;;){const j=r(g);if(j&&j!==H)i(j);else break}}const O=r(g),E=o(g);return i(g),n(null,x,E,O,m,v,qn(E),T),O},P=g=>{let x=0;for(;g;)if(g=r(g),g&&Is(g)&&(g.data==="["&&x++,g.data==="]")){if(x===0)return r(g);x--}return g};return[c,f]}const xe=wi;function Vi(e){return qi(e)}function Wi(e){return qi(e,Oc)}function qi(e,t){const n=aa();n.__VUE__=!0;const{insert:s,remove:r,patchProp:o,createElement:i,createText:l,createComment:a,setText:c,setElementText:f,parentNode:d,nextSibling:h,setScopeId:y=je,cloneNode:b,insertStaticContent:P}=e,g=(u,p,_,k=null,w=null,S=null,F=!1,$=null,R=!!p.dynamicChildren)=>{if(u===p)return;u&&!Ue(u,p)&&(k=Hn(u),it(u,w,S,!0),u=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:C,ref:B,shapeFlag:N}=p;switch(C){case Gt:x(u,p,_,k);break;case ke:m(u,p,_,k);break;case Pt:u==null&&v(p,_,k,F);break;case fe:X(u,p,_,k,w,S,F,$,R);break;default:N&1?O(u,p,_,k,w,S,F,$,R):N&6?re(u,p,_,k,w,S,F,$,R):(N&64||N&128)&&C.process(u,p,_,k,w,S,F,$,R,jt)}B!=null&&w&&ns(B,u&&u.ref,S,p||u,!p)},x=(u,p,_,k)=>{if(u==null)s(p.el=l(p.children),_,k);else{const w=p.el=u.el;p.children!==u.children&&c(w,p.children)}},m=(u,p,_,k)=>{u==null?s(p.el=a(p.children||""),_,k):p.el=u.el},v=(u,p,_,k)=>{[u.el,u.anchor]=P(u.children,p,_,k,u.el,u.anchor)},T=({el:u,anchor:p},_,k)=>{let w;for(;u&&u!==p;)w=h(u),s(u,_,k),u=w;s(p,_,k)},I=({el:u,anchor:p})=>{let _;for(;u&&u!==p;)_=h(u),r(u),u=_;r(p)},O=(u,p,_,k,w,S,F,$,R)=>{F=F||p.type==="svg",u==null?E(p,_,k,w,S,F,$,R):W(u,p,w,S,F,$,R)},E=(u,p,_,k,w,S,F,$)=>{let R,C;const{type:B,props:N,shapeFlag:K,transition:Y,patchFlag:ee,dirs:le}=u;if(u.el&&b!==void 0&&ee===-1)R=u.el=b(u.el);else{if(R=u.el=i(u.type,S,N&&N.is,N),K&8?f(R,u.children):K&16&&j(u.children,R,null,k,w,S&&B!=="foreignObject",F,$),le&&Ke(u,null,k,"created"),N){for(const ie in N)ie!=="value"&&!hn(ie)&&o(R,ie,null,N[ie],S,u.children,k,w,Ye);"value"in N&&o(R,"value",null,N.value),(C=N.onVnodeBeforeMount)&&Ee(C,k,u)}H(R,u,u.scopeId,F,k)}le&&Ke(u,null,k,"beforeMount");const se=(!w||w&&!w.pendingBranch)&&Y&&!Y.persisted;se&&Y.beforeEnter(R),s(R,p,_),((C=N&&N.onVnodeMounted)||se||le)&&xe(()=>{C&&Ee(C,k,u),se&&Y.enter(R),le&&Ke(u,null,k,"mounted")},w)},H=(u,p,_,k,w)=>{if(_&&y(u,_),k)for(let S=0;S<k.length;S++)y(u,k[S]);if(w){let S=w.subTree;if(p===S){const F=w.vnode;H(u,F,F.scopeId,F.slotScopeIds,w.parent)}}},j=(u,p,_,k,w,S,F,$,R=0)=>{for(let C=R;C<u.length;C++){const B=u[C]=$?ft(u[C]):Re(u[C]);g(null,B,p,_,k,w,S,F,$)}},W=(u,p,_,k,w,S,F)=>{const $=p.el=u.el;let{patchFlag:R,dynamicChildren:C,dirs:B}=p;R|=u.patchFlag&16;const N=u.props||ne,K=p.props||ne;let Y;_&&wt(_,!1),(Y=K.onVnodeBeforeUpdate)&&Ee(Y,_,p,u),B&&Ke(p,u,_,"beforeUpdate"),_&&wt(_,!0);const ee=w&&p.type!=="foreignObject";if(C?J(u.dynamicChildren,C,$,_,k,ee,S):F||Je(u,p,$,null,_,k,ee,S,!1),R>0){if(R&16)A($,p,N,K,_,k,w);else if(R&2&&N.class!==K.class&&o($,"class",null,K.class,w),R&4&&o($,"style",N.style,K.style,w),R&8){const le=p.dynamicProps;for(let se=0;se<le.length;se++){const ie=le[se],De=N[ie],Bt=K[ie];(Bt!==De||ie==="value")&&o($,ie,De,Bt,w,u.children,_,k,Ye)}}R&1&&u.children!==p.children&&f($,p.children)}else!F&&C==null&&A($,p,N,K,_,k,w);((Y=K.onVnodeUpdated)||B)&&xe(()=>{Y&&Ee(Y,_,p,u),B&&Ke(p,u,_,"updated")},k)},J=(u,p,_,k,w,S,F)=>{for(let $=0;$<p.length;$++){const R=u[$],C=p[$],B=R.el&&(R.type===fe||!Ue(R,C)||R.shapeFlag&70)?d(R.el):_;g(R,C,B,null,k,w,S,F,!0)}},A=(u,p,_,k,w,S,F)=>{if(_!==k){for(const $ in k){if(hn($))continue;const R=k[$],C=_[$];R!==C&&$!=="value"&&o(u,$,C,R,F,p.children,w,S,Ye)}if(_!==ne)for(const $ in _)!hn($)&&!($ in k)&&o(u,$,_[$],null,F,p.children,w,S,Ye);"value"in k&&o(u,"value",_.value,k.value)}},X=(u,p,_,k,w,S,F,$,R)=>{const C=p.el=u?u.el:l(""),B=p.anchor=u?u.anchor:l("");let{patchFlag:N,dynamicChildren:K,slotScopeIds:Y}=p;Y&&($=$?$.concat(Y):Y),u==null?(s(C,_,k),s(B,_,k),j(p.children,_,B,w,S,F,$,R)):N>0&&N&64&&K&&u.dynamicChildren?(J(u.dynamicChildren,K,_,w,S,F,$),(p.key!=null||w&&p===w.subTree)&&Pr(u,p,!0)):Je(u,p,_,B,w,S,F,$,R)},re=(u,p,_,k,w,S,F,$,R)=>{p.slotScopeIds=$,u==null?p.shapeFlag&512?w.ctx.activate(p,_,k,F,R):Dt(p,_,k,w,S,F,R):ye(u,p,R)},Dt=(u,p,_,k,w,S,F)=>{const $=u.component=el(u,k,w);if(In(u)&&($.ctx.renderer=jt),nl($),$.asyncDep){if(w&&w.registerDep($,ue),!u.el){const R=$.subTree=V(ke);m(null,R,p,_)}return}ue($,u,p,_,w,S,F)},ye=(u,p,_)=>{const k=p.component=u.component;if(ac(u,p,_))if(k.asyncDep&&!k.asyncResolved){oe(k,p,_);return}else k.next=p,tc(k.update),k.update();else p.component=u.component,p.el=u.el,k.vnode=p},ue=(u,p,_,k,w,S,F)=>{const $=()=>{if(u.isMounted){let{next:B,bu:N,u:K,parent:Y,vnode:ee}=u,le=B,se;wt(u,!1),B?(B.el=ee.el,oe(u,B,F)):B=ee,N&&zt(N),(se=B.props&&B.props.onVnodeBeforeUpdate)&&Ee(se,Y,B,ee),wt(u,!0);const ie=Xn(u),De=u.subTree;u.subTree=ie,g(De,ie,d(De.el),Hn(De),u,w,S),B.el=ie.el,le===null&&Er(u,ie.el),K&&xe(K,w),(se=B.props&&B.props.onVnodeUpdated)&&xe(()=>Ee(se,Y,B,ee),w)}else{let B;const{el:N,props:K}=p,{bm:Y,m:ee,parent:le}=u,se=Zt(p);if(wt(u,!1),Y&&zt(Y),!se&&(B=K&&K.onVnodeBeforeMount)&&Ee(B,le,p),wt(u,!0),N&&Ss){const ie=()=>{u.subTree=Xn(u),Ss(N,u.subTree,u,w,null)};se?p.type.__asyncLoader().then(()=>!u.isUnmounted&&ie()):ie()}else{const ie=u.subTree=Xn(u);g(null,ie,_,k,u,w,S),p.el=ie.el}if(ee&&xe(ee,w),!se&&(B=K&&K.onVnodeMounted)){const ie=p;xe(()=>Ee(B,le,ie),w)}p.shapeFlag&256&&u.a&&xe(u.a,w),u.isMounted=!0,p=_=k=null}},R=u.effect=new Rn($,()=>xr(u.update),u.scope),C=u.update=R.run.bind(R);C.id=u.uid,wt(u,!0),C()},oe=(u,p,_)=>{p.component=u;const k=u.vnode.props;u.vnode=p,u.next=null,Sc(u,p.props,k,_),Pc(u,p.children,_),Mt(),kr(void 0,u.update),Ot()},Je=(u,p,_,k,w,S,F,$,R=!1)=>{const C=u&&u.children,B=u?u.shapeFlag:0,N=p.children,{patchFlag:K,shapeFlag:Y}=p;if(K>0){if(K&128){ln(C,N,_,k,w,S,F,$,R);return}else if(K&256){$s(C,N,_,k,w,S,F,$,R);return}}Y&8?(B&16&&Ye(C,w,S),N!==C&&f(_,N)):B&16?Y&16?ln(C,N,_,k,w,S,F,$,R):Ye(C,w,S,!0):(B&8&&f(_,""),Y&16&&j(N,_,k,w,S,F,$,R))},$s=(u,p,_,k,w,S,F,$,R)=>{u=u||Wt,p=p||Wt;const C=u.length,B=p.length,N=Math.min(C,B);let K;for(K=0;K<N;K++){const Y=p[K]=R?ft(p[K]):Re(p[K]);g(u[K],Y,_,null,w,S,F,$,R)}C>B?Ye(u,w,S,!0,!1,N):j(p,_,k,w,S,F,$,R,N)},ln=(u,p,_,k,w,S,F,$,R)=>{let C=0;const B=p.length;let N=u.length-1,K=B-1;for(;C<=N&&C<=K;){const Y=u[C],ee=p[C]=R?ft(p[C]):Re(p[C]);if(Ue(Y,ee))g(Y,ee,_,null,w,S,F,$,R);else break;C++}for(;C<=N&&C<=K;){const Y=u[N],ee=p[K]=R?ft(p[K]):Re(p[K]);if(Ue(Y,ee))g(Y,ee,_,null,w,S,F,$,R);else break;N--,K--}if(C>N){if(C<=K){const Y=K+1,ee=Y<B?p[Y].el:k;for(;C<=K;)g(null,p[C]=R?ft(p[C]):Re(p[C]),_,ee,w,S,F,$,R),C++}}else if(C>K)for(;C<=N;)it(u[C],w,S,!0),C++;else{const Y=C,ee=C,le=new Map;for(C=ee;C<=K;C++){const Ae=p[C]=R?ft(p[C]):Re(p[C]);Ae.key!=null&&le.set(Ae.key,C)}let se,ie=0;const De=K-ee+1;let Bt=!1,Wr=0;const an=new Array(De);for(C=0;C<De;C++)an[C]=0;for(C=Y;C<=N;C++){const Ae=u[C];if(ie>=De){it(Ae,w,S,!0);continue}let Be;if(Ae.key!=null)Be=le.get(Ae.key);else for(se=ee;se<=K;se++)if(an[se-ee]===0&&Ue(Ae,p[se])){Be=se;break}Be===void 0?it(Ae,w,S,!0):(an[Be-ee]=C+1,Be>=Wr?Wr=Be:Bt=!0,g(Ae,p[Be],_,null,w,S,F,$,R),ie++)}const qr=Bt?Nc(an):Wt;for(se=qr.length-1,C=De-1;C>=0;C--){const Ae=ee+C,Be=p[Ae],zr=Ae+1<B?p[Ae+1].el:k;an[C]===0?g(null,Be,_,zr,w,S,F,$,R):Bt&&(se<0||C!==qr[se]?Ht(Be,_,zr,2):se--)}}},Ht=(u,p,_,k,w=null)=>{const{el:S,type:F,transition:$,children:R,shapeFlag:C}=u;if(C&6){Ht(u.component.subTree,p,_,k);return}if(C&128){u.suspense.move(p,_,k);return}if(C&64){F.move(u,p,_,jt);return}if(F===fe){s(S,p,_);for(let N=0;N<R.length;N++)Ht(R[N],p,_,k);s(u.anchor,p,_);return}if(F===Pt){T(u,p,_);return}if(k!==2&&C&1&&$)if(k===0)$.beforeEnter(S),s(S,p,_),xe(()=>$.enter(S),w);else{const{leave:N,delayLeave:K,afterLeave:Y}=$,ee=()=>s(S,p,_),le=()=>{N(S,()=>{ee(),Y&&Y()})};K?K(S,ee,le):le()}else s(S,p,_)},it=(u,p,_,k=!1,w=!1)=>{const{type:S,props:F,ref:$,children:R,dynamicChildren:C,shapeFlag:B,patchFlag:N,dirs:K}=u;if($!=null&&ns($,null,_,u,!0),B&256){p.ctx.deactivate(u);return}const Y=B&1&&K,ee=!Zt(u);let le;if(ee&&(le=F&&F.onVnodeBeforeUnmount)&&Ee(le,p,u),B&6)Bl(u.component,_,k);else{if(B&128){u.suspense.unmount(_,k);return}Y&&Ke(u,null,p,"beforeUnmount"),B&64?u.type.remove(u,p,_,w,jt,k):C&&(S!==fe||N>0&&N&64)?Ye(C,p,_,!1,!0):(S===fe&&N&384||!w&&B&16)&&Ye(R,p,_),k&&Ur(u)}(ee&&(le=F&&F.onVnodeUnmounted)||Y)&&xe(()=>{le&&Ee(le,p,u),Y&&Ke(u,null,p,"unmounted")},_)},Ur=u=>{const{type:p,el:_,anchor:k,transition:w}=u;if(p===fe){jl(_,k);return}if(p===Pt){I(u);return}const S=()=>{r(_),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(u.shapeFlag&1&&w&&!w.persisted){const{leave:F,delayLeave:$}=w,R=()=>F(_,S);$?$(u.el,S,R):R()}else S()},jl=(u,p)=>{let _;for(;u!==p;)_=h(u),r(u),u=_;r(p)},Bl=(u,p,_)=>{const{bum:k,scope:w,update:S,subTree:F,um:$}=u;k&&zt(k),w.stop(),S&&(S.active=!1,it(F,u,p,_)),$&&xe($,p),xe(()=>{u.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ye=(u,p,_,k=!1,w=!1,S=0)=>{for(let F=S;F<u.length;F++)it(u[F],p,_,k,w)},Hn=u=>u.shapeFlag&6?Hn(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el),Vr=(u,p,_)=>{u==null?p._vnode&&it(p._vnode,null,null,!0):g(p._vnode||null,u,p,null,null,null,_),es(),p._vnode=u},jt={p:g,um:it,m:Ht,r:Ur,mt:Dt,mc:j,pc:Je,pbc:J,n:Hn,o:e};let As,Ss;return t&&([As,Ss]=t(jt)),{render:Vr,hydrate:As,createApp:Mc(Vr,As)}}function wt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Pr(e,t,n=!1){const s=e.children,r=t.children;if(D(s)&&D(r))for(let o=0;o<s.length;o++){const i=s[o];let l=r[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[o]=ft(r[o]),l.el=i.el),n||Pr(i,l))}}function Nc(e){const t=e.slice(),n=[0];let s,r,o,i,l;const a=e.length;for(s=0;s<a;s++){const c=e[s];if(c!==0){if(r=n[n.length-1],e[r]<c){t[s]=r,n.push(s);continue}for(o=0,i=n.length-1;o<i;)l=o+i>>1,e[n[l]]<c?o=l+1:i=l;c<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}const Dc=e=>e.__isTeleport,bn=e=>e&&(e.disabled||e.disabled===""),_o=e=>typeof SVGElement!="undefined"&&e instanceof SVGElement,Js=(e,t)=>{const n=e&&e.to;return ce(n)?t?t(n):null:n},Hc={__isTeleport:!0,process(e,t,n,s,r,o,i,l,a,c){const{mc:f,pc:d,pbc:h,o:{insert:y,querySelector:b,createText:P,createComment:g}}=c,x=bn(t.props);let{shapeFlag:m,children:v,dynamicChildren:T}=t;if(e==null){const I=t.el=P(""),O=t.anchor=P("");y(I,n,s),y(O,n,s);const E=t.target=Js(t.props,b),H=t.targetAnchor=P("");E&&(y(H,E),i=i||_o(E));const j=(W,J)=>{m&16&&f(v,W,J,r,o,i,l,a)};x?j(n,O):E&&j(E,H)}else{t.el=e.el;const I=t.anchor=e.anchor,O=t.target=e.target,E=t.targetAnchor=e.targetAnchor,H=bn(e.props),j=H?n:O,W=H?I:E;if(i=i||_o(O),T?(h(e.dynamicChildren,T,j,r,o,i,l),Pr(e,t,!0)):a||d(e,t,j,W,r,o,i,l,!1),x)H||zn(t,n,I,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const J=t.target=Js(t.props,b);J&&zn(t,J,null,c,0)}else H&&zn(t,O,E,c,1)}},remove(e,t,n,s,{um:r,o:{remove:o}},i){const{shapeFlag:l,children:a,anchor:c,targetAnchor:f,target:d,props:h}=e;if(d&&o(f),(i||!bn(h))&&(o(c),l&16))for(let y=0;y<a.length;y++){const b=a[y];r(b,t,n,!0,!!b.dynamicChildren)}},move:zn,hydrate:jc};function zn(e,t,n,{o:{insert:s},m:r},o=2){o===0&&s(e.targetAnchor,t,n);const{el:i,anchor:l,shapeFlag:a,children:c,props:f}=e,d=o===2;if(d&&s(i,t,n),(!d||bn(f))&&a&16)for(let h=0;h<c.length;h++)r(c[h],t,n,2);d&&s(l,t,n)}function jc(e,t,n,s,r,o,{o:{nextSibling:i,parentNode:l,querySelector:a}},c){const f=t.target=Js(t.props,a);if(f){const d=f._lpa||f.firstChild;t.shapeFlag&16&&(bn(t.props)?(t.anchor=c(i(e),t,l(e),n,s,r,o),t.targetAnchor=d):(t.anchor=i(e),t.targetAnchor=c(d,t,f,n,s,r,o)),f._lpa=t.targetAnchor&&i(t.targetAnchor))}return t.anchor&&i(t.anchor)}const Bc=Hc,Fr="components",Kc="directives";function Qt(e,t){return Ir(Fr,e,!0,t)||e}const zi=Symbol();function Ji(e){return ce(e)?Ir(Fr,e,!1)||e:e||zi}function Uc(e){return Ir(Kc,e)}function Ir(e,t,n=!0,s=!1){const r=we||ve;if(r){const o=r.type;if(e===Fr){const l=os(o);if(l&&(l===t||l===Fe(t)||l===Sn(Fe(t))))return o}const i=vo(r[e]||o[e],t)||vo(r.appContext[e],t);return!i&&s?o:i}}function vo(e,t){return e&&(e[t]||e[Fe(t)]||e[Sn(Fe(t))])}const fe=Symbol(void 0),Gt=Symbol(void 0),ke=Symbol(void 0),Pt=Symbol(void 0),yn=[];let qe=null;function M(e=!1){yn.push(qe=e?null:[])}function Yi(){yn.pop(),qe=yn[yn.length-1]||null}let en=1;function Ys(e){en+=e}function Xi(e){return e.dynamicChildren=en>0?qe||Wt:null,Yi(),en>0&&qe&&qe.push(e),e}function z(e,t,n,s,r,o){return Xi(U(e,t,n,s,r,o,!0))}function _e(e,t,n,s,r){return Xi(V(e,t,n,s,r,!0))}function _t(e){return e?e.__v_isVNode===!0:!1}function Ue(e,t){return e.type===t.type&&e.key===t.key}function Vc(e){}const Cs="__vInternal",Zi=({key:e})=>e!=null?e:null,Zn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ce(e)||ge(e)||q(e)?{i:we,r:e,k:t,f:!!n}:e:null;function U(e,t=null,n=null,s=0,r=null,o=e===fe?0:1,i=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Zi(t),ref:t&&Zn(t),scopeId:ys,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return l?(Mr(a,n),o&128&&e.normalize(a)):n&&(a.shapeFlag|=ce(n)?8:16),en>0&&!i&&qe&&(a.patchFlag>0||o&6)&&a.patchFlag!==32&&qe.push(a),a}const V=Wc;function Wc(e,t=null,n=null,s=0,r=null,o=!1){if((!e||e===zi)&&(e=ke),_t(e)){const l=st(e,t,!0);return n&&Mr(l,n),l}if(ru(e)&&(e=e.__vccOpts),t){t=Qi(t);let{class:l,style:a}=t;l&&!ce(l)&&(t.class=tt(l)),pe(a)&&(gr(a)&&!D(a)&&(a=de({},a)),t.style=$n(a))}const i=ce(e)?1:cc(e)?128:Dc(e)?64:pe(e)?4:q(e)?2:0;return U(e,t,n,s,r,i,o,!0)}function Qi(e){return e?gr(e)||Cs in e?de({},e):e:null}function st(e,t,n=!1){const{props:s,ref:r,patchFlag:o,children:i}=e,l=t?On(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Zi(l),ref:t&&t.ref?n&&r?D(r)?r.concat(Zn(t)):[r,Zn(t)]:Zn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==fe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&st(e.ssContent),ssFallback:e.ssFallback&&st(e.ssFallback),el:e.el,anchor:e.anchor}}function on(e=" ",t=0){return V(Gt,null,e,t)}function qc(e,t){const n=V(Pt,null,e);return n.staticCount=t,n}function te(e="",t=!1){return t?(M(),_e(ke,null,e)):V(ke,null,e)}function Re(e){return e==null||typeof e=="boolean"?V(ke):D(e)?V(fe,null,e.slice()):typeof e=="object"?ft(e):V(Gt,null,String(e))}function ft(e){return e.el===null||e.memo?e:st(e)}function Mr(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(D(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Mr(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(Cs in t)?t._ctx=we:r===3&&we&&(we.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else q(t)?(t={default:t,_ctx:we},n=32):(t=String(t),s&64?(n=16,t=[on(t)]):n=8);e.children=t,e.shapeFlag|=n}function On(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=tt([t.class,s.class]));else if(r==="style")t.style=$n([t.style,s.style]);else if(An(r)){const o=t[r],i=s[r];i&&o!==i&&!(D(o)&&o.includes(i))&&(t[r]=o?[].concat(o,i):i)}else r!==""&&(t[r]=s[r])}return t}function Ee(e,t,n,s=null){Pe(e,t,7,[n,s])}function Nn(e,t,n,s){let r;const o=n&&n[s];if(D(e)||ce(e)){r=new Array(e.length);for(let i=0,l=e.length;i<l;i++)r[i]=t(e[i],i,void 0,o&&o[i])}else if(typeof e=="number"){r=new Array(e);for(let i=0;i<e;i++)r[i]=t(i+1,i,void 0,o&&o[i])}else if(pe(e))if(e[Symbol.iterator])r=Array.from(e,(i,l)=>t(i,l,void 0,o&&o[l]));else{const i=Object.keys(e);r=new Array(i.length);for(let l=0,a=i.length;l<a;l++){const c=i[l];r[l]=t(e[c],c,l,o&&o[l])}}else r=[];return n&&(n[s]=r),r}function zc(e,t){for(let n=0;n<t.length;n++){const s=t[n];if(D(s))for(let r=0;r<s.length;r++)e[s[r].name]=s[r].fn;else s&&(e[s.name]=s.fn)}return e}function he(e,t,n={},s,r){if(we.isCE||we.parent&&Zt(we.parent)&&we.parent.isCE)return V("slot",t==="default"?null:{name:t},s&&s());let o=e[t];o&&o._c&&(o._d=!1),M();const i=o&&Gi(o(n)),l=_e(fe,{key:n.key||`_${t}`},i||(s?s():[]),i&&e._===1?64:-2);return!r&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function Gi(e){return e.some(t=>_t(t)?!(t.type===ke||t.type===fe&&!Gi(t.children)):!0)?e:null}function Jc(e){const t={};for(const n in e)t[gn(n)]=e[n];return t}const Xs=e=>e?tl(e)?Ts(e)||e.proxy:Xs(e.parent):null,ss=de(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Xs(e.parent),$root:e=>Xs(e.root),$emit:e=>e.emit,$options:e=>Ni(e),$forceUpdate:e=>()=>xr(e.update),$nextTick:e=>Pn.bind(e.proxy),$watch:e=>_c.bind(e)}),Zs={get({_:e},t){const{ctx:n,setupState:s,data:r,props:o,accessCache:i,type:l,appContext:a}=e;let c;if(t[0]!=="$"){const y=i[t];if(y!==void 0)switch(y){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return o[t]}else{if(s!==ne&&G(s,t))return i[t]=1,s[t];if(r!==ne&&G(r,t))return i[t]=2,r[t];if((c=e.propsOptions[0])&&G(c,t))return i[t]=3,o[t];if(n!==ne&&G(n,t))return i[t]=4,n[t];Ws&&(i[t]=0)}}const f=ss[t];let d,h;if(f)return t==="$attrs"&&Ie(e,"get",t),f(e);if((d=l.__cssModules)&&(d=d[t]))return d;if(n!==ne&&G(n,t))return i[t]=4,n[t];if(h=a.config.globalProperties,G(h,t))return h[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:o}=e;return r!==ne&&G(r,t)?(r[t]=n,!0):s!==ne&&G(s,t)?(s[t]=n,!0):G(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:o}},i){let l;return!!n[i]||e!==ne&&G(e,i)||t!==ne&&G(t,i)||(l=o[0])&&G(l,i)||G(s,i)||G(ss,i)||G(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:G(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},Yc=de({},Zs,{get(e,t){if(t!==Symbol.unscopables)return Zs.get(e,t,e)},has(e,t){return t[0]!=="_"&&!Jl(t)}}),Xc=Ui();let Zc=0;function el(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Xc,o={uid:Zc++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ur(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hi(s,r),emitsOptions:xi(s,r),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:s.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=sc.bind(null,o),e.ce&&e.ce(o),o}let ve=null;const yt=()=>ve||we,vt=e=>{ve=e,e.scope.on()},pt=()=>{ve&&ve.scope.off(),ve=null};function tl(e){return e.vnode.shapeFlag&4}let tn=!1;function nl(e,t=!1){tn=t;const{props:n,children:s}=e.vnode,r=tl(e);Ac(e,n,r,t),Lc(e,s);const o=r?Qc(e,t):void 0;return tn=!1,o}function Qc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Rt(new Proxy(e.ctx,Zs));const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?rl(e):null;vt(e),Mt();const o=We(s,e,0,[e.props,r]);if(Ot(),pt(),ar(o)){if(o.then(pt,pt),t)return o.then(i=>{Qs(e,i,t)}).catch(i=>{Nt(i,e,0)});e.asyncDep=o}else Qs(e,o,t)}else sl(e,t)}function Qs(e,t,n){q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:pe(t)&&(e.setupState=vr(t)),sl(e,n)}let rs,Gs;function Gc(e){rs=e,Gs=t=>{t.render._rc&&(t.withProxy=new Proxy(t.ctx,Yc))}}const eu=()=>!rs;function sl(e,t,n){const s=e.type;if(!e.render){if(!t&&rs&&!s.render){const r=s.template;if(r){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:a}=s,c=de(de({isCustomElement:o,delimiters:l},i),a);s.render=rs(r,c)}}e.render=s.render||je,Gs&&Gs(e)}vt(e),Mt(),kc(e),Ot(),pt()}function tu(e){return new Proxy(e.attrs,{get(t,n){return Ie(e,"get","$attrs"),t[n]}})}function rl(e){const t=s=>{e.exposed=s||{}};let n;return{get attrs(){return n||(n=tu(e))},slots:e.slots,emit:e.emit,expose:t}}function Ts(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(vr(Rt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ss)return ss[n](e)}}))}const nu=/(?:^|[-_])(\w)/g,su=e=>e.replace(nu,t=>t.toUpperCase()).replace(/[-_]/g,"");function os(e){return q(e)&&e.displayName||e.name}function ol(e,t,n=!1){let s=os(t);if(!s&&t.__file){const r=t.__file.match(/([^/\\]+)\.\w+$/);r&&(s=r[1])}if(!s&&e&&e.parent){const r=o=>{for(const i in o)if(o[i]===t)return i};s=r(e.components||e.parent.type.components)||r(e.appContext.components)}return s?su(s):n?"App":"Anonymous"}function ru(e){return q(e)&&"__vccOpts"in e}const Z=(e,t)=>Ja(e,t,tn);function ou(){return null}function iu(){return null}function lu(e){}function au(e,t){return null}function cu(){return il().slots}function uu(){return il().attrs}function il(){const e=yt();return e.setupContext||(e.setupContext=rl(e))}function fu(e,t){const n=D(e)?e.reduce((s,r)=>(s[r]={},s),{}):e;for(const s in t){const r=n[s];r?D(r)||q(r)?n[s]={type:r,default:t[s]}:r.default=t[s]:r===null&&(n[s]={default:t[s]})}return n}function du(e,t){const n={};for(const s in e)t.includes(s)||Object.defineProperty(n,s,{enumerable:!0,get:()=>e[s]});return n}function pu(e){const t=yt();let n=e();return pt(),ar(n)&&(n=n.catch(s=>{throw vt(t),s})),[n,()=>vt(t)]}function rt(e,t,n){const s=arguments.length;return s===2?pe(t)&&!D(t)?_t(t)?V(e,null,[t]):V(e,t):V(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&_t(n)&&(n=[n]),V(e,t,n))}const ll=Symbol(""),hu=()=>{{const e=Lt(ll);return e||hi("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function gu(){}function mu(e,t,n,s){const r=n[s];if(r&&al(r,e))return r;const o=t();return o.memo=e.slice(),n[s]=o}function al(e,t){const n=e.memo;if(n.length!=t.length)return!1;for(let s=0;s<n.length;s++)if(n[s]!==t[s])return!1;return en>0&&qe&&qe.push(e),!0}const cl="3.2.33",_u={createComponentInstance:el,setupComponent:nl,renderComponentRoot:Xn,setCurrentRenderingInstance:Tn,isVNode:_t,normalizeVNode:Re},vu=_u,bu=null,yu=null,xu="http://www.w3.org/2000/svg",Et=typeof document!="undefined"?document:null,bo=Et&&Et.createElement("template"),wu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?Et.createElementNS(xu,e):Et.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Et.createTextNode(e),createComment:e=>Et.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Et.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,s,r,o){const i=n?n.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{bo.innerHTML=s?`<svg>${e}</svg>`:e;const l=bo.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function ku(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Cu(e,t,n){const s=e.style,r=ce(n);if(n&&!r){for(const o in n)er(s,o,n[o]);if(t&&!ce(t))for(const o in t)n[o]==null&&er(s,o,"")}else{const o=s.display;r?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=o)}}const yo=/\s*!important$/;function er(e,t,n){if(D(n))n.forEach(s=>er(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Tu(e,t);yo.test(n)?e.setProperty(Ve(s),n.replace(yo,""),"important"):e[s]=n}}const xo=["Webkit","Moz","ms"],Ms={};function Tu(e,t){const n=Ms[t];if(n)return n;let s=Fe(t);if(s!=="filter"&&s in e)return Ms[t]=s;s=Sn(s);for(let r=0;r<xo.length;r++){const o=xo[r]+s;if(o in e)return Ms[t]=o}return t}const wo="http://www.w3.org/1999/xlink";function Eu(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(wo,t.slice(6,t.length)):e.setAttributeNS(wo,t,n);else{const o=Xl(t);n==null||o&&!zo(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function $u(e,t,n,s,r,o,i){if(t==="innerHTML"||t==="textContent"){s&&i(s,r,o),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const a=n==null?"":n;(e.value!==a||e.tagName==="OPTION")&&(e.value=a),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=zo(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}const[ul,Au]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let tr=0;const Su=Promise.resolve(),Ru=()=>{tr=0},Lu=()=>tr||(Su.then(Ru),tr=ul());function Ge(e,t,n,s){e.addEventListener(t,n,s)}function Pu(e,t,n,s){e.removeEventListener(t,n,s)}function Fu(e,t,n,s,r=null){const o=e._vei||(e._vei={}),i=o[t];if(s&&i)i.value=s;else{const[l,a]=Iu(t);if(s){const c=o[t]=Mu(s,r);Ge(e,l,c,a)}else i&&(Pu(e,l,i,a),o[t]=void 0)}}const ko=/(?:Once|Passive|Capture)$/;function Iu(e){let t;if(ko.test(e)){t={};let n;for(;n=e.match(ko);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Ve(e.slice(2)),t]}function Mu(e,t){const n=s=>{const r=s.timeStamp||ul();(Au||r>=n.attached-1)&&Pe(Ou(s,n.value),t,5,[s])};return n.value=e,n.attached=Lu(),n}function Ou(e,t){if(D(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Co=/^on[a-z]/,Nu=(e,t,n,s,r=!1,o,i,l,a)=>{t==="class"?ku(e,s,r):t==="style"?Cu(e,n,s):An(t)?or(t)||Fu(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Du(e,t,s,r))?$u(e,t,s,o,i,l,a):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Eu(e,t,s,r))};function Du(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Co.test(t)&&q(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Co.test(t)&&ce(n)?!1:t in e}function fl(e,t){const n=ae(e);class s extends Es{constructor(o){super(n,o,t)}}return s.def=n,s}const Hu=e=>fl(e,Cl),ju=typeof HTMLElement!="undefined"?HTMLElement:class{};class Es extends ju{constructor(t,n={},s){super(),this._def=t,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"})}connectedCallback(){this._connected=!0,this._instance||this._resolveDef()}disconnectedCallback(){this._connected=!1,Pn(()=>{this._connected||(sr(null,this.shadowRoot),this._instance=null)})}_resolveDef(){if(this._resolved)return;this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);new MutationObserver(s=>{for(const r of s)this._setAttr(r.attributeName)}).observe(this,{attributes:!0});const t=s=>{const{props:r,styles:o}=s,i=!D(r),l=r?i?Object.keys(r):r:[];let a;if(i)for(const c in this._props){const f=r[c];(f===Number||f&&f.type===Number)&&(this._props[c]=gt(this._props[c]),(a||(a=Object.create(null)))[c]=!0)}this._numberProps=a;for(const c of Object.keys(this))c[0]!=="_"&&this._setProp(c,this[c],!0,!1);for(const c of l.map(Fe))Object.defineProperty(this,c,{get(){return this._getProp(c)},set(f){this._setProp(c,f)}});this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(t):t(this._def)}_setAttr(t){let n=this.getAttribute(t);this._numberProps&&this._numberProps[t]&&(n=gt(n)),this._setProp(Fe(t),n,!1)}_getProp(t){return this._props[t]}_setProp(t,n,s=!0,r=!0){n!==this._props[t]&&(this._props[t]=n,r&&this._instance&&this._update(),s&&(n===!0?this.setAttribute(Ve(t),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Ve(t),n+""):n||this.removeAttribute(Ve(t))))}_update(){sr(this._createVNode(),this.shadowRoot)}_createVNode(){const t=V(this._def,de({},this._props));return this._instance||(t.ce=n=>{this._instance=n,n.isCE=!0,n.emit=(r,...o)=>{this.dispatchEvent(new CustomEvent(r,{detail:o}))};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof Es){n.parent=s._instance;break}}),t}_applyStyles(t){t&&t.forEach(n=>{const s=document.createElement("style");s.textContent=n,this.shadowRoot.appendChild(s)})}}function Bu(e="$style"){{const t=yt();if(!t)return ne;const n=t.type.__cssModules;if(!n)return ne;const s=n[e];return s||ne}}function Ku(e){const t=yt();if(!t)return;const n=()=>nr(t.subTree,e(t.proxy));Ci(n),ze(()=>{const s=new MutationObserver(n);s.observe(t.subTree.el.parentNode,{childList:!0}),rn(()=>s.disconnect())})}function nr(e,t){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{nr(n.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)To(e.el,t);else if(e.type===fe)e.children.forEach(n=>nr(n,t));else if(e.type===Pt){let{el:n,anchor:s}=e;for(;n&&(To(n,t),n!==s);)n=n.nextSibling}}function To(e,t){if(e.nodeType===1){const n=e.style;for(const s in t)n.setProperty(`--${s}`,t[s])}}const ct="transition",cn="animation",Or=(e,{slots:t})=>rt(Rr,pl(e),t);Or.displayName="Transition";const dl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Uu=Or.props=de({},Rr.props,dl),kt=(e,t=[])=>{D(e)?e.forEach(n=>n(...t)):e&&e(...t)},Eo=e=>e?D(e)?e.some(t=>t.length>1):e.length>1:!1;function pl(e){const t={};for(const A in e)A in dl||(t[A]=e[A]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=o,appearActiveClass:c=i,appearToClass:f=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=e,b=Vu(r),P=b&&b[0],g=b&&b[1],{onBeforeEnter:x,onEnter:m,onEnterCancelled:v,onLeave:T,onLeaveCancelled:I,onBeforeAppear:O=x,onAppear:E=m,onAppearCancelled:H=v}=t,j=(A,X,re)=>{Tt(A,X?f:l),Tt(A,X?c:i),re&&re()},W=(A,X)=>{Tt(A,y),Tt(A,h),X&&X()},J=A=>(X,re)=>{const Dt=A?E:m,ye=()=>j(X,A,re);kt(Dt,[X,ye]),$o(()=>{Tt(X,A?a:o),Ze(X,A?f:l),Eo(Dt)||Ao(X,s,P,ye)})};return de(t,{onBeforeEnter(A){kt(x,[A]),Ze(A,o),Ze(A,i)},onBeforeAppear(A){kt(O,[A]),Ze(A,a),Ze(A,c)},onEnter:J(!1),onAppear:J(!0),onLeave(A,X){const re=()=>W(A,X);Ze(A,d),gl(),Ze(A,h),$o(()=>{Tt(A,d),Ze(A,y),Eo(T)||Ao(A,s,g,re)}),kt(T,[A,re])},onEnterCancelled(A){j(A,!1),kt(v,[A])},onAppearCancelled(A){j(A,!0),kt(H,[A])},onLeaveCancelled(A){W(A),kt(I,[A])}})}function Vu(e){if(e==null)return null;if(pe(e))return[Os(e.enter),Os(e.leave)];{const t=Os(e);return[t,t]}}function Os(e){return gt(e)}function Ze(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Tt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function $o(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Wu=0;function Ao(e,t,n,s){const r=e._endId=++Wu,o=()=>{r===e._endId&&s()};if(n)return setTimeout(o,n);const{type:i,timeout:l,propCount:a}=hl(e,t);if(!i)return s();const c=i+"end";let f=0;const d=()=>{e.removeEventListener(c,h),o()},h=y=>{y.target===e&&++f>=a&&d()};setTimeout(()=>{f<a&&d()},l+1),e.addEventListener(c,h)}function hl(e,t){const n=window.getComputedStyle(e),s=b=>(n[b]||"").split(", "),r=s(ct+"Delay"),o=s(ct+"Duration"),i=So(r,o),l=s(cn+"Delay"),a=s(cn+"Duration"),c=So(l,a);let f=null,d=0,h=0;t===ct?i>0&&(f=ct,d=i,h=o.length):t===cn?c>0&&(f=cn,d=c,h=a.length):(d=Math.max(i,c),f=d>0?i>c?ct:cn:null,h=f?f===ct?o.length:a.length:0);const y=f===ct&&/\b(transform|all)(,|$)/.test(n[ct+"Property"]);return{type:f,timeout:d,propCount:h,hasTransform:y}}function So(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Ro(n)+Ro(e[s])))}function Ro(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function gl(){return document.body.offsetHeight}const ml=new WeakMap,_l=new WeakMap,qu={name:"TransitionGroup",props:de({},Uu,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=yt(),s=Sr();let r,o;return Mn(()=>{if(!r.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!Zu(r[0].el,n.vnode.el,i))return;r.forEach(Ju),r.forEach(Yu);const l=r.filter(Xu);gl(),l.forEach(a=>{const c=a.el,f=c.style;Ze(c,i),f.transform=f.webkitTransform=f.transitionDuration="";const d=c._moveCb=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",d),c._moveCb=null,Tt(c,i))};c.addEventListener("transitionend",d)})}),()=>{const i=Q(e),l=pl(i);let a=i.tag||fe;r=o,o=t.default?xs(t.default()):[];for(let c=0;c<o.length;c++){const f=o[c];f.key!=null&&Ft(f,Xt(f,l,s,n))}if(r)for(let c=0;c<r.length;c++){const f=r[c];Ft(f,Xt(f,l,s,n)),ml.set(f,f.el.getBoundingClientRect())}return V(a,null,o)}}},zu=qu;function Ju(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function Yu(e){_l.set(e,e.el.getBoundingClientRect())}function Xu(e){const t=ml.get(e),n=_l.get(e),s=t.left-n.left,r=t.top-n.top;if(s||r){const o=e.el.style;return o.transform=o.webkitTransform=`translate(${s}px,${r}px)`,o.transitionDuration="0s",e}}function Zu(e,t,n){const s=e.cloneNode();e._vtc&&e._vtc.forEach(i=>{i.split(/\s+/).forEach(l=>l&&s.classList.remove(l))}),n.split(/\s+/).forEach(i=>i&&s.classList.add(i)),s.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(s);const{hasTransform:o}=hl(s);return r.removeChild(s),o}const bt=e=>{const t=e.props["onUpdate:modelValue"];return D(t)?n=>zt(t,n):t};function Qu(e){e.target.composing=!0}function Lo(e){const t=e.target;t.composing&&(t.composing=!1,Gu(t,"input"))}function Gu(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const is={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e._assign=bt(r);const o=s||r.props&&r.props.type==="number";Ge(e,t?"change":"input",i=>{if(i.target.composing)return;let l=e.value;n?l=l.trim():o&&(l=gt(l)),e._assign(l)}),n&&Ge(e,"change",()=>{e.value=e.value.trim()}),t||(Ge(e,"compositionstart",Qu),Ge(e,"compositionend",Lo),Ge(e,"change",Lo))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:r}},o){if(e._assign=bt(o),e.composing||document.activeElement===e&&(n||s&&e.value.trim()===t||(r||e.type==="number")&&gt(e.value)===t))return;const i=t==null?"":t;e.value!==i&&(e.value=i)}},Nr={deep:!0,created(e,t,n){e._assign=bt(n),Ge(e,"change",()=>{const s=e._modelValue,r=nn(e),o=e.checked,i=e._assign;if(D(s)){const l=fs(s,r),a=l!==-1;if(o&&!a)i(s.concat(r));else if(!o&&a){const c=[...s];c.splice(l,1),i(c)}}else if(It(s)){const l=new Set(s);o?l.add(r):l.delete(r),i(l)}else i(bl(e,o))})},mounted:Po,beforeUpdate(e,t,n){e._assign=bt(n),Po(e,t,n)}};function Po(e,{value:t,oldValue:n},s){e._modelValue=t,D(t)?e.checked=fs(t,s.props.value)>-1:It(t)?e.checked=t.has(s.props.value):t!==n&&(e.checked=ht(t,bl(e,!0)))}const Dr={created(e,{value:t},n){e.checked=ht(t,n.props.value),e._assign=bt(n),Ge(e,"change",()=>{e._assign(nn(e))})},beforeUpdate(e,{value:t,oldValue:n},s){e._assign=bt(s),t!==n&&(e.checked=ht(t,s.props.value))}},vl={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const r=It(t);Ge(e,"change",()=>{const o=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>n?gt(nn(i)):nn(i));e._assign(e.multiple?r?new Set(o):o:o[0])}),e._assign=bt(s)},mounted(e,{value:t}){Fo(e,t)},beforeUpdate(e,t,n){e._assign=bt(n)},updated(e,{value:t}){Fo(e,t)}};function Fo(e,t){const n=e.multiple;if(!(n&&!D(t)&&!It(t))){for(let s=0,r=e.options.length;s<r;s++){const o=e.options[s],i=nn(o);if(n)D(t)?o.selected=fs(t,i)>-1:o.selected=t.has(i);else if(ht(nn(o),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function nn(e){return"_value"in e?e._value:e.value}function bl(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const ef={created(e,t,n){Jn(e,t,n,null,"created")},mounted(e,t,n){Jn(e,t,n,null,"mounted")},beforeUpdate(e,t,n,s){Jn(e,t,n,s,"beforeUpdate")},updated(e,t,n,s){Jn(e,t,n,s,"updated")}};function Jn(e,t,n,s,r){let o;switch(e.tagName){case"SELECT":o=vl;break;case"TEXTAREA":o=is;break;default:switch(n.props&&n.props.type){case"checkbox":o=Nr;break;case"radio":o=Dr;break;default:o=is}}const i=o[r];i&&i(e,t,n,s)}function tf(){is.getSSRProps=({value:e})=>({value:e}),Dr.getSSRProps=({value:e},t)=>{if(t.props&&ht(t.props.value,e))return{checked:!0}},Nr.getSSRProps=({value:e},t)=>{if(D(e)){if(t.props&&fs(e,t.props.value)>-1)return{checked:!0}}else if(It(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}}}const nf=["ctrl","shift","alt","meta"],sf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>nf.some(n=>e[`${n}Key`]&&!t.includes(n))},rf=(e,t)=>(n,...s)=>{for(let r=0;r<t.length;r++){const o=sf[t[r]];if(o&&o(n,t))return}return e(n,...s)},of={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},lf=(e,t)=>n=>{if(!("key"in n))return;const s=Ve(n.key);if(t.some(r=>r===s||of[r]===s))return e(n)},yl={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):un(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),un(e,!0),s.enter(e)):s.leave(e,()=>{un(e,!1)}):un(e,t))},beforeUnmount(e,{value:t}){un(e,t)}};function un(e,t){e.style.display=t?e._vod:"none"}function af(){yl.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const xl=de({patchProp:Nu},wu);let xn,Io=!1;function wl(){return xn||(xn=Vi(xl))}function kl(){return xn=Io?xn:Wi(xl),Io=!0,xn}const sr=(...e)=>{wl().render(...e)},Cl=(...e)=>{kl().hydrate(...e)},cf=(...e)=>{const t=wl().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=El(s);if(!r)return;const o=t._component;!q(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const i=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t},Tl=(...e)=>{const t=kl().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=El(s);if(r)return n(r,!0,r instanceof SVGElement)},t};function El(e){return ce(e)?document.querySelector(e):e}let Mo=!1;const uf=()=>{Mo||(Mo=!0,tf(),af())},ff=()=>{};var Oh=Object.freeze(Object.defineProperty({__proto__:null,compile:ff,EffectScope:ur,ReactiveEffect:Rn,customRef:Wa,effect:ha,effectScope:ca,getCurrentScope:ua,isProxy:gr,isReactive:St,isReadonly:Yt,isRef:ge,isShallow:hr,markRaw:Rt,onScopeDispose:fa,proxyRefs:vr,reactive:Ln,readonly:pr,ref:$e,shallowReactive:ui,shallowReadonly:ja,shallowRef:fi,stop:ga,toRaw:Q,toRef:pi,toRefs:br,triggerRef:Ka,unref:L,camelize:Fe,capitalize:Sn,normalizeClass:tt,normalizeProps:ea,normalizeStyle:$n,toDisplayString:be,toHandlerKey:gn,BaseTransition:Rr,Comment:ke,Fragment:fe,KeepAlive:xc,Static:Pt,Suspense:fc,Teleport:Bc,Text:Gt,callWithAsyncErrorHandling:Pe,callWithErrorHandling:We,cloneVNode:st,compatUtils:yu,computed:Z,createBlock:_e,createCommentVNode:te,createElementBlock:z,createElementVNode:U,createHydrationRenderer:Wi,createPropsRestProxy:du,createRenderer:Vi,createSlots:zc,createStaticVNode:qc,createTextVNode:on,createVNode:V,defineAsyncComponent:bc,defineComponent:ae,defineEmits:iu,defineExpose:lu,defineProps:ou,get devtools(){return Vt},getCurrentInstance:yt,getTransitionRawChildren:xs,guardReactiveProps:Qi,h:rt,handleError:Nt,initCustomFormatter:gu,inject:Lt,isMemoSame:al,isRuntimeOnly:eu,isVNode:_t,mergeDefaults:fu,mergeProps:On,nextTick:Pn,onActivated:$i,onBeforeMount:Ri,onBeforeUnmount:ks,onBeforeUpdate:Li,onDeactivated:Ai,onErrorCaptured:Mi,onMounted:ze,onRenderTracked:Ii,onRenderTriggered:Fi,onServerPrefetch:Pi,onUnmounted:rn,onUpdated:Mn,openBlock:M,popScopeId:Tr,provide:ki,pushScopeId:Cr,queuePostFlushCb:wr,registerRuntimeCompiler:Gc,renderList:Nn,renderSlot:he,resolveComponent:Qt,resolveDirective:Uc,resolveDynamicComponent:Ji,resolveFilter:bu,resolveTransitionHooks:Xt,setBlockTracking:Ys,setDevtoolsHook:yi,setTransitionHooks:Ft,ssrContextKey:ll,ssrUtils:vu,toHandlers:Jc,transformVNodeArgs:Vc,useAttrs:uu,useSSRContext:hu,useSlots:cu,useTransitionState:Sr,version:cl,warn:hi,watch:et,watchEffect:Ar,watchPostEffect:Ci,watchSyncEffect:mc,withAsyncContext:pu,withCtx:Oe,withDefaults:au,withDirectives:Fc,withMemo:mu,withScopeId:rc,Transition:Or,TransitionGroup:zu,VueElement:Es,createApp:cf,createSSRApp:Tl,defineCustomElement:fl,defineSSRCustomElement:Hu,hydrate:Cl,initDirectivesForSSR:uf,render:sr,useCssModule:Bu,useCssVars:Ku,vModelCheckbox:Nr,vModelDynamic:ef,vModelRadio:Dr,vModelSelect:vl,vModelText:is,vShow:yl,withKeys:lf,withModifiers:rf},Symbol.toStringTag,{value:"Module"})),df='{"lang":"en","title":"Vue Keyboard Trap","description":"Vue3 and Vue2 directive for keyboard navigation - roving movement and trapping inside container","base":"/vue-keyboard-trap/","head":[],"themeConfig":{"editLinks":true,"editLinkText":"Edit on GitHub","repo":"pdanpdan/vue-keyboard-trap","docsDir":"docs","docsBranch":"main","logo":"/logo.png","lastUpdated":true,"nav":[{"text":"Guide","link":"/guide/"},{"text":"Examples","link":"/examples/"},{"text":"Links","link":"/links/"}]},"locales":{},"langs":{},"scrollOffset":90}';const $l=/^https?:/i,Ne=typeof window!="undefined";function pf(e,t){t.sort((n,s)=>{const r=s.split("/").length-n.split("/").length;return r!==0?r:s.length-n.length});for(const n of t)if(e.startsWith(n))return n}function Oo(e,t){const n=pf(t,Object.keys(e));return n?e[n]:void 0}function hf(e){const{locales:t}=e.themeConfig||{},n=e.locales;return t&&n?Object.keys(t).reduce((s,r)=>(s[r]={label:t[r].label,lang:n[r].lang},s),{}):{}}function gf(e,t){t=mf(e,t);const n=Oo(e.locales||{},t),s=Oo(e.themeConfig.locales||{},t);return Object.assign({},e,n,{themeConfig:Object.assign({},e.themeConfig,s,{locales:{}}),lang:(n||e).lang,locales:{},langs:hf(e)})}function mf(e,t){if(!Ne)return t;const n=e.base,s=n.endsWith("/")?n.slice(0,-1):n;return t.slice(s.length)}const Al=Symbol(),Dn=fi(_f(df));function _f(e){return JSON.parse(e)}function vf(e){const t=Z(()=>gf(Dn.value,e.path));return{site:t,theme:Z(()=>t.value.themeConfig),page:Z(()=>e.data),frontmatter:Z(()=>e.data.frontmatter),lang:Z(()=>t.value.lang),localePath:Z(()=>{const{langs:n,lang:s}=t.value,r=Object.keys(n).find(o=>n[o].lang===s);return sn(r||"/")}),title:Z(()=>e.data.title?e.data.title+" | "+t.value.title:t.value.title),description:Z(()=>e.data.description||t.value.description)}}function Ce(){const e=Lt(Al);if(!e)throw new Error("vitepress data not properly injected in app");return e}function bf(e,t){return`${e}${t}`.replace(/\/+/g,"/")}function sn(e){return $l.test(e)?e:bf(Dn.value.base,e)}function Sl(e){let t=e.replace(/\.html$/,"");if(t=decodeURIComponent(t),t.endsWith("/")&&(t+="index"),Ne){const n="/vue-keyboard-trap/";t=t.slice(n.length).replace(/\//g,"_")+".md";const s=__VP_HASH_MAP__[t.toLowerCase()];t=`${n}assets/${t}.${s}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const Rl=Symbol(),No="http://a.com",Ll={relativePath:"",title:"404",description:"Not Found",headers:[],frontmatter:{},lastUpdated:0},yf=()=>({path:"/",component:null,data:Ll});function xf(e,t){const n=Ln(yf());function s(i=Ne?location.href:"/"){const l=new URL(i,No);return!l.pathname.endsWith("/")&&!l.pathname.endsWith(".html")&&(l.pathname+=".html",i=l.pathname+l.search+l.hash),Ne&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",i)),o(i)}let r=null;async function o(i,l=0,a=!1){const c=new URL(i,No),f=r=c.pathname;try{let d=e(f);if("then"in d&&typeof d.then=="function"&&(d=await d),r===f){r=null;const{default:h,__pageData:y}=d;if(!h)throw new Error(`Invalid route component: ${h}`);n.path=f,n.component=Rt(h),n.data=Rt(JSON.parse(y)),Ne&&Pn(()=>{if(c.hash&&!l){let b=null;try{b=document.querySelector(decodeURIComponent(c.hash))}catch(P){console.warn(P)}if(b){Do(b,c.hash);return}}window.scrollTo(0,l)})}}catch(d){if(d.message.match(/fetch/)||console.error(d),!a)try{const h=await fetch(Dn.value.base+"hashmap.json");window.__VP_HASH_MAP__=await h.json(),await o(i,l,!0);return}catch{}r===f&&(r=null,n.path=f,n.component=t?Rt(t):null,n.data=Ll)}}return Ne&&(window.addEventListener("click",i=>{const l=i.target.closest("a");if(l){const{href:a,protocol:c,hostname:f,pathname:d,hash:h,target:y}=l,b=window.location,P=d.match(/\.\w+$/);!i.ctrlKey&&!i.shiftKey&&!i.altKey&&!i.metaKey&&y!=="_blank"&&c===b.protocol&&f===b.hostname&&!(P&&P[0]!==".html")&&(i.preventDefault(),d===b.pathname?h&&h!==b.hash&&(history.pushState(null,"",h),window.dispatchEvent(new Event("hashchange")),Do(l,h,l.classList.contains("header-anchor"))):s(a))}},{capture:!0}),window.addEventListener("popstate",i=>{o(location.href,i.state&&i.state.scrollPosition||0)}),window.addEventListener("hashchange",i=>{i.preventDefault()})),{route:n,go:s}}function wf(){const e=Lt(Rl);if(!e)throw new Error("useRouter() is called without provider.");return e}function xt(){return wf().route}function Do(e,t,n=!1){let s=null;try{s=e.classList.contains("header-anchor")?e:document.querySelector(decodeURIComponent(t))}catch(r){console.warn(r)}if(s){let r=Dn.value.scrollOffset;typeof r=="string"&&(r=document.querySelector(r).getBoundingClientRect().bottom+24);const o=parseInt(window.getComputedStyle(s).paddingTop,10),i=window.scrollY+s.getBoundingClientRect().top-r+o;!n||Math.abs(i-window.scrollY)>window.innerHeight?window.scrollTo(0,i):window.scrollTo({left:0,top:i,behavior:"smooth"})}}function kf(e,t){let n=[],s=!0;const r=o=>{if(s){s=!1;return}const i=[],l=Math.min(n.length,o.length);for(let a=0;a<l;a++){let c=n[a];const[f,d,h=""]=o[a];if(c.tagName.toLocaleLowerCase()===f){for(const y in d)c.getAttribute(y)!==d[y]&&c.setAttribute(y,d[y]);for(let y=0;y<c.attributes.length;y++){const b=c.attributes[y].name;b in d||c.removeAttribute(b)}c.innerHTML!==h&&(c.innerHTML=h)}else document.head.removeChild(c),c=Ho(o[a]),document.head.append(c);i.push(c)}n.slice(l).forEach(a=>document.head.removeChild(a)),o.slice(l).forEach(a=>{const c=Ho(a);document.head.appendChild(c),i.push(c)}),n=i};Ar(()=>{const o=e.data,i=t.value,l=o&&o.title,a=o&&o.description,c=o&&o.frontmatter.head;document.title=(l?l+" | ":"")+i.title,document.querySelector("meta[name=description]").setAttribute("content",a||i.description),r([...c?Tf(c):[]])})}function Ho([e,t,n]){const s=document.createElement(e);for(const r in t)s.setAttribute(r,t[r]);return n&&(s.innerHTML=n),s}function Cf(e){return e[0]==="meta"&&e[1]&&e[1].name==="description"}function Tf(e){return e.filter(t=>!Cf(t))}const Ef=ae({name:"VitePressContent",setup(){const e=xt();return()=>rt("div",{style:{position:"relative"}},[e.component?rt(e.component):null])}});var me=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n};const $f=/#.*$/,Af=/(index)?\.(md|html)$/,ls=/\/$/,Sf=/^[a-z]+:/i;function Hr(e){return Array.isArray(e)}function jr(e){return Sf.test(e)}function Rf(e,t){if(t===void 0)return!1;const n=jo(`/${e.data.relativePath}`),s=jo(t);return n===s}function jo(e){return decodeURI(e).replace($f,"").replace(Af,"")}function Lf(e,t){const n=e.endsWith("/"),s=t.startsWith("/");return n&&s?e.slice(0,-1)+t:!n&&!s?`${e}/${t}`:e+t}function rr(e){return/^\//.test(e)?e:`/${e}`}function Pl(e){return e.replace(/(index)?(\.(md|html))?$/,"")||"/"}function Pf(e){return e===!1||e==="auto"||Hr(e)}function Ff(e){return e.children!==void 0}function If(e){return Hr(e)?e.length===0:!e}function Br(e,t){if(Pf(e))return e;t=rr(t);for(const n in e)if(t.startsWith(rr(n)))return e[n];return"auto"}function Fl(e){return e.reduce((t,n)=>(n.link&&t.push({text:n.text,link:Pl(n.link)}),Ff(n)&&(t=[...t,...Fl(n.children)]),t),[])}function Il(e){const t=xt(),n=jr(e.value.link);return{props:Z(()=>{const r=Bo(`/${t.data.relativePath}`);let o=!1;if(e.value.activeMatch)o=new RegExp(e.value.activeMatch).test(r);else{const i=Bo(e.value.link);o=i==="/"?i===r:r.startsWith(i)}return{class:{active:o,isExternal:n},href:n?e.value.link:sn(e.value.link),target:e.value.target||(n?"_blank":null),rel:e.value.rel||(n?"noopener noreferrer":null),"aria-label":e.value.ariaLabel}}),isExternal:n}}function Bo(e){return e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const Mf={},Of={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},Nf=U("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),Df=U("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1),Hf=[Nf,Df];function jf(e,t){return M(),z("svg",Of,Hf)}var Kr=me(Mf,[["render",jf]]);const Bf={class:"nav-link"},Kf=ae({props:{item:null},setup(e){const n=br(e),{props:s,isExternal:r}=Il(n.item);return(o,i)=>(M(),z("div",Bf,[U("a",On({class:"item"},L(s)),[on(be(e.item.text)+" ",1),L(r)?(M(),_e(Kr,{key:0})):te("",!0)],16)]))}});var as=me(Kf,[["__scopeId","data-v-b8818f8c"]]);const Uf={key:0,class:"home-hero"},Vf={key:0,class:"figure"},Wf=["src","alt"],qf={key:1,id:"main-title",class:"title"},zf={key:2,class:"tagline"},Jf=ae({setup(e){const{site:t,frontmatter:n}=Ce(),s=Z(()=>{const{heroImage:i,heroText:l,tagline:a,actionLink:c,actionText:f}=n.value;return i||l||a||c&&f}),r=Z(()=>n.value.heroText||t.value.title),o=Z(()=>n.value.tagline||t.value.description);return(i,l)=>L(s)?(M(),z("header",Uf,[L(n).heroImage?(M(),z("figure",Vf,[U("img",{class:"image",src:L(sn)(L(n).heroImage),alt:L(n).heroAlt},null,8,Wf)])):te("",!0),L(r)?(M(),z("h1",qf,be(L(r)),1)):te("",!0),L(o)?(M(),z("p",zf,be(L(o)),1)):te("",!0),L(n).actionLink&&L(n).actionText?(M(),_e(as,{key:3,item:{link:L(n).actionLink,text:L(n).actionText},class:"action"},null,8,["item"])):te("",!0),L(n).altActionLink&&L(n).altActionText?(M(),_e(as,{key:4,item:{link:L(n).altActionLink,text:L(n).altActionText},class:"action alt"},null,8,["item"])):te("",!0)])):te("",!0)}});var Yf=me(Jf,[["__scopeId","data-v-370f18c0"]]);const Xf={key:0,class:"home-features"},Zf={class:"wrapper"},Qf={class:"container"},Gf={class:"features"},ed={key:0,class:"title"},td={key:1,class:"details"},nd=ae({setup(e){const{frontmatter:t}=Ce(),n=Z(()=>t.value.features&&t.value.features.length>0),s=Z(()=>t.value.features?t.value.features:[]);return(r,o)=>L(n)?(M(),z("div",Xf,[U("div",Zf,[U("div",Qf,[U("div",Gf,[(M(!0),z(fe,null,Nn(L(s),(i,l)=>(M(),z("section",{key:l,class:"feature"},[i.title?(M(),z("h2",ed,be(i.title),1)):te("",!0),i.details?(M(),z("p",td,be(i.details),1)):te("",!0)]))),128))])])])])):te("",!0)}});var sd=me(nd,[["__scopeId","data-v-e39c13e0"]]);const rd={key:0,class:"footer"},od={class:"container"},id={class:"text"},ld=ae({setup(e){const{frontmatter:t}=Ce();return(n,s)=>L(t).footer?(M(),z("footer",rd,[U("div",od,[U("p",id,be(L(t).footer),1)])])):te("",!0)}});var ad=me(ld,[["__scopeId","data-v-30918238"]]);const cd={class:"home","aria-labelledby":"main-title"},ud={class:"home-content"},fd=ae({setup(e){return(t,n)=>{const s=Qt("Content");return M(),z("main",cd,[V(Yf),he(t.$slots,"hero",{},void 0,!0),V(sd),U("div",ud,[V(s)]),he(t.$slots,"features",{},void 0,!0),V(ad),he(t.$slots,"footer",{},void 0,!0)])}}});var dd=me(fd,[["__scopeId","data-v-10122c92"]]);const pd=["href","aria-label"],hd=["src"],gd=ae({setup(e){const{site:t,theme:n,localePath:s}=Ce();return(r,o)=>(M(),z("a",{class:"nav-bar-title",href:L(s),"aria-label":`${L(t).title}, back to home`},[L(n).logo?(M(),z("img",{key:0,class:"logo",src:L(sn)(L(n).logo),alt:"Logo"},null,8,hd)):te("",!0),on(" "+be(L(t).title),1)],8,pd))}});var md=me(gd,[["__scopeId","data-v-cc01ef16"]]);function _d(){const{site:e,localePath:t,theme:n}=Ce();return Z(()=>{const s=e.value.langs,r=Object.keys(s);if(r.length<2)return null;const i=xt().path.replace(t.value,""),l=r.map(c=>({text:s[c].label,link:`${c}${i}`}));return{text:n.value.selectText||"Languages",items:l}})}const vd=["GitHub","GitLab","Bitbucket"].map(e=>[e,new RegExp(e,"i")]);function bd(){const{site:e}=Ce();return Z(()=>{const t=e.value.themeConfig,n=t.docsRepo||t.repo;if(!n)return null;const s=yd(n);return{text:xd(s,t.repoLabel),link:s}})}function yd(e){return $l.test(e)?e:`https://github.com/${e}`}function xd(e,t){if(t)return t;const n=e.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const s=vd.find(([r,o])=>o.test(n[0]));return s&&s[0]?s[0]:"Source"}const wd=e=>(Cr("data-v-bbc27490"),e=e(),Tr(),e),kd={class:"nav-dropdown-link-item"},Cd=wd(()=>U("span",{class:"arrow"},null,-1)),Td={class:"text"},Ed={class:"icon"},$d=ae({props:{item:null},setup(e){const n=br(e),{props:s,isExternal:r}=Il(n.item);return(o,i)=>(M(),z("div",kd,[U("a",On({class:"item"},L(s)),[Cd,U("span",Td,be(e.item.text),1),U("span",Ed,[L(r)?(M(),_e(Kr,{key:0})):te("",!0)])],16)]))}});var Ad=me($d,[["__scopeId","data-v-bbc27490"]]);const Sd=["aria-label"],Rd={class:"button-text"},Ld={class:"dialog"},Pd=ae({props:{item:null},setup(e){const t=xt(),n=$e(!1);et(()=>t.path,()=>{n.value=!1});function s(){n.value=!n.value}return(r,o)=>(M(),z("div",{class:tt(["nav-dropdown-link",{open:n.value}])},[U("button",{class:"button","aria-label":e.item.ariaLabel,onClick:s},[U("span",Rd,be(e.item.text),1),U("span",{class:tt(["button-arrow",n.value?"down":"right"])},null,2)],8,Sd),U("ul",Ld,[(M(!0),z(fe,null,Nn(e.item.items,i=>(M(),z("li",{key:i.text,class:"dialog-item"},[V(Ad,{item:i},null,8,["item"])]))),128))])],2))}});var Ko=me(Pd,[["__scopeId","data-v-56bf3a3f"]]);const Fd={key:0,class:"nav-links"},Id={key:1,class:"item"},Md={key:2,class:"item"},Od=ae({setup(e){const{theme:t}=Ce(),n=_d(),s=bd(),r=Z(()=>t.value.nav||s.value||n.value);return(o,i)=>L(r)?(M(),z("nav",Fd,[L(t).nav?(M(!0),z(fe,{key:0},Nn(L(t).nav,l=>(M(),z("div",{key:l.text,class:"item"},[l.items?(M(),_e(Ko,{key:0,item:l},null,8,["item"])):(M(),_e(as,{key:1,item:l},null,8,["item"]))]))),128)):te("",!0),L(n)?(M(),z("div",Id,[V(Ko,{item:L(n)},null,8,["item"])])):te("",!0),L(s)?(M(),z("div",Md,[V(as,{item:L(s)},null,8,["item"])])):te("",!0)])):te("",!0)}});var Ml=me(Od,[["__scopeId","data-v-eab3edfe"]]);const Nd={emits:["toggle"]},Dd=U("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[U("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),Hd=[Dd];function jd(e,t,n,s,r,o){return M(),z("div",{class:"sidebar-button",onClick:t[0]||(t[0]=i=>e.$emit("toggle"))},Hd)}var Bd=me(Nd,[["render",jd]]);const Kd=e=>(Cr("data-v-675d8756"),e=e(),Tr(),e),Ud={class:"nav-bar"},Vd=Kd(()=>U("div",{class:"flex-grow"},null,-1)),Wd={class:"nav"},qd=ae({emits:["toggle"],setup(e){return(t,n)=>(M(),z("header",Ud,[V(Bd,{onToggle:n[0]||(n[0]=s=>t.$emit("toggle"))}),V(md),Vd,U("div",Wd,[V(Ml)]),he(t.$slots,"search",{},void 0,!0)]))}});var zd=me(qd,[["__scopeId","data-v-675d8756"]]);function Jd(){let e=null,t=null;const n=Gd(s,300);function s(){const i=Yd(),l=Xd(i);for(let a=0;a<l.length;a++){const c=l[a],f=l[a+1],[d,h]=Qd(a,c,f);if(d){history.replaceState(null,document.title,h||" "),r(h);return}}}function r(i){if(o(t),o(e),t=document.querySelector(`.sidebar a[href="${i}"]`),!t)return;t.classList.add("active");const l=t.closest(".sidebar-links > ul > li");l&&l!==t.parentElement?(e=l.querySelector("a"),e&&e.classList.add("active")):e=null}function o(i){i&&i.classList.remove("active")}ze(()=>{s(),window.addEventListener("scroll",n)}),Mn(()=>{r(decodeURIComponent(location.hash))}),rn(()=>{window.removeEventListener("scroll",n)})}function Yd(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function Xd(e){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(t=>e.some(n=>n.hash===t.hash))}function Zd(){return document.querySelector(".nav-bar").offsetHeight}function Uo(e){const t=Zd();return e.parentElement.offsetTop-t-15}function Qd(e,t,n){const s=window.scrollY;return e===0&&s===0?[!0,null]:s<Uo(t)?[!1,null]:!n||s<Uo(n)?[!0,decodeURIComponent(t.hash)]:[!1,null]}function Gd(e,t){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(e,t):(e(),s=!0,setTimeout(()=>{s=!1},t))}}function ep(){const e=xt(),{site:t}=Ce();return Jd(),Z(()=>{const n=e.data.headers,s=e.data.frontmatter.sidebar,r=e.data.frontmatter.sidebarDepth;if(s===!1)return[];if(s==="auto")return Vo(n,r);const o=Br(t.value.themeConfig.sidebar,e.data.relativePath);return o===!1?[]:o==="auto"?Vo(n,r):o})}function Vo(e,t){const n=[];if(e===void 0)return[];let s;return e.forEach(({level:r,title:o,slug:i})=>{if(r-1>t)return;const l={text:o,link:`#${i}`};r===2?(s=l,n.push(l)):s&&(s.children||(s.children=[])).push(l)}),n}const Ol=e=>{const t=xt(),{site:n,frontmatter:s}=Ce(),r=e.depth||1,o=s.value.sidebarDepth||1/0,i=t.data.headers,l=e.item.text,a=tp(n.value.base,e.item.link),c=e.item.children,f=Rf(t,e.item.link),d=r<o?Nl(f,c,i,r+1):null;return rt("li",{class:"sidebar-link"},[rt(a?"a":"p",{class:{"sidebar-link-item":!0,active:f},href:a},l),d])};function tp(e,t){return t===void 0||t.startsWith("#")?t:Lf(e,t)}function Nl(e,t,n,s=1){return t&&t.length>0?rt("ul",{class:"sidebar-links"},t.map(r=>rt(Ol,{item:r,depth:s}))):e&&n?Nl(!1,np(n),void 0,s):null}function np(e){return Dl(sp(e))}function sp(e){e=e.map(n=>Object.assign({},n));let t;return e.forEach(n=>{n.level===2?t=n:t&&(t.children||(t.children=[])).push(n)}),e.filter(n=>n.level===2)}function Dl(e){return e.map(t=>({text:t.title,link:`#${t.slug}`,children:t.children?Dl(t.children):void 0}))}const rp={key:0,class:"sidebar-links"},op=ae({setup(e){const t=ep();return(n,s)=>L(t).length>0?(M(),z("ul",rp,[(M(!0),z(fe,null,Nn(L(t),r=>(M(),_e(L(Ol),{item:r},null,8,["item"]))),256))])):te("",!0)}});const ip=ae({props:{open:{type:Boolean}},setup(e){return(t,n)=>(M(),z("aside",{class:tt(["sidebar",{open:e.open}])},[V(Ml,{class:"nav"}),he(t.$slots,"sidebar-top",{},void 0,!0),V(op),he(t.$slots,"sidebar-bottom",{},void 0,!0)],2))}});var lp=me(ip,[["__scopeId","data-v-83e92a68"]]);const ap=/bitbucket.org/;function cp(){const{page:e,theme:t,frontmatter:n}=Ce(),s=Z(()=>{const{repo:o,docsDir:i="",docsBranch:l="master",docsRepo:a=o,editLinks:c}=t.value,f=n.value.editLink!=null?n.value.editLink:c,{relativePath:d}=e.value;return!f||!d||!o?null:up(o,a,i,l,d)}),r=Z(()=>t.value.editLinkText||"Edit this page");return{url:s,text:r}}function up(e,t,n,s,r){return ap.test(e)?dp(e,t,n,s,r):fp(e,t,n,s,r)}function fp(e,t,n,s,r){return(jr(t)?t:`https://github.com/${t}`).replace(ls,"")+`/edit/${s}/`+(n?n.replace(ls,"")+"/":"")+r}function dp(e,t,n,s,r){return(jr(t)?t:e).replace(ls,"")+`/src/${s}/`+(n?n.replace(ls,"")+"/":"")+r+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}const pp={class:"edit-link"},hp=["href"],gp=ae({setup(e){const{url:t,text:n}=cp();return(s,r)=>(M(),z("div",pp,[L(t)?(M(),z("a",{key:0,class:"link",href:L(t),target:"_blank",rel:"noopener noreferrer"},[on(be(L(n))+" ",1),V(Kr,{class:"icon"})],8,hp)):te("",!0)]))}});var mp=me(gp,[["__scopeId","data-v-1ed99556"]]);const _p={key:0,class:"last-updated"},vp={class:"prefix"},bp={class:"datetime"},yp=ae({setup(e){const{theme:t,page:n}=Ce(),s=Z(()=>{const i=t.value.lastUpdated;return i!==void 0&&i!==!1&&n.value.lastUpdated!==0}),r=Z(()=>{const i=t.value.lastUpdated;return i===!0?"Last Updated":i}),o=$e("");return ze(()=>{Ar(()=>{o.value=new Date(n.value.lastUpdated).toLocaleString("en-US")})}),(i,l)=>L(s)?(M(),z("p",_p,[U("span",vp,be(L(r))+":",1),U("span",bp,be(o.value),1)])):te("",!0)}});var xp=me(yp,[["__scopeId","data-v-abce3432"]]);const wp={class:"page-footer"},kp={class:"edit"},Cp={class:"updated"},Tp=ae({setup(e){const{page:t}=Ce();return(n,s)=>(M(),z("footer",wp,[U("div",kp,[V(mp)]),U("div",Cp,[L(t).lastUpdated?(M(),_e(xp,{key:0})):te("",!0)])]))}});var Ep=me(Tp,[["__scopeId","data-v-07c132fc"]]);function $p(){const{page:e,theme:t}=Ce(),n=Z(()=>Pl(rr(e.value.relativePath))),s=Z(()=>{const a=Br(t.value.sidebar,n.value);return Hr(a)?Fl(a):[]}),r=Z(()=>s.value.findIndex(a=>a.link===n.value)),o=Z(()=>{if(t.value.nextLinks!==!1&&r.value>-1&&r.value<s.value.length-1)return s.value[r.value+1]}),i=Z(()=>{if(t.value.prevLinks!==!1&&r.value>0)return s.value[r.value-1]}),l=Z(()=>!!o.value||!!i.value);return{next:o,prev:i,hasLinks:l}}const Ap={},Sp={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Rp=U("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1),Lp=[Rp];function Pp(e,t){return M(),z("svg",Sp,Lp)}var Fp=me(Ap,[["render",Pp]]);const Ip={},Mp={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Op=U("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),Np=[Op];function Dp(e,t){return M(),z("svg",Mp,Np)}var Hp=me(Ip,[["render",Dp]]);const jp={key:0,class:"next-and-prev-link"},Bp={class:"container"},Kp={class:"prev"},Up=["href"],Vp={class:"text"},Wp={class:"next"},qp=["href"],zp={class:"text"},Jp=ae({setup(e){const{hasLinks:t,prev:n,next:s}=$p();return(r,o)=>L(t)?(M(),z("div",jp,[U("div",Bp,[U("div",Kp,[L(n)?(M(),z("a",{key:0,class:"link",href:L(sn)(L(n).link)},[V(Fp,{class:"icon icon-prev"}),U("span",Vp,be(L(n).text),1)],8,Up)):te("",!0)]),U("div",Wp,[L(s)?(M(),z("a",{key:0,class:"link",href:L(sn)(L(s).link)},[U("span",zp,be(L(s).text),1),V(Hp,{class:"icon icon-next"})],8,qp)):te("",!0)])])])):te("",!0)}});var Yp=me(Jp,[["__scopeId","data-v-38ede35f"]]);const Xp={class:"page"},Zp={class:"container"},Qp=ae({setup(e){return(t,n)=>{const s=Qt("Content");return M(),z("main",Xp,[U("div",Zp,[he(t.$slots,"top",{},void 0,!0),V(s,{class:"content"}),V(Ep),V(Yp),he(t.$slots,"bottom",{},void 0,!0)])])}}});var Gp=me(Qp,[["__scopeId","data-v-7eddb2c4"]]);const eh={key:0,id:"ads-container"},th=ae({setup(e){const t=()=>null,n=t,s=t,r=t,o=xt(),{site:i,page:l,theme:a,frontmatter:c}=Ce(),f=Z(()=>!!c.value.customLayout),d=Z(()=>!!c.value.home),h=Z(()=>Object.keys(i.value.langs).length>1),y=Z(()=>{const v=a.value;return c.value.navbar===!1||v.navbar===!1?!1:i.value.title||v.logo||v.repo||v.nav}),b=$e(!1),P=Z(()=>c.value.home||c.value.sidebar===!1?!1:!If(Br(a.value.sidebar,o.data.relativePath))),g=v=>{b.value=typeof v=="boolean"?v:!b.value},x=g.bind(null,!1);et(o,x);const m=Z(()=>[{"no-navbar":!y.value,"sidebar-open":b.value,"no-sidebar":!P.value}]);return(v,T)=>{const I=Qt("Content"),O=Qt("Debug");return M(),z(fe,null,[U("div",{class:tt(["theme",L(m)])},[L(y)?(M(),_e(zd,{key:0,onToggle:g},{search:Oe(()=>[he(v.$slots,"navbar-search",{},()=>[L(a).algolia?(M(),_e(L(r),{key:0,options:L(a).algolia,multilang:L(h)},null,8,["options","multilang"])):te("",!0)])]),_:3})):te("",!0),V(lp,{open:b.value},{"sidebar-top":Oe(()=>[he(v.$slots,"sidebar-top")]),"sidebar-bottom":Oe(()=>[he(v.$slots,"sidebar-bottom")]),_:3},8,["open"]),U("div",{class:"sidebar-mask",onClick:T[0]||(T[0]=E=>g(!1))}),L(f)?(M(),_e(I,{key:1})):L(d)?he(v.$slots,"home",{key:2},()=>[V(dd,null,{hero:Oe(()=>[he(v.$slots,"home-hero")]),features:Oe(()=>[he(v.$slots,"home-features")]),footer:Oe(()=>[he(v.$slots,"home-footer")]),_:3})]):(M(),_e(Gp,{key:3},{top:Oe(()=>[he(v.$slots,"page-top-ads",{},()=>[L(a).carbonAds&&L(a).carbonAds.carbon?(M(),z("div",eh,[(M(),_e(L(n),{key:"carbon"+L(l).relativePath,code:L(a).carbonAds.carbon,placement:L(a).carbonAds.placement},null,8,["code","placement"]))])):te("",!0)]),he(v.$slots,"page-top")]),bottom:Oe(()=>[he(v.$slots,"page-bottom"),he(v.$slots,"page-bottom-ads",{},()=>[L(a).carbonAds&&L(a).carbonAds.custom?(M(),_e(L(s),{key:"custom"+L(l).relativePath,code:L(a).carbonAds.custom,placement:L(a).carbonAds.placement},null,8,["code","placement"])):te("",!0)])]),_:3}))],2),V(O)],64)}}}),nh={class:"theme"},sh=U("h1",null,"404",-1),rh=["href"],oh=ae({setup(e){const{site:t}=Ce(),n=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function s(){return n[Math.floor(Math.random()*n.length)]}return(r,o)=>(M(),z("div",nh,[sh,U("blockquote",null,be(s()),1),U("a",{href:L(t).base,"aria-label":"go to home"},"Take me home.",8,rh)]))}}),ih={Layout:th,NotFound:oh},lh="modulepreload",Wo={},ah="/vue-keyboard-trap/",Xe=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${ah}${s}`,s in Wo)return;Wo[s]=!0;const r=s.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":lh,r||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),r)return new Promise((l,a)=>{i.addEventListener("load",l),i.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},ch=/(?:^|[\n\r]+)<template[^>]*?(?:\s+lang="([^"]+)")?[^>]*?>[\r\n]*(.*?)[\r\n]*<\/template>/is,uh=/(?:^|[\n\r]+)<style[^>]*?(?:\s+lang="([^"]+)")?[^>]*?>[\r\n](.*?)[\r\n]<\/style>/is,fh=/(?:^|[\n\r]+)<script[^>]*?(?:\s+lang="([^"]+)")?[^>]*?>[\r\n](.*?)[\r\n]<\/script>/is,dh=/(^|[\n\r]+)import(?:\s+(.*?)\s+from)?\s+(['"])(.+?)\3(;)?(?:\s*\/\/\s*asGlobal=(['"])(.+?)\6)?/isg,ph=/(?:^|[\n\r]+)\s*\/\/\s*external(js|css)=(['"])(.+?)\2/isg,qo="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.prod.js";function Ns(e,t){const n=t.exec(e);return n===null?{type:"none",code:""}:{type:n[1]||"none",code:n[2]||""}}function hh(e,t,n,s,r,o,i,l){if(typeof n!="string"||n.length===0)return"";if(typeof l=="string"&&l.length>0)return`${t}const ${n} = ${l}${o}`;const a=/^(?:@[^/]+\/)?([^@]+)$/i.exec(r);if(a===null)return"";const c=a[1].split("/").map(f=>f.split(/[^a-z0-9]+/i).filter(d=>d.length>0).map(d=>`${d[0].toLocaleUpperCase()}${d.slice(1).toLocaleLowerCase()}`).join("")).join(".");return`${t}const ${n} = ${c}${o||""}`}function gh({title:e,text:t,externalCss:n,externalJs:s}){const r=Ns(t,ch),o=Ns(t,uh),i=Ns(t,fh),l=Array.isArray(n)===!0?n:typeof n=="string"&&n.length>0?[n]:[],a=Array.isArray(s)===!0?s:typeof s=="string"&&s.length>0?[s]:[];a.indexOf(qo)===-1&&a.unshift(qo),i.code=i.code.replace(ph,(y,b,P,g)=>(b.toLowerCase()==="js"?a.indexOf(g)===-1&&a.push(g):l.indexOf(g)===-1&&l.push(g),"")),i.code=i.code.replaceAll(dh,hh);let c=r.code.replace(/(<template>|<\/template>$)/g,"").replace(/\n/g,`
  `).replace(/([\w]+=")([^"]*?)(")/g,(y,b,P,g)=>b+P.replace(/>/g,"___TEMP_REPLACEMENT___")+g).replace(/<(q-[\w-]+|div)([^>]*?)\s*?([\n\r][\t ]+)?\/>/gs,"<$1$2$3></$1>").replace(/(<template[^>]*>)(\s*?(?:[\n\r][\t ]+)?)<(thead|tbody|tfoot)/gs,"$1$2<___PREVENT_TEMPLATE___$3").replace(/<(thead|tbody|tfoot)(.*?)[\n\r]?(\s*)<\/\1>/gs,(y,b,P,g)=>`<template>
${g}  <${b}${P.split(/[\n\r]+/g).join(`
  `)}
${g}  </${b}>
${g}</template>`).replace(/___PREVENT_TEMPLATE___/g,"").replace(/___TEMP_REPLACEMENT___/g,">").replace(/^\s{2}/gm,"").trim();c=`
<div id="app">
  ${c}
</div>`;let f=/export default {([\s\S]*)}/g.exec(i.code);f=(f&&f[1]||"").trim(),f.length>0&&(f=`
  ${f}
`);let d=/^([\s\S]*)export default {/g.exec(i.code);d=(d&&d[1]||"").trim(),d+=d?`

`:"",d+=`const app = Vue.createApp({${f}});

app.mount('#app');
`;const h={title:e,head:"",editors:(c&&4)|(o.code&&2)|(d&&1).toString(2),html:c,html_pre_processor:r.type,css:o.code,css_pre_processor:o.type,css_external:l,js:d,js_pre_processor:i.type==="none"?"babel":i.type,js_external:a};return JSON.stringify(h)}const mh={key:0,class:"code-pen__header"},_h={class:"code-pen__header-title"},vh=["innerHTML"],bh={class:"code-pen__actions"},yh=U("span",{class:"spacer"},null,-1),xh=U("span",{class:"separator"},null,-1),wh={key:2,class:"code-pen__source"},kh=["value"],Ch={props:{example:String,title:{type:String,default:""},desc:{type:String,default:""},sourceExpanded:Boolean,externalCss:[Array,String],externalJs:[Array,String]},setup(e){const t=e,n=`../../../${t.example}`,s=$e(null);({"../../../examples/autofocus-on-activation.vue":()=>Xe(()=>import("./chunks/autofocus-on-activation.9965a4ce.js"),["assets/chunks/autofocus-on-activation.9965a4ce.js","assets/chunks/index.5e79a6fa.js"]),"../../../examples/autofocus-on-mount.vue":()=>Xe(()=>import("./chunks/autofocus-on-mount.f483d811.js"),["assets/chunks/autofocus-on-mount.f483d811.js","assets/chunks/index.5e79a6fa.js"]),"../../../examples/roving-grid.vue":()=>Xe(()=>import("./chunks/roving-grid.c4b26308.js"),["assets/chunks/roving-grid.c4b26308.js","assets/chunks/index.5e79a6fa.js"]),"../../../examples/roving-gridcell.vue":()=>Xe(()=>import("./chunks/roving-gridcell.cd3becbe.js"),["assets/chunks/roving-gridcell.cd3becbe.js","assets/chunks/index.5e79a6fa.js"]),"../../../examples/roving-nested.vue":()=>Xe(()=>import("./chunks/roving-nested.ae13a2b3.js"),["assets/chunks/roving-nested.ae13a2b3.js","assets/chunks/index.5e79a6fa.js"]),"../../../examples/roving-rtl.vue":()=>Xe(()=>import("./chunks/roving-rtl.bd402e80.js"),["assets/chunks/roving-rtl.bd402e80.js","assets/chunks/index.5e79a6fa.js"]),"../../../examples/roving-simple.vue":()=>Xe(()=>import("./chunks/roving-simple.d91d30f7.js"),["assets/chunks/roving-simple.d91d30f7.js","assets/chunks/index.5e79a6fa.js"]),"../../../examples/trap-rtl.vue":()=>Xe(()=>import("./chunks/trap-rtl.74d00ee3.js"),["assets/chunks/trap-rtl.74d00ee3.js","assets/chunks/index.5e79a6fa.js"]),"../../../examples/trap-simple.vue":()=>Xe(()=>import("./chunks/trap-simple.2d54c14f.js"),["assets/chunks/trap-simple.2d54c14f.js","assets/chunks/index.5e79a6fa.js"])})[n]().then(b=>{s.value=Rt(b.default)});const o=$e(null),i={"../../../examples/autofocus-on-activation.vue":`<template>
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
        Focusable group 1 / {{ i + 1 }}
      </div>

      <div class="test row" v-kbd-trap.roving.horizontal>
        <div
          class="test col"
          v-for="i in 3"
          :key="i"
          tabindex="0"
        >
          Focusable group 2 / {{ i + 1 }}
        </div>
      </div>

      <div
        class="test"
        v-for="i in 2"
        :key="i"
        tabindex="0"
      >
        Focusable group 1 / {{ i + 3 }}
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
        Focusable group 1 / {{ i + 1 }}
      </div>
    </div>

    <div class="test row" v-kbd-trap.roving>
      <div
        class="test col"
        v-for="i in 3"
        :key="i"
        tabindex="0"
      >
        Focusable group 2 / {{ i + 1 }}
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
`};o.value=i[n];const l=$e(t.sourceExpanded===!0),a=()=>{l.value=l.value!==!0},c=$e(null),f=$e(null),d=()=>{f.value=gh({title:t.title||t.desc,text:o.value,externalCss:t.externalCss,externalJs:t.externalJs}),Pn(()=>{c.value!==null&&c.value.submit()})},h=$e(!1),y=()=>{navigator.clipboard.writeText(o.value),h.value=!0,setTimeout(()=>{h.value=!1},5*1e3)};return(b,P)=>{const g=Qt("client-only");return M(),_e(g,null,{default:Oe(()=>[U("article",On(b.$attrs,{class:"code-pen"}),[e.title||e.desc?(M(),z("div",mh,[U("div",_h,be(e.title),1),U("div",{class:"code-pen__header-desc",innerHTML:e.desc.split(/\\n/).join("<br/>").split(/\n/).join("<br/>")},null,8,vh)])):te("",!0),s.value!==null?(M(),_e(Ji(s.value),{key:1,class:"code-pen__component"})):te("",!0),U("div",bh,[U("button",{onClick:d},"Open in CodePen"),yh,U("button",{onClick:y},be(h.value===!0?"Copied!":"Copy code"),1),xh,U("button",{onClick:a},"</>")]),l.value?(M(),z("div",wh,[he(b.$slots,"default")])):te("",!0),U("form",{ref_key:"formRef",ref:c,method:"post",action:"https://codepen.io/pen/define/",target:"_blank",rel:"noopener"},[f.value!==null?(M(),z("input",{key:0,type:"hidden",name:"data",value:f.value},null,8,kh)):te("",!0)],512)],16)]),_:3})}}};var cs=Zr(Xr({},ih),{enhanceApp({app:e}){e.component("CodePen",Ch)}});const Ds=new Set,Hl=()=>document.createElement("link"),Th=e=>{const t=Hl();t.rel="prefetch",t.href=e,document.head.appendChild(t)},Eh=e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};let Yn;const $h=Ne&&(Yn=Hl())&&Yn.relList&&Yn.relList.supports&&Yn.relList.supports("prefetch")?Th:Eh;function Ah(){if(!Ne||!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const s=()=>{n&&n.disconnect(),n=new IntersectionObserver(o=>{o.forEach(i=>{if(i.isIntersecting){const l=i.target;n.unobserve(l);const{pathname:a}=l;if(!Ds.has(a)){Ds.add(a);const c=Sl(a);$h(c)}}})}),t(()=>{document.querySelectorAll("#app a").forEach(o=>{const{target:i,hostname:l,pathname:a}=o,c=a.match(/\.\w+$/);c&&c[0]!==".html"||i!=="_blank"&&l===location.hostname&&(a!==location.pathname?n.observe(o):Ds.add(a))})})};ze(s);const r=xt();et(()=>r.path,s),rn(()=>{n&&n.disconnect()})}const Sh=ae({setup(e,{slots:t}){const n=$e(!1);return ze(()=>{n.value=!0}),()=>n.value&&t.default?t.default():null}}),Rh=cs.NotFound||(()=>"404 Not Found"),Lh={name:"VitePressApp",setup(){const{site:e}=Ce();return ze(()=>{et(()=>e.value.lang,t=>{document.documentElement.lang=t},{immediate:!0})}),Ah(),()=>rt(cs.Layout)}};function Ph(){const e=Ih(),t=Fh();t.provide(Rl,e);const n=vf(e.route);return t.provide(Al,n),Ne&&kf(e.route,n.site),t.component("Content",Ef),t.component("ClientOnly",Sh),t.component("Debug",()=>null),Object.defineProperty(t.config.globalProperties,"$frontmatter",{get(){return n.frontmatter.value}}),cs.enhanceApp&&cs.enhanceApp({app:t,router:e,siteData:Dn}),{app:t,router:e}}function Fh(){return Tl(Lh)}function Ih(){let e=Ne,t;return xf(n=>{let s=Sl(n);return e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),Ne?(e=!1,import(s)):require(s)},Rh)}if(Ne){const{app:e,router:t}=Ph();t.go().then(()=>{e.mount("#app")})}export{fe as F,Oh as V,me as _,V as a,U as b,z as c,Ph as createApp,on as d,qc as e,$e as f,Uc as g,Fc as h,Tr as i,te as j,Nn as k,M as o,Cr as p,Qt as r,be as t,Oe as w};
