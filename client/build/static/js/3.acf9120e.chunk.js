(this["webpackJsonpall-in-agency"]=this["webpackJsonpall-in-agency"]||[]).push([[3],{137:function(s,e,t){},139:function(s,e,t){"use strict";t.r(e);var a=t(21),c=t(0),o=t.n(c),r=t(3),n=t(8),l=t(2),i=t.n(l),j=t(23),d=t.n(j),b=t(15),u={tag:b.c,fluid:i.a.bool,className:i.a.string,cssModule:i.a.object},x=function(s){var e=s.className,t=s.cssModule,a=s.tag,c=s.fluid,l=Object(n.a)(s,["className","cssModule","tag","fluid"]),i=Object(b.b)(d()(e,"jumbotron",!!c&&"jumbotron-fluid"),t);return o.a.createElement(a,Object(r.a)({},l,{className:i}))};x.propTypes=u,x.defaultProps={tag:"div"};var O=x,g={tag:b.c,fluid:i.a.oneOfType([i.a.bool,i.a.string]),className:i.a.string,cssModule:i.a.object},m=function(s){var e=s.className,t=s.cssModule,a=s.fluid,c=s.tag,l=Object(n.a)(s,["className","cssModule","fluid","tag"]),i="container";!0===a?i="container-fluid":a&&(i="container-"+a);var j=Object(b.b)(d()(e,i),t);return o.a.createElement(c,Object(r.a)({},l,{className:j}))};m.propTypes=g,m.defaultProps={tag:"div"};var f=m,h=i.a.oneOfType([i.a.number,i.a.string]),v={tag:b.c,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:h,sm:h,md:h,lg:h,xl:h},p={tag:"div",widths:["xs","sm","md","lg","xl"]},w=function(s){var e=s.className,t=s.cssModule,a=s.noGutters,c=s.tag,l=s.form,i=s.widths,j=Object(n.a)(s,["className","cssModule","noGutters","tag","form","widths"]),u=[];i.forEach((function(e,t){var a=s[e];if(delete j[e],a){var c=!t;u.push(c?"row-cols-"+a:"row-cols-"+e+"-"+a)}}));var x=Object(b.b)(d()(e,a?"no-gutters":null,l?"form-row":"row",u),t);return o.a.createElement(c,Object(r.a)({},j,{className:x}))};w.propTypes=v,w.defaultProps=p;var N=w,y=i.a.oneOfType([i.a.number,i.a.string]),T=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:y,offset:y})]),M={tag:b.c,xs:T,sm:T,md:T,lg:T,xl:T,className:i.a.string,cssModule:i.a.object,widths:i.a.array},E={tag:"div",widths:["xs","sm","md","lg","xl"]},L=function(s,e,t){return!0===t||""===t?s?"col":"col-"+e:"auto"===t?s?"col-auto":"col-"+e+"-auto":s?"col-"+t:"col-"+e+"-"+t},k=function(s){var e=s.className,t=s.cssModule,a=s.widths,c=s.tag,l=Object(n.a)(s,["className","cssModule","widths","tag"]),i=[];a.forEach((function(e,a){var c=s[e];if(delete l[e],c||""===c){var o=!a;if(Object(b.a)(c)){var r,n=o?"-":"-"+e+"-",j=L(o,e,c.size);i.push(Object(b.b)(d()(((r={})[j]=c.size||""===c.size,r["order"+n+c.order]=c.order||0===c.order,r["offset"+n+c.offset]=c.offset||0===c.offset,r)),t))}else{var u=L(o,e,c);i.push(u)}}})),i.length||i.push("col");var j=Object(b.b)(d()(e,i),t);return o.a.createElement(c,Object(r.a)({},l,{className:j}))};k.propTypes=M,k.defaultProps=E;var B=k,P=(t(137),t(1));e.default=function(s){var e=Object(c.useState)(""),t=Object(a.a)(e,2);return t[0],t[1],window.onscroll=function(){var s=document.getElementById("videoContainer"),e=document.getElementsByClassName("secondPage")[0],t=document.getElementById("fishfingerLogo");window.pageYOffset>190?(s.classList.add("orangeBack"),e.classList.add("displayTxt"),t.classList.add("moveLogo")):(s.classList.remove("orangeBack"),e.classList.remove("displayTxt"),t.classList.remove("moveLogo"))},Object(c.useEffect)((function(){return function(){}}),[]),Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)("container",{id:"videoContainer",children:[Object(P.jsx)("video",{width:"100%",loop:"true",autoplay:"autoplay",muted:!0,src:"./assets/Magicians_3_vzbge.mp4",type:"video/mp4",children:"Your browser does not support the video tag."}),Object(P.jsxs)("div",{id:"vidTxt",children:[Object(P.jsxs)("h1",{className:"lightBold",children:["We turn regular fish into",Object(P.jsx)("span",{className:"boldTxt",children:"MAGICANS"})]}),Object(P.jsx)("a",{onClick:function(){window.scrollTo({top:620,behavior:"smooth"})},children:Object(P.jsx)("i",{style:{cursor:"pointer"},className:"fas fa-sort-down"})})]}),Object(P.jsxs)(O,{className:"secondPage",children:[Object(P.jsxs)("div",{className:"secondTxt",children:[Object(P.jsxs)("div",{children:["We are an award-winning creative studio, based in London, specialising in ",Object(P.jsx)("b",{children:"design, motion, web and social."})]}),Object(P.jsx)("div",{children:"Our phenomenal team have completed work for:"})]}),Object(P.jsx)("br",{}),Object(P.jsx)("br",{}),Object(P.jsxs)(f,{children:[Object(P.jsxs)(N,{children:[Object(P.jsx)(B,{xs:"1"}),Object(P.jsx)(B,{xs:"1",children:Object(P.jsx)("img",{src:"./assets/nike.svg",alt:""})}),Object(P.jsx)(B,{xs:"1"}),Object(P.jsx)(B,{xs:"1",children:Object(P.jsx)("img",{src:"./assets/google.svg",alt:""})}),Object(P.jsx)(B,{xs:"1"}),Object(P.jsx)(B,{xs:"1",children:Object(P.jsx)("img",{src:"./assets/wwf.svg",alt:""})}),Object(P.jsx)(B,{xs:"1"}),Object(P.jsx)(B,{xs:"1",children:Object(P.jsx)("img",{src:"./assets/red-bull.svg",alt:""})}),Object(P.jsx)(B,{xs:"1"}),Object(P.jsx)(B,{xs:"1",children:Object(P.jsx)("img",{src:"./assets/king.svg",alt:""})}),Object(P.jsx)(B,{xs:"3"})]}),Object(P.jsx)("br",{}),Object(P.jsx)("br",{}),Object(P.jsxs)(N,{children:[Object(P.jsx)(B,{xs:"2"}),Object(P.jsx)(B,{xs:"1",children:Object(P.jsx)("img",{src:"./assets/adidas.svg",alt:""})}),Object(P.jsx)(B,{xs:"1"}),Object(P.jsx)(B,{xs:"1",children:Object(P.jsx)("img",{src:"./assets/riot-games.svg",alt:""})}),Object(P.jsx)(B,{xs:"1"}),Object(P.jsx)(B,{xs:"1",children:Object(P.jsx)("img",{src:"./assets/penguin.svg",alt:""})}),Object(P.jsx)(B,{xs:"1"}),Object(P.jsx)(B,{xs:"1",children:Object(P.jsx)("img",{src:"./assets/nhs.svg",alt:""})}),Object(P.jsx)(B,{xs:"1"})]})]}),Object(P.jsx)("br",{}),Object(P.jsx)("br",{}),Object(P.jsx)("button",{children:"FIND OUT MORE"})]})]})})}}}]);
//# sourceMappingURL=3.acf9120e.chunk.js.map