import{d as Q,y as ct,v as q,t as I,_ as ht,D as ut,n as U,Z as bt,au as wt,o as gt,b as At,l as pt,H as O,c as St,k as vt,m as Ct,q as Tt,s as Lt,e as _,a0 as z}from"./modules/vue-BLmQdX0u.js";import{l as Mt}from"./lz-string-BTt4z63d.js";import{u as ft,p as kt,f as Bt}from"./slidev/context--oUb8wjL.js";import{u as Et,x as Dt,z as Pt,_ as yt,A as V}from"./index-MJCQesGk.js";import{I as Ot}from"./slidev/default-DJU6Fd8h.js";import"./modules/file-saver-DY7lxZlc.js";import"./monaco/bundled-types-DAhpXgAL.js";import"./modules/shiki-vbwtq7uO.js";const Kt=Object.freeze({diffTimeout:1,diffEditCost:4,matchThreshold:.5,matchDistance:1e3,patchDeleteThreshold:.5,patchMargin:4,matchMaxBits:32});function Rt(e){if(e!=null&&e.__resolved)return e;const n={...Kt,...e};return Object.defineProperty(n,"__resolved",{value:!0,enumerable:!1}),n}const B=-1,k=1,T=0;function C(e,n){return[e,n]}function K(e,n,r,s=!0,t){const i=Rt(r);typeof t>"u"&&(i.diffTimeout<=0?t=Number.MAX_VALUE:t=new Date().getTime()+i.diffTimeout*1e3);const o=t;if(e==null||n==null)throw new Error("Null input. (diff_main)");if(e===n)return e?[C(T,e)]:[];const c=s;let a=X(e,n);const h=e.substring(0,a);e=e.substring(a),n=n.substring(a),a=j(e,n);const u=e.substring(e.length-a);e=e.substring(0,e.length-a),n=n.substring(0,n.length-a);const g=_t(e,n,i,c,o);return h&&g.unshift(C(T,h)),u&&g.push(C(T,u)),G(g),g}function _t(e,n,r,s,t){let i;if(!e)return[C(k,n)];if(!n)return[C(B,e)];const o=e.length>n.length?e:n,c=e.length>n.length?n:e,a=o.indexOf(c);if(a!==-1)return i=[C(k,o.substring(0,a)),C(T,c),C(k,o.substring(a+c.length))],e.length>n.length&&(i[0][0]=i[2][0]=B),i;if(c.length===1)return[C(B,e),C(k,n)];const h=Ht(e,n,r);if(h){const u=h[0],g=h[1],p=h[2],l=h[3],f=h[4],m=K(u,p,r,s,t),d=K(g,l,r,s,t);return m.concat([C(T,f)],d)}return s&&e.length>100&&n.length>100?Nt(e,n,r,t):qt(e,n,r,t)}function Nt(e,n,r,s){const t=zt(e,n);e=t.chars1,n=t.chars2;const i=t.lineArray,o=K(e,n,r,!1,s);jt(o,i),Wt(o),o.push(C(T,""));let c=0,a=0,h=0,u="",g="";for(;c<o.length;){switch(o[c][0]){case k:h++,g+=o[c][1];break;case B:a++,u+=o[c][1];break;case T:if(a>=1&&h>=1){o.splice(c-a-h,a+h),c=c-a-h;const p=K(u,g,r,!1,s);for(let l=p.length-1;l>=0;l--)o.splice(c,0,p[l]);c=c+p.length}h=0,a=0,u="",g="";break}c++}return o.pop(),o}function qt(e,n,r,s){const t=e.length,i=n.length,o=Math.ceil((t+i)/2),c=o,a=2*o,h=new Array(a),u=new Array(a);for(let w=0;w<a;w++)h[w]=-1,u[w]=-1;h[c+1]=0,u[c+1]=0;const g=t-i,p=g%2!==0;let l=0,f=0,m=0,d=0;for(let w=0;w<o&&!(new Date().getTime()>s);w++){for(let y=-w+l;y<=w-f;y+=2){const A=c+y;let b;y===-w||y!==w&&h[A-1]<h[A+1]?b=h[A+1]:b=h[A-1]+1;let S=b-y;for(;b<t&&S<i&&e.charAt(b)===n.charAt(S);)b++,S++;if(h[A]=b,b>t)f+=2;else if(S>i)l+=2;else if(p){const L=c+g-y;if(L>=0&&L<a&&u[L]!==-1){const v=t-u[L];if(b>=v)return Y(e,n,r,b,S,s)}}}for(let y=-w+m;y<=w-d;y+=2){const A=c+y;let b;y===-w||y!==w&&u[A-1]<u[A+1]?b=u[A+1]:b=u[A-1]+1;let S=b-y;for(;b<t&&S<i&&e.charAt(t-b-1)===n.charAt(i-S-1);)b++,S++;if(u[A]=b,b>t)d+=2;else if(S>i)m+=2;else if(!p){const L=c+g-y;if(L>=0&&L<a&&h[L]!==-1){const v=h[L],M=c+v-L;if(b=t-b,v>=b)return Y(e,n,r,v,M,s)}}}}return[C(B,e),C(k,n)]}function Y(e,n,r,s,t,i){const o=e.substring(0,s),c=n.substring(0,t),a=e.substring(s),h=n.substring(t),u=K(o,c,r,!1,i),g=K(a,h,r,!1,i);return u.concat(g)}function zt(e,n){const r=[],s={};let t=4e4;r[0]="";function i(a){let h="",u=0,g=-1,p=r.length;for(;g<a.length-1;){g=a.indexOf(`
`,u),g===-1&&(g=a.length-1);let l=a.substring(u,g+1);(s.hasOwnProperty?Object.prototype.hasOwnProperty.call(s,l):s[l]!==void 0)?h+=String.fromCharCode(s[l]):(p===t&&(l=a.substring(u),g=a.length),h+=String.fromCharCode(p),s[l]=p,r[p++]=l),u=g+1}return h}const o=i(e);t=65535;const c=i(n);return{chars1:o,chars2:c,lineArray:r}}function jt(e,n){for(let r=0;r<e.length;r++){const s=e[r][1],t=[];for(let i=0;i<s.length;i++)t[i]=n[s.charCodeAt(i)];e[r][1]=t.join("")}}function X(e,n){if(!e||!n||e.charAt(0)!==n.charAt(0))return 0;let r=0,s=Math.min(e.length,n.length),t=s,i=0;for(;r<t;)e.substring(i,t)===n.substring(i,t)?(r=t,i=r):s=t,t=Math.floor((s-r)/2+r);return t}function j(e,n){if(!e||!n||e.charAt(e.length-1)!==n.charAt(n.length-1))return 0;let r=0,s=Math.min(e.length,n.length),t=s,i=0;for(;r<t;)e.substring(e.length-t,e.length-i)===n.substring(n.length-t,n.length-i)?(r=t,i=r):s=t,t=Math.floor((s-r)/2+r);return t}function x(e,n){const r=e.length,s=n.length;if(r===0||s===0)return 0;r>s?e=e.substring(r-s):r<s&&(n=n.substring(0,r));const t=Math.min(r,s);if(e===n)return t;let i=0,o=1;for(;;){const c=e.substring(t-o),a=n.indexOf(c);if(a===-1)return i;o+=a,(a===0||e.substring(t-o)===n.substring(0,o))&&(i=o,o++)}}function Ht(e,n,r){if(r.diffTimeout<=0)return null;const s=e.length>n.length?e:n,t=e.length>n.length?n:e;if(s.length<4||t.length*2<s.length)return null;function i(f,m,d){const w=f.substring(d,d+Math.floor(f.length/4));let y=-1,A="",b,S,L,v;for(;(y=m.indexOf(w,y+1))!==-1;){const M=X(f.substring(d),m.substring(y)),N=j(f.substring(0,d),m.substring(0,y));A.length<N+M&&(A=m.substring(y-N,y)+m.substring(y,y+M),b=f.substring(0,d-N),S=f.substring(d+M),L=m.substring(0,y-N),v=m.substring(y+M))}return A.length*2>=f.length?[b,S,L,v,A]:null}const o=i(s,t,Math.ceil(s.length/4)),c=i(s,t,Math.ceil(s.length/2));let a;if(!o&&!c)return null;c?o?a=o[4].length>c[4].length?o:c:a=c:a=o;let h,u,g,p;e.length>n.length?(h=a[0],u=a[1],g=a[2],p=a[3]):(g=a[0],p=a[1],h=a[2],u=a[3]);const l=a[4];return[h,u,g,p,l]}function Wt(e){let n=!1;const r=[];let s=0,t=null,i=0,o=0,c=0,a=0,h=0;for(;i<e.length;)e[i][0]===T?(r[s++]=i,o=a,c=h,a=0,h=0,t=e[i][1]):(e[i][0]===k?a+=e[i][1].length:h+=e[i][1].length,t&&t.length<=Math.max(o,c)&&t.length<=Math.max(a,h)&&(e.splice(r[s-1],0,C(B,t)),e[r[s-1]+1][0]=k,s--,s--,i=s>0?r[s-1]:-1,o=0,c=0,a=0,h=0,t=null,n=!0)),i++;for(n&&G(e),Qt(e),i=1;i<e.length;){if(e[i-1][0]===B&&e[i][0]===k){const u=e[i-1][1],g=e[i][1],p=x(u,g),l=x(g,u);p>=l?(p>=u.length/2||p>=g.length/2)&&(e.splice(i,0,C(T,g.substring(0,p))),e[i-1][1]=u.substring(0,u.length-p),e[i+1][1]=g.substring(p),i++):(l>=u.length/2||l>=g.length/2)&&(e.splice(i,0,C(T,u.substring(0,l))),e[i-1][0]=k,e[i-1][1]=g.substring(0,g.length-l),e[i+1][0]=B,e[i+1][1]=u.substring(l),i++),i++}i++}}const J=/[^a-zA-Z0-9]/,Z=/\s/,$=/[\r\n]/,Ft=/\n\r?\n$/,It=/^\r?\n\r?\n/;function Qt(e){function n(s,t){if(!s||!t)return 6;const i=s.charAt(s.length-1),o=t.charAt(0),c=i.match(J),a=o.match(J),h=c&&i.match(Z),u=a&&o.match(Z),g=h&&i.match($),p=u&&o.match($),l=g&&s.match(Ft),f=p&&t.match(It);return l||f?5:g||p?4:c&&!h&&u?3:h||u?2:c||a?1:0}let r=1;for(;r<e.length-1;){if(e[r-1][0]===T&&e[r+1][0]===T){let s=e[r-1][1],t=e[r][1],i=e[r+1][1];const o=j(s,t);if(o){const g=t.substring(t.length-o);s=s.substring(0,s.length-o),t=g+t.substring(0,t.length-o),i=g+i}let c=s,a=t,h=i,u=n(s,t)+n(t,i);for(;t.charAt(0)===i.charAt(0);){s+=t.charAt(0),t=t.substring(1)+i.charAt(0),i=i.substring(1);const g=n(s,t)+n(t,i);g>=u&&(u=g,c=s,a=t,h=i)}e[r-1][1]!==c&&(c?e[r-1][1]=c:(e.splice(r-1,1),r--),e[r][1]=a,h?e[r+1][1]=h:(e.splice(r+1,1),r--))}r++}}function G(e){e.push(C(T,""));let n=0,r=0,s=0,t="",i="",o;for(;n<e.length;)switch(e[n][0]){case k:s++,i+=e[n][1],n++;break;case B:r++,t+=e[n][1],n++;break;case T:r+s>1?(r!==0&&s!==0&&(o=X(i,t),o!==0&&(n-r-s>0&&e[n-r-s-1][0]===T?e[n-r-s-1][1]+=i.substring(0,o):(e.splice(0,0,C(T,i.substring(0,o))),n++),i=i.substring(o),t=t.substring(o)),o=j(i,t),o!==0&&(e[n][1]=i.substring(i.length-o)+e[n][1],i=i.substring(0,i.length-o),t=t.substring(0,t.length-o))),n-=r+s,e.splice(n,r+s),t.length&&(e.splice(n,0,C(B,t)),n++),i.length&&(e.splice(n,0,C(k,i)),n++),n++):n!==0&&e[n-1][0]===T?(e[n-1][1]+=e[n][1],e.splice(n,1)):n++,s=0,r=0,t="",i="";break}e[e.length-1][1]===""&&e.pop();let c=!1;for(n=1;n<e.length-1;)e[n-1][0]===T&&e[n+1][0]===T&&(e[n][1].substring(e[n][1].length-e[n-1][1].length)===e[n-1][1]?(e[n][1]=e[n-1][1]+e[n][1].substring(0,e[n][1].length-e[n-1][1].length),e[n+1][1]=e[n-1][1]+e[n+1][1],e.splice(n-1,1),c=!0):e[n][1].substring(0,e[n+1][1].length)===e[n+1][1]&&(e[n-1][1]+=e[n+1][1],e[n][1]=e[n][1].substring(e[n+1][1].length)+e[n+1][1],e.splice(n+1,1),c=!0)),n++;c&&G(e)}const tt=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function Xt(e,n){n?n={...tt,...n}:n=tt;const r=mt(n);return r.dispatch(e),r.toString()}const Gt=Object.freeze(["prototype","__proto__","constructor"]);function mt(e){let n="",r=new Map;const s=t=>{n+=t};return{toString(){return n},getContext(){return r},dispatch(t){return e.replacer&&(t=e.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const i=Object.prototype.toString.call(t);let o="";const c=i.length;c<10?o="unknown:["+i+"]":o=i.slice(8,c-1),o=o.toLowerCase();let a=null;if((a=r.get(t))===void 0)r.set(t,r.size);else return this.dispatch("[CIRCULAR:"+a+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return s("buffer:"),s(t.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](t):e.ignoreUnknown||this.unkown(t,o);else{let h=Object.keys(t);e.unorderedObjects&&(h=h.sort());let u=[];e.respectType!==!1&&!et(t)&&(u=Gt),e.excludeKeys&&(h=h.filter(p=>!e.excludeKeys(p)),u=u.filter(p=>!e.excludeKeys(p))),s("object:"+(h.length+u.length)+":");const g=p=>{this.dispatch(p),s(":"),e.excludeValues||this.dispatch(t[p]),s(",")};for(const p of h)g(p);for(const p of u)g(p)}},array(t,i){if(i=i===void 0?e.unorderedArrays!==!1:i,s("array:"+t.length+":"),!i||t.length<=1){for(const a of t)this.dispatch(a);return}const o=new Map,c=t.map(a=>{const h=mt(e);h.dispatch(a);for(const[u,g]of h.getContext())o.set(u,g);return h.toString()});return r=o,c.sort(),this.array(c,!1)},date(t){return s("date:"+t.toJSON())},symbol(t){return s("symbol:"+t.toString())},unkown(t,i){if(s(i),!!t&&(s(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return s("error:"+t.toString())},boolean(t){return s("bool:"+t)},string(t){s("string:"+t.length+":"),s(t)},function(t){s("fn:"),et(t)?this.dispatch("[native]"):this.dispatch(t.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),e.respectFunctionProperties&&this.object(t)},number(t){return s("number:"+t)},xml(t){return s("xml:"+t.toString())},null(){return s("Null")},undefined(){return s("Undefined")},regexp(t){return s("regex:"+t.toString())},uint8array(t){return s("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return s("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return s("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return s("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return s("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return s("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return s("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return s("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return s("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return s("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return s("url:"+t.toString())},map(t){s("map:");const i=[...t];return this.array(i,e.unorderedSets!==!1)},set(t){s("set:");const i=[...t];return this.array(i,e.unorderedSets!==!1)},file(t){return s("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(e.ignoreUnknown)return s("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return s("domwindow")},bigint(t){return s("bigint:"+t.toString())},process(){return s("process")},timer(){return s("timer")},pipe(){return s("pipe")},tcp(){return s("tcp")},udp(){return s("udp")},tty(){return s("tty")},statwatcher(){return s("statwatcher")},securecontext(){return s("securecontext")},connection(){return s("connection")},zlib(){return s("zlib")},context(){return s("context")},nodescript(){return s("nodescript")},httpparser(){return s("httpparser")},dataview(){return s("dataview")},signal(){return s("signal")},fsevent(){return s("fsevent")},tlswrap(){return s("tlswrap")}}}const dt="[native code] }",Ut=dt.length;function et(e){return typeof e!="function"?!1:Function.prototype.toString.call(e).slice(-Ut)===dt}class D{constructor(n,r){n=this.words=n||[],this.sigBytes=r===void 0?n.length*4:r}toString(n){return(n||Vt).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let r=0;r<n.sigBytes;r++){const s=n.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=s<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<n.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=n.words[r>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new D([...this.words])}}const Vt={stringify(e){const n=[];for(let r=0;r<e.sigBytes;r++){const s=e.words[r>>>2]>>>24-r%4*8&255;n.push((s>>>4).toString(16),(s&15).toString(16))}return n.join("")}},Yt={stringify(e){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let s=0;s<e.sigBytes;s+=3){const t=e.words[s>>>2]>>>24-s%4*8&255,i=e.words[s+1>>>2]>>>24-(s+1)%4*8&255,o=e.words[s+2>>>2]>>>24-(s+2)%4*8&255,c=t<<16|i<<8|o;for(let a=0;a<4&&s*8+a*6<e.sigBytes*8;a++)r.push(n.charAt(c>>>6*(3-a)&63))}return r.join("")}},xt={parse(e){const n=e.length,r=[];for(let s=0;s<n;s++)r[s>>>2]|=(e.charCodeAt(s)&255)<<24-s%4*8;return new D(r,n)}},Jt={parse(e){return xt.parse(unescape(encodeURIComponent(e)))}};class Zt{constructor(){this._data=new D,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new D,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=Jt.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,r){}_process(n){let r,s=this._data.sigBytes/(this.blockSize*4);n?s=Math.ceil(s):s=Math.max((s|0)-this._minBufferSize,0);const t=s*this.blockSize,i=Math.min(t*4,this._data.sigBytes);if(t){for(let o=0;o<t;o+=this.blockSize)this._doProcessBlock(this._data.words,o);r=this._data.words.splice(0,t),this._data.sigBytes-=i}return new D(r,i)}}class $t extends Zt{update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}const nt=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],te=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],P=[];class ee extends $t{constructor(){super(...arguments),this._hash=new D([...nt])}reset(){super.reset(),this._hash=new D([...nt])}_doProcessBlock(n,r){const s=this._hash.words;let t=s[0],i=s[1],o=s[2],c=s[3],a=s[4],h=s[5],u=s[6],g=s[7];for(let p=0;p<64;p++){if(p<16)P[p]=n[r+p]|0;else{const A=P[p-15],b=(A<<25|A>>>7)^(A<<14|A>>>18)^A>>>3,S=P[p-2],L=(S<<15|S>>>17)^(S<<13|S>>>19)^S>>>10;P[p]=b+P[p-7]+L+P[p-16]}const l=a&h^~a&u,f=t&i^t&o^i&o,m=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),d=(a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25),w=g+d+l+te[p]+P[p],y=m+f;g=u,u=h,h=a,a=c+w|0,c=o,o=i,i=t,t=w+y|0}s[0]=s[0]+t|0,s[1]=s[1]+i|0,s[2]=s[2]+o|0,s[3]=s[3]+c|0,s[4]=s[4]+a|0,s[5]=s[5]+h|0,s[6]=s[6]+u|0,s[7]=s[7]+g|0}finalize(n){super.finalize(n);const r=this._nDataBytes*8,s=this._data.sigBytes*8;return this._data.words[s>>>5]|=128<<24-s%32,this._data.words[(s+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(s+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function ne(e){return new ee().finalize(e).toString(Yt)}function se(e,n={}){const r=typeof e=="string"?e:Xt(e,n);return ne(r).slice(0,10)}function re(e,n,r=""){const s=se(e+r);let t=0;const i=ie(n).flatMap(o=>{const c=o[o.length-1];return c?t=c.offset+c.content.length:t+=1,[...o,{content:`
`,offset:t}]}).map((o,c)=>{const a=o;return a.key=`${s}-${c}`,a});return{code:e,hash:s,tokens:i}}function ie(e){return e.map(n=>n.flatMap(r=>{if(r.content.match(/^\s+$/))return r;const s=r.content.match(/^(\s*)(.*?)(\s*)$/);if(!s)return r;const[,t,i,o]=s;if(!t&&!o)return r;const c=[{...r,offset:r.offset+t.length,content:i}];return t&&c.unshift({content:t,offset:r.offset}),o&&c.push({content:o,offset:r.offset+t.length+i.length}),c}))}function oe(e,n){let r=0;const s=e.key;let t=0;const i=[];function o(){return t===0?(t++,s):`${s}-${t++}`}for(const c of n)c>r&&i.push({...e,content:e.content.slice(r,c),offset:e.offset+r,key:o()}),r=c;return r<e.content.length&&i.push({...e,content:e.content.slice(r),offset:e.offset+r,key:o()}),i}function st(e,n){const r=Array.from(n instanceof Set?n:new Set(n)).sort((s,t)=>s-t);return r.length?e.flatMap(s=>{const t=r.filter(i=>s.offset<i&&i<s.offset+s.content.length).map(i=>i-s.offset).sort((i,o)=>i-o);return t.length?oe(s,t):s}):e}function ae(e,n,r={}){const{splitTokens:s=!1,enhanceMatching:t=!0}=r,i=le(e.code,n.code,r),o=s?st(e.tokens,i.flatMap(h=>h.from)):e.tokens,c=s?st(n.tokens,i.flatMap(h=>h.to)):n.tokens,a=new Set;if(i.forEach(h=>{var f,m;const u=o.filter(d=>d.offset>=h.from[0]&&d.offset+d.content.length<=h.from[1]),g=c.filter(d=>d.offset>=h.to[0]&&d.offset+d.content.length<=h.to[1]);let p=0,l=0;for(;p<u.length&&l<g.length&&!(!u[p]||!g[l]);)u[p].content===g[l].content?(g[l].key=u[p].key,a.add(u[p].key),p++,l++):((f=u[p+1])==null?void 0:f.content)===g[l].content?p++:(u[p].content===((m=g[l+1])==null?void 0:m.content)||p++,l++)}),t)for(const h of o){if(a.has(h.key)||h.content.length<3||!h.content.match(/^[\w\d_-]+$/))continue;const u=c.find(g=>g.content===h.content&&!a.has(g.key));u&&(u.key=h.key,a.add(h.key))}return{from:o.length===e.tokens.length?e:{...e,tokens:o},to:c.length===n.tokens.length?n:{...n,tokens:c}}}function le(e,n,r={}){var c;let s=K(e,n);s=((c=r.diffCleanup)==null?void 0:c.call(r,s))||s;let t="",i="";const o=[];for(const[a,h]of s)a===0?(o.push({from:[t.length,t.length+h.length],to:[i.length,i.length+h.length],content:h}),t+=h,i+=h):a===-1?t+=h:a===1&&(i+=h);if(t!==e||i!==n)throw new Error("Content mismatch");return o}var ce=Object.defineProperty,he=(e,n,r)=>n in e?ce(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,R=(e,n,r)=>(he(e,typeof n!="symbol"?n+"":n,r),r);const E="shiki-magic-move",H=`${E}-leave-from`,ue=`${E}-leave-to`,rt=`${E}-leave-active`,W=`${E}-enter-from`,F=`${E}-enter-to`,it=`${E}-enter-active`,ot=`${E}-move`,at=`${E}-container-resize`,lt=`${E}-container-restyle`,ge={globalScale:1,duration:500,delayMove:.3,delayLeave:.1,delayEnter:.7,delayContainer:.4,stagger:0,easing:"ease",animateContainer:!0,containerStyle:!0};class pe{constructor(n,r={}){R(this,"mapDom",new Map),R(this,"container"),R(this,"anchor"),R(this,"previousPromises",[]),R(this,"options"),R(this,"isFirstRender",!0),this.options={...ge,...r},typeof n=="string"?this.container=document.querySelector(n):this.container=n,this.anchor=document.createElement("span"),this.anchor.style.position="absolute",this.anchor.style.top="0",this.anchor.style.left="0",this.anchor.style.height="1px",this.anchor.style.width="1px",this.container.prepend(this.anchor)}applyElementContent(n,r){r.content!==`
`&&(n.textContent=r.content,n.classList.add(`${E}-item`))}applyElementStyle(n,r){r.htmlStyle&&n.setAttribute("style",r.htmlStyle),r.color&&(n.style.color=r.color),r.bgColor&&(n.style.backgroundColor=r.bgColor)}applyElement(n,r){this.applyElementContent(n,r),this.applyElementStyle(n,r)}applyContainerStyle(n){if(this.options.containerStyle&&(n.bg&&(this.container.style.backgroundColor=n.bg),n.fg&&(this.container.style.color=n.fg),n.rootStyle)){const r=n.rootStyle.split(";");for(const s of r){const[t,i]=s.split(":");t&&i&&this.container.style.setProperty(t.trim(),i.trim())}}}registerTransitionEnd(n,r){let s=!1,t=()=>{};const i=new Promise(o=>{const c=a=>{!a||a.target!==n||t()};t=()=>{s||(s=!0,n.removeEventListener("transitionend",c),r(),o())},n.addEventListener("transitionend",c)});return i.resolve=t,i}setCssVariables(){this.container.style.setProperty("--smm-duration",`${this.options.duration}ms`),this.container.style.setProperty("--smm-delay-move",`${this.options.delayMove}`),this.container.style.setProperty("--smm-delay-leave",`${this.options.delayLeave}`),this.container.style.setProperty("--smm-delay-enter",`${this.options.delayEnter}`),this.container.style.setProperty("--smm-delay-container",`${this.options.delayContainer}`),this.container.style.setProperty("--smm-easing",this.options.easing),this.container.style.setProperty("--smm-stagger","0")}replace(n){const r=new Map,s=n.tokens.map(t=>{if(this.mapDom.has(t.key)){const i=this.mapDom.get(t.key);return this.applyElement(i,t),r.set(t.key,i),this.mapDom.delete(t.key),i}else{const i=document.createElement(t.content===`
`?"br":"span");return this.applyElement(i,t),r.set(t.key,i),i}});this.container.replaceChildren(this.anchor,...s),this.applyContainerStyle(n),this.mapDom=r}render(n){this.setCssVariables();const r=new Map,s=[],t=[],i=[],o=[];this.previousPromises.forEach(l=>l.resolve()),this.previousPromises=[];const c=[],{globalScale:a}=this.options,h=new Map;let u=this.anchor.getBoundingClientRect();const g=this.container.getBoundingClientRect();for(const l of this.mapDom.values()){const f=l.getBoundingClientRect();h.set(l,{x:f.x-u.x,y:f.y-u.y})}const p=n.tokens.map(l=>{if(this.mapDom.has(l.key)){const f=this.mapDom.get(l.key);return this.applyElementContent(f,l),c.push(()=>{this.applyElementStyle(f,l)}),s.push(f),r.set(l.key,f),this.mapDom.delete(l.key),f}else{const f=document.createElement(l.content===`
`?"br":"span");return this.applyElement(f,l),t.push(f),r.set(l.key,f),f}});for(const[l,f]of this.mapDom)f.tagName!=="BR"&&i.push(f);for(const l of i)l.style.position="absolute";if(this.container.replaceChildren(this.anchor,...p,...i),this.mapDom=r,i.forEach((l,f)=>{l.style.position="absolute";const m=h.get(l);l.style.top=`${m.y/a}px`,l.style.left=`${m.x/a}px`,this.options.stagger?l.style.setProperty("--smm-stagger",`${f*this.options.stagger}ms`):l.style.removeProperty("--smm-stagger"),l.classList.add(H),l.classList.add(rt),c.unshift(()=>{l.classList.remove(H),l.classList.add(ue)}),o.push(this.registerTransitionEnd(l,()=>{l.classList.remove(H),l.classList.remove(rt),l.classList.remove(F),l.remove()}))}),this.isFirstRender||t.forEach((l,f)=>{l.classList.add(W),l.classList.add(it),this.options.stagger?l.style.setProperty("--smm-stagger",`${f*this.options.stagger}ms`):l.style.removeProperty("--smm-stagger"),c.push(()=>{l.classList.remove(W),l.classList.add(F)}),o.push(this.registerTransitionEnd(l,()=>{l.classList.remove(W),l.classList.remove(it),l.classList.remove(F)}))}),u=this.anchor.getBoundingClientRect(),s.forEach((l,f)=>{const m=l.getBoundingClientRect(),d={x:m.x-u.x,y:m.y-u.y},w=h.get(l);l.style.transitionDuration=l.style.transitionDelay="0ms";const y=(w.x-d.x)/a,A=(w.y-d.y)/a;l.style.transform=`translate(${y}px, ${A}px)`,this.options.stagger?l.style.setProperty("--smm-stagger",`${f*this.options.stagger}ms`):l.style.removeProperty("--smm-stagger"),c.unshift(()=>{l.classList.add(ot),l.style.transform=l.style.transitionDuration=l.style.transitionDelay=""}),o.push(this.registerTransitionEnd(l,()=>{l.classList.remove(ot)}))}),this.options.animateContainer&&!this.isFirstRender){const l=this.container.getBoundingClientRect();(l.width!==g.width||l.height!==g.height)&&(this.container.style.transitionDuration=this.container.style.transitionDelay="0ms",this.container.style.height=`${g.height/a}px`,this.container.style.width=`${g.width/a}px`,c.unshift(()=>{this.container.classList.add(at),this.container.style.transitionDuration=this.container.style.transitionDelay="",this.container.style.height=`${l.height/a}px`,this.container.style.width=`${l.width/a}px`}),o.push(this.registerTransitionEnd(this.container,()=>{this.container.classList.remove(at),this.container.style.height=this.container.style.width=""})))}return this.options.containerStyle&&(this.isFirstRender?this.applyContainerStyle(n):(c.push(()=>{this.container.classList.add(lt),this.applyContainerStyle(n)}),o.push(this.registerTransitionEnd(this.container,()=>{this.container.classList.remove(lt)})))),fe(),c.forEach(l=>l()),this.isFirstRender=!1,this.previousPromises=o,Promise.all(o).then()}}function fe(){return document.body.offsetHeight}const ye=Q({name:"ShikiMagicMoveRenderer",props:{animate:{type:Boolean,default:!0},tokens:{type:Object,required:!0},previous:{type:Object,required:!1},options:{type:Object}},emits:["end","start"],setup(e,{emit:n}){const r=I();let s=!1;return ht(()=>{r.value.innerHTML="",s=!0;const t=new pe(r.value);ut(()=>e.tokens,async i=>{if(Object.assign(t.options,e.options),e.animate){e.previous&&t.replace(e.previous),await U();const o=t.render(i);await U(),n("start"),await o,n("end")}else t.replace(i)},{immediate:!0})}),()=>q("pre",{ref:r,class:"shiki-magic-move-container"},s?void 0:bt(e.tokens.tokens,t=>t.content===`
`?q("br",{key:t.key}):q("span",{style:[{color:t.color},t.htmlStyle],class:"shiki-magic-move-item",key:t.key},t.content)))}}),me=Q({name:"ShikiMagicMovePrecompiled",props:{steps:{type:Array,required:!0},step:{type:Number,default:0},animate:{type:Boolean,default:!0},options:{type:Object,default:()=>({})}},emits:["start","end"],setup(e,{emit:n}){let s=re("",[]);const t=ct(()=>{const i=ae(s,e.steps[Math.min(e.step,e.steps.length-1)],e.options);return s=i.to,i});return()=>q(ye,{tokens:t.value.to,previous:t.value.from,options:e.options,animate:e.animate,onStart:()=>n("start"),onEnd:()=>n("end")})}}),de=Q({__name:"ShikiMagicMove",props:{at:{type:[String,Number],required:!1},stepsLz:{type:String,required:!0},stepRanges:{type:Array,required:!0}},setup(e){const n=e,r=JSON.parse(Mt.decompressFromBase64(n.stepsLz)),{$clicksContext:s,$scale:t,$zoom:i}=ft(),{isPrintMode:o}=Et(),c=Dt(),a=I(0),h=I(),u=ct(()=>n.stepRanges.map(g=>g.length?g:["all"]));return wt(()=>{s==null||s.unregister(c)}),ht(()=>{if(!s)return;if(u.value.length!==r.length)throw new Error("[slidev] The length of stepRanges does not match the length of steps, this is an internal error.");const g=u.value.map(m=>m.length).reduce((m,d)=>m+d,0),{start:p,end:l,delta:f}=s.resolve(n.at??"+1",g-1);s.register(c,{max:l,delta:f}),ut(()=>s.current,()=>{var L;const m=s.current-p;let d=r.length-1,w=0,y="all";for(let v=0;v<u.value.length;v++){const M=u.value[v];if(m<w+M.length-1){d=v,y=M[m-w+1];break}w+=M.length||1}a.value=d;const A=(L=h.value)==null?void 0:L.querySelector(".shiki");if(!A)return;const S=Array.from(A.children).slice(1).filter(v=>!v.className.includes("shiki-magic-move-leave")).reduce((v,M)=>(M.tagName==="BR"?v.push([]):v[v.length-1].push(M),v),[[]]);Pt(y,S.length,1,v=>S[v])},{immediate:!0})}),(g,p)=>(gt(),At("div",{ref_key:"container",ref:h,class:"slidev-code-wrapper slidev-code-magic-move relative"},[pt(O(me),{class:"slidev-code relative shiki overflow-visible",steps:O(r),step:a.value,animate:!O(o),options:{globalScale:O(t)*O(i),duration:800,stagger:1}},null,8,["steps","step","animate","options"])],512))}}),be=yt(de,[["__file","C:/Users/yidia/Desktop/preparedppt/PreparedPPT/node_modules/@slidev/client/builtin/ShikiMagicMove.vue"]]),we=_("h1",null,"Shiki Magic Move",-1),Ae=_("p",null,[z("Powered by "),_("a",{href:"https://shiki-magic-move.netlify.app/",target:"_blank",rel:"noopener"},"shiki-magic-move"),z(", Slidev supports animations across multiple code snippets.")],-1),Se=_("p",null,[z("Add multiple code blocks and wrap them with "),_("code",null,"````md magic-move"),z(" (four backticks) to enable the magic move. For example:")],-1),ve={__name:"6",setup(e){return kt(V),ft(),(n,r)=>{const s=be;return gt(),St(Ot,Tt(Lt(O(Bt)(O(V),5))),{default:vt(()=>[we,Ae,Se,pt(s,Ct({},{"steps-lz":"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","step-ranges":[["*","2","*"],["*","1-2","3-4","3-4,8"],[],[]]}),null,16)]),_:1},16)}}},Pe=yt(ve,[["__file","/@slidev/slides/6.md"]]);export{Pe as default};
