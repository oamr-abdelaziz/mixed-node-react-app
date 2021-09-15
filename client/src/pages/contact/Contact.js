import React, { useState, useEffect } from "react";
import "./Contact.scss";

function ContactUs(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [scrolling, setScrolling] = useState(false);
  // const [buttonClickedFlag, setButtonClickedFlag] = useState(false);

  let buttonClickedFlag = false;
  //   useEffect(() => {
  //     // document.getElementById('About').onscroll = ()=>{scrollDown(2);}
  //     let about = document.getElementById('About');
  //     about && about.addEventListener('touchstart', handleTouchStart, false);

  //     about && about.addEventListener('touchend',handleTouchEnd, false);

  //   return () => {
  //     about && about.removeEventListener('touchend')
  //     about && about.removeEventListener('touchstart')
  //   };
  // }, [])

  const handleTouchStart = (event) => {
    if (event.target.tagName !== "BUTTON") {
      touchstartY = event.changedTouches[0].screenY;
    } else {
      // setButtonClickedFlag(true);
      buttonClickedFlag = true;
      // setTimeout(() => {
      //   window.removeEventListener('touchend');
      // }, 100);
    }
  };

  const handleTouchEnd = (event) => {
    console.log(buttonClickedFlag);
    if (buttonClickedFlag) {
      // setButtonClickedFlag(false);
      buttonClickedFlag = false;
    } else {
      // touchendX = event.changedTouches[0].screenX;
      touchendY = event.changedTouches[0].screenY;
      handleGesure(event);
    }
  };

  const scrollDown = () => {
    if (currentPage < 2) {
      let currPage = document.getElementById(`page${currentPage+1}`);
      // let lftPage = document.getElementById(`leftPage${currentPage}`);
      // let rightPage = document.getElementById(`rightPage${currentPage}`);

      // lftPage.classList.toggle('fastfixedDown');
      // rightPage.classList.toggle('slowfixedDown');
      currPage.classList.toggle("fixedDown");

      setCurrentPage(currentPage + 1);
    }
  };

  const scrollUp = () => {
    if (currentPage > 1) {
      let currPage = document.getElementById(`page${currentPage}`);
      //   let lftPage = document.getElementById(`leftPage${currentPage-1}`);
      //   let rightPage = document.getElementById(`rightPage${currentPage-1}`);

      //   lftPage.classList.toggle('fastfixedDown');
      //   rightPage.classList.toggle('slowfixedDown');
      currPage.classList.toggle("fixedDown");

      setCurrentPage(currentPage - 1);
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
    if (!scrolling) {
      setScrolling(true);
      console.log("touchendY", touchendY);
      console.log("touchstartY", touchstartY);

      if (touchendY > touchstartY) {
        e.preventDefault();
        scrollUp();
      } else if (touchendY < touchstartY) {
        e.preventDefault();
        scrollDown();
      } else {
        console.log("click event");
      }
      setTimeout(() => {
        setScrolling(false);
      }, 500);
    }
  }

  window.onwheel = function (event) {
    //    return window.onweheel = function(){ return false; }
    if (!scrolling) {
      setScrolling(true);

      if (event.deltaY > 0) {
        // down
        scrollDown();
      } else {
        // up
        scrollUp();
      }
      setTimeout(() => {
        setScrolling(false);
      }, 1500);
    }

    // return false;
  };
  //   window.onscrolldown = ()=>{
  //   window.onscrollup = ()=>{

  //     //   scrollDown(7);
  //     document.getElementById('page2').style.top='700';
  // }
  return (
    <>
      <div
        id="Contact"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="contact-page"
      >
        <div
          id="page1"
          className="about-page"
          style={{
            backgroundImage: `url(/assets/lights.png)`,
          }}
        >
          {/* <img className='light-image' alt='lights' src='./assets/lights.png'/> */}
          <div className="page1-contact-div">
            <div>
              <div>
                <h1>Contact us</h1>
              </div>
              <div className="contacts-data">
                <a href="mailto:hello@fishfinger.me" className='email' ><i class="fas fa-envelope"   style={{ marginRight: "8px" }}></i>hello@fishfinger.me</a>
                <a href="tel:4402083477777" >
                <i class="fas fa-phone"  style={{ marginRight: "8px" }}></i>+44 (0) 20 8347 7777
                </a>
              </div>
              <div>
                <button className="button">GET IN TOUCH</button>
              </div>
            <img className="contact" src="./assets/contact.gif" alt="contact" />
            </div>

            <button onClick={scrollDown} class="about-button">
              <i className="fas fa-sort-down"></i>
            </button>
          </div>
        </div>

        <div id="page2" className="about-page fixedDown">
        <div className="page2-contact-div">
              <div>
              <button onClick={scrollUp} class="about-button-top">
              <i class="fas fa-long-arrow-alt-up"></i>
            </button>
               
                <h2>
                  Want to send us presents?
                  <br />
                  Here's our details!
                </h2>
                <div>
                  <p itemscope="" itemtype="http://schema.org/PostalAddress">
                    
                    <span>Fishfinger Creative Agency</span> 
                    <br/>
                    <span itemprop="streetAddress">4 Bittacy Business Park</span> <br/>
                    <span itemprop="addressLocality">Bittacy Hill</span> <br/>
                    <span itemprop="addressRegion">London</span> <br/>
                    <span itemprop="postalCode">NW7 1BA</span>
                  </p>
                </div>
                <p>
                    <button className='button'>GET IN TOUCH</button>
                
                </p>
              </div>
            </div>
            <img
              src="./assets/castle.svg"
              alt=""
            />
          </div>
        </div>
    </>
  );
}

export default ContactUs;
