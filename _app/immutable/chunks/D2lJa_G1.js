import{a2 as b,a3 as m,a4 as O,G as A,a5 as j,a6 as C,a7 as W,i as B,a8 as k,a9 as H,aa as Y,ab as q,ac as T,N as w,M as I,J as G,p as v,ad as $,ae as z,af as F,ag as J,ah as U,ai as x,aj as K,k as Q,s as X,c as Z,o as S,v as ee}from"./BEfldumh.js";import{b as te}from"./BcrS4YBY.js";function de(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const re=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function fe(e){return re.includes(e)}const ae={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function _e(e){return e=e.toLowerCase(),ae[e]??e}const oe=["touchstart","touchmove"];function ne(e){return oe.includes(e)}function ie(e){var t=O,a=A;b(null),m(null);try{return e()}finally{b(t),m(a)}}const V=new Set,L=new Set;function se(e,t,a,s={}){function n(r){if(s.capture||y.call(t,r),!r.cancelBubble)return ie(()=>a==null?void 0:a.call(this,r))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?C(()=>{t.addEventListener(e,n,s)}):t.addEventListener(e,n,s),n}function pe(e,t,a,s,n){var r={capture:s,passive:n},u=se(e,t,a,r);(t===document.body||t===window||t===document)&&j(()=>{t.removeEventListener(e,u,r)})}function he(e){for(var t=0;t<e.length;t++)V.add(e[t]);for(var a of L)a(e)}function y(e){var R;var t=this,a=t.ownerDocument,s=e.type,n=((R=e.composedPath)==null?void 0:R.call(e))||[],r=n[0]||e.target,u=0,_=e.__root;if(_){var d=n.indexOf(_);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var p=n.indexOf(t);if(p===-1)return;d<=p&&(u=d)}if(r=n[u]||e.target,r!==t){W(e,"currentTarget",{configurable:!0,get(){return r||a}});var E=O,c=A;b(null),m(null);try{for(var o,i=[];r!==null;){var l=r.assignedSlot||r.parentNode||r.host||null;try{var f=r["__"+s];if(f!==void 0&&(!r.disabled||e.target===r))if(B(f)){var[M,...P]=f;M.apply(r,[e,...P])}else f.call(r,e)}catch(g){o?i.push(g):o=g}if(e.cancelBubble||l===t||l===null)break;r=l}if(o){for(let g of i)queueMicrotask(()=>{throw g});throw o}}finally{e.__root=t,delete e.currentTarget,b(E),m(c)}}}function ve(e,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a+"")}function ue(e,t){return D(e,t)}function ye(e,t){k(),t.intro=t.intro??!1;const a=t.target,s=S,n=v;try{for(var r=H(a);r&&(r.nodeType!==8||r.data!==Y);)r=q(r);if(!r)throw T;w(!0),I(r),G();const u=D(e,{...t,anchor:r});if(v===null||v.nodeType!==8||v.data!==$)throw z(),T;return w(!1),u}catch(u){if(u===T)return t.recover===!1&&F(),k(),J(a),w(!1),ue(e,t);throw u}finally{w(s),I(n)}}const h=new Map;function D(e,{target:t,anchor:a,props:s={},events:n,context:r,intro:u=!0}){k();var _=new Set,d=c=>{for(var o=0;o<c.length;o++){var i=c[o];if(!_.has(i)){_.add(i);var l=ne(i);t.addEventListener(i,y,{passive:l});var f=h.get(i);f===void 0?(document.addEventListener(i,y,{passive:l}),h.set(i,1)):h.set(i,f+1)}}};d(U(V)),L.add(d);var p=void 0,E=x(()=>{var c=a??t.appendChild(K());return Q(()=>{if(r){X({});var o=Z;o.c=r}n&&(s.$$events=n),S&&te(c,null),p=e(c,s)||{},S&&(A.nodes_end=v),r&&ee()}),()=>{var l;for(var o of _){t.removeEventListener(o,y);var i=h.get(o);--i===0?(document.removeEventListener(o,y),h.delete(o)):h.set(o,i)}L.delete(d),c!==a&&((l=c.parentNode)==null||l.removeChild(c))}});return N.set(p,E),p}let N=new WeakMap;function ge(e,t){const a=N.get(e);return a?(N.delete(e),a(t)):Promise.resolve()}export{fe as a,se as c,he as d,pe as e,ye as h,de as i,ue as m,_e as n,ve as s,ge as u};
