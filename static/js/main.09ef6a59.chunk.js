(this["webpackJsonpstrip-janken"]=this["webpackJsonpstrip-janken"]||[]).push([[0],{13:function(e,n,t){e.exports=t(21)},18:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);var a,r,c,i,o=t(0),s=t.n(o),l=t(8),u=t.n(l),E=(t(18),t(12)),m=t(3);!function(e){e[e.CHOICE=0]="CHOICE",e[e.RESULT=1]="RESULT",e[e.STRIP_VIDEO=2]="STRIP_VIDEO",e[e.GAME_OVER_LOSE=3]="GAME_OVER_LOSE",e[e.GAME_OVER_WIN=4]="GAME_OVER_WIN"}(a||(a={})),function(e){e[e.ROCK=0]="ROCK",e[e.PAPER=1]="PAPER",e[e.SCISSOR=2]="SCISSOR"}(r||(r={})),function(e){e[e.WIN=0]="WIN",e[e.LOSE=1]="LOSE",e[e.DRAW=2]="DRAW"}(c||(c={})),function(e){e[e.CHOICE=0]="CHOICE",e[e.CALCULATE=1]="CALCULATE",e[e.NEXT_ROUND=2]="NEXT_ROUND",e[e.RESTART=3]="RESTART"}(i||(i={}));var h={heart:3,clothes:4,screen:a.CHOICE,videoUrl:"/videos/".concat(4,".mp4")},p={state:h,dispatch:function(){}},f=s.a.createContext(p),v=t(1),O=t(2);function d(){var e=Object(v.a)(["\n    width: ","px;\n    height: ","px;\n    transform: rotate(","deg);\n"]);return d=function(){return e},e}var b=O.a.img(d(),(function(e){return e.size}),(function(e){return e.size}),(function(e){return e.rotate})),C=function(e){var n=e.choice,t=e.size,a=void 0===t?120:t;switch(n){case r.ROCK:return s.a.createElement(b,{rotate:-15,size:a,alt:"rock",src:"https://img.icons8.com/color/96/000000/clenched-fist.png"});case r.SCISSOR:return s.a.createElement(b,{rotate:-80,size:a,alt:"paper",src:"https://img.icons8.com/color/96/000000/hand-scissors.png"});case r.PAPER:return s.a.createElement(b,{rotate:15,size:a,alt:"scissor",src:"https://img.icons8.com/color/96/000000/hand.png"})}};function R(){var e=Object(v.a)(["\n    opacity: 0.8;\n    cursor: pointer;\n    background-color: transparent;\n    border: none;\n    transition: all 0.5s;\n\n    &:hover {\n        opacity: 1;\n        transform: translateY(-10px) scale(1.2);\n    }\n"]);return R=function(){return e},e}function g(){var e=Object(v.a)(["\n    position: absolute;\n    width: 100vw;\n    bottom: 10vh;\n    text-align: center;\n"]);return g=function(){return e},e}function S(){var e=Object(v.a)(["\n    position: relative;\n    height: 100vh;\n    /* background-image: url('/images/bg.jpg'); */\n"]);return S=function(){return e},e}var I=O.a.div(S()),A=O.a.div(g()),y=O.a.button(R()),N=function(){var e=s.a.useContext(f).dispatch,n=s.a.useCallback((function(n){e({type:i.CHOICE,choice:n})}),[e]);return s.a.createElement(I,null,s.a.createElement(A,null,[r.ROCK,r.SCISSOR,r.PAPER].map((function(e){return s.a.createElement(y,{key:e,onClick:function(){return n(e)}},s.a.createElement(C,{choice:e}))}))))};function T(){var e=Object(v.a)(["\n    margin-bottom: 32px;\n"]);return T=function(){return e},e}function x(){var e=Object(v.a)(["\n    margin: 20px;\n    font-size: 40px;\n"]);return x=function(){return e},e}function _(){var e=Object(v.a)(["\n    transform: rotate(180deg);\n"]);return _=function(){return e},e}function j(){var e=Object(v.a)(["\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n"]);return j=function(){return e},e}var w=O.a.div(j()),k=O.a.div(_()),L=O.a.div(x()),U=O.a.div(T()),V=function(){var e=s.a.useContext(f),n=e.state,t=e.dispatch,a=n.botChoice,r=n.playerChoice,o=n.matchResult,l=s.a.useCallback((function(){return t({type:i.CALCULATE})}),[t]),u=s.a.createElement("span",null);switch(o){case c.WIN:u=s.a.createElement("span",{className:"nes-text is-success"}," Th\u1eafng r\u1ed3i ahihi!!");break;case c.DRAW:u=s.a.createElement("span",{className:"nes-text is-primary"}," Ho\xe0");break;case c.LOSE:u=s.a.createElement("span",{className:"nes-text is-error"}," Thua r\xf9i l\xeau l\xeau!!")}return s.a.createElement(w,null,s.a.createElement(k,null,s.a.createElement(C,{size:240,choice:a})),s.a.createElement(L,null,u),s.a.createElement(U,null,s.a.createElement(C,{size:240,choice:r})),s.a.createElement("button",{onClick:l,type:"button",className:"nes-btn is-primary"},"Ti\u1ebfp t\u1ee5c"))};function W(){var e=Object(v.a)(["\n    position: absolute;\n    width: 100vw;\n    bottom: 10vh;\n    text-align: center;\n"]);return W=function(){return e},e}var P=O.a.div(W()),D=function(){var e=s.a.useContext(f).dispatch,n=s.a.useCallback((function(){e({type:i.NEXT_ROUND})}),[e]);return s.a.createElement(P,null,s.a.createElement("button",{type:"button",className:"nes-btn is-primary",onClick:n},"Skip, h\xf4ng th\xe8m coi"))};function z(){var e=Object(v.a)(["\n    display: flex;\n    height: 100vh;\n    align-items: center;\n    justify-content: center;\n"]);return z=function(){return e},e}var H=O.a.div(z()),M=function(e){var n=e.screen,t=s.a.useContext(f).dispatch;return s.a.createElement(H,null,s.a.createElement("section",{className:"message-list"},s.a.createElement("section",{className:"message -left"},s.a.createElement("i",{className:"nes-octocat animate"}),s.a.createElement("div",{className:"nes-balloon from-left"},n===a.GAME_OVER_WIN&&s.a.createElement("p",null,"Ch\xfac m\u1eebng b\u1ea1n \u0111\xe3 chi\u1ebfn th\u1eafng ahihi!"),n===a.GAME_OVER_LOSE&&s.a.createElement("p",null,"Thua r\u1ed3i, nh\u1ee5c qu\xe1, ch\u01a1i l\u1ea1i \u0111i hihi!"),s.a.createElement("button",{type:"button",className:"nes-btn is-primary",onClick:function(){t({type:i.RESTART})}},"Ch\u01a1i l\u1ea1i")))))};function G(){var e=Object(v.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    opacity: 0.75;\n    object-fit: cover;\n    z-index: -1;\n"]);return G=function(){return e},e}var X=O.a.video(G()),K=function(e){var n=e.play,t=e.videoUrl,a=e.onVideoEnded,r=s.a.useRef(null);return s.a.useEffect((function(){var e=r.current;return e&&(e.currentTime=0,n&&e.play()),function(){e&&e.pause()}}),[n,r]),s.a.createElement(X,{key:t,ref:r,onEnded:a},s.a.createElement("source",{src:t,type:"video/mp4"}))};function B(){var e=Object(v.a)(["\n    z-index: 1;\n    position: absolute;\n    top: 5px;\n    right: 5px;\n\n    .clothes {\n        width: 60px;\n        height: 60px;\n    }\n"]);return B=function(){return e},e}function J(){var e=Object(v.a)(["\n    z-index: 1;\n    position: absolute;\n    top: 5px;\n    left: 5px;\n\n    .heart {\n        width: 55px;\n        height: 55px;\n    }\n"]);return J=function(){return e},e}function q(){var e=Object(v.a)(["\n    position: relative;\n    height: 100vh;\n"]);return q=function(){return e},e}var Y=O.a.div(q()),$=O.a.div(J()),F=O.a.div(B());function Q(e,n){switch(n.type){case i.RESTART:return h;case i.NEXT_ROUND:if(0===e.clothes)return Object(m.a)({},e,{screen:a.GAME_OVER_WIN});var t="/videos/".concat(e.clothes,".mp4");return Object(m.a)({},e,{videoUrl:t,screen:a.CHOICE});case i.CHOICE:var o=n.choice,s=r.PAPER,l=function(e,n){return e===n?c.DRAW:e-n===1||e-n===-2?c.WIN:c.LOSE}(o,s);return Object(m.a)({},e,{playerChoice:o,botChoice:s,matchResult:l,screen:a.RESULT});case i.CALCULATE:if(e.screen!==a.RESULT)return e;switch(e.matchResult){case c.WIN:var u=e.clothes-1;return Object(m.a)({},e,{clothes:u,screen:a.STRIP_VIDEO});case c.LOSE:var E=e.heart-1;return 0===E?Object(m.a)({},e,{heart:E,screen:a.GAME_OVER_LOSE}):Object(m.a)({},e,{heart:E,screen:a.CHOICE});case c.DRAW:return Object(m.a)({},e,{screen:a.CHOICE})}}return e}var Z=function(){var e=s.a.useReducer(Q,h),n=Object(E.a)(e,2),t=n[0],r=n[1],c={state:t,dispatch:r},o=s.a.createElement("img",{className:"clothes",alt:"clothes",src:"https://img.icons8.com/emoji/96/000000/womans-clothes.png"}),l=new Array(t.clothes);l.fill(o);var u=s.a.createElement("img",{alt:"heart",className:"heart",src:"https://img.icons8.com/plasticine/100/000000/like--v1.png"}),m=s.a.createElement("img",{alt:"empty-heart",className:"heart",src:"https://img.icons8.com/plasticine/100/000000/like--v2.png"}),p=new Array(h.heart);return p.fill(u,0,t.heart),p.fill(m,t.heart),s.a.createElement(f.Provider,{value:c},s.a.createElement(Y,null,s.a.createElement(F,null,l),s.a.createElement($,null,p),s.a.createElement(K,{play:t.screen===a.STRIP_VIDEO,videoUrl:t.videoUrl,onVideoEnded:function(){return r({type:i.NEXT_ROUND})}}),t.screen===a.CHOICE&&s.a.createElement(N,null),t.screen===a.RESULT&&s.a.createElement(V,null),t.screen===a.STRIP_VIDEO&&s.a.createElement(D,null),t.screen===a.GAME_OVER_WIN&&s.a.createElement(M,{screen:t.screen}),t.screen===a.GAME_OVER_LOSE&&s.a.createElement(M,{screen:t.screen})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.09ef6a59.chunk.js.map