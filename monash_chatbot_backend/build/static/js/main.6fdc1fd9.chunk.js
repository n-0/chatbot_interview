(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),c=a(26),i=a(132),s=a(134),m=a(135),u=a(136),d=a(63),f=a.n(d),g=function(e){return console.log(e.navStatus),r.a.createElement(i.a,{position:"static"},r.a.createElement(s.a,null,r.a.createElement(m.a,{color:"inherit","aria-label":"Menu"},r.a.createElement(f.a,{onClick:function(){e.navStatus?e.setNav(!1):e.setNav(!0)}})),r.a.createElement(u.a,{variant:"h6"},"Chatbot")))},h=a(42),b=a(138),v=a(141),p=a(143),E=a(142),x=a(146),w=a(144),j=a(145),O=a(147),T=a(41),y=a.n(T),C=a(64),N=a(65),S=a.n(N);function k(){return(k=Object(C.a)(y.a.mark(function e(t,a){var n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.post("http://localhost:8080/dialogflow",{text:t,sessionId:a});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}var I=a(3),L=a(137),B=a(139),M=a(140),W=Object(O.a)(function(e){return{message:{textTransform:"none",marginTop:"10px"},right:{marginRight:"80%",borderColor:"blue"},left:{marginLeft:"80%",borderColor:"red"},card:{maxWidth:345},media:{height:140}}}),D=function(e){var t=W();return e.chatHistory.map(function(e){var a="bot"===e.from?Object(I.a)(t.message,t.left):Object(I.a)(t.message,t.right);return e.isText?r.a.createElement(L.a,{variant:"outlined",className:a},e.message):e.message.map(function(e){var a=e.card;return console.log(a.imageUri),r.a.createElement(b.a,{className:Object(I.a)(t.card,t.left)},r.a.createElement(B.a,null,r.a.createElement(M.a,{className:t.media,image:a.imageUri}),r.a.createElement(v.a,null,r.a.createElement(u.a,{gutterBottom:!0,variant:"h5",component:"h2"},a.title),r.a.createElement(u.a,{variant:"body2",color:"textSecondary",component:"p"},a.subtitle))),r.a.createElement(E.a,null,r.a.createElement(L.a,{size:"small",color:"primary"},console.log(a.buttons))))})})},H=Object(O.a)(function(e){return{send:{marginRight:"0",marginLeft:"auto"},sendMessage:{marginLeft:"0",paddingLeft:"0",width:"95%"},message:{textTransform:"none",marginTop:"10px"},right:{marginRight:"80%",borderColor:"blue"},left:{marginLeft:"80%",borderColor:"red"},chatContainer:{height:"400px",overflowY:"auto"},card:{maxWidth:345},media:{height:140}}}),R=function(e,t){return t?(e.data.fulfillmentText?(a=e.data.fulfillmentText,e.isText=!0):(a=e.data.fulfillmentMessages,e.isText=!1),{message:a,time:Date.now(),from:"bot",isText:e.isText}):{message:e,time:Date.now(),from:"user",isText:!0};var a},J=null,U=!1,z=function(e){var t=H(),a=Object(n.useState)(""),o=Object(c.a)(a,2),l=o[0],i=o[1],s=Object(n.useState)(!1),m=Object(c.a)(s,2),u=m[0],d=m[1],f=Object(n.useState)([{message:"Hello I am a chatbot",time:Date.now(),from:"bot",isText:!0}]),g=Object(c.a)(f,2),O=g[0],T=g[1];Object(n.useEffect)(function(){""!==l&&!0===u?function(e,t){return k.apply(this,arguments)}(l,J).then(function(e){var t=R(e,!0);e.data.sessionId&&(J=e.data.sessionId);var a=[].concat(Object(h.a)(O),[t]);d(!1),i(""),T(a)}).catch(function(e){U=!0}):d(!1)},[u,l,O]);var y=function(){if(O.length>0&&"bot"===O[O.length-1].from&&!1===U){var e=R(l,!1);T([].concat(Object(h.a)(O),[e])),d(!0)}};return r.a.createElement(b.a,null,r.a.createElement(v.a,null,r.a.createElement(p.a,{className:t.chatContainer},r.a.createElement(D,{chatHistory:O}))),r.a.createElement(E.a,null,r.a.createElement(x.a,{id:"chat-textfield",className:t.sendMessage,value:l,margin:"normal",label:"chat",variant:"outlined",placeholder:"Send message",classes:{input:{borderBottom:!1}},onChange:function(e){i(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&y()}}),r.a.createElement(w.a,{disabled:U||u,color:"primary","aria-label":"Send",className:t.send,onClick:function(){return y()}},r.a.createElement(j.a,null,"send"))))};var K=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a={navStatus:t[0],setNav:t[1]};return r.a.createElement("div",{className:"app"},r.a.createElement(g,a),r.a.createElement("div",null,r.a.createElement(z,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,t,a){e.exports=a(106)}},[[68,1,2]]]);
//# sourceMappingURL=main.6fdc1fd9.chunk.js.map