(this["webpackJsonpall-in-agency"]=this["webpackJsonpall-in-agency"]||[]).push([[3],{139:function(e,t,i){},140:function(e,t,i){},143:function(e,t,i){"use strict";i.r(t);var a=i(20),s=i(1),c=(i(139),i(0));var n=function(e){var t=Object(s.useState)(""),i=Object(a.a)(t,2);return i[0],i[1],Object(s.useEffect)((function(){return function(){}}),[]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{id:"page".concat(e.pageNumber),className:"about-page",children:[e.imgleft&&Object(c.jsx)("div",{id:"leftPage".concat(e.pageNumber),style:{backgroundColor:e.backgroundColorImg},className:"leftPage about-image-div",children:Object(c.jsx)("img",{width:"70%",src:"./assets/".concat(e.img),alt:"The Fishfinger Team"})}),Object(c.jsx)("div",{id:e.imgleft?"rightPage".concat(e.pageNumber):"leftPage".concat(e.pageNumber),style:{backgroundColor:e.backgroundColorTxt},className:"page".concat(e.pageNumber," about-text-div ").concat(e.imgleft?"rightPage":"leftPage"),children:Object(c.jsxs)("div",{className:"employee",children:[Object(c.jsx)("div",{className:"mobileSizeImage",children:Object(c.jsx)("img",{width:"50%",src:"./assets/".concat(e.img),alt:"The Fishfinger Team"})}),Object(c.jsxs)("div",{class:"innerEmployee",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:e.name}),Object(c.jsx)("h3",{className:"italic",children:e.position})]}),Object(c.jsxs)("div",{className:"underline",children:[Object(c.jsx)("i",{className:"fas fa-grip-lines"}),Object(c.jsx)("i",{className:"fas fa-grip-lines"}),Object(c.jsx)("i",{className:"fas fa-grip-lines"}),Object(c.jsx)("i",{className:"fas fa-grip-lines"}),Object(c.jsx)("i",{className:"fas fa-grip-lines"}),Object(c.jsx)("i",{className:"fas fa-grip-lines"}),Object(c.jsx)("i",{className:"fas fa-grip-lines"}),Object(c.jsx)("i",{className:"fas fa-grip-lines"})]}),Object(c.jsx)("p",{children:e.description}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:e.title1}),Object(c.jsx)("h6",{children:e.title1desc})]}),Object(c.jsxs)("div",{className:"displayNoneAtMobile",children:[Object(c.jsx)("h4",{children:e.title2}),Object(c.jsx)("h6",{children:e.title2desc})]}),Object(c.jsxs)("button",{class:"about-button",onClick:function(){e.scroll()},children:[" ",Object(c.jsxs)("span",{className:"displayNoneAtMobile",children:["Meet ",e.nextEmployee]}),Object(c.jsx)("br",{}),Object(c.jsx)("i",{className:"fas fa-sort-down"})]})]})]})}),e.imgright&&Object(c.jsx)("div",{id:"rightPage".concat(e.pageNumber),style:{backgroundColor:e.backgroundColorImg},className:"rightPage about-image-div",children:Object(c.jsx)("img",{width:"70%",src:"./assets/".concat(e.img),alt:"The Fishfinger Team"})})]})})};i(140);t.default=function(e){var t=Object(s.useState)(1),i=Object(a.a)(t,2),o=i[0],l=i[1],r=Object(s.useState)(!1),d=Object(a.a)(r,2),g=d[0],h=d[1],m=!1,b=function(e){if(o<8){var t=document.getElementById("page".concat(o)),i=document.getElementById("leftPage".concat(o)),a=document.getElementById("rightPage".concat(o));i.classList.toggle("fastfixedDown"),a.classList.toggle("slowfixedDown"),t.classList.toggle("fixedDown"),l(o+1)}},j=function(e){if(o>1){var t=document.getElementById("page".concat(o-1)),i=document.getElementById("leftPage".concat(o-1)),a=document.getElementById("rightPage".concat(o-1));i.classList.toggle("fastfixedDown"),a.classList.toggle("slowfixedDown"),t.classList.toggle("fixedDown"),l(o-1)}},u=0,f=0;return window.onwheel=function(e){g||(h(!0),e.deltaY>0?b():j(),setTimeout((function(){h(!1)}),1500))},Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{id:"About",onTouchStart:function(e){"BUTTON"!==e.target.tagName?u=e.changedTouches[0].screenY:m=!0},onTouchEnd:function(e){var t;m?m=!1:(f=e.changedTouches[0].screenY,t=e,g||(h(!0),console.log("touchendY",f),console.log("touchstartY",u),f>u?(t.preventDefault(),j(1)):f<u?(t.preventDefault(),b(1)):console.log("click event"),setTimeout((function(){h(!1)}),1500)))},className:"about",children:[Object(c.jsxs)("div",{id:"page1",className:"about-page",children:[Object(c.jsx)("div",{id:"leftPage1",className:"leftPage about-image-div",children:Object(c.jsx)("img",{width:"70%",src:"./assets/meet-the-team.png",alt:"The Fishfinger Team"})}),Object(c.jsxs)("div",{id:"rightPage1",className:"page1 rightPage about-text-div",children:[Object(c.jsx)("div",{className:"mobileSizeImage",children:Object(c.jsx)("img",{width:"50%",src:"./assets/meet-the-team.png",alt:"The Fishfinger Team"})}),Object(c.jsxs)("div",{className:"innerFirstAboutPage",children:[Object(c.jsx)("h1",{children:"Who's FishFinger?"}),Object(c.jsx)("button",{className:"button",onClick:b,children:"Discover More"})]})]})]}),Object(c.jsxs)("div",{id:"page2",className:"about-page",children:[Object(c.jsx)("div",{style:{backgroundColor:"#004A92"},className:"leftPage about-image-div",id:"leftPage2",children:Object(c.jsx)("img",{width:"70%",src:"./assets/meet-the-team-fallback.gif",alt:"The Fishfinger Team"})}),Object(c.jsxs)("div",{id:"rightPage2",style:{backgroundColor:"#01519B"},className:"page2 rightPage about-text-div",children:[Object(c.jsx)("div",{className:"mobileSizeImage",children:Object(c.jsx)("img",{width:"55%",src:"./assets/meet-the-team-fallback.gif",alt:"The Fishfinger Team"})}),Object(c.jsxs)("div",{className:"innerSecondAboutPage",children:[Object(c.jsxs)("div",{className:"secondPageHeading",children:[Object(c.jsx)("h1",{children:"We\u2019re Fishfinger!"}),Object(c.jsx)("h3",{children:"A creative agency like no other."})]}),Object(c.jsx)("p",{children:"We're a team of creatives that love nothing more than creating incredible stories. We specialise in branding, animation and web design; uniquely combining our skills to produce magical digital experiences. We don't do 'boring'. We pride ourselves on turning even the dullest subjects into must-see material."}),Object(c.jsx)("p",{children:"The Fishfingers are always ready to create something unforgettable."}),Object(c.jsxs)("button",{class:"about-button",onClick:b,children:[Object(c.jsx)("span",{className:"displayNoneAtMobile",children:"Meet the team"}),Object(c.jsx)("br",{}),Object(c.jsx)("i",{className:"fas fa-sort-down"})]})]})]})]}),Object(c.jsx)(n,{img:"le-chef-fallback.gif",imgright:!0,imgleft:!1,backgroundColorTxt:"#FF3C42",backgroundColorImg:"#FE4A4F",name:"Monsieur Le Chef",position:"CEO",title1:"Greatest Achievement:",title1desc:"Winning the Tour De France",title2:"Likes:",title2desc:"Fishing, cycling & food hygiene",description:"Our beloved CEO, head chef and former Tour de France winner, Monsieur Le Chef, has finely crafted a collection of the most supremely talented Fishfingers since records began. They bring exceptional creativity, endless enthusiasm and pinpoint focus to every project they undertake.",pageNumber:"3",scroll:b,nextEmployee:"Dave"}),Object(c.jsx)(n,{img:"dave-fallback.gif",imgright:!1,imgleft:!0,backgroundColorTxt:"#008AD8",backgroundColorImg:"#0290DA",name:"Dave",position:"Co-founder and Chief Blogger",title1:"Claim to Fame:",title1desc:"Donald Duck's stunt double",title2:"Favourite Pastime:",title2desc:"Moonlight waddles on the beach",description:"Monsieur Le Chef's best and only friend. Never seen without his cap, Dave is our chief blogger. Rumours of what's hidden under his headpiece are plentiful... a comb-over, Tupac Shakur or merely a passion for writing content...",pageNumber:"4",scroll:b,nextEmployee:"Andy"}),Object(c.jsx)(n,{img:"andy-fallback.gif",imgright:!0,imgleft:!1,backgroundColorTxt:"#0DB973",backgroundColorImg:"#3CB778",name:"Andy Warsole",position:"Creative Director",title1:"Greatest Achievement:",title1desc:"25m swimming badge",title2:"Dislikes:",title2desc:"Moonlight waddles on the beach",description:"Bullied at school because of the silent 'W' on his surname, Andy turned to art and graphic design. An award-winning creative genius, he will create a design masterpiece from anything.",pageNumber:"5",scroll:b,nextEmployee:"Wendy"}),Object(c.jsx)(n,{img:"wendy-fallback.gif",imgright:!1,imgleft:!0,backgroundColorTxt:"#FF3C42",backgroundColorImg:"#FE4A4F",name:"Wendy W. Wrasse",position:"Code Person",title1:"Greatest Achievement:",title1desc:"Solving the Da Vinci Code",title2:"Favourite Quote:",title2desc:"Give me a <br>",description:"Graduating with a C++ at code school, W.W.W takes charge of turning our Fishfingers' dreams into digital reality. Wendy has never left her desk and furiously bashes on her keyboard day and night developing websites endlessly.",pageNumber:"6",scroll:b,nextEmployee:"Cod"}),Object(c.jsx)(n,{img:"cod-sparrow-fallback.gif",imgright:!0,imgleft:!1,backgroundColorTxt:"#008AD8",backgroundColorImg:"#0290DA",name:"Cod & Sparrow",position:"Animator",title1:"The Ocean",title1desc:"Solving the Da Vinci Code",title2:"Favourite Operetta:",title2desc:"The Pirates of Penzance",description:"Cod may only have one eye, but that's what makes him the best 2D animator across the Seven Seas. When depth perception is required, his trusty bi-focal bird is always happy to cast an eye.",pageNumber:"7",scroll:b}),Object(c.jsxs)("div",{id:"page8",className:"about-page",children:[Object(c.jsx)("div",{id:"leftPage8",className:"leftPage about-image-div",children:Object(c.jsx)("img",{width:"70%",src:"./assets/see-what-we-do-static.png",alt:"The Fishfinger Team"})}),Object(c.jsxs)("div",{id:"rightPage8",className:" rightPage about-text-div",children:[Object(c.jsx)("div",{className:"mobileSizeImage",children:Object(c.jsx)("img",{width:"50%",src:"./assets/see-what-we-do-static.png",alt:"The Fishfinger Team"})}),Object(c.jsxs)("div",{className:"innerFirstAboutPage",children:[Object(c.jsx)("h1",{children:"See Our Work!"}),Object(c.jsx)("button",{className:"button",children:"Discover More"})]})]})]})]})})}}}]);
//# sourceMappingURL=3.ec28876a.chunk.js.map