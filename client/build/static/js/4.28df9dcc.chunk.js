(this["webpackJsonpall-in-agency"]=this["webpackJsonpall-in-agency"]||[]).push([[4],{138:function(e,t,i){},139:function(e,t,i){},140:function(e,t,i){"use strict";var s=i(16),c=i(1),a=i.n(c),n=i(3),o=i(8),r=i(2),l=i.n(r),d=i(23),g=i.n(d),m=i(15),u={tag:m.c,fluid:l.a.oneOfType([l.a.bool,l.a.string]),className:l.a.string,cssModule:l.a.object},j=function(e){var t=e.className,i=e.cssModule,s=e.fluid,c=e.tag,r=Object(o.a)(e,["className","cssModule","fluid","tag"]),l="container";!0===s?l="container-fluid":s&&(l="container-"+s);var d=Object(m.b)(g()(t,l),i);return a.a.createElement(c,Object(n.a)({},r,{className:d}))};j.propTypes=u,j.defaultProps={tag:"div"};var f=j,h=l.a.oneOfType([l.a.number,l.a.string]),b={tag:m.c,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:h,sm:h,md:h,lg:h,xl:h},p={tag:"div",widths:["xs","sm","md","lg","xl"]},x=function(e){var t=e.className,i=e.cssModule,s=e.noGutters,c=e.tag,r=e.form,l=e.widths,d=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),u=[];l.forEach((function(t,i){var s=e[t];if(delete d[t],s){var c=!i;u.push(c?"row-cols-"+s:"row-cols-"+t+"-"+s)}}));var j=Object(m.b)(g()(t,s?"no-gutters":null,r?"form-row":"row",u),i);return a.a.createElement(c,Object(n.a)({},d,{className:j}))};x.propTypes=b,x.defaultProps=p;var O=x,v=l.a.oneOfType([l.a.number,l.a.string]),w=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:v,offset:v})]),y={tag:m.c,xs:w,sm:w,md:w,lg:w,xl:w,className:l.a.string,cssModule:l.a.object,widths:l.a.array},N={tag:"div",widths:["xs","sm","md","lg","xl"]},T=function(e,t,i){return!0===i||""===i?e?"col":"col-"+t:"auto"===i?e?"col-auto":"col-"+t+"-auto":e?"col-"+i:"col-"+t+"-"+i},E=function(e){var t=e.className,i=e.cssModule,s=e.widths,c=e.tag,r=Object(o.a)(e,["className","cssModule","widths","tag"]),l=[];s.forEach((function(t,s){var c=e[t];if(delete r[t],c||""===c){var a=!s;if(Object(m.a)(c)){var n,o=a?"-":"-"+t+"-",d=T(a,t,c.size);l.push(Object(m.b)(g()(((n={})[d]=c.size||""===c.size,n["order"+o+c.order]=c.order||0===c.order,n["offset"+o+c.offset]=c.offset||0===c.offset,n)),i))}else{var u=T(a,t,c);l.push(u)}}})),l.length||l.push("col");var d=Object(m.b)(g()(t,l),i);return a.a.createElement(c,Object(n.a)({},r,{className:d}))};E.propTypes=y,E.defaultProps=N;var I=E,k=i(68),P=(i(138),i(0));t.a=function(e){var t=Object(c.useState)(""),i=Object(s.a)(t,2),a=(i[0],i[1],e.img),n=e.backgroundColor,o=e.name,r=e.title,l=e.description,d=e.leftImg,g=e.leftTitle,m=e.leftHeader,u=e.leftDesc,j=e.middleImg,h=e.middleTitle,b=e.middleHeader,p=e.middleDesc,x=e.rightImg,v=e.rightTitle,w=e.rightHeader,y=e.rightDesc,N=e.checkMsg,T=e.Project1,E=e.Project2,B=e.Project3,D=e.Project4,L=e.Project5,C=e.Project6,M=Object(c.useState)(1),U=Object(s.a)(M,2),W=U[0],Y=U[1],F=Object(c.useState)(!1),H=Object(s.a)(F,2),A=H[0],S=H[1],G=!1,_=0,R=0,z=function(){if(1===W){var e=document.getElementById("page1"),t=document.getElementById("left-Text"),i=document.getElementById("right-Text"),s=document.getElementById("middle-image"),c=document.getElementById("left-image"),a=document.getElementById("right-image"),n=document.getElementById("middle-Text"),o=document.getElementById("service-page2");e.classList.toggle("fixedDown"),o.classList.toggle("fixedUp"),t.classList.toggle("fixedUp"),i.classList.toggle("fixedUp"),s.classList.toggle("fixedUp"),c.classList.toggle("fixedUp"),a.classList.toggle("fixedUp"),n.classList.toggle("fixedUp"),window.scrollBy(0,window.innerHeight),Y(W+1)}},J=function(){if(2===W){var e=document.getElementById("service-page2"),t=document.getElementById("page1"),i=document.getElementById("left-Text"),s=document.getElementById("right-Text"),c=document.getElementById("middle-image"),a=document.getElementById("left-image"),n=document.getElementById("right-image"),o=document.getElementById("middle-Text");e.classList.toggle("fixedDown"),e.classList.toggle("fixedUp"),e.classList.toggle("fixedDown"),t.classList.toggle("fixedDown"),t.classList.toggle("fixedUp"),window.scrollTo({top:0,behavior:"smooth"}),i.classList.toggle("fixedUp"),s.classList.toggle("fixedUp"),c.classList.toggle("fixedUp"),a.classList.toggle("fixedUp"),n.classList.toggle("fixedUp"),o.classList.toggle("fixedUp"),Y(W-1)}};window.onwheel=function(e){if(console.log(window.matchMedia("(max-width: 700px)").matches),window.matchMedia("(max-width: 700px)").matches){var t=window.pageYOffset;console.log(t),console.log(t),A||(S(!0),1===W&&e.deltaY>0?q():2===W&&e.deltaY<0&&t<=window.innerHeight&&K()),setTimeout((function(){S(!1)}),1300)}else{var i=window.pageYOffset;console.log(i),console.log(i),A||(S(!0),1===W&&e.deltaY>0?z():2===W&&e.deltaY<0&&i<=window.innerHeight&&J()),setTimeout((function(){S(!1)}),1300)}};var q=function(){if(1===W){var e=document.getElementById("page1"),t=document.getElementById("left-Text"),i=document.getElementById("left-image"),s=document.getElementById("service-page2");e.classList.toggle("fixedDown"),window.scrollBy(0,window.innerHeight),s.classList.toggle("fixedUp"),t.classList.toggle("fixedUp"),i.classList.toggle("fixedUp"),Y(W+1)}},K=function(){if(2===W){var e=document.getElementById("service-page2"),t=document.getElementById("page1"),i=document.getElementById("left-Text"),s=document.getElementById("left-image");i.classList.toggle("fixedUp"),s.classList.toggle("fixedUp"),e.classList.toggle("fixedDown"),e.classList.toggle("fixedUp"),e.classList.toggle("fixedDown"),t.classList.toggle("fixedDown"),t.classList.toggle("fixedUp"),window.scrollTo({top:0,behavior:"smooth"}),Y(W-1)}};return Object(c.useEffect)((function(){return function(){}}),[]),Object(P.jsxs)("div",{onTouchStart:function(e){"BUTTON"!==e.target.tagName?_=e.changedTouches[0].screenY:G=!0},onTouchEnd:function(e){console.log(G),G?G=!1:(R=e.changedTouches[0].screenY,function(e){var t=window.pageYOffset;window.matchMedia("(max-width: 700px)").matches?A||(S(!0),console.log("touchendY",R),console.log("touchstartY",_),R>_&&2===W&&t<=window.innerHeight?(e.preventDefault(),K()):R<_&&1===W?(e.preventDefault(),q()):console.log("click event"),setTimeout((function(){S(!1)}),500)):A||(S(!0),console.log("touchendY",R),console.log("touchstartY",_),R>_&&2===W&&t<=window.innerHeight?(e.preventDefault(),J()):R<_&&1===W?(e.preventDefault(),z()):console.log("click event"),setTimeout((function(){S(!1)}),500))}(e))},style:{height:"100%"},children:[Object(P.jsxs)("div",{className:"service-pages12",style:{backgroundColor:n},children:[Object(P.jsxs)("div",{id:"page1",style:{backgroundColor:n},className:"service-page",children:[Object(P.jsx)("div",{id:"leftPage1",className:"page1 about-text-div leftPage",children:Object(P.jsx)("div",{className:"service",children:Object(P.jsxs)("div",{className:"innerEmployee",children:[Object(P.jsxs)("div",{children:[Object(P.jsx)("h1",{children:o}),Object(P.jsx)("h3",{children:r})]}),Object(P.jsxs)("div",{className:"underline",children:[Object(P.jsx)("i",{className:"fas fa-grip-lines"}),Object(P.jsx)("i",{className:"fas fa-grip-lines"}),Object(P.jsx)("i",{className:"fas fa-grip-lines"}),Object(P.jsx)("i",{className:"fas fa-grip-lines"}),Object(P.jsx)("i",{className:"fas fa-grip-lines"}),Object(P.jsx)("i",{className:"fas fa-grip-lines"}),Object(P.jsx)("i",{className:"fas fa-grip-lines"}),Object(P.jsx)("i",{className:"fas fa-grip-lines"})]}),Object(P.jsx)("p",{children:l})]})})}),Object(P.jsx)("div",{id:"rightPage1",className:"rightPage about-image-div",children:Object(P.jsx)("img",{src:"./assets/".concat(a),alt:"The Fishfinger Team"})}),Object(P.jsx)("button",{className:"about-button",onClick:function(){z()},children:Object(P.jsx)("i",{className:"fas fa-sort-down"})})]}),Object(P.jsxs)("div",{id:"service-page2",style:{backgroundColor:n},className:"service-second-page",children:[Object(P.jsxs)("div",{className:"main-brand left-middle-brand",children:[Object(P.jsxs)("div",{id:"left-Text",className:"middle-main-txt",children:[Object(P.jsx)("h5",{children:g}),Object(P.jsx)("h2",{children:m}),Object(P.jsx)("p",{children:u})]}),Object(P.jsx)("div",{id:"left-image",className:"middle-main-img",children:Object(P.jsx)("img",{src:"./assets/".concat(d),alt:"".concat(d)})})]}),Object(P.jsxs)("div",{className:"main-brand",children:[Object(P.jsx)("div",{id:"middle-image",children:Object(P.jsx)("img",{src:"./assets/".concat(j),alt:"".concat(j)})}),Object(P.jsxs)("div",{id:"middle-Text",children:[Object(P.jsx)("h5",{children:h}),Object(P.jsx)("h2",{children:b}),Object(P.jsx)("p",{children:p})]})]}),Object(P.jsxs)("div",{className:"main-brand right-middle-brand",children:[Object(P.jsxs)("div",{id:"right-Text",className:"middle-main-txt",children:[Object(P.jsx)("h5",{children:v}),Object(P.jsx)("h2",{children:w}),Object(P.jsx)("p",{children:y})]}),Object(P.jsx)("div",{id:"right-image",className:"middle-main-img",children:Object(P.jsx)("img",{src:"./assets/".concat(x),alt:"".concat(x)})})]})]})]}),Object(P.jsx)("div",{id:"service-page3",style:{backgroundColor:n},children:Object(P.jsxs)("h3",{children:["Check out some of our ",N]})}),Object(P.jsx)("div",{id:"service-page4",children:Object(P.jsx)(f,{fluid:!0,children:Object(P.jsxs)(O,{children:[Object(P.jsx)(I,{md:"6",lg:"4",className:"main-div-grid",children:Object(P.jsx)(T,{})}),Object(P.jsxs)(I,{md:"6",lg:"4",children:[Object(P.jsx)(O,{className:"main-div-grid",children:Object(P.jsx)(E,{})}),Object(P.jsx)(O,{className:"main-div-grid",children:Object(P.jsx)(B,{})})]}),Object(P.jsxs)(I,{md:"6",className:"hide-col",children:[Object(P.jsx)(O,{children:Object(P.jsx)(D,{})}),Object(P.jsx)(O,{children:Object(P.jsx)(L,{})})]}),Object(P.jsx)(I,{md:"6",lg:"4",className:"main-div-grid",children:Object(P.jsx)(C,{})})]})})}),Object(P.jsx)("div",{id:"service-page5",children:Object(P.jsxs)("h2",{children:["Tell us about your new project!"," ",Object(P.jsx)("i",{className:"cta-arrow fas fa-long-arrow-alt-right"})]})}),Object(P.jsx)(k.a,{})]})}},141:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"d",(function(){return o})),i.d(t,"i",(function(){return r})),i.d(t,"a",(function(){return l})),i.d(t,"f",(function(){return d})),i.d(t,"c",(function(){return g})),i.d(t,"e",(function(){return m})),i.d(t,"h",(function(){return u})),i.d(t,"g",(function(){return j}));var s=i(1),c=(i(139),i(0));var a=function(e){var t=e.img,i=e.backgroundColor,a=e.colorWhite,n=e.title,o=e.paragraph,r=e.projectPage;return Object(s.useEffect)((function(){return function(){}}),[]),Object(c.jsxs)("a",{href:"/".concat(r),children:[Object(c.jsx)("img",{src:"./assets/".concat(t),alt:"".concat(t)}),Object(c.jsx)("i",{className:"fas fa-caret-right ".concat("true"===a?"color-white":"")}),Object(c.jsx)("div",{className:"tile__inner ".concat("true"===a?"color-white":""),style:{backgroundColor:i},children:Object(c.jsxs)("div",{className:"tile__inner-middle",children:[Object(c.jsx)("h4",{className:"headline-9",children:n}),Object(c.jsx)("p",{className:"tile__description",children:o}),Object(c.jsx)("i",{className:"cta-arrow fas fa-long-arrow-alt-right"})]})})]})};function n(e){return Object(c.jsx)(a,{img:"cats-dogs.png",backgroundColor:"#ffe20c",colorWhite:"false",title:"Cats & Dogs - The Weather App",paragraph:"Mobile App Designs & Development",projectPage:"cats-dogs"})}function o(e){return Object(c.jsx)(a,{img:"experiments.png",backgroundColor:"#2480BE",colorWhite:"true",title:"The Insurance Experiments",paragraph:" Web Design & Illustration",projectPage:"experiments"})}function r(e){return Object(c.jsx)(a,{img:"xocola.png",backgroundColor:"#F2E41F",colorWhite:"false",title:"Xocola Chocolate",paragraph:"Brand Identity & Packaging",projectPage:"xocola"})}function l(e){return Object(c.jsx)(a,{img:"bellevee.png",backgroundColor:"#464541",colorWhite:"true",title:"The Bellevue Residences",paragraph:"Brand Identity & Print",projectPage:"bellevee"})}function d(e){return Object(c.jsx)(a,{img:"source-responsibly.jpg",backgroundColor:"#E1C28C",colorWhite:"false",title:"WWF Source Responsibly",paragraph:"Animation & Illustration",projectPage:"source-responsibly"})}function g(e){return Object(c.jsx)(a,{img:"comico.png",backgroundColor:"#EC1D32",colorWhite:"true",title:"Bradford Comico",paragraph:"Brand Identity and Print",projectPage:"comico"})}function m(e){return Object(c.jsx)(a,{img:"Listing-Wide_vmhkt.png",backgroundColor:"#e8f7f7",colorWhite:"false",title:"Element",paragraph:"Web Design & Animation",projectPage:"listing-wide"})}function u(e){return Object(c.jsx)(a,{img:"tea-circle-cover-short-work.jpg",backgroundColor:"#501D71",colorWhite:"true",title:"The Tea Circle",paragraph:"Web Design & Packaging",projectPage:"tea-circle"})}function j(e){return Object(c.jsx)(a,{img:"star-wars-cover-work.jpg",backgroundColor:"#000000",colorWhite:"true",title:"Adidas x Star Wars",paragraph:"T-Shirt & Clothing Design",projectPage:"star-wars"})}},146:function(e,t,i){},150:function(e,t,i){"use strict";i.r(t);var s=i(1),c=(i(146),i(140)),a=i(141),n=i(0);t.default=function(e){return Object(s.useEffect)((function(){return function(){}}),[]),Object(n.jsx)("div",{className:"motion",children:Object(n.jsx)(c.a,{img:"animation-service.gif",backgroundColor:"#15A9DE",name:"Motion",title:"Shake that money maker",description:"Reading text is boring, and the more intelligent of you will have already stopped... Our Fishfingers love making things move, and it's what we do best. Motion is an amazingly effective way of conveying concepts quickly and simply. We create animated videos, adverts, social campaigns and a whole lot more. If you're tired of seeing the same old static, pick up the Fishfinger phone.",leftImg:"Motion-Dave@3x.png",leftTitle:"A WORLD OF PURE IMAGINATION",leftHeader:"Master Storytellers",leftDesc:"Through animation, our Fishfingers create fantastical stories. Giving your brand strong character and compelling narrative will captivate the hearts and minds of your audience.",middleImg:"Motion-Chef@3x.png",middleTitle:"DON'T WATCH PAINT DRY",middleHeader:"Fun, Fun, Fun!",middleDesc:"Motion gets 'dem juices flowing and makes your dorsal fins stand on end. Our Fishfingers leap at the opportunity to transform even the most mundane subjects into 'must-see' animated content.",rightImg:"Motion-Fish@3x.png",rightTitle:"KEEP ON MOVING",rightHeader:"Animate Everything",rightDesc:"Products, services, mysterious prancing Germans, there are no limits to motion. Whether it's for your website, social campaigns or digital billboards, we'll get those tastebuds tingling.",checkMsg:"recent Social work...",Project1:a.b,Project2:a.f,Project3:a.d,Project4:a.e,Project5:a.a,Project6:a.i})})}}}]);
//# sourceMappingURL=4.28df9dcc.chunk.js.map