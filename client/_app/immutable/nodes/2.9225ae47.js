import{s as me,f as B,g as C,h as I,d as f,i as _,A as Ee,o as he,B as ke,r as De,u as Ie,v as Oe,w as Se,p as Qe,a as Q,C as Fe,c as F,j as b,x as w,D as ve,l as O,m as S,E as Z,F as ie,n as X,G as Ge,e as ce}from"../chunks/scheduler.9a237aef.js";import{S as _e,i as we,a as G,g as be,t as Y,c as Be,b as J,d as K,m as $,e as x}from"../chunks/index.6c2636d8.js";import{L as He,e as y,a as Ve,g as Ye,M as Ue,p as Xe}from"../chunks/pin.4ea6fe40.js";const je=!1,lt=Object.freeze(Object.defineProperty({__proto__:null,ssr:je},Symbol.toStringTag,{value:"Module"}));function ue(r){let e;const s=r[3].default,t=De(s,r,r[2],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,i){t&&t.m(l,i),e=!0},p(l,i){t&&t.p&&(!e||i&4)&&Ie(t,s,l,l[2],e?Se(s,l[2],i,null):Oe(l[2]),null)},i(l){e||(G(t,l),e=!0)},o(l){Y(t,l),e=!1},d(l){t&&t.d(l)}}}function Me(r){let e,s,t=r[1]&&ue(r);return{c(){e=B("div"),t&&t.c()},l(l){e=C(l,"DIV",{});var i=I(e);t&&t.l(i),i.forEach(f)},m(l,i){_(l,e,i),t&&t.m(e,null),r[4](e),s=!0},p(l,[i]){l[1]?t?(t.p(l,i),i&2&&G(t,1)):(t=ue(l),t.c(),G(t,1),t.m(e,null)):t&&(be(),Y(t,1,1,()=>{t=null}),Be())},i(l){s||(G(t),s=!0)},o(l){Y(t),s=!1},d(l){l&&f(e),t&&t.d(),r[4](null)}}}function Re(r,e,s){let{$$slots:t={},$$scope:l}=e,i,n,a=!1;const{getLayer:c}=Ee("layer"),A=c();he(()=>{i=He.popup().setContent(n),A&&(A.bindPopup(i),A.on("popupopen",()=>s(1,a=!0)),A.on("popupclose",()=>s(1,a=!1)))}),ke(()=>{A==null||A.unbindPopup(),i==null||i.remove(),i=void 0});function L(h){Qe[h?"unshift":"push"](()=>{n=h,s(0,n)})}return r.$$set=h=>{"$$scope"in h&&s(2,l=h.$$scope)},[n,a,l,t,L]}class ze extends _e{constructor(e){super(),we(this,e,Re,Me,me,{})}}const Te="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABuwAAAbsBOuzj4gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAT5SURBVHic7ZtPaNRHFMc/bxsNFI2ECBIL4kElUpFAIuKlCLXYUEgOitXkUA8Fi4cS2mOFJlDSYqEe27SF2tL2ZGxaKkn/XIRSiuZQxf6xh3aLEiuC+CetiVW/Pcxv281v57f5ZbO7s83mC3PYN2/evHkzv7dv3swgiTQFGAAUKwNp21eqLFSvDHWOJQOEViA06t4AFjmS/whm3UAX0AlsBZYH0KucuAucByaAMUmfzarN86ZrgJMUetTFVk4Ca/4dd97gr9aActUqV3NGyBmgHma+YCXkPv/uGlAmVOnO4BxeHJeB54CVkkySAYMevsFcfagyl17Aymgslz18XQ04bx/HK5KGPfT/HSRNAcNmBvBWrLozg/uri+OjSisWAL4xbc3g+Z+PrLaokDCm5UuRIM4bzkLkPBYdzKxgrHW/AureAA0+opkNVFmPYPD6gHpC3X8CSwYIrUBoeJ0g/g3GYsDLccJSIBRCkVrCkgFCKxAaSU5wFsxsPbA+Rs5KylaSrwL4C3g4TizIlZV6AFluvgocpG4BLub3m2oF1ALMbAXwJNAGrAVaccmcK8AkkAXGJU0myZB0wcw6gfeAPZDyEwgFM8sA+4FeYBfQOEcTmdkZ4AQwLOl2AYN028z2AR8AfTXrBKMjuvO4XN5TzD14cHHNduB14Fcz6zezgnaSHgDPACNpV0AWOO2hlZ3PzJqAj3GDXghWA8eAw2bWI+mn/EpJ983sAKRwgtUqwAbgR59OCyw3gC5fnzUTCpvZBuA7oKUI2zRwDnfSOwFMAR24s40OoLlI2wfAPkkj8YrgKwBoovjMXwAeAxrmkLMJGC0iZwpoj7WpCQN8nqDwPWAIaJynvD7geoLM34GWeX0ClYzwIm//qafqN+BpSWdL1KUVeB94wiP7mKQXcj+qHgnm8Wdwy9s389sS2qTuA1gFXPLwTwPrpPDX5PYDj3roR+MzXwok3QSe9VQ1Akcg/G6w10P7gTJmpCR9AbzrqdprZsuCGSCK7Xd5qg5Lmilzdy8CN2O0ZmBnqEgQ3MYmHqZOA9+m1Ck1JN0yswng8VhVTyoDSDoOHC8XX4Q2D+2cpHsp2+ej3cwO5v3+Q9J4jMdngLaQu8G1HtpEibJ6opLDacBngAIdQjrBVg+tVAOkgU92a0gD+G6gVvJmiveGSJCcYIQrHloHLplRCXT4dEjrAw5SeKoyiIvKSuEDl8aKw3djLY7vcSFuMfycUvZkSCeY9dB8szQLkkZxO775wmeAbEgfME7hRqzZzDaVu6Mot7jNUzUWzABy2dsznqqjFejueeCRGO0ucCpkJAjO4W2P0XrMrE9SWS5rmtlGXE4hjq8k3YKACRHcPd5rHh2uA61lkJ8BvvGNEdihWsgIAf0JCn4JrFrg4F9NkD2ax8eMh2FFFQ3QCPySoOglYHcJMjcWmfk7wOZ8A5z1MB2q8irYjEtdJyUz3wGaUs56P+4QNElWb6wNbyZY/lCVV0IXcL+I4jeAr4HXgL24iHM1sBt4CfgE9yYgqb2AIU+/VX8x8iewJcEIe3AxeyX6HSJ6JTerz6jjar8Zuoh7jeIzQjsudV2uvu4QW/Y+A4R4NXYCyCQYoQV4A5chWkgfo+Q5vEQD5Bmh2ivhQ+ChIn5hHfA2yYccvjKDO2jZkcb31MLL0RHggKS/kxjMbBmwE5f1KXZBYgw4pSjCS4N/AByXxJDmIZsQAAAAAElFTkSuQmCC",ye="data:image/png;base64,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";function fe(r,e,s){const t=r.slice();return t[11]=e[s],t}function Ae(r,e,s){const t=r.slice();return t[11]=e[s],t}function Ne(r){let e;return{c(){e=B("div"),this.h()},l(s){e=C(s,"DIV",{class:!0}),I(e).forEach(f),this.h()},h(){b(e,"class","w-2.5 h-2.5 bg-red-500 rounded-full mr-3")},m(s,t){_(s,e,t)},d(s){s&&f(e)}}}function Pe(r){let e;return{c(){e=B("div"),this.h()},l(s){e=C(s,"DIV",{class:!0}),I(e).forEach(f),this.h()},h(){b(e,"class","w-2.5 h-2.5 bg-green-500 rounded-full mr-3")},m(s,t){_(s,e,t)},d(s){s&&f(e)}}}function ge(r){let e,s,t,l,i,n,a=r[11].imei+"",c,A,L,h,p=r[11].latLng[0]+"",o,g,m=r[11].latLng[1]+"",d,k,E,u,v,W,N,j,U,ee,P,q,te;function le(V,D){return D&4&&(t=null),t==null&&(t=!!$e(V[11].date)),t?Pe:Ne}let M=le(r,-1),H=M(r);function Ce(){return r[5](r[11])}function Le(){return r[6](r[11])}return{c(){e=B("div"),s=B("div"),H.c(),l=Q(),i=B("button"),n=B("span"),c=O(a),A=Q(),L=B("div"),h=B("p"),o=O(p),g=O(", "),d=O(m),k=Q(),E=B("div"),u=B("button"),v=B("img"),N=Q(),j=B("button"),U=B("img"),P=Q(),this.h()},l(V){e=C(V,"DIV",{class:!0});var D=I(e);s=C(D,"DIV",{class:!0});var R=I(s);H.l(R),l=F(R),i=C(R,"BUTTON",{class:!0});var se=I(i);n=C(se,"SPAN",{});var ne=I(n);c=S(ne,a),ne.forEach(f),se.forEach(f),R.forEach(f),A=F(D),L=C(D,"DIV",{class:!0});var ae=I(L);h=C(ae,"P",{class:!0});var z=I(h);o=S(z,p),g=S(z,", "),d=S(z,m),z.forEach(f),ae.forEach(f),k=F(D),E=C(D,"DIV",{class:!0});var T=I(E);u=C(T,"BUTTON",{class:!0});var re=I(u);v=C(re,"IMG",{src:!0,width:!0,alt:!0}),re.forEach(f),N=F(T),j=C(T,"BUTTON",{class:!0});var oe=I(j);U=C(oe,"IMG",{src:!0,width:!0,alt:!0}),oe.forEach(f),T.forEach(f),P=F(D),D.forEach(f),this.h()},h(){b(i,"class","flex cursor-pointer text-red-800 font-bold"),b(s,"class","w-full flex items-center justify-center"),b(h,"class","font-semibold"),b(L,"class","w-full flex items-center justify-center mb-3"),Z(v.src,W=Te)||b(v,"src",W),b(v,"width","20"),b(v,"alt","pin"),b(u,"class","flex-grow hover:bg-slate-300 border flex justify-center text-white rounded-l p-2"),Z(U.src,ee=ye)||b(U,"src",ee),b(U,"width","20"),b(U,"alt","pin"),b(j,"class","flex-grow hover:bg-slate-300 border flex justify-center text-white rounded-r p-2"),b(E,"class","w-full flex mb-5"),b(e,"class","flex items-center flex-col")},m(V,D){_(V,e,D),w(e,s),H.m(s,null),w(s,l),w(s,i),w(i,n),w(n,c),w(e,A),w(e,L),w(L,h),w(h,o),w(h,g),w(h,d),w(e,k),w(e,E),w(E,u),w(u,v),w(E,N),w(E,j),w(j,U),w(e,P),q||(te=[ie(i,"click",Ce),ie(u,"click",Le)],q=!0)},p(V,D){r=V,M!==(M=le(r,D))&&(H.d(1),H=M(r),H&&(H.c(),H.m(s,l))),D&4&&a!==(a=r[11].imei+"")&&X(c,a),D&4&&p!==(p=r[11].latLng[0]+"")&&X(o,p),D&4&&m!==(m=r[11].latLng[1]+"")&&X(d,m)},d(V){V&&f(e),H.d(),q=!1,Ge(te)}}}function qe(r){let e,s=r[11].latLng[0]+"",t,l,i,n,a=r[11].latLng[1]+"",c,A,L,h,p=r[11].imei+"",o,g,m,d,k=pe(r[11].date)+"",E;return{c(){e=O("Latitud: "),t=O(s),l=Q(),i=B("br"),n=O(`\r
					Longitud: `),c=O(a),A=Q(),L=B("br"),h=O(`\r
					Imei: `),o=O(p),g=Q(),m=B("br"),d=O(`\r
					Último registro: `),E=O(k)},l(u){e=S(u,"Latitud: "),t=S(u,s),l=F(u),i=C(u,"BR",{}),n=S(u,`\r
					Longitud: `),c=S(u,a),A=F(u),L=C(u,"BR",{}),h=S(u,`\r
					Imei: `),o=S(u,p),g=F(u),m=C(u,"BR",{}),d=S(u,`\r
					Último registro: `),E=S(u,k)},m(u,v){_(u,e,v),_(u,t,v),_(u,l,v),_(u,i,v),_(u,n,v),_(u,c,v),_(u,A,v),_(u,L,v),_(u,h,v),_(u,o,v),_(u,g,v),_(u,m,v),_(u,d,v),_(u,E,v)},p(u,v){v&4&&s!==(s=u[11].latLng[0]+"")&&X(t,s),v&4&&a!==(a=u[11].latLng[1]+"")&&X(c,a),v&4&&p!==(p=u[11].imei+"")&&X(o,p),v&4&&k!==(k=pe(u[11].date)+"")&&X(E,k)},d(u){u&&(f(e),f(t),f(l),f(i),f(n),f(c),f(A),f(L),f(h),f(o),f(g),f(m),f(d),f(E))}}}function Ze(r){let e,s,t,l,i,n;return l=new ze({props:{$$slots:{default:[qe]},$$scope:{ctx:r}}}),{c(){e=B("img"),t=Q(),J(l.$$.fragment),i=Q(),this.h()},l(a){e=C(a,"IMG",{src:!0,alt:!0}),t=F(a),K(l.$$.fragment,a),i=F(a),this.h()},h(){Z(e.src,s=Xe)||b(e,"src",s),b(e,"alt","pin")},m(a,c){_(a,e,c),_(a,t,c),$(l,a,c),_(a,i,c),n=!0},p(a,c){const A={};c&65540&&(A.$$scope={dirty:c,ctx:a}),l.$set(A)},i(a){n||(G(l.$$.fragment,a),n=!0)},o(a){Y(l.$$.fragment,a),n=!1},d(a){a&&(f(e),f(t),f(i)),x(l,a)}}}function de(r){let e,s;return e=new Ue({props:{latLng:r[11].latLng,width:10,height:10,$$slots:{default:[Ze]},$$scope:{ctx:r}}}),{c(){J(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,l){$(e,t,l),s=!0},p(t,l){const i={};l&4&&(i.latLng=t[11].latLng),l&65540&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){s||(G(e.$$.fragment,t),s=!0)},o(t){Y(e.$$.fragment,t),s=!1},d(t){x(e,t)}}}function Je(r){let e,s,t=y(r[2]),l=[];for(let n=0;n<t.length;n+=1)l[n]=de(fe(r,t,n));const i=n=>Y(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=ce()},l(n){for(let a=0;a<l.length;a+=1)l[a].l(n);e=ce()},m(n,a){for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(n,a);_(n,e,a),s=!0},p(n,a){if(a&4){t=y(n[2]);let c;for(c=0;c<t.length;c+=1){const A=fe(n,t,c);l[c]?(l[c].p(A,a),G(l[c],1)):(l[c]=de(A),l[c].c(),G(l[c],1),l[c].m(e.parentNode,e))}for(be(),c=t.length;c<l.length;c+=1)i(c);Be()}},i(n){if(!s){for(let a=0;a<t.length;a+=1)G(l[a]);s=!0}},o(n){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)Y(l[a]);s=!1},d(n){n&&f(e),ve(l,n)}}}function Ke(r){let e,s,t="Vehículos",l,i,n,a,c,A,L,h=y(r[2]),p=[];for(let o=0;o<h.length;o+=1)p[o]=ge(Ae(r,h,o));return A=new Ve({props:{view:r[0],zoom:r[1],$$slots:{default:[Je]},$$scope:{ctx:r}}}),{c(){e=B("div"),s=B("div"),s.textContent=t,l=Q(),i=B("div"),n=B("div");for(let o=0;o<p.length;o+=1)p[o].c();a=Q(),c=B("div"),J(A.$$.fragment),this.h()},l(o){e=C(o,"DIV",{class:!0});var g=I(e);s=C(g,"DIV",{class:!0,"data-svelte-h":!0}),Fe(s)!=="svelte-1o45mwq"&&(s.textContent=t),l=F(g),i=C(g,"DIV",{class:!0});var m=I(i);n=C(m,"DIV",{class:!0});var d=I(n);for(let E=0;E<p.length;E+=1)p[E].l(d);d.forEach(f),m.forEach(f),g.forEach(f),a=F(o),c=C(o,"DIV",{class:!0});var k=I(c);K(A.$$.fragment,k),k.forEach(f),this.h()},h(){b(s,"class","font-bold text-xl mb-4 border-b pb-2"),b(n,"class","space-y-3"),b(i,"class","space-y-3"),b(e,"class","w-80 h-auto p-4 lastten shadow-lg rounded-lg svelte-b30hd8"),b(c,"class","w-full h-screen")},m(o,g){_(o,e,g),w(e,s),w(e,l),w(e,i),w(i,n);for(let m=0;m<p.length;m+=1)p[m]&&p[m].m(n,null);_(o,a,g),_(o,c,g),$(A,c,null),L=!0},p(o,[g]){if(g&28){h=y(o[2]);let d;for(d=0;d<h.length;d+=1){const k=Ae(o,h,d);p[d]?p[d].p(k,g):(p[d]=ge(k),p[d].c(),p[d].m(n,null))}for(;d<p.length;d+=1)p[d].d(1);p.length=h.length}const m={};g&1&&(m.view=o[0]),g&2&&(m.zoom=o[1]),g&65540&&(m.$$scope={dirty:g,ctx:o}),A.$set(m)},i(o){L||(G(A.$$.fragment,o),L=!0)},o(o){Y(A.$$.fragment,o),L=!1},d(o){o&&(f(e),f(a),f(c)),ve(p,o),x(A)}}}function pe(r){const e=new Date(r);let s=r.slice(0,10);const t=String(e.getUTCHours()).padStart(2,"0"),l=String(e.getUTCMinutes()).padStart(2,"0"),i=String(e.getUTCSeconds()).padStart(2,"0");return`${s} ${t}:${l}:${i}`}function $e(r){const e=r.split(".")[0],s=new Date(e),t=new Date,l=Math.abs(t.getTime()-s.getTime()),i=l/1e3;return console.log(s,t,l,i),i<=10}function xe(r,e,s){var t=[0,0];function l(o,g){s(0,t=[o,g]),s(1,i=18)}var i=4,n=[];let a=[];async function c(o){const g=await fetch("http://20.206.201.79:3030/lastone");if(g.ok){var m=await g.json();console.log(m),m.length>0?(s(2,n=[]),m.forEach(d=>{d.lat&&d.lon?n.push({latLng:[d.lat,d.lon],imei:d.imei,date:d.fecha}):console.error("Los datos recibidos no contienen la latitud y longitud esperadas.")}),o==1&&s(0,t=[n[n.length-1].latLng[0],n[n.length-1].latLng[1]])):console.error("Los datos recibidos están vacíos.")}else console.error("Error al obtener los datos:",g.statusText)}async function A(){const o=await fetch("http://20.206.201.79:3030/lastten");o.ok?(a=await o.json(),console.log(a)):console.error("Error al obtener los datos:",o.statusText)}he(()=>{c(1),A();const o=setInterval(c,1e4),g=setInterval(A,1e4);return()=>{clearInterval(o),clearInterval(g)}});function L(o,g,m){const d=encodeURIComponent(o),k=encodeURIComponent(g),E=encodeURIComponent(m);Ye(`/historial?imei=${d}&lat=${k}&lon=${E}`)}return[t,i,n,l,L,o=>l(o.latLng[0],o.latLng[1]),o=>L(o.imei,o.latLng[0],o.latLng[1])]}class st extends _e{constructor(e){super(),we(this,e,xe,Ke,me,{})}}export{st as component,lt as universal};
