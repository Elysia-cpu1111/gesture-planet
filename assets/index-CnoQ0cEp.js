(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function x2(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lh={exports:{}},Hl={},Dh={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv;function FS(){if(rv)return Mt;rv=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function x(N,j,Ce){this.props=N,this.context=j,this.refs=w,this.updater=Ce||S}x.prototype.isReactComponent={},x.prototype.setState=function(N,j){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,j,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function v(){}v.prototype=x.prototype;function D(N,j,Ce){this.props=N,this.context=j,this.refs=w,this.updater=Ce||S}var L=D.prototype=new v;L.constructor=D,E(L,x.prototype),L.isPureReactComponent=!0;var R=Array.isArray,q=Object.prototype.hasOwnProperty,B={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function G(N,j,Ce){var K,fe={},ve=null,he=null;if(j!=null)for(K in j.ref!==void 0&&(he=j.ref),j.key!==void 0&&(ve=""+j.key),j)q.call(j,K)&&!F.hasOwnProperty(K)&&(fe[K]=j[K]);var _e=arguments.length-2;if(_e===1)fe.children=Ce;else if(1<_e){for(var we=Array(_e),Ge=0;Ge<_e;Ge++)we[Ge]=arguments[Ge+2];fe.children=we}if(N&&N.defaultProps)for(K in _e=N.defaultProps,_e)fe[K]===void 0&&(fe[K]=_e[K]);return{$$typeof:t,type:N,key:ve,ref:he,props:fe,_owner:B.current}}function b(N,j){return{$$typeof:t,type:N.type,key:j,ref:N.ref,props:N.props,_owner:N._owner}}function C(N){return typeof N=="object"&&N!==null&&N.$$typeof===t}function z(N){var j={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Ce){return j[Ce]})}var le=/\/+/g;function J(N,j){return typeof N=="object"&&N!==null&&N.key!=null?z(""+N.key):j.toString(36)}function de(N,j,Ce,K,fe){var ve=typeof N;(ve==="undefined"||ve==="boolean")&&(N=null);var he=!1;if(N===null)he=!0;else switch(ve){case"string":case"number":he=!0;break;case"object":switch(N.$$typeof){case t:case e:he=!0}}if(he)return he=N,fe=fe(he),N=K===""?"."+J(he,0):K,R(fe)?(Ce="",N!=null&&(Ce=N.replace(le,"$&/")+"/"),de(fe,j,Ce,"",function(Ge){return Ge})):fe!=null&&(C(fe)&&(fe=b(fe,Ce+(!fe.key||he&&he.key===fe.key?"":(""+fe.key).replace(le,"$&/")+"/")+N)),j.push(fe)),1;if(he=0,K=K===""?".":K+":",R(N))for(var _e=0;_e<N.length;_e++){ve=N[_e];var we=K+J(ve,_e);he+=de(ve,j,Ce,we,fe)}else if(we=y(N),typeof we=="function")for(N=we.call(N),_e=0;!(ve=N.next()).done;)ve=ve.value,we=K+J(ve,_e++),he+=de(ve,j,Ce,we,fe);else if(ve==="object")throw j=String(N),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return he}function pe(N,j,Ce){if(N==null)return N;var K=[],fe=0;return de(N,K,"","",function(ve){return j.call(Ce,ve,fe++)}),K}function se(N){if(N._status===-1){var j=N._result;j=j(),j.then(function(Ce){(N._status===0||N._status===-1)&&(N._status=1,N._result=Ce)},function(Ce){(N._status===0||N._status===-1)&&(N._status=2,N._result=Ce)}),N._status===-1&&(N._status=0,N._result=j)}if(N._status===1)return N._result.default;throw N._result}var ue={current:null},k={transition:null},ae={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:k,ReactCurrentOwner:B};function Q(){throw Error("act(...) is not supported in production builds of React.")}return Mt.Children={map:pe,forEach:function(N,j,Ce){pe(N,function(){j.apply(this,arguments)},Ce)},count:function(N){var j=0;return pe(N,function(){j++}),j},toArray:function(N){return pe(N,function(j){return j})||[]},only:function(N){if(!C(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},Mt.Component=x,Mt.Fragment=n,Mt.Profiler=o,Mt.PureComponent=D,Mt.StrictMode=r,Mt.Suspense=d,Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,Mt.act=Q,Mt.cloneElement=function(N,j,Ce){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var K=E({},N.props),fe=N.key,ve=N.ref,he=N._owner;if(j!=null){if(j.ref!==void 0&&(ve=j.ref,he=B.current),j.key!==void 0&&(fe=""+j.key),N.type&&N.type.defaultProps)var _e=N.type.defaultProps;for(we in j)q.call(j,we)&&!F.hasOwnProperty(we)&&(K[we]=j[we]===void 0&&_e!==void 0?_e[we]:j[we])}var we=arguments.length-2;if(we===1)K.children=Ce;else if(1<we){_e=Array(we);for(var Ge=0;Ge<we;Ge++)_e[Ge]=arguments[Ge+2];K.children=_e}return{$$typeof:t,type:N.type,key:fe,ref:ve,props:K,_owner:he}},Mt.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},Mt.createElement=G,Mt.createFactory=function(N){var j=G.bind(null,N);return j.type=N,j},Mt.createRef=function(){return{current:null}},Mt.forwardRef=function(N){return{$$typeof:f,render:N}},Mt.isValidElement=C,Mt.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:se}},Mt.memo=function(N,j){return{$$typeof:p,type:N,compare:j===void 0?null:j}},Mt.startTransition=function(N){var j=k.transition;k.transition={};try{N()}finally{k.transition=j}},Mt.unstable_act=Q,Mt.useCallback=function(N,j){return ue.current.useCallback(N,j)},Mt.useContext=function(N){return ue.current.useContext(N)},Mt.useDebugValue=function(){},Mt.useDeferredValue=function(N){return ue.current.useDeferredValue(N)},Mt.useEffect=function(N,j){return ue.current.useEffect(N,j)},Mt.useId=function(){return ue.current.useId()},Mt.useImperativeHandle=function(N,j,Ce){return ue.current.useImperativeHandle(N,j,Ce)},Mt.useInsertionEffect=function(N,j){return ue.current.useInsertionEffect(N,j)},Mt.useLayoutEffect=function(N,j){return ue.current.useLayoutEffect(N,j)},Mt.useMemo=function(N,j){return ue.current.useMemo(N,j)},Mt.useReducer=function(N,j,Ce){return ue.current.useReducer(N,j,Ce)},Mt.useRef=function(N){return ue.current.useRef(N)},Mt.useState=function(N){return ue.current.useState(N)},Mt.useSyncExternalStore=function(N,j,Ce){return ue.current.useSyncExternalStore(N,j,Ce)},Mt.useTransition=function(){return ue.current.useTransition()},Mt.version="18.3.1",Mt}var sv;function Pm(){return sv||(sv=1,Dh.exports=FS()),Dh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov;function OS(){if(ov)return Hl;ov=1;var t=Pm(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,p){var g,_={},y=null,S=null;p!==void 0&&(y=""+p),d.key!==void 0&&(y=""+d.key),d.ref!==void 0&&(S=d.ref);for(g in d)r.call(d,g)&&!l.hasOwnProperty(g)&&(_[g]=d[g]);if(f&&f.defaultProps)for(g in d=f.defaultProps,d)_[g]===void 0&&(_[g]=d[g]);return{$$typeof:e,type:f,key:y,ref:S,props:_,_owner:o.current}}return Hl.Fragment=n,Hl.jsx=c,Hl.jsxs=c,Hl}var av;function kS(){return av||(av=1,Lh.exports=OS()),Lh.exports}var $e=kS(),qe=Pm();const BS=x2(qe);var Cc={},Ih={exports:{}},ui={},Nh={exports:{}},Uh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv;function zS(){return lv||(lv=1,(function(t){function e(k,ae){var Q=k.length;k.push(ae);e:for(;0<Q;){var N=Q-1>>>1,j=k[N];if(0<o(j,ae))k[N]=ae,k[Q]=j,Q=N;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var ae=k[0],Q=k.pop();if(Q!==ae){k[0]=Q;e:for(var N=0,j=k.length,Ce=j>>>1;N<Ce;){var K=2*(N+1)-1,fe=k[K],ve=K+1,he=k[ve];if(0>o(fe,Q))ve<j&&0>o(he,fe)?(k[N]=he,k[ve]=Q,N=ve):(k[N]=fe,k[K]=Q,N=K);else if(ve<j&&0>o(he,Q))k[N]=he,k[ve]=Q,N=ve;else break e}}return ae}function o(k,ae){var Q=k.sortIndex-ae.sortIndex;return Q!==0?Q:k.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();t.unstable_now=function(){return c.now()-f}}var d=[],p=[],g=1,_=null,y=3,S=!1,E=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(k){for(var ae=n(p);ae!==null;){if(ae.callback===null)r(p);else if(ae.startTime<=k)r(p),ae.sortIndex=ae.expirationTime,e(d,ae);else break;ae=n(p)}}function R(k){if(w=!1,L(k),!E)if(n(d)!==null)E=!0,se(q);else{var ae=n(p);ae!==null&&ue(R,ae.startTime-k)}}function q(k,ae){E=!1,w&&(w=!1,v(G),G=-1),S=!0;var Q=y;try{for(L(ae),_=n(d);_!==null&&(!(_.expirationTime>ae)||k&&!z());){var N=_.callback;if(typeof N=="function"){_.callback=null,y=_.priorityLevel;var j=N(_.expirationTime<=ae);ae=t.unstable_now(),typeof j=="function"?_.callback=j:_===n(d)&&r(d),L(ae)}else r(d);_=n(d)}if(_!==null)var Ce=!0;else{var K=n(p);K!==null&&ue(R,K.startTime-ae),Ce=!1}return Ce}finally{_=null,y=Q,S=!1}}var B=!1,F=null,G=-1,b=5,C=-1;function z(){return!(t.unstable_now()-C<b)}function le(){if(F!==null){var k=t.unstable_now();C=k;var ae=!0;try{ae=F(!0,k)}finally{ae?J():(B=!1,F=null)}}else B=!1}var J;if(typeof D=="function")J=function(){D(le)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,pe=de.port2;de.port1.onmessage=le,J=function(){pe.postMessage(null)}}else J=function(){x(le,0)};function se(k){F=k,B||(B=!0,J())}function ue(k,ae){G=x(function(){k(t.unstable_now())},ae)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){E||S||(E=!0,se(q))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(d)},t.unstable_next=function(k){switch(y){case 1:case 2:case 3:var ae=3;break;default:ae=y}var Q=y;y=ae;try{return k()}finally{y=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,ae){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var Q=y;y=k;try{return ae()}finally{y=Q}},t.unstable_scheduleCallback=function(k,ae,Q){var N=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?N+Q:N):Q=N,k){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=Q+j,k={id:g++,callback:ae,priorityLevel:k,startTime:Q,expirationTime:j,sortIndex:-1},Q>N?(k.sortIndex=Q,e(p,k),n(d)===null&&k===n(p)&&(w?(v(G),G=-1):w=!0,ue(R,Q-N))):(k.sortIndex=j,e(d,k),E||S||(E=!0,se(q))),k},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(k){var ae=y;return function(){var Q=y;y=ae;try{return k.apply(this,arguments)}finally{y=Q}}}})(Uh)),Uh}var uv;function VS(){return uv||(uv=1,Nh.exports=zS()),Nh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function HS(){if(cv)return ui;cv=1;var t=Pm(),e=VS();function n(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(i,s){c(i,s),c(i+"Capture",s)}function c(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function y(i){return d.call(_,i)?!0:d.call(g,i)?!1:p.test(i)?_[i]=!0:(g[i]=!0,!1)}function S(i,s,a,u){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,s,a,u){if(s===null||typeof s>"u"||S(i,s,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function w(i,s,a,u,h,m,M){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=i,this.type=s,this.sanitizeURL=m,this.removeEmptyString=M}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){x[i]=new w(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];x[s]=new w(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){x[i]=new w(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){x[i]=new w(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){x[i]=new w(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){x[i]=new w(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){x[i]=new w(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){x[i]=new w(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){x[i]=new w(i,5,!1,i.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function D(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(v,D);x[s]=new w(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(v,D);x[s]=new w(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(v,D);x[s]=new w(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){x[i]=new w(i,1,!1,i.toLowerCase(),null,!1,!1)}),x.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){x[i]=new w(i,1,!1,i.toLowerCase(),null,!0,!0)});function L(i,s,a,u){var h=x.hasOwnProperty(s)?x[s]:null;(h!==null?h.type!==0:u||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,a,h,u)&&(a=null),u||h===null?y(s)&&(a===null?i.removeAttribute(s):i.setAttribute(s,""+a)):h.mustUseProperty?i[h.propertyName]=a===null?h.type===3?!1:"":a:(s=h.attributeName,u=h.attributeNamespace,a===null?i.removeAttribute(s):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,u?i.setAttributeNS(u,s,a):i.setAttribute(s,a))))}var R=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),B=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),z=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),k=Symbol.iterator;function ae(i){return i===null||typeof i!="object"?null:(i=k&&i[k]||i["@@iterator"],typeof i=="function"?i:null)}var Q=Object.assign,N;function j(i){if(N===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);N=s&&s[1]||""}return`
`+N+i}var Ce=!1;function K(i,s){if(!i||Ce)return"";Ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ee){var u=ee}Reflect.construct(i,[],s)}else{try{s.call()}catch(ee){u=ee}i.call(s.prototype)}else{try{throw Error()}catch(ee){u=ee}i()}}catch(ee){if(ee&&u&&typeof ee.stack=="string"){for(var h=ee.stack.split(`
`),m=u.stack.split(`
`),M=h.length-1,I=m.length-1;1<=M&&0<=I&&h[M]!==m[I];)I--;for(;1<=M&&0<=I;M--,I--)if(h[M]!==m[I]){if(M!==1||I!==1)do if(M--,I--,0>I||h[M]!==m[I]){var O=`
`+h[M].replace(" at new "," at ");return i.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",i.displayName)),O}while(1<=M&&0<=I);break}}}finally{Ce=!1,Error.prepareStackTrace=a}return(i=i?i.displayName||i.name:"")?j(i):""}function fe(i){switch(i.tag){case 5:return j(i.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return i=K(i.type,!1),i;case 11:return i=K(i.type.render,!1),i;case 1:return i=K(i.type,!0),i;default:return""}}function ve(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case F:return"Fragment";case B:return"Portal";case b:return"Profiler";case G:return"StrictMode";case J:return"Suspense";case de:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case z:return(i.displayName||"Context")+".Consumer";case C:return(i._context.displayName||"Context")+".Provider";case le:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case pe:return s=i.displayName||null,s!==null?s:ve(i.type)||"Memo";case se:s=i._payload,i=i._init;try{return ve(i(s))}catch{}}return null}function he(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(s);case 8:return s===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function _e(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function we(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ge(i){var s=we(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),u=""+i[s];if(!i.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,m=a.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return h.call(this)},set:function(M){u=""+M,m.call(this,M)}}),Object.defineProperty(i,s,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function St(i){i._valueTracker||(i._valueTracker=Ge(i))}function ct(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var a=s.getValue(),u="";return i&&(u=we(i)?i.checked?"true":"false":i.value),i=u,i!==a?(s.setValue(i),!0):!1}function Ct(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function H(i,s){var a=s.checked;return Q({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??i._wrapperState.initialChecked})}function cn(i,s){var a=s.defaultValue==null?"":s.defaultValue,u=s.checked!=null?s.checked:s.defaultChecked;a=_e(s.value!=null?s.value:a),i._wrapperState={initialChecked:u,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function mt(i,s){s=s.checked,s!=null&&L(i,"checked",s,!1)}function ft(i,s){mt(i,s);var a=_e(s.value),u=s.type;if(a!=null)u==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+a):i.value!==""+a&&(i.value=""+a);else if(u==="submit"||u==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?wt(i,s.type,a):s.hasOwnProperty("defaultValue")&&wt(i,s.type,_e(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function et(i,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var u=s.type;if(!(u!=="submit"&&u!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,a||s===i.value||(i.value=s),i.defaultValue=s}a=i.name,a!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,a!==""&&(i.name=a)}function wt(i,s,a){(s!=="number"||Ct(i.ownerDocument)!==i)&&(a==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+a&&(i.defaultValue=""+a))}var We=Array.isArray;function P(i,s,a,u){if(i=i.options,s){s={};for(var h=0;h<a.length;h++)s["$"+a[h]]=!0;for(a=0;a<i.length;a++)h=s.hasOwnProperty("$"+i[a].value),i[a].selected!==h&&(i[a].selected=h),h&&u&&(i[a].defaultSelected=!0)}else{for(a=""+_e(a),s=null,h=0;h<i.length;h++){if(i[h].value===a){i[h].selected=!0,u&&(i[h].defaultSelected=!0);return}s!==null||i[h].disabled||(s=i[h])}s!==null&&(s.selected=!0)}}function T(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(n(91));return Q({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function U(i,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(n(92));if(We(a)){if(1<a.length)throw Error(n(93));a=a[0]}s=a}s==null&&(s=""),a=s}i._wrapperState={initialValue:_e(a)}}function ce(i,s){var a=_e(s.value),u=_e(s.defaultValue);a!=null&&(a=""+a,a!==i.value&&(i.value=a),s.defaultValue==null&&i.defaultValue!==a&&(i.defaultValue=a)),u!=null&&(i.defaultValue=""+u)}function me(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function re(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ie(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?re(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Ee,Ue=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,u,h){MSApp.execUnsafeLocalFunction(function(){return i(s,a,u,h)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Ee=Ee||document.createElement("div"),Ee.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Ee.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function _t(i,s){if(s){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=s;return}}i.textContent=s}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(i){Fe.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Se[s]=Se[i]})});function tt(i,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Se.hasOwnProperty(i)&&Se[i]?(""+s).trim():s+"px"}function ot(i,s){i=i.style;for(var a in s)if(s.hasOwnProperty(a)){var u=a.indexOf("--")===0,h=tt(a,s[a],u);a==="float"&&(a="cssFloat"),u?i.setProperty(a,h):i[a]=h}}var Oe=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(i,s){if(s){if(Oe[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(n(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(n(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(n(61))}if(s.style!=null&&typeof s.style!="object")throw Error(n(62))}}function ht(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ot=null;function W(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var be=null,oe=null,ge=null;function De(i){if(i=Cl(i)){if(typeof be!="function")throw Error(n(280));var s=i.stateNode;s&&(s=Hu(s),be(i.stateNode,i.type,s))}}function Le(i){oe?ge?ge.push(i):ge=[i]:oe=i}function pt(){if(oe){var i=oe,s=ge;if(ge=oe=null,De(i),s)for(i=0;i<s.length;i++)De(s[i])}}function Xt(i,s){return i(s)}function yn(){}var Rt=!1;function ni(i,s,a){if(Rt)return i(s,a);Rt=!0;try{return Xt(i,s,a)}finally{Rt=!1,(oe!==null||ge!==null)&&(yn(),pt())}}function Zn(i,s){var a=i.stateNode;if(a===null)return null;var u=Hu(a);if(u===null)return null;a=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(n(231,s,typeof a));return a}var Bo=!1;if(f)try{var cs={};Object.defineProperty(cs,"passive",{get:function(){Bo=!0}}),window.addEventListener("test",cs,cs),window.removeEventListener("test",cs,cs)}catch{Bo=!1}function Fr(i,s,a,u,h,m,M,I,O){var ee=Array.prototype.slice.call(arguments,3);try{s.apply(a,ee)}catch(xe){this.onError(xe)}}var Or=!1,$s=null,Ks=!1,fs=null,Mu={onError:function(i){Or=!0,$s=i}};function zo(i,s,a,u,h,m,M,I,O){Or=!1,$s=null,Fr.apply(Mu,arguments)}function Eu(i,s,a,u,h,m,M,I,O){if(zo.apply(this,arguments),Or){if(Or){var ee=$s;Or=!1,$s=null}else throw Error(n(198));Ks||(Ks=!0,fs=ee)}}function _r(i){var s=i,a=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(a=s.return),i=s.return;while(i)}return s.tag===3?a:null}function Tu(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function wu(i){if(_r(i)!==i)throw Error(n(188))}function Jf(i){var s=i.alternate;if(!s){if(s=_r(i),s===null)throw Error(n(188));return s!==i?null:i}for(var a=i,u=s;;){var h=a.return;if(h===null)break;var m=h.alternate;if(m===null){if(u=h.return,u!==null){a=u;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===a)return wu(h),i;if(m===u)return wu(h),s;m=m.sibling}throw Error(n(188))}if(a.return!==u.return)a=h,u=m;else{for(var M=!1,I=h.child;I;){if(I===a){M=!0,a=h,u=m;break}if(I===u){M=!0,u=h,a=m;break}I=I.sibling}if(!M){for(I=m.child;I;){if(I===a){M=!0,a=m,u=h;break}if(I===u){M=!0,u=m,a=h;break}I=I.sibling}if(!M)throw Error(n(189))}}if(a.alternate!==u)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?i:s}function A(i){return i=Jf(i),i!==null?X(i):null}function X(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=X(i);if(s!==null)return s;i=i.sibling}return null}var te=e.unstable_scheduleCallback,ne=e.unstable_cancelCallback,Y=e.unstable_shouldYield,Re=e.unstable_requestPaint,Te=e.unstable_now,Xe=e.unstable_getCurrentPriorityLevel,Ve=e.unstable_ImmediatePriority,at=e.unstable_UserBlockingPriority,ut=e.unstable_NormalPriority,je=e.unstable_LowPriority,Tt=e.unstable_IdlePriority,Ut=null,Et=null;function Bn(i){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Ut,i,void 0,(i.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:Dt,Ke=Math.log,Qi=Math.LN2;function Dt(i){return i>>>=0,i===0?32:31-(Ke(i)/Qi|0)|0}var zn=64,Ji=4194304;function xn(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function vr(i,s){var a=i.pendingLanes;if(a===0)return 0;var u=0,h=i.suspendedLanes,m=i.pingedLanes,M=a&268435455;if(M!==0){var I=M&~h;I!==0?u=xn(I):(m&=M,m!==0&&(u=xn(m)))}else M=a&~h,M!==0?u=xn(M):m!==0&&(u=xn(m));if(u===0)return 0;if(s!==0&&s!==u&&(s&h)===0&&(h=u&-u,m=s&-s,h>=m||h===16&&(m&4194240)!==0))return s;if((u&4)!==0&&(u|=a&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=u;0<s;)a=31-gt(s),h=1<<a,u|=i[a],s&=~h;return u}function Ht(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ni(i,s){for(var a=i.suspendedLanes,u=i.pingedLanes,h=i.expirationTimes,m=i.pendingLanes;0<m;){var M=31-gt(m),I=1<<M,O=h[M];O===-1?((I&a)===0||(I&u)!==0)&&(h[M]=Ht(I,s)):O<=s&&(i.expiredLanes|=I),m&=~I}}function kr(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Qn(){var i=zn;return zn<<=1,(zn&4194240)===0&&(zn=64),i}function Ui(i){for(var s=[],a=0;31>a;a++)s.push(i);return s}function ii(i,s,a){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-gt(s),i[s]=a}function Au(i,s){var a=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var u=i.eventTimes;for(i=i.expirationTimes;0<a;){var h=31-gt(a),m=1<<h;s[h]=0,u[h]=-1,i[h]=-1,a&=~m}}function ed(i,s){var a=i.entangledLanes|=s;for(i=i.entanglements;a;){var u=31-gt(a),h=1<<u;h&s|i[u]&s&&(i[u]|=s),a&=~h}}var kt=0;function Fg(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Og,td,kg,Bg,zg,nd=!1,Cu=[],ds=null,hs=null,ps=null,fl=new Map,dl=new Map,ms=[],r3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vg(i,s){switch(i){case"focusin":case"focusout":ds=null;break;case"dragenter":case"dragleave":hs=null;break;case"mouseover":case"mouseout":ps=null;break;case"pointerover":case"pointerout":fl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":dl.delete(s.pointerId)}}function hl(i,s,a,u,h,m){return i===null||i.nativeEvent!==m?(i={blockedOn:s,domEventName:a,eventSystemFlags:u,nativeEvent:m,targetContainers:[h]},s!==null&&(s=Cl(s),s!==null&&td(s)),i):(i.eventSystemFlags|=u,s=i.targetContainers,h!==null&&s.indexOf(h)===-1&&s.push(h),i)}function s3(i,s,a,u,h){switch(s){case"focusin":return ds=hl(ds,i,s,a,u,h),!0;case"dragenter":return hs=hl(hs,i,s,a,u,h),!0;case"mouseover":return ps=hl(ps,i,s,a,u,h),!0;case"pointerover":var m=h.pointerId;return fl.set(m,hl(fl.get(m)||null,i,s,a,u,h)),!0;case"gotpointercapture":return m=h.pointerId,dl.set(m,hl(dl.get(m)||null,i,s,a,u,h)),!0}return!1}function Hg(i){var s=Zs(i.target);if(s!==null){var a=_r(s);if(a!==null){if(s=a.tag,s===13){if(s=Tu(a),s!==null){i.blockedOn=s,zg(i.priority,function(){kg(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Ru(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var a=rd(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(a===null){a=i.nativeEvent;var u=new a.constructor(a.type,a);Ot=u,a.target.dispatchEvent(u),Ot=null}else return s=Cl(a),s!==null&&td(s),i.blockedOn=a,!1;s.shift()}return!0}function Gg(i,s,a){Ru(i)&&a.delete(s)}function o3(){nd=!1,ds!==null&&Ru(ds)&&(ds=null),hs!==null&&Ru(hs)&&(hs=null),ps!==null&&Ru(ps)&&(ps=null),fl.forEach(Gg),dl.forEach(Gg)}function pl(i,s){i.blockedOn===s&&(i.blockedOn=null,nd||(nd=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,o3)))}function ml(i){function s(h){return pl(h,i)}if(0<Cu.length){pl(Cu[0],i);for(var a=1;a<Cu.length;a++){var u=Cu[a];u.blockedOn===i&&(u.blockedOn=null)}}for(ds!==null&&pl(ds,i),hs!==null&&pl(hs,i),ps!==null&&pl(ps,i),fl.forEach(s),dl.forEach(s),a=0;a<ms.length;a++)u=ms[a],u.blockedOn===i&&(u.blockedOn=null);for(;0<ms.length&&(a=ms[0],a.blockedOn===null);)Hg(a),a.blockedOn===null&&ms.shift()}var Vo=R.ReactCurrentBatchConfig,bu=!0;function a3(i,s,a,u){var h=kt,m=Vo.transition;Vo.transition=null;try{kt=1,id(i,s,a,u)}finally{kt=h,Vo.transition=m}}function l3(i,s,a,u){var h=kt,m=Vo.transition;Vo.transition=null;try{kt=4,id(i,s,a,u)}finally{kt=h,Vo.transition=m}}function id(i,s,a,u){if(bu){var h=rd(i,s,a,u);if(h===null)Sd(i,s,u,Pu,a),Vg(i,u);else if(s3(h,i,s,a,u))u.stopPropagation();else if(Vg(i,u),s&4&&-1<r3.indexOf(i)){for(;h!==null;){var m=Cl(h);if(m!==null&&Og(m),m=rd(i,s,a,u),m===null&&Sd(i,s,u,Pu,a),m===h)break;h=m}h!==null&&u.stopPropagation()}else Sd(i,s,u,null,a)}}var Pu=null;function rd(i,s,a,u){if(Pu=null,i=W(u),i=Zs(i),i!==null)if(s=_r(i),s===null)i=null;else if(a=s.tag,a===13){if(i=Tu(s),i!==null)return i;i=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return Pu=i,null}function Wg(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case Ve:return 1;case at:return 4;case ut:case je:return 16;case Tt:return 536870912;default:return 16}default:return 16}}var gs=null,sd=null,Lu=null;function Xg(){if(Lu)return Lu;var i,s=sd,a=s.length,u,h="value"in gs?gs.value:gs.textContent,m=h.length;for(i=0;i<a&&s[i]===h[i];i++);var M=a-i;for(u=1;u<=M&&s[a-u]===h[m-u];u++);return Lu=h.slice(i,1<u?1-u:void 0)}function Du(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function Iu(){return!0}function jg(){return!1}function _i(i){function s(a,u,h,m,M){this._reactName=a,this._targetInst=h,this.type=u,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var I in i)i.hasOwnProperty(I)&&(a=i[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Iu:jg,this.isPropagationStopped=jg,this}return Q(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Iu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Iu)},persist:function(){},isPersistent:Iu}),s}var Ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},od=_i(Ho),gl=Q({},Ho,{view:0,detail:0}),u3=_i(gl),ad,ld,_l,Nu=Q({},gl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cd,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==_l&&(_l&&i.type==="mousemove"?(ad=i.screenX-_l.screenX,ld=i.screenY-_l.screenY):ld=ad=0,_l=i),ad)},movementY:function(i){return"movementY"in i?i.movementY:ld}}),Yg=_i(Nu),c3=Q({},Nu,{dataTransfer:0}),f3=_i(c3),d3=Q({},gl,{relatedTarget:0}),ud=_i(d3),h3=Q({},Ho,{animationName:0,elapsedTime:0,pseudoElement:0}),p3=_i(h3),m3=Q({},Ho,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),g3=_i(m3),_3=Q({},Ho,{data:0}),qg=_i(_3),v3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},y3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},x3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S3(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=x3[i])?!!s[i]:!1}function cd(){return S3}var M3=Q({},gl,{key:function(i){if(i.key){var s=v3[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Du(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?y3[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cd,charCode:function(i){return i.type==="keypress"?Du(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Du(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),E3=_i(M3),T3=Q({},Nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$g=_i(T3),w3=Q({},gl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cd}),A3=_i(w3),C3=Q({},Ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),R3=_i(C3),b3=Q({},Nu,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),P3=_i(b3),L3=[9,13,27,32],fd=f&&"CompositionEvent"in window,vl=null;f&&"documentMode"in document&&(vl=document.documentMode);var D3=f&&"TextEvent"in window&&!vl,Kg=f&&(!fd||vl&&8<vl&&11>=vl),Zg=" ",Qg=!1;function Jg(i,s){switch(i){case"keyup":return L3.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function e0(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Go=!1;function I3(i,s){switch(i){case"compositionend":return e0(s);case"keypress":return s.which!==32?null:(Qg=!0,Zg);case"textInput":return i=s.data,i===Zg&&Qg?null:i;default:return null}}function N3(i,s){if(Go)return i==="compositionend"||!fd&&Jg(i,s)?(i=Xg(),Lu=sd=gs=null,Go=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Kg&&s.locale!=="ko"?null:s.data;default:return null}}var U3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function t0(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!U3[i.type]:s==="textarea"}function n0(i,s,a,u){Le(u),s=Bu(s,"onChange"),0<s.length&&(a=new od("onChange","change",null,a,u),i.push({event:a,listeners:s}))}var yl=null,xl=null;function F3(i){x0(i,0)}function Uu(i){var s=qo(i);if(ct(s))return i}function O3(i,s){if(i==="change")return s}var i0=!1;if(f){var dd;if(f){var hd="oninput"in document;if(!hd){var r0=document.createElement("div");r0.setAttribute("oninput","return;"),hd=typeof r0.oninput=="function"}dd=hd}else dd=!1;i0=dd&&(!document.documentMode||9<document.documentMode)}function s0(){yl&&(yl.detachEvent("onpropertychange",o0),xl=yl=null)}function o0(i){if(i.propertyName==="value"&&Uu(xl)){var s=[];n0(s,xl,i,W(i)),ni(F3,s)}}function k3(i,s,a){i==="focusin"?(s0(),yl=s,xl=a,yl.attachEvent("onpropertychange",o0)):i==="focusout"&&s0()}function B3(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Uu(xl)}function z3(i,s){if(i==="click")return Uu(s)}function V3(i,s){if(i==="input"||i==="change")return Uu(s)}function H3(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var er=typeof Object.is=="function"?Object.is:H3;function Sl(i,s){if(er(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var a=Object.keys(i),u=Object.keys(s);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var h=a[u];if(!d.call(s,h)||!er(i[h],s[h]))return!1}return!0}function a0(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function l0(i,s){var a=a0(i);i=0;for(var u;a;){if(a.nodeType===3){if(u=i+a.textContent.length,i<=s&&u>=s)return{node:a,offset:s-i};i=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=a0(a)}}function u0(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?u0(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function c0(){for(var i=window,s=Ct();s instanceof i.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)i=s.contentWindow;else break;s=Ct(i.document)}return s}function pd(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function G3(i){var s=c0(),a=i.focusedElem,u=i.selectionRange;if(s!==a&&a&&a.ownerDocument&&u0(a.ownerDocument.documentElement,a)){if(u!==null&&pd(a)){if(s=u.start,i=u.end,i===void 0&&(i=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(i,a.value.length);else if(i=(s=a.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var h=a.textContent.length,m=Math.min(u.start,h);u=u.end===void 0?m:Math.min(u.end,h),!i.extend&&m>u&&(h=u,u=m,m=h),h=l0(a,m);var M=l0(a,u);h&&M&&(i.rangeCount!==1||i.anchorNode!==h.node||i.anchorOffset!==h.offset||i.focusNode!==M.node||i.focusOffset!==M.offset)&&(s=s.createRange(),s.setStart(h.node,h.offset),i.removeAllRanges(),m>u?(i.addRange(s),i.extend(M.node,M.offset)):(s.setEnd(M.node,M.offset),i.addRange(s)))}}for(s=[],i=a;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)i=s[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var W3=f&&"documentMode"in document&&11>=document.documentMode,Wo=null,md=null,Ml=null,gd=!1;function f0(i,s,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gd||Wo==null||Wo!==Ct(u)||(u=Wo,"selectionStart"in u&&pd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ml&&Sl(Ml,u)||(Ml=u,u=Bu(md,"onSelect"),0<u.length&&(s=new od("onSelect","select",null,s,a),i.push({event:s,listeners:u}),s.target=Wo)))}function Fu(i,s){var a={};return a[i.toLowerCase()]=s.toLowerCase(),a["Webkit"+i]="webkit"+s,a["Moz"+i]="moz"+s,a}var Xo={animationend:Fu("Animation","AnimationEnd"),animationiteration:Fu("Animation","AnimationIteration"),animationstart:Fu("Animation","AnimationStart"),transitionend:Fu("Transition","TransitionEnd")},_d={},d0={};f&&(d0=document.createElement("div").style,"AnimationEvent"in window||(delete Xo.animationend.animation,delete Xo.animationiteration.animation,delete Xo.animationstart.animation),"TransitionEvent"in window||delete Xo.transitionend.transition);function Ou(i){if(_d[i])return _d[i];if(!Xo[i])return i;var s=Xo[i],a;for(a in s)if(s.hasOwnProperty(a)&&a in d0)return _d[i]=s[a];return i}var h0=Ou("animationend"),p0=Ou("animationiteration"),m0=Ou("animationstart"),g0=Ou("transitionend"),_0=new Map,v0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _s(i,s){_0.set(i,s),l(s,[i])}for(var vd=0;vd<v0.length;vd++){var yd=v0[vd],X3=yd.toLowerCase(),j3=yd[0].toUpperCase()+yd.slice(1);_s(X3,"on"+j3)}_s(h0,"onAnimationEnd"),_s(p0,"onAnimationIteration"),_s(m0,"onAnimationStart"),_s("dblclick","onDoubleClick"),_s("focusin","onFocus"),_s("focusout","onBlur"),_s(g0,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var El="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y3=new Set("cancel close invalid load scroll toggle".split(" ").concat(El));function y0(i,s,a){var u=i.type||"unknown-event";i.currentTarget=a,Eu(u,s,void 0,i),i.currentTarget=null}function x0(i,s){s=(s&4)!==0;for(var a=0;a<i.length;a++){var u=i[a],h=u.event;u=u.listeners;e:{var m=void 0;if(s)for(var M=u.length-1;0<=M;M--){var I=u[M],O=I.instance,ee=I.currentTarget;if(I=I.listener,O!==m&&h.isPropagationStopped())break e;y0(h,I,ee),m=O}else for(M=0;M<u.length;M++){if(I=u[M],O=I.instance,ee=I.currentTarget,I=I.listener,O!==m&&h.isPropagationStopped())break e;y0(h,I,ee),m=O}}}if(Ks)throw i=fs,Ks=!1,fs=null,i}function jt(i,s){var a=s[Cd];a===void 0&&(a=s[Cd]=new Set);var u=i+"__bubble";a.has(u)||(S0(s,i,2,!1),a.add(u))}function xd(i,s,a){var u=0;s&&(u|=4),S0(a,i,u,s)}var ku="_reactListening"+Math.random().toString(36).slice(2);function Tl(i){if(!i[ku]){i[ku]=!0,r.forEach(function(a){a!=="selectionchange"&&(Y3.has(a)||xd(a,!1,i),xd(a,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[ku]||(s[ku]=!0,xd("selectionchange",!1,s))}}function S0(i,s,a,u){switch(Wg(s)){case 1:var h=a3;break;case 4:h=l3;break;default:h=id}a=h.bind(null,s,a,i),h=void 0,!Bo||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(h=!0),u?h!==void 0?i.addEventListener(s,a,{capture:!0,passive:h}):i.addEventListener(s,a,!0):h!==void 0?i.addEventListener(s,a,{passive:h}):i.addEventListener(s,a,!1)}function Sd(i,s,a,u,h){var m=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var I=u.stateNode.containerInfo;if(I===h||I.nodeType===8&&I.parentNode===h)break;if(M===4)for(M=u.return;M!==null;){var O=M.tag;if((O===3||O===4)&&(O=M.stateNode.containerInfo,O===h||O.nodeType===8&&O.parentNode===h))return;M=M.return}for(;I!==null;){if(M=Zs(I),M===null)return;if(O=M.tag,O===5||O===6){u=m=M;continue e}I=I.parentNode}}u=u.return}ni(function(){var ee=m,xe=W(a),Me=[];e:{var ye=_0.get(i);if(ye!==void 0){var Ne=od,Be=i;switch(i){case"keypress":if(Du(a)===0)break e;case"keydown":case"keyup":Ne=E3;break;case"focusin":Be="focus",Ne=ud;break;case"focusout":Be="blur",Ne=ud;break;case"beforeblur":case"afterblur":Ne=ud;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=Yg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=f3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=A3;break;case h0:case p0:case m0:Ne=p3;break;case g0:Ne=R3;break;case"scroll":Ne=u3;break;case"wheel":Ne=P3;break;case"copy":case"cut":case"paste":Ne=g3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=$g}var He=(s&4)!==0,fn=!He&&i==="scroll",$=He?ye!==null?ye+"Capture":null:ye;He=[];for(var V=ee,Z;V!==null;){Z=V;var Ae=Z.stateNode;if(Z.tag===5&&Ae!==null&&(Z=Ae,$!==null&&(Ae=Zn(V,$),Ae!=null&&He.push(wl(V,Ae,Z)))),fn)break;V=V.return}0<He.length&&(ye=new Ne(ye,Be,null,a,xe),Me.push({event:ye,listeners:He}))}}if((s&7)===0){e:{if(ye=i==="mouseover"||i==="pointerover",Ne=i==="mouseout"||i==="pointerout",ye&&a!==Ot&&(Be=a.relatedTarget||a.fromElement)&&(Zs(Be)||Be[Br]))break e;if((Ne||ye)&&(ye=xe.window===xe?xe:(ye=xe.ownerDocument)?ye.defaultView||ye.parentWindow:window,Ne?(Be=a.relatedTarget||a.toElement,Ne=ee,Be=Be?Zs(Be):null,Be!==null&&(fn=_r(Be),Be!==fn||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Ne=null,Be=ee),Ne!==Be)){if(He=Yg,Ae="onMouseLeave",$="onMouseEnter",V="mouse",(i==="pointerout"||i==="pointerover")&&(He=$g,Ae="onPointerLeave",$="onPointerEnter",V="pointer"),fn=Ne==null?ye:qo(Ne),Z=Be==null?ye:qo(Be),ye=new He(Ae,V+"leave",Ne,a,xe),ye.target=fn,ye.relatedTarget=Z,Ae=null,Zs(xe)===ee&&(He=new He($,V+"enter",Be,a,xe),He.target=Z,He.relatedTarget=fn,Ae=He),fn=Ae,Ne&&Be)t:{for(He=Ne,$=Be,V=0,Z=He;Z;Z=jo(Z))V++;for(Z=0,Ae=$;Ae;Ae=jo(Ae))Z++;for(;0<V-Z;)He=jo(He),V--;for(;0<Z-V;)$=jo($),Z--;for(;V--;){if(He===$||$!==null&&He===$.alternate)break t;He=jo(He),$=jo($)}He=null}else He=null;Ne!==null&&M0(Me,ye,Ne,He,!1),Be!==null&&fn!==null&&M0(Me,fn,Be,He,!0)}}e:{if(ye=ee?qo(ee):window,Ne=ye.nodeName&&ye.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&ye.type==="file")var Ye=O3;else if(t0(ye))if(i0)Ye=V3;else{Ye=B3;var it=k3}else(Ne=ye.nodeName)&&Ne.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(Ye=z3);if(Ye&&(Ye=Ye(i,ee))){n0(Me,Ye,a,xe);break e}it&&it(i,ye,ee),i==="focusout"&&(it=ye._wrapperState)&&it.controlled&&ye.type==="number"&&wt(ye,"number",ye.value)}switch(it=ee?qo(ee):window,i){case"focusin":(t0(it)||it.contentEditable==="true")&&(Wo=it,md=ee,Ml=null);break;case"focusout":Ml=md=Wo=null;break;case"mousedown":gd=!0;break;case"contextmenu":case"mouseup":case"dragend":gd=!1,f0(Me,a,xe);break;case"selectionchange":if(W3)break;case"keydown":case"keyup":f0(Me,a,xe)}var rt;if(fd)e:{switch(i){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else Go?Jg(i,a)&&(lt="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(lt="onCompositionStart");lt&&(Kg&&a.locale!=="ko"&&(Go||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&Go&&(rt=Xg()):(gs=xe,sd="value"in gs?gs.value:gs.textContent,Go=!0)),it=Bu(ee,lt),0<it.length&&(lt=new qg(lt,i,null,a,xe),Me.push({event:lt,listeners:it}),rt?lt.data=rt:(rt=e0(a),rt!==null&&(lt.data=rt)))),(rt=D3?I3(i,a):N3(i,a))&&(ee=Bu(ee,"onBeforeInput"),0<ee.length&&(xe=new qg("onBeforeInput","beforeinput",null,a,xe),Me.push({event:xe,listeners:ee}),xe.data=rt))}x0(Me,s)})}function wl(i,s,a){return{instance:i,listener:s,currentTarget:a}}function Bu(i,s){for(var a=s+"Capture",u=[];i!==null;){var h=i,m=h.stateNode;h.tag===5&&m!==null&&(h=m,m=Zn(i,a),m!=null&&u.unshift(wl(i,m,h)),m=Zn(i,s),m!=null&&u.push(wl(i,m,h))),i=i.return}return u}function jo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function M0(i,s,a,u,h){for(var m=s._reactName,M=[];a!==null&&a!==u;){var I=a,O=I.alternate,ee=I.stateNode;if(O!==null&&O===u)break;I.tag===5&&ee!==null&&(I=ee,h?(O=Zn(a,m),O!=null&&M.unshift(wl(a,O,I))):h||(O=Zn(a,m),O!=null&&M.push(wl(a,O,I)))),a=a.return}M.length!==0&&i.push({event:s,listeners:M})}var q3=/\r\n?/g,$3=/\u0000|\uFFFD/g;function E0(i){return(typeof i=="string"?i:""+i).replace(q3,`
`).replace($3,"")}function zu(i,s,a){if(s=E0(s),E0(i)!==s&&a)throw Error(n(425))}function Vu(){}var Md=null,Ed=null;function Td(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var wd=typeof setTimeout=="function"?setTimeout:void 0,K3=typeof clearTimeout=="function"?clearTimeout:void 0,T0=typeof Promise=="function"?Promise:void 0,Z3=typeof queueMicrotask=="function"?queueMicrotask:typeof T0<"u"?function(i){return T0.resolve(null).then(i).catch(Q3)}:wd;function Q3(i){setTimeout(function(){throw i})}function Ad(i,s){var a=s,u=0;do{var h=a.nextSibling;if(i.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(u===0){i.removeChild(h),ml(s);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=h}while(a);ml(s)}function vs(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function w0(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return i;s--}else a==="/$"&&s++}i=i.previousSibling}return null}var Yo=Math.random().toString(36).slice(2),yr="__reactFiber$"+Yo,Al="__reactProps$"+Yo,Br="__reactContainer$"+Yo,Cd="__reactEvents$"+Yo,J3="__reactListeners$"+Yo,eS="__reactHandles$"+Yo;function Zs(i){var s=i[yr];if(s)return s;for(var a=i.parentNode;a;){if(s=a[Br]||a[yr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(i=w0(i);i!==null;){if(a=i[yr])return a;i=w0(i)}return s}i=a,a=i.parentNode}return null}function Cl(i){return i=i[yr]||i[Br],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function qo(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(n(33))}function Hu(i){return i[Al]||null}var Rd=[],$o=-1;function ys(i){return{current:i}}function Yt(i){0>$o||(i.current=Rd[$o],Rd[$o]=null,$o--)}function Wt(i,s){$o++,Rd[$o]=i.current,i.current=s}var xs={},Vn=ys(xs),ri=ys(!1),Qs=xs;function Ko(i,s){var a=i.type.contextTypes;if(!a)return xs;var u=i.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===s)return u.__reactInternalMemoizedMaskedChildContext;var h={},m;for(m in a)h[m]=s[m];return u&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=h),h}function si(i){return i=i.childContextTypes,i!=null}function Gu(){Yt(ri),Yt(Vn)}function A0(i,s,a){if(Vn.current!==xs)throw Error(n(168));Wt(Vn,s),Wt(ri,a)}function C0(i,s,a){var u=i.stateNode;if(s=s.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var h in u)if(!(h in s))throw Error(n(108,he(i)||"Unknown",h));return Q({},a,u)}function Wu(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||xs,Qs=Vn.current,Wt(Vn,i),Wt(ri,ri.current),!0}function R0(i,s,a){var u=i.stateNode;if(!u)throw Error(n(169));a?(i=C0(i,s,Qs),u.__reactInternalMemoizedMergedChildContext=i,Yt(ri),Yt(Vn),Wt(Vn,i)):Yt(ri),Wt(ri,a)}var zr=null,Xu=!1,bd=!1;function b0(i){zr===null?zr=[i]:zr.push(i)}function tS(i){Xu=!0,b0(i)}function Ss(){if(!bd&&zr!==null){bd=!0;var i=0,s=kt;try{var a=zr;for(kt=1;i<a.length;i++){var u=a[i];do u=u(!0);while(u!==null)}zr=null,Xu=!1}catch(h){throw zr!==null&&(zr=zr.slice(i+1)),te(Ve,Ss),h}finally{kt=s,bd=!1}}return null}var Zo=[],Qo=0,ju=null,Yu=0,Fi=[],Oi=0,Js=null,Vr=1,Hr="";function eo(i,s){Zo[Qo++]=Yu,Zo[Qo++]=ju,ju=i,Yu=s}function P0(i,s,a){Fi[Oi++]=Vr,Fi[Oi++]=Hr,Fi[Oi++]=Js,Js=i;var u=Vr;i=Hr;var h=32-gt(u)-1;u&=~(1<<h),a+=1;var m=32-gt(s)+h;if(30<m){var M=h-h%5;m=(u&(1<<M)-1).toString(32),u>>=M,h-=M,Vr=1<<32-gt(s)+h|a<<h|u,Hr=m+i}else Vr=1<<m|a<<h|u,Hr=i}function Pd(i){i.return!==null&&(eo(i,1),P0(i,1,0))}function Ld(i){for(;i===ju;)ju=Zo[--Qo],Zo[Qo]=null,Yu=Zo[--Qo],Zo[Qo]=null;for(;i===Js;)Js=Fi[--Oi],Fi[Oi]=null,Hr=Fi[--Oi],Fi[Oi]=null,Vr=Fi[--Oi],Fi[Oi]=null}var vi=null,yi=null,qt=!1,tr=null;function L0(i,s){var a=Vi(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=i,s=i.deletions,s===null?(i.deletions=[a],i.flags|=16):s.push(a)}function D0(i,s){switch(i.tag){case 5:var a=i.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,vi=i,yi=vs(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,vi=i,yi=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Js!==null?{id:Vr,overflow:Hr}:null,i.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Vi(18,null,null,0),a.stateNode=s,a.return=i,i.child=a,vi=i,yi=null,!0):!1;default:return!1}}function Dd(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Id(i){if(qt){var s=yi;if(s){var a=s;if(!D0(i,s)){if(Dd(i))throw Error(n(418));s=vs(a.nextSibling);var u=vi;s&&D0(i,s)?L0(u,a):(i.flags=i.flags&-4097|2,qt=!1,vi=i)}}else{if(Dd(i))throw Error(n(418));i.flags=i.flags&-4097|2,qt=!1,vi=i}}}function I0(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;vi=i}function qu(i){if(i!==vi)return!1;if(!qt)return I0(i),qt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Td(i.type,i.memoizedProps)),s&&(s=yi)){if(Dd(i))throw N0(),Error(n(418));for(;s;)L0(i,s),s=vs(s.nextSibling)}if(I0(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(n(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="/$"){if(s===0){yi=vs(i.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}i=i.nextSibling}yi=null}}else yi=vi?vs(i.stateNode.nextSibling):null;return!0}function N0(){for(var i=yi;i;)i=vs(i.nextSibling)}function Jo(){yi=vi=null,qt=!1}function Nd(i){tr===null?tr=[i]:tr.push(i)}var nS=R.ReactCurrentBatchConfig;function Rl(i,s,a){if(i=a.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var u=a.stateNode}if(!u)throw Error(n(147,i));var h=u,m=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===m?s.ref:(s=function(M){var I=h.refs;M===null?delete I[m]:I[m]=M},s._stringRef=m,s)}if(typeof i!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,i))}return i}function $u(i,s){throw i=Object.prototype.toString.call(s),Error(n(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function U0(i){var s=i._init;return s(i._payload)}function F0(i){function s($,V){if(i){var Z=$.deletions;Z===null?($.deletions=[V],$.flags|=16):Z.push(V)}}function a($,V){if(!i)return null;for(;V!==null;)s($,V),V=V.sibling;return null}function u($,V){for($=new Map;V!==null;)V.key!==null?$.set(V.key,V):$.set(V.index,V),V=V.sibling;return $}function h($,V){return $=bs($,V),$.index=0,$.sibling=null,$}function m($,V,Z){return $.index=Z,i?(Z=$.alternate,Z!==null?(Z=Z.index,Z<V?($.flags|=2,V):Z):($.flags|=2,V)):($.flags|=1048576,V)}function M($){return i&&$.alternate===null&&($.flags|=2),$}function I($,V,Z,Ae){return V===null||V.tag!==6?(V=wh(Z,$.mode,Ae),V.return=$,V):(V=h(V,Z),V.return=$,V)}function O($,V,Z,Ae){var Ye=Z.type;return Ye===F?xe($,V,Z.props.children,Ae,Z.key):V!==null&&(V.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===se&&U0(Ye)===V.type)?(Ae=h(V,Z.props),Ae.ref=Rl($,V,Z),Ae.return=$,Ae):(Ae=yc(Z.type,Z.key,Z.props,null,$.mode,Ae),Ae.ref=Rl($,V,Z),Ae.return=$,Ae)}function ee($,V,Z,Ae){return V===null||V.tag!==4||V.stateNode.containerInfo!==Z.containerInfo||V.stateNode.implementation!==Z.implementation?(V=Ah(Z,$.mode,Ae),V.return=$,V):(V=h(V,Z.children||[]),V.return=$,V)}function xe($,V,Z,Ae,Ye){return V===null||V.tag!==7?(V=lo(Z,$.mode,Ae,Ye),V.return=$,V):(V=h(V,Z),V.return=$,V)}function Me($,V,Z){if(typeof V=="string"&&V!==""||typeof V=="number")return V=wh(""+V,$.mode,Z),V.return=$,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case q:return Z=yc(V.type,V.key,V.props,null,$.mode,Z),Z.ref=Rl($,null,V),Z.return=$,Z;case B:return V=Ah(V,$.mode,Z),V.return=$,V;case se:var Ae=V._init;return Me($,Ae(V._payload),Z)}if(We(V)||ae(V))return V=lo(V,$.mode,Z,null),V.return=$,V;$u($,V)}return null}function ye($,V,Z,Ae){var Ye=V!==null?V.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Ye!==null?null:I($,V,""+Z,Ae);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case q:return Z.key===Ye?O($,V,Z,Ae):null;case B:return Z.key===Ye?ee($,V,Z,Ae):null;case se:return Ye=Z._init,ye($,V,Ye(Z._payload),Ae)}if(We(Z)||ae(Z))return Ye!==null?null:xe($,V,Z,Ae,null);$u($,Z)}return null}function Ne($,V,Z,Ae,Ye){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return $=$.get(Z)||null,I(V,$,""+Ae,Ye);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case q:return $=$.get(Ae.key===null?Z:Ae.key)||null,O(V,$,Ae,Ye);case B:return $=$.get(Ae.key===null?Z:Ae.key)||null,ee(V,$,Ae,Ye);case se:var it=Ae._init;return Ne($,V,Z,it(Ae._payload),Ye)}if(We(Ae)||ae(Ae))return $=$.get(Z)||null,xe(V,$,Ae,Ye,null);$u(V,Ae)}return null}function Be($,V,Z,Ae){for(var Ye=null,it=null,rt=V,lt=V=0,Ln=null;rt!==null&&lt<Z.length;lt++){rt.index>lt?(Ln=rt,rt=null):Ln=rt.sibling;var It=ye($,rt,Z[lt],Ae);if(It===null){rt===null&&(rt=Ln);break}i&&rt&&It.alternate===null&&s($,rt),V=m(It,V,lt),it===null?Ye=It:it.sibling=It,it=It,rt=Ln}if(lt===Z.length)return a($,rt),qt&&eo($,lt),Ye;if(rt===null){for(;lt<Z.length;lt++)rt=Me($,Z[lt],Ae),rt!==null&&(V=m(rt,V,lt),it===null?Ye=rt:it.sibling=rt,it=rt);return qt&&eo($,lt),Ye}for(rt=u($,rt);lt<Z.length;lt++)Ln=Ne(rt,$,lt,Z[lt],Ae),Ln!==null&&(i&&Ln.alternate!==null&&rt.delete(Ln.key===null?lt:Ln.key),V=m(Ln,V,lt),it===null?Ye=Ln:it.sibling=Ln,it=Ln);return i&&rt.forEach(function(Ps){return s($,Ps)}),qt&&eo($,lt),Ye}function He($,V,Z,Ae){var Ye=ae(Z);if(typeof Ye!="function")throw Error(n(150));if(Z=Ye.call(Z),Z==null)throw Error(n(151));for(var it=Ye=null,rt=V,lt=V=0,Ln=null,It=Z.next();rt!==null&&!It.done;lt++,It=Z.next()){rt.index>lt?(Ln=rt,rt=null):Ln=rt.sibling;var Ps=ye($,rt,It.value,Ae);if(Ps===null){rt===null&&(rt=Ln);break}i&&rt&&Ps.alternate===null&&s($,rt),V=m(Ps,V,lt),it===null?Ye=Ps:it.sibling=Ps,it=Ps,rt=Ln}if(It.done)return a($,rt),qt&&eo($,lt),Ye;if(rt===null){for(;!It.done;lt++,It=Z.next())It=Me($,It.value,Ae),It!==null&&(V=m(It,V,lt),it===null?Ye=It:it.sibling=It,it=It);return qt&&eo($,lt),Ye}for(rt=u($,rt);!It.done;lt++,It=Z.next())It=Ne(rt,$,lt,It.value,Ae),It!==null&&(i&&It.alternate!==null&&rt.delete(It.key===null?lt:It.key),V=m(It,V,lt),it===null?Ye=It:it.sibling=It,it=It);return i&&rt.forEach(function(US){return s($,US)}),qt&&eo($,lt),Ye}function fn($,V,Z,Ae){if(typeof Z=="object"&&Z!==null&&Z.type===F&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case q:e:{for(var Ye=Z.key,it=V;it!==null;){if(it.key===Ye){if(Ye=Z.type,Ye===F){if(it.tag===7){a($,it.sibling),V=h(it,Z.props.children),V.return=$,$=V;break e}}else if(it.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===se&&U0(Ye)===it.type){a($,it.sibling),V=h(it,Z.props),V.ref=Rl($,it,Z),V.return=$,$=V;break e}a($,it);break}else s($,it);it=it.sibling}Z.type===F?(V=lo(Z.props.children,$.mode,Ae,Z.key),V.return=$,$=V):(Ae=yc(Z.type,Z.key,Z.props,null,$.mode,Ae),Ae.ref=Rl($,V,Z),Ae.return=$,$=Ae)}return M($);case B:e:{for(it=Z.key;V!==null;){if(V.key===it)if(V.tag===4&&V.stateNode.containerInfo===Z.containerInfo&&V.stateNode.implementation===Z.implementation){a($,V.sibling),V=h(V,Z.children||[]),V.return=$,$=V;break e}else{a($,V);break}else s($,V);V=V.sibling}V=Ah(Z,$.mode,Ae),V.return=$,$=V}return M($);case se:return it=Z._init,fn($,V,it(Z._payload),Ae)}if(We(Z))return Be($,V,Z,Ae);if(ae(Z))return He($,V,Z,Ae);$u($,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,V!==null&&V.tag===6?(a($,V.sibling),V=h(V,Z),V.return=$,$=V):(a($,V),V=wh(Z,$.mode,Ae),V.return=$,$=V),M($)):a($,V)}return fn}var ea=F0(!0),O0=F0(!1),Ku=ys(null),Zu=null,ta=null,Ud=null;function Fd(){Ud=ta=Zu=null}function Od(i){var s=Ku.current;Yt(Ku),i._currentValue=s}function kd(i,s,a){for(;i!==null;){var u=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),i===a)break;i=i.return}}function na(i,s){Zu=i,Ud=ta=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(oi=!0),i.firstContext=null)}function ki(i){var s=i._currentValue;if(Ud!==i)if(i={context:i,memoizedValue:s,next:null},ta===null){if(Zu===null)throw Error(n(308));ta=i,Zu.dependencies={lanes:0,firstContext:i}}else ta=ta.next=i;return s}var to=null;function Bd(i){to===null?to=[i]:to.push(i)}function k0(i,s,a,u){var h=s.interleaved;return h===null?(a.next=a,Bd(s)):(a.next=h.next,h.next=a),s.interleaved=a,Gr(i,u)}function Gr(i,s){i.lanes|=s;var a=i.alternate;for(a!==null&&(a.lanes|=s),a=i,i=i.return;i!==null;)i.childLanes|=s,a=i.alternate,a!==null&&(a.childLanes|=s),a=i,i=i.return;return a.tag===3?a.stateNode:null}var Ms=!1;function zd(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function B0(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Wr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Es(i,s,a){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(bt&2)!==0){var h=u.pending;return h===null?s.next=s:(s.next=h.next,h.next=s),u.pending=s,Gr(i,a)}return h=u.interleaved,h===null?(s.next=s,Bd(u)):(s.next=h.next,h.next=s),u.interleaved=s,Gr(i,a)}function Qu(i,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var u=s.lanes;u&=i.pendingLanes,a|=u,s.lanes=a,ed(i,a)}}function z0(i,s){var a=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var h=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var M={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?h=m=M:m=m.next=M,a=a.next}while(a!==null);m===null?h=m=s:m=m.next=s}else h=m=s;a={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:u.shared,effects:u.effects},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=s:i.next=s,a.lastBaseUpdate=s}function Ju(i,s,a,u){var h=i.updateQueue;Ms=!1;var m=h.firstBaseUpdate,M=h.lastBaseUpdate,I=h.shared.pending;if(I!==null){h.shared.pending=null;var O=I,ee=O.next;O.next=null,M===null?m=ee:M.next=ee,M=O;var xe=i.alternate;xe!==null&&(xe=xe.updateQueue,I=xe.lastBaseUpdate,I!==M&&(I===null?xe.firstBaseUpdate=ee:I.next=ee,xe.lastBaseUpdate=O))}if(m!==null){var Me=h.baseState;M=0,xe=ee=O=null,I=m;do{var ye=I.lane,Ne=I.eventTime;if((u&ye)===ye){xe!==null&&(xe=xe.next={eventTime:Ne,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Be=i,He=I;switch(ye=s,Ne=a,He.tag){case 1:if(Be=He.payload,typeof Be=="function"){Me=Be.call(Ne,Me,ye);break e}Me=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=He.payload,ye=typeof Be=="function"?Be.call(Ne,Me,ye):Be,ye==null)break e;Me=Q({},Me,ye);break e;case 2:Ms=!0}}I.callback!==null&&I.lane!==0&&(i.flags|=64,ye=h.effects,ye===null?h.effects=[I]:ye.push(I))}else Ne={eventTime:Ne,lane:ye,tag:I.tag,payload:I.payload,callback:I.callback,next:null},xe===null?(ee=xe=Ne,O=Me):xe=xe.next=Ne,M|=ye;if(I=I.next,I===null){if(I=h.shared.pending,I===null)break;ye=I,I=ye.next,ye.next=null,h.lastBaseUpdate=ye,h.shared.pending=null}}while(!0);if(xe===null&&(O=Me),h.baseState=O,h.firstBaseUpdate=ee,h.lastBaseUpdate=xe,s=h.shared.interleaved,s!==null){h=s;do M|=h.lane,h=h.next;while(h!==s)}else m===null&&(h.shared.lanes=0);ro|=M,i.lanes=M,i.memoizedState=Me}}function V0(i,s,a){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var u=i[s],h=u.callback;if(h!==null){if(u.callback=null,u=a,typeof h!="function")throw Error(n(191,h));h.call(u)}}}var bl={},xr=ys(bl),Pl=ys(bl),Ll=ys(bl);function no(i){if(i===bl)throw Error(n(174));return i}function Vd(i,s){switch(Wt(Ll,s),Wt(Pl,i),Wt(xr,bl),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ie(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=Ie(s,i)}Yt(xr),Wt(xr,s)}function ia(){Yt(xr),Yt(Pl),Yt(Ll)}function H0(i){no(Ll.current);var s=no(xr.current),a=Ie(s,i.type);s!==a&&(Wt(Pl,i),Wt(xr,a))}function Hd(i){Pl.current===i&&(Yt(xr),Yt(Pl))}var Qt=ys(0);function ec(i){for(var s=i;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Gd=[];function Wd(){for(var i=0;i<Gd.length;i++)Gd[i]._workInProgressVersionPrimary=null;Gd.length=0}var tc=R.ReactCurrentDispatcher,Xd=R.ReactCurrentBatchConfig,io=0,Jt=null,Sn=null,bn=null,nc=!1,Dl=!1,Il=0,iS=0;function Hn(){throw Error(n(321))}function jd(i,s){if(s===null)return!1;for(var a=0;a<s.length&&a<i.length;a++)if(!er(i[a],s[a]))return!1;return!0}function Yd(i,s,a,u,h,m){if(io=m,Jt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,tc.current=i===null||i.memoizedState===null?aS:lS,i=a(u,h),Dl){m=0;do{if(Dl=!1,Il=0,25<=m)throw Error(n(301));m+=1,bn=Sn=null,s.updateQueue=null,tc.current=uS,i=a(u,h)}while(Dl)}if(tc.current=sc,s=Sn!==null&&Sn.next!==null,io=0,bn=Sn=Jt=null,nc=!1,s)throw Error(n(300));return i}function qd(){var i=Il!==0;return Il=0,i}function Sr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bn===null?Jt.memoizedState=bn=i:bn=bn.next=i,bn}function Bi(){if(Sn===null){var i=Jt.alternate;i=i!==null?i.memoizedState:null}else i=Sn.next;var s=bn===null?Jt.memoizedState:bn.next;if(s!==null)bn=s,Sn=i;else{if(i===null)throw Error(n(310));Sn=i,i={memoizedState:Sn.memoizedState,baseState:Sn.baseState,baseQueue:Sn.baseQueue,queue:Sn.queue,next:null},bn===null?Jt.memoizedState=bn=i:bn=bn.next=i}return bn}function Nl(i,s){return typeof s=="function"?s(i):s}function $d(i){var s=Bi(),a=s.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=i;var u=Sn,h=u.baseQueue,m=a.pending;if(m!==null){if(h!==null){var M=h.next;h.next=m.next,m.next=M}u.baseQueue=h=m,a.pending=null}if(h!==null){m=h.next,u=u.baseState;var I=M=null,O=null,ee=m;do{var xe=ee.lane;if((io&xe)===xe)O!==null&&(O=O.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),u=ee.hasEagerState?ee.eagerState:i(u,ee.action);else{var Me={lane:xe,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};O===null?(I=O=Me,M=u):O=O.next=Me,Jt.lanes|=xe,ro|=xe}ee=ee.next}while(ee!==null&&ee!==m);O===null?M=u:O.next=I,er(u,s.memoizedState)||(oi=!0),s.memoizedState=u,s.baseState=M,s.baseQueue=O,a.lastRenderedState=u}if(i=a.interleaved,i!==null){h=i;do m=h.lane,Jt.lanes|=m,ro|=m,h=h.next;while(h!==i)}else h===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Kd(i){var s=Bi(),a=s.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=i;var u=a.dispatch,h=a.pending,m=s.memoizedState;if(h!==null){a.pending=null;var M=h=h.next;do m=i(m,M.action),M=M.next;while(M!==h);er(m,s.memoizedState)||(oi=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,u]}function G0(){}function W0(i,s){var a=Jt,u=Bi(),h=s(),m=!er(u.memoizedState,h);if(m&&(u.memoizedState=h,oi=!0),u=u.queue,Zd(Y0.bind(null,a,u,i),[i]),u.getSnapshot!==s||m||bn!==null&&bn.memoizedState.tag&1){if(a.flags|=2048,Ul(9,j0.bind(null,a,u,h,s),void 0,null),Pn===null)throw Error(n(349));(io&30)!==0||X0(a,s,h)}return h}function X0(i,s,a){i.flags|=16384,i={getSnapshot:s,value:a},s=Jt.updateQueue,s===null?(s={lastEffect:null,stores:null},Jt.updateQueue=s,s.stores=[i]):(a=s.stores,a===null?s.stores=[i]:a.push(i))}function j0(i,s,a,u){s.value=a,s.getSnapshot=u,q0(s)&&$0(i)}function Y0(i,s,a){return a(function(){q0(s)&&$0(i)})}function q0(i){var s=i.getSnapshot;i=i.value;try{var a=s();return!er(i,a)}catch{return!0}}function $0(i){var s=Gr(i,1);s!==null&&sr(s,i,1,-1)}function K0(i){var s=Sr();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Nl,lastRenderedState:i},s.queue=i,i=i.dispatch=oS.bind(null,Jt,i),[s.memoizedState,i]}function Ul(i,s,a,u){return i={tag:i,create:s,destroy:a,deps:u,next:null},s=Jt.updateQueue,s===null?(s={lastEffect:null,stores:null},Jt.updateQueue=s,s.lastEffect=i.next=i):(a=s.lastEffect,a===null?s.lastEffect=i.next=i:(u=a.next,a.next=i,i.next=u,s.lastEffect=i)),i}function Z0(){return Bi().memoizedState}function ic(i,s,a,u){var h=Sr();Jt.flags|=i,h.memoizedState=Ul(1|s,a,void 0,u===void 0?null:u)}function rc(i,s,a,u){var h=Bi();u=u===void 0?null:u;var m=void 0;if(Sn!==null){var M=Sn.memoizedState;if(m=M.destroy,u!==null&&jd(u,M.deps)){h.memoizedState=Ul(s,a,m,u);return}}Jt.flags|=i,h.memoizedState=Ul(1|s,a,m,u)}function Q0(i,s){return ic(8390656,8,i,s)}function Zd(i,s){return rc(2048,8,i,s)}function J0(i,s){return rc(4,2,i,s)}function e_(i,s){return rc(4,4,i,s)}function t_(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function n_(i,s,a){return a=a!=null?a.concat([i]):null,rc(4,4,t_.bind(null,s,i),a)}function Qd(){}function i_(i,s){var a=Bi();s=s===void 0?null:s;var u=a.memoizedState;return u!==null&&s!==null&&jd(s,u[1])?u[0]:(a.memoizedState=[i,s],i)}function r_(i,s){var a=Bi();s=s===void 0?null:s;var u=a.memoizedState;return u!==null&&s!==null&&jd(s,u[1])?u[0]:(i=i(),a.memoizedState=[i,s],i)}function s_(i,s,a){return(io&21)===0?(i.baseState&&(i.baseState=!1,oi=!0),i.memoizedState=a):(er(a,s)||(a=Qn(),Jt.lanes|=a,ro|=a,i.baseState=!0),s)}function rS(i,s){var a=kt;kt=a!==0&&4>a?a:4,i(!0);var u=Xd.transition;Xd.transition={};try{i(!1),s()}finally{kt=a,Xd.transition=u}}function o_(){return Bi().memoizedState}function sS(i,s,a){var u=Cs(i);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},a_(i))l_(s,a);else if(a=k0(i,s,a,u),a!==null){var h=ei();sr(a,i,u,h),u_(a,s,u)}}function oS(i,s,a){var u=Cs(i),h={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(a_(i))l_(s,h);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var M=s.lastRenderedState,I=m(M,a);if(h.hasEagerState=!0,h.eagerState=I,er(I,M)){var O=s.interleaved;O===null?(h.next=h,Bd(s)):(h.next=O.next,O.next=h),s.interleaved=h;return}}catch{}finally{}a=k0(i,s,h,u),a!==null&&(h=ei(),sr(a,i,u,h),u_(a,s,u))}}function a_(i){var s=i.alternate;return i===Jt||s!==null&&s===Jt}function l_(i,s){Dl=nc=!0;var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}function u_(i,s,a){if((a&4194240)!==0){var u=s.lanes;u&=i.pendingLanes,a|=u,s.lanes=a,ed(i,a)}}var sc={readContext:ki,useCallback:Hn,useContext:Hn,useEffect:Hn,useImperativeHandle:Hn,useInsertionEffect:Hn,useLayoutEffect:Hn,useMemo:Hn,useReducer:Hn,useRef:Hn,useState:Hn,useDebugValue:Hn,useDeferredValue:Hn,useTransition:Hn,useMutableSource:Hn,useSyncExternalStore:Hn,useId:Hn,unstable_isNewReconciler:!1},aS={readContext:ki,useCallback:function(i,s){return Sr().memoizedState=[i,s===void 0?null:s],i},useContext:ki,useEffect:Q0,useImperativeHandle:function(i,s,a){return a=a!=null?a.concat([i]):null,ic(4194308,4,t_.bind(null,s,i),a)},useLayoutEffect:function(i,s){return ic(4194308,4,i,s)},useInsertionEffect:function(i,s){return ic(4,2,i,s)},useMemo:function(i,s){var a=Sr();return s=s===void 0?null:s,i=i(),a.memoizedState=[i,s],i},useReducer:function(i,s,a){var u=Sr();return s=a!==void 0?a(s):s,u.memoizedState=u.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},u.queue=i,i=i.dispatch=sS.bind(null,Jt,i),[u.memoizedState,i]},useRef:function(i){var s=Sr();return i={current:i},s.memoizedState=i},useState:K0,useDebugValue:Qd,useDeferredValue:function(i){return Sr().memoizedState=i},useTransition:function(){var i=K0(!1),s=i[0];return i=rS.bind(null,i[1]),Sr().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,a){var u=Jt,h=Sr();if(qt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=s(),Pn===null)throw Error(n(349));(io&30)!==0||X0(u,s,a)}h.memoizedState=a;var m={value:a,getSnapshot:s};return h.queue=m,Q0(Y0.bind(null,u,m,i),[i]),u.flags|=2048,Ul(9,j0.bind(null,u,m,a,s),void 0,null),a},useId:function(){var i=Sr(),s=Pn.identifierPrefix;if(qt){var a=Hr,u=Vr;a=(u&~(1<<32-gt(u)-1)).toString(32)+a,s=":"+s+"R"+a,a=Il++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=iS++,s=":"+s+"r"+a.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},lS={readContext:ki,useCallback:i_,useContext:ki,useEffect:Zd,useImperativeHandle:n_,useInsertionEffect:J0,useLayoutEffect:e_,useMemo:r_,useReducer:$d,useRef:Z0,useState:function(){return $d(Nl)},useDebugValue:Qd,useDeferredValue:function(i){var s=Bi();return s_(s,Sn.memoizedState,i)},useTransition:function(){var i=$d(Nl)[0],s=Bi().memoizedState;return[i,s]},useMutableSource:G0,useSyncExternalStore:W0,useId:o_,unstable_isNewReconciler:!1},uS={readContext:ki,useCallback:i_,useContext:ki,useEffect:Zd,useImperativeHandle:n_,useInsertionEffect:J0,useLayoutEffect:e_,useMemo:r_,useReducer:Kd,useRef:Z0,useState:function(){return Kd(Nl)},useDebugValue:Qd,useDeferredValue:function(i){var s=Bi();return Sn===null?s.memoizedState=i:s_(s,Sn.memoizedState,i)},useTransition:function(){var i=Kd(Nl)[0],s=Bi().memoizedState;return[i,s]},useMutableSource:G0,useSyncExternalStore:W0,useId:o_,unstable_isNewReconciler:!1};function nr(i,s){if(i&&i.defaultProps){s=Q({},s),i=i.defaultProps;for(var a in i)s[a]===void 0&&(s[a]=i[a]);return s}return s}function Jd(i,s,a,u){s=i.memoizedState,a=a(u,s),a=a==null?s:Q({},s,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var oc={isMounted:function(i){return(i=i._reactInternals)?_r(i)===i:!1},enqueueSetState:function(i,s,a){i=i._reactInternals;var u=ei(),h=Cs(i),m=Wr(u,h);m.payload=s,a!=null&&(m.callback=a),s=Es(i,m,h),s!==null&&(sr(s,i,h,u),Qu(s,i,h))},enqueueReplaceState:function(i,s,a){i=i._reactInternals;var u=ei(),h=Cs(i),m=Wr(u,h);m.tag=1,m.payload=s,a!=null&&(m.callback=a),s=Es(i,m,h),s!==null&&(sr(s,i,h,u),Qu(s,i,h))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var a=ei(),u=Cs(i),h=Wr(a,u);h.tag=2,s!=null&&(h.callback=s),s=Es(i,h,u),s!==null&&(sr(s,i,u,a),Qu(s,i,u))}};function c_(i,s,a,u,h,m,M){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,m,M):s.prototype&&s.prototype.isPureReactComponent?!Sl(a,u)||!Sl(h,m):!0}function f_(i,s,a){var u=!1,h=xs,m=s.contextType;return typeof m=="object"&&m!==null?m=ki(m):(h=si(s)?Qs:Vn.current,u=s.contextTypes,m=(u=u!=null)?Ko(i,h):xs),s=new s(a,m),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=oc,i.stateNode=s,s._reactInternals=i,u&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=h,i.__reactInternalMemoizedMaskedChildContext=m),s}function d_(i,s,a,u){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,u),s.state!==i&&oc.enqueueReplaceState(s,s.state,null)}function eh(i,s,a,u){var h=i.stateNode;h.props=a,h.state=i.memoizedState,h.refs={},zd(i);var m=s.contextType;typeof m=="object"&&m!==null?h.context=ki(m):(m=si(s)?Qs:Vn.current,h.context=Ko(i,m)),h.state=i.memoizedState,m=s.getDerivedStateFromProps,typeof m=="function"&&(Jd(i,s,m,a),h.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(s=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),s!==h.state&&oc.enqueueReplaceState(h,h.state,null),Ju(i,a,h,u),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308)}function ra(i,s){try{var a="",u=s;do a+=fe(u),u=u.return;while(u);var h=a}catch(m){h=`
Error generating stack: `+m.message+`
`+m.stack}return{value:i,source:s,stack:h,digest:null}}function th(i,s,a){return{value:i,source:null,stack:a??null,digest:s??null}}function nh(i,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var cS=typeof WeakMap=="function"?WeakMap:Map;function h_(i,s,a){a=Wr(-1,a),a.tag=3,a.payload={element:null};var u=s.value;return a.callback=function(){hc||(hc=!0,_h=u),nh(i,s)},a}function p_(i,s,a){a=Wr(-1,a),a.tag=3;var u=i.type.getDerivedStateFromError;if(typeof u=="function"){var h=s.value;a.payload=function(){return u(h)},a.callback=function(){nh(i,s)}}var m=i.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){nh(i,s),typeof u!="function"&&(ws===null?ws=new Set([this]):ws.add(this));var M=s.stack;this.componentDidCatch(s.value,{componentStack:M!==null?M:""})}),a}function m_(i,s,a){var u=i.pingCache;if(u===null){u=i.pingCache=new cS;var h=new Set;u.set(s,h)}else h=u.get(s),h===void 0&&(h=new Set,u.set(s,h));h.has(a)||(h.add(a),i=TS.bind(null,i,s,a),s.then(i,i))}function g_(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function __(i,s,a,u,h){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Wr(-1,1),s.tag=2,Es(a,s,1))),a.lanes|=1),i):(i.flags|=65536,i.lanes=h,i)}var fS=R.ReactCurrentOwner,oi=!1;function Jn(i,s,a,u){s.child=i===null?O0(s,null,a,u):ea(s,i.child,a,u)}function v_(i,s,a,u,h){a=a.render;var m=s.ref;return na(s,h),u=Yd(i,s,a,u,m,h),a=qd(),i!==null&&!oi?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~h,Xr(i,s,h)):(qt&&a&&Pd(s),s.flags|=1,Jn(i,s,u,h),s.child)}function y_(i,s,a,u,h){if(i===null){var m=a.type;return typeof m=="function"&&!Th(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=m,x_(i,s,m,u,h)):(i=yc(a.type,null,u,s,s.mode,h),i.ref=s.ref,i.return=s,s.child=i)}if(m=i.child,(i.lanes&h)===0){var M=m.memoizedProps;if(a=a.compare,a=a!==null?a:Sl,a(M,u)&&i.ref===s.ref)return Xr(i,s,h)}return s.flags|=1,i=bs(m,u),i.ref=s.ref,i.return=s,s.child=i}function x_(i,s,a,u,h){if(i!==null){var m=i.memoizedProps;if(Sl(m,u)&&i.ref===s.ref)if(oi=!1,s.pendingProps=u=m,(i.lanes&h)!==0)(i.flags&131072)!==0&&(oi=!0);else return s.lanes=i.lanes,Xr(i,s,h)}return ih(i,s,a,u,h)}function S_(i,s,a){var u=s.pendingProps,h=u.children,m=i!==null?i.memoizedState:null;if(u.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Wt(oa,xi),xi|=a;else{if((a&1073741824)===0)return i=m!==null?m.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Wt(oa,xi),xi|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:a,Wt(oa,xi),xi|=u}else m!==null?(u=m.baseLanes|a,s.memoizedState=null):u=a,Wt(oa,xi),xi|=u;return Jn(i,s,h,a),s.child}function M_(i,s){var a=s.ref;(i===null&&a!==null||i!==null&&i.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function ih(i,s,a,u,h){var m=si(a)?Qs:Vn.current;return m=Ko(s,m),na(s,h),a=Yd(i,s,a,u,m,h),u=qd(),i!==null&&!oi?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~h,Xr(i,s,h)):(qt&&u&&Pd(s),s.flags|=1,Jn(i,s,a,h),s.child)}function E_(i,s,a,u,h){if(si(a)){var m=!0;Wu(s)}else m=!1;if(na(s,h),s.stateNode===null)lc(i,s),f_(s,a,u),eh(s,a,u,h),u=!0;else if(i===null){var M=s.stateNode,I=s.memoizedProps;M.props=I;var O=M.context,ee=a.contextType;typeof ee=="object"&&ee!==null?ee=ki(ee):(ee=si(a)?Qs:Vn.current,ee=Ko(s,ee));var xe=a.getDerivedStateFromProps,Me=typeof xe=="function"||typeof M.getSnapshotBeforeUpdate=="function";Me||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==u||O!==ee)&&d_(s,M,u,ee),Ms=!1;var ye=s.memoizedState;M.state=ye,Ju(s,u,M,h),O=s.memoizedState,I!==u||ye!==O||ri.current||Ms?(typeof xe=="function"&&(Jd(s,a,xe,u),O=s.memoizedState),(I=Ms||c_(s,a,I,u,ye,O,ee))?(Me||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(s.flags|=4194308)):(typeof M.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=O),M.props=u,M.state=O,M.context=ee,u=I):(typeof M.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{M=s.stateNode,B0(i,s),I=s.memoizedProps,ee=s.type===s.elementType?I:nr(s.type,I),M.props=ee,Me=s.pendingProps,ye=M.context,O=a.contextType,typeof O=="object"&&O!==null?O=ki(O):(O=si(a)?Qs:Vn.current,O=Ko(s,O));var Ne=a.getDerivedStateFromProps;(xe=typeof Ne=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==Me||ye!==O)&&d_(s,M,u,O),Ms=!1,ye=s.memoizedState,M.state=ye,Ju(s,u,M,h);var Be=s.memoizedState;I!==Me||ye!==Be||ri.current||Ms?(typeof Ne=="function"&&(Jd(s,a,Ne,u),Be=s.memoizedState),(ee=Ms||c_(s,a,ee,u,ye,Be,O)||!1)?(xe||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,Be,O),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,Be,O)),typeof M.componentDidUpdate=="function"&&(s.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof M.componentDidUpdate!="function"||I===i.memoizedProps&&ye===i.memoizedState||(s.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===i.memoizedProps&&ye===i.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=Be),M.props=u,M.state=Be,M.context=O,u=ee):(typeof M.componentDidUpdate!="function"||I===i.memoizedProps&&ye===i.memoizedState||(s.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===i.memoizedProps&&ye===i.memoizedState||(s.flags|=1024),u=!1)}return rh(i,s,a,u,m,h)}function rh(i,s,a,u,h,m){M_(i,s);var M=(s.flags&128)!==0;if(!u&&!M)return h&&R0(s,a,!1),Xr(i,s,m);u=s.stateNode,fS.current=s;var I=M&&typeof a.getDerivedStateFromError!="function"?null:u.render();return s.flags|=1,i!==null&&M?(s.child=ea(s,i.child,null,m),s.child=ea(s,null,I,m)):Jn(i,s,I,m),s.memoizedState=u.state,h&&R0(s,a,!0),s.child}function T_(i){var s=i.stateNode;s.pendingContext?A0(i,s.pendingContext,s.pendingContext!==s.context):s.context&&A0(i,s.context,!1),Vd(i,s.containerInfo)}function w_(i,s,a,u,h){return Jo(),Nd(h),s.flags|=256,Jn(i,s,a,u),s.child}var sh={dehydrated:null,treeContext:null,retryLane:0};function oh(i){return{baseLanes:i,cachePool:null,transitions:null}}function A_(i,s,a){var u=s.pendingProps,h=Qt.current,m=!1,M=(s.flags&128)!==0,I;if((I=M)||(I=i!==null&&i.memoizedState===null?!1:(h&2)!==0),I?(m=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(h|=1),Wt(Qt,h&1),i===null)return Id(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(M=u.children,i=u.fallback,m?(u=s.mode,m=s.child,M={mode:"hidden",children:M},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=M):m=xc(M,u,0,null),i=lo(i,u,a,null),m.return=s,i.return=s,m.sibling=i,s.child=m,s.child.memoizedState=oh(a),s.memoizedState=sh,i):ah(s,M));if(h=i.memoizedState,h!==null&&(I=h.dehydrated,I!==null))return dS(i,s,M,u,I,h,a);if(m){m=u.fallback,M=s.mode,h=i.child,I=h.sibling;var O={mode:"hidden",children:u.children};return(M&1)===0&&s.child!==h?(u=s.child,u.childLanes=0,u.pendingProps=O,s.deletions=null):(u=bs(h,O),u.subtreeFlags=h.subtreeFlags&14680064),I!==null?m=bs(I,m):(m=lo(m,M,a,null),m.flags|=2),m.return=s,u.return=s,u.sibling=m,s.child=u,u=m,m=s.child,M=i.child.memoizedState,M=M===null?oh(a):{baseLanes:M.baseLanes|a,cachePool:null,transitions:M.transitions},m.memoizedState=M,m.childLanes=i.childLanes&~a,s.memoizedState=sh,u}return m=i.child,i=m.sibling,u=bs(m,{mode:"visible",children:u.children}),(s.mode&1)===0&&(u.lanes=a),u.return=s,u.sibling=null,i!==null&&(a=s.deletions,a===null?(s.deletions=[i],s.flags|=16):a.push(i)),s.child=u,s.memoizedState=null,u}function ah(i,s){return s=xc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function ac(i,s,a,u){return u!==null&&Nd(u),ea(s,i.child,null,a),i=ah(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function dS(i,s,a,u,h,m,M){if(a)return s.flags&256?(s.flags&=-257,u=th(Error(n(422))),ac(i,s,M,u)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(m=u.fallback,h=s.mode,u=xc({mode:"visible",children:u.children},h,0,null),m=lo(m,h,M,null),m.flags|=2,u.return=s,m.return=s,u.sibling=m,s.child=u,(s.mode&1)!==0&&ea(s,i.child,null,M),s.child.memoizedState=oh(M),s.memoizedState=sh,m);if((s.mode&1)===0)return ac(i,s,M,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var I=u.dgst;return u=I,m=Error(n(419)),u=th(m,u,void 0),ac(i,s,M,u)}if(I=(M&i.childLanes)!==0,oi||I){if(u=Pn,u!==null){switch(M&-M){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|M))!==0?0:h,h!==0&&h!==m.retryLane&&(m.retryLane=h,Gr(i,h),sr(u,i,h,-1))}return Eh(),u=th(Error(n(421))),ac(i,s,M,u)}return h.data==="$?"?(s.flags|=128,s.child=i.child,s=wS.bind(null,i),h._reactRetry=s,null):(i=m.treeContext,yi=vs(h.nextSibling),vi=s,qt=!0,tr=null,i!==null&&(Fi[Oi++]=Vr,Fi[Oi++]=Hr,Fi[Oi++]=Js,Vr=i.id,Hr=i.overflow,Js=s),s=ah(s,u.children),s.flags|=4096,s)}function C_(i,s,a){i.lanes|=s;var u=i.alternate;u!==null&&(u.lanes|=s),kd(i.return,s,a)}function lh(i,s,a,u,h){var m=i.memoizedState;m===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:h}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=a,m.tailMode=h)}function R_(i,s,a){var u=s.pendingProps,h=u.revealOrder,m=u.tail;if(Jn(i,s,u.children,a),u=Qt.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&C_(i,a,s);else if(i.tag===19)C_(i,a,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}if(Wt(Qt,u),(s.mode&1)===0)s.memoizedState=null;else switch(h){case"forwards":for(a=s.child,h=null;a!==null;)i=a.alternate,i!==null&&ec(i)===null&&(h=a),a=a.sibling;a=h,a===null?(h=s.child,s.child=null):(h=a.sibling,a.sibling=null),lh(s,!1,h,a,m);break;case"backwards":for(a=null,h=s.child,s.child=null;h!==null;){if(i=h.alternate,i!==null&&ec(i)===null){s.child=h;break}i=h.sibling,h.sibling=a,a=h,h=i}lh(s,!0,a,null,m);break;case"together":lh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function lc(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function Xr(i,s,a){if(i!==null&&(s.dependencies=i.dependencies),ro|=s.lanes,(a&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(n(153));if(s.child!==null){for(i=s.child,a=bs(i,i.pendingProps),s.child=a,a.return=s;i.sibling!==null;)i=i.sibling,a=a.sibling=bs(i,i.pendingProps),a.return=s;a.sibling=null}return s.child}function hS(i,s,a){switch(s.tag){case 3:T_(s),Jo();break;case 5:H0(s);break;case 1:si(s.type)&&Wu(s);break;case 4:Vd(s,s.stateNode.containerInfo);break;case 10:var u=s.type._context,h=s.memoizedProps.value;Wt(Ku,u._currentValue),u._currentValue=h;break;case 13:if(u=s.memoizedState,u!==null)return u.dehydrated!==null?(Wt(Qt,Qt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?A_(i,s,a):(Wt(Qt,Qt.current&1),i=Xr(i,s,a),i!==null?i.sibling:null);Wt(Qt,Qt.current&1);break;case 19:if(u=(a&s.childLanes)!==0,(i.flags&128)!==0){if(u)return R_(i,s,a);s.flags|=128}if(h=s.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Wt(Qt,Qt.current),u)break;return null;case 22:case 23:return s.lanes=0,S_(i,s,a)}return Xr(i,s,a)}var b_,uh,P_,L_;b_=function(i,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)i.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},uh=function(){},P_=function(i,s,a,u){var h=i.memoizedProps;if(h!==u){i=s.stateNode,no(xr.current);var m=null;switch(a){case"input":h=H(i,h),u=H(i,u),m=[];break;case"select":h=Q({},h,{value:void 0}),u=Q({},u,{value:void 0}),m=[];break;case"textarea":h=T(i,h),u=T(i,u),m=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(i.onclick=Vu)}dt(a,u);var M;a=null;for(ee in h)if(!u.hasOwnProperty(ee)&&h.hasOwnProperty(ee)&&h[ee]!=null)if(ee==="style"){var I=h[ee];for(M in I)I.hasOwnProperty(M)&&(a||(a={}),a[M]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(o.hasOwnProperty(ee)?m||(m=[]):(m=m||[]).push(ee,null));for(ee in u){var O=u[ee];if(I=h!=null?h[ee]:void 0,u.hasOwnProperty(ee)&&O!==I&&(O!=null||I!=null))if(ee==="style")if(I){for(M in I)!I.hasOwnProperty(M)||O&&O.hasOwnProperty(M)||(a||(a={}),a[M]="");for(M in O)O.hasOwnProperty(M)&&I[M]!==O[M]&&(a||(a={}),a[M]=O[M])}else a||(m||(m=[]),m.push(ee,a)),a=O;else ee==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,I=I?I.__html:void 0,O!=null&&I!==O&&(m=m||[]).push(ee,O)):ee==="children"?typeof O!="string"&&typeof O!="number"||(m=m||[]).push(ee,""+O):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(o.hasOwnProperty(ee)?(O!=null&&ee==="onScroll"&&jt("scroll",i),m||I===O||(m=[])):(m=m||[]).push(ee,O))}a&&(m=m||[]).push("style",a);var ee=m;(s.updateQueue=ee)&&(s.flags|=4)}},L_=function(i,s,a,u){a!==u&&(s.flags|=4)};function Fl(i,s){if(!qt)switch(i.tailMode){case"hidden":s=i.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function Gn(i){var s=i.alternate!==null&&i.alternate.child===i.child,a=0,u=0;if(s)for(var h=i.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=i,h=h.sibling;else for(h=i.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=i,h=h.sibling;return i.subtreeFlags|=u,i.childLanes=a,s}function pS(i,s,a){var u=s.pendingProps;switch(Ld(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gn(s),null;case 1:return si(s.type)&&Gu(),Gn(s),null;case 3:return u=s.stateNode,ia(),Yt(ri),Yt(Vn),Wd(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(i===null||i.child===null)&&(qu(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,tr!==null&&(xh(tr),tr=null))),uh(i,s),Gn(s),null;case 5:Hd(s);var h=no(Ll.current);if(a=s.type,i!==null&&s.stateNode!=null)P_(i,s,a,u,h),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!u){if(s.stateNode===null)throw Error(n(166));return Gn(s),null}if(i=no(xr.current),qu(s)){u=s.stateNode,a=s.type;var m=s.memoizedProps;switch(u[yr]=s,u[Al]=m,i=(s.mode&1)!==0,a){case"dialog":jt("cancel",u),jt("close",u);break;case"iframe":case"object":case"embed":jt("load",u);break;case"video":case"audio":for(h=0;h<El.length;h++)jt(El[h],u);break;case"source":jt("error",u);break;case"img":case"image":case"link":jt("error",u),jt("load",u);break;case"details":jt("toggle",u);break;case"input":cn(u,m),jt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},jt("invalid",u);break;case"textarea":U(u,m),jt("invalid",u)}dt(a,m),h=null;for(var M in m)if(m.hasOwnProperty(M)){var I=m[M];M==="children"?typeof I=="string"?u.textContent!==I&&(m.suppressHydrationWarning!==!0&&zu(u.textContent,I,i),h=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&zu(u.textContent,I,i),h=["children",""+I]):o.hasOwnProperty(M)&&I!=null&&M==="onScroll"&&jt("scroll",u)}switch(a){case"input":St(u),et(u,m,!0);break;case"textarea":St(u),me(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Vu)}u=h,s.updateQueue=u,u!==null&&(s.flags|=4)}else{M=h.nodeType===9?h:h.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=re(a)),i==="http://www.w3.org/1999/xhtml"?a==="script"?(i=M.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof u.is=="string"?i=M.createElement(a,{is:u.is}):(i=M.createElement(a),a==="select"&&(M=i,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):i=M.createElementNS(i,a),i[yr]=s,i[Al]=u,b_(i,s,!1,!1),s.stateNode=i;e:{switch(M=ht(a,u),a){case"dialog":jt("cancel",i),jt("close",i),h=u;break;case"iframe":case"object":case"embed":jt("load",i),h=u;break;case"video":case"audio":for(h=0;h<El.length;h++)jt(El[h],i);h=u;break;case"source":jt("error",i),h=u;break;case"img":case"image":case"link":jt("error",i),jt("load",i),h=u;break;case"details":jt("toggle",i),h=u;break;case"input":cn(i,u),h=H(i,u),jt("invalid",i);break;case"option":h=u;break;case"select":i._wrapperState={wasMultiple:!!u.multiple},h=Q({},u,{value:void 0}),jt("invalid",i);break;case"textarea":U(i,u),h=T(i,u),jt("invalid",i);break;default:h=u}dt(a,h),I=h;for(m in I)if(I.hasOwnProperty(m)){var O=I[m];m==="style"?ot(i,O):m==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ue(i,O)):m==="children"?typeof O=="string"?(a!=="textarea"||O!=="")&&_t(i,O):typeof O=="number"&&_t(i,""+O):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?O!=null&&m==="onScroll"&&jt("scroll",i):O!=null&&L(i,m,O,M))}switch(a){case"input":St(i),et(i,u,!1);break;case"textarea":St(i),me(i);break;case"option":u.value!=null&&i.setAttribute("value",""+_e(u.value));break;case"select":i.multiple=!!u.multiple,m=u.value,m!=null?P(i,!!u.multiple,m,!1):u.defaultValue!=null&&P(i,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(i.onclick=Vu)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Gn(s),null;case 6:if(i&&s.stateNode!=null)L_(i,s,i.memoizedProps,u);else{if(typeof u!="string"&&s.stateNode===null)throw Error(n(166));if(a=no(Ll.current),no(xr.current),qu(s)){if(u=s.stateNode,a=s.memoizedProps,u[yr]=s,(m=u.nodeValue!==a)&&(i=vi,i!==null))switch(i.tag){case 3:zu(u.nodeValue,a,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&zu(u.nodeValue,a,(i.mode&1)!==0)}m&&(s.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[yr]=s,s.stateNode=u}return Gn(s),null;case 13:if(Yt(Qt),u=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(qt&&yi!==null&&(s.mode&1)!==0&&(s.flags&128)===0)N0(),Jo(),s.flags|=98560,m=!1;else if(m=qu(s),u!==null&&u.dehydrated!==null){if(i===null){if(!m)throw Error(n(318));if(m=s.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(n(317));m[yr]=s}else Jo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Gn(s),m=!1}else tr!==null&&(xh(tr),tr=null),m=!0;if(!m)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(u=u!==null,u!==(i!==null&&i.memoizedState!==null)&&u&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Qt.current&1)!==0?Mn===0&&(Mn=3):Eh())),s.updateQueue!==null&&(s.flags|=4),Gn(s),null);case 4:return ia(),uh(i,s),i===null&&Tl(s.stateNode.containerInfo),Gn(s),null;case 10:return Od(s.type._context),Gn(s),null;case 17:return si(s.type)&&Gu(),Gn(s),null;case 19:if(Yt(Qt),m=s.memoizedState,m===null)return Gn(s),null;if(u=(s.flags&128)!==0,M=m.rendering,M===null)if(u)Fl(m,!1);else{if(Mn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(M=ec(i),M!==null){for(s.flags|=128,Fl(m,!1),u=M.updateQueue,u!==null&&(s.updateQueue=u,s.flags|=4),s.subtreeFlags=0,u=a,a=s.child;a!==null;)m=a,i=u,m.flags&=14680066,M=m.alternate,M===null?(m.childLanes=0,m.lanes=i,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=M.childLanes,m.lanes=M.lanes,m.child=M.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=M.memoizedProps,m.memoizedState=M.memoizedState,m.updateQueue=M.updateQueue,m.type=M.type,i=M.dependencies,m.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a=a.sibling;return Wt(Qt,Qt.current&1|2),s.child}i=i.sibling}m.tail!==null&&Te()>aa&&(s.flags|=128,u=!0,Fl(m,!1),s.lanes=4194304)}else{if(!u)if(i=ec(M),i!==null){if(s.flags|=128,u=!0,a=i.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Fl(m,!0),m.tail===null&&m.tailMode==="hidden"&&!M.alternate&&!qt)return Gn(s),null}else 2*Te()-m.renderingStartTime>aa&&a!==1073741824&&(s.flags|=128,u=!0,Fl(m,!1),s.lanes=4194304);m.isBackwards?(M.sibling=s.child,s.child=M):(a=m.last,a!==null?a.sibling=M:s.child=M,m.last=M)}return m.tail!==null?(s=m.tail,m.rendering=s,m.tail=s.sibling,m.renderingStartTime=Te(),s.sibling=null,a=Qt.current,Wt(Qt,u?a&1|2:a&1),s):(Gn(s),null);case 22:case 23:return Mh(),u=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==u&&(s.flags|=8192),u&&(s.mode&1)!==0?(xi&1073741824)!==0&&(Gn(s),s.subtreeFlags&6&&(s.flags|=8192)):Gn(s),null;case 24:return null;case 25:return null}throw Error(n(156,s.tag))}function mS(i,s){switch(Ld(s),s.tag){case 1:return si(s.type)&&Gu(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return ia(),Yt(ri),Yt(Vn),Wd(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Hd(s),null;case 13:if(Yt(Qt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(n(340));Jo()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Yt(Qt),null;case 4:return ia(),null;case 10:return Od(s.type._context),null;case 22:case 23:return Mh(),null;case 24:return null;default:return null}}var uc=!1,Wn=!1,gS=typeof WeakSet=="function"?WeakSet:Set,ke=null;function sa(i,s){var a=i.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){on(i,s,u)}else a.current=null}function ch(i,s,a){try{a()}catch(u){on(i,s,u)}}var D_=!1;function _S(i,s){if(Md=bu,i=c0(),pd(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else e:{a=(a=i.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var h=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var M=0,I=-1,O=-1,ee=0,xe=0,Me=i,ye=null;t:for(;;){for(var Ne;Me!==a||h!==0&&Me.nodeType!==3||(I=M+h),Me!==m||u!==0&&Me.nodeType!==3||(O=M+u),Me.nodeType===3&&(M+=Me.nodeValue.length),(Ne=Me.firstChild)!==null;)ye=Me,Me=Ne;for(;;){if(Me===i)break t;if(ye===a&&++ee===h&&(I=M),ye===m&&++xe===u&&(O=M),(Ne=Me.nextSibling)!==null)break;Me=ye,ye=Me.parentNode}Me=Ne}a=I===-1||O===-1?null:{start:I,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ed={focusedElem:i,selectionRange:a},bu=!1,ke=s;ke!==null;)if(s=ke,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,ke=i;else for(;ke!==null;){s=ke;try{var Be=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var He=Be.memoizedProps,fn=Be.memoizedState,$=s.stateNode,V=$.getSnapshotBeforeUpdate(s.elementType===s.type?He:nr(s.type,He),fn);$.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var Z=s.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ae){on(s,s.return,Ae)}if(i=s.sibling,i!==null){i.return=s.return,ke=i;break}ke=s.return}return Be=D_,D_=!1,Be}function Ol(i,s,a){var u=s.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&i)===i){var m=h.destroy;h.destroy=void 0,m!==void 0&&ch(s,a,m)}h=h.next}while(h!==u)}}function cc(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&i)===i){var u=a.create;a.destroy=u()}a=a.next}while(a!==s)}}function fh(i){var s=i.ref;if(s!==null){var a=i.stateNode;switch(i.tag){case 5:i=a;break;default:i=a}typeof s=="function"?s(i):s.current=i}}function I_(i){var s=i.alternate;s!==null&&(i.alternate=null,I_(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[yr],delete s[Al],delete s[Cd],delete s[J3],delete s[eS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function N_(i){return i.tag===5||i.tag===3||i.tag===4}function U_(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||N_(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function dh(i,s,a){var u=i.tag;if(u===5||u===6)i=i.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(i,s):a.insertBefore(i,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(i,a)):(s=a,s.appendChild(i)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Vu));else if(u!==4&&(i=i.child,i!==null))for(dh(i,s,a),i=i.sibling;i!==null;)dh(i,s,a),i=i.sibling}function hh(i,s,a){var u=i.tag;if(u===5||u===6)i=i.stateNode,s?a.insertBefore(i,s):a.appendChild(i);else if(u!==4&&(i=i.child,i!==null))for(hh(i,s,a),i=i.sibling;i!==null;)hh(i,s,a),i=i.sibling}var Un=null,ir=!1;function Ts(i,s,a){for(a=a.child;a!==null;)F_(i,s,a),a=a.sibling}function F_(i,s,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Ut,a)}catch{}switch(a.tag){case 5:Wn||sa(a,s);case 6:var u=Un,h=ir;Un=null,Ts(i,s,a),Un=u,ir=h,Un!==null&&(ir?(i=Un,a=a.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):Un.removeChild(a.stateNode));break;case 18:Un!==null&&(ir?(i=Un,a=a.stateNode,i.nodeType===8?Ad(i.parentNode,a):i.nodeType===1&&Ad(i,a),ml(i)):Ad(Un,a.stateNode));break;case 4:u=Un,h=ir,Un=a.stateNode.containerInfo,ir=!0,Ts(i,s,a),Un=u,ir=h;break;case 0:case 11:case 14:case 15:if(!Wn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var m=h,M=m.destroy;m=m.tag,M!==void 0&&((m&2)!==0||(m&4)!==0)&&ch(a,s,M),h=h.next}while(h!==u)}Ts(i,s,a);break;case 1:if(!Wn&&(sa(a,s),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(I){on(a,s,I)}Ts(i,s,a);break;case 21:Ts(i,s,a);break;case 22:a.mode&1?(Wn=(u=Wn)||a.memoizedState!==null,Ts(i,s,a),Wn=u):Ts(i,s,a);break;default:Ts(i,s,a)}}function O_(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var a=i.stateNode;a===null&&(a=i.stateNode=new gS),s.forEach(function(u){var h=AS.bind(null,i,u);a.has(u)||(a.add(u),u.then(h,h))})}}function rr(i,s){var a=s.deletions;if(a!==null)for(var u=0;u<a.length;u++){var h=a[u];try{var m=i,M=s,I=M;e:for(;I!==null;){switch(I.tag){case 5:Un=I.stateNode,ir=!1;break e;case 3:Un=I.stateNode.containerInfo,ir=!0;break e;case 4:Un=I.stateNode.containerInfo,ir=!0;break e}I=I.return}if(Un===null)throw Error(n(160));F_(m,M,h),Un=null,ir=!1;var O=h.alternate;O!==null&&(O.return=null),h.return=null}catch(ee){on(h,s,ee)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)k_(s,i),s=s.sibling}function k_(i,s){var a=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(rr(s,i),Mr(i),u&4){try{Ol(3,i,i.return),cc(3,i)}catch(He){on(i,i.return,He)}try{Ol(5,i,i.return)}catch(He){on(i,i.return,He)}}break;case 1:rr(s,i),Mr(i),u&512&&a!==null&&sa(a,a.return);break;case 5:if(rr(s,i),Mr(i),u&512&&a!==null&&sa(a,a.return),i.flags&32){var h=i.stateNode;try{_t(h,"")}catch(He){on(i,i.return,He)}}if(u&4&&(h=i.stateNode,h!=null)){var m=i.memoizedProps,M=a!==null?a.memoizedProps:m,I=i.type,O=i.updateQueue;if(i.updateQueue=null,O!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&mt(h,m),ht(I,M);var ee=ht(I,m);for(M=0;M<O.length;M+=2){var xe=O[M],Me=O[M+1];xe==="style"?ot(h,Me):xe==="dangerouslySetInnerHTML"?Ue(h,Me):xe==="children"?_t(h,Me):L(h,xe,Me,ee)}switch(I){case"input":ft(h,m);break;case"textarea":ce(h,m);break;case"select":var ye=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!m.multiple;var Ne=m.value;Ne!=null?P(h,!!m.multiple,Ne,!1):ye!==!!m.multiple&&(m.defaultValue!=null?P(h,!!m.multiple,m.defaultValue,!0):P(h,!!m.multiple,m.multiple?[]:"",!1))}h[Al]=m}catch(He){on(i,i.return,He)}}break;case 6:if(rr(s,i),Mr(i),u&4){if(i.stateNode===null)throw Error(n(162));h=i.stateNode,m=i.memoizedProps;try{h.nodeValue=m}catch(He){on(i,i.return,He)}}break;case 3:if(rr(s,i),Mr(i),u&4&&a!==null&&a.memoizedState.isDehydrated)try{ml(s.containerInfo)}catch(He){on(i,i.return,He)}break;case 4:rr(s,i),Mr(i);break;case 13:rr(s,i),Mr(i),h=i.child,h.flags&8192&&(m=h.memoizedState!==null,h.stateNode.isHidden=m,!m||h.alternate!==null&&h.alternate.memoizedState!==null||(gh=Te())),u&4&&O_(i);break;case 22:if(xe=a!==null&&a.memoizedState!==null,i.mode&1?(Wn=(ee=Wn)||xe,rr(s,i),Wn=ee):rr(s,i),Mr(i),u&8192){if(ee=i.memoizedState!==null,(i.stateNode.isHidden=ee)&&!xe&&(i.mode&1)!==0)for(ke=i,xe=i.child;xe!==null;){for(Me=ke=xe;ke!==null;){switch(ye=ke,Ne=ye.child,ye.tag){case 0:case 11:case 14:case 15:Ol(4,ye,ye.return);break;case 1:sa(ye,ye.return);var Be=ye.stateNode;if(typeof Be.componentWillUnmount=="function"){u=ye,a=ye.return;try{s=u,Be.props=s.memoizedProps,Be.state=s.memoizedState,Be.componentWillUnmount()}catch(He){on(u,a,He)}}break;case 5:sa(ye,ye.return);break;case 22:if(ye.memoizedState!==null){V_(Me);continue}}Ne!==null?(Ne.return=ye,ke=Ne):V_(Me)}xe=xe.sibling}e:for(xe=null,Me=i;;){if(Me.tag===5){if(xe===null){xe=Me;try{h=Me.stateNode,ee?(m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=Me.stateNode,O=Me.memoizedProps.style,M=O!=null&&O.hasOwnProperty("display")?O.display:null,I.style.display=tt("display",M))}catch(He){on(i,i.return,He)}}}else if(Me.tag===6){if(xe===null)try{Me.stateNode.nodeValue=ee?"":Me.memoizedProps}catch(He){on(i,i.return,He)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===i)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===i)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===i)break e;xe===Me&&(xe=null),Me=Me.return}xe===Me&&(xe=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:rr(s,i),Mr(i),u&4&&O_(i);break;case 21:break;default:rr(s,i),Mr(i)}}function Mr(i){var s=i.flags;if(s&2){try{e:{for(var a=i.return;a!==null;){if(N_(a)){var u=a;break e}a=a.return}throw Error(n(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(_t(h,""),u.flags&=-33);var m=U_(i);hh(i,m,h);break;case 3:case 4:var M=u.stateNode.containerInfo,I=U_(i);dh(i,I,M);break;default:throw Error(n(161))}}catch(O){on(i,i.return,O)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function vS(i,s,a){ke=i,B_(i)}function B_(i,s,a){for(var u=(i.mode&1)!==0;ke!==null;){var h=ke,m=h.child;if(h.tag===22&&u){var M=h.memoizedState!==null||uc;if(!M){var I=h.alternate,O=I!==null&&I.memoizedState!==null||Wn;I=uc;var ee=Wn;if(uc=M,(Wn=O)&&!ee)for(ke=h;ke!==null;)M=ke,O=M.child,M.tag===22&&M.memoizedState!==null?H_(h):O!==null?(O.return=M,ke=O):H_(h);for(;m!==null;)ke=m,B_(m),m=m.sibling;ke=h,uc=I,Wn=ee}z_(i)}else(h.subtreeFlags&8772)!==0&&m!==null?(m.return=h,ke=m):z_(i)}}function z_(i){for(;ke!==null;){var s=ke;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Wn||cc(5,s);break;case 1:var u=s.stateNode;if(s.flags&4&&!Wn)if(a===null)u.componentDidMount();else{var h=s.elementType===s.type?a.memoizedProps:nr(s.type,a.memoizedProps);u.componentDidUpdate(h,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=s.updateQueue;m!==null&&V0(s,m,u);break;case 3:var M=s.updateQueue;if(M!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}V0(s,M,a)}break;case 5:var I=s.stateNode;if(a===null&&s.flags&4){a=I;var O=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&a.focus();break;case"img":O.src&&(a.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ee=s.alternate;if(ee!==null){var xe=ee.memoizedState;if(xe!==null){var Me=xe.dehydrated;Me!==null&&ml(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Wn||s.flags&512&&fh(s)}catch(ye){on(s,s.return,ye)}}if(s===i){ke=null;break}if(a=s.sibling,a!==null){a.return=s.return,ke=a;break}ke=s.return}}function V_(i){for(;ke!==null;){var s=ke;if(s===i){ke=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ke=a;break}ke=s.return}}function H_(i){for(;ke!==null;){var s=ke;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{cc(4,s)}catch(O){on(s,a,O)}break;case 1:var u=s.stateNode;if(typeof u.componentDidMount=="function"){var h=s.return;try{u.componentDidMount()}catch(O){on(s,h,O)}}var m=s.return;try{fh(s)}catch(O){on(s,m,O)}break;case 5:var M=s.return;try{fh(s)}catch(O){on(s,M,O)}}}catch(O){on(s,s.return,O)}if(s===i){ke=null;break}var I=s.sibling;if(I!==null){I.return=s.return,ke=I;break}ke=s.return}}var yS=Math.ceil,fc=R.ReactCurrentDispatcher,ph=R.ReactCurrentOwner,zi=R.ReactCurrentBatchConfig,bt=0,Pn=null,hn=null,Fn=0,xi=0,oa=ys(0),Mn=0,kl=null,ro=0,dc=0,mh=0,Bl=null,ai=null,gh=0,aa=1/0,jr=null,hc=!1,_h=null,ws=null,pc=!1,As=null,mc=0,zl=0,vh=null,gc=-1,_c=0;function ei(){return(bt&6)!==0?Te():gc!==-1?gc:gc=Te()}function Cs(i){return(i.mode&1)===0?1:(bt&2)!==0&&Fn!==0?Fn&-Fn:nS.transition!==null?(_c===0&&(_c=Qn()),_c):(i=kt,i!==0||(i=window.event,i=i===void 0?16:Wg(i.type)),i)}function sr(i,s,a,u){if(50<zl)throw zl=0,vh=null,Error(n(185));ii(i,a,u),((bt&2)===0||i!==Pn)&&(i===Pn&&((bt&2)===0&&(dc|=a),Mn===4&&Rs(i,Fn)),li(i,u),a===1&&bt===0&&(s.mode&1)===0&&(aa=Te()+500,Xu&&Ss()))}function li(i,s){var a=i.callbackNode;Ni(i,s);var u=vr(i,i===Pn?Fn:0);if(u===0)a!==null&&ne(a),i.callbackNode=null,i.callbackPriority=0;else if(s=u&-u,i.callbackPriority!==s){if(a!=null&&ne(a),s===1)i.tag===0?tS(W_.bind(null,i)):b0(W_.bind(null,i)),Z3(function(){(bt&6)===0&&Ss()}),a=null;else{switch(Fg(u)){case 1:a=Ve;break;case 4:a=at;break;case 16:a=ut;break;case 536870912:a=Tt;break;default:a=ut}a=Q_(a,G_.bind(null,i))}i.callbackPriority=s,i.callbackNode=a}}function G_(i,s){if(gc=-1,_c=0,(bt&6)!==0)throw Error(n(327));var a=i.callbackNode;if(la()&&i.callbackNode!==a)return null;var u=vr(i,i===Pn?Fn:0);if(u===0)return null;if((u&30)!==0||(u&i.expiredLanes)!==0||s)s=vc(i,u);else{s=u;var h=bt;bt|=2;var m=j_();(Pn!==i||Fn!==s)&&(jr=null,aa=Te()+500,oo(i,s));do try{MS();break}catch(I){X_(i,I)}while(!0);Fd(),fc.current=m,bt=h,hn!==null?s=0:(Pn=null,Fn=0,s=Mn)}if(s!==0){if(s===2&&(h=kr(i),h!==0&&(u=h,s=yh(i,h))),s===1)throw a=kl,oo(i,0),Rs(i,u),li(i,Te()),a;if(s===6)Rs(i,u);else{if(h=i.current.alternate,(u&30)===0&&!xS(h)&&(s=vc(i,u),s===2&&(m=kr(i),m!==0&&(u=m,s=yh(i,m))),s===1))throw a=kl,oo(i,0),Rs(i,u),li(i,Te()),a;switch(i.finishedWork=h,i.finishedLanes=u,s){case 0:case 1:throw Error(n(345));case 2:ao(i,ai,jr);break;case 3:if(Rs(i,u),(u&130023424)===u&&(s=gh+500-Te(),10<s)){if(vr(i,0)!==0)break;if(h=i.suspendedLanes,(h&u)!==u){ei(),i.pingedLanes|=i.suspendedLanes&h;break}i.timeoutHandle=wd(ao.bind(null,i,ai,jr),s);break}ao(i,ai,jr);break;case 4:if(Rs(i,u),(u&4194240)===u)break;for(s=i.eventTimes,h=-1;0<u;){var M=31-gt(u);m=1<<M,M=s[M],M>h&&(h=M),u&=~m}if(u=h,u=Te()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*yS(u/1960))-u,10<u){i.timeoutHandle=wd(ao.bind(null,i,ai,jr),u);break}ao(i,ai,jr);break;case 5:ao(i,ai,jr);break;default:throw Error(n(329))}}}return li(i,Te()),i.callbackNode===a?G_.bind(null,i):null}function yh(i,s){var a=Bl;return i.current.memoizedState.isDehydrated&&(oo(i,s).flags|=256),i=vc(i,s),i!==2&&(s=ai,ai=a,s!==null&&xh(s)),i}function xh(i){ai===null?ai=i:ai.push.apply(ai,i)}function xS(i){for(var s=i;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var h=a[u],m=h.getSnapshot;h=h.value;try{if(!er(m(),h))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Rs(i,s){for(s&=~mh,s&=~dc,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var a=31-gt(s),u=1<<a;i[a]=-1,s&=~u}}function W_(i){if((bt&6)!==0)throw Error(n(327));la();var s=vr(i,0);if((s&1)===0)return li(i,Te()),null;var a=vc(i,s);if(i.tag!==0&&a===2){var u=kr(i);u!==0&&(s=u,a=yh(i,u))}if(a===1)throw a=kl,oo(i,0),Rs(i,s),li(i,Te()),a;if(a===6)throw Error(n(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,ao(i,ai,jr),li(i,Te()),null}function Sh(i,s){var a=bt;bt|=1;try{return i(s)}finally{bt=a,bt===0&&(aa=Te()+500,Xu&&Ss())}}function so(i){As!==null&&As.tag===0&&(bt&6)===0&&la();var s=bt;bt|=1;var a=zi.transition,u=kt;try{if(zi.transition=null,kt=1,i)return i()}finally{kt=u,zi.transition=a,bt=s,(bt&6)===0&&Ss()}}function Mh(){xi=oa.current,Yt(oa)}function oo(i,s){i.finishedWork=null,i.finishedLanes=0;var a=i.timeoutHandle;if(a!==-1&&(i.timeoutHandle=-1,K3(a)),hn!==null)for(a=hn.return;a!==null;){var u=a;switch(Ld(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Gu();break;case 3:ia(),Yt(ri),Yt(Vn),Wd();break;case 5:Hd(u);break;case 4:ia();break;case 13:Yt(Qt);break;case 19:Yt(Qt);break;case 10:Od(u.type._context);break;case 22:case 23:Mh()}a=a.return}if(Pn=i,hn=i=bs(i.current,null),Fn=xi=s,Mn=0,kl=null,mh=dc=ro=0,ai=Bl=null,to!==null){for(s=0;s<to.length;s++)if(a=to[s],u=a.interleaved,u!==null){a.interleaved=null;var h=u.next,m=a.pending;if(m!==null){var M=m.next;m.next=h,u.next=M}a.pending=u}to=null}return i}function X_(i,s){do{var a=hn;try{if(Fd(),tc.current=sc,nc){for(var u=Jt.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}nc=!1}if(io=0,bn=Sn=Jt=null,Dl=!1,Il=0,ph.current=null,a===null||a.return===null){Mn=1,kl=s,hn=null;break}e:{var m=i,M=a.return,I=a,O=s;if(s=Fn,I.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var ee=O,xe=I,Me=xe.tag;if((xe.mode&1)===0&&(Me===0||Me===11||Me===15)){var ye=xe.alternate;ye?(xe.updateQueue=ye.updateQueue,xe.memoizedState=ye.memoizedState,xe.lanes=ye.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ne=g_(M);if(Ne!==null){Ne.flags&=-257,__(Ne,M,I,m,s),Ne.mode&1&&m_(m,ee,s),s=Ne,O=ee;var Be=s.updateQueue;if(Be===null){var He=new Set;He.add(O),s.updateQueue=He}else Be.add(O);break e}else{if((s&1)===0){m_(m,ee,s),Eh();break e}O=Error(n(426))}}else if(qt&&I.mode&1){var fn=g_(M);if(fn!==null){(fn.flags&65536)===0&&(fn.flags|=256),__(fn,M,I,m,s),Nd(ra(O,I));break e}}m=O=ra(O,I),Mn!==4&&(Mn=2),Bl===null?Bl=[m]:Bl.push(m),m=M;do{switch(m.tag){case 3:m.flags|=65536,s&=-s,m.lanes|=s;var $=h_(m,O,s);z0(m,$);break e;case 1:I=O;var V=m.type,Z=m.stateNode;if((m.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(ws===null||!ws.has(Z)))){m.flags|=65536,s&=-s,m.lanes|=s;var Ae=p_(m,I,s);z0(m,Ae);break e}}m=m.return}while(m!==null)}q_(a)}catch(Ye){s=Ye,hn===a&&a!==null&&(hn=a=a.return);continue}break}while(!0)}function j_(){var i=fc.current;return fc.current=sc,i===null?sc:i}function Eh(){(Mn===0||Mn===3||Mn===2)&&(Mn=4),Pn===null||(ro&268435455)===0&&(dc&268435455)===0||Rs(Pn,Fn)}function vc(i,s){var a=bt;bt|=2;var u=j_();(Pn!==i||Fn!==s)&&(jr=null,oo(i,s));do try{SS();break}catch(h){X_(i,h)}while(!0);if(Fd(),bt=a,fc.current=u,hn!==null)throw Error(n(261));return Pn=null,Fn=0,Mn}function SS(){for(;hn!==null;)Y_(hn)}function MS(){for(;hn!==null&&!Y();)Y_(hn)}function Y_(i){var s=Z_(i.alternate,i,xi);i.memoizedProps=i.pendingProps,s===null?q_(i):hn=s,ph.current=null}function q_(i){var s=i;do{var a=s.alternate;if(i=s.return,(s.flags&32768)===0){if(a=pS(a,s,xi),a!==null){hn=a;return}}else{if(a=mS(a,s),a!==null){a.flags&=32767,hn=a;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Mn=6,hn=null;return}}if(s=s.sibling,s!==null){hn=s;return}hn=s=i}while(s!==null);Mn===0&&(Mn=5)}function ao(i,s,a){var u=kt,h=zi.transition;try{zi.transition=null,kt=1,ES(i,s,a,u)}finally{zi.transition=h,kt=u}return null}function ES(i,s,a,u){do la();while(As!==null);if((bt&6)!==0)throw Error(n(327));a=i.finishedWork;var h=i.finishedLanes;if(a===null)return null;if(i.finishedWork=null,i.finishedLanes=0,a===i.current)throw Error(n(177));i.callbackNode=null,i.callbackPriority=0;var m=a.lanes|a.childLanes;if(Au(i,m),i===Pn&&(hn=Pn=null,Fn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||pc||(pc=!0,Q_(ut,function(){return la(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=zi.transition,zi.transition=null;var M=kt;kt=1;var I=bt;bt|=4,ph.current=null,_S(i,a),k_(a,i),G3(Ed),bu=!!Md,Ed=Md=null,i.current=a,vS(a),Re(),bt=I,kt=M,zi.transition=m}else i.current=a;if(pc&&(pc=!1,As=i,mc=h),m=i.pendingLanes,m===0&&(ws=null),Bn(a.stateNode),li(i,Te()),s!==null)for(u=i.onRecoverableError,a=0;a<s.length;a++)h=s[a],u(h.value,{componentStack:h.stack,digest:h.digest});if(hc)throw hc=!1,i=_h,_h=null,i;return(mc&1)!==0&&i.tag!==0&&la(),m=i.pendingLanes,(m&1)!==0?i===vh?zl++:(zl=0,vh=i):zl=0,Ss(),null}function la(){if(As!==null){var i=Fg(mc),s=zi.transition,a=kt;try{if(zi.transition=null,kt=16>i?16:i,As===null)var u=!1;else{if(i=As,As=null,mc=0,(bt&6)!==0)throw Error(n(331));var h=bt;for(bt|=4,ke=i.current;ke!==null;){var m=ke,M=m.child;if((ke.flags&16)!==0){var I=m.deletions;if(I!==null){for(var O=0;O<I.length;O++){var ee=I[O];for(ke=ee;ke!==null;){var xe=ke;switch(xe.tag){case 0:case 11:case 15:Ol(8,xe,m)}var Me=xe.child;if(Me!==null)Me.return=xe,ke=Me;else for(;ke!==null;){xe=ke;var ye=xe.sibling,Ne=xe.return;if(I_(xe),xe===ee){ke=null;break}if(ye!==null){ye.return=Ne,ke=ye;break}ke=Ne}}}var Be=m.alternate;if(Be!==null){var He=Be.child;if(He!==null){Be.child=null;do{var fn=He.sibling;He.sibling=null,He=fn}while(He!==null)}}ke=m}}if((m.subtreeFlags&2064)!==0&&M!==null)M.return=m,ke=M;else e:for(;ke!==null;){if(m=ke,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ol(9,m,m.return)}var $=m.sibling;if($!==null){$.return=m.return,ke=$;break e}ke=m.return}}var V=i.current;for(ke=V;ke!==null;){M=ke;var Z=M.child;if((M.subtreeFlags&2064)!==0&&Z!==null)Z.return=M,ke=Z;else e:for(M=V;ke!==null;){if(I=ke,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:cc(9,I)}}catch(Ye){on(I,I.return,Ye)}if(I===M){ke=null;break e}var Ae=I.sibling;if(Ae!==null){Ae.return=I.return,ke=Ae;break e}ke=I.return}}if(bt=h,Ss(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Ut,i)}catch{}u=!0}return u}finally{kt=a,zi.transition=s}}return!1}function $_(i,s,a){s=ra(a,s),s=h_(i,s,1),i=Es(i,s,1),s=ei(),i!==null&&(ii(i,1,s),li(i,s))}function on(i,s,a){if(i.tag===3)$_(i,i,a);else for(;s!==null;){if(s.tag===3){$_(s,i,a);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ws===null||!ws.has(u))){i=ra(a,i),i=p_(s,i,1),s=Es(s,i,1),i=ei(),s!==null&&(ii(s,1,i),li(s,i));break}}s=s.return}}function TS(i,s,a){var u=i.pingCache;u!==null&&u.delete(s),s=ei(),i.pingedLanes|=i.suspendedLanes&a,Pn===i&&(Fn&a)===a&&(Mn===4||Mn===3&&(Fn&130023424)===Fn&&500>Te()-gh?oo(i,0):mh|=a),li(i,s)}function K_(i,s){s===0&&((i.mode&1)===0?s=1:(s=Ji,Ji<<=1,(Ji&130023424)===0&&(Ji=4194304)));var a=ei();i=Gr(i,s),i!==null&&(ii(i,s,a),li(i,a))}function wS(i){var s=i.memoizedState,a=0;s!==null&&(a=s.retryLane),K_(i,a)}function AS(i,s){var a=0;switch(i.tag){case 13:var u=i.stateNode,h=i.memoizedState;h!==null&&(a=h.retryLane);break;case 19:u=i.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(s),K_(i,a)}var Z_;Z_=function(i,s,a){if(i!==null)if(i.memoizedProps!==s.pendingProps||ri.current)oi=!0;else{if((i.lanes&a)===0&&(s.flags&128)===0)return oi=!1,hS(i,s,a);oi=(i.flags&131072)!==0}else oi=!1,qt&&(s.flags&1048576)!==0&&P0(s,Yu,s.index);switch(s.lanes=0,s.tag){case 2:var u=s.type;lc(i,s),i=s.pendingProps;var h=Ko(s,Vn.current);na(s,a),h=Yd(null,s,u,i,h,a);var m=qd();return s.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,si(u)?(m=!0,Wu(s)):m=!1,s.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,zd(s),h.updater=oc,s.stateNode=h,h._reactInternals=s,eh(s,u,i,a),s=rh(null,s,u,!0,m,a)):(s.tag=0,qt&&m&&Pd(s),Jn(null,s,h,a),s=s.child),s;case 16:u=s.elementType;e:{switch(lc(i,s),i=s.pendingProps,h=u._init,u=h(u._payload),s.type=u,h=s.tag=RS(u),i=nr(u,i),h){case 0:s=ih(null,s,u,i,a);break e;case 1:s=E_(null,s,u,i,a);break e;case 11:s=v_(null,s,u,i,a);break e;case 14:s=y_(null,s,u,nr(u.type,i),a);break e}throw Error(n(306,u,""))}return s;case 0:return u=s.type,h=s.pendingProps,h=s.elementType===u?h:nr(u,h),ih(i,s,u,h,a);case 1:return u=s.type,h=s.pendingProps,h=s.elementType===u?h:nr(u,h),E_(i,s,u,h,a);case 3:e:{if(T_(s),i===null)throw Error(n(387));u=s.pendingProps,m=s.memoizedState,h=m.element,B0(i,s),Ju(s,u,null,a);var M=s.memoizedState;if(u=M.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){h=ra(Error(n(423)),s),s=w_(i,s,u,a,h);break e}else if(u!==h){h=ra(Error(n(424)),s),s=w_(i,s,u,a,h);break e}else for(yi=vs(s.stateNode.containerInfo.firstChild),vi=s,qt=!0,tr=null,a=O0(s,null,u,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Jo(),u===h){s=Xr(i,s,a);break e}Jn(i,s,u,a)}s=s.child}return s;case 5:return H0(s),i===null&&Id(s),u=s.type,h=s.pendingProps,m=i!==null?i.memoizedProps:null,M=h.children,Td(u,h)?M=null:m!==null&&Td(u,m)&&(s.flags|=32),M_(i,s),Jn(i,s,M,a),s.child;case 6:return i===null&&Id(s),null;case 13:return A_(i,s,a);case 4:return Vd(s,s.stateNode.containerInfo),u=s.pendingProps,i===null?s.child=ea(s,null,u,a):Jn(i,s,u,a),s.child;case 11:return u=s.type,h=s.pendingProps,h=s.elementType===u?h:nr(u,h),v_(i,s,u,h,a);case 7:return Jn(i,s,s.pendingProps,a),s.child;case 8:return Jn(i,s,s.pendingProps.children,a),s.child;case 12:return Jn(i,s,s.pendingProps.children,a),s.child;case 10:e:{if(u=s.type._context,h=s.pendingProps,m=s.memoizedProps,M=h.value,Wt(Ku,u._currentValue),u._currentValue=M,m!==null)if(er(m.value,M)){if(m.children===h.children&&!ri.current){s=Xr(i,s,a);break e}}else for(m=s.child,m!==null&&(m.return=s);m!==null;){var I=m.dependencies;if(I!==null){M=m.child;for(var O=I.firstContext;O!==null;){if(O.context===u){if(m.tag===1){O=Wr(-1,a&-a),O.tag=2;var ee=m.updateQueue;if(ee!==null){ee=ee.shared;var xe=ee.pending;xe===null?O.next=O:(O.next=xe.next,xe.next=O),ee.pending=O}}m.lanes|=a,O=m.alternate,O!==null&&(O.lanes|=a),kd(m.return,a,s),I.lanes|=a;break}O=O.next}}else if(m.tag===10)M=m.type===s.type?null:m.child;else if(m.tag===18){if(M=m.return,M===null)throw Error(n(341));M.lanes|=a,I=M.alternate,I!==null&&(I.lanes|=a),kd(M,a,s),M=m.sibling}else M=m.child;if(M!==null)M.return=m;else for(M=m;M!==null;){if(M===s){M=null;break}if(m=M.sibling,m!==null){m.return=M.return,M=m;break}M=M.return}m=M}Jn(i,s,h.children,a),s=s.child}return s;case 9:return h=s.type,u=s.pendingProps.children,na(s,a),h=ki(h),u=u(h),s.flags|=1,Jn(i,s,u,a),s.child;case 14:return u=s.type,h=nr(u,s.pendingProps),h=nr(u.type,h),y_(i,s,u,h,a);case 15:return x_(i,s,s.type,s.pendingProps,a);case 17:return u=s.type,h=s.pendingProps,h=s.elementType===u?h:nr(u,h),lc(i,s),s.tag=1,si(u)?(i=!0,Wu(s)):i=!1,na(s,a),f_(s,u,h),eh(s,u,h,a),rh(null,s,u,!0,i,a);case 19:return R_(i,s,a);case 22:return S_(i,s,a)}throw Error(n(156,s.tag))};function Q_(i,s){return te(i,s)}function CS(i,s,a,u){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vi(i,s,a,u){return new CS(i,s,a,u)}function Th(i){return i=i.prototype,!(!i||!i.isReactComponent)}function RS(i){if(typeof i=="function")return Th(i)?1:0;if(i!=null){if(i=i.$$typeof,i===le)return 11;if(i===pe)return 14}return 2}function bs(i,s){var a=i.alternate;return a===null?(a=Vi(i.tag,s,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=s,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&14680064,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,s=i.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a}function yc(i,s,a,u,h,m){var M=2;if(u=i,typeof i=="function")Th(i)&&(M=1);else if(typeof i=="string")M=5;else e:switch(i){case F:return lo(a.children,h,m,s);case G:M=8,h|=8;break;case b:return i=Vi(12,a,s,h|2),i.elementType=b,i.lanes=m,i;case J:return i=Vi(13,a,s,h),i.elementType=J,i.lanes=m,i;case de:return i=Vi(19,a,s,h),i.elementType=de,i.lanes=m,i;case ue:return xc(a,h,m,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case C:M=10;break e;case z:M=9;break e;case le:M=11;break e;case pe:M=14;break e;case se:M=16,u=null;break e}throw Error(n(130,i==null?i:typeof i,""))}return s=Vi(M,a,s,h),s.elementType=i,s.type=u,s.lanes=m,s}function lo(i,s,a,u){return i=Vi(7,i,u,s),i.lanes=a,i}function xc(i,s,a,u){return i=Vi(22,i,u,s),i.elementType=ue,i.lanes=a,i.stateNode={isHidden:!1},i}function wh(i,s,a){return i=Vi(6,i,null,s),i.lanes=a,i}function Ah(i,s,a){return s=Vi(4,i.children!==null?i.children:[],i.key,s),s.lanes=a,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function bS(i,s,a,u,h){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ui(0),this.expirationTimes=Ui(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ui(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Ch(i,s,a,u,h,m,M,I,O){return i=new bS(i,s,a,I,O),s===1?(s=1,m===!0&&(s|=8)):s=0,m=Vi(3,null,null,s),i.current=m,m.stateNode=i,m.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},zd(m),i}function PS(i,s,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:u==null?null:""+u,children:i,containerInfo:s,implementation:a}}function J_(i){if(!i)return xs;i=i._reactInternals;e:{if(_r(i)!==i||i.tag!==1)throw Error(n(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(si(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(n(171))}if(i.tag===1){var a=i.type;if(si(a))return C0(i,a,s)}return s}function ev(i,s,a,u,h,m,M,I,O){return i=Ch(a,u,!0,i,h,m,M,I,O),i.context=J_(null),a=i.current,u=ei(),h=Cs(a),m=Wr(u,h),m.callback=s??null,Es(a,m,h),i.current.lanes=h,ii(i,h,u),li(i,u),i}function Sc(i,s,a,u){var h=s.current,m=ei(),M=Cs(h);return a=J_(a),s.context===null?s.context=a:s.pendingContext=a,s=Wr(m,M),s.payload={element:i},u=u===void 0?null:u,u!==null&&(s.callback=u),i=Es(h,s,M),i!==null&&(sr(i,h,M,m),Qu(i,h,M)),M}function Mc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function tv(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<s?a:s}}function Rh(i,s){tv(i,s),(i=i.alternate)&&tv(i,s)}function LS(){return null}var nv=typeof reportError=="function"?reportError:function(i){console.error(i)};function bh(i){this._internalRoot=i}Ec.prototype.render=bh.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(n(409));Sc(i,s,null,null)},Ec.prototype.unmount=bh.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;so(function(){Sc(null,i,null,null)}),s[Br]=null}};function Ec(i){this._internalRoot=i}Ec.prototype.unstable_scheduleHydration=function(i){if(i){var s=Bg();i={blockedOn:null,target:i,priority:s};for(var a=0;a<ms.length&&s!==0&&s<ms[a].priority;a++);ms.splice(a,0,i),a===0&&Hg(i)}};function Ph(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Tc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function iv(){}function DS(i,s,a,u,h){if(h){if(typeof u=="function"){var m=u;u=function(){var ee=Mc(M);m.call(ee)}}var M=ev(s,u,i,0,null,!1,!1,"",iv);return i._reactRootContainer=M,i[Br]=M.current,Tl(i.nodeType===8?i.parentNode:i),so(),M}for(;h=i.lastChild;)i.removeChild(h);if(typeof u=="function"){var I=u;u=function(){var ee=Mc(O);I.call(ee)}}var O=Ch(i,0,!1,null,null,!1,!1,"",iv);return i._reactRootContainer=O,i[Br]=O.current,Tl(i.nodeType===8?i.parentNode:i),so(function(){Sc(s,O,a,u)}),O}function wc(i,s,a,u,h){var m=a._reactRootContainer;if(m){var M=m;if(typeof h=="function"){var I=h;h=function(){var O=Mc(M);I.call(O)}}Sc(s,M,i,h)}else M=DS(a,s,i,h,u);return Mc(M)}Og=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var a=xn(s.pendingLanes);a!==0&&(ed(s,a|1),li(s,Te()),(bt&6)===0&&(aa=Te()+500,Ss()))}break;case 13:so(function(){var u=Gr(i,1);if(u!==null){var h=ei();sr(u,i,1,h)}}),Rh(i,1)}},td=function(i){if(i.tag===13){var s=Gr(i,134217728);if(s!==null){var a=ei();sr(s,i,134217728,a)}Rh(i,134217728)}},kg=function(i){if(i.tag===13){var s=Cs(i),a=Gr(i,s);if(a!==null){var u=ei();sr(a,i,s,u)}Rh(i,s)}},Bg=function(){return kt},zg=function(i,s){var a=kt;try{return kt=i,s()}finally{kt=a}},be=function(i,s,a){switch(s){case"input":if(ft(i,a),s=a.name,a.type==="radio"&&s!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var u=a[s];if(u!==i&&u.form===i.form){var h=Hu(u);if(!h)throw Error(n(90));ct(u),ft(u,h)}}}break;case"textarea":ce(i,a);break;case"select":s=a.value,s!=null&&P(i,!!a.multiple,s,!1)}},Xt=Sh,yn=so;var IS={usingClientEntryPoint:!1,Events:[Cl,qo,Hu,Le,pt,Sh]},Vl={findFiberByHostInstance:Zs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},NS={bundleType:Vl.bundleType,version:Vl.version,rendererPackageName:Vl.rendererPackageName,rendererConfig:Vl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=A(i),i===null?null:i.stateNode},findFiberByHostInstance:Vl.findFiberByHostInstance||LS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ac.isDisabled&&Ac.supportsFiber)try{Ut=Ac.inject(NS),Et=Ac}catch{}}return ui.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IS,ui.createPortal=function(i,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ph(s))throw Error(n(200));return PS(i,s,null,a)},ui.createRoot=function(i,s){if(!Ph(i))throw Error(n(299));var a=!1,u="",h=nv;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onRecoverableError!==void 0&&(h=s.onRecoverableError)),s=Ch(i,1,!1,null,null,a,!1,u,h),i[Br]=s.current,Tl(i.nodeType===8?i.parentNode:i),new bh(s)},ui.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(n(188)):(i=Object.keys(i).join(","),Error(n(268,i)));return i=A(s),i=i===null?null:i.stateNode,i},ui.flushSync=function(i){return so(i)},ui.hydrate=function(i,s,a){if(!Tc(s))throw Error(n(200));return wc(null,i,s,!0,a)},ui.hydrateRoot=function(i,s,a){if(!Ph(i))throw Error(n(405));var u=a!=null&&a.hydratedSources||null,h=!1,m="",M=nv;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),s=ev(s,null,i,1,a??null,h,!1,m,M),i[Br]=s.current,Tl(i),u)for(i=0;i<u.length;i++)a=u[i],h=a._getVersion,h=h(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,h]:s.mutableSourceEagerHydrationData.push(a,h);return new Ec(s)},ui.render=function(i,s,a){if(!Tc(s))throw Error(n(200));return wc(null,i,s,!1,a)},ui.unmountComponentAtNode=function(i){if(!Tc(i))throw Error(n(40));return i._reactRootContainer?(so(function(){wc(null,null,i,!1,function(){i._reactRootContainer=null,i[Br]=null})}),!0):!1},ui.unstable_batchedUpdates=Sh,ui.unstable_renderSubtreeIntoContainer=function(i,s,a,u){if(!Tc(a))throw Error(n(200));if(i==null||i._reactInternals===void 0)throw Error(n(38));return wc(i,s,a,!1,u)},ui.version="18.3.1-next-f1338f8080-20240426",ui}var fv;function GS(){if(fv)return Ih.exports;fv=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Ih.exports=HS(),Ih.exports}var dv;function WS(){if(dv)return Cc;dv=1;var t=GS();return Cc.createRoot=t.createRoot,Cc.hydrateRoot=t.hydrateRoot,Cc}var XS=WS();const jS=x2(XS);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lm="170",YS=0,hv=1,qS=2,S2=1,$S=2,Qr=3,Xs=0,pi=1,Jr=2,Hs=0,Ra=1,wo=2,pv=3,mv=4,KS=5,yo=100,ZS=101,QS=102,JS=103,eM=104,tM=200,nM=201,iM=202,rM=203,Tp=204,wp=205,sM=206,oM=207,aM=208,lM=209,uM=210,cM=211,fM=212,dM=213,hM=214,Ap=0,Cp=1,Rp=2,Ia=3,bp=4,Pp=5,Lp=6,Dp=7,M2=0,pM=1,mM=2,Gs=0,gM=1,_M=2,vM=3,E2=4,yM=5,xM=6,SM=7,T2=300,Na=301,Ua=302,Ip=303,Np=304,wf=306,Up=1e3,So=1001,Fp=1002,dr=1003,MM=1004,Rc=1005,Ar=1006,Fh=1007,Mo=1008,rs=1009,w2=1010,A2=1011,iu=1012,Dm=1013,Lo=1014,ts=1015,lu=1016,Im=1017,Nm=1018,Fa=1020,C2=35902,R2=1021,b2=1022,cr=1023,P2=1024,L2=1025,ba=1026,Oa=1027,D2=1028,Um=1029,I2=1030,Fm=1031,Om=1033,sf=33776,of=33777,af=33778,lf=33779,Op=35840,kp=35841,Bp=35842,zp=35843,Vp=36196,Hp=37492,Gp=37496,Wp=37808,Xp=37809,jp=37810,Yp=37811,qp=37812,$p=37813,Kp=37814,Zp=37815,Qp=37816,Jp=37817,em=37818,tm=37819,nm=37820,im=37821,uf=36492,rm=36494,sm=36495,N2=36283,om=36284,am=36285,lm=36286,EM=3200,TM=3201,wM=0,AM=1,zs="",ji="srgb",Ka="srgb-linear",Af="linear",zt="srgb",ua=7680,gv=519,CM=512,RM=513,bM=514,U2=515,PM=516,LM=517,DM=518,IM=519,_v=35044,vv="300 es",ns=2e3,hf=2001;class Za{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const Xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oh=Math.PI/180,um=180/Math.PI;function uu(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Xn[t&255]+Xn[t>>8&255]+Xn[t>>16&255]+Xn[t>>24&255]+"-"+Xn[e&255]+Xn[e>>8&255]+"-"+Xn[e>>16&15|64]+Xn[e>>24&255]+"-"+Xn[n&63|128]+Xn[n>>8&255]+"-"+Xn[n>>16&255]+Xn[n>>24&255]+Xn[r&255]+Xn[r>>8&255]+Xn[r>>16&255]+Xn[r>>24&255]).toLowerCase()}function hi(t,e,n){return Math.max(e,Math.min(n,t))}function NM(t,e){return(t%e+e)%e}function kh(t,e,n){return(1-n)*t+n*e}function Gl(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ci(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Bt{constructor(e=0,n=0){Bt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(hi(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(e,n,r,o,l,c,f,d,p){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,c,f,d,p)}set(e,n,r,o,l,c,f,d,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=n,g[4]=l,g[5]=d,g[6]=r,g[7]=c,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,c=r[0],f=r[3],d=r[6],p=r[1],g=r[4],_=r[7],y=r[2],S=r[5],E=r[8],w=o[0],x=o[3],v=o[6],D=o[1],L=o[4],R=o[7],q=o[2],B=o[5],F=o[8];return l[0]=c*w+f*D+d*q,l[3]=c*x+f*L+d*B,l[6]=c*v+f*R+d*F,l[1]=p*w+g*D+_*q,l[4]=p*x+g*L+_*B,l[7]=p*v+g*R+_*F,l[2]=y*w+S*D+E*q,l[5]=y*x+S*L+E*B,l[8]=y*v+S*R+E*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],g=e[8];return n*c*g-n*f*p-r*l*g+r*f*d+o*l*p-o*c*d}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],g=e[8],_=g*c-f*p,y=f*d-g*l,S=p*l-c*d,E=n*_+r*y+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=_*w,e[1]=(o*p-g*r)*w,e[2]=(f*r-o*c)*w,e[3]=y*w,e[4]=(g*n-o*d)*w,e[5]=(o*l-f*n)*w,e[6]=S*w,e[7]=(r*d-p*n)*w,e[8]=(c*n-r*l)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,l,c,f){const d=Math.cos(l),p=Math.sin(l);return this.set(r*d,r*p,-r*(d*c+p*f)+c+e,-o*p,o*d,-o*(-p*c+d*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Bh.makeScale(e,n)),this}rotate(e){return this.premultiply(Bh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Bh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bh=new vt;function F2(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function pf(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function UM(){const t=pf("canvas");return t.style.display="block",t}const yv={};function $l(t){t in yv||(yv[t]=!0,console.warn(t))}function FM(t,e,n){return new Promise(function(r,o){function l(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:o();break;case t.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}function OM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function kM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Pt={enabled:!0,workingColorSpace:Ka,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===zt&&(t.r=is(t.r),t.g=is(t.g),t.b=is(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===zt&&(t.r=Pa(t.r),t.g=Pa(t.g),t.b=Pa(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===zs?Af:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function is(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Pa(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const xv=[.64,.33,.3,.6,.15,.06],Sv=[.2126,.7152,.0722],Mv=[.3127,.329],Ev=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tv=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Pt.define({[Ka]:{primaries:xv,whitePoint:Mv,transfer:Af,toXYZ:Ev,fromXYZ:Tv,luminanceCoefficients:Sv,workingColorSpaceConfig:{unpackColorSpace:ji},outputColorSpaceConfig:{drawingBufferColorSpace:ji}},[ji]:{primaries:xv,whitePoint:Mv,transfer:zt,toXYZ:Ev,fromXYZ:Tv,luminanceCoefficients:Sv,outputColorSpaceConfig:{drawingBufferColorSpace:ji}}});let ca;class BM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ca===void 0&&(ca=pf("canvas")),ca.width=e.width,ca.height=e.height;const r=ca.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ca}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=pf("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=is(l[c]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(is(n[r]/255)*255):n[r]=is(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zM=0;class O2{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=uu(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(zh(o[c].image)):l.push(zh(o[c]))}else l=zh(o);r.url=l}return n||(e.images[this.uuid]=r),r}}function zh(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?BM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let VM=0;class mi extends Za{constructor(e=mi.DEFAULT_IMAGE,n=mi.DEFAULT_MAPPING,r=So,o=So,l=Ar,c=Mo,f=cr,d=rs,p=mi.DEFAULT_ANISOTROPY,g=zs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=uu(),this.name="",this.source=new O2(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==T2)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Up:e.x=e.x-Math.floor(e.x);break;case So:e.x=e.x<0?0:1;break;case Fp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Up:e.y=e.y-Math.floor(e.y);break;case So:e.y=e.y<0?0:1;break;case Fp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mi.DEFAULT_IMAGE=null;mi.DEFAULT_MAPPING=T2;mi.DEFAULT_ANISOTROPY=1;class ln{constructor(e=0,n=0,r=0,o=1){ln.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*n+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*n+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*n+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,l;const d=e.elements,p=d[0],g=d[4],_=d[8],y=d[1],S=d[5],E=d[9],w=d[2],x=d[6],v=d[10];if(Math.abs(g-y)<.01&&Math.abs(_-w)<.01&&Math.abs(E-x)<.01){if(Math.abs(g+y)<.1&&Math.abs(_+w)<.1&&Math.abs(E+x)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(p+1)/2,R=(S+1)/2,q=(v+1)/2,B=(g+y)/4,F=(_+w)/4,G=(E+x)/4;return L>R&&L>q?L<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(L),o=B/r,l=F/r):R>q?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=B/o,l=G/o):q<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(q),r=F/l,o=G/l),this.set(r,o,l,n),this}let D=Math.sqrt((x-E)*(x-E)+(_-w)*(_-w)+(y-g)*(y-g));return Math.abs(D)<.001&&(D=1),this.x=(x-E)/D,this.y=(_-w)/D,this.z=(y-g)/D,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class HM extends Za{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ln(0,0,e,n),this.scissorTest=!1,this.viewport=new ln(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ar,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new mi(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new O2(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Do extends HM{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class k2 extends mi{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=dr,this.minFilter=dr,this.wrapR=So,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class GM extends mi{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=dr,this.minFilter=dr,this.wrapR=So,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cu{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,l,c,f){let d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];const y=l[c+0],S=l[c+1],E=l[c+2],w=l[c+3];if(f===0){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(f===1){e[n+0]=y,e[n+1]=S,e[n+2]=E,e[n+3]=w;return}if(_!==w||d!==y||p!==S||g!==E){let x=1-f;const v=d*y+p*S+g*E+_*w,D=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const q=Math.sqrt(L),B=Math.atan2(q,v*D);x=Math.sin(x*B)/q,f=Math.sin(f*B)/q}const R=f*D;if(d=d*x+y*R,p=p*x+S*R,g=g*x+E*R,_=_*x+w*R,x===1-f){const q=1/Math.sqrt(d*d+p*p+g*g+_*_);d*=q,p*=q,g*=q,_*=q}}e[n]=d,e[n+1]=p,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,o,l,c){const f=r[o],d=r[o+1],p=r[o+2],g=r[o+3],_=l[c],y=l[c+1],S=l[c+2],E=l[c+3];return e[n]=f*E+g*_+d*S-p*y,e[n+1]=d*E+g*y+p*_-f*S,e[n+2]=p*E+g*S+f*y-d*_,e[n+3]=g*E-f*_-d*y-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,p=f(r/2),g=f(o/2),_=f(l/2),y=d(r/2),S=d(o/2),E=d(l/2);switch(c){case"XYZ":this._x=y*g*_+p*S*E,this._y=p*S*_-y*g*E,this._z=p*g*E+y*S*_,this._w=p*g*_-y*S*E;break;case"YXZ":this._x=y*g*_+p*S*E,this._y=p*S*_-y*g*E,this._z=p*g*E-y*S*_,this._w=p*g*_+y*S*E;break;case"ZXY":this._x=y*g*_-p*S*E,this._y=p*S*_+y*g*E,this._z=p*g*E+y*S*_,this._w=p*g*_-y*S*E;break;case"ZYX":this._x=y*g*_-p*S*E,this._y=p*S*_+y*g*E,this._z=p*g*E-y*S*_,this._w=p*g*_+y*S*E;break;case"YZX":this._x=y*g*_+p*S*E,this._y=p*S*_+y*g*E,this._z=p*g*E-y*S*_,this._w=p*g*_-y*S*E;break;case"XZY":this._x=y*g*_-p*S*E,this._y=p*S*_-y*g*E,this._z=p*g*E+y*S*_,this._w=p*g*_+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],l=n[8],c=n[1],f=n[5],d=n[9],p=n[2],g=n[6],_=n[10],y=r+f+_;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(g-d)*S,this._y=(l-p)*S,this._z=(c-o)*S}else if(r>f&&r>_){const S=2*Math.sqrt(1+r-f-_);this._w=(g-d)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(l+p)/S}else if(f>_){const S=2*Math.sqrt(1+f-r-_);this._w=(l-p)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(d+g)/S}else{const S=2*Math.sqrt(1+_-r-f);this._w=(c-o)/S,this._x=(l+p)/S,this._y=(d+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hi(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,l=e._z,c=e._w,f=n._x,d=n._y,p=n._z,g=n._w;return this._x=r*g+c*f+o*p-l*d,this._y=o*g+c*d+l*f-r*p,this._z=l*g+c*p+r*d-o*f,this._w=c*g-r*f-o*d-l*p,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,c=this._w;let f=c*e._w+r*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=r,this._y=o,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const S=1-n;return this._w=S*c+n*this._w,this._x=S*r+n*this._x,this._y=S*o+n*this._y,this._z=S*l+n*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,f),_=Math.sin((1-n)*g)/p,y=Math.sin(n*g)/p;return this._w=c*_+this._w*y,this._x=r*_+this._x*y,this._y=o*_+this._y*y,this._z=l*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,n=0,r=0){ie.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(wv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(wv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*o,this.y=l[1]*n+l[4]*r+l[7]*o,this.z=l[2]*n+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*n+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*n+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*n+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,l=e.x,c=e.y,f=e.z,d=e.w,p=2*(c*o-f*r),g=2*(f*n-l*o),_=2*(l*r-c*n);return this.x=n+d*p+c*_-f*g,this.y=r+d*g+f*p-l*_,this.z=o+d*_+l*g-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*o,this.y=l[1]*n+l[5]*r+l[9]*o,this.z=l[2]*n+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,l=e.z,c=n.x,f=n.y,d=n.z;return this.x=o*d-l*f,this.y=l*c-r*d,this.z=r*f-o*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Vh.copy(this).projectOnVector(e),this.sub(Vh)}reflect(e){return this.sub(Vh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(hi(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vh=new ie,wv=new cu;class fu{constructor(e=new ie(1/0,1/0,1/0),n=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(or.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(or.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=or.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,or):or.fromBufferAttribute(l,c),or.applyMatrix4(e.matrixWorld),this.expandByPoint(or);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),bc.copy(r.boundingBox)),bc.applyMatrix4(e.matrixWorld),this.union(bc)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,or),or.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wl),Pc.subVectors(this.max,Wl),fa.subVectors(e.a,Wl),da.subVectors(e.b,Wl),ha.subVectors(e.c,Wl),Ls.subVectors(da,fa),Ds.subVectors(ha,da),uo.subVectors(fa,ha);let n=[0,-Ls.z,Ls.y,0,-Ds.z,Ds.y,0,-uo.z,uo.y,Ls.z,0,-Ls.x,Ds.z,0,-Ds.x,uo.z,0,-uo.x,-Ls.y,Ls.x,0,-Ds.y,Ds.x,0,-uo.y,uo.x,0];return!Hh(n,fa,da,ha,Pc)||(n=[1,0,0,0,1,0,0,0,1],!Hh(n,fa,da,ha,Pc))?!1:(Lc.crossVectors(Ls,Ds),n=[Lc.x,Lc.y,Lc.z],Hh(n,fa,da,ha,Pc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,or).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(or).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yr=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],or=new ie,bc=new fu,fa=new ie,da=new ie,ha=new ie,Ls=new ie,Ds=new ie,uo=new ie,Wl=new ie,Pc=new ie,Lc=new ie,co=new ie;function Hh(t,e,n,r,o){for(let l=0,c=t.length-3;l<=c;l+=3){co.fromArray(t,l);const f=o.x*Math.abs(co.x)+o.y*Math.abs(co.y)+o.z*Math.abs(co.z),d=e.dot(co),p=n.dot(co),g=r.dot(co);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>f)return!1}return!0}const WM=new fu,Xl=new ie,Gh=new ie;class Cf{constructor(e=new ie,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):WM.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xl.subVectors(e,this.center);const n=Xl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Xl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xl.copy(e.center).add(Gh)),this.expandByPoint(Xl.copy(e.center).sub(Gh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qr=new ie,Wh=new ie,Dc=new ie,Is=new ie,Xh=new ie,Ic=new ie,jh=new ie;class B2{constructor(e=new ie,n=new ie(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=qr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(qr.copy(this.origin).addScaledVector(this.direction,n),qr.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Wh.copy(e).add(n).multiplyScalar(.5),Dc.copy(n).sub(e).normalize(),Is.copy(this.origin).sub(Wh);const l=e.distanceTo(n)*.5,c=-this.direction.dot(Dc),f=Is.dot(this.direction),d=-Is.dot(Dc),p=Is.lengthSq(),g=Math.abs(1-c*c);let _,y,S,E;if(g>0)if(_=c*d-f,y=c*f-d,E=l*g,_>=0)if(y>=-E)if(y<=E){const w=1/g;_*=w,y*=w,S=_*(_+c*y+2*f)+y*(c*_+y+2*d)+p}else y=l,_=Math.max(0,-(c*y+f)),S=-_*_+y*(y+2*d)+p;else y=-l,_=Math.max(0,-(c*y+f)),S=-_*_+y*(y+2*d)+p;else y<=-E?(_=Math.max(0,-(-c*l+f)),y=_>0?-l:Math.min(Math.max(-l,-d),l),S=-_*_+y*(y+2*d)+p):y<=E?(_=0,y=Math.min(Math.max(-l,-d),l),S=y*(y+2*d)+p):(_=Math.max(0,-(c*l+f)),y=_>0?l:Math.min(Math.max(-l,-d),l),S=-_*_+y*(y+2*d)+p);else y=c>0?-l:l,_=Math.max(0,-(c*y+f)),S=-_*_+y*(y+2*d)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Wh).addScaledVector(Dc,y),S}intersectSphere(e,n){qr.subVectors(e.center,this.origin);const r=qr.dot(this.direction),o=qr.dot(qr)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=r-c,d=r+c;return d<0?null:f<0?this.at(d,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,l,c,f,d;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,o=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,o=(e.min.x-y.x)*p),g>=0?(l=(e.min.y-y.y)*g,c=(e.max.y-y.y)*g):(l=(e.max.y-y.y)*g,c=(e.min.y-y.y)*g),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),_>=0?(f=(e.min.z-y.z)*_,d=(e.max.z-y.z)*_):(f=(e.max.z-y.z)*_,d=(e.min.z-y.z)*_),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,qr)!==null}intersectTriangle(e,n,r,o,l){Xh.subVectors(n,e),Ic.subVectors(r,e),jh.crossVectors(Xh,Ic);let c=this.direction.dot(jh),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Is.subVectors(this.origin,e);const d=f*this.direction.dot(Ic.crossVectors(Is,Ic));if(d<0)return null;const p=f*this.direction.dot(Xh.cross(Is));if(p<0||d+p>c)return null;const g=-f*Is.dot(jh);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,n,r,o,l,c,f,d,p,g,_,y,S,E,w,x){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,c,f,d,p,g,_,y,S,E,w,x)}set(e,n,r,o,l,c,f,d,p,g,_,y,S,E,w,x){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=o,v[1]=l,v[5]=c,v[9]=f,v[13]=d,v[2]=p,v[6]=g,v[10]=_,v[14]=y,v[3]=S,v[7]=E,v[11]=w,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/pa.setFromMatrixColumn(e,0).length(),l=1/pa.setFromMatrixColumn(e,1).length(),c=1/pa.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),d=Math.cos(o),p=Math.sin(o),g=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const y=c*g,S=c*_,E=f*g,w=f*_;n[0]=d*g,n[4]=-d*_,n[8]=p,n[1]=S+E*p,n[5]=y-w*p,n[9]=-f*d,n[2]=w-y*p,n[6]=E+S*p,n[10]=c*d}else if(e.order==="YXZ"){const y=d*g,S=d*_,E=p*g,w=p*_;n[0]=y+w*f,n[4]=E*f-S,n[8]=c*p,n[1]=c*_,n[5]=c*g,n[9]=-f,n[2]=S*f-E,n[6]=w+y*f,n[10]=c*d}else if(e.order==="ZXY"){const y=d*g,S=d*_,E=p*g,w=p*_;n[0]=y-w*f,n[4]=-c*_,n[8]=E+S*f,n[1]=S+E*f,n[5]=c*g,n[9]=w-y*f,n[2]=-c*p,n[6]=f,n[10]=c*d}else if(e.order==="ZYX"){const y=c*g,S=c*_,E=f*g,w=f*_;n[0]=d*g,n[4]=E*p-S,n[8]=y*p+w,n[1]=d*_,n[5]=w*p+y,n[9]=S*p-E,n[2]=-p,n[6]=f*d,n[10]=c*d}else if(e.order==="YZX"){const y=c*d,S=c*p,E=f*d,w=f*p;n[0]=d*g,n[4]=w-y*_,n[8]=E*_+S,n[1]=_,n[5]=c*g,n[9]=-f*g,n[2]=-p*g,n[6]=S*_+E,n[10]=y-w*_}else if(e.order==="XZY"){const y=c*d,S=c*p,E=f*d,w=f*p;n[0]=d*g,n[4]=-_,n[8]=p*g,n[1]=y*_+w,n[5]=c*g,n[9]=S*_-E,n[2]=E*_-S,n[6]=f*g,n[10]=w*_+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(XM,e,jM)}lookAt(e,n,r){const o=this.elements;return Si.subVectors(e,n),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),Ns.crossVectors(r,Si),Ns.lengthSq()===0&&(Math.abs(r.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),Ns.crossVectors(r,Si)),Ns.normalize(),Nc.crossVectors(Si,Ns),o[0]=Ns.x,o[4]=Nc.x,o[8]=Si.x,o[1]=Ns.y,o[5]=Nc.y,o[9]=Si.y,o[2]=Ns.z,o[6]=Nc.z,o[10]=Si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,c=r[0],f=r[4],d=r[8],p=r[12],g=r[1],_=r[5],y=r[9],S=r[13],E=r[2],w=r[6],x=r[10],v=r[14],D=r[3],L=r[7],R=r[11],q=r[15],B=o[0],F=o[4],G=o[8],b=o[12],C=o[1],z=o[5],le=o[9],J=o[13],de=o[2],pe=o[6],se=o[10],ue=o[14],k=o[3],ae=o[7],Q=o[11],N=o[15];return l[0]=c*B+f*C+d*de+p*k,l[4]=c*F+f*z+d*pe+p*ae,l[8]=c*G+f*le+d*se+p*Q,l[12]=c*b+f*J+d*ue+p*N,l[1]=g*B+_*C+y*de+S*k,l[5]=g*F+_*z+y*pe+S*ae,l[9]=g*G+_*le+y*se+S*Q,l[13]=g*b+_*J+y*ue+S*N,l[2]=E*B+w*C+x*de+v*k,l[6]=E*F+w*z+x*pe+v*ae,l[10]=E*G+w*le+x*se+v*Q,l[14]=E*b+w*J+x*ue+v*N,l[3]=D*B+L*C+R*de+q*k,l[7]=D*F+L*z+R*pe+q*ae,l[11]=D*G+L*le+R*se+q*Q,l[15]=D*b+L*J+R*ue+q*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[12],c=e[1],f=e[5],d=e[9],p=e[13],g=e[2],_=e[6],y=e[10],S=e[14],E=e[3],w=e[7],x=e[11],v=e[15];return E*(+l*d*_-o*p*_-l*f*y+r*p*y+o*f*S-r*d*S)+w*(+n*d*S-n*p*y+l*c*y-o*c*S+o*p*g-l*d*g)+x*(+n*p*_-n*f*S-l*c*_+r*c*S+l*f*g-r*p*g)+v*(-o*f*g-n*d*_+n*f*y+o*c*_-r*c*y+r*d*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],g=e[8],_=e[9],y=e[10],S=e[11],E=e[12],w=e[13],x=e[14],v=e[15],D=_*x*p-w*y*p+w*d*S-f*x*S-_*d*v+f*y*v,L=E*y*p-g*x*p-E*d*S+c*x*S+g*d*v-c*y*v,R=g*w*p-E*_*p+E*f*S-c*w*S-g*f*v+c*_*v,q=E*_*d-g*w*d-E*f*y+c*w*y+g*f*x-c*_*x,B=n*D+r*L+o*R+l*q;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/B;return e[0]=D*F,e[1]=(w*y*l-_*x*l-w*o*S+r*x*S+_*o*v-r*y*v)*F,e[2]=(f*x*l-w*d*l+w*o*p-r*x*p-f*o*v+r*d*v)*F,e[3]=(_*d*l-f*y*l-_*o*p+r*y*p+f*o*S-r*d*S)*F,e[4]=L*F,e[5]=(g*x*l-E*y*l+E*o*S-n*x*S-g*o*v+n*y*v)*F,e[6]=(E*d*l-c*x*l-E*o*p+n*x*p+c*o*v-n*d*v)*F,e[7]=(c*y*l-g*d*l+g*o*p-n*y*p-c*o*S+n*d*S)*F,e[8]=R*F,e[9]=(E*_*l-g*w*l-E*r*S+n*w*S+g*r*v-n*_*v)*F,e[10]=(c*w*l-E*f*l+E*r*p-n*w*p-c*r*v+n*f*v)*F,e[11]=(g*f*l-c*_*l-g*r*p+n*_*p+c*r*S-n*f*S)*F,e[12]=q*F,e[13]=(g*w*o-E*_*o+E*r*y-n*w*y-g*r*x+n*_*x)*F,e[14]=(E*f*o-c*w*o-E*r*d+n*w*d+c*r*x-n*f*x)*F,e[15]=(c*_*o-g*f*o+g*r*d-n*_*d-c*r*y+n*f*y)*F,this}scale(e){const n=this.elements,r=e.x,o=e.y,l=e.z;return n[0]*=r,n[4]*=o,n[8]*=l,n[1]*=r,n[5]*=o,n[9]*=l,n[2]*=r,n[6]*=o,n[10]*=l,n[3]*=r,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),l=1-r,c=e.x,f=e.y,d=e.z,p=l*c,g=l*f;return this.set(p*c+r,p*f-o*d,p*d+o*f,0,p*f+o*d,g*f+r,g*d-o*c,0,p*d-o*f,g*d+o*c,l*d*d+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,l=n._x,c=n._y,f=n._z,d=n._w,p=l+l,g=c+c,_=f+f,y=l*p,S=l*g,E=l*_,w=c*g,x=c*_,v=f*_,D=d*p,L=d*g,R=d*_,q=r.x,B=r.y,F=r.z;return o[0]=(1-(w+v))*q,o[1]=(S+R)*q,o[2]=(E-L)*q,o[3]=0,o[4]=(S-R)*B,o[5]=(1-(y+v))*B,o[6]=(x+D)*B,o[7]=0,o[8]=(E+L)*F,o[9]=(x-D)*F,o[10]=(1-(y+w))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let l=pa.set(o[0],o[1],o[2]).length();const c=pa.set(o[4],o[5],o[6]).length(),f=pa.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ar.copy(this);const p=1/l,g=1/c,_=1/f;return ar.elements[0]*=p,ar.elements[1]*=p,ar.elements[2]*=p,ar.elements[4]*=g,ar.elements[5]*=g,ar.elements[6]*=g,ar.elements[8]*=_,ar.elements[9]*=_,ar.elements[10]*=_,n.setFromRotationMatrix(ar),r.x=l,r.y=c,r.z=f,this}makePerspective(e,n,r,o,l,c,f=ns){const d=this.elements,p=2*l/(n-e),g=2*l/(r-o),_=(n+e)/(n-e),y=(r+o)/(r-o);let S,E;if(f===ns)S=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===hf)S=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=g,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,r,o,l,c,f=ns){const d=this.elements,p=1/(n-e),g=1/(r-o),_=1/(c-l),y=(n+e)*p,S=(r+o)*g;let E,w;if(f===ns)E=(c+l)*_,w=-2*_;else if(f===hf)E=l*_,w=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-y,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=w,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const pa=new ie,ar=new rn,XM=new ie(0,0,0),jM=new ie(1,1,1),Ns=new ie,Nc=new ie,Si=new ie,Av=new rn,Cv=new cu;class ss{constructor(e=0,n=0,r=0,o=ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],d=o[1],p=o[5],g=o[9],_=o[2],y=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(hi(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-hi(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(hi(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-hi(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(hi(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-hi(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Av.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Av,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Cv.setFromEuler(this),this.setFromQuaternion(Cv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ss.DEFAULT_ORDER="XYZ";class z2{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let YM=0;const Rv=new ie,ma=new cu,$r=new rn,Uc=new ie,jl=new ie,qM=new ie,$M=new cu,bv=new ie(1,0,0),Pv=new ie(0,1,0),Lv=new ie(0,0,1),Dv={type:"added"},KM={type:"removed"},ga={type:"childadded",child:null},Yh={type:"childremoved",child:null};class On extends Za{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=uu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new ie,n=new ss,r=new cu,o=new ie(1,1,1);function l(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new rn},normalMatrix:{value:new vt}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new z2,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ma.setFromAxisAngle(e,n),this.quaternion.multiply(ma),this}rotateOnWorldAxis(e,n){return ma.setFromAxisAngle(e,n),this.quaternion.premultiply(ma),this}rotateX(e){return this.rotateOnAxis(bv,e)}rotateY(e){return this.rotateOnAxis(Pv,e)}rotateZ(e){return this.rotateOnAxis(Lv,e)}translateOnAxis(e,n){return Rv.copy(e).applyQuaternion(this.quaternion),this.position.add(Rv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(bv,e)}translateY(e){return this.translateOnAxis(Pv,e)}translateZ(e){return this.translateOnAxis(Lv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($r.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Uc.copy(e):Uc.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),jl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$r.lookAt(jl,Uc,this.up):$r.lookAt(Uc,jl,this.up),this.quaternion.setFromRotationMatrix($r),o&&($r.extractRotation(o.matrixWorld),ma.setFromRotationMatrix($r),this.quaternion.premultiply(ma.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dv),ga.child=e,this.dispatchEvent(ga),ga.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(KM),Yh.child=e,this.dispatchEvent(Yh),Yh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$r.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$r.multiply(e.parent.matrixWorld)),e.applyMatrix4($r),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dv),ga.child=e,this.dispatchEvent(ga),ga.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jl,e,qM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jl,$M,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const _=d[p];l(e.shapes,_)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(e.materials,this.material[d]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(e.animations,d))}}if(n){const f=c(e.geometries),d=c(e.materials),p=c(e.textures),g=c(e.images),_=c(e.shapes),y=c(e.skeletons),S=c(e.animations),E=c(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=o,r;function c(f){const d=[];for(const p in f){const g=f[p];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}On.DEFAULT_UP=new ie(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const lr=new ie,Kr=new ie,qh=new ie,Zr=new ie,_a=new ie,va=new ie,Iv=new ie,$h=new ie,Kh=new ie,Zh=new ie,Qh=new ln,Jh=new ln,ep=new ln;class ur{constructor(e=new ie,n=new ie,r=new ie){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),lr.subVectors(e,n),o.cross(lr);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,r,o,l){lr.subVectors(o,n),Kr.subVectors(r,n),qh.subVectors(e,n);const c=lr.dot(lr),f=lr.dot(Kr),d=lr.dot(qh),p=Kr.dot(Kr),g=Kr.dot(qh),_=c*p-f*f;if(_===0)return l.set(0,0,0),null;const y=1/_,S=(p*d-f*g)*y,E=(c*g-f*d)*y;return l.set(1-S-E,E,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Zr)===null?!1:Zr.x>=0&&Zr.y>=0&&Zr.x+Zr.y<=1}static getInterpolation(e,n,r,o,l,c,f,d){return this.getBarycoord(e,n,r,o,Zr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Zr.x),d.addScaledVector(c,Zr.y),d.addScaledVector(f,Zr.z),d)}static getInterpolatedAttribute(e,n,r,o,l,c){return Qh.setScalar(0),Jh.setScalar(0),ep.setScalar(0),Qh.fromBufferAttribute(e,n),Jh.fromBufferAttribute(e,r),ep.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Qh,l.x),c.addScaledVector(Jh,l.y),c.addScaledVector(ep,l.z),c}static isFrontFacing(e,n,r,o){return lr.subVectors(r,n),Kr.subVectors(e,n),lr.cross(Kr).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return lr.subVectors(this.c,this.b),Kr.subVectors(this.a,this.b),lr.cross(Kr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ur.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ur.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,l){return ur.getInterpolation(e,this.a,this.b,this.c,n,r,o,l)}containsPoint(e){return ur.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ur.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,l=this.c;let c,f;_a.subVectors(o,r),va.subVectors(l,r),$h.subVectors(e,r);const d=_a.dot($h),p=va.dot($h);if(d<=0&&p<=0)return n.copy(r);Kh.subVectors(e,o);const g=_a.dot(Kh),_=va.dot(Kh);if(g>=0&&_<=g)return n.copy(o);const y=d*_-g*p;if(y<=0&&d>=0&&g<=0)return c=d/(d-g),n.copy(r).addScaledVector(_a,c);Zh.subVectors(e,l);const S=_a.dot(Zh),E=va.dot(Zh);if(E>=0&&S<=E)return n.copy(l);const w=S*p-d*E;if(w<=0&&p>=0&&E<=0)return f=p/(p-E),n.copy(r).addScaledVector(va,f);const x=g*E-S*_;if(x<=0&&_-g>=0&&S-E>=0)return Iv.subVectors(l,o),f=(_-g)/(_-g+(S-E)),n.copy(o).addScaledVector(Iv,f);const v=1/(x+w+y);return c=w*v,f=y*v,n.copy(r).addScaledVector(_a,c).addScaledVector(va,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const V2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Us={h:0,s:0,l:0},Fc={h:0,s:0,l:0};function tp(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class xt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ji){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=Pt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Pt.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=Pt.workingColorSpace){if(e=NM(e,1),n=hi(n,0,1),r=hi(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,c=2*r-l;this.r=tp(c,l,e+1/3),this.g=tp(c,l,e),this.b=tp(c,l,e-1/3)}return Pt.toWorkingColorSpace(this,o),this}setStyle(e,n=ji){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ji){const r=V2[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}copyLinearToSRGB(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ji){return Pt.fromWorkingColorSpace(jn.copy(this),e),Math.round(hi(jn.r*255,0,255))*65536+Math.round(hi(jn.g*255,0,255))*256+Math.round(hi(jn.b*255,0,255))}getHexString(e=ji){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Pt.workingColorSpace){Pt.fromWorkingColorSpace(jn.copy(this),n);const r=jn.r,o=jn.g,l=jn.b,c=Math.max(r,o,l),f=Math.min(r,o,l);let d,p;const g=(f+c)/2;if(f===c)d=0,p=0;else{const _=c-f;switch(p=g<=.5?_/(c+f):_/(2-c-f),c){case r:d=(o-l)/_+(o<l?6:0);break;case o:d=(l-r)/_+2;break;case l:d=(r-o)/_+4;break}d/=6}return e.h=d,e.s=p,e.l=g,e}getRGB(e,n=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(jn.copy(this),n),e.r=jn.r,e.g=jn.g,e.b=jn.b,e}getStyle(e=ji){Pt.fromWorkingColorSpace(jn.copy(this),e);const n=jn.r,r=jn.g,o=jn.b;return e!==ji?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Us),this.setHSL(Us.h+e,Us.s+n,Us.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Us),e.getHSL(Fc);const r=kh(Us.h,Fc.h,n),o=kh(Us.s,Fc.s,n),l=kh(Us.l,Fc.l,n);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*o,this.g=l[1]*n+l[4]*r+l[7]*o,this.b=l[2]*n+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jn=new xt;xt.NAMES=V2;let ZM=0;class du extends Za{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=uu(),this.name="",this.blending=Ra,this.side=Xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tp,this.blendDst=wp,this.blendEquation=yo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ua,this.stencilZFail=ua,this.stencilZPass=ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ra&&(r.blending=this.blending),this.side!==Xs&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Tp&&(r.blendSrc=this.blendSrc),this.blendDst!==wp&&(r.blendDst=this.blendDst),this.blendEquation!==yo&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ia&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ua&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ua&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ua&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(n){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class km extends du{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=M2,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pn=new ie,Oc=new Bt;class gn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=_v,this.updateRanges=[],this.gpuType=ts,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Oc.fromBufferAttribute(this,n),Oc.applyMatrix3(e),this.setXY(n,Oc.x,Oc.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)pn.fromBufferAttribute(this,n),pn.applyMatrix3(e),this.setXYZ(n,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)pn.fromBufferAttribute(this,n),pn.applyMatrix4(e),this.setXYZ(n,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)pn.fromBufferAttribute(this,n),pn.applyNormalMatrix(e),this.setXYZ(n,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)pn.fromBufferAttribute(this,n),pn.transformDirection(e),this.setXYZ(n,pn.x,pn.y,pn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Gl(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=ci(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Gl(n,this.array)),n}setX(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Gl(n,this.array)),n}setY(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Gl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Gl(n,this.array)),n}setW(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=ci(n,this.array),r=ci(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=ci(n,this.array),r=ci(r,this.array),o=ci(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,l){return e*=this.itemSize,this.normalized&&(n=ci(n,this.array),r=ci(r,this.array),o=ci(o,this.array),l=ci(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_v&&(e.usage=this.usage),e}}class H2 extends gn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class G2 extends gn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Rr extends gn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let QM=0;const Hi=new rn,np=new On,ya=new ie,Mi=new fu,Yl=new fu,Dn=new ie;class Ri extends Za{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=uu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(F2(e)?G2:H2)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new vt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hi.makeRotationFromQuaternion(e),this.applyMatrix4(Hi),this}rotateX(e){return Hi.makeRotationX(e),this.applyMatrix4(Hi),this}rotateY(e){return Hi.makeRotationY(e),this.applyMatrix4(Hi),this}rotateZ(e){return Hi.makeRotationZ(e),this.applyMatrix4(Hi),this}translate(e,n,r){return Hi.makeTranslation(e,n,r),this.applyMatrix4(Hi),this}scale(e,n,r){return Hi.makeScale(e,n,r),this.applyMatrix4(Hi),this}lookAt(e){return np.lookAt(e),np.updateMatrix(),this.applyMatrix4(np.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ya).negate(),this.translate(ya.x,ya.y,ya.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Rr(r,3))}else{for(let r=0,o=n.count;r<o;r++){const l=e[r];n.setXYZ(r,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const l=n[r];Mi.setFromBufferAttribute(l),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(Mi.setFromBufferAttribute(e),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];Yl.setFromBufferAttribute(f),this.morphTargetsRelative?(Dn.addVectors(Mi.min,Yl.min),Mi.expandByPoint(Dn),Dn.addVectors(Mi.max,Yl.max),Mi.expandByPoint(Dn)):(Mi.expandByPoint(Yl.min),Mi.expandByPoint(Yl.max))}Mi.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)Dn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Dn));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],d=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)Dn.fromBufferAttribute(f,p),d&&(ya.fromBufferAttribute(e,p),Dn.add(ya)),o=Math.max(o,r.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let G=0;G<r.count;G++)f[G]=new ie,d[G]=new ie;const p=new ie,g=new ie,_=new ie,y=new Bt,S=new Bt,E=new Bt,w=new ie,x=new ie;function v(G,b,C){p.fromBufferAttribute(r,G),g.fromBufferAttribute(r,b),_.fromBufferAttribute(r,C),y.fromBufferAttribute(l,G),S.fromBufferAttribute(l,b),E.fromBufferAttribute(l,C),g.sub(p),_.sub(p),S.sub(y),E.sub(y);const z=1/(S.x*E.y-E.x*S.y);isFinite(z)&&(w.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(z),x.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(z),f[G].add(w),f[b].add(w),f[C].add(w),d[G].add(x),d[b].add(x),d[C].add(x))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let G=0,b=D.length;G<b;++G){const C=D[G],z=C.start,le=C.count;for(let J=z,de=z+le;J<de;J+=3)v(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const L=new ie,R=new ie,q=new ie,B=new ie;function F(G){q.fromBufferAttribute(o,G),B.copy(q);const b=f[G];L.copy(b),L.sub(q.multiplyScalar(q.dot(b))).normalize(),R.crossVectors(B,b);const z=R.dot(d[G])<0?-1:1;c.setXYZW(G,L.x,L.y,L.z,z)}for(let G=0,b=D.length;G<b;++G){const C=D[G],z=C.start,le=C.count;for(let J=z,de=z+le;J<de;J+=3)F(e.getX(J+0)),F(e.getX(J+1)),F(e.getX(J+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new gn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const o=new ie,l=new ie,c=new ie,f=new ie,d=new ie,p=new ie,g=new ie,_=new ie;if(e)for(let y=0,S=e.count;y<S;y+=3){const E=e.getX(y+0),w=e.getX(y+1),x=e.getX(y+2);o.fromBufferAttribute(n,E),l.fromBufferAttribute(n,w),c.fromBufferAttribute(n,x),g.subVectors(c,l),_.subVectors(o,l),g.cross(_),f.fromBufferAttribute(r,E),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,x),f.add(g),d.add(g),p.add(g),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let y=0,S=n.count;y<S;y+=3)o.fromBufferAttribute(n,y+0),l.fromBufferAttribute(n,y+1),c.fromBufferAttribute(n,y+2),g.subVectors(c,l),_.subVectors(o,l),g.cross(_),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Dn.fromBufferAttribute(e,n),Dn.normalize(),e.setXYZ(n,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function e(f,d){const p=f.array,g=f.itemSize,_=f.normalized,y=new p.constructor(d.length*g);let S=0,E=0;for(let w=0,x=d.length;w<x;w++){f.isInterleavedBufferAttribute?S=d[w]*f.data.stride+f.offset:S=d[w]*g;for(let v=0;v<g;v++)y[E++]=p[S++]}return new gn(y,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ri,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],p=e(d,r);n.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let g=0,_=p.length;g<_;g++){const y=p[g],S=e(y,r);d.push(S)}n.morphAttributes[f]=d}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const p=c[f];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const d in r){const p=r[d];e.data.attributes[d]=p.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let _=0,y=p.length;_<y;_++){const S=p[_];g.push(S.toJSON(e.data))}g.length>0&&(o[d]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const l=e.morphAttributes;for(const p in l){const g=[],_=l[p];for(let y=0,S=_.length;y<S;y++)g.push(_[y].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,g=c.length;p<g;p++){const _=c[p];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nv=new rn,fo=new B2,kc=new Cf,Uv=new ie,Bc=new ie,zc=new ie,Vc=new ie,ip=new ie,Hc=new ie,Fv=new ie,Gc=new ie;class fr extends On{constructor(e=new Ri,n=new km){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Hc.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const g=f[d],_=l[d];g!==0&&(ip.fromBufferAttribute(_,e),c?Hc.addScaledVector(ip,g):Hc.addScaledVector(ip.sub(n),g))}n.add(Hc)}return n}raycast(e,n){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),kc.copy(r.boundingSphere),kc.applyMatrix4(l),fo.copy(e.ray).recast(e.near),!(kc.containsPoint(fo.origin)===!1&&(fo.intersectSphere(kc,Uv)===null||fo.origin.distanceToSquared(Uv)>(e.far-e.near)**2))&&(Nv.copy(l).invert(),fo.copy(e.ray).applyMatrix4(Nv),!(r.boundingBox!==null&&fo.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,fo)))}_computeIntersections(e,n,r){let o;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,y=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,w=y.length;E<w;E++){const x=y[E],v=c[x.materialIndex],D=Math.max(x.start,S.start),L=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let R=D,q=L;R<q;R+=3){const B=f.getX(R),F=f.getX(R+1),G=f.getX(R+2);o=Wc(this,v,e,r,p,g,_,B,F,G),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let x=E,v=w;x<v;x+=3){const D=f.getX(x),L=f.getX(x+1),R=f.getX(x+2);o=Wc(this,c,e,r,p,g,_,D,L,R),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,w=y.length;E<w;E++){const x=y[E],v=c[x.materialIndex],D=Math.max(x.start,S.start),L=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let R=D,q=L;R<q;R+=3){const B=R,F=R+1,G=R+2;o=Wc(this,v,e,r,p,g,_,B,F,G),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let x=E,v=w;x<v;x+=3){const D=x,L=x+1,R=x+2;o=Wc(this,c,e,r,p,g,_,D,L,R),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}}}function JM(t,e,n,r,o,l,c,f){let d;if(e.side===pi?d=r.intersectTriangle(c,l,o,!0,f):d=r.intersectTriangle(o,l,c,e.side===Xs,f),d===null)return null;Gc.copy(f),Gc.applyMatrix4(t.matrixWorld);const p=n.ray.origin.distanceTo(Gc);return p<n.near||p>n.far?null:{distance:p,point:Gc.clone(),object:t}}function Wc(t,e,n,r,o,l,c,f,d,p){t.getVertexPosition(f,Bc),t.getVertexPosition(d,zc),t.getVertexPosition(p,Vc);const g=JM(t,e,n,r,Bc,zc,Vc,Fv);if(g){const _=new ie;ur.getBarycoord(Fv,Bc,zc,Vc,_),o&&(g.uv=ur.getInterpolatedAttribute(o,f,d,p,_,new Bt)),l&&(g.uv1=ur.getInterpolatedAttribute(l,f,d,p,_,new Bt)),c&&(g.normal=ur.getInterpolatedAttribute(c,f,d,p,_,new ie),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:f,b:d,c:p,normal:new ie,materialIndex:0};ur.getNormal(Bc,zc,Vc,y.normal),g.face=y,g.barycoord=_}return g}class hu extends Ri{constructor(e=1,n=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const d=[],p=[],g=[],_=[];let y=0,S=0;E("z","y","x",-1,-1,r,n,e,c,l,0),E("z","y","x",1,-1,r,n,-e,c,l,1),E("x","z","y",1,1,e,r,n,o,c,2),E("x","z","y",1,-1,e,r,-n,o,c,3),E("x","y","z",1,-1,e,n,r,o,l,4),E("x","y","z",-1,-1,e,n,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Rr(p,3)),this.setAttribute("normal",new Rr(g,3)),this.setAttribute("uv",new Rr(_,2));function E(w,x,v,D,L,R,q,B,F,G,b){const C=R/F,z=q/G,le=R/2,J=q/2,de=B/2,pe=F+1,se=G+1;let ue=0,k=0;const ae=new ie;for(let Q=0;Q<se;Q++){const N=Q*z-J;for(let j=0;j<pe;j++){const Ce=j*C-le;ae[w]=Ce*D,ae[x]=N*L,ae[v]=de,p.push(ae.x,ae.y,ae.z),ae[w]=0,ae[x]=0,ae[v]=B>0?1:-1,g.push(ae.x,ae.y,ae.z),_.push(j/F),_.push(1-Q/G),ue+=1}}for(let Q=0;Q<G;Q++)for(let N=0;N<F;N++){const j=y+N+pe*Q,Ce=y+N+pe*(Q+1),K=y+(N+1)+pe*(Q+1),fe=y+(N+1)+pe*Q;d.push(j,Ce,fe),d.push(Ce,K,fe),k+=6}f.addGroup(S,k,b),S+=k,y+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ka(t){const e={};for(const n in t){e[n]={};for(const r in t[n]){const o=t[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function ti(t){const e={};for(let n=0;n<t.length;n++){const r=ka(t[n]);for(const o in r)e[o]=r[o]}return e}function eE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function W2(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const tE={clone:ka,merge:ti};var nE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends du{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nE,this.fragmentShader=iE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ka(e.uniforms),this.uniformsGroups=eE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?n.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[o]={type:"m4",value:c.toArray()}:n.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class X2 extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=ns}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fs=new ie,Ov=new Bt,kv=new Bt;class Yi extends X2{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=um*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return um*2*Math.atan(Math.tan(Oh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z),Fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z)}getViewSize(e,n){return this.getViewBounds(e,Ov,kv),n.subVectors(kv,Ov)}setViewOffset(e,n,r,o,l,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Oh*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,p=c.fullHeight;l+=c.offsetX*o/d,n-=c.offsetY*r/p,o*=c.width/d,r*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const xa=-90,Sa=1;class rE extends On{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Yi(xa,Sa,e,n);o.layers=this.layers,this.add(o);const l=new Yi(xa,Sa,e,n);l.layers=this.layers,this.add(l);const c=new Yi(xa,Sa,e,n);c.layers=this.layers,this.add(c);const f=new Yi(xa,Sa,e,n);f.layers=this.layers,this.add(f);const d=new Yi(xa,Sa,e,n);d.layers=this.layers,this.add(d);const p=new Yi(xa,Sa,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,l,c,f,d]=n;for(const p of n)this.remove(p);if(e===ns)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===hf)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,p,g]=this.children,_=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,l),e.setRenderTarget(r,1,o),e.render(n,c),e.setRenderTarget(r,2,o),e.render(n,f),e.setRenderTarget(r,3,o),e.render(n,d),e.setRenderTarget(r,4,o),e.render(n,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),e.render(n,g),e.setRenderTarget(_,y,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class j2 extends mi{constructor(e,n,r,o,l,c,f,d,p,g){e=e!==void 0?e:[],n=n!==void 0?n:Na,super(e,n,r,o,l,c,f,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sE extends Do{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new j2(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ar}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new hu(5,5,5),l=new $i({name:"CubemapFromEquirect",uniforms:ka(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:pi,blending:Hs});l.uniforms.tEquirect.value=n;const c=new fr(o,l),f=n.minFilter;return n.minFilter===Mo&&(n.minFilter=Ar),new rE(1,10,this).update(e,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,n,r,o){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,o);e.setRenderTarget(l)}}const rp=new ie,oE=new ie,aE=new vt;class _o{constructor(e=new ie(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=rp.subVectors(r,n).cross(oE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(rp),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||aE.getNormalMatrix(e),o=this.coplanarPoint(rp).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ho=new Cf,Xc=new ie;class Bm{constructor(e=new _o,n=new _o,r=new _o,o=new _o,l=new _o,c=new _o){this.planes=[e,n,r,o,l,c]}set(e,n,r,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ns){const r=this.planes,o=e.elements,l=o[0],c=o[1],f=o[2],d=o[3],p=o[4],g=o[5],_=o[6],y=o[7],S=o[8],E=o[9],w=o[10],x=o[11],v=o[12],D=o[13],L=o[14],R=o[15];if(r[0].setComponents(d-l,y-p,x-S,R-v).normalize(),r[1].setComponents(d+l,y+p,x+S,R+v).normalize(),r[2].setComponents(d+c,y+g,x+E,R+D).normalize(),r[3].setComponents(d-c,y-g,x-E,R-D).normalize(),r[4].setComponents(d-f,y-_,x-w,R-L).normalize(),n===ns)r[5].setComponents(d+f,y+_,x+w,R+L).normalize();else if(n===hf)r[5].setComponents(f,_,w,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ho.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ho)}intersectsSprite(e){return ho.center.set(0,0,0),ho.radius=.7071067811865476,ho.applyMatrix4(e.matrixWorld),this.intersectsSphere(ho)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Xc.x=o.normal.x>0?e.max.x:e.min.x,Xc.y=o.normal.y>0?e.max.y:e.min.y,Xc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Xc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Y2(){let t=null,e=!1,n=null,r=null;function o(l,c){n(l,c),r=t.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=t.requestAnimationFrame(o),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){t=l}}}function lE(t){const e=new WeakMap;function n(f,d){const p=f.array,g=f.usage,_=p.byteLength,y=t.createBuffer();t.bindBuffer(d,y),t.bufferData(d,p,g),f.onUploadCallback();let S;if(p instanceof Float32Array)S=t.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=t.HALF_FLOAT:S=t.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=t.SHORT;else if(p instanceof Uint32Array)S=t.UNSIGNED_INT;else if(p instanceof Int32Array)S=t.INT;else if(p instanceof Int8Array)S=t.BYTE;else if(p instanceof Uint8Array)S=t.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,d,p){const g=d.array,_=d.updateRanges;if(t.bindBuffer(p,f),_.length===0)t.bufferSubData(p,0,g);else{_.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<_.length;S++){const E=_[y],w=_[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++y,_[y]=w)}_.length=y+1;for(let S=0,E=_.length;S<E;S++){const w=_[S];t.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(t.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,n(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,d),p.version=f.version}}return{get:o,remove:l,update:c}}class Rf extends Ri{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const l=e/2,c=n/2,f=Math.floor(r),d=Math.floor(o),p=f+1,g=d+1,_=e/f,y=n/d,S=[],E=[],w=[],x=[];for(let v=0;v<g;v++){const D=v*y-c;for(let L=0;L<p;L++){const R=L*_-l;E.push(R,-D,0),w.push(0,0,1),x.push(L/f),x.push(1-v/d)}}for(let v=0;v<d;v++)for(let D=0;D<f;D++){const L=D+p*v,R=D+p*(v+1),q=D+1+p*(v+1),B=D+1+p*v;S.push(L,R,B),S.push(R,q,B)}this.setIndex(S),this.setAttribute("position",new Rr(E,3)),this.setAttribute("normal",new Rr(w,3)),this.setAttribute("uv",new Rr(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rf(e.width,e.height,e.widthSegments,e.heightSegments)}}var uE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_E=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ME=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,EE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,LE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,DE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,IE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,NE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,UE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BE="gl_FragColor = linearToOutputTexel( gl_FragColor );",zE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,HE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,GE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,WE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$E=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ZE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,aT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_T=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ST=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ET=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,CT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,RT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,XT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,YT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$T=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,KT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,QT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e4=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t4=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,n4=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,i4=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,r4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o4=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,a4=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const l4=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u4=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f4=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h4=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p4=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,m4=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,g4=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_4=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,v4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y4=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x4=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S4=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M4=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,E4=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T4=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w4=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A4=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,C4=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R4=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,b4=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,P4=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L4=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D4=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,I4=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F4=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,O4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k4=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B4=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,z4=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yt={alphahash_fragment:uE,alphahash_pars_fragment:cE,alphamap_fragment:fE,alphamap_pars_fragment:dE,alphatest_fragment:hE,alphatest_pars_fragment:pE,aomap_fragment:mE,aomap_pars_fragment:gE,batching_pars_vertex:_E,batching_vertex:vE,begin_vertex:yE,beginnormal_vertex:xE,bsdfs:SE,iridescence_fragment:ME,bumpmap_pars_fragment:EE,clipping_planes_fragment:TE,clipping_planes_pars_fragment:wE,clipping_planes_pars_vertex:AE,clipping_planes_vertex:CE,color_fragment:RE,color_pars_fragment:bE,color_pars_vertex:PE,color_vertex:LE,common:DE,cube_uv_reflection_fragment:IE,defaultnormal_vertex:NE,displacementmap_pars_vertex:UE,displacementmap_vertex:FE,emissivemap_fragment:OE,emissivemap_pars_fragment:kE,colorspace_fragment:BE,colorspace_pars_fragment:zE,envmap_fragment:VE,envmap_common_pars_fragment:HE,envmap_pars_fragment:GE,envmap_pars_vertex:WE,envmap_physical_pars_fragment:tT,envmap_vertex:XE,fog_vertex:jE,fog_pars_vertex:YE,fog_fragment:qE,fog_pars_fragment:$E,gradientmap_pars_fragment:KE,lightmap_pars_fragment:ZE,lights_lambert_fragment:QE,lights_lambert_pars_fragment:JE,lights_pars_begin:eT,lights_toon_fragment:nT,lights_toon_pars_fragment:iT,lights_phong_fragment:rT,lights_phong_pars_fragment:sT,lights_physical_fragment:oT,lights_physical_pars_fragment:aT,lights_fragment_begin:lT,lights_fragment_maps:uT,lights_fragment_end:cT,logdepthbuf_fragment:fT,logdepthbuf_pars_fragment:dT,logdepthbuf_pars_vertex:hT,logdepthbuf_vertex:pT,map_fragment:mT,map_pars_fragment:gT,map_particle_fragment:_T,map_particle_pars_fragment:vT,metalnessmap_fragment:yT,metalnessmap_pars_fragment:xT,morphinstance_vertex:ST,morphcolor_vertex:MT,morphnormal_vertex:ET,morphtarget_pars_vertex:TT,morphtarget_vertex:wT,normal_fragment_begin:AT,normal_fragment_maps:CT,normal_pars_fragment:RT,normal_pars_vertex:bT,normal_vertex:PT,normalmap_pars_fragment:LT,clearcoat_normal_fragment_begin:DT,clearcoat_normal_fragment_maps:IT,clearcoat_pars_fragment:NT,iridescence_pars_fragment:UT,opaque_fragment:FT,packing:OT,premultiplied_alpha_fragment:kT,project_vertex:BT,dithering_fragment:zT,dithering_pars_fragment:VT,roughnessmap_fragment:HT,roughnessmap_pars_fragment:GT,shadowmap_pars_fragment:WT,shadowmap_pars_vertex:XT,shadowmap_vertex:jT,shadowmask_pars_fragment:YT,skinbase_vertex:qT,skinning_pars_vertex:$T,skinning_vertex:KT,skinnormal_vertex:ZT,specularmap_fragment:QT,specularmap_pars_fragment:JT,tonemapping_fragment:e4,tonemapping_pars_fragment:t4,transmission_fragment:n4,transmission_pars_fragment:i4,uv_pars_fragment:r4,uv_pars_vertex:s4,uv_vertex:o4,worldpos_vertex:a4,background_vert:l4,background_frag:u4,backgroundCube_vert:c4,backgroundCube_frag:f4,cube_vert:d4,cube_frag:h4,depth_vert:p4,depth_frag:m4,distanceRGBA_vert:g4,distanceRGBA_frag:_4,equirect_vert:v4,equirect_frag:y4,linedashed_vert:x4,linedashed_frag:S4,meshbasic_vert:M4,meshbasic_frag:E4,meshlambert_vert:T4,meshlambert_frag:w4,meshmatcap_vert:A4,meshmatcap_frag:C4,meshnormal_vert:R4,meshnormal_frag:b4,meshphong_vert:P4,meshphong_frag:L4,meshphysical_vert:D4,meshphysical_frag:I4,meshtoon_vert:N4,meshtoon_frag:U4,points_vert:F4,points_frag:O4,shadow_vert:k4,shadow_frag:B4,sprite_vert:z4,sprite_frag:V4},Pe={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},wr={basic:{uniforms:ti([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:ti([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new xt(0)}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:ti([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:ti([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:ti([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new xt(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:ti([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:ti([Pe.points,Pe.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:ti([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:ti([Pe.common,Pe.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:ti([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:ti([Pe.sprite,Pe.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distanceRGBA:{uniforms:ti([Pe.common,Pe.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distanceRGBA_vert,fragmentShader:yt.distanceRGBA_frag},shadow:{uniforms:ti([Pe.lights,Pe.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};wr.physical={uniforms:ti([wr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const jc={r:0,b:0,g:0},po=new ss,H4=new rn;function G4(t,e,n,r,o,l,c){const f=new xt(0);let d=l===!0?0:1,p,g,_=null,y=0,S=null;function E(D){let L=D.isScene===!0?D.background:null;return L&&L.isTexture&&(L=(D.backgroundBlurriness>0?n:e).get(L)),L}function w(D){let L=!1;const R=E(D);R===null?v(f,d):R&&R.isColor&&(v(R,1),L=!0);const q=t.xr.getEnvironmentBlendMode();q==="additive"?r.buffers.color.setClear(0,0,0,1,c):q==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(t.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(D,L){const R=E(L);R&&(R.isCubeTexture||R.mapping===wf)?(g===void 0&&(g=new fr(new hu(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:ka(wr.backgroundCube.uniforms),vertexShader:wr.backgroundCube.vertexShader,fragmentShader:wr.backgroundCube.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(q,B,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),po.copy(L.backgroundRotation),po.x*=-1,po.y*=-1,po.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(po.y*=-1,po.z*=-1),g.material.uniforms.envMap.value=R,g.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(H4.makeRotationFromEuler(po)),g.material.toneMapped=Pt.getTransfer(R.colorSpace)!==zt,(_!==R||y!==R.version||S!==t.toneMapping)&&(g.material.needsUpdate=!0,_=R,y=R.version,S=t.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new fr(new Rf(2,2),new $i({name:"BackgroundMaterial",uniforms:ka(wr.background.uniforms),vertexShader:wr.background.vertexShader,fragmentShader:wr.background.fragmentShader,side:Xs,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Pt.getTransfer(R.colorSpace)!==zt,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||y!==R.version||S!==t.toneMapping)&&(p.material.needsUpdate=!0,_=R,y=R.version,S=t.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function v(D,L){D.getRGB(jc,W2(t)),r.buffers.color.setClear(jc.r,jc.g,jc.b,L,c)}return{getClearColor:function(){return f},setClearColor:function(D,L=1){f.set(D),d=L,v(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(D){d=D,v(f,d)},render:w,addToRenderList:x}}function W4(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),r={},o=y(null);let l=o,c=!1;function f(C,z,le,J,de){let pe=!1;const se=_(J,le,z);l!==se&&(l=se,p(l.object)),pe=S(C,J,le,de),pe&&E(C,J,le,de),de!==null&&e.update(de,t.ELEMENT_ARRAY_BUFFER),(pe||c)&&(c=!1,R(C,z,le,J),de!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function d(){return t.createVertexArray()}function p(C){return t.bindVertexArray(C)}function g(C){return t.deleteVertexArray(C)}function _(C,z,le){const J=le.wireframe===!0;let de=r[C.id];de===void 0&&(de={},r[C.id]=de);let pe=de[z.id];pe===void 0&&(pe={},de[z.id]=pe);let se=pe[J];return se===void 0&&(se=y(d()),pe[J]=se),se}function y(C){const z=[],le=[],J=[];for(let de=0;de<n;de++)z[de]=0,le[de]=0,J[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:le,attributeDivisors:J,object:C,attributes:{},index:null}}function S(C,z,le,J){const de=l.attributes,pe=z.attributes;let se=0;const ue=le.getAttributes();for(const k in ue)if(ue[k].location>=0){const Q=de[k];let N=pe[k];if(N===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),Q===void 0||Q.attribute!==N||N&&Q.data!==N.data)return!0;se++}return l.attributesNum!==se||l.index!==J}function E(C,z,le,J){const de={},pe=z.attributes;let se=0;const ue=le.getAttributes();for(const k in ue)if(ue[k].location>=0){let Q=pe[k];Q===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(Q=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(Q=C.instanceColor));const N={};N.attribute=Q,Q&&Q.data&&(N.data=Q.data),de[k]=N,se++}l.attributes=de,l.attributesNum=se,l.index=J}function w(){const C=l.newAttributes;for(let z=0,le=C.length;z<le;z++)C[z]=0}function x(C){v(C,0)}function v(C,z){const le=l.newAttributes,J=l.enabledAttributes,de=l.attributeDivisors;le[C]=1,J[C]===0&&(t.enableVertexAttribArray(C),J[C]=1),de[C]!==z&&(t.vertexAttribDivisor(C,z),de[C]=z)}function D(){const C=l.newAttributes,z=l.enabledAttributes;for(let le=0,J=z.length;le<J;le++)z[le]!==C[le]&&(t.disableVertexAttribArray(le),z[le]=0)}function L(C,z,le,J,de,pe,se){se===!0?t.vertexAttribIPointer(C,z,le,de,pe):t.vertexAttribPointer(C,z,le,J,de,pe)}function R(C,z,le,J){w();const de=J.attributes,pe=le.getAttributes(),se=z.defaultAttributeValues;for(const ue in pe){const k=pe[ue];if(k.location>=0){let ae=de[ue];if(ae===void 0&&(ue==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),ue==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor)),ae!==void 0){const Q=ae.normalized,N=ae.itemSize,j=e.get(ae);if(j===void 0)continue;const Ce=j.buffer,K=j.type,fe=j.bytesPerElement,ve=K===t.INT||K===t.UNSIGNED_INT||ae.gpuType===Dm;if(ae.isInterleavedBufferAttribute){const he=ae.data,_e=he.stride,we=ae.offset;if(he.isInstancedInterleavedBuffer){for(let Ge=0;Ge<k.locationSize;Ge++)v(k.location+Ge,he.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ge=0;Ge<k.locationSize;Ge++)x(k.location+Ge);t.bindBuffer(t.ARRAY_BUFFER,Ce);for(let Ge=0;Ge<k.locationSize;Ge++)L(k.location+Ge,N/k.locationSize,K,Q,_e*fe,(we+N/k.locationSize*Ge)*fe,ve)}else{if(ae.isInstancedBufferAttribute){for(let he=0;he<k.locationSize;he++)v(k.location+he,ae.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let he=0;he<k.locationSize;he++)x(k.location+he);t.bindBuffer(t.ARRAY_BUFFER,Ce);for(let he=0;he<k.locationSize;he++)L(k.location+he,N/k.locationSize,K,Q,N*fe,N/k.locationSize*he*fe,ve)}}else if(se!==void 0){const Q=se[ue];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(k.location,Q);break;case 3:t.vertexAttrib3fv(k.location,Q);break;case 4:t.vertexAttrib4fv(k.location,Q);break;default:t.vertexAttrib1fv(k.location,Q)}}}}D()}function q(){G();for(const C in r){const z=r[C];for(const le in z){const J=z[le];for(const de in J)g(J[de].object),delete J[de];delete z[le]}delete r[C]}}function B(C){if(r[C.id]===void 0)return;const z=r[C.id];for(const le in z){const J=z[le];for(const de in J)g(J[de].object),delete J[de];delete z[le]}delete r[C.id]}function F(C){for(const z in r){const le=r[z];if(le[C.id]===void 0)continue;const J=le[C.id];for(const de in J)g(J[de].object),delete J[de];delete le[C.id]}}function G(){b(),c=!0,l!==o&&(l=o,p(l.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:G,resetDefaultState:b,dispose:q,releaseStatesOfGeometry:B,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:x,disableUnusedAttributes:D}}function X4(t,e,n){let r;function o(p){r=p}function l(p,g){t.drawArrays(r,p,g),n.update(g,r,1)}function c(p,g,_){_!==0&&(t.drawArraysInstanced(r,p,g,_),n.update(g,r,_))}function f(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,_);let S=0;for(let E=0;E<_;E++)S+=g[E];n.update(S,r,1)}function d(p,g,_,y){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)c(p[E],g[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,y,0,_);let E=0;for(let w=0;w<_;w++)E+=g[w]*y[w];n.update(E,r,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function j4(t,e,n,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=t.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==cr&&r.convert(F)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const G=F===lu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==rs&&r.convert(F)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ts&&!G)}function d(F){if(F==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=d(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,y=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),D=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),L=t.getParameter(t.MAX_VARYING_VECTORS),R=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),q=E>0,B=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:q,maxSamples:B}}function Y4(t){const e=this;let n=null,r=0,o=!1,l=!1;const c=new _o,f=new vt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const S=_.length!==0||y||r!==0||o;return o=y,r=_.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,y){n=g(_,y,0)},this.setState=function(_,y,S){const E=_.clippingPlanes,w=_.clipIntersection,x=_.clipShadows,v=t.get(_);if(!o||E===null||E.length===0||l&&!x)l?g(null):p();else{const D=l?0:r,L=D*4;let R=v.clippingState||null;d.value=R,R=g(E,y,L,S);for(let q=0;q!==L;++q)R[q]=n[q];v.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function p(){d.value!==n&&(d.value=n,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,y,S,E){const w=_!==null?_.length:0;let x=null;if(w!==0){if(x=d.value,E!==!0||x===null){const v=S+w*4,D=y.matrixWorldInverse;f.getNormalMatrix(D),(x===null||x.length<v)&&(x=new Float32Array(v));for(let L=0,R=S;L!==w;++L,R+=4)c.copy(_[L]).applyMatrix4(D,f),c.normal.toArray(x,R),x[R+3]=c.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}function q4(t){let e=new WeakMap;function n(c,f){return f===Ip?c.mapping=Na:f===Np&&(c.mapping=Ua),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===Ip||f===Np)if(e.has(c)){const d=e.get(c).texture;return n(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const p=new sE(d.height);return p.fromEquirectangularTexture(t,c),e.set(c,p),c.addEventListener("dispose",o),n(p.texture,c.mapping)}else return null}}return c}function o(c){const f=c.target;f.removeEventListener("dispose",o);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class q2 extends X2{constructor(e=-1,n=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=o+n,d=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=g*this.view.offsetY,d=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Aa=4,Bv=[.125,.215,.35,.446,.526,.582],xo=20,sp=new q2,zv=new xt;let op=null,ap=0,lp=0,up=!1;const vo=(1+Math.sqrt(5))/2,Ma=1/vo,Vv=[new ie(-vo,Ma,0),new ie(vo,Ma,0),new ie(-Ma,0,vo),new ie(Ma,0,vo),new ie(0,vo,-Ma),new ie(0,vo,Ma),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)];class Hv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){op=this._renderer.getRenderTarget(),ap=this._renderer.getActiveCubeFace(),lp=this._renderer.getActiveMipmapLevel(),up=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(op,ap,lp),this._renderer.xr.enabled=up,e.scissorTest=!1,Yc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Na||e.mapping===Ua?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),op=this._renderer.getRenderTarget(),ap=this._renderer.getActiveCubeFace(),lp=this._renderer.getActiveMipmapLevel(),up=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Ar,minFilter:Ar,generateMipmaps:!1,type:lu,format:cr,colorSpace:Ka,depthBuffer:!1},o=Gv(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gv(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$4(l)),this._blurMaterial=K4(l,e,n)}return o}_compileMaterial(e){const n=new fr(this._lodPlanes[0],e);this._renderer.compile(n,sp)}_sceneToCubeUV(e,n,r,o){const f=new Yi(90,1,n,r),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,y=g.toneMapping;g.getClearColor(zv),g.toneMapping=Gs,g.autoClear=!1;const S=new km({name:"PMREM.Background",side:pi,depthWrite:!1,depthTest:!1}),E=new fr(new hu,S);let w=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,w=!0):(S.color.copy(zv),w=!0);for(let v=0;v<6;v++){const D=v%3;D===0?(f.up.set(0,d[v],0),f.lookAt(p[v],0,0)):D===1?(f.up.set(0,0,d[v]),f.lookAt(0,p[v],0)):(f.up.set(0,d[v],0),f.lookAt(0,0,p[v]));const L=this._cubeSize;Yc(o,D*L,v>2?L:0,L,L),g.setRenderTarget(o),w&&g.render(E,f),g.render(e,f)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=y,g.autoClear=_,e.background=x}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Na||e.mapping===Ua;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wv());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new fr(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;Yc(n,0,0,3*d,2*d),r.setRenderTarget(n),r.render(c,sp)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Vv[(o-l-1)%Vv.length];this._blur(e,l-1,l,c,f)}n.autoClear=r}_blur(e,n,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,n,r,o,l,c,f){const d=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new fr(this._lodPlanes[o],p),y=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*xo-1),w=l/E,x=isFinite(l)?1+Math.floor(g*w):xo;x>xo&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${xo}`);const v=[];let D=0;for(let F=0;F<xo;++F){const G=F/w,b=Math.exp(-G*G/2);v.push(b),F===0?D+=b:F<x&&(D+=2*b)}for(let F=0;F<v.length;F++)v[F]=v[F]/D;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=v,y.latitudinal.value=c==="latitudinal",f&&(y.poleAxis.value=f);const{_lodMax:L}=this;y.dTheta.value=E,y.mipInt.value=L-r;const R=this._sizeLods[o],q=3*R*(o>L-Aa?o-L+Aa:0),B=4*(this._cubeSize-R);Yc(n,q,B,3*R,2*R),d.setRenderTarget(n),d.render(_,sp)}}function $4(t){const e=[],n=[],r=[];let o=t;const l=t-Aa+1+Bv.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);n.push(f);let d=1/f;c>t-Aa?d=Bv[c-t+Aa-1]:c===0&&(d=0),r.push(d);const p=1/(f-2),g=-p,_=1+p,y=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,w=3,x=2,v=1,D=new Float32Array(w*E*S),L=new Float32Array(x*E*S),R=new Float32Array(v*E*S);for(let B=0;B<S;B++){const F=B%3*2/3-1,G=B>2?0:-1,b=[F,G,0,F+2/3,G,0,F+2/3,G+1,0,F,G,0,F+2/3,G+1,0,F,G+1,0];D.set(b,w*E*B),L.set(y,x*E*B);const C=[B,B,B,B,B,B];R.set(C,v*E*B)}const q=new Ri;q.setAttribute("position",new gn(D,w)),q.setAttribute("uv",new gn(L,x)),q.setAttribute("faceIndex",new gn(R,v)),e.push(q),o>Aa&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Gv(t,e,n){const r=new Do(t,e,n);return r.texture.mapping=wf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Yc(t,e,n,r,o){t.viewport.set(e,n,r,o),t.scissor.set(e,n,r,o)}function K4(t,e,n){const r=new Float32Array(xo),o=new ie(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:xo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:zm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hs,depthTest:!1,depthWrite:!1})}function Wv(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hs,depthTest:!1,depthWrite:!1})}function Xv(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hs,depthTest:!1,depthWrite:!1})}function zm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Z4(t){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const d=f.mapping,p=d===Ip||d===Np,g=d===Na||d===Ua;if(p||g){let _=e.get(f);const y=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==y)return n===null&&(n=new Hv(t)),_=p?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const S=f.image;return p&&S&&S.height>0||g&&S&&o(S)?(n===null&&(n=new Hv(t)),_=p?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function o(f){let d=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function Q4(t){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=t.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&$l("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function J4(t,e,n,r){const o={},l=new WeakMap;function c(_){const y=_.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);for(const E in y.morphAttributes){const w=y.morphAttributes[E];for(let x=0,v=w.length;x<v;x++)e.remove(w[x])}y.removeEventListener("dispose",c),delete o[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function f(_,y){return o[y.id]===!0||(y.addEventListener("dispose",c),o[y.id]=!0,n.memory.geometries++),y}function d(_){const y=_.attributes;for(const E in y)e.update(y[E],t.ARRAY_BUFFER);const S=_.morphAttributes;for(const E in S){const w=S[E];for(let x=0,v=w.length;x<v;x++)e.update(w[x],t.ARRAY_BUFFER)}}function p(_){const y=[],S=_.index,E=_.attributes.position;let w=0;if(S!==null){const D=S.array;w=S.version;for(let L=0,R=D.length;L<R;L+=3){const q=D[L+0],B=D[L+1],F=D[L+2];y.push(q,B,B,F,F,q)}}else if(E!==void 0){const D=E.array;w=E.version;for(let L=0,R=D.length/3-1;L<R;L+=3){const q=L+0,B=L+1,F=L+2;y.push(q,B,B,F,F,q)}}else return;const x=new(F2(y)?G2:H2)(y,1);x.version=w;const v=l.get(_);v&&e.remove(v),l.set(_,x)}function g(_){const y=l.get(_);if(y){const S=_.index;S!==null&&y.version<S.version&&p(_)}else p(_);return l.get(_)}return{get:f,update:d,getWireframeAttribute:g}}function ew(t,e,n){let r;function o(y){r=y}let l,c;function f(y){l=y.type,c=y.bytesPerElement}function d(y,S){t.drawElements(r,S,l,y*c),n.update(S,r,1)}function p(y,S,E){E!==0&&(t.drawElementsInstanced(r,S,l,y*c,E),n.update(S,r,E))}function g(y,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,y,0,E);let x=0;for(let v=0;v<E;v++)x+=S[v];n.update(x,r,1)}function _(y,S,E,w){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<y.length;v++)p(y[v]/c,S[v],w[v]);else{x.multiDrawElementsInstancedWEBGL(r,S,0,l,y,0,w,0,E);let v=0;for(let D=0;D<E;D++)v+=S[D]*w[D];n.update(v,r,1)}}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function tw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(n.calls++,c){case t.TRIANGLES:n.triangles+=f*(l/3);break;case t.LINES:n.lines+=f*(l/2);break;case t.LINE_STRIP:n.lines+=f*(l-1);break;case t.LINE_LOOP:n.lines+=f*l;break;case t.POINTS:n.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function nw(t,e,n){const r=new WeakMap,o=new ln;function l(c,f,d){const p=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let y=r.get(f);if(y===void 0||y.count!==_){let C=function(){G.dispose(),r.delete(f),f.removeEventListener("dispose",C)};var S=C;y!==void 0&&y.texture.dispose();const E=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let R=0;E===!0&&(R=1),w===!0&&(R=2),x===!0&&(R=3);let q=f.attributes.position.count*R,B=1;q>e.maxTextureSize&&(B=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const F=new Float32Array(q*B*4*_),G=new k2(F,q,B,_);G.type=ts,G.needsUpdate=!0;const b=R*4;for(let z=0;z<_;z++){const le=v[z],J=D[z],de=L[z],pe=q*B*4*z;for(let se=0;se<le.count;se++){const ue=se*b;E===!0&&(o.fromBufferAttribute(le,se),F[pe+ue+0]=o.x,F[pe+ue+1]=o.y,F[pe+ue+2]=o.z,F[pe+ue+3]=0),w===!0&&(o.fromBufferAttribute(J,se),F[pe+ue+4]=o.x,F[pe+ue+5]=o.y,F[pe+ue+6]=o.z,F[pe+ue+7]=0),x===!0&&(o.fromBufferAttribute(de,se),F[pe+ue+8]=o.x,F[pe+ue+9]=o.y,F[pe+ue+10]=o.z,F[pe+ue+11]=de.itemSize===4?o.w:1)}}y={count:_,texture:G,size:new Bt(q,B)},r.set(f,y),f.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(t,"morphTexture",c.morphTexture,n);else{let E=0;for(let x=0;x<p.length;x++)E+=p[x];const w=f.morphTargetsRelative?1:1-E;d.getUniforms().setValue(t,"morphTargetBaseInfluence",w),d.getUniforms().setValue(t,"morphTargetInfluences",p)}d.getUniforms().setValue(t,"morphTargetsTexture",y.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",y.size)}return{update:l}}function iw(t,e,n,r){let o=new WeakMap;function l(d){const p=r.render.frame,g=d.geometry,_=e.get(d,g);if(o.get(_)!==p&&(e.update(_),o.set(_,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),o.get(d)!==p&&(n.update(d.instanceMatrix,t.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,t.ARRAY_BUFFER),o.set(d,p))),d.isSkinnedMesh){const y=d.skeleton;o.get(y)!==p&&(y.update(),o.set(y,p))}return _}function c(){o=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:l,dispose:c}}class $2 extends mi{constructor(e,n,r,o,l,c,f,d,p,g=ba){if(g!==ba&&g!==Oa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===ba&&(r=Lo),r===void 0&&g===Oa&&(r=Fa),super(null,o,l,c,f,d,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:dr,this.minFilter=d!==void 0?d:dr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const K2=new mi,jv=new $2(1,1),Z2=new k2,Q2=new GM,J2=new j2,Yv=[],qv=[],$v=new Float32Array(16),Kv=new Float32Array(9),Zv=new Float32Array(4);function Qa(t,e,n){const r=t[0];if(r<=0||r>0)return t;const o=e*n;let l=Yv[o];if(l===void 0&&(l=new Float32Array(o),Yv[o]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=n,t[c].toArray(l,f)}return l}function An(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function Cn(t,e){for(let n=0,r=e.length;n<r;n++)t[n]=e[n]}function bf(t,e){let n=qv[e];n===void 0&&(n=new Int32Array(e),qv[e]=n);for(let r=0;r!==e;++r)n[r]=t.allocateTextureUnit();return n}function rw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;t.uniform2fv(this.addr,e),Cn(n,e)}}function ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(An(n,e))return;t.uniform3fv(this.addr,e),Cn(n,e)}}function aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;t.uniform4fv(this.addr,e),Cn(n,e)}}function lw(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(An(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Cn(n,e)}else{if(An(n,r))return;Zv.set(r),t.uniformMatrix2fv(this.addr,!1,Zv),Cn(n,r)}}function uw(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(An(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Cn(n,e)}else{if(An(n,r))return;Kv.set(r),t.uniformMatrix3fv(this.addr,!1,Kv),Cn(n,r)}}function cw(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(An(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Cn(n,e)}else{if(An(n,r))return;$v.set(r),t.uniformMatrix4fv(this.addr,!1,$v),Cn(n,r)}}function fw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;t.uniform2iv(this.addr,e),Cn(n,e)}}function hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;t.uniform3iv(this.addr,e),Cn(n,e)}}function pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;t.uniform4iv(this.addr,e),Cn(n,e)}}function mw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(An(n,e))return;t.uniform2uiv(this.addr,e),Cn(n,e)}}function _w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(An(n,e))return;t.uniform3uiv(this.addr,e),Cn(n,e)}}function vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(An(n,e))return;t.uniform4uiv(this.addr,e),Cn(n,e)}}function yw(t,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(t.uniform1i(this.addr,o),r[0]=o);let l;this.type===t.SAMPLER_2D_SHADOW?(jv.compareFunction=U2,l=jv):l=K2,n.setTexture2D(e||l,o)}function xw(t,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(t.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Q2,o)}function Sw(t,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(t.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||J2,o)}function Mw(t,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(t.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Z2,o)}function Ew(t){switch(t){case 5126:return rw;case 35664:return sw;case 35665:return ow;case 35666:return aw;case 35674:return lw;case 35675:return uw;case 35676:return cw;case 5124:case 35670:return fw;case 35667:case 35671:return dw;case 35668:case 35672:return hw;case 35669:case 35673:return pw;case 5125:return mw;case 36294:return gw;case 36295:return _w;case 36296:return vw;case 35678:case 36198:case 36298:case 36306:case 35682:return yw;case 35679:case 36299:case 36307:return xw;case 35680:case 36300:case 36308:case 36293:return Sw;case 36289:case 36303:case 36311:case 36292:return Mw}}function Tw(t,e){t.uniform1fv(this.addr,e)}function ww(t,e){const n=Qa(e,this.size,2);t.uniform2fv(this.addr,n)}function Aw(t,e){const n=Qa(e,this.size,3);t.uniform3fv(this.addr,n)}function Cw(t,e){const n=Qa(e,this.size,4);t.uniform4fv(this.addr,n)}function Rw(t,e){const n=Qa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function bw(t,e){const n=Qa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Pw(t,e){const n=Qa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Lw(t,e){t.uniform1iv(this.addr,e)}function Dw(t,e){t.uniform2iv(this.addr,e)}function Iw(t,e){t.uniform3iv(this.addr,e)}function Nw(t,e){t.uniform4iv(this.addr,e)}function Uw(t,e){t.uniform1uiv(this.addr,e)}function Fw(t,e){t.uniform2uiv(this.addr,e)}function Ow(t,e){t.uniform3uiv(this.addr,e)}function kw(t,e){t.uniform4uiv(this.addr,e)}function Bw(t,e,n){const r=this.cache,o=e.length,l=bf(n,o);An(r,l)||(t.uniform1iv(this.addr,l),Cn(r,l));for(let c=0;c!==o;++c)n.setTexture2D(e[c]||K2,l[c])}function zw(t,e,n){const r=this.cache,o=e.length,l=bf(n,o);An(r,l)||(t.uniform1iv(this.addr,l),Cn(r,l));for(let c=0;c!==o;++c)n.setTexture3D(e[c]||Q2,l[c])}function Vw(t,e,n){const r=this.cache,o=e.length,l=bf(n,o);An(r,l)||(t.uniform1iv(this.addr,l),Cn(r,l));for(let c=0;c!==o;++c)n.setTextureCube(e[c]||J2,l[c])}function Hw(t,e,n){const r=this.cache,o=e.length,l=bf(n,o);An(r,l)||(t.uniform1iv(this.addr,l),Cn(r,l));for(let c=0;c!==o;++c)n.setTexture2DArray(e[c]||Z2,l[c])}function Gw(t){switch(t){case 5126:return Tw;case 35664:return ww;case 35665:return Aw;case 35666:return Cw;case 35674:return Rw;case 35675:return bw;case 35676:return Pw;case 5124:case 35670:return Lw;case 35667:case 35671:return Dw;case 35668:case 35672:return Iw;case 35669:case 35673:return Nw;case 5125:return Uw;case 36294:return Fw;case 36295:return Ow;case 36296:return kw;case 35678:case 36198:case 36298:case 36306:case 35682:return Bw;case 35679:case 36299:case 36307:return zw;case 35680:case 36300:case 36308:case 36293:return Vw;case 36289:case 36303:case 36311:case 36292:return Hw}}class Ww{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=Ew(n.type)}}class Xw{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Gw(n.type)}}class jw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,n[f.id],r)}}}const cp=/(\w+)(\])?(\[|\.)?/g;function Qv(t,e){t.seq.push(e),t.map[e.id]=e}function Yw(t,e,n){const r=t.name,o=r.length;for(cp.lastIndex=0;;){const l=cp.exec(r),c=cp.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&c+2===o){Qv(n,p===void 0?new Ww(f,t,e):new Xw(f,t,e));break}else{let _=n.map[f];_===void 0&&(_=new jw(f),Qv(n,_)),n=_}}}class cf{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(n,o),c=e.getUniformLocation(n,l.name);Yw(l,c,this)}}setValue(e,n,r,o){const l=this.map[n];l!==void 0&&l.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let l=0,c=n.length;l!==c;++l){const f=n[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in n&&r.push(c)}return r}}function Jv(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),r}const qw=37297;let $w=0;function Kw(t,e){const n=t.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let c=o;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${n[c]}`)}return r.join(`
`)}const e1=new vt;function Zw(t){Pt._getMatrix(e1,Pt.workingColorSpace,t);const e=`mat3( ${e1.elements.map(n=>n.toFixed(4))} )`;switch(Pt.getTransfer(t)){case Af:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function t1(t,e,n){const r=t.getShaderParameter(e,t.COMPILE_STATUS),o=t.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return n.toUpperCase()+`

`+o+`

`+Kw(t.getShaderSource(e),c)}else return o}function Qw(t,e){const n=Zw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Jw(t,e){let n;switch(e){case gM:n="Linear";break;case _M:n="Reinhard";break;case vM:n="Cineon";break;case E2:n="ACESFilmic";break;case xM:n="AgX";break;case SM:n="Neutral";break;case yM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const qc=new ie;function eA(){Pt.getLuminanceCoefficients(qc);const t=qc.x.toFixed(4),e=qc.y.toFixed(4),n=qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kl).join(`
`)}function nA(t){const e=[];for(const n in t){const r=t[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function iA(t,e){const n={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=t.getActiveAttrib(e,o),c=l.name;let f=1;l.type===t.FLOAT_MAT2&&(f=2),l.type===t.FLOAT_MAT3&&(f=3),l.type===t.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:t.getAttribLocation(e,c),locationSize:f}}return n}function Kl(t){return t!==""}function n1(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function i1(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rA=/^[ \t]*#include +<([\w\d./]+)>/gm;function cm(t){return t.replace(rA,oA)}const sA=new Map;function oA(t,e){let n=yt[e];if(n===void 0){const r=sA.get(e);if(r!==void 0)n=yt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return cm(n)}const aA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function r1(t){return t.replace(aA,lA)}function lA(t,e,n,r){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function s1(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===S2?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===$S?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Qr&&(e="SHADOWMAP_TYPE_VSM"),e}function cA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Na:case Ua:e="ENVMAP_TYPE_CUBE";break;case wf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ua:e="ENVMAP_MODE_REFRACTION";break}return e}function dA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case M2:e="ENVMAP_BLENDING_MULTIPLY";break;case pM:e="ENVMAP_BLENDING_MIX";break;case mM:e="ENVMAP_BLENDING_ADD";break}return e}function hA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function pA(t,e,n,r){const o=t.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const d=uA(n),p=cA(n),g=fA(n),_=dA(n),y=hA(n),S=tA(n),E=nA(l),w=o.createProgram();let x,v,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Kl).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Kl).join(`
`),v.length>0&&(v+=`
`)):(x=[s1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kl).join(`
`),v=[s1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gs?"#define TONE_MAPPING":"",n.toneMapping!==Gs?yt.tonemapping_pars_fragment:"",n.toneMapping!==Gs?Jw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,Qw("linearToOutputTexel",n.outputColorSpace),eA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Kl).join(`
`)),c=cm(c),c=n1(c,n),c=i1(c,n),f=cm(f),f=n1(f,n),f=i1(f,n),c=r1(c),f=r1(f),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",n.glslVersion===vv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=D+x+c,R=D+v+f,q=Jv(o,o.VERTEX_SHADER,L),B=Jv(o,o.FRAGMENT_SHADER,R);o.attachShader(w,q),o.attachShader(w,B),n.index0AttributeName!==void 0?o.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function F(z){if(t.debug.checkShaderErrors){const le=o.getProgramInfoLog(w).trim(),J=o.getShaderInfoLog(q).trim(),de=o.getShaderInfoLog(B).trim();let pe=!0,se=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(pe=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(o,w,q,B);else{const ue=t1(o,q,"vertex"),k=t1(o,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+le+`
`+ue+`
`+k)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(J===""||de==="")&&(se=!1);se&&(z.diagnostics={runnable:pe,programLog:le,vertexShader:{log:J,prefix:x},fragmentShader:{log:de,prefix:v}})}o.deleteShader(q),o.deleteShader(B),G=new cf(o,w),b=iA(o,w)}let G;this.getUniforms=function(){return G===void 0&&F(this),G};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(w,qw)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$w++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=q,this.fragmentShader=B,this}let mA=0;class gA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new _A(e),n.set(e,r)),r}}class _A{constructor(e){this.id=mA++,this.code=e,this.usedTimes=0}}function vA(t,e,n,r,o,l,c){const f=new z2,d=new gA,p=new Set,g=[],_=o.logarithmicDepthBuffer,y=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return p.add(b),b===0?"uv":`uv${b}`}function x(b,C,z,le,J){const de=le.fog,pe=J.geometry,se=b.isMeshStandardMaterial?le.environment:null,ue=(b.isMeshStandardMaterial?n:e).get(b.envMap||se),k=ue&&ue.mapping===wf?ue.image.height:null,ae=E[b.type];b.precision!==null&&(S=o.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const Q=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,N=Q!==void 0?Q.length:0;let j=0;pe.morphAttributes.position!==void 0&&(j=1),pe.morphAttributes.normal!==void 0&&(j=2),pe.morphAttributes.color!==void 0&&(j=3);let Ce,K,fe,ve;if(ae){const Rt=wr[ae];Ce=Rt.vertexShader,K=Rt.fragmentShader}else Ce=b.vertexShader,K=b.fragmentShader,d.update(b),fe=d.getVertexShaderID(b),ve=d.getFragmentShaderID(b);const he=t.getRenderTarget(),_e=t.state.buffers.depth.getReversed(),we=J.isInstancedMesh===!0,Ge=J.isBatchedMesh===!0,St=!!b.map,ct=!!b.matcap,Ct=!!ue,H=!!b.aoMap,cn=!!b.lightMap,mt=!!b.bumpMap,ft=!!b.normalMap,et=!!b.displacementMap,wt=!!b.emissiveMap,We=!!b.metalnessMap,P=!!b.roughnessMap,T=b.anisotropy>0,U=b.clearcoat>0,ce=b.dispersion>0,me=b.iridescence>0,re=b.sheen>0,Ie=b.transmission>0,Ee=T&&!!b.anisotropyMap,Ue=U&&!!b.clearcoatMap,_t=U&&!!b.clearcoatNormalMap,Se=U&&!!b.clearcoatRoughnessMap,Fe=me&&!!b.iridescenceMap,tt=me&&!!b.iridescenceThicknessMap,ot=re&&!!b.sheenColorMap,Oe=re&&!!b.sheenRoughnessMap,dt=!!b.specularMap,ht=!!b.specularColorMap,Ot=!!b.specularIntensityMap,W=Ie&&!!b.transmissionMap,be=Ie&&!!b.thicknessMap,oe=!!b.gradientMap,ge=!!b.alphaMap,De=b.alphaTest>0,Le=!!b.alphaHash,pt=!!b.extensions;let Xt=Gs;b.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Xt=t.toneMapping);const yn={shaderID:ae,shaderType:b.type,shaderName:b.name,vertexShader:Ce,fragmentShader:K,defines:b.defines,customVertexShaderID:fe,customFragmentShaderID:ve,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:Ge,batchingColor:Ge&&J._colorsTexture!==null,instancing:we,instancingColor:we&&J.instanceColor!==null,instancingMorph:we&&J.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:he===null?t.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Ka,alphaToCoverage:!!b.alphaToCoverage,map:St,matcap:ct,envMap:Ct,envMapMode:Ct&&ue.mapping,envMapCubeUVHeight:k,aoMap:H,lightMap:cn,bumpMap:mt,normalMap:ft,displacementMap:y&&et,emissiveMap:wt,normalMapObjectSpace:ft&&b.normalMapType===AM,normalMapTangentSpace:ft&&b.normalMapType===wM,metalnessMap:We,roughnessMap:P,anisotropy:T,anisotropyMap:Ee,clearcoat:U,clearcoatMap:Ue,clearcoatNormalMap:_t,clearcoatRoughnessMap:Se,dispersion:ce,iridescence:me,iridescenceMap:Fe,iridescenceThicknessMap:tt,sheen:re,sheenColorMap:ot,sheenRoughnessMap:Oe,specularMap:dt,specularColorMap:ht,specularIntensityMap:Ot,transmission:Ie,transmissionMap:W,thicknessMap:be,gradientMap:oe,opaque:b.transparent===!1&&b.blending===Ra&&b.alphaToCoverage===!1,alphaMap:ge,alphaTest:De,alphaHash:Le,combine:b.combine,mapUv:St&&w(b.map.channel),aoMapUv:H&&w(b.aoMap.channel),lightMapUv:cn&&w(b.lightMap.channel),bumpMapUv:mt&&w(b.bumpMap.channel),normalMapUv:ft&&w(b.normalMap.channel),displacementMapUv:et&&w(b.displacementMap.channel),emissiveMapUv:wt&&w(b.emissiveMap.channel),metalnessMapUv:We&&w(b.metalnessMap.channel),roughnessMapUv:P&&w(b.roughnessMap.channel),anisotropyMapUv:Ee&&w(b.anisotropyMap.channel),clearcoatMapUv:Ue&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:_t&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&w(b.sheenRoughnessMap.channel),specularMapUv:dt&&w(b.specularMap.channel),specularColorMapUv:ht&&w(b.specularColorMap.channel),specularIntensityMapUv:Ot&&w(b.specularIntensityMap.channel),transmissionMapUv:W&&w(b.transmissionMap.channel),thicknessMapUv:be&&w(b.thicknessMap.channel),alphaMapUv:ge&&w(b.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(ft||T),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!pe.attributes.uv&&(St||ge),fog:!!de,useFog:b.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:_e,skinning:J.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:j,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:Xt,decodeVideoTexture:St&&b.map.isVideoTexture===!0&&Pt.getTransfer(b.map.colorSpace)===zt,decodeVideoTextureEmissive:wt&&b.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(b.emissiveMap.colorSpace)===zt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Jr,flipSided:b.side===pi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:pt&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&b.extensions.multiDraw===!0||Ge)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return yn.vertexUv1s=p.has(1),yn.vertexUv2s=p.has(2),yn.vertexUv3s=p.has(3),p.clear(),yn}function v(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)C.push(z),C.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(D(C,b),L(C,b),C.push(t.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function D(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function L(b,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),b.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reverseDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),b.push(f.mask)}function R(b){const C=E[b.type];let z;if(C){const le=wr[C];z=tE.clone(le.uniforms)}else z=b.uniforms;return z}function q(b,C){let z;for(let le=0,J=g.length;le<J;le++){const de=g[le];if(de.cacheKey===C){z=de,++z.usedTimes;break}}return z===void 0&&(z=new pA(t,C,b,l),g.push(z)),z}function B(b){if(--b.usedTimes===0){const C=g.indexOf(b);g[C]=g[g.length-1],g.pop(),b.destroy()}}function F(b){d.remove(b)}function G(){d.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:R,acquireProgram:q,releaseProgram:B,releaseShaderCache:F,programs:g,dispose:G}}function yA(){let t=new WeakMap;function e(c){return t.has(c)}function n(c){let f=t.get(c);return f===void 0&&(f={},t.set(c,f)),f}function r(c){t.delete(c)}function o(c,f,d){t.get(c)[f]=d}function l(){t=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:l}}function xA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function o1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function a1(){const t=[];let e=0;const n=[],r=[],o=[];function l(){e=0,n.length=0,r.length=0,o.length=0}function c(_,y,S,E,w,x){let v=t[e];return v===void 0?(v={id:_.id,object:_,geometry:y,material:S,groupOrder:E,renderOrder:_.renderOrder,z:w,group:x},t[e]=v):(v.id=_.id,v.object=_,v.geometry=y,v.material=S,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=w,v.group=x),e++,v}function f(_,y,S,E,w,x){const v=c(_,y,S,E,w,x);S.transmission>0?r.push(v):S.transparent===!0?o.push(v):n.push(v)}function d(_,y,S,E,w,x){const v=c(_,y,S,E,w,x);S.transmission>0?r.unshift(v):S.transparent===!0?o.unshift(v):n.unshift(v)}function p(_,y){n.length>1&&n.sort(_||xA),r.length>1&&r.sort(y||o1),o.length>1&&o.sort(y||o1)}function g(){for(let _=e,y=t.length;_<y;_++){const S=t[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:o,init:l,push:f,unshift:d,finish:g,sort:p}}function SA(){let t=new WeakMap;function e(r,o){const l=t.get(r);let c;return l===void 0?(c=new a1,t.set(r,[c])):o>=l.length?(c=new a1,l.push(c)):c=l[o],c}function n(){t=new WeakMap}return{get:e,dispose:n}}function MA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ie,color:new xt};break;case"SpotLight":n={position:new ie,direction:new ie,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ie,color:new xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ie,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":n={color:new xt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return t[e.id]=n,n}}}function EA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let TA=0;function wA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function AA(t){const e=new MA,n=EA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ie);const o=new ie,l=new rn,c=new rn;function f(p){let g=0,_=0,y=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let S=0,E=0,w=0,x=0,v=0,D=0,L=0,R=0,q=0,B=0,F=0;p.sort(wA);for(let b=0,C=p.length;b<C;b++){const z=p[b],le=z.color,J=z.intensity,de=z.distance,pe=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)g+=le.r*J,_+=le.g*J,y+=le.b*J;else if(z.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(z.sh.coefficients[se],J);F++}else if(z.isDirectionalLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ue=z.shadow,k=n.get(z);k.shadowIntensity=ue.intensity,k.shadowBias=ue.bias,k.shadowNormalBias=ue.normalBias,k.shadowRadius=ue.radius,k.shadowMapSize=ue.mapSize,r.directionalShadow[S]=k,r.directionalShadowMap[S]=pe,r.directionalShadowMatrix[S]=z.shadow.matrix,D++}r.directional[S]=se,S++}else if(z.isSpotLight){const se=e.get(z);se.position.setFromMatrixPosition(z.matrixWorld),se.color.copy(le).multiplyScalar(J),se.distance=de,se.coneCos=Math.cos(z.angle),se.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),se.decay=z.decay,r.spot[w]=se;const ue=z.shadow;if(z.map&&(r.spotLightMap[q]=z.map,q++,ue.updateMatrices(z),z.castShadow&&B++),r.spotLightMatrix[w]=ue.matrix,z.castShadow){const k=n.get(z);k.shadowIntensity=ue.intensity,k.shadowBias=ue.bias,k.shadowNormalBias=ue.normalBias,k.shadowRadius=ue.radius,k.shadowMapSize=ue.mapSize,r.spotShadow[w]=k,r.spotShadowMap[w]=pe,R++}w++}else if(z.isRectAreaLight){const se=e.get(z);se.color.copy(le).multiplyScalar(J),se.halfWidth.set(z.width*.5,0,0),se.halfHeight.set(0,z.height*.5,0),r.rectArea[x]=se,x++}else if(z.isPointLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),se.distance=z.distance,se.decay=z.decay,z.castShadow){const ue=z.shadow,k=n.get(z);k.shadowIntensity=ue.intensity,k.shadowBias=ue.bias,k.shadowNormalBias=ue.normalBias,k.shadowRadius=ue.radius,k.shadowMapSize=ue.mapSize,k.shadowCameraNear=ue.camera.near,k.shadowCameraFar=ue.camera.far,r.pointShadow[E]=k,r.pointShadowMap[E]=pe,r.pointShadowMatrix[E]=z.shadow.matrix,L++}r.point[E]=se,E++}else if(z.isHemisphereLight){const se=e.get(z);se.skyColor.copy(z.color).multiplyScalar(J),se.groundColor.copy(z.groundColor).multiplyScalar(J),r.hemi[v]=se,v++}}x>0&&(t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=y;const G=r.hash;(G.directionalLength!==S||G.pointLength!==E||G.spotLength!==w||G.rectAreaLength!==x||G.hemiLength!==v||G.numDirectionalShadows!==D||G.numPointShadows!==L||G.numSpotShadows!==R||G.numSpotMaps!==q||G.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=x,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=R+q-B,r.spotLightMap.length=q,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=F,G.directionalLength=S,G.pointLength=E,G.spotLength=w,G.rectAreaLength=x,G.hemiLength=v,G.numDirectionalShadows=D,G.numPointShadows=L,G.numSpotShadows=R,G.numSpotMaps=q,G.numLightProbes=F,r.version=TA++)}function d(p,g){let _=0,y=0,S=0,E=0,w=0;const x=g.matrixWorldInverse;for(let v=0,D=p.length;v<D;v++){const L=p[v];if(L.isDirectionalLight){const R=r.directional[_];R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(x),_++}else if(L.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(x),R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(x),S++}else if(L.isRectAreaLight){const R=r.rectArea[E];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(x),c.identity(),l.copy(L.matrixWorld),l.premultiply(x),c.extractRotation(l),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),E++}else if(L.isPointLight){const R=r.point[y];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(x),y++}else if(L.isHemisphereLight){const R=r.hemi[w];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(x),w++}}}return{setup:f,setupView:d,state:r}}function l1(t){const e=new AA(t),n=[],r=[];function o(g){p.camera=g,n.length=0,r.length=0}function l(g){n.push(g)}function c(g){r.push(g)}function f(){e.setup(n)}function d(g){e.setupView(n,g)}const p={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function CA(t){let e=new WeakMap;function n(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new l1(t),e.set(o,[f])):l>=c.length?(f=new l1(t),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class RA extends du{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=EM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bA extends du{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const PA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function DA(t,e,n){let r=new Bm;const o=new Bt,l=new Bt,c=new ln,f=new RA({depthPacking:TM}),d=new bA,p={},g=n.maxTextureSize,_={[Xs]:pi,[pi]:Xs,[Jr]:Jr},y=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:PA,fragmentShader:LA}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new Ri;E.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new fr(E,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=S2;let v=this.type;this.render=function(B,F,G){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||B.length===0)return;const b=t.getRenderTarget(),C=t.getActiveCubeFace(),z=t.getActiveMipmapLevel(),le=t.state;le.setBlending(Hs),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const J=v!==Qr&&this.type===Qr,de=v===Qr&&this.type!==Qr;for(let pe=0,se=B.length;pe<se;pe++){const ue=B[pe],k=ue.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;o.copy(k.mapSize);const ae=k.getFrameExtents();if(o.multiply(ae),l.copy(k.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/ae.x),o.x=l.x*ae.x,k.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/ae.y),o.y=l.y*ae.y,k.mapSize.y=l.y)),k.map===null||J===!0||de===!0){const N=this.type!==Qr?{minFilter:dr,magFilter:dr}:{};k.map!==null&&k.map.dispose(),k.map=new Do(o.x,o.y,N),k.map.texture.name=ue.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();const Q=k.getViewportCount();for(let N=0;N<Q;N++){const j=k.getViewport(N);c.set(l.x*j.x,l.y*j.y,l.x*j.z,l.y*j.w),le.viewport(c),k.updateMatrices(ue,N),r=k.getFrustum(),R(F,G,k.camera,ue,this.type)}k.isPointLightShadow!==!0&&this.type===Qr&&D(k,G),k.needsUpdate=!1}v=this.type,x.needsUpdate=!1,t.setRenderTarget(b,C,z)};function D(B,F){const G=e.update(w);y.defines.VSM_SAMPLES!==B.blurSamples&&(y.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Do(o.x,o.y)),y.uniforms.shadow_pass.value=B.map.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,t.setRenderTarget(B.mapPass),t.clear(),t.renderBufferDirect(F,null,G,y,w,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,t.setRenderTarget(B.map),t.clear(),t.renderBufferDirect(F,null,G,S,w,null)}function L(B,F,G,b){let C=null;const z=G.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(z!==void 0)C=z;else if(C=G.isPointLight===!0?d:f,t.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const le=C.uuid,J=F.uuid;let de=p[le];de===void 0&&(de={},p[le]=de);let pe=de[J];pe===void 0&&(pe=C.clone(),de[J]=pe,F.addEventListener("dispose",q)),C=pe}if(C.visible=F.visible,C.wireframe=F.wireframe,b===Qr?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:_[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,G.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const le=t.properties.get(C);le.light=G}return C}function R(B,F,G,b,C){if(B.visible===!1)return;if(B.layers.test(F.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&C===Qr)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,B.matrixWorld);const J=e.update(B),de=B.material;if(Array.isArray(de)){const pe=J.groups;for(let se=0,ue=pe.length;se<ue;se++){const k=pe[se],ae=de[k.materialIndex];if(ae&&ae.visible){const Q=L(B,ae,b,C);B.onBeforeShadow(t,B,F,G,J,Q,k),t.renderBufferDirect(G,null,J,Q,B,k),B.onAfterShadow(t,B,F,G,J,Q,k)}}}else if(de.visible){const pe=L(B,de,b,C);B.onBeforeShadow(t,B,F,G,J,pe,null),t.renderBufferDirect(G,null,J,pe,B,null),B.onAfterShadow(t,B,F,G,J,pe,null)}}const le=B.children;for(let J=0,de=le.length;J<de;J++)R(le[J],F,G,b,C)}function q(B){B.target.removeEventListener("dispose",q);for(const G in p){const b=p[G],C=B.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}const IA={[Ap]:Cp,[Rp]:Lp,[bp]:Dp,[Ia]:Pp,[Cp]:Ap,[Lp]:Rp,[Dp]:bp,[Pp]:Ia};function NA(t,e){function n(){let W=!1;const be=new ln;let oe=null;const ge=new ln(0,0,0,0);return{setMask:function(De){oe!==De&&!W&&(t.colorMask(De,De,De,De),oe=De)},setLocked:function(De){W=De},setClear:function(De,Le,pt,Xt,yn){yn===!0&&(De*=Xt,Le*=Xt,pt*=Xt),be.set(De,Le,pt,Xt),ge.equals(be)===!1&&(t.clearColor(De,Le,pt,Xt),ge.copy(be))},reset:function(){W=!1,oe=null,ge.set(-1,0,0,0)}}}function r(){let W=!1,be=!1,oe=null,ge=null,De=null;return{setReversed:function(Le){if(be!==Le){const pt=e.get("EXT_clip_control");be?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT);const Xt=De;De=null,this.setClear(Xt)}be=Le},getReversed:function(){return be},setTest:function(Le){Le?he(t.DEPTH_TEST):_e(t.DEPTH_TEST)},setMask:function(Le){oe!==Le&&!W&&(t.depthMask(Le),oe=Le)},setFunc:function(Le){if(be&&(Le=IA[Le]),ge!==Le){switch(Le){case Ap:t.depthFunc(t.NEVER);break;case Cp:t.depthFunc(t.ALWAYS);break;case Rp:t.depthFunc(t.LESS);break;case Ia:t.depthFunc(t.LEQUAL);break;case bp:t.depthFunc(t.EQUAL);break;case Pp:t.depthFunc(t.GEQUAL);break;case Lp:t.depthFunc(t.GREATER);break;case Dp:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=Le}},setLocked:function(Le){W=Le},setClear:function(Le){De!==Le&&(be&&(Le=1-Le),t.clearDepth(Le),De=Le)},reset:function(){W=!1,oe=null,ge=null,De=null,be=!1}}}function o(){let W=!1,be=null,oe=null,ge=null,De=null,Le=null,pt=null,Xt=null,yn=null;return{setTest:function(Rt){W||(Rt?he(t.STENCIL_TEST):_e(t.STENCIL_TEST))},setMask:function(Rt){be!==Rt&&!W&&(t.stencilMask(Rt),be=Rt)},setFunc:function(Rt,ni,Zn){(oe!==Rt||ge!==ni||De!==Zn)&&(t.stencilFunc(Rt,ni,Zn),oe=Rt,ge=ni,De=Zn)},setOp:function(Rt,ni,Zn){(Le!==Rt||pt!==ni||Xt!==Zn)&&(t.stencilOp(Rt,ni,Zn),Le=Rt,pt=ni,Xt=Zn)},setLocked:function(Rt){W=Rt},setClear:function(Rt){yn!==Rt&&(t.clearStencil(Rt),yn=Rt)},reset:function(){W=!1,be=null,oe=null,ge=null,De=null,Le=null,pt=null,Xt=null,yn=null}}}const l=new n,c=new r,f=new o,d=new WeakMap,p=new WeakMap;let g={},_={},y=new WeakMap,S=[],E=null,w=!1,x=null,v=null,D=null,L=null,R=null,q=null,B=null,F=new xt(0,0,0),G=0,b=!1,C=null,z=null,le=null,J=null,de=null;const pe=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,ue=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(k)[1]),se=ue>=1):k.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),se=ue>=2);let ae=null,Q={};const N=t.getParameter(t.SCISSOR_BOX),j=t.getParameter(t.VIEWPORT),Ce=new ln().fromArray(N),K=new ln().fromArray(j);function fe(W,be,oe,ge){const De=new Uint8Array(4),Le=t.createTexture();t.bindTexture(W,Le),t.texParameteri(W,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(W,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let pt=0;pt<oe;pt++)W===t.TEXTURE_3D||W===t.TEXTURE_2D_ARRAY?t.texImage3D(be,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,De):t.texImage2D(be+pt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,De);return Le}const ve={};ve[t.TEXTURE_2D]=fe(t.TEXTURE_2D,t.TEXTURE_2D,1),ve[t.TEXTURE_CUBE_MAP]=fe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[t.TEXTURE_2D_ARRAY]=fe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ve[t.TEXTURE_3D]=fe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),he(t.DEPTH_TEST),c.setFunc(Ia),mt(!1),ft(hv),he(t.CULL_FACE),H(Hs);function he(W){g[W]!==!0&&(t.enable(W),g[W]=!0)}function _e(W){g[W]!==!1&&(t.disable(W),g[W]=!1)}function we(W,be){return _[W]!==be?(t.bindFramebuffer(W,be),_[W]=be,W===t.DRAW_FRAMEBUFFER&&(_[t.FRAMEBUFFER]=be),W===t.FRAMEBUFFER&&(_[t.DRAW_FRAMEBUFFER]=be),!0):!1}function Ge(W,be){let oe=S,ge=!1;if(W){oe=y.get(be),oe===void 0&&(oe=[],y.set(be,oe));const De=W.textures;if(oe.length!==De.length||oe[0]!==t.COLOR_ATTACHMENT0){for(let Le=0,pt=De.length;Le<pt;Le++)oe[Le]=t.COLOR_ATTACHMENT0+Le;oe.length=De.length,ge=!0}}else oe[0]!==t.BACK&&(oe[0]=t.BACK,ge=!0);ge&&t.drawBuffers(oe)}function St(W){return E!==W?(t.useProgram(W),E=W,!0):!1}const ct={[yo]:t.FUNC_ADD,[ZS]:t.FUNC_SUBTRACT,[QS]:t.FUNC_REVERSE_SUBTRACT};ct[JS]=t.MIN,ct[eM]=t.MAX;const Ct={[tM]:t.ZERO,[nM]:t.ONE,[iM]:t.SRC_COLOR,[Tp]:t.SRC_ALPHA,[uM]:t.SRC_ALPHA_SATURATE,[aM]:t.DST_COLOR,[sM]:t.DST_ALPHA,[rM]:t.ONE_MINUS_SRC_COLOR,[wp]:t.ONE_MINUS_SRC_ALPHA,[lM]:t.ONE_MINUS_DST_COLOR,[oM]:t.ONE_MINUS_DST_ALPHA,[cM]:t.CONSTANT_COLOR,[fM]:t.ONE_MINUS_CONSTANT_COLOR,[dM]:t.CONSTANT_ALPHA,[hM]:t.ONE_MINUS_CONSTANT_ALPHA};function H(W,be,oe,ge,De,Le,pt,Xt,yn,Rt){if(W===Hs){w===!0&&(_e(t.BLEND),w=!1);return}if(w===!1&&(he(t.BLEND),w=!0),W!==KS){if(W!==x||Rt!==b){if((v!==yo||R!==yo)&&(t.blendEquation(t.FUNC_ADD),v=yo,R=yo),Rt)switch(W){case Ra:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wo:t.blendFunc(t.ONE,t.ONE);break;case pv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Ra:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wo:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case pv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}D=null,L=null,q=null,B=null,F.set(0,0,0),G=0,x=W,b=Rt}return}De=De||be,Le=Le||oe,pt=pt||ge,(be!==v||De!==R)&&(t.blendEquationSeparate(ct[be],ct[De]),v=be,R=De),(oe!==D||ge!==L||Le!==q||pt!==B)&&(t.blendFuncSeparate(Ct[oe],Ct[ge],Ct[Le],Ct[pt]),D=oe,L=ge,q=Le,B=pt),(Xt.equals(F)===!1||yn!==G)&&(t.blendColor(Xt.r,Xt.g,Xt.b,yn),F.copy(Xt),G=yn),x=W,b=!1}function cn(W,be){W.side===Jr?_e(t.CULL_FACE):he(t.CULL_FACE);let oe=W.side===pi;be&&(oe=!oe),mt(oe),W.blending===Ra&&W.transparent===!1?H(Hs):H(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),l.setMask(W.colorWrite);const ge=W.stencilWrite;f.setTest(ge),ge&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),wt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?he(t.SAMPLE_ALPHA_TO_COVERAGE):_e(t.SAMPLE_ALPHA_TO_COVERAGE)}function mt(W){C!==W&&(W?t.frontFace(t.CW):t.frontFace(t.CCW),C=W)}function ft(W){W!==YS?(he(t.CULL_FACE),W!==z&&(W===hv?t.cullFace(t.BACK):W===qS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):_e(t.CULL_FACE),z=W}function et(W){W!==le&&(se&&t.lineWidth(W),le=W)}function wt(W,be,oe){W?(he(t.POLYGON_OFFSET_FILL),(J!==be||de!==oe)&&(t.polygonOffset(be,oe),J=be,de=oe)):_e(t.POLYGON_OFFSET_FILL)}function We(W){W?he(t.SCISSOR_TEST):_e(t.SCISSOR_TEST)}function P(W){W===void 0&&(W=t.TEXTURE0+pe-1),ae!==W&&(t.activeTexture(W),ae=W)}function T(W,be,oe){oe===void 0&&(ae===null?oe=t.TEXTURE0+pe-1:oe=ae);let ge=Q[oe];ge===void 0&&(ge={type:void 0,texture:void 0},Q[oe]=ge),(ge.type!==W||ge.texture!==be)&&(ae!==oe&&(t.activeTexture(oe),ae=oe),t.bindTexture(W,be||ve[W]),ge.type=W,ge.texture=be)}function U(){const W=Q[ae];W!==void 0&&W.type!==void 0&&(t.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ce(){try{t.compressedTexImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function me(){try{t.compressedTexImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function re(){try{t.texSubImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ie(){try{t.texSubImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ue(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _t(){try{t.texStorage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Se(){try{t.texStorage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Fe(){try{t.texImage2D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function tt(){try{t.texImage3D.apply(t,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ot(W){Ce.equals(W)===!1&&(t.scissor(W.x,W.y,W.z,W.w),Ce.copy(W))}function Oe(W){K.equals(W)===!1&&(t.viewport(W.x,W.y,W.z,W.w),K.copy(W))}function dt(W,be){let oe=p.get(be);oe===void 0&&(oe=new WeakMap,p.set(be,oe));let ge=oe.get(W);ge===void 0&&(ge=t.getUniformBlockIndex(be,W.name),oe.set(W,ge))}function ht(W,be){const ge=p.get(be).get(W);d.get(be)!==ge&&(t.uniformBlockBinding(be,ge,W.__bindingPointIndex),d.set(be,ge))}function Ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),c.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),g={},ae=null,Q={},_={},y=new WeakMap,S=[],E=null,w=!1,x=null,v=null,D=null,L=null,R=null,q=null,B=null,F=new xt(0,0,0),G=0,b=!1,C=null,z=null,le=null,J=null,de=null,Ce.set(0,0,t.canvas.width,t.canvas.height),K.set(0,0,t.canvas.width,t.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:he,disable:_e,bindFramebuffer:we,drawBuffers:Ge,useProgram:St,setBlending:H,setMaterial:cn,setFlipSided:mt,setCullFace:ft,setLineWidth:et,setPolygonOffset:wt,setScissorTest:We,activeTexture:P,bindTexture:T,unbindTexture:U,compressedTexImage2D:ce,compressedTexImage3D:me,texImage2D:Fe,texImage3D:tt,updateUBOMapping:dt,uniformBlockBinding:ht,texStorage2D:_t,texStorage3D:Se,texSubImage2D:re,texSubImage3D:Ie,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Ue,scissor:ot,viewport:Oe,reset:Ot}}function u1(t,e,n,r){const o=UA(r);switch(n){case R2:return t*e;case P2:return t*e;case L2:return t*e*2;case D2:return t*e/o.components*o.byteLength;case Um:return t*e/o.components*o.byteLength;case I2:return t*e*2/o.components*o.byteLength;case Fm:return t*e*2/o.components*o.byteLength;case b2:return t*e*3/o.components*o.byteLength;case cr:return t*e*4/o.components*o.byteLength;case Om:return t*e*4/o.components*o.byteLength;case sf:case of:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case af:case lf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kp:case zp:return Math.max(t,16)*Math.max(e,8)/4;case Op:case Bp:return Math.max(t,8)*Math.max(e,8)/2;case Vp:case Hp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Gp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xp:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case jp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Yp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case qp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case $p:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Kp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Zp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Qp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Jp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case em:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case tm:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case nm:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case im:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case uf:case rm:case sm:return Math.ceil(t/4)*Math.ceil(e/4)*16;case N2:case om:return Math.ceil(t/4)*Math.ceil(e/4)*8;case am:case lm:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function UA(t){switch(t){case rs:case w2:return{byteLength:1,components:1};case iu:case A2:case lu:return{byteLength:2,components:1};case Im:case Nm:return{byteLength:2,components:4};case Lo:case Dm:case ts:return{byteLength:4,components:1};case C2:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function FA(t,e,n,r,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Bt,g=new WeakMap;let _;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,T){return S?new OffscreenCanvas(P,T):pf("canvas")}function w(P,T,U){let ce=1;const me=We(P);if((me.width>U||me.height>U)&&(ce=U/Math.max(me.width,me.height)),ce<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const re=Math.floor(ce*me.width),Ie=Math.floor(ce*me.height);_===void 0&&(_=E(re,Ie));const Ee=T?E(re,Ie):_;return Ee.width=re,Ee.height=Ie,Ee.getContext("2d").drawImage(P,0,0,re,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+re+"x"+Ie+")."),Ee}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),P;return P}function x(P){return P.generateMipmaps}function v(P){t.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function L(P,T,U,ce,me=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let re=T;if(T===t.RED&&(U===t.FLOAT&&(re=t.R32F),U===t.HALF_FLOAT&&(re=t.R16F),U===t.UNSIGNED_BYTE&&(re=t.R8)),T===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(re=t.R8UI),U===t.UNSIGNED_SHORT&&(re=t.R16UI),U===t.UNSIGNED_INT&&(re=t.R32UI),U===t.BYTE&&(re=t.R8I),U===t.SHORT&&(re=t.R16I),U===t.INT&&(re=t.R32I)),T===t.RG&&(U===t.FLOAT&&(re=t.RG32F),U===t.HALF_FLOAT&&(re=t.RG16F),U===t.UNSIGNED_BYTE&&(re=t.RG8)),T===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(re=t.RG8UI),U===t.UNSIGNED_SHORT&&(re=t.RG16UI),U===t.UNSIGNED_INT&&(re=t.RG32UI),U===t.BYTE&&(re=t.RG8I),U===t.SHORT&&(re=t.RG16I),U===t.INT&&(re=t.RG32I)),T===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(re=t.RGB8UI),U===t.UNSIGNED_SHORT&&(re=t.RGB16UI),U===t.UNSIGNED_INT&&(re=t.RGB32UI),U===t.BYTE&&(re=t.RGB8I),U===t.SHORT&&(re=t.RGB16I),U===t.INT&&(re=t.RGB32I)),T===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(re=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(re=t.RGBA16UI),U===t.UNSIGNED_INT&&(re=t.RGBA32UI),U===t.BYTE&&(re=t.RGBA8I),U===t.SHORT&&(re=t.RGBA16I),U===t.INT&&(re=t.RGBA32I)),T===t.RGB&&U===t.UNSIGNED_INT_5_9_9_9_REV&&(re=t.RGB9_E5),T===t.RGBA){const Ie=me?Af:Pt.getTransfer(ce);U===t.FLOAT&&(re=t.RGBA32F),U===t.HALF_FLOAT&&(re=t.RGBA16F),U===t.UNSIGNED_BYTE&&(re=Ie===zt?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function R(P,T){let U;return P?T===null||T===Lo||T===Fa?U=t.DEPTH24_STENCIL8:T===ts?U=t.DEPTH32F_STENCIL8:T===iu&&(U=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Lo||T===Fa?U=t.DEPTH_COMPONENT24:T===ts?U=t.DEPTH_COMPONENT32F:T===iu&&(U=t.DEPTH_COMPONENT16),U}function q(P,T){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==dr&&P.minFilter!==Ar?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function B(P){const T=P.target;T.removeEventListener("dispose",B),G(T),T.isVideoTexture&&g.delete(T)}function F(P){const T=P.target;T.removeEventListener("dispose",F),C(T)}function G(P){const T=r.get(P);if(T.__webglInit===void 0)return;const U=P.source,ce=y.get(U);if(ce){const me=ce[T.__cacheKey];me.usedTimes--,me.usedTimes===0&&b(P),Object.keys(ce).length===0&&y.delete(U)}r.remove(P)}function b(P){const T=r.get(P);t.deleteTexture(T.__webglTexture);const U=P.source,ce=y.get(U);delete ce[T.__cacheKey],c.memory.textures--}function C(P){const T=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(T.__webglFramebuffer[ce]))for(let me=0;me<T.__webglFramebuffer[ce].length;me++)t.deleteFramebuffer(T.__webglFramebuffer[ce][me]);else t.deleteFramebuffer(T.__webglFramebuffer[ce]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[ce])}else{if(Array.isArray(T.__webglFramebuffer))for(let ce=0;ce<T.__webglFramebuffer.length;ce++)t.deleteFramebuffer(T.__webglFramebuffer[ce]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ce=0;ce<T.__webglColorRenderbuffer.length;ce++)T.__webglColorRenderbuffer[ce]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[ce]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const U=P.textures;for(let ce=0,me=U.length;ce<me;ce++){const re=r.get(U[ce]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),c.memory.textures--),r.remove(U[ce])}r.remove(P)}let z=0;function le(){z=0}function J(){const P=z;return P>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),z+=1,P}function de(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function pe(P,T){const U=r.get(P);if(P.isVideoTexture&&et(P),P.isRenderTargetTexture===!1&&P.version>0&&U.__version!==P.version){const ce=P.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(U,P,T);return}}n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+T)}function se(P,T){const U=r.get(P);if(P.version>0&&U.__version!==P.version){K(U,P,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+T)}function ue(P,T){const U=r.get(P);if(P.version>0&&U.__version!==P.version){K(U,P,T);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+T)}function k(P,T){const U=r.get(P);if(P.version>0&&U.__version!==P.version){fe(U,P,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+T)}const ae={[Up]:t.REPEAT,[So]:t.CLAMP_TO_EDGE,[Fp]:t.MIRRORED_REPEAT},Q={[dr]:t.NEAREST,[MM]:t.NEAREST_MIPMAP_NEAREST,[Rc]:t.NEAREST_MIPMAP_LINEAR,[Ar]:t.LINEAR,[Fh]:t.LINEAR_MIPMAP_NEAREST,[Mo]:t.LINEAR_MIPMAP_LINEAR},N={[CM]:t.NEVER,[IM]:t.ALWAYS,[RM]:t.LESS,[U2]:t.LEQUAL,[bM]:t.EQUAL,[DM]:t.GEQUAL,[PM]:t.GREATER,[LM]:t.NOTEQUAL};function j(P,T){if(T.type===ts&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ar||T.magFilter===Fh||T.magFilter===Rc||T.magFilter===Mo||T.minFilter===Ar||T.minFilter===Fh||T.minFilter===Rc||T.minFilter===Mo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,ae[T.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,ae[T.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,ae[T.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,Q[T.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,Q[T.minFilter]),T.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,N[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===dr||T.minFilter!==Rc&&T.minFilter!==Mo||T.type===ts&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ce(P,T){let U=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",B));const ce=T.source;let me=y.get(ce);me===void 0&&(me={},y.set(ce,me));const re=de(T);if(re!==P.__cacheKey){me[re]===void 0&&(me[re]={texture:t.createTexture(),usedTimes:0},c.memory.textures++,U=!0),me[re].usedTimes++;const Ie=me[P.__cacheKey];Ie!==void 0&&(me[P.__cacheKey].usedTimes--,Ie.usedTimes===0&&b(T)),P.__cacheKey=re,P.__webglTexture=me[re].texture}return U}function K(P,T,U){let ce=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ce=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ce=t.TEXTURE_3D);const me=Ce(P,T),re=T.source;n.bindTexture(ce,P.__webglTexture,t.TEXTURE0+U);const Ie=r.get(re);if(re.version!==Ie.__version||me===!0){n.activeTexture(t.TEXTURE0+U);const Ee=Pt.getPrimaries(Pt.workingColorSpace),Ue=T.colorSpace===zs?null:Pt.getPrimaries(T.colorSpace),_t=T.colorSpace===zs||Ee===Ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Se=w(T.image,!1,o.maxTextureSize);Se=wt(T,Se);const Fe=l.convert(T.format,T.colorSpace),tt=l.convert(T.type);let ot=L(T.internalFormat,Fe,tt,T.colorSpace,T.isVideoTexture);j(ce,T);let Oe;const dt=T.mipmaps,ht=T.isVideoTexture!==!0,Ot=Ie.__version===void 0||me===!0,W=re.dataReady,be=q(T,Se);if(T.isDepthTexture)ot=R(T.format===Oa,T.type),Ot&&(ht?n.texStorage2D(t.TEXTURE_2D,1,ot,Se.width,Se.height):n.texImage2D(t.TEXTURE_2D,0,ot,Se.width,Se.height,0,Fe,tt,null));else if(T.isDataTexture)if(dt.length>0){ht&&Ot&&n.texStorage2D(t.TEXTURE_2D,be,ot,dt[0].width,dt[0].height);for(let oe=0,ge=dt.length;oe<ge;oe++)Oe=dt[oe],ht?W&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Oe.width,Oe.height,Fe,tt,Oe.data):n.texImage2D(t.TEXTURE_2D,oe,ot,Oe.width,Oe.height,0,Fe,tt,Oe.data);T.generateMipmaps=!1}else ht?(Ot&&n.texStorage2D(t.TEXTURE_2D,be,ot,Se.width,Se.height),W&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se.width,Se.height,Fe,tt,Se.data)):n.texImage2D(t.TEXTURE_2D,0,ot,Se.width,Se.height,0,Fe,tt,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ht&&Ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,be,ot,dt[0].width,dt[0].height,Se.depth);for(let oe=0,ge=dt.length;oe<ge;oe++)if(Oe=dt[oe],T.format!==cr)if(Fe!==null)if(ht){if(W)if(T.layerUpdates.size>0){const De=u1(Oe.width,Oe.height,T.format,T.type);for(const Le of T.layerUpdates){const pt=Oe.data.subarray(Le*De/Oe.data.BYTES_PER_ELEMENT,(Le+1)*De/Oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,Le,Oe.width,Oe.height,1,Fe,pt)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,Oe.width,Oe.height,Se.depth,Fe,Oe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,ot,Oe.width,Oe.height,Se.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?W&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,Oe.width,Oe.height,Se.depth,Fe,tt,Oe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,ot,Oe.width,Oe.height,Se.depth,0,Fe,tt,Oe.data)}else{ht&&Ot&&n.texStorage2D(t.TEXTURE_2D,be,ot,dt[0].width,dt[0].height);for(let oe=0,ge=dt.length;oe<ge;oe++)Oe=dt[oe],T.format!==cr?Fe!==null?ht?W&&n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,Oe.width,Oe.height,Fe,Oe.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,ot,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?W&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Oe.width,Oe.height,Fe,tt,Oe.data):n.texImage2D(t.TEXTURE_2D,oe,ot,Oe.width,Oe.height,0,Fe,tt,Oe.data)}else if(T.isDataArrayTexture)if(ht){if(Ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,be,ot,Se.width,Se.height,Se.depth),W)if(T.layerUpdates.size>0){const oe=u1(Se.width,Se.height,T.format,T.type);for(const ge of T.layerUpdates){const De=Se.data.subarray(ge*oe/Se.data.BYTES_PER_ELEMENT,(ge+1)*oe/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ge,Se.width,Se.height,1,Fe,tt,De)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Fe,tt,Se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ot,Se.width,Se.height,Se.depth,0,Fe,tt,Se.data);else if(T.isData3DTexture)ht?(Ot&&n.texStorage3D(t.TEXTURE_3D,be,ot,Se.width,Se.height,Se.depth),W&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Fe,tt,Se.data)):n.texImage3D(t.TEXTURE_3D,0,ot,Se.width,Se.height,Se.depth,0,Fe,tt,Se.data);else if(T.isFramebufferTexture){if(Ot)if(ht)n.texStorage2D(t.TEXTURE_2D,be,ot,Se.width,Se.height);else{let oe=Se.width,ge=Se.height;for(let De=0;De<be;De++)n.texImage2D(t.TEXTURE_2D,De,ot,oe,ge,0,Fe,tt,null),oe>>=1,ge>>=1}}else if(dt.length>0){if(ht&&Ot){const oe=We(dt[0]);n.texStorage2D(t.TEXTURE_2D,be,ot,oe.width,oe.height)}for(let oe=0,ge=dt.length;oe<ge;oe++)Oe=dt[oe],ht?W&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Fe,tt,Oe):n.texImage2D(t.TEXTURE_2D,oe,ot,Fe,tt,Oe);T.generateMipmaps=!1}else if(ht){if(Ot){const oe=We(Se);n.texStorage2D(t.TEXTURE_2D,be,ot,oe.width,oe.height)}W&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Fe,tt,Se)}else n.texImage2D(t.TEXTURE_2D,0,ot,Fe,tt,Se);x(T)&&v(ce),Ie.__version=re.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function fe(P,T,U){if(T.image.length!==6)return;const ce=Ce(P,T),me=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+U);const re=r.get(me);if(me.version!==re.__version||ce===!0){n.activeTexture(t.TEXTURE0+U);const Ie=Pt.getPrimaries(Pt.workingColorSpace),Ee=T.colorSpace===zs?null:Pt.getPrimaries(T.colorSpace),Ue=T.colorSpace===zs||Ie===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const _t=T.isCompressedTexture||T.image[0].isCompressedTexture,Se=T.image[0]&&T.image[0].isDataTexture,Fe=[];for(let ge=0;ge<6;ge++)!_t&&!Se?Fe[ge]=w(T.image[ge],!0,o.maxCubemapSize):Fe[ge]=Se?T.image[ge].image:T.image[ge],Fe[ge]=wt(T,Fe[ge]);const tt=Fe[0],ot=l.convert(T.format,T.colorSpace),Oe=l.convert(T.type),dt=L(T.internalFormat,ot,Oe,T.colorSpace),ht=T.isVideoTexture!==!0,Ot=re.__version===void 0||ce===!0,W=me.dataReady;let be=q(T,tt);j(t.TEXTURE_CUBE_MAP,T);let oe;if(_t){ht&&Ot&&n.texStorage2D(t.TEXTURE_CUBE_MAP,be,dt,tt.width,tt.height);for(let ge=0;ge<6;ge++){oe=Fe[ge].mipmaps;for(let De=0;De<oe.length;De++){const Le=oe[De];T.format!==cr?ot!==null?ht?W&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De,0,0,Le.width,Le.height,ot,Le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De,dt,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ht?W&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De,0,0,Le.width,Le.height,ot,Oe,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De,dt,Le.width,Le.height,0,ot,Oe,Le.data)}}}else{if(oe=T.mipmaps,ht&&Ot){oe.length>0&&be++;const ge=We(Fe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,be,dt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Se){ht?W&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Fe[ge].width,Fe[ge].height,ot,Oe,Fe[ge].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,dt,Fe[ge].width,Fe[ge].height,0,ot,Oe,Fe[ge].data);for(let De=0;De<oe.length;De++){const pt=oe[De].image[ge].image;ht?W&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De+1,0,0,pt.width,pt.height,ot,Oe,pt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De+1,dt,pt.width,pt.height,0,ot,Oe,pt.data)}}else{ht?W&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ot,Oe,Fe[ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,dt,ot,Oe,Fe[ge]);for(let De=0;De<oe.length;De++){const Le=oe[De];ht?W&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De+1,0,0,ot,Oe,Le.image[ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De+1,dt,ot,Oe,Le.image[ge])}}}x(T)&&v(t.TEXTURE_CUBE_MAP),re.__version=me.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ve(P,T,U,ce,me,re){const Ie=l.convert(U.format,U.colorSpace),Ee=l.convert(U.type),Ue=L(U.internalFormat,Ie,Ee,U.colorSpace),_t=r.get(T),Se=r.get(U);if(Se.__renderTarget=T,!_t.__hasExternalTextures){const Fe=Math.max(1,T.width>>re),tt=Math.max(1,T.height>>re);me===t.TEXTURE_3D||me===t.TEXTURE_2D_ARRAY?n.texImage3D(me,re,Ue,Fe,tt,T.depth,0,Ie,Ee,null):n.texImage2D(me,re,Ue,Fe,tt,0,Ie,Ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),ft(T)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ce,me,Se.__webglTexture,0,mt(T)):(me===t.TEXTURE_2D||me>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ce,me,Se.__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(P,T,U){if(t.bindRenderbuffer(t.RENDERBUFFER,P),T.depthBuffer){const ce=T.depthTexture,me=ce&&ce.isDepthTexture?ce.type:null,re=R(T.stencilBuffer,me),Ie=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=mt(T);ft(T)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ee,re,T.width,T.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,re,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,re,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ie,t.RENDERBUFFER,P)}else{const ce=T.textures;for(let me=0;me<ce.length;me++){const re=ce[me],Ie=l.convert(re.format,re.colorSpace),Ee=l.convert(re.type),Ue=L(re.internalFormat,Ie,Ee,re.colorSpace),_t=mt(T);U&&ft(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,_t,Ue,T.width,T.height):ft(T)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_t,Ue,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,Ue,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function _e(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ce=r.get(T.depthTexture);ce.__renderTarget=T,(!ce.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pe(T.depthTexture,0);const me=ce.__webglTexture,re=mt(T);if(T.depthTexture.format===ba)ft(T)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,me,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,me,0);else if(T.depthTexture.format===Oa)ft(T)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,me,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function we(P){const T=r.get(P),U=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const ce=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ce){const me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ce.removeEventListener("dispose",me)};ce.addEventListener("dispose",me),T.__depthDisposeCallback=me}T.__boundDepthTexture=ce}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");_e(T.__webglFramebuffer,P)}else if(U){T.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[ce]),T.__webglDepthbuffer[ce]===void 0)T.__webglDepthbuffer[ce]=t.createRenderbuffer(),he(T.__webglDepthbuffer[ce],P,!1);else{const me=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=T.__webglDepthbuffer[ce];t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,me,t.RENDERBUFFER,re)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=t.createRenderbuffer(),he(T.__webglDepthbuffer,P,!1);else{const ce=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=T.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,me),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,me)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ge(P,T,U){const ce=r.get(P);T!==void 0&&ve(ce.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&we(P)}function St(P){const T=P.texture,U=r.get(P),ce=r.get(T);P.addEventListener("dispose",F);const me=P.textures,re=P.isWebGLCubeRenderTarget===!0,Ie=me.length>1;if(Ie||(ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture()),ce.__version=T.version,c.memory.textures++),re){U.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(T.mipmaps&&T.mipmaps.length>0){U.__webglFramebuffer[Ee]=[];for(let Ue=0;Ue<T.mipmaps.length;Ue++)U.__webglFramebuffer[Ee][Ue]=t.createFramebuffer()}else U.__webglFramebuffer[Ee]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){U.__webglFramebuffer=[];for(let Ee=0;Ee<T.mipmaps.length;Ee++)U.__webglFramebuffer[Ee]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(Ie)for(let Ee=0,Ue=me.length;Ee<Ue;Ee++){const _t=r.get(me[Ee]);_t.__webglTexture===void 0&&(_t.__webglTexture=t.createTexture(),c.memory.textures++)}if(P.samples>0&&ft(P)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Ee=0;Ee<me.length;Ee++){const Ue=me[Ee];U.__webglColorRenderbuffer[Ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[Ee]);const _t=l.convert(Ue.format,Ue.colorSpace),Se=l.convert(Ue.type),Fe=L(Ue.internalFormat,_t,Se,Ue.colorSpace,P.isXRRenderTarget===!0),tt=mt(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,tt,Fe,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,U.__webglColorRenderbuffer[Ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),he(U.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,ce.__webglTexture),j(t.TEXTURE_CUBE_MAP,T);for(let Ee=0;Ee<6;Ee++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)ve(U.__webglFramebuffer[Ee][Ue],P,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ue);else ve(U.__webglFramebuffer[Ee],P,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);x(T)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ie){for(let Ee=0,Ue=me.length;Ee<Ue;Ee++){const _t=me[Ee],Se=r.get(_t);n.bindTexture(t.TEXTURE_2D,Se.__webglTexture),j(t.TEXTURE_2D,_t),ve(U.__webglFramebuffer,P,_t,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,0),x(_t)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let Ee=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ee=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ee,ce.__webglTexture),j(Ee,T),T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)ve(U.__webglFramebuffer[Ue],P,T,t.COLOR_ATTACHMENT0,Ee,Ue);else ve(U.__webglFramebuffer,P,T,t.COLOR_ATTACHMENT0,Ee,0);x(T)&&v(Ee),n.unbindTexture()}P.depthBuffer&&we(P)}function ct(P){const T=P.textures;for(let U=0,ce=T.length;U<ce;U++){const me=T[U];if(x(me)){const re=D(P),Ie=r.get(me).__webglTexture;n.bindTexture(re,Ie),v(re),n.unbindTexture()}}}const Ct=[],H=[];function cn(P){if(P.samples>0){if(ft(P)===!1){const T=P.textures,U=P.width,ce=P.height;let me=t.COLOR_BUFFER_BIT;const re=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ie=r.get(P),Ee=T.length>1;if(Ee)for(let Ue=0;Ue<T.length;Ue++)n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ue=0;Ue<T.length;Ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(me|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(me|=t.STENCIL_BUFFER_BIT)),Ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ue]);const _t=r.get(T[Ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,_t,0)}t.blitFramebuffer(0,0,U,ce,0,0,U,ce,me,t.NEAREST),d===!0&&(Ct.length=0,H.length=0,Ct.push(t.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ct.push(re),H.push(re),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,H)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ct))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Ee)for(let Ue=0;Ue<T.length;Ue++){n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ue]);const _t=r.get(T[Ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,_t,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&d){const T=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function mt(P){return Math.min(o.maxSamples,P.samples)}function ft(P){const T=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function et(P){const T=c.render.frame;g.get(P)!==T&&(g.set(P,T),P.update())}function wt(P,T){const U=P.colorSpace,ce=P.format,me=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||U!==Ka&&U!==zs&&(Pt.getTransfer(U)===zt?(ce!==cr||me!==rs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),T}function We(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=le,this.setTexture2D=pe,this.setTexture2DArray=se,this.setTexture3D=ue,this.setTextureCube=k,this.rebindTextures=Ge,this.setupRenderTarget=St,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ft}function OA(t,e){function n(r,o=zs){let l;const c=Pt.getTransfer(o);if(r===rs)return t.UNSIGNED_BYTE;if(r===Im)return t.UNSIGNED_SHORT_4_4_4_4;if(r===Nm)return t.UNSIGNED_SHORT_5_5_5_1;if(r===C2)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===w2)return t.BYTE;if(r===A2)return t.SHORT;if(r===iu)return t.UNSIGNED_SHORT;if(r===Dm)return t.INT;if(r===Lo)return t.UNSIGNED_INT;if(r===ts)return t.FLOAT;if(r===lu)return t.HALF_FLOAT;if(r===R2)return t.ALPHA;if(r===b2)return t.RGB;if(r===cr)return t.RGBA;if(r===P2)return t.LUMINANCE;if(r===L2)return t.LUMINANCE_ALPHA;if(r===ba)return t.DEPTH_COMPONENT;if(r===Oa)return t.DEPTH_STENCIL;if(r===D2)return t.RED;if(r===Um)return t.RED_INTEGER;if(r===I2)return t.RG;if(r===Fm)return t.RG_INTEGER;if(r===Om)return t.RGBA_INTEGER;if(r===sf||r===of||r===af||r===lf)if(c===zt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===sf)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===of)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===af)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===lf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===sf)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===of)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===af)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===lf)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Op||r===kp||r===Bp||r===zp)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Op)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kp)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bp)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===zp)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vp||r===Hp||r===Gp)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Vp||r===Hp)return c===zt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Gp)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Wp||r===Xp||r===jp||r===Yp||r===qp||r===$p||r===Kp||r===Zp||r===Qp||r===Jp||r===em||r===tm||r===nm||r===im)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Wp)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xp)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jp)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yp)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qp)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$p)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kp)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zp)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qp)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jp)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===em)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===tm)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===nm)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===im)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===uf||r===rm||r===sm)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===uf)return c===zt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===rm)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===sm)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===N2||r===om||r===am||r===lm)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===uf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===om)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===am)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===lm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fa?t.UNSIGNED_INT_24_8:t[r]!==void 0?t[r]:null}return{convert:n}}class kA extends Yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zl extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BA={type:"move"};class fp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,l=null,c=null;const f=this._targetRay,d=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const w of e.hand.values()){const x=n.getJointPose(w,r),v=this._getHandJoint(p,w);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],y=g.position.distanceTo(_.position),S=.02,E=.005;p.inputState.pinching&&y>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(BA)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Zl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const zA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new mi,l=e.properties.get(o);l.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new $i({vertexShader:zA,fragmentShader:VA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new fr(new Rf(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GA extends Za{constructor(e,n){super();const r=this;let o=null,l=1,c=null,f="local-floor",d=1,p=null,g=null,_=null,y=null,S=null,E=null;const w=new HA,x=n.getContextAttributes();let v=null,D=null;const L=[],R=[],q=new Bt;let B=null;const F=new Yi;F.viewport=new ln;const G=new Yi;G.viewport=new ln;const b=[F,G],C=new kA;let z=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let fe=L[K];return fe===void 0&&(fe=new fp,L[K]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(K){let fe=L[K];return fe===void 0&&(fe=new fp,L[K]=fe),fe.getGripSpace()},this.getHand=function(K){let fe=L[K];return fe===void 0&&(fe=new fp,L[K]=fe),fe.getHandSpace()};function J(K){const fe=R.indexOf(K.inputSource);if(fe===-1)return;const ve=L[fe];ve!==void 0&&(ve.update(K.inputSource,K.frame,p||c),ve.dispatchEvent({type:K.type,data:K.inputSource}))}function de(){o.removeEventListener("select",J),o.removeEventListener("selectstart",J),o.removeEventListener("selectend",J),o.removeEventListener("squeeze",J),o.removeEventListener("squeezestart",J),o.removeEventListener("squeezeend",J),o.removeEventListener("end",de),o.removeEventListener("inputsourceschange",pe);for(let K=0;K<L.length;K++){const fe=R[K];fe!==null&&(R[K]=null,L[K].disconnect(fe))}z=null,le=null,w.reset(),e.setRenderTarget(v),S=null,y=null,_=null,o=null,D=null,Ce.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(q.width,q.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){l=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){f=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(K){if(o=K,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",J),o.addEventListener("selectstart",J),o.addEventListener("selectend",J),o.addEventListener("squeeze",J),o.addEventListener("squeezestart",J),o.addEventListener("squeezeend",J),o.addEventListener("end",de),o.addEventListener("inputsourceschange",pe),x.xrCompatible!==!0&&await n.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(q),o.renderState.layers===void 0){const fe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,n,fe),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new Do(S.framebufferWidth,S.framebufferHeight,{format:cr,type:rs,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let fe=null,ve=null,he=null;x.depth&&(he=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=x.stencil?Oa:ba,ve=x.stencil?Fa:Lo);const _e={colorFormat:n.RGBA8,depthFormat:he,scaleFactor:l};_=new XRWebGLBinding(o,n),y=_.createProjectionLayer(_e),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),D=new Do(y.textureWidth,y.textureHeight,{format:cr,type:rs,depthTexture:new $2(y.textureWidth,y.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(d),p=null,c=await o.requestReferenceSpace(f),Ce.setContext(o),Ce.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function pe(K){for(let fe=0;fe<K.removed.length;fe++){const ve=K.removed[fe],he=R.indexOf(ve);he>=0&&(R[he]=null,L[he].disconnect(ve))}for(let fe=0;fe<K.added.length;fe++){const ve=K.added[fe];let he=R.indexOf(ve);if(he===-1){for(let we=0;we<L.length;we++)if(we>=R.length){R.push(ve),he=we;break}else if(R[we]===null){R[we]=ve,he=we;break}if(he===-1)break}const _e=L[he];_e&&_e.connect(ve)}}const se=new ie,ue=new ie;function k(K,fe,ve){se.setFromMatrixPosition(fe.matrixWorld),ue.setFromMatrixPosition(ve.matrixWorld);const he=se.distanceTo(ue),_e=fe.projectionMatrix.elements,we=ve.projectionMatrix.elements,Ge=_e[14]/(_e[10]-1),St=_e[14]/(_e[10]+1),ct=(_e[9]+1)/_e[5],Ct=(_e[9]-1)/_e[5],H=(_e[8]-1)/_e[0],cn=(we[8]+1)/we[0],mt=Ge*H,ft=Ge*cn,et=he/(-H+cn),wt=et*-H;if(fe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(wt),K.translateZ(et),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),_e[10]===-1)K.projectionMatrix.copy(fe.projectionMatrix),K.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const We=Ge+et,P=St+et,T=mt-wt,U=ft+(he-wt),ce=ct*St/P*We,me=Ct*St/P*We;K.projectionMatrix.makePerspective(T,U,ce,me,We,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ae(K,fe){fe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(fe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(o===null)return;let fe=K.near,ve=K.far;w.texture!==null&&(w.depthNear>0&&(fe=w.depthNear),w.depthFar>0&&(ve=w.depthFar)),C.near=G.near=F.near=fe,C.far=G.far=F.far=ve,(z!==C.near||le!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,le=C.far),F.layers.mask=K.layers.mask|2,G.layers.mask=K.layers.mask|4,C.layers.mask=F.layers.mask|G.layers.mask;const he=K.parent,_e=C.cameras;ae(C,he);for(let we=0;we<_e.length;we++)ae(_e[we],he);_e.length===2?k(C,F,G):C.projectionMatrix.copy(F.projectionMatrix),Q(K,C,he)};function Q(K,fe,ve){ve===null?K.matrix.copy(fe.matrixWorld):(K.matrix.copy(ve.matrixWorld),K.matrix.invert(),K.matrix.multiply(fe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(fe.projectionMatrix),K.projectionMatrixInverse.copy(fe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=um*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&S===null))return d},this.setFoveation=function(K){d=K,y!==null&&(y.fixedFoveation=K),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=K)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let N=null;function j(K,fe){if(g=fe.getViewerPose(p||c),E=fe,g!==null){const ve=g.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let he=!1;ve.length!==C.cameras.length&&(C.cameras.length=0,he=!0);for(let we=0;we<ve.length;we++){const Ge=ve[we];let St=null;if(S!==null)St=S.getViewport(Ge);else{const Ct=_.getViewSubImage(y,Ge);St=Ct.viewport,we===0&&(e.setRenderTargetTextures(D,Ct.colorTexture,y.ignoreDepthValues?void 0:Ct.depthStencilTexture),e.setRenderTarget(D))}let ct=b[we];ct===void 0&&(ct=new Yi,ct.layers.enable(we),ct.viewport=new ln,b[we]=ct),ct.matrix.fromArray(Ge.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(Ge.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(St.x,St.y,St.width,St.height),we===0&&(C.matrix.copy(ct.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),he===!0&&C.cameras.push(ct)}const _e=o.enabledFeatures;if(_e&&_e.includes("depth-sensing")){const we=_.getDepthInformation(ve[0]);we&&we.isValid&&we.texture&&w.init(e,we,o.renderState)}}for(let ve=0;ve<L.length;ve++){const he=R[ve],_e=L[ve];he!==null&&_e!==void 0&&_e.update(he,fe,p||c)}N&&N(K,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),E=null}const Ce=new Y2;Ce.setAnimationLoop(j),this.setAnimationLoop=function(K){N=K},this.dispose=function(){}}}const mo=new ss,WA=new rn;function XA(t,e){function n(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,W2(t)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function o(x,v,D,L,R){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(x,v):v.isMeshToonMaterial?(l(x,v),_(x,v)):v.isMeshPhongMaterial?(l(x,v),g(x,v)):v.isMeshStandardMaterial?(l(x,v),y(x,v),v.isMeshPhysicalMaterial&&S(x,v,R)):v.isMeshMatcapMaterial?(l(x,v),E(x,v)):v.isMeshDepthMaterial?l(x,v):v.isMeshDistanceMaterial?(l(x,v),w(x,v)):v.isMeshNormalMaterial?l(x,v):v.isLineBasicMaterial?(c(x,v),v.isLineDashedMaterial&&f(x,v)):v.isPointsMaterial?d(x,v,D,L):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,n(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,n(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,n(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===pi&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,n(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===pi&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,n(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,n(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const D=e.get(v),L=D.envMap,R=D.envMapRotation;L&&(x.envMap.value=L,mo.copy(R),mo.x*=-1,mo.y*=-1,mo.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(mo.y*=-1,mo.z*=-1),x.envMapRotation.value.setFromMatrix4(WA.makeRotationFromEuler(mo)),x.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,x.aoMapTransform))}function c(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,n(v.map,x.mapTransform))}function f(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function d(x,v,D,L){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*D,x.scale.value=L*.5,v.map&&(x.map.value=v.map,n(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,n(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,n(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,n(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function g(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function _(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function y(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function S(x,v,D){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===pi&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=D.texture,x.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,v){v.matcap&&(x.matcap.value=v.matcap)}function w(x,v){const D=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(D.matrixWorld),x.nearDistance.value=D.shadow.camera.near,x.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function jA(t,e,n,r){let o={},l={},c=[];const f=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function d(D,L){const R=L.program;r.uniformBlockBinding(D,R)}function p(D,L){let R=o[D.id];R===void 0&&(E(D),R=g(D),o[D.id]=R,D.addEventListener("dispose",x));const q=L.program;r.updateUBOMapping(D,q);const B=e.render.frame;l[D.id]!==B&&(y(D),l[D.id]=B)}function g(D){const L=_();D.__bindingPointIndex=L;const R=t.createBuffer(),q=D.__size,B=D.usage;return t.bindBuffer(t.UNIFORM_BUFFER,R),t.bufferData(t.UNIFORM_BUFFER,q,B),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,L,R),R}function _(){for(let D=0;D<f;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(D){const L=o[D.id],R=D.uniforms,q=D.__cache;t.bindBuffer(t.UNIFORM_BUFFER,L);for(let B=0,F=R.length;B<F;B++){const G=Array.isArray(R[B])?R[B]:[R[B]];for(let b=0,C=G.length;b<C;b++){const z=G[b];if(S(z,B,b,q)===!0){const le=z.__offset,J=Array.isArray(z.value)?z.value:[z.value];let de=0;for(let pe=0;pe<J.length;pe++){const se=J[pe],ue=w(se);typeof se=="number"||typeof se=="boolean"?(z.__data[0]=se,t.bufferSubData(t.UNIFORM_BUFFER,le+de,z.__data)):se.isMatrix3?(z.__data[0]=se.elements[0],z.__data[1]=se.elements[1],z.__data[2]=se.elements[2],z.__data[3]=0,z.__data[4]=se.elements[3],z.__data[5]=se.elements[4],z.__data[6]=se.elements[5],z.__data[7]=0,z.__data[8]=se.elements[6],z.__data[9]=se.elements[7],z.__data[10]=se.elements[8],z.__data[11]=0):(se.toArray(z.__data,de),de+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,le,z.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function S(D,L,R,q){const B=D.value,F=L+"_"+R;if(q[F]===void 0)return typeof B=="number"||typeof B=="boolean"?q[F]=B:q[F]=B.clone(),!0;{const G=q[F];if(typeof B=="number"||typeof B=="boolean"){if(G!==B)return q[F]=B,!0}else if(G.equals(B)===!1)return G.copy(B),!0}return!1}function E(D){const L=D.uniforms;let R=0;const q=16;for(let F=0,G=L.length;F<G;F++){const b=Array.isArray(L[F])?L[F]:[L[F]];for(let C=0,z=b.length;C<z;C++){const le=b[C],J=Array.isArray(le.value)?le.value:[le.value];for(let de=0,pe=J.length;de<pe;de++){const se=J[de],ue=w(se),k=R%q,ae=k%ue.boundary,Q=k+ae;R+=ae,Q!==0&&q-Q<ue.storage&&(R+=q-Q),le.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=R,R+=ue.storage}}}const B=R%q;return B>0&&(R+=q-B),D.__size=R,D.__cache={},this}function w(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),L}function x(D){const L=D.target;L.removeEventListener("dispose",x);const R=c.indexOf(L.__bindingPointIndex);c.splice(R,1),t.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function v(){for(const D in o)t.deleteBuffer(o[D]);c=[],o={},l={}}return{bind:d,update:p,dispose:v}}class YA{constructor(e={}){const{canvas:n=UM(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),w=new Int32Array(4);let x=null,v=null;const D=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ji,this.toneMapping=Gs,this.toneMappingExposure=1;const R=this;let q=!1,B=0,F=0,G=null,b=-1,C=null;const z=new ln,le=new ln;let J=null;const de=new xt(0);let pe=0,se=n.width,ue=n.height,k=1,ae=null,Q=null;const N=new ln(0,0,se,ue),j=new ln(0,0,se,ue);let Ce=!1;const K=new Bm;let fe=!1,ve=!1;const he=new rn,_e=new rn,we=new ie,Ge=new ln,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function Ct(){return G===null?k:1}let H=r;function cn(A,X){return n.getContext(A,X)}try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Lm}`),n.addEventListener("webglcontextlost",ge,!1),n.addEventListener("webglcontextrestored",De,!1),n.addEventListener("webglcontextcreationerror",Le,!1),H===null){const X="webgl2";if(H=cn(X,A),H===null)throw cn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let mt,ft,et,wt,We,P,T,U,ce,me,re,Ie,Ee,Ue,_t,Se,Fe,tt,ot,Oe,dt,ht,Ot,W;function be(){mt=new Q4(H),mt.init(),ht=new OA(H,mt),ft=new j4(H,mt,e,ht),et=new NA(H,mt),ft.reverseDepthBuffer&&y&&et.buffers.depth.setReversed(!0),wt=new tw(H),We=new yA,P=new FA(H,mt,et,We,ft,ht,wt),T=new q4(R),U=new Z4(R),ce=new lE(H),Ot=new W4(H,ce),me=new J4(H,ce,wt,Ot),re=new iw(H,me,ce,wt),ot=new nw(H,ft,P),Se=new Y4(We),Ie=new vA(R,T,U,mt,ft,Ot,Se),Ee=new XA(R,We),Ue=new SA,_t=new CA(mt),tt=new G4(R,T,U,et,re,S,d),Fe=new DA(R,re,ft),W=new jA(H,wt,ft,et),Oe=new X4(H,mt,wt),dt=new ew(H,mt,wt),wt.programs=Ie.programs,R.capabilities=ft,R.extensions=mt,R.properties=We,R.renderLists=Ue,R.shadowMap=Fe,R.state=et,R.info=wt}be();const oe=new GA(R,H);this.xr=oe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(A){A!==void 0&&(k=A,this.setSize(se,ue,!1))},this.getSize=function(A){return A.set(se,ue)},this.setSize=function(A,X,te=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,ue=X,n.width=Math.floor(A*k),n.height=Math.floor(X*k),te===!0&&(n.style.width=A+"px",n.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(se*k,ue*k).floor()},this.setDrawingBufferSize=function(A,X,te){se=A,ue=X,k=te,n.width=Math.floor(A*te),n.height=Math.floor(X*te),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(N)},this.setViewport=function(A,X,te,ne){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,X,te,ne),et.viewport(z.copy(N).multiplyScalar(k).round())},this.getScissor=function(A){return A.copy(j)},this.setScissor=function(A,X,te,ne){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,X,te,ne),et.scissor(le.copy(j).multiplyScalar(k).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(A){et.setScissorTest(Ce=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){Q=A},this.getClearColor=function(A){return A.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(A=!0,X=!0,te=!0){let ne=0;if(A){let Y=!1;if(G!==null){const Re=G.texture.format;Y=Re===Om||Re===Fm||Re===Um}if(Y){const Re=G.texture.type,Te=Re===rs||Re===Lo||Re===iu||Re===Fa||Re===Im||Re===Nm,Xe=tt.getClearColor(),Ve=tt.getClearAlpha(),at=Xe.r,ut=Xe.g,je=Xe.b;Te?(E[0]=at,E[1]=ut,E[2]=je,E[3]=Ve,H.clearBufferuiv(H.COLOR,0,E)):(w[0]=at,w[1]=ut,w[2]=je,w[3]=Ve,H.clearBufferiv(H.COLOR,0,w))}else ne|=H.COLOR_BUFFER_BIT}X&&(ne|=H.DEPTH_BUFFER_BIT),te&&(ne|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ge,!1),n.removeEventListener("webglcontextrestored",De,!1),n.removeEventListener("webglcontextcreationerror",Le,!1),Ue.dispose(),_t.dispose(),We.dispose(),T.dispose(),U.dispose(),re.dispose(),Ot.dispose(),W.dispose(),Ie.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Bo),oe.removeEventListener("sessionend",cs),Fr.stop()};function ge(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const A=wt.autoReset,X=Fe.enabled,te=Fe.autoUpdate,ne=Fe.needsUpdate,Y=Fe.type;be(),wt.autoReset=A,Fe.enabled=X,Fe.autoUpdate=te,Fe.needsUpdate=ne,Fe.type=Y}function Le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function pt(A){const X=A.target;X.removeEventListener("dispose",pt),Xt(X)}function Xt(A){yn(A),We.remove(A)}function yn(A){const X=We.get(A).programs;X!==void 0&&(X.forEach(function(te){Ie.releaseProgram(te)}),A.isShaderMaterial&&Ie.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,te,ne,Y,Re){X===null&&(X=St);const Te=Y.isMesh&&Y.matrixWorld.determinant()<0,Xe=Tu(A,X,te,ne,Y);et.setMaterial(ne,Te);let Ve=te.index,at=1;if(ne.wireframe===!0){if(Ve=me.getWireframeAttribute(te),Ve===void 0)return;at=2}const ut=te.drawRange,je=te.attributes.position;let Tt=ut.start*at,Ut=(ut.start+ut.count)*at;Re!==null&&(Tt=Math.max(Tt,Re.start*at),Ut=Math.min(Ut,(Re.start+Re.count)*at)),Ve!==null?(Tt=Math.max(Tt,0),Ut=Math.min(Ut,Ve.count)):je!=null&&(Tt=Math.max(Tt,0),Ut=Math.min(Ut,je.count));const Et=Ut-Tt;if(Et<0||Et===1/0)return;Ot.setup(Y,ne,Xe,te,Ve);let Bn,gt=Oe;if(Ve!==null&&(Bn=ce.get(Ve),gt=dt,gt.setIndex(Bn)),Y.isMesh)ne.wireframe===!0?(et.setLineWidth(ne.wireframeLinewidth*Ct()),gt.setMode(H.LINES)):gt.setMode(H.TRIANGLES);else if(Y.isLine){let Ke=ne.linewidth;Ke===void 0&&(Ke=1),et.setLineWidth(Ke*Ct()),Y.isLineSegments?gt.setMode(H.LINES):Y.isLineLoop?gt.setMode(H.LINE_LOOP):gt.setMode(H.LINE_STRIP)}else Y.isPoints?gt.setMode(H.POINTS):Y.isSprite&&gt.setMode(H.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)gt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))gt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ke=Y._multiDrawStarts,Qi=Y._multiDrawCounts,Dt=Y._multiDrawCount,zn=Ve?ce.get(Ve).bytesPerElement:1,Ji=We.get(ne).currentProgram.getUniforms();for(let xn=0;xn<Dt;xn++)Ji.setValue(H,"_gl_DrawID",xn),gt.render(Ke[xn]/zn,Qi[xn])}else if(Y.isInstancedMesh)gt.renderInstances(Tt,Et,Y.count);else if(te.isInstancedBufferGeometry){const Ke=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Qi=Math.min(te.instanceCount,Ke);gt.renderInstances(Tt,Et,Qi)}else gt.render(Tt,Et)};function Rt(A,X,te){A.transparent===!0&&A.side===Jr&&A.forceSinglePass===!1?(A.side=pi,A.needsUpdate=!0,zo(A,X,te),A.side=Xs,A.needsUpdate=!0,zo(A,X,te),A.side=Jr):zo(A,X,te)}this.compile=function(A,X,te=null){te===null&&(te=A),v=_t.get(te),v.init(X),L.push(v),te.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),A!==te&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights();const ne=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Re=Y.material;if(Re)if(Array.isArray(Re))for(let Te=0;Te<Re.length;Te++){const Xe=Re[Te];Rt(Xe,te,Y),ne.add(Xe)}else Rt(Re,te,Y),ne.add(Re)}),L.pop(),v=null,ne},this.compileAsync=function(A,X,te=null){const ne=this.compile(A,X,te);return new Promise(Y=>{function Re(){if(ne.forEach(function(Te){We.get(Te).currentProgram.isReady()&&ne.delete(Te)}),ne.size===0){Y(A);return}setTimeout(Re,10)}mt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let ni=null;function Zn(A){ni&&ni(A)}function Bo(){Fr.stop()}function cs(){Fr.start()}const Fr=new Y2;Fr.setAnimationLoop(Zn),typeof self<"u"&&Fr.setContext(self),this.setAnimationLoop=function(A){ni=A,oe.setAnimationLoop(A),A===null?Fr.stop():Fr.start()},oe.addEventListener("sessionstart",Bo),oe.addEventListener("sessionend",cs),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(X),X=oe.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,X,G),v=_t.get(A,L.length),v.init(X),L.push(v),_e.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),K.setFromProjectionMatrix(_e),ve=this.localClippingEnabled,fe=Se.init(this.clippingPlanes,ve),x=Ue.get(A,D.length),x.init(),D.push(x),oe.enabled===!0&&oe.isPresenting===!0){const Re=R.xr.getDepthSensingMesh();Re!==null&&Or(Re,X,-1/0,R.sortObjects)}Or(A,X,0,R.sortObjects),x.finish(),R.sortObjects===!0&&x.sort(ae,Q),ct=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,ct&&tt.addToRenderList(x,A),this.info.render.frame++,fe===!0&&Se.beginShadows();const te=v.state.shadowsArray;Fe.render(te,A,X),fe===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=x.opaque,Y=x.transmissive;if(v.setupLights(),X.isArrayCamera){const Re=X.cameras;if(Y.length>0)for(let Te=0,Xe=Re.length;Te<Xe;Te++){const Ve=Re[Te];Ks(ne,Y,A,Ve)}ct&&tt.render(A);for(let Te=0,Xe=Re.length;Te<Xe;Te++){const Ve=Re[Te];$s(x,A,Ve,Ve.viewport)}}else Y.length>0&&Ks(ne,Y,A,X),ct&&tt.render(A),$s(x,A,X);G!==null&&(P.updateMultisampleRenderTarget(G),P.updateRenderTargetMipmap(G)),A.isScene===!0&&A.onAfterRender(R,A,X),Ot.resetDefaultState(),b=-1,C=null,L.pop(),L.length>0?(v=L[L.length-1],fe===!0&&Se.setGlobalState(R.clippingPlanes,v.state.camera)):v=null,D.pop(),D.length>0?x=D[D.length-1]:x=null};function Or(A,X,te,ne){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){ne&&Ge.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_e);const Te=re.update(A),Xe=A.material;Xe.visible&&x.push(A,Te,Xe,te,Ge.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||K.intersectsObject(A))){const Te=re.update(A),Xe=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ge.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ge.copy(Te.boundingSphere.center)),Ge.applyMatrix4(A.matrixWorld).applyMatrix4(_e)),Array.isArray(Xe)){const Ve=Te.groups;for(let at=0,ut=Ve.length;at<ut;at++){const je=Ve[at],Tt=Xe[je.materialIndex];Tt&&Tt.visible&&x.push(A,Te,Tt,te,Ge.z,je)}}else Xe.visible&&x.push(A,Te,Xe,te,Ge.z,null)}}const Re=A.children;for(let Te=0,Xe=Re.length;Te<Xe;Te++)Or(Re[Te],X,te,ne)}function $s(A,X,te,ne){const Y=A.opaque,Re=A.transmissive,Te=A.transparent;v.setupLightsView(te),fe===!0&&Se.setGlobalState(R.clippingPlanes,te),ne&&et.viewport(z.copy(ne)),Y.length>0&&fs(Y,X,te),Re.length>0&&fs(Re,X,te),Te.length>0&&fs(Te,X,te),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function Ks(A,X,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ne.id]===void 0&&(v.state.transmissionRenderTarget[ne.id]=new Do(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?lu:rs,minFilter:Mo,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const Re=v.state.transmissionRenderTarget[ne.id],Te=ne.viewport||z;Re.setSize(Te.z,Te.w);const Xe=R.getRenderTarget();R.setRenderTarget(Re),R.getClearColor(de),pe=R.getClearAlpha(),pe<1&&R.setClearColor(16777215,.5),R.clear(),ct&&tt.render(te);const Ve=R.toneMapping;R.toneMapping=Gs;const at=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),v.setupLightsView(ne),fe===!0&&Se.setGlobalState(R.clippingPlanes,ne),fs(A,te,ne),P.updateMultisampleRenderTarget(Re),P.updateRenderTargetMipmap(Re),mt.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let je=0,Tt=X.length;je<Tt;je++){const Ut=X[je],Et=Ut.object,Bn=Ut.geometry,gt=Ut.material,Ke=Ut.group;if(gt.side===Jr&&Et.layers.test(ne.layers)){const Qi=gt.side;gt.side=pi,gt.needsUpdate=!0,Mu(Et,te,ne,Bn,gt,Ke),gt.side=Qi,gt.needsUpdate=!0,ut=!0}}ut===!0&&(P.updateMultisampleRenderTarget(Re),P.updateRenderTargetMipmap(Re))}R.setRenderTarget(Xe),R.setClearColor(de,pe),at!==void 0&&(ne.viewport=at),R.toneMapping=Ve}function fs(A,X,te){const ne=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Re=A.length;Y<Re;Y++){const Te=A[Y],Xe=Te.object,Ve=Te.geometry,at=ne===null?Te.material:ne,ut=Te.group;Xe.layers.test(te.layers)&&Mu(Xe,X,te,Ve,at,ut)}}function Mu(A,X,te,ne,Y,Re){A.onBeforeRender(R,X,te,ne,Y,Re),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(R,X,te,ne,A,Re),Y.transparent===!0&&Y.side===Jr&&Y.forceSinglePass===!1?(Y.side=pi,Y.needsUpdate=!0,R.renderBufferDirect(te,X,ne,Y,A,Re),Y.side=Xs,Y.needsUpdate=!0,R.renderBufferDirect(te,X,ne,Y,A,Re),Y.side=Jr):R.renderBufferDirect(te,X,ne,Y,A,Re),A.onAfterRender(R,X,te,ne,Y,Re)}function zo(A,X,te){X.isScene!==!0&&(X=St);const ne=We.get(A),Y=v.state.lights,Re=v.state.shadowsArray,Te=Y.state.version,Xe=Ie.getParameters(A,Y.state,Re,X,te),Ve=Ie.getProgramCacheKey(Xe);let at=ne.programs;ne.environment=A.isMeshStandardMaterial?X.environment:null,ne.fog=X.fog,ne.envMap=(A.isMeshStandardMaterial?U:T).get(A.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,at===void 0&&(A.addEventListener("dispose",pt),at=new Map,ne.programs=at);let ut=at.get(Ve);if(ut!==void 0){if(ne.currentProgram===ut&&ne.lightsStateVersion===Te)return _r(A,Xe),ut}else Xe.uniforms=Ie.getUniforms(A),A.onBeforeCompile(Xe,R),ut=Ie.acquireProgram(Xe,Ve),at.set(Ve,ut),ne.uniforms=Xe.uniforms;const je=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=Se.uniform),_r(A,Xe),ne.needsLights=Jf(A),ne.lightsStateVersion=Te,ne.needsLights&&(je.ambientLightColor.value=Y.state.ambient,je.lightProbe.value=Y.state.probe,je.directionalLights.value=Y.state.directional,je.directionalLightShadows.value=Y.state.directionalShadow,je.spotLights.value=Y.state.spot,je.spotLightShadows.value=Y.state.spotShadow,je.rectAreaLights.value=Y.state.rectArea,je.ltc_1.value=Y.state.rectAreaLTC1,je.ltc_2.value=Y.state.rectAreaLTC2,je.pointLights.value=Y.state.point,je.pointLightShadows.value=Y.state.pointShadow,je.hemisphereLights.value=Y.state.hemi,je.directionalShadowMap.value=Y.state.directionalShadowMap,je.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,je.spotShadowMap.value=Y.state.spotShadowMap,je.spotLightMatrix.value=Y.state.spotLightMatrix,je.spotLightMap.value=Y.state.spotLightMap,je.pointShadowMap.value=Y.state.pointShadowMap,je.pointShadowMatrix.value=Y.state.pointShadowMatrix),ne.currentProgram=ut,ne.uniformsList=null,ut}function Eu(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=cf.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function _r(A,X){const te=We.get(A);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function Tu(A,X,te,ne,Y){X.isScene!==!0&&(X=St),P.resetTextureUnits();const Re=X.fog,Te=ne.isMeshStandardMaterial?X.environment:null,Xe=G===null?R.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Ka,Ve=(ne.isMeshStandardMaterial?U:T).get(ne.envMap||Te),at=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ut=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),je=!!te.morphAttributes.position,Tt=!!te.morphAttributes.normal,Ut=!!te.morphAttributes.color;let Et=Gs;ne.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Et=R.toneMapping);const Bn=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,gt=Bn!==void 0?Bn.length:0,Ke=We.get(ne),Qi=v.state.lights;if(fe===!0&&(ve===!0||A!==C)){const Qn=A===C&&ne.id===b;Se.setState(ne,A,Qn)}let Dt=!1;ne.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Qi.state.version||Ke.outputColorSpace!==Xe||Y.isBatchedMesh&&Ke.batching===!1||!Y.isBatchedMesh&&Ke.batching===!0||Y.isBatchedMesh&&Ke.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ke.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ke.instancing===!1||!Y.isInstancedMesh&&Ke.instancing===!0||Y.isSkinnedMesh&&Ke.skinning===!1||!Y.isSkinnedMesh&&Ke.skinning===!0||Y.isInstancedMesh&&Ke.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ke.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ke.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ke.instancingMorph===!1&&Y.morphTexture!==null||Ke.envMap!==Ve||ne.fog===!0&&Ke.fog!==Re||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Se.numPlanes||Ke.numIntersection!==Se.numIntersection)||Ke.vertexAlphas!==at||Ke.vertexTangents!==ut||Ke.morphTargets!==je||Ke.morphNormals!==Tt||Ke.morphColors!==Ut||Ke.toneMapping!==Et||Ke.morphTargetsCount!==gt)&&(Dt=!0):(Dt=!0,Ke.__version=ne.version);let zn=Ke.currentProgram;Dt===!0&&(zn=zo(ne,X,Y));let Ji=!1,xn=!1,vr=!1;const Ht=zn.getUniforms(),Ni=Ke.uniforms;if(et.useProgram(zn.program)&&(Ji=!0,xn=!0,vr=!0),ne.id!==b&&(b=ne.id,xn=!0),Ji||C!==A){et.buffers.depth.getReversed()?(he.copy(A.projectionMatrix),OM(he),kM(he),Ht.setValue(H,"projectionMatrix",he)):Ht.setValue(H,"projectionMatrix",A.projectionMatrix),Ht.setValue(H,"viewMatrix",A.matrixWorldInverse);const Ui=Ht.map.cameraPosition;Ui!==void 0&&Ui.setValue(H,we.setFromMatrixPosition(A.matrixWorld)),ft.logarithmicDepthBuffer&&Ht.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ht.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,xn=!0,vr=!0)}if(Y.isSkinnedMesh){Ht.setOptional(H,Y,"bindMatrix"),Ht.setOptional(H,Y,"bindMatrixInverse");const Qn=Y.skeleton;Qn&&(Qn.boneTexture===null&&Qn.computeBoneTexture(),Ht.setValue(H,"boneTexture",Qn.boneTexture,P))}Y.isBatchedMesh&&(Ht.setOptional(H,Y,"batchingTexture"),Ht.setValue(H,"batchingTexture",Y._matricesTexture,P),Ht.setOptional(H,Y,"batchingIdTexture"),Ht.setValue(H,"batchingIdTexture",Y._indirectTexture,P),Ht.setOptional(H,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ht.setValue(H,"batchingColorTexture",Y._colorsTexture,P));const kr=te.morphAttributes;if((kr.position!==void 0||kr.normal!==void 0||kr.color!==void 0)&&ot.update(Y,te,zn),(xn||Ke.receiveShadow!==Y.receiveShadow)&&(Ke.receiveShadow=Y.receiveShadow,Ht.setValue(H,"receiveShadow",Y.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Ni.envMap.value=Ve,Ni.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&X.environment!==null&&(Ni.envMapIntensity.value=X.environmentIntensity),xn&&(Ht.setValue(H,"toneMappingExposure",R.toneMappingExposure),Ke.needsLights&&wu(Ni,vr),Re&&ne.fog===!0&&Ee.refreshFogUniforms(Ni,Re),Ee.refreshMaterialUniforms(Ni,ne,k,ue,v.state.transmissionRenderTarget[A.id]),cf.upload(H,Eu(Ke),Ni,P)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(cf.upload(H,Eu(Ke),Ni,P),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ht.setValue(H,"center",Y.center),Ht.setValue(H,"modelViewMatrix",Y.modelViewMatrix),Ht.setValue(H,"normalMatrix",Y.normalMatrix),Ht.setValue(H,"modelMatrix",Y.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Qn=ne.uniformsGroups;for(let Ui=0,ii=Qn.length;Ui<ii;Ui++){const Au=Qn[Ui];W.update(Au,zn),W.bind(Au,zn)}}return zn}function wu(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Jf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(A,X,te){We.get(A.texture).__webglTexture=X,We.get(A.depthTexture).__webglTexture=te;const ne=We.get(A);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=te===void 0,ne.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const te=We.get(A);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,te=0){G=A,B=X,F=te;let ne=!0,Y=null,Re=!1,Te=!1;if(A){const Ve=We.get(A);if(Ve.__useDefaultFramebuffer!==void 0)et.bindFramebuffer(H.FRAMEBUFFER,null),ne=!1;else if(Ve.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Ve.__hasExternalTextures)P.rebindTextures(A,We.get(A.texture).__webglTexture,We.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const je=A.depthTexture;if(Ve.__boundDepthTexture!==je){if(je!==null&&We.has(je)&&(A.width!==je.image.width||A.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const at=A.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Te=!0);const ut=We.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ut[X])?Y=ut[X][te]:Y=ut[X],Re=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?Y=We.get(A).__webglMultisampledFramebuffer:Array.isArray(ut)?Y=ut[te]:Y=ut,z.copy(A.viewport),le.copy(A.scissor),J=A.scissorTest}else z.copy(N).multiplyScalar(k).floor(),le.copy(j).multiplyScalar(k).floor(),J=Ce;if(et.bindFramebuffer(H.FRAMEBUFFER,Y)&&ne&&et.drawBuffers(A,Y),et.viewport(z),et.scissor(le),et.setScissorTest(J),Re){const Ve=We.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ve.__webglTexture,te)}else if(Te){const Ve=We.get(A.texture),at=X||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ve.__webglTexture,te||0,at)}b=-1},this.readRenderTargetPixels=function(A,X,te,ne,Y,Re,Te){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Xe=Xe[Te]),Xe){et.bindFramebuffer(H.FRAMEBUFFER,Xe);try{const Ve=A.texture,at=Ve.format,ut=Ve.type;if(!ft.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-ne&&te>=0&&te<=A.height-Y&&H.readPixels(X,te,ne,Y,ht.convert(at),ht.convert(ut),Re)}finally{const Ve=G!==null?We.get(G).__webglFramebuffer:null;et.bindFramebuffer(H.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(A,X,te,ne,Y,Re,Te){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Xe=Xe[Te]),Xe){const Ve=A.texture,at=Ve.format,ut=Ve.type;if(!ft.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-ne&&te>=0&&te<=A.height-Y){et.bindFramebuffer(H.FRAMEBUFFER,Xe);const je=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,je),H.bufferData(H.PIXEL_PACK_BUFFER,Re.byteLength,H.STREAM_READ),H.readPixels(X,te,ne,Y,ht.convert(at),ht.convert(ut),0);const Tt=G!==null?We.get(G).__webglFramebuffer:null;et.bindFramebuffer(H.FRAMEBUFFER,Tt);const Ut=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await FM(H,Ut,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,je),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Re),H.deleteBuffer(je),H.deleteSync(Ut),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,X=null,te=0){A.isTexture!==!0&&($l("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const ne=Math.pow(2,-te),Y=Math.floor(A.image.width*ne),Re=Math.floor(A.image.height*ne),Te=X!==null?X.x:0,Xe=X!==null?X.y:0;P.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,te,0,0,Te,Xe,Y,Re),et.unbindTexture()},this.copyTextureToTexture=function(A,X,te=null,ne=null,Y=0){A.isTexture!==!0&&($l("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,A=arguments[1],X=arguments[2],Y=arguments[3]||0,te=null);let Re,Te,Xe,Ve,at,ut,je,Tt,Ut;const Et=A.isCompressedTexture?A.mipmaps[Y]:A.image;te!==null?(Re=te.max.x-te.min.x,Te=te.max.y-te.min.y,Xe=te.isBox3?te.max.z-te.min.z:1,Ve=te.min.x,at=te.min.y,ut=te.isBox3?te.min.z:0):(Re=Et.width,Te=Et.height,Xe=Et.depth||1,Ve=0,at=0,ut=0),ne!==null?(je=ne.x,Tt=ne.y,Ut=ne.z):(je=0,Tt=0,Ut=0);const Bn=ht.convert(X.format),gt=ht.convert(X.type);let Ke;X.isData3DTexture?(P.setTexture3D(X,0),Ke=H.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(P.setTexture2DArray(X,0),Ke=H.TEXTURE_2D_ARRAY):(P.setTexture2D(X,0),Ke=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const Qi=H.getParameter(H.UNPACK_ROW_LENGTH),Dt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),zn=H.getParameter(H.UNPACK_SKIP_PIXELS),Ji=H.getParameter(H.UNPACK_SKIP_ROWS),xn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Et.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Et.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ve),H.pixelStorei(H.UNPACK_SKIP_ROWS,at),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ut);const vr=A.isDataArrayTexture||A.isData3DTexture,Ht=X.isDataArrayTexture||X.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Ni=We.get(A),kr=We.get(X),Qn=We.get(Ni.__renderTarget),Ui=We.get(kr.__renderTarget);et.bindFramebuffer(H.READ_FRAMEBUFFER,Qn.__webglFramebuffer),et.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let ii=0;ii<Xe;ii++)vr&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,We.get(A).__webglTexture,Y,ut+ii),A.isDepthTexture?(Ht&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,We.get(X).__webglTexture,Y,Ut+ii),H.blitFramebuffer(Ve,at,Re,Te,je,Tt,Re,Te,H.DEPTH_BUFFER_BIT,H.NEAREST)):Ht?H.copyTexSubImage3D(Ke,Y,je,Tt,Ut+ii,Ve,at,Re,Te):H.copyTexSubImage2D(Ke,Y,je,Tt,Ut+ii,Ve,at,Re,Te);et.bindFramebuffer(H.READ_FRAMEBUFFER,null),et.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ht?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Ke,Y,je,Tt,Ut,Re,Te,Xe,Bn,gt,Et.data):X.isCompressedArrayTexture?H.compressedTexSubImage3D(Ke,Y,je,Tt,Ut,Re,Te,Xe,Bn,Et.data):H.texSubImage3D(Ke,Y,je,Tt,Ut,Re,Te,Xe,Bn,gt,Et):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Y,je,Tt,Re,Te,Bn,gt,Et.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Y,je,Tt,Et.width,Et.height,Bn,Et.data):H.texSubImage2D(H.TEXTURE_2D,Y,je,Tt,Re,Te,Bn,gt,Et);H.pixelStorei(H.UNPACK_ROW_LENGTH,Qi),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Dt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,zn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ji),H.pixelStorei(H.UNPACK_SKIP_IMAGES,xn),Y===0&&X.generateMipmaps&&H.generateMipmap(Ke),et.unbindTexture()},this.copyTextureToTexture3D=function(A,X,te=null,ne=null,Y=0){return A.isTexture!==!0&&($l("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ne=arguments[1]||null,A=arguments[2],X=arguments[3],Y=arguments[4]||0),$l('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,te,ne,Y)},this.initRenderTarget=function(A){We.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),et.unbindTexture()},this.resetState=function(){B=0,F=0,G=null,et.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ns}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Pt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Pt._getUnpackColorSpace()}}class mf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new xt(e),this.density=n}clone(){return new mf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class qA extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class ey extends du{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const c1=new rn,fm=new B2,$c=new Cf,Kc=new ie;class gf extends On{constructor(e=new Ri,n=new ey){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),$c.copy(r.boundingSphere),$c.applyMatrix4(o),$c.radius+=l,e.ray.intersectsSphere($c)===!1)return;c1.copy(o).invert(),fm.copy(e.ray).applyMatrix4(c1);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,p=r.index,_=r.attributes.position;if(p!==null){const y=Math.max(0,c.start),S=Math.min(p.count,c.start+c.count);for(let E=y,w=S;E<w;E++){const x=p.getX(E);Kc.fromBufferAttribute(_,x),f1(Kc,x,d,o,e,n,this)}}else{const y=Math.max(0,c.start),S=Math.min(_.count,c.start+c.count);for(let E=y,w=S;E<w;E++)Kc.fromBufferAttribute(_,E),f1(Kc,E,d,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function f1(t,e,n,r,o,l,c){const f=fm.distanceSqToPoint(t);if(f<n){const d=new ie;fm.closestPointToPoint(t,d),d.applyMatrix4(r);const p=o.ray.origin.distanceTo(d);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class _f extends Ri{constructor(e=1,n=32,r=16,o=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:l,thetaStart:c,thetaLength:f},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const d=Math.min(c+f,Math.PI);let p=0;const g=[],_=new ie,y=new ie,S=[],E=[],w=[],x=[];for(let v=0;v<=r;v++){const D=[],L=v/r;let R=0;v===0&&c===0?R=.5/n:v===r&&d===Math.PI&&(R=-.5/n);for(let q=0;q<=n;q++){const B=q/n;_.x=-e*Math.cos(o+B*l)*Math.sin(c+L*f),_.y=e*Math.cos(c+L*f),_.z=e*Math.sin(o+B*l)*Math.sin(c+L*f),E.push(_.x,_.y,_.z),y.copy(_).normalize(),w.push(y.x,y.y,y.z),x.push(B+R,1-L),D.push(p++)}g.push(D)}for(let v=0;v<r;v++)for(let D=0;D<n;D++){const L=g[v][D+1],R=g[v][D],q=g[v+1][D],B=g[v+1][D+1];(v!==0||c>0)&&S.push(L,R,B),(v!==r-1||d<Math.PI)&&S.push(R,q,B)}this.setIndex(S),this.setAttribute("position",new Rr(E,3)),this.setAttribute("normal",new Rr(w,3)),this.setAttribute("uv",new Rr(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _f(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ty extends On{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const dp=new rn,d1=new ie,h1=new ie;class $A{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bm,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;d1.setFromMatrixPosition(e.matrixWorld),n.position.copy(d1),h1.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(h1),n.updateMatrixWorld(),dp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dp),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(dp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class KA extends $A{constructor(){super(new q2(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class p1 extends ty{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new KA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ZA extends ty{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lm);const Zc=1.5;function hp({count:t,innerR:e,outerR:n,colorInner:r,colorOuter:o,tilt:l,opacity:c,sizeMin:f,sizeMax:d,renderOrder:p}){const g=new Ri,_=new Float32Array(t*3),y=new Float32Array(t*3),S=new Float32Array(t),E=new xt(r),w=new xt(o);for(let L=0;L<t;L++){const R=Math.random()*Math.PI*2,q=Math.random(),B=e+Math.sqrt(q)*(n-e),F=.15+q*.6,G=(Math.random()-.5)*F*2;_[L*3]=Math.cos(R)*B,_[L*3+1]=G,_[L*3+2]=Math.sin(R)*B;const b=E.clone().lerp(w,q);y[L*3]=b.r,y[L*3+1]=b.g,y[L*3+2]=b.b,S[L]=Math.random()*(d-f)+f+(1-q)*f}g.setAttribute("position",new gn(_,3)),g.setAttribute("color",new gn(y,3)),g.setAttribute("size",new gn(S,1));const x=new $i({uniforms:{uScale:{value:1},uTint:{value:new xt("#ffffff")}},vertexShader:`
      attribute float size; varying vec3 vColor;
      uniform float uScale; uniform vec3 uTint;
      void main() {
        vColor = color * uTint;
        vec3 pos = position; pos.xz *= uScale;
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = size * (400.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      varying vec3 vColor;
      void main() {
        float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard;
        float alpha = smoothstep(0.5, 0.0, d) * OPACITY;
        gl_FragColor = vec4(vColor, alpha);
      }
    `.replace("OPACITY",c.toString()),transparent:!0,depthWrite:!1,blending:wo,vertexColors:!0}),v=new Zl,D=new gf(g,x);return D.renderOrder=p,v.add(D),v.rotation.x=l,D.rotation.z=Math.random()*Math.PI*2,{group:v,points:D,mat:x}}function pp({count:t,radius:e,jitterRate:n,jitterAmount:r,colorFn:o,renderOrder:l,uniforms:c,fragShader:f}){const d=new Ri,p=new Float32Array(t*3),g=new Float32Array(t*3),_=new Float32Array(t);for(let E=0;E<t;E++){const w=Math.random()*Math.PI*2,x=Math.acos(2*Math.random()-1),v=Math.random()<n?(Math.random()-.5)*r:0,D=e+v;p[E*3]=Math.sin(x)*Math.cos(w)*D,p[E*3+1]=Math.sin(x)*Math.sin(w)*D,p[E*3+2]=Math.cos(x)*D;const[L,R,q,B]=o(E,w,x,D);g[E*3]=L,g[E*3+1]=R,g[E*3+2]=q,_[E]=B}d.setAttribute("position",new gn(p,3)),d.setAttribute("color",new gn(g,3)),d.setAttribute("size",new gn(_,1));const y=new $i({uniforms:{...c||{},uTint:{value:new xt("#ffffff")}},vertexShader:`
      attribute float size; varying vec3 vColor;
      uniform float uPulse; uniform vec3 uTint;
      void main() {
        vColor = color * uTint;
        vec3 pos = position * uPulse;
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = size * (320.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:f||`
      varying vec3 vColor;
      void main() {
        float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard;
        float alpha = smoothstep(0.5, 0.1, d) * 0.8;
        gl_FragColor = vec4(vColor, alpha);
      }
    `,transparent:!0,depthWrite:!1,blending:wo,vertexColors:!0}),S=new gf(d,y);return S.renderOrder=l,{points:S,mat:y}}const m1={default:{tint:"#ffffff",bg:"#06060f",fog:"#06060f",glow:"#4488cc",ambient:"#1a2a44"},fire:{tint:"#ffccaa",bg:"#0f0806",fog:"#0f0806",glow:"#ff6644",ambient:"#2a1a0a"},aurora:{tint:"#ccffdd",bg:"#060f0a",fog:"#060f0a",glow:"#44ffcc",ambient:"#0a1a14"},void:{tint:"#bbaadd",bg:"#0a0814",fog:"#0a0814",glow:"#5533aa",ambient:"#0a0a14"}};function QA({ringScale:t,planetScale:e,brightness:n,speed:r,sparkle:o,mode:l,quality:c,focus:f,chaos:d}){const p=qe.useRef(null),g=qe.useRef(null),_=qe.useRef(t),y=qe.useRef(e),S=qe.useRef(n??1),E=qe.useRef(r??1),w=qe.useRef(o??0),x=qe.useRef(l??"default"),v=qe.useRef(c??"high"),D=qe.useRef(f??0),L=qe.useRef(d??0);return qe.useEffect(()=>{_.current=t},[t]),qe.useEffect(()=>{y.current=e},[e]),qe.useEffect(()=>{S.current=n??1},[n]),qe.useEffect(()=>{E.current=r??1},[r]),qe.useEffect(()=>{w.current=o??0},[o]),qe.useEffect(()=>{x.current=l??"default"},[l]),qe.useEffect(()=>{v.current=c??"high"},[c]),qe.useEffect(()=>{D.current=f??0},[f]),qe.useEffect(()=>{L.current=d??0},[d]),qe.useEffect(()=>{const R=p.current;let q=!1;const B=c==="eco"?.55:1,F=U=>Math.round(U*B),G=new qA;G.background=new xt(394767),G.fog=new mf(394767,15e-5);const b=new Yi(55,R.clientWidth/R.clientHeight,.1,50);b.position.set(0,1,7.5),b.lookAt(0,0,0);const C=new YA({antialias:!0,alpha:!1});C.setPixelRatio(Math.min(window.devicePixelRatio,2)),C.setSize(R.clientWidth,R.clientHeight),C.toneMapping=E2,C.toneMappingExposure=1.2,R.appendChild(C.domElement);const z=new ZA(1714756,1.8);G.add(z);const le=new p1(16772829,3.5);le.position.set(6,4,6),G.add(le);const J=new p1(3364215,1.2);J.position.set(-4,-1,-4),G.add(J);const de=F(1800),pe=new Ri,se=new Float32Array(de*3);for(let U=0;U<de;U++){const ce=Math.random()*Math.PI*2,me=Math.acos(2*Math.random()-1),re=12+Math.random()*8;se[U*3]=Math.sin(me)*Math.cos(ce)*re,se[U*3+1]=Math.sin(me)*Math.sin(ce)*re,se[U*3+2]=Math.cos(me)*re}pe.setAttribute("position",new gn(se,3));const ue=new ey({color:16777215,size:.04,transparent:!0,opacity:.7,depthWrite:!1,blending:wo}),k=new gf(pe,ue);k.renderOrder=0,G.add(k);const ae=hp({count:F(2500),innerR:1.8,outerR:2.8,colorInner:"#ffcc77",colorOuter:"#cc7733",tilt:.25,opacity:.8,sizeMin:.014,sizeMax:.07,renderOrder:3}),Q=hp({count:F(2e3),innerR:3.1,outerR:3.7,colorInner:"#66eecc",colorOuter:"#2288bb",tilt:.55,opacity:.65,sizeMin:.012,sizeMax:.055,renderOrder:2}),N=hp({count:F(1800),innerR:3.6,outerR:4.8,colorInner:"#cc99ff",colorOuter:"#5533aa",tilt:.78,opacity:.6,sizeMin:.01,sizeMax:.05,renderOrder:1});G.add(ae.group),G.add(Q.group),G.add(N.group);const j=new _f(1.58,64,48),Ce=new $i({uniforms:{uColor:{value:new xt("#4488cc")}},vertexShader:`
        varying vec3 vNormal; varying vec3 vViewDir;
        void main() {
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          vNormal = normalize(normalMatrix * normal);
          vViewDir = normalize(-mvPos.xyz);
          gl_Position = projectionMatrix * mvPos;
        }
      `,fragmentShader:`
        varying vec3 vNormal; varying vec3 vViewDir; uniform vec3 uColor;
        void main() {
          float fresnel = 1.0 - abs(dot(vNormal, vViewDir));
          float glow = pow(fresnel, 3.5) * 0.4;
          gl_FragColor = vec4(uColor, glow);
        }
      `,transparent:!0,blending:wo,depthWrite:!1}),K=new fr(j,Ce);K.renderOrder=4,G.add(K);const fe=new _f(Zc-.02,64,48),ve=new km({color:394767}),he=new fr(fe,ve);he.renderOrder=5,G.add(he);const _e=pp({count:F(1500),radius:Zc,jitterRate:1,jitterAmount:.55,colorFn:()=>{const U=Math.random();return[.12+U*.15,.3+U*.1,.7+U*.25,Math.random()*.08+.02+U*.03]},renderOrder:6,uniforms:{uWave:{value:0},uPulse:{value:1}},fragShader:`
        varying vec3 vColor;
        void main() { float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard; float alpha = smoothstep(0.5, 0.08, d) * 0.45; gl_FragColor = vec4(vColor, alpha); }
      `});_e.mat.vertexShader=`
      attribute float size; varying vec3 vColor;
      uniform float uWave; uniform float uPulse; uniform vec3 uTint;
      void main() {
        vColor = color * uTint; vec3 pos = position;
        float wave = 1.0 + sin(length(pos) * 5.0 + uWave) * 0.03; pos *= wave;
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = size * (320.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,G.add(_e.points);const we=pp({count:F(1200),radius:Zc,jitterRate:1,jitterAmount:.2,colorFn:()=>[.15+Math.random()*.35,.35+Math.random()*.45,.6+Math.random()*.4,Math.random()*.035+.008],renderOrder:7,uniforms:{uPulse:{value:1}},fragShader:`
        varying vec3 vColor;
        void main() { float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard; float alpha = smoothstep(0.5, 0.2, d) * 0.5; gl_FragColor = vec4(vColor, alpha); }
      `});G.add(we.points);const Ge=pp({count:F(2800),radius:Zc,jitterRate:.3,jitterAmount:.15,colorFn:(U,ce,me)=>{const re=Math.abs(Math.cos(me));return[.2+re*.4,.4+re*.35,.55+re*.4,Math.random()*.04+.01+(Math.random()<.08?.06:0)]},renderOrder:8,uniforms:{uPulse:{value:1}},fragShader:`
        varying vec3 vColor;
        void main() { float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard; float alpha = smoothstep(0.5, 0.15, d) * 0.85; gl_FragColor = vec4(vColor, alpha); }
      `});G.add(Ge.points);const St=F(500),ct=new Ri,Ct=new Float32Array(St*3),H=new Float32Array(St*3),cn=new Float32Array(St);for(let U=0;U<St;U++){const ce=Math.random()*Math.PI*2,me=Math.acos(2*Math.random()-1),re=Math.random(),Ie=.15+Math.sqrt(re)*.5;Ct[U*3]=Math.sin(me)*Math.cos(ce)*Ie,Ct[U*3+1]=Math.sin(me)*Math.sin(ce)*Ie,Ct[U*3+2]=Math.cos(me)*Ie;const Ee=1-re;H[U*3]=.8+Ee*.2,H[U*3+1]=.7+Ee*.3,H[U*3+2]=.5+Ee*.5,cn[U]=Math.random()*.06+.02+Ee*.08}ct.setAttribute("position",new gn(Ct,3)),ct.setAttribute("color",new gn(H,3)),ct.setAttribute("size",new gn(cn,1));const mt=new $i({uniforms:{uPulse:{value:1},uTint:{value:new xt("#ffffff")}},vertexShader:`
        attribute float size; varying vec3 vColor;
        uniform float uPulse; uniform vec3 uTint;
        void main() { vColor = color * uTint; vec3 pos = position * uPulse; vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0); gl_PointSize = size * (350.0 / -mvPosition.z); gl_Position = projectionMatrix * mvPosition; }
      `,fragmentShader:`
        varying vec3 vColor;
        void main() { float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard; float alpha = smoothstep(0.5, 0.0, d) * 0.6; gl_FragColor = vec4(vColor, alpha); }
      `,transparent:!0,depthWrite:!1,blending:wo,vertexColors:!0}),ft=new gf(ct,mt);ft.renderOrder=9,G.add(ft);const et=[ae.mat,Q.mat,N.mat,Ge.mat,we.mat,_e.mat,mt],wt=[ae.mat,Q.mat,N.mat,Ge.mat,we.mat,_e.mat,mt];wt.forEach(U=>{U.uniforms.uChaos={value:0},U.vertexShader=U.vertexShader.replace("gl_Position = projectionMatrix * mvPosition;",`{
      float seed = fract(sin(dot(position, vec3(127.1, 311.7, 74.7))) * 43758.5453);
      vec3 chaosDir = normalize(vec3(seed - 0.5, (seed * 2.0 - 1.0) * 0.6, (seed * 3.0 - 1.5) * 0.4));
      float chaosStr = uChaos * (0.3 + seed * 2.0);
      mvPosition.xyz += chaosDir * chaosStr;
    }
    gl_Position = projectionMatrix * mvPosition;`)});const We={scene:G,camera:b,renderer:C,ambient:z,surface:Ge,flow:we,halo:_e,corePoints:ft,coreMat:mt,glowMesh:K,glowMat:Ce,occlusionSphere:he,ringA:ae,ringB:Q,ringC:N,stars:k,starsMat:ue,allTintMats:et,chaosMats:wt};g.current=We;function P(){if(q)return;requestAnimationFrame(P);const U=g.current;if(!U)return;const ce=performance.now()*.001,me=_.current,re=y.current,Ie=S.current,Ee=E.current,Ue=w.current,_t=x.current,Se=m1[_t]||m1.default,Fe=new xt(Se.tint),tt=new xt(Se.bg);(!U.scene.background.getHex||U.scene.background.getHex()!==tt.getHex())&&(U.scene.background=tt,U.scene.fog=new mf(Se.fog,15e-5),U.ambient.color.set(Se.ambient),U.glowMat.uniforms.uColor.value.set(Se.glow),U.occlusionSphere.material.color.set(tt),U.allTintMats.forEach(dt=>{dt.uniforms.uTint&&(dt.uniforms.uTint.value=Fe)})),U.renderer.toneMappingExposure=1.2*Ie,U.ringA.mat.uniforms.uScale.value=me,U.ringB.mat.uniforms.uScale.value=me,U.ringC.mat.uniforms.uScale.value=1+(me-1)*.5,U.ringA.points.rotation.z+=6e-4*Ee,U.ringB.points.rotation.z-=.0012*Ee,U.ringC.points.rotation.z+=.0025*Ee,U.surface.points.scale.setScalar(re),U.flow.points.scale.setScalar(re),U.corePoints.scale.setScalar(re),U.halo.points.scale.setScalar(re),U.occlusionSphere.scale.setScalar(re),U.coreMat.uniforms.uPulse.value=(1+Math.sin(ce*1.5)*.06+Math.sin(ce*5)*.02)*(1+Ue*.3*Math.sin(ce*12)),U.halo.mat.uniforms.uWave.value=ce*2.2;const ot=L.current;U.chaosMats.forEach(dt=>{dt.uniforms.uChaos.value+=(ot-dt.uniforms.uChaos.value)*.15}),U.surface.points.rotation.y+=.0015*Ee,U.flow.points.rotation.y-=.0022*Ee,U.halo.points.rotation.y+=.0012*Ee,U.glowMesh.rotation.y+=8e-4*Ee,U.stars.rotation.y+=15e-5*Ee,U.stars.rotation.x+=8e-5*Ee;const Oe=7.5-D.current*3;U.camera.position.x=Math.sin(ce*.25)*.6*(1-D.current*.7),U.camera.position.y=1+Math.cos(ce*.35)*.25*(1-D.current*.7),U.camera.position.z+=(Oe-U.camera.position.z)*.1,U.camera.lookAt(0,0,0),U.renderer.render(U.scene,U.camera)}P();function T(){if(q||!g.current)return;const{camera:U,renderer:ce}=g.current;U.aspect=R.clientWidth/R.clientHeight,U.updateProjectionMatrix(),ce.setSize(R.clientWidth,R.clientHeight)}return window.addEventListener("resize",T),()=>{q=!0,window.removeEventListener("resize",T),R.contains(C.domElement)&&R.removeChild(C.domElement),C.dispose(),G.traverse(U=>{U.geometry&&U.geometry.dispose(),U.material&&(U.material.map&&U.material.map.dispose(),U.material.dispose())}),g.current=null}},[c]),$e.jsx("div",{ref:p,className:"scene-container"})}function JA({videoRef:t,gesture:e,gestureLabel:n,confidence:r}){const o=qe.useRef(null);return qe.useEffect(()=>{const l=o.current;if(!l)return;const c=l.getContext("2d");let f;function d(){f=requestAnimationFrame(d);const p=t.current;if(!p||p.readyState<2){c.fillStyle="#0a0a14",c.fillRect(0,0,l.width,l.height),c.fillStyle="#334",c.font="11px system-ui",c.textAlign="center",c.fillText("等待摄像头...",l.width/2,l.height/2);return}c.save(),c.translate(l.width,0),c.scale(-1,1),c.drawImage(p,0,0,l.width,l.height),c.restore()}return d(),()=>cancelAnimationFrame(f)},[t]),$e.jsxs("div",{className:"camera-overlay",children:[$e.jsx("canvas",{ref:o,width:200,height:150,className:"camera-canvas"}),$e.jsxs("div",{className:`gesture-badge ${e!=="None"?"active":""}`,children:[n,r>0&&$e.jsxs("span",{className:"confidence",children:[(r*100).toFixed(0),"%"]})]})]})}const eC=[{id:"core",angle:-135,icon:"☀️",title:"能量核心",desc:"500 粒子脉冲，呼吸式明暗交替，模拟恒星内核的核聚变节律。"},{id:"surface",angle:-45,icon:"🌍",title:"球面粒子",desc:"2800 粒子构成星球主体，极地偏白、赤道偏青，jitter 抖动模拟粗糙地表。"},{id:"rings",angle:45,icon:"💫",title:"三环轨道",desc:"金·青·紫三环独立旋转，倾斜角各异。手势缩放时外层环缩半速防止出屏。"},{id:"gesture",angle:135,icon:"✋",title:"手势交互",desc:"8 种手势实时识别：握拳压缩、张开扩张、拇指调亮度、V字加速、爱你闪光。"}];function tC({visible:t}){const[e,n]=qe.useState(!1);return qe.useEffect(()=>{if(t){const r=setTimeout(()=>n(!0),400);return()=>clearTimeout(r)}else n(!1)},[t]),!t&&!e?null:$e.jsxs("div",{className:`focus-overlay ${e?"visible":""}`,children:[eC.map((r,o)=>$e.jsxs("div",{className:"focus-branch",style:{"--angle":`${r.angle}deg`,"--delay":`${.15+o*.1}s`,opacity:e?1:0},children:[$e.jsx("div",{className:"branch-line"}),$e.jsxs("div",{className:"branch-card",children:[$e.jsx("span",{className:"branch-icon",children:r.icon}),$e.jsx("h3",{className:"branch-title",children:r.title}),$e.jsx("p",{className:"branch-desc",children:r.desc})]})]},r.id)),$e.jsxs("div",{className:"focus-credit",style:{opacity:e?1:0,transitionDelay:"0.7s"},children:["Created by ",$e.jsx("span",{className:"credit-name",children:"恋"})]})]})}var Ba=typeof self<"u"?self:{};function ny(t,e){e:{for(var n=["CLOSURE_FLAGS"],r=Ba,o=0;o<n.length;o++)if((r=r[n[o]])==null){n=null;break e}n=r}return(t=n&&n[t])!=null?t:e}function go(){throw Error("Invalid UTF8")}function g1(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let Qc,mp;const nC=typeof TextDecoder<"u";let iC;const rC=typeof TextEncoder<"u";function iy(t){if(rC)t=(iC||(iC=new TextEncoder)).encode(t);else{let n=0;const r=new Uint8Array(3*t.length);for(let o=0;o<t.length;o++){var e=t.charCodeAt(o);if(e<128)r[n++]=e;else{if(e<2048)r[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&o<t.length){const l=t.charCodeAt(++o);if(l>=56320&&l<=57343){e=1024*(e-55296)+l-56320+65536,r[n++]=e>>18|240,r[n++]=e>>12&63|128,r[n++]=e>>6&63|128,r[n++]=63&e|128;continue}o--}e=65533}r[n++]=e>>12|224,r[n++]=e>>6&63|128}r[n++]=63&e|128}}t=n===r.length?r:r.subarray(0,n)}return t}function ry(t){Ba.setTimeout((()=>{throw t}),0)}var dm,sC=ny(610401301,!1),_1=ny(748402147,!0);function v1(){var t=Ba.navigator;return t&&(t=t.userAgent)?t:""}const y1=Ba.navigator;function Pf(t){return Pf[" "](t),t}dm=y1&&y1.userAgentData||null,Pf[" "]=function(){};const sy={};let Ql=null;function oC(t){const e=t.length;let n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);const r=new Uint8Array(n);let o=0;return(function(l,c){function f(p){for(;d<l.length;){const g=l.charAt(d++),_=Ql[g];if(_!=null)return _;if(!/^[\s\xa0]*$/.test(g))throw Error("Unknown base64 encoding at char: "+g)}return p}oy();let d=0;for(;;){const p=f(-1),g=f(0),_=f(64),y=f(64);if(y===64&&p===-1)break;c(p<<2|g>>4),_!=64&&(c(g<<4&240|_>>2),y!=64&&c(_<<6&192|y))}})(t,(function(l){r[o++]=l})),o!==n?r.subarray(0,o):r}function oy(){if(!Ql){Ql={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const r=t.concat(e[n].split(""));sy[n]=r;for(let o=0;o<r.length;o++){const l=r[o];Ql[l]===void 0&&(Ql[l]=o)}}}}var aC=typeof Uint8Array<"u",ay=!(!(sC&&dm&&dm.brands.length>0)&&(v1().indexOf("Trident")!=-1||v1().indexOf("MSIE")!=-1))&&typeof btoa=="function";const x1=/[-_.]/g,lC={"-":"+",_:"/",".":"="};function uC(t){return lC[t]||""}function ly(t){if(!ay)return oC(t);t=x1.test(t)?t.replace(x1,uC):t,t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function Vm(t){return aC&&t!=null&&t instanceof Uint8Array}var za={};function Io(){return cC||(cC=new br(null,za))}function Hm(t){uy(za);var e=t.g;return(e=e==null||Vm(e)?e:typeof e=="string"?ly(e):null)==null?e:t.g=e}var br=class{h(){return new Uint8Array(Hm(this)||0)}constructor(t,e){if(uy(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};let cC,fC;function uy(t){if(t!==za)throw Error("illegal external caller")}function cy(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function hm(t){return cy(t=Error(t),"warning"),t}function Va(t,e){if(t!=null){var n=fC??(fC={}),r=n[t]||0;r>=e||(n[t]=r+1,cy(t=Error(),"incident"),ry(t))}}function Ja(){return typeof BigInt=="function"}var el=typeof Symbol=="function"&&typeof Symbol()=="symbol";function Lr(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var dC=Lr("jas",void 0,!0),S1=Lr(void 0,"0di"),ql=Lr(void 0,"1oa"),Ai=Lr(void 0,Symbol()),hC=Lr(void 0,"0ub"),pC=Lr(void 0,"0ubs"),pm=Lr(void 0,"0ubsb"),mC=Lr(void 0,"0actk"),Ha=Lr("m_m","Pa",!0),M1=Lr();const fy={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},dy=Object.defineProperties,Ze=el?dC:"Ga";var Fo;const E1=[];function pu(t,e){el||Ze in t||dy(t,fy),t[Ze]|=e}function Rn(t,e){el||Ze in t||dy(t,fy),t[Ze]=e}function mu(t){return pu(t,34),t}function ru(t){return pu(t,8192),t}Rn(E1,7),Fo=Object.freeze(E1);var Ga={};function bi(t,e){return e===void 0?t.h!==No&&!!(2&(0|t.v[Ze])):!!(2&e)&&t.h!==No}const No={};function Gm(t,e){if(t!=null){if(typeof t=="string")t=t?new br(t,za):Io();else if(t.constructor!==br)if(Vm(t))t=t.length?new br(new Uint8Array(t),za):Io();else{if(!e)throw Error();t=void 0}}return t}class T1{constructor(e,n,r){this.g=e,this.h=n,this.l=r}next(){const e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}}var gC=Object.freeze({});function hy(t,e,n){const r=128&e?0:-1,o=t.length;var l;(l=!!o)&&(l=(l=t[o-1])!=null&&typeof l=="object"&&l.constructor===Object);const c=o+(l?-1:0);for(e=128&e?1:0;e<c;e++)n(e-r,t[e]);if(l){t=t[o-1];for(const f in t)!isNaN(f)&&n(+f,t[f])}}var py={};function tl(t){return 128&t?py:void 0}function Lf(t){return t.Na=!0,t}var _C=Lf((t=>typeof t=="number")),w1=Lf((t=>typeof t=="string")),vC=Lf((t=>typeof t=="boolean")),Df=typeof Ba.BigInt=="function"&&typeof Ba.BigInt(0)=="bigint";function Ci(t){var e=t;if(w1(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(_C(e)&&!Number.isSafeInteger(e))throw Error(String(e));return Df?BigInt(t):t=vC(t)?t?"1":"0":w1(t)?t.trim()||"0":String(t)}var mm=Lf((t=>Df?t>=xC&&t<=MC:t[0]==="-"?A1(t,yC):A1(t,SC)));const yC=Number.MIN_SAFE_INTEGER.toString(),xC=Df?BigInt(Number.MIN_SAFE_INTEGER):void 0,SC=Number.MAX_SAFE_INTEGER.toString(),MC=Df?BigInt(Number.MAX_SAFE_INTEGER):void 0;function A1(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){const r=t[n],o=e[n];if(r>o)return!1;if(r<o)return!0}}const EC=typeof Uint8Array.prototype.slice=="function";let TC,en=0,mn=0;function C1(t){const e=t>>>0;en=e,mn=(t-e)/4294967296>>>0}function Wa(t){if(t<0){C1(-t);const[e,n]=jm(en,mn);en=e>>>0,mn=n>>>0}else C1(t)}function Wm(t){const e=TC||(TC=new DataView(new ArrayBuffer(8)));e.setFloat32(0,+t,!0),mn=0,en=e.getUint32(0,!0)}function my(t,e){const n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:su(t,e)}function wC(t,e){return Ci(Ja()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(t>>>0)):su(t,e))}function gy(t,e){return Ja()?Ci(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(t)))):Ci(Xm(t,e))}function su(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else Ja()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+R1(n)+R1(t));return n}function R1(t){return t=String(t),"0000000".slice(t.length)+t}function Xm(t,e){if(2147483648&e)if(Ja())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,r]=jm(t,e);t="-"+su(n,r)}else t=su(t,e);return t}function If(t){if(t.length<16)Wa(Number(t));else if(Ja())t=BigInt(t),en=Number(t&BigInt(4294967295))>>>0,mn=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");mn=en=0;const n=t.length;for(let r=e,o=(n-e)%6+e;o<=n;r=o,o+=6){const l=Number(t.slice(r,o));mn*=1e6,en=1e6*en+l,en>=4294967296&&(mn+=Math.trunc(en/4294967296),mn>>>=0,en>>>=0)}if(e){const[r,o]=jm(en,mn);en=r,mn=o}}}function jm(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function hr(t){return Array.prototype.slice.call(t)}const gu=typeof BigInt=="function"?BigInt.asIntN:void 0,AC=typeof BigInt=="function"?BigInt.asUintN:void 0,Uo=Number.isSafeInteger,Nf=Number.isFinite,Xa=Math.trunc,CC=Ci(0);function Jl(t){if(t!=null&&typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);return t}function Cr(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function ou(t){if(t!=null&&typeof t!="boolean"){var e=typeof t;throw Error(`Expected boolean but got ${e!="object"?e:t?Array.isArray(t)?"array":e:"null"}: ${t}`)}return t}function _y(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}const RC=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function _u(t){switch(typeof t){case"bigint":return!0;case"number":return Nf(t);case"string":return RC.test(t);default:return!1}}function nl(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Nf(t)?0|t:void 0}function vy(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Nf(t)?t>>>0:void 0}function yy(t){const e=t.length;return(t[0]==="-"?e<20||e===20&&t<="-9223372036854775808":e<19||e===19&&t<="9223372036854775807")?t:(If(t),Xm(en,mn))}function Ym(t){if(t=Xa(t),!Uo(t)){Wa(t);var e=en,n=mn;(t=2147483648&n)&&(n=~n>>>0,(e=1+~e>>>0)==0&&(n=n+1>>>0)),t=typeof(e=my(e,n))=="number"?t?-e:e:t?"-"+e:e}return t}function xy(t){var e=Xa(Number(t));return Uo(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),yy(t))}function Sy(t){var e=Xa(Number(t));return Uo(e)?Ci(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Ja()?Ci(gu(64,BigInt(t))):Ci(yy(t)))}function My(t){return Uo(t)?t=Ci(Ym(t)):(t=Xa(t),Uo(t)?t=String(t):(Wa(t),t=Xm(en,mn)),t=Ci(t)),t}function vf(t){const e=typeof t;return t==null?t:e==="bigint"?Ci(gu(64,t)):_u(t)?e==="string"?Sy(t):My(t):void 0}function Ey(t){if(typeof t!="string")throw Error();return t}function vu(t){if(t!=null&&typeof t!="string")throw Error();return t}function kn(t){return t==null||typeof t=="string"?t:void 0}function qm(t,e,n,r){return t!=null&&t[Ha]===Ga?t:Array.isArray(t)?((r=(n=0|t[Ze])|32&r|2&r)!==n&&Rn(t,r),new e(t)):(n?2&r?((t=e[S1])||(mu((t=new e).v),t=e[S1]=t),e=t):e=new e:e=void 0,e)}function bC(t,e,n){if(e)e:{if(!_u(e=t))throw hm("int64");switch(typeof e){case"string":e=Sy(e);break e;case"bigint":e=Ci(gu(64,e));break e;default:e=My(e)}}else e=vf(t);return(t=e)==null?n?CC:void 0:t}const PC={};let LC=(function(){try{return Pf(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class gp{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const DC=LC?(Object.setPrototypeOf(gp.prototype,Map.prototype),Object.defineProperties(gp.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),gp):class extends Map{constructor(){super()}};function b1(t){return t}function _p(t){if(2&t.J)throw Error("Cannot mutate an immutable Map")}var os=class extends DC{constructor(t,e,n=b1,r=b1){super(),this.J=0|t[Ze],this.K=e,this.S=n,this.fa=this.K?IC:r;for(let o=0;o<t.length;o++){const l=t[o],c=n(l[0],!1,!0);let f=l[1];e?f===void 0&&(f=null):f=r(l[1],!1,!0,void 0,void 0,this.J),super.set(c,f)}}V(t){return ru(Array.from(super.entries(),t))}clear(){_p(this),super.clear()}delete(t){return _p(this),super.delete(this.S(t,!0,!1))}entries(){if(this.K){var t=super.keys();t=new T1(t,NC,this)}else t=super.entries();return t}values(){if(this.K){var t=super.keys();t=new T1(t,os.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.K?super.forEach(((n,r,o)=>{t.call(e,o.get(r),r,o)})):super.forEach(t,e)}set(t,e){return _p(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.fa(e,!0,!0,this.K,!1,this.J))}Ma(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.K?t===void 0?null:t:this.fa(t,!1,!0,void 0,!1,this.J),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.K;return n?((n=this.fa(e,!1,!0,n,this.ra,this.J))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function IC(t,e,n,r,o,l){return t=qm(t,r,n,l),o&&(t=Km(t)),t}function NC(t){return[t,this.get(t)]}let UC;function P1(){return UC||(UC=new os(mu([]),void 0,void 0,void 0,PC))}function Uf(t){return Ai?t[Ai]:void 0}function yf(t,e){for(const n in t)!isNaN(n)&&e(t,+n,t[n])}os.prototype.toJSON=void 0;var gm=class{};const FC={Ka:!0};function OC(t,e){e<100||Va(pC,1)}function Ff(t,e,n,r){const o=r!==void 0;r=!!r;var l,c=Ai;!o&&el&&c&&(l=t[c])&&yf(l,OC),c=[];var f=t.length;let d;l=4294967295;let p=!1;const g=!!(64&e),_=g?128&e?0:-1:void 0;1&e||(d=f&&t[f-1],d!=null&&typeof d=="object"&&d.constructor===Object?l=--f:d=void 0,!g||128&e||o||(p=!0,l=l-_+_)),e=void 0;for(var y=0;y<f;y++){let S=t[y];if(S!=null&&(S=n(S,r))!=null)if(g&&y>=l){const E=y-_;(e??(e={}))[E]=S}else c[y]=S}if(d)for(let S in d){if((f=d[S])==null||(f=n(f,r))==null)continue;let E;y=+S,g&&!Number.isNaN(y)&&(E=y+_)<l?c[E]=f:(e??(e={}))[S]=f}return e&&(p?c.push(e):c[l]=e),o&&Ai&&(t=Uf(t))&&t instanceof gm&&(c[Ai]=(function(S){const E=new gm;return yf(S,((w,x,v)=>{E[x]=hr(v)})),E.da=S.da,E})(t)),c}function kC(t){return t[0]=au(t[0]),t[1]=au(t[1]),t}function au(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return mm(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Array.isArray(t)){var e=0|t[Ze];return t.length===0&&1&e?void 0:Ff(t,e,au)}if(t!=null&&t[Ha]===Ga)return Ty(t);if(t instanceof br){if((e=t.g)==null)t="";else if(typeof e=="string")t=e;else{if(ay){for(var n="",r=0,o=e.length-10240;r<o;)n+=String.fromCharCode.apply(null,e.subarray(r,r+=10240));n+=String.fromCharCode.apply(null,r?e.subarray(r):e),e=btoa(n)}else{n===void 0&&(n=0),oy(),n=sy[n],r=Array(Math.floor(e.length/3)),o=n[64]||"";let p=0,g=0;for(;p<e.length-2;p+=3){var l=e[p],c=e[p+1],f=e[p+2],d=n[l>>2];l=n[(3&l)<<4|c>>4],c=n[(15&c)<<2|f>>6],f=n[63&f],r[g++]=d+l+c+f}switch(d=0,f=o,e.length-p){case 2:f=n[(15&(d=e[p+1]))<<2]||o;case 1:e=e[p],r[g]=n[e>>2]+n[(3&e)<<4|d>>4]+f+o}e=r.join("")}t=t.g=e}return t}return t instanceof os?t=t.size!==0?t.V(kC):void 0:void 0}return t}let BC,zC;function Ty(t){return Ff(t=t.v,0|t[Ze],au)}function Ao(t,e){return wy(t,e[0],e[1])}function wy(t,e,n,r=0){if(t==null){var o=32;n?(t=[n],o|=128):t=[],e&&(o=-16760833&o|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(o=0|t[Ze],_1&&1&o)throw Error("rfarr");if(2048&o&&!(2&o)&&(function(){if(_1)throw Error("carr");Va(mC,5)})(),256&o)throw Error("farr");if(64&o)return(o|r)!==o&&Rn(t,o|r),t;if(n&&(o|=128,n!==t[0]))throw Error("mid");e:{o|=64;var l=(n=t).length;if(l){var c=l-1;const d=n[c];if(d!=null&&typeof d=="object"&&d.constructor===Object){if((c-=e=128&o?0:-1)>=1024)throw Error("pvtlmt");for(var f in d)(l=+f)<c&&(n[l+e]=d[f],delete d[f]);o=-16760833&o|(1023&c)<<14;break e}}if(e){if((f=Math.max(e,l-(128&o?0:-1)))>1024)throw Error("spvt");o=-16760833&o|(1023&f)<<14}}}return Rn(t,64|o|r),t}function VC(t,e){if(typeof t!="object")return t;if(Array.isArray(t)){var n=0|t[Ze];return t.length===0&&1&n?void 0:L1(t,n,e)}if(t!=null&&t[Ha]===Ga)return D1(t);if(t instanceof os){if(2&(e=t.J))return t;if(!t.size)return;if(n=mu(t.V()),t.K)for(t=0;t<n.length;t++){const r=n[t];let o=r[1];o=o==null||typeof o!="object"?void 0:o!=null&&o[Ha]===Ga?D1(o):Array.isArray(o)?L1(o,0|o[Ze],!!(32&e)):void 0,r[1]=o}return n}return t instanceof br?t:void 0}function L1(t,e,n){return 2&e||(!n||4096&e||16&e?t=il(t,e,!1,n&&!(16&e)):(pu(t,34),4&e&&Object.freeze(t))),t}function $m(t,e,n){return t=new t.constructor(e),n&&(t.h=No),t.m=No,t}function D1(t){const e=t.v,n=0|e[Ze];return bi(t,n)?t:Zm(t,e,n)?$m(t,e):il(e,n)}function il(t,e,n,r){return r??(r=!!(34&e)),t=Ff(t,e,VC,r),r=32,n&&(r|=2),Rn(t,e=16769217&e|r),t}function Km(t){const e=t.v,n=0|e[Ze];return bi(t,n)?Zm(t,e,n)?$m(t,e,!0):new t.constructor(il(e,n,!1)):t}function rl(t){if(t.h!==No)return!1;var e=t.v;return pu(e=il(e,0|e[Ze]),2048),t.v=e,t.h=void 0,t.m=void 0,!0}function sl(t){if(!rl(t)&&bi(t,0|t.v[Ze]))throw Error()}function Oo(t,e){e===void 0&&(e=0|t[Ze]),32&e&&!(4096&e)&&Rn(t,4096|e)}function Zm(t,e,n){return!!(2&n)||!(!(32&n)||4096&n)&&(Rn(e,2|n),t.h=No,!0)}const Ay=Ci(0),Os={};function tn(t,e,n,r,o){if((e=as(t.v,e,n,o))!==null||r&&t.m!==No)return e}function as(t,e,n,r){if(e===-1)return null;const o=e+(n?0:-1),l=t.length-1;let c,f;if(!(l<1+(n?0:-1))){if(o>=l)if(c=t[l],c!=null&&typeof c=="object"&&c.constructor===Object)n=c[e],f=!0;else{if(o!==l)return;n=c}else n=t[o];if(r&&n!=null){if((r=r(n))==null)return r;if(!Object.is(r,n))return f?c[e]=r:t[o]=r,r}return n}}function Vt(t,e,n,r){sl(t),Tn(t=t.v,0|t[Ze],e,n,r)}function Tn(t,e,n,r,o){const l=n+(o?0:-1);var c=t.length-1;if(c>=1+(o?0:-1)&&l>=c){const f=t[c];if(f!=null&&typeof f=="object"&&f.constructor===Object)return f[n]=r,e}return l<=c?(t[l]=r,e):(r!==void 0&&(n>=(c=(e??(e=0|t[Ze]))>>14&1023||536870912)?r!=null&&(t[c+(o?0:-1)]={[n]:r}):t[l]=r),e)}function Eo(){return gC===void 0?2:4}function To(t,e,n,r,o){let l=t.v,c=0|l[Ze];r=bi(t,c)?1:r,o=!!o||r===3,r===2&&rl(t)&&(l=t.v,c=0|l[Ze]);let f=(t=Qm(l,e))===Fo?7:0|t[Ze],d=Jm(f,c);var p=!(4&d);if(p){4&d&&(t=hr(t),f=0,d=Ro(d,c),c=Tn(l,c,e,t));let g=0,_=0;for(;g<t.length;g++){const y=n(t[g]);y!=null&&(t[_++]=y)}_<g&&(t.length=_),n=-513&(4|d),d=n&=-1025,d&=-4097}return d!==f&&(Rn(t,d),2&d&&Object.freeze(t)),Cy(t,d,l,c,e,r,p,o)}function Cy(t,e,n,r,o,l,c,f){let d=e;return l===1||l===4&&(2&e||!(16&e)&&32&r)?Co(e)||((e|=!t.length||c&&!(4096&e)||32&r&&!(4096&e||16&e)?2:256)!==d&&Rn(t,e),Object.freeze(t)):(l===2&&Co(e)&&(t=hr(t),d=0,e=Ro(e,r),r=Tn(n,r,o,t)),Co(e)||(f||(e|=16),e!==d&&Rn(t,e))),2&e||!(4096&e||16&e)||Oo(n,r),t}function Qm(t,e,n){return t=as(t,e,n),Array.isArray(t)?t:Fo}function Jm(t,e){return 2&e&&(t|=2),1|t}function Co(t){return!!(2&t)&&!!(4&t)||!!(256&t)}function Ry(t){return Gm(t,!0)}function by(t){t=hr(t);for(let e=0;e<t.length;e++){const n=t[e]=hr(t[e]);Array.isArray(n[1])&&(n[1]=mu(n[1]))}return ru(t)}function Bs(t,e,n,r){sl(t),Tn(t=t.v,0|t[Ze],e,(r==="0"?Number(n)===0:n===r)?void 0:n)}function ol(t,e,n){if(2&e)throw Error();const r=tl(e);let o=Qm(t,n,r),l=o===Fo?7:0|o[Ze],c=Jm(l,e);return(2&c||Co(c)||16&c)&&(c===l||Co(c)||Rn(o,c),o=hr(o),l=0,c=Ro(c,e),Tn(t,e,n,o,r)),c&=-13,c!==l&&Rn(o,c),o}function vp(t,e){var n=xx;return tg(eg(t=t.v),t,void 0,n)===e?e:-1}function eg(t){if(el)return t[ql]??(t[ql]=new Map);if(ql in t)return t[ql];const e=new Map;return Object.defineProperty(t,ql,{value:e}),e}function Py(t,e,n,r,o){const l=eg(t),c=tg(l,t,e,n,o);return c!==r&&(c&&(e=Tn(t,e,c,void 0,o)),l.set(n,r)),e}function tg(t,e,n,r,o){let l=t.get(r);if(l!=null)return l;l=0;for(let c=0;c<r.length;c++){const f=r[c];as(e,f,o)!=null&&(l!==0&&(n=Tn(e,n,l,void 0,o)),l=f)}return t.set(r,l),l}function ng(t,e,n){let r=0|t[Ze];const o=tl(r),l=as(t,n,o);let c;if(l!=null&&l[Ha]===Ga){if(!bi(l))return rl(l),l.v;c=l.v}else Array.isArray(l)&&(c=l);if(c){const f=0|c[Ze];2&f&&(c=il(c,f))}return c=Ao(c,e),c!==l&&Tn(t,r,n,c,o),c}function Ly(t,e,n,r,o){let l=!1;if((r=as(t,r,o,(c=>{const f=qm(c,n,!1,e);return l=f!==c&&f!=null,f})))!=null)return l&&!bi(r)&&Oo(t,e),r}function Nt(t,e,n,r){let o=t.v,l=0|o[Ze];if((e=Ly(o,l,e,n,r))==null)return e;if(l=0|o[Ze],!bi(t,l)){const c=Km(e);c!==e&&(rl(t)&&(o=t.v,l=0|o[Ze]),l=Tn(o,l,n,e=c,r),Oo(o,l))}return e}function Dy(t,e,n,r,o,l,c,f){var d=bi(t,n);l=d?1:l,c=!!c||l===3,d=f&&!d,(l===2||d)&&rl(t)&&(n=0|(e=t.v)[Ze]);var p=(t=Qm(e,o))===Fo?7:0|t[Ze],g=Jm(p,n);if(f=!(4&g)){var _=t,y=n;const S=!!(2&g);S&&(y|=2);let E=!S,w=!0,x=0,v=0;for(;x<_.length;x++){const D=qm(_[x],r,!1,y);if(D instanceof r){if(!S){const L=bi(D);E&&(E=!L),w&&(w=L)}_[v++]=D}}v<x&&(_.length=v),g|=4,g=w?-4097&g:4096|g,g=E?8|g:-9&g}if(g!==p&&(Rn(t,g),2&g&&Object.freeze(t)),d&&!(8&g||!t.length&&(l===1||l===4&&(2&g||!(16&g)&&32&n)))){for(Co(g)&&(t=hr(t),g=Ro(g,n),n=Tn(e,n,o,t)),r=t,d=g,p=0;p<r.length;p++)(_=r[p])!==(g=Km(_))&&(r[p]=g);d|=8,Rn(t,g=d=r.length?4096|d:-4097&d)}return Cy(t,g,e,n,o,l,f,c)}function ls(t,e,n){const r=t.v;return Dy(t,r,0|r[Ze],e,n,Eo(),!1,!0)}function Iy(t){return t==null&&(t=void 0),t}function st(t,e,n,r,o){return Vt(t,n,r=Iy(r),o),r&&!bi(r)&&Oo(t.v),t}function eu(t,e,n,r){e:{var o=r=Iy(r);sl(t);const l=t.v;let c=0|l[Ze];if(o==null){const f=eg(l);if(tg(f,l,c,n)!==e)break e;f.set(n,0)}else c=Py(l,c,n,e);Tn(l,c,e,o)}r&&!bi(r)&&Oo(t.v)}function Ro(t,e){return-273&(2&e?2|t:-3&t)}function ig(t,e,n,r){var o=r;sl(t),t=Dy(t,r=t.v,0|r[Ze],n,e,2,!0),o=o??new n,t.push(o),e=n=t===Fo?7:0|t[Ze],(o=bi(o))?(n&=-9,t.length===1&&(n&=-4097)):n|=4096,n!==e&&Rn(t,n),o||Oo(r)}function qi(t,e,n){return nl(tn(t,e,void 0,n))}function dn(t,e){return tn(t,e,void 0,void 0,Cr)??0}function us(t,e,n){if(n!=null){if(typeof n!="number"||!Nf(n))throw hm("int32");n|=0}Vt(t,e,n)}function nt(t,e,n){Vt(t,e,Jl(n))}function Pi(t,e,n){Bs(t,e,vu(n),"")}function xf(t,e,n){{sl(t);const c=t.v;let f=0|c[Ze];if(n==null)Tn(c,f,e);else{var r=t=n===Fo?7:0|n[Ze],o=Co(t),l=o||Object.isFrozen(n);for(o||(t=0),l||(n=hr(n),r=0,t=Ro(t,f),l=!1),t|=5,t|=(4&t?512&t?512:1024&t?1024:0:void 0)??1024,o=0;o<n.length;o++){const d=n[o],p=Ey(d);Object.is(d,p)||(l&&(n=hr(n),r=0,t=Ro(t,f),l=!1),n[o]=p)}t!==r&&(l&&(n=hr(n),t=Ro(t,f)),Rn(n,t)),Tn(c,f,e,n)}}}function Of(t,e,n){sl(t),To(t,e,kn,2,!0).push(Ey(n))}var Ea=class{constructor(t,e,n){if(this.buffer=t,n&&!e)throw Error();this.g=e}};function rg(t,e){if(typeof t=="string")return new Ea(ly(t),e);if(Array.isArray(t))return new Ea(new Uint8Array(t),e);if(t.constructor===Uint8Array)return new Ea(t,!1);if(t.constructor===ArrayBuffer)return t=new Uint8Array(t),new Ea(t,!1);if(t.constructor===br)return e=Hm(t)||new Uint8Array(0),new Ea(e,!0,t);if(t instanceof Uint8Array)return t=t.constructor===Uint8Array?t:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new Ea(t,!1);throw Error()}function sg(t,e){let n,r=0,o=0,l=0;const c=t.h;let f=t.g;do n=c[f++],r|=(127&n)<<l,l+=7;while(l<32&&128&n);if(l>32)for(o|=(127&n)>>4,l=3;l<32&&128&n;l+=7)n=c[f++],o|=(127&n)<<l;if(bo(t,f),!(128&n))return e(r>>>0,o>>>0);throw Error()}function og(t){let e=0,n=t.g;const r=n+10,o=t.h;for(;n<r;){const l=o[n++];if(e|=l,(128&l)==0)return bo(t,n),!!(127&e)}throw Error()}function js(t){const e=t.h;let n=t.g,r=e[n++],o=127&r;if(128&r&&(r=e[n++],o|=(127&r)<<7,128&r&&(r=e[n++],o|=(127&r)<<14,128&r&&(r=e[n++],o|=(127&r)<<21,128&r&&(r=e[n++],o|=r<<28,128&r&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Error();return bo(t,n),o}function Pr(t){return js(t)>>>0}function Sf(t){var e=t.h;const n=t.g;var r=e[n],o=e[n+1];const l=e[n+2];return e=e[n+3],bo(t,t.g+4),t=2*((o=(r<<0|o<<8|l<<16|e<<24)>>>0)>>31)+1,r=o>>>23&255,o&=8388607,r==255?o?NaN:t*(1/0):r==0?1401298464324817e-60*t*o:t*Math.pow(2,r-150)*(o+8388608)}function HC(t){return js(t)}function bo(t,e){if(t.g=e,e>t.l)throw Error()}function Ny(t,e){if(e<0)throw Error();const n=t.g;if((e=n+e)>t.l)throw Error();return t.g=e,n}function Uy(t,e){if(e==0)return Io();var n=Ny(t,e);return t.Y&&t.j?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):EC?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?Io():new br(n,za)}var I1=[];function Fy(t,e,n,r){if(Mf.length){const o=Mf.pop();return o.o(r),o.g.init(t,e,n,r),o}return new GC(t,e,n,r)}function Oy(t){t.g.clear(),t.l=-1,t.h=-1,Mf.length<100&&Mf.push(t)}function ky(t){var e=t.g;if(e.g==e.l)return!1;t.m=t.g.g;var n=Pr(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5)||e<1)throw Error();return t.l=e,t.h=n,!0}function ff(t){switch(t.h){case 0:t.h!=0?ff(t):og(t.g);break;case 1:bo(t=t.g,t.g+8);break;case 2:if(t.h!=2)ff(t);else{var e=Pr(t.g);bo(t=t.g,t.g+e)}break;case 5:bo(t=t.g,t.g+4);break;case 3:for(e=t.l;;){if(!ky(t))throw Error();if(t.h==4){if(t.l!=e)throw Error();break}ff(t)}break;default:throw Error()}}function yu(t,e,n){const r=t.g.l;var o=Pr(t.g);let l=(o=t.g.g+o)-r;if(l<=0&&(t.g.l=o,n(e,t,void 0,void 0,void 0),l=o-t.g.g),l)throw Error();return t.g.g=o,t.g.l=r,e}function ag(t){var e=Pr(t.g),n=Ny(t=t.g,e);if(t=t.h,nC){var r,o=t;(r=mp)||(r=mp=new TextDecoder("utf-8",{fatal:!0})),e=n+e,o=n===0&&e===o.length?o:o.subarray(n,e);try{var l=r.decode(o)}catch(f){if(Qc===void 0){try{r.decode(new Uint8Array([128]))}catch{}try{r.decode(new Uint8Array([97])),Qc=!0}catch{Qc=!1}}throw!Qc&&(mp=void 0),f}}else{e=(l=n)+e,n=[];let f,d=null;for(;l<e;){var c=t[l++];c<128?n.push(c):c<224?l>=e?go():(f=t[l++],c<194||(192&f)!=128?(l--,go()):n.push((31&c)<<6|63&f)):c<240?l>=e-1?go():(f=t[l++],(192&f)!=128||c===224&&f<160||c===237&&f>=160||(192&(r=t[l++]))!=128?(l--,go()):n.push((15&c)<<12|(63&f)<<6|63&r)):c<=244?l>=e-2?go():(f=t[l++],(192&f)!=128||f-144+(c<<28)>>30!=0||(192&(r=t[l++]))!=128||(192&(o=t[l++]))!=128?(l--,go()):(c=(7&c)<<18|(63&f)<<12|(63&r)<<6|63&o,c-=65536,n.push(55296+(c>>10&1023),56320+(1023&c)))):go(),n.length>=8192&&(d=g1(d,n),n.length=0)}l=g1(d,n)}return l}function By(t){const e=Pr(t.g);return Uy(t.g,e)}function kf(t,e,n){var r=Pr(t.g);for(r=t.g.g+r;t.g.g<r;)n.push(e(t.g))}var GC=class{constructor(t,e,n,r){if(I1.length){const o=I1.pop();o.init(t,e,n,r),t=o}else t=new class{constructor(o,l,c,f){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(o,l,c,f)}init(o,l,c,{Y:f=!1,ea:d=!1}={}){this.Y=f,this.ea=d,o&&(o=rg(o,this.ea),this.h=o.buffer,this.j=o.g,this.m=l||0,this.l=c!==void 0?this.m+c:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(t,e,n,r);this.g=t,this.m=this.g.g,this.h=this.l=-1,this.o(r)}o({ha:t=!1}={}){this.ha=t}},Mf=[];function N1(t){return t?/^\d+$/.test(t)?(If(t),new _m(en,mn)):null:WC||(WC=new _m(0,0))}var _m=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let WC;function U1(t){return t?/^-?\d+$/.test(t)?(If(t),new vm(en,mn)):null:XC||(XC=new vm(0,0))}var vm=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let XC;function La(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function al(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function Bf(t,e){if(e>=0)al(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function lg(t){var e=en;t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function ja(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function Ki(t,e,n){al(t.g,8*e+n)}function ug(t,e){return Ki(t,e,2),e=t.g.end(),ja(t,e),e.push(t.h),e}function cg(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function zf(t,e,n){Ki(t,e,2),al(t.g,n.length),ja(t,t.g.end()),ja(t,n)}function Ef(t,e,n,r){n!=null&&(e=ug(t,e),r(n,t),cg(t,e))}function Dr(){const t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var fg=Dr(),zy=Dr(),dg=Dr(),hg=Dr(),pg=Dr(),Vy=Dr(),jC=Dr(),Vf=Dr(),Hy=Dr(),Gy=Dr();function Ir(t,e,n){var r=t.v;Ai&&Ai in r&&(r=r[Ai])&&delete r[e.g],e.h?e.j(t,e.h,e.g,n,e.l):e.j(t,e.g,n,e.l)}var Qe=class{constructor(t,e){this.v=wy(t,e,void 0,2048)}toJSON(){return Ty(this)}j(){var o;var t=CR,e=this.v,n=t.g,r=Ai;if(el&&r&&((o=e[r])==null?void 0:o[n])!=null&&Va(hC,3),e=t.g,M1&&Ai&&M1===void 0&&(r=(n=this.v)[Ai])&&(r=r.da))try{r(n,e,FC)}catch(l){ry(l)}return t.h?t.m(this,t.h,t.g,t.l):t.m(this,t.g,t.defaultValue,t.l)}clone(){const t=this.v,e=0|t[Ze];return Zm(this,t,e)?$m(this,t,!0):new this.constructor(il(t,e,!1))}};Qe.prototype[Ha]=Ga,Qe.prototype.toString=function(){return this.v.toString()};var ll=class{constructor(t,e,n){this.g=t,this.h=e,t=fg,this.l=!!t&&n===t||!1}};function Hf(t,e){return new ll(t,e,fg)}function Wy(t,e,n,r,o){Ef(t,n,qy(e,r),o)}const YC=Hf((function(t,e,n,r,o){return t.h===2&&(yu(t,ng(e,r,n),o),!0)}),Wy),qC=Hf((function(t,e,n,r,o){return t.h===2&&(yu(t,ng(e,r,n),o),!0)}),Wy);var Gf=Symbol(),Wf=Symbol(),ym=Symbol(),F1=Symbol(),O1=Symbol();let Xy,jy;function ko(t,e,n,r){var o=r[t];if(o)return o;(o={}).qa=r,o.T=(function(_){switch(typeof _){case"boolean":return BC||(BC=[0,void 0,!0]);case"number":return _>0?void 0:_===0?zC||(zC=[0,void 0]):[-_,void 0];case"string":return[0,_];case"object":return _}})(r[0]);var l=r[1];let c=1;l&&l.constructor===Object&&(o.ba=l,typeof(l=r[++c])=="function"&&(o.ma=!0,Xy??(Xy=l),jy??(jy=r[c+1]),l=r[c+=2]));const f={};for(;l&&Array.isArray(l)&&l.length&&typeof l[0]=="number"&&l[0]>0;){for(var d=0;d<l.length;d++)f[l[d]]=l;l=r[++c]}for(d=1;l!==void 0;){let _;typeof l=="number"&&(d+=l,l=r[++c]);var p=void 0;if(l instanceof ll?_=l:(_=YC,c--),_==null?void 0:_.l){l=r[++c],p=r;var g=c;typeof l=="function"&&(l=l(),p[g]=l),p=l}for(g=d+1,typeof(l=r[++c])=="number"&&l<0&&(g-=l,l=r[++c]);d<g;d++){const y=f[d];p?n(o,d,_,p,y):e(o,d,_,y)}}return r[t]=o}function Yy(t){return Array.isArray(t)?t[0]instanceof ll?t:[qC,t]:[t,void 0]}function qy(t,e){return t instanceof Qe?t.v:Array.isArray(t)?Ao(t,e):void 0}function mg(t,e,n,r){const o=n.g;t[e]=r?(l,c,f)=>o(l,c,f,r):o}function gg(t,e,n,r,o){const l=n.g;let c,f;t[e]=(d,p,g)=>l(d,p,g,f||(f=ko(Wf,mg,gg,r).T),c||(c=_g(r)),o)}function _g(t){let e=t[ym];if(e!=null)return e;const n=ko(Wf,mg,gg,t);return e=n.ma?(r,o)=>Xy(r,o,n):(r,o)=>{for(;ky(o)&&o.h!=4;){var l=o.l,c=n[l];if(c==null){var f=n.ba;f&&(f=f[l])&&(f=KC(f))!=null&&(c=n[l]=f)}if(c==null||!c(o,r,l)){if(c=(f=o).m,ff(f),f.ha)var d=void 0;else d=f.g.g-c,f.g.g=c,d=Uy(f.g,d);c=void 0,f=r,d&&((c=f[Ai]??(f[Ai]=new gm))[l]??(c[l]=[])).push(d)}}return(r=Uf(r))&&(r.da=n.qa[O1]),!0},t[ym]=e,t[O1]=$C.bind(t),e}function $C(t,e,n,r){var o=this[Wf];const l=this[ym],c=Ao(void 0,o.T),f=Uf(t);if(f){var d=!1,p=o.ba;if(p){if(o=(g,_,y)=>{if(y.length!==0)if(p[_])for(const S of y){g=Fy(S);try{d=!0,l(c,g)}finally{Oy(g)}}else r==null||r(t,_,y)},e==null)yf(f,o);else if(f!=null){const g=f[e];g&&o(f,e,g)}if(d){let g=0|t[Ze];if(2&g&&2048&g&&!(n!=null&&n.Ka))throw Error();const _=tl(g),y=(S,E)=>{if(as(t,S,_)!=null){if((n==null?void 0:n.Qa)===1)return;throw Error()}E!=null&&(g=Tn(t,g,S,E,_)),delete f[S]};e==null?hy(c,0|c[Ze],((S,E)=>{y(S,E)})):y(e,as(c,e,_))}}}}function KC(t){const e=(t=Yy(t))[0].g;if(t=t[1]){const n=_g(t),r=ko(Wf,mg,gg,t).T;return(o,l,c)=>e(o,l,c,r,n)}return e}function Xf(t,e,n){t[e]=n.h}function jf(t,e,n,r){let o,l;const c=n.h;t[e]=(f,d,p)=>c(f,d,p,l||(l=ko(Gf,Xf,jf,r).T),o||(o=$y(r)))}function $y(t){let e=t[F1];if(!e){const n=ko(Gf,Xf,jf,t);e=(r,o)=>Ky(r,o,n),t[F1]=e}return e}function Ky(t,e,n){hy(t,0|t[Ze],((r,o)=>{if(o!=null){var l=(function(c,f){var d=c[f];if(d)return d;if((d=c.ba)&&(d=d[f])){var p=(d=Yy(d))[0].h;if(d=d[1]){const g=$y(d),_=ko(Gf,Xf,jf,d).T;d=c.ma?jy(_,g):(y,S,E)=>p(y,S,E,_,g)}else d=p;return c[f]=d}})(n,r);l?l(e,o,r):r<500||Va(pm,3)}})),(t=Uf(t))&&yf(t,((r,o,l)=>{for(ja(e,e.g.end()),r=0;r<l.length;r++)ja(e,Hm(l[r])||new Uint8Array(0))}))}const ZC=Ci(0);function ul(t,e){if(Array.isArray(e)){var n=0|e[Ze];if(4&n)return e;for(var r=0,o=0;r<e.length;r++){const l=t(e[r]);l!=null&&(e[o++]=l)}return o<r&&(e.length=o),(t=-1537&(5|n))!==n&&Rn(e,t),2&t&&Object.freeze(e),e}}function $n(t,e,n){return new ll(t,e,n)}function cl(t,e,n){return new ll(t,e,n)}function Kn(t,e,n){Tn(t,0|t[Ze],e,n,tl(0|t[Ze]))}var QC=Hf((function(t,e,n,r,o){if(t.h!==2)return!1;if(t=hr(t=yu(t,Ao([void 0,void 0],r),o)),o=tl(r=0|e[Ze]),2&r)throw Error();let l=as(e,n,o);if(l instanceof os)(2&l.J)!=0?(l=l.V(),l.push(t),Tn(e,r,n,l,o)):l.Ma(t);else if(Array.isArray(l)){var c=0|l[Ze];8192&c||Rn(l,c|=8192),2&c&&(l=by(l),Tn(e,r,n,l,o)),l.push(t)}else Tn(e,r,n,ru([t]),o);return!0}),(function(t,e,n,r,o){if(e instanceof os)e.forEach(((l,c)=>{Ef(t,n,Ao([c,l],r),o)}));else if(Array.isArray(e)){for(let l=0;l<e.length;l++){const c=e[l];Array.isArray(c)&&Ef(t,n,Ao(c,r),o)}ru(e)}}));function Zy(t,e,n){(e=Cr(e))!=null&&(Ki(t,n,5),t=t.g,Wm(e),lg(t))}function Qy(t,e,n){if(e=(function(r){if(r==null)return r;const o=typeof r;if(o==="bigint")return String(gu(64,r));if(_u(r)){if(o==="string")return xy(r);if(o==="number")return Ym(r)}})(e),e!=null&&(typeof e=="string"&&U1(e),e!=null))switch(Ki(t,n,0),typeof e){case"number":t=t.g,Wa(e),La(t,en,mn);break;case"bigint":n=BigInt.asUintN(64,e),n=new vm(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),La(t.g,n.h,n.g);break;default:n=U1(e),La(t.g,n.h,n.g)}}function Jy(t,e,n){(e=nl(e))!=null&&e!=null&&(Ki(t,n,0),Bf(t.g,e))}function ex(t,e,n){(e=_y(e))!=null&&(Ki(t,n,0),t.g.g.push(e?1:0))}function tx(t,e,n){(e=kn(e))!=null&&zf(t,n,iy(e))}function nx(t,e,n,r,o){Ef(t,n,qy(e,r),o)}function ix(t,e,n){(e=e==null||typeof e=="string"||e instanceof br?e:void 0)!=null&&zf(t,n,rg(e,!0).buffer)}function rx(t,e,n){(e=vy(e))!=null&&e!=null&&(Ki(t,n,0),al(t.g,e))}function sx(t,e,n){return(t.h===5||t.h===2)&&(e=ol(e,0|e[Ze],n),t.h==2?kf(t,Sf,e):e.push(Sf(t.g)),!0)}var _n=$n((function(t,e,n){return t.h===5&&(Kn(e,n,Sf(t.g)),!0)}),Zy,Vf),JC=cl(sx,(function(t,e,n){if((e=ul(Cr,e))!=null)for(let c=0;c<e.length;c++){var r=t,o=n,l=e[c];l!=null&&(Ki(r,o,5),r=r.g,Wm(l),lg(r))}}),Vf),vg=cl(sx,(function(t,e,n){if((e=ul(Cr,e))!=null&&e.length){Ki(t,n,2),al(t.g,4*e.length);for(let r=0;r<e.length;r++)n=t.g,Wm(e[r]),lg(n)}}),Vf),eR=$n((function(t,e,n){return t.h===5&&(Kn(e,n,(t=Sf(t.g))===0?void 0:t),!0)}),Zy,Vf),Ys=$n((function(t,e,n){return t.h!==0?t=!1:(Kn(e,n,sg(t.g,gy)),t=!0),t}),Qy,Vy),yp=$n((function(t,e,n){return t.h!==0?e=!1:(Kn(e,n,(t=sg(t.g,gy))===ZC?void 0:t),e=!0),e}),Qy,Vy),tR=$n((function(t,e,n){return t.h!==0?t=!1:(Kn(e,n,sg(t.g,wC)),t=!0),t}),(function(t,e,n){if(e=(function(r){if(r==null)return r;var o=typeof r;if(o==="bigint")return String(AC(64,r));if(_u(r)){if(o==="string")return o=Xa(Number(r)),Uo(o)&&o>=0?r=String(o):((o=r.indexOf("."))!==-1&&(r=r.substring(0,o)),(o=r[0]!=="-"&&((o=r.length)<20||o===20&&r<="18446744073709551615"))||(If(r),r=su(en,mn))),r;if(o==="number")return(r=Xa(r))>=0&&Uo(r)||(Wa(r),r=my(en,mn)),r}})(e),e!=null&&(typeof e=="string"&&N1(e),e!=null))switch(Ki(t,n,0),typeof e){case"number":t=t.g,Wa(e),La(t,en,mn);break;case"bigint":n=BigInt.asUintN(64,e),n=new _m(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),La(t.g,n.h,n.g);break;default:n=N1(e),La(t.g,n.h,n.g)}}),jC),En=$n((function(t,e,n){return t.h===0&&(Kn(e,n,js(t.g)),!0)}),Jy,hg),xu=cl((function(t,e,n){return(t.h===0||t.h===2)&&(e=ol(e,0|e[Ze],n),t.h==2?kf(t,js,e):e.push(js(t.g)),!0)}),(function(t,e,n){if((e=ul(nl,e))!=null&&e.length){n=ug(t,n);for(let r=0;r<e.length;r++)Bf(t.g,e[r]);cg(t,n)}}),hg),Ca=$n((function(t,e,n){return t.h===0&&(Kn(e,n,(t=js(t.g))===0?void 0:t),!0)}),Jy,hg),nn=$n((function(t,e,n){return t.h===0&&(Kn(e,n,og(t.g)),!0)}),ex,zy),Po=$n((function(t,e,n){return t.h===0&&(Kn(e,n,(t=og(t.g))===!1?void 0:t),!0)}),ex,zy),Yn=cl((function(t,e,n){return t.h===2&&(t=ag(t),ol(e,0|e[Ze],n).push(t),!0)}),(function(t,e,n){if((e=ul(kn,e))!=null)for(let c=0;c<e.length;c++){var r=t,o=n,l=e[c];l!=null&&zf(r,o,iy(l))}}),dg),Vs=$n((function(t,e,n){return t.h===2&&(Kn(e,n,(t=ag(t))===""?void 0:t),!0)}),tx,dg),Gt=$n((function(t,e,n){return t.h===2&&(Kn(e,n,ag(t)),!0)}),tx,dg),Nn=(function(t,e,n=fg){return new ll(t,e,n)})((function(t,e,n,r,o){return t.h===2&&(r=Ao(void 0,r),ol(e,0|e[Ze],n).push(r),yu(t,r,o),!0)}),(function(t,e,n,r,o){if(Array.isArray(e)){for(let l=0;l<e.length;l++)nx(t,e[l],n,r,o);1&(t=0|e[Ze])||Rn(e,1|t)}})),Kt=Hf((function(t,e,n,r,o,l){if(t.h!==2)return!1;let c=0|e[Ze];return Py(e,c,l,n,tl(c)),yu(t,e=ng(e,r,n),o),!0}),nx),ox=$n((function(t,e,n){return t.h===2&&(Kn(e,n,By(t)),!0)}),ix,Hy),nR=cl((function(t,e,n){return(t.h===0||t.h===2)&&(e=ol(e,0|e[Ze],n),t.h==2?kf(t,Pr,e):e.push(Pr(t.g)),!0)}),(function(t,e,n){if((e=ul(vy,e))!=null)for(let c=0;c<e.length;c++){var r=t,o=n,l=e[c];l!=null&&(Ki(r,o,0),al(r.g,l))}}),pg),iR=$n((function(t,e,n){return t.h===0&&(Kn(e,n,(t=Pr(t.g))===0?void 0:t),!0)}),rx,pg),qn=$n((function(t,e,n){return t.h===0&&(Kn(e,n,js(t.g)),!0)}),(function(t,e,n){(e=nl(e))!=null&&(e=parseInt(e,10),Ki(t,n,0),Bf(t.g,e))}),Gy);class rR{constructor(e,n){var r=Di;this.g=e,this.h=n,this.m=Nt,this.j=st,this.defaultValue=void 0,this.l=r.Oa!=null?py:void 0}register(){Pf(this)}}function Nr(t,e){return new rR(t,e)}function qs(t,e){return(n,r)=>{{const l={ea:!0};r&&Object.assign(l,r),n=Fy(n,void 0,void 0,l);try{const c=new t,f=c.v;_g(e)(f,n);var o=c}finally{Oy(n)}}return o}}function Yf(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const c=this.g;return this.g=[],c}}}};Ky(this.v,e,ko(Gf,Xf,jf,t)),ja(e,e.g.end());const n=new Uint8Array(e.h),r=e.l,o=r.length;let l=0;for(let c=0;c<o;c++){const f=r[c];n.set(f,l),l+=f.length}return e.l=[n],n}}var k1=class extends Qe{constructor(t){super(t)}},B1=[0,Vs,$n((function(t,e,n){return t.h===2&&(Kn(e,n,(t=By(t))===Io()?void 0:t),!0)}),(function(t,e,n){if(e!=null){if(e instanceof Qe){const r=e.Ra;return void(r?(e=r(e),e!=null&&zf(t,n,rg(e,!0).buffer)):Va(pm,3))}if(Array.isArray(e))return void Va(pm,3)}ix(t,e,n)}),Hy)];let xp,z1=globalThis.trustedTypes;function V1(t){var e;return xp===void 0&&(xp=(function(){let n=null;if(!z1)return n;try{const r=o=>o;n=z1.createPolicy("goog#html",{createHTML:r,createScript:r,createScriptURL:r})}catch{}return n})()),t=(e=xp)?e.createScriptURL(t):t,new class{constructor(n){this.g=n}toString(){return this.g+""}}(t)}function Jc(t,...e){if(e.length===0)return V1(t[0]);let n=t[0];for(let r=0;r<e.length;r++)n+=encodeURIComponent(e[r])+t[r+1];return V1(n)}var ax=[0,En,qn,nn,-1,xu,qn,-1,nn],sR=class extends Qe{constructor(t){super(t)}},lx=[0,nn,Gt,nn,qn,-1,cl((function(t,e,n){return(t.h===0||t.h===2)&&(e=ol(e,0|e[Ze],n),t.h==2?kf(t,HC,e):e.push(js(t.g)),!0)}),(function(t,e,n){if((e=ul(nl,e))!=null&&e.length){n=ug(t,n);for(let r=0;r<e.length;r++)Bf(t.g,e[r]);cg(t,n)}}),Gy),Gt,-1,[0,nn,-1],qn,nn,-1],ux=[0,3,nn,-1,2,[0,[2],En,Kt,[0,$n((function(t,e,n){return t.h===0&&(Kn(e,n,Pr(t.g)),!0)}),rx,pg)]],[0,qn,nn,qn,nn,qn,nn,Gt,-1],[0,[3,4],Gt,-1,Kt,[0,En],Kt,[0,qn]],[0]],cx=[0,Gt,-2],H1=class extends Qe{constructor(t){super(t)}},fx=[0],dx=[0,En,nn,1,nn,-4],Di=class extends Qe{constructor(t){super(t,2)}},wn={};wn[336783863]=[0,Gt,nn,-1,En,[0,[1,2,3,4,5,6,7,8,9],Kt,fx,Kt,lx,Kt,cx,Kt,dx,Kt,ax,Kt,[0,Gt,-2],Kt,[0,Gt,qn],Kt,ux,Kt,[0,qn,-1,nn]],[0,Gt],nn,[0,[1,3],[2,4],Kt,[0,xu],-1,Kt,[0,Yn],-1,Nn,[0,Gt,-1]],Gt];var G1=[0,yp,-1,Po,-3,yp,xu,Vs,Ca,yp,-1,Po,Ca,Po,-2,Vs];function Zt(t,e){Of(t,3,e)}function At(t,e){Of(t,4,e)}var gi=class extends Qe{constructor(t){super(t,500)}o(t){return st(this,0,7,t)}},tu=[-1,{}],W1=[0,Gt,1,tu],X1=[0,Gt,Yn,tu];function Zi(t,e){ig(t,1,gi,e)}function sn(t,e){Of(t,10,e)}function Ft(t,e){Of(t,15,e)}var Ii=class extends Qe{constructor(t){super(t,500)}o(t){return st(this,0,1001,t)}},hx=[-500,Nn,[-500,Vs,-1,Yn,-3,[-2,wn,nn],Nn,B1,Ca,-1,W1,X1,Nn,[0,Vs,Po],Vs,G1,Ca,Yn,987,Yn],4,Nn,[-500,Gt,-1,[-1,{}],998,Gt],Nn,[-500,Gt,Yn,-1,[-2,{},nn],997,Yn,-1],Ca,Nn,[-500,Gt,Yn,tu,998,Yn],Yn,Ca,W1,X1,Nn,[0,Vs,-1,tu],Yn,-2,G1,Vs,-1,Po,[0,Po,iR],978,tu,Nn,B1];Ii.prototype.g=Yf(hx);var oR=qs(Ii,hx),aR=class extends Qe{constructor(t){super(t)}},px=class extends Qe{constructor(t){super(t)}g(){return ls(this,aR,1)}},mx=[0,Nn,[0,En,_n,Gt,-1]],qf=qs(px,mx),lR=class extends Qe{constructor(t){super(t)}},uR=class extends Qe{constructor(t){super(t)}},Sp=class extends Qe{constructor(t){super(t)}l(){return Nt(this,lR,2)}g(){return ls(this,uR,5)}},gx=qs(class extends Qe{constructor(t){super(t)}},[0,Yn,xu,vg,[0,qn,[0,En,-3],[0,_n,-3],[0,En,-1,[0,Nn,[0,En,-2]]],Nn,[0,_n,-1,Gt,_n]],Gt,-1,Ys,Nn,[0,En,_n],Yn,Ys]),_x=class extends Qe{constructor(t){super(t)}},Da=qs(class extends Qe{constructor(t){super(t)}},[0,Nn,[0,_n,-4]]),vx=class extends Qe{constructor(t){super(t)}},Su=qs(class extends Qe{constructor(t){super(t)}},[0,Nn,[0,_n,-4]]),cR=class extends Qe{constructor(t){super(t)}},fR=[0,En,-1,vg,qn],yx=class extends Qe{constructor(t){super(t)}};yx.prototype.g=Yf([0,_n,-4,Ys]);var dR=class extends Qe{constructor(t){super(t)}},hR=qs(class extends Qe{constructor(t){super(t)}},[0,Nn,[0,1,En,Gt,mx],Ys]),j1=class extends Qe{constructor(t){super(t)}},pR=class extends Qe{constructor(t){super(t)}na(){const t=tn(this,1,void 0,void 0,Ry);return t??Io()}},mR=class extends Qe{constructor(t){super(t)}},xx=[1,2],gR=qs(class extends Qe{constructor(t){super(t)}},[0,Nn,[0,xx,Kt,[0,vg],Kt,[0,ox],En,Gt],Ys]),yg=class extends Qe{constructor(t){super(t)}},Sx=[0,Gt,En,_n,Yn,-1],Y1=class extends Qe{constructor(t){super(t)}},_R=[0,nn,-1],q1=class extends Qe{constructor(t){super(t)}},df=[1,2,3,4,5,6],Tf=class extends Qe{constructor(t){super(t)}g(){return tn(this,1,void 0,void 0,Ry)!=null}l(){return kn(tn(this,2))!=null}},un=class extends Qe{constructor(t){super(t)}g(){return _y(tn(this,2))??!1}},Mx=[0,ox,Gt,[0,En,Ys,-1],[0,tR,Ys]],vn=[0,Mx,nn,[0,df,Kt,dx,Kt,lx,Kt,ax,Kt,fx,Kt,cx,Kt,ux],qn],$f=class extends Qe{constructor(t){super(t)}},xg=[0,vn,_n,-1,En],vR=Nr(502141897,$f);wn[502141897]=xg;var yR=qs(class extends Qe{constructor(t){super(t)}},[0,[0,qn,-1,JC,nR],fR]),Ex=class extends Qe{constructor(t){super(t)}},Tx=class extends Qe{constructor(t){super(t)}},xm=[0,vn,_n,[0,vn],nn],xR=Nr(508968150,Tx);wn[508968150]=[0,vn,xg,xm,_n,[0,[0,Mx]]],wn[508968149]=xm;var Ta=class extends Qe{constructor(t){super(t)}l(){return Nt(this,yg,2)}g(){Vt(this,2)}},wx=[0,vn,Sx];wn[478825465]=wx;var SR=class extends Qe{constructor(t){super(t)}},Ax=class extends Qe{constructor(t){super(t)}},Sg=class extends Qe{constructor(t){super(t)}},Mg=class extends Qe{constructor(t){super(t)}},Cx=class extends Qe{constructor(t){super(t)}},$1=[0,vn,[0,vn],wx,-1],Rx=[0,vn,_n,En],Eg=[0,vn,_n],bx=[0,vn,Rx,Eg,_n],MR=Nr(479097054,Cx);wn[479097054]=[0,vn,bx,$1],wn[463370452]=$1,wn[464864288]=Rx;var ER=Nr(462713202,Mg);wn[462713202]=bx,wn[474472470]=Eg;var TR=class extends Qe{constructor(t){super(t)}},Px=class extends Qe{constructor(t){super(t)}},Lx=class extends Qe{constructor(t){super(t)}},Dx=class extends Qe{constructor(t){super(t)}},Tg=[0,vn,_n,-1,En],Sm=[0,vn,_n,nn];Dx.prototype.g=Yf([0,vn,Eg,[0,vn],xg,xm,Tg,Sm]);var Ix=class extends Qe{constructor(t){super(t)}},wR=Nr(456383383,Ix);wn[456383383]=[0,vn,Sx];var Nx=class extends Qe{constructor(t){super(t)}},AR=Nr(476348187,Nx);wn[476348187]=[0,vn,_R];var Ux=class extends Qe{constructor(t){super(t)}},K1=class extends Qe{constructor(t){super(t)}},Fx=[0,qn,-1],CR=Nr(458105876,class extends Qe{constructor(t){super(t)}g(){let t;var e=this.v;const n=0|e[Ze];return t=bi(this,n),e=(function(r,o,l,c){var f=K1;!c&&rl(r)&&(l=0|(o=r.v)[Ze]);var d=as(o,2);if(r=!1,d==null){if(c)return P1();d=[]}else if(d.constructor===os){if(!(2&d.J)||c)return d;d=d.V()}else Array.isArray(d)?r=!!(2&(0|d[Ze])):d=[];if(c){if(!d.length)return P1();r||(r=!0,mu(d))}else r&&(r=!1,ru(d),d=by(d));return!r&&32&l&&pu(d,32),l=Tn(o,l,2,c=new os(d,f,bC,void 0)),r||Oo(o,l),c})(this,e,n,t),!t&&K1&&(e.ra=!0),e}});wn[458105876]=[0,Fx,QC,[!0,Ys,[0,Gt,-1,Yn]],[0,xu,nn,qn]];var wg=class extends Qe{constructor(t){super(t)}},Ox=Nr(458105758,wg);wn[458105758]=[0,vn,Gt,Fx];var Mp=class extends Qe{constructor(t){super(t)}},Z1=[0,eR,-1,Po],RR=class extends Qe{constructor(t){super(t)}},kx=class extends Qe{constructor(t){super(t)}},Mm=[1,2];kx.prototype.g=Yf([0,Mm,Kt,Z1,Kt,[0,Nn,Z1]]);var Bx=class extends Qe{constructor(t){super(t)}},bR=Nr(443442058,Bx);wn[443442058]=[0,vn,Gt,En,_n,Yn,-1,nn,_n],wn[514774813]=Tg;var zx=class extends Qe{constructor(t){super(t)}},PR=Nr(516587230,zx);function Em(t,e){return e=e?e.clone():new yg,t.displayNamesLocale!==void 0?Vt(e,1,vu(t.displayNamesLocale)):t.displayNamesLocale===void 0&&Vt(e,1),t.maxResults!==void 0?us(e,2,t.maxResults):"maxResults"in t&&Vt(e,2),t.scoreThreshold!==void 0?nt(e,3,t.scoreThreshold):"scoreThreshold"in t&&Vt(e,3),t.categoryAllowlist!==void 0?xf(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&Vt(e,4),t.categoryDenylist!==void 0?xf(e,5,t.categoryDenylist):"categoryDenylist"in t&&Vt(e,5),e}function Vx(t){const e=Number(t);return Number.isSafeInteger(e)?e:String(t)}function Ag(t,e=-1,n=""){return{categories:t.map((r=>({index:qi(r,1)??0??-1,score:dn(r,2)??0,categoryName:kn(tn(r,3))??""??"",displayName:kn(tn(r,4))??""??""}))),headIndex:e,headName:n}}function LR(t){const e={classifications:ls(t,dR,1).map((n=>{var r;return Ag(((r=Nt(n,px,4))==null?void 0:r.g())??[],qi(n,2)??0,kn(tn(n,3))??"")}))};return(function(n){return n==null?n:typeof n=="bigint"?(mm(n)?n=Number(n):(n=gu(64,n),n=mm(n)?Number(n):String(n)),n):_u(n)?typeof n=="number"?Ym(n):xy(n):void 0})(tn(t,2,void 0,void 0,vf))!=null&&(e.timestampMs=Vx(tn(t,2,void 0,void 0,vf)??Ay)),e}function Hx(t){var c,f;var e=To(t,3,Cr,Eo()),n=To(t,2,nl,Eo()),r=To(t,1,kn,Eo()),o=To(t,9,kn,Eo());const l={categories:[],keypoints:[]};for(let d=0;d<e.length;d++)l.categories.push({score:e[d],index:n[d]??-1,categoryName:r[d]??"",displayName:o[d]??""});if((e=(c=Nt(t,Sp,4))==null?void 0:c.l())&&(l.boundingBox={originX:qi(e,1,Os)??0,originY:qi(e,2,Os)??0,width:qi(e,3,Os)??0,height:qi(e,4,Os)??0,angle:0}),(f=Nt(t,Sp,4))==null?void 0:f.g().length)for(const d of Nt(t,Sp,4).g())l.keypoints.push({x:tn(d,1,void 0,Os,Cr)??0,y:tn(d,2,void 0,Os,Cr)??0,score:tn(d,4,void 0,Os,Cr)??0,label:kn(tn(d,3,void 0,Os))??""});return l}function Kf(t){const e=[];for(const n of ls(t,vx,1))e.push({x:dn(n,1)??0,y:dn(n,2)??0,z:dn(n,3)??0,visibility:dn(n,4)??0});return e}function nu(t){const e=[];for(const n of ls(t,_x,1))e.push({x:dn(n,1)??0,y:dn(n,2)??0,z:dn(n,3)??0,visibility:dn(n,4)??0});return e}function Q1(t){return Array.from(t,(e=>e>127?e-256:e))}function J1(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,r=0,o=0;for(let l=0;l<t.length;l++)n+=t[l]*e[l],r+=t[l]*t[l],o+=e[l]*e[l];if(r<=0||o<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(r*o)}let ef;wn[516587230]=[0,vn,Tg,Sm,_n],wn[518928384]=Sm;const DR=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function Gx(t){if(t)return!0;if(ef===void 0)try{await WebAssembly.instantiate(DR),ef=!0}catch{ef=!1}return ef}async function tf(t,e,n){return{wasmLoaderPath:`${e}/${t}_${n=`wasm${n?"_module":""}${await Gx(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var wa=class{};function Wx(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function e2(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise(((n,r)=>{e.addEventListener("load",(()=>{n()}),!1),e.addEventListener("error",(o=>{r(o)}),!1),document.body.appendChild(e)}))}try{importScripts(t.toString())}catch(e){if(!(e instanceof TypeError))throw e;{const n=self.import;n?await n(t.toString()):await import(t.toString())}}}function Xx(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function Je(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function t2(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[r,o]=Xx(e);return!t.l||r===t.i.canvas.width&&o===t.i.canvas.height||(t.i.canvas.width=r,t.i.canvas.height=o),[r,o]}function n2(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const r=new Uint32Array(e.length);for(let o=0;o<e.length;o++)r[o]=t.i.stringToNewUTF8(e[o]);e=t.i._malloc(4*r.length),t.i.HEAPU32.set(r,e>>2),n(e);for(const o of r)t.i._free(o);t.i._free(e)}function Er(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function ks(t,e,n){let r=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(o,l,c)=>{l?(n(r,c),r=[]):r.push(o)}}wa.forVisionTasks=function(t,e=!1){return tf("vision",t??Jc``,e)},wa.forTextTasks=function(t,e=!1){return tf("text",t??Jc``,e)},wa.forGenAiTasks=function(t,e=!1){return tf("genai",t??Jc``,e)},wa.forAudioTasks=function(t,e=!1){return tf("audio",t??Jc``,e)},wa.isSimdSupported=function(t=!1){return Gx(t)};async function IR(t,e,n,r){return t=await(async(o,l,c,f,d)=>{if(l&&await e2(l),!self.ModuleFactory||c&&(await e2(c),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&d&&((l=self.Module).locateFile=d.locateFile,d.mainScriptUrlOrBlob&&(l.mainScriptUrlOrBlob=d.mainScriptUrlOrBlob)),d=await self.ModuleFactory(self.Module||d),self.ModuleFactory=self.Module=void 0,new o(d,f)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:o=>o.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&o.endsWith(".data")?n.assetBinaryPath.toString():o}),await t.o(r),t}function Ep(t,e){const n=Nt(t.baseOptions,Tf,1)||new Tf;typeof e=="string"?(Vt(n,2,vu(e)),Vt(n,1)):e instanceof Uint8Array&&(Vt(n,1,Gm(e,!1)),Vt(n,2)),st(t.baseOptions,0,1,n)}function i2(t){try{const e=t.H.length;if(e===1)throw Error(t.H[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.H.map((n=>n.message)).join(", "))}finally{t.H=[]}}function ze(t,e){t.C=Math.max(t.C,e)}function Zf(t,e){t.B=new gi,Pi(t.B,2,"PassThroughCalculator"),Zt(t.B,"free_memory"),At(t.B,"free_memory_unused_out"),sn(e,"free_memory"),Zi(e,t.B)}function Ya(t,e){Zt(t.B,e),At(t.B,e+"_unused_out")}function Qf(t){t.g.addBoolToStream(!0,"free_memory",t.C)}var Tm=class{constructor(t){this.g=t,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){var n,r,o,l,c,f;if(e){const d=t.baseOptions||{};if((n=t.baseOptions)!=null&&n.modelAssetBuffer&&((r=t.baseOptions)!=null&&r.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((o=Nt(this.baseOptions,Tf,1))!=null&&o.g()||(l=Nt(this.baseOptions,Tf,1))!=null&&l.l()||(c=t.baseOptions)!=null&&c.modelAssetBuffer||(f=t.baseOptions)!=null&&f.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(p,g){let _=Nt(p.baseOptions,q1,3);if(!_){var y=_=new q1,S=new H1;eu(y,4,df,S)}"delegate"in g&&(g.delegate==="GPU"?(g=_,y=new sR,eu(g,2,df,y)):(g=_,y=new H1,eu(g,4,df,y))),st(p.baseOptions,0,3,_)})(this,d),d.modelAssetPath)return fetch(d.modelAssetPath.toString()).then((p=>{if(p.ok)return p.arrayBuffer();throw Error(`Failed to fetch model: ${d.modelAssetPath} (${p.status})`)})).then((p=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(p),!0,!1,!1),Ep(this,"/model.dat"),this.m(),this.L()}));if(d.modelAssetBuffer instanceof Uint8Array)Ep(this,d.modelAssetBuffer);else if(d.modelAssetBuffer)return(async function(p){const g=[];for(var _=0;;){const{done:y,value:S}=await p.read();if(y)break;g.push(S),_+=S.length}if(g.length===0)return new Uint8Array(0);if(g.length===1)return g[0];p=new Uint8Array(_),_=0;for(const y of g)p.set(y,_),_+=y.length;return p})(d.modelAssetBuffer).then((p=>{Ep(this,p),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let t;if(this.g.ca((e=>{t=oR(e)})),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener(((n,r)=>{this.H.push(Error(r))})),this.g.Ja(),this.g.setGraph(t,e),this.B=void 0,i2(this)}finishProcessing(){this.g.finishProcessing(),i2(this)}close(){this.B=void 0,this.g.closeGraph()}};function Ws(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}Tm.prototype.close=Tm.prototype.close;class NR{constructor(e,n,r,o){this.g=e,this.h=n,this.m=r,this.l=o}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function r2(t,e,n){const r=t.g;if(n=Ws(r.createShader(n),"Failed to create WebGL shader"),r.shaderSource(n,e),r.compileShader(n),!r.getShaderParameter(n,r.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${r.getShaderInfoLog(n)}`);return r.attachShader(t.h,n),n}function s2(t,e){const n=t.g,r=Ws(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(r);const o=Ws(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,o),n.enableVertexAttribArray(t.O),n.vertexAttribPointer(t.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const l=Ws(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,l),n.enableVertexAttribArray(t.L),n.vertexAttribPointer(t.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new NR(n,r,o,l)}function Cg(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function UR(t,e,n,r){return Cg(t,e),t.h||(t.m(),t.D()),n?(t.u||(t.u=s2(t,!0)),n=t.u):(t.A||(t.A=s2(t,!1)),n=t.A),e.useProgram(t.h),n.bind(),t.l(),t=r(),n.g.bindVertexArray(null),t}function jx(t,e,n){return Cg(t,e),t=Ws(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function Yx(t,e,n){Cg(t,e),t.B||(t.B=Ws(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.B),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function FR(t){var e;(e=t.g)==null||e.bindFramebuffer(t.g.FRAMEBUFFER,null)}var qx=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=Ws(t.createProgram(),"Failed to create WebGL program"),this.X=r2(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.W=r2(this,this.H(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.O=t.getAttribLocation(this.h,"aVertex"),this.L=t.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.X),t.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function es(t,e){switch(e){case 0:return t.g.find((n=>n instanceof Uint8Array));case 1:return t.g.find((n=>n instanceof Float32Array));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function wm(t){var e=es(t,1);if(!e){if(e=es(t,0))e=new Float32Array(e).map((r=>r/255));else{e=new Float32Array(t.width*t.height);const r=qa(t);var n=Rg(t);if(Yx(n,r,$x(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),r.readPixels(0,0,t.width,t.height,r.RGBA,r.FLOAT,n);for(let o=0,l=0;o<e.length;++o,l+=4)e[o]=n[l]}else r.readPixels(0,0,t.width,t.height,r.RED,r.FLOAT,e)}t.g.push(e)}return e}function $x(t){let e=es(t,2);if(!e){const n=qa(t);e=Zx(t);const r=wm(t),o=Kx(t);n.texImage2D(n.TEXTURE_2D,0,o,t.width,t.height,0,n.RED,n.FLOAT,r),Am(t)}return e}function qa(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=Ws(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function Kx(t){if(t=qa(t),!nf)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))nf=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");nf=t.R16F}return nf}function Rg(t){return t.l||(t.l=new qx),t.l}function Zx(t){const e=qa(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=es(t,2);return n||(n=jx(Rg(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Am(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var nf,In=class{constructor(t,e,n,r,o,l,c){this.g=t,this.m=e,this.j=n,this.canvas=r,this.l=o,this.width=l,this.height=c,this.j&&--o2===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!es(this,0)}ka(){return!!es(this,1)}R(){return!!es(this,2)}ja(){return(e=es(t=this,0))||(e=wm(t),e=new Uint8Array(e.map((n=>Math.round(255*n)))),t.g.push(e)),e;var t,e}ia(){return wm(this)}N(){return $x(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const r=qa(this),o=Rg(this);r.activeTexture(r.TEXTURE1),n=jx(o,r,this.m?r.LINEAR:r.NEAREST),r.bindTexture(r.TEXTURE_2D,n);const l=Kx(this);r.texImage2D(r.TEXTURE_2D,0,l,this.width,this.height,0,r.RED,r.FLOAT,null),r.bindTexture(r.TEXTURE_2D,null),Yx(o,r,n),UR(o,r,!1,(()=>{Zx(this),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4),Am(this)})),FR(o),Am(this)}}t.push(n)}return new In(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&qa(this).deleteTexture(es(this,2)),o2=-1}};In.prototype.close=In.prototype.close,In.prototype.clone=In.prototype.clone,In.prototype.getAsWebGLTexture=In.prototype.N,In.prototype.getAsFloat32Array=In.prototype.ia,In.prototype.getAsUint8Array=In.prototype.ja,In.prototype.hasWebGLTexture=In.prototype.R,In.prototype.hasFloat32Array=In.prototype.ka,In.prototype.hasUint8Array=In.prototype.Fa;var o2=250;function pr(...t){return t.map((([e,n])=>({start:e,end:n})))}const OR=(function(t){return class extends t{Ja(){this.i._registerModelResourcesGraphService()}}})((a2=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:Wx()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,r=this.i._malloc(n);this.i.HEAPU8.set(t,r),e?this.i._changeBinaryGraph(n,r):this.i._changeTextGraph(n,r),this.i._free(r)}configureAudio(t,e,n,r,o){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Je(this,r||"input_audio",(l=>{Je(this,o=o||"audio_header",(c=>{this.i._configureAudio(l,c,t,e??0,n)}))}))}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ca(t){Er(this,"__graph_config__",(e=>{t(e)})),Je(this,"__graph_config__",(e=>{this.i._getGraphConfig(e,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,r,o){const l=4*t.length;this.h!==l&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(l),this.h=l),this.i.HEAPF32.set(t,this.g/4),Je(this,r,(c=>{this.i._addAudioToInputStream(this.g,e,n,c,o)}))}addGpuBufferToStream(t,e,n){Je(this,e,(r=>{const[o,l]=t2(this,t,r);this.i._addBoundTextureToStream(r,o,l,n)}))}addBoolToStream(t,e,n){Je(this,e,(r=>{this.i._addBoolToInputStream(t,r,n)}))}addDoubleToStream(t,e,n){Je(this,e,(r=>{this.i._addDoubleToInputStream(t,r,n)}))}addFloatToStream(t,e,n){Je(this,e,(r=>{this.i._addFloatToInputStream(t,r,n)}))}addIntToStream(t,e,n){Je(this,e,(r=>{this.i._addIntToInputStream(t,r,n)}))}addUintToStream(t,e,n){Je(this,e,(r=>{this.i._addUintToInputStream(t,r,n)}))}addStringToStream(t,e,n){Je(this,e,(r=>{Je(this,t,(o=>{this.i._addStringToInputStream(o,r,n)}))}))}addStringRecordToStream(t,e,n){Je(this,e,(r=>{n2(this,Object.keys(t),(o=>{n2(this,Object.values(t),(l=>{this.i._addFlatHashMapToInputStream(o,l,Object.keys(t).length,r,n)}))}))}))}addProtoToStream(t,e,n,r){Je(this,n,(o=>{Je(this,e,(l=>{const c=this.i._malloc(t.length);this.i.HEAPU8.set(t,c),this.i._addProtoToInputStream(c,t.length,l,o,r),this.i._free(c)}))}))}addEmptyPacketToStream(t,e){Je(this,t,(n=>{this.i._addEmptyPacketToInputStream(n,e)}))}addBoolVectorToStream(t,e,n){Je(this,e,(r=>{const o=this.i._allocateBoolVector(t.length);if(!o)throw Error("Unable to allocate new bool vector on heap.");for(const l of t)this.i._addBoolVectorEntry(o,l);this.i._addBoolVectorToInputStream(o,r,n)}))}addDoubleVectorToStream(t,e,n){Je(this,e,(r=>{const o=this.i._allocateDoubleVector(t.length);if(!o)throw Error("Unable to allocate new double vector on heap.");for(const l of t)this.i._addDoubleVectorEntry(o,l);this.i._addDoubleVectorToInputStream(o,r,n)}))}addFloatVectorToStream(t,e,n){Je(this,e,(r=>{const o=this.i._allocateFloatVector(t.length);if(!o)throw Error("Unable to allocate new float vector on heap.");for(const l of t)this.i._addFloatVectorEntry(o,l);this.i._addFloatVectorToInputStream(o,r,n)}))}addIntVectorToStream(t,e,n){Je(this,e,(r=>{const o=this.i._allocateIntVector(t.length);if(!o)throw Error("Unable to allocate new int vector on heap.");for(const l of t)this.i._addIntVectorEntry(o,l);this.i._addIntVectorToInputStream(o,r,n)}))}addUintVectorToStream(t,e,n){Je(this,e,(r=>{const o=this.i._allocateUintVector(t.length);if(!o)throw Error("Unable to allocate new unsigned int vector on heap.");for(const l of t)this.i._addUintVectorEntry(o,l);this.i._addUintVectorToInputStream(o,r,n)}))}addStringVectorToStream(t,e,n){Je(this,e,(r=>{const o=this.i._allocateStringVector(t.length);if(!o)throw Error("Unable to allocate new string vector on heap.");for(const l of t)Je(this,l,(c=>{this.i._addStringVectorEntry(o,c)}));this.i._addStringVectorToInputStream(o,r,n)}))}addBoolToInputSidePacket(t,e){Je(this,e,(n=>{this.i._addBoolToInputSidePacket(t,n)}))}addDoubleToInputSidePacket(t,e){Je(this,e,(n=>{this.i._addDoubleToInputSidePacket(t,n)}))}addFloatToInputSidePacket(t,e){Je(this,e,(n=>{this.i._addFloatToInputSidePacket(t,n)}))}addIntToInputSidePacket(t,e){Je(this,e,(n=>{this.i._addIntToInputSidePacket(t,n)}))}addUintToInputSidePacket(t,e){Je(this,e,(n=>{this.i._addUintToInputSidePacket(t,n)}))}addStringToInputSidePacket(t,e){Je(this,e,(n=>{Je(this,t,(r=>{this.i._addStringToInputSidePacket(r,n)}))}))}addProtoToInputSidePacket(t,e,n){Je(this,n,(r=>{Je(this,e,(o=>{const l=this.i._malloc(t.length);this.i.HEAPU8.set(t,l),this.i._addProtoToInputSidePacket(l,t.length,o,r),this.i._free(l)}))}))}addBoolVectorToInputSidePacket(t,e){Je(this,e,(n=>{const r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const o of t)this.i._addBoolVectorEntry(r,o);this.i._addBoolVectorToInputSidePacket(r,n)}))}addDoubleVectorToInputSidePacket(t,e){Je(this,e,(n=>{const r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const o of t)this.i._addDoubleVectorEntry(r,o);this.i._addDoubleVectorToInputSidePacket(r,n)}))}addFloatVectorToInputSidePacket(t,e){Je(this,e,(n=>{const r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const o of t)this.i._addFloatVectorEntry(r,o);this.i._addFloatVectorToInputSidePacket(r,n)}))}addIntVectorToInputSidePacket(t,e){Je(this,e,(n=>{const r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const o of t)this.i._addIntVectorEntry(r,o);this.i._addIntVectorToInputSidePacket(r,n)}))}addUintVectorToInputSidePacket(t,e){Je(this,e,(n=>{const r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const o of t)this.i._addUintVectorEntry(r,o);this.i._addUintVectorToInputSidePacket(r,n)}))}addStringVectorToInputSidePacket(t,e){Je(this,e,(n=>{const r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const o of t)Je(this,o,(l=>{this.i._addStringVectorEntry(r,l)}));this.i._addStringVectorToInputSidePacket(r,n)}))}attachBoolListener(t,e){Er(this,t,e),Je(this,t,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(t,e){ks(this,t,e),Je(this,t,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(t,e){Er(this,t,e),Je(this,t,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(t,e){ks(this,t,e),Je(this,t,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(t,e){Er(this,t,e),Je(this,t,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(t,e){ks(this,t,e),Je(this,t,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(t,e){Er(this,t,e),Je(this,t,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(t,e){ks(this,t,e),Je(this,t,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(t,e){Er(this,t,e),Je(this,t,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(t,e){ks(this,t,e),Je(this,t,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(t,e){Er(this,t,e),Je(this,t,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(t,e){ks(this,t,e),Je(this,t,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(t,e,n){Er(this,t,e),Je(this,t,(r=>{this.i._attachProtoListener(r,n||!1)}))}attachProtoVectorListener(t,e,n){ks(this,t,e),Je(this,t,(r=>{this.i._attachProtoVectorListener(r,n||!1)}))}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Er(this,t,((r,o)=>{r=new Float32Array(r.buffer,r.byteOffset,r.length/4),e(r,o)})),Je(this,t,(r=>{this.i._attachAudioListener(r,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends a2{get ga(){return this.i}pa(t,e,n){Je(this,e,(r=>{const[o,l]=t2(this,t,r);this.ga._addBoundTextureAsImageToStream(r,o,l,n)}))}Z(t,e){Er(this,t,e),Je(this,t,(n=>{this.ga._attachImageListener(n)}))}aa(t,e){ks(this,t,e),Je(this,t,(n=>{this.ga._attachImageVectorListener(n)}))}}));var a2,mr=class extends OR{};async function Lt(t,e,n){return(async function(r,o,l,c){return IR(r,o,l,c)})(t,n.canvas??(Wx()?void 0:document.createElement("canvas")),e,n)}function Qx(t,e,n,r){if(t.U){const l=new yx;if(n!=null&&n.regionOfInterest){if(!t.oa)throw Error("This task doesn't support region-of-interest.");var o=n.regionOfInterest;if(o.left>=o.right||o.top>=o.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(o.left<0||o.top<0||o.right>1||o.bottom>1)throw Error("Expected RectF values to be in [0,1].");nt(l,1,(o.left+o.right)/2),nt(l,2,(o.top+o.bottom)/2),nt(l,4,o.right-o.left),nt(l,3,o.bottom-o.top)}else nt(l,1,.5),nt(l,2,.5),nt(l,4,1),nt(l,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(nt(l,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){const[c,f]=Xx(e);n=dn(l,3)*f/c,o=dn(l,4)*c/f,nt(l,4,n),nt(l,3,o)}}t.g.addProtoToStream(l.g(),"mediapipe.NormalizedRect",t.U,r)}t.g.pa(e,t.X,r??performance.now()),t.finishProcessing()}function gr(t,e,n){var r;if((r=t.baseOptions)!=null&&r.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Qx(t,e,n,t.C+1)}function Ur(t,e,n,r){var o;if(!((o=t.baseOptions)!=null&&o.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Qx(t,e,n,r)}function $a(t,e,n,r){var o=e.data;const l=e.width,c=l*(e=e.height);if((o instanceof Uint8Array||o instanceof Float32Array)&&o.length!==c)throw Error("Unsupported channel count: "+o.length/c);return t=new In([o],n,!1,t.g.i.canvas,t.P,l,e),r?t.clone():t}var Li=class extends Tm{constructor(t,e,n,r){super(t),this.g=t,this.X=e,this.U=n,this.oa=r,this.P=new qx}l(t,e=!0){if("runningMode"in t&&Vt(this.baseOptions,2,ou(!!t.runningMode&&t.runningMode!=="IMAGE")),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.P.close(),super.close()}};Li.prototype.close=Li.prototype.close;var Gi=class extends Li{constructor(t,e){super(new mr(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},st(t=this.h=new $f,0,1,e=new un),nt(this.h,2,.5),nt(this.h,3,.3)}get baseOptions(){return Nt(this.h,un,1)}set baseOptions(t){st(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&nt(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&nt(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}F(t,e){return this.j={detections:[]},gr(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Ur(this,t,n,e),this.j}m(){var t=new Ii;sn(t,"image_in"),sn(t,"norm_rect_in"),Ft(t,"detections");const e=new Di;Ir(e,vR,this.h);const n=new gi;Pi(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Zt(n,"IMAGE:image_in"),Zt(n,"NORM_RECT:norm_rect_in"),At(n,"DETECTIONS:detections"),n.o(e),Zi(t,n),this.g.attachProtoVectorListener("detections",((r,o)=>{for(const l of r)r=gx(l),this.j.detections.push(Hx(r));ze(this,o)})),this.g.attachEmptyPacketListener("detections",(r=>{ze(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Gi.prototype.detectForVideo=Gi.prototype.G,Gi.prototype.detect=Gi.prototype.F,Gi.prototype.setOptions=Gi.prototype.o,Gi.createFromModelPath=async function(t,e){return Lt(Gi,t,{baseOptions:{modelAssetPath:e}})},Gi.createFromModelBuffer=function(t,e){return Lt(Gi,t,{baseOptions:{modelAssetBuffer:e}})},Gi.createFromOptions=function(t,e){return Lt(Gi,t,e)};var bg=pr([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Pg=pr([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Lg=pr([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Jx=pr([474,475],[475,476],[476,477],[477,474]),Dg=pr([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Ig=pr([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),e3=pr([469,470],[470,471],[471,472],[472,469]),Ng=pr([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),t3=[...bg,...Pg,...Lg,...Dg,...Ig,...Ng],n3=pr([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function l2(t){t.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var an=class extends Li{constructor(t,e){super(new mr(t,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,st(t=this.h=new Tx,0,1,e=new un),this.A=new Ex,st(this.h,0,3,this.A),this.u=new $f,st(this.h,0,2,this.u),us(this.u,4,1),nt(this.u,2,.5),nt(this.A,2,.5),nt(this.h,4,.5)}get baseOptions(){return Nt(this.h,un,1)}set baseOptions(t){st(this.h,0,1,t)}o(t){return"numFaces"in t&&us(this.u,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&nt(this.u,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&nt(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&nt(this.A,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}F(t,e){return l2(this),gr(this,t,e),this.j}G(t,e,n){return l2(this),Ur(this,t,n,e),this.j}m(){var t=new Ii;sn(t,"image_in"),sn(t,"norm_rect"),Ft(t,"face_landmarks");const e=new Di;Ir(e,xR,this.h);const n=new gi;Pi(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Zt(n,"IMAGE:image_in"),Zt(n,"NORM_RECT:norm_rect"),At(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),Zi(t,n),this.g.attachProtoVectorListener("face_landmarks",((r,o)=>{for(const l of r)r=Su(l),this.j.faceLandmarks.push(Kf(r));ze(this,o)})),this.g.attachEmptyPacketListener("face_landmarks",(r=>{ze(this,r)})),this.outputFaceBlendshapes&&(Ft(t,"blendshapes"),At(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((r,o)=>{if(this.outputFaceBlendshapes)for(const l of r)r=qf(l),this.j.faceBlendshapes.push(Ag(r.g()??[]));ze(this,o)})),this.g.attachEmptyPacketListener("blendshapes",(r=>{ze(this,r)}))),this.outputFacialTransformationMatrixes&&(Ft(t,"face_geometry"),At(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((r,o)=>{if(this.outputFacialTransformationMatrixes)for(const l of r)(r=Nt(r=yR(l),cR,2))&&this.j.facialTransformationMatrixes.push({rows:qi(r,1)??0??0,columns:qi(r,2)??0??0,data:To(r,3,Cr,Eo()).slice()??[]});ze(this,o)})),this.g.attachEmptyPacketListener("face_geometry",(r=>{ze(this,r)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};an.prototype.detectForVideo=an.prototype.G,an.prototype.detect=an.prototype.F,an.prototype.setOptions=an.prototype.o,an.createFromModelPath=function(t,e){return Lt(an,t,{baseOptions:{modelAssetPath:e}})},an.createFromModelBuffer=function(t,e){return Lt(an,t,{baseOptions:{modelAssetBuffer:e}})},an.createFromOptions=function(t,e){return Lt(an,t,e)},an.FACE_LANDMARKS_LIPS=bg,an.FACE_LANDMARKS_LEFT_EYE=Pg,an.FACE_LANDMARKS_LEFT_EYEBROW=Lg,an.FACE_LANDMARKS_LEFT_IRIS=Jx,an.FACE_LANDMARKS_RIGHT_EYE=Dg,an.FACE_LANDMARKS_RIGHT_EYEBROW=Ig,an.FACE_LANDMARKS_RIGHT_IRIS=e3,an.FACE_LANDMARKS_FACE_OVAL=Ng,an.FACE_LANDMARKS_CONTOURS=t3,an.FACE_LANDMARKS_TESSELATION=n3;var Ug=pr([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function u2(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function c2(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function f2(t,e=!0){const n=[];for(const o of t){var r=qf(o);t=[];for(const l of r.g())r=e&&qi(l,1)!=null?qi(l,1)??0:-1,t.push({score:dn(l,2)??0,index:r,categoryName:kn(tn(l,3))??""??"",displayName:kn(tn(l,4))??""??""});n.push(t)}return n}var di=class extends Li{constructor(t,e){super(new mr(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],st(t=this.j=new Cx,0,1,e=new un),this.u=new Mg,st(this.j,0,2,this.u),this.D=new Sg,st(this.u,0,3,this.D),this.A=new Ax,st(this.u,0,2,this.A),this.h=new SR,st(this.j,0,3,this.h),nt(this.A,2,.5),nt(this.u,4,.5),nt(this.D,2,.5)}get baseOptions(){return Nt(this.j,un,1)}set baseOptions(t){st(this.j,0,1,t)}o(t){var o,l,c,f;if(us(this.A,3,t.numHands??1),"minHandDetectionConfidence"in t&&nt(this.A,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&nt(this.u,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&nt(this.D,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new Ta,n=e,r=Em(t.cannedGesturesClassifierOptions,(o=Nt(this.h,Ta,3))==null?void 0:o.l());st(n,0,2,r),st(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&((l=Nt(this.h,Ta,3))==null||l.g());return t.customGesturesClassifierOptions?(st(n=e=new Ta,0,2,r=Em(t.customGesturesClassifierOptions,(c=Nt(this.h,Ta,4))==null?void 0:c.l())),st(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&((f=Nt(this.h,Ta,4))==null||f.g()),this.l(t)}Ha(t,e){return u2(this),gr(this,t,e),c2(this)}Ia(t,e,n){return u2(this),Ur(this,t,n,e),c2(this)}m(){var t=new Ii;sn(t,"image_in"),sn(t,"norm_rect"),Ft(t,"hand_gestures"),Ft(t,"hand_landmarks"),Ft(t,"world_hand_landmarks"),Ft(t,"handedness");const e=new Di;Ir(e,MR,this.j);const n=new gi;Pi(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Zt(n,"IMAGE:image_in"),Zt(n,"NORM_RECT:norm_rect"),At(n,"HAND_GESTURES:hand_gestures"),At(n,"LANDMARKS:hand_landmarks"),At(n,"WORLD_LANDMARKS:world_hand_landmarks"),At(n,"HANDEDNESS:handedness"),n.o(e),Zi(t,n),this.g.attachProtoVectorListener("hand_landmarks",((r,o)=>{for(const l of r){r=Su(l);const c=[];for(const f of ls(r,vx,1))c.push({x:dn(f,1)??0,y:dn(f,2)??0,z:dn(f,3)??0,visibility:dn(f,4)??0});this.landmarks.push(c)}ze(this,o)})),this.g.attachEmptyPacketListener("hand_landmarks",(r=>{ze(this,r)})),this.g.attachProtoVectorListener("world_hand_landmarks",((r,o)=>{for(const l of r){r=Da(l);const c=[];for(const f of ls(r,_x,1))c.push({x:dn(f,1)??0,y:dn(f,2)??0,z:dn(f,3)??0,visibility:dn(f,4)??0});this.worldLandmarks.push(c)}ze(this,o)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(r=>{ze(this,r)})),this.g.attachProtoVectorListener("hand_gestures",((r,o)=>{this.gestures.push(...f2(r,!1)),ze(this,o)})),this.g.attachEmptyPacketListener("hand_gestures",(r=>{ze(this,r)})),this.g.attachProtoVectorListener("handedness",((r,o)=>{this.handedness.push(...f2(r)),ze(this,o)})),this.g.attachEmptyPacketListener("handedness",(r=>{ze(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function d2(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}di.prototype.recognizeForVideo=di.prototype.Ia,di.prototype.recognize=di.prototype.Ha,di.prototype.setOptions=di.prototype.o,di.createFromModelPath=function(t,e){return Lt(di,t,{baseOptions:{modelAssetPath:e}})},di.createFromModelBuffer=function(t,e){return Lt(di,t,{baseOptions:{modelAssetBuffer:e}})},di.createFromOptions=function(t,e){return Lt(di,t,e)},di.HAND_CONNECTIONS=Ug;var Ei=class extends Li{constructor(t,e){super(new mr(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],st(t=this.h=new Mg,0,1,e=new un),this.u=new Sg,st(this.h,0,3,this.u),this.j=new Ax,st(this.h,0,2,this.j),us(this.j,3,1),nt(this.j,2,.5),nt(this.u,2,.5),nt(this.h,4,.5)}get baseOptions(){return Nt(this.h,un,1)}set baseOptions(t){st(this.h,0,1,t)}o(t){return"numHands"in t&&us(this.j,3,t.numHands??1),"minHandDetectionConfidence"in t&&nt(this.j,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&nt(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&nt(this.u,2,t.minHandPresenceConfidence??.5),this.l(t)}F(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],gr(this,t,e),d2(this)}G(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ur(this,t,n,e),d2(this)}m(){var t=new Ii;sn(t,"image_in"),sn(t,"norm_rect"),Ft(t,"hand_landmarks"),Ft(t,"world_hand_landmarks"),Ft(t,"handedness");const e=new Di;Ir(e,ER,this.h);const n=new gi;Pi(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Zt(n,"IMAGE:image_in"),Zt(n,"NORM_RECT:norm_rect"),At(n,"LANDMARKS:hand_landmarks"),At(n,"WORLD_LANDMARKS:world_hand_landmarks"),At(n,"HANDEDNESS:handedness"),n.o(e),Zi(t,n),this.g.attachProtoVectorListener("hand_landmarks",((r,o)=>{for(const l of r)r=Su(l),this.landmarks.push(Kf(r));ze(this,o)})),this.g.attachEmptyPacketListener("hand_landmarks",(r=>{ze(this,r)})),this.g.attachProtoVectorListener("world_hand_landmarks",((r,o)=>{for(const l of r)r=Da(l),this.worldLandmarks.push(nu(r));ze(this,o)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(r=>{ze(this,r)})),this.g.attachProtoVectorListener("handedness",((r,o)=>{var l=this.handedness,c=l.push;const f=[];for(const d of r){r=qf(d);const p=[];for(const g of r.g())p.push({score:dn(g,2)??0,index:qi(g,1)??0??-1,categoryName:kn(tn(g,3))??""??"",displayName:kn(tn(g,4))??""??""});f.push(p)}c.call(l,...f),ze(this,o)})),this.g.attachEmptyPacketListener("handedness",(r=>{ze(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Ei.prototype.detectForVideo=Ei.prototype.G,Ei.prototype.detect=Ei.prototype.F,Ei.prototype.setOptions=Ei.prototype.o,Ei.createFromModelPath=function(t,e){return Lt(Ei,t,{baseOptions:{modelAssetPath:e}})},Ei.createFromModelBuffer=function(t,e){return Lt(Ei,t,{baseOptions:{modelAssetBuffer:e}})},Ei.createFromOptions=function(t,e){return Lt(Ei,t,e)},Ei.HAND_CONNECTIONS=Ug;var i3=pr([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function h2(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function p2(t){try{if(!t.D)return t.h;t.D(t.h)}finally{Qf(t)}}function rf(t,e){t=Su(t),e.push(Kf(t))}var $t=class extends Li{constructor(t,e){super(new mr(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,st(t=this.j=new Dx,0,1,e=new un),this.I=new Sg,st(this.j,0,2,this.I),this.W=new TR,st(this.j,0,3,this.W),this.u=new $f,st(this.j,0,4,this.u),this.O=new Ex,st(this.j,0,5,this.O),this.A=new Px,st(this.j,0,6,this.A),this.M=new Lx,st(this.j,0,7,this.M),nt(this.u,2,.5),nt(this.u,3,.3),nt(this.O,2,.5),nt(this.A,2,.5),nt(this.A,3,.3),nt(this.M,2,.5),nt(this.I,2,.5)}get baseOptions(){return Nt(this.j,un,1)}set baseOptions(t){st(this.j,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&nt(this.u,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&nt(this.u,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&nt(this.O,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&nt(this.A,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&nt(this.A,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&nt(this.M,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&nt(this.I,2,t.minHandLandmarksConfidence??.5),this.l(t)}F(t,e,n){const r=typeof e!="function"?e:{};return this.D=typeof e=="function"?e:n,h2(this),gr(this,t,r),p2(this)}G(t,e,n,r){const o=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:r,h2(this),Ur(this,t,o,e),p2(this)}m(){var t=new Ii;sn(t,"input_frames_image"),Ft(t,"pose_landmarks"),Ft(t,"pose_world_landmarks"),Ft(t,"face_landmarks"),Ft(t,"left_hand_landmarks"),Ft(t,"left_hand_world_landmarks"),Ft(t,"right_hand_landmarks"),Ft(t,"right_hand_world_landmarks");const e=new Di,n=new k1;Pi(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(o,l){if(l!=null)if(Array.isArray(l))Vt(o,2,Ff(l,0,au));else{if(!(typeof l=="string"||l instanceof br||Vm(l)))throw Error("invalid value in Any.value field: "+l+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Bs(o,2,Gm(l,!1),Io())}})(n,this.j.g());const r=new gi;Pi(r,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),ig(r,8,k1,n),Zt(r,"IMAGE:input_frames_image"),At(r,"POSE_LANDMARKS:pose_landmarks"),At(r,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),At(r,"FACE_LANDMARKS:face_landmarks"),At(r,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),At(r,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),At(r,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),At(r,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),r.o(e),Zi(t,r),Zf(this,t),this.g.attachProtoListener("pose_landmarks",((o,l)=>{rf(o,this.h.poseLandmarks),ze(this,l)})),this.g.attachEmptyPacketListener("pose_landmarks",(o=>{ze(this,o)})),this.g.attachProtoListener("pose_world_landmarks",((o,l)=>{var c=this.h.poseWorldLandmarks;o=Da(o),c.push(nu(o)),ze(this,l)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(o=>{ze(this,o)})),this.outputPoseSegmentationMasks&&(At(r,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Ya(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",((o,l)=>{this.h.poseSegmentationMasks=[$a(this,o,!0,!this.D)],ze(this,l)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(o=>{this.h.poseSegmentationMasks=[],ze(this,o)}))),this.g.attachProtoListener("face_landmarks",((o,l)=>{rf(o,this.h.faceLandmarks),ze(this,l)})),this.g.attachEmptyPacketListener("face_landmarks",(o=>{ze(this,o)})),this.outputFaceBlendshapes&&(Ft(t,"extra_blendshapes"),At(r,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((o,l)=>{var c=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(o=qf(o),c.push(Ag(o.g()??[]))),ze(this,l)})),this.g.attachEmptyPacketListener("extra_blendshapes",(o=>{ze(this,o)}))),this.g.attachProtoListener("left_hand_landmarks",((o,l)=>{rf(o,this.h.leftHandLandmarks),ze(this,l)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(o=>{ze(this,o)})),this.g.attachProtoListener("left_hand_world_landmarks",((o,l)=>{var c=this.h.leftHandWorldLandmarks;o=Da(o),c.push(nu(o)),ze(this,l)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(o=>{ze(this,o)})),this.g.attachProtoListener("right_hand_landmarks",((o,l)=>{rf(o,this.h.rightHandLandmarks),ze(this,l)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(o=>{ze(this,o)})),this.g.attachProtoListener("right_hand_world_landmarks",((o,l)=>{var c=this.h.rightHandWorldLandmarks;o=Da(o),c.push(nu(o)),ze(this,l)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(o=>{ze(this,o)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};$t.prototype.detectForVideo=$t.prototype.G,$t.prototype.detect=$t.prototype.F,$t.prototype.setOptions=$t.prototype.o,$t.createFromModelPath=function(t,e){return Lt($t,t,{baseOptions:{modelAssetPath:e}})},$t.createFromModelBuffer=function(t,e){return Lt($t,t,{baseOptions:{modelAssetBuffer:e}})},$t.createFromOptions=function(t,e){return Lt($t,t,e)},$t.HAND_CONNECTIONS=Ug,$t.POSE_CONNECTIONS=i3,$t.FACE_LANDMARKS_LIPS=bg,$t.FACE_LANDMARKS_LEFT_EYE=Pg,$t.FACE_LANDMARKS_LEFT_EYEBROW=Lg,$t.FACE_LANDMARKS_LEFT_IRIS=Jx,$t.FACE_LANDMARKS_RIGHT_EYE=Dg,$t.FACE_LANDMARKS_RIGHT_EYEBROW=Ig,$t.FACE_LANDMARKS_RIGHT_IRIS=e3,$t.FACE_LANDMARKS_FACE_OVAL=Ng,$t.FACE_LANDMARKS_CONTOURS=t3,$t.FACE_LANDMARKS_TESSELATION=n3;var Wi=class extends Li{constructor(t,e){super(new mr(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},st(t=this.h=new Ix,0,1,e=new un)}get baseOptions(){return Nt(this.h,un,1)}set baseOptions(t){st(this.h,0,1,t)}o(t){return st(this.h,0,2,Em(t,Nt(this.h,yg,2))),this.l(t)}sa(t,e){return this.j={classifications:[]},gr(this,t,e),this.j}ta(t,e,n){return this.j={classifications:[]},Ur(this,t,n,e),this.j}m(){var t=new Ii;sn(t,"input_image"),sn(t,"norm_rect"),Ft(t,"classifications");const e=new Di;Ir(e,wR,this.h);const n=new gi;Pi(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Zt(n,"IMAGE:input_image"),Zt(n,"NORM_RECT:norm_rect"),At(n,"CLASSIFICATIONS:classifications"),n.o(e),Zi(t,n),this.g.attachProtoListener("classifications",((r,o)=>{this.j=LR(hR(r)),ze(this,o)})),this.g.attachEmptyPacketListener("classifications",(r=>{ze(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Wi.prototype.classifyForVideo=Wi.prototype.ta,Wi.prototype.classify=Wi.prototype.sa,Wi.prototype.setOptions=Wi.prototype.o,Wi.createFromModelPath=function(t,e){return Lt(Wi,t,{baseOptions:{modelAssetPath:e}})},Wi.createFromModelBuffer=function(t,e){return Lt(Wi,t,{baseOptions:{modelAssetBuffer:e}})},Wi.createFromOptions=function(t,e){return Lt(Wi,t,e)};var Ti=class extends Li{constructor(t,e){super(new mr(t,e),"image_in","norm_rect",!0),this.h=new Nx,this.embeddings={embeddings:[]},st(t=this.h,0,1,e=new un)}get baseOptions(){return Nt(this.h,un,1)}set baseOptions(t){st(this.h,0,1,t)}o(t){var e=this.h,n=Nt(this.h,Y1,2);return n=n?n.clone():new Y1,t.l2Normalize!==void 0?Vt(n,1,ou(t.l2Normalize)):"l2Normalize"in t&&Vt(n,1),t.quantize!==void 0?Vt(n,2,ou(t.quantize)):"quantize"in t&&Vt(n,2),st(e,0,2,n),this.l(t)}za(t,e){return gr(this,t,e),this.embeddings}Aa(t,e,n){return Ur(this,t,n,e),this.embeddings}m(){var t=new Ii;sn(t,"image_in"),sn(t,"norm_rect"),Ft(t,"embeddings_out");const e=new Di;Ir(e,AR,this.h);const n=new gi;Pi(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Zt(n,"IMAGE:image_in"),Zt(n,"NORM_RECT:norm_rect"),At(n,"EMBEDDINGS:embeddings_out"),n.o(e),Zi(t,n),this.g.attachProtoListener("embeddings_out",((r,o)=>{r=gR(r),this.embeddings=(function(l){return{embeddings:ls(l,mR,1).map((c=>{var p,g;const f={headIndex:qi(c,3)??0??-1,headName:kn(tn(c,4))??""??""};var d=c.v;return Ly(d,0|d[Ze],j1,vp(c,1))!==void 0?(c=To(c=Nt(c,j1,vp(c,1),void 0),1,Cr,Eo()),f.floatEmbedding=c.slice()):(d=new Uint8Array(0),f.quantizedEmbedding=((g=(p=Nt(c,pR,vp(c,2),void 0))==null?void 0:p.na())==null?void 0:g.h())??d),f})),timestampMs:Vx(tn(l,2,void 0,void 0,vf)??Ay)}})(r),ze(this,o)})),this.g.attachEmptyPacketListener("embeddings_out",(r=>{ze(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Ti.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=J1(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=J1(Q1(t.quantizedEmbedding),Q1(e.quantizedEmbedding))}return t},Ti.prototype.embedForVideo=Ti.prototype.Aa,Ti.prototype.embed=Ti.prototype.za,Ti.prototype.setOptions=Ti.prototype.o,Ti.createFromModelPath=function(t,e){return Lt(Ti,t,{baseOptions:{modelAssetPath:e}})},Ti.createFromModelBuffer=function(t,e){return Lt(Ti,t,{baseOptions:{modelAssetBuffer:e}})},Ti.createFromOptions=function(t,e){return Lt(Ti,t,e)};var Cm=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach((n=>{n.close()})),(e=this.categoryMask)==null||e.close()}};function kR(t){var n,r;const e=(function(o){return ls(o,gi,1)})(t.ca()).filter((o=>(kn(tn(o,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(t.u=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(((r=(n=Nt(e[0],Di,7))==null?void 0:n.j())==null?void 0:r.g())??new Map).forEach(((o,l)=>{t.u[Number(l)]=kn(tn(o,1))??""}))}function m2(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function g2(t){try{const e=new Cm(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{Qf(t)}}Cm.prototype.close=Cm.prototype.close;var fi=class extends Li{constructor(t,e){super(new mr(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new wg,this.A=new Ux,st(this.h,0,3,this.A),st(t=this.h,0,1,e=new un)}get baseOptions(){return Nt(this.h,un,1)}set baseOptions(t){st(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?Vt(this.h,2,vu(t.displayNamesLocale)):"displayNamesLocale"in t&&Vt(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}L(){kR(this)}segment(t,e,n){const r=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,m2(this),gr(this,t,r),g2(this)}La(t,e,n,r){const o=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:r,m2(this),Ur(this,t,o,e),g2(this)}Da(){return this.u}m(){var t=new Ii;sn(t,"image_in"),sn(t,"norm_rect");const e=new Di;Ir(e,Ox,this.h);const n=new gi;Pi(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Zt(n,"IMAGE:image_in"),Zt(n,"NORM_RECT:norm_rect"),n.o(e),Zi(t,n),Zf(this,t),this.outputConfidenceMasks&&(Ft(t,"confidence_masks"),At(n,"CONFIDENCE_MASKS:confidence_masks"),Ya(this,"confidence_masks"),this.g.aa("confidence_masks",((r,o)=>{this.confidenceMasks=r.map((l=>$a(this,l,!0,!this.j))),ze(this,o)})),this.g.attachEmptyPacketListener("confidence_masks",(r=>{this.confidenceMasks=[],ze(this,r)}))),this.outputCategoryMask&&(Ft(t,"category_mask"),At(n,"CATEGORY_MASK:category_mask"),Ya(this,"category_mask"),this.g.Z("category_mask",((r,o)=>{this.categoryMask=$a(this,r,!1,!this.j),ze(this,o)})),this.g.attachEmptyPacketListener("category_mask",(r=>{this.categoryMask=void 0,ze(this,r)}))),Ft(t,"quality_scores"),At(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((r,o)=>{this.qualityScores=r,ze(this,o)})),this.g.attachEmptyPacketListener("quality_scores",(r=>{this.categoryMask=void 0,ze(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};fi.prototype.getLabels=fi.prototype.Da,fi.prototype.segmentForVideo=fi.prototype.La,fi.prototype.segment=fi.prototype.segment,fi.prototype.setOptions=fi.prototype.o,fi.createFromModelPath=function(t,e){return Lt(fi,t,{baseOptions:{modelAssetPath:e}})},fi.createFromModelBuffer=function(t,e){return Lt(fi,t,{baseOptions:{modelAssetBuffer:e}})},fi.createFromOptions=function(t,e){return Lt(fi,t,e)};var Rm=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach((n=>{n.close()})),(e=this.categoryMask)==null||e.close()}};Rm.prototype.close=Rm.prototype.close;var Tr=class extends Li{constructor(t,e){super(new mr(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new wg,this.u=new Ux,st(this.h,0,3,this.u),st(t=this.h,0,1,e=new un)}get baseOptions(){return Nt(this.h,un,1)}set baseOptions(t){st(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,r){const o=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:r,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,r=new kx,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var l=new Mp;Bs(l,3,ou(!0),!1),Bs(l,1,Jl(e.keypoint.x),0),Bs(l,2,Jl(e.keypoint.y),0),eu(r,1,Mm,l)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{const f=new RR;for(l of e.scribble)Bs(e=new Mp,3,ou(!0),!1),Bs(e,1,Jl(l.x),0),Bs(e,2,Jl(l.y),0),ig(f,1,Mp,e);eu(r,2,Mm,f)}}this.g.addProtoToStream(r.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),gr(this,t,o);e:{try{const f=new Rm(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var c=f;break e}this.j(f)}finally{Qf(this)}c=void 0}return c}m(){var t=new Ii;sn(t,"image_in"),sn(t,"roi_in"),sn(t,"norm_rect_in");const e=new Di;Ir(e,Ox,this.h);const n=new gi;Pi(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),Zt(n,"IMAGE:image_in"),Zt(n,"ROI:roi_in"),Zt(n,"NORM_RECT:norm_rect_in"),n.o(e),Zi(t,n),Zf(this,t),this.outputConfidenceMasks&&(Ft(t,"confidence_masks"),At(n,"CONFIDENCE_MASKS:confidence_masks"),Ya(this,"confidence_masks"),this.g.aa("confidence_masks",((r,o)=>{this.confidenceMasks=r.map((l=>$a(this,l,!0,!this.j))),ze(this,o)})),this.g.attachEmptyPacketListener("confidence_masks",(r=>{this.confidenceMasks=[],ze(this,r)}))),this.outputCategoryMask&&(Ft(t,"category_mask"),At(n,"CATEGORY_MASK:category_mask"),Ya(this,"category_mask"),this.g.Z("category_mask",((r,o)=>{this.categoryMask=$a(this,r,!1,!this.j),ze(this,o)})),this.g.attachEmptyPacketListener("category_mask",(r=>{this.categoryMask=void 0,ze(this,r)}))),Ft(t,"quality_scores"),At(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((r,o)=>{this.qualityScores=r,ze(this,o)})),this.g.attachEmptyPacketListener("quality_scores",(r=>{this.categoryMask=void 0,ze(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Tr.prototype.segment=Tr.prototype.segment,Tr.prototype.setOptions=Tr.prototype.o,Tr.createFromModelPath=function(t,e){return Lt(Tr,t,{baseOptions:{modelAssetPath:e}})},Tr.createFromModelBuffer=function(t,e){return Lt(Tr,t,{baseOptions:{modelAssetBuffer:e}})},Tr.createFromOptions=function(t,e){return Lt(Tr,t,e)};var Xi=class extends Li{constructor(t,e){super(new mr(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},st(t=this.h=new Bx,0,1,e=new un)}get baseOptions(){return Nt(this.h,un,1)}set baseOptions(t){st(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?Vt(this.h,2,vu(t.displayNamesLocale)):"displayNamesLocale"in t&&Vt(this.h,2),t.maxResults!==void 0?us(this.h,3,t.maxResults):"maxResults"in t&&Vt(this.h,3),t.scoreThreshold!==void 0?nt(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&Vt(this.h,4),t.categoryAllowlist!==void 0?xf(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&Vt(this.h,5),t.categoryDenylist!==void 0?xf(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&Vt(this.h,6),this.l(t)}F(t,e){return this.j={detections:[]},gr(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Ur(this,t,n,e),this.j}m(){var t=new Ii;sn(t,"input_frame_gpu"),sn(t,"norm_rect"),Ft(t,"detections");const e=new Di;Ir(e,bR,this.h);const n=new gi;Pi(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Zt(n,"IMAGE:input_frame_gpu"),Zt(n,"NORM_RECT:norm_rect"),At(n,"DETECTIONS:detections"),n.o(e),Zi(t,n),this.g.attachProtoVectorListener("detections",((r,o)=>{for(const l of r)r=gx(l),this.j.detections.push(Hx(r));ze(this,o)})),this.g.attachEmptyPacketListener("detections",(r=>{ze(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Xi.prototype.detectForVideo=Xi.prototype.G,Xi.prototype.detect=Xi.prototype.F,Xi.prototype.setOptions=Xi.prototype.o,Xi.createFromModelPath=async function(t,e){return Lt(Xi,t,{baseOptions:{modelAssetPath:e}})},Xi.createFromModelBuffer=function(t,e){return Lt(Xi,t,{baseOptions:{modelAssetBuffer:e}})},Xi.createFromOptions=function(t,e){return Lt(Xi,t,e)};var bm=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){var t;(t=this.segmentationMasks)==null||t.forEach((e=>{e.close()}))}};function _2(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function v2(t){try{const e=new bm(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.u)return e;t.u(e)}finally{Qf(t)}}bm.prototype.close=bm.prototype.close;var wi=class extends Li{constructor(t,e){super(new mr(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,st(t=this.h=new zx,0,1,e=new un),this.A=new Lx,st(this.h,0,3,this.A),this.j=new Px,st(this.h,0,2,this.j),us(this.j,4,1),nt(this.j,2,.5),nt(this.A,2,.5),nt(this.h,4,.5)}get baseOptions(){return Nt(this.h,un,1)}set baseOptions(t){st(this.h,0,1,t)}o(t){return"numPoses"in t&&us(this.j,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&nt(this.j,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&nt(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&nt(this.A,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}F(t,e,n){const r=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:n,_2(this),gr(this,t,r),v2(this)}G(t,e,n,r){const o=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:r,_2(this),Ur(this,t,o,e),v2(this)}m(){var t=new Ii;sn(t,"image_in"),sn(t,"norm_rect"),Ft(t,"normalized_landmarks"),Ft(t,"world_landmarks"),Ft(t,"segmentation_masks");const e=new Di;Ir(e,PR,this.h);const n=new gi;Pi(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Zt(n,"IMAGE:image_in"),Zt(n,"NORM_RECT:norm_rect"),At(n,"NORM_LANDMARKS:normalized_landmarks"),At(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),Zi(t,n),Zf(this,t),this.g.attachProtoVectorListener("normalized_landmarks",((r,o)=>{this.landmarks=[];for(const l of r)r=Su(l),this.landmarks.push(Kf(r));ze(this,o)})),this.g.attachEmptyPacketListener("normalized_landmarks",(r=>{this.landmarks=[],ze(this,r)})),this.g.attachProtoVectorListener("world_landmarks",((r,o)=>{this.worldLandmarks=[];for(const l of r)r=Da(l),this.worldLandmarks.push(nu(r));ze(this,o)})),this.g.attachEmptyPacketListener("world_landmarks",(r=>{this.worldLandmarks=[],ze(this,r)})),this.outputSegmentationMasks&&(At(n,"SEGMENTATION_MASK:segmentation_masks"),Ya(this,"segmentation_masks"),this.g.aa("segmentation_masks",((r,o)=>{this.segmentationMasks=r.map((l=>$a(this,l,!0,!this.u))),ze(this,o)})),this.g.attachEmptyPacketListener("segmentation_masks",(r=>{this.segmentationMasks=[],ze(this,r)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};wi.prototype.detectForVideo=wi.prototype.G,wi.prototype.detect=wi.prototype.F,wi.prototype.setOptions=wi.prototype.o,wi.createFromModelPath=function(t,e){return Lt(wi,t,{baseOptions:{modelAssetPath:e}})},wi.createFromModelBuffer=function(t,e){return Lt(wi,t,{baseOptions:{modelAssetBuffer:e}})},wi.createFromOptions=function(t,e){return Lt(wi,t,e)},wi.POSE_CONNECTIONS=i3;const BR={Open_Palm:{target:"ringScale",value:1.8},Closed_Fist:{target:"ringScale",value:.4},Thumb_Up:{target:"brightness",value:2},Thumb_Down:{target:"brightness",value:.5},Victory:{target:"speed",value:3},ILoveYou:{target:"sparkle",value:1},Pointing_Up:{target:"focus",value:1}},zR={Open_Palm:"✋ 张开",Closed_Fist:"✊ 握拳",Thumb_Up:"👍 赞",Thumb_Down:"👎 踩",Victory:"✌️ 胜利",ILoveYou:"🤟 爱你",Pointing_Up:"☝️ 指上",None:"..."};function VR(){const t=qe.useRef(null),e=qe.useRef(null),n=qe.useRef(null),r=qe.useRef(null),o=qe.useRef([]),l=qe.useRef(!0),[c,f]=qe.useState("None"),[d,p]=qe.useState("..."),[g,_]=qe.useState(0),[y,S]=qe.useState("loading"),[E,w]=qe.useState(null),[x,v]=qe.useState(1),[D,L]=qe.useState(1),[R,q]=qe.useState(1),[B,F]=qe.useState(0),[G,b]=qe.useState(0),[C,z]=qe.useState(1),[le,J]=qe.useState(!1),[de,pe]=qe.useState(0),[se,ue]=qe.useState(!1);qe.useEffect(()=>{l.current=!0;async function Q(){try{const N=await wa.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.18/wasm");e.current=await di.createFromOptions(N,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/latest/gesture_recognizer.task"},runningMode:"VIDEO",numHands:1}),l.current&&S("ready")}catch(N){console.error("Model load error:",N),l.current&&(w(N.message||"模型加载失败"),S("error"))}}return Q(),()=>{l.current=!1}},[]);const k=qe.useCallback(async()=>{try{S("loading");const Q=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:"user"}});n.current=Q;const N=document.createElement("video");if(N.srcObject=Q,N.playsInline=!0,N.muted=!0,await N.play(),t.current=N,!l.current)return;S("active"),ae(N)}catch(Q){console.error("Camera error:",Q),l.current&&(w(Q.message||"摄像头启动失败"),S("error"))}},[]);function ae(Q){let N=0;const j=[],Ce=[];function K(ve){const he=BR[ve];if(!he){v(1),L(1),q(1),F(0),b(0);return}switch(he.target){case"ringScale":v(he.value),L(1),q(1),F(0),b(0);break;case"brightness":L(he.value),v(1),q(1),F(0),b(0);break;case"speed":q(he.value),v(1),L(1),F(0),b(0);break;case"sparkle":F(he.value),v(1),L(1),q(1),b(0);break;case"focus":b(he.value),v(1),L(1),q(1),F(0);break}}function fe(ve){if(l.current&&(r.current=requestAnimationFrame(fe),!(ve-N<60)&&(N=ve,!(!e.current||Q.readyState<2))))try{const he=e.current.recognizeForVideo(Q,performance.now());if(he.landmarks&&he.landmarks.length>0){const H=he.landmarks[0],ft=.35+(1-H[4].x)*1.85;j.push(ft),j.length>8&&j.shift();const et=j.reduce((re,Ie)=>re+Ie,0)/j.length;z(et),J(!0);const wt=H[0].x;Ce.push(wt),Ce.length>20&&Ce.shift();let We=0,P=0;for(let re=1;re<Ce.length;re++){const Ie=Ce[re]-Ce[re-1];if(Math.abs(Ie)<.012)continue;const Ee=Ie>0?1:-1;P!==0&&Ee!==P&&We++,P=Ee}const T=Math.min(...Ce),ce=Math.max(...Ce)-T,me=We>=4&&ce>.08;ue(me),pe(me?1:0)}else j.length=0,J(!1),Ce.length=0,ue(!1),pe(0);if(he.gestures.length>0&&he.gestures[0].length>0){const H=he.gestures[0][0];o.current.push({cat:H.categoryName,score:H.score})}else o.current.push({cat:"None",score:0});o.current.length>5&&o.current.shift();const _e={};o.current.forEach(H=>{_e[H.cat]=(_e[H.cat]||0)+1});const Ge=Object.entries(_e).sort((H,cn)=>cn[1]-H[1])[0],St=Ge[0],ct=Ge[1],Ct=o.current.length;ct>=2&&St!=="None"?(f(St),p(zR[St]||St),_(ct/Ct),K(St)):(f("None"),p("..."),_(0),K("None"))}catch{}}r.current=requestAnimationFrame(fe)}return qe.useEffect(()=>()=>{l.current=!1,r.current&&cancelAnimationFrame(r.current),n.current&&n.current.getTracks().forEach(Q=>Q.stop())},[]),{gesture:c,gestureLabel:d,confidence:g,phase:y,error:E,targetScale:x,targetBrightness:D,targetSpeed:R,targetSparkle:B,targetFocus:G,thumbBrightness:C,thumbActive:le,targetChaos:de,waveActive:se,videoRef:t,startCamera:k}}const y2=[{id:"default",name:"深空",icon:"🌌",colors:{core:"#1a2a44",ringA:"#ffcc77",ringB:"#66eecc",ringC:"#cc99ff",glow:"#4488cc"}},{id:"fire",name:"烈焰",icon:"🔥",colors:{core:"#2a1a0a",ringA:"#ff8844",ringB:"#ff4422",ringC:"#ffaa00",glow:"#ff6644"}},{id:"aurora",name:"极光",icon:"🌿",colors:{core:"#0a1a14",ringA:"#44ffaa",ringB:"#22cc88",ringC:"#8844ff",glow:"#44ffcc"}},{id:"void",name:"虚空",icon:"🕳️",colors:{core:"#0a0a14",ringA:"#8866cc",ringB:"#664488",ringC:"#332255",glow:"#5533aa"}}];function HR(){const{gesture:t,gestureLabel:e,confidence:n,phase:r,error:o,targetScale:l,targetBrightness:c,targetSpeed:f,targetSparkle:d,targetFocus:p,thumbBrightness:g,thumbActive:_,targetChaos:y,waveActive:S,videoRef:E,startCamera:w}=VR(),[x,v]=qe.useState(1),[D,L]=qe.useState(1),[R,q]=qe.useState(1),[B,F]=qe.useState(1),[G,b]=qe.useState(0),[C,z]=qe.useState(0),[le,J]=qe.useState(0),[de,pe]=qe.useState(0),[se,ue]=qe.useState(!1),[k,ae]=qe.useState("high");qe.useEffect(()=>{const j={};let Ce;function K(){j.ring=l,j.bright=_?g:c,j.speed=f,j.spark=d,j.focus=p,j.chaos=y}K();function fe(){Ce=requestAnimationFrame(fe);const ve=(_e,we,Ge)=>_e+(we-_e)*Ge;K(),v(_e=>{const we=j.ring-_e;return Math.abs(we)<.001?j.ring:_e+we*.15});const he=1+(l-1)*.357;L(_e=>{const we=he-_e;return Math.abs(we)<.001?he:_e+we*.15}),q(_e=>{const we=j.bright-_e;return Math.abs(we)<.003?j.bright:ve(_e,j.bright,.12)}),F(_e=>{const we=j.speed-_e;return Math.abs(we)<.003?j.speed:ve(_e,j.speed,.12)}),b(_e=>{const we=j.spark-_e;return Math.abs(we)<.005?j.spark:ve(_e,j.spark,.2)}),z(_e=>{const we=j.focus-_e;return Math.abs(we)<.003?j.focus:ve(_e,j.focus,.12)}),J(_e=>{const we=j.chaos-_e;return Math.abs(we)<.005?j.chaos:ve(_e,j.chaos,.25)})}return Ce=requestAnimationFrame(fe),()=>cancelAnimationFrame(Ce)},[l,c,f,d,p,g,_,y]);const Q=y2[de],N={Open_Palm:"扩张轨道",Closed_Fist:"压缩轨道",Thumb_Up:"增亮",Thumb_Down:"变暗",Victory:"加速旋转",ILoveYou:"核心闪光",Pointing_Up:"聚焦",None:""};return $e.jsxs("div",{className:"app",children:[$e.jsx(QA,{ringScale:x,planetScale:D,brightness:R,speed:B,sparkle:G,mode:Q.id,quality:k,focus:C,chaos:le}),$e.jsx(tC,{visible:C>.5}),$e.jsxs("div",{className:"hud-top",children:[$e.jsx("h1",{className:"title",children:"手势星球"}),$e.jsxs("div",{className:"mode-row",children:[$e.jsxs("button",{className:"mode-btn",onClick:()=>ue(!se),children:[Q.icon," ",Q.name]}),$e.jsx("button",{className:"eco-btn",onClick:()=>ae(j=>j==="high"?"eco":"high"),title:k==="high"?"切换节能模式":"切换高性能模式",children:k==="high"?"⚡":"🍃"})]})]}),se&&$e.jsx("div",{className:"mode-panel",children:y2.map((j,Ce)=>$e.jsxs("button",{className:`mode-chip ${Ce===de?"active":""}`,onClick:()=>{pe(Ce),ue(!1)},children:[j.icon," ",j.name]},j.id))}),r==="loading"&&$e.jsxs("div",{className:"loading-screen",children:[$e.jsx("div",{className:"spinner"}),$e.jsx("p",{children:"正在加载手势识别模型..."})]}),r==="ready"&&$e.jsxs("div",{className:"loading-screen",children:[$e.jsxs("button",{className:"start-camera-btn",onClick:w,children:[$e.jsx("span",{className:"btn-icon",children:"📷"}),"开启摄像头"]}),$e.jsx("p",{className:"btn-hint",children:"点击按钮后，浏览器会询问摄像头权限"})]}),r==="error"&&$e.jsxs("div",{className:"error-banner",children:[$e.jsx("p",{className:"error-title",children:"初始化失败"}),$e.jsx("p",{className:"error-msg",children:o}),$e.jsx("p",{className:"error-hint",children:"请确保已允许摄像头权限。使用 Chrome/Edge 请点击地址栏左侧的锁图标手动开启。"}),$e.jsx("button",{className:"start-camera-btn retry",onClick:w,children:"重试"})]}),r==="active"&&$e.jsx(JA,{videoRef:E,gesture:t,gestureLabel:e,confidence:n}),$e.jsxs("div",{className:"hud-bottom",children:[(t!=="None"||_||S)&&$e.jsxs("div",{className:"gesture-feedback",children:[$e.jsx("span",{className:"gf-icon",children:S?"👋":_?"👍":t==="Open_Palm"?"✋":t==="Closed_Fist"?"✊":t==="Thumb_Up"?"👍":t==="Thumb_Down"?"👎":t==="Victory"?"✌️":t==="ILoveYou"?"🤟":t==="Pointing_Up"?"☝️":"👋"}),$e.jsx("span",{className:"gf-effect",children:S?"👋 粒子散射":_?`亮度 ${(g*100).toFixed(0)}%`:N[t]||t})]}),$e.jsxs("div",{className:"indicators-row",children:[$e.jsxs("div",{className:"indicator",children:[$e.jsx("span",{className:"ind-dot ring-dot"}),$e.jsx("div",{className:"ind-track",children:$e.jsx("div",{className:"ind-fill ring-fill-2",style:{width:`${(x-.4)/(1.8-.4)*100}%`}})}),$e.jsx("span",{className:"ind-label",children:"轨道"})]}),$e.jsxs("div",{className:"indicator",children:[$e.jsx("span",{className:"ind-dot planet-dot"}),$e.jsx("div",{className:"ind-track",children:$e.jsx("div",{className:"ind-fill planet-fill-2",style:{width:`${(D-.75)/(1.3-.75)*100}%`}})}),$e.jsx("span",{className:"ind-label",children:"球体"})]}),$e.jsxs("div",{className:"indicator",children:[$e.jsx("span",{className:"ind-dot bright-dot"}),$e.jsx("div",{className:"ind-track",children:$e.jsx("div",{className:"ind-fill bright-fill",style:{width:`${(R-.5)/(2-.5)*100}%`}})}),$e.jsx("span",{className:"ind-label",children:"亮度"})]})]})]})]})}jS.createRoot(document.getElementById("root")).render($e.jsx(BS.StrictMode,{children:$e.jsx(HR,{})}));
