import{B as b,C as m,D as O,F as N,G as C,A as W,H as j,I as B,J as k,K as H,L as q,M as Y,N as T,O as w,P as I,Q as F,m as v,R as G,S as U,T as $,U as z,V as J,W as K,X as Q,j as X,p as x,c as Z,l as S,q as ee}from"./Cu7MqC9k.js";import{b as te}from"./BckB5gud.js";function de(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const re=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function fe(e){return re.includes(e)}const ae={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function _e(e){return e=e.toLowerCase(),ae[e]??e}const oe=["touchstart","touchmove"];function ne(e){return oe.includes(e)}function ie(e){var t=O,a=N;b(null),m(null);try{return e()}finally{b(t),m(a)}}const V=new Set,L=new Set;function se(e,t,a,s={}){function n(r){if(s.capture||y.call(t,r),!r.cancelBubble)return ie(()=>a==null?void 0:a.call(this,r))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?B(()=>{t.addEventListener(e,n,s)}):t.addEventListener(e,n,s),n}function pe(e,t,a,s,n){var r={capture:s,passive:n},u=se(e,t,a,r);(t===document.body||t===window||t===document)&&j(()=>{t.removeEventListener(e,u,r)})}function he(e){for(var t=0;t<e.length;t++)V.add(e[t]);for(var a of L)a(e)}function y(e){var R;var t=this,a=t.ownerDocument,s=e.type,n=((R=e.composedPath)==null?void 0:R.call(e))||[],r=n[0]||e.target,u=0,_=e.__root;if(_){var d=n.indexOf(_);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var p=n.indexOf(t);if(p===-1)return;d<=p&&(u=d)}if(r=n[u]||e.target,r!==t){C(e,"currentTarget",{configurable:!0,get(){return r||a}});var E=O,c=N;b(null),m(null);try{for(var o,i=[];r!==null;){var l=r.assignedSlot||r.parentNode||r.host||null;try{var f=r["__"+s];if(f!==void 0&&(!r.disabled||e.target===r))if(W(f)){var[P,...M]=f;P.apply(r,[e,...M])}else f.call(r,e)}catch(g){o?i.push(g):o=g}if(e.cancelBubble||l===t||l===null)break;r=l}if(o){for(let g of i)queueMicrotask(()=>{throw g});throw o}}finally{e.__root=t,delete e.currentTarget,b(E),m(c)}}}function ve(e,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a+"")}function ue(e,t){return D(e,t)}function ye(e,t){k(),t.intro=t.intro??!1;const a=t.target,s=S,n=v;try{for(var r=H(a);r&&(r.nodeType!==8||r.data!==q);)r=Y(r);if(!r)throw T;w(!0),I(r),F();const u=D(e,{...t,anchor:r});if(v===null||v.nodeType!==8||v.data!==G)throw U(),T;return w(!1),u}catch(u){if(u===T)return t.recover===!1&&$(),k(),z(a),w(!1),ue(e,t);throw u}finally{w(s),I(n)}}const h=new Map;function D(e,{target:t,anchor:a,props:s={},events:n,context:r,intro:u=!0}){k();var _=new Set,d=c=>{for(var o=0;o<c.length;o++){var i=c[o];if(!_.has(i)){_.add(i);var l=ne(i);t.addEventListener(i,y,{passive:l});var f=h.get(i);f===void 0?(document.addEventListener(i,y,{passive:l}),h.set(i,1)):h.set(i,f+1)}}};d(J(V)),L.add(d);var p=void 0,E=K(()=>{var c=a??t.appendChild(Q());return X(()=>{if(r){x({});var o=Z;o.c=r}n&&(s.$$events=n),S&&te(c,null),p=e(c,s)||{},S&&(N.nodes_end=v),r&&ee()}),()=>{var l;for(var o of _){t.removeEventListener(o,y);var i=h.get(o);--i===0?(document.removeEventListener(o,y),h.delete(o)):h.set(o,i)}L.delete(d),c!==a&&((l=c.parentNode)==null||l.removeChild(c))}});return A.set(p,E),p}let A=new WeakMap;function ge(e,t){const a=A.get(e);return a?(A.delete(e),a(t)):Promise.resolve()}export{fe as a,se as c,he as d,pe as e,ye as h,de as i,ue as m,_e as n,ve as s,ge as u};
