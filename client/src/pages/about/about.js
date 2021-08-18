import React, { useState, useEffect } from "react";
import Employee from "../../components/Employee/Employee";
import "./about.scss";

function About(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [scrolling, setScrolling] = useState(false);
  // const [buttonClickedFlag, setButtonClickedFlag] = useState(false);

  let buttonClickedFlag = false;
  useEffect(() => {
    // document.getElementById('About').onscroll = ()=>{scrollDown(2);}
    window && window.addEventListener('touchstart', handleTouchStart, false);
  
    window && window.addEventListener('touchend',handleTouchEnd, false); 
  
  return () => {
    window && window.removeEventListener('touchend')
    window && window.removeEventListener('touchstart')
  };
}, [])



const handleTouchStart =(event)=>{
  if (event.target.tagName !== "BUTTON") {
  
    touchstartY = event.changedTouches[0].screenY;
  }
  else{
    // setButtonClickedFlag(true);
    buttonClickedFlag = true;
    // setTimeout(() => {
    //   window.removeEventListener('touchend'); 
    // }, 100);

  }
}

const handleTouchEnd =(event)=>{
  if(buttonClickedFlag){
    // setButtonClickedFlag(false);
    buttonClickedFlag = false;
  }
  else{
    // touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesure(event);
  }
}


  const scrollDown = () => {
      if(currentPage<8){
        let currPage = document.getElementById(`page${currentPage}`);
        let lftPage = document.getElementById(`leftPage${currentPage}`);
        let rightPage = document.getElementById(`rightPage${currentPage}`);

        lftPage.classList.toggle('fastfixedDown');
        rightPage.classList.toggle('slowfixedDown');
        currPage.classList.toggle('fixedDown')

        setCurrentPage(currentPage+1);
      }
};

const scrollUp = () => {
    if(currentPage>1){
    let currPage = document.getElementById(`page${currentPage-1}`);
    let lftPage = document.getElementById(`leftPage${currentPage-1}`);
    let rightPage = document.getElementById(`rightPage${currentPage-1}`);

    lftPage.classList.toggle('fastfixedDown');
    rightPage.classList.toggle('slowfixedDown');
    currPage.classList.toggle('fixedDown');
    
   
    setCurrentPage(currentPage-1);
    }
};


// let y1 =0;
// let y2=0;

// window.addEventListener('touchmove', function(event) {
  
//     // touchendX = event.changedTouches[0].screenX;
//     y1 = event.changedTouches[0].screenY;
//     setTimeout(() => {
//       y2 = event.changedTouches[0].screenY;
//       handleGesure(event);

//     }, 4); 
// }, false); 

// function handleGesure(e) {
//     // if (touchendX < touchstartX) {
//     //     alert(swiped + 'left!');
//     // }
//     // if (touchendX > touchstartX) {
//     //     alert(swiped + 'right!');
//     // }
//     if (e.target.tagName !== "button") {
//       e.preventDefault(); 
//       if(!scrolling){
//         setScrolling(true);  
//         console.log('y2', y2);
//         console.log('y1', y1);
  
//       if (y2 < y1) {
//         scrollDown()
  
//       }
//       else if (y2 > y1) {
//         scrollUp()
//       }
//       setTimeout(()=>{setScrolling(false);},1500)    
//     } 
//   }
//   else {
//     console.log("this makes me a click event, most likely")
//   }
// }

// let touchstartX = 0;
let touchstartY = 0;
// let touchendX = 0;
let touchendY = 0;

// let gesuredZone = document.getElementById('About');


function handleGesure(e) {
    // if (touchendX < touchstartX) {
    //     alert(swiped + 'left!');
    // }
    // if (touchendX > touchstartX) {
    //     alert(swiped + 'right!');
    // }
    if(!scrolling){
      setScrolling(true);  
      console.log('touchendY', touchendY);
      console.log('touchstartY', touchstartY);

    if (touchendY > touchstartY) {
      e.preventDefault();
      scrollUp()

    }
    else if (touchendY < touchstartY) {
      e.preventDefault();
      scrollDown()
    }
    else{
      console.log('click event');
    }
    setTimeout(()=>{setScrolling(false);},1500)     

  }
}


window.onwheel = function(event) {
//    return window.onwheel = function(){ return false; }
    if(!scrolling){
    setScrolling(true);    

    if (event.deltaY > 0) {
      // down
      scrollDown()
    } else {
      // up
     scrollUp()
    }
    setTimeout(()=>{setScrolling(false);},1500)     

}
    
    // return false;
  }
//   window.onscrolldown = ()=>{
//   window.onscrollup = ()=>{

//     //   scrollDown(7);
//     document.getElementById('page2').style.top='700';    
// } 
  return (
    <>
      <div id='About' className="about">
        <div id="page1" className="about-page">
          <div id="leftPage1" className="leftPage about-image-div">
            <img
              width="70%"
              src="./assets/meet-the-team.png"
              alt="The Fishfinger Team"
            />
          </div>
          <div id='rightPage1' className=" rightPage about-text-div">
          <div className='mobileSizeImage'>
                      <img width="50%"  src="./assets/meet-the-team.png" alt="The Fishfinger Team"/>

          </div>
          <div className='innerFirstAboutPage'>
              <h1>Who's FishFinger?</h1>
              <button  className='button' onClick={scrollDown}>Discover More</button>
          </div>
          </div>
        </div>
        <div id="page2" className="about-page">
          <div
            style={{ backgroundColor: "#004A92" }}
            className="leftPage about-image-div"
            id="leftPage2"

          >
            <img
              width="70%"
              src="./assets/meet-the-team-fallback.gif"
              alt="The Fishfinger Team"
            />
          </div>
          <div
          id='rightPage2'
            style={{ backgroundColor: "#01519B" }}
            className="rightPage about-text-div"
          >
            <div className='mobileSizeImage'>
                 <img width="55%"  src="./assets/meet-the-team-fallback.gif" alt="The Fishfinger Team"/>

            </div>
            <div className='innerSecondAboutPage' >
                <div className='secondPageHeading'>
                    <h1>We’re Fishfinger!</h1>
                    <h3>A creative agency like no other.</h3>
                </div>
              <p>
                We're a team of creatives that love nothing more than creating
                incredible stories. We specialise in branding, animation and web
                design; uniquely combining our skills to produce magical digital
                experiences. We don't do 'boring'. We pride ourselves on turning
                even the dullest subjects into must-see material.
              </p>
              <p>
                The Fishfingers are always ready to create something
                unforgettable.
              </p>
              <button class='about-button' onClick={scrollDown}><span  className='displayNoneAtMobile'>Meet the team</span><br/><i className="fas fa-sort-down"></i></button>
            </div>
          </div>
        </div>
        <Employee

          img="le-chef-fallback.gif"
          imgright={true}
          imgleft={false}
          backgroundColorTxt="#FF3C42"
          backgroundColorImg="#FE4A4F"
          name="Monsieur Le Chef"
          position="CEO"
          title1="Greatest Achievement:"
          title1desc="Winning the Tour De France"
          title2="Likes:"
          title2desc="Fishing, cycling & food hygiene"
          description="Our beloved CEO, head chef and former Tour de France winner, Monsieur Le Chef, has finely crafted a collection of the most supremely talented Fishfingers since records began. They bring exceptional creativity, endless enthusiasm and pinpoint focus to every project they undertake."
          pageNumber="3"
          scroll={scrollDown}
          nextEmployee='Dave'
        />

<Employee
          img="dave-fallback.gif"
          imgright={false}
          imgleft={true}
          backgroundColorTxt="#008AD8"
          backgroundColorImg="#0290DA"
          name="Dave"
          position="Co-founder and Chief Blogger"
          title1="Claim to Fame:"
          title1desc="Donald Duck's stunt double"
          title2="Favourite Pastime:"
          title2desc="Moonlight waddles on the beach"
          description="Monsieur Le Chef's best and only friend. Never seen without his cap, Dave is our chief blogger. Rumours of what's hidden under his headpiece are plentiful... a comb-over, Tupac Shakur or merely a passion for writing content..."
          pageNumber="4"
          scroll={scrollDown}
          nextEmployee='Andy'

        />

<Employee
          img="andy-fallback.gif"
          imgright={true}
          imgleft={false}
          backgroundColorTxt="#0DB973"
          backgroundColorImg="#3CB778"
          name="Andy Warsole"
          position="Creative Director"
          title1="Greatest Achievement:"
          title1desc="25m swimming badge"
          title2="Dislikes:"
          title2desc="Moonlight waddles on the beach"
          description="Bullied at school because of the silent 'W' on his surname, Andy turned to art and graphic design. An award-winning creative genius, he will create a design masterpiece from anything."
          pageNumber="5"
          scroll={scrollDown}
          nextEmployee='Wendy'

        />

<Employee
          img="wendy-fallback.gif"
          imgright={false}
          imgleft={true}
          backgroundColorTxt="#FF3C42"
          backgroundColorImg="#FE4A4F"
          name="Wendy W. Wrasse"
          position="Code Person"
          title1="Greatest Achievement:"
          title1desc="Solving the Da Vinci Code"
          title2="Favourite Quote:"
          title2desc="Give me a <br>"
          description="Graduating with a C++ at code school, W.W.W takes charge of turning our Fishfingers' dreams into digital reality. Wendy has never left her desk and furiously bashes on her keyboard day and night developing websites endlessly."
          pageNumber="6"
          scroll={scrollDown}
          nextEmployee='Cod'

        />

<Employee
          img="cod-sparrow-fallback.gif"
          imgright={true}
          imgleft={false}
          backgroundColorTxt="#008AD8"
          backgroundColorImg="#0290DA"
          name="Cod & Sparrow"
          position="Animator"
          title1="The Ocean"
          title1desc="Solving the Da Vinci Code"
          title2="Favourite Operetta:"
          title2desc="The Pirates of Penzance"
          description="Cod may only have one eye, but that's what makes him the best 2D animator across the Seven Seas. When depth perception is required, his trusty bi-focal bird is always happy to cast an eye."
          pageNumber="7"
          scroll={scrollDown}
        />
        <div id="page8" className="about-page">
          <div id="leftPage8" className="leftPage about-image-div">
            <img
              width="70%"
              src="./assets/see-what-we-do-static.png"
              alt="The Fishfinger Team"
            />
          </div>
          <div id='rightPage8' className=" rightPage about-text-div">
            <div className='mobileSizeImage'>
                <img width="50%"  src="./assets/see-what-we-do-static.png" alt="The Fishfinger Team"/>
            </div>
            <div className='innerFirstAboutPage'>
              <h1>See Our Work!</h1>
              <button  className='button'>Discover More</button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default About;
