(this["webpackJsonpall-in-agency"]=this["webpackJsonpall-in-agency"]||[]).push([[4],{181:function(e,t,i){"use strict";var s=i(5),c=i(1),n=i(25),a=i(55),l=(i(182),i(0));t.a=function(e){var t=Object(c.useState)(""),i=Object(s.a)(t,2),o=(i[0],i[1],e.img),d=e.backgroundColor,g=e.name,r=e.title,m=e.description,f=e.leftImg,j=e.leftTitle,h=e.leftHeader,u=e.leftDesc,x=e.middleImg,b=e.middleTitle,p=e.middleHeader,O=e.middleDesc,v=e.rightImg,w=e.rightTitle,y=e.rightHeader,I=e.rightDesc,T=e.checkMsg,N=e.Project1,E=e.Project2,L=e.Project3,B=e.Project4,P=e.Project5,U=e.Project6,D=Object(c.useState)(1),k=Object(s.a)(D,2),M=k[0],Y=k[1],H=Object(c.useState)(!1),C=Object(s.a)(H,2),F=C[0],A=C[1],S=!1,G=0,R=0,W=function(){if(1===M){var e=document.getElementById("page1"),t=document.getElementById("left-Text"),i=document.getElementById("right-Text"),s=document.getElementById("middle-image"),c=document.getElementById("left-image"),n=document.getElementById("right-image"),a=document.getElementById("middle-Text"),l=document.getElementById("service-page2");e.classList.toggle("fixedDown"),l.classList.toggle("fixedUp"),t.classList.toggle("fixedUp"),i.classList.toggle("fixedUp"),s.classList.toggle("fixedUp"),c.classList.toggle("fixedUp"),n.classList.toggle("fixedUp"),a.classList.toggle("fixedUp"),window.scrollBy(0,window.innerHeight),Y(M+1)}},J=function(){if(2===M){var e=document.getElementById("service-page2"),t=document.getElementById("page1"),i=document.getElementById("left-Text"),s=document.getElementById("right-Text"),c=document.getElementById("middle-image"),n=document.getElementById("left-image"),a=document.getElementById("right-image"),l=document.getElementById("middle-Text");e.classList.toggle("fixedDown"),e.classList.toggle("fixedUp"),e.classList.toggle("fixedDown"),t.classList.toggle("fixedDown"),t.classList.toggle("fixedUp"),window.scrollTo({top:0,behavior:"smooth"}),i.classList.toggle("fixedUp"),s.classList.toggle("fixedUp"),c.classList.toggle("fixedUp"),n.classList.toggle("fixedUp"),a.classList.toggle("fixedUp"),l.classList.toggle("fixedUp"),Y(M-1)}};window.onwheel=function(e){if(console.log(window.matchMedia("(max-width: 700px)").matches),window.matchMedia("(max-width: 700px)").matches){var t=window.pageYOffset;console.log(t),console.log(t),F||(A(!0),1===M&&e.deltaY>0?q():2===M&&e.deltaY<0&&t<=window.innerHeight&&z()),setTimeout((function(){A(!1)}),1300)}else{var i=window.pageYOffset;console.log(i),console.log(i),F||(A(!0),1===M&&e.deltaY>0?W():2===M&&e.deltaY<0&&i<=window.innerHeight&&J()),setTimeout((function(){A(!1)}),1300)}};var q=function(){if(1===M){var e=document.getElementById("page1"),t=document.getElementById("left-Text"),i=document.getElementById("left-image"),s=document.getElementById("service-page2");e.classList.toggle("fixedDown"),window.scrollBy(0,window.innerHeight),s.classList.toggle("fixedUp"),t.classList.toggle("fixedUp"),i.classList.toggle("fixedUp"),Y(M+1)}},z=function(){if(2===M){var e=document.getElementById("service-page2"),t=document.getElementById("page1"),i=document.getElementById("left-Text"),s=document.getElementById("left-image");i.classList.toggle("fixedUp"),s.classList.toggle("fixedUp"),e.classList.toggle("fixedDown"),e.classList.toggle("fixedUp"),e.classList.toggle("fixedDown"),t.classList.toggle("fixedDown"),t.classList.toggle("fixedUp"),window.scrollTo({top:0,behavior:"smooth"}),Y(M-1)}};return Object(c.useEffect)((function(){return function(){}}),[]),Object(l.jsxs)("div",{onTouchStart:function(e){"BUTTON"!==e.target.tagName?G=e.changedTouches[0].screenY:S=!0},onTouchEnd:function(e){console.log(S),S?S=!1:(R=e.changedTouches[0].screenY,function(e){var t=window.pageYOffset;window.matchMedia("(max-width: 700px)").matches?F||(A(!0),console.log("touchendY",R),console.log("touchstartY",G),R>G&&2===M&&t<=window.innerHeight?(e.preventDefault(),z()):R<G&&1===M?(e.preventDefault(),q()):console.log("click event"),setTimeout((function(){A(!1)}),500)):F||(A(!0),console.log("touchendY",R),console.log("touchstartY",G),R>G&&2===M&&t<=window.innerHeight?(e.preventDefault(),J()):R<G&&1===M?(e.preventDefault(),W()):console.log("click event"),setTimeout((function(){A(!1)}),500))}(e))},style:{height:"100%"},children:[Object(l.jsxs)("div",{className:"service-pages12",style:{backgroundColor:d},children:[Object(l.jsxs)("div",{id:"page1",style:{backgroundColor:d},className:"service-page",children:[Object(l.jsx)("div",{id:"leftPage1",className:"page1 about-text-div leftPage",children:Object(l.jsx)("div",{className:"service",children:Object(l.jsxs)("div",{className:"innerEmployee",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:g}),Object(l.jsx)("h3",{children:r})]}),Object(l.jsxs)("div",{className:"underline",children:[Object(l.jsx)("i",{className:"fas fa-grip-lines"}),Object(l.jsx)("i",{className:"fas fa-grip-lines"}),Object(l.jsx)("i",{className:"fas fa-grip-lines"}),Object(l.jsx)("i",{className:"fas fa-grip-lines"}),Object(l.jsx)("i",{className:"fas fa-grip-lines"}),Object(l.jsx)("i",{className:"fas fa-grip-lines"}),Object(l.jsx)("i",{className:"fas fa-grip-lines"}),Object(l.jsx)("i",{className:"fas fa-grip-lines"})]}),Object(l.jsx)("p",{children:m})]})})}),Object(l.jsx)("div",{id:"rightPage1",className:"rightPage about-image-div",children:Object(l.jsx)("img",{src:"./assets/".concat(o),alt:"The Fishfinger Team"})}),Object(l.jsx)("button",{className:"about-button",onClick:function(){W()},children:Object(l.jsx)("i",{className:"fas fa-sort-down"})})]}),Object(l.jsxs)("div",{id:"service-page2",style:{backgroundColor:d},className:"service-second-page",children:[Object(l.jsxs)("div",{className:"main-brand left-middle-brand",children:[Object(l.jsxs)("div",{id:"left-Text",className:"middle-main-txt",children:[Object(l.jsx)("h5",{children:j}),Object(l.jsx)("h2",{children:h}),Object(l.jsx)("p",{children:u})]}),Object(l.jsx)("div",{id:"left-image",className:"middle-main-img",children:Object(l.jsx)("img",{src:"./assets/".concat(f),alt:"".concat(f)})})]}),Object(l.jsxs)("div",{className:"main-brand",children:[Object(l.jsx)("div",{id:"middle-image",children:Object(l.jsx)("img",{src:"./assets/".concat(x),alt:"".concat(x)})}),Object(l.jsxs)("div",{id:"middle-Text",children:[Object(l.jsx)("h5",{children:b}),Object(l.jsx)("h2",{children:p}),Object(l.jsx)("p",{children:O})]})]}),Object(l.jsxs)("div",{className:"main-brand right-middle-brand",children:[Object(l.jsxs)("div",{id:"right-Text",className:"middle-main-txt",children:[Object(l.jsx)("h5",{children:w}),Object(l.jsx)("h2",{children:y}),Object(l.jsx)("p",{children:I})]}),Object(l.jsx)("div",{id:"right-image",className:"middle-main-img",children:Object(l.jsx)("img",{src:"./assets/".concat(v),alt:"".concat(v)})})]})]})]}),Object(l.jsx)("div",{id:"service-page3",style:{backgroundColor:d},children:Object(l.jsxs)("h3",{children:["Check out some of our ",T]})}),Object(l.jsx)(a.a,{Project1:N,Project2:E,Project3:L,Project4:B,Project5:P,Project6:U}),Object(l.jsx)(n.a,{})]})}},182:function(e,t,i){},187:function(e,t,i){},192:function(e,t,i){"use strict";i.r(t);var s=i(1),c=(i(187),i(181)),n=i(8),a=i(0);t.default=function(e){return Object(s.useEffect)((function(){return function(){}}),[]),Object(a.jsx)("div",{className:"motion",children:Object(a.jsx)(c.a,{img:"animation-service.gif",backgroundColor:"#15A9DE",name:"Motion",title:"Shake that money maker",description:"Reading text is boring, and the more intelligent of you will have already stopped... Our Fishfingers love making things move, and it's what we do best. Motion is an amazingly effective way of conveying concepts quickly and simply. We create animated videos, adverts, social campaigns and a whole lot more. If you're tired of seeing the same old static, pick up the Fishfinger phone.",leftImg:"Motion-Dave@3x.png",leftTitle:"A WORLD OF PURE IMAGINATION",leftHeader:"Master Storytellers",leftDesc:"Through animation, our Fishfingers create fantastical stories. Giving your brand strong character and compelling narrative will captivate the hearts and minds of your audience.",middleImg:"Motion-Chef@3x.png",middleTitle:"DON'T WATCH PAINT DRY",middleHeader:"Fun, Fun, Fun!",middleDesc:"Motion gets 'dem juices flowing and makes your dorsal fins stand on end. Our Fishfingers leap at the opportunity to transform even the most mundane subjects into 'must-see' animated content.",rightImg:"Motion-Fish@3x.png",rightTitle:"KEEP ON MOVING",rightHeader:"Animate Everything",rightDesc:"Products, services, mysterious prancing Germans, there are no limits to motion. Whether it's for your website, social campaigns or digital billboards, we'll get those tastebuds tingling.",checkMsg:"recent Social work...",Project1:n.b,Project2:n.j,Project3:n.d,Project4:n.g,Project5:n.a,Project6:n.m})})}}}]);
//# sourceMappingURL=4.31c9614d.chunk.js.map