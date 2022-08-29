(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function $l(e,t){const n=Object.create(null),s=e.split(",");for(let o=0;o<s.length;o++)n[s[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const kd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sd=$l(kd);function Ic(e){return!!e||e===""}function Ye(e){if(ne(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=Re(s)?$d(s):Ye(s);if(o)for(const l in o)t[l]=o[l]}return t}else{if(Re(e))return e;if(He(e))return e}}const Ad=/;(?![^(]*\))/g,Ed=/:(.+)/;function $d(e){const t={};return e.split(Ad).forEach(n=>{if(n){const s=n.split(Ed);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function De(e){let t="";if(Re(e))t=e;else if(ne(e))for(let n=0;n<e.length;n++){const s=De(e[n]);s&&(t+=s+" ")}else if(He(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function fe(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Re(t)&&(e.class=De(t)),n&&(e.style=Ye(n)),e}const Tn=e=>Re(e)?e:e==null?"":ne(e)||He(e)&&(e.toString===Nc||!ae(e.toString))?JSON.stringify(e,Lc,2):String(e),Lc=(e,t)=>t&&t.__v_isRef?Lc(e,t.value):Jn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o])=>(n[`${s} =>`]=o,n),{})}:Dc(t)?{[`Set(${t.size})`]:[...t.values()]}:He(t)&&!ne(t)&&!Wc(t)?String(t):t,Me={},Qn=[],Ot=()=>{},Od=()=>!1,Cd=/^on[^a-z]/,Bo=e=>Cd.test(e),Ol=e=>e.startsWith("onUpdate:"),tt=Object.assign,Cl=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Pd=Object.prototype.hasOwnProperty,_e=(e,t)=>Pd.call(e,t),ne=Array.isArray,Jn=e=>Ho(e)==="[object Map]",Dc=e=>Ho(e)==="[object Set]",ae=e=>typeof e=="function",Re=e=>typeof e=="string",Pl=e=>typeof e=="symbol",He=e=>e!==null&&typeof e=="object",Rc=e=>He(e)&&ae(e.then)&&ae(e.catch),Nc=Object.prototype.toString,Ho=e=>Nc.call(e),Md=e=>Ho(e).slice(8,-1),Wc=e=>Ho(e)==="[object Object]",Ml=e=>Re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,bo=$l(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vo=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Td=/-(\w)/g,Bt=Vo(e=>e.replace(Td,(t,n)=>n?n.toUpperCase():"")),Fd=/\B([A-Z])/g,Rn=Vo(e=>e.replace(Fd,"-$1").toLowerCase()),zo=Vo(e=>e.charAt(0).toUpperCase()+e.slice(1)),ir=Vo(e=>e?`on${zo(e)}`:""),js=(e,t)=>!Object.is(e,t),Xn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Eo=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Fr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ki;const Id=()=>ki||(ki=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ut;class jc{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&ut&&(this.parent=ut,this.index=(ut.scopes||(ut.scopes=[])).push(this)-1)}run(t){if(this.active){const n=ut;try{return ut=this,t()}finally{ut=n}}}on(){ut=this}off(){ut=this.parent}stop(t){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.active=!1}}}function Ld(e){return new jc(e)}function Dd(e,t=ut){t&&t.active&&t.effects.push(e)}function Tl(){return ut}function Fl(e){ut&&ut.cleanups.push(e)}const Il=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Bc=e=>(e.w&fn)>0,Hc=e=>(e.n&fn)>0,Rd=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=fn},Nd=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const o=t[s];Bc(o)&&!Hc(o)?o.delete(e):t[n++]=o,o.w&=~fn,o.n&=~fn}t.length=n}},Ir=new WeakMap;let ks=0,fn=1;const Lr=30;let Et;const $n=Symbol(""),Dr=Symbol("");class Ll{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Dd(this,s)}run(){if(!this.active)return this.fn();let t=Et,n=rn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Et,Et=this,rn=!0,fn=1<<++ks,ks<=Lr?Rd(this):Si(this),this.fn()}finally{ks<=Lr&&Nd(this),fn=1<<--ks,Et=this.parent,rn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Et===this?this.deferStop=!0:this.active&&(Si(this),this.onStop&&this.onStop(),this.active=!1)}}function Si(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let rn=!0;const Vc=[];function as(){Vc.push(rn),rn=!1}function cs(){const e=Vc.pop();rn=e===void 0?!0:e}function bt(e,t,n){if(rn&&Et){let s=Ir.get(e);s||Ir.set(e,s=new Map);let o=s.get(n);o||s.set(n,o=Il()),zc(o)}}function zc(e,t){let n=!1;ks<=Lr?Hc(e)||(e.n|=fn,n=!Bc(e)):n=!e.has(Et),n&&(e.add(Et),Et.deps.push(e))}function Kt(e,t,n,s,o,l){const i=Ir.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&ne(e))i.forEach((c,u)=>{(u==="length"||u>=s)&&a.push(c)});else switch(n!==void 0&&a.push(i.get(n)),t){case"add":ne(e)?Ml(n)&&a.push(i.get("length")):(a.push(i.get($n)),Jn(e)&&a.push(i.get(Dr)));break;case"delete":ne(e)||(a.push(i.get($n)),Jn(e)&&a.push(i.get(Dr)));break;case"set":Jn(e)&&a.push(i.get($n));break}if(a.length===1)a[0]&&Rr(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Rr(Il(c))}}function Rr(e,t){const n=ne(e)?e:[...e];for(const s of n)s.computed&&Ai(s);for(const s of n)s.computed||Ai(s)}function Ai(e,t){(e!==Et||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Wd=$l("__proto__,__v_isRef,__isVue"),Gc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Pl)),jd=Dl(),Bd=Dl(!1,!0),Hd=Dl(!0),Ei=Vd();function Vd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=xe(this);for(let l=0,i=this.length;l<i;l++)bt(s,"get",l+"");const o=s[t](...n);return o===-1||o===!1?s[t](...n.map(xe)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){as();const s=xe(this)[t].apply(this,n);return cs(),s}}),e}function Dl(e=!1,t=!1){return function(s,o,l){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&l===(e?t?rp:Zc:t?Yc:Kc).get(s))return s;const i=ne(s);if(!e&&i&&_e(Ei,o))return Reflect.get(Ei,o,l);const a=Reflect.get(s,o,l);return(Pl(o)?Gc.has(o):Wd(o))||(e||bt(s,"get",o),t)?a:Se(a)?i&&Ml(o)?a:a.value:He(a)?e?Yn(a):Le(a):a}}const zd=Uc(),Gd=Uc(!0);function Uc(e=!1){return function(n,s,o,l){let i=n[s];if(Bs(i)&&Se(i)&&!Se(o))return!1;if(!e&&!Bs(o)&&(Nr(o)||(o=xe(o),i=xe(i)),!ne(n)&&Se(i)&&!Se(o)))return i.value=o,!0;const a=ne(n)&&Ml(s)?Number(s)<n.length:_e(n,s),c=Reflect.set(n,s,o,l);return n===xe(l)&&(a?js(o,i)&&Kt(n,"set",s,o):Kt(n,"add",s,o)),c}}function Ud(e,t){const n=_e(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&Kt(e,"delete",t,void 0),s}function qd(e,t){const n=Reflect.has(e,t);return(!Pl(t)||!Gc.has(t))&&bt(e,"has",t),n}function Kd(e){return bt(e,"iterate",ne(e)?"length":$n),Reflect.ownKeys(e)}const qc={get:jd,set:zd,deleteProperty:Ud,has:qd,ownKeys:Kd},Yd={get:Hd,set(e,t){return!0},deleteProperty(e,t){return!0}},Zd=tt({},qc,{get:Bd,set:Gd}),Rl=e=>e,Go=e=>Reflect.getPrototypeOf(e);function lo(e,t,n=!1,s=!1){e=e.__v_raw;const o=xe(e),l=xe(t);n||(t!==l&&bt(o,"get",t),bt(o,"get",l));const{has:i}=Go(o),a=s?Rl:n?jl:Hs;if(i.call(o,t))return a(e.get(t));if(i.call(o,l))return a(e.get(l));e!==o&&e.get(t)}function io(e,t=!1){const n=this.__v_raw,s=xe(n),o=xe(e);return t||(e!==o&&bt(s,"has",e),bt(s,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function ao(e,t=!1){return e=e.__v_raw,!t&&bt(xe(e),"iterate",$n),Reflect.get(e,"size",e)}function $i(e){e=xe(e);const t=xe(this);return Go(t).has.call(t,e)||(t.add(e),Kt(t,"add",e,e)),this}function Oi(e,t){t=xe(t);const n=xe(this),{has:s,get:o}=Go(n);let l=s.call(n,e);l||(e=xe(e),l=s.call(n,e));const i=o.call(n,e);return n.set(e,t),l?js(t,i)&&Kt(n,"set",e,t):Kt(n,"add",e,t),this}function Ci(e){const t=xe(this),{has:n,get:s}=Go(t);let o=n.call(t,e);o||(e=xe(e),o=n.call(t,e)),s&&s.call(t,e);const l=t.delete(e);return o&&Kt(t,"delete",e,void 0),l}function Pi(){const e=xe(this),t=e.size!==0,n=e.clear();return t&&Kt(e,"clear",void 0,void 0),n}function co(e,t){return function(s,o){const l=this,i=l.__v_raw,a=xe(i),c=t?Rl:e?jl:Hs;return!e&&bt(a,"iterate",$n),i.forEach((u,f)=>s.call(o,c(u),c(f),l))}}function uo(e,t,n){return function(...s){const o=this.__v_raw,l=xe(o),i=Jn(l),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,u=o[e](...s),f=n?Rl:t?jl:Hs;return!t&&bt(l,"iterate",c?Dr:$n),{next(){const{value:p,done:d}=u.next();return d?{value:p,done:d}:{value:a?[f(p[0]),f(p[1])]:f(p),done:d}},[Symbol.iterator](){return this}}}}function Jt(e){return function(...t){return e==="delete"?!1:this}}function Qd(){const e={get(l){return lo(this,l)},get size(){return ao(this)},has:io,add:$i,set:Oi,delete:Ci,clear:Pi,forEach:co(!1,!1)},t={get(l){return lo(this,l,!1,!0)},get size(){return ao(this)},has:io,add:$i,set:Oi,delete:Ci,clear:Pi,forEach:co(!1,!0)},n={get(l){return lo(this,l,!0)},get size(){return ao(this,!0)},has(l){return io.call(this,l,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:co(!0,!1)},s={get(l){return lo(this,l,!0,!0)},get size(){return ao(this,!0)},has(l){return io.call(this,l,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:co(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{e[l]=uo(l,!1,!1),n[l]=uo(l,!0,!1),t[l]=uo(l,!1,!0),s[l]=uo(l,!0,!0)}),[e,n,t,s]}const[Jd,Xd,ep,tp]=Qd();function Nl(e,t){const n=t?e?tp:ep:e?Xd:Jd;return(s,o,l)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(_e(n,o)&&o in s?n:s,o,l)}const np={get:Nl(!1,!1)},sp={get:Nl(!1,!0)},op={get:Nl(!0,!1)},Kc=new WeakMap,Yc=new WeakMap,Zc=new WeakMap,rp=new WeakMap;function lp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ip(e){return e.__v_skip||!Object.isExtensible(e)?0:lp(Md(e))}function Le(e){return Bs(e)?e:Wl(e,!1,qc,np,Kc)}function ap(e){return Wl(e,!1,Zd,sp,Yc)}function Yn(e){return Wl(e,!0,Yd,op,Zc)}function Wl(e,t,n,s,o){if(!He(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=o.get(e);if(l)return l;const i=ip(e);if(i===0)return e;const a=new Proxy(e,i===2?s:n);return o.set(e,a),a}function es(e){return Bs(e)?es(e.__v_raw):!!(e&&e.__v_isReactive)}function Bs(e){return!!(e&&e.__v_isReadonly)}function Nr(e){return!!(e&&e.__v_isShallow)}function Qc(e){return es(e)||Bs(e)}function xe(e){const t=e&&e.__v_raw;return t?xe(t):e}function Uo(e){return Eo(e,"__v_skip",!0),e}const Hs=e=>He(e)?Le(e):e,jl=e=>He(e)?Yn(e):e;function Bl(e){rn&&Et&&(e=xe(e),zc(e.dep||(e.dep=Il())))}function Hl(e,t){e=xe(e),e.dep&&Rr(e.dep)}function Se(e){return!!(e&&e.__v_isRef===!0)}function z(e){return Jc(e,!1)}function Mt(e){return Jc(e,!0)}function Jc(e,t){return Se(e)?e:new cp(e,t)}class cp{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:xe(t),this._value=n?t:Hs(t)}get value(){return Bl(this),this._value}set value(t){t=this.__v_isShallow?t:xe(t),js(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Hs(t),Hl(this))}}function w(e){return Se(e)?e.value:e}const up={get:(e,t,n)=>w(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return Se(o)&&!Se(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function Xc(e){return es(e)?e:new Proxy(e,up)}class fp{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=t(()=>Bl(this),()=>Hl(this));this._get=n,this._set=s}get value(){return this._get()}set value(t){this._set(t)}}function dp(e){return new fp(e)}function pp(e){const t=ne(e)?new Array(e.length):{};for(const n in e)t[n]=mp(e,n);return t}class hp{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function mp(e,t,n){const s=e[t];return Se(s)?s:new hp(e,t,n)}class gp{constructor(t,n,s,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ll(t,()=>{this._dirty||(this._dirty=!0,Hl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=s}get value(){const t=xe(this);return Bl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function bp(e,t,n=!1){let s,o;const l=ae(e);return l?(s=e,o=Ot):(s=e.get,o=e.set),new gp(s,o,l||!o,n)}function ln(e,t,n,s){let o;try{o=s?e(...s):e()}catch(l){qo(l,t,n)}return o}function Ct(e,t,n,s){if(ae(e)){const l=ln(e,t,n,s);return l&&Rc(l)&&l.catch(i=>{qo(i,t,n)}),l}const o=[];for(let l=0;l<e.length;l++)o.push(Ct(e[l],t,n,s));return o}function qo(e,t,n,s=!0){const o=t?t.vnode:null;if(t){let l=t.parent;const i=t.proxy,a=n;for(;l;){const u=l.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,i,a)===!1)return}l=l.parent}const c=t.appContext.config.errorHandler;if(c){ln(c,null,10,[e,i,a]);return}}_p(e,n,o,s)}function _p(e,t,n,s=!0){console.error(e)}let $o=!1,Wr=!1;const pt=[];let Ut=0;const Es=[];let Ss=null,Gn=0;const $s=[];let en=null,Un=0;const eu=Promise.resolve();let Vl=null,jr=null;function Ge(e){const t=Vl||eu;return e?t.then(this?e.bind(this):e):t}function yp(e){let t=Ut+1,n=pt.length;for(;t<n;){const s=t+n>>>1;Vs(pt[s])<e?t=s+1:n=s}return t}function tu(e){(!pt.length||!pt.includes(e,$o&&e.allowRecurse?Ut+1:Ut))&&e!==jr&&(e.id==null?pt.push(e):pt.splice(yp(e.id),0,e),nu())}function nu(){!$o&&!Wr&&(Wr=!0,Vl=eu.then(ru))}function vp(e){const t=pt.indexOf(e);t>Ut&&pt.splice(t,1)}function su(e,t,n,s){ne(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?s+1:s))&&n.push(e),nu()}function wp(e){su(e,Ss,Es,Gn)}function xp(e){su(e,en,$s,Un)}function Ko(e,t=null){if(Es.length){for(jr=t,Ss=[...new Set(Es)],Es.length=0,Gn=0;Gn<Ss.length;Gn++)Ss[Gn]();Ss=null,Gn=0,jr=null,Ko(e,t)}}function ou(e){if(Ko(),$s.length){const t=[...new Set($s)];if($s.length=0,en){en.push(...t);return}for(en=t,en.sort((n,s)=>Vs(n)-Vs(s)),Un=0;Un<en.length;Un++)en[Un]();en=null,Un=0}}const Vs=e=>e.id==null?1/0:e.id;function ru(e){Wr=!1,$o=!0,Ko(e),pt.sort((n,s)=>Vs(n)-Vs(s));const t=Ot;try{for(Ut=0;Ut<pt.length;Ut++){const n=pt[Ut];n&&n.active!==!1&&ln(n,null,14)}}finally{Ut=0,pt.length=0,ou(),$o=!1,Vl=null,(pt.length||Es.length||$s.length)&&ru(e)}}function kp(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Me;let o=n;const l=t.startsWith("update:"),i=l&&t.slice(7);if(i&&i in s){const f=`${i==="modelValue"?"model":i}Modifiers`,{number:p,trim:d}=s[f]||Me;d&&(o=n.map(h=>h.trim())),p&&(o=n.map(Fr))}let a,c=s[a=ir(t)]||s[a=ir(Bt(t))];!c&&l&&(c=s[a=ir(Rn(t))]),c&&Ct(c,e,6,o);const u=s[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ct(u,e,6,o)}}function lu(e,t,n=!1){const s=t.emitsCache,o=s.get(e);if(o!==void 0)return o;const l=e.emits;let i={},a=!1;if(!ae(e)){const c=u=>{const f=lu(u,t,!0);f&&(a=!0,tt(i,f))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!l&&!a?(s.set(e,null),null):(ne(l)?l.forEach(c=>i[c]=null):tt(i,l),s.set(e,i),i)}function Yo(e,t){return!e||!Bo(t)?!1:(t=t.slice(2).replace(/Once$/,""),_e(e,t[0].toLowerCase()+t.slice(1))||_e(e,Rn(t))||_e(e,t))}let qe=null,Zo=null;function Oo(e){const t=qe;return qe=e,Zo=e&&e.type.__scopeId||null,t}function b3(e){Zo=e}function _3(){Zo=null}function B(e,t=qe,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&Bi(-1);const l=Oo(t),i=e(...o);return Oo(l),s._d&&Bi(1),i};return s._n=!0,s._c=!0,s._d=!0,s}function ar(e){const{type:t,vnode:n,proxy:s,withProxy:o,props:l,propsOptions:[i],slots:a,attrs:c,emit:u,render:f,renderCache:p,data:d,setupState:h,ctx:m,inheritAttrs:v}=e;let y,E;const A=Oo(e);try{if(n.shapeFlag&4){const $=o||s;y=Rt(f.call($,$,p,l,h,d,m)),E=c}else{const $=t;y=Rt($.length>1?$(l,{attrs:c,slots:a,emit:u}):$(l,null)),E=t.props?c:Sp(c)}}catch($){Cs.length=0,qo($,e,1),y=F(dn)}let S=y;if(E&&v!==!1){const $=Object.keys(E),{shapeFlag:R}=S;$.length&&R&7&&(i&&$.some(Ol)&&(E=Ap(E,i)),S=In(S,E))}return n.dirs&&(S=In(S),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),y=S,Oo(A),y}const Sp=e=>{let t;for(const n in e)(n==="class"||n==="style"||Bo(n))&&((t||(t={}))[n]=e[n]);return t},Ap=(e,t)=>{const n={};for(const s in e)(!Ol(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Ep(e,t,n){const{props:s,children:o,component:l}=e,{props:i,children:a,patchFlag:c}=t,u=l.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Mi(s,i,u):!!i;if(c&8){const f=t.dynamicProps;for(let p=0;p<f.length;p++){const d=f[p];if(i[d]!==s[d]&&!Yo(u,d))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:s===i?!1:s?i?Mi(s,i,u):!0:!!i;return!1}function Mi(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const l=s[o];if(t[l]!==e[l]&&!Yo(n,l))return!0}return!1}function $p({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const iu=e=>e.__isSuspense;function Op(e,t){t&&t.pendingBranch?ne(e)?t.effects.push(...e):t.effects.push(e):xp(e)}function dt(e,t){if(Ve){let n=Ve.provides;const s=Ve.parent&&Ve.parent.provides;s===n&&(n=Ve.provides=Object.create(s)),n[e]=t}}function W(e,t,n=!1){const s=Ve||qe;if(s){const o=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&ae(t)?t.call(s.proxy):t}}function eo(e,t){return zl(e,null,t)}const Ti={};function ce(e,t,n){return zl(e,t,n)}function zl(e,t,{immediate:n,deep:s,flush:o,onTrack:l,onTrigger:i}=Me){const a=Ve;let c,u=!1,f=!1;if(Se(e)?(c=()=>e.value,u=Nr(e)):es(e)?(c=()=>e,s=!0):ne(e)?(f=!0,u=e.some(E=>es(E)||Nr(E)),c=()=>e.map(E=>{if(Se(E))return E.value;if(es(E))return kn(E);if(ae(E))return ln(E,a,2)})):ae(e)?t?c=()=>ln(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return p&&p(),Ct(e,a,3,[d])}:c=Ot,t&&s){const E=c;c=()=>kn(E())}let p,d=E=>{p=y.onStop=()=>{ln(E,a,4)}};if(Gs)return d=Ot,t?n&&Ct(t,a,3,[c(),f?[]:void 0,d]):c(),Ot;let h=f?[]:Ti;const m=()=>{if(!!y.active)if(t){const E=y.run();(s||u||(f?E.some((A,S)=>js(A,h[S])):js(E,h)))&&(p&&p(),Ct(t,a,3,[E,h===Ti?void 0:h,d]),h=E)}else y.run()};m.allowRecurse=!!t;let v;o==="sync"?v=m:o==="post"?v=()=>ze(m,a&&a.suspense):v=()=>wp(m);const y=new Ll(c,v);return t?n?m():h=y.run():o==="post"?ze(y.run.bind(y),a&&a.suspense):y.run(),()=>{y.stop(),a&&a.scope&&Cl(a.scope.effects,y)}}function Cp(e,t,n){const s=this.proxy,o=Re(e)?e.includes(".")?au(s,e):()=>s[e]:e.bind(s,s);let l;ae(t)?l=t:(l=t.handler,n=t);const i=Ve;os(this);const a=zl(o,l.bind(s),n);return i?os(i):On(),a}function au(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}function kn(e,t){if(!He(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Se(e))kn(e.value,t);else if(ne(e))for(let n=0;n<e.length;n++)kn(e[n],t);else if(Dc(e)||Jn(e))e.forEach(n=>{kn(n,t)});else if(Wc(e))for(const n in e)kn(e[n],t);return e}function cu(e,t){e.shapeFlag&6&&e.component?cu(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ke(e){return ae(e)?{setup:e,name:e.name}:e}const ts=e=>!!e.type.__asyncLoader,uu=e=>e.type.__isKeepAlive,Pp={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Nn(),s=n.ctx;if(!s.renderer)return()=>{const A=t.default&&t.default();return A&&A.length===1?A[0]:A};const o=new Map,l=new Set;let i=null;const a=n.suspense,{renderer:{p:c,m:u,um:f,o:{createElement:p}}}=s,d=p("div");s.activate=(A,S,$,R,L)=>{const H=A.component;u(A,S,$,0,a),c(H.vnode,A,S,$,H,a,R,A.slotScopeIds,L),ze(()=>{H.isDeactivated=!1,H.a&&Xn(H.a);const ee=A.props&&A.props.onVnodeMounted;ee&&yt(ee,H.parent,A)},a)},s.deactivate=A=>{const S=A.component;u(A,d,null,1,a),ze(()=>{S.da&&Xn(S.da);const $=A.props&&A.props.onVnodeUnmounted;$&&yt($,S.parent,A),S.isDeactivated=!0},a)};function h(A){cr(A),f(A,n,a,!0)}function m(A){o.forEach((S,$)=>{const R=Kr(S.type);R&&(!A||!A(R))&&v($)})}function v(A){const S=o.get(A);!i||S.type!==i.type?h(S):i&&cr(i),o.delete(A),l.delete(A)}ce(()=>[e.include,e.exclude],([A,S])=>{A&&m($=>As(A,$)),S&&m($=>!As(S,$))},{flush:"post",deep:!0});let y=null;const E=()=>{y!=null&&o.set(y,ur(n.subTree))};return us(E),hu(E),Jo(()=>{o.forEach(A=>{const{subTree:S,suspense:$}=n,R=ur(S);if(A.type===R.type){cr(R);const L=R.component.da;L&&ze(L,$);return}h(A)})}),()=>{if(y=null,!t.default)return null;const A=t.default(),S=A[0];if(A.length>1)return i=null,A;if(!Fn(S)||!(S.shapeFlag&4)&&!(S.shapeFlag&128))return i=null,S;let $=ur(S);const R=$.type,L=Kr(ts($)?$.type.__asyncResolved||{}:R),{include:H,exclude:ee,max:re}=e;if(H&&(!L||!As(H,L))||ee&&L&&As(ee,L))return i=$,S;const me=$.key==null?R:$.key,ye=o.get(me);return $.el&&($=In($),S.shapeFlag&128&&(S.ssContent=$)),y=me,ye?($.el=ye.el,$.component=ye.component,$.transition&&cu($,$.transition),$.shapeFlag|=512,l.delete(me),l.add(me)):(l.add(me),re&&l.size>parseInt(re,10)&&v(l.values().next().value)),$.shapeFlag|=256,i=$,iu(S.type)?S:$}}},fu=Pp;function As(e,t){return ne(e)?e.some(n=>As(n,t)):Re(e)?e.split(",").includes(t):e.test?e.test(t):!1}function Mp(e,t){du(e,"a",t)}function Tp(e,t){du(e,"da",t)}function du(e,t,n=Ve){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Qo(t,s,n),n){let o=n.parent;for(;o&&o.parent;)uu(o.parent.vnode)&&Fp(s,t,n,o),o=o.parent}}function Fp(e,t,n,s){const o=Qo(t,e,s,!0);Xo(()=>{Cl(s[t],o)},n)}function cr(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function ur(e){return e.shapeFlag&128?e.ssContent:e}function Qo(e,t,n=Ve,s=!1){if(n){const o=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;as(),os(n);const a=Ct(t,n,e,i);return On(),cs(),a});return s?o.unshift(l):o.push(l),l}}const Yt=e=>(t,n=Ve)=>(!Gs||e==="sp")&&Qo(e,t,n),pu=Yt("bm"),us=Yt("m"),Ip=Yt("bu"),hu=Yt("u"),Jo=Yt("bum"),Xo=Yt("um"),Lp=Yt("sp"),Dp=Yt("rtg"),Rp=Yt("rtc");function Np(e,t=Ve){Qo("ec",e,t)}function wt(e,t){const n=qe;if(n===null)return e;const s=tr(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let l=0;l<t.length;l++){let[i,a,c,u=Me]=t[l];ae(i)&&(i={mounted:i,updated:i}),i.deep&&kn(a),o.push({dir:i,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u})}return e}function hn(e,t,n,s){const o=e.dirs,l=t&&t.dirs;for(let i=0;i<o.length;i++){const a=o[i];l&&(a.oldValue=l[i].value);let c=a.dir[s];c&&(as(),Ct(c,n,8,[e.el,a,e,t]),cs())}}const mu="components",Wp="directives";function Br(e,t){return gu(mu,e,!0,t)||e}const jp=Symbol();function Co(e){return gu(Wp,e)}function gu(e,t,n=!0,s=!1){const o=qe||Ve;if(o){const l=o.type;if(e===mu){const a=Kr(l,!1);if(a&&(a===t||a===Bt(t)||a===zo(Bt(t))))return l}const i=Fi(o[e]||l[e],t)||Fi(o.appContext[e],t);return!i&&s?l:i}}function Fi(e,t){return e&&(e[t]||e[Bt(t)]||e[zo(Bt(t))])}function to(e,t,n,s){let o;const l=n&&n[s];if(ne(e)||Re(e)){o=new Array(e.length);for(let i=0,a=e.length;i<a;i++)o[i]=t(e[i],i,void 0,l&&l[i])}else if(typeof e=="number"){o=new Array(e);for(let i=0;i<e;i++)o[i]=t(i+1,i,void 0,l&&l[i])}else if(He(e))if(e[Symbol.iterator])o=Array.from(e,(i,a)=>t(i,a,void 0,l&&l[a]));else{const i=Object.keys(e);o=new Array(i.length);for(let a=0,c=i.length;a<c;a++){const u=i[a];o[a]=t(e[u],u,a,l&&l[a])}}else o=[];return n&&(n[s]=o),o}function Ht(e,t,n={},s,o){if(qe.isCE||qe.parent&&ts(qe.parent)&&qe.parent.isCE)return F("slot",t==="default"?null:{name:t},s&&s());let l=e[t];l&&l._c&&(l._d=!1),x();const i=l&&bu(l(n)),a=U(Ee,{key:n.key||`_${t}`},i||(s?s():[]),i&&e._===1?64:-2);return!o&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),l&&l._c&&(l._d=!0),a}function bu(e){return e.some(t=>Fn(t)?!(t.type===dn||t.type===Ee&&!bu(t.children)):!0)?e:null}const Hr=e=>e?Ou(e)?tr(e)||e.proxy:Hr(e.parent):null,Po=tt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Hr(e.parent),$root:e=>Hr(e.root),$emit:e=>e.emit,$options:e=>yu(e),$forceUpdate:e=>e.f||(e.f=()=>tu(e.update)),$nextTick:e=>e.n||(e.n=Ge.bind(e.proxy)),$watch:e=>Cp.bind(e)}),Bp={get({_:e},t){const{ctx:n,setupState:s,data:o,props:l,accessCache:i,type:a,appContext:c}=e;let u;if(t[0]!=="$"){const h=i[t];if(h!==void 0)switch(h){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return l[t]}else{if(s!==Me&&_e(s,t))return i[t]=1,s[t];if(o!==Me&&_e(o,t))return i[t]=2,o[t];if((u=e.propsOptions[0])&&_e(u,t))return i[t]=3,l[t];if(n!==Me&&_e(n,t))return i[t]=4,n[t];Vr&&(i[t]=0)}}const f=Po[t];let p,d;if(f)return t==="$attrs"&&bt(e,"get",t),f(e);if((p=a.__cssModules)&&(p=p[t]))return p;if(n!==Me&&_e(n,t))return i[t]=4,n[t];if(d=c.config.globalProperties,_e(d,t))return d[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:l}=e;return o!==Me&&_e(o,t)?(o[t]=n,!0):s!==Me&&_e(s,t)?(s[t]=n,!0):_e(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,propsOptions:l}},i){let a;return!!n[i]||e!==Me&&_e(e,i)||t!==Me&&_e(t,i)||(a=l[0])&&_e(a,i)||_e(s,i)||_e(Po,i)||_e(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:_e(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Vr=!0;function Hp(e){const t=yu(e),n=e.proxy,s=e.ctx;Vr=!1,t.beforeCreate&&Ii(t.beforeCreate,e,"bc");const{data:o,computed:l,methods:i,watch:a,provide:c,inject:u,created:f,beforeMount:p,mounted:d,beforeUpdate:h,updated:m,activated:v,deactivated:y,beforeDestroy:E,beforeUnmount:A,destroyed:S,unmounted:$,render:R,renderTracked:L,renderTriggered:H,errorCaptured:ee,serverPrefetch:re,expose:me,inheritAttrs:ye,components:Ie,directives:Ne,filters:Ue}=t;if(u&&Vp(u,s,null,e.appContext.config.unwrapInjectedRef),i)for(const se in i){const X=i[se];ae(X)&&(s[se]=X.bind(n))}if(o){const se=o.call(n,n);He(se)&&(e.data=Le(se))}if(Vr=!0,l)for(const se in l){const X=l[se],ge=ae(X)?X.bind(n,n):ae(X.get)?X.get.bind(n,n):Ot,Lt=!ae(X)&&ae(X.set)?X.set.bind(n):Ot,Ze=O({get:ge,set:Lt});Object.defineProperty(s,se,{enumerable:!0,configurable:!0,get:()=>Ze.value,set:_t=>Ze.value=_t})}if(a)for(const se in a)_u(a[se],s,n,se);if(c){const se=ae(c)?c.call(n):c;Reflect.ownKeys(se).forEach(X=>{dt(X,se[X])})}f&&Ii(f,e,"c");function te(se,X){ne(X)?X.forEach(ge=>se(ge.bind(n))):X&&se(X.bind(n))}if(te(pu,p),te(us,d),te(Ip,h),te(hu,m),te(Mp,v),te(Tp,y),te(Np,ee),te(Rp,L),te(Dp,H),te(Jo,A),te(Xo,$),te(Lp,re),ne(me))if(me.length){const se=e.exposed||(e.exposed={});me.forEach(X=>{Object.defineProperty(se,X,{get:()=>n[X],set:ge=>n[X]=ge})})}else e.exposed||(e.exposed={});R&&e.render===Ot&&(e.render=R),ye!=null&&(e.inheritAttrs=ye),Ie&&(e.components=Ie),Ne&&(e.directives=Ne)}function Vp(e,t,n=Ot,s=!1){ne(e)&&(e=zr(e));for(const o in e){const l=e[o];let i;He(l)?"default"in l?i=W(l.from||o,l.default,!0):i=W(l.from||o):i=W(l),Se(i)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[o]=i}}function Ii(e,t,n){Ct(ne(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function _u(e,t,n,s){const o=s.includes(".")?au(n,s):()=>n[s];if(Re(e)){const l=t[e];ae(l)&&ce(o,l)}else if(ae(e))ce(o,e.bind(n));else if(He(e))if(ne(e))e.forEach(l=>_u(l,t,n,s));else{const l=ae(e.handler)?e.handler.bind(n):t[e.handler];ae(l)&&ce(o,l,e)}}function yu(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:l,config:{optionMergeStrategies:i}}=e.appContext,a=l.get(t);let c;return a?c=a:!o.length&&!n&&!s?c=t:(c={},o.length&&o.forEach(u=>Mo(c,u,i,!0)),Mo(c,t,i)),l.set(t,c),c}function Mo(e,t,n,s=!1){const{mixins:o,extends:l}=t;l&&Mo(e,l,n,!0),o&&o.forEach(i=>Mo(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const a=zp[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const zp={data:Li,props:_n,emits:_n,methods:_n,computed:_n,beforeCreate:Qe,created:Qe,beforeMount:Qe,mounted:Qe,beforeUpdate:Qe,updated:Qe,beforeDestroy:Qe,beforeUnmount:Qe,destroyed:Qe,unmounted:Qe,activated:Qe,deactivated:Qe,errorCaptured:Qe,serverPrefetch:Qe,components:_n,directives:_n,watch:Up,provide:Li,inject:Gp};function Li(e,t){return t?e?function(){return tt(ae(e)?e.call(this,this):e,ae(t)?t.call(this,this):t)}:t:e}function Gp(e,t){return _n(zr(e),zr(t))}function zr(e){if(ne(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Qe(e,t){return e?[...new Set([].concat(e,t))]:t}function _n(e,t){return e?tt(tt(Object.create(null),e),t):t}function Up(e,t){if(!e)return t;if(!t)return e;const n=tt(Object.create(null),e);for(const s in t)n[s]=Qe(e[s],t[s]);return n}function qp(e,t,n,s=!1){const o={},l={};Eo(l,er,1),e.propsDefaults=Object.create(null),vu(e,t,o,l);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=s?o:ap(o):e.type.props?e.props=o:e.props=l,e.attrs=l}function Kp(e,t,n,s){const{props:o,attrs:l,vnode:{patchFlag:i}}=e,a=xe(o),[c]=e.propsOptions;let u=!1;if((s||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let p=0;p<f.length;p++){let d=f[p];if(Yo(e.emitsOptions,d))continue;const h=t[d];if(c)if(_e(l,d))h!==l[d]&&(l[d]=h,u=!0);else{const m=Bt(d);o[m]=Gr(c,a,m,h,e,!1)}else h!==l[d]&&(l[d]=h,u=!0)}}}else{vu(e,t,o,l)&&(u=!0);let f;for(const p in a)(!t||!_e(t,p)&&((f=Rn(p))===p||!_e(t,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(o[p]=Gr(c,a,p,void 0,e,!0)):delete o[p]);if(l!==a)for(const p in l)(!t||!_e(t,p)&&!0)&&(delete l[p],u=!0)}u&&Kt(e,"set","$attrs")}function vu(e,t,n,s){const[o,l]=e.propsOptions;let i=!1,a;if(t)for(let c in t){if(bo(c))continue;const u=t[c];let f;o&&_e(o,f=Bt(c))?!l||!l.includes(f)?n[f]=u:(a||(a={}))[f]=u:Yo(e.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,i=!0)}if(l){const c=xe(n),u=a||Me;for(let f=0;f<l.length;f++){const p=l[f];n[p]=Gr(o,c,p,u[p],e,!_e(u,p))}}return i}function Gr(e,t,n,s,o,l){const i=e[n];if(i!=null){const a=_e(i,"default");if(a&&s===void 0){const c=i.default;if(i.type!==Function&&ae(c)){const{propsDefaults:u}=o;n in u?s=u[n]:(os(o),s=u[n]=c.call(null,t),On())}else s=c}i[0]&&(l&&!a?s=!1:i[1]&&(s===""||s===Rn(n))&&(s=!0))}return s}function wu(e,t,n=!1){const s=t.propsCache,o=s.get(e);if(o)return o;const l=e.props,i={},a=[];let c=!1;if(!ae(e)){const f=p=>{c=!0;const[d,h]=wu(p,t,!0);tt(i,d),h&&a.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!l&&!c)return s.set(e,Qn),Qn;if(ne(l))for(let f=0;f<l.length;f++){const p=Bt(l[f]);Di(p)&&(i[p]=Me)}else if(l)for(const f in l){const p=Bt(f);if(Di(p)){const d=l[f],h=i[p]=ne(d)||ae(d)?{type:d}:d;if(h){const m=Wi(Boolean,h.type),v=Wi(String,h.type);h[0]=m>-1,h[1]=v<0||m<v,(m>-1||_e(h,"default"))&&a.push(p)}}}const u=[i,a];return s.set(e,u),u}function Di(e){return e[0]!=="$"}function Ri(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ni(e,t){return Ri(e)===Ri(t)}function Wi(e,t){return ne(t)?t.findIndex(n=>Ni(n,e)):ae(t)&&Ni(t,e)?0:-1}const xu=e=>e[0]==="_"||e==="$stable",Gl=e=>ne(e)?e.map(Rt):[Rt(e)],Yp=(e,t,n)=>{if(t._n)return t;const s=B((...o)=>Gl(t(...o)),n);return s._c=!1,s},ku=(e,t,n)=>{const s=e._ctx;for(const o in e){if(xu(o))continue;const l=e[o];if(ae(l))t[o]=Yp(o,l,s);else if(l!=null){const i=Gl(l);t[o]=()=>i}}},Su=(e,t)=>{const n=Gl(t);e.slots.default=()=>n},Zp=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=xe(t),Eo(t,"_",n)):ku(t,e.slots={})}else e.slots={},t&&Su(e,t);Eo(e.slots,er,1)},Qp=(e,t,n)=>{const{vnode:s,slots:o}=e;let l=!0,i=Me;if(s.shapeFlag&32){const a=t._;a?n&&a===1?l=!1:(tt(o,t),!n&&a===1&&delete o._):(l=!t.$stable,ku(t,o)),i=t}else t&&(Su(e,t),i={default:1});if(l)for(const a in o)!xu(a)&&!(a in i)&&delete o[a]};function Au(){return{app:null,config:{isNativeTag:Od,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jp=0;function Xp(e,t){return function(s,o=null){ae(s)||(s=Object.assign({},s)),o!=null&&!He(o)&&(o=null);const l=Au(),i=new Set;let a=!1;const c=l.app={_uid:Jp++,_component:s,_props:o,_container:null,_context:l,_instance:null,version:bh,get config(){return l.config},set config(u){},use(u,...f){return i.has(u)||(u&&ae(u.install)?(i.add(u),u.install(c,...f)):ae(u)&&(i.add(u),u(c,...f))),c},mixin(u){return l.mixins.includes(u)||l.mixins.push(u),c},component(u,f){return f?(l.components[u]=f,c):l.components[u]},directive(u,f){return f?(l.directives[u]=f,c):l.directives[u]},mount(u,f,p){if(!a){const d=F(s,o);return d.appContext=l,f&&t?t(d,u):e(d,u,p),a=!0,c._container=u,u.__vue_app__=c,tr(d.component)||d.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,f){return l.provides[u]=f,c}};return c}}function Ur(e,t,n,s,o=!1){if(ne(e)){e.forEach((d,h)=>Ur(d,t&&(ne(t)?t[h]:t),n,s,o));return}if(ts(s)&&!o)return;const l=s.shapeFlag&4?tr(s.component)||s.component.proxy:s.el,i=o?null:l,{i:a,r:c}=e,u=t&&t.r,f=a.refs===Me?a.refs={}:a.refs,p=a.setupState;if(u!=null&&u!==c&&(Re(u)?(f[u]=null,_e(p,u)&&(p[u]=null)):Se(u)&&(u.value=null)),ae(c))ln(c,a,12,[i,f]);else{const d=Re(c),h=Se(c);if(d||h){const m=()=>{if(e.f){const v=d?f[c]:c.value;o?ne(v)&&Cl(v,l):ne(v)?v.includes(l)||v.push(l):d?(f[c]=[l],_e(p,c)&&(p[c]=f[c])):(c.value=[l],e.k&&(f[e.k]=c.value))}else d?(f[c]=i,_e(p,c)&&(p[c]=i)):h&&(c.value=i,e.k&&(f[e.k]=i))};i?(m.id=-1,ze(m,n)):m()}}}const ze=Op;function eh(e){return th(e)}function th(e,t){const n=Id();n.__VUE__=!0;const{insert:s,remove:o,patchProp:l,createElement:i,createText:a,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:d,setScopeId:h=Ot,cloneNode:m,insertStaticContent:v}=e,y=(g,_,k,M=null,P=null,N=null,G=!1,D=null,j=!!_.dynamicChildren)=>{if(g===_)return;g&&!ms(g,_)&&(M=Y(g),st(g,P,N,!0),g=null),_.patchFlag===-2&&(j=!1,_.dynamicChildren=null);const{type:T,ref:Q,shapeFlag:Z}=_;switch(T){case ql:E(g,_,k,M);break;case dn:A(g,_,k,M);break;case fr:g==null&&S(_,k,M,G);break;case Ee:Ne(g,_,k,M,P,N,G,D,j);break;default:Z&1?L(g,_,k,M,P,N,G,D,j):Z&6?Ue(g,_,k,M,P,N,G,D,j):(Z&64||Z&128)&&T.process(g,_,k,M,P,N,G,D,j,Te)}Q!=null&&P&&Ur(Q,g&&g.ref,N,_||g,!_)},E=(g,_,k,M)=>{if(g==null)s(_.el=a(_.children),k,M);else{const P=_.el=g.el;_.children!==g.children&&u(P,_.children)}},A=(g,_,k,M)=>{g==null?s(_.el=c(_.children||""),k,M):_.el=g.el},S=(g,_,k,M)=>{[g.el,g.anchor]=v(g.children,_,k,M,g.el,g.anchor)},$=({el:g,anchor:_},k,M)=>{let P;for(;g&&g!==_;)P=d(g),s(g,k,M),g=P;s(_,k,M)},R=({el:g,anchor:_})=>{let k;for(;g&&g!==_;)k=d(g),o(g),g=k;o(_)},L=(g,_,k,M,P,N,G,D,j)=>{G=G||_.type==="svg",g==null?H(_,k,M,P,N,G,D,j):me(g,_,P,N,G,D,j)},H=(g,_,k,M,P,N,G,D)=>{let j,T;const{type:Q,props:Z,shapeFlag:J,transition:oe,patchFlag:ve,dirs:Ce}=g;if(g.el&&m!==void 0&&ve===-1)j=g.el=m(g.el);else{if(j=g.el=i(g.type,N,Z&&Z.is,Z),J&8?f(j,g.children):J&16&&re(g.children,j,null,M,P,N&&Q!=="foreignObject",G,D),Ce&&hn(g,null,M,"created"),Z){for(const Fe in Z)Fe!=="value"&&!bo(Fe)&&l(j,Fe,null,Z[Fe],N,g.children,M,P,I);"value"in Z&&l(j,"value",null,Z.value),(T=Z.onVnodeBeforeMount)&&yt(T,M,g)}ee(j,g,g.scopeId,G,M)}Ce&&hn(g,null,M,"beforeMount");const Pe=(!P||P&&!P.pendingBranch)&&oe&&!oe.persisted;Pe&&oe.beforeEnter(j),s(j,_,k),((T=Z&&Z.onVnodeMounted)||Pe||Ce)&&ze(()=>{T&&yt(T,M,g),Pe&&oe.enter(j),Ce&&hn(g,null,M,"mounted")},P)},ee=(g,_,k,M,P)=>{if(k&&h(g,k),M)for(let N=0;N<M.length;N++)h(g,M[N]);if(P){let N=P.subTree;if(_===N){const G=P.vnode;ee(g,G,G.scopeId,G.slotScopeIds,P.parent)}}},re=(g,_,k,M,P,N,G,D,j=0)=>{for(let T=j;T<g.length;T++){const Q=g[T]=D?tn(g[T]):Rt(g[T]);y(null,Q,_,k,M,P,N,G,D)}},me=(g,_,k,M,P,N,G)=>{const D=_.el=g.el;let{patchFlag:j,dynamicChildren:T,dirs:Q}=_;j|=g.patchFlag&16;const Z=g.props||Me,J=_.props||Me;let oe;k&&mn(k,!1),(oe=J.onVnodeBeforeUpdate)&&yt(oe,k,_,g),Q&&hn(_,g,k,"beforeUpdate"),k&&mn(k,!0);const ve=P&&_.type!=="foreignObject";if(T?ye(g.dynamicChildren,T,D,k,M,ve,N):G||ge(g,_,D,null,k,M,ve,N,!1),j>0){if(j&16)Ie(D,_,Z,J,k,M,P);else if(j&2&&Z.class!==J.class&&l(D,"class",null,J.class,P),j&4&&l(D,"style",Z.style,J.style,P),j&8){const Ce=_.dynamicProps;for(let Pe=0;Pe<Ce.length;Pe++){const Fe=Ce[Pe],kt=Z[Fe],Bn=J[Fe];(Bn!==kt||Fe==="value")&&l(D,Fe,kt,Bn,P,g.children,k,M,I)}}j&1&&g.children!==_.children&&f(D,_.children)}else!G&&T==null&&Ie(D,_,Z,J,k,M,P);((oe=J.onVnodeUpdated)||Q)&&ze(()=>{oe&&yt(oe,k,_,g),Q&&hn(_,g,k,"updated")},M)},ye=(g,_,k,M,P,N,G)=>{for(let D=0;D<_.length;D++){const j=g[D],T=_[D],Q=j.el&&(j.type===Ee||!ms(j,T)||j.shapeFlag&70)?p(j.el):k;y(j,T,Q,null,M,P,N,G,!0)}},Ie=(g,_,k,M,P,N,G)=>{if(k!==M){for(const D in M){if(bo(D))continue;const j=M[D],T=k[D];j!==T&&D!=="value"&&l(g,D,T,j,G,_.children,P,N,I)}if(k!==Me)for(const D in k)!bo(D)&&!(D in M)&&l(g,D,k[D],null,G,_.children,P,N,I);"value"in M&&l(g,"value",k.value,M.value)}},Ne=(g,_,k,M,P,N,G,D,j)=>{const T=_.el=g?g.el:a(""),Q=_.anchor=g?g.anchor:a("");let{patchFlag:Z,dynamicChildren:J,slotScopeIds:oe}=_;oe&&(D=D?D.concat(oe):oe),g==null?(s(T,k,M),s(Q,k,M),re(_.children,k,Q,P,N,G,D,j)):Z>0&&Z&64&&J&&g.dynamicChildren?(ye(g.dynamicChildren,J,k,P,N,G,D),(_.key!=null||P&&_===P.subTree)&&Ul(g,_,!0)):ge(g,_,k,Q,P,N,G,D,j)},Ue=(g,_,k,M,P,N,G,D,j)=>{_.slotScopeIds=D,g==null?_.shapeFlag&512?P.ctx.activate(_,k,M,G,j):Oe(_,k,M,P,N,G,j):te(g,_,j)},Oe=(g,_,k,M,P,N,G)=>{const D=g.component=fh(g,M,P);if(uu(g)&&(D.ctx.renderer=Te),dh(D),D.asyncDep){if(P&&P.registerDep(D,se),!g.el){const j=D.subTree=F(dn);A(null,j,_,k)}return}se(D,g,_,k,P,N,G)},te=(g,_,k)=>{const M=_.component=g.component;if(Ep(g,_,k))if(M.asyncDep&&!M.asyncResolved){X(M,_,k);return}else M.next=_,vp(M.update),M.update();else _.el=g.el,M.vnode=_},se=(g,_,k,M,P,N,G)=>{const D=()=>{if(g.isMounted){let{next:Q,bu:Z,u:J,parent:oe,vnode:ve}=g,Ce=Q,Pe;mn(g,!1),Q?(Q.el=ve.el,X(g,Q,G)):Q=ve,Z&&Xn(Z),(Pe=Q.props&&Q.props.onVnodeBeforeUpdate)&&yt(Pe,oe,Q,ve),mn(g,!0);const Fe=ar(g),kt=g.subTree;g.subTree=Fe,y(kt,Fe,p(kt.el),Y(kt),g,P,N),Q.el=Fe.el,Ce===null&&$p(g,Fe.el),J&&ze(J,P),(Pe=Q.props&&Q.props.onVnodeUpdated)&&ze(()=>yt(Pe,oe,Q,ve),P)}else{let Q;const{el:Z,props:J}=_,{bm:oe,m:ve,parent:Ce}=g,Pe=ts(_);if(mn(g,!1),oe&&Xn(oe),!Pe&&(Q=J&&J.onVnodeBeforeMount)&&yt(Q,Ce,_),mn(g,!0),Z&&le){const Fe=()=>{g.subTree=ar(g),le(Z,g.subTree,g,P,null)};Pe?_.type.__asyncLoader().then(()=>!g.isUnmounted&&Fe()):Fe()}else{const Fe=g.subTree=ar(g);y(null,Fe,k,M,g,P,N),_.el=Fe.el}if(ve&&ze(ve,P),!Pe&&(Q=J&&J.onVnodeMounted)){const Fe=_;ze(()=>yt(Q,Ce,Fe),P)}(_.shapeFlag&256||Ce&&ts(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&g.a&&ze(g.a,P),g.isMounted=!0,_=k=M=null}},j=g.effect=new Ll(D,()=>tu(T),g.scope),T=g.update=()=>j.run();T.id=g.uid,mn(g,!0),T()},X=(g,_,k)=>{_.component=g;const M=g.vnode.props;g.vnode=_,g.next=null,Kp(g,_.props,M,k),Qp(g,_.children,k),as(),Ko(void 0,g.update),cs()},ge=(g,_,k,M,P,N,G,D,j=!1)=>{const T=g&&g.children,Q=g?g.shapeFlag:0,Z=_.children,{patchFlag:J,shapeFlag:oe}=_;if(J>0){if(J&128){Ze(T,Z,k,M,P,N,G,D,j);return}else if(J&256){Lt(T,Z,k,M,P,N,G,D,j);return}}oe&8?(Q&16&&I(T,P,N),Z!==T&&f(k,Z)):Q&16?oe&16?Ze(T,Z,k,M,P,N,G,D,j):I(T,P,N,!0):(Q&8&&f(k,""),oe&16&&re(Z,k,M,P,N,G,D,j))},Lt=(g,_,k,M,P,N,G,D,j)=>{g=g||Qn,_=_||Qn;const T=g.length,Q=_.length,Z=Math.min(T,Q);let J;for(J=0;J<Z;J++){const oe=_[J]=j?tn(_[J]):Rt(_[J]);y(g[J],oe,k,null,P,N,G,D,j)}T>Q?I(g,P,N,!0,!1,Z):re(_,k,M,P,N,G,D,j,Z)},Ze=(g,_,k,M,P,N,G,D,j)=>{let T=0;const Q=_.length;let Z=g.length-1,J=Q-1;for(;T<=Z&&T<=J;){const oe=g[T],ve=_[T]=j?tn(_[T]):Rt(_[T]);if(ms(oe,ve))y(oe,ve,k,null,P,N,G,D,j);else break;T++}for(;T<=Z&&T<=J;){const oe=g[Z],ve=_[J]=j?tn(_[J]):Rt(_[J]);if(ms(oe,ve))y(oe,ve,k,null,P,N,G,D,j);else break;Z--,J--}if(T>Z){if(T<=J){const oe=J+1,ve=oe<Q?_[oe].el:M;for(;T<=J;)y(null,_[T]=j?tn(_[T]):Rt(_[T]),k,ve,P,N,G,D,j),T++}}else if(T>J)for(;T<=Z;)st(g[T],P,N,!0),T++;else{const oe=T,ve=T,Ce=new Map;for(T=ve;T<=J;T++){const it=_[T]=j?tn(_[T]):Rt(_[T]);it.key!=null&&Ce.set(it.key,T)}let Pe,Fe=0;const kt=J-ve+1;let Bn=!1,vi=0;const hs=new Array(kt);for(T=0;T<kt;T++)hs[T]=0;for(T=oe;T<=Z;T++){const it=g[T];if(Fe>=kt){st(it,P,N,!0);continue}let Dt;if(it.key!=null)Dt=Ce.get(it.key);else for(Pe=ve;Pe<=J;Pe++)if(hs[Pe-ve]===0&&ms(it,_[Pe])){Dt=Pe;break}Dt===void 0?st(it,P,N,!0):(hs[Dt-ve]=T+1,Dt>=vi?vi=Dt:Bn=!0,y(it,_[Dt],k,null,P,N,G,D,j),Fe++)}const wi=Bn?nh(hs):Qn;for(Pe=wi.length-1,T=kt-1;T>=0;T--){const it=ve+T,Dt=_[it],xi=it+1<Q?_[it+1].el:M;hs[T]===0?y(null,Dt,k,xi,P,N,G,D,j):Bn&&(Pe<0||T!==wi[Pe]?_t(Dt,k,xi,2):Pe--)}}},_t=(g,_,k,M,P=null)=>{const{el:N,type:G,transition:D,children:j,shapeFlag:T}=g;if(T&6){_t(g.component.subTree,_,k,M);return}if(T&128){g.suspense.move(_,k,M);return}if(T&64){G.move(g,_,k,Te);return}if(G===Ee){s(N,_,k);for(let Z=0;Z<j.length;Z++)_t(j[Z],_,k,M);s(g.anchor,_,k);return}if(G===fr){$(g,_,k);return}if(M!==2&&T&1&&D)if(M===0)D.beforeEnter(N),s(N,_,k),ze(()=>D.enter(N),P);else{const{leave:Z,delayLeave:J,afterLeave:oe}=D,ve=()=>s(N,_,k),Ce=()=>{Z(N,()=>{ve(),oe&&oe()})};J?J(N,ve,Ce):Ce()}else s(N,_,k)},st=(g,_,k,M=!1,P=!1)=>{const{type:N,props:G,ref:D,children:j,dynamicChildren:T,shapeFlag:Q,patchFlag:Z,dirs:J}=g;if(D!=null&&Ur(D,null,k,g,!0),Q&256){_.ctx.deactivate(g);return}const oe=Q&1&&J,ve=!ts(g);let Ce;if(ve&&(Ce=G&&G.onVnodeBeforeUnmount)&&yt(Ce,_,g),Q&6)K(g.component,k,M);else{if(Q&128){g.suspense.unmount(k,M);return}oe&&hn(g,null,_,"beforeUnmount"),Q&64?g.type.remove(g,_,k,P,Te,M):T&&(N!==Ee||Z>0&&Z&64)?I(T,_,k,!1,!0):(N===Ee&&Z&384||!P&&Q&16)&&I(j,_,k),M&&Qt(g)}(ve&&(Ce=G&&G.onVnodeUnmounted)||oe)&&ze(()=>{Ce&&yt(Ce,_,g),oe&&hn(g,null,_,"unmounted")},k)},Qt=g=>{const{type:_,el:k,anchor:M,transition:P}=g;if(_===Ee){C(k,M);return}if(_===fr){R(g);return}const N=()=>{o(k),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(g.shapeFlag&1&&P&&!P.persisted){const{leave:G,delayLeave:D}=P,j=()=>G(k,N);D?D(g.el,N,j):j()}else N()},C=(g,_)=>{let k;for(;g!==_;)k=d(g),o(g),g=k;o(_)},K=(g,_,k)=>{const{bum:M,scope:P,update:N,subTree:G,um:D}=g;M&&Xn(M),P.stop(),N&&(N.active=!1,st(G,g,_,k)),D&&ze(D,_),ze(()=>{g.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},I=(g,_,k,M=!1,P=!1,N=0)=>{for(let G=N;G<g.length;G++)st(g[G],_,k,M,P)},Y=g=>g.shapeFlag&6?Y(g.component.subTree):g.shapeFlag&128?g.suspense.next():d(g.anchor||g.el),be=(g,_,k)=>{g==null?_._vnode&&st(_._vnode,null,null,!0):y(_._vnode||null,g,_,null,null,null,k),ou(),_._vnode=g},Te={p:y,um:st,m:_t,r:Qt,mt:Oe,mc:re,pc:ge,pbc:ye,n:Y,o:e};let de,le;return t&&([de,le]=t(Te)),{render:be,hydrate:de,createApp:Xp(be,de)}}function mn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ul(e,t,n=!1){const s=e.children,o=t.children;if(ne(s)&&ne(o))for(let l=0;l<s.length;l++){const i=s[l];let a=o[l];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[l]=tn(o[l]),a.el=i.el),n||Ul(i,a))}}function nh(e){const t=e.slice(),n=[0];let s,o,l,i,a;const c=e.length;for(s=0;s<c;s++){const u=e[s];if(u!==0){if(o=n[n.length-1],e[o]<u){t[s]=o,n.push(s);continue}for(l=0,i=n.length-1;l<i;)a=l+i>>1,e[n[a]]<u?l=a+1:i=a;u<e[n[l]]&&(l>0&&(t[s]=n[l-1]),n[l]=s)}}for(l=n.length,i=n[l-1];l-- >0;)n[l]=i,i=t[i];return n}const sh=e=>e.__isTeleport,Os=e=>e&&(e.disabled||e.disabled===""),ji=e=>typeof SVGElement<"u"&&e instanceof SVGElement,qr=(e,t)=>{const n=e&&e.to;return Re(n)?t?t(n):null:n},oh={__isTeleport:!0,process(e,t,n,s,o,l,i,a,c,u){const{mc:f,pc:p,pbc:d,o:{insert:h,querySelector:m,createText:v,createComment:y}}=u,E=Os(t.props);let{shapeFlag:A,children:S,dynamicChildren:$}=t;if(e==null){const R=t.el=v(""),L=t.anchor=v("");h(R,n,s),h(L,n,s);const H=t.target=qr(t.props,m),ee=t.targetAnchor=v("");H&&(h(ee,H),i=i||ji(H));const re=(me,ye)=>{A&16&&f(S,me,ye,o,l,i,a,c)};E?re(n,L):H&&re(H,ee)}else{t.el=e.el;const R=t.anchor=e.anchor,L=t.target=e.target,H=t.targetAnchor=e.targetAnchor,ee=Os(e.props),re=ee?n:L,me=ee?R:H;if(i=i||ji(L),$?(d(e.dynamicChildren,$,re,o,l,i,a),Ul(e,t,!0)):c||p(e,t,re,me,o,l,i,a,!1),E)ee||fo(t,n,R,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ye=t.target=qr(t.props,m);ye&&fo(t,ye,null,u,0)}else ee&&fo(t,L,H,u,1)}},remove(e,t,n,s,{um:o,o:{remove:l}},i){const{shapeFlag:a,children:c,anchor:u,targetAnchor:f,target:p,props:d}=e;if(p&&l(f),(i||!Os(d))&&(l(u),a&16))for(let h=0;h<c.length;h++){const m=c[h];o(m,t,n,!0,!!m.dynamicChildren)}},move:fo,hydrate:rh};function fo(e,t,n,{o:{insert:s},m:o},l=2){l===0&&s(e.targetAnchor,t,n);const{el:i,anchor:a,shapeFlag:c,children:u,props:f}=e,p=l===2;if(p&&s(i,t,n),(!p||Os(f))&&c&16)for(let d=0;d<u.length;d++)o(u[d],t,n,2);p&&s(a,t,n)}function rh(e,t,n,s,o,l,{o:{nextSibling:i,parentNode:a,querySelector:c}},u){const f=t.target=qr(t.props,c);if(f){const p=f._lpa||f.firstChild;if(t.shapeFlag&16)if(Os(t.props))t.anchor=u(i(e),t,a(e),n,s,o,l),t.targetAnchor=p;else{t.anchor=i(e);let d=p;for(;d;)if(d=i(d),d&&d.nodeType===8&&d.data==="teleport anchor"){t.targetAnchor=d,f._lpa=t.targetAnchor&&i(t.targetAnchor);break}u(p,t,f,n,s,o,l)}}return t.anchor&&i(t.anchor)}const lh=oh,Ee=Symbol(void 0),ql=Symbol(void 0),dn=Symbol(void 0),fr=Symbol(void 0),Cs=[];let $t=null;function x(e=!1){Cs.push($t=e?null:[])}function ih(){Cs.pop(),$t=Cs[Cs.length-1]||null}let zs=1;function Bi(e){zs+=e}function Eu(e){return e.dynamicChildren=zs>0?$t||Qn:null,ih(),zs>0&&$t&&$t.push(e),e}function V(e,t,n,s,o,l){return Eu(r(e,t,n,s,o,l,!0))}function U(e,t,n,s,o){return Eu(F(e,t,n,s,o,!0))}function Fn(e){return e?e.__v_isVNode===!0:!1}function ms(e,t){return e.type===t.type&&e.key===t.key}const er="__vInternal",$u=({key:e})=>e!=null?e:null,_o=({ref:e,ref_key:t,ref_for:n})=>e!=null?Re(e)||Se(e)||ae(e)?{i:qe,r:e,k:t,f:!!n}:e:null;function r(e,t=null,n=null,s=0,o=null,l=e===Ee?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&$u(t),ref:t&&_o(t),scopeId:Zo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null};return a?(Kl(c,n),l&128&&e.normalize(c)):n&&(c.shapeFlag|=Re(n)?8:16),zs>0&&!i&&$t&&(c.patchFlag>0||l&6)&&c.patchFlag!==32&&$t.push(c),c}const F=ah;function ah(e,t=null,n=null,s=0,o=null,l=!1){if((!e||e===jp)&&(e=dn),Fn(e)){const a=In(e,t,!0);return n&&Kl(a,n),zs>0&&!l&&$t&&(a.shapeFlag&6?$t[$t.indexOf(e)]=a:$t.push(a)),a.patchFlag|=-2,a}if(gh(e)&&(e=e.__vccOpts),t){t=ue(t);let{class:a,style:c}=t;a&&!Re(a)&&(t.class=De(a)),He(c)&&(Qc(c)&&!ne(c)&&(c=tt({},c)),t.style=Ye(c))}const i=Re(e)?1:iu(e)?128:sh(e)?64:He(e)?4:ae(e)?2:0;return r(e,t,n,s,o,i,l,!0)}function ue(e){return e?Qc(e)||er in e?tt({},e):e:null}function In(e,t,n=!1){const{props:s,ref:o,patchFlag:l,children:i}=e,a=t?Ln(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&$u(a),ref:t&&t.ref?n&&o?ne(o)?o.concat(_o(t)):[o,_o(t)]:_o(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ee?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&In(e.ssContent),ssFallback:e.ssFallback&&In(e.ssFallback),el:e.el,anchor:e.anchor}}function b(e=" ",t=0){return F(ql,null,e,t)}function pe(e="",t=!1){return t?(x(),U(dn,null,e)):F(dn,null,e)}function Rt(e){return e==null||typeof e=="boolean"?F(dn):ne(e)?F(Ee,null,e.slice()):typeof e=="object"?tn(e):F(ql,null,String(e))}function tn(e){return e.el===null||e.memo?e:In(e)}function Kl(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(ne(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),Kl(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(er in t)?t._ctx=qe:o===3&&qe&&(qe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ae(t)?(t={default:t,_ctx:qe},n=32):(t=String(t),s&64?(n=16,t=[b(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ln(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=De([t.class,s.class]));else if(o==="style")t.style=Ye([t.style,s.style]);else if(Bo(o)){const l=t[o],i=s[o];i&&l!==i&&!(ne(l)&&l.includes(i))&&(t[o]=l?[].concat(l,i):i)}else o!==""&&(t[o]=s[o])}return t}function yt(e,t,n,s=null){Ct(e,t,7,[n,s])}const ch=Au();let uh=0;function fh(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||ch,l={uid:uh++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new jc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wu(s,o),emitsOptions:lu(s,o),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:s.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=kp.bind(null,l),e.ce&&e.ce(l),l}let Ve=null;const Nn=()=>Ve||qe,os=e=>{Ve=e,e.scope.on()},On=()=>{Ve&&Ve.scope.off(),Ve=null};function Ou(e){return e.vnode.shapeFlag&4}let Gs=!1;function dh(e,t=!1){Gs=t;const{props:n,children:s}=e.vnode,o=Ou(e);qp(e,n,o,t),Zp(e,s);const l=o?ph(e,t):void 0;return Gs=!1,l}function ph(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Uo(new Proxy(e.ctx,Bp));const{setup:s}=n;if(s){const o=e.setupContext=s.length>1?mh(e):null;os(e),as();const l=ln(s,e,0,[e.props,o]);if(cs(),On(),Rc(l)){if(l.then(On,On),t)return l.then(i=>{Hi(e,i,t)}).catch(i=>{qo(i,e,0)});e.asyncDep=l}else Hi(e,l,t)}else Cu(e,t)}function Hi(e,t,n){ae(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:He(t)&&(e.setupState=Xc(t)),Cu(e,n)}let Vi;function Cu(e,t,n){const s=e.type;if(!e.render){if(!t&&Vi&&!s.render){const o=s.template;if(o){const{isCustomElement:l,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:c}=s,u=tt(tt({isCustomElement:l,delimiters:a},i),c);s.render=Vi(o,u)}}e.render=s.render||Ot}os(e),as(),Hp(e),cs(),On()}function hh(e){return new Proxy(e.attrs,{get(t,n){return bt(e,"get","$attrs"),t[n]}})}function mh(e){const t=s=>{e.exposed=s||{}};let n;return{get attrs(){return n||(n=hh(e))},slots:e.slots,emit:e.emit,expose:t}}function tr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Xc(Uo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Po)return Po[n](e)}}))}function Kr(e,t=!0){return ae(e)?e.displayName||e.name:e.name||t&&e.__name}function gh(e){return ae(e)&&"__vccOpts"in e}const O=(e,t)=>bp(e,t,Gs);function ht(e,t,n){const s=arguments.length;return s===2?He(t)&&!ne(t)?Fn(t)?F(e,null,[t]):F(e,t):F(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Fn(n)&&(n=[n]),F(e,t,n))}const bh="3.2.37",_h="http://www.w3.org/2000/svg",vn=typeof document<"u"?document:null,zi=vn&&vn.createElement("template"),yh={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t?vn.createElementNS(_h,e):vn.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>vn.createTextNode(e),createComment:e=>vn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>vn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,s,o,l){const i=n?n.previousSibling:t.lastChild;if(o&&(o===l||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===l||!(o=o.nextSibling)););else{zi.innerHTML=s?`<svg>${e}</svg>`:e;const a=zi.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function vh(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function wh(e,t,n){const s=e.style,o=Re(n);if(n&&!o){for(const l in n)Yr(s,l,n[l]);if(t&&!Re(t))for(const l in t)n[l]==null&&Yr(s,l,"")}else{const l=s.display;o?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=l)}}const Gi=/\s*!important$/;function Yr(e,t,n){if(ne(n))n.forEach(s=>Yr(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=xh(e,t);Gi.test(n)?e.setProperty(Rn(s),n.replace(Gi,""),"important"):e[s]=n}}const Ui=["Webkit","Moz","ms"],dr={};function xh(e,t){const n=dr[t];if(n)return n;let s=Bt(t);if(s!=="filter"&&s in e)return dr[t]=s;s=zo(s);for(let o=0;o<Ui.length;o++){const l=Ui[o]+s;if(l in e)return dr[t]=l}return t}const qi="http://www.w3.org/1999/xlink";function kh(e,t,n,s,o){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(qi,t.slice(6,t.length)):e.setAttributeNS(qi,t,n);else{const l=Sd(t);n==null||l&&!Ic(n)?e.removeAttribute(t):e.setAttribute(t,l?"":n)}}function Sh(e,t,n,s,o,l,i){if(t==="innerHTML"||t==="textContent"){s&&i(s,o,l),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n==null?"":n;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Ic(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}const[Pu,Ah]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Zr=0;const Eh=Promise.resolve(),$h=()=>{Zr=0},Oh=()=>Zr||(Eh.then($h),Zr=Pu());function qn(e,t,n,s){e.addEventListener(t,n,s)}function Ch(e,t,n,s){e.removeEventListener(t,n,s)}function Ph(e,t,n,s,o=null){const l=e._vei||(e._vei={}),i=l[t];if(s&&i)i.value=s;else{const[a,c]=Mh(t);if(s){const u=l[t]=Th(s,o);qn(e,a,u,c)}else i&&(Ch(e,a,i,c),l[t]=void 0)}}const Ki=/(?:Once|Passive|Capture)$/;function Mh(e){let t;if(Ki.test(e)){t={};let n;for(;n=e.match(Ki);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Rn(e.slice(2)),t]}function Th(e,t){const n=s=>{const o=s.timeStamp||Pu();(Ah||o>=n.attached-1)&&Ct(Fh(s,n.value),t,5,[s])};return n.value=e,n.attached=Oh(),n}function Fh(e,t){if(ne(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const Yi=/^on[a-z]/,Ih=(e,t,n,s,o=!1,l,i,a,c)=>{t==="class"?vh(e,s,o):t==="style"?wh(e,n,s):Bo(t)?Ol(t)||Ph(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Lh(e,t,s,o))?Sh(e,t,s,l,i,a,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),kh(e,t,s,o))};function Lh(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Yi.test(t)&&ae(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Yi.test(t)&&Re(n)?!1:t in e}const Zi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ne(t)?n=>Xn(t,n):t};function Dh(e){e.target.composing=!0}function Qi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Rh={created(e,{modifiers:{lazy:t,trim:n,number:s}},o){e._assign=Zi(o);const l=s||o.props&&o.props.type==="number";qn(e,t?"change":"input",i=>{if(i.target.composing)return;let a=e.value;n&&(a=a.trim()),l&&(a=Fr(a)),e._assign(a)}),n&&qn(e,"change",()=>{e.value=e.value.trim()}),t||(qn(e,"compositionstart",Dh),qn(e,"compositionend",Qi),qn(e,"change",Qi))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:o}},l){if(e._assign=Zi(l),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(o||e.type==="number")&&Fr(e.value)===t))return;const i=t==null?"":t;e.value!==i&&(e.value=i)}},Nh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ji=(e,t)=>n=>{if(!("key"in n))return;const s=Rn(n.key);if(t.some(o=>o===s||Nh[o]===s))return e(n)},Mu={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):gs(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),gs(e,!0),s.enter(e)):s.leave(e,()=>{gs(e,!1)}):gs(e,t))},beforeUnmount(e,{value:t}){gs(e,t)}};function gs(e,t){e.style.display=t?e._vod:"none"}const Wh=tt({patchProp:Ih},yh);let Xi;function jh(){return Xi||(Xi=eh(Wh))}const Bh=(...e)=>{const t=jh().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Hh(s);if(!o)return;const l=t._component;!ae(l)&&!l.render&&!l.template&&(l.template=o.innerHTML),o.innerHTML="";const i=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function Hh(e){return Re(e)?document.querySelector(e):e}var Vh=Object.defineProperty,ea=Object.getOwnPropertySymbols,zh=Object.prototype.hasOwnProperty,Gh=Object.prototype.propertyIsEnumerable,ta=(e,t,n)=>t in e?Vh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Uh=(e,t)=>{for(var n in t||(t={}))zh.call(t,n)&&ta(e,n,t[n]);if(ea)for(var n of ea(t))Gh.call(t,n)&&ta(e,n,t[n]);return e},Tu="usehead",na="head:count",pr="data-head-attrs",Fu="data-meta-body",qh=(e,t,n)=>{const s=n.createElement(e);for(const o of Object.keys(t))if(o==="body"&&t.body===!0)s.setAttribute(Fu,"true");else{let l=t[o];if(o==="key"||l===!1)continue;o==="children"?s.textContent=l:s.setAttribute(o,l)}return s};function sa(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){const n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){const s=t.cloneNode(!0);return s.setAttribute("nonce",""),s.nonce=n,n===e.nonce&&e.isEqualNode(s)}}return e.isEqualNode(t)}var Kh=e=>{const t=["key","id","name","property"];for(const n of t){const s=typeof e.getAttribute=="function"?e.hasAttribute(n)?e.getAttribute(n):void 0:e[n];if(s!==void 0)return{name:n,value:s}}},Yh=()=>{const e=W(Tu);if(!e)throw new Error("You may forget to apply app.use(head)");return e},Zh=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],Qh=(e,t)=>e==null?"":typeof e=="string"?e.replace("%s",t!=null?t:""):e(w(t)),Jh=e=>{const t=[],n=Object.keys(e);for(const s of n)if(e[s]!=null)switch(s){case"title":t.push({tag:s,props:{children:e[s]}});break;case"titleTemplate":break;case"base":t.push({tag:s,props:Uh({key:"default"},e[s])});break;default:if(Zh.includes(s)){const o=e[s];Array.isArray(o)?o.forEach(l=>{t.push({tag:s,props:l})}):o&&t.push({tag:s,props:o})}break}return t},oa=(e,t)=>{const n=e.getAttribute(pr);if(n)for(const o of n.split(","))o in t||e.removeAttribute(o);const s=[];for(const o in t){const l=t[o];l!=null&&(l===!1?e.removeAttribute(o):e.setAttribute(o,l),s.push(o))}s.length?e.setAttribute(pr,s.join(",")):e.removeAttribute(pr)},Xh=(e=window.document,t,n)=>{var s,o;const l=e.head,i=e.body;let a=l.querySelector(`meta[name="${na}"]`),c=i.querySelectorAll(`[${Fu}]`);const u=a?Number(a.getAttribute("content")):0,f=[],p=[];if(c)for(let h=0;h<c.length;h++)c[h]&&((s=c[h].tagName)==null?void 0:s.toLowerCase())===t&&p.push(c[h]);if(a)for(let h=0,m=a.previousElementSibling;h<u;h++,m=(m==null?void 0:m.previousElementSibling)||null)((o=m==null?void 0:m.tagName)==null?void 0:o.toLowerCase())===t&&f.push(m);else a=e.createElement("meta"),a.setAttribute("name",na),a.setAttribute("content","0"),l.append(a);let d=n.map(h=>{var m;return{element:qh(h.tag,h.props,e),body:(m=h.props.body)!=null?m:!1}});d=d.filter(h=>{for(let m=0;m<f.length;m++){const v=f[m];if(sa(v,h.element))return f.splice(m,1),!1}for(let m=0;m<p.length;m++){const v=p[m];if(sa(v,h.element))return p.splice(m,1),!1}return!0}),p.forEach(h=>{var m;return(m=h.parentNode)==null?void 0:m.removeChild(h)}),f.forEach(h=>{var m;return(m=h.parentNode)==null?void 0:m.removeChild(h)}),d.forEach(h=>{h.body===!0?i.insertAdjacentElement("beforeend",h.element):l.insertBefore(h.element,a)}),a.setAttribute("content",""+(u-f.length+d.filter(h=>!h.body).length))},em=e=>{let t=[],n=new Set;e&&t.push(Mt(e));const s={install(o){o.config.globalProperties.$head=s,o.provide(Tu,s)},get headTags(){const o=[],l=t.map(i=>w(i).titleTemplate).reverse().find(i=>i!=null);return t.forEach(i=>{Jh(w(i)).forEach(c=>{if(c.tag==="meta"||c.tag==="base"||c.tag==="script"){const u=Kh(c.props);if(u){let f=-1;for(let p=0;p<o.length;p++){const d=o[p],h=d.props[u.name],m=c.props[u.name];if(d.tag===c.tag&&h===m){f=p;break}}f!==-1&&o.splice(f,1)}}l&&c.tag==="title"&&(c.props.children=Qh(l,c.props.children)),o.push(c)})}),o},addHeadObjs(o){t.push(o)},removeHeadObjs(o){t=t.filter(l=>l!==o)},updateDOM(o=window.document){let l,i={},a={};const c={};for(const f of s.headTags){if(f.tag==="title"){l=f.props.children;continue}if(f.tag==="htmlAttrs"){Object.assign(i,f.props);continue}if(f.tag==="bodyAttrs"){Object.assign(a,f.props);continue}c[f.tag]=c[f.tag]||[],c[f.tag].push(f)}l!==void 0&&(o.title=l),oa(o.documentElement,i),oa(o.body,a);const u=new Set([...Object.keys(c),...n]);for(const f of u)Xh(o,f,c[f]||[]);n.clear(),Object.keys(c).forEach(f=>n.add(f))}};return s},tm=typeof window<"u",nm=e=>{const t=Yh(),n=z(e);t.addHeadObjs(n),tm&&(eo(()=>{t.updateDOM()}),Jo(()=>{t.removeHeadObjs(n),t.updateDOM()}))};const Ps=Symbol("v-click-clicks"),wn=Symbol("v-click-clicks-elements"),Qr=Symbol("v-click-clicks-order-map"),Ms=Symbol("v-click-clicks-disabled"),Iu=Symbol("slidev-slide-scale"),q=Symbol("slidev-slidev-context"),sm=Symbol("slidev-route"),om=Symbol("slidev-slide-context"),yn="slidev-vclick-target",hr="slidev-vclick-hidden",rm="slidev-vclick-fade",mr="slidev-vclick-hidden-explicitly",bs="slidev-vclick-current",po="slidev-vclick-prior";function lm(e){return e=e||[],Array.isArray(e)?e:[e]}function Jr(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function im(...e){let t,n,s;e.length===1?(t=0,s=1,[n]=e):[t,n,s=1]=e;const o=[];let l=t;for(;l<n;)o.push(l),l+=s||1;return o}function am(e){return e!=null}function cm(e,t){return Object.fromEntries(Object.entries(e).map(([n,s])=>t(n,s)).filter(am))}const Sn={theme:"seriph",title:"WebAssembly4G - Where we are, and where we're heading",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:`<p>WebAssembly4G - Where we are, and where we're heading</p>
<p>Talk in general track @ FOSS4G 2022 - Firenze (https://2022.foss4g.org/), 2022-08-26, 14:45\u201315:15 (Europe/Rome), General Online</p>
<p>see https://github.com/boardend/foss4g-2022-webassembly4g</p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"light",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{primary:"#654FF0"},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!0,weights:["400","700"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",background:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&dl=nasa-Q1p7bh3SHj8-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb",class:"text-center"},we=Sn;var Tc;const an=(Tc=we.aspectRatio)!=null?Tc:16/9;var Fc;const Cn=(Fc=we.canvasWidth)!=null?Fc:980,Lu=Math.round(Cn/an),Du=O(()=>cm(we.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function xt(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const Wn=Le({page:0,clicks:0});let um=[],fm=[];xt(Wn,"$syncUp",!0);xt(Wn,"$syncDown",!0);xt(Wn,"$paused",!1);xt(Wn,"$onSet",e=>um.push(e));xt(Wn,"$onPatch",e=>fm.push(e));xt(Wn,"$patch",async()=>!1);function Ru(e,t,n=!1){const s=[];let o=!1,l=!1,i,a;const c=Le(t);function u(h){s.push(h)}function f(h,m){clearTimeout(i),o=!0,c[h]=m,i=setTimeout(()=>o=!1,0)}function p(h){o||(clearTimeout(a),l=!0,Object.entries(h).forEach(([m,v])=>{c[m]=v}),a=setTimeout(()=>l=!1,0))}function d(h){let m;n?n&&window.addEventListener("storage",y=>{y&&y.key===h&&y.newValue&&p(JSON.parse(y.newValue))}):(m=new BroadcastChannel(h),m.addEventListener("message",y=>p(y.data)));function v(){!n&&m&&!l?m.postMessage(xe(c)):n&&!l&&window.localStorage.setItem(h,JSON.stringify(c)),o||s.forEach(y=>y(c))}if(ce(c,v,{deep:!0}),n){const y=window.localStorage.getItem(h);y&&p(JSON.parse(y))}}return{init:d,onPatch:u,patch:f,state:c}}const{init:dm,onPatch:pm,patch:ra,state:gr}=Ru(Wn,{page:1,clicks:0}),jn=Le({});let hm=[],mm=[];xt(jn,"$syncUp",!0);xt(jn,"$syncDown",!0);xt(jn,"$paused",!1);xt(jn,"$onSet",e=>hm.push(e));xt(jn,"$onPatch",e=>mm.push(e));xt(jn,"$patch",async()=>!1);const{init:gm,onPatch:bm,patch:Nu,state:To}=Ru(jn,{},!1),_m="modulepreload",ym=function(e){return"/foss4g-2022-webassembly4g/"+e},la={},fs=function(t,n,s){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=ym(o),o in la)return;la[o]=!0;const l=o.endsWith(".css"),i=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const a=document.createElement("link");if(a.rel=l?"stylesheet":_m,l||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),l)return new Promise((c,u)=>{a.addEventListener("load",c),a.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function rt(e,t,n){return Array.isArray(e)?(e.length=Math.max(e.length,t),e.splice(t,1,n),n):(e[t]=n,n)}function vm(e,t){if(Array.isArray(e)){e.splice(t,1);return}delete e[t]}var ia;const Tt=typeof window<"u",wm=e=>typeof e<"u",xm=e=>typeof e=="function",Wu=e=>typeof e=="string",Xr=()=>+Date.now(),yo=()=>{};Tt&&((ia=window==null?void 0:window.navigator)==null?void 0:ia.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Xe(e){return typeof e=="function"?e():w(e)}function km(e,t){function n(...s){e(()=>t.apply(this,s),{fn:t,thisArg:this,args:s})}return n}const ju=e=>e();function Sm(e=ju){const t=z(!0);function n(){t.value=!1}function s(){t.value=!0}return{isActive:t,pause:n,resume:s,eventFilter:(...l)=>{t.value&&e(...l)}}}function Am(e){return e}function Em(e,t){var n;if(typeof e=="number")return e+t;const s=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",o=e.slice(s.length),l=parseFloat(s)+t;return Number.isNaN(l)?e:l+o}function pn(e){return Tl()?(Fl(e),!0):!1}function $m(e){if(!Se(e))return Le(e);const t=new Proxy({},{get(n,s,o){return w(Reflect.get(e.value,s,o))},set(n,s,o){return Se(e.value[s])&&!Se(o)?e.value[s].value=o:e.value[s]=o,!0},deleteProperty(n,s){return Reflect.deleteProperty(e.value,s)},has(n,s){return Reflect.has(e.value,s)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Le(t)}function Om(e){return typeof e=="function"?O(e):z(e)}var Cm=Object.defineProperty,Pm=Object.defineProperties,Mm=Object.getOwnPropertyDescriptors,aa=Object.getOwnPropertySymbols,Tm=Object.prototype.hasOwnProperty,Fm=Object.prototype.propertyIsEnumerable,ca=(e,t,n)=>t in e?Cm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Im=(e,t)=>{for(var n in t||(t={}))Tm.call(t,n)&&ca(e,n,t[n]);if(aa)for(var n of aa(t))Fm.call(t,n)&&ca(e,n,t[n]);return e},Lm=(e,t)=>Pm(e,Mm(t));function Dm(e){if(!Se(e))return pp(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=dp(()=>({get(){return e.value[n]},set(s){if(Array.isArray(e.value)){const o=[...e.value];o[n]=s,e.value=o}else{const o=Lm(Im({},e.value),{[n]:s});Object.setPrototypeOf(o,e.value),e.value=o}}}));return t}function Rm(e,t=!0){Nn()?pu(e):t?e():Ge(e)}function Bu(e,t=!0){Nn()?us(e):t?e():Ge(e)}function Nm(e,t=1e3,n={}){const{immediate:s=!0,immediateCallback:o=!1}=n;let l=null;const i=z(!1);function a(){l&&(clearInterval(l),l=null)}function c(){i.value=!1,a()}function u(){w(t)<=0||(i.value=!0,o&&e(),a(),l=setInterval(e,Xe(t)))}if(s&&Tt&&u(),Se(t)){const f=ce(t,()=>{i.value&&Tt&&u()});pn(f)}return pn(c),{isActive:i,pause:c,resume:u}}function Wm(e,t,n={}){const{immediate:s=!0}=n,o=z(!1);let l=null;function i(){l&&(clearTimeout(l),l=null)}function a(){o.value=!1,i()}function c(...u){i(),o.value=!0,l=setTimeout(()=>{o.value=!1,l=null,e(...u)},Xe(t))}return s&&(o.value=!0,Tt&&c()),pn(a),{isPending:o,start:c,stop:a}}function Hu(e=!1,t={}){const{truthyValue:n=!0,falsyValue:s=!1}=t,o=Se(e),l=z(e);function i(a){if(arguments.length)return l.value=a,l.value;{const c=Xe(n);return l.value=l.value===c?Xe(s):c,l.value}}return o?i:[l,i]}var ua=Object.getOwnPropertySymbols,jm=Object.prototype.hasOwnProperty,Bm=Object.prototype.propertyIsEnumerable,Hm=(e,t)=>{var n={};for(var s in e)jm.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&ua)for(var s of ua(e))t.indexOf(s)<0&&Bm.call(e,s)&&(n[s]=e[s]);return n};function Vm(e,t,n={}){const s=n,{eventFilter:o=ju}=s,l=Hm(s,["eventFilter"]);return ce(e,km(o,t),l)}var zm=Object.defineProperty,Gm=Object.defineProperties,Um=Object.getOwnPropertyDescriptors,Fo=Object.getOwnPropertySymbols,Vu=Object.prototype.hasOwnProperty,zu=Object.prototype.propertyIsEnumerable,fa=(e,t,n)=>t in e?zm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qm=(e,t)=>{for(var n in t||(t={}))Vu.call(t,n)&&fa(e,n,t[n]);if(Fo)for(var n of Fo(t))zu.call(t,n)&&fa(e,n,t[n]);return e},Km=(e,t)=>Gm(e,Um(t)),Ym=(e,t)=>{var n={};for(var s in e)Vu.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Fo)for(var s of Fo(e))t.indexOf(s)<0&&zu.call(e,s)&&(n[s]=e[s]);return n};function Zm(e,t,n={}){const s=n,{eventFilter:o}=s,l=Ym(s,["eventFilter"]),{eventFilter:i,pause:a,resume:c,isActive:u}=Sm(o);return{stop:Vm(e,t,Km(qm({},l),{eventFilter:i})),pause:a,resume:c,isActive:u}}function sn(e){var t;const n=Xe(e);return(t=n==null?void 0:n.$el)!=null?t:n}const nt=Tt?window:void 0,Qm=Tt?window.document:void 0,Jm=Tt?window.navigator:void 0;function $e(...e){let t,n,s,o;if(Wu(e[0])?([n,s,o]=e,t=nt):[t,n,s,o]=e,!t)return yo;let l=yo;const i=ce(()=>sn(t),c=>{l(),c&&(c.addEventListener(n,s,o),l=()=>{c.removeEventListener(n,s,o),l=yo})},{immediate:!0,flush:"post"}),a=()=>{i(),l()};return pn(a),a}function Xm(e,t,n={}){const{window:s=nt,ignore:o,capture:l=!0,detectIframe:i=!1}=n;if(!s)return;const a=z(!0);let c;const u=d=>{s.clearTimeout(c);const h=sn(e),m=d.composedPath();!h||h===d.target||m.includes(h)||!a.value||o&&o.length>0&&o.some(v=>{const y=sn(v);return y&&(d.target===y||m.includes(y))})||t(d)},f=[$e(s,"click",u,{passive:!0,capture:l}),$e(s,"pointerdown",d=>{const h=sn(e);a.value=!!h&&!d.composedPath().includes(h)},{passive:!0}),$e(s,"pointerup",d=>{if(d.button===0){const h=d.composedPath();d.composedPath=()=>h,c=s.setTimeout(()=>u(d),50)}},{passive:!0}),i&&$e(s,"blur",d=>{var h;const m=sn(e);((h=document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(m!=null&&m.contains(document.activeElement))&&t(d)})].filter(Boolean);return()=>f.forEach(d=>d())}const eg=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function tg(e,t,n={}){const{target:s=nt,eventName:o="keydown",passive:l=!1}=n,i=eg(e);return $e(s,o,c=>{i(c)&&t(c)},l)}function ng(e={}){const{window:t=nt}=e,n=z(0);return t&&($e(t,"blur",()=>n.value+=1,!0),$e(t,"focus",()=>n.value+=1,!0)),O(()=>(n.value,t==null?void 0:t.document.activeElement))}function nr(e,t=!1){const n=z(),s=()=>n.value=Boolean(e());return s(),Bu(s,t),n}function vo(e,t={}){const{window:n=nt}=t,s=nr(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let o;const l=z(!1),i=()=>{!s.value||(o||(o=n.matchMedia(e)),l.value=o.matches)};return Rm(()=>{i(),o&&("addEventListener"in o?o.addEventListener("change",i):o.addListener(i),pn(()=>{"removeEventListener"in o?o.removeEventListener("change",i):o.removeListener(i)}))}),l}const sg={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var og=Object.defineProperty,da=Object.getOwnPropertySymbols,rg=Object.prototype.hasOwnProperty,lg=Object.prototype.propertyIsEnumerable,pa=(e,t,n)=>t in e?og(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ig=(e,t)=>{for(var n in t||(t={}))rg.call(t,n)&&pa(e,n,t[n]);if(da)for(var n of da(t))lg.call(t,n)&&pa(e,n,t[n]);return e};function ag(e,t={}){function n(a,c){let u=e[a];return c!=null&&(u=Em(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:s=nt}=t;function o(a){return s?s.matchMedia(a).matches:!1}const l=a=>vo(`(min-width: ${n(a)})`,t),i=Object.keys(e).reduce((a,c)=>(Object.defineProperty(a,c,{get:()=>l(c),enumerable:!0,configurable:!0}),a),{});return ig({greater:l,smaller(a){return vo(`(max-width: ${n(a,-.1)})`,t)},between(a,c){return vo(`(min-width: ${n(a)}) and (max-width: ${n(c,-.1)})`,t)},isGreater(a){return o(`(min-width: ${n(a)})`)},isSmaller(a){return o(`(max-width: ${n(a,-.1)})`)},isInBetween(a,c){return o(`(min-width: ${n(a)}) and (max-width: ${n(c,-.1)})`)}},i)}function cg(e={}){const{navigator:t=Jm,read:n=!1,source:s,copiedDuring:o=1500}=e,l=["copy","cut"],i=nr(()=>t&&"clipboard"in t),a=z(""),c=z(!1),u=Wm(()=>c.value=!1,o);function f(){t.clipboard.readText().then(d=>{a.value=d})}if(i.value&&n)for(const d of l)$e(d,f);async function p(d=Xe(s)){i.value&&d!=null&&(await t.clipboard.writeText(d),a.value=d,c.value=!0,u.start())}return{isSupported:i,text:a,copied:c,copy:p}}const el=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},tl="__vueuse_ssr_handlers__";el[tl]=el[tl]||{};const ug=el[tl];function fg(e,t){return ug[e]||t}function dg(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var pg=Object.defineProperty,ha=Object.getOwnPropertySymbols,hg=Object.prototype.hasOwnProperty,mg=Object.prototype.propertyIsEnumerable,ma=(e,t,n)=>t in e?pg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ga=(e,t)=>{for(var n in t||(t={}))hg.call(t,n)&&ma(e,n,t[n]);if(ha)for(var n of ha(t))mg.call(t,n)&&ma(e,n,t[n]);return e};const gg={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function It(e,t,n,s={}){var o;const{flush:l="pre",deep:i=!0,listenToStorageChanges:a=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:f,window:p=nt,eventFilter:d,onError:h=H=>{console.error(H)}}=s,m=(f?Mt:z)(t);if(!n)try{n=fg("getDefaultStorage",()=>{var H;return(H=nt)==null?void 0:H.localStorage})()}catch(H){h(H)}if(!n)return m;const v=Xe(t),y=dg(v),E=(o=s.serializer)!=null?o:gg[y],{pause:A,resume:S}=Zm(m,()=>$(m.value),{flush:l,deep:i,eventFilter:d});return p&&a&&$e(p,"storage",L),L(),m;function $(H){try{H==null?n.removeItem(e):n.setItem(e,E.write(H))}catch(ee){h(ee)}}function R(H){if(!(H&&H.key!==e)){A();try{const ee=H?H.newValue:n.getItem(e);if(ee==null)return c&&v!==null&&n.setItem(e,E.write(v)),v;if(!H&&u){const re=E.read(ee);return xm(u)?u(re,v):y==="object"&&!Array.isArray(re)?ga(ga({},v),re):re}else return typeof ee!="string"?ee:E.read(ee)}catch(ee){h(ee)}finally{S()}}}function L(H){H&&H.key!==e||(m.value=R(H))}}function bg(e){return vo("(prefers-color-scheme: dark)",e)}var _g=Object.defineProperty,yg=Object.defineProperties,vg=Object.getOwnPropertyDescriptors,ba=Object.getOwnPropertySymbols,wg=Object.prototype.hasOwnProperty,xg=Object.prototype.propertyIsEnumerable,_a=(e,t,n)=>t in e?_g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,kg=(e,t)=>{for(var n in t||(t={}))wg.call(t,n)&&_a(e,n,t[n]);if(ba)for(var n of ba(t))xg.call(t,n)&&_a(e,n,t[n]);return e},Sg=(e,t)=>yg(e,vg(t));function y3(e,t={}){var n,s;const o=(n=t.draggingElement)!=null?n:nt,l=z((s=Xe(t.initialValue))!=null?s:{x:0,y:0}),i=z(),a=d=>t.pointerTypes?t.pointerTypes.includes(d.pointerType):!0,c=d=>{Xe(t.preventDefault)&&d.preventDefault(),Xe(t.stopPropagation)&&d.stopPropagation()},u=d=>{var h;if(!a(d)||Xe(t.exact)&&d.target!==Xe(e))return;const m=Xe(e).getBoundingClientRect(),v={x:d.pageX-m.left,y:d.pageY-m.top};((h=t.onStart)==null?void 0:h.call(t,v,d))!==!1&&(i.value=v,c(d))},f=d=>{var h;!a(d)||!i.value||(l.value={x:d.pageX-i.value.x,y:d.pageY-i.value.y},(h=t.onMove)==null||h.call(t,l.value,d),c(d))},p=d=>{var h;!a(d)||!i.value||(i.value=void 0,(h=t.onEnd)==null||h.call(t,l.value,d),c(d))};return Tt&&($e(e,"pointerdown",u,!0),$e(o,"pointermove",f,!0),$e(o,"pointerup",p,!0)),Sg(kg({},Dm(l)),{position:l,isDragging:O(()=>!!i.value),style:O(()=>`left:${l.value.x}px;top:${l.value.y}px;`)})}var ya=Object.getOwnPropertySymbols,Ag=Object.prototype.hasOwnProperty,Eg=Object.prototype.propertyIsEnumerable,$g=(e,t)=>{var n={};for(var s in e)Ag.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&ya)for(var s of ya(e))t.indexOf(s)<0&&Eg.call(e,s)&&(n[s]=e[s]);return n};function Og(e,t,n={}){const s=n,{window:o=nt}=s,l=$g(s,["window"]);let i;const a=nr(()=>o&&"ResizeObserver"in o),c=()=>{i&&(i.disconnect(),i=void 0)},u=ce(()=>sn(e),p=>{c(),a.value&&o&&p&&(i=new ResizeObserver(t),i.observe(p,l))},{immediate:!0,flush:"post"}),f=()=>{c(),u()};return pn(f),{isSupported:a,stop:f}}function Cg(e,t={}){const{immediate:n=!0,window:s=nt}=t,o=z(!1);let l=null;function i(){!o.value||!s||(e(),l=s.requestAnimationFrame(i))}function a(){!o.value&&s&&(o.value=!0,i())}function c(){o.value=!1,l!=null&&s&&(s.cancelAnimationFrame(l),l=null)}return n&&a(),pn(c),{isActive:o,pause:c,resume:a}}function Pg(e,t={width:0,height:0},n={}){const s=z(t.width),o=z(t.height);return Og(e,([l])=>{s.value=l.contentRect.width,o.value=l.contentRect.height},n),ce(()=>sn(e),l=>{s.value=l?t.width:0,o.value=l?t.height:0}),{width:s,height:o}}const va=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Mg(e,t={}){const{document:n=Qm,autoExit:s=!1}=t,o=e||(n==null?void 0:n.querySelector("html")),l=z(!1);let i=va[0];const a=nr(()=>{if(n){for(const v of va)if(v[1]in n)return i=v,!0}else return!1;return!1}),[c,u,f,,p]=i;async function d(){!a.value||(n!=null&&n[f]&&await n[u](),l.value=!1)}async function h(){if(!a.value)return;await d();const v=sn(o);v&&(await v[c](),l.value=!0)}async function m(){l.value?await d():await h()}return n&&$e(n,p,()=>{l.value=!!(n!=null&&n[f])},!1),s&&pn(d),{isSupported:a,isFullscreen:l,enter:h,exit:d,toggle:m}}const Tg={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Fg(e={}){const{reactive:t=!1,target:n=nt,aliasMap:s=Tg,passive:o=!0,onEventFired:l=yo}=e,i=Le(new Set),a={toJSON(){return{}},current:i},c=t?Le(a):a,u=new Set,f=new Set;function p(v,y){v in c&&(t?c[v]=y:c[v].value=y)}function d(){for(const v of f)p(v,!1)}function h(v,y){var E,A;const S=(E=v.key)==null?void 0:E.toLowerCase(),R=[(A=v.code)==null?void 0:A.toLowerCase(),S].filter(Boolean);S&&(y?i.add(S):i.delete(S));for(const L of R)f.add(L),p(L,y);S==="meta"&&!y?(u.forEach(L=>{i.delete(L),p(L,!1)}),u.clear()):typeof v.getModifierState=="function"&&v.getModifierState("Meta")&&y&&[...i,...R].forEach(L=>u.add(L))}$e(n,"keydown",v=>(h(v,!0),l(v)),{passive:o}),$e(n,"keyup",v=>(h(v,!1),l(v)),{passive:o}),$e("blur",d,{passive:!0}),$e("focus",d,{passive:!0});const m=new Proxy(c,{get(v,y,E){if(typeof y!="string")return Reflect.get(v,y,E);if(y=y.toLowerCase(),y in s&&(y=s[y]),!(y in c))if(/[+_-]/.test(y)){const S=y.split(/[+_-]/g).map($=>$.trim());c[y]=O(()=>S.every($=>w(m[$])))}else c[y]=z(!1);const A=Reflect.get(v,y,E);return t?w(A):A}});return m}function v3(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:s=!1,initialValue:o={x:0,y:0},window:l=nt,eventFilter:i}=e,a=z(o.x),c=z(o.y),u=z(null),f=v=>{t==="page"?(a.value=v.pageX,c.value=v.pageY):t==="client"&&(a.value=v.clientX,c.value=v.clientY),u.value="mouse"},p=()=>{a.value=o.x,c.value=o.y},d=v=>{if(v.touches.length>0){const y=v.touches[0];t==="page"?(a.value=y.pageX,c.value=y.pageY):t==="client"&&(a.value=y.clientX,c.value=y.clientY),u.value="touch"}},h=v=>i===void 0?f(v):i(()=>f(v),{}),m=v=>i===void 0?d(v):i(()=>d(v),{});return l&&($e(l,"mousemove",h,{passive:!0}),$e(l,"dragover",h,{passive:!0}),n&&($e(l,"touchstart",m,{passive:!0}),$e(l,"touchmove",m,{passive:!0}),s&&$e(l,"touchend",p,{passive:!0}))),{x:a,y:c,sourceType:u}}var qt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(qt||(qt={}));function Ig(e,t={}){const n=Om(e),{threshold:s=50,onSwipe:o,onSwipeEnd:l,onSwipeStart:i}=t,a=Le({x:0,y:0}),c=(L,H)=>{a.x=L,a.y=H},u=Le({x:0,y:0}),f=(L,H)=>{u.x=L,u.y=H},p=O(()=>a.x-u.x),d=O(()=>a.y-u.y),{max:h,abs:m}=Math,v=O(()=>h(m(p.value),m(d.value))>=s),y=z(!1),E=z(!1),A=O(()=>v.value?m(p.value)>m(d.value)?p.value>0?qt.LEFT:qt.RIGHT:d.value>0?qt.UP:qt.DOWN:qt.NONE),S=L=>t.pointerTypes?t.pointerTypes.includes(L.pointerType):!0,$=[$e(e,"pointerdown",L=>{var H,ee;if(!S(L))return;E.value=!0,(ee=(H=n.value)==null?void 0:H.style)==null||ee.setProperty("touch-action","none");const re=L.target;re==null||re.setPointerCapture(L.pointerId);const{clientX:me,clientY:ye}=L;c(me,ye),f(me,ye),i==null||i(L)}),$e(e,"pointermove",L=>{if(!S(L)||!E.value)return;const{clientX:H,clientY:ee}=L;f(H,ee),!y.value&&v.value&&(y.value=!0),y.value&&(o==null||o(L))}),$e(e,"pointerup",L=>{var H,ee;!S(L)||(y.value&&(l==null||l(L,A.value)),E.value=!1,y.value=!1,(ee=(H=n.value)==null?void 0:H.style)==null||ee.setProperty("touch-action","initial"))})],R=()=>$.forEach(L=>L());return{isSwiping:Yn(y),direction:Yn(A),posStart:Yn(a),posEnd:Yn(u),distanceX:p,distanceY:d,stop:R}}var Lg=Object.defineProperty,wa=Object.getOwnPropertySymbols,Dg=Object.prototype.hasOwnProperty,Rg=Object.prototype.propertyIsEnumerable,xa=(e,t,n)=>t in e?Lg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ng=(e,t)=>{for(var n in t||(t={}))Dg.call(t,n)&&xa(e,n,t[n]);if(wa)for(var n of wa(t))Rg.call(t,n)&&xa(e,n,t[n]);return e};function w3(e={}){const{controls:t=!1,offset:n=0,immediate:s=!0,interval:o="requestAnimationFrame"}=e,l=z(Xr()+n),i=()=>l.value=Xr()+n,a=o==="requestAnimationFrame"?Cg(i,{immediate:s}):Nm(i,o,{immediate:s});return t?Ng({timestamp:l},a):l}var Wg=Object.defineProperty,ka=Object.getOwnPropertySymbols,jg=Object.prototype.hasOwnProperty,Bg=Object.prototype.propertyIsEnumerable,Sa=(e,t,n)=>t in e?Wg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Hg=(e,t)=>{for(var n in t||(t={}))jg.call(t,n)&&Sa(e,n,t[n]);if(ka)for(var n of ka(t))Bg.call(t,n)&&Sa(e,n,t[n]);return e};const Vg={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Hg({linear:Am},Vg);function Wt(e,t,n,s={}){var o,l,i;const{passive:a=!1,eventName:c,deep:u=!1,defaultValue:f}=s,p=Nn(),d=n||(p==null?void 0:p.emit)||((o=p==null?void 0:p.$emit)==null?void 0:o.bind(p))||((i=(l=p==null?void 0:p.proxy)==null?void 0:l.$emit)==null?void 0:i.bind(p==null?void 0:p.proxy));let h=c;t||(t="modelValue"),h=c||h||`update:${t.toString()}`;const m=()=>wm(e[t])?e[t]:f;if(a){const v=z(m());return ce(()=>e[t],y=>v.value=y),ce(v,y=>{(y!==e[t]||u)&&d(h,y)},{deep:u}),v}else return O({get(){return m()},set(v){d(h,v)}})}function x3({window:e=nt}={}){if(!e)return z(!1);const t=z(e.document.hasFocus());return $e(e,"blur",()=>{t.value=!1}),$e(e,"focus",()=>{t.value=!0}),t}function zg(e={}){const{window:t=nt,initialWidth:n=1/0,initialHeight:s=1/0,listenOrientation:o=!0}=e,l=z(n),i=z(s),a=()=>{t&&(l.value=t.innerWidth,i.value=t.innerHeight)};return a(),Bu(a),$e("resize",a,{passive:!0}),o&&$e("orientationchange",a,{passive:!0}),{width:l,height:i}}/*!
  * vue-router v4.1.4
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Kn=typeof window<"u";function Gg(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Ae=Object.assign;function br(e,t){const n={};for(const s in t){const o=t[s];n[s]=Ft(o)?o.map(e):e(o)}return n}const Ts=()=>{},Ft=Array.isArray,Ug=/\/$/,qg=e=>e.replace(Ug,"");function _r(e,t,n="/"){let s,o={},l="",i="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=t.slice(0,c),l=t.slice(c+1,a>-1?a:t.length),o=e(l)),a>-1&&(s=s||t.slice(0,a),i=t.slice(a,t.length)),s=Qg(s!=null?s:t,n),{fullPath:s+(l&&"?")+l+i,path:s,query:o,hash:i}}function Kg(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Aa(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Yg(e,t,n){const s=t.matched.length-1,o=n.matched.length-1;return s>-1&&s===o&&rs(t.matched[s],n.matched[o])&&Gu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function rs(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Gu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Zg(e[n],t[n]))return!1;return!0}function Zg(e,t){return Ft(e)?Ea(e,t):Ft(t)?Ea(t,e):e===t}function Ea(e,t){return Ft(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Qg(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/");let o=n.length-1,l,i;for(l=0;l<s.length;l++)if(i=s[l],i!==".")if(i==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+s.slice(l-(l===s.length?1:0)).join("/")}var Us;(function(e){e.pop="pop",e.push="push"})(Us||(Us={}));var Fs;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Fs||(Fs={}));function Jg(e){if(!e)if(Kn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),qg(e)}const Xg=/^[^#]+#/;function eb(e,t){return e.replace(Xg,"#")+t}function tb(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const sr=()=>({left:window.pageXOffset,top:window.pageYOffset});function nb(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=tb(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function $a(e,t){return(history.state?history.state.position-t:-1)+e}const nl=new Map;function sb(e,t){nl.set(e,t)}function ob(e){const t=nl.get(e);return nl.delete(e),t}let rb=()=>location.protocol+"//"+location.host;function Uu(e,t){const{pathname:n,search:s,hash:o}=t,l=e.indexOf("#");if(l>-1){let a=o.includes(e.slice(l))?e.slice(l).length:1,c=o.slice(a);return c[0]!=="/"&&(c="/"+c),Aa(c,"")}return Aa(n,e)+s+o}function lb(e,t,n,s){let o=[],l=[],i=null;const a=({state:d})=>{const h=Uu(e,location),m=n.value,v=t.value;let y=0;if(d){if(n.value=h,t.value=d,i&&i===m){i=null;return}y=v?d.position-v.position:0}else s(h);o.forEach(E=>{E(n.value,m,{delta:y,type:Us.pop,direction:y?y>0?Fs.forward:Fs.back:Fs.unknown})})};function c(){i=n.value}function u(d){o.push(d);const h=()=>{const m=o.indexOf(d);m>-1&&o.splice(m,1)};return l.push(h),h}function f(){const{history:d}=window;!d.state||d.replaceState(Ae({},d.state,{scroll:sr()}),"")}function p(){for(const d of l)d();l=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:u,destroy:p}}function Oa(e,t,n,s=!1,o=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:o?sr():null}}function ib(e){const{history:t,location:n}=window,s={value:Uu(e,n)},o={value:t.state};o.value||l(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(c,u,f){const p=e.indexOf("#"),d=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+c:rb()+e+c;try{t[f?"replaceState":"pushState"](u,"",d),o.value=u}catch(h){console.error(h),n[f?"replace":"assign"](d)}}function i(c,u){const f=Ae({},t.state,Oa(o.value.back,c,o.value.forward,!0),u,{position:o.value.position});l(c,f,!0),s.value=c}function a(c,u){const f=Ae({},o.value,t.state,{forward:c,scroll:sr()});l(f.current,f,!0);const p=Ae({},Oa(s.value,c,null),{position:f.position+1},u);l(c,p,!1),s.value=c}return{location:s,state:o,push:a,replace:i}}function ab(e){e=Jg(e);const t=ib(e),n=lb(e,t.state,t.location,t.replace);function s(l,i=!0){i||n.pauseListeners(),history.go(l)}const o=Ae({location:"",base:e,go:s,createHref:eb.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function cb(e){return typeof e=="string"||e&&typeof e=="object"}function qu(e){return typeof e=="string"||typeof e=="symbol"}const Xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ku=Symbol("");var Ca;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ca||(Ca={}));function ls(e,t){return Ae(new Error,{type:e,[Ku]:!0},t)}function Vt(e,t){return e instanceof Error&&Ku in e&&(t==null||!!(e.type&t))}const Pa="[^/]+?",ub={sensitive:!1,strict:!1,start:!0,end:!0},fb=/[.+*?^${}()[\]/\\]/g;function db(e,t){const n=Ae({},ub,t),s=[];let o=n.start?"^":"";const l=[];for(const u of e){const f=u.length?[]:[90];n.strict&&!u.length&&(o+="/");for(let p=0;p<u.length;p++){const d=u[p];let h=40+(n.sensitive?.25:0);if(d.type===0)p||(o+="/"),o+=d.value.replace(fb,"\\$&"),h+=40;else if(d.type===1){const{value:m,repeatable:v,optional:y,regexp:E}=d;l.push({name:m,repeatable:v,optional:y});const A=E||Pa;if(A!==Pa){h+=10;try{new RegExp(`(${A})`)}catch($){throw new Error(`Invalid custom RegExp for param "${m}" (${A}): `+$.message)}}let S=v?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;p||(S=y&&u.length<2?`(?:/${S})`:"/"+S),y&&(S+="?"),o+=S,h+=20,y&&(h+=-8),v&&(h+=-20),A===".*"&&(h+=-50)}f.push(h)}s.push(f)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function a(u){const f=u.match(i),p={};if(!f)return null;for(let d=1;d<f.length;d++){const h=f[d]||"",m=l[d-1];p[m.name]=h&&m.repeatable?h.split("/"):h}return p}function c(u){let f="",p=!1;for(const d of e){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const h of d)if(h.type===0)f+=h.value;else if(h.type===1){const{value:m,repeatable:v,optional:y}=h,E=m in u?u[m]:"";if(Ft(E)&&!v)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const A=Ft(E)?E.join("/"):E;if(!A)if(y)d.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${m}"`);f+=A}}return f||"/"}return{re:i,score:s,keys:l,parse:a,stringify:c}}function pb(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function hb(e,t){let n=0;const s=e.score,o=t.score;for(;n<s.length&&n<o.length;){const l=pb(s[n],o[n]);if(l)return l;n++}if(Math.abs(o.length-s.length)===1){if(Ma(s))return 1;if(Ma(o))return-1}return o.length-s.length}function Ma(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const mb={type:0,value:""},gb=/[a-zA-Z0-9_]/;function bb(e){if(!e)return[[]];if(e==="/")return[[mb]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${n})/"${u}": ${h}`)}let n=0,s=n;const o=[];let l;function i(){l&&o.push(l),l=[]}let a=0,c,u="",f="";function p(){!u||(n===0?l.push({type:0,value:u}):n===1||n===2||n===3?(l.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),i()):c===":"?(p(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:gb.test(c)?d():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),p(),i(),o}function _b(e,t,n){const s=db(bb(e.path),n),o=Ae(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function yb(e,t){const n=[],s=new Map;t=Ia({strict:!1,end:!0,sensitive:!1},t);function o(f){return s.get(f)}function l(f,p,d){const h=!d,m=vb(f);m.aliasOf=d&&d.record;const v=Ia(t,f),y=[m];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const $ of S)y.push(Ae({},m,{components:d?d.record.components:m.components,path:$,aliasOf:d?d.record:m}))}let E,A;for(const S of y){const{path:$}=S;if(p&&$[0]!=="/"){const R=p.record.path,L=R[R.length-1]==="/"?"":"/";S.path=p.record.path+($&&L+$)}if(E=_b(S,p,v),d?d.alias.push(E):(A=A||E,A!==E&&A.alias.push(E),h&&f.name&&!Fa(E)&&i(f.name)),m.children){const R=m.children;for(let L=0;L<R.length;L++)l(R[L],E,d&&d.children[L])}d=d||E,c(E)}return A?()=>{i(A)}:Ts}function i(f){if(qu(f)){const p=s.get(f);p&&(s.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(i),p.alias.forEach(i))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&s.delete(f.record.name),f.children.forEach(i),f.alias.forEach(i))}}function a(){return n}function c(f){let p=0;for(;p<n.length&&hb(f,n[p])>=0&&(f.record.path!==n[p].record.path||!Yu(f,n[p]));)p++;n.splice(p,0,f),f.record.name&&!Fa(f)&&s.set(f.record.name,f)}function u(f,p){let d,h={},m,v;if("name"in f&&f.name){if(d=s.get(f.name),!d)throw ls(1,{location:f});v=d.record.name,h=Ae(Ta(p.params,d.keys.filter(A=>!A.optional).map(A=>A.name)),f.params&&Ta(f.params,d.keys.map(A=>A.name))),m=d.stringify(h)}else if("path"in f)m=f.path,d=n.find(A=>A.re.test(m)),d&&(h=d.parse(m),v=d.record.name);else{if(d=p.name?s.get(p.name):n.find(A=>A.re.test(p.path)),!d)throw ls(1,{location:f,currentLocation:p});v=d.record.name,h=Ae({},p.params,f.params),m=d.stringify(h)}const y=[];let E=d;for(;E;)y.unshift(E.record),E=E.parent;return{name:v,path:m,params:h,matched:y,meta:xb(y)}}return e.forEach(f=>l(f)),{addRoute:l,resolve:u,removeRoute:i,getRoutes:a,getRecordMatcher:o}}function Ta(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function vb(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:wb(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function wb(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function Fa(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function xb(e){return e.reduce((t,n)=>Ae(t,n.meta),{})}function Ia(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function Yu(e,t){return t.children.some(n=>n===e||Yu(e,n))}const Zu=/#/g,kb=/&/g,Sb=/\//g,Ab=/=/g,Eb=/\?/g,Qu=/\+/g,$b=/%5B/g,Ob=/%5D/g,Ju=/%5E/g,Cb=/%60/g,Xu=/%7B/g,Pb=/%7C/g,ef=/%7D/g,Mb=/%20/g;function Yl(e){return encodeURI(""+e).replace(Pb,"|").replace($b,"[").replace(Ob,"]")}function Tb(e){return Yl(e).replace(Xu,"{").replace(ef,"}").replace(Ju,"^")}function sl(e){return Yl(e).replace(Qu,"%2B").replace(Mb,"+").replace(Zu,"%23").replace(kb,"%26").replace(Cb,"`").replace(Xu,"{").replace(ef,"}").replace(Ju,"^")}function Fb(e){return sl(e).replace(Ab,"%3D")}function Ib(e){return Yl(e).replace(Zu,"%23").replace(Eb,"%3F")}function Lb(e){return e==null?"":Ib(e).replace(Sb,"%2F")}function Io(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Db(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<s.length;++o){const l=s[o].replace(Qu," "),i=l.indexOf("="),a=Io(i<0?l:l.slice(0,i)),c=i<0?null:Io(l.slice(i+1));if(a in t){let u=t[a];Ft(u)||(u=t[a]=[u]),u.push(c)}else t[a]=c}return t}function La(e){let t="";for(let n in e){const s=e[n];if(n=Fb(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ft(s)?s.map(l=>l&&sl(l)):[s&&sl(s)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function Rb(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Ft(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}const Nb=Symbol(""),Da=Symbol(""),Zl=Symbol(""),tf=Symbol(""),ol=Symbol("");function _s(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function nn(e,t,n,s,o){const l=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((i,a)=>{const c=p=>{p===!1?a(ls(4,{from:n,to:t})):p instanceof Error?a(p):cb(p)?a(ls(2,{from:t,to:p})):(l&&s.enterCallbacks[o]===l&&typeof p=="function"&&l.push(p),i())},u=e.call(s&&s.instances[o],t,n,c);let f=Promise.resolve(u);e.length<3&&(f=f.then(c)),f.catch(p=>a(p))})}function yr(e,t,n,s){const o=[];for(const l of e)for(const i in l.components){let a=l.components[i];if(!(t!=="beforeRouteEnter"&&!l.instances[i]))if(Wb(a)){const u=(a.__vccOpts||a)[t];u&&o.push(nn(u,n,s,l,i))}else{let c=a();o.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${l.path}"`));const f=Gg(u)?u.default:u;l.components[i]=f;const d=(f.__vccOpts||f)[t];return d&&nn(d,n,s,l,i)()}))}}return o}function Wb(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ra(e){const t=W(Zl),n=W(tf),s=O(()=>t.resolve(w(e.to))),o=O(()=>{const{matched:c}=s.value,{length:u}=c,f=c[u-1],p=n.matched;if(!f||!p.length)return-1;const d=p.findIndex(rs.bind(null,f));if(d>-1)return d;const h=Na(c[u-2]);return u>1&&Na(f)===h&&p[p.length-1].path!==h?p.findIndex(rs.bind(null,c[u-2])):d}),l=O(()=>o.value>-1&&Vb(n.params,s.value.params)),i=O(()=>o.value>-1&&o.value===n.matched.length-1&&Gu(n.params,s.value.params));function a(c={}){return Hb(c)?t[w(e.replace)?"replace":"push"](w(e.to)).catch(Ts):Promise.resolve()}return{route:s,href:O(()=>s.value.href),isActive:l,isExactActive:i,navigate:a}}const jb=ke({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ra,setup(e,{slots:t}){const n=Le(Ra(e)),{options:s}=W(Zl),o=O(()=>({[Wa(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Wa(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&t.default(n);return e.custom?l:ht("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},l)}}}),Bb=jb;function Hb(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Vb(e,t){for(const n in t){const s=t[n],o=e[n];if(typeof s=="string"){if(s!==o)return!1}else if(!Ft(o)||o.length!==s.length||s.some((l,i)=>l!==o[i]))return!1}return!0}function Na(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Wa=(e,t,n)=>e!=null?e:t!=null?t:n,zb=ke({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=W(ol),o=O(()=>e.route||s.value),l=W(Da,0),i=O(()=>{let u=w(l);const{matched:f}=o.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),a=O(()=>o.value.matched[i.value]);dt(Da,O(()=>i.value+1)),dt(Nb,a),dt(ol,o);const c=z();return ce(()=>[c.value,a.value,e.name],([u,f,p],[d,h,m])=>{f&&(f.instances[p]=u,h&&h!==f&&u&&u===d&&(f.leaveGuards.size||(f.leaveGuards=h.leaveGuards),f.updateGuards.size||(f.updateGuards=h.updateGuards))),u&&f&&(!h||!rs(f,h)||!d)&&(f.enterCallbacks[p]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=o.value,f=e.name,p=a.value,d=p&&p.components[f];if(!d)return ja(n.default,{Component:d,route:u});const h=p.props[f],m=h?h===!0?u.params:typeof h=="function"?h(u):h:null,y=ht(d,Ae({},m,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return ja(n.default,{Component:y,route:u})||y}}});function ja(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Gb=zb;function Ub(e){const t=yb(e.routes,e),n=e.parseQuery||Db,s=e.stringifyQuery||La,o=e.history,l=_s(),i=_s(),a=_s(),c=Mt(Xt);let u=Xt;Kn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=br.bind(null,C=>""+C),p=br.bind(null,Lb),d=br.bind(null,Io);function h(C,K){let I,Y;return qu(C)?(I=t.getRecordMatcher(C),Y=K):Y=C,t.addRoute(Y,I)}function m(C){const K=t.getRecordMatcher(C);K&&t.removeRoute(K)}function v(){return t.getRoutes().map(C=>C.record)}function y(C){return!!t.getRecordMatcher(C)}function E(C,K){if(K=Ae({},K||c.value),typeof C=="string"){const le=_r(n,C,K.path),g=t.resolve({path:le.path},K),_=o.createHref(le.fullPath);return Ae(le,g,{params:d(g.params),hash:Io(le.hash),redirectedFrom:void 0,href:_})}let I;if("path"in C)I=Ae({},C,{path:_r(n,C.path,K.path).path});else{const le=Ae({},C.params);for(const g in le)le[g]==null&&delete le[g];I=Ae({},C,{params:p(C.params)}),K.params=p(K.params)}const Y=t.resolve(I,K),be=C.hash||"";Y.params=f(d(Y.params));const Te=Kg(s,Ae({},C,{hash:Tb(be),path:Y.path})),de=o.createHref(Te);return Ae({fullPath:Te,hash:be,query:s===La?Rb(C.query):C.query||{}},Y,{redirectedFrom:void 0,href:de})}function A(C){return typeof C=="string"?_r(n,C,c.value.path):Ae({},C)}function S(C,K){if(u!==C)return ls(8,{from:K,to:C})}function $(C){return H(C)}function R(C){return $(Ae(A(C),{replace:!0}))}function L(C){const K=C.matched[C.matched.length-1];if(K&&K.redirect){const{redirect:I}=K;let Y=typeof I=="function"?I(C):I;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=A(Y):{path:Y},Y.params={}),Ae({query:C.query,hash:C.hash,params:"path"in Y?{}:C.params},Y)}}function H(C,K){const I=u=E(C),Y=c.value,be=C.state,Te=C.force,de=C.replace===!0,le=L(I);if(le)return H(Ae(A(le),{state:typeof le=="object"?Ae({},be,le.state):be,force:Te,replace:de}),K||I);const g=I;g.redirectedFrom=K;let _;return!Te&&Yg(s,Y,I)&&(_=ls(16,{to:g,from:Y}),Lt(Y,Y,!0,!1)),(_?Promise.resolve(_):re(g,Y)).catch(k=>Vt(k)?Vt(k,2)?k:ge(k):se(k,g,Y)).then(k=>{if(k){if(Vt(k,2))return H(Ae({replace:de},A(k.to),{state:typeof k.to=="object"?Ae({},be,k.to.state):be,force:Te}),K||g)}else k=ye(g,Y,!0,de,be);return me(g,Y,k),k})}function ee(C,K){const I=S(C,K);return I?Promise.reject(I):Promise.resolve()}function re(C,K){let I;const[Y,be,Te]=qb(C,K);I=yr(Y.reverse(),"beforeRouteLeave",C,K);for(const le of Y)le.leaveGuards.forEach(g=>{I.push(nn(g,C,K))});const de=ee.bind(null,C,K);return I.push(de),Hn(I).then(()=>{I=[];for(const le of l.list())I.push(nn(le,C,K));return I.push(de),Hn(I)}).then(()=>{I=yr(be,"beforeRouteUpdate",C,K);for(const le of be)le.updateGuards.forEach(g=>{I.push(nn(g,C,K))});return I.push(de),Hn(I)}).then(()=>{I=[];for(const le of C.matched)if(le.beforeEnter&&!K.matched.includes(le))if(Ft(le.beforeEnter))for(const g of le.beforeEnter)I.push(nn(g,C,K));else I.push(nn(le.beforeEnter,C,K));return I.push(de),Hn(I)}).then(()=>(C.matched.forEach(le=>le.enterCallbacks={}),I=yr(Te,"beforeRouteEnter",C,K),I.push(de),Hn(I))).then(()=>{I=[];for(const le of i.list())I.push(nn(le,C,K));return I.push(de),Hn(I)}).catch(le=>Vt(le,8)?le:Promise.reject(le))}function me(C,K,I){for(const Y of a.list())Y(C,K,I)}function ye(C,K,I,Y,be){const Te=S(C,K);if(Te)return Te;const de=K===Xt,le=Kn?history.state:{};I&&(Y||de?o.replace(C.fullPath,Ae({scroll:de&&le&&le.scroll},be)):o.push(C.fullPath,be)),c.value=C,Lt(C,K,I,de),ge()}let Ie;function Ne(){Ie||(Ie=o.listen((C,K,I)=>{if(!Qt.listening)return;const Y=E(C),be=L(Y);if(be){H(Ae(be,{replace:!0}),Y).catch(Ts);return}u=Y;const Te=c.value;Kn&&sb($a(Te.fullPath,I.delta),sr()),re(Y,Te).catch(de=>Vt(de,12)?de:Vt(de,2)?(H(de.to,Y).then(le=>{Vt(le,20)&&!I.delta&&I.type===Us.pop&&o.go(-1,!1)}).catch(Ts),Promise.reject()):(I.delta&&o.go(-I.delta,!1),se(de,Y,Te))).then(de=>{de=de||ye(Y,Te,!1),de&&(I.delta&&!Vt(de,8)?o.go(-I.delta,!1):I.type===Us.pop&&Vt(de,20)&&o.go(-1,!1)),me(Y,Te,de)}).catch(Ts)}))}let Ue=_s(),Oe=_s(),te;function se(C,K,I){ge(C);const Y=Oe.list();return Y.length?Y.forEach(be=>be(C,K,I)):console.error(C),Promise.reject(C)}function X(){return te&&c.value!==Xt?Promise.resolve():new Promise((C,K)=>{Ue.add([C,K])})}function ge(C){return te||(te=!C,Ne(),Ue.list().forEach(([K,I])=>C?I(C):K()),Ue.reset()),C}function Lt(C,K,I,Y){const{scrollBehavior:be}=e;if(!Kn||!be)return Promise.resolve();const Te=!I&&ob($a(C.fullPath,0))||(Y||!I)&&history.state&&history.state.scroll||null;return Ge().then(()=>be(C,K,Te)).then(de=>de&&nb(de)).catch(de=>se(de,C,K))}const Ze=C=>o.go(C);let _t;const st=new Set,Qt={currentRoute:c,listening:!0,addRoute:h,removeRoute:m,hasRoute:y,getRoutes:v,resolve:E,options:e,push:$,replace:R,go:Ze,back:()=>Ze(-1),forward:()=>Ze(1),beforeEach:l.add,beforeResolve:i.add,afterEach:a.add,onError:Oe.add,isReady:X,install(C){const K=this;C.component("RouterLink",Bb),C.component("RouterView",Gb),C.config.globalProperties.$router=K,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>w(c)}),Kn&&!_t&&c.value===Xt&&(_t=!0,$(o.location).catch(be=>{}));const I={};for(const be in Xt)I[be]=O(()=>c.value[be]);C.provide(Zl,K),C.provide(tf,Le(I)),C.provide(ol,c);const Y=C.unmount;st.add(C),C.unmount=function(){st.delete(C),st.size<1&&(u=Xt,Ie&&Ie(),Ie=null,c.value=Xt,_t=!1,te=!1),Y()}}};return Qt}function Hn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function qb(e,t){const n=[],s=[],o=[],l=Math.max(t.matched.length,e.matched.length);for(let i=0;i<l;i++){const a=t.matched[i];a&&(e.matched.find(u=>rs(u,a))?s.push(a):n.push(a));const c=e.matched[i];c&&(t.matched.find(u=>rs(u,c))||o.push(c))}return[n,s,o]}const vr=z(!1),Is=z(!1),Zn=z(!1),Kb=z(!0),rl=ag({xs:460,...sg}),Pn=zg(),nf=Fg(),Yb=O(()=>Pn.height.value-Pn.width.value/an>180),sf=Mg(Tt?document.body:null),ns=ng(),Zb=O(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=ns.value)==null?void 0:e.tagName)||"")||((t=ns.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),Qb=O(()=>{var e;return["BUTTON","A"].includes(((e=ns.value)==null?void 0:e.tagName)||"")});It("slidev-camera","default");It("slidev-mic","default");const wo=It("slidev-scale",0),Je=It("slidev-show-overview",!1),wr=It("slidev-presenter-cursor",!0),Ba=It("slidev-show-editor",!1);It("slidev-editor-width",Tt?window.innerWidth*.4:100);const of=Hu(Je);function Ha(e,t,n,s=o=>o){return e*s(.5-t*(.5-n))}function Jb(e){return[-e[0],-e[1]]}function At(e,t){return[e[0]+t[0],e[1]+t[1]]}function vt(e,t){return[e[0]-t[0],e[1]-t[1]]}function St(e,t){return[e[0]*t,e[1]*t]}function Xb(e,t){return[e[0]/t,e[1]/t]}function ys(e){return[e[1],-e[0]]}function e_(e,t){return e[0]*t[0]+e[1]*t[1]}function t_(e,t){return e[0]===t[0]&&e[1]===t[1]}function n_(e){return Math.hypot(e[0],e[1])}function s_(e){return e[0]*e[0]+e[1]*e[1]}function Va(e,t){return s_(vt(e,t))}function rf(e){return Xb(e,n_(e))}function o_(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function vs(e,t,n){let s=Math.sin(n),o=Math.cos(n),l=e[0]-t[0],i=e[1]-t[1],a=l*o-i*s,c=l*s+i*o;return[a+t[0],c+t[1]]}function ll(e,t,n){return At(e,St(vt(t,e),n))}function za(e,t,n){return At(e,St(t,n))}var{min:Vn,PI:r_}=Math,Ga=.275,ws=r_+1e-4;function l_(e,t={}){let{size:n=16,smoothing:s=.5,thinning:o=.5,simulatePressure:l=!0,easing:i=te=>te,start:a={},end:c={},last:u=!1}=t,{cap:f=!0,easing:p=te=>te*(2-te)}=a,{cap:d=!0,easing:h=te=>--te*te*te+1}=c;if(e.length===0||n<=0)return[];let m=e[e.length-1].runningLength,v=a.taper===!1?0:a.taper===!0?Math.max(n,m):a.taper,y=c.taper===!1?0:c.taper===!0?Math.max(n,m):c.taper,E=Math.pow(n*s,2),A=[],S=[],$=e.slice(0,10).reduce((te,se)=>{let X=se.pressure;if(l){let ge=Vn(1,se.distance/n),Lt=Vn(1,1-ge);X=Vn(1,te+(Lt-te)*(ge*Ga))}return(te+X)/2},e[0].pressure),R=Ha(n,o,e[e.length-1].pressure,i),L,H=e[0].vector,ee=e[0].point,re=ee,me=ee,ye=re;for(let te=0;te<e.length;te++){let{pressure:se}=e[te],{point:X,vector:ge,distance:Lt,runningLength:Ze}=e[te];if(te<e.length-1&&m-Ze<3)continue;if(o){if(l){let I=Vn(1,Lt/n),Y=Vn(1,1-I);se=Vn(1,$+(Y-$)*(I*Ga))}R=Ha(n,o,se,i)}else R=n/2;L===void 0&&(L=R);let _t=Ze<v?p(Ze/v):1,st=m-Ze<y?h((m-Ze)/y):1;if(R=Math.max(.01,R*Math.min(_t,st)),te===e.length-1){let I=St(ys(ge),R);A.push(vt(X,I)),S.push(At(X,I));continue}let Qt=e[te+1].vector,C=e_(ge,Qt);if(C<0){let I=St(ys(H),R);for(let Y=1/13,be=0;be<=1;be+=Y)me=vs(vt(X,I),X,ws*be),A.push(me),ye=vs(At(X,I),X,ws*-be),S.push(ye);ee=me,re=ye;continue}let K=St(ys(ll(Qt,ge,C)),R);me=vt(X,K),(te<=1||Va(ee,me)>E)&&(A.push(me),ee=me),ye=At(X,K),(te<=1||Va(re,ye)>E)&&(S.push(ye),re=ye),$=se,H=ge}let Ie=e[0].point.slice(0,2),Ne=e.length>1?e[e.length-1].point.slice(0,2):At(e[0].point,[1,1]),Ue=[],Oe=[];if(e.length===1){if(!(v||y)||u){let te=za(Ie,rf(ys(vt(Ie,Ne))),-(L||R)),se=[];for(let X=1/13,ge=X;ge<=1;ge+=X)se.push(vs(te,Ie,ws*2*ge));return se}}else{if(!(v||y&&e.length===1))if(f)for(let se=1/13,X=se;X<=1;X+=se){let ge=vs(S[0],Ie,ws*X);Ue.push(ge)}else{let se=vt(A[0],S[0]),X=St(se,.5),ge=St(se,.51);Ue.push(vt(Ie,X),vt(Ie,ge),At(Ie,ge),At(Ie,X))}let te=ys(Jb(e[e.length-1].vector));if(y||v&&e.length===1)Oe.push(Ne);else if(d){let se=za(Ne,te,R);for(let X=1/29,ge=X;ge<1;ge+=X)Oe.push(vs(se,Ne,ws*3*ge))}else Oe.push(At(Ne,St(te,R)),At(Ne,St(te,R*.99)),vt(Ne,St(te,R*.99)),vt(Ne,St(te,R)))}return A.concat(Oe,S.reverse(),Ue)}function i_(e,t={}){var n;let{streamline:s=.5,size:o=16,last:l=!1}=t;if(e.length===0)return[];let i=.15+(1-s)*.85,a=Array.isArray(e[0])?e:e.map(({x:h,y:m,pressure:v=.5})=>[h,m,v]);if(a.length===2){let h=a[1];a=a.slice(0,-1);for(let m=1;m<5;m++)a.push(ll(a[0],h,m/4))}a.length===1&&(a=[...a,[...At(a[0],[1,1]),...a[0].slice(2)]]);let c=[{point:[a[0][0],a[0][1]],pressure:a[0][2]>=0?a[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,f=0,p=c[0],d=a.length-1;for(let h=1;h<a.length;h++){let m=l&&h===d?a[h].slice(0,2):ll(p.point,a[h],i);if(t_(p.point,m))continue;let v=o_(m,p.point);if(f+=v,h<d&&!u){if(f<o)continue;u=!0}p={point:m,pressure:a[h][2]>=0?a[h][2]:.5,vector:rf(vt(p.point,m)),distance:v,runningLength:f},c.push(p)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function a_(e,t={}){return l_(i_(e,t),t)}var c_=()=>({events:{},emit(e,...t){let n=this.events[e]||[];for(let s=0,o=n.length;s<o;s++)n[s](...t)},on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var s;this.events[e]=(s=this.events[e])==null?void 0:s.filter(o=>t!==o)}}});function Lo(e,t){return e-t}function u_(e){return e<0?-1:1}function Do(e){return[Math.abs(e),u_(e)]}function lf(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var f_=2,Gt=f_,ds=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var o;var t;const n=this.drauu.el,s=(o=this.drauu.options.coordinateScale)!=null?o:1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-l.left)*s,y:(e.pageY-l.top)*s,pressure:e.pressure}}else{const l=this.drauu.svgPoint;l.x=e.clientX,l.y=e.clientY;const i=l.matrixTransform((t=n.getScreenCTM())==null?void 0:t.inverse());return{x:i.x*s,y:i.y*s,pressure:e.pressure}}}createElement(e,t){var o;const n=document.createElementNS("http://www.w3.org/2000/svg",e),s=t?{...this.brush,...t}:this.brush;return n.setAttribute("fill",(o=s.fill)!=null?o:"transparent"),n.setAttribute("stroke",s.color),n.setAttribute("stroke-width",s.size.toString()),n.setAttribute("stroke-linecap","round"),s.dasharray&&n.setAttribute("stroke-dasharray",s.dasharray),n}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(Gt))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},d_=class extends ds{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=a_(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const n=t.reduce((s,[o,l],i,a)=>{const[c,u]=a[(i+1)%a.length];return s.push(o,l,(o+c)/2,(l+u)/2),s},["M",...t[0],"Q"]);return n.push("Z"),n.map(s=>typeof s=="number"?s.toFixed(2):s).join(" ")}},p_=class extends ds{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Do(e.x-this.start.x),[s,o]=Do(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,s);t=l,s=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",s);else{const[l,i]=[this.start.x,this.start.x+t*n].sort(Lo),[a,c]=[this.start.y,this.start.y+s*o].sort(Lo);this.attr("cx",(l+i)/2),this.attr("cy",(a+c)/2),this.attr("rx",(i-l)/2),this.attr("ry",(c-a)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function af(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),s=document.createElementNS("http://www.w3.org/2000/svg","marker"),o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("fill",t),s.setAttribute("id",e),s.setAttribute("viewBox","0 -5 10 10"),s.setAttribute("refX","5"),s.setAttribute("refY","0"),s.setAttribute("markerWidth","4"),s.setAttribute("markerHeight","4"),s.setAttribute("orient","auto"),o.setAttribute("d","M0,-5L10,0L0,5"),s.appendChild(o),n.appendChild(s),n}var h_=class extends ds{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=lf(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(af(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const s=e.x-this.start.x,o=e.y-this.start.y;if(o!==0){let l=s/o;l=Math.round(l),Math.abs(l)<=1?(t=this.start.x+o*l,n=this.start.y+o):(t=this.start.x+s,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},m_=class extends ds{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Do(e.x-this.start.x),[s,o]=Do(e.y-this.start.y);if(this.shiftPressed){const l=Math.min(t,s);t=l,s=l}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-s),this.attr("width",t*2),this.attr("height",s*2);else{const[l,i]=[this.start.x,this.start.x+t*n].sort(Lo),[a,c]=[this.start.y,this.start.y+s*o].sort(Lo);this.attr("x",l),this.attr("y",a),this.attr("width",i-l),this.attr("height",c-a)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function g_(e,t){const n=e.x-t.x,s=e.y-t.y;return n*n+s*s}function b_(e,t,n){let s=t.x,o=t.y,l=n.x-s,i=n.y-o;if(l!==0||i!==0){const a=((e.x-s)*l+(e.y-o)*i)/(l*l+i*i);a>1?(s=n.x,o=n.y):a>0&&(s+=l*a,o+=i*a)}return l=e.x-s,i=e.y-o,l*l+i*i}function __(e,t){let n=e[0];const s=[n];let o;for(let l=1,i=e.length;l<i;l++)o=e[l],g_(o,n)>t&&(s.push(o),n=o);return n!==o&&o&&s.push(o),s}function il(e,t,n,s,o){let l=s,i=0;for(let a=t+1;a<n;a++){const c=b_(e[a],e[t],e[n]);c>l&&(i=a,l=c)}l>s&&(i-t>1&&il(e,t,i,s,o),o.push(e[i]),n-i>1&&il(e,i,n,s,o))}function y_(e,t){const n=e.length-1,s=[e[0]];return il(e,0,n,t,s),s.push(e[n]),s}function Ua(e,t,n=!1){if(e.length<=2)return e;const s=t!==void 0?t*t:1;return e=n?e:__(e,s),e=y_(e,s),e}var v_=class extends ds{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=lf();const t=af(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Ua(this.points,1,!0),this.count=0),this.attr("d",Ka(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Ka(Ua(this.points,1,!0))),!e.getTotalLength()))}};function w_(e,t){const n=t.x-e.x,s=t.y-e.y;return{length:Math.sqrt(Math.pow(n,2)+Math.pow(s,2)),angle:Math.atan2(s,n)}}function qa(e,t,n,s){const o=t||e,l=n||e,i=.2,a=w_(o,l),c=a.angle+(s?Math.PI:0),u=a.length*i,f=e.x+Math.cos(c)*u,p=e.y+Math.sin(c)*u;return{x:f,y:p}}function x_(e,t,n){const s=qa(n[t-1],n[t-2],e),o=qa(e,n[t-1],n[t+1],!0);return`C ${s.x.toFixed(Gt)},${s.y.toFixed(Gt)} ${o.x.toFixed(Gt)},${o.y.toFixed(Gt)} ${e.x.toFixed(Gt)},${e.y.toFixed(Gt)}`}function Ka(e){return e.reduce((t,n,s,o)=>s===0?`M ${n.x.toFixed(Gt)},${n.y.toFixed(Gt)}`:`${t} ${x_(n,s,o)}`,"")}var k_=class extends ds{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,s)=>{if(n&&n.length)for(let o=0;o<n.length;o++){const l=n[o];if(l.getTotalLength){const i=l.getTotalLength();for(let a=0;a<this.pathSubFactor;a++){const c=l.getPointAtLength(i*a/this.pathSubFactor),u=l.getPointAtLength(i*(a+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:a,element:s||l})}}else l.children&&t(l.children,l)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,s)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,s=e.x2,o=t.x1,l=t.x2,i=e.y1,a=e.y2,c=t.y1,u=t.y2,f=(n-s)*(c-u)-(i-a)*(o-l),p=(n*a-i*s)*(o-l)-(n-s)*(o*u-c*l),d=(n*a-i*s)*(c-u)-(i-a)*(o*u-c*l),h=(m,v,y)=>m>=v&&m<=y?!0:m>=y&&m<=v;if(f===0)return!1;{const m={x:p/f,y:d/f};return h(m.x,n,s)&&h(m.y,i,a)&&h(m.x,o,l)&&h(m.y,c,u)}}};function S_(e){return{draw:new v_(e),stylus:new d_(e),line:new h_(e),rectangle:new m_(e),ellipse:new p_(e),eraseLine:new k_(e)}}var A_=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=c_(),this._models=S_(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,s=this.eventStart.bind(this),o=this.eventMove.bind(this),l=this.eventEnd.bind(this),i=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",s,{passive:!1}),window.addEventListener("pointermove",o,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",i,!1),window.addEventListener("keyup",i,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",s),window.removeEventListener("pointermove",o),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",i,!1),window.removeEventListener("keyup",i,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function E_(e){return new A_(e)}const al=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],jt=It("slidev-drawing-enabled",!1),k3=It("slidev-drawing-pinned",!1),$_=z(!1),O_=z(!1),C_=z(!1),qs=z(!1),An=$m(It("slidev-drawing-brush",{color:al[0],size:4,mode:"stylus"})),Ya=z("stylus"),cf=O(()=>we.drawings.syncAll||Nt.value);let Ks=!1;const xs=O({get(){return Ya.value},set(e){Ya.value=e,e==="arrow"?(An.mode="line",An.arrowEnd=!0):(An.mode=e,An.arrowEnd=!1)}}),P_=Le({brush:An,acceptsInputTypes:O(()=>jt.value?void 0:["pen"]),coordinateTransform:!1}),et=Uo(E_(P_));function M_(){et.clear(),cf.value&&Nu(Be.value,"")}function uf(){var e;O_.value=et.canRedo(),$_.value=et.canUndo(),C_.value=!!((e=et.el)!=null&&e.children.length)}function T_(e){Ks=!0;const t=To[e||Be.value];t!=null?et.load(t):et.clear(),Ks=!1}et.on("changed",()=>{if(uf(),!Ks){const e=et.dump(),t=Be.value;(To[t]||"")!==e&&cf.value&&Nu(t,et.dump())}});bm(e=>{Ks=!0,e[Be.value]!=null&&et.load(e[Be.value]||""),Ks=!1,uf()});Ge(()=>{ce(Be,()=>{!et.mounted||T_()},{immediate:!0})});et.on("start",()=>qs.value=!0);et.on("end",()=>qs.value=!1);window.addEventListener("keydown",e=>{if(!jt.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?et.redo():et.undo():e.code==="Escape"?jt.value=!1:e.code==="KeyL"&&t?xs.value="line":e.code==="KeyA"&&t?xs.value="arrow":e.code==="KeyS"&&t?xs.value="stylus":e.code==="KeyR"&&t?xs.value="rectangle":e.code==="KeyE"&&t?xs.value="ellipse":e.code==="KeyC"&&t?M_():e.code.startsWith("Digit")&&t&&+e.code[5]<=al.length?An.color=al[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function We(...e){return O(()=>e.every(t=>Xe(t)))}function ct(e){return O(()=>!Xe(e))}const Za=bg(),xr=It("slidev-color-schema","auto"),cl=O(()=>we.colorSchema!=="auto"),Ql=O({get(){return cl.value?we.colorSchema==="dark":xr.value==="auto"?Za.value:xr.value==="dark"},set(e){cl.value||(xr.value=e===Za.value?"auto":e?"dark":"light")}}),ff=Hu(Ql);Tt&&ce(Ql,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const xo=z(1),ko=O(()=>je.length-1),mt=z(0),Jl=z(0);function F_(){mt.value>xo.value&&(mt.value-=1)}function I_(){mt.value<ko.value&&(mt.value+=1)}function L_(){if(mt.value>xo.value){let e=mt.value-Jl.value;e<xo.value&&(e=xo.value),mt.value=e}}function D_(){if(mt.value<ko.value){let e=mt.value+Jl.value;e>ko.value&&(e=ko.value),mt.value=e}}function R_(){const{escape:e,space:t,shift:n,left:s,right:o,up:l,down:i,enter:a,d:c,g:u,o:f}=nf,p=[{name:"next_space",key:We(t,ct(n)),fn:cn,autoRepeat:!0},{name:"prev_space",key:We(t,n),fn:un,autoRepeat:!0},{name:"next_right",key:We(o,ct(n),ct(Je)),fn:cn,autoRepeat:!0},{name:"prev_left",key:We(s,ct(n),ct(Je)),fn:un,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:cn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:un,autoRepeat:!0},{name:"next_down",key:We(i,ct(Je)),fn:Zs,autoRepeat:!0},{name:"prev_up",key:We(l,ct(Je)),fn:()=>Qs(!1),autoRepeat:!0},{name:"next_shift",key:We(o,n),fn:Zs,autoRepeat:!0},{name:"prev_shift",key:We(s,n),fn:()=>Qs(!1),autoRepeat:!0},{name:"toggle_dark",key:We(c,ct(jt)),fn:ff},{name:"toggle_overview",key:We(f,ct(jt)),fn:of},{name:"hide_overview",key:We(e,ct(jt)),fn:()=>Je.value=!1},{name:"goto",key:We(u,ct(jt)),fn:()=>Zn.value=!Zn.value},{name:"next_overview",key:We(o,Je),fn:I_},{name:"prev_overview",key:We(s,Je),fn:F_},{name:"up_overview",key:We(l,Je),fn:L_},{name:"down_overview",key:We(i,Je),fn:D_},{name:"goto_from_overview",key:We(a,Je),fn:()=>{is(mt.value),Je.value=!1}}];return{customShortcuts:[],defaultShortcuts:p}}const df=We(ct(Zb),ct(Qb),Kb);function N_(e,t,n=!1){typeof e=="string"&&(e=nf[e]);const s=We(e,df);let o=0,l;const i=()=>{if(clearTimeout(l),!s.value){o=0;return}n&&(l=setTimeout(i,Math.max(1e3-o*250,150)),o++),t()};return ce(s,i,{flush:"sync"})}function W_(e,t){return tg(e,n=>{!df.value||n.repeat||t()})}function j_(){const{customShortcuts:e,defaultShortcuts:t}=R_();new Map([...t,...e].map(s=>[s.key,s])).forEach(s=>{s.fn&&N_(s.key,s.fn,s.autoRepeat)}),W_("f",()=>sf.toggle())}const B_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},H_=r("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),V_=[H_];function z_(e,t){return x(),V("svg",B_,V_)}const G_={name:"carbon-close",render:z_};function Xl(e){var n,s;const t=(s=(n=e==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:s.no;return t!=null?`slidev-page-${t}`:""}const pf=ke({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;W(q);const n=z(),s=Pg(n),o=O(()=>t.width?t.width:s.width.value),l=O(()=>t.width?t.width/an:s.height.value);t.width&&eo(()=>{n.value&&(n.value.style.width=`${o.value}px`,n.value.style.height=`${l.value}px`)});const i=O(()=>o.value/l.value),a=O(()=>t.scale?t.scale:i.value<an?o.value/Cn:l.value*an/Cn),c=O(()=>({height:`${Lu}px`,width:`${Cn}px`,transform:`translate(-50%, -50%) scale(${a.value})`})),u=O(()=>({"select-none":!we.selectable,"slidev-code-line-numbers":we.lineNumbers}));return dt(Iu,a),(f,p)=>(x(),V("div",{id:"slide-container",ref_key:"root",ref:n,class:De(w(u))},[r("div",{id:"slide-content",style:Ye(w(c))},[Ht(f.$slots,"default")],4),Ht(f.$slots,"controls")],2))}});const ei=ke({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=Wt(e,"clicks",t),s=Wt(e,"clicksElements",t),o=Wt(e,"clicksDisabled",t),l=Wt(e,"clicksOrderMap",t);s.value.length=0,dt(sm,e.route),dt(om,e.context),dt(Ps,n),dt(Ms,o),dt(wn,s),dt(Qr,l)},render(){var e,t;return this.$props.is?ht(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),U_=["innerHTML"],q_=ke({__name:"DrawingPreview",props:{page:null},setup(e){return W(q),(t,n)=>w(To)[e.page]?(x(),V("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:w(To)[e.page]},null,8,U_)):pe("v-if",!0)}}),K_={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Y_=["onClick"],Z_=ke({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:t}){const n=e;W(q);const s=Wt(n,"modelValue",t);function o(){s.value=!1}function l(h){is(h),o()}function i(h){return h===mt.value}const a=rl.smaller("xs"),c=rl.smaller("sm"),u=4*16*2,f=2*16,p=O(()=>a.value?Pn.width.value-u:c.value?(Pn.width.value-u-f)/2:300),d=O(()=>Math.floor((Pn.width.value-u)/(p.value+f)));return eo(()=>{mt.value=Be.value,Jl.value=d.value}),(h,m)=>{const v=G_;return x(),V(Ee,null,[wt(r("div",K_,[r("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Ye(`grid-template-columns: repeat(auto-fit,minmax(${w(p)}px,1fr))`)},[(x(!0),V(Ee,null,to(w(je).slice(0,-1),(y,E)=>(x(),V("div",{key:y.path,class:"relative"},[r("div",{class:De(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":i(E+1)}]),onClick:A=>l(+y.path)},[(x(),U(pf,{key:y.path,width:w(p),"clicks-disabled":!0,class:"pointer-events-none"},{default:B(()=>[F(w(ei),{is:y==null?void 0:y.component,"clicks-disabled":!0,class:De(w(Xl)(y)),route:y,context:"overview"},null,8,["is","class","route"]),F(q_,{page:+y.path},null,8,["page"])]),_:2},1032,["width"]))],10,Y_),r("div",{class:"absolute top-0 opacity-50",style:Ye(`left: ${w(p)+5}px`)},Tn(E+1),5)]))),128))],4)],512),[[Mu,w(s)]]),w(s)?(x(),V("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:o},[F(v)])):pe("v-if",!0)],64)}}});const Q_="/foss4g-2022-webassembly4g/assets/logo.b72bde5d.png",J_={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},X_=ke({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;W(q);const s=Wt(n,"modelValue",t);function o(){s.value=!1}return(l,i)=>(x(),U(fu,null,[w(s)?(x(),V("div",J_,[r("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:i[0]||(i[0]=a=>o())}),r("div",{class:De(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[Ht(l.$slots,"default")],2)])):pe("v-if",!0)],1024))}}),e0={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},t0=["innerHTML"],n0=r("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[r("div",{class:"flex gap-1 children:my-auto"},[r("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),r("img",{class:"w-5 h-5",src:Q_,alt:"Slidev"}),r("div",{style:{color:"#2082A6"}},[r("b",null,"Sli"),b("dev ")])])],-1),s0=ke({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;W(q);const s=Wt(n,"modelValue",t),o=O(()=>typeof we.info=="string");return(l,i)=>(x(),U(X_,{modelValue:w(s),"onUpdate:modelValue":i[0]||(i[0]=a=>Se(s)?s.value=a:null),class:"px-6 py-4"},{default:B(()=>[r("div",e0,[w(o)?(x(),V("div",{key:0,class:"mb-4",innerHTML:w(we).info},null,8,t0)):pe("v-if",!0),n0])]),_:1},8,["modelValue"]))}});const o0=["disabled","onKeydown"],r0=ke({__name:"Goto",setup(e){W(q);const t=z(),n=z(""),s=O(()=>{if(n.value.startsWith("/"))return!!je.find(i=>i.path===n.value.substring(1));{const i=+n.value;return!isNaN(i)&&i>0&&i<=Pf.value}});function o(){s.value&&(n.value.startsWith("/")?is(n.value.substring(1)):is(+n.value)),l()}function l(){Zn.value=!1}return ce(Zn,async i=>{var a,c;i?(await Ge(),n.value="",(a=t.value)==null||a.focus()):(c=t.value)==null||c.blur()}),ce(n,i=>{i.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(i,a)=>(x(),V("div",{id:"slidev-goto-dialog",class:De(["fixed right-5 bg-main transform transition-all",w(Zn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[wt(r("input",{ref_key:"input",ref:t,"onUpdate:modelValue":a[0]||(a[0]=c=>n.value=c),type:"text",disabled:!w(Zn),class:De(["outline-none bg-transparent",{"text-red-400":!w(s)&&n.value}]),placeholder:"Goto...",onKeydown:[Ji(o,["enter"]),Ji(l,["escape"])],onBlur:l},null,42,o0),[[Rh,n.value]])],2))}}),l0=ke({__name:"Controls",setup(e){W(q);const t=Mt(),n=Mt();return(s,o)=>(x(),V(Ee,null,[F(Z_,{modelValue:w(Je),"onUpdate:modelValue":o[0]||(o[0]=l=>Se(Je)?Je.value=l:null)},null,8,["modelValue"]),F(r0),w(t)?(x(),U(w(t),{key:0})):pe("v-if",!0),w(n)?(x(),U(w(n),{key:1,modelValue:w(vr),"onUpdate:modelValue":o[1]||(o[1]=l=>Se(vr)?vr.value=l:null)},null,8,["modelValue"])):pe("v-if",!0),w(we).info?(x(),U(s0,{key:2,modelValue:w(Is),"onUpdate:modelValue":o[2]||(o[2]=l=>Se(Is)?Is.value=l:null)},null,8,["modelValue"])):pe("v-if",!0)],64))}}),i0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},a0=r("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),c0=[a0];function u0(e,t){return x(),V("svg",i0,c0)}const f0={name:"carbon-settings-adjust",render:u0},d0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},p0=r("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),h0=r("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),m0=[p0,h0];function g0(e,t){return x(),V("svg",d0,m0)}const b0={name:"carbon-information",render:g0},_0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},y0=r("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),v0=[y0];function w0(e,t){return x(),V("svg",_0,v0)}const x0={name:"carbon-download",render:w0},k0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},S0=r("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),A0=r("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),E0=[S0,A0];function $0(e,t){return x(),V("svg",k0,E0)}const O0={name:"carbon-user-speaker",render:$0},C0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},P0=r("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),M0=r("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),T0=[P0,M0];function F0(e,t){return x(),V("svg",C0,T0)}const I0={name:"carbon-presentation-file",render:F0},L0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},D0=r("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),R0=[D0];function N0(e,t){return x(),V("svg",L0,R0)}const W0={name:"carbon-pen",render:N0},j0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},B0=r("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),H0=r("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),V0=[B0,H0];function z0(e,t){return x(),V("svg",j0,V0)}const G0={name:"ph-cursor-duotone",render:z0},U0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},q0=r("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),K0=[q0];function Y0(e,t){return x(),V("svg",U0,K0)}const hf={name:"ph-cursor-fill",render:Y0},Z0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Q0=r("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),J0=[Q0];function X0(e,t){return x(),V("svg",Z0,J0)}const ey={name:"carbon-sun",render:X0},ty={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ny=r("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),sy=[ny];function oy(e,t){return x(),V("svg",ty,sy)}const ry={name:"carbon-moon",render:oy},ly={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},iy=r("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),ay=[iy];function cy(e,t){return x(),V("svg",ly,ay)}const uy={name:"carbon-apps",render:cy},fy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},dy=r("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),py=[dy];function hy(e,t){return x(),V("svg",fy,py)}const my={name:"carbon-arrow-right",render:hy},gy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},by=r("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),_y=[by];function yy(e,t){return x(),V("svg",gy,_y)}const vy={name:"carbon-arrow-left",render:yy},wy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xy=r("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),ky=[xy];function Sy(e,t){return x(),V("svg",wy,ky)}const Ay={name:"carbon-maximize",render:Sy},Ey={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$y=r("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Oy=[$y];function Cy(e,t){return x(),V("svg",Ey,Oy)}const Py={name:"carbon-minimize",render:Cy},My={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ty=r("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),Fy=[Ty];function Iy(e,t){return x(),V("svg",My,Fy)}const Ly={name:"carbon-checkmark",render:Iy},Dy={class:"select-list"},Ry={class:"title"},Ny={class:"items"},Wy=["onClick"],jy=ke({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;W(q);const s=Wt(n,"modelValue",t,{passive:!0});return(o,l)=>{const i=Ly;return x(),V("div",Dy,[r("div",Ry,Tn(e.title),1),r("div",Ny,[(x(!0),V(Ee,null,to(e.items,a=>(x(),V("div",{key:a.value,class:De(["item",{active:w(s)===a.value}]),onClick:()=>{var c;s.value=a.value,(c=a.onClick)==null||c.call(a)}},[F(i,{class:De(["text-green-500",{"opacity-0":w(s)!==a.value}])},null,8,["class"]),b(" "+Tn(a.display||a.value),1)],10,Wy))),128))])])}}});const mf=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},By=mf(jy,[["__scopeId","data-v-7dd0eaca"]]),Hy={class:"text-sm"},Vy=ke({__name:"Settings",setup(e){W(q);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,s)=>(x(),V("div",Hy,[F(By,{modelValue:w(wo),"onUpdate:modelValue":s[0]||(s[0]=o=>Se(wo)?wo.value=o:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),zy={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},Gy=ke({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;W(q);const s=Wt(n,"modelValue",t,{passive:!0}),o=z();return Xm(o,()=>{s.value=!1}),(l,i)=>(x(),V("div",{ref_key:"el",ref:o,class:"flex relative"},[r("button",{class:De({disabled:e.disabled}),onClick:i[0]||(i[0]=a=>s.value=!w(s))},[Ht(l.$slots,"button",{class:De({disabled:e.disabled})})],2),(x(),U(fu,null,[w(s)?(x(),V("div",zy,[Ht(l.$slots,"menu")])):pe("v-if",!0)],1024))],512))}}),Uy={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},ho={__name:"VerticalDivider",setup(e){return W(q),(t,n)=>(x(),V("div",Uy))}},qy={render(){return[]}},Ky={class:"icon-btn"},Yy={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},Zy={class:"my-auto"},Qy={class:"opacity-50"},Jy=ke({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;W(q);const n=rl.smaller("md"),{isFullscreen:s,toggle:o}=sf,l=O(()=>fl.value?`?password=${fl.value}`:""),i=O(()=>`/presenter/${Be.value}${l.value}`),a=O(()=>`/${Be.value}${l.value}`),c=z(),u=()=>{c.value&&ns.value&&c.value.contains(ns.value)&&ns.value.blur()},f=O(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),p=Mt(),d=Mt();return fs(()=>import("./DrawingControls.6227d711.js"),["assets/DrawingControls.6227d711.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.d11999b2.js"]).then(h=>d.value=h.default),(h,m)=>{const v=Py,y=Ay,E=vy,A=my,S=uy,$=ry,R=ey,L=hf,H=G0,ee=W0,re=I0,me=Br("RouterLink"),ye=O0,Ie=x0,Ne=b0,Ue=f0;return x(),V("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[r("div",{class:De(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",w(f)]),onMouseleave:u},[w(zt)?pe("v-if",!0):(x(),V("button",{key:0,class:"icon-btn",onClick:m[0]||(m[0]=(...Oe)=>w(o)&&w(o)(...Oe))},[w(s)?(x(),U(v,{key:0})):(x(),U(y,{key:1}))])),r("button",{class:De(["icon-btn",{disabled:!w(NS)}]),onClick:m[1]||(m[1]=(...Oe)=>w(un)&&w(un)(...Oe))},[F(E)],2),r("button",{class:De(["icon-btn",{disabled:!w(RS)}]),title:"Next",onClick:m[2]||(m[2]=(...Oe)=>w(cn)&&w(cn)(...Oe))},[F(A)],2),w(zt)?pe("v-if",!0):(x(),V("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=Oe=>w(of)())},[F(S)])),w(cl)?pe("v-if",!0):(x(),V("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=Oe=>w(ff)())},[w(Ql)?(x(),U($,{key:0})):(x(),U(R,{key:1}))])),F(ho),w(zt)?pe("v-if",!0):(x(),V(Ee,{key:3},[!w(Nt)&&!w(n)&&w(p)?(x(),V(Ee,{key:0},[F(w(p)),F(ho)],64)):pe("v-if",!0),w(Nt)?(x(),V("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=Oe=>wr.value=!w(wr))},[w(wr)?(x(),U(L,{key:0})):(x(),U(H,{key:1,class:"opacity-50"}))])):pe("v-if",!0)],64)),!w(we).drawings.presenterOnly&&!w(zt)?(x(),V(Ee,{key:4},[r("button",{class:"icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=Oe=>jt.value=!w(jt))},[F(ee),w(jt)?(x(),V("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Ye({background:w(An).color})},null,4)):pe("v-if",!0)]),F(ho)],64)):pe("v-if",!0),w(zt)?pe("v-if",!0):(x(),V(Ee,{key:5},[w(Nt)?(x(),U(me,{key:0,to:w(a),class:"icon-btn",title:"Play Mode"},{default:B(()=>[F(re)]),_:1},8,["to"])):pe("v-if",!0),w(IS)?(x(),U(me,{key:1,to:w(i),class:"icon-btn",title:"Presenter Mode"},{default:B(()=>[F(ye)]),_:1},8,["to"])):pe("v-if",!0),pe("v-if",!0)],64)),(x(),V(Ee,{key:6},[w(we).download?(x(),V("button",{key:0,class:"icon-btn",onClick:m[8]||(m[8]=(...Oe)=>w(dl)&&w(dl)(...Oe))},[F(Ie)])):pe("v-if",!0)],64)),!w(Nt)&&w(we).info&&!w(zt)?(x(),V("button",{key:7,class:"icon-btn",onClick:m[9]||(m[9]=Oe=>Is.value=!w(Is))},[F(Ne)])):pe("v-if",!0),!w(Nt)&&!w(zt)?(x(),U(Gy,{key:8},{button:B(()=>[r("button",Ky,[F(Ue)])]),menu:B(()=>[F(Vy)]),_:1})):pe("v-if",!0),w(zt)?pe("v-if",!0):(x(),U(ho,{key:9})),r("div",Yy,[r("div",Zy,[b(Tn(w(Be))+" ",1),r("span",Qy,"/ "+Tn(w(Pf)),1)])]),F(w(qy))],34)],512)}}}),gf={render(){return[]}},bf={render(){return[]}},Xy={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},ev=ke({__name:"PresenterMouse",setup(e){return W(q),(t,n)=>{const s=hf;return w(gr).cursor?(x(),V("div",Xy,[F(s,{class:"absolute",style:Ye({left:`${w(gr).cursor.x}%`,top:`${w(gr).cursor.y}%`})},null,8,["style"])])):pe("v-if",!0)}}}),tv=ke({__name:"SlidesShow",props:{context:null},setup(e){W(q),ce(ft,()=>{var n,s;((n=ft.value)==null?void 0:n.meta)&&ft.value.meta.preload!==!1&&(ft.value.meta.__preloaded=!0),((s=kr.value)==null?void 0:s.meta)&&kr.value.meta.preload!==!1&&(kr.value.meta.__preloaded=!0)},{immediate:!0});const t=Mt();return fs(()=>import("./DrawingLayer.0f6bc410.js"),[]).then(n=>t.value=n.default),(n,s)=>(x(),V(Ee,null,[pe(" Global Bottom "),F(w(bf)),pe(" Slides "),(x(!0),V(Ee,null,to(w(je),o=>{var l,i;return x(),V(Ee,{key:o.path},[((l=o.meta)==null?void 0:l.__preloaded)||o===w(ft)?wt((x(),U(w(ei),{key:0,is:o==null?void 0:o.component,clicks:o===w(ft)?w(Pt):0,"clicks-elements":((i=o.meta)==null?void 0:i.__clicksElements)||[],"clicks-disabled":!1,class:De(w(Xl)(o)),route:o,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Mu,o===w(ft)]]):pe("v-if",!0)],64)}),128)),pe(" Global Top "),F(w(gf)),w(t)?(x(),U(w(t),{key:0})):pe("v-if",!0),w(Nt)?pe("v-if",!0):(x(),U(ev,{key:1}))],64))}}),nv=ke({__name:"Play",setup(e){W(q),j_();const t=z();function n(l){var i;Ba.value||((i=l.target)==null?void 0:i.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?cn():un())}BS(t);const s=O(()=>Yb.value||Ba.value);Mt();const o=Mt();return fs(()=>import("./DrawingControls.6227d711.js"),["assets/DrawingControls.6227d711.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.d11999b2.js"]).then(l=>o.value=l.default),(l,i)=>(x(),V(Ee,null,[r("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:Ye(w(Du))},[F(pf,{class:"w-full h-full",style:Ye({background:"var(--slidev-slide-container-background, black)"}),width:w(oi)?w(Pn).width.value:void 0,scale:w(wo),onPointerdown:n},{default:B(()=>[F(tv,{context:"slide"})]),controls:B(()=>[r("div",{class:De(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[w(s)?"opacity-100 right-0":"opacity-0 p-2",w(qs)?"pointer-events-none":""]])},[F(Jy,{class:"m-auto",persist:w(s)},null,8,["persist"])],2),!w(we).drawings.presenterOnly&&!w(zt)&&w(o)?(x(),U(w(o),{key:0,class:"ml-0"})):pe("v-if",!0)]),_:1},8,["style","width","scale"]),pe("v-if",!0)],4),F(l0)],64))}});function _f(e){const t=O(()=>e.value.path),n=O(()=>je.length-1),s=O(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),o=O(()=>or(s.value)),l=O(()=>je.find(d=>d.path===`${s.value}`)),i=O(()=>{var d,h,m;return(m=(h=(d=l.value)==null?void 0:d.meta)==null?void 0:h.slide)==null?void 0:m.id}),a=O(()=>{var d,h;return(h=(d=l.value)==null?void 0:d.meta)==null?void 0:h.layout}),c=O(()=>je.find(d=>d.path===`${Math.min(je.length,s.value+1)}`)),u=O(()=>je.filter(d=>{var h,m;return(m=(h=d.meta)==null?void 0:h.slide)==null?void 0:m.title}).reduce((d,h)=>(ri(d,h),d),[])),f=O(()=>li(u.value,l.value)),p=O(()=>ii(f.value));return{route:e,path:t,total:n,currentPage:s,currentPath:o,currentRoute:l,currentSlideId:i,currentLayout:a,nextRoute:c,rawTree:u,treeWithActiveStatuses:f,tree:p}}function yf(e,t,n){const s=z(0);Ge(()=>{gt.afterEach(async()=>{await Ge(),s.value+=1})});const o=O(()=>{var c,u;return s.value,((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),l=O(()=>{var c,u,f;return+((f=(u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.clicks)!=null?f:o.value.length)}),i=O(()=>n.value<je.length-1||e.value<l.value),a=O(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:o,clicksTotal:l,hasNext:i,hasPrev:a}}const sv=["id"],Qa=ke({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,s=Wt(n,"clicksElements",t),o=O(()=>({height:`${Lu}px`,width:`${Cn}px`})),l=Mt();fs(()=>import("./DrawingPreview.c1a4c388.js"),[]).then(u=>l.value=u.default);const i=O(()=>n.clicks),a=yf(i,n.nav.currentRoute,n.nav.currentPage),c=O(()=>`${n.route.path.toString().padStart(3,"0")}-${(i.value+1).toString().padStart(2,"0")}`);return dt(q,Le({nav:{...n.nav,...a},configs:we,themeConfigs:O(()=>we.themeConfig)})),(u,f)=>{var p;return x(),V("div",{id:w(c),class:"slide-container",style:Ye(w(o))},[F(w(bf)),F(w(ei),{is:(p=e.route)==null?void 0:p.component,"clicks-elements":w(s),"onUpdate:clicks-elements":f[0]||(f[0]=d=>Se(s)?s.value=d:null),clicks:w(i),"clicks-disabled":!1,class:De(w(Xl)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),w(l)?(x(),U(w(l),{key:0,page:+e.route.path},null,8,["page"])):pe("v-if",!0),F(w(gf))],12,sv)}}}),ov=ke({__name:"PrintSlide",props:{route:null},setup(e){var l;const t=e;W(q);const n=Le(((l=t.route.meta)==null?void 0:l.__clicksElements)||[]),s=O(()=>t.route),o=_f(s);return(i,a)=>(x(),V(Ee,null,[F(Qa,{"clicks-elements":n,"onUpdate:clicks-elements":a[0]||(a[0]=c=>Se(n)?n.value=c:null),clicks:0,nav:w(o),route:w(s)},null,8,["clicks-elements","nav","route"]),w(Ls)?pe("v-if",!0):(x(!0),V(Ee,{key:0},to(n.length,c=>(x(),U(Qa,{key:c,clicks:c,nav:w(o),route:w(s)},null,8,["clicks","nav","route"]))),128))],64))}}),rv={id:"print-content"},lv=ke({__name:"PrintContainer",props:{width:null},setup(e){const t=e;W(q);const n=O(()=>t.width),s=O(()=>t.width/an),o=O(()=>n.value/s.value),l=O(()=>o.value<an?n.value/Cn:s.value*an/Cn),i=je.slice(0,-1),a=O(()=>({"select-none":!we.selectable,"slidev-code-line-numbers":we.lineNumbers}));return dt(Iu,l),(c,u)=>(x(),V("div",{id:"print-container",class:De(w(a))},[r("div",rv,[(x(!0),V(Ee,null,to(w(i),f=>(x(),U(ov,{key:f.path,route:f},null,8,["route"]))),128))]),Ht(c.$slots,"controls")],2))}});const iv=ke({__name:"Print",setup(e){W(q);const t=Sn.canvasWidth,n=Math.round(t/Sn.aspectRatio)+1;function s(o,{slots:l}){if(l.default)return ht("style",l.default())}return eo(()=>{oi?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(o,l)=>(x(),V(Ee,null,[F(s,null,{default:B(()=>[b(" @page { size: "+Tn(w(t))+"px "+Tn(n)+"px; margin: 0px; } ",1)]),_:1}),r("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Ye(w(Du))},[F(lv,{class:"w-full h-full",style:Ye({background:"var(--slidev-slide-container-background, black)"}),width:w(Pn).width.value},null,8,["style","width"])],4)],64))}});const av={class:"slidev-layout end"},cv={__name:"end",setup(e){return W(q),(t,n)=>(x(),V("div",av," END "))}},uv=mf(cv,[["__scopeId","data-v-ab32435f"]]),fv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},dv=r("path",{fill:"currentColor","fill-rule":"evenodd",d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"},null,-1),pv=[dv];function hv(e,t){return x(),V("svg",fv,pv)}const vf={name:"carbon-logo-github",render:hv},mv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},gv=r("path",{fill:"currentColor",d:"M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"},null,-1),bv=[gv];function _v(e,t){return x(),V("svg",mv,bv)}const wf={name:"carbon-email",render:_v},xf="/foss4g-2022-webassembly4g/webassembly_logo.svg",kf="/foss4g-2022-webassembly4g/foss4g2022_logo.png";function Ja(e){return e.startsWith("/")?"/foss4g-2022-webassembly4g/"+e.slice(1):e}function yv(e,t=!1){const n=e&&["#","rgb","hsl"].some(o=>e.indexOf(o)===0),s={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${Ja(e)})`:`url("${Ja(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return s.background||delete s.background,s}const vv={class:"my-auto w-full"},wv=ke({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){const t=e;W(q);const n=O(()=>yv(t.background,!0));return(s,o)=>(x(),V("div",{class:"slidev-layout cover text-center",style:Ye(w(n))},[r("div",vv,[Ht(s.$slots,"default")])],4))}}),xv=r("h1",null,"WebAssembly4G",-1),kv=r("h2",null,"Where we are, and where we\u2019re heading",-1),Sv=r("div",{class:"pt-12"},[r("span",{class:"px-2 py-1"},[r("h3",null,[b("Michael Schmuki @ "),r("a",{href:"https://2022.foss4g.org/",target:"_blank"},"FOSS4G 2022")]),r("br"),r("br"),r("img",{style:{height:"5em",display:"inline-block","margin-right":"2em"},src:xf}),r("img",{style:{height:"5em",display:"inline-block","background-color":"white",padding:"1em"},src:kf}),r("br"),r("br"),b(" Slides @ "),r("a",{href:"https://boardend.github.io/foss4g-2022-webassembly4g/",target:"_blank"}," boardend.github.io/foss4g-2022-webassembly4g ")])],-1),Av={class:"abs-br m-6 flex gap-2"},Ev={href:"https://github.com/boardend/foss4g-2022-webassembly4g",target:"_blank",alt:"GitHub",class:"text-xl icon-btn opacity-50 !border-none !hover:text-white"},$v=r("div",{class:"absolute bottom-2 right-6",style:{"font-size":"6pt"}},[b(" Background Image by NASA, "),r("a",{href:"https://unsplash.com/photos/Q1p7bh3SHj8",target:"_blank"},"https://unsplash.com/photos/Q1p7bh3SHj8"),b(", ")],-1),Ov={__name:"1",setup(e){const t={theme:"seriph",background:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&dl=nasa-Q1p7bh3SHj8-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb",info:`WebAssembly4G - Where we are, and where we're heading

Talk in general track @ FOSS4G 2022 - Firenze (https://2022.foss4g.org/), 2022-08-26, 14:45\u201315:15 (Europe/Rome), General Online

see https://github.com/boardend/foss4g-2022-webassembly4g
`,aspectRatio:"16/9",css:"unocss",colorSchema:"light",class:"text-center",themeConfig:{primary:"#654FF0"},highlighter:"shiki",lineNumbers:!1,drawings:{persist:!1}};return W(q),(n,s)=>{const o=wf,l=vf;return x(),U(wv,fe(ue(t)),{default:B(()=>[xv,kv,Sv,r("div",Av,[r("button",{onClick:s[0]||(s[0]=i=>n.window.location="mailto://michael@schmuki.io"),title:"Open in Editor",class:"text-xl icon-btn opacity-50 !border-none !hover:text-white"},[F(o)]),r("a",Ev,[F(l)])]),$v]),_:1},16)}}},Cv=ke({props:{every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var l,i;const e=Co("click"),t=Co("after"),n=(a,c,u)=>wt(a,[[c,this.at!=null?+this.at+u:null,"",{hide:this.hide,fade:this.fade}]]);let s=(i=(l=this.$slots).default)==null?void 0:i.call(l);if(!s)return;s=lm(s);const o=a=>a.map((c,u)=>Fn(c)?n(ht(c),u%this.every===0?e:t,Math.floor(u/this.every)):c);return s.length===1&&["ul","ol"].includes(s[0].type)&&Array.isArray(s[0].children)?ht(s[0],{},[o(s[0].children)]):o(s)}}),lt=ke({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return F(Cv,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}}),Pv={class:"slidev-layout default"},he={__name:"default",setup(e){return W(q),(t,n)=>(x(),V("div",Pv,[Ht(t.$slots,"default")]))}},Mv=r("h1",null,"Intro",-1),Tv=r("h3",null,"Remote FOSS4G 2022",-1),Fv=b("\u2615 "),Iv=r("b",null,"->",-1),Lv=b(),Dv=r("s",null,"\u{1F1E8}\u{1F1ED} \u{1F685} \u26F0\uFE0F \u{1F1EE}\u{1F1F9}",-1),Rv=b(),Nv=r("b",null,"->",-1),Wv=r("s",null,"FOSS4G 2022 @ Firenze \u{1F30D}",-1),jv=b("\u2615 "),Bv=r("b",null,"->",-1),Hv=b(" \u{1F62F}\u{1F914} "),Vv=r("b",null,"->",-1),zv=b(" \u{1F9EA} "),Gv=r("b",null,"->",-1),Uv=b(" \u2611\uFE0F \u{1F637} "),qv=r("b",null,"->",-1),Kv=b(" FOSS4G 2022 @ Home "),Yv=r("b",null,"->",-1),Zv=b(" \u2615\u{1F5A5}\uFE0F\u{1F44C}"),Qv=r("br",null,null,-1),Jv=[jv,Bv,Hv,Vv,zv,Gv,Uv,qv,Kv,Yv,Zv,Qv],Xv=r("s",null,"2022-08-25, 17:15\u201317:45 @ Room Limonaia",-1),e1=b(),t1=r("b",null,"->",-1),n1=b(" 2022-08-"),s1=r("b",null,"26",-1),o1=b(", 14:45\u201315:15 @ General online"),r1=[Xv,e1,t1,n1,s1,o1],l1=b("Many thanks to the organizers of FOSS4G 2022 \u{1F64C}"),i1=[l1],a1=r("br",null,null,-1),c1=r("h3",null,"About me",-1),u1=r("ul",null,[r("li",null,[b("Michael Schmuki "),r("ul",null,[r("li",null,[b("Institute of Cartography and Geoinformation | ETH Zurich "),r("ul",null,[r("li",null,[b("Atlas of Switzerland"),r("sup",{class:"footnote-ref"},[r("a",{href:"#fn1",id:"fnref1"},"[1]")]),b(", Teaching, Open Source Geospatial Laboratory")])])]),r("li",null,[b("15 years of coding, 5 years in geospatial "),r("ul",null,[r("li",null,"Geospatial community is exceptional \u{1F30D}\u{1F970}")])])])])],-1),f1=r("br",null,null,-1),d1=r("hr",{class:"footnotes-sep"},null,-1),p1=r("section",{class:"footnotes"},[r("ol",{class:"footnotes-list"},[r("li",{id:"fn1",class:"footnote-item"},[r("p",null,[r("a",{href:"https://atlasofswitzerland.ch",target:"_blank",rel:"noopener"},"atlasofswitzerland.ch"),b(),r("a",{href:"#fnref1",class:"footnote-backref"},"\u21A9\uFE0E")])])])],-1),h1={__name:"2",setup(e){const t={};return W(q),(n,s)=>{const o=lt,l=Co("click");return x(),U(he,fe(ue(t)),{default:B(()=>[Mv,F(o,null,{default:B(()=>[Tv]),_:1}),r("ul",null,[wt((x(),V("li",null,[Fv,Iv,Lv,Dv,Rv,Nv,Wv,r("ul",null,[wt((x(),V("li",null,Jv)),[[l,3]]),wt((x(),V("li",null,r1)),[[l,4]]),wt((x(),V("li",null,i1)),[[l,5]])])])),[[l,2]])]),a1,F(o,null,{default:B(()=>[c1,u1]),_:1}),f1,d1,p1]),_:1},16)}}},m1=r("h1",null,"Why I\u2019m excited",-1),g1=r("ul",null,[r("li",null,[r("p",null,"Adoption across web projects")]),r("li",null,[r("p",null,"Adoption outside of browsers")]),r("li",null,[r("p",null,"Ability to reuse existing libraries")]),r("li",null,[r("p",null,"Evolution of WebAssembly")]),r("li",null,[r("p",null,"Porting osgEarth to the web"),r("ul",null,[r("li",null,"Demo")])]),r("li",null,[r("p",null,"How to get started with Emscripten"),r("ul",null,[r("li",null,"Tips and Tricks")])]),r("li",null,[r("p",null,"Opportunities ahead")])],-1),b1={__name:"3",setup(e){const t={};return W(q),(n,s)=>{const o=lt;return x(),U(he,fe(ue(t)),{default:B(()=>[m1,F(o,null,{default:B(()=>[g1]),_:1})]),_:1},16)}}},_1="/foss4g-2022-webassembly4g/lin_clark.png",y1=r("h1",null,".wasm, what?",-1),v1=r("br",null,null,-1),w1=r("ul",null,[r("li",null,[r("a",{href:"https://talks.osgeo.org/foss4g-2022/talk/XV87XB/",target:"_blank",rel:"noopener"},"Write once, run anywhere: safe and reusable analytic modules for WebAssembly, Javascript, or more!"),r("ul",null,[r("li",null,[r("strong",null,"Stuart Lynn @ FOSS4G 2022")])])])],-1),x1=r("br",null,null,-1),k1=r("ul",null,[r("li",null,[r("a",{href:"https://talks.2019.foss4g.org/bucharest/talk/PTUAEG/",target:"_blank",rel:"noopener"},"WebAssembly - a new technology and its potential for geospatial application"),r("ul",null,[r("li",null,[r("strong",null,"Pirmin Kalberer @ FOSS4G 2019"),r("ul",null,[r("li",null,[b("Stream @ "),r("a",{href:"https://www.youtube.com/watch?v=WodAYDDSq1g",target:"_blank",rel:"noopener"},"Youtube"),b(" / "),r("a",{href:"https://media.ccc.de/v/bucharest-230-webassembly-a-new-technology-and-its-potential-for-geospatial-application",target:"_blank",rel:"noopener"},"media.ccc.de")])])])])])],-1),S1=r("br",null,null,-1),A1=r("br",null,null,-1),E1=r("ul",null,[r("li",null,[r("a",{href:"https://github.com/linclark",target:"_blank",rel:"noopener"},"Lin Clark"),r("ul",null,[r("li",null,[r("strong",null,"JS Conf"),b(", "),r("strong",null,"WebAssembly Summit"),b(", "),r("strong",null,"Full Stack Fest"),b(", \u2026 "),r("ul",null,[r("li",null,[r("a",{href:"https://code-cartoons.com/",target:"_blank",rel:"noopener"},"https://code-cartoons.com/")]),r("li",null,[r("a",{href:"https://twitter.com/linclark",target:"_blank",rel:"noopener"},"@linclark")])])])])])],-1),$1=r("img",{src:_1,class:"absolute bottom-10 right-50",style:{height:"10em"}},null,-1),O1={__name:"4",setup(e){const t={};return W(q),(n,s)=>{const o=lt;return x(),U(he,fe(ue(t)),{default:B(()=>[y1,v1,F(o,null,{default:B(()=>[w1]),_:1}),x1,F(o,null,{default:B(()=>[k1]),_:1}),S1,A1,F(o,null,{default:B(()=>[E1,$1]),_:1})]),_:1},16)}}},C1="/foss4g-2022-webassembly4g/wasm_compilation.png",P1="/foss4g-2022-webassembly4g/wasm_design.png",M1="/foss4g-2022-webassembly4g/wasm_party.png",T1="/foss4g-2022-webassembly4g/wasm_security.png",F1="/foss4g-2022-webassembly4g/wasm_runtime.png",I1=r("h1",null,".wasm, what?",-1),L1=r("img",{class:"absolute left-20 top-25",style:{"z-index":"1",width:"12vw",transform:"rotate(-5deg)"},src:C1,alt:"WebAssembly compilation"},null,-1),D1=r("img",{class:"absolute top-15 right-20",style:{"z-index":"1",width:"12vw",transform:"rotate(5deg)"},src:P1,alt:"WebAssembly design"},null,-1),R1=r("img",{class:"absolute bottom-35 left-20",style:{"z-index":"1",width:"12vw"},src:M1,alt:"WebAssembly browser party"},null,-1),N1=r("img",{class:"absolute top-80 right-15",style:{"z-index":"1",width:"18vw",transform:"rotate(0deg)"},src:T1,alt:"WebAssembly Security"},null,-1),W1=r("img",{class:"absolute bottom-5 left-75",style:{"z-index":"1",width:"12vw"},src:F1,alt:"WebAssembly Runtime"},null,-1),j1=r("div",{style:{position:"absolute","z-index":"10","margin-left":"-4em","margin-top":"3em",width:"100%","text-align":"center"}},[r("img",{class:"",style:{"z-index":"10",display:"inline-block",width:"12vw"},src:xf,alt:"Logo WebAssembly"})],-1),B1={__name:"5",setup(e){const t={};return W(q),(n,s)=>{const o=lt;return x(),U(he,fe(ue(t)),{default:B(()=>[I1,pe(`
- Langauges
  - https://blog.scottlogic.com/2022/06/20/state-of-wasm-2022.html
  - https://webassembly.org/getting-started/developers-guide/
- Runtimes
  - Browser
  - Standalone
  - Cloud

https://boardend.github.io/fossgis-2021-webassembly/#/wasm

`),F(o,null,{default:B(()=>[L1]),_:1}),F(o,null,{default:B(()=>[D1]),_:1}),F(o,null,{default:B(()=>[R1]),_:1}),F(o,null,{default:B(()=>[N1]),_:1}),F(o,null,{default:B(()=>[W1]),_:1}),j1]),_:1},16)}}},H1=r("h1",null,"Adoption across web projects",-1),V1=r("h2",null,'"Small" WebAssembly modules',-1),z1=r("br",null,null,-1),G1=r("ul",null,[r("li",null,[r("code",null,".wasm"),b(" modules with a couple of MB in size "),r("ul",null,[r("li",null,"Examples: Computational statistics, decoding, \u2026"),r("li",null,"Size- and load-time-efficient binary format"),r("li",null,"Cacheable / Offline"),r("li",null,"Asynchronous / Multithreading")])])],-1),U1=r("br",null,null,-1),q1=r("ul",null,[r("li",null,[b("Often implicit for the library user "),r("ul",null,[r("li",null,"API usually written in TypeScript/JavaScript"),r("li",null,"Fallback JS implementation possible")])])],-1),K1={__name:"6",setup(e){const t={};return W(q),(n,s)=>(x(),U(he,fe(ue(t)),{default:B(()=>[H1,V1,z1,G1,U1,q1]),_:1},16))}},Y1="/foss4g-2022-webassembly4g/screenshot_cloud-native-geospatial_js.png",Z1=r("h2",null,'"Small" WebAssembly modules',-1),Q1=r("br",null,null,-1),J1=r("ul",null,[r("li",null,[b("Slide "),r("strong",null,[r("a",{href:"https://talks.osgeo.org/foss4g-2022/talk/MNLFUG/",target:"_blank",rel:"noopener"},"Cloud-Native Geospatial in JavaScript")]),r("ul",null,[r("li",null,"FOSS4G 2022 Talk by Daniel J. Dufour & Matthias Mohr")])])],-1),X1=r("div",{class:"m2 flex justify-center"},[r("img",{src:Y1,style:{width:"70%"}})],-1),e2={__name:"7",setup(e){const t={};return W(q),(n,s)=>(x(),U(he,fe(ue(t)),{default:B(()=>[Z1,Q1,J1,X1]),_:1},16))}},t2=r("h2",null,'"Small" WebAssembly modules',-1),n2=r("br",null,null,-1),s2=r("ul",null,[r("li",null,[r("p",null,[b("Example: "),r("a",{href:"https://loaders.gl/",target:"_blank",rel:"noopener"},"loaders.gl")]),r("ul",null,[r("li",null,"loaders.gl is a collection of open source loaders and writers for file formats focused on visualization of big data, including tabular, geospatial, and 3D formats"),r("li",null,[b("More and more WebAssembly based loaders "),r("ul",null,[r("li",null,"GeoPackageLoader"),r("li",null,"BasisLoader"),r("li",null,"DracoLoader")])])])]),r("li",null,[r("p",null,[b("Example: "),r("a",{href:"https://cesium.com/platform/cesiumjs/",target:"_blank",rel:"noopener"},"CesiumJS")]),r("ul",null,[r("li",null,[r("a",{href:"https://google.github.io/draco/",target:"_blank",rel:"noopener"},"Draco"),b(" Compressed Meshes with glTF and 3D Tiles")]),r("li",null,"So you have probably already used WebAssembly modules without even noticing")])])],-1),o2={__name:"8",setup(e){const t={};return W(q),(n,s)=>(x(),U(he,fe(ue(t)),{default:B(()=>[t2,n2,s2]),_:1},16))}},r2=r("h1",null,"Adoption across web projects",-1),l2=r("h2",null,'"Big" WebAssembly web applications',-1),i2=r("ul",null,[r("li",null,[r("p",null,"Full applications running in the browser"),r("ul",null,[r("li",null,"Porting of large/old code bases"),r("li",null,"WebGL, Audio, Network, File system, \u2026")])]),r("li",null,[r("p",null,"Commercial success stories"),r("ul",null,[r("li",null,[r("a",{href:"https://www.figma.com/de/blog/webassembly-cut-figmas-load-time-by-3x/",target:"_blank",rel:"noopener"},"Figma")]),r("li",null,[r("a",{href:"https://web.dev/ps-on-the-web/",target:"_blank",rel:"noopener"},[b("Adobe "),r("strong",null,"Photoshop")])]),r("li",null,[r("a",{href:"https://web.autocad.com",target:"_blank",rel:"noopener"},[b("Autodesk "),r("strong",null,"AutoCAD")])])])]),r("li",null,[r("p",null,"WebAssembly as a runtime target for game engines (Unity, Godot, Unreal Engine 4)"),r("ul",null,[r("li",null,[b("Interesting use cases with "),r("a",{href:"https://github.com/CesiumGS/cesium-native",target:"_blank",rel:"noopener"},"Cesium Native"),b(" or "),r("a",{href:"https://developers.arcgis.com/unity/",target:"_blank",rel:"noopener"},"ArcGIS Maps SDK for Unity")])])])],-1),a2={__name:"9",setup(e){const t={};return W(q),(n,s)=>(x(),U(he,fe(ue(t)),{default:B(()=>[r2,l2,i2]),_:1},16))}},c2=r("h2",null,[b('"Big" WebAssembly web applications: '),r("br"),b(),r("strong",null,"Google Earth"),b(),r("sup",{class:"footnote-ref"},[r("a",{href:"#fn1",id:"fnref1"},"[1]")])],-1),u2=r("br",null,null,-1),f2=r("div",{class:"m2 flex justify-center"},[r("video",{autoplay:"",id:"earthVideo",style:{width:"70%"},muted:""},[r("source",{type:"video/mp4",src:"https://polybox.ethz.ch/index.php/s/VxCRYlVswzuddkT/download"}),b(" Your browser does not support the video tag. ")])],-1),d2=r("div",{class:"absolute top-40 left-50"},[r("ul",null,[r("li",null,[r("a",{href:"https://earth.google.com/web/",target:"_blank",rel:"noopener"},"Google Earth"),r("ul",null,[r("li",null,"WebGL 3D globe"),r("li",null,"Visualization of raster and vector datasets")])]),r("li",null,[r("a",{href:"https://earth.google.com/web/",target:"_blank",rel:"noopener"},"Google Earth Studio"),r("ul",null,[r("li",null,"Animation tool based on the Google Earth 3D-renderer"),r("li",null,"Rendering und Export of frames inside the browser")])]),r("li",null,[r("a",{href:"https://ffmpeg.org/",target:"_blank",rel:"noopener"},"FFmpeg"),r("ul",null,[r("li",null,"FOSS C library for video/audio recording and converting"),r("li",null,[r("a",{href:"https://github.com/ffmpegwasm/ffmpeg.wasm",target:"_blank",rel:"noopener"},"ffmpeg.wasm"),r("ul",null,[r("li",null,[b("Stitched together individual frames and exported as "),r("code",null,"H264")])])])])])])],-1),p2=r("hr",{class:"footnotes-sep"},null,-1),h2=r("section",{class:"footnotes"},[r("ol",{class:"footnotes-list"},[r("li",{id:"fn1",class:"footnote-item"},[r("p",null,[r("a",{href:"https://web.dev/earth-webassembly/",target:"_blank",rel:"noopener"},"How we\u2019re bringing Google Earth to the web @ web.dev"),b(),r("a",{href:"#fnref1",class:"footnote-backref"},"\u21A9\uFE0E")])])])],-1),m2={__name:"10",setup(e){const t={};return W(q),(n,s)=>{const o=lt;return x(),U(he,fe(ue(t)),{default:B(()=>[c2,u2,f2,F(o,null,{default:B(()=>[d2]),_:1}),p2,h2]),_:1},16)}}},g2="/foss4g-2022-webassembly4g/screenshot_libreoffice.png",b2=r("h2",null,[b('"Big" WebAssembly web applications: '),r("br"),b(),r("strong",null,"LibreOffice")],-1),_2=r("br",null,null,-1),y2=r("div",{class:"m2 flex justify-center"},[r("img",{src:g2,style:{width:"70%"}})],-1),v2={__name:"11",setup(e){const t={};return W(q),(n,s)=>(x(),U(he,fe(ue(t)),{default:B(()=>[b2,_2,y2]),_:1},16))}},w2="/foss4g-2022-webassembly4g/screenshot_crunchy_playground.png",x2=r("h2",null,[b('"Big" WebAssembly web applications: '),r("br"),b(),r("strong",null,"Crunchy Data PostgreSQL Playground")],-1),k2=r("br",null,null,-1),S2=r("div",{class:"m2 flex justify-center"},[r("img",{src:w2,style:{width:"70%"}})],-1),A2={__name:"12",setup(e){const t={};return W(q),(n,s)=>(x(),U(he,fe(ue(t)),{default:B(()=>[x2,k2,S2]),_:1},16))}},E2="/foss4g-2022-webassembly4g/screenshot_crunchy_playground_v86.png",$2=r("h2",null,[b('"Big" WebAssembly web applications: '),r("br"),b(),r("strong",null,"Crunchy Data PostgreSQL Playground / v86")],-1),O2=r("br",null,null,-1),C2=r("div",{class:"m2 flex justify-center"},[r("img",{src:E2,style:{width:"70%"}})],-1),P2={__name:"13",setup(e){const t={};return W(q),(n,s)=>(x(),U(he,fe(ue(t)),{default:B(()=>[$2,O2,C2]),_:1},16))}},M2="/foss4g-2022-webassembly4g/webassembly_runtime.png",T2=r("h1",null,"Adoption outside of browsers",-1),F2=r("h2",null,"WebAssembly runtimes",-1),I2=r("br",null,null,-1),L2=r("div",{class:"m2 flex justify-center"},[r("img",{src:M2,style:{height:"20em"}})],-1),D2={__name:"14",setup(e){const t={};return W(q),(n,s)=>(x(),U(he,fe(ue(t)),{default:B(()=>[T2,F2,I2,L2]),_:1},16))}},R2="/foss4g-2022-webassembly4g/runtimes.png",N2=r("h2",null,"State of WebAssembly runtimes 2022",-1),W2=r("br",null,null,-1),j2=r("div",{class:"m2 flex justify-center"},[r("img",{src:R2,style:{height:"18em"}})],-1),B2=r("br",null,null,-1),H2=r("ul",null,[r("li",null,[b("Source: "),r("strong",null,"The State of WebAssembly 2022"),b(),r("br"),b(),r("a",{href:"https://blog.scottlogic.com/2022/06/20/state-of-wasm-2022.html",target:"_blank",rel:"noopener"},"https://blog.scottlogic.com/2022/06/20/state-of-wasm-2022.html")])],-1),V2={__name:"15",setup(e){const t={};return W(q),(n,s)=>(x(),U(he,fe(ue(t)),{default:B(()=>[N2,W2,j2,B2,H2]),_:1},16))}},z2=r("h1",null,"Adoption outside of browsers",-1),G2=r("h2",null,"WASI",-1),U2=r("br",null,null,-1),q2=r("ul",null,[r("li",null,[r("p",null,[r("strong",null,"The WebAssembly System Interface"),b(" (WASI)")]),r("ul",null,[r("li",null,[r("p",null,"WASI offers a standardized set of APIs for WebAssembly modules to access system resource"),r("ul",null,[r("li",null,"such as a FileSystem, Environment variables, Networking, Time, Random, \u2026")])]),r("li",null,[r("p",null,"Design Principles"),r("ul",null,[r("li",null,"Capability-based security"),r("li",null,"Interposition"),r("li",null,"Compatibility"),r("li",null,"Portability")])])])])],-1),K2={__name:"16",setup(e){const t={};return W(q),(n,s)=>(x(),U(he,fe(ue(t)),{default:B(()=>[z2,G2,U2,q2]),_:1},16))}},Y2=r("h1",null,"Adoption outside of browsers",-1),Z2=r("h2",null,"Other examples",-1),Q2=r("br",null,null,-1),J2=r("ul",null,[r("li",null,[r("p",null,[b("Example: "),r("strong",null,"WebAssembly function as a service (FaaS)")]),r("ul",null,[r("li",null,"WebAssembly on Amazon Lambda, Cloudflare Workers, \u2026")])])],-1),X2=r("br",null,null,-1),ew=r("ul",null,[r("li",null,[r("p",null,[b("Example: "),r("strong",null,"WebAssembly Module as PostgreSQL function")]),r("ul",null,[r("li",null,[r("p",null,"WebAssembly Module loaded from within the database")]),r("li",null,[r("p",null,"Integrations:"),r("ul",null,[r("li",null,[r("a",{href:"https://github.com/plv8/plv8",target:"_blank",rel:"noopener"},"PLV8")]),r("li",null,[r("a",{href:"https://github.com/wasmerio/wasmer-postgres",target:"_blank",rel:"noopener"},"Wasmer Postgres")])])])])])],-1),tw={__name:"17",setup(e){const t={};return W(q),(n,s)=>(x(),U(he,fe(ue(t)),{default:B(()=>[Y2,Z2,Q2,J2,X2,ew]),_:1},16))}},nw="/foss4g-2022-webassembly4g/logo_cpp.svg",sw="/foss4g-2022-webassembly4g/logo_osgeo.png",ow="/foss4g-2022-webassembly4g/logo_rust.svg",rw="/foss4g-2022-webassembly4g/logo_python.svg",lw=r("h1",null,"Ability to reuse existing libraries",-1),iw={src:nw,class:"absolute top-40 left-10",style:{height:"8em"}},aw={src:sw,class:"absolute top-80 left-30",style:{height:"8em"}},cw={src:ow,class:"absolute top-40 left-65",style:{height:"8em"}},uw={src:rw,class:"absolute top-40 right-5",style:{height:"8em"}},fw={__name:"18",setup(e){const t={};return W(q),(n,s)=>{const o=Co("click");return x(),U(he,fe(ue(t)),{default:B(()=>[lw,wt(r("img",iw,null,512),[[o,1]]),wt(r("img",aw,null,512),[[o,2]]),wt(r("img",cw,null,512),[[o,3]]),wt(r("img",uw,null,512),[[o,4]])]),_:1},16)}}},dw="/foss4g-2022-webassembly4g/screenshot_starboard.png",pw=r("h2",null,[b("Ability to reuse existing libraries: "),r("br"),b(),r("strong",null,"Python Notebook (Starboard)")],-1),hw=r("br",null,null,-1),mw=r("div",{class:"m2 flex justify-center"},[r("img",{src:dw,style:{width:"70%"}})],-1),gw={__name:"19",setup(e){const t={};return W(q),(n,s)=>(x(),U(he,fe(ue(t)),{default:B(()=>[pw,hw,mw]),_:1},16))}},bw=r("h1",null,"Evolution of WebAssembly",-1),_w=r("ul",null,[r("li",null,"One of the fastest web standards implemented"),r("li",null,[b("Keep getting better since "),r("ul",null,[r("li",null,"Threads and atomics, Fixed-width SIMD, DWARF Debugging, \u2026"),r("li",null,"WebAssembly System Interface (WASI)")])])],-1),yw=r("br",null,null,-1),vw=r("ul",null,[r("li",null,[b("WebAssembly proposals "),r("ul",null,[r("li",null,[b("Component Model "),r("ul",null,[r("li",null,"Interface types: high-level types such as strings, records, collections, etc."),r("li",null,"A canonical ABI which specifies how high-level types are represented"),r("li",null,"Module and component linking: a mechanism for dynamically composing modules")])]),r("li",null,"Garbage Collection (GC)"),r("li",null,[b("Many more "),r("ul",null,[r("li",null,[r("a",{href:"https://github.com/WebAssembly/proposals",target:"_blank",rel:"noopener"},"https://github.com/WebAssembly/proposals")]),r("li",null,[r("a",{href:"https://chromestatus.com/features#tags%3Awebassembly",target:"_blank",rel:"noopener"},"https://chromestatus.com/features#tags%3Awebassembly")])])])])])],-1),ww={__name:"20",setup(e){const t={};return W(q),(n,s)=>{const o=lt;return x(),U(he,fe(ue(t)),{default:B(()=>[bw,_w,yw,F(o,null,{default:B(()=>[vw]),_:1})]),_:1},16)}}},xw="/foss4g-2022-webassembly4g/ads0.png",kw="/foss4g-2022-webassembly4g/ads1.png",Sw="/foss4g-2022-webassembly4g/logo_ads.png",Aw=r("h1",null,"Atlas of Switzerland",-1),Ew=r("ul",null,[r("li",null,[r("p",null,"Official national Atlas of Switzerland"),r("ul",null,[r("li",null,"400+ Maps"),r("li",null,[b("3D Globe based on "),r("a",{href:"",target:"_blank",rel:"noopener"},"osgEarth")])])]),r("li",null,[r("p",null,'"Atlas of Switzerland \u2013 online"'),r("ul",null,[r("li",null,[r("p",null,"Data downloaded on the fly")]),r("li",null,[r("p",null,[b("Clients for "),r("strong",null,"Windows"),b(" and "),r("strong",null,"MacOS")])])])])],-1),$w=r("img",{src:xw,class:"absolute top-15 right-10",style:{width:"20em"}},null,-1),Ow=r("img",{src:kw,class:"absolute bottom-10 right-10",style:{width:"22em",transform:"rotate(3deg)"}},null,-1),Cw=r("img",{src:Sw,class:"absolute bottom-10 left-25",style:{width:"8em"}},null,-1),Pw={__name:"21",setup(e){const t={};return W(q),(n,s)=>(x(),U(he,fe(ue(t)),{default:B(()=>[Aw,Ew,$w,Ow,Cw]),_:1},16))}},Mw=r("h1",null,"osgEarth WebAssembly",-1),Tw=r("ul",null,[r("li",null,[r("p",null,"Personal Side Project"),r("ul",null,[r("li",null,"Started in 2019 to port osgEarth, GEOS, PROJ, GDAL, SpatiaLite, and Co. to the web"),r("li",null,"On and off ever since")])]),r("li",null,[r("p",null,"Not Ready yet"),r("ul",null,[r("li",null,"Currently in private alpha"),r("li",null,"Hopefully I can share the project in the upcoming months")])]),r("li",null,[r("p",null,"Next Steps"),r("ul",null,[r("li",null,"Bring patches to the upstream projects"),r("li",null,"Publish a npm package"),r("li",null,"Explore how to port the Atlas of Switzerland to the web platform")])])],-1),Fw={__name:"22",setup(e){const t={};return W(q),(n,s)=>(x(),U(he,fe(ue(t)),{default:B(()=>[Mw,Tw]),_:1},16))}},Iw="/foss4g-2022-webassembly4g/screenshot_osgearthwasm.png",Lw=r("h1",null,"osgEarth WebAssembly Demo",-1),Dw=r("br",null,null,-1),Rw=r("div",{class:"m2 flex justify-center"},[r("img",{src:Iw,style:{width:"70%"}})],-1),Nw={__name:"23",setup(e){const t={};return W(q),(n,s)=>(x(),U(he,fe(ue(t)),{default:B(()=>[Lw,Dw,Rw]),_:1},16))}},Ww={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},jw=r("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),Bw=[jw];function Hw(e,t){return x(),V("svg",Ww,Bw)}const Vw={name:"ph-clipboard",render:Hw},zw={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Gw=r("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),Uw=[Gw];function qw(e,t){return x(),V("svg",zw,Uw)}const Kw={name:"ph-check-circle",render:qw};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Sf(e){return typeof e>"u"||e===null}function Yw(e){return typeof e=="object"&&e!==null}function Zw(e){return Array.isArray(e)?e:Sf(e)?[]:[e]}function Qw(e,t){var n,s,o,l;if(t)for(l=Object.keys(t),n=0,s=l.length;n<s;n+=1)o=l[n],e[o]=t[o];return e}function Jw(e,t){var n="",s;for(s=0;s<t;s+=1)n+=e;return n}function Xw(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var ex=Sf,tx=Yw,nx=Zw,sx=Jw,ox=Xw,rx=Qw,ti={isNothing:ex,isObject:tx,toArray:nx,repeat:sx,isNegativeZero:ox,extend:rx};function Af(e,t){var n="",s=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),s+" "+n):s}function Ys(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=Af(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Ys.prototype=Object.create(Error.prototype);Ys.prototype.constructor=Ys;Ys.prototype.toString=function(t){return this.name+": "+Af(this,t)};var xn=Ys,lx=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],ix=["scalar","sequence","mapping"];function ax(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(s){t[String(s)]=n})}),t}function cx(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(lx.indexOf(n)===-1)throw new xn('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=ax(t.styleAliases||null),ix.indexOf(this.kind)===-1)throw new xn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var Ke=cx;function Xa(e,t){var n=[];return e[t].forEach(function(s){var o=n.length;n.forEach(function(l,i){l.tag===s.tag&&l.kind===s.kind&&l.multi===s.multi&&(o=i)}),n[o]=s}),n}function ux(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function s(o){o.multi?(e.multi[o.kind].push(o),e.multi.fallback.push(o)):e[o.kind][o.tag]=e.fallback[o.tag]=o}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(s);return e}function ul(e){return this.extend(e)}ul.prototype.extend=function(t){var n=[],s=[];if(t instanceof Ke)s.push(t);else if(Array.isArray(t))s=s.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(s=s.concat(t.explicit));else throw new xn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(l){if(!(l instanceof Ke))throw new xn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new xn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new xn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),s.forEach(function(l){if(!(l instanceof Ke))throw new xn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(ul.prototype);return o.implicit=(this.implicit||[]).concat(n),o.explicit=(this.explicit||[]).concat(s),o.compiledImplicit=Xa(o,"implicit"),o.compiledExplicit=Xa(o,"explicit"),o.compiledTypeMap=ux(o.compiledImplicit,o.compiledExplicit),o};var fx=ul,dx=new Ke("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),px=new Ke("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),hx=new Ke("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),mx=new fx({explicit:[dx,px,hx]});function gx(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function bx(){return null}function _x(e){return e===null}var yx=new Ke("tag:yaml.org,2002:null",{kind:"scalar",resolve:gx,construct:bx,predicate:_x,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function vx(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function wx(e){return e==="true"||e==="True"||e==="TRUE"}function xx(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var kx=new Ke("tag:yaml.org,2002:bool",{kind:"scalar",resolve:vx,construct:wx,predicate:xx,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Sx(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Ax(e){return 48<=e&&e<=55}function Ex(e){return 48<=e&&e<=57}function $x(e){if(e===null)return!1;var t=e.length,n=0,s=!1,o;if(!t)return!1;if(o=e[n],(o==="-"||o==="+")&&(o=e[++n]),o==="0"){if(n+1===t)return!0;if(o=e[++n],o==="b"){for(n++;n<t;n++)if(o=e[n],o!=="_"){if(o!=="0"&&o!=="1")return!1;s=!0}return s&&o!=="_"}if(o==="x"){for(n++;n<t;n++)if(o=e[n],o!=="_"){if(!Sx(e.charCodeAt(n)))return!1;s=!0}return s&&o!=="_"}if(o==="o"){for(n++;n<t;n++)if(o=e[n],o!=="_"){if(!Ax(e.charCodeAt(n)))return!1;s=!0}return s&&o!=="_"}}if(o==="_")return!1;for(;n<t;n++)if(o=e[n],o!=="_"){if(!Ex(e.charCodeAt(n)))return!1;s=!0}return!(!s||o==="_")}function Ox(e){var t=e,n=1,s;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),s=t[0],(s==="-"||s==="+")&&(s==="-"&&(n=-1),t=t.slice(1),s=t[0]),t==="0")return 0;if(s==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function Cx(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!ti.isNegativeZero(e)}var Px=new Ke("tag:yaml.org,2002:int",{kind:"scalar",resolve:$x,construct:Ox,predicate:Cx,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Mx=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Tx(e){return!(e===null||!Mx.test(e)||e[e.length-1]==="_")}function Fx(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var Ix=/^[-+]?[0-9]+e/;function Lx(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(ti.isNegativeZero(e))return"-0.0";return n=e.toString(10),Ix.test(n)?n.replace("e",".e"):n}function Dx(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||ti.isNegativeZero(e))}var Rx=new Ke("tag:yaml.org,2002:float",{kind:"scalar",resolve:Tx,construct:Fx,predicate:Dx,represent:Lx,defaultStyle:"lowercase"}),Nx=mx.extend({implicit:[yx,kx,Px,Rx]}),Wx=Nx,Ef=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),$f=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function jx(e){return e===null?!1:Ef.exec(e)!==null||$f.exec(e)!==null}function Bx(e){var t,n,s,o,l,i,a,c=0,u=null,f,p,d;if(t=Ef.exec(e),t===null&&(t=$f.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],s=+t[2]-1,o=+t[3],!t[4])return new Date(Date.UTC(n,s,o));if(l=+t[4],i=+t[5],a=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(f=+t[10],p=+(t[11]||0),u=(f*60+p)*6e4,t[9]==="-"&&(u=-u)),d=new Date(Date.UTC(n,s,o,l,i,a,c)),u&&d.setTime(d.getTime()-u),d}function Hx(e){return e.toISOString()}var Vx=new Ke("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:jx,construct:Bx,instanceOf:Date,represent:Hx});function zx(e){return e==="<<"||e===null}var Gx=new Ke("tag:yaml.org,2002:merge",{kind:"scalar",resolve:zx}),ni=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Ux(e){if(e===null)return!1;var t,n,s=0,o=e.length,l=ni;for(n=0;n<o;n++)if(t=l.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;s+=6}return s%8===0}function qx(e){var t,n,s=e.replace(/[\r\n=]/g,""),o=s.length,l=ni,i=0,a=[];for(t=0;t<o;t++)t%4===0&&t&&(a.push(i>>16&255),a.push(i>>8&255),a.push(i&255)),i=i<<6|l.indexOf(s.charAt(t));return n=o%4*6,n===0?(a.push(i>>16&255),a.push(i>>8&255),a.push(i&255)):n===18?(a.push(i>>10&255),a.push(i>>2&255)):n===12&&a.push(i>>4&255),new Uint8Array(a)}function Kx(e){var t="",n=0,s,o,l=e.length,i=ni;for(s=0;s<l;s++)s%3===0&&s&&(t+=i[n>>18&63],t+=i[n>>12&63],t+=i[n>>6&63],t+=i[n&63]),n=(n<<8)+e[s];return o=l%3,o===0?(t+=i[n>>18&63],t+=i[n>>12&63],t+=i[n>>6&63],t+=i[n&63]):o===2?(t+=i[n>>10&63],t+=i[n>>4&63],t+=i[n<<2&63],t+=i[64]):o===1&&(t+=i[n>>2&63],t+=i[n<<4&63],t+=i[64],t+=i[64]),t}function Yx(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var Zx=new Ke("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Ux,construct:qx,predicate:Yx,represent:Kx}),Qx=Object.prototype.hasOwnProperty,Jx=Object.prototype.toString;function Xx(e){if(e===null)return!0;var t=[],n,s,o,l,i,a=e;for(n=0,s=a.length;n<s;n+=1){if(o=a[n],i=!1,Jx.call(o)!=="[object Object]")return!1;for(l in o)if(Qx.call(o,l))if(!i)i=!0;else return!1;if(!i)return!1;if(t.indexOf(l)===-1)t.push(l);else return!1}return!0}function ek(e){return e!==null?e:[]}var tk=new Ke("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Xx,construct:ek}),nk=Object.prototype.toString;function sk(e){if(e===null)return!0;var t,n,s,o,l,i=e;for(l=new Array(i.length),t=0,n=i.length;t<n;t+=1){if(s=i[t],nk.call(s)!=="[object Object]"||(o=Object.keys(s),o.length!==1))return!1;l[t]=[o[0],s[o[0]]]}return!0}function ok(e){if(e===null)return[];var t,n,s,o,l,i=e;for(l=new Array(i.length),t=0,n=i.length;t<n;t+=1)s=i[t],o=Object.keys(s),l[t]=[o[0],s[o[0]]];return l}var rk=new Ke("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:sk,construct:ok}),lk=Object.prototype.hasOwnProperty;function ik(e){if(e===null)return!0;var t,n=e;for(t in n)if(lk.call(n,t)&&n[t]!==null)return!1;return!0}function ak(e){return e!==null?e:{}}var ck=new Ke("tag:yaml.org,2002:set",{kind:"mapping",resolve:ik,construct:ak});Wx.extend({implicit:[Vx,Gx],explicit:[Zx,tk,rk,ck]});function ec(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}var uk=new Array(256),fk=new Array(256);for(var zn=0;zn<256;zn++)uk[zn]=ec(zn)?1:0,fk[zn]=ec(zn);function dk(e){return Array.from(new Set(e))}function tc(...e){let t,n,s;e.length===1?(t=0,s=1,[n]=e):[t,n,s=1]=e;const o=[];let l=t;for(;l<n;)o.push(l),l+=s||1;return o}function pk(e,t){if(!t||t==="all"||t==="*")return tc(1,e+1);const n=[];for(const s of t.split(/[,;]/g))if(!s.includes("-"))n.push(+s);else{const[o,l]=s.split("-",2);n.push(...tc(+o,l?+l+1:e+1))}return dk(n).filter(s=>s<=e).sort((s,o)=>s-o)}const hk=["title"],si=ke({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;W(q);const n=W(Ps),s=W(wn),o=W(Ms);function l(p=5){const d=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=h.length;for(let v=0;v<p;v++)d.push(h.charAt(Math.floor(Math.random()*m)));return d.join("")}const i=z(),a=Nn();us(()=>{const p=t.at==null?s==null?void 0:s.value.length:t.at,d=O(()=>o!=null&&o.value?t.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(p||0)),t.ranges.length-1)),h=O(()=>t.ranges[d.value]||"");if(t.ranges.length>=2&&!(o!=null&&o.value)){const m=l(),v=im(t.ranges.length-1).map(y=>m+y);s!=null&&s.value&&(s.value.push(...v),Xo(()=>v.forEach(y=>Jr(s.value,y)),a))}eo(()=>{if(!i.value)return;const v=i.value.querySelector(".shiki-dark")?Array.from(i.value.querySelectorAll(".shiki")):[i.value];for(const y of v){const E=Array.from(y.querySelectorAll(".line")),A=pk(E.length,h.value);if(E.forEach((S,$)=>{const R=A.includes($+1);S.classList.toggle(yn,!0),S.classList.toggle("highlighted",R),S.classList.toggle("dishonored",!R)}),t.maxHeight){const S=y.querySelector(".line.highlighted");S&&S.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:u}=cg();function f(){var d,h;const p=(h=(d=i.value)==null?void 0:d.querySelector(".slidev-code"))==null?void 0:h.textContent;p&&u(p)}return(p,d)=>{const h=Kw,m=Vw;return x(),V("div",{ref_key:"el",ref:i,class:"slidev-code-wrapper relative group",style:Ye({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[Ht(p.$slots,"default"),w(we).codeCopy?(x(),V("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:w(c)?"Copied":"Copy",onClick:d[0]||(d[0]=v=>f())},[w(c)?(x(),U(h,{key:0,class:"p-2 w-8 h-8"})):(x(),U(m,{key:1,class:"p-2 w-8 h-8"}))],8,hk)):pe("v-if",!0)],4)}}}),mk=r("h1",null,"osgEarth WebAssembly Demo",-1),gk=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#858585"}},"<"),r("span",{style:{color:"#429988"}},"OGRFeatures"),r("span",{style:{color:"#DBD7CA"}}," "),r("span",{style:{color:"#E0A569"}},"name"),r("span",{style:{color:"#DBD7CA"}},"="),r("span",{style:{color:"#C98A7D"}},'"country-data"'),r("span",{style:{color:"#858585"}},">")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"  "),r("span",{style:{color:"#858585"}},"<"),r("span",{style:{color:"#429988"}},"url"),r("span",{style:{color:"#858585"}},">"),r("span",{style:{color:"#DBD7CA"}},"/module-scene-osgearth/world.shp"),r("span",{style:{color:"#858585"}},"</"),r("span",{style:{color:"#429988"}},"url"),r("span",{style:{color:"#858585"}},">")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"  "),r("span",{style:{color:"#858585"}},"<"),r("span",{style:{color:"#429988"}},"filters"),r("span",{style:{color:"#858585"}},">")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"    "),r("span",{style:{color:"#858585"}},"<"),r("span",{style:{color:"#429988"}},"buffer"),r("span",{style:{color:"#DBD7CA"}}," "),r("span",{style:{color:"#E0A569"}},"distance"),r("span",{style:{color:"#DBD7CA"}},"="),r("span",{style:{color:"#C98A7D"}},'"-0.08"'),r("span",{style:{color:"#DBD7CA"}}," "),r("span",{style:{color:"#858585"}},"/>")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"  "),r("span",{style:{color:"#858585"}},"</"),r("span",{style:{color:"#429988"}},"filters"),r("span",{style:{color:"#858585"}},">")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#858585"}},"</"),r("span",{style:{color:"#429988"}},"OGRFeatures"),r("span",{style:{color:"#858585"}},">")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#8E8F8B"}},"<"),r("span",{style:{color:"#2F8A89"}},"OGRFeatures"),r("span",{style:{color:"#393A34"}}," "),r("span",{style:{color:"#B58451"}},"name"),r("span",{style:{color:"#393A34"}},"="),r("span",{style:{color:"#B56959"}},'"country-data"'),r("span",{style:{color:"#8E8F8B"}},">")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"  "),r("span",{style:{color:"#8E8F8B"}},"<"),r("span",{style:{color:"#2F8A89"}},"url"),r("span",{style:{color:"#8E8F8B"}},">"),r("span",{style:{color:"#393A34"}},"/module-scene-osgearth/world.shp"),r("span",{style:{color:"#8E8F8B"}},"</"),r("span",{style:{color:"#2F8A89"}},"url"),r("span",{style:{color:"#8E8F8B"}},">")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"  "),r("span",{style:{color:"#8E8F8B"}},"<"),r("span",{style:{color:"#2F8A89"}},"filters"),r("span",{style:{color:"#8E8F8B"}},">")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"    "),r("span",{style:{color:"#8E8F8B"}},"<"),r("span",{style:{color:"#2F8A89"}},"buffer"),r("span",{style:{color:"#393A34"}}," "),r("span",{style:{color:"#B58451"}},"distance"),r("span",{style:{color:"#393A34"}},"="),r("span",{style:{color:"#B56959"}},'"-0.08"'),r("span",{style:{color:"#393A34"}}," "),r("span",{style:{color:"#8E8F8B"}},"/>")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"  "),r("span",{style:{color:"#8E8F8B"}},"</"),r("span",{style:{color:"#2F8A89"}},"filters"),r("span",{style:{color:"#8E8F8B"}},">")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8E8F8B"}},"</"),r("span",{style:{color:"#2F8A89"}},"OGRFeatures"),r("span",{style:{color:"#8E8F8B"}},">")])])])],-1),bk={__name:"24",setup(e){const t={};return W(q),(n,s)=>{const o=si;return x(),U(he,fe(ue(t)),{default:B(()=>[mk,F(o,Ln({},{ranges:[""]}),{default:B(()=>[gk]),_:1},16)]),_:1},16)}}},_k=r("h1",null,"osgEarth WebAssembly Demo",-1),yk=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#858585"}},"<"),r("span",{style:{color:"#429988"}},"styles"),r("span",{style:{color:"#858585"}},">")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"  "),r("span",{style:{color:"#858585"}},"<"),r("span",{style:{color:"#429988"}},"style"),r("span",{style:{color:"#DBD7CA"}}," "),r("span",{style:{color:"#E0A569"}},"type"),r("span",{style:{color:"#DBD7CA"}},"="),r("span",{style:{color:"#C98A7D"}},'"text/css"'),r("span",{style:{color:"#858585"}},">")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"    "),r("span",{style:{color:"#C98A7D"}},"<![CDATA[")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"      base {")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"        altitude-clamping: terrain-drape;")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"        text-provider:  annotation;")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"        text-content:   [code];")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"        text-priority:  [pop];")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"        text-align:     center_center;")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"        text-size:      15;")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"        text-declutter: true;")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"      }")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"      p1: base {")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"        fill: #016c59;")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"      }")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"      p2: base {")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"        fill: #1c9099;")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"      }")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"      p3: base {")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"        fill: #67a9cf;")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"      }")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"      ...")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#8E8F8B"}},"<"),r("span",{style:{color:"#2F8A89"}},"styles"),r("span",{style:{color:"#8E8F8B"}},">")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"  "),r("span",{style:{color:"#8E8F8B"}},"<"),r("span",{style:{color:"#2F8A89"}},"style"),r("span",{style:{color:"#393A34"}}," "),r("span",{style:{color:"#B58451"}},"type"),r("span",{style:{color:"#393A34"}},"="),r("span",{style:{color:"#B56959"}},'"text/css"'),r("span",{style:{color:"#8E8F8B"}},">")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"    "),r("span",{style:{color:"#B56959"}},"<![CDATA[")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"      base {")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"        altitude-clamping: terrain-drape;")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"        text-provider:  annotation;")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"        text-content:   [code];")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"        text-priority:  [pop];")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"        text-align:     center_center;")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"        text-size:      15;")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"        text-declutter: true;")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"      }")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"      p1: base {")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"        fill: #016c59;")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"      }")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"      p2: base {")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"        fill: #1c9099;")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"      }")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"      p3: base {")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"        fill: #67a9cf;")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"      }")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"      ...")])])])],-1),vk={__name:"25",setup(e){const t={};return W(q),(n,s)=>{const o=si;return x(),U(he,fe(ue(t)),{default:B(()=>[_k,F(o,Ln({},{ranges:[""]}),{default:B(()=>[yk]),_:1},16)]),_:1},16)}}},wk=r("h1",null,"osgEarth WebAssembly Demo",-1),xk=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"  ...")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"  "),r("span",{style:{color:"#858585"}},"<"),r("span",{style:{color:"#429988"}},"selector"),r("span",{style:{color:"#DBD7CA"}}," "),r("span",{style:{color:"#E0A569"}},"class_expr"),r("span",{style:{color:"#DBD7CA"}},"="),r("span",{style:{color:"#C98A7D"}},'"getStyleClass()"'),r("span",{style:{color:"#DBD7CA"}}," "),r("span",{style:{color:"#858585"}},"/>")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"  "),r("span",{style:{color:"#858585"}},"<"),r("span",{style:{color:"#429988"}},"script"),r("span",{style:{color:"#DBD7CA"}}," "),r("span",{style:{color:"#E0A569"}},"language"),r("span",{style:{color:"#DBD7CA"}},"="),r("span",{style:{color:"#C98A7D"}},'"javascript"'),r("span",{style:{color:"#858585"}},">")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"    "),r("span",{style:{color:"#C98A7D"}},"<![CDATA[")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"      function getStyleClass() {")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"        const pop = parseInt(feature.properties.pop);")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},'        if (pop >= 50_000_000) return "p1";')]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},'        else if (pop >= 20_000_000) return "p2";')]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},'        else if (pop >= 10_000_000) return "p3";')]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},'        else if (pop >= 5_000_000) return "p3";')]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},'        else return "p5";')]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"      }")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"    ]]>")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"  "),r("span",{style:{color:"#858585"}},"</"),r("span",{style:{color:"#429988"}},"script"),r("span",{style:{color:"#858585"}},">")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#858585"}},"</"),r("span",{style:{color:"#429988"}},"styles"),r("span",{style:{color:"#858585"}},">")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"  ...")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"  "),r("span",{style:{color:"#8E8F8B"}},"<"),r("span",{style:{color:"#2F8A89"}},"selector"),r("span",{style:{color:"#393A34"}}," "),r("span",{style:{color:"#B58451"}},"class_expr"),r("span",{style:{color:"#393A34"}},"="),r("span",{style:{color:"#B56959"}},'"getStyleClass()"'),r("span",{style:{color:"#393A34"}}," "),r("span",{style:{color:"#8E8F8B"}},"/>")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"  "),r("span",{style:{color:"#8E8F8B"}},"<"),r("span",{style:{color:"#2F8A89"}},"script"),r("span",{style:{color:"#393A34"}}," "),r("span",{style:{color:"#B58451"}},"language"),r("span",{style:{color:"#393A34"}},"="),r("span",{style:{color:"#B56959"}},'"javascript"'),r("span",{style:{color:"#8E8F8B"}},">")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"    "),r("span",{style:{color:"#B56959"}},"<![CDATA[")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"      function getStyleClass() {")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"        const pop = parseInt(feature.properties.pop);")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},'        if (pop >= 50_000_000) return "p1";')]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},'        else if (pop >= 20_000_000) return "p2";')]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},'        else if (pop >= 10_000_000) return "p3";')]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},'        else if (pop >= 5_000_000) return "p3";')]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},'        else return "p5";')]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"      }")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"    ]]>")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"  "),r("span",{style:{color:"#8E8F8B"}},"</"),r("span",{style:{color:"#2F8A89"}},"script"),r("span",{style:{color:"#8E8F8B"}},">")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8E8F8B"}},"</"),r("span",{style:{color:"#2F8A89"}},"styles"),r("span",{style:{color:"#8E8F8B"}},">")])])])],-1),kk={__name:"26",setup(e){const t={};return W(q),(n,s)=>{const o=si;return x(),U(he,fe(ue(t)),{default:B(()=>[wk,F(o,Ln({},{ranges:[""]}),{default:B(()=>[xk]),_:1},16)]),_:1},16)}}},Sk="/foss4g-2022-webassembly4g/dependencies.drawio.svg",Ak=r("h1",null,"osgEarth WebAssembly Libraries",-1),Ek=r("br",null,null,-1),$k=r("br",null,null,-1),Ok=r("img",{src:Sk},null,-1),Ck=r("div",{class:"absolute top-30 left-160"},[r("ul",null,[r("li",null,[r("p",null,[r("code",null,"osgEarth.wasm")]),r("ul",null,[r("li",null,[b("One big statically linked module "),r("ul",null,[r("li",null,[r("code",null,"26M"),b(" .wasm module")]),r("li",null,[r("code",null,"325K"),b(" .js glue code")])])])])])]),r("br"),r("ul",null,[r("li",null,"~ 30 patches needed for the libraries")]),r("br"),r("ul",null,[r("li",null,[r("p",null,"More libraries to come"),r("ul",null,[r("li",null,"Vector Tiles"),r("li",null,"3D Tiles"),r("li",null,"\u2026")])])])],-1),Pk={__name:"27",setup(e){const t={};return W(q),(n,s)=>(x(),U(he,fe(ue(t)),{default:B(()=>[Ak,Ek,$k,Ok,Ck]),_:1},16))}};let Mk=e=>crypto.getRandomValues(new Uint8Array(e)),Tk=(e,t,n)=>{let s=(2<<Math.log(e.length-1)/Math.LN2)-1,o=-~(1.6*s*t/e.length);return(l=t)=>{let i="";for(;;){let a=n(o),c=o;for(;c--;)if(i+=e[a[c]&s]||"",i.length===l)return i}}},Fk=(e,t=21)=>Tk(e,t,Mk);const Ik=["width","height"],Lk=["id"],Dk=["fill"],Rk=["x1","y1","x2","y2","stroke","stroke-width","marker-end"],Nk=ke({__name:"Arrow",props:{x1:null,y1:null,x2:null,y2:null,width:null,color:null},setup(e){W(q);const n=Fk("abcedfghijklmn",10)();return(s,o)=>(x(),V("svg",{class:"absolute left-0 top-0 pointer-events-none",width:Math.max(+e.x1,+e.x2)+50,height:Math.max(+e.y1,+e.y2)+50},[r("defs",null,[r("marker",{id:w(n),markerUnits:"strokeWidth",markerWidth:10,markerHeight:7,refX:"9",refY:"3.5",orient:"auto"},[r("polygon",{points:"0 0, 10 3.5, 0 7",fill:e.color||"currentColor"},null,8,Dk)],8,Lk)]),r("line",{x1:+e.x1,y1:+e.y1,x2:+e.x2,y2:+e.y2,stroke:e.color||"currentColor","stroke-width":e.width||2,"marker-end":`url(#${w(n)})`},null,8,Rk)],8,Ik))}}),Wk=r("h1",null,"How to get started",-1),jk=r("table",{style:{"font-size":"10pt"}},[r("thead",null,[r("tr",null,[r("th",null,"Language"),r("th",null,"Browser"),r("th",null,"Other"),r("th",null,"WASI")])]),r("tbody",null,[r("tr",null,[r("td",null,[r("b",null,"Rust")]),r("td",null,"\u2705"),r("td",null,"\u2705"),r("td",null,"\u2705")]),r("tr",null,[r("td",null,[r("b",null,"C")]),r("td",null,"\u2705"),r("td",null,"\u2705"),r("td",null,"\u2705")]),r("tr",null,[r("td",null,[r("b",null,"C++")]),r("td",null,"\u2705"),r("td",null,"\u2705"),r("td",null,"\u2705")]),r("tr",null,[r("td",null,[r("b",null,"C# and .NET")]),r("td",null,"\u2705"),r("td",null,"\u2705"),r("td",null,"\u2705")]),r("tr",null,[r("td",null,[r("b",null,"Python")]),r("td",null,"\u2705"),r("td",null,"\u2705"),r("td",null,"\u2705")]),r("tr",null,[r("td",null,[r("b",null,"Java")]),r("td",null,"\u2705"),r("td",null,"\u2705"),r("td",null,"\u274C")]),r("tr",null,[r("td",null,[r("b",null,"Ruby")]),r("td",null,"\u2705"),r("td",null,"\u2705"),r("td",null,"\u2705")]),r("tr",null,[r("td",null,[r("b",null,"Go")]),r("td",null,"\u2705"),r("td",null,"\u2705"),r("td",null,"\u2705")])])],-1),Bk={__name:"28",setup(e){const t={};return W(q),(n,s)=>{const o=Nk,l=lt;return x(),U(he,fe(ue(t)),{default:B(()=>[Wk,jk,F(l,null,{default:B(()=>[F(o,{x1:"350",y1:"208",x2:"200",y2:"208",color:"#654FF0",width:"3",arrowSize:"1"}),F(o,{x1:"350",y1:"255",x2:"200",y2:"255",color:"#654FF0",width:"3",arrowSize:"1"})]),_:1})]),_:1},16)}}},Hk="/foss4g-2022-webassembly4g/logo_emscripten.svg",Vk=r("h1",null,"How to get started: C/C++ with Emscripten",-1),zk=r("ul",null,[r("li",null,[r("p",null,[r("strong",null,"Intro")]),r("ul",null,[r("li",null,"Emscripten is a compiler toolchain using LLVM"),r("li",null,"Compile C and C++ code into WebAssembly, and run it on the Web, Node.js, or other wasm runtimes"),r("li",null,"MIT license, project started Alon Zakai (~2012)")])]),r("li",null,[r("p",null,[r("strong",null,"Installation")]),r("ul",null,[r("li",null,[b("The Emscripten SDK is used to install the entire toolchain "),r("ul",null,[r("li",null,[b("The Emscripten SDK ("),r("code",null,"emsdk"),b(") can be used on Linux, Windows or MacOS")])])])])])],-1),Gk=r("br",null,null,-1),Uk=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#dbd7ca"}},"git clone https://github.com/emscripten-core/emsdk.git")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#dbd7ca"}},"cd emsdk")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#dbd7ca"}},"./emsdk install latest")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#dbd7ca"}},"./emsdk activate latest")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#dbd7ca"}},"emcc --version")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#393a34"}},"git clone https://github.com/emscripten-core/emsdk.git")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393a34"}},"cd emsdk")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393a34"}},"./emsdk install latest")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393a34"}},"./emsdk activate latest")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393a34"}},"emcc --version")])])])],-1),qk=r("img",{src:Hk,class:"absolute bottom-5 right-5",style:{width:"20em"}},null,-1),Kk={__name:"29",setup(e){const t={};return W(q),(n,s)=>(x(),U(he,fe(ue(t)),{default:B(()=>[Vk,zk,Gk,Uk,qk]),_:1},16))}},Yk="/foss4g-2022-webassembly4g/logo_docker.svg",Zk=r("h1",null,"How to get started: C/C++ with Emscripten",-1),Qk=r("ul",null,[r("li",null,[r("strong",null,"Docker"),r("ul",null,[r("li",null,"The emscripten compiler toolchain can also be used as a Docker container"),r("li",null,[b("Docker image "),r("code",null,"emscripten/emsdk"),b(" is a self-contained version of "),r("code",null,"emsdk"),r("ul",null,[r("li",null,"Usage without any other installation on the host system:")])])])])],-1),Jk=r("br",null,null,-1),Xk=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#dbd7ca"}},"docker run --rm -v $(pwd):/src -u $(id -u):$(id -g) emscripten/emsdk \\")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#dbd7ca"}},"emcc helloworld.cpp -o helloworld.js")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#393a34"}},"docker run --rm -v $(pwd):/src -u $(id -u):$(id -g) emscripten/emsdk \\")]),b(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393a34"}},"emcc helloworld.cpp -o helloworld.js")])])])],-1),e4=r("img",{src:Yk,class:"absolute bottom-5 right-5",style:{width:"15em"}},null,-1),t4=r("br",null,null,-1),n4=r("br",null,null,-1),s4=r("ul",null,[r("li",null,[b("Note: "),r("ul",null,[r("li",null,[b("Current directory is mounted to "),r("code",null,"/src")]),r("li",null,[b("Container has to run under the same user/group "),r("ul",null,[r("li",null,"File ownership mapping between the host and the container")])])])])],-1),o4={__name:"30",setup(e){const t={};return W(q),(n,s)=>{const o=lt;return x(),U(he,fe(ue(t)),{default:B(()=>[Zk,Qk,Jk,Xk,e4,t4,n4,F(o,null,{default:B(()=>[s4]),_:1})]),_:1},16)}}},r4=r("h1",null,"Emscripten: What it does?",-1),l4=r("ul",null,[r("li",null,[b("The main tool is the "),r("strong",null,"Emscripten Compiler Frontend"),b(" ("),r("code",null,"emcc"),b(") "),r("ul",null,[r("li",null,[b("Drop-in replacement for a standard compiler like "),r("strong",null,"gcc"),b(" or "),r("strong",null,"clang")]),r("li",null,[b("Supports the common flags from "),r("strong",null,"gcc"),b(" and "),r("strong",null,"clang"),r("ul",null,[r("li",null,[b("Introduces also many Emscripten specific compiler/linker flags "),r("sup",{class:"footnote-ref"},[r("a",{href:"#fn1",id:"fnref1"},"[1]")])])])])])])],-1),i4=r("br",null,null,-1),a4=r("ul",null,[r("li",null,[r("strong",null,"Emcc"),b(" uses Clang and LLVM to compile to WebAssembly ("),r("code",null,".wasm"),b(") "),r("ul",null,[r("li",null,[r("strong",null,"Emcc"),b(" also emits JavaScript that provides API support to the compiled code ("),r("code",null,".js"),b(")")])])])],-1),c4=r("br",null,null,-1),u4=r("ul",null,[r("li",null,[b("Wrapper scripts around "),r("code",null,"configure"),b(", "),r("code",null,"make"),b(", and "),r("code",null,"cmake"),r("ul",null,[r("li",null,[r("code",null,"./configure"),b(" -> "),r("code",null,"emconfigure ./configure")]),r("li",null,[r("code",null,"make"),b(" -> "),r("code",null,"emmake make")]),r("li",null,[r("code",null,"cmake ."),b(" -> "),r("code",null,"emcmake cmake .")])])])],-1),f4=r("hr",{class:"footnotes-sep"},null,-1),d4=r("section",{class:"footnotes"},[r("ol",{class:"footnotes-list"},[r("li",{id:"fn1",class:"footnote-item"},[r("p",null,[r("a",{href:"https://emsettings.surma.technology/",target:"_blank",rel:"noopener"},"emsettings.surma.technology"),b(),r("a",{href:"#fnref1",class:"footnote-backref"},"\u21A9\uFE0E")])])])],-1),p4={__name:"31",setup(e){const t={};return W(q),(n,s)=>(x(),U(he,fe(ue(t)),{default:B(()=>[r4,l4,i4,a4,c4,u4,f4,d4]),_:1},16))}},h4=r("h1",null,"Emscripten: What it does?",-1),m4=r("ul",null,[r("li",null,[r("strong",null,'"Emscripten Magic"'),r("ul",null,[r("li",null,"Emscripten can be used to compile almost any portable C/C++ code to JavaScript"),r("li",null,[b("System libraries provided by Emscripten "),r("ul",null,[r("li",null,"SDL, Multimedia and Graphics, Networking, File System, Audio, \u2026")])]),r("li",null,"Binding between JS and WebAssembly")])])],-1),g4=r("br",null,null,-1),b4=r("ul",null,[r("li",null,[r("strong",null,"Emscripten Ports"),r("ul",null,[r("li",null,"SDL2"),r("li",null,"boost, zlib, libpng, \u2026"),r("li",null,[r("a",{href:"https://github.com/emscripten-ports",target:"_blank",rel:"noopener"},"github.com/emscripten-ports")])])])],-1),_4={__name:"32",setup(e){const t={};return W(q),(n,s)=>{const o=lt;return x(),U(he,fe(ue(t)),{default:B(()=>[h4,m4,g4,F(o,null,{default:B(()=>[b4]),_:1})]),_:1},16)}}},y4=r("h1",null,"Tips and tricks",-1),v4=r("br",null,null,-1),w4=r("br",null,null,-1),x4=r("h2",null,"OffscreenCanvas / Multithreading",-1),k4=r("br",null,null,-1),S4=r("h2",null,"Pipeline for native and wasm builds",-1),A4=r("br",null,null,-1),E4=r("h2",null,"Turn Around Time",-1),$4=r("br",null,null,-1),O4=r("h2",null,"Debugging",-1),C4={__name:"33",setup(e){const t={};return W(q),(n,s)=>{const o=lt;return x(),U(he,fe(ue(t)),{default:B(()=>[y4,v4,w4,F(o,null,{default:B(()=>[x4]),_:1}),k4,F(o,null,{default:B(()=>[S4]),_:1}),A4,F(o,null,{default:B(()=>[E4]),_:1}),$4,F(o,null,{default:B(()=>[O4]),_:1})]),_:1},16)}}},P4={class:"slidev-layout center h-full grid place-content-center"},M4={class:"my-auto"},Of={__name:"center",setup(e){return W(q),(t,n)=>(x(),V("div",P4,[r("div",M4,[Ht(t.$slots,"default")])]))}},T4=r("h1",null,"\u{1F52E}\u2728\u{1F914}\u2728\u{1F30D}\u2728\u{1F929}",-1),F4=r("br",null,null,-1),I4=r("br",null,null,-1),L4=r("h2",null,"Opportunities ahead",-1),D4=r("br",null,null,-1),R4=r("br",null,null,-1),N4=r("h3",null,"3 possible future scenarios I\u2019d like to see",-1),W4={__name:"34",setup(e){const t={layout:"center",class:"text-center"};return W(q),(n,s)=>{const o=lt;return x(),U(Of,fe(ue(t)),{default:B(()=>[T4,F4,I4,L4,D4,R4,F(o,null,{default:B(()=>[N4]),_:1})]),_:1},16)}}},j4=r("h1",null,'\u{1F52E} Portable PyPI/npm packges with "native" bindings?',-1),B4=r("ul",null,[r("li",null,[r("p",null,"The same problem exists for Python/JS package registries")]),r("li",null,[r("p",null,'If a package depends on code with "native" bindings'),r("ul",null,[r("li",null,"The native code is expected to be available as shared library (runtime error)"),r("li",null,[b("Compilation is part of the installation procedure ("),r("code",null,"SIP"),b(", "),r("code",null,"node-gyp"),b(", \u2026)")]),r("li",null,[b("A binary is provided for every possible target architecture "),r("br"),b(" ("),r("code",null,"cp38-cp38-win_amd64.whl"),b(", "),r("code",null,"cp38-cp38-win32.whl"),b(", "),r("code",null,"cp36-cp36m-macosx_intel.whl"),b(", \u2026)")])])])],-1),H4=r("br",null,null,-1),V4=r("ul",null,[r("li",null,[r("p",null,"WebAssembly could be a good fit to solve this problem"),r("ul",null,[r("li",null,[b("A universal "),r("code",null,".wasm"),b(" module is shipped inside the package")]),r("li",null,"Binds to Python/JS package and is executed with a WebAssembly runtime (e.g. wasmtime)")])])],-1),z4={__name:"35",setup(e){const t={};return W(q),(n,s)=>{const o=lt;return x(),U(he,fe(ue(t)),{default:B(()=>[j4,B4,H4,F(o,null,{default:B(()=>[V4]),_:1})]),_:1},16)}}},G4=r("h1",null,"\u{1F52E} QGIS in the browser?",-1),U4=r("ul",null,[r("li",null,[b("Why I think it is possible? "),r("ul",null,[r("li",null,[r("a",{href:"https://doc.qt.io/qt-6/wasm.html",target:"_blank",rel:"noopener"},"Qt"),b(" is doing fine (as seen earlier)")]),r("li",null,[r("a",{href:"",target:"_blank",rel:"noopener"},"Python"),b(" is doing fine (as seen earlier)")]),r("li",null,"Dependencies almost identical to the stack showed earlier")])])],-1),q4=r("br",null,null,-1),K4=r("ul",null,[r("li",null,[b("Ok fine, but why? "),r("ul",null,[r("li",null,"Online Playground, People who cannot install/use QGIS, \u2026"),r("li",null,[r("em",null,[r("strong",null,"Disclaimer")]),b(": You probably still want a desktop GIS compiled for your local system")])])])],-1),Y4=r("br",null,null,-1),Z4=r("ul",null,[r("li",null,[b("What has been done so far? "),r("ul",null,[r("li",null,[b("QGIS Renderer: "),r("a",{href:"https://wonder-sk.github.io/wasm/qgis.html",target:"_blank",rel:"noopener"},"https://wonder-sk.github.io/wasm/qgis.html"),r("ul",null,[r("li",null,[b("By "),r("a",{href:"https://github.com/wonder-sk",target:"_blank",rel:"noopener"},"Martin Dobias"),b(", announced in the "),r("a",{href:"https://lists.osgeo.org/pipermail/qgis-developer/2022-March/064589.html",target:"_blank",rel:"noopener"},"QGIS mailing list")])])])])])],-1),Q4={__name:"36",setup(e){const t={};return W(q),(n,s)=>{const o=lt;return x(),U(he,fe(ue(t)),{default:B(()=>[G4,U4,q4,F(o,null,{default:B(()=>[K4]),_:1}),Y4,F(o,null,{default:B(()=>[Z4]),_:1})]),_:1},16)}}},J4=r("h1",null,"\u{1F52E} Composable toolbox of geospatial .wasm modules",-1),X4=r("ul",null,[r("li",null,[b("Disclaimer: Advancement in the WebAssembly specs/implementation needed "),r("ul",null,[r("li",null,'Waiting for the "Component Model" proposal')])])],-1),eS=r("br",null,null,-1),tS=r("ul",null,[r("li",null,[b("Think about a model builder in a Desktop GIS "),r("ul",null,[r("li",null,"Source language doesn\u2019t matter"),r("li",null,'Single universal .wasm "binary"')])])],-1),nS=r("br",null,null,-1),sS=r("ul",null,[r("li",null,[b("Reuse the same modules "),r("ul",null,[r("li",null,'Client/Web, FaaS, DB, "Edge", plugin system, \u2026')])])],-1),oS={__name:"37",setup(e){const t={};return W(q),(n,s)=>{const o=lt;return x(),U(he,fe(ue(t)),{default:B(()=>[J4,X4,eS,F(o,null,{default:B(()=>[tS]),_:1}),nS,F(o,null,{default:B(()=>[sS]),_:1})]),_:1},16)}}},rS="/foss4g-2022-webassembly4g/slides_qr.svg",lS=r("h1",null,"Contact",-1),iS=r("b",null,"E-Mail",-1),aS=b(),cS=r("ul",null,[r("li",null,[r("a",{href:"mailto://mschmuki@ethz.ch",target:"_blank"},"mschmuki@ethz.ch")]),r("li",null,[r("a",{href:"mailto://michael@schmuki.io",target:"_blank"},"michael@schmuki.io")])],-1),uS=r("br",null,null,-1),fS=r("b",null,"Github",-1),dS=b(),pS=r("ul",null,[r("li",null,[r("a",{href:"https://github.com/boardend",target:"_blank"},"github.com/boardend")])],-1),hS=r("br",null,null,-1),mS=r("br",null,null,-1),gS=r("h1",null,"Slides",-1),bS=r("ul",null,[r("li",null,[r("p",null,[r("strong",null,[b("Page: "),r("a",{href:"https://boardend.github.io/foss4g-2022-webassembly4g/",target:"_blank",rel:"noopener"},"boardend.github.io/foss4g-2022-webassembly4g")])]),r("ul",null,[r("li",null,[b("Source: "),r("a",{href:"https://github.com/boardend/foss4g-2022-webassembly4g",target:"_blank",rel:"noopener"},"github.com/boardend/foss4g-2022-webassembly4g")])])])],-1),_S=r("img",{src:rS,class:"absolute bottom-15 right-20",style:{height:"10em"}},null,-1),yS={__name:"38",setup(e){const t={};return W(q),(n,s)=>{const o=wf,l=vf;return x(),U(he,fe(ue(t)),{default:B(()=>[lS,r("ul",null,[r("li",null,[iS,aS,F(o),cS])]),uS,r("ul",null,[r("li",null,[fS,dS,F(l),pS])]),hS,mS,gS,bS,_S]),_:1},16)}}},vS=r("h2",null,"~ La fine ~",-1),wS=r("br",null,null,-1),xS=r("br",null,null,-1),kS=r("br",null,null,-1),SS=r("h1",null,[b("Sar\xF2 lieto di rispondere alle vostre domande "),r("sup",{class:"footnote-ref"},[r("i",null,"[IT]")])],-1),AS=r("br",null,null,-1),ES=r("h3",null,[b("I will be happy to answer your questions "),r("sup",{class:"footnote-ref"},[r("i",null,"[EN]")])],-1),$S=r("br",null,null,-1),OS=r("img",{style:{height:"8em",display:"inline-block","background-color":"white",padding:"1em","margin-top":"2em"},src:kf},null,-1),CS={__name:"39",setup(e){const t={layout:"center",class:"text-center"};return W(q),(n,s)=>(x(),U(Of,fe(ue(t)),{default:B(()=>[vS,wS,xS,kS,SS,AS,ES,$S,OS]),_:1},16))}},PS=[{path:"1",name:"page-1",component:Ov,meta:{theme:"seriph",background:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&dl=nasa-Q1p7bh3SHj8-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb",title:"WebAssembly4G - Where we are, and where we're heading",info:`WebAssembly4G - Where we are, and where we're heading

Talk in general track @ FOSS4G 2022 - Firenze (https://2022.foss4g.org/), 2022-08-26, 14:45\u201315:15 (Europe/Rome), General Online

see https://github.com/boardend/foss4g-2022-webassembly4g
`,aspectRatio:"16/9",css:"unocss",colorSchema:"light",class:"text-center",themeConfig:{primary:"#654FF0"},highlighter:"shiki",lineNumbers:!1,drawings:{persist:!1},slide:{raw:`---
theme: seriph
background: https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&dl=nasa-Q1p7bh3SHj8-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb
title: WebAssembly4G - Where we are, and where we're heading
info: |
  WebAssembly4G - Where we are, and where we're heading

  Talk in general track @ FOSS4G 2022 - Firenze (https://2022.foss4g.org/), 2022-08-26, 14:45\u201315:15 (Europe/Rome), General Online

  see https://github.com/boardend/foss4g-2022-webassembly4g
aspectRatio: '16/9'
css: unocss
colorSchema: 'light'
class: text-center
themeConfig:
  primary: '#654FF0'
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
---

# WebAssembly4G

## Where we are, and where we're heading

<div class="pt-12">
  <span class="px-2 py-1">
    <h3>Michael Schmuki @ <a href="https://2022.foss4g.org/" target="_blank">FOSS4G 2022</a></h3>
    <br /><br />
    <img style="height:5em;display:inline-block;margin-right:2em" src="/webassembly_logo.svg" />
    <img style="height:5em;display:inline-block;background-color:white;padding: 1em;" src="/foss4g2022_logo.png" />
    <br /><br />
    Slides @ <a href="https://boardend.github.io/foss4g-2022-webassembly4g/" target="_blank">
      boardend.github.io/foss4g-2022-webassembly4g
    </a>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="window.location='mailto://'+'michael'+'@'+('schmuki.io')" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:email />
  </button>
  <a href="https://github.com/boardend/foss4g-2022-webassembly4g" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>


<div class="absolute bottom-2 right-6" style="font-size: 6pt;">
  Background Image by NASA, <a href="https://unsplash.com/photos/Q1p7bh3SHj8" target="_blank">https://unsplash.com/photos/Q1p7bh3SHj8</a>,
</div>

<!--

Demos:

https://wasm-test.libreoffice.org/
https://www.crunchydata.com/developers/playground/basics-of-postgis

https://starboard.gg/#python

http://localhost:4000/app-multi-release/

https://wonder-sk.github.io/wasm/qgis.html
-->
`,title:"WebAssembly4G - Where we are, and where we're heading",level:1,content:`# WebAssembly4G

## Where we are, and where we're heading

<div class="pt-12">
  <span class="px-2 py-1">
    <h3>Michael Schmuki @ <a href="https://2022.foss4g.org/" target="_blank">FOSS4G 2022</a></h3>
    <br /><br />
    <img style="height:5em;display:inline-block;margin-right:2em" src="/webassembly_logo.svg" />
    <img style="height:5em;display:inline-block;background-color:white;padding: 1em;" src="/foss4g2022_logo.png" />
    <br /><br />
    Slides @ <a href="https://boardend.github.io/foss4g-2022-webassembly4g/" target="_blank">
      boardend.github.io/foss4g-2022-webassembly4g
    </a>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="window.location='mailto://'+'michael'+'@'+('schmuki.io')" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:email />
  </button>
  <a href="https://github.com/boardend/foss4g-2022-webassembly4g" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>


<div class="absolute bottom-2 right-6" style="font-size: 6pt;">
  Background Image by NASA, <a href="https://unsplash.com/photos/Q1p7bh3SHj8" target="_blank">https://unsplash.com/photos/Q1p7bh3SHj8</a>,
</div>`,frontmatter:{theme:"seriph",background:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&dl=nasa-Q1p7bh3SHj8-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb",title:"WebAssembly4G - Where we are, and where we're heading",info:`WebAssembly4G - Where we are, and where we're heading

Talk in general track @ FOSS4G 2022 - Firenze (https://2022.foss4g.org/), 2022-08-26, 14:45\u201315:15 (Europe/Rome), General Online

see https://github.com/boardend/foss4g-2022-webassembly4g
`,aspectRatio:"16/9",css:"unocss",colorSchema:"light",class:"text-center",themeConfig:{primary:"#654FF0"},highlighter:"shiki",lineNumbers:!1,drawings:{persist:!1}},note:`Demos:

https://wasm-test.libreoffice.org/
https://www.crunchydata.com/developers/playground/basics-of-postgis

https://starboard.gg/#python

http://localhost:4000/app-multi-release/

https://wonder-sk.github.io/wasm/qgis.html`,index:0,start:0,end:68,notesHTML:`<p>Demos:</p>
<p>https://wasm-test.libreoffice.org/
https://www.crunchydata.com/developers/playground/basics-of-postgis</p>
<p>https://starboard.gg/#python</p>
<p>http://localhost:4000/app-multi-release/</p>
<p>https://wonder-sk.github.io/wasm/qgis.html</p>
`,filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:h1,meta:{slide:{raw:`
# Intro

<v-click>

### Remote FOSS4G 2022

</v-click>


<ul>
  <li v-click="2">\u2615 <b>-&gt;</b> <s>\u{1F1E8}\u{1F1ED} \u{1F685} \u26F0\uFE0F \u{1F1EE}\u{1F1F9}</s> <b>-&gt;</b><s>FOSS4G 2022 @ Firenze \u{1F30D}</s>
    <ul>
      <li v-click="3">\u2615 <b>-&gt;</b> \u{1F62F}\u{1F914} <b>-&gt;</b> \u{1F9EA} <b>-&gt;</b> \u2611\uFE0F \u{1F637} <b>-&gt;</b> FOSS4G 2022 @ Home <b>-&gt;</b> \u2615\u{1F5A5}\uFE0F\u{1F44C}<br /></li>
      <li v-click="4"><s>2022-08-25, 17:15\u201317:45 @ Room Limonaia</s> <b>-&gt;</b> 2022-08-<b>26</b>, 14:45\u201315:15 @ General online</li>
      <li v-click="5">Many thanks to the organizers of FOSS4G 2022 \u{1F64C}</li>
    </ul>
  </li>
</ul>


<br />

<v-click>

### About me

- Michael Schmuki
  - Institute of Cartography and Geoinformation | ETH Zurich
    - Atlas of Switzerland[^1], Teaching, Open Source Geospatial Laboratory
  - 15 years of coding, 5 years in geospatial
    - Geospatial community is exceptional \u{1F30D}\u{1F970}

</v-click>

<br />

[^1]: [atlasofswitzerland.ch](https://atlasofswitzerland.ch)

`,title:"Intro",level:1,content:`# Intro

<v-click>

### Remote FOSS4G 2022

</v-click>


<ul>
  <li v-click="2">\u2615 <b>-&gt;</b> <s>\u{1F1E8}\u{1F1ED} \u{1F685} \u26F0\uFE0F \u{1F1EE}\u{1F1F9}</s> <b>-&gt;</b><s>FOSS4G 2022 @ Firenze \u{1F30D}</s>
    <ul>
      <li v-click="3">\u2615 <b>-&gt;</b> \u{1F62F}\u{1F914} <b>-&gt;</b> \u{1F9EA} <b>-&gt;</b> \u2611\uFE0F \u{1F637} <b>-&gt;</b> FOSS4G 2022 @ Home <b>-&gt;</b> \u2615\u{1F5A5}\uFE0F\u{1F44C}<br /></li>
      <li v-click="4"><s>2022-08-25, 17:15\u201317:45 @ Room Limonaia</s> <b>-&gt;</b> 2022-08-<b>26</b>, 14:45\u201315:15 @ General online</li>
      <li v-click="5">Many thanks to the organizers of FOSS4G 2022 \u{1F64C}</li>
    </ul>
  </li>
</ul>


<br />

<v-click>

### About me

- Michael Schmuki
  - Institute of Cartography and Geoinformation | ETH Zurich
    - Atlas of Switzerland[^1], Teaching, Open Source Geospatial Laboratory
  - 15 years of coding, 5 years in geospatial
    - Geospatial community is exceptional \u{1F30D}\u{1F970}

</v-click>

<br />

[^1]: [atlasofswitzerland.ch](https://atlasofswitzerland.ch)`,frontmatter:{},index:1,start:69,end:109,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:b1,meta:{slide:{raw:`
# Why I'm excited

<v-click>

- Adoption across web projects

- Adoption outside of browsers

- Ability to reuse existing libraries

- Evolution of WebAssembly

- Porting osgEarth to the web

  - Demo

- How to get started with Emscripten

  - Tips and Tricks

- Opportunities ahead

</v-click>
`,title:"Why I'm excited",level:1,content:`# Why I'm excited

<v-click>

- Adoption across web projects

- Adoption outside of browsers

- Ability to reuse existing libraries

- Evolution of WebAssembly

- Porting osgEarth to the web

  - Demo

- How to get started with Emscripten

  - Tips and Tricks

- Opportunities ahead

</v-click>`,frontmatter:{},index:2,start:110,end:135,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:O1,meta:{slide:{raw:`
# .wasm, what?

<br />

<v-click>

- [Write once, run anywhere: safe and reusable analytic modules for WebAssembly, Javascript, or more!](https://talks.osgeo.org/foss4g-2022/talk/XV87XB/)
  - **Stuart Lynn @ FOSS4G 2022**

</v-click>

<br />

<v-click>

- [WebAssembly - a new technology and its potential for geospatial application](https://talks.2019.foss4g.org/bucharest/talk/PTUAEG/)
  - **Pirmin Kalberer @ FOSS4G 2019**
    - Stream @ [Youtube](https://www.youtube.com/watch?v=WodAYDDSq1g) / [media.ccc.de](https://media.ccc.de/v/bucharest-230-webassembly-a-new-technology-and-its-potential-for-geospatial-application)

</v-click>

<br />
<br />

<v-click>

- [Lin Clark](https://github.com/linclark)
  - **JS Conf**, **WebAssembly Summit**, **Full Stack Fest**, ...
    - https://code-cartoons.com/
    - [@linclark](https://twitter.com/linclark)

<img src="/lin_clark.png" class="absolute bottom-10 right-50" style="height:10em"/>

</v-click>
`,title:".wasm, what?",level:1,content:`# .wasm, what?

<br />

<v-click>

- [Write once, run anywhere: safe and reusable analytic modules for WebAssembly, Javascript, or more!](https://talks.osgeo.org/foss4g-2022/talk/XV87XB/)
  - **Stuart Lynn @ FOSS4G 2022**

</v-click>

<br />

<v-click>

- [WebAssembly - a new technology and its potential for geospatial application](https://talks.2019.foss4g.org/bucharest/talk/PTUAEG/)
  - **Pirmin Kalberer @ FOSS4G 2019**
    - Stream @ [Youtube](https://www.youtube.com/watch?v=WodAYDDSq1g) / [media.ccc.de](https://media.ccc.de/v/bucharest-230-webassembly-a-new-technology-and-its-potential-for-geospatial-application)

</v-click>

<br />
<br />

<v-click>

- [Lin Clark](https://github.com/linclark)
  - **JS Conf**, **WebAssembly Summit**, **Full Stack Fest**, ...
    - https://code-cartoons.com/
    - [@linclark](https://twitter.com/linclark)

<img src="/lin_clark.png" class="absolute bottom-10 right-50" style="height:10em"/>

</v-click>`,frontmatter:{},index:3,start:136,end:172,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:B1,meta:{slide:{raw:`

# .wasm, what?

<!--
- Langauges
  - https://blog.scottlogic.com/2022/06/20/state-of-wasm-2022.html
  - https://webassembly.org/getting-started/developers-guide/
- Runtimes
  - Browser
  - Standalone
  - Cloud

https://boardend.github.io/fossgis-2021-webassembly/#/wasm

-->

<v-click>
  <img class="absolute left-20 top-25" style="z-index:1;width:12vw;transform: rotate(-5deg);" src="/wasm_compilation.png" alt="WebAssembly compilation">
</v-click>

<v-click>
  <img class="absolute top-15 right-20" style="z-index:1;width:12vw;transform: rotate(5deg);" src="/wasm_design.png" alt="WebAssembly design">
</v-click>

<v-click>
  <img class="absolute bottom-35 left-20" style="z-index:1;width:12vw" src="/wasm_party.png" alt="WebAssembly browser party">
</v-click>

<v-click>
  <img class="absolute top-80 right-15" style="z-index:1;width:18vw;transform: rotate(0deg);" src="/wasm_security.png" alt="WebAssembly Security">
</v-click>

<v-click>
  <img class="absolute bottom-5 left-75" style="z-index:1;width:12vw" src="/wasm_runtime.png" alt="WebAssembly Runtime">
</v-click>

<div style="position:absolute;z-index:10;margin-left:-4em;margin-top:3em;width:100%;text-align:center">
  <img class="" style="z-index:10;display:inline-block;width:12vw;" src="/webassembly_logo.svg" alt="Logo WebAssembly">
</div>

`,title:".wasm, what?",level:1,content:`# .wasm, what?

<!--
- Langauges
  - https://blog.scottlogic.com/2022/06/20/state-of-wasm-2022.html
  - https://webassembly.org/getting-started/developers-guide/
- Runtimes
  - Browser
  - Standalone
  - Cloud

https://boardend.github.io/fossgis-2021-webassembly/#/wasm

-->

<v-click>
  <img class="absolute left-20 top-25" style="z-index:1;width:12vw;transform: rotate(-5deg);" src="/wasm_compilation.png" alt="WebAssembly compilation">
</v-click>

<v-click>
  <img class="absolute top-15 right-20" style="z-index:1;width:12vw;transform: rotate(5deg);" src="/wasm_design.png" alt="WebAssembly design">
</v-click>

<v-click>
  <img class="absolute bottom-35 left-20" style="z-index:1;width:12vw" src="/wasm_party.png" alt="WebAssembly browser party">
</v-click>

<v-click>
  <img class="absolute top-80 right-15" style="z-index:1;width:18vw;transform: rotate(0deg);" src="/wasm_security.png" alt="WebAssembly Security">
</v-click>

<v-click>
  <img class="absolute bottom-5 left-75" style="z-index:1;width:12vw" src="/wasm_runtime.png" alt="WebAssembly Runtime">
</v-click>

<div style="position:absolute;z-index:10;margin-left:-4em;margin-top:3em;width:100%;text-align:center">
  <img class="" style="z-index:10;display:inline-block;width:12vw;" src="/webassembly_logo.svg" alt="Logo WebAssembly">
</div>`,frontmatter:{},index:4,start:173,end:215,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:K1,meta:{slide:{raw:`
# Adoption across web projects

## "Small" WebAssembly modules

<br />

- \`.wasm\` modules with a couple of MB in size
  - Examples: Computational statistics, decoding, ...
  - Size- and load-time-efficient binary format
  - Cacheable / Offline
  - Asynchronous / Multithreading

<br />

- Often implicit for the library user
  - API usually written in TypeScript/JavaScript
  - Fallback JS implementation possible`,title:"Adoption across web projects",level:1,content:`# Adoption across web projects

## "Small" WebAssembly modules

<br />

- \`.wasm\` modules with a couple of MB in size
  - Examples: Computational statistics, decoding, ...
  - Size- and load-time-efficient binary format
  - Cacheable / Offline
  - Asynchronous / Multithreading

<br />

- Often implicit for the library user
  - API usually written in TypeScript/JavaScript
  - Fallback JS implementation possible`,frontmatter:{},index:5,start:216,end:234,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:e2,meta:{slide:{raw:`
## "Small" WebAssembly modules

<br />

- Slide **[Cloud-Native Geospatial in JavaScript](https://talks.osgeo.org/foss4g-2022/talk/MNLFUG/)**
  - FOSS4G 2022 Talk by Daniel J. Dufour & Matthias Mohr

<div class="m2 flex justify-center">
  <img src="/screenshot_cloud-native-geospatial_js.png" style="width:70%;" />
</div>
`,title:'"Small" WebAssembly modules',level:2,content:`## "Small" WebAssembly modules

<br />

- Slide **[Cloud-Native Geospatial in JavaScript](https://talks.osgeo.org/foss4g-2022/talk/MNLFUG/)**
  - FOSS4G 2022 Talk by Daniel J. Dufour & Matthias Mohr

<div class="m2 flex justify-center">
  <img src="/screenshot_cloud-native-geospatial_js.png" style="width:70%;" />
</div>`,frontmatter:{},index:6,start:235,end:247,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:o2,meta:{slide:{raw:`
## "Small" WebAssembly modules

<br />

- Example: [loaders.gl](https://loaders.gl/)

  - loaders.gl is a collection of open source loaders and writers for file formats focused on visualization of big data, including tabular, geospatial, and 3D formats
  - More and more WebAssembly based loaders
    - GeoPackageLoader
    - BasisLoader
    - DracoLoader

- Example: [CesiumJS](https://cesium.com/platform/cesiumjs/)

  - [Draco](https://google.github.io/draco/) Compressed Meshes with glTF and 3D Tiles
  - So you have probably already used WebAssembly modules without even noticing
`,title:'"Small" WebAssembly modules',level:2,content:`## "Small" WebAssembly modules

<br />

- Example: [loaders.gl](https://loaders.gl/)

  - loaders.gl is a collection of open source loaders and writers for file formats focused on visualization of big data, including tabular, geospatial, and 3D formats
  - More and more WebAssembly based loaders
    - GeoPackageLoader
    - BasisLoader
    - DracoLoader

- Example: [CesiumJS](https://cesium.com/platform/cesiumjs/)

  - [Draco](https://google.github.io/draco/) Compressed Meshes with glTF and 3D Tiles
  - So you have probably already used WebAssembly modules without even noticing`,frontmatter:{},index:7,start:248,end:266,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:a2,meta:{slide:{raw:`
# Adoption across web projects

## "Big" WebAssembly web applications

- Full applications running in the browser
  - Porting of large/old code bases
  - WebGL, Audio, Network, File system, ...

- Commercial success stories
  - [Figma](https://www.figma.com/de/blog/webassembly-cut-figmas-load-time-by-3x/)
  - [Adobe **Photoshop**](https://web.dev/ps-on-the-web/)
  - [Autodesk **AutoCAD**](https://web.autocad.com)

- WebAssembly as a runtime target for game engines (Unity, Godot, Unreal Engine 4)
  - Interesting use cases with [Cesium Native](https://github.com/CesiumGS/cesium-native) or [ArcGIS Maps SDK for Unity](https://developers.arcgis.com/unity/)
`,title:"Adoption across web projects",level:1,content:`# Adoption across web projects

## "Big" WebAssembly web applications

- Full applications running in the browser
  - Porting of large/old code bases
  - WebGL, Audio, Network, File system, ...

- Commercial success stories
  - [Figma](https://www.figma.com/de/blog/webassembly-cut-figmas-load-time-by-3x/)
  - [Adobe **Photoshop**](https://web.dev/ps-on-the-web/)
  - [Autodesk **AutoCAD**](https://web.autocad.com)

- WebAssembly as a runtime target for game engines (Unity, Godot, Unreal Engine 4)
  - Interesting use cases with [Cesium Native](https://github.com/CesiumGS/cesium-native) or [ArcGIS Maps SDK for Unity](https://developers.arcgis.com/unity/)`,frontmatter:{},index:8,start:267,end:284,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:m2,meta:{slide:{raw:`
## "Big" WebAssembly web applications: <br /> **Google Earth** [^1]

<br />

<div class="m2 flex justify-center">
  <video autoplay id="earthVideo" style="width: 70%;" muted="">
    <source type="video/mp4" src="https://polybox.ethz.ch/index.php/s/VxCRYlVswzuddkT/download">
    Your browser does not support the video tag.
  </video>
</div>

<v-click>
<div class="absolute top-40 left-50">


- [Google Earth](https://earth.google.com/web/)
  - WebGL 3D globe
  - Visualization of raster and vector datasets
- [Google Earth Studio](https://earth.google.com/web/)
  - Animation tool based on the Google Earth 3D-renderer
  - Rendering und Export of frames inside the browser
- [FFmpeg](https://ffmpeg.org/)
  - FOSS C library for video/audio recording and converting
  - [ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm)
    - Stitched together individual frames and exported as \`H264\`


</div>
</v-click>

[^1]: [How we're bringing Google Earth to the web @ web.dev](https://web.dev/earth-webassembly/)

`,title:'"Big" WebAssembly web applications: <br /> **Google Earth** [^1]',level:2,content:`## "Big" WebAssembly web applications: <br /> **Google Earth** [^1]

<br />

<div class="m2 flex justify-center">
  <video autoplay id="earthVideo" style="width: 70%;" muted="">
    <source type="video/mp4" src="https://polybox.ethz.ch/index.php/s/VxCRYlVswzuddkT/download">
    Your browser does not support the video tag.
  </video>
</div>

<v-click>
<div class="absolute top-40 left-50">


- [Google Earth](https://earth.google.com/web/)
  - WebGL 3D globe
  - Visualization of raster and vector datasets
- [Google Earth Studio](https://earth.google.com/web/)
  - Animation tool based on the Google Earth 3D-renderer
  - Rendering und Export of frames inside the browser
- [FFmpeg](https://ffmpeg.org/)
  - FOSS C library for video/audio recording and converting
  - [ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm)
    - Stitched together individual frames and exported as \`H264\`


</div>
</v-click>

[^1]: [How we're bringing Google Earth to the web @ web.dev](https://web.dev/earth-webassembly/)`,frontmatter:{},index:9,start:285,end:319,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:v2,meta:{slide:{raw:`
## "Big" WebAssembly web applications: <br /> **LibreOffice**

<br />

<div class="m2 flex justify-center">
  <img src="/screenshot_libreoffice.png" style="width:70%;" />
</div>

<!--

Will come back to this example / Qt at the end of the presentation

-->
`,title:'"Big" WebAssembly web applications: <br /> **LibreOffice**',level:2,content:`## "Big" WebAssembly web applications: <br /> **LibreOffice**

<br />

<div class="m2 flex justify-center">
  <img src="/screenshot_libreoffice.png" style="width:70%;" />
</div>`,frontmatter:{},note:"Will come back to this example / Qt at the end of the presentation",index:10,start:320,end:335,notesHTML:`<p>Will come back to this example / Qt at the end of the presentation</p>
`,filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:A2,meta:{slide:{raw:`
## "Big" WebAssembly web applications: <br /> **Crunchy Data PostgreSQL Playground**

<br />

<div class="m2 flex justify-center">
  <img src="/screenshot_crunchy_playground.png" style="width:70%;" />
</div>

`,title:'"Big" WebAssembly web applications: <br /> **Crunchy Data PostgreSQL Playground**',level:2,content:`## "Big" WebAssembly web applications: <br /> **Crunchy Data PostgreSQL Playground**

<br />

<div class="m2 flex justify-center">
  <img src="/screenshot_crunchy_playground.png" style="width:70%;" />
</div>`,frontmatter:{},index:11,start:336,end:346,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:P2,meta:{slide:{raw:`
## "Big" WebAssembly web applications: <br /> **Crunchy Data PostgreSQL Playground / v86**

<br />

<div class="m2 flex justify-center">
  <img src="/screenshot_crunchy_playground_v86.png" style="width:70%;" />
</div>

<!--
v86 emulates an x86-compatible CPU and hardware

Full linux kernel running in the browser
-->
`,title:'"Big" WebAssembly web applications: <br /> **Crunchy Data PostgreSQL Playground / v86**',level:2,content:`## "Big" WebAssembly web applications: <br /> **Crunchy Data PostgreSQL Playground / v86**

<br />

<div class="m2 flex justify-center">
  <img src="/screenshot_crunchy_playground_v86.png" style="width:70%;" />
</div>`,frontmatter:{},note:`v86 emulates an x86-compatible CPU and hardware

Full linux kernel running in the browser`,index:12,start:347,end:362,notesHTML:`<p>v86 emulates an x86-compatible CPU and hardware</p>
<p>Full linux kernel running in the browser</p>
`,filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:D2,meta:{slide:{raw:`

# Adoption outside of browsers

## WebAssembly runtimes

<br />

<div class="m2 flex justify-center">
  <img src="/webassembly_runtime.png" style="height:20em;" />
</div>

<!--
  Portabilty, Security
  Runtimes
-->
`,title:"Adoption outside of browsers",level:1,content:`# Adoption outside of browsers

## WebAssembly runtimes

<br />

<div class="m2 flex justify-center">
  <img src="/webassembly_runtime.png" style="height:20em;" />
</div>`,frontmatter:{},note:`Portabilty, Security
  Runtimes`,index:13,start:363,end:380,notesHTML:`<p>Portabilty, Security
Runtimes</p>
`,filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:V2,meta:{slide:{raw:`
## State of WebAssembly runtimes 2022

<br />

<div class="m2 flex justify-center">
  <img src="/runtimes.png" style="height:18em;" />
</div>

<br />

- Source: **The State of WebAssembly 2022** <br /> https://blog.scottlogic.com/2022/06/20/state-of-wasm-2022.html

`,title:"State of WebAssembly runtimes 2022",level:2,content:`## State of WebAssembly runtimes 2022

<br />

<div class="m2 flex justify-center">
  <img src="/runtimes.png" style="height:18em;" />
</div>

<br />

- Source: **The State of WebAssembly 2022** <br /> https://blog.scottlogic.com/2022/06/20/state-of-wasm-2022.html`,frontmatter:{},index:14,start:381,end:395,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:K2,meta:{slide:{raw:`

# Adoption outside of browsers

## WASI

<br />

- **The WebAssembly System Interface** (WASI)

  - WASI offers a standardized set of APIs for WebAssembly modules to access system resource
    - such as a FileSystem, Environment variables, Networking, Time, Random, ...

  - Design Principles

    - Capability-based security
    - Interposition
    - Compatibility
    - Portability

`,title:"Adoption outside of browsers",level:1,content:`# Adoption outside of browsers

## WASI

<br />

- **The WebAssembly System Interface** (WASI)

  - WASI offers a standardized set of APIs for WebAssembly modules to access system resource
    - such as a FileSystem, Environment variables, Networking, Time, Random, ...

  - Design Principles

    - Capability-based security
    - Interposition
    - Compatibility
    - Portability`,frontmatter:{},index:15,start:396,end:417,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:tw,meta:{slide:{raw:`
# Adoption outside of browsers

## Other examples

<br />

- Example: **WebAssembly function as a service (FaaS)**

  - WebAssembly on Amazon Lambda, Cloudflare Workers, ...

<br />

- Example: **WebAssembly Module as PostgreSQL function**

  - WebAssembly Module loaded from within the database

  - Integrations:
    - [PLV8](https://github.com/plv8/plv8)
    - [Wasmer Postgres](https://github.com/wasmerio/wasmer-postgres)

`,title:"Adoption outside of browsers",level:1,content:`# Adoption outside of browsers

## Other examples

<br />

- Example: **WebAssembly function as a service (FaaS)**

  - WebAssembly on Amazon Lambda, Cloudflare Workers, ...

<br />

- Example: **WebAssembly Module as PostgreSQL function**

  - WebAssembly Module loaded from within the database

  - Integrations:
    - [PLV8](https://github.com/plv8/plv8)
    - [Wasmer Postgres](https://github.com/wasmerio/wasmer-postgres)`,frontmatter:{},index:16,start:418,end:440,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:fw,meta:{slide:{raw:`
# Ability to reuse existing libraries


<img v-click="1" src="/logo_cpp.svg" class="absolute top-40 left-10" style="height:8em"/>

<img v-click="2" src="/logo_osgeo.png" class="absolute top-80 left-30" style="height:8em"/>

<img v-click="3" src="/logo_rust.svg" class="absolute top-40 left-65" style="height:8em"/>

<img v-click="4" src="/logo_python.svg" class="absolute top-40 right-5" style="height:8em"/>

`,title:"Ability to reuse existing libraries",level:1,content:`# Ability to reuse existing libraries


<img v-click="1" src="/logo_cpp.svg" class="absolute top-40 left-10" style="height:8em"/>

<img v-click="2" src="/logo_osgeo.png" class="absolute top-80 left-30" style="height:8em"/>

<img v-click="3" src="/logo_rust.svg" class="absolute top-40 left-65" style="height:8em"/>

<img v-click="4" src="/logo_python.svg" class="absolute top-40 right-5" style="height:8em"/>`,frontmatter:{},index:17,start:441,end:454,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:gw,meta:{slide:{raw:`
## Ability to reuse existing libraries: <br /> **Python Notebook (Starboard)**

<br />

<div class="m2 flex justify-center">
  <img src="/screenshot_starboard.png" style="width:70%;" />
</div>

`,title:"Ability to reuse existing libraries: <br /> **Python Notebook (Starboard)**",level:2,content:`## Ability to reuse existing libraries: <br /> **Python Notebook (Starboard)**

<br />

<div class="m2 flex justify-center">
  <img src="/screenshot_starboard.png" style="width:70%;" />
</div>`,frontmatter:{},index:18,start:455,end:465,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:ww,meta:{slide:{raw:`
# Evolution of WebAssembly

- One of the fastest web standards implemented
- Keep getting better since
  - Threads and atomics, Fixed-width SIMD, DWARF Debugging, ...
  - WebAssembly System Interface (WASI)

<br />

<v-click>

- WebAssembly proposals
  - Component Model
    - Interface types: high-level types such as strings, records, collections, etc.
    - A canonical ABI which specifies how high-level types are represented
    - Module and component linking: a mechanism for dynamically composing modules
  - Garbage Collection (GC)
  - Many more
    - https://github.com/WebAssembly/proposals
    - https://chromestatus.com/features#tags%3Awebassembly

</v-click>
`,title:"Evolution of WebAssembly",level:1,content:`# Evolution of WebAssembly

- One of the fastest web standards implemented
- Keep getting better since
  - Threads and atomics, Fixed-width SIMD, DWARF Debugging, ...
  - WebAssembly System Interface (WASI)

<br />

<v-click>

- WebAssembly proposals
  - Component Model
    - Interface types: high-level types such as strings, records, collections, etc.
    - A canonical ABI which specifies how high-level types are represented
    - Module and component linking: a mechanism for dynamically composing modules
  - Garbage Collection (GC)
  - Many more
    - https://github.com/WebAssembly/proposals
    - https://chromestatus.com/features#tags%3Awebassembly

</v-click>`,frontmatter:{},index:19,start:466,end:490,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:Pw,meta:{slide:{raw:`
# Atlas of Switzerland

- Official national Atlas of Switzerland

  - 400+ Maps
  - 3D Globe based on [osgEarth]()

- "Atlas of Switzerland \u2013 online"

  - Data downloaded on the fly

  - Clients for **Windows** and **MacOS**

<img src="/ads0.png" class="absolute top-15 right-10" style="width:20em"/>

<img src="/ads1.png" class="absolute bottom-10 right-10" style="width:22em;transform: rotate(3deg);"/>

<img src="/logo_ads.png" class="absolute bottom-10 left-25" style="width:8em"/>
`,title:"Atlas of Switzerland",level:1,content:`# Atlas of Switzerland

- Official national Atlas of Switzerland

  - 400+ Maps
  - 3D Globe based on [osgEarth]()

- "Atlas of Switzerland \u2013 online"

  - Data downloaded on the fly

  - Clients for **Windows** and **MacOS**

<img src="/ads0.png" class="absolute top-15 right-10" style="width:20em"/>

<img src="/ads1.png" class="absolute bottom-10 right-10" style="width:22em;transform: rotate(3deg);"/>

<img src="/logo_ads.png" class="absolute bottom-10 left-25" style="width:8em"/>`,frontmatter:{},index:20,start:491,end:511,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:Fw,meta:{slide:{raw:`

# osgEarth WebAssembly

- Personal Side Project

  - Started in 2019 to port osgEarth, GEOS, PROJ, GDAL, SpatiaLite, and Co. to the web
  - On and off ever since

- Not Ready yet

  - Currently in private alpha
  - Hopefully I can share the project in the upcoming months

- Next Steps

  - Bring patches to the upstream projects
  - Publish a npm package
  - Explore how to port the Atlas of Switzerland to the web platform


`,title:"osgEarth WebAssembly",level:1,content:`# osgEarth WebAssembly

- Personal Side Project

  - Started in 2019 to port osgEarth, GEOS, PROJ, GDAL, SpatiaLite, and Co. to the web
  - On and off ever since

- Not Ready yet

  - Currently in private alpha
  - Hopefully I can share the project in the upcoming months

- Next Steps

  - Bring patches to the upstream projects
  - Publish a npm package
  - Explore how to port the Atlas of Switzerland to the web platform`,frontmatter:{},index:21,start:512,end:534,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:Nw,meta:{slide:{raw:`
# osgEarth WebAssembly Demo

<br />

<div class="m2 flex justify-center">
  <img src="/screenshot_osgearthwasm.png" style="width:70%;" />
</div>

`,title:"osgEarth WebAssembly Demo",level:1,content:`# osgEarth WebAssembly Demo

<br />

<div class="m2 flex justify-center">
  <img src="/screenshot_osgearthwasm.png" style="width:70%;" />
</div>`,frontmatter:{},index:22,start:535,end:545,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:bk,meta:{slide:{raw:`
# osgEarth WebAssembly Demo

\`\`\`xml
<OGRFeatures name="country-data">
  <url>/module-scene-osgearth/world.shp</url>
  <filters>
    <buffer distance="-0.08" />
  </filters>
</OGRFeatures>
\`\`\`
`,title:"osgEarth WebAssembly Demo",level:1,content:`# osgEarth WebAssembly Demo

\`\`\`xml
<OGRFeatures name="country-data">
  <url>/module-scene-osgearth/world.shp</url>
  <filters>
    <buffer distance="-0.08" />
  </filters>
</OGRFeatures>
\`\`\``,frontmatter:{},index:23,start:546,end:558,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:vk,meta:{slide:{raw:`
# osgEarth WebAssembly Demo

\`\`\`xml
<styles>
  <style type="text/css">
    <![CDATA[
      base {
        altitude-clamping: terrain-drape;
        text-provider:  annotation;
        text-content:   [code];
        text-priority:  [pop];
        text-align:     center_center;
        text-size:      15;
        text-declutter: true;
      }
      p1: base {
        fill: #016c59;
      }
      p2: base {
        fill: #1c9099;
      }
      p3: base {
        fill: #67a9cf;
      }
      ...
\`\`\`

`,title:"osgEarth WebAssembly Demo",level:1,content:`# osgEarth WebAssembly Demo

\`\`\`xml
<styles>
  <style type="text/css">
    <![CDATA[
      base {
        altitude-clamping: terrain-drape;
        text-provider:  annotation;
        text-content:   [code];
        text-priority:  [pop];
        text-align:     center_center;
        text-size:      15;
        text-declutter: true;
      }
      p1: base {
        fill: #016c59;
      }
      p2: base {
        fill: #1c9099;
      }
      p3: base {
        fill: #67a9cf;
      }
      ...
\`\`\``,frontmatter:{},index:24,start:559,end:588,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:kk,meta:{slide:{raw:`
# osgEarth WebAssembly Demo

\`\`\`xml
  ...
  <selector class_expr="getStyleClass()" />
  <script language="javascript">
    <![CDATA[
      function getStyleClass() {
        const pop = parseInt(feature.properties.pop);
        if (pop >= 50_000_000) return "p1";
        else if (pop >= 20_000_000) return "p2";
        else if (pop >= 10_000_000) return "p3";
        else if (pop >= 5_000_000) return "p3";
        else return "p5";
      }
    ]]>
  <\/script>
</styles>
\`\`\`

`,title:"osgEarth WebAssembly Demo",level:1,content:`# osgEarth WebAssembly Demo

\`\`\`xml
  ...
  <selector class_expr="getStyleClass()" />
  <script language="javascript">
    <![CDATA[
      function getStyleClass() {
        const pop = parseInt(feature.properties.pop);
        if (pop >= 50_000_000) return "p1";
        else if (pop >= 20_000_000) return "p2";
        else if (pop >= 10_000_000) return "p3";
        else if (pop >= 5_000_000) return "p3";
        else return "p5";
      }
    ]]>
  <\/script>
</styles>
\`\`\``,frontmatter:{},index:25,start:589,end:611,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:Pk,meta:{slide:{raw:`
# osgEarth WebAssembly Libraries

<br />
<br />

<img src="/dependencies.drawio.svg" />

<div class="absolute top-30 left-160">

- \`osgEarth.wasm\`

  - One big statically linked module
    - \`26M\` .wasm module
    - \`325K\` .js glue code

<br />

- ~ 30 patches needed for the libraries

<br />

- More libraries to come

  - Vector Tiles
  - 3D Tiles
  - ...


</div>
`,title:"osgEarth WebAssembly Libraries",level:1,content:`# osgEarth WebAssembly Libraries

<br />
<br />

<img src="/dependencies.drawio.svg" />

<div class="absolute top-30 left-160">

- \`osgEarth.wasm\`

  - One big statically linked module
    - \`26M\` .wasm module
    - \`325K\` .js glue code

<br />

- ~ 30 patches needed for the libraries

<br />

- More libraries to come

  - Vector Tiles
  - 3D Tiles
  - ...


</div>`,frontmatter:{},index:26,start:612,end:643,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:Bk,meta:{slide:{raw:`
# How to get started

<table style="font-size:10pt"><thead><tr><th>Language</th><th>Browser</th><th>Other</th><th>WASI</th></tr></thead><tbody>
<tr><td><b>Rust</b></td><td>\u2705</td><td>\u2705</td><td>\u2705</td></tr>
<tr><td><b>C</b></td><td>\u2705</td><td>\u2705</td><td>\u2705</td></tr>
<tr><td><b>C++</b></td><td>\u2705</td><td>\u2705</td><td>\u2705</td></tr>
<tr><td><b>C# and .NET</b></td><td>\u2705</td><td>\u2705</td><td>\u2705</td></tr>
<tr><td><b>Python</b></td><td>\u2705</td><td>\u2705</td><td>\u2705</td></tr>
<tr><td><b>Java</b></td><td>\u2705</td><td>\u2705</td><td>\u274C</td></tr>
<tr><td><b>Ruby</b></td><td>\u2705</td><td>\u2705</td><td>\u2705</td></tr>
<tr><td><b>Go</b></td><td>\u2705</td><td>\u2705</td><td>\u2705</td></tr>
</tbody></table>

<v-click>
<arrow x1="350" y1="208" x2="200" y2="208" color="#654FF0" width="3" arrowSize="1" />
<arrow x1="350" y1="255" x2="200" y2="255" color="#654FF0" width="3" arrowSize="1" />
</v-click>
`,title:"How to get started",level:1,content:`# How to get started

<table style="font-size:10pt"><thead><tr><th>Language</th><th>Browser</th><th>Other</th><th>WASI</th></tr></thead><tbody>
<tr><td><b>Rust</b></td><td>\u2705</td><td>\u2705</td><td>\u2705</td></tr>
<tr><td><b>C</b></td><td>\u2705</td><td>\u2705</td><td>\u2705</td></tr>
<tr><td><b>C++</b></td><td>\u2705</td><td>\u2705</td><td>\u2705</td></tr>
<tr><td><b>C# and .NET</b></td><td>\u2705</td><td>\u2705</td><td>\u2705</td></tr>
<tr><td><b>Python</b></td><td>\u2705</td><td>\u2705</td><td>\u2705</td></tr>
<tr><td><b>Java</b></td><td>\u2705</td><td>\u2705</td><td>\u274C</td></tr>
<tr><td><b>Ruby</b></td><td>\u2705</td><td>\u2705</td><td>\u2705</td></tr>
<tr><td><b>Go</b></td><td>\u2705</td><td>\u2705</td><td>\u2705</td></tr>
</tbody></table>

<v-click>
<arrow x1="350" y1="208" x2="200" y2="208" color="#654FF0" width="3" arrowSize="1" />
<arrow x1="350" y1="255" x2="200" y2="255" color="#654FF0" width="3" arrowSize="1" />
</v-click>`,frontmatter:{},index:27,start:644,end:663,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:Kk,meta:{slide:{raw:`
# How to get started: C/C++ with Emscripten

- **Intro**
  - Emscripten is a compiler toolchain using LLVM
  - Compile C and C++ code into WebAssembly, and run it on the Web, Node.js, or other wasm runtimes
  - MIT license, project started Alon Zakai (~2012)

- **Installation**
  - The Emscripten SDK is used to install the entire toolchain
    - The Emscripten SDK (\`emsdk\`) can be used on Linux, Windows or MacOS

<br />

\`\`\`
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
./emsdk install latest
./emsdk activate latest
emcc --version
\`\`\`

<img src="/logo_emscripten.svg" class="absolute bottom-5 right-5" style="width:20em"/>
`,title:"How to get started: C/C++ with Emscripten",level:1,content:`# How to get started: C/C++ with Emscripten

- **Intro**
  - Emscripten is a compiler toolchain using LLVM
  - Compile C and C++ code into WebAssembly, and run it on the Web, Node.js, or other wasm runtimes
  - MIT license, project started Alon Zakai (~2012)

- **Installation**
  - The Emscripten SDK is used to install the entire toolchain
    - The Emscripten SDK (\`emsdk\`) can be used on Linux, Windows or MacOS

<br />

\`\`\`
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
./emsdk install latest
./emsdk activate latest
emcc --version
\`\`\`

<img src="/logo_emscripten.svg" class="absolute bottom-5 right-5" style="width:20em"/>`,frontmatter:{},index:28,start:664,end:688,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:o4,meta:{slide:{raw:`
# How to get started: C/C++ with Emscripten


- **Docker**
  - The emscripten compiler toolchain can also be used as a Docker container
  - Docker image \`emscripten/emsdk\` is a self-contained version of \`emsdk\`
    - Usage without any other installation on the host system:

<br />

\`\`\`
docker run --rm -v $(pwd):/src -u $(id -u):$(id -g) emscripten/emsdk \\
emcc helloworld.cpp -o helloworld.js
\`\`\`

<img src="/logo_docker.svg" class="absolute bottom-5 right-5" style="width:15em"/>

<br />
<br />

<v-click>

- Note:
  - Current directory is mounted to \`/src\`
  - Container has to run under the same user/group
    - File ownership mapping between the host and the container

</v-click>
`,title:"How to get started: C/C++ with Emscripten",level:1,content:`# How to get started: C/C++ with Emscripten


- **Docker**
  - The emscripten compiler toolchain can also be used as a Docker container
  - Docker image \`emscripten/emsdk\` is a self-contained version of \`emsdk\`
    - Usage without any other installation on the host system:

<br />

\`\`\`
docker run --rm -v $(pwd):/src -u $(id -u):$(id -g) emscripten/emsdk \\
emcc helloworld.cpp -o helloworld.js
\`\`\`

<img src="/logo_docker.svg" class="absolute bottom-5 right-5" style="width:15em"/>

<br />
<br />

<v-click>

- Note:
  - Current directory is mounted to \`/src\`
  - Container has to run under the same user/group
    - File ownership mapping between the host and the container

</v-click>`,frontmatter:{},index:29,start:689,end:719,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:p4,meta:{slide:{raw:"\n# Emscripten: What it does?\n\n- The main tool is the **Emscripten Compiler Frontend** (`emcc`)\n  - Drop-in replacement for a standard compiler like **gcc** or **clang**\n  - Supports the common flags from **gcc** and **clang**\n    - Introduces also many Emscripten specific compiler/linker flags [^1]\n\n<br />\n\n- **Emcc** uses Clang and LLVM to compile to WebAssembly (`.wasm`)\n  - **Emcc** also emits JavaScript that provides API support to the compiled code (`.js`)\n\n<br />\n\n- Wrapper scripts around `configure`, `make`, and `cmake`\n  - `./configure` -> `emconfigure ./configure`\n  - `make` -> `emmake make`\n  - `cmake .` -> `emcmake cmake .`\n\n[^1]: [emsettings.surma.technology](https://emsettings.surma.technology/)\n",title:"Emscripten: What it does?",level:1,content:"# Emscripten: What it does?\n\n- The main tool is the **Emscripten Compiler Frontend** (`emcc`)\n  - Drop-in replacement for a standard compiler like **gcc** or **clang**\n  - Supports the common flags from **gcc** and **clang**\n    - Introduces also many Emscripten specific compiler/linker flags [^1]\n\n<br />\n\n- **Emcc** uses Clang and LLVM to compile to WebAssembly (`.wasm`)\n  - **Emcc** also emits JavaScript that provides API support to the compiled code (`.js`)\n\n<br />\n\n- Wrapper scripts around `configure`, `make`, and `cmake`\n  - `./configure` -> `emconfigure ./configure`\n  - `make` -> `emmake make`\n  - `cmake .` -> `emcmake cmake .`\n\n[^1]: [emsettings.surma.technology](https://emsettings.surma.technology/)",frontmatter:{},index:30,start:720,end:742,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:_4,meta:{slide:{raw:`
# Emscripten: What it does?

- **"Emscripten Magic"**
  - Emscripten can be used to compile almost any portable C/C++ code to JavaScript
  - System libraries provided by Emscripten
    - SDL, Multimedia and Graphics, Networking, File System, Audio, ...
  - Binding between JS and WebAssembly

<br />

<v-click>

- **Emscripten Ports**
  - SDL2
  - boost, zlib, libpng, ...
  - [github.com/emscripten-ports](https://github.com/emscripten-ports)

</v-click>

`,title:"Emscripten: What it does?",level:1,content:`# Emscripten: What it does?

- **"Emscripten Magic"**
  - Emscripten can be used to compile almost any portable C/C++ code to JavaScript
  - System libraries provided by Emscripten
    - SDL, Multimedia and Graphics, Networking, File System, Audio, ...
  - Binding between JS and WebAssembly

<br />

<v-click>

- **Emscripten Ports**
  - SDL2
  - boost, zlib, libpng, ...
  - [github.com/emscripten-ports](https://github.com/emscripten-ports)

</v-click>`,frontmatter:{},index:31,start:743,end:764,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:C4,meta:{slide:{raw:`
# Tips and tricks

<br />
<br />

<v-click>

## OffscreenCanvas / Multithreading

</v-click>

<br />

<v-click>

## Pipeline for native and wasm builds

</v-click>

<br />

<v-click>

## Turn Around Time

</v-click>

<br />

<v-click>

## Debugging

</v-click>


`,title:"Tips and tricks",level:1,content:`# Tips and tricks

<br />
<br />

<v-click>

## OffscreenCanvas / Multithreading

</v-click>

<br />

<v-click>

## Pipeline for native and wasm builds

</v-click>

<br />

<v-click>

## Turn Around Time

</v-click>

<br />

<v-click>

## Debugging

</v-click>`,frontmatter:{},index:32,start:765,end:803,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:W4,meta:{layout:"center",class:"text-center",slide:{raw:`---
layout: center
class: text-center
---

# \u{1F52E}\u2728\u{1F914}\u2728\u{1F30D}\u2728\u{1F929}

<br />
<br />

## Opportunities ahead

<br />
<br />

<v-click>

### 3 possible future scenarios I'd like to see

</v-click>
`,title:"\u{1F52E}\u2728\u{1F914}\u2728\u{1F30D}\u2728\u{1F929}",level:1,content:`# \u{1F52E}\u2728\u{1F914}\u2728\u{1F30D}\u2728\u{1F929}

<br />
<br />

## Opportunities ahead

<br />
<br />

<v-click>

### 3 possible future scenarios I'd like to see

</v-click>`,frontmatter:{layout:"center",class:"text-center"},index:33,start:803,end:824,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:z4,meta:{slide:{raw:`

# \u{1F52E} Portable PyPI/npm packges with "native" bindings?

- The same problem exists for Python/JS package registries
- If a package depends on code with "native" bindings

  - The native code is expected to be available as shared library (runtime error)
  - Compilation is part of the installation procedure (\`SIP\`, \`node-gyp\`, ...)
  - A binary is provided for every possible target architecture <br /> (\`cp38-cp38-win_amd64.whl\`, \`cp38-cp38-win32.whl\`, \`cp36-cp36m-macosx_intel.whl\`, ...)

<br />

<v-click>

- WebAssembly could be a good fit to solve this problem

  - A universal \`.wasm\` module is shipped inside the package
  - Binds to Python/JS package and is executed with a WebAssembly runtime (e.g. wasmtime)

</v-click>

`,title:'\u{1F52E} Portable PyPI/npm packges with "native" bindings?',level:1,content:`# \u{1F52E} Portable PyPI/npm packges with "native" bindings?

- The same problem exists for Python/JS package registries
- If a package depends on code with "native" bindings

  - The native code is expected to be available as shared library (runtime error)
  - Compilation is part of the installation procedure (\`SIP\`, \`node-gyp\`, ...)
  - A binary is provided for every possible target architecture <br /> (\`cp38-cp38-win_amd64.whl\`, \`cp38-cp38-win32.whl\`, \`cp36-cp36m-macosx_intel.whl\`, ...)

<br />

<v-click>

- WebAssembly could be a good fit to solve this problem

  - A universal \`.wasm\` module is shipped inside the package
  - Binds to Python/JS package and is executed with a WebAssembly runtime (e.g. wasmtime)

</v-click>`,frontmatter:{},index:34,start:825,end:848,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:Q4,meta:{slide:{raw:`
# \u{1F52E} QGIS in the browser?

- Why I think it is possible?
  - [Qt](https://doc.qt.io/qt-6/wasm.html) is doing fine (as seen earlier)
  - [Python]() is doing fine (as seen earlier)
  - Dependencies almost identical to the stack showed earlier

<br />

<v-click>

- Ok fine, but why?
  - Online Playground, People who cannot install/use QGIS, ...
  - ***Disclaimer***: You probably still want a desktop GIS compiled for your local system

</v-click>

<br />

<v-click>

- What has been done so far?
  - QGIS Renderer: https://wonder-sk.github.io/wasm/qgis.html
    - By [Martin Dobias](https://github.com/wonder-sk), announced in the [QGIS mailing list](https://lists.osgeo.org/pipermail/qgis-developer/2022-March/064589.html)

</v-click>
`,title:"\u{1F52E} QGIS in the browser?",level:1,content:`# \u{1F52E} QGIS in the browser?

- Why I think it is possible?
  - [Qt](https://doc.qt.io/qt-6/wasm.html) is doing fine (as seen earlier)
  - [Python]() is doing fine (as seen earlier)
  - Dependencies almost identical to the stack showed earlier

<br />

<v-click>

- Ok fine, but why?
  - Online Playground, People who cannot install/use QGIS, ...
  - ***Disclaimer***: You probably still want a desktop GIS compiled for your local system

</v-click>

<br />

<v-click>

- What has been done so far?
  - QGIS Renderer: https://wonder-sk.github.io/wasm/qgis.html
    - By [Martin Dobias](https://github.com/wonder-sk), announced in the [QGIS mailing list](https://lists.osgeo.org/pipermail/qgis-developer/2022-March/064589.html)

</v-click>`,frontmatter:{},index:35,start:849,end:877,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:oS,meta:{slide:{raw:`

# \u{1F52E} Composable toolbox of geospatial .wasm modules

- Disclaimer: Advancement in the WebAssembly specs/implementation needed
  - Waiting for the "Component Model" proposal

<br />

<v-click>

- Think about a model builder in a Desktop GIS
  - Source language doesn't matter
  - Single universal .wasm "binary"

</v-click>

<br />

<v-click>

- Reuse the same modules
  - Client/Web, FaaS, DB, "Edge", plugin system, ...

</v-click>
`,title:"\u{1F52E} Composable toolbox of geospatial .wasm modules",level:1,content:`# \u{1F52E} Composable toolbox of geospatial .wasm modules

- Disclaimer: Advancement in the WebAssembly specs/implementation needed
  - Waiting for the "Component Model" proposal

<br />

<v-click>

- Think about a model builder in a Desktop GIS
  - Source language doesn't matter
  - Single universal .wasm "binary"

</v-click>

<br />

<v-click>

- Reuse the same modules
  - Client/Web, FaaS, DB, "Edge", plugin system, ...

</v-click>`,frontmatter:{},index:36,start:878,end:904,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:yS,meta:{slide:{raw:`
# Contact

<ul>
  <li>
    <b>E-Mail</b> <carbon-email/>
  <ul>
  <li>
    <a href="mailto://mschmuki@ethz.ch" target="_blank">mschmuki@ethz.ch</a>
  </li>
  <li>
    <a href="mailto://michael@schmuki.io" target="_blank">michael@schmuki.io</a>
  </li>
  </ul>
  </li>
</ul>

<br />

<ul>
  <li>
    <b>Github</b> <carbon-logo-github />
  <ul>
  <li>
    <a href="https://github.com/boardend" target="_blank">github.com/boardend</a>
  </li>
  </ul>
  </li>
</ul>


<br />
<br />

# Slides


- **Page: [boardend.github.io/foss4g-2022-webassembly4g](https://boardend.github.io/foss4g-2022-webassembly4g/)**

  - Source: [github.com/boardend/foss4g-2022-webassembly4g](https://github.com/boardend/foss4g-2022-webassembly4g)

<img src="/slides_qr.svg" class="absolute bottom-15 right-20" style="height:10em"/>

`,title:"Contact",level:1,content:`# Contact

<ul>
  <li>
    <b>E-Mail</b> <carbon-email/>
  <ul>
  <li>
    <a href="mailto://mschmuki@ethz.ch" target="_blank">mschmuki@ethz.ch</a>
  </li>
  <li>
    <a href="mailto://michael@schmuki.io" target="_blank">michael@schmuki.io</a>
  </li>
  </ul>
  </li>
</ul>

<br />

<ul>
  <li>
    <b>Github</b> <carbon-logo-github />
  <ul>
  <li>
    <a href="https://github.com/boardend" target="_blank">github.com/boardend</a>
  </li>
  </ul>
  </li>
</ul>


<br />
<br />

# Slides


- **Page: [boardend.github.io/foss4g-2022-webassembly4g](https://boardend.github.io/foss4g-2022-webassembly4g/)**

  - Source: [github.com/boardend/foss4g-2022-webassembly4g](https://github.com/boardend/foss4g-2022-webassembly4g)

<img src="/slides_qr.svg" class="absolute bottom-15 right-20" style="height:10em"/>`,frontmatter:{},index:37,start:905,end:949,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:CS,meta:{layout:"center",class:"text-center",slide:{raw:`---
layout: center
class: text-center
---

## ~ La fine ~

<br />
<br />
<br />

<h1>Sar\xF2 lieto di rispondere alle vostre domande <sup class="footnote-ref"><i>[IT]</i></sup></h1>

<br />

<h3>I will be happy to answer your questions <sup class="footnote-ref"><i>[EN]</i></sup></h3>

<br />

<img style="height:8em;display:inline-block;background-color:white;padding: 1em;margin-top:2em;" src="/foss4g2022_logo.png" />
`,title:"~ La fine ~",level:2,content:`## ~ La fine ~

<br />
<br />
<br />

<h1>Sar\xF2 lieto di rispondere alle vostre domande <sup class="footnote-ref"><i>[IT]</i></sup></h1>

<br />

<h3>I will be happy to answer your questions <sup class="footnote-ref"><i>[EN]</i></sup></h3>

<br />

<img style="height:8em;display:inline-block;background-color:white;padding: 1em;margin-top:2em;" src="/foss4g2022_logo.png" />`,frontmatter:{layout:"center",class:"text-center"},index:38,start:949,end:970,notesHTML:"",filepath:"/home/runner/work/foss4g-2022-webassembly4g/foss4g-2022-webassembly4g/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",component:uv,meta:{layout:"end"}}],je=PS,MS=[{name:"play",path:"/",component:nv,children:[...je]},{name:"print",path:"/print",component:iv},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>fs(()=>import("./Presenter.9531eaf3.js"),["assets/Presenter.9531eaf3.js","assets/Presenter.e29290d2.css","assets/DrawingControls.vue_vue_type_script_setup_true_lang.d11999b2.js"]),beforeEnter:e=>{if(!Sn.remote||Sn.remote===e.query.password)return!0;if(Sn.remote&&e.query.password===void 0){const t=prompt("Enter password");if(Sn.remote===t)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],gt=Ub({history:ab("/foss4g-2022-webassembly4g/"),routes:MS});function TS(e,t,{mode:n="replace"}={}){return O({get(){const s=gt.currentRoute.value.query[e];return s==null?t!=null?t:null:Array.isArray(s)?s.filter(Boolean):s},set(s){Ge(()=>{gt[w(n)]({query:{...gt.currentRoute.value.query,[e]:s}})})}})}const Cf=z(0);Ge(()=>{gt.afterEach(async()=>{await Ge(),Cf.value+=1})});const Zt=O(()=>gt.currentRoute.value),oi=O(()=>Zt.value.query.print!==void 0),FS=O(()=>Zt.value.query.print==="clicks"),zt=O(()=>Zt.value.query.embedded!==void 0),Nt=O(()=>Zt.value.path.startsWith("/presenter")),Ls=O(()=>oi.value&&!FS.value),fl=O(()=>Zt.value.query.password),IS=O(()=>!Nt.value&&(!we.remote||fl.value===we.remote)),nc=TS("clicks","0"),Pf=O(()=>je.length-1),LS=O(()=>Zt.value.path),Be=O(()=>parseInt(LS.value.split(/\//g).slice(-1)[0])||1);O(()=>or(Be.value));const ft=O(()=>je.find(e=>e.path===`${Be.value}`));O(()=>{var e,t,n;return(n=(t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});O(()=>{var e,t;return(t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.layout});const kr=O(()=>je.find(e=>e.path===`${Math.min(je.length,Be.value+1)}`)),DS=O(()=>{var e,t;return Cf.value,((t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Pt=O({get(){if(Ls.value)return 99999;let e=+(nc.value||0);return isNaN(e)&&(e=0),e},set(e){nc.value=e.toString()}}),Ro=O(()=>{var e,t,n;return+((n=(t=(e=ft.value)==null?void 0:e.meta)==null?void 0:t.clicks)!=null?n:DS.value.length)}),RS=O(()=>Be.value<je.length-1||Pt.value<Ro.value),NS=O(()=>Be.value>1||Pt.value>0),WS=O(()=>je.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(ri(e,t),e),[])),jS=O(()=>li(WS.value,ft.value));O(()=>ii(jS.value));function cn(){Ro.value<=Pt.value?Zs():Pt.value+=1}async function un(){Pt.value<=0?await Qs():Pt.value-=1}function or(e){return Nt.value?`/presenter/${e}`:`/${e}`}function Zs(){const e=Math.min(je.length,Be.value+1);return is(e)}async function Qs(e=!0){const t=Math.max(1,Be.value-1);await is(t),e&&Ro.value&&gt.replace({query:{...Zt.value.query,clicks:Ro.value}})}function is(e,t){return gt.push({path:or(e),query:{...Zt.value.query,clicks:t}})}function BS(e){const t=z(0),{direction:n,distanceX:s,distanceY:o}=Ig(e,{onSwipeStart(l){l.pointerType==="touch"&&(qs.value||(t.value=Xr()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!t.value||qs.value)return;const i=Math.abs(s.value),a=Math.abs(o.value);i/window.innerWidth>.3||i>100?n.value===qt.LEFT?cn():un():(a/window.innerHeight>.4||a>200)&&(n.value===qt.DOWN?Qs():Zs())}})}async function dl(){const{saveAs:e}=await fs(()=>import("./FileSaver.min.7f56e709.js").then(t=>t.F),[]);e(Wu(we.download)?we.download:we.exportFilename?`${we.exportFilename}.pdf`:"/foss4g-2022-webassembly4g/slidev-exported.pdf",`${we.title}.pdf`)}async function HS(e){var t,n;if(e==null){const s=(n=(t=ft.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(s!=null&&s.filepath))return!1;e=`${s.filepath}:${s.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function ri(e,t,n=1){var o,l,i,a,c;const s=(l=(o=t.meta)==null?void 0:o.slide)==null?void 0:l.level;s&&s>n&&e.length>0?ri(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:Boolean((i=t.meta)==null?void 0:i.hideInToc),title:(c=(a=t.meta)==null?void 0:a.slide)==null?void 0:c.title})}function li(e,t,n=!1,s){return e.map(o=>{const l={...o,active:o.path===(t==null?void 0:t.path),hasActiveParent:n};return l.children.length>0&&(l.children=li(l.children,t,l.active||l.hasActiveParent,l)),s&&(l.active||l.activeParent)&&(s.activeParent=!0),l})}function ii(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:ii(n.children,t+1)}))}function VS(){const e=we.titleTemplate.replace("%s",we.title||"Slidev");nm({title:e}),dm(`${e} - shared`),gm(`${e} - drawings`);function t(){Nt.value&&(ra("page",+Be.value),ra("clicks",Pt.value))}gt.afterEach(t),ce(Pt,t),pm(n=>{(+n.page!=+Be.value||Pt.value!==n.clicks)&&gt.replace({path:or(n.page),query:{...gt.currentRoute.value.query,clicks:n.clicks||0}})})}const zS=ke({__name:"App",setup(e){return W(q),VS(),(t,n)=>{const s=Br("RouterView"),o=Br("StarportCarrier");return x(),V(Ee,null,[F(s),F(o)],64)}}});function Sr(e){return e!==null&&typeof e=="object"}function pl(e,t,n=".",s){if(!Sr(t))return pl(e,{},n,s);const o=Object.assign({},t);for(const l in e){if(l==="__proto__"||l==="constructor")continue;const i=e[l];i!=null&&(s&&s(o,l,i,n)||(Array.isArray(i)&&Array.isArray(o[l])?o[l]=i.concat(o[l]):Sr(i)&&Sr(o[l])?o[l]=pl(i,o[l],(n?`${n}.`:"")+l.toString(),s):o[l]=i))}return o}function GS(e){return(...t)=>t.reduce((n,s)=>pl(n,s,"",e),{})}const US=GS();var sc;const Mf=typeof window<"u",qS=Object.prototype.toString,KS=e=>typeof e=="number",YS=e=>typeof e=="string",hl=e=>qS.call(e)==="[object Object]",Mn=()=>{};Mf&&((sc=window==null?void 0:window.navigator)==null?void 0:sc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Tf(e){return Tl()?(Fl(e),!0):!1}function ai(e){Nn()&&Xo(e)}function ZS(e,t,n){const s=ce(e,(...o)=>(Ge(()=>s()),t(...o)),n)}function Dn(e){var t;const n=w(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Ff=Mf?window:void 0;function QS(...e){let t,n,s,o;if(YS(e[0])?([n,s,o]=e,t=Ff):[t,n,s,o]=e,!t)return Mn;let l=Mn;const i=ce(()=>Dn(t),c=>{l(),c&&(c.addEventListener(n,s,o),l=()=>{c.removeEventListener(n,s,o),l=Mn})},{immediate:!0,flush:"post"}),a=()=>{i(),l()};return Tf(a),a}const ml=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},gl="__vueuse_ssr_handlers__";ml[gl]=ml[gl]||{};ml[gl];function JS(e,t,n={}){const{root:s,rootMargin:o="0px",threshold:l=.1,window:i=Ff}=n,a=i&&"IntersectionObserver"in i;let c=Mn;const u=a?ce(()=>({el:Dn(e),root:Dn(s)}),({el:p,root:d})=>{if(c(),!p)return;const h=new IntersectionObserver(t,{root:d,rootMargin:o,threshold:l});h.observe(p),c=()=>{h.disconnect(),c=Mn}},{immediate:!0,flush:"post"}):Mn,f=()=>{c(),u()};return Tf(f),{isSupported:a,stop:f}}var oc;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(oc||(oc={}));const If=1/60*1e3,XS=typeof performance<"u"?()=>performance.now():()=>Date.now(),Lf=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(XS()),If);function eA(e){let t=[],n=[],s=0,o=!1,l=!1;const i=new WeakSet,a={schedule:(c,u=!1,f=!1)=>{const p=f&&o,d=p?t:n;return u&&i.add(c),d.indexOf(c)===-1&&(d.push(c),p&&o&&(s=t.length)),c},cancel:c=>{const u=n.indexOf(c);u!==-1&&n.splice(u,1),i.delete(c)},process:c=>{if(o){l=!0;return}if(o=!0,[t,n]=[n,t],n.length=0,s=t.length,s)for(let u=0;u<s;u++){const f=t[u];f(c),i.has(f)&&(a.schedule(f),e())}o=!1,l&&(l=!1,a.process(c))}};return a}const tA=40;let bl=!0,Js=!1,_l=!1;const ss={delta:0,timestamp:0},no=["read","update","preRender","render","postRender"],rr=no.reduce((e,t)=>(e[t]=eA(()=>Js=!0),e),{}),yl=no.reduce((e,t)=>{const n=rr[t];return e[t]=(s,o=!1,l=!1)=>(Js||oA(),n.schedule(s,o,l)),e},{}),nA=no.reduce((e,t)=>(e[t]=rr[t].cancel,e),{});no.reduce((e,t)=>(e[t]=()=>rr[t].process(ss),e),{});const sA=e=>rr[e].process(ss),Df=e=>{Js=!1,ss.delta=bl?If:Math.max(Math.min(e-ss.timestamp,tA),1),ss.timestamp=e,_l=!0,no.forEach(sA),_l=!1,Js&&(bl=!1,Lf(Df))},oA=()=>{Js=!0,bl=!0,_l||Lf(Df)},Rf=()=>ss;function Nf(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(n[s[o]]=e[s[o]]);return n}var rA=function(){},rc=function(){};const vl=(e,t,n)=>Math.min(Math.max(n,e),t),Ar=.001,lA=.01,lc=10,iA=.05,aA=1;function cA({duration:e=800,bounce:t=.25,velocity:n=0,mass:s=1}){let o,l;rA(e<=lc*1e3);let i=1-t;i=vl(iA,aA,i),e=vl(lA,lc,e/1e3),i<1?(o=u=>{const f=u*i,p=f*e,d=f-n,h=wl(u,i),m=Math.exp(-p);return Ar-d/h*m},l=u=>{const p=u*i*e,d=p*n+n,h=Math.pow(i,2)*Math.pow(u,2)*e,m=Math.exp(-p),v=wl(Math.pow(u,2),i);return(-o(u)+Ar>0?-1:1)*((d-h)*m)/v}):(o=u=>{const f=Math.exp(-u*e),p=(u-n)*e+1;return-Ar+f*p},l=u=>{const f=Math.exp(-u*e),p=(n-u)*(e*e);return f*p});const a=5/e,c=fA(o,l,a);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*s;return{stiffness:u,damping:i*2*Math.sqrt(s*u),duration:e}}}const uA=12;function fA(e,t,n){let s=n;for(let o=1;o<uA;o++)s=s-e(s)/t(s);return s}function wl(e,t){return e*Math.sqrt(1-t*t)}const dA=["duration","bounce"],pA=["stiffness","damping","mass"];function ic(e,t){return t.some(n=>e[n]!==void 0)}function hA(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!ic(e,pA)&&ic(e,dA)){const n=cA(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function ci(e){var{from:t=0,to:n=1,restSpeed:s=2,restDelta:o}=e,l=Nf(e,["from","to","restSpeed","restDelta"]);const i={done:!1,value:t};let{stiffness:a,damping:c,mass:u,velocity:f,duration:p,isResolvedFromDuration:d}=hA(l),h=ac,m=ac;function v(){const y=f?-(f/1e3):0,E=n-t,A=c/(2*Math.sqrt(a*u)),S=Math.sqrt(a/u)/1e3;if(o===void 0&&(o=Math.min(Math.abs(n-t)/100,.4)),A<1){const $=wl(S,A);h=R=>{const L=Math.exp(-A*S*R);return n-L*((y+A*S*E)/$*Math.sin($*R)+E*Math.cos($*R))},m=R=>{const L=Math.exp(-A*S*R);return A*S*L*(Math.sin($*R)*(y+A*S*E)/$+E*Math.cos($*R))-L*(Math.cos($*R)*(y+A*S*E)-$*E*Math.sin($*R))}}else if(A===1)h=$=>n-Math.exp(-S*$)*(E+(y+S*E)*$);else{const $=S*Math.sqrt(A*A-1);h=R=>{const L=Math.exp(-A*S*R),H=Math.min($*R,300);return n-L*((y+A*S*E)*Math.sinh(H)+$*E*Math.cosh(H))/$}}}return v(),{next:y=>{const E=h(y);if(d)i.done=y>=p;else{const A=m(y)*1e3,S=Math.abs(A)<=s,$=Math.abs(n-E)<=o;i.done=S&&$}return i.value=i.done?n:E,i},flipTarget:()=>{f=-f,[t,n]=[n,t],v()}}}ci.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const ac=e=>0,Wf=(e,t,n)=>{const s=t-e;return s===0?1:(n-e)/s},ui=(e,t,n)=>-n*e+n*t+e,jf=(e,t)=>n=>Math.max(Math.min(n,t),e),Ds=e=>e%1?Number(e.toFixed(5)):e,Xs=/(-)?([\d]*\.?[\d])+/g,xl=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,mA=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function so(e){return typeof e=="string"}const oo={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Rs=Object.assign(Object.assign({},oo),{transform:jf(0,1)}),mo=Object.assign(Object.assign({},oo),{default:1}),fi=e=>({test:t=>so(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),gn=fi("deg"),Ns=fi("%"),ie=fi("px"),cc=Object.assign(Object.assign({},Ns),{parse:e=>Ns.parse(e)/100,transform:e=>Ns.transform(e*100)}),di=(e,t)=>n=>Boolean(so(n)&&mA.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Bf=(e,t,n)=>s=>{if(!so(s))return s;const[o,l,i,a]=s.match(Xs);return{[e]:parseFloat(o),[t]:parseFloat(l),[n]:parseFloat(i),alpha:a!==void 0?parseFloat(a):1}},En={test:di("hsl","hue"),parse:Bf("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:s=1})=>"hsla("+Math.round(e)+", "+Ns.transform(Ds(t))+", "+Ns.transform(Ds(n))+", "+Ds(Rs.transform(s))+")"},gA=jf(0,255),Er=Object.assign(Object.assign({},oo),{transform:e=>Math.round(gA(e))}),on={test:di("rgb","red"),parse:Bf("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:s=1})=>"rgba("+Er.transform(e)+", "+Er.transform(t)+", "+Er.transform(n)+", "+Ds(Rs.transform(s))+")"};function bA(e){let t="",n="",s="",o="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),s=e.substr(5,2),o=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),s=e.substr(3,1),o=e.substr(4,1),t+=t,n+=n,s+=s,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:o?parseInt(o,16)/255:1}}const kl={test:di("#"),parse:bA,transform:on.transform},ot={test:e=>on.test(e)||kl.test(e)||En.test(e),parse:e=>on.test(e)?on.parse(e):En.test(e)?En.parse(e):kl.parse(e),transform:e=>so(e)?e:e.hasOwnProperty("red")?on.transform(e):En.transform(e)},Hf="${c}",Vf="${n}";function _A(e){var t,n,s,o;return isNaN(e)&&so(e)&&((n=(t=e.match(Xs))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((o=(s=e.match(xl))===null||s===void 0?void 0:s.length)!==null&&o!==void 0?o:0)>0}function zf(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const s=e.match(xl);s&&(n=s.length,e=e.replace(xl,Hf),t.push(...s.map(ot.parse)));const o=e.match(Xs);return o&&(e=e.replace(Xs,Vf),t.push(...o.map(oo.parse))),{values:t,numColors:n,tokenised:e}}function Gf(e){return zf(e).values}function Uf(e){const{values:t,numColors:n,tokenised:s}=zf(e),o=t.length;return l=>{let i=s;for(let a=0;a<o;a++)i=i.replace(a<n?Hf:Vf,a<n?ot.transform(l[a]):Ds(l[a]));return i}}const yA=e=>typeof e=="number"?0:e;function vA(e){const t=Gf(e);return Uf(e)(t.map(yA))}const ro={test:_A,parse:Gf,createTransformer:Uf,getAnimatableNone:vA},wA=new Set(["brightness","contrast","saturate","opacity"]);function xA(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[s]=n.match(Xs)||[];if(!s)return e;const o=n.replace(s,"");let l=wA.has(t)?1:0;return s!==n&&(l*=100),t+"("+l+o+")"}const kA=/([a-z-]*)\(.*?\)/g,Sl=Object.assign(Object.assign({},ro),{getAnimatableNone:e=>{const t=e.match(kA);return t?t.map(xA).join(" "):e}});function $r(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function uc({hue:e,saturation:t,lightness:n,alpha:s}){e/=360,t/=100,n/=100;let o=0,l=0,i=0;if(!t)o=l=i=n;else{const a=n<.5?n*(1+t):n+t-n*t,c=2*n-a;o=$r(c,a,e+1/3),l=$r(c,a,e),i=$r(c,a,e-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(i*255),alpha:s}}const SA=(e,t,n)=>{const s=e*e,o=t*t;return Math.sqrt(Math.max(0,n*(o-s)+s))},AA=[kl,on,En],fc=e=>AA.find(t=>t.test(e)),qf=(e,t)=>{let n=fc(e),s=fc(t),o=n.parse(e),l=s.parse(t);n===En&&(o=uc(o),n=on),s===En&&(l=uc(l),s=on);const i=Object.assign({},o);return a=>{for(const c in i)c!=="alpha"&&(i[c]=SA(o[c],l[c],a));return i.alpha=ui(o.alpha,l.alpha,a),n.transform(i)}},EA=e=>typeof e=="number",$A=(e,t)=>n=>t(e(n)),Kf=(...e)=>e.reduce($A);function Yf(e,t){return EA(e)?n=>ui(e,t,n):ot.test(e)?qf(e,t):Qf(e,t)}const Zf=(e,t)=>{const n=[...e],s=n.length,o=e.map((l,i)=>Yf(l,t[i]));return l=>{for(let i=0;i<s;i++)n[i]=o[i](l);return n}},OA=(e,t)=>{const n=Object.assign(Object.assign({},e),t),s={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(s[o]=Yf(e[o],t[o]));return o=>{for(const l in s)n[l]=s[l](o);return n}};function dc(e){const t=ro.parse(e),n=t.length;let s=0,o=0,l=0;for(let i=0;i<n;i++)s||typeof t[i]=="number"?s++:t[i].hue!==void 0?l++:o++;return{parsed:t,numNumbers:s,numRGB:o,numHSL:l}}const Qf=(e,t)=>{const n=ro.createTransformer(t),s=dc(e),o=dc(t);return s.numHSL===o.numHSL&&s.numRGB===o.numRGB&&s.numNumbers>=o.numNumbers?Kf(Zf(s.parsed,o.parsed),n):i=>`${i>0?t:e}`},CA=(e,t)=>n=>ui(e,t,n);function PA(e){if(typeof e=="number")return CA;if(typeof e=="string")return ot.test(e)?qf:Qf;if(Array.isArray(e))return Zf;if(typeof e=="object")return OA}function MA(e,t,n){const s=[],o=n||PA(e[0]),l=e.length-1;for(let i=0;i<l;i++){let a=o(e[i],e[i+1]);if(t){const c=Array.isArray(t)?t[i]:t;a=Kf(c,a)}s.push(a)}return s}function TA([e,t],[n]){return s=>n(Wf(e,t,s))}function FA(e,t){const n=e.length,s=n-1;return o=>{let l=0,i=!1;if(o<=e[0]?i=!0:o>=e[s]&&(l=s-1,i=!0),!i){let c=1;for(;c<n&&!(e[c]>o||c===s);c++);l=c-1}const a=Wf(e[l],e[l+1],o);return t[l](a)}}function Jf(e,t,{clamp:n=!0,ease:s,mixer:o}={}){const l=e.length;rc(l===t.length),rc(!s||!Array.isArray(s)||s.length===l-1),e[0]>e[l-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const i=MA(t,s,o),a=l===2?TA(e,i):FA(e,i);return n?c=>a(vl(e[0],e[l-1],c)):a}const lr=e=>t=>1-e(1-t),pi=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,IA=e=>t=>Math.pow(t,e),Xf=e=>t=>t*t*((e+1)*t-e),LA=e=>{const t=Xf(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},ed=1.525,DA=4/11,RA=8/11,NA=9/10,td=e=>e,hi=IA(2),WA=lr(hi),nd=pi(hi),sd=e=>1-Math.sin(Math.acos(e)),od=lr(sd),jA=pi(od),mi=Xf(ed),BA=lr(mi),HA=pi(mi),VA=LA(ed),zA=4356/361,GA=35442/1805,UA=16061/1805,No=e=>{if(e===1||e===0)return e;const t=e*e;return e<DA?7.5625*t:e<RA?9.075*t-9.9*e+3.4:e<NA?zA*t-GA*e+UA:10.8*e*e-20.52*e+10.72},qA=lr(No),KA=e=>e<.5?.5*(1-No(1-e*2)):.5*No(e*2-1)+.5;function YA(e,t){return e.map(()=>t||nd).splice(0,e.length-1)}function ZA(e){const t=e.length;return e.map((n,s)=>s!==0?s/(t-1):0)}function QA(e,t){return e.map(n=>n*t)}function So({from:e=0,to:t=1,ease:n,offset:s,duration:o=300}){const l={done:!1,value:e},i=Array.isArray(t)?t:[e,t],a=QA(s&&s.length===i.length?s:ZA(i),o);function c(){return Jf(a,i,{ease:Array.isArray(n)?n:YA(i,n)})}let u=c();return{next:f=>(l.value=u(f),l.done=f>=o,l),flipTarget:()=>{i.reverse(),u=c()}}}function JA({velocity:e=0,from:t=0,power:n=.8,timeConstant:s=350,restDelta:o=.5,modifyTarget:l}){const i={done:!1,value:t};let a=n*e;const c=t+a,u=l===void 0?c:l(c);return u!==c&&(a=u-t),{next:f=>{const p=-a*Math.exp(-f/s);return i.done=!(p>o||p<-o),i.value=i.done?u:u+p,i},flipTarget:()=>{}}}const pc={keyframes:So,spring:ci,decay:JA};function XA(e){if(Array.isArray(e.to))return So;if(pc[e.type])return pc[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?So:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?ci:So}function rd(e,t,n=0){return e-t-n}function eE(e,t,n=0,s=!0){return s?rd(t+-e,t,n):t-(e-t)+n}function tE(e,t,n,s){return s?e>=t+n:e<=-n}const nE=e=>{const t=({delta:n})=>e(n);return{start:()=>yl.update(t,!0),stop:()=>nA.update(t)}};function ld(e){var t,n,{from:s,autoplay:o=!0,driver:l=nE,elapsed:i=0,repeat:a=0,repeatType:c="loop",repeatDelay:u=0,onPlay:f,onStop:p,onComplete:d,onRepeat:h,onUpdate:m}=e,v=Nf(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:y}=v,E,A=0,S=v.duration,$,R=!1,L=!0,H;const ee=XA(v);!((n=(t=ee).needsInterpolation)===null||n===void 0)&&n.call(t,s,y)&&(H=Jf([0,100],[s,y],{clamp:!1}),s=0,y=100);const re=ee(Object.assign(Object.assign({},v),{from:s,to:y}));function me(){A++,c==="reverse"?(L=A%2===0,i=eE(i,S,u,L)):(i=rd(i,S,u),c==="mirror"&&re.flipTarget()),R=!1,h&&h()}function ye(){E.stop(),d&&d()}function Ie(Ue){if(L||(Ue=-Ue),i+=Ue,!R){const Oe=re.next(Math.max(0,i));$=Oe.value,H&&($=H($)),R=L?Oe.done:i<=0}m==null||m($),R&&(A===0&&(S!=null||(S=i)),A<a?tE(i,S,u,L)&&me():ye())}function Ne(){f==null||f(),E=l(Ie),E.start()}return o&&Ne(),{stop:()=>{p==null||p(),E.stop()}}}function id(e,t){return t?e*(1e3/t):0}function sE({from:e=0,velocity:t=0,min:n,max:s,power:o=.8,timeConstant:l=750,bounceStiffness:i=500,bounceDamping:a=10,restDelta:c=1,modifyTarget:u,driver:f,onUpdate:p,onComplete:d,onStop:h}){let m;function v(S){return n!==void 0&&S<n||s!==void 0&&S>s}function y(S){return n===void 0?s:s===void 0||Math.abs(n-S)<Math.abs(s-S)?n:s}function E(S){m==null||m.stop(),m=ld(Object.assign(Object.assign({},S),{driver:f,onUpdate:$=>{var R;p==null||p($),(R=S.onUpdate)===null||R===void 0||R.call(S,$)},onComplete:d,onStop:h}))}function A(S){E(Object.assign({type:"spring",stiffness:i,damping:a,restDelta:c},S))}if(v(e))A({from:e,velocity:t,to:y(e)});else{let S=o*t+e;typeof u<"u"&&(S=u(S));const $=y(S),R=$===n?-1:1;let L,H;const ee=re=>{L=H,H=re,t=id(re-L,Rf().delta),(R===1&&re>$||R===-1&&re<$)&&A({from:re,to:$,velocity:t})};E({type:"decay",from:e,velocity:t,timeConstant:l,power:o,restDelta:c,modifyTarget:u,onUpdate:v(S)?ee:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const ad=(e,t)=>1-3*t+3*e,cd=(e,t)=>3*t-6*e,ud=e=>3*e,Wo=(e,t,n)=>((ad(t,n)*e+cd(t,n))*e+ud(t))*e,fd=(e,t,n)=>3*ad(t,n)*e*e+2*cd(t,n)*e+ud(t),oE=1e-7,rE=10;function lE(e,t,n,s,o){let l,i,a=0;do i=t+(n-t)/2,l=Wo(i,s,o)-e,l>0?n=i:t=i;while(Math.abs(l)>oE&&++a<rE);return i}const iE=8,aE=.001;function cE(e,t,n,s){for(let o=0;o<iE;++o){const l=fd(t,n,s);if(l===0)return t;t-=(Wo(t,n,s)-e)/l}return t}const Ao=11,go=1/(Ao-1);function uE(e,t,n,s){if(e===t&&n===s)return td;const o=new Float32Array(Ao);for(let i=0;i<Ao;++i)o[i]=Wo(i*go,e,n);function l(i){let a=0,c=1;const u=Ao-1;for(;c!==u&&o[c]<=i;++c)a+=go;--c;const f=(i-o[c])/(o[c+1]-o[c]),p=a+f*go,d=fd(p,e,n);return d>=aE?cE(i,p,e,n):d===0?p:lE(i,a,a+go,e,n)}return i=>i===0||i===1?i:Wo(l(i),t,s)}const Or={};class fE{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,s){if(!!this.subscriptions.size)for(const o of this.subscriptions)o(t,n,s)}clear(){this.subscriptions.clear()}}const hc=e=>!isNaN(parseFloat(e));class dE{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new fE,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:s,timestamp:o}=Rf();this.lastUpdated!==o&&(this.timeDelta=s,this.lastUpdated=o),yl.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>yl.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=hc(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=hc(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?id(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:s}=t(n);this.stopAnimation=s}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function pE(e){return new dE(e)}const{isArray:hE}=Array;function mE(){const e=z({}),t=s=>{const o=l=>{!e.value[l]||(e.value[l].stop(),e.value[l].destroy(),vm(e.value,l))};s?hE(s)?s.forEach(o):o(s):Object.keys(e.value).forEach(o)},n=(s,o,l)=>{if(e.value[s])return e.value[s];const i=pE(o);return i.onChange(a=>{rt(l,s,a)}),rt(e.value,s,i),i};return ai(t),{motionValues:e,get:n,stop:t}}const gE=e=>Array.isArray(e),bn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Cr=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),bE=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Pr=()=>({type:"keyframes",ease:"linear",duration:300}),_E=e=>({type:"keyframes",duration:800,values:e}),mc={default:bE,x:bn,y:bn,z:bn,rotate:bn,rotateX:bn,rotateY:bn,rotateZ:bn,scaleX:Cr,scaleY:Cr,scale:Cr,backgroundColor:Pr,color:Pr,opacity:Pr},dd=(e,t)=>{let n;return gE(t)?n=_E:n=mc[e]||mc.default,{to:t,...n(t)}},gc={...oo,transform:Math.round},pd={color:ot,backgroundColor:ot,outlineColor:ot,fill:ot,stroke:ot,borderColor:ot,borderTopColor:ot,borderRightColor:ot,borderBottomColor:ot,borderLeftColor:ot,borderWidth:ie,borderTopWidth:ie,borderRightWidth:ie,borderBottomWidth:ie,borderLeftWidth:ie,borderRadius:ie,radius:ie,borderTopLeftRadius:ie,borderTopRightRadius:ie,borderBottomRightRadius:ie,borderBottomLeftRadius:ie,width:ie,maxWidth:ie,height:ie,maxHeight:ie,size:ie,top:ie,right:ie,bottom:ie,left:ie,padding:ie,paddingTop:ie,paddingRight:ie,paddingBottom:ie,paddingLeft:ie,margin:ie,marginTop:ie,marginRight:ie,marginBottom:ie,marginLeft:ie,rotate:gn,rotateX:gn,rotateY:gn,rotateZ:gn,scale:mo,scaleX:mo,scaleY:mo,scaleZ:mo,skew:gn,skewX:gn,skewY:gn,distance:ie,translateX:ie,translateY:ie,translateZ:ie,x:ie,y:ie,z:ie,perspective:ie,transformPerspective:ie,opacity:Rs,originX:cc,originY:cc,originZ:ie,zIndex:gc,filter:Sl,WebkitFilter:Sl,fillOpacity:Rs,strokeOpacity:Rs,numOctaves:gc},gi=e=>pd[e],hd=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function yE(e,t){let n=gi(e);return n!==Sl&&(n=ro),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const vE={linear:td,easeIn:hi,easeInOut:nd,easeOut:WA,circIn:sd,circInOut:jA,circOut:od,backIn:mi,backInOut:HA,backOut:BA,anticipate:VA,bounceIn:qA,bounceInOut:KA,bounceOut:No},bc=e=>{if(Array.isArray(e)){const[t,n,s,o]=e;return uE(t,n,s,o)}else if(typeof e=="string")return vE[e];return e},wE=e=>Array.isArray(e)&&typeof e[0]!="number",_c=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&ro.test(t)&&!t.startsWith("url("));function xE(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function kE({ease:e,times:t,delay:n,...s}){const o={...s};return t&&(o.offset=t),e&&(o.ease=wE(e)?e.map(bc):bc(e)),n&&(o.elapsed=-n),o}function SE(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),xE(t),AE(e)||(e={...e,...dd(n,t.to)}),{...t,...kE(e)}}function AE({delay:e,repeat:t,repeatType:n,repeatDelay:s,from:o,...l}){return!!Object.keys(l).length}function EE(e,t){return e[t]||e.default||e}function $E(e,t,n,s,o){const l=EE(s,e);let i=l.from===null||l.from===void 0?t.get():l.from;const a=_c(e,n);i==="none"&&a&&typeof n=="string"&&(i=yE(e,n));const c=_c(e,i);function u(p){const d={from:i,to:n,velocity:s.velocity?s.velocity:t.getVelocity(),onUpdate:h=>t.set(h)};return l.type==="inertia"||l.type==="decay"?sE({...d,...l}):ld({...SE(l,d,e),onUpdate:h=>{d.onUpdate(h),l.onUpdate&&l.onUpdate(h)},onComplete:()=>{s.onComplete&&s.onComplete(),o&&o(),p&&p()}})}function f(p){return t.set(n),s.onComplete&&s.onComplete(),o&&o(),p&&p(),{stop:()=>{}}}return!c||!a||l.type===!1?f:u}function OE(){const{motionValues:e,stop:t,get:n}=mE();return{motionValues:e,stop:t,push:(o,l,i,a={},c)=>{const u=i[o],f=n(o,u,i);if(a&&a.immediate){f.set(l);return}const p=$E(o,f,l,a,c);f.start(p)}}}function CE(e,t={},{motionValues:n,push:s,stop:o}=OE()){const l=w(t),i=z(!1),a=ce(n,d=>{i.value=Object.values(d).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0}),c=d=>{if(!l||!l[d])throw new Error(`The variant ${d} does not exist.`);return l[d]},u=d=>(typeof d=="string"&&(d=c(d)),Promise.all(Object.entries(d).map(([h,m])=>{if(h!=="transition")return new Promise(v=>{s(h,m,e,d.transition||dd(h,d[h]),v)})}).filter(Boolean)));return{isAnimating:i,apply:u,set:d=>{const h=hl(d)?d:c(d);Object.entries(h).forEach(([m,v])=>{m!=="transition"&&s(m,v,e,{immediate:!0})})},stopTransitions:()=>{a(),o()},leave:async d=>{let h;if(l&&(l.leave&&(h=l.leave),!l.leave&&l.initial&&(h=l.initial)),!h){d();return}await u(h),d()}}}const bi=typeof window<"u",PE=()=>bi&&window.onpointerdown===null,ME=()=>bi&&window.ontouchstart===null,TE=()=>bi&&window.onmousedown===null;function FE({target:e,state:t,variants:n,apply:s}){const o=w(n),l=[],i=(...m)=>{const v=QS.apply(null,m);return l.push(v),v},a=z(!1),c=z(!1),u=z(!1),f=O(()=>{let m=[];return o&&(o.hovered&&(m=[...m,...Object.keys(o.hovered)]),o.tapped&&(m=[...m,...Object.keys(o.tapped)]),o.focused&&(m=[...m,...Object.keys(o.focused)])),m}),p=O(()=>{const m={};Object.assign(m,t.value),a.value&&o.hovered&&Object.assign(m,o.hovered),c.value&&o.tapped&&Object.assign(m,o.tapped),u.value&&o.focused&&Object.assign(m,o.focused);for(const v in m)f.value.includes(v)||delete m[v];return m});o.hovered&&(i(e,"mouseenter",()=>{a.value=!0}),i(e,"mouseleave",()=>{a.value=!1,c.value=!1}),i(e,"mouseout",()=>{a.value=!1,c.value=!1})),o.tapped&&(TE()&&(i(e,"mousedown",()=>{c.value=!0}),i(e,"mouseup",()=>{c.value=!1})),PE()&&(i(e,"pointerdown",()=>{c.value=!0}),i(e,"pointerup",()=>{c.value=!1})),ME()&&(i(e,"touchstart",()=>{c.value=!0}),i(e,"touchend",()=>{c.value=!1}))),o.focused&&(i(e,"focus",()=>{u.value=!0}),i(e,"blur",()=>{u.value=!1}));const d=ce(p,s);return{stop:()=>{l.forEach(m=>m()),d()}}}function IE({set:e,target:t,variants:n,variant:s}){const o=w(n);return{stop:ce(()=>t,()=>{!o||(o.initial&&e("initial"),o.enter&&(s.value="enter"))},{immediate:!0,flush:"pre"})}}function LE({state:e,apply:t}){return{stop:ce(e,s=>{s&&t(s)},{immediate:!0})}}function DE({target:e,variants:t,variant:n}){const s=w(t);let o=Mn;if(s&&(s.visible||s.visibleOnce)){const{stop:l}=JS(e,([{isIntersecting:i}])=>{s.visible?i?n.value="visible":n.value="initial":s.visibleOnce&&(i?n.value!=="visibleOnce"&&(n.value="visibleOnce"):n.value||(n.value="initial"))});o=l}return{stop:o}}function RE(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){const n=z([]);if(t.lifeCycleHooks){const{stop:o}=IE(e);n.value.push(o)}if(t.syncVariants){const{stop:o}=LE(e);n.value.push(o)}if(t.visibilityHooks){const{stop:o}=DE(e);n.value.push(o)}if(t.eventListeners){const{stop:o}=FE(e);n.value.push(o)}const s=()=>n.value.forEach(o=>o());return ai(s),{stop:s}}function md(e={}){const t=Le({...e}),n=z({});return ce(t,()=>{const s={};for(const[o,l]of Object.entries(t)){const i=gi(o),a=hd(l,i);s[o]=a}n.value=s},{immediate:!0,deep:!0}),{state:t,style:n}}const NE=["","X","Y","Z"],WE=["perspective","translate","scale","rotate","skew"],gd=["transformPerspective","x","y","z"];WE.forEach(e=>{NE.forEach(t=>{const n=e+t;gd.push(n)})});const jE=new Set(gd);function _i(e){return jE.has(e)}const BE=new Set(["originX","originY","originZ"]);function bd(e){return BE.has(e)}function HE(e){const t={},n={};return Object.entries(e).forEach(([s,o])=>{_i(s)||bd(s)?t[s]=o:n[s]=o}),{transform:t,style:n}}function VE(e,t){let n,s;const{state:o,style:l}=md(),i=ce(()=>Dn(e),u=>{if(!!u){s=u;for(const f of Object.keys(pd))u.style[f]===null||u.style[f]===""||_i(f)||bd(f)||rt(o,f,u.style[f]);n&&Object.entries(n).forEach(([f,p])=>rt(u.style,f,p)),t&&t(o)}},{immediate:!0}),a=ce(l,u=>{if(!s){n=u;return}for(const f in u)rt(s.style,f,u[f])},{immediate:!0});return{style:o,stop:()=>{s=void 0,n=void 0,i(),a()}}}const zE={x:"translateX",y:"translateY",z:"translateZ"};function _d(e={},t=!0){const n=Le({...e}),s=z("");return ce(n,o=>{let l="",i=!1;t&&(o.x||o.y||o.z)&&(l+=`translate3d(${[o.x||0,o.y||0,o.z||0].map(ie.transform).join(",")}) `,i=!0);for(const[a,c]of Object.entries(o)){if(t&&(a==="x"||a==="y"||a==="z"))continue;const u=gi(a),f=hd(c,u);l+=`${zE[a]||a}(${f}) `}t&&!i&&(l+="translateZ(0px) "),s.value=l.trim()},{immediate:!0,deep:!0}),{state:n,transform:s}}function GE(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=s=>s.endsWith("px")||s.endsWith("deg")?parseFloat(s):isNaN(Number(s))?Number(s):s;return t.reduce((s,o)=>{if(!o)return s;const[l,i]=o.split("("),c=i.split(",").map(f=>n(f.endsWith(")")?f.replace(")",""):f.trim())),u=c.length===1?c[0]:c;return{...s,[l]:u}},{})}function UE(e,t){Object.entries(GE(t)).forEach(([n,s])=>{s=parseFloat(s);const o=["x","y","z"];if(n==="translate3d"){if(s===0){o.forEach(l=>{rt(e,l,0)});return}s.forEach((l,i)=>{rt(e,o[i],l)});return}if(n==="translateX"){rt(e,"x",s);return}if(n==="translateY"){rt(e,"y",s);return}if(n==="translateZ"){rt(e,"z",s);return}rt(e,n,s)})}function qE(e,t){let n,s;const{state:o,transform:l}=_d(),i=ce(()=>Dn(e),u=>{!u||(s=u,u.style.transform&&UE(o,u.style.transform),n&&(u.style.transform=n),t&&t(o))},{immediate:!0}),a=ce(l,u=>{if(!s){n=u;return}s.style.transform=u},{immediate:!0});return{transform:o,stop:()=>{n=void 0,s=void 0,i(),a()}}}function KE(e,t){const n=Le({}),s=p=>{Object.entries(p).forEach(([d,h])=>{rt(n,d,h)})},{style:o,stop:l}=VE(e,s),{transform:i,stop:a}=qE(e,s),c=ce(n,p=>{Object.entries(p).forEach(([d,h])=>{const m=_i(d)?i:o;m[d]&&m[d]===h||rt(m,d,h)})},{immediate:!0,deep:!0}),u=ce(()=>Dn(e),p=>{!p||t&&s(t)},{immediate:!0});return{motionProperties:n,style:o,transform:i,stop:()=>{l(),a(),c(),u()}}}function YE(e={}){const t=w(e),n=z();return{state:O(()=>{if(!!n.value)return t[n.value]}),variant:n}}function ZE(e,t={},n){const{motionProperties:s,stop:o}=KE(e),{variant:l,state:i}=YE(t),a=CE(s,t),c={target:e,variant:l,variants:t,state:i,motionProperties:s,...a,stop:(f=!1)=>{}},{stop:u}=RE(c,n);return c.stop=(f=!1)=>{const p=()=>{c.stopTransitions(),o(),u()};if(!f&&t.value&&t.value.leave){const d=ce(c.isAnimating,h=>{h||(d(),p())})}else p()},ai(()=>c.stop()),ZS(()=>Dn(e),f=>{!f||f!=null&&f.motionInstance&&(c.stop(),Object.assign(c,f.motionInstance))}),c}const QE=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],JE=(e,t)=>{const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&hl(n.variants)&&(t.value={...t.value,...n.variants}),QE.forEach(s=>{if(s==="delay"){if(n&&n[s]&&KS(n[s])){const o=n[s];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={...t.value.enter.transition,delay:o}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={...t.value.visible.transition,delay:o}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={...t.value.visibleOnce.transition,delay:o}))}return}s==="visible-once"&&(s="visibleOnce"),n&&n[s]&&hl(n[s])&&(t.value[s]=n[s])}))},Mr=e=>{const t=(s,o,l)=>{const i=o.value&&typeof o.value=="string"?o.value:l.key;i&&Or[i]&&Or[i].stop();const a=z(e||{});typeof o.value=="object"&&(a.value=o.value),JE(l,a);const c=ZE(s,a);s.motionInstance=c,i&&rt(Or,i,c)},n=s=>{s.motionInstance&&s.motionInstance.stop()};return{created:t,unmounted:n,bind:t,unbind:n,getSSRProps(s,o){const{initial:l}=s.value||o&&o.props||{},i=US((e==null?void 0:e.initial)||{},l||{});if(!i||Object.keys(i).length===0)return;const{transform:a,style:c}=HE(i),{transform:u}=_d(a),{style:f}=md(c);return u.value&&(f.value.transform=u.value),{style:f.value}}}},XE={initial:{opacity:0},enter:{opacity:1}},e5={initial:{opacity:0},visible:{opacity:1}},t5={initial:{opacity:0},visibleOnce:{opacity:1}},n5={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},s5={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},o5={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},r5={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},l5={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},i5={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},a5={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},c5={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},u5={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},f5={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},d5={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},p5={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},h5={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},m5={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},g5={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},b5={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},_5={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},y5={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},v5={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},w5={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},x5={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},k5={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},S5={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},A5={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},E5={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},$5={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},O5={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},yc={__proto__:null,fade:XE,fadeVisible:e5,fadeVisibleOnce:t5,pop:n5,popVisible:s5,popVisibleOnce:o5,rollBottom:h5,rollLeft:r5,rollRight:a5,rollTop:f5,rollVisibleBottom:m5,rollVisibleLeft:l5,rollVisibleRight:c5,rollVisibleTop:d5,rollVisibleOnceBottom:g5,rollVisibleOnceLeft:i5,rollVisibleOnceRight:u5,rollVisibleOnceTop:p5,slideBottom:E5,slideLeft:b5,slideRight:v5,slideTop:k5,slideVisibleBottom:$5,slideVisibleLeft:_5,slideVisibleRight:w5,slideVisibleTop:S5,slideVisibleOnceBottom:O5,slideVisibleOnceLeft:y5,slideVisibleOnceRight:x5,slideVisibleOnceTop:A5};function C5(e){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",s=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,o=>`-${o}`).toLowerCase().replace(/\s+/g,"-").replace(s,o=>n.charAt(t.indexOf(o))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const P5={install(e,t){if(e.directive("motion",Mr()),!t||t&&!t.excludePresets)for(const n in yc){const s=yc[n];e.directive(`motion-${C5(n)}`,Mr(s))}if(t&&t.directives)for(const n in t.directives){const s=t.directives[n];s.initial,e.directive(`motion-${n}`,Mr(s))}}};var vc;const Ws=typeof window<"u",M5=Object.prototype.toString,T5=e=>M5.call(e)==="[object Object]";Ws&&((vc=window==null?void 0:window.navigator)==null?void 0:vc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function F5(e){return Tl()?(Fl(e),!0):!1}function I5(e){var t;const n=w(e);return(t=n==null?void 0:n.$el)!=null?t:n}const L5=Ws?window:void 0,Al=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},El="__vueuse_ssr_handlers__";Al[El]=Al[El]||{};Al[El];function D5(e,t={}){const{immediate:n=!0,window:s=L5}=t,o=z(!1);let l=null;function i(){!o.value||!s||(e(),l=s.requestAnimationFrame(i))}function a(){!o.value&&s&&(o.value=!0,i())}function c(){o.value=!1,l!=null&&s&&(s.cancelAnimationFrame(l),l=null)}return n&&a(),F5(c),{isActive:o,pause:c,resume:a}}var wc;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(wc||(wc={}));const yi="vue-starport-injection",yd="vue-starport-options",R5={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},vd={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var N5=Object.defineProperty,jo=Object.getOwnPropertySymbols,wd=Object.prototype.hasOwnProperty,xd=Object.prototype.propertyIsEnumerable,xc=(e,t,n)=>t in e?N5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,W5=(e,t)=>{for(var n in t||(t={}))wd.call(t,n)&&xc(e,n,t[n]);if(jo)for(var n of jo(t))xd.call(t,n)&&xc(e,n,t[n]);return e},kc=(e,t)=>{var n={};for(var s in e)wd.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&jo)for(var s of jo(e))t.indexOf(s)<0&&xd.call(e,s)&&(n[s]=e[s]);return n};const j5=ke({name:"StarportProxy",props:W5({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},vd),setup(e,t){const n=W(yi),s=O(()=>n.getInstance(e.port,e.component)),o=z(),l=s.value.generateId(),i=z(!1);return s.value.isVisible||(s.value.land(),i.value=!0),us(async()=>{s.value.el||(s.value.el=o.value,await Ge(),i.value=!0,s.value.rect.update())}),Jo(async()=>{s.value.rect.update(),s.value.liftOff(),s.value.el=void 0,i.value=!1,!s.value.options.keepAlive&&(await Ge(),await Ge(),!s.value.el&&n.dispose(s.value.port))}),ce(()=>e,async()=>{s.value.props&&await Ge();const a=e,{props:c}=a,u=kc(a,["props"]);s.value.props=c||{},s.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const a=e,{initialProps:c,mountedProps:u}=a,f=kc(a,["initialProps","mountedProps"]),p=Ln(f,(i.value?u:c)||{});return ht("div",Ln(p,{id:l,ref:o,"data-starport-proxy":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true"}),t.slots.default?ht(t.slots.default):void 0)}}});var B5=Object.defineProperty,H5=Object.defineProperties,V5=Object.getOwnPropertyDescriptors,Sc=Object.getOwnPropertySymbols,z5=Object.prototype.hasOwnProperty,G5=Object.prototype.propertyIsEnumerable,Ac=(e,t,n)=>t in e?B5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,U5=(e,t)=>{for(var n in t||(t={}))z5.call(t,n)&&Ac(e,n,t[n]);if(Sc)for(var n of Sc(t))G5.call(t,n)&&Ac(e,n,t[n]);return e},q5=(e,t)=>H5(e,V5(t));const K5=ke({name:"Starport",inheritAttrs:!0,props:vd,setup(e,t){const n=z(!1);return us(()=>{n.value=!0}),()=>{var i,a;const s=(a=(i=t.slots).default)==null?void 0:a.call(i);if(!s)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(s.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${s.length}`);const o=s[0];let l=o.type;return(!T5(l)||Fn(l))&&(l={render(){return s}}),ht(j5,q5(U5({},e),{key:e.port,component:Uo(l),props:o.props}))}}});function Y5(e){const t=Le({height:0,width:0,left:0,top:0,update:s,listen:l,pause:i,margin:"0px",padding:"0px"}),n=Ws?document.documentElement||document.body:void 0;function s(){if(!Ws)return;const a=I5(e);if(!a)return;const{height:c,width:u,left:f,top:p}=a.getBoundingClientRect(),d=window.getComputedStyle(a),h=d.margin,m=d.padding;Object.assign(t,{height:c,width:u,left:f,top:n.scrollTop+p,margin:h,padding:m})}const o=D5(s,{immediate:!1});function l(){!Ws||(s(),o.resume())}function i(){o.pause()}return t}let Z5=(e,t=21)=>(n=t)=>{let s="",o=n;for(;o--;)s+=e[Math.random()*e.length|0];return s};const Ec=Z5("abcdefghijklmnopqrstuvwxyz",5);function $c(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function Q5(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var J5=Object.defineProperty,Oc=Object.getOwnPropertySymbols,X5=Object.prototype.hasOwnProperty,e3=Object.prototype.propertyIsEnumerable,Cc=(e,t,n)=>t in e?J5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Tr=(e,t)=>{for(var n in t||(t={}))X5.call(t,n)&&Cc(e,n,t[n]);if(Oc)for(var n of Oc(t))e3.call(t,n)&&Cc(e,n,t[n]);return e};function t3(e,t,n={}){const s=Q5(t),o=$c(s)||Ec(),l=z(),i=z(null),a=z(!1),c=z(!1),u=Ld(!0),f=z({}),p=O(()=>Tr(Tr(Tr({},R5),n),f.value)),d=z(0);let h;u.run(()=>{h=Y5(l),ce(l,async E=>{E&&(c.value=!0),await Ge(),l.value||(c.value=!1)})});const m=$c(e);function v(){return`starport-${o}-${m}-${Ec()}`}const y=v();return Le({el:l,id:y,port:e,props:i,rect:h,scope:u,isLanded:a,isVisible:c,options:p,liftOffTime:d,component:t,componentName:s,componentId:o,generateId:v,setLocalOptions(E={}){f.value=JSON.parse(JSON.stringify(E))},elRef(){return l},liftOff(){!a.value||(a.value=!1,d.value=Date.now(),h.listen())},land(){a.value||(a.value=!0,h.pause())}})}function n3(e){const t=Le(new Map);function n(o,l){let i=t.get(o);return i||(i=t3(o,l,e),t.set(o,i)),i.component=l,i}function s(o){var l;(l=t.get(o))==null||l.scope.stop(),t.delete(o)}return{portMap:t,dispose:s,getInstance:n}}var s3=Object.defineProperty,o3=Object.defineProperties,r3=Object.getOwnPropertyDescriptors,Pc=Object.getOwnPropertySymbols,l3=Object.prototype.hasOwnProperty,i3=Object.prototype.propertyIsEnumerable,Mc=(e,t,n)=>t in e?s3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,a3=(e,t)=>{for(var n in t||(t={}))l3.call(t,n)&&Mc(e,n,t[n]);if(Pc)for(var n of Pc(t))i3.call(t,n)&&Mc(e,n,t[n]);return e},c3=(e,t)=>o3(e,r3(t));const u3=ke({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=W(yi);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=O(()=>t.getInstance(e.port,e.component)),s=O(()=>{var i;return((i=n.value.el)==null?void 0:i.id)||n.value.id}),o=O(()=>{const i=Date.now()-n.value.liftOffTime,a=Math.max(0,n.value.options.duration-i),c=n.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!n.value.isVisible||!n.value.el?c3(a3({},u),{zIndex:-1,display:"none"}):(n.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${a}ms`,transitionTimingFunction:n.value.options.easing}),u)}),l={};return()=>{const i=!!(n.value.isLanded&&n.value.el);return ht("div",{style:o.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},ht(lh,{to:i?`#${s.value}`:"body",disabled:!i},ht(n.value.component,Ln(l,n.value.props))))}}}),f3=ke({name:"StarportCarrier",setup(e,{slots:t}){const n=n3(W(yd,{}));return Nn().appContext.app.provide(yi,n),()=>{var o;return[(o=t.default)==null?void 0:o.call(t),Array.from(n.portMap.entries()).map(([l,{component:i}])=>ht(u3,{key:l,port:l,component:i}))]}}});function d3(e={}){return{install(t){t.provide(yd,e),t.component("Starport",K5),t.component("StarportCarrier",f3)}}}function p3(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(P5),e.app.use(d3({keepAlive:!0}))}function at(e,t,n){var s,o;return(o=((s=e.instance)==null?void 0:s.$).provides[t])!=null?o:n}function h3(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var f,p,d,h;if(Ls.value||((f=at(n,Ms))==null?void 0:f.value))return;const s=at(n,wn),o=at(n,Ps),l=at(n,Qr),i=n.modifiers.hide!==!1&&n.modifiers.hide!=null,a=n.modifiers.fade!==!1&&n.modifiers.fade!=null,c=((p=s==null?void 0:s.value)==null?void 0:p.length)||0,u=a?rm:hr;if(s&&!((d=s==null?void 0:s.value)!=null&&d.includes(t))&&s.value.push(t),n.value===null&&(n.value=s==null?void 0:s.value.length),!(l!=null&&l.value.has(n.value)))l==null||l.value.set(n.value,[t]);else if(!((h=l==null?void 0:l.value.get(n.value))!=null&&h.includes(t))){const m=(l==null?void 0:l.value.get(n.value))||[];l==null||l.value.set(n.value,[t].concat(m))}t==null||t.classList.toggle(yn,!0),o&&ce(o,()=>{var E;const m=(E=o==null?void 0:o.value)!=null?E:0,v=n.value!=null?m>=n.value:m>c;t.classList.contains(mr)||t.classList.toggle(u,!v),i!==!1&&i!==void 0&&t.classList.toggle(u,v),t.classList.toggle(bs,!1);const y=l==null?void 0:l.value.get(m);y==null||y.forEach((A,S)=>{A.classList.toggle(po,!1),S===y.length-1?A.classList.toggle(bs,!0):A.classList.toggle(po,!0)}),t.classList.contains(bs)||t.classList.toggle(po,v)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(yn,!1);const s=at(n,wn);s!=null&&s.value&&Jr(s.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var a,c;if(Ls.value||((a=at(n,Ms))==null?void 0:a.value))return;const s=at(n,wn),o=at(n,Ps),l=at(n,Qr),i=s==null?void 0:s.value.length;n.value===void 0&&(n.value=s==null?void 0:s.value.length),l!=null&&l.value.has(n.value)?(c=l==null?void 0:l.value.get(n.value))==null||c.push(t):l==null||l.value.set(n.value,[t]),t==null||t.classList.toggle(yn,!0),o&&ce(o,()=>{var f,p,d;const u=((f=o.value)!=null?f:0)>=((d=(p=n.value)!=null?p:i)!=null?d:0);t.classList.contains(mr)||t.classList.toggle(hr,!u),t.classList.toggle(bs,!1),t.classList.contains(bs)||t.classList.toggle(po,u)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(yn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var i,a,c;if(Ls.value||((i=at(n,Ms))==null?void 0:i.value))return;const s=at(n,wn),o=at(n,Ps),l=((a=s==null?void 0:s.value)==null?void 0:a.length)||0;s&&!((c=s==null?void 0:s.value)!=null&&c.includes(t))&&s.value.push(t),t==null||t.classList.toggle(yn,!0),o&&ce(o,()=>{var p;const u=(p=o==null?void 0:o.value)!=null?p:0,f=n.value!=null?u>=n.value:u>l;t.classList.toggle(hr,f),t.classList.toggle(mr,f)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(yn,!1);const s=at(n,wn);s!=null&&s.value&&Jr(s.value,t)}})}}}function m3(e,t){const n=_f(e),s=yf(t,n.currentRoute,n.currentPage);return{nav:{...n,...s,downloadPDF:dl,next:cn,nextSlide:Zs,openInEditor:HS,prev:un,prevSlide:Qs},configs:we,themeConfigs:O(()=>we.themeConfig)}}function g3(){return{install(e){const t=m3(Zt,Pt);e.provide(q,Le(t))}}}const ps=Bh(zS);ps.use(gt);ps.use(em());ps.use(h3());ps.use(g3());p3({app:ps,router:gt});ps.mount("#app");export{xs as $,pe as A,Se as B,Je as C,Z_ as D,b3 as E,Ee as F,_3 as G,Pt as H,Ro as I,RS as J,kr as K,gr as L,qs as M,wr as N,Du as O,tv as P,Xl as Q,Jy as R,ei as S,Be as T,Pf as U,r0 as V,mf as W,It as X,y3 as Y,Ht as Z,pf as _,r as a,ho as a0,to as a1,An as a2,jt as a3,al as a4,$_ as a5,O_ as a6,C_ as a7,M_ as a8,wt as a9,Mu as aa,k3 as ab,et as ac,W0 as ad,Iu as ae,T_ as af,Jo as ag,q_ as ah,O as b,V as c,ke as d,q as e,ft as f,U as g,w as h,W as i,j_ as j,BS as k,we as l,nm as m,De as n,x as o,us as p,Le as q,z as r,v3 as s,Tn as t,w3 as u,x3 as v,ce as w,F as x,Ye as y,B as z};
